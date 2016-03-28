"use strict";

MarkApp.service("FireFactory",["$firebaseArray", function ($firebaseArray) {
    var arr;
     var ref = new Firebase('https://be-ok.firebaseio.com/copingSkills');
     arr = $firebaseArray(ref);
    
     // to take an action after the data loads, use the $loaded() promise
     arr.$loaded().then(function() {
        
        console.log("arr", arr);

       // To iterate the key/value pairs of the object, use angular.forEach()
       // angular.forEach(arr, function(value, key) {
       //    console.log(key, value);
       //    console.log("arr", arr);
       // });
       return arr;

     });

    
  
}]);


