"use strict";

MarkApp.controller("jsonkilla",
[
  "$scope",
  "$routeParams",
  "$location",
  "$http",
  "FireFactory",
  "authFactory",
  "$firebaseArray",
  
  function ($scope, $routeParams, $location, $http, FireFactory, authFactory, $firebaseArray) {
  	
    let user = authFactory.getUser();
      	
    // Default properties for bound variables
      $scope.copingSkills = [];
      $scope.selectedSkills = {};
      $scope.rawCopingSkills = [];

    let ref = new Firebase('https://be-ok.firebaseio.com/copingSkills');
    let   rawCopingSkills = $firebaseArray(ref);
      $scope.rawCopingSkills = $firebaseArray(ref);
      
    JSON.stringify($scope.rawCopingSkills);

    let i = $scope.rawCopingSkills.length;
      $scope.rawCopingSkills.$loaded().then(

      // Handle resolve() from the promise
      obj => {
       
        Object.keys($scope.rawCopingSkills).forEach(key => {

        });
      rawCopingSkills= rawCopingSkills.filter(skills => skills.id === $routeParams.skillsId)[0];
      };
      // Handle reject() from the promise
      err => console.log(err)
    );
    
    /*
      This function is bound to an ng-click directive
      on the button in the view
    */
`
     $scope.deleteSkill = function(rawCopingSkill){ 
      $scope.rawCopingSkills.$remove(rawCopingSkill).then(() => $location.url("#/mood/"));}   
    
     // $scope.deleteSkill = () => $http
     //    .delete(`https://be-ok.firebaseio.com/copingSkills/${$routeParams.skillsId}.json`)

   $scope.addSkill = function (newSkill) {
    let user = authFactory.getUser();
      newSkill = {
        skill: $scope.newSkill.skill,
        uid: user.uid
      };
    console.log("this was clicked");
      $scope.rawCopingSkills.$add(newSkill).then(()=> $location.url("#/mood/"));}

  }
  	])
