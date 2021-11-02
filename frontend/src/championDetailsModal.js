import { getChampionData } from './championData';

const importAll = (r) => {
  const images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const ChampionDetailsModal = async (championId) => {
  const championData = await getChampionData(championId);

  const detailsContainer = document.querySelector('.champion-details-container');
  detailsContainer.style.background = `no-repeat url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_0.jpg)`;
  detailsContainer.style.backgroundSize = 'cover';

  const championTitle = document.querySelector('.champion-title');
  championTitle.textContent = championData.title;

  const championName = document.querySelector('.champion-name');
  championName.textContent = championData.name;

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

  championData.spells.forEach((spell) => {
    const spellImg = document.createElement('img');
    spellImg.className = 'spell-img';
    // Grabs letter Q, W, E or R which unique identifies a champions abilities
    spellImg.id = `${spell.id[spell.id.length - 1]}-img`;
    spellImg.src = spell.imgUrl;
    spellImg.alt = `${spell.name}.png`;
    abilityPictures.appendChild(spellImg);
  });

  const abilitiesContainer = document.querySelector('.abilities-container');
  // loops through champion's passive and 4 abilities
  for (let i = 0; i < 5; i += 1) {
    const abilityInfo = document.createElement('div');
    const abilityName = document.createElement('span');
    const abilityDescription = document.createElement('span');
    abilityName.className = 'ability-name'; abilityDescription.className = 'ability-description';
    abilityInfo.appendChild(abilityName); abilityInfo.appendChild(abilityDescription);

    if (i === 0) {
      abilityInfo.className = 'ability-info active';
      abilityInfo.id = 'passive-ability';
      abilityName.textContent = championData.passive.passiveName;
      abilityDescription.innerHTML = championData.passive.passiveDescription;
    } else {
      const cooldown = document.createElement('span');
      cooldown.className = 'ability-cooldown';
      cooldown.textContent = `Cooldown: ${championData.spells[i - 1].cooldown} seconds`;
      abilityInfo.appendChild(cooldown);

      const spellId = championData.spells[i - 1].id;
      abilityInfo.className = 'ability-info';
      abilityInfo.id = `${spellId[spellId.length - 1]}-ability`;
      abilityName.textContent = `${championData.spells[i - 1].name} (${spellId[spellId.length - 1]})`;
      abilityDescription.innerHTML = championData.spells[i - 1].description;
      console.log(abilityDescription.innerHTML);
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

  // code to create the modal navigation links
};

// eslint-disable-next-line import/prefer-default-export
export { ChampionDetailsModal };
