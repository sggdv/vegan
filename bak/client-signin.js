var signinApp = angular.module('clientSigninApp', ['ui.bootstrap']);

signinApp.controller('SignInCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

  // init alert
  $scope.alert = { isCollapsed : true };

  // 登陆 
  // 去掉空格
  // 验证字符格式
  $scope.signin = function() {
    if ($scope.signin_form.$invalid) return;
    
    // 去掉空格
    $scope.tradeNo = $scope.tradeNo.replace(/\s/gi, '');
    $scope.nickname = $scope.nickname.replace(/\s/gi, '');
    
    // http request start -----
    $http.post('signin', {
      tradeNo: $scope.tradeNo,
      nickname: $scope.nickname
    })
    .success(function (data) {
      if (data.success) {
        location.href = 'item.html?id=' + data.taskId;
      } else {
        $scope.alert.msg = '用户名或密码不正确';
        $scope.alert.isCollapsed = false;
        $timeout(function () {
          $scope.alert.isCollapsed = true;
        }, 5000);
      }
    })
    .error(function (data, status) {
      $scope.alert.msg = "Request failed : " + status;
      $scope.alert.isCollapsed = false;
      $timeout(function () {
        $scope.alert.isCollapsed = true;
      }, 5000);
    });
    // ----- http request end
  };
  
}]);