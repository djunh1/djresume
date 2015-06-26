'use strict';

angular.module('djresumeApp')
  .directive('projects', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the projects directive');
      }
    }
   .directive("mySlide", function() {
   	return{
   		restrict: "A",
   		link: function(scope,element,attrs){
   			scope.$watch(attrs.mySlide, function(newValue, oldValue){
   				if(newValue){
   					return element.slideDown();
   				} else{
   					return element.slideUp();
   				}
   			});
   		}
   	};
   });

  });