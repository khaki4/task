import model from "./model"
import view from "./view"
import appRouter from '../appRouter';

class Controller {
  async init(el) {
    this.el = el
    view.render(model.get(), this.el)
    document.querySelector('#test').addEventListener('click', this.goResult.bind(this));
  }
  goResult() {
    window.history.pushState({ res: 1 }, 'home', `/result`);
    appRouter.router(this.onDestroy())
  }
  async onDestroy() {
    document.querySelector('#test').removeEventListener('click', this.goResult.bind(this));
  }
}

const controller = new Controller()
export default controller

if (module.hot) {
  module.hot.accept("./view", async () => {
    view.render(model.get(), controller.el)
  })
}
