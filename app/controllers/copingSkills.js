"use strict";

MarkApp.controller("copingSkills",
[
  "$scope",
  "$location",
  "$http",
<<<<<<< HEAD
  "FireFactory",

  	function ($scope, $routeParams, $location, $http, FireFactory) {
  		
    // Default properties for bound variables
    $scope.copingSkills = [];
    $scope.selectedCopingSkills = {};

    // Invoke the promise that reads from Firebase
    FireFactory().then(

      // Handle resolve() from the promise
      copeGroup => {
        Object.keys(copeGroup).forEach(key => {
          copeGroup[key].id = key;
          $scope.copingSkills.push(copeGroup[key]);
        });

        $scope.selectedCopingSkills = $scope.copingSkills.filter(copingSkills => copingSkills.id === $routeParams.copingSkillsId)[0];
      },

      // Handle reject() from the promise
      err => console.log(err)
    );

    /*
      This function is bound to an ng-click directive
      on the button in the view
    */
    $scope.deletecopingSkills = () => $http
        .delete(`https://be-ok.firebaseio.com/copingSkills/${$routeParams.copingSkillsId}.json`)
        .then(() => $location.url("/"));
  }
 

  	])
=======
  "firebaseURL",
  "authFactory",

  function ($scope, $location, $http, firebaseURL, authFactory) {

    // Default property values for keys bound to input fields
    $scope.newSkill = {
      title: "",
      skill: ""
    };

    // Function bound to the Add Song button in the view template
    $scope.addSkill = () => {

      let user = authFactory.getUser();
      let newSkill = {
        title: $scope.newSkill.title,
        skill: $scope.newSkill.skill,
        uid: user.uid
      };
      console.log("newSkill", newSkill);

      // POST the song to Firebase
      $http.post(`${firebaseURL}/copingSkills.json`,

        // Remember to stringify objects/arrays before
        // sending them to an API
        JSON.stringify(newSkill)

      // The $http.post() method returns a promise, so you can use then()
      ).then(
        () => $location.url("/mood/"),      // Handle resolve
        (response) => console.log(response)  // Handle reject
      );
    };
  }
]);

  
>>>>>>> c4ff8fa93cc7db98f3ba5da78f0e2d986857df61
