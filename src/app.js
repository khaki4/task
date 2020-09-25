import appRouter from './appRouter';

class App {
  async init() {
    appRouter.initController()
  }
}

export default new App();
