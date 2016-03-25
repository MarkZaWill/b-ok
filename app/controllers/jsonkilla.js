"use strict";

MarkApp.controller("jsonkilla",
[
  "$scope",
  "$routeParams",
  "$location",
  "$http",
  "FireFactory",
  "authFactory",	

  function ($scope, $routeParams, $location, $http, FireFactory, authFactory) {
  		
    // Default properties for bound variables
    $scope.copingSkills = [];
    $scope.selectedSkills = {};

    // Invoke the promise that reads from Firebase
    FireFactory().then(

      // Handle resolve() from the promise
      copeGroup => {
        Object.keys(copeGroup).forEach(key => {
          copeGroup[key].title = key;
          $scope.copingSkills.push(copeGroup[key]);
        });

        $scope.selectedSkills = $scope.copingSkills.filter(copingSkills => copingSkills.title === $routeParams.skillid)[0];
        console.log("selectedSkills", $scope.selectedSkills);
      },

      // Handle reject() from the promise
      err => console.log(err)
    );

    /*
      This function is bound to an ng-click directive
      on the button in the view
    */
    $scope.deleteSkill = () => $http
        .delete(`https://be-ok.firebaseio.com/copingSkills/${$routeParams.skillid}.json`)
        .then(() => $location.url("/"));
    $scope.updateSkill = () => $http
        .update(`https://be-ok.firebaseio.com/copingSkills/${$routeParams.skillid}.json`, $scope.updateSkill.skill)
        .then(() => $location.url("/"));

  }
  	])