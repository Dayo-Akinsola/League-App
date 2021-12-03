/* Retrives the latest static data avaliable for champions */
export default async () => {
  const versionResponse = await fetch('https://ddragon.leagueoflegends.com/api/versions.json', { mode: 'cors' });
  const versions = await versionResponse.json();
  const latestVersion = versions[0];
  return latestVersion;
};
