"use strict";

MarkApp.controller("howAreYouCtrl",
[
  "$scope",
  "$location",
  "$http",

  	function ($scope, $location, $http) {
  	$scope.rateFunction = function( rating )
{
       var _url = 'https://be-ok.firebaseio.com';
 
 var data = {
   rating: rating
 };
 
};
}
]) 

 