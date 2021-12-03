const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = getUniqueId = async (summonerId) => {
  const requestUrl = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}?api_key=${process.env.API_KEY}`;
  const response = await axios.get(requestUrl);
  const uniqueId = response.data.puuid;  
  return uniqueId;
}

