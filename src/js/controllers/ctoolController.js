skeleton.controller('ctoolController', ["$scope", "$location", function($scope, $location){  
  $scope.getTables = "hideTable";    
  $scope.showNextFlag = false;

  $scope.commercial = {};
  $scope.commercial.users = [
    {
      name:'Adam Gilli',
       id:1
    },
    {
      name:'Ricky Punter', 
      id:2
    },
    {
      name:'Optimus Prime', 
      id:3
    },
    {
      name:'Peter Parker', 
      id:4
    }
  ];
  
  $scope.commercial.company = ['10 GRAD(37669)', '100 BEST(39551)', '10DUKE (38660)', '118811 (39258)'];
  $scope.commercial.billingLocation = ["Mobile 365 Inc.", "Mobile 365 South Africa.", "Mobileway Australia", "Mobileway China", "Mobileway India" ];
  $scope.commercial.serviceLevel = ['Standard', 'Premium'];
  $scope.commercial.trafficType = ['General','Campaign','Low Latency','Time Sensitive'];
  $scope.commercial.interfaceType = ['HTTP', 'SMPP', 'SMTP'];

  // Once the rest calls are set then we do not need this json 
  $scope.json = {
    requester       : "Venkat",
    acctMgr         : $scope.commercial.users[0],
    company         : $scope.commercial.company[0],
    billingLocation : $scope.commercial.billingLocation[0],
    serviceLevel    : $scope.commercial.serviceLevel[0],
    trafficType     : $scope.commercial.trafficType[0],
    interfaceType   : $scope.commercial.interfaceType[0],
    techName        : "Test Account",
    existingCompany : "Xoriant sol."
  };

  // $scope.opt = $scope.users[0];

  $scope.showNextTables = function(flag){
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

  $scope.logout = function(){
    console.log('logging out');
    $location.path('/login/');
  };

}]);