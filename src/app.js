import appRouter from './appRouter';

class App {
  async init() {
    appRouter.router()
  }
}

export default new App();
