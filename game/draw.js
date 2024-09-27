class Draw {
    constructor(config, bird, pipes) {
        this.bird = bird;
        this.config = config;
        this.pipes = pipes;
        this.imgsrc = this.config.resources.spriteSheet.src;
        this.img = new Image();
        this.img.src = this.imgsrc;
        this.isButtonVisible = true;
        this.startInfoVisible = false;
        this.startGames = false;
        this.stop = false;
        this.gameOverResult = false;
        this.array();
    }

    array() {
        let backgroundWidth = this.config.background.width;
        let backgroundHeight = this.config.background.height;
        let animationY = this.config.background.animationY;
        let animationH = this.config.background.animationH;
        this.getReadyY = this.config.startInfo.getReadyY;
        this.getReadyX = this.config.startInfo.getReadyX;
        this.getReadyW = this.config.startInfo.getReadyW;
        this.getReadyH = this.config.startInfo.getReadyH;

        this.indexBackground = 0;
        this.indexland = 0;
        this.indexBirdWings = 0;
        this.getReadySpeed = 0;
        this.indexPepis = 0;

        const render = () => {
            if (!this.stop) {
                this.backgroundSpeed = this.config.background.speed;

                const speedGame = () => {
                    this.backgroundland = -((this.indexland * this.backgroundSpeed) % backgroundWidth);
                    this.backgroundX = -((this.indexBackground * this.backgroundSpeed) % backgroundWidth);
                    this.landpipes = -((this.indexPepis * this.backgroundSpeed) % (backgroundWidth + 106));
                    this.landpipesTwo = -((this.indexPepis * this.backgroundSpeed) % (backgroundWidth));

                    this.background = Math.floor(this.backgroundX + backgroundWidth);
                    this.cardinalsLand = Math.floor(this.backgroundland + backgroundWidth);
                    this.cardinalsPipis = Math.floor(this.landpipes + backgroundWidth);
                    this.cardinalsPipisTwo = Math.floor(this.landpipesTwo + backgroundWidth);
                };

                const background = () => {
                    if (!this.bird.isFalling) {
                        this.indexBackground += 0.4;
                        this.indexland += 0.5;
                    }
                    ctx.clearRect(0, 0, backgroundWidth, backgroundHeight);
                    ctx.drawImage(this.img, 0, 0, 275, 224, Math.floor(this.backgroundX), animationY, backgroundWidth, animationH);
                    ctx.drawImage(this.img, 0, 0, 276, 224, Math.floor(this.background) - 0.8, animationY, backgroundWidth, animationH);
                    ctx.drawImage(this.img, 290, 0, 180, 300, this.backgroundland, this.config.background.land, backgroundWidth, backgroundHeight);
                    ctx.drawImage(this.img, 290, 0, 180, 300, this.cardinalsLand, this.config.background.land, backgroundWidth, backgroundHeight);
                    speedGame();
                };

                const btnStart = () => {
                    if (this.isButtonVisible) {
                        ctx.drawImage(this.img, 240, 400, 180, 300, this.config.btnStart.x, this.config.btnStart.y, this.config.btnStart.w, this.config.btnStart.h);
                    }
                };

                const startGames = () => {

                    if (this.startGames) {
                        this.bird.check();
                        if (!this.bird.isFalling) {
                            this.pipes.updatePipes();  // Обновление труб продолжается, если птица не падает
                        }
                    }
                    this.pipes.drawPipes(ctx, this.img);  // Отрисовка труб в любом случае

                };

                const startInfo = () => {
                    if (this.startInfoVisible) {
                        this.config.bird.startX = this.config.startInfo.birdStartX;
                        this.getReadyY += this.getReadySpeed;

                        if (this.getReadyY >= this.config.startInfo.getReadyBottom) {
                            this.getReadySpeed -= 0.02;
                        }

                        if (this.getReadyY < this.config.startInfo.getReadyTop) {
                            this.getReadySpeed += 0.02;
                        }

                        ctx.drawImage(this.img, 0, 229, 175, 43, this.getReadyX, this.getReadyY, this.getReadyW, this.getReadyH);
                        ctx.drawImage(this.img, 25, 270, 125, 200, this.config.startInfo.tapX, this.config.startInfo.tapY, this.config.startInfo.tapW, this.config.startInfo.tapH);
                    }
                };

                background();
                btnStart();
                startGames();
                startInfo();
            }

            const bird = () => {
                this.indexBirdWings += 0.2;

                let birdSource = {
                    x: this.config.resources.entries.bird[0].x,
                    y: this.config.resources.entries.bird[Math.floor((this.indexBirdWings % 9) / 3)].y,
                    width: this.config.resources.entries.bird[0].w,
                    height: this.config.resources.entries.bird[0].h,
                };

                let birdResult = {
                    x: this.config.bird.startX,
                    y: this.config.bird.Y,
                    width: this.config.bird.width,
                    height: this.config.bird.height,
                };

                if (this.bird.isFalling) {
                    birdSource.y = this.config.resources.entries.bird[2].y
                }

                ctx.drawImage(this.img, birdSource.x, birdSource.y, birdSource.width, birdSource.height, birdResult.x, birdResult.y, birdResult.width, birdResult.height);
            };


            const gameOverResult = () => {
                if (this.gameOverResult) {

                    ctx.drawImage(this.img, 192, 229, 190, 36, this.config.gameOver.title.x, this.config.gameOver.title.y, this.config.gameOver.title.w, this.config.gameOver.title.h);
                    ctx.drawImage(this.img, 174, 272, 226, 114, this.config.gameOver.board.x, this.config.gameOver.board.y, this.config.gameOver.board.w, this.config.gameOver.board.h);
                    ctx.drawImage(this.img, 240, 400, 180, 300, this.config.btnStart.x, this.config.btnStart.y, this.config.btnStart.w, this.config.btnStart.h);

                    if (this.bird.score <= 10 && this.bird.score < 20) {
                        ctx.drawImage(this.img, 359, 158, 45, 44, this.config.gameOver.medal.x, this.config.gameOver.medal.y, this.config.gameOver.medal.w, this.config.gameOver.medal.h);// медь
                    } else if (this.bird.score <= 20 && this.bird.score < 30) {
                        ctx.drawImage(this.img, 359, 112, 45, 44, this.config.gameOver.medal.x, this.config.gameOver.medal.y, this.config.gameOver.medal.w, this.config.gameOver.medal.h); // серебро
                    } else if (this.bird.score <= 30 && this.bird.score < 40) {
                        ctx.drawImage(this.img, 311, 158, 45, 44, this.config.gameOver.medal.x, this.config.gameOver.medal.y, this.config.gameOver.medal.w, this.config.gameOver.medal.h);// золото
                    } else if (this.bird.score >= 40) {
                        ctx.drawImage(this.img, 311, 112, 45, 44, this.config.gameOver.medal.x, this.config.gameOver.medal.y, this.config.gameOver.medal.w, this.config.gameOver.medal.h); // платина
                    }

                    // Локальное хранилише
                    let record = localStorage.getItem('best') ?? 0;
                    this.bird.scoreRecord = record;

                    if (this.bird.score > this.bird.scoreRecord) {
                        this.bird.scoreRecord = this.bird.score;
                        localStorage.setItem('best', this.bird.scoreRecord);
                    }

                    result.innerHTML = this.bird.score
                    records.innerHTML = record
                    score.innerHTML = ``;
                }
            }

            bird()
            gameOverResult()
            window.requestAnimationFrame(render);
        };

        this.img.onload = render;
        render();
    }

    reset() {
        this.isButtonVisible = true;
        this.startInfoVisible = false;
        this.startGames = false;
        this.stop = false;
        this.gameOverResult = false;
    }
}