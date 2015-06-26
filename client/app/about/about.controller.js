'use strict';

angular.module('djresumeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.message = 'Hello';

    // Carousel controller
 
  $scope.myInterval = 5000;
  $scope.slides = [{
    'image':'assets/images/germany.jpg',
    'text': ''
 },  {
    'image':'assets/images/race.jpg',
    'text': ''
  },{
    'image':'assets/images/haufbrau.jpg',
    'text':''
  }];

  });
