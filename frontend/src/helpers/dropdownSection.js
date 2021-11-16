import ElementCreation from './elementCreation';

export default class DropdownSection {
  static createSection() {
    const championsPage = document.querySelector('#champions-page');
    const filterSortSection = document.createElement('div');
    filterSortSection.className = 'filter-sort-section';
    championsPage.insertBefore(
      filterSortSection, championsPage.lastChild,
    );
    return filterSortSection;
  }

  constructor(dropdownName, optionsArray) {
    this.dropdownName = dropdownName;
    this.optionsArray = optionsArray;
  }

  /* type takes a string used as a className to show if the dropdown is multi or single select */
  renderDropdown(filterSortSection, type) {
    const dropdown = ElementCreation.createChildElementWithClass('div', `${this.dropdownName}-dropdown dropdown`, filterSortSection);
    const dropdownBtn = ElementCreation.createChildElementWithClass('button', `${this.dropdownName}-dropdown-btn dropdown-btn`, dropdown);
    dropdownBtn.textContent = `${this.dropdownName[0].toUpperCase()}${this.dropdownName.slice(1)}`;
    const dropdownOptions = ElementCreation.createChildElementWithClass('div', `${this.dropdownName}-dropdown-options dropdown-options`, dropdown);

    this.optionsArray.forEach((option) => {
      const dropdownOption = ElementCreation.createChildElementWithClass('span', `${option} ${this.dropdownName} ${type} dropdown-option`, dropdownOptions);
      dropdownOption.textContent = `${option[0].toUpperCase()}${option.slice(1)}`;
    });
  }
}
