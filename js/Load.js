var Load = function(){    
    phaser.load.image('background', 'assets/background.jpg');
    phaser.load.image('piedra', 'assets/piedra.jpg');
    phaser.load.image('player1', 'assets/player.png');
    phaser.load.image('player2', 'assets/player2.png');
    phaser.load.image('tileset', 'assets/tileset.png');
    phaser.load.image('tileset2', 'assets/tileset2.png');
    phaser.load.image('bala', 'assets/bala.png');
    phaser.load.image('barraVida1', 'assets/barra vida.png');
    phaser.load.image('barraVida2', 'assets/barra vida 2.png');
    phaser.load.image('barraMana1', 'assets/barra mana.png');
    phaser.load.image('barraMana2', 'assets/barra mana 2.png');
    phaser.load.image('shield1', 'assets/barrera.png');
    phaser.load.image('shield2', 'assets/barrera2.png');
    phaser.load.image('reloj', 'assets/reloj.png');
    phaser.load.image('speedUp', 'assets/speedUp.png');
    phaser.load.image('explosion', 'assets/explosion.png');
    phaser.load.image('corazon', 'assets/corazon.png');
    phaser.load.image('rayo', 'assets/rayo.png');
    phaser.load.image('vida1', 'assets/vida P1.png');
    phaser.load.image('vida2', 'assets/vida P2.png');
    phaser.load.image('mana1', 'assets/mana P1.png');
    phaser.load.image('mana2', 'assets/mana P2.png');
    phaser.load.image('boosts', 'assets/boosts.png');
    phaser.load.tilemap('map', 'assets/mapa.json', null, Phaser.Tilemap.TILED_JSON);
}