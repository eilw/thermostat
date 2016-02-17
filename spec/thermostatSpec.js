'use strict';
describe("Thermostat",function(){
  var thermo, START_TEMP, MIN_TEMP, MAX_TEMP_POWER_SAVING_ON, MAX_TEMP_POWER_SAVING_OFF;

  beforeEach(function(){
    thermo = new Thermostat();
    START_TEMP = thermo.START_TEMP;
    MIN_TEMP = thermo.MIN_TEMP;
    MAX_TEMP_POWER_SAVING_ON = thermo.MAX_TEMP_POWER_SAVING_ON;
    MAX_TEMP_POWER_SAVING_OFF = thermo.MAX_TEMP_POWER_SAVING_OFF;
  });

  describe("standard setup of the thermostat",function(){
    it("the default temperature is 20",function(){
      expect(thermo.checkTemperature()).toEqual(START_TEMP);
    });

    it("power saving mode is on by default",function(){
      expect(thermo.isPowerSavingOn()).toEqual(true);
    });

  });

  describe("controlling the thermo",function(){
    it("Up button increases the temperature with one",function(){
      thermo.upButton();
      expect(thermo.checkTemperature()).toEqual(START_TEMP+1);
    });

    it("Down button decreases the temperature with one",function(){
      thermo.downButton();
      expect(thermo.checkTemperature()).toEqual(START_TEMP-1);
    });

    it("The minimum temperature is 10 degrees",function(){
      for (var i = 0; i<(START_TEMP-MIN_TEMP); i++){thermo.downButton();}
      expect(thermo.checkTemperature()).toEqual(MIN_TEMP);
    });

  });

  describe("Power saving mode controll",function(){
    it("Power saving mode can be turned off",function(){
      thermo.switchPowerSavingMode();
      expect(thermo.isPowerSavingOn()).toEqual(false);
    });

    it("Power saving mode can be turned on",function(){
      thermo.switchPowerSavingMode();
      thermo.switchPowerSavingMode();
      expect(thermo.isPowerSavingOn()).toEqual(true);
    });

  });

  describe("Power saving mode is ON",function(){
    it("the max temperature is 25",function(){
      for (var i = 0; i < (MAX_TEMP_POWER_SAVING_ON-START_TEMP); i++){thermo.upButton();}
      expect(thermo.checkTemperature()).toEqual(MAX_TEMP_POWER_SAVING_ON);
    });

  });
  describe("Power saving mode is OFF",function(){
    it("the max temperature is 32",function(){
      thermo.switchPowerSavingMode();
      for (var i = 0; i < (MAX_TEMP_POWER_SAVING_OFF-START_TEMP); i++){thermo.upButton();}
      expect(thermo.checkTemperature()).toEqual(MAX_TEMP_POWER_SAVING_OFF);
    });

  });
  describe("resetTemperature",function(){
    it("turns the thermostat back to its startemp",function(){
      thermo.resetTemperature();
      expect(thermo.checkTemperature()).toEqual(START_TEMP);
    });
  });

  describe("displayColour",function(){
    it("shows green if under 18",function(){
      for(var i = 0; i < 3; i++){thermo.downButton();};
      expect(thermo.displayColour()).toEqual('low-usage');
    });

    it("shows yellow if under 25",function(){
      expect(thermo.displayColour()).toEqual('medium-usage');
    });

    it("shows red if equal to or over 25",function(){
      for(var i = 0; i < 5; i++){thermo.upButton();};
      expect(thermo.displayColour()).toEqual('high-usage');
    });
  });

});
