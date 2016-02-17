function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.upButton = function(){
  this.temperature += 1;
};

Thermostat.prototype.downButton = function(){
  this.temperature -= 1;
};
