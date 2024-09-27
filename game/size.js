class Size {
    constructor(config) {
        this.config = config
        this.size()
    }

    size() {
        let clientWidth = document.documentElement.clientWidth

        if (clientWidth >= 375) {    // iPhone SE
            this.config.canvas.width = 375
            this.config.canvas.height = 667

            this.config.background.width = 375
            this.config.background.height = 667
            this.config.background.land = 559
            this.config.background.animationY = 400
            this.config.background.animationH = 310

            this.config.btnStart.x = 125
            this.config.btnStart.y = 495
            this.config.btnStart.w = 250
            this.config.btnStart.h = 370

            this.config.coordinatesbBtn.leftX = 125
            this.config.coordinatesbBtn.rightX = 245
            this.config.coordinatesbBtn.topY = 495
            this.config.coordinatesbBtn.bottomY = 525

            this.config.bird.Y = 260
            this.config.bird.startX = 180

            this.config.startInfo.getReadyX = 62.5

            this.config.startInfo.tapX = 109
            this.config.startInfo.tapY = 320
            this.config.startInfo.tapW = 160
            this.config.startInfo.tapH = 250

            this.config.tubes.width = 67
            
            this.config.tubes.span = this.config.background.land / 4
            this.config.tubes.distance = 67 * 4
            this.config.tubes.topMax = this.config.background.land - 100 - (this.config.background.land / 4)
            this.config.tubes.coming = 100

            this.config.bird.width = this.config.tubes.width / 2
            this.config.bird.height = this.config.tubes.span / 5

            this.config.gameOver.title.x = 38
            this.config.gameOver.title.w = 300

            this.config.gameOver.board.w = 335
            this.config.gameOver.board.h = 175


            this.config.gameOver.medal.x = 56
            this.config.gameOver.medal.y = 295
            this.config.gameOver.medal.w = 67
            this.config.gameOver.medal.h = 68

            this.config.score.marginLeft = 185

            this.config.result.marginTop = 278
            this.config.result.marginLeft = 265

            this.config.record.marginTop = 345
            this.config.record.marginLeft = 265
        }

        if (clientWidth >= 414) {     // iPhone XR
            this.config.canvas.width = 414
            this.config.canvas.height = 750

            this.config.background.width = 414
            this.config.background.height = 750
            this.config.background.land = 600
            this.config.background.animationY = 400
            this.config.background.animationH = 350

            this.config.btnStart.x = 140
            this.config.btnStart.y = 520
            this.config.btnStart.w = 270
            this.config.btnStart.h = 390

            this.config.coordinatesbBtn.leftX = 150
            this.config.coordinatesbBtn.rightX = 270
            this.config.coordinatesbBtn.topY = 522
            this.config.coordinatesbBtn.bottomY = 555

            this.config.bird.Y = 270
            this.config.bird.startX = 195

            this.config.startInfo.getReadyX = 88

            this.config.startInfo.tapX = 135
            this.config.startInfo.tapY = 380

            this.config.tubes.width = 75

            this.config.tubes.span = this.config.background.land / 4
            this.config.tubes.distance = 75 * 4
            this.config.tubes.topMax = this.config.background.land - 100 - (this.config.background.land / 4)
            this.config.tubes.coming = 130

            this.config.bird.width = this.config.tubes.width / 2
            this.config.bird.height = this.config.tubes.span / 5

            this.config.gameOver.title.x = 58

            this.config.gameOver.board.w = 374
            this.config.gameOver.board.h = 208

            this.config.gameOver.medal.x = 58
            this.config.gameOver.medal.y = 308
            this.config.gameOver.medal.w = 79
            this.config.gameOver.medal.h = 80

            this.config.score.marginLeft = 215

            this.config.result.marginTop = 290
            this.config.result.marginLeft = 298

            this.config.record.marginTop = 365
            this.config.record.marginLeft = 298

            this.config.conteiner.marginTop = 73
        }

        if (clientWidth >= 768) {     // iPad Mini и больше 
            this.config.canvas.width = 514
            this.config.canvas.height = 750

            this.config.background.width = 514
            this.config.background.height = 750

            this.config.btnStart.x = 180
            this.config.btnStart.w = 300
            this.config.btnStart.h = 420

            this.config.coordinatesbBtn.leftX = 189
            this.config.coordinatesbBtn.rightX = 327
            this.config.coordinatesbBtn.topY = 518
            this.config.coordinatesbBtn.bottomY = 558

            this.config.bird.Y = 270
            this.config.bird.startX = 238

            this.config.startInfo.getReadyX = 110
            this.config.startInfo.getReadyY = 130
            this.config.startInfo.getReadyW = 320
            this.config.startInfo.getReadyH = 70
            this.config.startInfo.getReadyTop = 125
            this.config.startInfo.getReadyBottom = 129

            this.config.startInfo.tapX = 150
            this.config.startInfo.tapY = 330
            this.config.startInfo.tapW = 230
            this.config.startInfo.tapH = 350

            this.config.tubes.width = 85

            this.config.tubes.span = this.config.background.land / 4
            this.config.tubes.distance = 85 * 4
            this.config.tubes.topMax = this.config.background.land - 100 - (this.config.background.land / 4)
            this.config.tubes.coming = 90

            this.config.bird.width = this.config.tubes.width / 2
            this.config.bird.height = this.config.tubes.span / 5

            this.config.gameOver.title.x = 67
            this.config.gameOver.title.y = 110
            this.config.gameOver.title.w = 380
            this.config.gameOver.title.h = 75

            this.config.gameOver.board.w = 474
            this.config.gameOver.board.h = 248

            this.config.gameOver.medal.x = 72
            this.config.gameOver.medal.y = 321
            this.config.gameOver.medal.w = 96
            this.config.gameOver.medal.h = 97

            this.config.score.marginLeft = 260

            this.config.result.marginTop = 310
            this.config.result.marginLeft = 388

            this.config.record.marginTop = 395
            this.config.record.marginLeft = 388

            this.config.conteiner.marginTop = 75
        }
    }

    reset() {
        let clientWidth = document.documentElement.clientWidth
        if (clientWidth < 375) {
            this.config.bird.Y = 200
            this.config.bird.startX = 145;
        } else if (clientWidth >= 375 && clientWidth < 414) {
            this.config.bird.Y = 260
            this.config.bird.startX = 180
        } else if (clientWidth >= 414 && clientWidth < 768) {
            this.config.bird.Y = 270
            this.config.bird.startX = 195
        } else if (clientWidth >= 768) {
            this.config.bird.Y = 270
            this.config.bird.startX = 238
        }
    }
}




