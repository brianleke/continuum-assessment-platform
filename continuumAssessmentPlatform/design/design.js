'use strict';

angular.module('continuumAssessmentPlatform.design', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/design', {
    templateUrl: 'design/design.html',
    controller: 'DesignCtrl'
  });
}])

.controller('DesignCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.expert1 = false;
    $scope.expert2 = false;
    $scope.expert3 = false;
    $scope.expert4 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.professional5 = false;
    $scope.master1 = false;
    $scope.master2 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var design = assessments['design'];
            $scope.traveller1 = design['traveller1'];
            $scope.traveller2 = design['traveller2'];
            $scope.traveller3 = design['traveller3'];
            $scope.artisan1 = design['artisan1'];
            $scope.artisan2 = design['artisan2'];
            $scope.expert1 = design['expert1'];
            $scope.expert2 = design['expert2'];
            $scope.expert3 = design['expert3'];
            $scope.expert4 = design['expert4'];
            $scope.professional1 = design['professional1'];
            $scope.professional2 = design['professional2'];
            $scope.professional3 = design['professional3'];
            $scope.professional4 = design['professional4'];
            $scope.professional5 = design['professional5'];
            $scope.master1 = design['master1'];
            $scope.master2 = design['master2'];
        }
    };

    $scope.saveAssessments = function(){
        $rootScope.assessments = {'design': {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'expert1': $scope.expert1,
            'expert2': $scope.expert2,
            'expert3': $scope.expert3,
            'expert4': $scope.expert4,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'professional5': $scope.professional5,
            'master1': $scope.master1,
            'master2': $scope.master2,
        }};
    }

}]);