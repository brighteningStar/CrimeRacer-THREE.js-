var CrimeRacer = CrimeRacer || {};

CrimeRacer.Car = function() {
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
	// default at position 0
}

CrimeRacer.Car.prototype.setPos = function(xPos, yPos, zPos) {
	
	this.position.x = xPos;
	this.position.y = yPos;
	this.position.z = zPos;
}

CrimeRacer.Car.prototype.move = function(dX, dY, dZ) {
	this.position.x += dX;
	this.position.y += dY;
	this.position.z += dZ;
}

CrimeRacer.Car.prototype.getSpeed = function() {
	
	return this.speed;
}

CrimeRacer.Car.prototype.getMaxSpeed = function() {
	
	return this.maxSpeed;
}

CrimeRacer.Car.prototype.getHealth = function() {
	
	return this.health;
}

CrimeRacer.Car.prototype.setHealth = function(health) {
	
	this.health = health;
}

CrimeRacer.Car.prototype.getrotationalAngle = function() {
	
	return this.rotationalAngle;
}