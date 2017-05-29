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