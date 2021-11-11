import './stylesheets/modals.scss';
import './stylesheets/frontpage.scss';
import { championDetailsModal } from './templates/championDetailsModal';
import championStatsModal from './templates/championStatsModal';
import { ChampionModalController } from './appControl/championModalController';
import ItemInfo from './championData/itemInfo';
import getChampionDetails from './championData/championDetails';
import championSkinsModal from './templates/championSkinsModal';
import getChampionStats from './championData/championStats';

const test = async (championId) => {
  const championDetails = await getChampionDetails(championId);
  const championStats = await getChampionStats(championId);
  championDetailsModal(championDetails);
  await championStatsModal(championDetails, championStats);
  championSkinsModal(championDetails);
  const controller = ChampionModalController();
  controller.modalChangeListeners();

  const allItems = await ItemInfo.getAllItems();
  const item1 = new ItemInfo('6333');
  console.log(item1.getItemInfo(allItems));
};

test('Poppy');
