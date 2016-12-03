var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update} ); 
var score = 0; 
var life = 3; 

function preload() {
	game.load.image('sky', 'assets/sky.png'); 
 	game.load.image('ground', 'assets/platform.png');
 	game.load.image('star', 'assets/star.png');  
 	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
 	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//Sky 
	game.add.sprite(0,0, 'sky'); 

	//Group of platforms
	platforms = game.add.physicsGroup(); 
	platforms.enableBody = true; 

	//Ground 
	var ground = platforms.create(0, game.world.height - 50, 'ground'); 
	ground.scale.setTo(2, 2); 
	ground.body.immovable = true; 

	//Ledges 
	var ledge = platforms.create(400, 400, 'ground'); 
	ledge.body.immovable = true; 
	ledge = platforms.create(-150, 250, 'ground'); 
	ledge.body.immovable = true; 

	//Player 
	player = game.add.sprite(32, 400, 'dude'); 
	      //animate sprite 
	      player.animations.add('left', [0,1,2,3], 10, true); 
	      player.animations.add('right', [5,6,7,8], 10, true); 
	      //add physics 
	      game.physics.arcade.enable(player); 
	      player.body.bounce.y = 0.2; 
	      player.body.gravity.y = 300;
	      player.body.collideWorldBounds = true; 

	//Enemies 
	enemy1 = game.add.sprite(760, 20, 'baddie'); 
	      //animate sprite 
	      enemy1.animations.add('left', [0,1], 10, true); 
	      enemy1.animations.add('right', [2,3], 10, true); 
	      //add physics 
	      game.physics.arcade.enable(enemy1); 
	      enemy1.body.bounce.y = 0.2; 
	      enemy1.body.gravity.y = 500;
	      enemy1.body.collideWorldBounds = true; 

	enemy2 = game.add.sprite(10, 20, 'baddie'); 
	      //animate sprite 
	      enemy2.animations.add('left', [0,1], 10, true); 
	      enemy2.animations.add('right', [2,3], 10, true); 
	      //add physics 
	      game.physics.arcade.enable(enemy2); 
	      enemy2.body.bounce.y = 0.2; 
	      enemy2.body.gravity.y = 500;
	      enemy2.body.collideWorldBounds = true; 
	enemy3 = game.add.sprite(200, 20, 'baddie'); 
	      //animate sprite 
	      enemy3.animations.add('left', [0,1], 10, true); 
	      enemy3.animations.add('right', [2,3], 10, true); 
	      //add physics 
	      game.physics.arcade.enable(enemy3); 
	      enemy3.body.bounce.y = 0.2; 
	      enemy3.body.gravity.y = 500;
	      enemy3.body.collideWorldBounds = true; 

	// Set up keyboard events 
	cursors = game.input.keyboard.createCursorKeys(); 

	//Create stars 
	stars = game.add.physicsGroup(); 
	stars.enableBody = true; 

	//Loop to create 12 stars 
	for(var i = 0; i < 12; i++) {
		var star = stars.create(i * 70, 0, 'star'); 
		star.body.gravity.y = 200; 
		star.body.bounce.y = 0.2 + Math.random() * 0.7; 
	}

	//Set up text 
	var style = { font:"bold 32px Arial", fill:"#fff", boundsAlignH: "center", boundsAlignV: "middle"}; 
	//Create and position text 
	scorelabel = game.add.text(-60, 0, "Your score is: ", style); 
	scoretext = game.add.text(70, 0, score, style); 
	scorelabel.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2); 
	scoretext.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2); 
	scorelabel.setTextBounds(0, 520, 800, 100); 
	scoretext.setTextBounds(0, 520, 800, 100); 
}

function update() {
	//Collision for player / enemy and the platforms 
	game.physics.arcade.collide(player, platforms); 
	game.physics.arcade.collide(enemy1, platforms); 
	game.physics.arcade.collide(enemy2, platforms); 
	game.physics.arcade.collide(enemy3, platforms); 
	//Resets player sprite speed 
	player.body.velocity.x = 0; 

	//if key pressed
	if (cursors.left.isDown) {
		player.body.velocity.x = -150; 
		player.animations.play('left'); 
	} else if (cursors.right.isDown) {
		player.body.velocity.x = 150; 
		player.animations.play('right'); 
	} else {
		//when player sprite stops 
		player.animations.stop(); 
		player.frame = 4; 
	}

	//Adding Jump 
	if cursors.up.isDown && player.body.touching.down{
		player.body.velocity.y = -300; 
	}

	//enemy AI 
	if (enemy1.x > 759) {
		enemy1.body.velocity.x = -120; 
		enemy1.animations.play('left'); 	
	} else if (enemy1.x < 405) {
		enemy1.body.velocity.x = 120; 
		enemy1.animations.play('right'); 
	} 

	if (enemy2.x > 200) {
		enemy2.body.velocity.x = -180; 
		enemy2.animations.play('left'); 	
	} else if (enemy2.x < 20) {
		enemy2.body.velocity.x = 80; 
		enemy2.animations.play('right'); 
	} 

	if (enemy3.x > 759) {
		enemy3.body.velocity.x = -150; 
		enemy3.animations.play('left'); 	
	} else if (enemy3.x < 200) {
		enemy3.body.velocity.x = 150; 
		enemy3.animations.play('right'); 
	} 

	//Collide with stars 
	game.physics.arcade.collide(stars, platforms); 

	//Define what happens when collision occurs - overlap
	game.physics.arcade.overlap(player, stars, collectStar, null, this); 
	game.physics.arcade.overlap(player, enemy1, losePoint, null, this); 
	game.physics.arcade.overlap(player, enemy2, losePointLeft, null, this); 
	game.physics.arcade.overlap(player, enemy3, losePoint, null, this); 

}

//Define collectStar 
function collectStar (player, star) {
	star.kill(); 
	score = score + 1; //score++
	scoretext.setText(score); 
	// create new star 
	star = stars.create(Math.floor(Math.random() *750), 0, 'star'); 
	star.body.gravity.y = 200; 
	star.body.bounce.y =  0.2 + Math.random() * 0.7; 

}

//Define losepoint
function losePoint (player, enemy) {
	enemy.kill(); 
	score = score - 5; 
	scoretext.setText(score); 
	enemy.reset(760, 20); 
}

function losePointLeft (player, enemy) {
	enemy.kill(); 
	score = score - 5; 
	scoretext.setText(score); 
	enemy.reset(10, 20); 
}