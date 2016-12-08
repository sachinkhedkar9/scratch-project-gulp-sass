skeleton.controller('loginController', ["$scope", "$location", "$http", function($scope, $location){
    $scope.userLogin = {
        username: "sachin",
        password: "sachin123"
    };

    $scope.login = function(){
        console.log('login obj - ', $scope.loginUser);
        console.log('user obj - ', $scope.userLogin);
        if($scope.userLogin.username === $scope.loginUser.username && $scope.userLogin.password === $scope.loginUser.password){
            console.log("logging in", $location.path());
            // angular.element('#errorAlert').trigger('click');
            var alert = $('#successAlert');
            alert.modal('show');
        }
    };

    $scope.navigateToApp = function(){
        $location.path('/ctool/');        
    };

    // $scope.login = function(){
    //     var login = {
    //         method: 'POST',
    //         url: '',
    //         headers: {
    //             'Content-Type': "application/json"
    //         },
    //         data: $scope.loginUser
    //     }

    //     $http(login).then(function(successData){
    //         // post data success
    //         console.log('success data : ',successData);
    //         $location.path('/ctool/');              // navigate to ctool home page.
    //     }).then(function(errorData){
    //         console.log('error data : ', errorData);
    //         angular.element('#errorAlert').trigger('click');
    //     });
    // };
}]);