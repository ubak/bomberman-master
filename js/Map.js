var Map = function(){
    var background = null;
    var map = null;
    var layer = null;
        
    this.getPhysicsReference = function() {
        return layer;  
    };
    
    
    // Constructor
    (function() {        
        background = phaser.add.sprite(0,0, 'background');  
        map = phaser.add.tilemap('map');
        map.addTilesetImage('tileset');
        layer = map.createLayer('Capa de Patrones 1');
        map.setCollision(1);
    })();
}