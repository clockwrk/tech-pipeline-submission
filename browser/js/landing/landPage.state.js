console.log('landpage state')
app.config(function($stateProvider) {
    console.log('hi')
	$stateProvider.state('home',{
    	url:'/home',
    	templateUrl:'/js/landing/landPage.html',
    	controller: 'landingController'
    	})
    
    // $stateProvider.state('projects', {
    //     url: '/projects',
    //     templateUrl: '/js/projects/projects.html',
    //     controller: 'projectController',
    //     authenticate: false,
    //     resolve: {
    //         allProjects: function(projectFactory) {
    //             return projectFactory.getAllProjects();
    //         }
    //     }
    // })
})
