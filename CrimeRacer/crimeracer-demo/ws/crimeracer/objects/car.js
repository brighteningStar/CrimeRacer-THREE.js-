var CrimeRacer = CrimeRacer || {};

CrimeRacer.Car = function() {
	this.position = {
		x : 500,
		y : 0,
		z : 500
	};
	
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

