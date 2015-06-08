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
 //   var map2 = fullmap.getPhysicsReference().fullmap2;
    var relojes = fullmap.getPhysicsReference().reloj;
    var speedUp = fullmap.getPhysicsReference().speedup;
    var corazon = fullmap.getPhysicsReference().corazon;
    var rayo = fullmap.getPhysicsReference().rayo;
    var isGameFinished = false;
    var outOfmana = false;
    var relogesCogidos = null;
    var boostSpeedCogidos = null;
    
    
    phaser.physics.arcade.enable(relojes);
    phaser.physics.arcade.enable(speedUp);
    phaser.physics.arcade.enable(rayo);
    phaser.physics.arcade.enable(corazon);
  //  phaser.physics.arcade.enable(map2);
    
    
    this.update = function(teclas){
        if(!isGameFinished){
            phaser.physics.arcade.collide(imagen, map);
            //phaser.physics.arcade.overlap(imagen, map2, onPlayerCollideWithSpikes, null, this);
            phaser.physics.arcade.overlap(imagen, relojes, onPlayerCollideWithRelojes, null, this);
            phaser.physics.arcade.overlap(imagen, speedUp, onPlayerCollideWithBoostSpeed, null, this);
            phaser.physics.arcade.overlap(imagen, corazon, onPlayerCollideWithCorazon, null, this);
            phaser.physics.arcade.overlap(imagen, rayo, onPlayerCollideWithRayo, null, this);
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
                actualizarMana(0);
            }else if(!teclas.shield.isDown){
                active = false;
                actualizarMana(0);
            }
            shield.update(imagen.position.x, imagen.position.y, active);
        }
        else{
            alert("GAME FINISHED");
        }
    }
    
    this.actualizarTexto = function(){
        return {relojes: relogesCogidos, boostSpeed: boostSpeedCogidos};
    }
    
  /*  var onPlayerCollideWithSpikes = function(imagen, tile){
        console.warn(tile);
        if(tile.index == 2){
            actualizarVida(-1);
        }
    }*/
    
    var onPlayerCollideWithBala = function(imagen, bala){
        bala.kill();
        actualizarVida(-1);
    }
    
    var onPlayerCollideWithRelojes = function(imagen, reloj){
        reloj.kill();
        relogesCogidos ++;
        console.log(relogesCogidos);
        actualizarReload();
    } 
    
    var onPlayerCollideWithBoostSpeed = function(imagen, speedUp){
        speedUp.kill();
        boostSpeedCogidos ++;
        actualizarSpeed();
    }
    
    var onPlayerCollideWithCorazon = function(imagen, corazon){
        corazon.kill();
        actualizarVida(1);
    }
    
    var onPlayerCollideWithRayo = function(imagen, rayo){
        rayo.kill();
        actualizarMana(1);
    }
        
    var onBalaCollideWithShield = function(shield, bala){
        bala.kill();
    }
    var onBalaCollideWithWalls = function(bala, map){
        bala.kill();
        fullmap.destroyTiles(map);
    }
    
    var actualizarVida = function(mode){
        if(mode == -1) vida -= balaEnemigo.getDmg();
        if(mode == 1) vida += 20;
        if(vida >= 100) vida = 100;
        barraVida.scale.setTo(vida/100,1);
        if (vida <= 0){
            isGameFinished = true;
        }
    }
    var actualizarMana = function(mode){
        if(active == true)mana -= 1;
        /*if(active == false && mana < 100) mana += 0.2;*/
        if(mode == 1) mana += 50;
        if(mana >= 100) mana = 100;
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
        imagen.animations.play('up');
    }
    
    this.moveDown = function(){
        imagen.body.velocity.y = speed;
        lastSideY = 1;
        lastSideX = 0;
        imagen.animations.play('down');
    }
    
    this.moveLeft = function(){
        imagen.body.velocity.x = -speed;
        lastSideY = 0;
        lastSideX = -1;
        imagen.animations.play('left');
    }
    
    this.moveRight = function(){
        imagen.body.velocity.x = speed;
        lastSideY = 0;
        lastSideX = 1;
        imagen.animations.play('right');
    }
    
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(imagen);
        imagen.body.collideWorldBounds = true;   
        imagen.body.setSize(30,35,0,10);
    };
    
    (function() {
        vida = 100;
        mana = 100;
        speed = 100;
        radio = 15;
        if(p == 'player_2')  imagen = phaser.add.sprite(70,70, p);
        if(p == 'player_1')  imagen = phaser.add.sprite(830,650, p);
        imagen.animations.add('down' ,[0,1,2],8);
        imagen.animations.add('left' ,[3,4,5],8);
        imagen.animations.add('right' ,[6,7,8],8);
        imagen.animations.add('up' ,[9,10,11],8);
        if(p == 'player_2')  barraVida = phaser.add.sprite(60, 730, 'barraVida1');
        if(p == 'player_1')  barraVida = phaser.add.sprite(840, 730, 'barraVida2');
        if(p == 'player_2')  barraMana = phaser.add.sprite(60, 753, 'barraMana1');
        if(p == 'player_1')  barraMana = phaser.add.sprite(840, 753, 'barraMana2');
        imagen.anchor.setTo(0.5 , 0.5);
        barraVida.anchor.setTo(0.5 , 0.5);
        barraMana.anchor.setTo(0.5 , 0.5);
        relogesCogidos = 0;
        boostSpeedCogidos = 0;
        
        enablePhysics();
    })();
}