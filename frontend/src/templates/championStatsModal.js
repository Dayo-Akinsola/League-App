import ItemInfo from '../championData/itemInfo';
import {
  renderHeaderDetails,
  renderStatOverview,
  renderDamageStats,
  renderChampionLane,
  renderMatchupsInfo,
} from './renderHelpers';
import ElementCreation from '../helpers/elementCreation';

const championStatsModal = async (championData, championStats, latestVersion) => {
  renderHeaderDetails(championData, 'stats');

  const statsOverview = document.querySelector('.champion-stats-overview');

  renderStatOverview(statsOverview, 'Win Rate', championStats.winRate);
  renderStatOverview(statsOverview, 'Pick Rate', championStats.pickRate);
  /* Make every letter except the first lower case */
  const lane = `${championStats.lane[0] + championStats.lane.substring(1).toLowerCase()}`;
  renderChampionLane(statsOverview, lane);

  /* Sets the values and percentages for the average damage section of the stats modal */

  const trueDamageCircleStroke = document.querySelector('#true-damage-stroke');
  const physicalDamageCircleStroke = document.querySelector('#physical-damage-stroke');
  const magicDamageCircleStroke = document.querySelector('#magic-damage-stroke');

  const trueDamagePercent = Math.round(championStats.damagePerMatch.trueDamage.percentage);
  const physicalDamagePercent = Math.round(championStats.damagePerMatch.physicalDamage.percentage);
  const magicDamagePercent = Math.round(championStats.damagePerMatch.magicDamage.percentage);

  trueDamageCircleStroke.style.strokeDasharray = `${trueDamagePercent} 100`;
  physicalDamageCircleStroke.style.strokeDasharray = `${physicalDamagePercent + trueDamagePercent} 100`;
  magicDamageCircleStroke.style.strokeDasharray = '100, 100';
  const totalDamageText = document.querySelector('.total-damage-text');
  totalDamageText.textContent = Math.round(championStats.damagePerMatch.totalDamage.value);

  const trueDamageValue = Math.round(championStats.damagePerMatch.trueDamage.value);
  const physicalDamageValue = Math.round(championStats.damagePerMatch.physicalDamage.value);
  const magicDamageValue = Math.round(championStats.damagePerMatch.magicDamage.value);

  renderDamageStats('physical', physicalDamageValue, physicalDamagePercent);
  renderDamageStats('magic', magicDamageValue, magicDamagePercent);
  renderDamageStats('true', trueDamageValue, trueDamagePercent);

  /* Renders the item builds section of the stats modal */
  const { itemSets } = championStats;
  const allItems = await ItemInfo.getAllItems(latestVersion);
  const championItemBuilds = document.querySelector('.champion-item-builds');
  const itemSetsContainer = ElementCreation.createChildElementWithClass('div', 'item-sets-container', championItemBuilds);

  itemSets.forEach((itemSet) => {
    const itemSetContainer = ElementCreation.createChildElementWithClass('div', 'item-set-container', itemSetsContainer);

    itemSet.forEach((itemId) => {
      const item = new ItemInfo(itemId, allItems, latestVersion);
      const itemInfo = item.getItemInfo(allItems);
      if (itemInfo && !itemInfo.tags.includes('Trinket') && !itemInfo.tags.includes('Consumable')) {
        const mainComponentContainer = document.createElement('div');
        mainComponentContainer.className = 'main-component-container';
        itemSetContainer.appendChild(mainComponentContainer);

        const mainItem = ElementCreation.createChildElementWithClass('div', 'main-item', mainComponentContainer);

        ElementCreation.createChildImageElementWithClass('item-img', mainItem, itemInfo.imageUrl, `${itemId}.png`);

        const itemDetailsContainer = ElementCreation.createChildElementWithClass('div', 'item-details-container', mainItem);

        const nameElement = ElementCreation.createChildElementWithClass('span', 'item-name', itemDetailsContainer);
        nameElement.textContent = itemInfo.name;
        const descriptionElement = ElementCreation.createChildElementWithClass('span', 'item-description', itemDetailsContainer);
        descriptionElement.innerHTML = itemInfo.description;
        const itemCost = ElementCreation.createChildElementWithClass('div', 'item-cost', itemDetailsContainer);
        const costLabel = ElementCreation.createChildElementWithClass('span', 'cost-label', itemCost);
        costLabel.textContent = 'Gold: ';
        const costAmount = ElementCreation.createChildElementWithClass('span', 'cost-amount', itemCost);
        costAmount.textContent = itemInfo.cost;

        /* The component items are the smaller items that appear below the main item */
        const { componentItems } = itemInfo;
        Promise.resolve(componentItems)
          .then((items) => {
            const componentItemsContainer = ElementCreation.createChildElementWithClass('div', 'component-items-container', mainComponentContainer);
            items.forEach((componentItem) => {
              const componentItemElement = ElementCreation.createChildElementWithClass('div', 'component-item', componentItemsContainer);
              ElementCreation.createChildImageElementWithClass(
                'component-item-img', componentItemElement, componentItem.imageUrl, `${componentItem.name}`,
              );

              const componentItemDetailsContainer = ElementCreation.createChildElementWithClass('div', 'component-item-details-container', componentItemElement);

              const componentItemName = ElementCreation.createChildElementWithClass('span', 'component-item-name', componentItemDetailsContainer);
              componentItemName.textContent = componentItem.name;
              const componentItemCost = ElementCreation.createChildElementWithClass('div', 'component-item-cost', componentItemDetailsContainer);
              const componentItemCostLabel = ElementCreation.createChildElementWithClass('span', 'component-item-cost-label', componentItemCost);
              componentItemCostLabel.textContent = 'Gold: ';
              const componentItemAmount = ElementCreation.createChildElementWithClass('span', 'component-item-amount', componentItemCost);
              componentItemAmount.textContent = componentItem.cost;
            });
          });
      }
    });
  });
  /* Renders the matchups section of the champion modal stats page */
  const bestMatchupsSection = document.querySelector('.best-matchups-section');
  const bestMatchupsElement = ElementCreation.createChildElementWithClass('div', 'best-matchups matchups', bestMatchupsSection);
  const bestMatchupsData = championStats.bestMatchUps;
  renderMatchupsInfo(bestMatchupsElement, bestMatchupsData, latestVersion);

  const worstMatchupsSection = document.querySelector('.worst-matchups-section');
  const worstMatchupsElement = ElementCreation.createChildElementWithClass('div', 'worst-matchups matchups', worstMatchupsSection);
  const worstMatchupsData = championStats.worstMatchUps;
  renderMatchupsInfo(worstMatchupsElement, worstMatchupsData, latestVersion);
};

export default championStatsModal;
