const { wordData, gameScore, WordItemQueue } = require("./model")
const { Clock } = require('../shared/Clock')
const { timeLeftToString } = require('../shared/timeFormat')
const { INTERVAL_TIME, ENTER_KEY_CODE } = require('../shared/constant')
const view = require("./view")
import appRouter from '../appRouter';

let INTERVAL_FLAG = null;

const initialViewStateFactory = () => ({
  timeLeft: void 0, // 남은 시간
  totalScore: gameScore.totall, // 총 점수
  wordForScreen: '문제 단어', // 입력 대상 단어
  wordInput: '입력', // 입력된 단어
  startButtonStatus: true
})

class Controller {
  get state() {
    return this.viewState
  }

  constructor(getDataFn) {
    this._getDataFn = getDataFn;
    this.viewState = initialViewStateFactory();
    this.bindEventHander();
  }

  bindEventHander() {
    this._clickHandler = this._clickHandler.bind(this)
    this._inputHandler = this._inputHandler.bind(this)
    this._keyUpHandler = this._keyUpHandler.bind(this)
  }

  async init(el) {
    this.el = el;
    view.render(this.state, this.el);
    this._addEventDelegation()
  }

  onDestroy() {
    clearInterval(INTERVAL_FLAG)
    this._removeEventDelegation()
  }

  async setWordData() {
    // this._wordQueue = new WordItemQueue(await this._getDataFn(), Clock);
    // TODO:
    this._wordQueue = new WordItemQueue((await this._getDataFn()).slice(0, 1), Clock);
  }

  _goResult() {
    window.history.pushState({}, 'Mission Complete', `/complete`);
    appRouter.router(this.onDestroy());
  }

  _clickHandler(event) {
    switch (event.target.id) {
      case 'start':
        this._startGame()
        break;
      case 'reset':
        this._resetGame()
        break;
      default:
        return false;
    }
  }

  _inputHandler(event) {
    switch (event.target.id) {
      case 'word-input':
        this.viewState.wordInput = event.target.value
        document.getElementById('word-input').value = this.viewState.wordInput
        break;
      default:
        return false;
    }
  }

  _keyUpHandler(event) {
    switch (event.target.id) {
      case 'word-input':
        this._onSubmitWord(event)
        break;
      default:
        return false;
    }
  }

  _addEventDelegation() {
    const root = document.getElementById('root')
    root.addEventListener('click', this._clickHandler);
    root.addEventListener('input', this._inputHandler);
    root.addEventListener('keyup', this._keyUpHandler);
  }

  _removeEventDelegation() {
    const root = document.getElementById('root');
    root.removeEventListener('click', this._clickHandler);
    root.removeEventListener('input', this._inputHandler);
    root.removeEventListener('keyup', this._keyUpHandler);
  }

  _focusWordInput() {
    document.getElementById('word-input').focus();
  }

  _setNext(isInit = false, isCurrect = true) {
    if (this._wordQueue.size === 0) {
      this._goResult()
      return
    }

    if (!isInit) {
      this.viewState.totalScore = this.viewState.totalScore + (isCurrect ? 1 : -1)
      gameScore.totall = this.viewState.totalScore
    }

    this._currentWordItem = this._wordQueue.get()
    const { text, second } = this._currentWordItem.value
    this.viewState.wordForScreen = text;
    this.viewState.timeLeft = second;
    this._currentWordItem.start()
    this._updateState()
  }

  _updateState() {
    view.render(this.viewState, this.el);
    this._focusWordInput()
  }

  _updateTimeLeft() {
    if (this._currentWordItem.isExpired) {
      this._setNext(false, false)
    } else {
      const { second } = this._currentWordItem.value
      document.querySelector('.time-left').innerText = timeLeftToString(second);
    }
  }

  _onSubmitWord(event) {
    if (event.keyCode !== ENTER_KEY_CODE) return false
    event.preventDefault();

    const isCurrectWord = this._currentWordItem.compareWith(event.target.value)
    if (isCurrectWord) {
      this._setNext()
    } else {
      this._clearWordItem()
    }
  }

  _clearWordItem() {
    this.state.wordInput = ''
    const { second } = this._currentWordItem.value
    this.viewState.timeLeft = second
    this._updateState()
  }

  async _startGame() {
    await this.setWordData()
    this.viewState.startButtonStatus = false
    this._setNext(true)
    INTERVAL_FLAG = setInterval(() => {
      this._updateTimeLeft()
    }, INTERVAL_TIME)
  }

  _resetGame() {
    gameScore.clear();
    this.viewState = initialViewStateFactory();
    clearInterval(INTERVAL_FLAG)
    this._updateState();
  }
}

const controller = new Controller(wordData.get)
export default controller

if (module.hot) {
  module.hot.accept("./view", async () => {
    view.render(controller.state, controller.el)
  })
}
