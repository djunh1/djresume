'use strict';

angular.module('djresumeApp')
  .directive('about', function () {
    return {
      templateUrl: 'app/about/about.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });