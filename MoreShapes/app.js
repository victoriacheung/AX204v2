console.log("Everything is working!"); 

var c = document.getElementById('myCanvas'); 
var ctx = c.getContext('2d');  
ctx.beginPath(); 
ctx.strokeStyle = "blue"; 
ctx.moveTo(75,0);
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100); 
ctx.closePath(); 
ctx.stroke(); 
ctx.fillStyle = "purple"; 
ctx.fill(); 

var c2 = document.getElementById('myCanvas2'); 
var ctx2 = c2.getContext('2d');  
ctx2.beginPath(); 
ctx2.strokeStyle = "blue"; 
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0); 
ctx2.lineTo(0,300);
ctx2.closePath(); 
ctx2.stroke(); 
ctx2.fillStyle = "red"; 
ctx2.fill(); 

var c3 = document.getElementById('myCanvas3'); 
var ctx3 = c3.getContext('2d');  
ctx3.beginPath();
ctx3.strokeStyle = "blue"; 
ctx3.moveTo(0,0); 
ctx3.lineTo(300,300); 
ctx3.lineTo(300,150); 
ctx3.lineTo(0,150); 
ctx3.lineTo(0,0); 
ctx3.moveTo(150,150); 
ctx3.lineTo(150,300); 
ctx3.lineTo(0,300); 
ctx3.lineTo(300,0); 
ctx3.lineTo(150,0); 
ctx3.closePath(); 
ctx3.stroke(); 
ctx3.fillStyle = "red"; 
ctx3.fill(); 

var c4 = document.getElementById('myCanvas4'); 
var ctx4 = c4.getContext('2d');  
ctx4.beginPath(); 
ctx4.arc(100,100,50,0,6.28); 
ctx4.closePath(); 
ctx4.stroke(); 
ctx4.fillStyle = "linen"; 
ctx4.fill(); 

var c5 = document.getElementById('scenery'); 
var ctx5 = c5.getContext('2d');  

ctx5.fillStyle = "LightCyan"
ctx5.fillRect(0,0,800,500);

ctx5.beginPath(); 
ctx5.arc(100,100,50,0,6.28); 
ctx5.closePath(); 
ctx5.stroke(); 
ctx5.fillStyle = "yellow"; 
ctx5.fill(); 

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

//buildings 
// ctx5.fillRect(500,100,100,250); 
// ctx5.clearRect(520,120,20,20); 
// ctx5.clearRect(560,120,20,20); 
// ctx5.clearRect(520,160,20,20); 
// ctx5.clearRect(560,160,20,20); 
// ctx5.clearRect(520,200,20,20); 
// ctx5.clearRect(560,200,20,20); 
// ctx5.clearRect(520,240,20,20); 
// ctx5.clearRect(560,240,20,20); 
// ctx5.clearRect(520,280,20,20); 
// ctx5.clearRect(560,280,20,20); 
// ctx5.clearRect(520,320,20,20); 
// ctx5.clearRect(560,320,20,20); 


//house 
ctx5.fillRect(560,250,200,100); 
//window
ctx5.clearRect(575,265,40,40); 
ctx5.moveTo(595,265);
ctx5.lineTo(595,305);
ctx5.strokeStyle = "black"; 
ctx5.stroke();
ctx5.moveTo(575,285);
ctx5.lineTo(615,285);
ctx5.stroke();

//door
ctx5.fillStyle= "brown";
ctx5.fillRect(700,265,30,85);
ctx5.beginPath();
ctx5.arc(720,310,5,0,6.28);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "yellow"; 
ctx5.fill();

//roof
ctx5.beginPath();
ctx5.moveTo(535,250);
ctx5.lineTo(660,200);
ctx5.lineTo(785,250); 
ctx5.closePath(); 
ctx5.stroke(); 
ctx5.fillStyle = "peru"; 
ctx5.fill(); 


