import ChampionsPageController from './championsPageController';

const SearchbarController = (() => {
  const showAutoCompleteNames = () => {
    const autoCompleteNames = document.querySelector('.auto-complete-names');
    autoCompleteNames.style.display = 'block';
  };

  const hideAutoCompleteNames = () => {
    const autoCompleteNames = document.querySelector('.auto-complete-names');
    autoCompleteNames.style.display = 'none';
  };

  const searchbarFocusInEvent = (event) => {
    if (event.target.className === 'search') {
      showAutoCompleteNames();
      event.target.focus();
      // const autoCompleteNames = document.querySelector('.auto-complete-names');
      // autoCompleteNames.firstElementChild.focus();
    }
  };

  const searchbarFocusoutEvent = (event) => {
    if (!event.relatedTarget || (event.relatedTarget.className !== 'auto-complete-name-wrapper' && event.relatedTarget.className !== 'search')) {
      console.log(event.target);
      hideAutoCompleteNames();
    }
  };

  const searchBarInputEvent = (event) => {
    if (event.target.className === 'search') {
      const inputValue = event.target.value;
      const autoCompleteNames = document.querySelectorAll('.auto-complete-name');
      autoCompleteNames.forEach((autoCompleteName) => {
        const name = autoCompleteName;
        if (name.id.toLowerCase().includes(inputValue.toLowerCase())) {
          name.parentElement.style.display = 'block';
        } else {
          name.parentElement.style.display = 'none';
        }
      });
    }
  };

  const searchbarKeydownEvents = (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      let { activeElement } = document;
      let goToStart;
      const action = {
        ArrowUp: 'previous', ArrowDown: 'next',
      };

      if (activeElement.className === 'search' && event.key === 'ArrowDown') {
        activeElement = activeElement.nextElementSibling.firstElementChild;
        /* Skips autocomplete names which are currently not displayed */
        while (activeElement.style.display === 'none') {
          activeElement = activeElement.nextElementSibling;
        }
        activeElement.focus();
      } else {
        activeElement = activeElement[`${action[event.key]}ElementSibling`];
        while (activeElement && activeElement.style.display === 'none') {
          activeElement = activeElement[`${action[event.key]}ElementSibling`];
        }
        if (!activeElement) {
          goToStart = action[event.key] === 'next' || event.key === 'Home';
          const autoCompleteNames = document.querySelector('.auto-complete-names');
          activeElement = autoCompleteNames.children[
            goToStart ? 0 : autoCompleteNames.children.length - 1
          ];
          while (activeElement && activeElement.style.display === 'none') {
            activeElement = activeElement[`${action[event.key]}ElementSibling`];
          }
        }
        activeElement.focus();
      }
    }

    if (event.key === 'Enter') {
      const { activeElement } = document;
      if (activeElement && activeElement.className === 'auto-complete-name-wrapper') {
        const autoCompleteName = activeElement.firstElementChild;
        ChampionsPageController.displayChampionModal(autoCompleteName.dataset.championId);
      }
    }
  };

  const searchContainerListeners = () => {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.addEventListener('focusin', searchbarFocusInEvent);
    document.addEventListener('focusout', searchbarFocusoutEvent);
    searchContainer.addEventListener('input', searchBarInputEvent);
    searchContainer.addEventListener('keydown', searchbarKeydownEvents);
  };

  return {
    searchContainerListeners,
  };
})();

export default SearchbarController;
