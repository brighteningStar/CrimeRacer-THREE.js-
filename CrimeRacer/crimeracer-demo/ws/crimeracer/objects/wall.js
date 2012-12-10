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
	this.property = {
		height : 500,
		width : 100,
		length : 100
	};
}
var myFunctionXPos = function() {
	if ( typeof myFunctionXPos.myStaticVar === 'undefined') {
		myFunctionXPos.myStaticVar = 0;
	}

	myFunctionXPos.myStaticVar += 100;

	return myFunctionXPos.myStaticVar;
}
var myFunctionXPosRight = function() {
	if ( typeof myFunctionXPosRight.myStaticVar === 'undefined') {
		myFunctionXPosRight.myStaticVar = 0;
	}

	myFunctionXPosRight.myStaticVar += 100;

	return myFunctionXPosRight.myStaticVar;
}
var myFunctionZPosFront = function() {
	if ( typeof myFunctionZPosFront.myStaticVar === 'undefined') {
		myFunctionZPosFront.myStaticVar = 0;
	}
	//alert(myFunction.myStaticVar);
	myFunctionZPosFront.myStaticVar += 100;

	return myFunctionZPosFront.myStaticVar;
}
var myFunctionZPosBack = function() {
	if ( typeof myFunctionZPosBack.myStaticVar === 'undefined') {
		myFunctionZPosBack.myStaticVar = 0;
	}
	//alert(myFunction.myStaticVar);
	myFunctionZPosBack.myStaticVar += 100;

	return myFunctionZPosBack.myStaticVar;
}
CrimeRacer.Wall.prototype.setWallPos = function(xPos, yPos, zPos, wallId) {

	if (wallId === 1) {
		var zDistance = myFunctionZPosFront();
		this.position.x = xPos;
		this.position.y = yPos;
		this.position.z = zPos + zDistance;
	}
	if (wallId === 2) {
		var zDistanceBack = myFunctionZPosBack();
		this.position.x = xPos;
		this.position.y = yPos;
		this.position.z = zPos + zDistanceBack;
	}
	if (wallId === 3) {
		var xDistance = myFunctionXPos();
		this.position.x = xPos + xDistance;
		this.position.y = yPos;
		this.position.z = zPos;

	}
	if (wallId === 4) {
		var xDistance = myFunctionXPosRight();
		this.position.x = xPos + xDistance;
		this.position.y = yPos;
		this.position.z = zPos;
	}
}

CrimeRacer.Wall.prototype.getHeight = function() {

	return this.property.height;
}

CrimeRacer.Wall.prototype.getWidth = function() {

	return this.property.width;
}

CrimeRacer.Wall.prototype.getLenth = function() {

	return this.property.length;
}