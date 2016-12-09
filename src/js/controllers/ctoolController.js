skeleton.controller('ctoolController', ["$scope", "$location", function($scope, $location){  
  $scope.getTables = "hideTable";    
  $scope.showNextFlag = false;

  $scope.commercial = {};
  $scope.account = {};
  $scope.technical = {};
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
  $scope.account.interfaceType = ['HTTP', 'SMPP', 'SMTP'];
  $scope.country = [
    {
      code: 1,
      name: 'India'
    },
    {
      code: 2,
      name: 'United States Of America'
    },
    {
      code: 3,
      name: 'Russia'
    },
    {
      code: 4,
      name: 'Germany'
    },
    {
      code: 5,
      name: 'China'
    }
  ];

  $scope.technical.contacts = [
    {
      id: 100,
      contactName: 'xor',
      name: 'Xoriant', 
      email: 'email@xoriant.com',
      country: {
                  code: 1,
                  name: 'India'
               },
      mobile: '12324564789',
      directMobile: '123456789'
    },
    {
      id: 101,
      contactName: 'CTS',
      name: 'Cognizant', 
      email: 'email@Cognizant.com',
      country: '',
      mobile: '123456789',
      directMobile: '12345645'
    },
    {
      id: 102,
      contactName: 'TCS',
      name: 'Tata Consultancy Services', 
      email: 'email@tcs.com',
      country: '',
      mobile: '1234567890',
      directMobile: '678967'
    },
    {
      id: 103,
      contactName: 'acc',
      name: 'Accenture', 
      email: 'email@Accenture.com',
      country: '',
      mobile: '9876543211',
      directMobile: '8967890'
    },
    {
      id: 104,
      contactName: 'cyb',
      name: 'Cybage', 
      email: 'email@Cybage.com',
      country: '',
      mobile: '98765437654',
      directMobile: '54411653'
    }
  ];

  $scope.existingAccounts = ['HDFC','HSBC','Bank Of America','Bank Of China'];


  // Once the rest calls are set then we do not need this json 
  $scope.json = {
    requester       : "Venkat",
    acctMgr         : $scope.commercial.users[0],
    company         : $scope.commercial.company[0],
    billingLocation : $scope.commercial.billingLocation[0],
    serviceLevel    : $scope.commercial.serviceLevel[0],
    trafficType     : $scope.commercial.trafficType[0],
    interfaceType   : $scope.account.interfaceType[0],
    technicalName   : "",
    existingCompany : "Xoriant sol.",
    contact         : $scope.technical.contacts[0]
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

  $scope.updateTechnicalDetails = function(){
    console.log('ng-model - ', $scope.json.contact);
  };

  $scope.create = function(){
    console.log('json obtained - ', $scope.json);
  };

}]);