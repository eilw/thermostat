describe("Thermostat",function(){
  var thermo, STARTTEMP, MINTEMP, MAXPOWERSAVINGON, MAXPOWERSAVINGOFF;

  beforeEach(function(){
    thermo = new Thermostat();
    STARTTEMP = thermo.STARTTEMP;
    MINTEMP = thermo.MINTEMP;
    MAXPOWERSAVINGON = thermo.MAXPOWERSAVINGON;
    MAXPOWERSAVINGOFF = thermo.MAXPOWERSAVINGOFF;
  });

  describe("standard setup of the thermostat",function(){
    it("the default temperature is 20",function(){
      expect(thermo.checkTemperature()).toEqual(STARTTEMP)
    });

    it("power saving mode is on by default",function(){
      expect(thermo.isPowerSavingOn()).toEqual(true)
    });

  });

  describe("controlling the thermo",function(){
    it("Up button increases the temperature with one",function(){
      thermo.upButton();
      expect(thermo.checkTemperature()).toEqual(STARTTEMP+1)
    });

    it("Down button decreases the temperature with one",function(){
      thermo.downButton();
      expect(thermo.checkTemperature()).toEqual(STARTTEMP-1)
    });

    it("The minimum temperature is 10 degrees",function(){
      for (var i = 0; i<(STARTTEMP-MINTEMP); i++){thermo.downButton();}
      expect(thermo.checkTemperature()).toEqual(MINTEMP);
    });

  });

  describe("Power saving mode controll",function(){
    it("Power saving mode can be turned off",function(){
      thermo.switchPowerSavingMode();
      expect(thermo.isPowerSavingOn()).toEqual(false)
    });

    it("Power saving mode can be turned on",function(){
      thermo.switchPowerSavingMode();
      thermo.switchPowerSavingMode();
      expect(thermo.isPowerSavingOn()).toEqual(true)
    });

  });

  describe("Power saving mode is ON",function(){
    it("the max temperature is 25",function(){
      for (var i = 0; i < (MAXPOWERSAVINGON-STARTTEMP); i++){thermo.upButton();}
      expect(thermo.checkTemperature()).toEqual(MAXPOWERSAVINGON)
    });

  });
  describe("Power saving mode is OFF",function(){
    it("the max temperature is 32",function(){
      for (var i = 0; i < (MAXPOWERSAVINGOFF-STARTTEMP); i++){thermo.upButton();}
      expect(thermo.checkTemperature()).toEqual(MAXPOWERSAVINGOFF)
    });

  });

});
