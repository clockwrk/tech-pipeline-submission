let app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	    $urlRouterProvider.otherwise('/home');
console.log('here');

}])

