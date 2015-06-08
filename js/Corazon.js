var Corazon = function(){
    
    var corazones = null;
    var corazon = null;
    var x = null;
    var y = null;
        
    this.Colocar = function(){
        corazon = corazones.getFirstDead();
        
        do{
            x = phaser.world.randomX;
            console.log('x: ' + x);
        }while(x < 70 || x > 830);
        
        do{
            y = phaser.world.randomX;
            console.log('y: ' + y);
        }while(y < 70 || y > 650);
        
        corazon.anchor.setTo(0.5,0.5);
        corazon.reset(x, y);
        
        phaser.physics.arcade.enable(corazon);
    };
    
     this.getPhysicsReference = function() {
        return corazones;  
    };
    
    (function() {        
        corazones = phaser.add.group();
        corazones.enableBody = true;
        corazones.createMultiple(10, 'corazon');        
    })();
}