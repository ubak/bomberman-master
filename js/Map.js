var Map = function(){
    var background = null;
    var map = null;
    var layer = null;
    
    var relojes = null;
    var speedUp = null;
    var corazones = null;
    var rayos = null;
    var vida1 = null;
    var vida2 = null;
    var mana1 = null;
    var mana2 = null;
    var boosts1 = null;
    var boosts2 = null;
    
        
    this.getPhysicsReference = function() {
        return {mapa: layer,fullmap: map, reloj: relojes.getPhysicsReference(), speedup: speedUp.getPhysicsReference(), rayo: rayos.getPhysicsReference(), corazon: corazones.getPhysicsReference()};  
    };
    
    this.destroyTiles = function(tile){
        if(tile.index == 1) map.removeTile(tile.x,tile.y);        
    };
    
    // Constructor
    (function() {        
        background = phaser.add.sprite(0,0, 'background'); 
        relojes = new Reloj();
        speedUp = new SpeedUp();
        corazones = new Corazon();
        rayos = new Rayo();
        
        for(var i = 0; i< 5; i++){
            relojes.Colocar();
            speedUp.Colocar();
            corazones.Colocar();
            rayos.Colocar();
        }
        
        map = phaser.add.tilemap('map');
        map.addTilesetImage('tileset');
        layer = map.createLayer('Capa de Patrones 1');
        layer.resizeWorld();
        map.setCollision(1);
        map.setCollision(2);
        vida1 = phaser.add.sprite(180, 730, 'vida1');
        vida1.anchor.setTo(0.5,0.5);
        vida2 = phaser.add.sprite(730, 730, 'vida2'); 
        vida2.anchor.setTo(0.5,0.5);
        mana1 = phaser.add.sprite(180, 753, 'mana1');
        mana1.anchor.setTo(0.5,0.5);
        mana2 = phaser.add.sprite(730, 753, 'mana2');
        mana2.anchor.setTo(0.5,0.5);
        boosts1 = phaser.add.sprite(350,740, 'boosts');
        boosts1.anchor.setTo(0.5,0.5);
        boosts2 = phaser.add.sprite(550,740, 'boosts');
        boosts2.anchor.setTo(0.5,0.5);
        boosts2.scale.x = -1;
    })();
}