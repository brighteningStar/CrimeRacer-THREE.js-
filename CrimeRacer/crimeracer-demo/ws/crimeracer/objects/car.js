var CrimeRacer = CrimeRacer || {};

CrimeRacer.Car = function() {
	this.position = {
		x : 0,
		y : 0,
		z : 0
	};

	this.speed = 0;
	this.health = 150;
	this.maxSpeed = 100;
	this.rotationalAngle = 0.05;
	this.acceleration = 3;
	this.hitSpeed = -10;
	this.backSpeed = -10;
	this.mines = 15;
	this.bullets = 200;
	this.bombs = 15;
	
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

CrimeRacer.Car.prototype.moveForward = function() {

	if (this.speed >= this.maxSpeed)
		return this.speed = this.maxSpeed;
	return this.speed += this.acceleration;
	// if(this.speed >= this.maxSpeed)
	// this.speed = this.maxSpeed;

	//return this.acceleration;
}

CrimeRacer.Car.prototype.speedDecrease = function() {

	return this.speed = -1
	// if(this.speed >= this.maxSpeed)
	// this.speed = this.maxSpeed;

	//return this.acceleration;
}

CrimeRacer.Car.prototype.speedSetDecrease = function() {

	this.speed -= 3;
	if (this.speed < 0)
		this.speed = 0;

	return this.speed;
	// if(this.speed >= this.maxSpeed)
	// this.speed = this.maxSpeed;

	//return this.acceleration;
}

CrimeRacer.Car.prototype.moveBackword = function() {

	if (this.speed < 0)
		return this.speed = this.backSpeed;
	return this.speed -= this.acceleration;
}

CrimeRacer.Car.prototype.getMaxSpeed = function() {

	return this.maxSpeed;
}
CrimeRacer.Car.prototype.carHit = function() {

	return this.speed = this.hitSpeed;
}
CrimeRacer.Car.prototype.reduceHealth = function() {

	return this.health -= 10;
}
CrimeRacer.Car.prototype.reduceMines = function() {

	this.mines--;
}
CrimeRacer.Car.prototype.reduceBombs = function() {

	this.bombs--;
}
CrimeRacer.Car.prototype.reduceBullets = function() {

	this.bullets--;
}
CrimeRacer.Car.prototype.getMines = function() {

	return this.mines;
}
CrimeRacer.Car.prototype.getBomb = function() {

	return this.bombs;
}
CrimeRacer.Car.prototype.getBullets = function() {

	return this.bullets;
}

CrimeRacer.Car.prototype.getHealth = function() {

	return this.health;
}

CrimeRacer.Car.prototype.setHealth = function(health) {

	this.health = health;
}
CrimeRacer.Car.prototype.setBomb = function(bomb) {

	this.bombs = bomb;
}
CrimeRacer.Car.prototype.setMines = function(mines) {

	this.mines = mines;
}
CrimeRacer.Car.prototype.getrotationalAngle = function() {

	return this.rotationalAngle;
}