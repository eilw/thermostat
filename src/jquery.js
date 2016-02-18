$( document ).ready(function() {
  // $( "a" ).click(function( event ) {
  //     event.preventDefault();
  //     $(this).hide('slow');
  var thermo = new Thermostat();
  $('#temperature').text(thermo.checkTemperature());
  $('#temperature-up').click(function(){
      thermo.upButton();
      $('#temperature').text(thermo.checkTemperature());
    });

  $('#temperature-down').click(function(){
      thermo.downButton();
      $('#temperature').text(thermo.checkTemperature());
    });

  $('#temperature-reset').click(function(){
      thermo.resetTemperature();
      $('#temperature').text(thermo.checkTemperature());
    });

  $('#switch-PSM').click(function(){
      thermo.switchPowerSavingMode();
      $('#PSS').empty();
      if(thermo.isPowerSavingOn()){
        $('#PSS').text('On');
      } else {
        $('#PSS').text('Off');
      };
      $('#temperature').text(thermo.checkTemperature());
    });

  var setMax = function(){
    thermo.toMaxTemp();
    $('#temperature').text(thermo.checkTemperature());
  };

  var setMin = function(){
    thermo.toMinTemp();
    $('#temperature').text(thermo.checkTemperature());
  };

  var timeout_id = 0,
    hold_time = 1500;

  $('#temperature-up').mousedown(function() {
      timeout_id = setTimeout(setMax, hold_time);
  }).bind('mouseup mouseleave', function() {
      clearTimeout(timeout_id);
  });

  $('#temperature-down').mousedown(function() {
      timeout_id = setTimeout(setMin, hold_time);
  }).bind('mouseup mouseleave', function() {
      clearTimeout(timeout_id);
  });




  // $('#temperature-up').click(function() {
  //     timeoutId = setTimeout(setMax, 1000);
  // }).bind('mouseup mouseleave', function() {
  //     clearTimeout(timeoutId);
  //
  // });







});
