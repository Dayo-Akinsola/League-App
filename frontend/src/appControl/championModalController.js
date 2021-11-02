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

  const modalChangeListeners = () => {
    const championDetailsContainer = document.querySelector('.champion-details-container');

    championDetailsContainer.addEventListener('click', (event) => {
      if (event.target.className === 'spell-img') {
        const dashIndex = event.target.id.indexOf('-');
        const abilityId = event.target.id.slice(0, dashIndex);
        toggleActiveAbility(abilityId);
      }
    });
  };

  return {
    modalChangeListeners,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { ChampionModalController };
