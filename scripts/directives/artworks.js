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