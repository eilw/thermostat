function Thermostat() {
  this.STARTTEMP = 20;
  this.MINTEMP = 10;
  this.MAXPOWERSAVINGON = 25;
  this.MAXPOWERSAVINGOFF = 32;
  this._temperature = this.STARTTEMP;
  this.powerSavingMode = true;

}

Thermostat.prototype.upButton = function () {
  var maxTemp = this.isPowerSavingOn() ? this.MAXPOWERSAVINGON : this.MAXPOWERSAVINGOFF;
  if(this.checkTemperature() < maxTemp){this._temperature += 1;}
};

Thermostat.prototype.downButton = function () {
  if(this.checkTemperature() > this.MINTEMP){this._temperature -= 1};
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
