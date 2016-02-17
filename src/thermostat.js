function Thermostat() {
  this.START_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_POWER_SAVING_ON = 25;
  this.MAX_TEMP_POWER_SAVING_OFF = 32;
  this.MID_ENERGY_USAGE_LIMIT = 18;
  this.MAX_ENERGY_USAGE_LIMIT = 25;
  this._temperature = this.START_TEMP;
  this.powerSavingMode = true;

}

Thermostat.prototype.upButton = function () {
  var maxTemp = this.isPowerSavingOn() ? this.MAX_TEMP_POWER_SAVING_ON : this.MAX_TEMP_POWER_SAVING_OFF;
  if(this.checkTemperature() < maxTemp){this._temperature += 1;}
};

Thermostat.prototype.downButton = function () {
  if(this.checkTemperature() > this.MIN_TEMP){this._temperature -= 1};
};

Thermostat.prototype.checkTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.isPowerSavingOn = function() {
  return this.powerSavingMode;
}

Thermostat.prototype.switchPowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
}

Thermostat.prototype.resetTemperature = function() {
  this._temperature = this.START_TEMP;
}

Thermostat.prototype.displayColour = function() {
  if(this.checkTemperature() < this.MID_ENERGY_USAGE_LIMIT){
    return 'low-usage';
  }else if((this.checkTemperature() < this.MAX_ENERGY_USAGE_LIMIT)){
    return 'medium-usage';
  }else{
    return 'high-usage';
  };
}
