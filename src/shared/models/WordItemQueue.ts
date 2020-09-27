import { WordItem } from "./WordItem";

export class WordItemQueue {
  private wordItems: WordItem[];
  private currentIdx: number;

  get size() {
    return this.wordItems.length - this.currentIdx;
  }

  get list() {
    return this.wordItems;
  }

  constructor(wordItems = []) {
    this.wordItems = wordItems.map((v) => new WordItem(v));
    this.currentIdx = 0;
  }

  dequeue() {
    if (this.currentIdx >= this.wordItems.length) {
      return { value: null };
    }
    return this.wordItems[this.currentIdx++];
  }
}
