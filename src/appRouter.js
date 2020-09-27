import homeCtroller from './home/controller'
import completeController from './complete/controller'

class AppRouter {
  route() {
    switch (location.pathname.slice(1)) {
      case '':
        homeCtroller.init(document.querySelector("#root"))
        break
      case 'complete':
        completeController.init(document.querySelector("#root"))
        break
      default:
        homeCtroller.init(document.querySelector("#root"))
    }
  }
}

export default new AppRouter()
