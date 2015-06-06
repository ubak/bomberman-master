var FullGame = function(){
    
    var map = null;
    var player1 = null;
    var player2 = null;
    var bala1 = null;
    var bala2 = null;
    var barraVida1 = null;
    var barraVida2 = null;
    var shield1 = null;
    var shield2
    this.cursor = {
        space: phaser.input.keyboard.addKey(13),
		up: phaser.input.keyboard.addKey(38),
        down: phaser.input.keyboard.addKey(40),
		left: phaser.input.keyboard.addKey(37),
		right: phaser.input.keyboard.addKey(39),
        shield: phaser.input.keyboard.addKey(48)
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
    }
    
    var enablePhysics = function(){
        phaser.physics.startSystem(Phaser.Physics.ARCADE);
    };
    
     (function() {      
        enablePhysics();
        
        map = new Map();
        bala1 = new Bala(map);
        bala2 = new Bala(map);
        shield1 = new Shield();
        shield2 = new Shield(); 
        player1 = new Player('player1',map.getPhysicsReference(), bala1, bala2);
        player2 = new Player('player2',map.getPhysicsReference(), bala2, bala1);
    })();
}