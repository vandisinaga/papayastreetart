angular
	.module('app')
	.factory('ItemFactory', ['$http', function($http)
		{
			return {
			   get: function() {
			    return $http.get('api/item.json').then(function(response) {
		      		return response.data;
			    });
			   }
			};
		}
	]);