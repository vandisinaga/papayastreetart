angular
    .module('app')
    .controller('singleApparelCtrl',['$scope','$stateParams','ItemFactory','$location',function($scope,$stateParams,ItemFactory,$location)
        {
            $scope.id=$stateParams.id;
            ItemFactory.get().then(function(data) {
                var singleApparel = data.filter(function(entry){
                    return entry.id === $scope.id;
                })[0];
                // console.log(singleApparel);
                $scope.singleApparel= singleApparel;
                console.log($scope.singleApparel);
                $location.path();
                $scope.current=$location.absUrl();
            });
        }
    ]);