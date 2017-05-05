shoppingApp.directive('productCard', function() {
  return {
    restrict: 'E',
    scope: '=data',
    template:'<div  class="item-snapshot" ng-click="objClicked(item)">'+ 
            '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">{{item.id}}</div>'+
            '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">{{item.name}}</div>'+
            '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">{{item.price}}</div>'+
            '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">{{item.category}}</div></div>',
    
  };
});