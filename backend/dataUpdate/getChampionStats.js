//const Champion = require('./models/champion');
const Match = require('../models/match');
const { default: axios } = require('axios');

/* Note: Champions are the characters you can play in a League of Legends match. */
/* Role of this class is to take data from the matches db and analyse it so it can be used in the champions db. */
module.exports = class ChampionStats {
  constructor(championId) {
    this.championId = championId;
    this.matchResults = {
      win: 0,
      loss: 0,
      matches: 0,
    }
    
    /* kda: Stands for Kills, Deaths, Assists */
    this.kda = {
      kills: 0,
      deaths: 0,
      assists: 0
    };

    this.championDamage = {
      physicalDamage: {
        value: 0,
        percentage: 0,
      },
      magicDamage: {
        value: 0,
        percentage: 0,
      },
      trueDamage: {
        value: 0,
        percentage: 0,
      },
      totalDamage: {
        value: 0,
        percentage: 0,
      },
    };

    /* Where on the map the champion is mostly played */
    this.lane = {
      TOP: 0,
      MIDDLE: 0,
      BOTTOM: 0,
      JUNGLE: 0,
      UTILITY: 0,
    };

    /* 
      Will contain arrays which have the items that a champion has bought by the end of a match.
    */
    this.itemSets = {};

    /* Holds stats for how this champion performs against specific opposing champions in the same lane */
    this.statsAgainstEnemyChampions = {};
  }

  getChampionId = () => this.championId;

  getAllChampionMatches = async () => {
    const championMatches = await Match.find({'matchData.info.participants.championName': this.championId});
    return championMatches;
  }

  getChampionSingleMatchStats = (match) => {
    const matchParticipants = match.matchData.info.participants;
    const championStats = matchParticipants.filter(participant => participant.championName === this.championId);

    return championStats[0];
  }

  recordMatchresult = (championStats) => {
    if (championStats.win) {
      this.matchResults.win += 1;
    }
    else {
      this.matchResults.loss += 1;
    }
    this.matchResults.matches += 1;
  }

  calculateWinRate = () => {
    const winRate = (this.matchResults.win / this.matchResults.matches) * 100;
    return winRate;
  }

  calculatePickRate = async () => {
    const allMatchesCount = await Match.count({});
    const pickRate = this.matchResults.matches / allMatchesCount * 100;
    return pickRate;
  }

  recordMatchKda = (championStats) => {
    this.kda.kills += championStats.kills;
    this.kda.deaths += championStats.deaths;
    this.kda.assists += championStats.assists;
  }
  
  /* Calculates the number of kills, deaths and assits a champion has on average. */
  calculateChampionKdaRatio = () => {
    /* Calculates the kill, death, assist ratio */
    const kdaArray = Object.values(this.kda);
    const minValue = Math.min(...kdaArray);

    /* toFixed makes these values strings */
    this.kda.kills  = (this.kda.kills/minValue).toFixed(2);  
    this.kda.deaths = (this.kda.deaths/minValue).toFixed(2); 
    this.kda.assists = (this.kda.assists/minValue).toFixed(2);

    return this.kda;
  }

  recordMatchDamage = (championStats) => {
    this.championDamage.physicalDamage.value += championStats.physicalDamageDealtToChampions;
    this.championDamage.magicDamage.value += championStats.magicDamageDealtToChampions;
    this.championDamage.trueDamage.value += championStats.trueDamageDealtToChampions;
    this.championDamage.totalDamage.value += championStats.totalDamageDealtToChampions;
  }

  calculateAverageMatchDamage = (championMatches) => {
    const championMatchCount = championMatches.length;
    const championDamageArray = Object.keys(this.championDamage);

    championDamageArray.forEach(key => {
      this.championDamage[key].value = this.championDamage[key].value / championMatchCount;
    })

    championDamageArray.forEach(key => {
      this.championDamage[key].percentage = this.championDamage[key].value / this.championDamage.totalDamage.value * 100;
    })

    return this.championDamage;
  }

  recordLaneChoice = (championStats) => {
    const laneChoice = championStats.teamPosition;
    this.lane[laneChoice] += 1;
  }

  getMostPopularLaneChoice = () => {
    const laneChoices = Object.keys(this.lane);
    let mostPopularLaneChoice;
    let mostPopularLaneCount = 0;

    laneChoices.forEach(laneChoice => {
      if (this.lane[laneChoice] > mostPopularLaneCount) {
        mostPopularLaneChoice = laneChoice;
        mostPopularLaneCount = this.lane[laneChoice]; 
      }
    })

    return mostPopularLaneChoice;
  }

  /* Each item is uniquely identfied as a four digit int in the riot api */
  recordItemSetChoice = (championStats) => {
    const itemSet = [];

    for (let i = 0; i < 7; i++) {
      itemSet.push(championStats[`item${i}`]);
    }
    /* Items array is sorted because two item sets can be identical, but in a different order */
    const sortedItems = itemSet.sort((a, b) => a - b);

    /* Ignores sets where there is a no item slot and where there are starter items */
    if (sortedItems[0] !== 0 && sortedItems[0].toString()[0] !== '1' ) {
      
      /*
        The number of different item sets across thousands of matches is vast so I turned each
        item set into an array so it can be used and indentified as a key in the itemSets object.
      */
      if (this.itemSets[sortedItems.toString()]){
        this.itemSets[sortedItems.toString()] += 1
      }
      else {
        this.itemSets[sortedItems.toString()] = 1;
      }
    }
  } 

  getMostPopularItemChoices = () => {
    const itemSetEntries = Object.entries(this.itemSets);
    const sortedEntries = itemSetEntries.sort((a, b) => b[1] = a[1]);
    const popularItemChoices = [];

    for (let i = 0; i < 3; i++) {
      const itemSetString = sortedEntries[i][0];
      const itemSetArray = (itemSetString.split(',')).map(item => parseInt(item));
      popularItemChoices.push(itemSetArray);
    }

    return popularItemChoices;
  }

  recordStatsAgainstEnemyChampion = async (match, championStats, allChampionDetails) => {
    /* championPosition is where the champion of this instance played for the match */
    const championPosition = championStats.teamPosition;
    const matchWon = championStats.win;
    const matchParticipants = match.matchData.info.participants;

    /* The filter checks which champion had the same position as the instance champion on the enemy team */
    const enemyChampion = matchParticipants.filter(champion => {
      if (champion.teamPosition === championPosition && champion.championName !== this.championId) {
        return champion;
      }
    });
    
    if (enemyChampion === undefined) {
      throw 'Enemy Champion not found';
    }

    try {
      if (this.statsAgainstEnemyChampions[enemyChampion[0].championName]) {
        const matchUpStats = this.statsAgainstEnemyChampions[enemyChampion[0].championName];
        matchUpStats.matches += 1;
  
        if (matchWon) matchUpStats.winsAgainst += 1;
        else matchUpStats.lossesAgainst += 1;
      }
      else {
        const name = allChampionDetails[enemyChampion[0].championName].name;
        const matchUpStats = this.statsAgainstEnemyChampions[enemyChampion[0].championName] = {
          name,
          winsAgainst: 0,
          lossesAgainst: 0, 
          matches: 1,
        };
  
        if (matchWon) matchUpStats.winsAgainst += 1;
        else matchUpStats.lossesAgainst += 1;
      }
    }
    catch(e) {
      console.log('Enemy Champion Not Specified');
    }  
  }

  calculateWinRateAgainstEnemyChampions = () => {
    for (const enemyChampion in this.statsAgainstEnemyChampions) {
      const winsAgainst = this.statsAgainstEnemyChampions[enemyChampion].winsAgainst;
      const matches = this.statsAgainstEnemyChampions[enemyChampion].matches;

      const winRate = (winsAgainst / matches) * 100;
      this.statsAgainstEnemyChampions[enemyChampion]['winRateAgainst'] = winRate;
    }
  }

  /* Gets champions who this champion wins and losses the most to. */
  getBestAndWorstMatchUps = () => {
    this.calculateWinRateAgainstEnemyChampions();

    const matchUpsArray = Object.entries(this.statsAgainstEnemyChampions);

    /* Remove matchups with too low a sample size */
    let filteredMatchUpsTen = matchUpsArray.filter(matchUp => {
      if (matchUp[1].matches >= 10) {
        return matchUp;
      }
    });

    let filteredMatchUpsThree = matchUpsArray.filter(matchUp => {
      if (matchUp[1].matches >= 3) {
        return matchUp;
      }
    });

    const filteredMatchUps = filteredMatchUpsTen.length >= 6 ? filteredMatchUpsTen : filteredMatchUpsThree;
    const matchUpsSortedByWinRate = filteredMatchUps.sort((a, b) => b[1].winRateAgainst - a[1].winRateAgainst);
    const bestMatchUps = [];
    const worstMatchUps = [];
    for (let i = 0; i < 3; i++) {
      bestMatchUps.push(matchUpsSortedByWinRate[i]);
      worstMatchUps.push(matchUpsSortedByWinRate[matchUpsSortedByWinRate.length - 1 - i]);
    }

    return {
      bestMatchUps,
      worstMatchUps,
    }
  }

  getChampionStats = async () => {
    const championMatches = await this.getAllChampionMatches();
    const versions = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
    const latestVersion = versions.data[0];
    const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
    const allChampionDetails = response.data.data;

    for (const match of championMatches) {
      const championStats = await this.getChampionSingleMatchStats(match);
      this.recordMatchresult(championStats);
      this.recordMatchKda(championStats);
      this.recordMatchDamage(championStats);
      this.recordLaneChoice(championStats);
      this.recordItemSetChoice(championStats);
      this.recordStatsAgainstEnemyChampion(match, championStats, allChampionDetails);
    }

    const championId = this.getChampionId();
    const winRate = this.calculateWinRate();
    const pickRate = await this.calculatePickRate();
    const kdaRatio = this.calculateChampionKdaRatio();
    const damagePerMatch = this.calculateAverageMatchDamage(championMatches);
    const lane = this.getMostPopularLaneChoice();
    const itemChoices = this.getMostPopularItemChoices();
    const matchUps = this.getBestAndWorstMatchUps();
    
    return {
      championId,
      winRate,
      pickRate,
      kdaRatio,
      damagePerMatch,
      lane,
      itemChoices,
      matchUps,
    }
  }
}