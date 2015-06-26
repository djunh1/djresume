'use strict';

angular.module('djresumeApp')
  .directive('blog', function () {
    return {
      templateUrl: 'app/blog/blog.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });