var Rayo = function(){
    
    var rayos = null;
    var rayo = null;
    var x = null;
    var y = null;
        
    this.Colocar = function(){
        rayo = rayos.getFirstDead();
        
        do{
            x = phaser.world.randomX;
            console.log('x: ' + x);
        }while(x < 70 || x > 830);
        
        do{
            y = phaser.world.randomX;
            console.log('y: ' + y);
        }while(y < 70 || y > 650);
        
        rayo.anchor.setTo(0.5,0.5);
        rayo.reset(x, y);
        
        phaser.physics.arcade.enable(rayo);
    };
    
     this.getPhysicsReference = function() {
        return rayos;  
    };
    
    (function() {        
        rayos = phaser.add.group();
        rayos.enableBody = true;
        rayos.createMultiple(10, 'rayo');        
    })();
}