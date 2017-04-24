console.log('landpage state')
app.config(function($stateProvider) {

	$stateProvider.state('home',{
    	url:'/home',
    	templateUrl:'/js/landing/landPage.html',
    	controller: 'landingController'
    	})
})
