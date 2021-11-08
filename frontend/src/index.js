import './style.scss';
import { championDetailsModal } from './templates/championDetailsModal';
import championStatsModal from './templates/championStatsModal';
import { ChampionModalController } from './appControl/championModalController';
import ItemInfo from './championData/itemInfo';

const test = async (championId) => {
  await championDetailsModal(championId);
  await championStatsModal(championId);
  const controller = ChampionModalController();
  controller.modalChangeListeners();

  const allItems = await ItemInfo.getAllItems();
  const item1 = new ItemInfo('6333');
  console.log(item1.getItemInfo(allItems));
};

test('Poppy');
