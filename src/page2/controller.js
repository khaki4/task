import model from "./model"
import view from "./view"

class Controller {
  async init(el) {
    this.el = el
    view.render(await model.get(), this.el)
  }
}

const controller = new Controller()

export default controller

if (module.hot) {
  module.hot.accept("./view", async () => {
    view.render(await model.get(), controller.el)
  })
}
