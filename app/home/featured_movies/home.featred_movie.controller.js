'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('home.featuredMovie').
  component('featuredMovies', {
    templateUrl: 'home/featured_movies/featured_movies.html',
    controller: ['HomeServices',
      function PhoneDetailController(HomeServices) {
        var comp = this;
        // HomeServices.query.$promise.then(function(res){
        //     console.log(res)
        // })
        console.log("sadsad")
        
        HomeServices.GetMovie().$promise.then(function(res){
           comp.listMovie = res;
           console.log(comp.listMovie)
        });
      }
    ]
  });
