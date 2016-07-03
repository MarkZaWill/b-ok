'use strict';

$(function() {

//these are the ids that are being pulled from the API to help to change the backgrounds.
  var sunnyWeather = [800, 801, 802, 803, 804];
  var snowyWeather = [600, 601, 602, 611, 612, 615, 616, 620, 621, 622];
  var rainyWeather = [300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
  var stormyWeather = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
  var foggyWeather = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
  var extremeWeather = [900, 901, 902, 903, 904, 905, 906];

  
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?zip=37210,us&appid=d3bd75156e1363b7b3c8e43c98744398',
    dataType: 'jsonp',
    success: function(results) {
      var currentWeather = results.weather[0].id;
      console.log("currentWeather", results.weather[0].id);
      var currentTemp = results.main.temp - 273;
      if (isItInArray(currentWeather, sunnyWeather)) {
        $('body').addClass('sunny');
      } else if (isItInArray(currentWeather, foggyWeather)) {
        $('body').addClass('fog');
      } else if (isItInArray(currentWeather, rainyWeather)) {
        $('body').addClass('rainy');
      } else if (isItInArray(currentWeather, stormyWeather)) {
        $('body').addClass('stormy');
      } else if (isItInArray(currentWeather, snowyWeather)) {
        $('body').addClass('snow');
      } else if (isItInArray(currentWeather, extremeWeather)) {
        $('body').addClass('extreme');
      }
    }
  });

  //check to see if item is in array
  function isItInArray(value, array) {
    return $.inArray(value, array) > -1;
  }

});




