const { API_URI } = require('./constant');

class Clock {
  constructor(seconds) {
    const now = new Date()
    this._seconds = seconds
    this.end = now.setSeconds(now.getSeconds() + seconds)
  }

  get timeLeft() {
    return Math.ceil((this.end - new Date().getTime()) / 1000)
  }

  reset() {
    this.end = this._seconds
  }
}

class WordData {
  async get() {
    const res = await fetch(API_URI)
    return await res.json()
  }
}

class WordItem {
  get isExpired() {
    return this._timeLeft < 0
  }

  get value() {
    return {
      second: this._timeLeft,
      text: this._text,
      timeConsumed: this._timeConsumed,
      isPassed: this._isPassed
    }
  }

  get wholeTime() {
    return this._second;
  }

  get _timeLeft() {
    if (!this._clockForLeftTime) {
      return this._second
    }

    return this._clockForLeftTime.timeLeft
  }

  constructor({ second, text }, Clock) {
    this._init = this._lazyInit(second, text, Clock);
    this._init();
  }

  start() {
    this._clockForLeftTime = new this._Clock(this._second)
  }

  compareWith(inputWord = '') {
    return this._text === inputWord.trim()
  }

  pass(isPass) {
    this._isPassed = isPass
    this._timeConsumed = this._second - this._timeLeft;
  }

  reset() {
    this._init();
  }

  _lazyInit(second, text, Clock) {
    return () => {
      this._second = second
      this._text = text
      this._timeConsumed = 0
      this._isPassed = void 0
      this._Clock = Clock
      this._clockForLeftTime = void 0
    }
  }
}

class WordItemQueue {
  get size() {
    return this._wordItems.length - this._currentIdx
  }

  get list() {
    return this._wordItems;
  }

  constructor(wordItems = [], Clock) {
    this._wordItems = wordItems.map(v => new WordItem(v, Clock));
    this._currentIdx = 0
  }

  dequeue() {
    if (this._currentIdx >= this._wordItems.length) {
      return { value: null }
    }
    return this._wordItems[this._currentIdx++];
  }
}

class GameScore {
  get totall() {
    return this._wordItemQueue.list
      .reduce((tally, curr) => {
        if (curr.value.isPassed === undefined) {
          return tally
        } else {
          tally = tally + (curr.value.isPassed ? 1 : -1);
          return tally;
        }
      }, 0);
  }

  get consumedAverageTime() {
    return this._wordItemQueue.list
      .filter(item => item.value.isPassed)
      .reduce((tally, curr) => {
        tally.push([curr.value.timeConsumed, curr.wholeTime]);
        return tally;
      }, []);
  }

  constructor() {
    this._wordItemQueue = new WordItemQueue(void 0, Clock);
  }

  setWordItems(wordItemQueue) {
    this._wordItemQueue = wordItemQueue;
  }

  clear() {
    this._wordItemQueue.list.forEach(v => v.reset())
  }
}

module.exports = {
  wordData: new WordData(),
  gameScore: new GameScore(),
  WordItem,
  WordItemQueue,
  Clock
}
