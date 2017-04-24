let app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	    $urlRouterProvider.otherwise('/home');
console.log('here');

}])

//
// app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
//     $locationProvider.html5Mode({
//         enabled: true,
//         requireBase: false
//     });
//     $urlRouterProvider.otherwise("/home");

//     $stateProvider
//     	.state('home', {
//     		url:'/home',
//     		views:{
//     			'@':{
//     				templateUrl: '/js/landing/landPage.html'
//     			}
//     		}
//     	})


// }]);