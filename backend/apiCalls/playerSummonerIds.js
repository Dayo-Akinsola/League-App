const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = PlayerSummonerIds = (tier) => {

  //Collects summoner ids for players in a given tier 
  const getSummonerIds = async () => { 
    try {
      let pageNum = 5;
      const requestUrl = `https://euw1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/${tier}/I?page=${pageNum}&api_key=${process.env.API_KEY}`;
      const response = await axios.get(requestUrl);
      const playerData = response.data;
      const summonerIds = playerData.map(player => player.summonerId);
      return summonerIds;
    } 
    
    catch(error) {
      console.log(error.message);
      process.exit(1);
    }
  }

  /* The top three tiers in the game have a different api endpoint for summoner ids  */
  const getEliteSummonerIds = async () => {
    try{
      const requestUrl = `https://euw1.api.riotgames.com/lol/league/v4/${tier}leagues/by-queue/RANKED_SOLO_5x5?api_key=${process.env.API_KEY}`;
      const response = await axios.get(requestUrl);
      const playerData = response.data.entries.slice(0, 204);
      const summonerIds = playerData.map(player => player.summonerId);
      return summonerIds;     
    }

    catch(error) {
      console.log(error.message);
      process.exit(1);
    }
    
  }
  

  return {
    getSummonerIds,
    getEliteSummonerIds,
  }
};



