angular
	.module('app',['ui.router','720kb.socialshare','ncy-angular-breadcrumb','app.directives.gridViewArtworks','app.directives.gridViewApparel','app.directives.gridViewCommission'])
	.config(['$urlRouterProvider','$stateProvider','$locationProvider', function($urlRouterProvider,$stateProvider,$locationProvider)
		{
			$locationProvider.hashPrefix('');
			// $locationProvider.html5Mode({
			//   enabled: true,
			//   requireBase: false
			// });
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home',{
					url:'/',
					templateUrl:'templates/page/home.html',
					controller: 'homeCtrl',
					data : { pageTitle: 'Home' },
					// ncyBreadcrumb: {
			  //         skip: true
			  //       }
				})
				.state('apparel',{
					url:'/Apparel',
					templateUrl:'templates/page/apparel.html',
					controller: 'apparelCtrl',
					data : { pageTitle: 'Apparel' },
					ncyBreadcrumb: {
				        label: 'Apparel',
				        parent: 'home'
			        }
				})
				.state('singleApparel',{
					url:'/Apparel/{id:int}',
					templateUrl:'templates/page/singleApparel.html',
					controller: 'singleApparelCtrl',
					data : { pageTitle: 'singleApparel' },
					ncyBreadcrumb: {
				        label: '{{singleApparel.name}}',
				        parent: 'apparel'
			        }

				})
				.state('artworks',{
					url:'/Artworks',
					templateUrl:'templates/page/artworks.html',
					controller: 'artworksCtrl',
					data : { pageTitle: 'Artwork' },
					ncyBreadcrumb: {
				        label: 'Artworks',
				        parent: 'home'
			        }
				})
				.state('singleArtworks',{
					url:'/Artworks/{id:int}',
					templateUrl:'templates/page/singleArtworks.html',
					controller: 'singleArtworksCtrl',
					data : { pageTitle: 'singleArtworks' },
					ncyBreadcrumb: {
				        label: '{{singleArtworks.name}}',
				        parent: 'artworks'
			        }
				})
				.state('commissionArtworks',{
					url:'/Commission-Artworks',
					templateUrl:'templates/page/commissionsArtwork.html',
					controller: 'commissionsArtworkCtrl',
					data : { pageTitle: 'Commission-Artworks' },
					ncyBreadcrumb: {
				        label: 'Commission - Artworks',
				        
			        },
					resolve: {
						commission: ['$http', function($http){
							return $http.get('/api/commision.json').then(function(response){
								return response.data;
							})
						}]
					}
				})
				.state('contact',{
					url:'/Contact',
					templateUrl:'templates/page/contact.html',
					controller: 'contactCtrl',
					data : { pageTitle: 'Contact' }
				})
		}
	])
	.run([ '$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	  $rootScope.$state = $state;
	  $rootScope.$stateParams = $stateParams;
	}])

