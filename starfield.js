// Juan Aguirre

var canvas = document.getElementById("canvas");


//window.innerHeight

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var numStars = 270;
var stars = [];
var size = 15;
var speed = 20;
var fl = canvas.width
var centerX = canvas.width/2;
var centerY = canvas.height/2;
var colors;




for(var i= 0; i<numStars;i++)
{
	stars[i] = new Star();
	var color = cc(colors);
}

//c.fillStyle = "black";
//c.fillRect(0,0,canvas.width,canvas.height);

function draw()
{
	c.fillStyle = "black";
     c.fillRect(0,0,canvas.width,canvas.height);
	 for(var i= 0; i<numStars;i++)
   {
	stars[i].show();
	stars[i].move();
	
	
    }
}

function Star()
{
	this.x = Math.random()* canvas.width;
	this.y = Math.random()* canvas.height;
	this.z = Math.random()* canvas.width;
	this.color = colors;
	
	this.move = function()
	{
		this.z = this.z-speed;
		if(this.z <=0)
			this.z = canvas.width;
		    
		   
	}


this.show = function()
{
	 var x,y,s;
	 x = (this.x - centerX ) * (fl/this.z);
	 x = x + centerX;
	 
	 y = (this.y - centerY ) * (fl/this.z);
	 y = y + centerY;
	 
	 s = size *(fl/this.z);
	 
	 
	 
	c.beginPath();
	
	c.arc(x,y,s,0,Math.PI*2);
	c.fillStyle = this.color;
	c.fill();
	
	
}
//{
//	c.beginPath();
	//c.fillStyle = "white";
	//c.arc(this.x, this.y, size,0, Math.PI*2);
	//c.fill();

}

function cc (colors)
{
	this.colors = "hsl(" + parseInt(Math.random()*360, 10)+",100%,50%)";

}




function update()
{
	
	draw();
	window.requestAnimationFrame(update);
} 

update();

