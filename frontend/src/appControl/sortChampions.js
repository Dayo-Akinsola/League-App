// import { getAllChampionStats } from '../championData/getAllChampions';
import { createChampionContainer } from '../templates/renderHelpers';

const SortChampions = (() => {
  const clearChampionsSection = () => {
    const championsSection = document.querySelector('.champions-section');
    championsSection.style.visiblity = 'hidden';
    championsSection.textContent = '';
  };

  const recreateChampionsSection = (champions) => {
    const championsSection = document.querySelector('.champions-section');
    champions.forEach((champion) => {
      createChampionContainer(champion, championsSection);
    });
  };

  const filterChampions = (allChampionStats) => {
    // const allChampionStats = await getAllChampionStats();
    const filteredChampionStats = allChampionStats.filter((championStats) => {
      const championElement = document.querySelector(`[data-id=${championStats.id}]`);
      return championElement.className === 'champion-container shown';
    });

    return filteredChampionStats;
  };

  const sortChampionsByWinrate = (allChampionStats) => {
    const filteredChampionStats = filterChampions(allChampionStats);
    const filteredChampionsSorted = filteredChampionStats.sort((a, b) => b.winRate - a.winRate);
    clearChampionsSection();
    recreateChampionsSection(filteredChampionsSorted);
    return filteredChampionsSorted;
  };

  const sortChampionsByPickrate = (allChampionStats) => {
    const filteredChampionStats = filterChampions(allChampionStats);
    const filteredChampionsSorted = filteredChampionStats.sort((a, b) => b.pickRate - a.pickRate);
    clearChampionsSection();
    recreateChampionsSection(filteredChampionsSorted);
    return filteredChampionsSorted;
  };

  const sortChampionsByDamageDone = (allChampionStats) => {
    const filteredChampionStats = filterChampions(allChampionStats);

    const filteredChampionsSorted = filteredChampionStats.sort(
      (a, b) => b.damagePerMatch.totalDamage.value - a.damagePerMatch.totalDamage.value,
    );
    clearChampionsSection();
    recreateChampionsSection(filteredChampionsSorted);
    return filteredChampionsSorted;
  };

  const sortByDefaultOrder = (allChampionStats) => {
    // const allChampionStats = await getAllChampionStats();
    const filteredChampionStats = allChampionStats.filter((championStats) => {
      const championElement = document.querySelector(`[data-id=${championStats.id}]`);
      if (championElement === null) {
        return false;
      }
      return championElement.className === 'champion-container shown';
    });
    clearChampionsSection();
    recreateChampionsSection(filteredChampionStats);
  };

  return {
    sortChampionsByWinrate,
    sortChampionsByPickrate,
    sortChampionsByDamageDone,
    sortByDefaultOrder,
  };
})();

export default SortChampions;
