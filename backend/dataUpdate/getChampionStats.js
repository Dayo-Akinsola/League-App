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

  getChampionSingleMatchStats = (participants) => {
    const championStats = participants.filter(participant => participant.championName === this.championId);
    return championStats[0];
  }

  recordMatchresult = (win) => {
    if (win) {
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

  recordMatchKda = (kills, deaths, assists) => {
    this.kda.kills += kills;
    this.kda.deaths += deaths;
    this.kda.assists += assists;
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

  recordMatchDamage = (physicalDamageDealtToChampions, magicDamageDealtToChampions, trueDamageDealtToChampions, totalDamageDealtToChampions) => {
    this.championDamage.physicalDamage.value += physicalDamageDealtToChampions;
    this.championDamage.magicDamage.value += magicDamageDealtToChampions;
    this.championDamage.trueDamage.value += trueDamageDealtToChampions;
    this.championDamage.totalDamage.value += totalDamageDealtToChampions;
  }

  calculateAverageMatchDamage = (championMatchCount) => {
    const championDamageArray = Object.keys(this.championDamage);

    championDamageArray.forEach(key => {
      this.championDamage[key].value = this.championDamage[key].value / championMatchCount;
    })

    championDamageArray.forEach(key => {
      this.championDamage[key].percentage = this.championDamage[key].value / this.championDamage.totalDamage.value * 100;
    })

    return this.championDamage;
  }

  recordLaneChoice = (teamPosition) => {
    const laneChoice = teamPosition;
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
  recordItemSetChoice = (item0, item1, item2, item3, item4, item5, item6) => {
    const itemSet = [item0, item1, item2, item3, item4, item5, item6];

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

  recordStatsAgainstEnemyChampion = async (participants, teamPosition, win, allChampionDetails) => {

    /* The filter checks which enemy had the same position as the champion whos data is currently being analysed */
    const enemyChampion = participants.filter(champion => {
      if (champion.teamPosition === teamPosition && champion.championName !== this.championId) {
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
  
        if (win) matchUpStats.winsAgainst += 1;
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
  
        if (win) matchUpStats.winsAgainst += 1;
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

  /* Gets champions who the analysed champion wins and looses the most to. */
  getBestAndWorstMatchUps = () => {
    this.calculateWinRateAgainstEnemyChampions();

    const matchUpsArray = Object.entries(this.statsAgainstEnemyChampions);
    const matchUpsByFrequency = matchUpsArray.sort((a, b) => b[1].matches - a[1].matches);
    const mostFrequentMatchUps = matchUpsByFrequency.length >= 10 ? 
        matchUpsByFrequency.slice(0, 9) : matchUpsByFrequency.slice(0, matchUpsByFrequency.length - 1); 

    const matchUpsSortedByWinRate = mostFrequentMatchUps.sort((a, b) => b[1].winRateAgainst - a[1].winRateAgainst);
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
    const championMatchCount = championMatches.length;

    for (let match of championMatches) {
      const { participants } = match.matchData.info;
      let championStats = await this.getChampionSingleMatchStats(participants);
      const { 
        win, 
        kills, 
        deaths, 
        assists, 
        physicalDamageDealtToChampions, 
        magicDamageDealtToChampions, 
        trueDamageDealtToChampions, 
        totalDamageDealtToChampions,
        teamPosition,
        item0, item1, item2, item3, item4, item5, item6,
      } = championStats;
      this.recordMatchresult(win);
      this.recordMatchKda(kills, deaths, assists);
      this.recordMatchDamage(physicalDamageDealtToChampions, magicDamageDealtToChampions, trueDamageDealtToChampions, totalDamageDealtToChampions);
      this.recordLaneChoice(teamPosition);
      this.recordItemSetChoice(item0, item1, item2, item3, item4, item5, item6);
      this.recordStatsAgainstEnemyChampion(participants, teamPosition, win, allChampionDetails);

      match = null;
      championStats = null;
    }

    const championId = this.getChampionId();
    const winRate = this.calculateWinRate();
    const pickRate = await this.calculatePickRate();
    const kdaRatio = this.calculateChampionKdaRatio();
    const damagePerMatch = this.calculateAverageMatchDamage(championMatchCount);
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