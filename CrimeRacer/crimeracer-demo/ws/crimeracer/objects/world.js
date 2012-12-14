var CrimeRacer = CrimeRacer || {};

CrimeRacer.World = function() {

	this.noOfTrees = 17;
	this.noOfSideForTree = 2;
	this.noOfSides = 4;
	this.noOfBlocksPerWall = 100;
	this.carSpeedCkeck
	this.noOfEnemy = 3;

	this.enemy = {
		enemyCar1 : new CrimeRacer.enemyCar,
		enemyCar2 : new CrimeRacer.enemyCar,
		enemyCar3 : new CrimeRacer.enemyCar
	};

	//for(var i = 0; i < this.noOfEnemy; i++){
	//this.enemyCar = new CrimeRacer.enemyCar ;
	//	 this.enemy.push(this.enemyCar);
	//}
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

	this.enemyCarPos = {
		x : -1000,
		y : 60,
		z : 1000
	};
}
CrimeRacer.World.prototype.noOfTress = function() {

	return this.noOfTrees;
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

	if (EnemyCarId == 1) {
		this.enemyCar = this.enemy.enemyCar1;
		this.enemyCar.setPos(-1000, 60, -1000);
	}
	if (EnemyCarId == 2) {
		this.enemyCar = this.enemy.enemyCar2;
		this.enemyCar.setPos(2000, 60, 1000);
	}
	if (EnemyCarId == 3) {
		this.enemyCar = this.enemy.enemyCar3;
		this.enemyCar.setPos(-3000, 60, 1000);
	}

}

CrimeRacer.World.prototype.getEnemyCarRotaion = function() {

	this.rotationAngle = this.enemyCar.getrotationalAngle();
	return this.rotationAngle;
}

CrimeRacer.World.prototype.setEnemyCarSpeed = function(timer, hit, id) {

	if (id == 0) {
		this.enemyCar = this.enemy.enemyCar1;

	}
	if (id == 1) {
		this.enemyCar = this.enemy.enemyCar2;

	}
	if (id == 2) {
		this.enemyCar = this.enemy.enemyCar3;

	}
	if (hit === false) {
		if (timer > 0 && timer < 55) {

			this.carSpeedCkeck = this.enemyCar.moveForward();

		}

		if (timer >= 55 && timer <= 59) {

			this.carSpeedCkeck = this.enemyCar.moveBackword();

		}
	} else if (hit === true) {

		
		this.carSpeedCkeck = this.enemyCar.carHit();

	}

	return this.carSpeedCkeck;

}

CrimeRacer.World.prototype.setEnemyCarRotation = function(timer, rotation, id) {
	if (id == 0) {
		this.enemyCar = this.enemy.enemyCar1;

	}
	if (id == 1) {
		this.enemyCar = this.enemy.enemyCar2;

	}
	if (id == 2) {
		this.enemyCar = this.enemy.enemyCar3;
	}

	this.enemyCar.rotationalAngle = 0.05 * Math.abs(this.enemyCar.speed / 10);
	if (this.enemyCar.rotationalAngle > 0.05)
		this.enemyCar.rotationalAngle = 0.05;

	if (timer >= 0 && timer <= 30) {
		rotation += this.enemyCar.rotationalAngle;
		if (rotation > 6) {
			this.rotation -= 6;
			return rotation;
		}
		return rotation;
	}
	if (timer >= 31 && timer <= 60) {
		rotation -= this.enemyCar.rotationalAngle;
		if (rotation < 0) {
			rotation = 6 + rotation;
			return rotation;
		}
		return rotation;
	}

}

CrimeRacer.World.prototype.setEnemyCarNewPositionX = function(Speed, rotation, xPosition, id) {

	//console.log("spped" + speed);
	if (id == 0) {
		this.enemyCar = this.enemy.enemyCar1;

	}
	if (id == 1) {
		this.enemyCar = this.enemy.enemyCar2;

	}
	if (id == 2) {
		this.enemyCar = this.enemy.enemyCar3;
	}

	newXPosition = (xPosition + (this.enemyCar.speed * Math.cos(rotation)) * this.enemyCar.phaseX);
	return newXPosition;

}

CrimeRacer.World.prototype.setEnemyCarNewPositionZ = function(Speed, rotation, zPosition, id) {

	if (id == 0) {
		this.enemyCar = this.enemy.enemyCar1;

	}
	if (id == 1) {
		this.enemyCar = this.enemy.enemyCar2;

	}
	if (id == 2) {
		this.enemyCar = this.enemy.enemyCar3;
	}

	newZPosition = (zPosition - (this.enemyCar.speed * Math.sin(rotation)) * this.enemyCar.phaseY);
	return newZPosition;

}

CrimeRacer.World.prototype.healthControl = function(obj1, obj2) {

	if (obj1 === "car" && (obj2 === "tree" || obj2 === "wall")) {

		this.myCar.health--;
		return this.myCar.health;
	}

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