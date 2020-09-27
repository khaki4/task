import {wordData, gameScore, WordItemQueue, Clock, WordItem} from '../shared/model'
import {timeLeftToString} from '../shared/timeFormat'
import {INTERVAL_TIME, ENTER_KEY_CODE} from '../shared/constant'
import view from './view'
import appRouter from '../appRouter';

let INTERVAL_FLAG = null;

const initialViewStateFactory = (totalScore?: number) => ({
  timeLeft: void 0, // 남은 시간
  totalScore, // 총 점수
  wordForScreen: '문제 단어', // 입력 대상 단어
  wordInput: '입력', // 입력된 단어
  startButtonStatus: true
});

class Controller {
  viewState = initialViewStateFactory();
  el: HTMLElement

  private root = document.getElementById('root')
  private eventInfos: () => [string, (event: Event) => void][] = () => [['click', this.clickHandler], ['input', this.inputHandler], ['keyup', this.keyUpHandler]];
  private wordQueue: WordItemQueue
  private currentWordItem: WordItem | { value: null }

  constructor(private getDataFn) {
  }

  async init(el) {
    this.el = el;
    this.viewState = initialViewStateFactory(gameScore.total);
    view.render(this.viewState, this.el);
    this.addEventDelegation()
  }

  async onDestroy() {
    clearInterval(INTERVAL_FLAG)
    this.removeEventDelegation()
  }

  private async startGame() {
    await this.setWordData()
    this.viewState.startButtonStatus = false
    this.setNext()
    INTERVAL_FLAG = setInterval(() => {
      this.updateTimeLeft()
    }, INTERVAL_TIME)
  }

  private async setWordData() {
    this.wordQueue = new WordItemQueue(await this.getDataFn());
    gameScore.setWordItems(this.wordQueue)
  }

  private async goResult() {
    window.history.pushState({}, 'Mission Complete', `/complete`);
    appRouter.route(this.onDestroy());
  }

  private clickHandler = (event) => {
    switch (event.target.id) {
      case 'start':
        this.startGame()
        break;
      case 'reset':
        this.resetGame()
        break;
      default:
        return false;
    }
  }

  private inputHandler = (event) => {
    switch (event.target.id) {
      case 'wordInput':
        this.viewState.wordInput = event.target.value
        const inputEl = <HTMLInputElement>document.getElementById('wordInput')
        inputEl.value = this.viewState.wordInput
        break;
      default:
        return false;
    }
  }

  private keyUpHandler = (event) => {
    switch (event.target.id) {
      case 'wordInput':
        this.onSubmitWord(event)
        break;
      default:
        return false;
    }
  }

  private addEventDelegation() {
    this.eventInfos().forEach(([type, handler]) => {
      this.root.addEventListener(type, handler)
    });
  }

  private removeEventDelegation() {
    this.eventInfos().forEach(([type, handler]) => {
      this.root.removeEventListener(type, handler)
    });
  }

  private focusWordInput() {
    document.getElementById('wordInput').focus();
  }

  private setNext() {
    if (this.wordQueue.size === 0) {
      this.goResult()
      return
    }
    this.viewState.totalScore = gameScore.total;
    this.currentWordItem = this.wordQueue.dequeue()
    const {text, second} = this.currentWordItem.value
    this.viewState.wordForScreen = text;
    this.viewState.timeLeft = second;
    if (this.currentWordItem instanceof WordItem) {
      this.currentWordItem.start()
    }
    this.updateState()
  }

  private async updateState() {
    view.render(this.viewState, this.el);
    this.focusWordInput()
  }

  private async updateTimeLeft() {
    if (!(this.currentWordItem instanceof WordItem)) return

    if (this.currentWordItem.isExpired) {
      this.currentWordItem.pass(false)
      this.setNext()
    } else {
      const {second} = this.currentWordItem.value;
      (<HTMLElement>document.querySelector('.time-left')).innerText = timeLeftToString(second);
    }
  }

  private async onSubmitWord(event) {
    if (!(this.currentWordItem instanceof WordItem)) return

    if (event.keyCode !== ENTER_KEY_CODE) return false
    event.preventDefault();

    const isCurrectWord = this.currentWordItem.compareWith(event.target.value)
    this.currentWordItem.pass(isCurrectWord)

    if (isCurrectWord) {
      this.setNext()
    } else {
      this.clearWordItem()
    }
  }

  private async clearWordItem() {
    this.viewState.wordInput = ''
    const {second} = this.currentWordItem.value
    this.viewState.timeLeft = second
    this.updateState()
  }

  private async resetGame() {
    gameScore.clear();
    this.viewState = initialViewStateFactory();
    clearInterval(INTERVAL_FLAG)
    this.updateState();
  }
}

const controller = new Controller(wordData.get)
export default controller

if (module.hot) {
  module.hot.accept("./view", async () => {
    view.render(controller.viewState, controller.el)
  })
}
