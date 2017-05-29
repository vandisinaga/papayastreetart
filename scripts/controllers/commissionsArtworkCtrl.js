angular
	.module('app')
	.controller('commissionsArtworkCtrl',['$scope','commission', function($scope,commission)
		{
			$scope.title='Commissions Artworks';
			$scope.commisionArtworks=commission;
		}
	])