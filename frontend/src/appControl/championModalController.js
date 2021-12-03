const ChampionModalController = (() => {
  const toggleActiveAbility = (clickedAbilityId) => {
    const abilityImages = document.querySelectorAll('.spell-img');
    const abilityInfos = document.querySelectorAll('.ability-info');

    abilityImages.forEach((img) => {
      img.classList.remove('clicked');
    });
    abilityInfos.forEach((info) => {
      info.classList.remove('active');
    });

    const clickedImage = document.querySelector(`#${clickedAbilityId}-img`);
    clickedImage.className = 'spell-img clicked';

    const activeAbility = document.querySelector(`#${clickedAbilityId}-ability`);
    activeAbility.className = 'ability-info active';
  };

  const changeModalTemplate = (clickedModalNavLink) => {
    const templates = document.querySelectorAll('.modal-template');
    templates.forEach((template) => {
      const templateName = template.id.substring(0, template.id.indexOf('-'));
      if (templateName === clickedModalNavLink.id) {
        const chosenTemplate = template;
        chosenTemplate.style.display = 'block';
      } else {
        const hiddenTemplate = template;
        hiddenTemplate.style.display = 'none';
      }
    });
  };

  const dispayItemDetails = (hoveredItemImage) => {
    const itemDetails = hoveredItemImage.nextElementSibling;
    itemDetails.style.display = 'flex';
  };

  const hideItemDetails = (unhoveredItemImage) => {
    const itemDetails = unhoveredItemImage.nextElementSibling;
    itemDetails.style.display = 'none';
  };

  const toggleSkinImages = (arrowClassList) => {
    const skinImagesContainer = document.querySelector('.skin-images-container');
    const currentShownImage = document.querySelector('.skin-image-container.shown');
    const skinName = document.querySelector('.skin-name');

    currentShownImage.className = 'skin-image-container';
    const firstImage = skinImagesContainer.firstElementChild;
    const lastImage = skinImagesContainer.lastElementChild;

    if (firstImage === currentShownImage && arrowClassList.includes('left-arrow')) {
      lastImage.className = 'skin-image-container shown';
      skinName.textContent = lastImage.id;
    } else if (lastImage === currentShownImage && arrowClassList.includes('right-arrow')) {
      firstImage.className = 'skin-image-container shown';
      skinName.textContent = firstImage.id;
    } else if (arrowClassList.includes('right-arrow')) {
      currentShownImage.nextElementSibling.className = 'skin-image-container shown';
      skinName.textContent = currentShownImage.nextElementSibling.id;
    } else {
      currentShownImage.previousElementSibling.className = 'skin-image-container shown';
      skinName.textContent = currentShownImage.previousElementSibling.id;
    }
  };

  const clearMainModal = () => {
    const mainContainer = document.querySelector('#main-container');
    const championName = mainContainer.querySelector('.champion-name');
    const championTitle = mainContainer.querySelector('.champion-title');
    const championRoles = mainContainer.querySelector('.champion-roles');
    const championLore = mainContainer.querySelector('.champion-lore');
    const abilityDetails = mainContainer.querySelector('.ability-details');
    const championTips = mainContainer.querySelector('.champion-tips');

    const mainModalHeader = [championName, championTitle, championRoles];
    mainModalHeader.forEach((element) => {
      const currentElement = element;
      currentElement.textContent = '';
    });

    championLore.remove();
    abilityDetails.remove();
    championTips.remove();
  };

  const clearStatsModal = () => {
    const statsContainer = document.querySelector('#stats-container');
    const championName = statsContainer.querySelector('.champion-name');
    const championTitle = statsContainer.querySelector('.champion-title');
    const championStatsOverview = statsContainer.querySelector('.champion-stats-overview');
    const alldamageStats = statsContainer.querySelectorAll('.damage-stats');
    const itemSetsContainer = statsContainer.querySelector('.item-sets-container');
    const bestMatchups = statsContainer.querySelector('.best-matchups');
    const worstMatchups = statsContainer.querySelector('.worst-matchups');

    const statsModalHeader = [championName, championTitle, championStatsOverview];
    statsModalHeader.forEach((element) => {
      const currentElement = element;
      currentElement.textContent = '';
    });
    alldamageStats.forEach((damageStat) => {
      const damageStatElement = damageStat;
      damageStatElement.remove();
    });
    const statsModalContent = [itemSetsContainer, bestMatchups, worstMatchups];
    statsModalContent.forEach((content) => {
      const contentElement = content;
      contentElement.remove();
    });
  };

  const clearSkinsModal = () => {
    const skinImagesContainer = document.querySelector('.skin-images-container');
    skinImagesContainer.remove();
  };

  const closeChampionModal = () => {
    const modal = document.querySelector('.modal');
    const mainContainer = document.querySelector('#main-container');
    const statsContainer = document.querySelector('#stats-container');
    const skinsContainer = document.querySelector('#skins-container');

    modal.style.display = 'none';
    mainContainer.style.display = 'block';
    statsContainer.style.display = 'none';
    skinsContainer.style.display = 'none';
  };

  const modalClickEvents = (event) => {
    const modal = document.querySelector('.modal');

    if (event.target.className === 'spell-img') {
      const dashIndex = event.target.id.indexOf('-');
      const abilityId = event.target.id.slice(0, dashIndex);
      toggleActiveAbility(abilityId);
    }

    if (event.target.className === 'modal-nav-link') {
      changeModalTemplate(event.target);
    }

    if (Array.from(event.target.classList).includes('img-scroll-arrow')) {
      toggleSkinImages(Array.from(event.target.classList));
    }

    if (event.target.className === 'close-modal-btn') {
      modal.removeEventListener('click', modalClickEvents);
      closeChampionModal();
      clearMainModal();
      clearStatsModal();
      clearSkinsModal();
    }
  };

  const modalMouseoverEvents = (event) => {
    if (event.target.className === 'item-img'
      || event.target.className === 'component-item-img') {
      dispayItemDetails(event.target);
    }
  };

  const modalMouseoutEvents = (event) => {
    if (event.target.className === 'item-img'
    || event.target.className === 'component-item-img') {
      if (!event.target) return;

      let { relatedTarget } = event;

      while (relatedTarget) {
        if (relatedTarget === event.target) return;
        relatedTarget = relatedTarget.parentNode;
      }

      hideItemDetails(event.target);
    }
  };

  const modalArrowEvents = (event) => {
    const skinsContainer = document.querySelector('#skins-container');
    if (skinsContainer.style.display === 'block') {
      if (event.key === 'ArrowRight') {
        const rightArrow = document.querySelector('.right-arrow');
        toggleSkinImages(Array.from(rightArrow.classList));
      }

      if (event.key === 'ArrowLeft') {
        const leftArrow = document.querySelector('.left-arrow');
        toggleSkinImages(Array.from(leftArrow.classList));
      }
    }
  };

  const modalChangeListeners = () => {
    const modal = document.querySelector('.modal');

    modal.addEventListener('click', modalClickEvents);
    modal.addEventListener('mouseover', modalMouseoverEvents);
    modal.addEventListener('mouseout', modalMouseoutEvents);
    document.addEventListener('keydown', modalArrowEvents);
  };

  return {
    modalChangeListeners,
  };
})();

export default ChampionModalController;
