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

module.exports = {
  Clock
}
