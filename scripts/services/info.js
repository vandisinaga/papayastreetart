angular
	.module('app')
	.factory('Contacts', ['$http', function($http)
		{
			return {
			   get: function() {
			    return $http.get('api/info.json').then(function(response) {
		      		return response.data;
			    });
			   }
			};
		}
	]);