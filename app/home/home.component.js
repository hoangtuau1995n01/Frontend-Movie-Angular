'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.html',
    controller: ['$scope',
      function homeControler($scope) {
        // console.log("AAAAAAAAAAAAAAAAA");
       this.name = "AAAAAA";
      }
    ]
  });
