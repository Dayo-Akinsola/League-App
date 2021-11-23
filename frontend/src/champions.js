import './stylesheets/modals.scss';
import './stylesheets/champions.scss';
// import { championDetailsModal } from './templates/championDetailsModal';
// import championStatsModal from './templates/championStatsModal';
// import ItemInfo from './championData/itemInfo';
// import getChampionDetails from './championData/championDetails';
// import championSkinsModal from './templates/championSkinsModal';
// import getChampionStats from './championData/championStats';
import championsPage from './templates/championsPage';
import ChampionsPageController from './appControl/championsPageController';
import SearchbarController from './appControl/searchbarController';

const test = async () => {
  const response = await fetch('http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json');
  const allChampions = await response.json();

  // const values = Object.values(allChampions.data);
  // values.forEach((value) => console.log(value.info.difficulty));
  await championsPage();
  ChampionsPageController.championsPageListeners();
  SearchbarController.searchContainerListeners();
  // window.history.pushState('champions', '', '/champions');
};
test();
