var Shield = function(){
    var imagen = null;
    
    this.update = function(x,y,active){
        if(active == false) imagen.alpha = 0;
        else imagen.alpha = 1;
        
        if(imagen != null && active == true){
            imagen.position.x = x;
            imagen.position.y = y;
        }
    };
    this.getPhysicsReference = function() {
        return imagen;  
    };
    
(function() {        
        imagen = phaser.add.sprite(840, 700, 'shield1');
        imagen.alpha = 0;
        imagen.anchor.setTo(0.5,0.5);
    
        phaser.physics.arcade.enable(imagen);
        
    })();
}