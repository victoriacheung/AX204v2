console.log('afdsfs')
//Declaring all variables at the top (Elevation of Scope)
var canvas; 
var ctx;  
//Staring position and radius of player sprite 
var x = 300; 
var y = 300; 
var r = 20;
//Holding the speed in the x and y directions 
var mx = 0; 
var my = 0; 
//Positions of circle 
var drawCircle
//Positions of ghosts  
var pacmanX;
var pacmanY;
var ghostX;
var ghostY;
var ghostWidth = 50; 
var ghostHeight = 50; 
//Boolean to keep track of whether collision is occuring 
var ghostCollision = false; 
var circleCollision = false; 
//width and height of canvas 
var WIDTH = 600; 
var HEIGHT = 600; 
var gameover = false; 
var score = 0;  
//Importing images onto canvas
function drawpacman(x, y, r) {
	ctx = document.getElementById('myCanvas').getContext('2d'); 
	var pacman = new Image(); 
	pacman.src = "pacman.gif"; 
	ctx.drawImage(pacman, x, y, r, r); 
}

function drawghost() {
	ctx = document.getElementById('myCanvas').getContext('2d'); 
	var ghost = new Image(); 
	ghost.src = "ghost.gif"; 
	ctx.drawImage(ghost, ghostX, ghostY, 50, 50); 
}


function drawCircle() {
	ctx = document.getElementById('myCanvas').getContext('2d'); 
	var circle = new Image(); 
	circle.src = "circle.png"; 
	ctx.drawImage(circle, circleX, circleY, 50, 50); 
}

//Wiping canvas 
function clear () {
	ctx.clearRect(0,0,WIDTH,HEIGHT); 
}

//Initialise our animation
function init() {
	//grabbing and setting up our canvas 
	canvas = document.getElementById("myCanvas"); 
	ctx = canvas.getContext("2d"); 
	//putting ghost in random positions  
	ghostX = Math.floor(Math.random() *550); 
	ghostY = Math.floor(Math.random() *550);
	//putting circle in random positions 
	circleX = Math.floor(Math.random() *(580) + 10); 
	circleY = Math.floor(Math.random() *(580) + 10);
	
	//waiting for user to press keyboard (behaviour coded in keydownControl)
	window.onkeydown = keydownControl; 
	//Redraws our canvas every 10ms 
	return setInterval(draw, 10); 
}

//Draw scene function 
function draw() {
	clear(); 
	//If the game is still ongoing
	if (gameover != true) {
	drawpacman(x, y, 50);
	drawghost(); 
	circle();
	//tells  our sprite to bounce off the walls and go in the opposite direction 
	if (x + mx > WIDTH - r || x + mx < 0 + r){
		mx = -mx
	} else if (y + my > WIDTH - r || y + my < 0 + r){
		my = -my
	}
	//Moves our sprite 
	x += mx; //means the same as x = x + mx 
	y +=my; 
	//ghost follows pacman 
	followPacman();
	//Is there a collision? 
	collisionCheck();
	collisionHandle(); 
}

//If game is over
if (gameover == true) {
	ctx.font = "40px Impact"; 
	ctx.fillText("Game Over!", 200, 300)
}
}

//ghost follows pacman 
function followPacman() {
	if (ghostX < x) {
		ghostX += 1
	}
	if (ghostY < y) {
		ghostY += 1
	}
	if (ghostX > x) {
		ghostX -= 1
	}
	if (ghostY > y) {
		ghostY -= 1
	}
}

function collisionHandle() {
	//if there is a collision, resets the position of fruit and changes the score 
	if(ghostCollision == true) {
		gameover = true;
	}
	if (circleCollision == true) {
		circleX = Math.floor(Math.random() *550); 
	    circleY = Math.floor(Math.random() *550);
	    score += 1; 
	    document.getElementById("score").innerHTML = score; 

	}
}

function collisionCheck() {
	//Accounting for collision from the top left and the bottom right 
    if( (x >= ghostX) && (x <= ghostX + ghostWidth) && (y >= ghostY) && (y <= ghostY + ghostHeight) ) {
    	ghostCollision = true; 
    } else {
    	ghostCollision = false; 
    }
    //checking for collision with circle 
    if( (x >= circleX - 10) && (x <= circleX + 60) && (y >= circleY - 10) && (y <= circleY + 60) ) {
    	circleCollision = true; 
    } else {
    	circleCollision = false; 
    }
   
}

function keydownControl(e) {
	//change the speed depending on which button is pressed 

	if(e.keyCode==37) {
		mx = -4; 
		my = 0; 
	} else if (e.keyCode == 38) {
		mx = 0; 
		my = -4; 
	} else if (e.keyCode == 39) {
		mx = 4;
		my = 0; 
	} else if (e.keyCode == 40) {
		mx = 0; 
		my = 4; 
	}
}


init(); 