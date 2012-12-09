var CrimeRacer = CrimeRacer || {};



    
CrimeRacer.Tree = function() {
	this.position = {
		x : 3000,
		y : 0,
		z : 1700
	};
	// default at position 0
	
}

var myFunctionXPosTrees = function () {  
    if (typeof myFunctionXPosTrees.myStaticVar === 'undefined') {  
        myFunctionXPosTrees.myStaticVar = 0;  
    }  
      
    myFunctionXPosTrees.myStaticVar += 500;
		
	return myFunctionXPosTrees.myStaticVar;
}

var myFunctionXPosTreesTwo = function () {  
    if (typeof myFunctionXPosTreesTwo.myStaticVar === 'undefined') {  
        myFunctionXPosTreesTwo.myStaticVar = 0;  
    }  
      
    myFunctionXPosTreesTwo.myStaticVar += 500;
		
	return myFunctionXPosTreesTwo.myStaticVar;
}

CrimeRacer.Tree.prototype.setPos = function(xPos, yPos, zPos, treeId) {
	
	if(treeId == 2){
		var xDistanceTree = myFunctionXPosTrees();
		this.position.x = xPos - xDistanceTree;
		this.position.y = yPos;
		this.position.z = zPos;
		
	}
	if(treeId == 1){
		var xDistanceTreeRight = myFunctionXPosTreesTwo();
		this.position.x = xPos - xDistanceTreeRight;
		this.position.y = yPos;
		this.position.z = zPos;
		
	}
	
}


