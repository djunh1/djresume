'use strict';

angular.module('djresumeApp')
  .controller('ProjectsCtrl', function ($anchorScroll, $location, $scope) {
    
    $scope.tab=1;
    $scope.projectNumber=1;

    $scope.selectTab= function(setTab){
    	$scope.tab=setTab;
    };

    $scope.isSelected=function(checkTab){
    	return $scope.tab === checkTab;
    };

// for ng animate

this.toggle = true;

// Carousel controller
 
  $scope.myInterval = 3000;
  $scope.slides = [{
    'image':'assets/images/projects.jpg',
    'text': 'Welcome to my professional projects'
 },  {
    'image':'assets/images/runoutDML.jpg',
    'text': 'Smart Machining arcitecture'
  },{
    'image':'assets/images/algaexom.jpg',
    'text':'Advanced Biofuels'
  },{
    'image':'assets/images/labview.png',
    'text':'Process Improvement'
  }];

 

// Masters thesis data.  Consider relocating in time
    $scope.runoutValues = [{
      'measuredR' : 12.7,
      'predictedR': 11.3,
      'error' : 11
    },{
      'measuredR' : 18.3,
      'predictedR': 13,
      'error' : 28
    },{
      'measuredR' : 6.35,
      'predictedR': 6.85,
      'error' : 7
    },{
      'measuredR' : 27.9,
      'predictedR': 17,
      'error' : 36
    },{
      'measuredR' : 12.7,
      'predictedR': 12.9,
      'error' : 1.5
    },{
      'measuredR' : 32.36,
      'predictedR': 48.2,
      'error' : 49

    }];

// JAS algae growth data

$scope.algaeValues = [{
      'algae' : 'Scenedesmus obliquus ',
      'growth': 140,
      'nitrates' : 40
    },{
      'algae' : 'Scenedesmus dimorphus ',
      'growth': 119,
      'nitrates' : 40
    },{
      'algae' : 'Neochloris oleoabundans ',
      'growth': 30,
      'nitrates' : 53
    },{
      'algae' : 'Chlamydomonas pseudagloe  ',
      'growth': 11.3,
      'nitrates' : 167
    }];


    $scope.engProjects = [{
      'id': 1,
      'title': 'Masters thesis',
      'location': 'University of New Hampshire',
      'descriptionBrief': 'Utilized feed force and acoustic data to determine geometric eccentricities in CNC and milling cutting tools.',
      'pictureUrl': 'assets/images/runout.jpg'
      }, {
      'id': 2,
      'title': 'Algae Biofuels',
      'location': 'Blacksburg Virginia',
      'descriptionBrief': 'Performed a study in cooperation with Virginia tech to determine the feasibility of algae in wastewater applications',
      'pictureUrl': 'assets/images/algae.jpg',
      'link' : 'http://www.facebook.com'
      
    },{
      'id': 3,
      'title': 'LabVIEW Project',
      'location': 'Waters Corporation',
      'descriptionBrief': 'Designed benchtop sensor calibration scheme utilizing LabVIEW software',
      'pictureUrl': 'assets/images/labview.jpg',
      'link' : 'http://www.github.com'
             
    }];

// use to link to specific content Later. 
	$scope.gotoAnchor = function(x) {
        var newHash = 'anchor' + x;
        if ($location.hash() !== newHash) {
          $location.hash('anchor' + x);
        } else {
          $anchorScroll();
        }
      };


  });
