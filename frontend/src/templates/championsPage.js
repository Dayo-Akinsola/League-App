import DropdownSection from '../helpers/dropdownSection';
import fetchAllChampions from '../championData/getAllChampions';
import ElementCreation from '../helpers/elementCreation';

export default async () => {
  /* Creates the filter and sorting section below the header */
  const filterSortSection = DropdownSection.createSection();

  const sortOptions = {
    sort: ['winrate', 'pickrate', 'damage'],
  };

  const roleOptions = {
    role: ['tank', 'assassin', 'fighter', 'mage', 'marksman', 'support'],
  };
  const resourceOptions = {
    resource: ['mana', 'energy', 'rage', 'none', 'courage', 'shield', 'fury', 'ferocity', 'grit'],
  };
  const multiOptionArrays = [roleOptions, resourceOptions];

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
  const championsSection = ElementCreation.createChildElementWithClass('div', 'champions-section', championsPage);
  const allChampions = await fetchAllChampions();
  const allChampionsArray = Object.values(allChampions);
  allChampionsArray.forEach((champion) => {
    const championContainer = ElementCreation.createChildElementWithClass('div', 'champion-container shown', championsSection);
    championContainer.dataset.id = champion.id;
    const championImgUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
    ElementCreation.createChildImageElementWithClass(
      'champion-img', championContainer, championImgUrl, champion.id,
    );

    const championNameWrapper = ElementCreation.createChildElementWithClass('div', 'champion-name-wrapper', championContainer);
    const championName = ElementCreation.createChildElementWithClass('span', 'champion-name', championNameWrapper);
    championName.textContent = champion.name;
  });
};
