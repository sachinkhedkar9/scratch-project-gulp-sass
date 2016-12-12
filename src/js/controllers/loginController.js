skeleton.controller('loginController', ["$scope", "$location", "$http", function($scope, $location, $http){
    // $scope.userLogin = {
    //     username: "sachin",
    //     password: "sachin123"
    // };

    // $scope.login = function(){
    //     console.log('login obj - ', $scope.loginUser);
    //     console.log('user obj - ', $scope.userLogin);
    //     if($scope.userLogin.username === $scope.loginUser.username && $scope.userLogin.password === $scope.loginUser.password){
    //         console.log("logging in", $location.path());
    //         // angular.element('#errorAlert').trigger('click');
    //         // var alert = $('#successAlert');
    //         // alert.modal('show');
    //         $scope.navigateToApp();
    //     }
    // };

    // $scope.navigateToApp = function(){
    //     $location.path('/ctool/');        
    // };   


    $scope.stringifyJson = function(data){
        var log = [];
        angular.forEach(data, function(value, key) {
        this.push(key + '=' + value);
        }, log);
        return log.join('&');
    };

    $scope.login = function(){
        var login = {
            method: 'POST',
            url: '/login',
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: $scope.stringifyJson($scope.loginUser)
        };

        $http(login).then(function(successData){
            // post data success
            console.log('success data : ',successData);
            $location.path('/ctool/');              // navigate to ctool home page.
        }).then(function(errorData){
            console.log('error data : ', errorData);
            angular.element('#errorAlert').trigger('click');
        });
    };
}]);