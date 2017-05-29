angular
	.module('app.directives.slickSlider',[])
	.directive('slickSlider',function()
	{
			return{
			restrict:'E',
			scope:{
				data: '='
			},
			link: function(scope,element,attrs) {
		       $(element).slick(scope.$eval(attrs.slickSlider));
		   },
			templateUrl:"templates/directives/slickSlider.html"
		};
	}
);


