'use strict';

angular.module('djresumeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });
