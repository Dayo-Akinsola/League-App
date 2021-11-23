const getAllChampionDetails = async () => {
  const versionsResponse = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
  const versions = await versionsResponse.json();
  const latestVersion = versions[0];
  const championsResponse = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
  const allChampions = await championsResponse.json();

  return allChampions.data;
};

const getAllChampionStats = async () => {
  const response = await fetch('https://localhost:3001/champions', { mode: 'cors' });
  const allChampionStats = await response.json();

  return allChampionStats;
};

export {
  getAllChampionDetails,
  getAllChampionStats,
};
