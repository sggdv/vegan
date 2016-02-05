var app = angular.module('vegan', []);

app.controller('SignInCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
  $scope.alert = { isCollapsed : true };

  $scope.signin = function() {
    if ($scope.signin_form.$invalid) { 
      return;
    }

    $scope.username = $scope.username.replace(/\s/gi, '');
    $scope.pwd = $scope.pwd.replace(/\s/gi, '');

    $http.post('signin', {
      username: $scope.username,
      pwd: $scope.pwd
    })
    .success(function (data) {
      if (data.success) {
      } else {
        $scope.alertMsg("用户名或密码不正确");
      }
    })
    .error(function (data, status) {
      $scope.alertMsg("Request failed : " + status);
    });
  };

  $scope.alertMsg = function (msg) {
    $scope.alert.msg = msg;
    $scope.alert.isCollapsed = false;
    $timeout(function () {
      $scope.alert.isCollapsed = true;
    }, 5000);
  };

}]);
