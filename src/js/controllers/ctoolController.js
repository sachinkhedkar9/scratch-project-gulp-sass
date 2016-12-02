skeleton.controller('ctoolController', ["$scope", function($scope){  
  $scope.getTables = "hideTable";    
  $scope.showNextFlag = false;

  $scope.showNextTables = function(flag){
    console.log('flag = ', flag);
    $scope.showNextFlag = !$scope.showNextFlag;
    if(flag){
      $scope.showTables();
    }else{
      $scope.hideTables();
    }
  };

  $scope.showTables = function(){
    $scope.getTables = "showTable";
  };

  $scope.hideTables = function(){ 
    $scope.getTables = "hideTable";    
  };

}]);