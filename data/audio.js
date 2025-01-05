const audio = {
    Map:  new Howl ({
        src: './audio/map.wav',
        html5: true,
        volume: 0.1
    }),
    initRiddle: new Howl ({
        src: './audio/initBattle.wav',
        html5: true,
        volume: 0.1
    }),
    riddle: new Howl ({
        src: './audio/battle.mp3',
        html5: true,
        volume: 0.1
    }),
    initAnswer: new Howl ({
        src: './audio/initFireball.wav',
        html5: true,
        volume: 0.1
    }),
    victory: new Howl ({
        src: './audio/victory.wav',
        html5: true,
        volume: 0.1
    })
}