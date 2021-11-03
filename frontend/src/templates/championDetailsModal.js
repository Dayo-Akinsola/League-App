import { getChampionDetails } from '../championData/championDetails';
import { renderHeaderDetails } from './renderHelpers';

const importAll = (r) => {
  const images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const championDetailsModal = async (championId) => {
  const championData = await getChampionDetails(championId);

  renderHeaderDetails(championData, 'main');

  const championRoles = document.querySelector('.champion-roles');
  const { roles } = championData;
  roles.forEach((role) => {
    const championRole = document.createElement('div');
    const championRoleName = document.createElement('span');
    const championRoleImage = document.createElement('img');

    championRole.className = 'champion-role';
    championRoleName.className = 'champion-role-name';
    championRoleImage.className = 'champion-role-image';

    championRoleName.textContent = role;
    championRoleImage.src = `${images[`${role}.png`]}`;
    championRoleImage.alt = `${role}.png`;

    championRole.appendChild(championRoleName); championRole.appendChild(championRoleImage);
    championRoles.appendChild(championRole);
  });
  // The type of energy that a champion uses e.g. mana, energy etc
  const championResource = document.createElement('div');
  const { resource } = championData;
  championResource.className = 'champion-resource';
  const championResourceName = document.createElement('span');
  const championResourceImage = document.createElement('img');
  championResourceName.className = 'champion-resource-name';
  championResourceImage.className = 'champion-resource-image';
  championResourceName.textContent = resource;
  championResourceImage.src = `${images[`${resource}.png`]}`; championResourceImage.alt = `${resource}.png`;

  championResource.appendChild(championResourceName);
  championResource.appendChild(championResourceImage);
  championRoles.appendChild(championResource);

  const championLore = document.querySelector('.champion-lore');
  championLore.textContent = championData.lore;

  const abilityPictures = document.querySelector('.ability-pictures');

  const passiveImg = document.createElement('img');
  passiveImg.className = 'spell-img clicked';
  passiveImg.id = 'passive-img';
  passiveImg.src = championData.passive.passiveImgUrl;
  passiveImg.alt = `${championData.passive.passiveName}.png`;
  abilityPictures.appendChild(passiveImg);

  const imgLabel = ['Q', 'W', 'E', 'R'];
  let index = 0;

  championData.spells.forEach((spell) => {
    const spellImg = document.createElement('img');
    spellImg.className = 'spell-img';
    // Grabs letter Q, W, E or R which unique identifies a champions abilities
    spellImg.id = `${imgLabel[index]}-img`;
    spellImg.src = spell.imgUrl;
    spellImg.alt = `${spell.name}.png`;
    abilityPictures.appendChild(spellImg);
    index += 1;
  });

  const abilitiesContainer = document.querySelector('.abilities-container');
  // loops through champion's passive and 4 abilities
  for (let i = 0; i < 5; i += 1) {
    const abilityInfo = document.createElement('div');
    const abilityName = document.createElement('span');
    const abilityDescription = document.createElement('span');
    abilityName.className = 'ability-name'; abilityDescription.className = 'ability-description';
    abilityInfo.appendChild(abilityName); abilityInfo.appendChild(abilityDescription);
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

    abilitiesContainer.appendChild(abilityInfo);
  }

  const championTips = document.querySelector('.champion-tips');
  championData.tips.forEach((tip) => {
    const championTip = document.createElement('span');
    championTip.className = 'champion-tip';
    championTip.textContent = `${tip}`;
    championTips.appendChild(championTip);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { championDetailsModal };
