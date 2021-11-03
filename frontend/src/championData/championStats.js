const fetchChampionStats = async (championId) => {
  const response = await fetch(`http://localhost:3001/${championId}`, { mode: 'cors' });
  const championStats = await response.json();

  return championStats;
};

const getChampionStats = async (championId) => {
  const championStats = await fetchChampionStats(championId);
  console.log(championStats);

  const winRate = championStats.winRate.toFixed(2);
  const pickRate = championStats.pickRate.toFixed(2);
  const lane = championStats.lane[0] + championStats.lane.substring(1).toLowerCase();

  return {
    championId,
    kda: championStats.kdaRatio,
    damagePerMatch: championStats.damagePerMatch,
    itemChoices: championStats.itemChoices,
    bestMatchUps: championStats.matchUps.bestMatchUps,
    worstMatchUps: championStats.matchUps.worstMatchUps,
    winRate,
    pickRate,
    lane,
  };
};

export default getChampionStats;
