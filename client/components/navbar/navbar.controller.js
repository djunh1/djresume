'use strict';

angular.module('djresumeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Resume/CV',
      'link': '/resume'
    },
    {
      'title': 'Projects',
      'link': '/projects'
    },
    {
      'title': 'About',
      'link': '/about'
    },
    {
      'title': 'Blog',
      'link': '/blog'
    }


    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });