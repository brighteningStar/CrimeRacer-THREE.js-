var CrimeRacer = CrimeRacer || {};

// var wallColor;
// var wallHeight;
// var wallLength;

    
CrimeRacer.Wall = function() {
	this.position = {
		x : 0,
		y : 0,
		z : 0
	};
	// default at position 0
}

// CrimeRacer.Car.prototype.move = function(dX, dY, dZ) {
	// this.position.x += dX;
	// this.position.y += dY;
	// this.position.z += dZ;
// }

CrimeRacer.Wall.prototype.setPos = function(xPos, yPos, zPos) {
	
	this.position.x = xPos;
	this.position.y = yPos;
	this.position.z = zPos;
}


