angular
	.module('app')
	.controller('homeCtrl',['$scope', function($scope){
		$scope.title='home';
		$scope.sliders=['http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg','https://tse4.mm.bing.net/th?id=ORT.TH_470633631&pid=1.12&eid=G.470633631'];
		
	}]);



	
angular
	.module('app')
	.controller('apparelCtrl',['$scope','ItemFactory','$location', function($scope,ItemFactory,$location){
			$scope.title='apparel';
			ItemFactory.get().then(function(data) {
            	$scope.apparelItems = data;
        	});
        	// $scope.apparelItems=ItemFactory.get();
   //      	$location.path();
			// $scope.current=$location.path();
			// console.log($scope.current);
		}]);
angular
    .module('app')
    .controller('singleApparelCtrl',['$scope','$stateParams','ItemFactory','$location',function($scope,$stateParams,ItemFactory,$location)
        {
            $scope.id=$stateParams.id;
            ItemFactory.get().then(function(data) {
                var singleApparel = data.filter(function(entry){
                    return entry.id === $scope.id;
                })[0];
                // console.log(singleApparel);
                $scope.singleApparel= singleApparel;
                console.log($scope.singleApparel);
                $location.path();
                $scope.current=$location.absUrl();
            });
        }
    ]);
angular
	.module('app')
	.controller('artworksCtrl',['$scope','ItemFactory', function($scope,ItemFactory){
			$scope.title='artwokrs';
			ItemFactory.get().then(function(data) {
            	$scope.artworksItems = data;
        	});
        	
        	$scope.remove= function(id){
              $scope.artworksItems.splice($scope.artworksItems.findIndex(el => el.id === id), 1);
            }
        	// $scope.artworksItems=ItemFactory.get();
        	// console.log($scope.artworksItems);
		}]);
angular
    .module('app')
    .controller('singleArtworksCtrl',['$scope','$stateParams','ItemFactory','$location', function($scope,$stateParams,ItemFactory,$location)
        {
            $scope.id=$stateParams.id;
            ItemFactory.get().then(function(data) {
                var singleArtworks = data.filter(function(entry){
                    return entry.id === $scope.id;
                })[0];
                // console.log(singleArtworks);
                $scope.singleArtworks= singleArtworks;
                $location.path();
                $scope.current=$location.absUrl();
            });
        }
    ]);
angular
	.module('app')
	.controller('commissionsArtworkCtrl',['$scope','commission', function($scope,commission)
		{
			$scope.title='Commissions Artworks';
			$scope.commisionArtworks=commission;
		}
	])
angular
	.module('app')
	.controller('contactCtrl',['$scope','Contacts', function($scope,Contacts)
		{
			$scope.title='Contact Us';
			$scope.titleh3='Our Workshop joins with Rakki Garage';
			Contacts.get().then(function(data) {
            	$scope.contacts=data;
        	});
		}
	])