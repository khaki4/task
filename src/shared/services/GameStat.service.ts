import { WordItemQueue } from '../models/WordItemQueue';

export class GameStatService {
  private wordItemQueue: WordItemQueue;

  get total() {
    return this.wordItemQueue.list.reduce((tally, curr) => {
      if (curr.value.isPassed === undefined) {
        return tally;
      } else {
        tally = tally + (curr.value.isPassed ? 1 : -1);
        return tally;
      }
    }, 0);
  }

  get consumedAverageTime() {
    const sucessList = this.wordItemQueue.list.filter((item) => item.value.isPassed);

    if (sucessList.length === 0) return void 0;

    const sumOfConsumedTime = sucessList
      .map((item) => item.value.timeConsumed)
      .reduce((tally, curr) => {
        tally += curr;
        return tally;
      }, 0);

    return Math.round(sumOfConsumedTime / sucessList.length);
  }

  get isFinished() {
    if (this.wordItemQueue.list.length === 0) return false;

    return this.wordItemQueue.size === 0;
  }

  constructor() {
    this.wordItemQueue = new WordItemQueue(void 0);
  }

  setWordItems(wordItemQueue) {
    this.wordItemQueue = wordItemQueue;
  }

  clear() {
    this.wordItemQueue.list.forEach((v) => v.reset());
  }
}

export const gameStatService = new GameStatService();
