'use strict';

describe('Service: resume', function () {

  // load the service's module
  beforeEach(module('djresumeApp'));

  // instantiate service
  var resume;
  beforeEach(inject(function (_resume_) {
    resume = _resume_;
  }));

  it('should do something', function () {
    expect(!!resume).toBe(true);
  });

});
