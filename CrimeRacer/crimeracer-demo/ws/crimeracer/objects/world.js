 

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
    myFunctionZPos.myStaticVar += 100;
		
	return myFunctionZPos.myStaticVar;
}
var myFunctionXPos = function () {  
    if (typeof myFunctionXPos.myStaticVar == 'undefined') {  
        myFunctionXPos.myStaticVar = 0;  
    }  
      
    myFunctionXPos.myStaticVar += 100;
		
	return myFunctionXPos.myStaticVar;
}
CrimeRacer.World.prototype.setWallFrontBackPosition = function () {
	
	var zDistance = myFunctionZPos();
	this.myWallFront = new CrimeRacer.Wall;
	this.myWallBack = new CrimeRacer.Wall;
		
	this.myWallFront.setPos(4700, 100, -5000+zDistance);
	this.myWallBack.setPos(-4700, 100, -15000+zDistance);
	
}

CrimeRacer.World.prototype.setWallLeftRightPosition = function () {
	
	var xDistance = myFunctionXPos();
	this.myWallLeft = new CrimeRacer.Wall;
	this.myWallRight = new CrimeRacer.Wall;
		
	this.myWallLeft.setPos(-4750+xDistance, 100, -4700);
	this.myWallRight.setPos(-15000+xDistance, 100, 4700);
	
}

CrimeRacer.World.prototype.setWorldTreePosition = function (multiplier) {
	
	//var xDistance = myFunctionXPos();
	this.myTreePosition = new CrimeRacer.Tree;
	
	this.myTreePosition.setPos(-4650+multiplier, 80, 1700);
	
	
	
}

CrimeRacer.World.prototype.setWorldMidWayPosition = function (multiplier) {
	
	//var xDistance = myFunctionXPos();
	this.myMidWayPosition = new CrimeRacer.MidWay;
	
	this.myMidWayPosition.setPos(-4650+multiplier, 20, 1700);
	
	
	
}

CrimeRacer.World.prototype.updateWorldTime = function () {
	
	//var xDistance = myFunctionXPos();
	this.worldTime = new CrimeRacer.Time;
	
	return this.worldTime.updateTime();
	
	
}

CrimeRacer.World.prototype.setWorldCar = function () {
	
	//var xDistance = myFunctionXPos();
	this.myCar = new CrimeRacer.Car;
	
	this.myCar.setPos(0, 60, 0);
	
	
}
