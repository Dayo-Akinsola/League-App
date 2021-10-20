export default class ChampionData {
  constructor(championId) {
    return (async () => {
      const request = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion/${championId}.json`, { mode: 'cors' });

      const response = await request.json();

      const data = response.data.championId;

      this.getChampionName = () => data.name;

      return this;
    })();
  }
}
