import getChampionDetails from '../championData/championDetails';
import getChampionStats from '../championData/championStats';
import championDetailsModal from '../templates/championDetailsModal';
import championStatsModal from '../templates/championStatsModal';
import championSkinsModal from '../templates/championSkinsModal';
import ChampionModalController from './championModalController';

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
    championDetailsModal(championDetails);
    championStatsModal(championDetails, championStats);
    championSkinsModal(championDetails);
    modal.style.display = 'block';
    ChampionModalController.modalChangeListeners();
  };

  const championsPageListeners = () => {
    const championsPage = document.querySelector('#champions-page');

    championsPage.addEventListener('click', (event) => {
      if (Array.from(event.target.classList).includes('dropdown-btn')) {
        dropdownOptionsToggle(event.target);
      }

      if (event.target.parentElement.className === 'champion-container') {
        displayChampionModal(event.target.parentElement.dataset.id);
      }

      if (event.target.parentElement.parentElement.className === 'champion-container') {
        displayChampionModal(event.target.parentElement.parentElement.dataset.id);
      }
    });
  };

  return {
    championsPageListeners,
  };
})();

export default ChampionsPageController;
