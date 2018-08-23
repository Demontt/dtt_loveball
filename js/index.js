
const randomRange = (min,max) => Math.random()*(max-min)+min;
 
const randomColor = () => "rgba("+randomRange(0,255)+","+randomRange(0,255)+","+randomRange(0,255)+","+randomRange(0,0.8)+")";

// balloon model
Balloon.prototype.drawBalloon = function(parent){
	this.parent = parent;
	let style = this.div.style;
	this.div.style.width = this.r * 2 + "px";
	this.div.style.height = this.r * 2 + "px";
	style.left = this.left + "px";
	style.top = this.top + "px";
    style.background = this.bg;
    style.backgroundSize = "150px";
	parent.appendChild(this.div);
}


function Balloon(pic){this.div=document.createElement("div");this.left=randomRange(0,1000);this.top=randomRange(0,600);if(pic==null){this.bg=randomColor();this.r=Math.random()*60+40;this.speedX=randomRange(-5,5);this.speedY=randomRange(-5,5)}else{this.bg=pic;this.r=80;this.speedX=randomRange(-3,3);this.speedY=randomRange(-3,3)}};

Balloon.prototype.run = function(){

	let maxLeft = this.parent.offsetWidth - this.r * 2;
	let maxTop = this.parent.offsetHeight - this.r * 2;
 
	let ts = this;
	setInterval(function(){
		let left = ts.div.offsetLeft + ts.speedX;
		let top =  ts.div.offsetTop  + ts.speedY;
 
		if(left <= 0){ left = 0;ts.speedX *= -1; }
		if(top <= 0){ top = 0; ts.speedY *= -1; }
		if(left >= maxLeft){ left = maxLeft; ts.speedX *= -1; }
		if(top >= maxTop){ top = maxTop; ts.speedY *= -1; }

		ts.div.style.left = left + "px";
		ts.div.style.top  = top + "px";
	},20);
}