'use strict';

angular.module('djresumeApp')
  .controller('BlogCtrl', function ($scope, $routeParams, $location, Blogs, Auth) {
  	//$scope.authentication=Authentication;

     $scope.isAdmin = Auth.isAdmin;

    $scope.create=function(){
      var blog= new Blogs({
        title:this.title,
        content:this.content
      });

      blog.$save(function(response) {
        $location.path('blogs/'+response._id);
      }, function(errorResponse){
          $scope.error=errorResponse.data.message;

      });
    };
    $scope.find=function(){
      $scope.blogs=Blogs.query();
    };

    $scope.findOne=function(){
      $scope.blog=Blogs.get({
        blogId:$routeParams.blogId
      });
    };

    $scope.update=function(){
      $scope.blog.$update(function(){
        $location.path('blogs/'+$scope.blog._id);
      }, function(errorResponse){
        $scope.error=errorResponse.data.message;

      });
    };

    $scope.delete=function(blog){
      if(blog){
        blog.$remove(function() {
          for(var i in $scope.blog){
            if($scope.blogs[i] === blog){
              $scope.blogs.splice(i,1);
            }
          }
        });
      } else {
        $scope.blog.$remove(function(){
          $location.path('blogs');
        });
      }
    };


  });





