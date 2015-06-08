var FullGame = function(){
     
    var map = null;
    var player1 = null;
    var player2 = null;
    var bala1 = null;
    var bala2 = null;
    var barraVida1 = null;
    var barraVida2 = null;
    var shield1 = null;
    var shield2 = null;
 
    var text1 = null;
    var lableP1 = null;
    var text2 = null;
    var lableP2 = null;
    var instrucciones = null;
    var instruccionesActive = true;
    var time = null;
    var spikes = false;
    var music = null;
    
    this.cursor = {
        space: phaser.input.keyboard.addKey(13),
		up: phaser.input.keyboard.addKey(38),
        down: phaser.input.keyboard.addKey(40),
		left: phaser.input.keyboard.addKey(37),
		right: phaser.input.keyboard.addKey(39),
        shield: phaser.input.keyboard.addKey(96)
    };
    
    this.wasd = {
        space: phaser.input.keyboard.addKey(32),
		up: phaser.input.keyboard.addKey(Phaser.Keyboard.W),
        down: phaser.input.keyboard.addKey(Phaser.Keyboard.S),
		left: phaser.input.keyboard.addKey(Phaser.Keyboard.A),
		right: phaser.input.keyboard.addKey(Phaser.Keyboard.D),
        shield: phaser.input.keyboard.addKey(16)
    };
    
    this.update = function(){
        player1.update(this.cursor);
        player2.update(this.wasd);    
        lableP2.text = 'X'+ player2.actualizarTexto().relojes + '       X' + player2.actualizarTexto().boostSpeed;
        lableP1.text = player1.actualizarTexto().boostSpeed +'X       '+   player1.actualizarTexto().relojes+'X';
           /* if(timer < phaser.time.now){
                map.updateSpikes(spikes);
                timer = phaser.time.now + 1000;
            }*/
         
        music.onLoop.add(this.playLevelMusic, this);   
    };
    
    this.playLevelMusic = function() {
	    music.play('', 0, 1, true);
    };
    
    var enablePhysics = function(){
        phaser.physics.startSystem(Phaser.Physics.ARCADE);
    };
    
    
    
     (function() {      
        enablePhysics();
        timer = phaser.time.now + 200;
        map = new Map();
        bala1 = new Bala(map);
        bala2 = new Bala(map);
        shield1 = new Shield();
        shield2 = new Shield(); 
        player1 = new Player('player_1',map, bala1, bala2, shield1);
        player2 = new Player('player_2',map, bala2, bala1, shield2);
        text2 = 'X'+ player1.actualizarTexto().relojes + '       X' + player1.actualizarTexto().boostSpeed;
        text1 =  player2.actualizarTexto().relojes +'X       '+   player2.actualizarTexto().boostSpeed+'X';
           
        lableP1 = phaser.add.text(520, 735, text2, {font: '25px Arial', fill: '#f00', align: 'center'});
        lableP2 = phaser.add.text(270, 735, text1, {font: '25px Arial', fill: '#f00', align: 'center'});
         instrucciones = phaser.add.sprite(0, 0, 'instrucciones');
        phaser.add.tween(instrucciones).to( { alpha: 1 }, 4000).to( { alpha: 0 }, 1000).start();
        music = phaser.add.audio('music');
        music.loop = true;
        music.play('', 0, 1, true);
    })();
}