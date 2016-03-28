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
  		
    // Default properties for bound variables
    $scope.copingSkills = [];
    $scope.selectedSkills = {};
    $scope.rawCopingSkills = [];

    let ref = new Firebase('https://be-ok.firebaseio.com/copingSkills');
    let   rawCopingSkills = $firebaseArray(ref);
    $scope.rawCopingSkills = $firebaseArray(ref);
    
    console.log("$scope.rawCopingSkills", rawCopingSkills);
    console.log("$scope.rawCopingSkills", $scope.rawCopingSkills);
    JSON.stringify($scope.rawCopingSkills);

    let i = $scope.rawCopingSkills.length;
     // to take an action after the data loads, use the $loaded() promise
     $scope.rawCopingSkills.$loaded().then(

      // Handle resolve() from the promise
      obj => {
       
        Object.keys($scope.rawCopingSkills).forEach(key => {

        });
      rawCopingSkills= rawCopingSkills.filter(skills => skills.id === $routeParams.skillsId)[0];
  console.log("rawCopingSkills", rawCopingSkills);
      },
        // $scope.rawCopingSkills = $scope.rawCopingSkills.filter(rawCopingSkills => $scope.rawCopingSkills.title === $routeParams.skillid);
        // console.log("rawCopingSkills", $scope.rawCopingSkills);
    

      // Handle reject() from the promise
      err => console.log(err)
    );
      // rawCopingSkills.$bindTo($scope,"copingSkills")
    /*
      This function is bound to an ng-click directive
      on the button in the view
    */
    // $scope.deleteSkill = function (index, rawCopingSkills) {
    //  console.log("this was clicked");
    //   $scope.rawCopingSkills.$remove(rawCopingSkills);
    //  };
     $scope.deleteSkill = function(rawCopingSkill){ 
      console.log("id", rawCopingSkill);
      $scope.rawCopingSkills.$remove(rawCopingSkill).then(() => $location.url("/"));}   
     // $scope.deleteSkill = () => $http
     //    .delete(`https://be-ok.firebaseio.com/copingSkills/${$routeParams.skillsId}.json`)
     //    .then(() => $location.url("/"));
   
    $scope.updateSkill = function(rawCopingSkill) {
    console.log(rawCopingSkill);
      $scope.rawCopingSkills.$save(rawCopingSkill).then(() => $location.url("/"));
      console.log("$scope.rawCopingSkills", $scope.rawCopingSkills);}

   $scope.addSkill = function (newSkill) {
    console.log("this was clicked");
      $scope.rawCopingSkills.$add(newSkill);}

    // $http
    //     .$save(`https://be-ok.firebaseio.com/copingSkills/${$routeParams.skillid}.json`)
    //     .then(() => $location.url("/"));

  }
  	])