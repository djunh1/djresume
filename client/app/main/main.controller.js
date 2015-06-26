'use strict';


angular.module('djresumeApp')
  .controller('MainCtrl', function ($scope, $http, socket, $anchorScroll) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
 


  $scope.hoverIn = function(){
    this.hoverEdit = true;
};

  $scope.hoverOut = function(){
    this.hoverEdit = false;
};



  });

