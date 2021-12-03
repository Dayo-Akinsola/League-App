import './stylesheets/modals.scss';
import './stylesheets/champions.scss';
import championsPage from './templates/championsPage';
import ChampionsPageController from './appControl/championsPageController';
import SearchbarController from './appControl/searchbarController';

const createChampionsPage = () => {
  setTimeout(async () => {
    await championsPage();
    ChampionsPageController.championsPageListeners();
    SearchbarController.searchContainerListeners();
    const championId = localStorage.getItem('championId');
    if (championId) {
      ChampionsPageController.displayChampionModal(championId);
      localStorage.clear();
    }
  }, 500);
};
createChampionsPage();
