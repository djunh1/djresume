'use strict';

describe('Directive: blog', function () {

  // load the directive's module and view
  beforeEach(module('djresumeApp'));
  beforeEach(module('app/blog/blog.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<blog></blog>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the blog directive');
  }));
});