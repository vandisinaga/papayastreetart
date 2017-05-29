angular
	.module('app.directives.gridViewApparel',[])
	.directive('gridApparel',function()
	{
		return{
			restrict:'E',
			scope:{
				data: '='
			},
			transclude:true,
			replace:true,
			templateUrl:"templates/directives/gridViewApparel.html",
			controller:function($scope){
				// console.log($scope.data);
			}
		};
	}
);
angular
	.module('app.directives.gridViewArtworks',[])
	.directive('gridArtworks',function()
	{
		return{
			restrict:'E',
			scope:{
				artworkItem: '=data',
				onRemove: '&'
			},
			transclude:true,
			replace:true,
			templateUrl:"templates/directives/gridViewArtworks.html",
			controller:function($scope){
				// console.log($scope.artworkItem);
				// console.log($scope.artworksItems.findIndex(el => el.id === id), 1);
			}
		};
	}
);
angular
	.module('app.directives.gridViewCommission',[])
	.directive('gridCommision',function()
	{
		return{
			restrict:'E',
			scope:{
				data: '='
			},
			transclude:true,
			replace:true,
			templateUrl:"templates/directives/gridViewCommission.html",
			controller:function($scope){
				// console.log($scope.data);
			}
		};
	}
);