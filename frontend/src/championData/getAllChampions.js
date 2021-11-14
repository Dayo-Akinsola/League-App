const fetchAllChampions = async () => {
  const versionsResponse = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
  const versions = await versionsResponse.json();
  const latestVersion = versions[0];
  const championsResponse = await fetch(`http://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
  const allChampions = await championsResponse.json();

  return allChampions.data;
};

export default fetchAllChampions;
