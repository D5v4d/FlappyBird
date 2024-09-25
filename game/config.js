class Config {

  reset() {
    this.bird.startX = 145;
    this.bird.Y = 200
    this.tubes.speed = 1.1

  }

  background = {
    width: 320,
    height: 480,
    speed: 1,
  }

  bird = {
    startX: 145,
    Y: 200,
    width: 26.5,
    height: 20,
  }

  tubes = {
    speed: 1.1,
    width: 53,
  }

  resources = {
    spriteSheet: {
      src: 'assets/sprite.png',
    },

    tubePattern: {
      w: 53
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
          x: 553,
          y: 375,
          w: 53,
          h: 25,
        },
        {
          x: 502,
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