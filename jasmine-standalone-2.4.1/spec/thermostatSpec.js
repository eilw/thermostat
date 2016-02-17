describe('thermostat', function(){
  var thermostat, START_TEMP, MIN_TEMP;

  beforeEach(function(){
    thermostat = new Thermostat();
    START_TEMP = thermostat.START_TEMP;
    MIN_TEMP = thermostat.MIN_TEMP;
  });

  describe('temperature', function(){
    it('starts at twenty degrees celcius', function(){
      expect(thermostat.showTemperature()).toBe(START_TEMP);
    });
  });

  describe('up button', function(){
    it('increases the temperature', function(){
      thermostat.upButton();
      expect(thermostat.showTemperature()).toBe(START_TEMP+1)
    });
  });
  describe('down button', function(){
    it('decreases the temperature', function(){
      thermostat.downButton();
      expect(thermostat.showTemperature()).toBe(START_TEMP-1)
    });
  });

  describe('minimum temperature is 10', function(){
    it('raises an error if going under ten', function(){
      for(var i = 0; i<(START_TEMP-MIN_TEMP); i++){thermostat.downButton();};
      expect(function(){thermostat.downButton()}).toThrow('Min temperature is '+ MIN_TEMP)
    });
  });

  describe('PSM', function(){
    it('PSM is on by default', function(){
      expect(thermostat.isPSMOn()).toEqual(true);
    });
  });
});
