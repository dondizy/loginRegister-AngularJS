
console.log('Login Controller Works')


myApp.controller('loginController', ['$scope', '$location', "$timeout","$stateParams", "$state", function($scope, data, $location, $timeout, $stateParams, $state){
    $scope.user = {};
    $scope.newUser = {};
    $scope.ifClick = false;
    $scope.ifLogin = false;

    const result = function() {
        alert('Login Successful!');
        //$location.path('/dashboard');
        $state.go('dashboard');
         
    }

    $scope.createUser = function(){
        console.log(`Username is ${$scope.newUser.username} and Password is ${$scope.newUser.password}`)
        console.log($scope.user.username);
        console.log(`User ${$scope.newUser.username}:${$scope.newUser.password} has been registered sucessfully!`);
        sessionStorage.setItem('username', $scope.newUser.username);
        sessionStorage.setItem('password', $scope.newUser.password);
        // location.replace("#/login");
        //$location.path('/login');
        $scope.tayoData =  {username: 'johnsnow',
                            password: 'test1234'        
                            }
                            $state.go('login', {tayoData:  $scope.tayoData});
        
    }

    $scope.validate = function(){
        $scope.userDetails = $stateParams.tayoData;
        console.log( $scope.userDetails);
        
        $scope.newUser.username = sessionStorage.getItem('username');
        $scope.newUser.password = sessionStorage.getItem('password');
        if ($scope.user.username == $scope.newUser.username && $scope.user.password == $scope.newUser.password){
            $scope.ifClick = true;
            $scope.ifLogin = true;
            $timeout(result, 3000);
        }
        else{
            alert('Invalid Username or Password');
            $scope.user.password = '';
        }
    }


    this.name = data;

}])

myApp.controller('registerController', ['$scope', '$location', function($scope, $location, data){
    console.log('registerController is working');

    this.value = data;
}])

myApp.factory('data', function(){
    var factory={};
    return factory;
})
