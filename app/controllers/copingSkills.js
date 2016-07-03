"use strict";

MarkApp.controller("copingSkills",
[
  "$scope",
  "$location",
  "$http",
  "firebaseURL",
  "authFactory",

  function ($scope, $location, $http, firebaseURL, authFactory) {

    // Default property values for keys bound to input fields
    $scope.newSkill = {
      title: "",
      skill: ""
    };

    // Function bound to the add button in the view template
    $scope.addSkill = () => {

      let user = authFactory.getUser();
      let newSkill = {
        title: $scope.newSkill.title,
        skill: $scope.newSkill.skill,
        uid: user.uid
      };
      console.log("newSkill", newSkill);

      // POST to Firebase
      $http.post(`${firebaseURL}/copingSkills.json`,

        // Stringified the JSON to send to the API
        JSON.stringify(newSkill)

      // The $http.post() method returns a promise, so you can use then()
      ).then(
        () => $location.url("/mood/"),      // Handle resolve
        (response) => console.log(response)  // Handle reject
      );
    };
  }
]);

