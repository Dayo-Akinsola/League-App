import { getChampionData } from './championData';

const ChampionDetailsModal = async (championId) => {
  const championData = await getChampionData(championId);

  const championTitle = document.querySelector('.champion-title');
  championTitle.textContent = championData.title;

  const championName = document.querySelector('.champion-name');
  championName.textContent = championData.name;

  const championLore = document.querySelector('.champion-lore');
  championLore.textContent = championData.lore;

  const abilityPictures = document.querySelector('.ability-pictures');

  const passiveImg = document.createElement('img');
  passiveImg.className = 'passive-img';
  passiveImg.src = championData.passive.passiveImgUrl;
  passiveImg.alt = `${championData.passive.passiveName}.png`;
  abilityPictures.appendChild(passiveImg);

  championData.championSpells.forEach((spell) => {
    const spellImg = document.createElement('img');
    spellImg.className = 'spell-img';
    spellImg.src = spell.imgUrl;
    spellImg.alt = `${spell.name}.png`;
    abilityPictures.appendChild(spellImg);
  });

  const abilityName = document.querySelector('.ability-name');
  abilityName.textContent = championData.passive.passiveName;
  const abilityDescription = document.querySelector('.ability-description');
  abilityDescription.textContent = championData.passive.passiveDescription;

  const championImgContainer = document.querySelector('.champion-img-container');
  const championImg = document.createElement('img');
  championImg.className = 'champion-img';
  console.log(championData);
  championImg.src = `${championData.profileImg}`;
  championImg.alt = `${championData.name}.jpg`;
  championImgContainer.appendChild(championImg);

  const championTips = document.querySelector('.champion-tips');
  championData.tips.forEach((tip) => {
    const championTip = document.createElement('span');
    championTip.className = 'champion-tip';
    championTip.textContent = `${tip}`;
    championTips.appendChild(championTip);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { ChampionDetailsModal };
