skeleton.controller('loginController', ["$scope", "$location", function($scope, $location){
    $scope.userLogin = {
        username: "sachin",
        password: "sachin123"
    };

    $scope.login = function(){
        console.log('login obj - ', $scope.loginUser);
        console.log('user obj - ', $scope.userLogin);
        if($scope.userLogin.username === $scope.loginUser.username && $scope.userLogin.password === $scope.loginUser.password){
            console.log("logging in", $location.path());
            $location.path('/ctool/');
        }
    };
}]);