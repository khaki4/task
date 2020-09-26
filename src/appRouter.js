import controller from './home/controller';
import * as controller2 from './page2/controller';

const appRouter = {
  initController: () => {
    controller.init(document.querySelector("#root"))
  },
  initController2: () => controller2.default.init(document.querySelector("#root")),
  router: () => {
    (routerMap[location.pathname.slice(1)])();
  }
}
const routerMap = {
  '' : appRouter.initController,
  'result': appRouter.initController2
}

export default appRouter
