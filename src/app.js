import appRouter from './appRouter';

class App {
  async init() {
    appRouter.route()
  }
}

export default new App();
