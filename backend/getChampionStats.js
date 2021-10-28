const Champion = require('./models/champion');
const Match = require('./models/match');

// Role of this class is to take data from the matches db and analyse it so it can be used in the champions db.
module.exports = class ChampionStats {
  constructor(championName) {
    this.championName = championName;
    this.matchResults = {
      win: 0,
      loss: 0,
    }
    this.kda = {
      kills: 0,
      deaths: 0,
      assists: 0
    }
  }

  getAllChampionMatches = async () => {
    const championMatches = await Match.find({'matchData.info.participants.championName': this.championName});
    return championMatches;
  }

  getChampionSingleMatchStats = (match) => {
    const matchParticipants = match.matchData.info.participants;
    const championStats = matchParticipants.filter(participant => participant.championName === this.championName);

    return championStats;
  }

  recordMatchresult = (championStats) => {
    if (championStats[0].win) {
      this.matchResults.win += 1;
    }
    else {
      this.matchResults.loss += 1;
    }
  }

  // Calculates the number of kills, deaths and assits a champion has on average.
  calculateKdaRatio = async (championMatches) => {
    // kda: Stands for Kills, Deaths, Assists
  
    for (const match of championMatches) {
      const championStats = await this.getChampionSingleMatchStats(match);
      this.kda.kills += championStats[0].kills;
      this.kda.deaths += championStats[0].deaths;
      this.kda.assists += championStats[0].assists;
    }

    //Calculates the kill, death, assist ratio
    const kdaArray = Object.values(this.kda);
    const minValue = Math.min(...kdaArray);

    // toFixed makes these values strings
    this.kda.kills  = (this.kda.kills/minValue).toFixed(2);  
    this.kda.deaths = (this.kda.deaths/minValue).toFixed(2); 
    this.kda.assists = (this.kda.assists/minValue).toFixed(2);

    return this.kda;
  }


  calculateChampionWinrate = async (championMatches) => {
  
    for (const match of championMatches) {
      const championStats = await this.getChampionSingleMatchStats(match);
      this.recordMatchresult(championStats);
    }

    const winRate = (this.matchResults.win / (this.matchResults.win + this.matchResults.loss)) * 100;
    return winRate;
  }

  getChampionStats = async () => {
    const championMatches = await this.getAllChampionMatches();
    const championWinrate = this.calculateChampionWinrate(championMatches);
    const championKda = this.calculateKdaRatio(championMatches);

    return championWinrate;
  }
}