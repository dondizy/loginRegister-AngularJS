myApp.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider){
    
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
        url: '/register/{tayoData:json}',
        templateUrl: 'template/register.html',
        controller: 'loginController'
    });
    
     $urlRouterProvider.otherwise('regsiter');
}]);
