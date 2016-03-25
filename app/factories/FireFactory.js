"use strict";

MarkApp.factory("FireFactory", ($q, $http, authFactory, firebaseURL) =>
   () =>
    $q((resolve, reject) => { 
      let user = authFactory.getUser();
      console.log("user.uid", user.uid);
        $http
        .get(`${firebaseURL}copingSkills.json`)
        .success(
          copeGroup => 
          	{resolve(copeGroup)
          		console.log("SUCCESS", copeGroup);},
          error => reject(error)
        );
      })
);