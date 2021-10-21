const fetchChampionDetails = async (championId) => {
  const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion/${championId}.json`, { mode: 'cors' });
  const champions = await response.json();
  const championDetails = champions.data[championId];

  return championDetails;
};

const getChampionImages = async (championDetails) => {
  const profileImgNumber = championDetails.skins[0].num;
  const profileImgUrl = (`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championDetails.id}_${profileImgNumber}.jpg`);

  const skinImgs = championDetails.skins.slice(1);
  console.log(skinImgs);
  const skinImgUrls = [];
  skinImgs.forEach((img) => {
    skinImgUrls.push(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championDetails.id}_${img.num}.jpg`);
  });

  return {
    profileImg: profileImgUrl,
    skinImgs: skinImgUrls,
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
  const championAbilities = getChampionPassives(championDetails);
  const championSpells = getChampionSpells(championDetails);

  return {
    name: championDetails.name,
    title: championDetails.title,
    lore: championDetails.lore,
    role: championDetails.tags[0],
    passive: championAbilities,
    profileImg: championImages.profileImg,
    skinImgs: championImages.skinImgs,
    championSpells,
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getChampionData,
};
