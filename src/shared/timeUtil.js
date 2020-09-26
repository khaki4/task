class Clock {
  constructor(seconds) {
    this.start = new Date().getTime()
    this.end = new Date().setSeconds(seconds)
  }

  get timeLeft() {
    return (this.end - this.start)
  }

}

export default Clock
