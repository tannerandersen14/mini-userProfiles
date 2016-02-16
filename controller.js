myApp.controller('MainController', function($scope, mySvc) {



  $scope.getUsers = function() {
    $scope.users = mySvc.getUsers()
  }
$scope.getUsers();






})
