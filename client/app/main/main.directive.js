'use strict';

angular.module('djresumeApp')
  .directive('main', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the main directive');
      }
    };
  });