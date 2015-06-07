var Player = function(p,fullmap,balaPj,balaEnemigo,shield){
    var vida = null;
    var mana = null;
    var speed = null;
    var radio = null;
    var imagen = null;
    var posX = null;
    var posY = null;
    var lastSideX = 1;
    var lastSideY = 1;
    var reloadDelay = 500;
    var delay = 0;
    var barraVida = null;
    var barraMana = null;
    var active = false;
    var map = fullmap.getPhysicsReference().mapa;
    var relojes = fullmap.getPhysicsReference().reloj;
    var speedUp = fullmap.getPhysicsReference().speedup;
    var isGameFinished = false;
    var outOfmana = false;
    
    phaser.physics.arcade.enable(map);
    phaser.physics.arcade.enable(relojes);
    phaser.physics.arcade.enable(speedUp);
    
    this.update = function(teclas){
        if(!isGameFinished){
            phaser.physics.arcade.collide(imagen, map);
            phaser.physics.arcade.overlap(imagen, relojes, onPlayerCollideWithRelojes, null, this);
            phaser.physics.arcade.overlap(imagen, speedUp, onPlayerCollideWithBoostSpeed, null, this);
            phaser.physics.arcade.overlap(imagen, balaEnemigo.getPhysicsReference(), onPlayerCollideWithBala, null, this);
            phaser.physics.arcade.overlap(balaPj.getPhysicsReference(), map, onBalaCollideWithWalls, null, this);
            if(active == true)phaser.physics.arcade.overlap(shield.getPhysicsReference(), balaEnemigo.getPhysicsReference(), onBalaCollideWithShield, null, this);


            if (teclas.up.isDown){
                this.moveUP();
            }else if (teclas.down.isDown){
                this.moveDown();
            }else if (teclas.left.isDown){
                this.moveLeft();
            }else if (teclas.right.isDown){
                this.moveRight();
            }else this.moveIdle();

            if (teclas.space.isDown && delay < phaser.time.now){
                delay = phaser.time.now + reloadDelay;
                balaPj.shoot(imagen.position.x, imagen.position.y, lastSideX, lastSideY,map);  
            }

            if(teclas.shield.isDown && outOfmana == false){
                active = true;
                actualizarMana();
            }else if(!teclas.shield.isDown){
                active = false;
                actualizarMana();
            }
            shield.update(imagen.position.x, imagen.position.y, active);
        }
        else{
            alert("GAME FINISHED");
        }
    }
    
    var onPlayerCollideWithBala = function(imagen, bala){
        bala.kill();
        actualizarVida();
    }
    
    var onPlayerCollideWithRelojes = function(imagen, reloj){
        reloj.kill();
        actualizarReload();
    } 
    
    var onPlayerCollideWithBoostSpeed = function(imagen, speedUp){
        speedUp.kill();
        actualizarSpeed();
    }
        
    var onBalaCollideWithShield = function(shield, bala){
        bala.kill();
    }
    var onBalaCollideWithWalls = function(bala, map){
        bala.kill();
        fullmap.destroyTiles(map);
    }
    
    var actualizarVida = function(){
        vida -= balaEnemigo.getDmg();
        barraVida.scale.setTo(vida/100,1);
        if (vida <= 0){
            isGameFinished = true;
        }
    }
    var actualizarMana = function(){
        if(active == true)mana -= 1;
        if(active == false && mana <= 100) mana *= 1.01;
        barraMana.scale.setTo(mana/100,1);
        if (mana <= 0){
            outOfmana = true
        }
        else outOfmana = false;
    }
    
    var actualizarReload = function(){
        reloadDelay -= 50;    
    }
    
    var actualizarSpeed = function(){
        speed += 20;
    }
        
    this.moveIdle = function(){
       imagen.body.velocity.y = 0;
       imagen.body.velocity.x = 0;
    }
    this.moveUP = function(){
        imagen.body.velocity.y = -speed;
        lastSideY = -1;
        lastSideX = 0;
    }
    
    this.moveDown = function(){
        imagen.body.velocity.y = speed;
        lastSideY = 1;
        lastSideX = 0;
    }
    
    this.moveLeft = function(){
        imagen.body.velocity.x = -speed;
        lastSideY = 0;
        lastSideX = -1;
    }
    
    this.moveRight = function(){
        imagen.body.velocity.x = speed;
        lastSideY = 0;
        lastSideX = 1;
    }
    
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(imagen);
        imagen.body.bounce.y = 0.2;
        imagen.body.collideWorldBounds = true;    
    };
    
    (function() {
        vida = 100;
        mana = 100;
        speed = 100;
        radio = 15;
        if(p == 'player2')  imagen = phaser.add.sprite(70,70, p);
        if(p == 'player1')  imagen = phaser.add.sprite(830,650, p);
        if(p == 'player2')  barraVida = phaser.add.sprite(60, 730, 'barraVida1');
        if(p == 'player1')  barraVida = phaser.add.sprite(840, 730, 'barraVida2');
        if(p == 'player2')  barraMana = phaser.add.sprite(60, 753, 'barraMana1');
        if(p == 'player1')  barraMana = phaser.add.sprite(840, 753, 'barraMana2');
        imagen.anchor.setTo(0.5 , 0.5);
        barraVida.anchor.setTo(0.5 , 0.5);
        barraMana.anchor.setTo(0.5 , 0.5);
        
        enablePhysics();
    })();
}