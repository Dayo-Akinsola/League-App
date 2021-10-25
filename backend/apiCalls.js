const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const Cache = require('./cache');

const ttl = 60 * 60 * 1;
const cache = new Cache(ttl);

const ApiCalls = (tier, division) => {

  const getSummonerIds = async () => { 
    const requestUrl = `https://euw1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/${tier}/${division}?page=1&api_key=${process.env.API_KEY}`;
    const key = `getSummonerIds_${tier + division}`;
    const response = cache.get(key, async () => await axios.get(requestUrl));
    const playerData = response.data;
    const summonerIds = playerData.map(player => player.summonerId);

    return summonerIds;
  }

  const getUniqueId = async (summonerId) => {

    const requestUrl = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}?api_key=${process.env.API_KEY}`;
    const response = cache.get(key, async () => await axios.get(requestUrl));
    const playerInfo = response.data;
    const uniqueId = playerInfo.puuid;

    return uniqueId;
  }

  const getPlayerMatchIds = async (uniqueId) => {
    const response = await axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${uniqueId}/ids?start=0&count=20&api_key=${process.env.API_KEY}`);
    const matchIds = response.data;
    
    return matchIds;
  }
  
  const getMatchInfo = async (matchId) => {
    const response = await axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.API_KEY}`);
    const matchInfo = response.data;
  }

  return {
    getSummonerIds,
    getUniqueId,
    getPlayerMatchIds,
    getMatchInfo,
  }
};

module.exports = ApiCalls;


