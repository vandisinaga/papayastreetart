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