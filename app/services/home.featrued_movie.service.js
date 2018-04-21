'use strict';

angular.
  module('services').
  factory('home.featrued_movie.service', ['$resource',
    function($resource) {
      return $resource('', {}, {
        query: {  
          url: 'https://api.themoviedb.org/3/movie/popular?api_key=8ad75192bf5fe5a160ca134378a0d631&language=en-US&page=1',
          method: 'GET',
          isArray: false
        }
      });
    }
  ]);
