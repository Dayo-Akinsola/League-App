import getChampionDetails from '../championData/championDetails';
import getChampionStats from '../championData/championStats';
import championDetailsModal from '../templates/championDetailsModal';
import championStatsModal from '../templates/championStatsModal';
import championSkinsModal from '../templates/championSkinsModal';
import ChampionModalController from './championModalController';
import ChampionFilter from './filterChampions';
import SortChampions from './sortChampions';
import Pubsub from './pubsub';

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
    if (clickedLaneOption === activeLaneOption || championsSection.style.display === 'none') {
      return;
    }
    activeLaneOption.classList.remove('active');
    clickedLaneOption.classList.add('active');
    const laneName = clickedLaneOption.classList[0];
    ChampionFilter.filterByLane(laneName);
  };

  const sortChampions = (sortingOption) => {
    if (Array.from(sortingOption.classList).includes('winrate')) {
      SortChampions.sortChampionsByWinrate();
    } else if (Array.from(sortingOption.classList).includes('pickrate')) {
      SortChampions.sortChampionsByPickrate();
    } else {
      SortChampions.sortChampionsByDamageDone();
    }
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
      sortChampions(dropdownOption);
      return;
    }
    if (activeDropdownOption === dropdownOption) {
      deselectDropdownOption(dropdownOption);
      SortChampions.sortByDefaultOrder();
      return;
    }
    activeDropdownOption.classList.remove('active');
    dropdownOption.classList.add('active');
    sortChampions(dropdownOption);
  };

  const championsPageClickEvents = (event) => {
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
    }

    if (Array.from(event.target.classList).includes('single-select')) {
      selectSingleDropdownOption(event.target);
    }

    if (Array.from(event.target.classList).includes('header-option')) {
      selectLaneFilterOption(event.target);
    }
  };

  Pubsub.subscribe('sortOptionClicked');

  const championsPageListeners = () => {
    const championsPage = document.querySelector('#champions-page');
    championsPage.addEventListener('click', championsPageClickEvents);
  };

  return {
    championsPageListeners,
  };
})();

export default ChampionsPageController;
