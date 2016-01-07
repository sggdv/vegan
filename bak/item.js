var app = angular.module('itemApp', ['ui.bootstrap']);

app.config(['$locationProvider', function($locationProvider) {  
  $locationProvider.html5Mode(true).hashPrefix('!');
}]);

app.controller('ItemCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
  var taskId = $location.search().id;

  $http.get('/tasks/' + taskId)
  .success(function (data) {
    if (data.success) {
      $scope.task = data.task;
    } else {
    }
  })
  .error(function (data, status) {
  });

  $scope.ok = function () {
    $http.put('/tasks/' + taskId, {
      task: $scope.task
    })
    .success(function (data) {
    })
    .error(function (data, status) {
    });
  };
}]);