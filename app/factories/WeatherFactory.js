
"use strict";

MarkApp.factory("WeatherFactory", ($q, $http, authFactory, firebaseURL) =>
   () =>
    $q((resolve, reject) => { 
      let user = authFactory.getUser();
      console.log("user.uid", user.uid);
        $http
        .get(`${firebaseURL}copingSkills.json`)
        .success(
          copeGroup => 
          	{resolve(copeGroup)
          		console.log("SUCCESS", copeGroup);},
          error => reject(error)
        );
      })

);




// weather.main.id=
// http://martinschmaltz.com/wp-content/uploads/thunderstorm.jpg
//  http://onehdwallpaper.com/wp-content/uploads/2015/06/Rain-Falling-Desktop-Backgrounds.jpg
//  http://disneymeals.me/wp-content/uploads/2015/11/IMG_20151101_100604.jpg
// http://screenrant.com/wp-content/uploads/Game-of-Thrones-Finale-Jon-Snow-Dead-Killed.jpg
// https://static.pexels.com/photos/9601/flight-clouds-airplane-view.jpg



