var CrimeRacer = CrimeRacer || {};

CrimeRacer.enemyCar = function() {
	this.position = {
		x : 500,
		y : 0,
		z : 500
	};
	
	this.speed = 0;
	this.health = 100;
	this.maxSpeed = 73;
	this.rotationalAngle = 0.05;
	this.acceleration = 0;
	this.phaseX = 1;
	this.phaseY = 1;
	// default at position 0
}

var speedFuntion = function (addedValue) {  
    if (typeof speedFuntion.myStaticVar === 'undefined') {  
        speedFuntion.myStaticVar = 0;  
    }  
    //alert(myFunction.myStaticVar);  
    speedFuntion.myStaticVar += addedValue;
		
	return speedFuntion.myStaticVar;
}

CrimeRacer.enemyCar.prototype.setPos = function(xPos, yPos, zPos) {
	
	this.position.x = xPos;
	this.position.y = yPos;
	this.position.z = zPos;
}

CrimeRacer.enemyCar.prototype.move = function(dX, dY, dZ) {
	this.position.x += dX;
	this.position.y += dY;
	this.position.z += dZ;
}

CrimeRacer.enemyCar.prototype.getSpeed = function() {
	
	return this.speed;
}

CrimeRacer.enemyCar.prototype.setSpeedHigh = function() {
	
	 this.speed = speedFuntion(3);
	 if(this.speed === this.maxSpeed)
		this.speed = maxSpeed;
}

CrimeRacer.enemyCar.prototype.getMaxSpeed = function() {
	
	return this.maxSpeed;
}

CrimeRacer.enemyCar.prototype.getHealth = function() {
	
	return this.health;
}

CrimeRacer.enemyCar.prototype.setHealth = function(health) {
	
	this.health = health;
}

CrimeRacer.enemyCar.prototype.setrotationalAngle = function(speed) {
	
	this.rotationalAngle = 0.05 * Math.abs(speed / 10);
		//return this.rotationalAngle;
}

CrimeRacer.enemyCar.prototype.getrotationalAngle = function() {
	
	this.rotationalAngle = 0.05 * Math.abs(speed / 10);
	if(this.rotationalAngle > 0.05)
		this.rotationalAngle = 0.05;
	return this.rotationalAngle;
}