class Pipes {
    constructor(config) {
        this.config = config;
        this.pipes = [];
        this.generatePipes();
    }

    // Метод для создания массива труб
    generatePipes() {
        const numPipes = 2; // Количество труб на экране
        for (let i = 0; i < numPipes; i++) {
            let pipeX = this.config.background.width + i * 212; // расстояние 212px между трубами
            let topHeight = Math.floor(Math.random() * 200) + 50; // Верхняя труба от 50 до 250px
            let gap = 100; // зазор между трубами
            let bottomHeight = 400 - topHeight - gap; // оставшаяся высота для нижней трубы

            this.pipes.push({
                x: pipeX,
                topHeight: topHeight,
                bottomHeight: bottomHeight
            });
        }
    }

    // Обновление труб
    updatePipes() {
        if (!this.config.bird.isFalling) {  // Если птица не падает, продолжаем двигать трубы
            this.pipes.forEach(pipe => {
                pipe.x -= this.config.tubes.speed; // двигаем трубы влево
                if (pipe.x < -this.config.tubes.width) {
                    pipe.x = this.config.background.width + 24; // перемещаем трубу за экран
                    pipe.topHeight = Math.floor(Math.random() * 200) + 50;
                    pipe.bottomHeight = 400 - pipe.topHeight - 100;
                }
            });
        }
    }

    // Отрисовка труб
    drawPipes(ctx, img) {
        this.pipes.forEach(pipe => {
            // Верхняя труба
            ctx.drawImage(img, this.config.resources.entries.pipes[0].x, this.config.resources.entries.pipes[0].y - pipe.topHeight + 24, this.config.tubes.width, pipe.topHeight,
                pipe.x, 0, this.config.tubes.width, pipe.topHeight);

            // Нижняя труба
            ctx.drawImage(img, this.config.resources.entries.pipes[1].x, this.config.resources.entries.pipes[1].y, this.config.tubes.width, pipe.bottomHeight,
                pipe.x, 400 - pipe.bottomHeight, this.config.tubes.width, pipe.bottomHeight);
        });
    }


    reset(){
        this.pipes = [];
        this.generatePipes();
    }
}
