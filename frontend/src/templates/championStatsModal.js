import { getChampionDetails } from '../championData/championDetails';
import getChampionStats from '../championData/championStats';
// eslint-disable-next-line import/named
import { renderHeaderDetails, renderStatOverview } from './renderHelpers';

const championStatsModal = async (championId) => {
  const championData = await getChampionDetails(championId);
  const championStats = await getChampionStats(championId);
  console.log(championStats);

  renderHeaderDetails(championData, 'stats');

  renderStatOverview('Win Rate', championStats.winRate);
  renderStatOverview('Pick Rate', championStats.pickRate);

  const trueDamageCircleStroke = document.querySelector('#true-damage-stroke');
  const physicalDamageCircleStroke = document.querySelector('#physical-damage-stroke');
  const magicDamageCircleStroke = document.querySelector('#magic-damage-stroke');

  const trueDamagePercent = championStats.damagePerMatch.trueDamage.percentage.toFixed(2);
  const physicalDamagePercent = championStats.damagePerMatch.physicalDamage.percentage.toFixed(2);

  trueDamageCircleStroke.style.strokeDasharray = `${trueDamagePercent} 100`;
  physicalDamageCircleStroke.style.strokeDasharray = `${parseFloat(physicalDamagePercent) + parseFloat(trueDamagePercent)} 100`;
  magicDamageCircleStroke.style.strokeDasharray = '100, 100';
};

export default championStatsModal;
