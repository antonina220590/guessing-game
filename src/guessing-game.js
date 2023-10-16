class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        while (this.max - this.min > 1) {
            return this.middle = Math.round((this.min + this.max)/2)
        }
    }

    lower() {
        this.max = this.middle
    }

    greater() {
        this.min = this.middle

    }
}

module.exports = GuessingGame;
