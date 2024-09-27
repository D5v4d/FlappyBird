const canvas = document.getElementById("game");
const conteiner = document.getElementById("conteiner");
const score = document.getElementById("counting");
const result = document.getElementById("result");
const records = document.getElementById("record");
const ctx = canvas.getContext("2d");

class Game {
    constructor() {
        this.config = new Config();
        this.size = new Size(this.config)
        this.pipes = new Pipes(this.config)
        this.bird = new Bird(null, this.config, this.pipes);
        this.draw = new Draw(this.config, this.bird, this.pipes);
        this.controlling = new Controlling(this.draw, this.config, this.bird);
        this.bird.draw = this.draw;
        this.startGame();
        this.restartGame();
        canvas.height = this.config.canvas.height;
        canvas.width = this.config.canvas.width;
        conteiner.style.width = `${this.config.canvas.width}px`
        conteiner.style.marginTop = `${this.config.conteiner.marginTop}px`
        score.style.marginLeft = `${this.config.score.marginLeft}px`
        result.style.marginTop = `${this.config.result.marginTop}px`
        result.style.marginLeft = `${this.config.result.marginLeft}px`
        records.style.marginTop = `${this.config.record.marginTop}px`
        records.style.marginLeft = `${this.config.record.marginLeft}px`
    }

    reset() {
        this.size.reset();
        this.config.reset();
        this.pipes.reset();
        this.bird.reset();
        this.draw.reset();
    }

    startGame() {
        this.controlling.start();
    }

    restartGame() {
        this.controlling.restart();
    }
}

const game = new Game();



