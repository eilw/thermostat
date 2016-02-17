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
    it('sets PSM to on by default', function(){
      expect(thermostat.isPSMOn()).toEqual(true);
    });

    it('sets the maximum temperature to twenty five degrees when engaged', function(){
      for(var i = 0; i<(thermostat.MAX_TEMP-thermostat.START_TEMP); i++){thermostat.upButton();};
      expect(function(){thermostat.upButton()}).toThrow('Max temperature is '+ thermostat.MAX_TEMP)
    });

    it('sets the maximum temperature to thirty two degrees when disengaged', function(){
      thermostat.switchPSM()
      for(var i = 0; i<(thermostat.GREEDY_MAX_TEMP-thermostat.START_TEMP); i++){thermostat.upButton();};
      expect(function(){thermostat.upButton()}).toThrow('Max temperature is '+ thermostat.GREEDY_MAX_TEMP)
    });
  });

  describe('reset button', function(){
    it('reset button sets temperature to start tempt', function(){
      thermostat.upButton();
      thermostat.resetButton();
      expect(thermostat.showTemperature()).toEqual(START_TEMP)
    });
  });

  describe('showDisplay', function(){
    it('shows low-usage if temperature is below 18', function(){
      for(var i = 0; i <= (START_TEMP-thermostat.LOW_USAGE_LIMIT); i++){
        thermostat.downButton();
      };
      expect(thermostat.showDisplay()).toEqual('low-usage')
    });

    it('shows medium-usage if temperature is below 25', function(){
      expect(thermostat.showDisplay()).toEqual('medium-usage')
    });

    it('shows high-usage if temperature is above 25', function(){
      thermostat.switchPSM()
      for(var i = 0; i <= (thermostat.MEDIUM_USAGE_LIMIT - START_TEMP); i++){
        thermostat.upButton();
      };
      expect(thermostat.showDisplay()).toEqual('high-usage')
    });
  });
});
