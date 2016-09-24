//Sprites Loading
var mario = new Image(); 
mario.src = "Mario.png"; 
var house = new Image(); 
house.src = "house.png"; 
var tree = new Image(); 
tree.src = "tree.png";
var fountain = new Image(); 
fountain.src = "fountain.png"
var bench = new Image(); 
bench.src = "bench.png"

//Draw our Sprite 
mario.onload = function() {
	ctx5.drawImage(mario,150,250,60,100);
}
tree.onload = function() {
	ctx5.drawImage(tree,435,150,150,200); 
}
house.onload = function() {
	ctx5.drawImage(house,500,175,300,215);
}

fountain.onload = function() {
	ctx5.drawImage(fountain,40,200,95,135); 
}

bench.onload = function() {
	ctx5.drawImage(bench,230,270,150,50);
}
//scenery
var c5 = document.getElementById('scenery'); 
var ctx5 = c5.getContext('2d');  
//sky
ctx5.fillStyle = "LightCyan"
ctx5.fillRect(0,0,800,500);
//sun
ctx5.beginPath(); 
ctx5.arc(100,100,50,0,6.28); 
ctx5.closePath(); 
ctx5.stroke(); 
ctx5.fillStyle = "yellow"; 
ctx5.fill(); 
//grass
ctx5.fillStyle = "LawnGreen"
ctx5.fillRect(0,300,800,200);
//road
ctx5.beginPath(); 
ctx5.moveTo(350,500); 
ctx5.lineTo(400,300); 
ctx5.lineTo(450,300);
ctx5.lineTo(500,500); 
ctx5.closePath(); 
ctx5.stroke(); 
ctx5.fillStyle = "grey"; 
ctx5.fill(); 
//line in road 
ctx5.moveTo(425,300)
ctx5.strokeStyle = 'white'; 
ctx5.lineTo(425,500);
ctx5.stroke(); 

