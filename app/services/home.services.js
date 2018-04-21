'use strict';

angular.
  module('services').
  factory('HomeServices', ['$resource',
    function($resource) {
       
       var services = $resource('',{},{
        "GetMovie":{
          url: 'https://api.themoviedb.org/3/movie/popular?api_key=8ad75192bf5fe5a160ca134378a0d631&language=en-US&page=1',
          method: 'GET',
          isArray: false
        }
      } 
    );
    return services;
  }
  ]);
//   factory('Phone', ['$resource',
//   function($resource) {
//     return $resource('phones/:phoneId.json', {}, {
//       query: {
//         method: 'GET',
//         params: {phoneId: 'phones'},
//         isArray: true
//       }
//     });
//   }
// ]);

