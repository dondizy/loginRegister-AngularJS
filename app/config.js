myApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
    
    $locationProvider.hashPrefix('');
    
    $stateProvider
    .state('landing',{
        url: '',
        templateUrl: 'template/register.html',
        controller: 'loginController',
        // redirectTo: 'template/home.html'
    })
    .state('dashboard',{
        url: '/dashboard',
        templateUrl: 'template/dashboard.html',
        controller: 'dashboardController',
        // redirectTo: 'template/home.html'
    })
    .state('login',{
        url: '/login',
        templateUrl: 'template/login.html',
        controller: 'loginController'
    })
    .state('regsiter',{
        url: '/register',
        templateUrl: 'template/register.html',
        controller: 'loginController'
    })
}]);