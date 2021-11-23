const fetchChampionDetails = async (championId) => {
  const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion/${championId}.json`, { mode: 'cors' });
  const champions = await response.json();
  const championDetails = champions.data[championId];

  return championDetails;
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

const getChampionDetails = async (championId) => {
  const championDetails = await fetchChampionDetails(championId);
  const championPassive = getChampionPassives(championDetails);
  const spells = getChampionSpells(championDetails);

  // Make first letter of the champion title a capital letter.
  const championTitle = championDetails.title.replace(
    championDetails.title[0], championDetails.title[0].toUpperCase(),
  );

  if (championDetails.partype === 'None') {
    championDetails.partype = 'Manaless';
  }

  if (championDetails.id === 'Akshan') {
    championDetails.allytips[0] = 'You can’t use consumables like potions during your Comeuppance, make sure to use them before channeling.';
  }

  if (championDetails.id === 'Vex') {
    championDetails.allytips.push('Vex is great at diving into the backline, but her escape potential is low so timing is key.');
  }

  return {
    name: championDetails.name,
    id: championDetails.id,
    title: championTitle,
    lore: championDetails.lore,
    roles: championDetails.tags,
    skins: championDetails.skins,
    resource: championDetails.partype,
    passive: championPassive,
    spells,
    tips: championDetails.allytips,
  };
};

export default getChampionDetails;
