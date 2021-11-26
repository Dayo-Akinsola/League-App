const Player = require('../models/player');
const Match = require('../models/match');
const Champion = require('../models/champion');
const fetchAndRetryIfNecessary = require('../errorHandlers');
const ChampionStats = require('../getChampionStats');
const { default: axios } = require('axios');
const getUniqueId = require('../apiCalls/getUniqueId');
const MatchInfo = require('../apiCalls/getMatchInfo');
const collectSummonerIds = require('./collectSummonerIds');
const { RateLimiter } = require('limiter');


const Storage = () => {
  /* Allows for only 1 api request to be made every 1.5 seconds */
  const limiter = new RateLimiter({ tokensPerInterval: 1, interval: 1000 });

  const playerStorage = async () => {
    const summonerIds = await collectSummonerIds();
    await Player.deleteMany({});
    for ( let i = 0; i < summonerIds.length; i++) {
      await limiter.removeTokens(1);
      const uniqueId = await fetchAndRetryIfNecessary(() => getUniqueId(summonerIds[i]));
      console.log(`${i}: ${uniqueId}`);
      const playerMatchIds = await fetchAndRetryIfNecessary(() => MatchInfo.getPlayerMatchIds(uniqueId));
      console.log(`${i}: ${playerMatchIds}`);

      const player = new Player({
        summonerId: summonerIds[i],
        uniqueId: uniqueId,
        matchIds: playerMatchIds,
      });

      await player.save();
      console.log('player saved');

      if (playerMatchIds.length === 0) {
        await Player.deleteOne({summonerId: summonerIds[i]});
        console.log('player deleted');
      }
    };
  }

  const matchStorage = async () => {
    const players = await Player.find({});
    /* Deletes matches from the collection that are greater than a month old in ms */
    await Match.deleteMany().where('matchData.info.gameCreation').lt(Date.now() - 2629743833);
    for (const player of players) {
      const playerMatchIds = player.matchIds;

      for (const matchId of playerMatchIds) {
        const isMatchInDb = await Match.exists({matchId: matchId});
        if (!isMatchInDb) {
            try{
              await limiter.removeTokens(1);
              const matchData = await fetchAndRetryIfNecessary(() => MatchInfo.getMatchData(matchId));
            
              const match = new Match({
                matchId,
                matchData,
              })
              await match.save();
              console.log('match saved'); 
            }
            catch(e) {
              console.log(e.message);
            }            
        }
        else {
          console.log('match already in database');
        }
      }
    }
  }

   const championStorage = async () => {
    const versionsResponse = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
    const latestVersion = versionsResponse.data[0];
    const allChampionsResponse = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
    const allChampions = allChampionsResponse.data.data;
    for (let championId in allChampions){
      let championInstance;
      if (championId === 'Fiddlesticks') {
        championInstance = new ChampionStats('FiddleSticks');
      } 
      else {
        championInstance = new ChampionStats(championId);
      }
      const championStats = await championInstance.getChampionStats();

      const isChampionInDb = await Champion.exists({id: championId});
      if (isChampionInDb) {
        const champion = await Champion.findOne({id: championId});
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
  }

  const updateDb = async () => {
    const versionsResponse = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
    const latestVersion = versionsResponse.data[0];
    const allChampionsResponse = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
    const allChampions = allChampionsResponse.data.data;

    
    for (let championName in allChampions) {
      if (championName === 'Fiddlesticks') championName = 'FiddleSticks';
      const championInstance = new ChampionStats(championName);
      const championStats = await championInstance.getChampionStats();

      const champion = await Champion.findOne({championName: championName});

      await champion.updateOne({$set: {damagePerMatch: championStats.damagePerMatch}});

      await champion.save();
      console.log(`${championName} has been updated`);
    }
  }

  return {
    playerStorage,
    matchStorage,
    championStorage,
    updateDb,
  }
};


module.exports = Storage;