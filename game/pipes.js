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
            let pipeX = this.config.background.width + i * this.config.tubes.distance; // расстояние 212px между трубами
            let topHeight = Math.floor(Math.random() * this.config.tubes.topMax) + this.config.tubes.topMin; // Верхняя труба от 50 до 250px
            let bottomHeight = this.config.background.land - topHeight - this.config.tubes.span; // оставшаяся высота для нижней трубы

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
                if (pipe.x < -this.config.tubes.coming) {
                    pipe.x = this.config.background.width + this.config.tubes.width; // перемещаем трубу за экран
                    pipe.topHeight = Math.floor(Math.random() * this.config.tubes.topMax) + this.config.tubes.topMin;
                    pipe.bottomHeight = this.config.background.land - pipe.topHeight - this.config.tubes.span;
                }
            });
        }
    }

    // Отрисовка труб
    drawPipes(ctx, img) {
        this.pipes.forEach(pipe => {
            // Верхняя труба
            ctx.drawImage(img, this.config.resources.entries.pipes[0].x, this.config.resources.entries.pipes[0].y - pipe.topHeight + 24, this.config.resources.entries.pipes[1].w, pipe.topHeight,
                pipe.x, 0, this.config.tubes.width, pipe.topHeight);

            // Нижняя труба
            ctx.drawImage(img, this.config.resources.entries.pipes[1].x, this.config.resources.entries.pipes[1].y, this.config.resources.entries.pipes[1].w, pipe.bottomHeight,
                pipe.x, this.config.background.land - pipe.bottomHeight, this.config.tubes.width, pipe.bottomHeight);
        });
    }

    reset() {
        this.pipes = [];
        this.generatePipes();
    }
}
