class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return this.g = Math.round((this.min + this.max) / 2);
  }

  lower() {
    this.max = this.g;
  }

  greater() {
    this.min = this.g;
  }
}

module.exports = GuessingGame;
