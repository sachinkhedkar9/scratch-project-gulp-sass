var shoppingApp = angular.module("shoppingApp",['ngRoute']);

shoppingApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/productList/",{
    templateUrl: 'views/product/list.html'
  }).
  when("/product/id=:id",{
    templateUrl: 'views/product/item.html',
    controller: 'itemController'
  }).
  otherwise({
    redirectTo: '/login/',
    templateUrl: 'views/essential/login.html',
    controller: 'loginController'
  });
}]);