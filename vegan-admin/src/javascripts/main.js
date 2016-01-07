var app = angular.module('vegan', ['ngRoute', 'veganCtrl']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/template-save', { templateUrl: 'template-save.html' })
    .when('/instance', { templateUrl: 'instance-list.html' })
    .when('/template', { templateUrl: 'template-list.html' })
    .when('/task', { templateUrl: 'task-list.html' })
    .otherwise({ templateUrl : 'signin.html' });
  }
]);

var veganCtrl = angular.module('veganCtrl', []);


/*

signinApp.controller('SignInCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

  // init alert
  $scope.alert = { isCollapsed : true };

  // 登陆 
  // 去掉空格
  // 验证字符格式
  $scope.signin = function() {
    if ($scope.signin_form.$invalid) return;
    
    // 去掉空格
    $scope.username = $scope.username.replace(/\s/gi, '');
    $scope.pwd = $scope.pwd.replace(/\s/gi, '');
    
    // http request start -----
    $http.post('signin', {
      username: $scope.username,
      pwd: $scope.pwd
    })
    .success(function (data) {
      if (data.success) {
        location.href = 'dashboard';
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

veganCtrl.controller('InstanceCtrl', ['$scope','$http', '$modal', function ($scope, $http, $modal) {
  $http.get('/instances')
  .success(function (data) {
    $scope.instances = data.instances;
  })
  .error(function (data, status) {
    $modal.open(alertOpt);
  });
}]);

veganCtrl.controller('TaskCtrl', ['$scope', '$http', '$modal', function ($scope, $http, $modal) {
  $scope.tasks = [];

  $http.get('/tasks')
  .success(function (data) {
    if (data.success) {
      $scope.tasks = data.tasks;
    } else {
      $modal.open(alertOpt);
    }
  })
  .error(function (data, status) {
    $modal.open(alertOpt);
  });

  $scope.addTask = function () {
    $modal.open({
      size: 'lg',
      templateUrl: 'add-task.html',
      controller: 'AddTaskCtrl'
    })
    .result.then(function (t) {
      $http.post('/tasks', { task: t })
      .success(function (data) {
        if (data.success) {
          $scope.tasks.unshift(data.task);
        } else {
          $modal.open(alertOpt);
        }
      })
      .error(function (data, status) {
        $modal.open(alertOpt);
      });
    });
  };

  $scope.removeTask = function (i) {
    var t = $scope.tasks[i];
    $http.delete('/tasks/' + t._id)
    .success(function (data) {
      if (data.success) {
        $scope.tasks.splice(i, 1);
      } else {
        $modal.open(alertOpt);
      }
    })
    .error(function (data, status) {
      $modal.open(alertOpt);
    });
  };
}]);

veganCtrl.controller('AddTaskCtrl', ['$scope', '$http', '$modalInstance', function ($scope, $http, $modalInstance) {
  $scope.task = {};

  $http.get('/templates')
  .success(function (data) {
    $scope.templates = data.templates;
  });

  $scope.ok = function () {
    $modalInstance.close($scope.task);
  };
  $scope.dismiss = function () {
    $modalInstance.dismiss('cancel');
  };
}]);


veganCtrl.controller('TemplateCtrl', ['$scope','$rootScope', '$http', '$modal', function ($scope, $rootScope, $http, $modal) {
  $http.get('/templates')
  .success(function (data) {
    $scope.templates = data.templates;
  })
  .error(function (data, status) {
    $modal.open(alertOpt);
  });

  $scope.addTemplate = function() {
    $modal.open({
      size: 'lg',
      templateUrl: 'add-template.html',
      controller: 'AddTemplateCtrl'
    })
    .result.then(function (d) {
      // 提交数据
      $http.post('/templates', {
        template: d
      })
      .success(function (data) {
        $scope.templates.unshift(data.template);
      })
      .error(function (data, status) {
        $modal.open(alertOpt);
      });
    });
  };

  $scope.editTemplate = function (t) {
    $rootScope.editTemplateTarget = t;
    $modal.open({
      size: 'lg',
      templateUrl: 'edit-template.html',
      controller: 'EditTemplateCtrl'
    })
    .result.then(function (changedTemplate) {
      $http.put('/templates/' + changedTemplate._id, {
        template: changedTemplate
      })
      .success(function (data) {
        $modal.open(successOpt);
      })
      .error(function (data, status) {
        $modal.open(alertOpt);
      });
    });
  };

  $scope.removeTemplate = function (i) {
    var t = $scope.templates[i];
    $http.delete('/templates/' + t._id)
    .success(function (data) {
      if (data.success) {
        $scope.templates.splice(i, 1);
      } else {
        $modal.open(alertOpt);
      }
    })
    .error(function (data, status) {
      $modal.open(alertOpt);
    });
  };
}]);

veganCtrl.controller('AddTemplateCtrl', ['$scope', '$http', '$modalInstance', function ($scope, $http, $modalInstance) {
  $scope.templateData = {
    name: '',
    items: [{}]
  };

  $http.get('/item-type-conf.json')
  .success(function (data) {
    $scope.itemTypes = data;
  });

  $scope.ok = function () {
    $modalInstance.close($scope.templateData);
  };
  $scope.dismiss = function () {
    $modalInstance.dismiss('cancel');
  };
  $scope.addItem = function () {
    $scope.templateData.items.push({});
  };
  $scope.removeItem = function (i) {
    $scope.templateData.items.splice(i, 1);
  };
}]);

veganCtrl.controller('EditTemplateCtrl', ['$scope', '$rootScope', '$http', '$modalInstance', function ($scope, $rootScope, $http, $modalInstance) {
  $scope.templateData = $rootScope.editTemplateTarget;
  $http.get('/item-type-conf.json')
  .success(function (data) {
    $scope.itemTypes = data;
    for (dataIndex in $scope.templateData.items) {
      for (baseIndex in $scope.itemTypes) {
        if ($scope.templateData.items[dataIndex].itemType.type == $scope.itemTypes[baseIndex].type) {
          $scope.templateData.items[dataIndex].itemType = $scope.itemTypes[baseIndex];
          break;
        }
      }
    }
  });

  $scope.ok = function () {
    $modalInstance.close($scope.templateData);
  };
  $scope.dismiss = function () {
    $modalInstance.dismiss('cancel');
  };
  $scope.addItem = function () {
    $scope.templateData.items.push({});
  };
  $scope.removeItem = function (i) {
    $scope.templateData.items.splice(i, 1);
  };
}]);

// 当发生 error 级别的时候，用于提示的控制器
var alertOpt = {
  templateUrl: 'error-alert.html',
  controller: 'AlertCtrl'
};
veganCtrl.controller('AlertCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
  $scope.dismiss = function () {
    $modalInstance.dismiss('cancel');
  };
}]);
var successOpt = {
  templateUrl: 'success-alert.html',
  controller: 'AlertCtrl'
};
*/

