'use strict';

angular.module('djresumeApp')
  .directive('resume', function () {
    return {
      templateUrl: 'app/resume/resume.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });