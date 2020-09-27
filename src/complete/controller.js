const { gameScore } = require('../shared/model');
const view = require('./view');
import appRouter from '../appRouter';

const initialViewStateFactory = (gameScore) => ({
  totalScore: gameScore.total,
  consumedAverageTime: gameScore.consumedAverageTime
});

class Controller {
  constructor() {
    this.viewState = initialViewStateFactory(gameScore);
    this._root = document.getElementById('root')
    this._bindEventHander();
    this._eventInfos = [['click', this._clickHandler]];
  }

  async init(el) {
    this.el = el
    this.viewState = initialViewStateFactory(gameScore)
    view.render(this.viewState, this.el)
    this._addEventDelegation()
  }

  async onDestroy() {
    this._removeEventDelegation()
  }

  _bindEventHander() {
    this._clickHandler = this._clickHandler.bind(this)
  }

  _addEventDelegation() {
    this._eventInfos.forEach(([type, handler]) => {
      this._root.addEventListener(type, handler)
    });
  }

  _removeEventDelegation() {
    this._eventInfos.forEach(([type, handler]) => {
      this._root.removeEventListener(type, handler)
    });
  }

  _clickHandler(event) {
    switch (event.target.id) {
      case 'reStart':
        this._reStartGame()
        break;
      default:
        return false;
    }
  }

  async _reStartGame() {
    gameScore.clear()
    this._goHome()
  }

  async _goHome() {
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
