const fetchChampionStats = async (championId) => {
  /* Relative urls are used for when the app is in production and localhost url for development */
  const devUrl = 'http://127.0.0.1:5500/dist/champions.html';
  const response = window.location.href === devUrl
    ? await fetch(`http://localhost:3001/${championId}`, { mode: 'cors' })
    : await fetch(`${championId}`, { mode: 'cors' });
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
