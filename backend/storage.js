const throttledQueue = require('throttled-queue');
const ApiCalls = require('./apiCalls');
const Player = require('./models/player');
const Match = require('./models/match');
const Champion = require('./models/champion');
const fetchAndRetryIfNecessary = require('./errorHandlers');
const ChampionStats = require('./getChampionStats');
const { default: axios } = require('axios');

// Makes 99 evenly spaced requests every 2 minutes
const throttle = throttledQueue(99, 120 * 1000, true);

const platIVApiCalls = ApiCalls('PLATINUM', 'IV');

// Stores players inside of a database
const storePlayersInDb = async () => {
  const summonerIds = await fetchAndRetryIfNecessary(() => platIVApiCalls.getSummonerIds());
  for ( let i = 0; i < summonerIds.length; i++) {
    const isPlayerinDb = await Player.exists({summonerId: summonerIds[i]});
    
    if (!isPlayerinDb) {
      throttle( async () => {
        const uniqueId = await platIVApiCalls.getUniqueId(summonerIds[i]);
        const playerMatchIds = await fetchAndRetryIfNecessary(() => platIVApiCalls.getPlayerMatchIds(uniqueId));

        console.log(`${i}: ${uniqueId}, ${playerMatchIds}`);

        const player = new Player({
          summonerId: summonerIds[i],
          uniqueId: uniqueId,
          matchIds: playerMatchIds,
        });

        await player.save();
        console.log('player saved');
      });
    }
    else{
      console.log('player already in db');
    }
  };
}


const storeMatchesInDb = async () => {
  const players = await Player.find({});

  for (const player of players) {
    const playerMatchIds = player.matchIds;

    for (const matchId of playerMatchIds) {
      const isMatchInDb = await Match.exists({matchId: matchId});
      if (!isMatchInDb) {
        throttle( async () => {
          try{
            const matchData = await fetchAndRetryIfNecessary(() => platIVApiCalls.getMatchData(matchId));
          
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
          
        })
      }
      else {
        console.log('match already in database');
      }
    }
  }
}

const saveChampionsToDb = async () => {
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
    if (!isChampionInDb) {
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
    })
  
      await champion.save();
      console.log(`${championId} has been saved to the database`);
    }
    else {
      console.log(`${championId} is already in the database`);
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

  


module.exports = saveChampionsToDb;