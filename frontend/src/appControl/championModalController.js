const ChampionModalController = () => {
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
      if (template.id.substring(0, template.id.indexOf('-')) === clickedModalNavLink.id) {
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

  const modalChangeListeners = () => {
    const modal = document.querySelector('.modal');

    modal.addEventListener('click', (event) => {
      if (event.target.className === 'spell-img') {
        const dashIndex = event.target.id.indexOf('-');
        const abilityId = event.target.id.slice(0, dashIndex);
        toggleActiveAbility(abilityId);
      }

      if (event.target.className === 'modal-nav-link') {
        changeModalTemplate(event.target);
      }
    });

    let currElement = null;
    modal.addEventListener('mouseover', (event) => {
      if (event.target.className === 'item-img'
      || event.target.className === 'component-item-img') {
        if (currElement) return;
        // console.log('in');
        currElement = event.target;
        dispayItemDetails(currElement);
      }
    });

    modal.addEventListener('mouseout', (event) => {
      if (event.target.className === 'item-img'
      || event.target.className === 'component-item-img') {
        if (!currElement) return;

        let { relatedTarget } = event;

        while (relatedTarget) {
          if (relatedTarget === currElement) return;
          console.log(relatedTarget);
          relatedTarget = relatedTarget.parentNode;
        }
        // console.log('out');

        hideItemDetails(currElement);
        currElement = null;
      }
    });
  };

  return {
    modalChangeListeners,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { ChampionModalController };
