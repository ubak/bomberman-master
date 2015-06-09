var Reloj = function(){
    
    var relojes = null;
    var reloj = null;
    var x = null;
    var y = null;
    
    this.Colocar = function(){
        reloj = relojes.getFirstDead();
        x = phaser.world.randomX;
        y = phaser.world.randomY;
                
        do{
            x = phaser.world.randomX;
        }while(x < 70 || x > 830);
        
        do{
            y = phaser.world.randomX;
        }while(y < 70 || y > 650);
        
        reloj.anchor.setTo(0.5,0.5);
        reloj.reset(x, y);
        
        phaser.physics.arcade.enable(reloj);
    };
    
     this.getPhysicsReference = function() {
        return relojes;  
    };
    
    
    (function() {        
        relojes = phaser.add.group();
        relojes.enableBody = true;
        relojes.createMultiple(10, 'reloj');        
    })();
}