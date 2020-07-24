var app = angular.module("myApp", ["ngRoute"]);
app.controller('myController', function ($scope, $http) {
    $http.get('db/Subjects.js').then(function (response) {
        $scope.subjects = response.data;
    });
    $http.get('db/Students.js').then(function (response) {
        $scope.students = response.data;
    });

    $scope.begin = 0;
    $scope.pageCount = Math.ceil(20/5);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0) {
            $scope.begin -= 5;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 5) {
            $scope.begin += 5;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 5;
    };
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/doTest2', {
            templateUrl: 'doTest2.html?' + Math.random()
        })
        .when('/doTest/:ten/:mh', {
            templateUrl: 'doTest.html?' + Math.random(),
            controller: 'doTestCtrl'
        })
        .when('/lienhe',{
            templateUrl: 'lienhe.html?' + Math.random()
        })
        .when('/Gioithieu',{
            templateUrl: 'Gioithieu.html?' + Math.random()
        })
        .when('/login',{
            templateUrl: 'login.html?' + Math.random(),
            controller: 'loginCtrl'
        })
        .otherwise({
            redirectTo: "/doTest2"
        });
});

app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    });
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert("Lỗi");
    });
});
