var SpeedUp = function(){
    
    var boostSpeed = null;
    var boost = null;
    var x = null;
    var y = null;
        
    this.Colocar = function(){
        boost = boostSpeed.getFirstDead();
        
        do{
            x = phaser.world.randomX;
        }while(x < 70 || x > 830);
        
        do{
            y = phaser.world.randomX;
        }while(y < 70 || y > 650);
        
        boost.anchor.setTo(0.5,0.5);
        boost.reset(x, y);
        
        phaser.physics.arcade.enable(boost);
    };
    
     this.getPhysicsReference = function() {
        return boostSpeed;  
    };
    
    (function() {        
        boostSpeed = phaser.add.group();
        boostSpeed.enableBody = true;
        boostSpeed.createMultiple(10, 'speedUp');        
    })();
}