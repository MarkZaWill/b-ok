"use strict";

/* exported MarkApp */

let MarkApp = angular.module("MarkApp", ["ngRoute", "firebase"])
  .constant('firebaseURL', "https://be-ok.firebaseio.com/");

/*
  Define a promise for any view that needs an authenticated user
  before it will resolve (see below)
 */
let isAuth = (authFactory) => new Promise((resolve, reject) => {
  if (authFactory.isAuthenticated()) {
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});

/*
  Set up routes for Movie History app
 */
MarkApp.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.

      when("/", {
        templateUrl: "partials/dailyEmotion.html",
        // controller: "emotionCtrl",
        resolve: { isAuth }
      }).
      when("/login", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
      }).
      when("/logout", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
      }).
      when("/howAreYou", {
        templateUrl: "partials/howAreYou.html",
        controller: "howAreYouCtrl",
        resolve: { isAuth }
      }).
      when("/copingSkills", {
        templateUrl: "partials/copingSkills.html",
        controller: "jsonkilla",
        resolve: { isAuth }
      }).
      when("/mood/mad", {
        templateUrl: "partials/mad.html",
        controller: "copingSkills",
        resolve: { isAuth }
      }). 
      when("/mood/glad", {
        templateUrl: "partials/glad.html",
        controller: "jsonkilla",
        resolve: { isAuth }
      }). 
      when("/mood/sad", {
        templateUrl: "partials/sad.html",
        controller: "copingSkills",
        resolve: { isAuth }
      }). 
      when("/mood/scared", {
        templateUrl: "partials/scared.html",
        controller: "copingSkills",
        resolve: { isAuth }
      }).
      when("/mood/icky", {
        templateUrl: "partials/icky.html",
        controller: "copingSkills",
        resolve: { isAuth }
      }).
       when("/addSkill", {
        templateUrl: "partials/addSkill.html",
        controller: "copingSkills",
        resolve: { isAuth }
      }).
       when("/mood/:skillid", {
        templateUrl: "partials/viewSkill.html",
        controller: "jsonkilla",
        resolve: { isAuth }
      }).
       when("/updateSkill", {
        templateUrl: "partials/updateSkill.html",
        controller: "updateSkill",
        resolve: { isAuth }
      }).
      otherwise({
        redirectTo: "/"
      });
  }]);

/*
  When the application first loads, redirect the user to the login
  form if there is no authentication
 */
MarkApp.run([
  "$location",

  ($location) => {
    let MarkAppRef = new Firebase("https://be-ok.firebaseio.com/");

    MarkAppRef.onAuth(authData => {
      if (!authData) {
        $location.path("/login");
      }
    });  
  }  
]);
