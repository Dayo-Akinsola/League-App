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
const displayNumberOfMatches = async () => {
  const devUrl = 'http://127.0.0.1:5500/dist/';
  const devUrl2 = 'http://127.0.0.1:5500/dist/index.html';
  const response = (window.location.href === devUrl || window.location.href === devUrl2)
    ? await fetch('http://localhost:3001/matches', { mode: 'cors' })
    : await fetch('matches', { mode: 'cors' });
  const matchCount = await response.json();
  const appNameContainer = document.querySelector('.app-name-display-container');
  const taglineContainer = ElementCreation.createChildElementWithClass('div', 'tagline-container', appNameContainer);
  const taglineStart = ElementCreation.createChildElementWithClass('span', 'tagline-start', taglineContainer);
  taglineStart.textContent = 'Providing info and stats from ';
  const taglineMatchCount = ElementCreation.createChildElementWithClass('span', 'tagline-match-count', taglineContainer);
  taglineMatchCount.textContent = `${Math.floor(matchCount)}`;
  const taglineEnd = ElementCreation.createChildElementWithClass('span', 'tagline-end', taglineContainer);
  taglineEnd.textContent = ' League of Legends matches';
};

const renderPage = async () => {
  await displayNumberOfMatches();
  await createSearchDropdown();
  SearchbarController.searchContainerListeners();
};

renderPage();
backdropChange();
