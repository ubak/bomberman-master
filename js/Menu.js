var Menu = function(){
    var backgroundImage = null;
    var nameLabel = null;
    var startLabel = null;
    var upKey = null;
    
    
    var addBackground = function() {
        backgroundImage = phaser.add.image(0, 0, 'background');  
        backgroundImage.scale.setTo(2,2);
    };
    
    var createIntroText = function() {
        nameLabel = phaser.add.text(phaser.world.centerX, -50, 'Super Test Example', { font: '70px Geo', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
    };
    
    var createStartText = function() {
        startLabel = phaser.add.text(phaser.world.centerX, phaser.world.height-80, 'press the up arrow key to start', { font: '25px Arial', fill: '#ffffff' });
		startLabel.anchor.setTo(0.5, 0.5);

		phaser.add.tween(startLabel).to({angle: -2}, 500).to({angle:2}, 500).loop().start();   
    };
    
    var attachKeyboardCallback = function() {
        
        upKey = phaser.input.keyboard.addKey(189);
		upKey.onDown.addOnce(onUpKeyDown, this);
    };
    
    var onUpKeyDown = function() {
        phaser.state.start('game');
    };
    
    (function() {
        addBackground();
        createIntroText();
        createStartText();
        attachKeyboardCallback();
    })();
};