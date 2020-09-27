import { Clock } from "./Clock";

export class WordItem {
  private text: string;
  private timeConsumed: number;
  private second: number;
  private isPassed: boolean | undefined;
  private clockForLeftTime: Clock | undefined;
  private init: () => void;

  get isExpired() {
    return this.timeLeft < 0;
  }

  get value() {
    return {
      second: this.timeLeft,
      text: this.text,
      timeConsumed: this.timeConsumed,
      isPassed: this.isPassed,
    };
  }

  get wholeTime() {
    return this.second;
  }

  private get timeLeft() {
    if (!this.clockForLeftTime) {
      return this.second;
    }

    return this.clockForLeftTime.timeLeft;
  }

  constructor({ second, text }) {
    this.init = this.lazyInit(second, text);
    this.init();
  }

  start() {
    this.clockForLeftTime = new Clock(this.second);
  }

  compareWith(inputWord = "") {
    return this.text === inputWord.trim();
  }

  pass(isPass: boolean | undefined) {
    this.isPassed = isPass;
    this.timeConsumed = this.second - this.timeLeft;
  }

  reset() {
    this.init();
  }

  private lazyInit(second: number, text: string) {
    return () => {
      this.second = second;
      this.text = text;
      this.timeConsumed = 0;
      this.isPassed = void 0;
      this.clockForLeftTime = void 0;
    };
  }
}
