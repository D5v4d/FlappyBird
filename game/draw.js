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

        this.indexBackground = 0;
        this.indexland = 0;
        this.indexBirdWings = 0;
        this.getReadySpeed = 0;
        this.indexPepis = 0;
        this.getReadyY = 110;

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
                    ctx.drawImage(this.img, 0, 0, 276, 224, Math.floor(this.backgroundX), 270, backgroundWidth, 250);
                    ctx.drawImage(this.img, 0, 0, 276, 224, Math.floor(this.background), 270, backgroundWidth, 250);
                    ctx.drawImage(this.img, 290, 0, 180, 300, this.backgroundland, 400, backgroundWidth, backgroundHeight);
                    ctx.drawImage(this.img, 290, 0, 180, 300, this.cardinalsLand, 400, backgroundWidth, backgroundHeight);
                    speedGame();
                };

                const btnStart = () => {
                    if (this.isButtonVisible) {
                        ctx.drawImage(this.img, 240, 400, 180, 300, 110, 360, 200, 320);
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
                        this.config.bird.startX = 70;
                        this.getReadyY += this.getReadySpeed;

                        if (this.getReadyY >= 109) {
                            this.getReadySpeed -= 0.02;
                        }

                        if (this.getReadyY < 105) {
                            this.getReadySpeed += 0.02;
                        }

                        ctx.drawImage(this.img, 0, 229, 175, 43, 40, this.getReadyY, 250, 57);
                        ctx.drawImage(this.img, 25, 270, 125, 200, 93, 220, 140, 220);
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

                    ctx.drawImage(this.img, 192, 229, 190, 36, 40, this.getReadyY, 250, 57);
                    ctx.drawImage(this.img, 174, 272, 226, 114, 20, 190, 280, 145);
                    ctx.drawImage(this.img, 240, 400, 180, 300, 110, 360, 200, 320);


                    if(this.bird.score >= 5 && this.bird.score < 20){
                        ctx.drawImage(this.img, 359, 158, 45, 44, 50, 245, 56, 55);// медь
                    } else if (this.bird.score >= 10 && this.bird.score < 30){
                        ctx.drawImage(this.img, 359, 112, 45, 44, 50, 245, 56, 55); // серебро
                    } else if(this.bird.score >= 20 && this.bird.score < 40){
                        ctx.drawImage(this.img, 311, 158, 45, 44, 50, 245, 56, 55);// золото
                    } else if(this.bird.score >= 30){
                        ctx.drawImage(this.img, 311, 112, 45, 44, 50, 245, 56, 55); // платина
                    }

                    // Почему рекорд равен текушему счету? ---------------------




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