import appRouter from '../appRouter';

class View {
  goHome() {
    window.history.pushState({ res: 1 }, 'home', `/`);
    appRouter.router(this.onDestroy())
  }
  onDestroy() {
    document.querySelector('#test2').removeEventListener('click', this.goHome.bind(this));
  }
  render(data, el) {
    el.innerHTML = `<button id="test2">go home</button>`
    document.querySelector('#test2').addEventListener('click', this.goHome.bind(this));
  }
}

export default new View()
