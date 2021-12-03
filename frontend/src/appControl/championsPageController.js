import getChampionDetails from '../championData/championDetails';
import getChampionStats from '../championData/championStats';
import championDetailsModal from '../templates/championDetailsModal';
import championStatsModal from '../templates/championStatsModal';
import championSkinsModal from '../templates/championSkinsModal';
import ChampionModalController from './championModalController';
import ChampionFilter from './filterChampions';
import SortChampions from './sortChampions';
import { getAllChampionDetails, getAllChampionStats } from '../championData/getAllChampions';

const ChampionsPageController = (() => {
  const displayDropdownOptions = (dropdownOptions) => {
    const allDropdownOptions = document.querySelectorAll('.dropdown-options');
    allDropdownOptions.forEach((options) => {
      const optionsStyle = options.style;
      optionsStyle.display = 'none';
    });

    const dropdownOptionsStyle = dropdownOptions.style;
    dropdownOptionsStyle.display = 'flex';
  };

  const hideDropdownOptions = (dropdownOptions) => {
    const dropdownOptionsStyle = dropdownOptions.style;
    dropdownOptionsStyle.display = 'none';
  };

  const dropdownOptionsToggle = (dropdownBtn) => {
    const dropdownOptions = dropdownBtn.parentElement.querySelector('.dropdown-options');
    if (dropdownOptions.style.display !== 'flex') {
      displayDropdownOptions(dropdownOptions);
    } else {
      hideDropdownOptions(dropdownOptions);
    }
  };

  const displayChampionModal = async (championId) => {
    const modal = document.querySelector('.modal');
    const championDetails = await getChampionDetails(championId);

    const championStats = await getChampionStats(championId);

    const skinImagesContainer = document.querySelector('.skin-images-container');
    /*
      purpose of the if statement is to prevent spam clicks from rendering
      duplicate content onto the champion modal.
    */
    if (!skinImagesContainer) {
      championDetailsModal(championDetails);
      championStatsModal(championDetails, championStats);
      championSkinsModal(championDetails);
    }

    modal.style.display = 'block';
    ChampionModalController.modalChangeListeners();
  };

  const selectLaneFilterOption = (clickedLaneOption) => {
    const championsSection = document.querySelector('.champions-section');
    const activeLaneOption = document.querySelector('.header-option.active');
    if (clickedLaneOption === activeLaneOption || championsSection.style.visibility === 'hidden') {
      return false;
    }
    activeLaneOption.classList.remove('active');
    clickedLaneOption.classList.add('active');

    return true;
  };

  const checkLaneFilterOption = async (allChampionStats) => {
    const activeLaneOption = document.querySelector('.header-option.active');
    const laneName = activeLaneOption.classList[0];
    await ChampionFilter.filterByLane(laneName, allChampionStats);
  };

  const checkSortingOption = (allChampionStats) => {
    const activeSortingOption = document.querySelector('.sort.active');
    if (activeSortingOption === null) {
      SortChampions.sortByDefaultOrder(allChampionStats);
    } else if (Array.from(activeSortingOption.classList).includes('winrate')) {
      SortChampions.sortChampionsByWinrate(allChampionStats);
    } else if (Array.from(activeSortingOption.classList).includes('pickrate')) {
      SortChampions.sortChampionsByPickrate(allChampionStats);
    } else if (Array.from(activeSortingOption.classList).includes('damage')) {
      SortChampions.sortChampionsByDamageDone(allChampionStats);
    }
  };

  const checkActiveRoleOptions = (allChampionDetails) => {
    const activeRoleOptions = document.querySelectorAll('.role.active');
    if (activeRoleOptions.length === 0) {
      return false;
    }
    const activeRoles = Array.from(activeRoleOptions).map((activeRoleOption) => {
      const activeRole = activeRoleOption.classList[0];
      return activeRole;
    });
    ChampionFilter.filterByRole(activeRoles, allChampionDetails);
    return true;
  };

  const checkActiveDifficultyOptions = (allChampionDetails) => {
    const activeDifficultyOptions = document.querySelectorAll('.difficulty.active');
    if (activeDifficultyOptions.length === 0) {
      return false;
    }
    const activeDifficulties = Array.from(activeDifficultyOptions).map((activeDifficultyOption) => {
      const activeDifficulty = activeDifficultyOption.classList[0];
      return activeDifficulty;
    });
    ChampionFilter.filterByDifficulty(activeDifficulties, allChampionDetails);
    return true;
  };

  const selectMultiDropdownOption = (dropdownOption) => {
    dropdownOption.classList.add('active');
  };

  const deselectDropdownOption = (dropdownOption) => {
    dropdownOption.classList.remove('active');
  };

  const toggleDropdownOption = (dropdownOption) => {
    if (!Array.from(dropdownOption.classList).includes('active')) {
      selectMultiDropdownOption(dropdownOption);
    } else {
      deselectDropdownOption(dropdownOption);
    }
  };

  const selectSingleDropdownOption = (dropdownOption) => {
    const activeDropdownOption = document.querySelector('.single-select.active');
    if (activeDropdownOption === null) {
      dropdownOption.classList.add('active');
      return;
    }
    if (activeDropdownOption === dropdownOption) {
      deselectDropdownOption(dropdownOption);
      return;
    }
    activeDropdownOption.classList.remove('active');
    dropdownOption.classList.add('active');
  };

  const redirectToFrontPage = () => {
    window.location.href = 'index.html';
  };

  const championsPageClickEvents = async (event) => {
    /* Helper functions for click events */
    const checkOptions = async () => {
      const allChampionStats = await getAllChampionStats();
      const allChampionDetails = await getAllChampionDetails();
      await checkLaneFilterOption(allChampionStats);
      checkSortingOption(allChampionStats);
      checkActiveRoleOptions(allChampionDetails);
      checkActiveDifficultyOptions(allChampionDetails);
    };

    const hideChampionsSection = () => {
      const championsSection = document.querySelector('.champions-section');
      championsSection.style.visibility = 'hidden';
    };

    const showChampionsSection = () => {
      const championsSection = document.querySelector('.champions-section');
      championsSection.style.visibility = 'visible';
    };

    const removeChampionsPageListener = () => {
      const championsPage = document.querySelector('#champions-page');
      championsPage.removeEventListener('click', championsPageClickEvents);
    };

    const addChampionsPageListener = () => {
      const championsPage = document.querySelector('#champions-page');
      championsPage.addEventListener('click', championsPageClickEvents);
    };

    const showLoader = () => {
      const loader = document.querySelector('.loader');
      loader.style.display = 'block';
    };

    const hideLoader = () => {
      const loader = document.querySelector('.loader');
      loader.style.display = 'none';
    };

    const filterAndSortChampionsSection = async (waitTime) => {
      hideChampionsSection();
      showLoader();
      removeChampionsPageListener();
      await checkOptions();
      setTimeout(() => {
        showChampionsSection();
        hideLoader();
      }, waitTime);
      addChampionsPageListener();
    };

    /* click event responses */
    if (Array.from(event.target.classList).includes('dropdown-btn')) {
      dropdownOptionsToggle(event.target);
    }

    if (event.target.parentElement.className === 'champion-container shown') {
      displayChampionModal(event.target.parentElement.dataset.id);
    }

    if (event.target.parentElement.parentElement.className === 'champion-container shown') {
      displayChampionModal(event.target.parentElement.parentElement.dataset.id);
    }

    if (Array.from(event.target.classList).includes('multi-select')) {
      toggleDropdownOption(event.target);
      filterAndSortChampionsSection(600);
    }

    if (Array.from(event.target.classList).includes('single-select')) {
      selectSingleDropdownOption(event.target);
      filterAndSortChampionsSection(1000);
    }

    if (Array.from(event.target.classList).includes('header-option')) {
      selectLaneFilterOption(event.target);
      filterAndSortChampionsSection(600);
    }

    if (event.target.className === 'app-name') {
      redirectToFrontPage();
    }
  };

  const championsPageKeyEvents = (event) => {
    const { activeElement } = document;

    if (event.key === 'Enter') {
      if (activeElement && activeElement.className === 'champion-container shown') {
        displayChampionModal(activeElement.dataset.id);
      }

      if (activeElement && activeElement.className === 'champion-img') {
        displayChampionModal(activeElement.parentElement.dataset.id);
      }
    }
  };

  const championsPageListeners = () => {
    const championsPage = document.querySelector('#champions-page');
    championsPage.addEventListener('click', championsPageClickEvents);
    championsPage.addEventListener('keydown', championsPageKeyEvents);
  };

  return {
    championsPageListeners,
    displayChampionModal,
  };
})();

export default ChampionsPageController;
