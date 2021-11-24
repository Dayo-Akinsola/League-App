const fetchChampionStats = async (championId) => {
  const baseUrl = '/';
  const response = await fetch(`${baseUrl}/${championId}`, { mode: 'cors' });
  const championStats = await response.json();

  return championStats;
};

const getChampionStats = async (championId) => {
  const championStats = await fetchChampionStats(championId);

  const winRate = championStats.winRate.toFixed(2);
  const pickRate = championStats.pickRate.toFixed(2);
  const lane = championStats.lane[0] + championStats.lane.substring(1).toLowerCase();

  return {
    championId,
    kda: championStats.kdaRatio,
    damagePerMatch: championStats.damagePerMatch,
    itemSets: championStats.itemChoices.slice(1),
    bestMatchUps: championStats.matchUps.bestMatchUps,
    worstMatchUps: championStats.matchUps.worstMatchUps,
    winRate,
    pickRate,
    lane,
  };
};

export default getChampionStats;
