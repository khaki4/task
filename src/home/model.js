const { API_URI } = require('../shared/constant');

class WordData {
  async get() {
    const res = await fetch(API_URI)
    return await res.json()
  }
}

class WordItemQueue {
  get size() {
    return this._wordItems.length
  }

  constructor(wordItems = [], Clock) {
    this._wordItems = wordItems.map(v => new WordItem(v, Clock))
  }

  get() {
    if (this._wordItems.length === 0) {
      return { value: null }
    }
    return this._wordItems.splice(0, 1)[0]
  }
}

class GameScore {
  constructor() {
    this._total = 0
  }

  get totall() {
    return this._total
  }

  set totall(score) {
    this._total += score
  }

  clear() {
    this._total = 0
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
    }
  }

  get _timeLeft() {
    if (!this._clockForLeftTime) {
      return this._second
    }

    return this._clockForLeftTime.timeLeft
  }

  constructor({ second, text }, Clock) {
    this._second = second
    this._text = text
    this._Clock = Clock
    this._clockForLeftTime = void 0
  }

  start() {
    this._clockForLeftTime = new this._Clock(this._second)
  }

  compareWith(inputWord = '') {
    return this._text === inputWord.trim()
  }
}

module.exports = {
  wordData: new WordData(),
  gameScore: new GameScore(),
  WordItem,
  WordItemQueue
}
