app.controller('dailyCtrl', ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {
    $http.get('json/dailyquest').success(function(data, status) {
        $scope.questList = data;
        var dailyDate = localStorage.getItem('dailyDate');
        var today = new Date().toDateString();
        if (today === dailyDate) {
            $scope.doneList = JSON.parse(localStorage.getItem('dailyDone'));
            if (!$scope.doneList)
                $scope.doneList = new Array(data.length);
        } else {
            localStorage.setItem('dailyDate', today);
            localStorage.removeItem('dailyDone');
            $scope.doneList = new Array(data.length);
        }
    });

    $scope.reset = function() {
        localStorage.removeItem('dailyDone');
        $scope.doneList = new Array($scope.questList.length);
    }

    $scope.clean = function(quest, index) {
        quest.done = !quest.done;
        $scope.doneList[index] = quest.done;
        localStorage.setItem('dailyDone', JSON.stringify($scope.doneList));
    };
}]);
