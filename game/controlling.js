class Controlling {
    constructor(draw, config, bird) {
        this.draw = draw;
        this.config = config;
        this.bird = bird;
        this.startButtonHandler = this.startButtonHandler.bind(this); // Привязка контекста
        this.startGameHandler = this.startGameHandler.bind(this);
        this.startHandle = this.startHandle.bind(this);
        this.swooshing = new Audio(this.config.resources.audio.swooshing)
    }

    start() {
        if (this.draw.isButtonVisible) {
            canvas.addEventListener('click', this.startButtonHandler);
            console.log(this.bird.record)
        }
    }

    startButtonHandler(event) {
        let x = event.offsetX;
        let y = event.offsetY;

        if (x > 110 && x < 210 && y > 360 && y < 390) {
            this.swooshing.play()
            this.draw.isButtonVisible = false;
            canvas.removeEventListener('click', this.startButtonHandler); // Удаление обработчика
            this.startInfo();
        }
    }

    startInfo() {
        this.config.bird.startX = 200;
        this.draw.startInfoVisible = true;

        const startGame = () => {

            canvas.addEventListener('click', this.startHandle);
            canvas.addEventListener('click', this.startGameHandler);
        }
        startGame();
    }

    startGameHandler() {
        this.draw.startInfoVisible = false;
        this.draw.startGames = true;
        // Запуск игры и обработка птицы
        this.bird.gravity();
        canvas.removeEventListener('click', this.startGameHandler);

    }

    startHandle() {
        this.bird.flight();
    }




    restart() {
        setInterval(() => {
            if (this.draw.gameOverResult) {
                canvas.addEventListener('click', gaveRestart);
            }
        }, 1);

        const gaveRestart = (event) => {
            canvas.removeEventListener('click', gaveRestart);
            canvas.removeEventListener('click', this.startHandle)

            this.x = event.offsetX;
            this.y = event.offsetY;

            if (this.x > 110 && this.x < 210 && this.y > 360 && this.y < 390) {
                this.swooshing.play()
                result.innerHTML = ``
                records.innerHTML = ``
                game.reset()
                game.startGame()
            }
        }



    }






    reset() {
    }

}
