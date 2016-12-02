var skeleton = angular.module("skeletonApp",['ngRoute']);

skeleton.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/shital/",{
    templateUrl: 'views/shital/index.html',
  }).
  when("/rohit/",{
    templateUrl: 'views/rohit/index.html',
  }).
  otherwise({
    redirectTo: '/rohit/'
  });
}]);