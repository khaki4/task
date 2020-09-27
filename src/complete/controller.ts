import { gameScore } from '../shared/model'
import view from './view'
import appRouter from '../appRouter';

const initialViewStateFactory = (gameScore) => ({
  totalScore: gameScore.total,
  consumedAverageTime: gameScore.consumedAverageTime
});

class Controller {
  viewState = initialViewStateFactory(gameScore);
  el: HTMLElement;

  private root = document.getElementById('root')
  private eventInfos:() => [string, (event: MouseEvent) => void][] = () => [['click', this.clickHandler]];

  constructor() { }

  async init(el) {
    this.el = el
    this.viewState = initialViewStateFactory(gameScore)
    view.render(this.viewState, this.el)
    this.addEventDelegation()
  }

  async onDestroy() {
    this.removeEventDelegation()
  }

  private addEventDelegation() {
    this.eventInfos().forEach(([type, handler]) => {
      this.root.addEventListener(type, handler)
    });
  }

  private removeEventDelegation() {
    this.eventInfos().forEach(([type, handler]) => {
      this.root.removeEventListener(type, handler)
    });
  }

  private clickHandler = (event) => {
    switch (event.target.id) {
      case 'reStart':
        this.reStartGame()
        break;
      default:
        return false;
    }
  }

  private async reStartGame() {
    gameScore.clear()
    this.goHome()
  }

  private async goHome() {
    window.history.pushState({}, 'Typing Game', `/`);
    appRouter.route(this.onDestroy());
  }
}

const controller = new Controller()

export default controller

if (module.hot) {
  module.hot.accept("./view", async () => {
    view.render(controller.viewState, controller.el)
  })
}
