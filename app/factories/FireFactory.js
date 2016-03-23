"use strict";

MarkApp.factory("FireFactory", ($q, $http) =>
  function makeCope () {
    return $q((resolve, reject) => // Return a promise for our async XHR
      $http
        .get("https://moviehistbnc.firebaseio.com/movies.json")
        .success(
          copeGroup => 
          	{resolve(copeGroup)
          		console.log("SUCCESS", copeGroup);},
          error => reject(error)
        )
    )
    return makeCope
});