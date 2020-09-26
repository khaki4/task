const { model, gameScore } = require('../shared/model');
import view from "./view"
import appRouter from '../appRouter';

const initialViewStateFactory = () => ({
});

class Controller {
  get state() {
    return this.viewState
  }

  constructor() {
    this.viewState = initialViewStateFactory();
  }
  async init(el) {
    this.el = el
    view.render(this.state, this.el)
    document.querySelector('#complete').addEventListener('click', this.goHome.bind(this));

    console.log(gameScore.consumedAverageTime)
  }

  goHome() {
    window.history.pushState({ }, 'Typing Game', `/`);
    appRouter.router(this.onDestroy())
  }
  async onDestroy() {
    document.querySelector('#complete').removeEventListener('click', this.goHome.bind(this));
  }
}

const controller = new Controller()

export default controller

if (module.hot) {
  module.hot.accept("./view", async () => {
    view.render(model.get(), controller.el)
  })
}
