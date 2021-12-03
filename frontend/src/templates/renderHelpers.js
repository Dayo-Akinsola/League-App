import ElementCreation from '../helpers/elementCreation';

const importAll = (r) => {
  const images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const renderHeaderDetails = (championData, modalContainer) => {
  const container = document.querySelector(`#${modalContainer}-container`);
  container.style.background = `no-repeat url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_0.jpg) 70% 80%`;
  container.style.backgroundSize = 'cover';

  const championTitle = container.querySelector('.champion-title');
  championTitle.textContent = championData.title;

  const championName = container.querySelector('.champion-name');
  championName.textContent = championData.name;
};

/* Renders win or pick rate to the DOM */
const renderStatOverview = (statsOverview, rateText, rateType) => {
  const championRate = document.createElement('div');
  const label = document.createElement('span');
  const rateValue = document.createElement('span');

  /* Turns 'Win Rate' into 'win-rate' */
  const lowerCaseText = rateText.replace(' ', '-').toLowerCase();

  championRate.className = lowerCaseText;
  label.id = `${lowerCaseText}-label`;
  label.className = 'label';
  rateValue.className = `${lowerCaseText}-value`;
  label.textContent = rateText;
  rateValue.textContent = `${rateType}%`;

  championRate.appendChild(label); championRate.appendChild(rateValue);
  statsOverview.appendChild(championRate);
};

const renderChampionLane = (statsOverview, lane) => {
  const championLaneInfo = document.createElement('div');
  championLaneInfo.className = 'lane-info';
  const laneText = document.createElement('span');
  laneText.className = 'lane-text label';
  laneText.textContent = lane;
  const laneIcon = document.createElement('img');
  laneIcon.className = 'lane-icon champion-role-image';
  laneIcon.src = `${images[`${lane}.png`]}`;
  laneIcon.alt = `${lane}.png`;
  championLaneInfo.appendChild(laneText);
  championLaneInfo.appendChild(laneIcon);
  statsOverview.appendChild(championLaneInfo);
};

const renderDamageStats = (damageType, damageValue, damagePercentage) => {
  const damageContainer = document.querySelector(`#${damageType}-damage-container`);

  const damageStats = ElementCreation.createChildElementWithClass('div', 'damage-stats', damageContainer);

  const damageValueElement = ElementCreation.createChildElementWithId('span', `${damageType}-value`, damageStats);
  const damagePercentageElement = ElementCreation.createChildElementWithId('span', `${damageType}-percentage`, damageStats);
  damageValueElement.textContent = `${damageValue}`;
  damagePercentageElement.textContent = `${damagePercentage}%`;
};

const renderMatchupsInfo = (matchupsElement, matchupsData) => {
  matchupsData.forEach((matchup) => {
    const matchupInfo = ElementCreation.createChildElementWithClass('div', 'matchup-info', matchupsElement);
    const enemyChampionName = matchup[1].name;
    const enemyChampionId = matchup[0];
    const enemyChampionImgUrl = `https://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${enemyChampionId}.png`;
    ElementCreation.createChildImageElementWithClass(
      'enemy-champion-img', matchupInfo, enemyChampionImgUrl, `small-${enemyChampionId}`,
    );

    const matchupStats = ElementCreation.createChildElementWithClass('div', 'matchup-stats', matchupInfo);
    const enemyChampionNameElement = ElementCreation.createChildElementWithClass('span', 'enemy-champion-name', matchupStats);
    enemyChampionNameElement.textContent = enemyChampionName;
    const winrateAgainst = ElementCreation.createChildElementWithClass('div', 'winrate-against', matchupStats);
    const winrateAgainstLabel = ElementCreation.createChildElementWithClass('span', 'winrate-against-label', winrateAgainst);
    winrateAgainstLabel.textContent = 'Winrate: ';
    const color = matchupsElement.className === 'best-matchups matchups' ? 'blue' : 'red';
    const winrateAgainstPercentage = ElementCreation.createChildElementWithClass('span', `winrate-against-percentage ${color}`, winrateAgainst);
    winrateAgainstPercentage.textContent = `${matchup[1].winRateAgainst.toFixed(0)}%`;
    const gamesPlayedAgainst = ElementCreation.createChildElementWithClass('span', 'games-played-against', matchupStats);
    gamesPlayedAgainst.textContent = `Games: ${matchup[1].matches}`;
  });
};

const createChampionContainer = (champion, championsSection) => {
  const championContainer = ElementCreation.createChildElementWithClass('div', 'champion-container shown', championsSection);
  const championId = champion.id ? champion.id : champion.championName;
  championContainer.dataset.id = championId;
  const championImgUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`;
  const championImg = ElementCreation.createChildImageElementWithClass(
    'champion-img', championContainer, championImgUrl, '',
  );
  championImg.tabIndex = 0;
  championContainer.tabIndex = 0;
  const championNameWrapper = ElementCreation.createChildElementWithClass('div', 'champion-name-wrapper', championContainer);
  const championName = ElementCreation.createChildElementWithClass('span', 'champion-name', championNameWrapper);
  championName.textContent = champion.name;
};

export {
  renderHeaderDetails,
  renderStatOverview,
  renderChampionLane,
  renderDamageStats,
  images,
  renderMatchupsInfo,
  createChampionContainer,
};
