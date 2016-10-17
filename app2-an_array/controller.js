angular.module("arrayApp").controller("arrayController", function($scope, mainService) {
   $scope.data = mainService.myData;
   $scope.data2 = mainService.getData();
});
