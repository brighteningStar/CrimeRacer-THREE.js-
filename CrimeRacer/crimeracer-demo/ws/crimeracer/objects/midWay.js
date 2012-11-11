var CrimeRacer = CrimeRacer || {};



    
CrimeRacer.MidWay = function() {
	this.position = {
		x : 0,
		y : 0,
		z : 0
	};
	// default at position 0
}

CrimeRacer.MidWay.prototype.setPos = function(xPos, yPos, zPos) {
	
	this.position.x = xPos;
	this.position.y = yPos;
	this.position.z = zPos;
}


