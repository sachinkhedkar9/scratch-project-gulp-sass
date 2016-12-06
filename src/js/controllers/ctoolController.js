skeleton.controller('ctoolController', ["$scope", function($scope){  
  $scope.getTables = "hideTable";    
  $scope.showNextFlag = false;

  $scope.users = [
    {
      name:'Sachin',
       id:1
    },
    {
      name:'Jay', 
      id:3
    },
    {
      name:'Rohit', 
      id:5
    },
    {
      name:'Sathish', 
      id:7
    }
  ];

  $scope.selectedUser = 1;

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
    $scope.replaceEditablesWithStrings();
  };

  $scope.hideTables = function(){ 
    $scope.getTables = "hideTable";
    $scope.replaceStringsWithEditables();        
  };

  $scope.replaceEditablesWithStrings = function(){
    console.log('in replaceEditablesWithStrings');
    
  };

  $scope.replaceStringsWithEditables = function(){
    console.log('in replaceStringsWithEditables');
  };


}]);