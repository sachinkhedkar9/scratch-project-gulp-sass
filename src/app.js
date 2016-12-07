var skeleton = angular.module("skeletonApp",['ngRoute']);

skeleton.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/ctool/",{
    templateUrl: 'views/ctool/index.html'
  }).
  when("/grid-page/",{
    templateUrl: 'views/grid-page/index.html',
  }).
  otherwise({
    redirectTo: '/login/',
    templateUrl: 'views/essential/login.html',
    controller: 'loginController'
  });
}]);