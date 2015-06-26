'use strict';

angular.module('djresumeApp')
.factory('Blogs' , function ($resource){
  	return $resource('api/blogs/:blogId',{
  		blogId: '@_id'
  	}, {
  		update: {
  			method: 'PUT'
  		}
  	});
  });

//.service('blog', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  //})