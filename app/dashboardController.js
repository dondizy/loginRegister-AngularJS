myApp.controller('dashboardController', ['$scope', '$location', 'Data', function($scope, $location, Data){
    console.log('dashboardController is working');
    $scope.data = Data;
    console.log(data);
}])

