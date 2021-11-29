const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = MatchInfo = (() => {

  /* Retrives match ids for a player */
  const getPlayerMatchIds = async (uniqueId) => {
  /* Only requests for matches that happend less than a month ago */
  const startTime = Math.floor((Date.now() - 2629743833) / 1000);
  const requestUrl = 
    `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${uniqueId}/ids?startTime=${startTime}&type=ranked&start=0&count=10&api_key=${process.env.API_KEY}`;
  const response = await axios.get(requestUrl);
  const matchIds = response.data;
  return matchIds;
  }
  
  /* Uses the match ids to get data about a given match */
  const getMatchData = async (matchId) => {
    const response = await axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.API_KEY}`);
    const matchData = response.data;
    return matchData;
  }

  return {
    getPlayerMatchIds,
    getMatchData,
  }

})();

