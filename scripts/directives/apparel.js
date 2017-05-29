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