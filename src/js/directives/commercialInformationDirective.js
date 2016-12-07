skeleton.directive('commercialInformation', function() {
  return {
    restrict: 'E',
    templateUrl: '../views/ctool/commercialInformation.html',
    scope: "=",
    link: function(scope, ele, attrs){
      // console.log('hello scope = ', scope);
    }
  };
});