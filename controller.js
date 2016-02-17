myApp.controller('MainController', function($scope, mySvc) {



  $scope.getUsers = function() {
     mySvc.getUsers().then(function(response) {
       $scope.users = response.data.data;
     });
   }
  $scope.getUsers();






})
