const canvas = document.getElementById("game");
const score = document.getElementById("counting");
const result = document.getElementById("result");
const records = document.getElementById("record");
const ctx = canvas.getContext("2d");

class Game {
    constructor() {
        this.config = new Config();
        this.pipes = new Pipes(this.config)
        this.bird = new Bird(null, this.config, this.pipes);
        this.draw = new Draw(this.config, this.bird, this.pipes);
        this.controlling = new Controlling(this.draw, this.config, this.bird);
        this.bird.draw = this.draw;
        this.startGame();
        this.restartGame();

    }

    reset() {
        this.config.reset();
        this.pipes.reset();
        this.bird.reset();
        this.draw.reset();
        this.controlling.reset();
    }

    startGame() {
        this.controlling.start();
    }

    restartGame(){



        this.controlling.restart();
        
        // this.draw.reset()
    }
}

const game = new Game();



