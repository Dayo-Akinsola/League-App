import ChampionsPageController from './championsPageController';

const SearchbarController = (() => {
  const showAutoCompleteNames = (searchContainer) => {
    const autoCompleteNames = searchContainer.querySelector('.auto-complete-names');
    autoCompleteNames.style.display = 'block';
  };

  const hideAutoCompleteNames = () => {
    const autoCompleteNameElements = document.querySelectorAll('.auto-complete-names');
    autoCompleteNameElements.forEach((autoCompleteNameElement) => {
      const autoCompleteNames = autoCompleteNameElement;
      autoCompleteNames.style.display = 'none';
    });
  };

  const searchbarFocusInEvent = (event) => {
    if (event.target.className === 'search') {
      const searchContainer = event.target.parentElement;
      showAutoCompleteNames(searchContainer);
      event.target.focus();
    }
  };

  const searchbarFocusoutEvent = (event) => {
    if (!event.relatedTarget || (event.relatedTarget.className !== 'auto-complete-name-wrapper' && event.relatedTarget.className !== 'search')) {
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

  const searchbarKeydownEvents = async (event) => {
    if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && event.target !== document.querySelector('body')) {
      let { activeElement } = document;
      event.preventDefault();

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
        /* Checks which search bar dropdown is currently displayed */
        const autoCompleteNameElements = document.querySelectorAll('.auto-complete-names');
        const autoCompleteNames = Array.from(autoCompleteNameElements).filter(
          (autoCompleteNameElement) => {
            const isShowing = autoCompleteNameElement.style.display === 'block';
            return isShowing;
          },
        );
        if (autoCompleteNames[0] !== undefined && !activeElement) {
          /* Returns to the start or the end of the dropdown when an arrow key is pressed */
          goToStart = action[event.key] === 'next' || event.key === 'Home';
          activeElement = autoCompleteNames[0].children[
            goToStart ? 0 : autoCompleteNames[0].children.length - 1
          ];
          while (activeElement && activeElement.style.display === 'none') {
            activeElement = activeElement[`${action[event.key]}ElementSibling`];
          }
        }
        if (activeElement) {
          activeElement.focus();
        }
      }
    }

    if (event.key === 'Enter') {
      const { activeElement } = document;
      if (activeElement && activeElement.className === 'auto-complete-name-wrapper') {
        const searchContainerClassName = activeElement.parentElement.parentElement.classList[1];
        const autoCompleteName = activeElement.firstElementChild;

        /* Checks which page the search bar is on */
        if (searchContainerClassName === 'desktop-search-container'
            || searchContainerClassName === 'mobile-search-container') {
          localStorage.setItem('championId', autoCompleteName.dataset.championId);
          window.location.href = 'champions.html';
        } else {
          await ChampionsPageController.displayChampionModal(autoCompleteName.dataset.championId);
        }
      }
    }
  };

  const searchbarClickEvents = async (event) => {
    const clickAutoCompleteName = async (searchContainerClassName, autoCompleteName) => {
      if (searchContainerClassName === 'desktop-search-container'
      || searchContainerClassName === 'mobile-search-container') {
        localStorage.setItem('championId', autoCompleteName.dataset.championId);
        window.location.href = 'champions.html';
      } else {
        await ChampionsPageController.displayChampionModal(autoCompleteName.dataset.championId);
        const autoCompleteNameElements = document.querySelectorAll('.auto-complete-names');
        autoCompleteNameElements.forEach((autoCompleteNameElement) => {
          const autoCompleteNames = autoCompleteNameElement;
          autoCompleteNames.style.display = 'none';
        });
      }
    };
    const searchContainer = event.target.parentElement.parentElement;
    if (event.target.className === 'auto-complete-name-wrapper') {
      const searchContainerClassName = searchContainer.classList[1];
      const autoCompleteName = event.target.firstChild;
      clickAutoCompleteName(searchContainerClassName, autoCompleteName);
    }

    if (event.target.className === 'auto-complete-name') {
      const searchContainerClassName = searchContainer.parentElement.classList[1];
      const autoCompleteName = event.target;
      clickAutoCompleteName(searchContainerClassName, autoCompleteName);
    }
  };

  const searchContainerListeners = () => {
    // const searchContainer = document.querySelector('.search-container');
    document.addEventListener('focusin', searchbarFocusInEvent);
    document.addEventListener('focusout', searchbarFocusoutEvent);
    document.addEventListener('input', searchBarInputEvent);
    document.addEventListener('keydown', searchbarKeydownEvents);
    document.addEventListener('click', searchbarClickEvents);
  };

  return {
    searchContainerListeners,
  };
})();

export default SearchbarController;
