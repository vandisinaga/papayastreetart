angular
    .module('app')
    .controller('singleArtworksCtrl',['$scope','$stateParams','ItemFactory','$location', function($scope,$stateParams,ItemFactory,$location)
        {
            $scope.id=$stateParams.id;
            ItemFactory.get().then(function(data) {
                var singleArtworks = data.filter(function(entry){
                    return entry.id === $scope.id;
                })[0];
                // console.log(singleArtworks);
                $scope.singleArtworks= singleArtworks;
                $location.path();
                $scope.current=$location.absUrl();
            });
        }
    ]);