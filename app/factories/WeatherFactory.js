'use strict';

$(function() {

  //This begins the API Weather integration that changes the background and adds the current conditions to the footer.

//these are the ids that are being pulled from the API to help to change the backgrounds.
  var sunnyWeather = [800, 801, 802, 803, 804];
  var snowyWeather = [600, 601, 602, 611, 612, 615, 616, 620, 621, 622];
  var rainyWeather = [300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
  var stormyWeather = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
  var foggyWeather = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
  var extremeWeather = [900, 901, 902, 903, 904, 905, 906];
  //This is the call for the API. The callback function here includes the test to change the background
  
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?id=5003243&appid=d3bd75156e1363b7b3c8e43c98744398',
    dataType: 'jsonp',
    success: function(results) {
      var currentWeather = results.weather[0].id;
      console.log("currentWeather", results.weather[0].id);
      var currentTemp = results.main.temp - 273;
      if (isItInArray(currentWeather, sunnyWeather)) {
        $('body').addClass('sunny');
        console.log("it is sunny");
      } else if (isItInArray(currentWeather, foggyWeather)) {
        $('body').addClass('fog');
        console.log("it is foggy");
      } else if (isItInArray(currentWeather, rainyWeather)) {
        $('body').addClass('rainy');
        console.log("it is rainy");
      } else if (isItInArray(currentWeather, stormyWeather)) {
        $('body').addClass('stormy');
        console.log("it is stormy");
      } else if (isItInArray(currentWeather, snowyWeather)) {
        $('body').addClass('snow');
        console.log("it is snowy");
      } else if (isItInArray(currentWeather, extremeWeather)) {
        $('body').addClass('extreme');
        console.log("it is deadly");
      }
    }
  });

  //check to see if item is in array
  function isItInArray(value, array) {
    return $.inArray(value, array) > -1;
  }

});


// weather.main.id=
// http://martinschmaltz.com/wp-content/uploads/thunderstorm.jpg
//  http://onehdwallpaper.com/wp-content/uploads/2015/06/Rain-Falling-Desktop-Backgrounds.jpg
//  http://disneymeals.me/wp-content/uploads/2015/11/IMG_20151101_100604.jpg
// http://screenrant.com/wp-content/uploads/Game-of-Thrones-Finale-Jon-Snow-Dead-Killed.jpg
// https://static.pexels.com/photos/9601/flight-clouds-airplane-view.jpg



