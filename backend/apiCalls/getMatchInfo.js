const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
// const fetchAndRetryIfPossible = require('../errorHandlers');

const MatchInfo = (() => {

  /* Retrives match ids for a player */
  const getPlayerMatchIds = async (uniqueId) => {
  /* Only requests for matches that happend less than a month ago */
  const startTime = Math.floor((Date.now() - 2629743833) / 1000);
  const requestUrl = 
    `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${uniqueId}/ids?startTime=${startTime}&type=ranked&start=0&count=10&api_key=${process.env.API_KEY}`;
  const response = await axios.get(requestUrl);
  const matchIds = response.data;
  return matchIds;

   // catch(error) {
   //   await fetchAndRetryIfPossible(getPlayerMatchIds, uniqueId, error);
   // }

  }
  
  /* Uses the match ids to get data about a given match */
  const getMatchData = async (matchId) => {
    const response = await axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.API_KEY}`);
    const matchData = response.data;
    return matchData;

    // catch(error) {
    //   await fetchAndRetryIfPossible(getMatchData, matchId, error);
    // }

  }

  return {
    getPlayerMatchIds,
    getMatchData,
  }

})();

module.exports = MatchInfo;