var mainscreen = null;
var phaser = new Phaser.Game(
    900, 
    765, 
    Phaser.AUTO, 
    '', 
    {         
        preload: function(){
            var load = new Load();
        },
        create: function() {
            mainscreen = new FullGame();
        },
        update: function() {
            if(mainscreen) {
                mainscreen.update();
            }
        }
    }
);