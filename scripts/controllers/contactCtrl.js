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