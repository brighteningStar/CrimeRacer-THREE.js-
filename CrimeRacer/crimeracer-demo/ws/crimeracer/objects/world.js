 

var CrimeRacer = CrimeRacer || {};


CrimeRacer.World = function() {
	// this.position = {
		// x : 500,
		// y : 0,
		// z : 0
	// };
	
	
	
}
var myFunctionZPos = function () {  
    if (typeof myFunctionZPos.myStaticVar == 'undefined') {  
        myFunctionZPos.myStaticVar = 0;  
    }  
    //alert(myFunction.myStaticVar);  
    myFunctionZPos.myStaticVar += 500;
		
	return myFunctionZPos.myStaticVar;
}
var myFunctionXPos = function () {  
    if (typeof myFunctionXPos.myStaticVar == 'undefined') {  
        myFunctionXPos.myStaticVar = 0;  
    }  
    //alert(myFunction.myStaticVar);  
    myFunctionXPos.myStaticVar += 500;
		
	return myFunctionXPos.myStaticVar;
}
CrimeRacer.World.prototype.setWallFrontBackPosition = function () {
	
	var zDistance = myFunctionZPos();
	this.myWallFront = new CrimeRacer.Wall;
	this.myWallBack = new CrimeRacer.Wall;
		
	this.myWallFront.setPos(4700, 100, -5000+zDistance);
	this.myWallBack.setPos(-4700, 100, -15000+zDistance);
	//console.log(myFunction());
}

CrimeRacer.World.prototype.setWallLeftRightPosition = function () {
	
	var xDistance = myFunctionXPos();
	this.myWallLeft = new CrimeRacer.Wall;
	this.myWallRight = new CrimeRacer.Wall;
		
	this.myWallLeft.setPos(-4750+xDistance, 100, -4700);
	this.myWallRight.setPos(-15000+xDistance, 100, 4700);
	//console.log(myFunction());
}
