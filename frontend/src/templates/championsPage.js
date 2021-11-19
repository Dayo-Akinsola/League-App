import DropdownSection from '../helpers/dropdownSection';
import { getAllChampionDetails } from '../championData/getAllChampions';
import ElementCreation from '../helpers/elementCreation';
import { createChampionContainer } from './renderHelpers';

export default async () => {
  /* Creates the filter and sorting section below the header */
  const filterSortSection = DropdownSection.createSection();

  const sortOptions = {
    sort: ['winrate', 'pickrate', 'damage'],
  };

  const roleOptions = {
    role: ['tank', 'assassin', 'fighter', 'mage', 'marksman', 'support'],
  };
  const difficultyOptions = {
    difficulty: ['low', 'medium', 'high'],
  };
  const multiOptionArrays = [roleOptions, difficultyOptions];

  const sortDropdown = new DropdownSection('sort', sortOptions.sort);
  sortDropdown.renderDropdown(filterSortSection, 'single-select');

  multiOptionArrays.forEach((optionsObject) => {
    const dropdownName = Object.keys(optionsObject)[0];
    const optionsArray = Object.values(optionsObject)[0];
    const dropdown = new DropdownSection(dropdownName, optionsArray);
    dropdown.renderDropdown(filterSortSection, 'multi-select');
  });

  /* Load all champions and render them to the champions page */
  const championsPage = document.querySelector('#champions-page');
  ElementCreation.createChildElementWithClass('div', 'loader', championsPage);
  const championsSection = ElementCreation.createChildElementWithClass('div', 'champions-section', championsPage);
  const allChampions = await getAllChampionDetails();
  const allChampionsArray = Object.values(allChampions);
  allChampionsArray.forEach((champion) => {
    createChampionContainer(champion, championsSection);
  });

  /* Creates autocomplete div for the search bar */
  const searchContainer = document.querySelector('.search-container');
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
};
