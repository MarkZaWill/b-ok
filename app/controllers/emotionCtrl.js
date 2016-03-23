"use strict";


MarkApp.controller("emotionCtrl",
[
  "$scope",
  "$location",
  "$http",

  	function ($scope, $location, $http) {
  		 let userEmotion;

  		 function emotionalPick (userEmotion) {

  		 	

  		ng-if (1) {
  			userEmotion="Happy";
  		}
  		if (2){
  			userEmotion="Sad"
  		}
  		else if (3) {
  			userEmotion="Angry"
  		}
  		else if (4) {
  			userEmotion="Scared"
  		}
		else {
			userEmotion="Icky"
  		}
  		console.log("userEmotion", userEmotion);
  		}
  		return userEmotion;
  	}
  	])