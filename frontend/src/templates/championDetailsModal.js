import { renderHeaderDetails, images } from './renderHelpers';
import ElementCreation from '../helpers/elementCreation';

const championDetailsModal = async (championData) => {
  renderHeaderDetails(championData, 'main');

  const championRoles = document.querySelector('.champion-roles');
  const { roles } = championData;
  roles.forEach((role) => {
    const championRole = ElementCreation.createChildElementWithClass('div', 'champion-role', championRoles);
    const championRoleName = ElementCreation.createChildElementWithClass('span', 'champion-role-name', championRole);
    championRoleName.textContent = role;
    ElementCreation.createChildImageElementWithClass('champion-role-image', championRole, `${images[`${role}.png`]}`, role);
  });
  /* The type of resource that a champion uses e.g. mana, energy etc */
  const championResource = ElementCreation.createChildElementWithClass('div', 'champion-resource', championRoles);
  const { resource } = championData;
  const championResourceName = ElementCreation.createChildElementWithClass('span', 'champion-resource-name', championResource);
  championResourceName.textContent = resource;
  ElementCreation.createChildImageElementWithClass('champion-resource-image', championResource, `${images[`${resource}.png`]}`, resource);

  /* Creates the main content of the main modal */
  const loreContainer = document.querySelector('.lore-container');
  const championLore = ElementCreation.createChildElementWithClass('span', 'champion-lore', loreContainer);
  championLore.textContent = championData.lore;

  const abilitiesContainer = document.querySelector('.abilities-container');
  const abilityDetails = ElementCreation.createChildElementWithClass('div', 'ability-details', abilitiesContainer);
  const abilityImgs = ElementCreation.createChildElementWithClass('div', 'ability-imgs', abilityDetails);
  const passiveImg = ElementCreation.createChildImageElementWithClass(
    'spell-img clicked', abilityImgs, championData.passive.passiveImgUrl, championData.passive.passiveName,
  );
  passiveImg.id = 'passive-img';

  const imgLabel = ['Q', 'W', 'E', 'R'];
  let index = 0;

  championData.spells.forEach((spell) => {
    const spellImg = ElementCreation.createChildImageElementWithClass(
      'spell-img', abilityImgs, spell.imgUrl, spell.name,
    );
    // Grabs letter Q, W, E or R which uniquely identifies a champions abilities
    spellImg.id = `${imgLabel[index]}-img`;
    index += 1;
  });

  /* loops through champion's passive and 4 abilities */
  for (let i = 0; i < 5; i += 1) {
    const abilityInfo = document.createElement('div');
    const abilityName = ElementCreation.createChildElementWithClass('span', 'ability-name', abilityInfo);
    const abilityDescription = ElementCreation.createChildElementWithClass('span', 'ability-description', abilityInfo);
    const abilityLabel = ['Passive', 'Q', 'W', 'E', 'R'];

    if (i === 0) {
      abilityInfo.className = 'ability-info active';
      abilityInfo.id = 'passive-ability';
      abilityName.textContent = `${championData.passive.passiveName} (${abilityLabel[i]})`;
      abilityDescription.innerHTML = championData.passive.passiveDescription;
    } else {
      const cooldown = document.createElement('span');
      cooldown.className = 'ability-cooldown';
      cooldown.textContent = `Cooldown: ${championData.spells[i - 1].cooldown} seconds`;
      abilityInfo.appendChild(cooldown);

      abilityInfo.className = 'ability-info';
      abilityInfo.id = `${abilityLabel[i]}-ability`;
      abilityName.textContent = `${championData.spells[i - 1].name} (${abilityLabel[i]})`;
      abilityDescription.innerHTML = championData.spells[i - 1].description;
    }

    abilityDetails.appendChild(abilityInfo);
  }

  const championTipsSection = document.querySelector('.champion-tips-section');
  const championTips = ElementCreation.createChildElementWithClass('div', 'champion-tips', championTipsSection);

  for (let i = 0; i < 2 && i < championData.tips.length; i += 1) {
    const championTip = ElementCreation.createChildElementWithClass('span', 'champion-tip', championTips);
    championTip.textContent = `${championData.tips[i]}`;
  }
};

export default championDetailsModal;
