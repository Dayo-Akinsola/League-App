import './stylesheets/frontpage.scss';
import './stylesheets/modals.scss';
import ElementCreation from './helpers/elementCreation';
import { getAllChampionDetails } from './championData/getAllChampions';
import SearchbarController from './appControl/searchbarController';
import backdropChange from './appControl/backdropChangeInterval';

const createSearchDropdown = async () => {
  const allChampions = await getAllChampionDetails();
  const allChampionsArray = Object.values(allChampions);

  const searchContainers = document.querySelectorAll('.search-container');
  searchContainers.forEach((searchContainer) => {
    const autoCompleteNames = ElementCreation.createChildElementWithClass(
      'div', 'auto-complete-names', searchContainer,
    );
    allChampionsArray.forEach((champion) => {
      const championName = champion.name;
      const championId = champion.id;
      const autoCompleteNameWrapper = ElementCreation.createChildElementWithClass(
        'div', 'auto-complete-name-wrapper', autoCompleteNames,
      );
      autoCompleteNameWrapper.tabIndex = '-1';
      const autoCompleteName = ElementCreation.createChildElementWithClass(
        'span', 'auto-complete-name', autoCompleteNameWrapper,
      );
      autoCompleteName.textContent = championName;
      autoCompleteName.dataset.championId = championId;
      autoCompleteName.id = championName;
    });
  });
};

const renderPage = async () => {
  await createSearchDropdown();
  SearchbarController.searchContainerListeners();
};

renderPage();
backdropChange();
