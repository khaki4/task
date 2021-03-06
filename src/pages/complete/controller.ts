import view from './view';
import { IViewState } from './types';
import appRouter from '../../appRouter';
import { gameStatService, GameStatService } from '../../shared/services/GameStat.service';

const initialViewStateFactory = (gameStat: GameStatService): IViewState => ({
  totalScore: gameStat.total,
  consumedAverageTime: gameStat.consumedAverageTime,
});

class Controller {
  viewState: IViewState = initialViewStateFactory(gameStatService);
  el: HTMLElement;

  private root = document.getElementById('root');
  private eventInfos: () => [string, (event: MouseEvent) => void][] = () => [['click', this.clickHandler]];

  constructor() {}

  async init(el: HTMLElement) {
    if (!this.validPageToStart()) return;

    this.el = el;
    this.viewState = initialViewStateFactory(gameStatService);
    view.render(this.viewState, this.el);
    this.addEventDelegation();
  }

  async onDestroy() {
    this.removeEventDelegation();
  }

  private validPageToStart() {
    if (gameStatService.isFinished) {
      return true;
    } else {
      window.location.href = '/';
      return false;
    }
  }

  private addEventDelegation() {
    this.eventInfos().forEach(([type, handler]) => {
      this.root.addEventListener(type, handler);
    });
  }

  private removeEventDelegation() {
    this.eventInfos().forEach(([type, handler]) => {
      this.root.removeEventListener(type, handler);
    });
  }

  private clickHandler = (event: MouseEvent) => {
    switch ((event.target as HTMLElement).id) {
      case 'reStart':
        this.reStartGame();
        break;
      default:
        return false;
    }
  };

  private async reStartGame() {
    gameStatService.clear();
    this.goHome();
  }

  private async goHome() {
    window.history.pushState(void 0, 'Typing Game', `/`);
    appRouter.route(this.onDestroy());
  }
}

const controller = new Controller();

export default controller;

if (module.hot) {
  module.hot.accept('./view', async () => {
    view.render(controller.viewState, controller.el);
  });
}
