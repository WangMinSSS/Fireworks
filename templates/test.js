var w=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var game = new Phaser.Game(w, h, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });



function preload() {
    //console.log('preload');
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    //game.load.image('arrow', '/static/circle.png');
}

var sprite;

function create() {
    //console.log('create');
    game.stage.backgroundColor = '#000000';

    //  Create our bitmapData which we'll use as a Sprite texture
    var bmd = game.add.bitmapData(24, 24);
    bmd.context.arc(12, 12, 12, 0, 2 * Math.PI);
    bmd.context.fillStyle = 'orange';
    bmd.context.fill();
    game.cache.addBitmapData('circle', bmd);

    //  Now let's make some sprites using this texture, one every second
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  This one is just for reference (next to the instructions text)
    sprite = game.add.sprite(400, 300, game.cache.getBitmapData('circle'));
    sprite.anchor.setTo(0.5, 0.5);

    game.physics.enable(sprite, Phaser.Physics.ARCADE);

    //game.physics.arcade.gravity.set(0, 10);

    //var sprite = game.add.sprite(game.world.centerX, game.world.centerX, game.cache.getBitmapData('circle'));

    //game.physics.arcade.enable(sprite);
}

function update() {
    //console.log('update');
    //sprite.rotation = game.physics.arcade.moveToPointer(sprite, 60, game.input.activePointer, 500);
}

function render() {
    //console.log('render');
    game.debug.spriteInfo(sprite, 32, 32);
}
