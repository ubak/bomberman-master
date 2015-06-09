var Load = function(){    
    phaser.load.image('background', 'assets/background.jpg');
    phaser.load.spritesheet('player_1', 'assets/player_1.png', 31, 49);
    phaser.load.spritesheet('player_2', 'assets/player_2.png', 31, 49);
    phaser.load.image('tileset', 'assets/tileset.png');
    phaser.load.image('tileset3', 'assets/tileset3.png');
    phaser.load.image('bala', 'assets/bala.png');
    phaser.load.image('barraVida1', 'assets/barra vida.png');
    phaser.load.image('barraVida2', 'assets/barra vida 2.png');
    phaser.load.image('barraMana1', 'assets/barra mana.png');
    phaser.load.image('barraMana2', 'assets/barra mana 2.png');
    phaser.load.image('shield1', 'assets/barrera.png');
    phaser.load.image('shield2', 'assets/barrera2.png');
    phaser.load.image('reloj', 'assets/reloj.png');
    phaser.load.image('speedUp', 'assets/speedUp.png');
    phaser.load.image('corazon', 'assets/corazon.png');
    phaser.load.image('rayo', 'assets/rayo.png');
    phaser.load.image('vida1', 'assets/vida P1.png');
    phaser.load.image('vida2', 'assets/vida P2.png');
    phaser.load.image('mana1', 'assets/mana P1.png');
    phaser.load.image('mana2', 'assets/mana P2.png');
    phaser.load.image('boosts', 'assets/boosts.png');
    phaser.load.image('instrucciones', 'assets/instrucciones.png');
    phaser.load.tilemap('map', 'assets/mapa.json', null, Phaser.Tilemap.TILED_JSON);
    
    phaser.load.audio('music', 'assets/music.wav');
}