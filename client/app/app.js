'use strict';

angular.module('djresumeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ngAnimate',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      })
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/resume', {
        templateUrl: 'app/resume/resume.html',
        controller: 'ResumeCtrl'
      })
      .when('/projects', {
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/about',{
        templateUrl:'app/about/about.html',
        controller:'AboutCtrl'
      })
      .when('/blog',{
        templateUrl: 'app/blog/blog.html',
        controller:'BlogCtrl'
      })
      .when('/blog/create',{
        templateUrl:'app/blog/blog.create.html',
        controller:'AboutCtrl'
      })
      .when('/blog/:blogId',{
        templateUrl:'app/blog/blog.view.html',
        controller:'AboutCtrl'
      })
      .when('/blog/:blogId/edit',{
        templateUrl:'app/blog/blog.edit.html',
        controller:'AboutCtrl'
      });

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });