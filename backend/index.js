const express = require('express');
const app = express();
const Throttle = require('./throttle');
const ApiCalls = require('./apiCalls');
const Player = require('./models/player');
const Match = require('./models/match');
const fetchAndRetryIfNecessary = require('./errorHandlers')

// Makes 99 evenly spaced requests every 2 minutes
const throttle = new Throttle(99, 120);

const platIVApiCalls = ApiCalls('PLATINUM', 'IV');

// Stores players inside of a database
app.get('/api/players', async (request, response) => {

  const summonerIds = await platIVApiCalls.getSummonerIds();

  for ( let i = 0; i < summonerIds.length; i++) {
    const isPlayerinDb = await Player.exists({summonerId: summonerIds[i]});
    
    const uniqueId = await throttle.getRequestResponse(() => platIVApiCalls.getUniqueId(summonerIds[i]));
    if (!isPlayerinDb) {
      throttle( async () => {
        const uniqueId = await platIVApiCalls.getUniqueId(summonerIds[i]);
        console.log(`${i}: ${uniqueId}`);

        const player = new Player({
          summonerId: summonerIds[i],
          uniqueId: uniqueId,
        });

        await player.save();
        console.log('player saved');
      });
    }

    else{
      console.log('player already in db');
    }
    
  };

  //const rate_limits = axios_response.headers['x-app-rate-limit'].split(',');
  //const limits = rate_limits.map(limit => limit.split(':'));
  //const limitPerSecond = parseInt(limits[0][0]);
  //const limitPerTwoMinutes = parseInt(limits[1][1]);
  //console.log(limitPerSecond);
  //console.log(limitPerTwoMinutes);
});

app.get('/api/matches', async (request, response) => {
  const players = await Player.find({});

  for (let i = 0; i < players.length; i++) {

    throttle( async () => {
      const playerMatchIds = await fetchAndRetryIfNecessary(() => platIVApiCalls.getPlayerMatchIds(players[i].uniqueId));
      console.log(playerMatchIds);
    })


    for (let i = 0; i < playerMatchIds.length; i++) {
      try{
        const isMatchInDb =  await Match.exists({matchId: playerMatchIds[i]});
        if (!isMatchInDb) {
          const matchData = await fetchAndRetryIfNecessary(() => platIVApiCalls.getMatchData(playerMatchIds[i]));

          const match = new Match({
            matchId: playerMatchIds[i],
            matchData: matchData,
          });

          await match.save();
          console.log('match saved in the database');
        } 
        else {
          console.log('match is already in the database');
        }
      } 
      catch {
        if (response.status === 404) {
          console.log('match not found');
          continue;
        }
      }
    }
  }
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
