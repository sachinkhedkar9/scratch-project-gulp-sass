skeleton.controller('ctoolController', ["$scope", "$location", function($scope, $location){  
  $scope.getTables = "hideTable";    
  $scope.showNextFlag = false;

  $scope.users = [
    {
      name:'Sachin',
       id:1
    },
    {
      name:'Jay', 
      id:2
    },
    {
      name:'Rohit', 
      id:3
    },
    {
      name:'Sathish', 
      id:4
    }
  ];

  $scope.opt = $scope.users[0];

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

  $scope.logout = function(){
    console.log('logging out');
    $location.path('/login/');
  };

}]);