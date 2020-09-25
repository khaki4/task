import appRouter from '../appRouter'

class View {
  goResult() {
    window.history.pushState({ res: 1 }, 'home', `/result`);
    appRouter.router(this.onDestroy())
  }
  onDestroy() {
    document.querySelector('#test').removeEventListener('click', this.goResult.bind(this));
  }
  render(data, el) {
    el.innerHTML = `<button id="test">go result</button>`
    document.querySelector('#test').addEventListener('click', this.goResult.bind(this));
  }
}

export default new View()
