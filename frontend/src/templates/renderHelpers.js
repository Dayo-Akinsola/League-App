// Renders DOM elements that are repeated across templates

const renderHeaderDetails = (championData, modalContainer) => {
  const container = document.querySelector(`#${modalContainer}-container`);
  container.style.background = `no-repeat url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_0.jpg)`;
  container.style.backgroundSize = 'cover';

  const championTitle = container.querySelector('.champion-title');
  championTitle.textContent = championData.title;

  const championName = container.querySelector('.champion-name');
  championName.textContent = championData.name;
};

// Renders win or pick rate to the DOM
const renderStatOverview = (rateText, rateType) => {
  const statsOverview = document.querySelector('.champion-stats-overview');

  const championRate = document.createElement('div');
  const label = document.createElement('span');
  const rateValue = document.createElement('span');

  // Turns 'Win Rate' into 'win-rate'
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

export {
  renderHeaderDetails,
  renderStatOverview,
};
