import getChampionDetails from '../championData/championDetails';
import getChampionStats from '../championData/championStats';

const ChampionFilter = (() => {
  const showChampion = (champion) => {
    champion.classList.add('shown');
    champion.classList.remove('hidden');
  };

  const hideChampion = (champion) => {
    champion.classList.add('hidden');
    champion.classList.remove('shown');
  };

  const filterByLane = async (clickedLane) => {
    const championsSection = document.querySelector('.champions-section');
    championsSection.style.display = 'none';
    const allChampions = document.querySelectorAll('.champion-container');
    if (clickedLane === 'all') {
      allChampions.forEach((champion) => {
        showChampion(champion);
      });
      championsSection.style.display = 'grid';
      return;
    }

    const results = [];
    allChampions.forEach((champion) => {
      const championId = champion.dataset.id;
      results.push(getChampionStats(championId));
    });

    const allChampionStats = await Promise.all(results);
    allChampionStats.forEach((championStats) => {
      const championLane = championStats.lane;
      const championElement = document.querySelector(`[data-id=${championStats.championId}]`);
      if (championLane.toLowerCase() !== clickedLane) {
        hideChampion(championElement);
      } else {
        showChampion(championElement);
      }
    });
    championsSection.style.display = 'grid';
  };

  const filterByRole = async (clickedRole) => {

  };

  return {
    filterByLane,
  };
})();

export default ChampionFilter;
