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