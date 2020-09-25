import model from "./model"
import view from "./view"
import appRouter from '../appRouter';

class Controller {
  async init(el) {
    this.el = el
    view.render(model.get(), this.el)
    document.querySelector('#test2').addEventListener('click', this.goHome.bind(this));
  }

  goHome() {
    window.history.pushState({ res: 1 }, 'home', `/`);
    appRouter.router(this.onDestroy())
  }
  async onDestroy() {
    document.querySelector('#test2').removeEventListener('click', this.goHome.bind(this));
  }
}

const controller = new Controller()

export default controller

if (module.hot) {
  module.hot.accept("./view", async () => {
    view.render(model.get(), controller.el)
  })
}
