shoppingApp.controller('productListController', ["$scope", "$location", "$http", function($scope, $location, $http){
    $scope.category = ['A', 'B', 'C'];
    
    $scope.products = [
        {
            name: 'abcd',
            id: 1,
            price: 120,
            category: $scope.category[0]
        },{
            name: 'abcde',
            id: 2,
            price: 20,
            category: $scope.category[1]
        },{
            name: 'abcdf',
            id: 3,
            price: 10,
            category: $scope.category[2]
        },{
            name: 'abcdg',
            id: 4,
            price: 12,
            category: $scope.category[0]
        }
    ];

    console.log('products --- ', $scope.products);

    $scope.objClicked = function(item){
        console.log('item clicked on -- ', item);
        $location.path('/product/id='+item.id);
    };
}]);