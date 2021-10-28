const express = require('express');
const app = express();
const throttledQueue = require('throttled-queue');
const ApiCalls = require('./apiCalls');
const Player = require('./models/player');
const Match = require('./models/match');
const fetchAndRetryIfNecessary = require('./errorHandlers');
const ChampionStats = require('./getChampionStats');

// Makes 99 evenly spaced requests every 2 minutes
const throttle = throttledQueue(99, 120 * 1000, true);

const platIVApiCalls = ApiCalls('PLATINUM', 'IV');

// Stores players inside of a database
app.get('/api/players', async (request, response) => {

  const summonerIds = await platIVApiCalls.getSummonerIds();

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
});

app.get('/api/matches', async (request, response) => {
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
            console.log(e);
          }
          
        })
      }
      else {
        console.log('match already in database');
      }
    }
  }
})

app.get('/champions', async (request, response) => {
  const champion = new ChampionStats('Jinx');
  console.log(await champion.getChampionStats());
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
