app.controller('doTestCtrl', function ($scope, $http, $interval, $routeParams) {
    $scope.tenMonHoc = $routeParams.ten;
    $scope.mamonhoc = 'db/Quizs/' + $routeParams.mh + '.js';
    $http.get('db/Quizs/' + $routeParams.mh + '.js').then(function (response) {
        $scope.ADAV = response.data;
    });

    $scope.tinhdiem = function () {
        var tong = 0;
        for (var i = 0; i < $scope.ADAV.length; i++) {
            if ($scope.ADAV[i].AnswerId == $scope.ADAV[i].dapan) {
                tong += $scope.ADAV[i].Marks;
            }
        }
        return tong;
    };
    $scope.a = true;
    $scope.submit = function () {
        $scope.a = false;
    };
    $scope.phut = 1;
    $scope.giay = 30;

    $interval(function (giay) {
        $scope.time = ($scope.phut < 10) ? ('0' + $scope.phut.toString()) : $scope.phut.toString();
        $scope.time += ":";
        $scope.time += ($scope.giay < 10) ? ('0' + $scope.giay.toString()) : $scope.giay.toString();

        $scope.giay -= 1;
        if ($scope.giay == 0) {
            if ($scope.phut == 0) {
                window.location.href = "index.html";
            } else {
                $scope.phut -= 1;
                $scope.giay = 59;
            }
        }
    }, 1000);
    $scope.begin = 0;
    $scope.prev = function () {
        if ($scope.begin > 0) {
            $scope.begin -= 1;
        }
        $scope.index = 0;
    }
    $scope.next = function () {
        $scope.begin += 1;
        $scope.index = 0;
    }
});
