var skeleton = angular.module("skeletonApp",['ngRoute']);

skeleton.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/productList/",{
    templateUrl: 'views/product/list.html'
  }).
  when("/product/",{
    templateUrl: 'views/product/item.html',
  }).
  otherwise({
    redirectTo: '/login/',
    templateUrl: 'views/essential/login.html',
    controller: 'loginController'
  });
}]);