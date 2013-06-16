var CrimeRacer = CrimeRacer || {};

CrimeRacer.World = function() {

	this.noOfTrees = 26;
	this.noOfSideForTree = 2;
	this.noOfSides = 4;
	this.noOfBlocksPerWall = 200;
	this.carSpeedCkeck
	this.noOfEnemy = 5;
	this.noOfBoxes = 10;
	
	this.enemy = {
		enemyCar1 : new CrimeRacer.enemyCar,
		enemyCar2 : new CrimeRacer.enemyCar,
		enemyCar3 : new CrimeRacer.enemyCar
	};
	
	this.enemyCarArray = [];
	this.boxesContainer = [];
	
	for (var i = 0; i < this.noOfEnemy; i++){
		
		enemyCars = new CrimeRacer.enemyCar;
		this.enemyCarArray.push(enemyCars);
	}
	
	for (var i = 0; i < this.noOfBoxes; i++){
		
		worldBoxes = new CrimeRacer.Boxes;
		this.boxesContainer.push(worldBoxes);
	}

	//for(var i = 0; i < this.noOfEnemy; i++){
	//this.enemyCar = new CrimeRacer.enemyCar ;
	//	 this.enemy.push(this.enemyCar);
	//}
	this.myWall = new CrimeRacer.Wall;
	this.myBoxesPosition = new CrimeRacer.Boxes;
	this.worldTime = new CrimeRacer.Time;
	this.myTreePosition = new CrimeRacer.Tree;
	this.myTree = new CrimeRacer.Tree;

	this.frontWallPos = {
		x : 7000,
		y : 100,
		z : -7000,
		id : 1
	};
	this.backWallPos = {
		x : -7000,
		y : 100,
		z : -7000,
		id : 2
	};
	this.leftWallPos = {
		x : -7000,
		y : 100,
		z : -7000,
		id : 3
	};
	this.rightWallPos = {
		x : -7000,
		y : 100,
		z : 7000,
		id : 4
	};

	this.rightTreeRow = {
		x : 7000,
		y : 80,
		z : 3200,
		id : 1
	};

	this.leftTreeRow = {
		x : 7000,
		y : 80,
		z : -3200,
		id : 2
	};

	this.enemyCarPos = {
		x : -1000,
		y : 60,
		z : 1000
	};
}
CrimeRacer.World.prototype.noOfTress = function() {

	return this.noOfTrees;
}

CrimeRacer.World.prototype.noOfBox = function() {

	return this.noOfBoxes;
}
CrimeRacer.World.prototype.noOfEnemies = function() {

	return this.noOfEnemy;
}

CrimeRacer.World.prototype.noOfBlockPerBoundryWall = function() {

	return this.noOfBlocksPerWall;
}

CrimeRacer.World.prototype.noOfWallSide = function() {

	return this.noOfSides;
}

CrimeRacer.World.prototype.noOfTreeSides = function() {

	return this.noOfSideForTree;
}

CrimeRacer.World.prototype.setWallPosition = function(wallNo) {

	if (wallNo === 1)
		this.myWall.setWallPos(this.frontWallPos.x, this.frontWallPos.y, this.frontWallPos.z, this.frontWallPos.id);
	if (wallNo === 2)
		this.myWall.setWallPos(this.backWallPos.x, this.backWallPos.y, this.backWallPos.z, this.backWallPos.id);
	if (wallNo === 3)
		this.myWall.setWallPos(this.leftWallPos.x, this.leftWallPos.y, this.leftWallPos.z, this.leftWallPos.id);
	if (wallNo === 4)
		this.myWall.setWallPos(this.rightWallPos.x, this.rightWallPos.y, this.rightWallPos.z, this.rightWallPos.id);

}

CrimeRacer.World.prototype.setWorldTreePosition = function(k) {

	//var xDistance = myFunctionXPos();

	if (k === 0)
		this.myTreePosition.setPos(this.leftTreeRow.x, this.leftTreeRow.y, this.leftTreeRow.z, this.leftTreeRow.id);
	if (k === 1)
		this.myTreePosition.setPos(this.rightTreeRow.x, this.rightTreeRow.y, this.rightTreeRow.z, this.rightTreeRow.id);

}

CrimeRacer.World.prototype.setWorldBoxPosition = function() {

	//var xDistance = myFunctionXPos();

	
		this.myBoxesPosition.setPos(-4000, 100, -4000);
	

}

CrimeRacer.World.prototype.setWorldMidWayPosition = function(multiplier) {

	//var xDistance = myFunctionXPos();

	this.myMidWayPosition.setPos(-4650 + multiplier, 20, 1700);

}

CrimeRacer.World.prototype.updateWorldTime = function() {

	//var xDistance = myFunctionXPos();

	return this.worldTime.updateTime();

}

CrimeRacer.World.prototype.setWorldCar = function() {

	this.myCar = new CrimeRacer.Car;

	this.myCar.setPos(500, 60, 1000);

}

CrimeRacer.World.prototype.setWorldEnemyCar = function(EnemyCarId) {

	this.enemyCar = this.enemyCarArray[EnemyCarId - 1];
	//this.enemyCar.setPos(Math.floor((Math.random() * 1000)+ 1), 0, Math.floor((Math.random() * 1000)+ 1))
	if (EnemyCarId == 1) {
		//this.enemyCar = this.enemy.enemyCar1;
		this.enemyCar.setPos(-1000, 0, -1000);
	}
	if (EnemyCarId == 2) {
		//this.enemyCar = this.enemy.enemyCar2;
		this.enemyCar.setPos(2000, 0, 1000);
	}
	if (EnemyCarId == 3) {
		//this.enemyCar = this.enemy.enemyCar3;
		this.enemyCar.setPos(-3000, 0, 1000);
	}
	if (EnemyCarId == 4) {
		//this.enemyCar = this.enemy.enemyCar3;
		this.enemyCar.setPos(1000, 0, 1000);
	}
	if (EnemyCarId == 5) {
		//this.enemyCar = this.enemy.enemyCar3;
		this.enemyCar.setPos(3000, 0, 5000);
	}
	// this.enemyCar = this.enemyCarArray[EnemyCarId - 1];
	//this.enemyCar.setPos(-1000, 0, -1000);

}

CrimeRacer.World.prototype.getEnemyCarRotaion = function() {

	this.rotationAngle = this.enemyCar.getrotationalAngle();
	return this.rotationAngle;
}

CrimeRacer.World.prototype.setEnemyCarSpeed = function(timer, hit, id) {

	if(id != undefined){
		this.enemyCar = this.enemyCarArray[id];
	}
	// if (id == 0) {
		// this.enemyCar = this.enemy.enemyCar1;
	

	// }
	// if (id == 1) {
		// this.enemyCar = this.enemy.enemyCar2;

	// }
	// if (id == 2) {
		// this.enemyCar = this.enemy.enemyCar3;

	// }
	if (hit === false) {
		if (timer == 'R') {

			this.carSpeedCkeck = this.enemyCar.moveForward();

		}

		else if (timer == 'L') {

			this.carSpeedCkeck = this.enemyCar.stopCar();

		}
	} else if (hit === true) {

		
		this.carSpeedCkeck = this.enemyCar.carHit();

	}
	console.log(this.carSpeedCkeck);
	return this.carSpeedCkeck;

}

CrimeRacer.World.prototype.setEnemyCarRotation = function(move, rotation, id) {
	
	this.enemyCar = this.enemyCarArray[id];
	// if (id == 0) {
		// this.enemyCar = this.enemy.enemyCar1;

	// }
	// if (id == 1) {
		// this.enemyCar = this.enemy.enemyCar2;

	// }
	// if (id == 2) {
		// this.enemyCar = this.enemy.enemyCar3;
	// }

	this.enemyCar.rotationalAngle = 0.05 * Math.abs(this.enemyCar.speed / 10);
	if (this.enemyCar.rotationalAngle > 0.05)
		this.enemyCar.rotationalAngle = 0.05;

	if (move === 'L') {
		rotation += this.enemyCar.rotationalAngle;
		if (rotation > 6) {
			this.rotation -= 6;
			return rotation;
		}
		return rotation;
	}
	if (move === 'R') {
		rotation -= this.enemyCar.rotationalAngle;
		if (rotation < 0) {
			rotation = 6 + rotation;
			return rotation;
		}
		return rotation;
	}
	if (move === 'S') {
		//rotation = this.enemyCar.rotationalAngle;
		// if (rotation < 0) {
			// rotation = 0;
			// return rotation;
		// }
		return rotation;
	}

}

CrimeRacer.World.prototype.setEnemyCarNewPositionX = function(Speed, rotation, xPosition, id) {

	//console.log("spped" + speed);
	this.enemyCar = this.enemyCarArray[id];
	// if (id == 0) {
		// this.enemyCar = this.enemy.enemyCar1;

	// }
	// if (id == 1) {
		// this.enemyCar = this.enemy.enemyCar2;

	// }
	// if (id == 2) {
		// this.enemyCar = this.enemy.enemyCar3;
	// }

	newXPosition = (xPosition + (this.enemyCar.speed * Math.cos(rotation)) * this.enemyCar.phaseX);
	return newXPosition;

}

CrimeRacer.World.prototype.setEnemyCarNewPositionZ = function(Speed, rotation, zPosition, id) {
	
	this.enemyCar = this.enemyCarArray[id];
	// if (id == 0) {
		// this.enemyCar = this.enemy.enemyCar1;

	// }
	// if (id == 1) {
		// this.enemyCar = this.enemy.enemyCar2;

	// }
	// if (id == 2) {
		// this.enemyCar = this.enemy.enemyCar3;
	// }

	newZPosition = (zPosition - (this.enemyCar.speed * Math.sin(rotation)) * this.enemyCar.phaseY);
	return newZPosition;

}

CrimeRacer.World.prototype.healthControl = function() {

	return this.myCar.getHealth();

}

CrimeRacer.World.prototype.healthControlreduce = function() {

	return this.myCar.reduceHealth();

}


CrimeRacer.World.prototype.enemyHealthControl = function(id) {

	if(id != undefined)
	this.enemyCar = this.enemyCarArray[id];
	// if (id == 0) {
		
		// this.enemyCar = this.enemy.enemyCar1;

	// }
	// if (id == 1) {
		// this.enemyCar = this.enemy.enemyCar2;

	// }
	// if (id == 2) {
		// this.enemyCar = this.enemy.enemyCar3;
	// }
		return this.enemyCar.getHealth();
}
CrimeRacer.World.prototype.boxHealthControl = function(id) {

	if(id != undefined)
	this.boxWorld = this.boxContainer[id];
	// if (id == 0) {
		
		// this.enemyCar = this.enemy.enemyCar1;

	// }
	// if (id == 1) {
		// this.enemyCar = this.enemy.enemyCar2;

	// }
	// if (id == 2) {
		// this.enemyCar = this.enemy.enemyCar3;
	// }
		return this.boxWorld.getHealth();
}


CrimeRacer.World.prototype.CarMove = function(key, hit) {

	if (hit === false) {
		if (key === "W") {

			return this.myCar.moveForward();

		}

		if (key === "S") {

			return this.myCar.moveBackword();

		}
		if (key != "S" && key != "w") {

			return this.myCar.speedSetDecrease();

		}
	} else if (hit === true) {

		return this.myCar.carHit();

	}

}