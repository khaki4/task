import { API_URI } from './constant'

export class Clock {
  end: number
  constructor(private second: number) {
    const now = new Date()
    this.second = second
    this.end = now.setSeconds(now.getSeconds() + second)
  }

  get timeLeft() {
    return Math.ceil((this.end - new Date().getTime()) / 1000)
  }

  reset() {
    this.end = this.second
  }
}

class WordData {
  async get() {
    const res = await fetch(API_URI)
    return await res.json()
  }
}

export class WordItem {
  private text: string
  private timeConsumed: number
  private second: number
  private isPassed: boolean | undefined
  private clockForLeftTime: Clock | undefined
  private init: () => void

  get isExpired() {
    return this.timeLeft < 0
  }

  get value() {
    return {
      second: this.timeLeft,
      text: this.text,
      timeConsumed: this.timeConsumed,
      isPassed: this.isPassed
    }
  }

  get wholeTime() {
    return this.second;
  }

  private get timeLeft() {
    if (!this.clockForLeftTime) {
      return this.second
    }

    return this.clockForLeftTime.timeLeft
  }

  constructor({ second, text }) {
    this.init = this.lazyInit(second, text);
    this.init();
  }

  start() {
    this.clockForLeftTime = new Clock(this.second)
  }

  compareWith(inputWord = '') {
    return this.text === inputWord.trim()
  }

  pass(isPass) {
    this.isPassed = isPass
    this.timeConsumed = this.second - this.timeLeft;
  }

  reset() {
    this.init();
  }

  private lazyInit(second: number, text: string) {
    return () => {
      this.second = second
      this.text = text
      this.timeConsumed = 0
      this.isPassed = void 0
      this.clockForLeftTime = void 0
    }
  }
}

export class WordItemQueue {
  private wordItems: WordItem[]
  private currentIdx: number

  get size() {
    return this.wordItems.length - this.currentIdx
  }

  get list() {
    return this.wordItems;
  }

  constructor(wordItems = []) {
    this.wordItems = wordItems.map(v => new WordItem(v));
    this.currentIdx = 0
  }

  dequeue() {
    if (this.currentIdx >= this.wordItems.length) {
      return { value: null }
    }
    return this.wordItems[this.currentIdx++];
  }
}

class GameScore {
  private wordItemQueue: WordItemQueue

  get total() {
    return this.wordItemQueue.list
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
    const sucessList = this.wordItemQueue.list
      .filter(item => item.value.isPassed);

    if (sucessList.length === 0) return void 0

    const sumOfConsumedTime = sucessList
      .map(item => item.value.timeConsumed)
      .reduce((tally, curr) => {
        tally += curr;
        return tally;
      }, 0)

    return Math.round(sumOfConsumedTime / sucessList.length);
  }

  constructor() {
    this.wordItemQueue = new WordItemQueue(void 0);
  }

  setWordItems(wordItemQueue) {
    this.wordItemQueue = wordItemQueue;
  }

  clear() {
    this.wordItemQueue.list.forEach(v => v.reset())
  }
}

export const wordData = new WordData()
export const gameScore = new GameScore()
