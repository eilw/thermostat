function Thermostat(){
  this.START_TEMP = 20;
  this.MIN_TEMP = 10;
  this._temperature = this.START_TEMP;
  this._PSMOn = true;
  this.MAX_TEMP = 25;
  this.GREEDY_MAX_TEMP = 32;
  this.LOW_USAGE_LIMIT = 18;
  this.MEDIUM_USAGE_LIMIT = 25;
};

Thermostat.prototype.upButton = function(){
  if(this.showTemperature() === this._maxTemp()) {
    throw ('Max temperature is ' + this._maxTemp());
  };
  this._temperature += 1;
};

Thermostat.prototype.downButton = function(){
  if(this.showTemperature()=== this.MIN_TEMP){
    throw ('Min temperature is '+ this.MIN_TEMP);
  }
  this._temperature -= 1;
};

Thermostat.prototype.showTemperature = function(){
  return this._temperature;
};

Thermostat.prototype.isPSMOn = function(){
  return this._PSMOn;
};

Thermostat.prototype.switchPSM = function(){
  this._PSMOn = !this._PSMOn;
};

Thermostat.prototype._maxTemp = function(){
  if (this.isPSMOn()) {
    return this.MAX_TEMP;
  } else {
    return this.GREEDY_MAX_TEMP;
  };
};

Thermostat.prototype.resetButton = function(){
  this._temperature = this.START_TEMP;
};

Thermostat.prototype.showDisplay = function(){
  if(this.showTemperature()<this.LOW_USAGE_LIMIT){
    return 'low-usage';
  } else if(this.showTemperature()< this.MEDIUM_USAGE_LIMIT){
    return 'medium-usage';
  }else{
    return 'high-usage';
  }
};
