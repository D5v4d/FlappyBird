class Bird {
    constructor(draw, config, pipes) {
        this.pipes = pipes;
        this.config = config;
        this.draw = draw;
        this.velocity = 1; // Начальная скорость падения
        this.gravityInterval = 25; // Интервал обновления гравитации в миллисекундах
        this.score = 0;
        this.scoreRecord = 0;
        this.isFalling = false;  // Флаг, указывающий, что птица падает после столкновения
        this.audioHit = true;
        this.die = new Audio(this.config.resources.audio.die)
        this.flap = new Audio(this.config.resources.audio.flap)
        this.hit = new Audio(this.config.resources.audio.hit)
        this.point = new Audio(this.config.resources.audio.point)
    }

    check() {
        score.innerHTML = `${this.score}`;

        // Проверяем, чтобы птица не вылетала за верхний предел
        if (this.config.bird.Y <= 0) {
            this.config.bird.Y = 0;
        }

        // Проверяем касание земли
        if (this.config.bird.Y + this.config.bird.height >= this.config.background.land) {
            this.config.bird.Y = this.config.background.land - this.config.bird.height;
            if (!this.isFalling) {
                this.die.play()
                this.isFalling = true;
                this.draw.stop = true; // Остановка игры, если птица достигла земли
                this.draw.gameOverResult = true;
            }
        }

        // Проверка столкновений с трубами и увеличение очков
        this.pipes.pipes.forEach(pipe => {
            if (this.config.bird.startX + this.config.bird.width >= pipe.x && this.config.bird.startX <= pipe.x + this.config.resources.entries.pipes[0].w) {
                if (this.config.bird.Y <= pipe.topHeight || this.config.bird.Y + this.config.bird.height >= pipe.topHeight + this.config.tubes.span) {
                    if (this.audioHit) {
                        this.hit.play()
                        this.audioHit = false
                    }
                    this.isFalling = true; // Птица врезалась, начинается падение
                }
            }

            if (this.config.bird.startX >= pipe.x + this.config.resources.entries.pipes[0].w - 1 && this.config.bird.startX <= pipe.x + this.config.resources.entries.pipes[0].w) {
                this.point.play()
                this.score++;
            }

            // Ускорение игры при достижении определенного количества очков
            if (this.score == 10 && this.config.tubes.speed == 1.1) {
                this.draw.indexland += 0.25;
                this.config.tubes.speed += 0.21;
            } else if (this.score == 20 && this.config.tubes.speed == 1.31) {
                this.draw.indexland += 0.25;
                this.config.tubes.speed += 0.21;
            } else if (this.score == 30 && this.config.tubes.speed == 1.52) {
                this.draw.indexland += 0.5;
                this.config.tubes.speed += 0.21;
            }
        });
    }

    gravity() {
        if (this.draw.startGames) {
            let gravity = setInterval(() => {
                // Проверяем, что птица не достигла земли
                if (this.config.bird.Y + this.config.bird.height < this.config.background.land) {
                    if (!this.isFalling) {
                        this.velocity += 0.2; // Постепенно увеличиваем скорость падения
                        this.config.bird.Y += this.velocity; // Увеличиваем позицию Y птицы
                    } else {
                        // Увеличиваем скорость падения после столкновения
                        this.velocity += 0.5;
                        this.config.bird.Y += this.velocity;
                    }
                } else {
                    this.draw.gameOverResult = true;
                    if (!this.gameOverResult) {
                        clearInterval(gravity);
                    }

                    // Если птица достигла земли, остановить её падение
                    this.die.play()
                    this.config.bird.Y = this.config.background.land - this.config.bird.height;  // Останавливаем на уровне земли
                    this.velocity = 0;  // Останавливаем падение
                }
            }, this.gravityInterval);
        }
    }

    flight() {
        if (!this.isFalling) {
            this.flap.play()
            this.config.bird.Y -= this.config.tubes.span / 2;
            this.velocity = 1;
        }
    }

    reset() {
        this.velocity = 1;
        this.score = 0;
        this.isFalling = false;
        this.audioHit = true;
    }
}
