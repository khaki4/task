export class Clock {
  end: number;

  constructor(private second: number) {
    const now = new Date();
    this.second = second;
    this.end = now.setSeconds(now.getSeconds() + second);
  }

  get timeLeft() {
    return Math.ceil((this.end - new Date().getTime()) / 1000);
  }

  reset() {
    this.end = this.second;
  }
}
