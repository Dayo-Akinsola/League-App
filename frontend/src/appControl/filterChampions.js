import getChampionStats from '../championData/championStats';
import { createChampionContainer } from '../templates/renderHelpers';

const ChampionFilter = (() => {
  const renderAllChampions = async (allChampionStats) => {
    const championsSection = document.querySelector('.champions-section');
    allChampionStats.forEach((champion) => {
      createChampionContainer(champion, championsSection);
    });
    return championsSection;
  };

  const clearChampionsSection = () => {
    const championsSection = document.querySelector('.champions-section');
    championsSection.textContent = '';
  };

  const showChampion = (champion) => {
    champion.classList.add('shown');
    champion.classList.remove('hidden');
  };

  const hideChampion = (champion) => {
    champion.classList.add('hidden');
    champion.classList.remove('shown');
  };

  const filterByLane = async (clickedLane, allChampionStats) => {
    clearChampionsSection();
    const championsSection = await renderAllChampions(allChampionStats);
    championsSection.style.visibility = 'hidden';
    const allChampions = document.querySelectorAll('.champion-container');
    if (clickedLane === 'all') {
      allChampions.forEach((champion) => {
        showChampion(champion);
      });
    } else {
      const results = [];
      allChampions.forEach((champion) => {
        const championId = champion.dataset.id;
        results.push(getChampionStats(championId));
      });
      const championStats = await Promise.all(results);
      championStats.forEach((champion) => {
        const championLane = champion.lane;
        const championElement = document.querySelector(`[data-id=${champion.championId}]`);
        if (championLane.toLowerCase() !== clickedLane) {
          hideChampion(championElement);
        } else {
          showChampion(championElement);
        }
      });
    }
  };

  const filterByRole = (activeRoles, allChampionDetails) => {
    const championElements = document.querySelectorAll('.champion-container');

    championElements.forEach((champion) => {
      let roleMatchFound = false;
      activeRoles.forEach((role) => {
        const championRoles = allChampionDetails[champion.dataset.id].tags;
        championRoles.forEach((championRole) => {
          if (championRole.toLowerCase() === role) {
            roleMatchFound = true;
          }
        });
      });
      if (!roleMatchFound) {
        hideChampion(champion);
      }
    });
  };

  const categoriseDifficultyNum = (difficultyNum) => {
    if (difficultyNum <= 3) {
      return 'low';
    }

    if (difficultyNum <= 6) {
      return 'medium';
    }

    return 'high';
  };

  const filterByDifficulty = async (activeDifficulties, allChampionDetails) => {
    const championElements = document.querySelectorAll('.champion-container');

    championElements.forEach((champion) => {
      let difficultyMatchFound = false;
      activeDifficulties.forEach((difficulty) => {
        const championDifficultyNum = allChampionDetails[champion.dataset.id].info.difficulty;
        const championDifficulty = categoriseDifficultyNum(championDifficultyNum);

        if (difficulty.toLowerCase() === championDifficulty) {
          difficultyMatchFound = true;
        }
      });
      if (!difficultyMatchFound) {
        hideChampion(champion);
      }
    });
  };

  return {
    filterByLane,
    filterByRole,
    filterByDifficulty,
  };
})();

export default ChampionFilter;
