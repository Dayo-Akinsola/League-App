const fetchChampionDetails = async (championId) => {
  const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion/${championId}.json`, { mode: 'cors' });
  const champions = await response.json();
  const championDetails = champions.data[championId];

  return championDetails;
};

const fetchChampionImages = async (championId) => {
  const championDetails = await fetchChampionDetails(championId);

  const profileImgNumber = championDetails.skins[0].num;
  const profileImgUrl = (`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${profileImgNumber}.jpg`);

  const skinImgs = championDetails.skins.slice(1);
  console.log(skinImgs);
  const skinImgUrls = [];
  skinImgs.forEach((img) => {
    skinImgUrls.push(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${img.num}.jpg`);
  });

  return {
    profileImg: profileImgUrl,
    skinImgs: skinImgUrls,
  };
};

const getChampionData = async (championId) => {
  const championDetails = await fetchChampionDetails(championId);
  const championImages = await fetchChampionImages(championId);

  return {
    name: championDetails.name,
    title: championDetails.title,
    lore: championDetails.lore,
    role: championDetails.tags[0],
    passive: championDetails.passive,
    abilities: championDetails.spells,
    profileImg: championImages.profileImg,
    skinImgs: championImages.skinImgs,
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getChampionData,
};
