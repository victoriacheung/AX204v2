console.log("Everything is working!"); 

var c = document.getElementById('myCanvas'); 
var ctx = c.getContext('2d');  

ctx.beginPath(); 
ctx.strokeStyle = "blue"; 
ctx.moveTo(75,0);
ctx.lineTo(150,100);
ctx.lineTo(0,100); 
ctx.lineTo(75,200);
ctx.closePath(); 
ctx.stroke(); 
ctx.fillStyle = "purple"; 
ctx.fill(); 