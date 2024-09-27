class Config {

  reset() {
    this.tubes.speed = 1.1
  }

  canvas = {
    width: 320,
    height: 568.
  }

  conteiner = {
    marginTop: 0
  }
  background = {
    width: this.canvas.width,
    height: 480,
    speed: 1,
    land: 460, //Земля
    animationY: 310,
    animationH: 280
  }

  tubes = {
    speed: 1.1,
    width: 55,
    span: this.background.land / 4,
    distance: 55 * 4,
    topMax: this.background.land - 100 - (this.background.land / 4),
    topMin: 50,
    coming: 55
  }

  bird = {
    startX: 145,
    Y: 220,
    width: this.tubes.width / 2,
    height: this.tubes.span / 5,
  }

  coordinatesbBtn = {
    leftX: 110,
    rightX: 210,
    topY: 410,
    bottomY: 440,
  }

  btnStart = {
    x: 110,
    y: 410,
    w: 200,
    h: 300
  }

  startInfo = {
    getReadyX: 40,
    getReadyY: 110,
    getReadyW: 250,
    getReadyH: 57,
    getReadyTop: 105,
    getReadyBottom: 109,
    birdStartX: 70,

    tapX: 93,
    tapY: 270,
    tapW: 140,
    tapH: 220,
  }

  gameOver = {

    title: {
      x: 40,
      y: 110,
      w: 250,
      h: 57
    },

    board: {
      x: 20,
      y: 230,
      w: 280,
      h: 145
    },

    medal: {
      x: 50,
      y: 285,
      w: 56,
      h: 55
    },
  }

  score = {
    marginLeft: 150
  }
  result = {
    marginTop: 267,
    marginLeft: 215
  }

  record = {
    marginTop: 322,
    marginLeft: 215
  }

  resources = {
    spriteSheet: {
      src: 'assets/sprite.png',
    },

    entries: {

      bird: [
        {
          x: 276,
          y: 113,
          w: 34,
          h: 26,
        },
        {
          x: 276,
          y: 139,
          w: 34,
          h: 26,
        },
        {
          x: 276,
          y: 165,
          w: 34,
          h: 26,
        }
      ],

      pipes: [
        {
          x: 554,
          y: 375,
          w: 53,
          h: 25,
        },
        {
          x: 501,
          y: 0,
          w: 53,
          h: 25,
        },
      ],
    },

    audio: {

      die: 'assets/audio/die.wav',

      flap: 'assets/audio/flap.wav',

      hit: 'assets/audio/hit.wav',

      point: 'assets/audio/point.wav',

      swooshing: 'assets/audio/swooshing.wav',

    }
  }


}