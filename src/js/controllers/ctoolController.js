skeleton.controller('ctoolController', ["$scope", "$location", "$http", function($scope, $location, $http){  
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
  $scope.country = ['India', 'United States Of America', 'Russia', 'Germany', 'China'];

  $scope.technical.contacts = [
    {
      id: 100,
      contactName: 'xor',
      name: 'Xoriant', 
      email: 'email@xoriant.com',
      country: $scope.country[0],               
      mobilePhoneNumber: '12324564789',
      directPhoneNumber: '123456789'
    },
    {
      id: 101,
      contactName: 'CTS',
      name: 'Cognizant', 
      email: 'email@Cognizant.com',
      country: $scope.country[4],
      mobilePhoneNumber: '123456789',
      directPhoneNumber: '12345645'
    },
    {
      id: 102,
      contactName: 'TCS',
      name: 'Tata Consultancy Services', 
      email: 'email@tcs.com',
      country: $scope.country[2],
      mobilePhoneNumber: '1234567890',
      directPhoneNumber: '678967'
    },
    {
      id: 103,
      contactName: 'acc',
      name: 'Accenture', 
      email: 'email@Accenture.com',
      country: $scope.country[3],
      mobilePhoneNumber: '9876543211',
      directPhoneNumber: '8967890'
    },
    {
      id: 104,
      contactName: 'cyb',
      name: 'Cybage', 
      email: 'email@Cybage.com',
      country: $scope.country[5],
      mobilePhoneNumber: '98765437654',
      directPhoneNumber: '54411653'
    }
  ];

  $scope.existingAccounts = ['118118_Bulk_HTTP','118119_Bulk_HTTP','1181520_Bulk_HTTP','118121_Bulk_HTTP'];

  $scope.requesterName = 'Venkat';

  // Once the rest calls are set then we do not need this json 
  $scope.json = {
    requester       : $scope.requesterName,
    acctMgr         : $scope.commercial.users[0],
    company         : $scope.commercial.company[0],
    billingLocation : $scope.commercial.billingLocation[0],
    serviceLevel    : $scope.commercial.serviceLevel[0],
    trafficType     : $scope.commercial.trafficType[0],
    interfaceType   : $scope.account.interfaceType[0],
    techName        : null,
    existingCompany : "Xoriant sol.",
    contact         : $scope.technical.contacts[0],
    existingAccount : $scope.existingAccounts[0]
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

  $scope.getContactData = function(){
    return $http.get('/techContact/123')
    .then($scope.succesGetContactData)  
    .then($scope.errorContactData);
  };

  var newContactData = $scope.getContactData();

  $scope.succesGetContactData = function(data){
      console.log('data = ', data);
      return data;
  };

  $scope.errorContactData = function(data){
      console.log('data = ', data);
  };


  $scope.stringifyJson = function(data){
      var log = [];
      angular.forEach(data, function(value, key) {
      this.push(key + '=' + value);
      }, log);
      return log.join('&');
  };


  $scope.create = function(){
    console.log('json obtained - ', $scope.json);

    $scope.necessaryData = {};
    $scope.necessaryData.requester = $scope.json.requester; 
    $scope.necessaryData.acctMgr = $scope.json.acctMgr;
    $scope.necessaryData.company = $scope.json.company;
    $scope.necessaryData.billingLocation = $scope.json.billingLocation;
    $scope.necessaryData.trafficType = $scope.json.trafficType;
    $scope.necessaryData.interfaceType = $scope.json.interfaceType;
    $scope.necessaryData.techName = $scope.json.techName;

    // console.log('necessaryData ===== ', $scope.necessaryData);
    // http://localhost:8080/accounts
    var submit = {
            method: 'POST',
            url: 'http://localhost:8080/accounts',
            headers: {
                'Authorization': 'Basic ' + btoa('admin'+':'+'password'),
                'Content-type': 'application/json'
            },
            data: $scope.stringifyJson($scope.necessaryData)
        };

        $http(submit).then(function(successData){
            // post data success
            console.log('success data : ',successData);
            $location.path('/ctool/$scope.necessaryData/');              // navigate to ctool home page.
        }).then(function(errorData){
            console.log('error data : ', errorData);
            angular.element('#errorAlert').trigger('click');
        });


        $location.path('/ctool/necessaryData/');            
        
  };

}]);