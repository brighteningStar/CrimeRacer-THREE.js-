 

var CrimeRacer = CrimeRacer || {};


CrimeRacer.World = function() {
	
	this.noOfTrees = 19;
	this.noOfSideForTree = 2;
	this.noOfSides = 4;
	this.noOfBlocksPerWall = 100;
	
	
	this.enemyCar = new CrimeRacer.enemyCar;
	this.myWall = new CrimeRacer.Wall;
	this.myMidWayPosition = new CrimeRacer.MidWay;
	this.worldTime = new CrimeRacer.Time;
	this.myTreePosition = new CrimeRacer.Tree;
	
	this.frontWallPos = {
		   x : 4700,
		   y : 100,
		   z : -5000,
		   id : 1
	};
	this.backWallPos = {
		  x : -4700,
		  y : 100,
		  z : -5000,
		  id : 2
	};
	this.leftWallPos = {
		  x : -4700,
		  y : 100,
		  z : -4700,
		  id : 3
	};
	this.rightWallPos = {
		  x : -4700,
		  y : 100,
		  z : 4700,
		  id : 4
	};
	
	this.rightTreeRow = {
		x : 4600,
		y : 80,
		z : 1700,
		id : 1
	};
	
	this.leftTreeRow = {
		x : 4600,
		y : 80,
		z : -1700,
		id : 2
	};
}
CrimeRacer.World.prototype.noOfTress = function () {
	
	return this.noOfTrees;
}

CrimeRacer.World.prototype.noOfBlockPerBoundryWall = function () {
	
	return this.noOfBlocksPerWall;
}

CrimeRacer.World.prototype.noOfSide = function () {
	
	return this.noOfSides;
}

CrimeRacer.World.prototype.noOfTreeSides = function () {
	
	return this.noOfSideForTree;
}

CrimeRacer.World.prototype.setWallPosition = function (wallNo) {
	
	
	
	
	if(wallNo === 1)	
		this.myWall.setWallPos(this.frontWallPos.x, this.frontWallPos.y, this.frontWallPos.z, this.frontWallPos.id);
	if(wallNo === 2)
		this.myWall.setWallPos(this.backWallPos.x, this.backWallPos.y, this.backWallPos.z, this.backWallPos.id);
	if(wallNo === 3)
		this.myWall.setWallPos(this.leftWallPos.x, this.leftWallPos.y, this.leftWallPos.z, this.leftWallPos.id);
	if(wallNo === 4)
		this.myWall.setWallPos(this.rightWallPos.x, this.rightWallPos.y, this.rightWallPos.z, this.rightWallPos.id);
	
	
}



CrimeRacer.World.prototype.setWorldTreePosition = function (k) {
	
	//var xDistance = myFunctionXPos();
	
	
	if(k === 0)
		this.myTreePosition.setPos(this.leftTreeRow.x, this.leftTreeRow.y, this.leftTreeRow.z, this.leftTreeRow.id);
	if(k === 1)
		this.myTreePosition.setPos(this.rightTreeRow.x, this.rightTreeRow.y, this.rightTreeRow.z, this.rightTreeRow.id);
	
	
}

CrimeRacer.World.prototype.setWorldMidWayPosition = function (multiplier) {
	
	//var xDistance = myFunctionXPos();
	
	
	this.myMidWayPosition.setPos(-4650+multiplier, 20, 1700);
	
	
	
}

CrimeRacer.World.prototype.updateWorldTime = function () {
	
	//var xDistance = myFunctionXPos();
	
	
	return this.worldTime.updateTime();
	
	
}

CrimeRacer.World.prototype.setWorldCar = function () {
	
	
	this.myCar = new CrimeRacer.Car;
	
	this.myCar.setPos(500, 60, 1000);
	
	
}

CrimeRacer.World.prototype.setWorldEnemyCar = function () {
	
	this.enemyCar.setPos(1000, 60, 1000);	
	
}

CrimeRacer.World.prototype.getEnemyCarRotaion = function () {
	
	this.rotationAngle = this.enemyCar.getrotationalAngle();	
	return this.rotationAngle;
}

CrimeRacer.World.prototype.setEnemyCarSpeed = function () {
	
	this.enemyCar.setSpeedHigh();	
	
}