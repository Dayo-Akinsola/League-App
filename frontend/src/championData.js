const fetchChampionDetails = async (championId) => {
  const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion/${championId}.json`, { mode: 'cors' });
  const champions = await response.json();
  const championDetails = champions.data[championId];

  return championDetails;
};

const getChampionImages = (championDetails) => {
  const profileImgNumber = championDetails.skins[0].num;
  const profileImgUrl = (`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championDetails.id}_${profileImgNumber}.jpg`);
  const skinImgs = championDetails.skins.slice(1);
  const skinImgUrls = [];
  skinImgs.forEach((img) => {
    skinImgUrls.push(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championDetails.id}_${img.num}.jpg`);
  });

  return {
    profileImgUrl,
    skinImgUrls,
  };
};

const getChampionPassives = (championDetails) => {
  const passiveData = championDetails.passive;
  const passiveName = passiveData.name;
  const passiveDescription = passiveData.description;
  const passiveId = passiveData.image.full;
  const passiveImgUrl = `https://ddragon.leagueoflegends.com/cdn/11.21.1/img/passive/${passiveId}`;

  return {
    passiveName,
    passiveDescription,
    passiveImgUrl,
  };
};

const getChampionSpells = (championDetails) => {
  const spellsData = championDetails.spells;
  const spells = [];

  spellsData.forEach((spell) => {
    const spellObject = {
      name: spell.name,
      id: spell.id,
      description: spell.description,
      costBurn: spell.costBurn,
      costType: spell.costType,
      cooldown: spell.cooldownBurn,
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/${spell.id}.png`,
    };
    spells.push(spellObject);
  });

  return spells;
};

const getChampionData = async (championId) => {
  const championDetails = await fetchChampionDetails(championId);
  const championImages = getChampionImages(championDetails);
  const championPassive = getChampionPassives(championDetails);
  const spells = getChampionSpells(championDetails);

  // Make first letter of the champion title a capital letter.
  // eslint-disable-next-line max-len
  const championTitle = championDetails.title.replace(championDetails.title[0], championDetails.title[0].toUpperCase());

  if (championDetails.partype === 'None') {
    championDetails.partype = 'Manaless';
  }

  return {
    name: championDetails.name,
    id: championDetails.id,
    title: championTitle,
    lore: championDetails.lore,
    roles: championDetails.tags,
    resource: championDetails.partype,
    passive: championPassive,
    profileImg: championImages.profileImgUrl,
    skinImgs: championImages.skinImgUrls,
    spells,
    tips: championDetails.allytips,
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getChampionData,
};
