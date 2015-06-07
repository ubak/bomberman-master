var Map = function(){
    var background = null;
    var map = null;
    var layer = null;
    
    var relojes = null;
    var speedUp = null;
        
    this.getPhysicsReference = function() {
        return {mapa: layer, reloj: relojes.getPhysicsReference(), speedup: speedUp.getPhysicsReference()};  
    };
    
    this.destroyTiles = function(tile){
        if(tile.index == 1) map.removeTile(tile.x,tile.y);        
    };
    
    // Constructor
    (function() {        
        background = phaser.add.sprite(0,0, 'background'); 
        relojes = new Reloj();
        speedUp = new SpeedUp();
        for(var i = 0; i< 8; i++){
            relojes.Colocar();
            speedUp.Colocar();
        }
        
        map = phaser.add.tilemap('map');
        map.addTilesetImage('tileset');
        layer = map.createLayer('Capa de Patrones 1');
        layer.resizeWorld();
        map.setCollision(1);
        map.setCollision(2);
        
        
    })();
}