var Bala = function(){
    
    var balas = null;
    var bala = null;
    var dmg = null;
    var imagenExplo = null;
    
    
    this.shoot = function(x,y,lastSideX,lastSideY){
        bala = balas.getFirstDead();
        
        if(!bala) {
            return;
        }
        bala.anchor.setTo(0.5,0.5);
        bala.reset(x,y);
        bala.body.velocity.x= lastSideX * 500;
        bala.body.velocity.y= lastSideY * 500;
        bala.checkWorldBounds = true;
        bala.outOfBoundsKill = true;
        
        phaser.physics.arcade.enable(bala);
    };
     this.getPhysicsReference = function() {
        return balas;  
    };
    
    this.getDmg = function(){
        return dmg;
    };
    
    this.explosion = function(x,y){
        imagenExplo = phaser.add.sprite(x, y, 'explosion');
    };
    
    
    (function() {        
        balas = phaser.add.group();
        balas.enableBody = true;
        balas.createMultiple(10, 'bala');
        dmg = 10;
        
    })();
}