var CrimeRacer = CrimeRacer || {};

CrimeRacer.enemyCar = function() {
	this.position = {
		x : 2000,
		y : 0,
		z : 500
	};

	this.speed = 0;
	this.health = 100;
	this.maxSpeed = 70;
	this.rotationalAngle = 0.05;
	this.acceleration = 3;
	this.backAccelearation = 1500;
	this.speedAfterHit = -50;
	this.phaseX = 1;
	this.phaseY = 1;
	// default at position 0
}
var speedFuntion = function(addedValue) {
	if ( typeof speedFuntion.myStaticVar === 'undefined') {
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

CrimeRacer.enemyCar.prototype.moveForward = function() {

	this.speed += this.acceleration;
	if (this.speed >= this.maxSpeed)
		this.speed = this.maxSpeed;

	return this.speed;
}

CrimeRacer.enemyCar.prototype.moveBackword = function() {

	return this.speed -= this.acceleration;
}
CrimeRacer.enemyCar.prototype.stopCar = function() {

	return this.speed = 0;
}

CrimeRacer.enemyCar.prototype.getSpeed = function() {

	return this.speed;
}

CrimeRacer.enemyCar.prototype.carHit = function() {

	return this.speed = this.speedAfterHit;
}

CrimeRacer.enemyCar.prototype.setSpeedHigh = function() {

	this.speed = speedFuntion(3);
	if (this.speed === this.maxSpeed)
		this.speed = maxSpeed;
}

CrimeRacer.enemyCar.prototype.getMaxSpeed = function() {

	return this.maxSpeed;
}

CrimeRacer.enemyCar.prototype.getHealth = function() {

	return this.health -= 10;
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
	if (this.rotationalAngle > 0.05)
		this.rotationalAngle = 0.05;
	return this.rotationalAngle;
}