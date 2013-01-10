var CrimeRacer = CrimeRacer || {};



    
CrimeRacer.Boxes = function() {
	this.position = {
		x : 0,
		y : 0,
		z : 0
	};
	// default at position 0
}
var myFunctionBoxPos = function() {
	if ( typeof myFunctionBoxPos.myStaticVar === 'undefined') {
		myFunctionBoxPos.myStaticVar = 0;
	}
	//alert(myFunction.myStaticVar);
	myFunctionBoxPos.myStaticVar += 1000;

	return myFunctionBoxPos.myStaticVar;
}
CrimeRacer.Boxes.prototype.setPos = function(xPos, yPos, zPos) {
	var boxPos = myFunctionBoxPos();
	this.position.x = xPos + boxPos;
	this.position.y = yPos;
	this.position.z = zPos + boxPos;
}


