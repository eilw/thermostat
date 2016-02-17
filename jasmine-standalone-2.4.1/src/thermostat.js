function Thermostat(){
  this.START_TEMP = 20;
  this.MIN_TEMP = 10;
  this._temperature = this.START_TEMP;
  this._PSMOn = true;
};

Thermostat.prototype.upButton = function(){
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
