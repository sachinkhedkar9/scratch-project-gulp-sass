skeleton.directive('commercialInformation', function() {
  return {
    templateUrl: '../views/shital/commercialInformation.html',
    link: function(scope, ele, attrs){
      scope.flag = false;
    }
  };
});