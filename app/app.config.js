'use strict';

angular.
  module('Movie').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/index', {
          template: '<home></home>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/featured_movies', {
          template: '<featured-movies></featured-movies>'
        }).
        otherwise('/index');
    }
  ]);
