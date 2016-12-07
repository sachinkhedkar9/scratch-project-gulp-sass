var skeleton = angular.module("skeletonApp",['ngRoute']);

skeleton.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/ctool/",{
    templateUrl: 'views/ctool/index.html'
  }).
  when("/rohit/",{
    templateUrl: 'views/rohit/index.html',
  }).
  otherwise({
    redirectTo: '/login/',
    templateUrl: 'views/essential/login.html',
    controller: 'loginController'
  });
}]);