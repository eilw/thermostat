describe('thermostat', function(){
  var thermostat = new Thermostat();

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    it('starts at twenty degrees celcius', function(){
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('up button', function(){
    it('increases the temperature', function(){
      thermostat.upButton();
      expect(thermostat.temperature).toBe(21)
    });
  });
  describe('down button', function(){
    it('decreases the temperature', function(){
      thermostat.downButton();
      expect(thermostat.temperature).toBe(19)
    });
  });
});
