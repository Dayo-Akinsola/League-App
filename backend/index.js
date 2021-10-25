const express = require('express');
const app = express();
const throttledQueue = require('throttled-queue');
const ApiCalls = require('./apiCalls');

// Makes 99 evenly spaced requests every 2 minutes
const throttle = throttledQueue(99, 120 * 1000, true);

app.get('/api/matches', async (request, response) => {
  const platIVApiCalls = ApiCalls('PLATINUM', 'IV');

  const summonerIds = await platIVApiCalls.getSummonerIds();

  const uniqueIds = [];

  for ( let i = 0; i < summonerIds.length; i++) {
    throttle( async () => {
      const uniqueId = await platIVApiCalls.getUniqueId(summonerIds[i]);
      console.log(`${i}: ${uniqueId}`);
      uniqueIds.push(uniqueId);
    });
  };

  console.log(uniqueIds);

  //const rate_limits = axios_response.headers['x-app-rate-limit'].split(',');
  //const limits = rate_limits.map(limit => limit.split(':'));
  //const limitPerSecond = parseInt(limits[0][0]);
  //const limitPerTwoMinutes = parseInt(limits[1][1]);
  //console.log(limitPerSecond);
  //console.log(limitPerTwoMinutes);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
