import ElementCreation from '../helpers/elementCreation';

const championSkinsModal = async (championDetails) => {
  const { skins } = championDetails;
  const skinsContainer = document.querySelector('#skins-container');
  const skinName = document.querySelector('.skin-name');
  const skinImagesContainer = ElementCreation.createChildElementWithClass('div', 'skin-images-container', skinsContainer);

  skins.forEach((skin) => {
    if (skin.num === 0) {
      const shownImageContainer = ElementCreation.createChildElementWithClassAndId(
        'div', 'skin-image-container shown', `Default ${championDetails.name}`, skinImagesContainer,
      );
      skinName.textContent = `Default ${championDetails.name}`;
      const shownImageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championDetails.id}_${skin.num}.jpg`;
      ElementCreation.createChildImageElementWithClass('skin-image', shownImageContainer, shownImageUrl, 'default skin');
    } else {
      const imageContainer = ElementCreation.createChildElementWithClassAndId('div', 'skin-image-container', skin.name, skinImagesContainer);
      const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championDetails.id}_${skin.num}.jpg`;
      ElementCreation.createChildImageElementWithClass('skin-image', imageContainer, imageUrl, skin.name);
    }
  });
};

export default championSkinsModal;
