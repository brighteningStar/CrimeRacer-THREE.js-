var CrimeRacer = CrimeRacer || {};



    
CrimeRacer.Time = function() {
	this.min = 0;
	this.sec = 0;
	this.hour = 0;
	
	
	this.startTime = 0;
	this.timer = 0;
	this.currentTime = new Date();
	this.start = false;
	
}

CrimeRacer.Time.prototype.updateTime = function() {
	
	if (this.start == true)
		this.currentTime = new Date();
		
	this.timer =  this.currentTime.getSeconds() - this.startTime;
	
	
}


