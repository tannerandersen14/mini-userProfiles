myApp.service('mySvc', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();
    return $http({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
      var parsedResponse = response.data.data
      for (var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = 'Ralf'
      }
      deferred.resolve(parsedResponse)
    })
    return deferred.promise;
  }



  var data =
  [
    {
        "id": 1,
        "first_name": "george",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
        "id": 2,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
        "id": 3,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }
  ]
});
