'use strict';

angular.module('djresumeApp')
  .controller('ResumeCtrl', function ($scope) {
  	// Accordian 
    


    // Front end data to populate education and resume
    // Move this to back end once I am good enough
    $scope.education = [{
      'college': 'University of New Hampshire',
      'major': 'Bachelors of Science, Mechanical Engineering',
      'gpa': 3.37,
      'years': [1999,2003]
    },
    {
      'college': 'University of New Hampshire',
      'major': 'Masters of Science, Mechanical Engineering',
      'gpa': 3.49,
      'years': [2003,2006]
    }

    ];

    $scope.work = [{
      'company': 'NAVSEA 08 , Portsmouth Naval Shipyard',
      'link': 'http://www.navsea.navy.mil/default.aspx',
      'title': 'Nuclear Engineer',
      'location': 'Kittery, Maine',
      'start': 'July, 2011' ,
      'end': 'Present ',
      'about': 'Portsmouth Naval Shipyard\'s primary mission is the overhaul, repair and modernization of Los Angeles-class submarines. Portsmouth Naval Shipyard provides the U.S. Navy\'s nuclear powered submarine fleet with quality overhaul work in a safe, timely and affordable manner.',
      'duties': [{
      	'duty': 'Completed required nuclear systems coursework and passed comprehensive NAVSEA administered examination.  Focus areas included reactor systems, reactor dynamics, operating procedures and casualty response. '
      }, {
      	'duty':'Performed daily briefs, enforced technical requirements, directed evolutions of reactor plant testing under qualified supervision. '
      },{
      	'duty':'Served as team leader in executing performance evaluation of nuclear work on 688 class submarines.  '
      },{
        'duty':'Organized team meetings, evaluated performance of team members, conducted management presentations of major issues and concerns within the organization.'
      }]
      
    },{
    'company': 'GTAT',
      'title': 'Engineer',
      'link': 'http://www.gtat.com/',
      'location': 'Kittery, Maine',
      'start': 'Feb, 2011' ,
      'end': 'June, 2011 ',
      'about': 'GTAT is  a diversified technology company with innovative crystal growth equipment and solutions for the global solar, LED and electronics industries',
      'duties': [{
      	'duty': 'Performed various administration duties for GT Advanced Technologies.  Once contracted duties were complete ahead of schedule, I utilized the rest of my contract period to assist with the second sourcing and pertinent testing of the companies product ; the Sapphire furnaces.'
      },{
      	'duty':'Responsibilities included drafting and executing test plans, analyzing test data, and making recommendations to management pertaining to material selections.'
      }]

    },{
    'company': 'JAS Energy',
      'title': 'Company Owner',
      'link': '',
      'location': 'Blacksburg, Virginia',
      'start': 'September, 2009' ,
      'end': 'July, 2010 ',
      'about': 'JAS energy was incorporated in Virginia and sought to bring Algae Derived biofuels to the marketplace.',
      'duties': [{
      	'duty': 'Executed duties of a principal owner of JAS Energy.  Primary responsibilities included developing JAS’s business strategy, client meetings, infrastructure development, design efforts for algae demonstration facility, algae research, nurturing university relationships and communicating with potential vendors.  Helped raise $100,000  of seed funding for JAS Energy. Performed a six month feasibility study on a government owned facility.  Investigated the effect of microalgae within waste streams on nutrient and carbon dioxide sequestration as well as physiological traits of algae including colony growth rates and lipid production.   Acquired hands on skills within a microbiology laboratory setting including experience with Gas Chromatography (GC) fatty acid analysis, algal cell cultivation, and quantitative chemical analysis.'
      },{
      	'duty':'Authored proposals for Phase 1 Small Business Innovation and Research (SBIR) programs offered by the National Science Foundation (NSF), Environmental Protection Agency (EPA), and Department of Energy (DoE) federal programs. '
      }]

    },{
    'company': 'GOSS International',
      'title': 'Design Engineer',
      'link': 'http://www.gossinternational.com/',
      'location': 'Durham, New Hampshire',
      'start': 'September, 2008' ,
      'end': 'May, 2009 ',
      'about': 'GOSS supplies presses and finishing systems – including the most automated and productive web offset presses in the world – for magazine, newspaper, packaging, catalog, direct mail and other printing applications.',
      'duties': [{
      	'duty': 'Provided design and detailing assistance for commercial scale printing press systems including paper delivery systems, cam systems, grippers, pulleys, and  rolling units.  Utilized industry standard Computer Aided Design (CAD) software while applying engineering principals and practices to the design process including designing components for minimal cost, applying appropriate geometric dimensioning and tolerance (GD&T) to detail work, and tolerance analysis of existing designs. '
      },{
      	'duty':'Assisted in design, detailing and manufacturing of a test bed for component testing.  Developed and executed test plan for life testing on printing press tapes, cantilevered/non-cantilevered roller components, and bearings.   Findings facilitated new understandings of multiple processes commonly employed in operations including mean time between failures (MBTF) of printing press tapes and transient temperature profiles of all high speed components.'
      }]

    },
    {
    'company': 'Waters Corporation',
      'title': 'Reliability Engineer',
      'link': 'http://www.waters.com/waters/home.htm',
      'location': 'Milford, Massachusetts',
      'start': 'September, 2006' ,
      'end': 'September, 2008 ',
      'about': 'Waters Corp., a publicly traded corporation headquartered in Milford, Massachusetts, holds worldwide leading positions in complementary analytical technologies - liquid chromatography, mass spectrometry, rheometry and microcalorimetry.  ',
      'duties': [{
      	'duty': 'Performed duties of support engineer for all product design changes and extensions on liquid chromatography (LC) detectors.  Responsible for conducting preliminary failure mode and effect analysis (FMEA) for LC systems, writing test plans, constructing test beds, executing life testing (HALT/HASS) and submitting reports for project team review.  Role required coordinating risk analysis, data analysis, and failure analysis for existing and unreleased LC detectors.  Product improvements were advocated through presentation of results from data and fault analysis.'
      },{
      	'duty':'Acted as point of contact within product interdisciplinary team on behalf of the reliability department on multiple projects including:  visible/ultra-violet detector, photodiode array detector (PDA), ACUITY fluorescence (FLR) detector, and mass spectrometer (MS) high pressure valve system.   Participated in preliminary design reviews, and product release meetings as required and managed reliability technicians and Co-op Students for each project.'
      }]

    }
   


    ];

  });




