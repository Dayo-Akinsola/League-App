const Player = require('../../models/player');
const Match = require('../../models/match');
const Champion = require('../../models/champion');
const PlayerSummonerIds = require('../apiCalls/playerSummonerIds');
const ChampionStats = require('../getChampionStats');
const getUniqueId = require('../apiCalls/getUniqueId');
const MatchInfo = require('../apiCalls/getMatchInfo');
const { RateLimiter } = require('limiter');
const fetchAndRetryIfNecessary = require('../errorHandlers');
const getRank = require('./getRank');
const { default: axios } = require('axios');

/* Responsible for calling the api endpoint modules and storing data from the calls in the player, match and champion databases */
module.exports = Storage = () => {

  const collectSummonerIds = async () => {
    const tiers = ['IRON', 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND', 'master', 'grandmaster', 'challenger'];
    const rank = await getRank();
    const pendingRequests = [];
    tiers.forEach((tier) => {
      const playerSummonerIds = PlayerSummonerIds(tier, rank);
      const summonerIds = tier.toUpperCase() === tier ? playerSummonerIds.getSummonerIds() : playerSummonerIds.getEliteSummonerIds();
      pendingRequests.push(summonerIds);
    });

    const summonerIds = await Promise.all(pendingRequests);
    const allSummonerIds = [].concat(...summonerIds);
    return allSummonerIds;
  };

  /* Allows for only 1 api request to be made every 1.3 seconds */
  const limiter = new RateLimiter({ tokensPerInterval: 1, interval: 1300 });

  const playerStorage = async () => {
    const summonerIds = await collectSummonerIds();
    for (let i = 0; i < summonerIds.length; i++) {
      await limiter.removeTokens(1);
      const uniqueId = await fetchAndRetryIfNecessary(() => getUniqueId(summonerIds[i]));
      console.log(`${i}: ${uniqueId}`);
      const playerMatchIds = await fetchAndRetryIfNecessary(() => MatchInfo.getPlayerMatchIds(uniqueId));
      console.log(`${i}: ${playerMatchIds}`);

      if (playerMatchIds && playerMatchIds.length > 0) {
        const player = new Player({
          summonerId: summonerIds[i],
          uniqueId: uniqueId,
          matchIds: playerMatchIds,
        });

        await player.save();
        console.log('player saved');
      }

      else {
        console.log('player has no recent matches');
      }

    };
  };

  const matchStorage = async () => {
    const players = await Player.find({});
    /* Deletes matches from the collection that are greater than a month old in ms */
    await Match.deleteMany().where('matchData.info.gameCreation').lt(Date.now() - 2629743833);
    for (const player of players) {
      const playerMatchIds = player.matchIds;

      for (const matchId of playerMatchIds) {
        const isMatchInDb = await Match.exists({ matchId: matchId });
        if (!isMatchInDb) {
          try {
            const { freeStorageSpace, capped, avgObjSize } = await Match.collection.stats({ scale: 1024 });
            if ( freeStorageSpace <= avgObjSize + 1000 || capped) {
              throw 'Collection at max capacity';
            }
            await limiter.removeTokens(1);
            const matchData = await fetchAndRetryIfNecessary(() => MatchInfo.getMatchData(matchId));

            const participants = matchData.info.participants;

            /* Extracts relevant stats from match data */
            const mappedParticipants = participants.map((participant) => {
              const participantInfo = {
                championName: participant.championName,
                assists: participant.assists,
                deaths: participant.deaths,
                kills: participant.kills,
                item0: participant.item0, 
                item1: participant.item1, 
                item2: participant.item2, 
                item3: participant.item3, 
                item4: participant.item4, 
                item5: participant.item5, 
                item6: participant.item6, 
                magicDamageDealtToChampions: participant.magicDamageDealtToChampions,
                physicalDamageDealtToChampions: participant.physicalDamageDealtToChampions,
                trueDamageDealtToChampions: participant.trueDamageDealtToChampions,
                totalDamageDealtToChampions: participant.totalDamageDealtToChampions,
                teamPosition: participant.teamPosition,
                win: participant.win,
              }
              
              return participantInfo;
            });

            const match = new Match({
              matchId: matchId,
              matchData: {
                info: {
                  gameCreation: matchData.info.gameCreation,
                  participants: mappedParticipants,
                }
              }
            });
            await match.save();
            console.log('match saved');
          }
          catch (e) {
            console.log(e.message);

            if (e.message === 'Collection at max capacity') {
              return;
            }
          }
        }
        else {
          console.log('match already in database');
        }
      }
    }
    await Player.deleteMany({});
  };

  const championStorage = async () => {
    const versionsResponse = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
    const latestVersion = versionsResponse.data[0];
    const allChampionsResponse = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
    const allChampions = allChampionsResponse.data.data;
    for (let championId in allChampions) {
      let championInstance;
      if (championId === 'Fiddlesticks') {
        championInstance = new ChampionStats('FiddleSticks');
      }
      else {
        championInstance = new ChampionStats(championId);
      }
      const championStats = await championInstance.getChampionStats();

      const isChampionInDb = await Champion.exists({ id: championId });
      if (isChampionInDb) {
        const champion = await Champion.findOne({ id: championId });
        champion.overwrite({
          id: championId,
          name: allChampions[championId].name,
          winRate: championStats.winRate,
          pickRate: championStats.pickRate,
          damagePerMatch: championStats.damagePerMatch,
          kdaRatio: championStats.kdaRatio,
          lane: championStats.lane,
          itemChoices: championStats.itemChoices,
          matchUps: championStats.matchUps,
        });
        await champion.save();
        console.log(`${championId} has been updated`);
      }
      else {
        const champion = new Champion({
          id: championId,
          name: allChampions[championId].name,
          winRate: championStats.winRate,
          pickRate: championStats.pickRate,
          damagePerMatch: championStats.damagePerMatch,
          kdaRatio: championStats.kdaRatio,
          lane: championStats.lane,
          itemChoices: championStats.itemChoices,
          matchUps: championStats.matchUps,
        });
        await champion.save();
        console.log(`${championId} has been saved to the database`);
      }
    }
  };

  return {
    playerStorage,
    matchStorage,
    championStorage,
  };
}

