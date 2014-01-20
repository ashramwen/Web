/**
 * @author Han
 */
angular.module('myApp', ['ngAnimate']).directive('repeatDone', function() {
	return function(scope, element, attrs) {
		if (scope.$last) {
			scope.$eval(attrs.repeatDone);
		}
	};
});

function MabiCtrl($scope) {
	$scope.iframes = [{
		url : "ducat/",
		show : true,
		h : 725
	}, {
		url : "enchant/",
		show : false,
		h : 247
	}];
	$scope.pageH = $scope.iframes[0].h;

	$scope.layoutDone = function() {
		for (var i = 0; i < $scope.iframes.length; i++) {
			$('iframe')[i].height = $scope.iframes[i].h + 10;
		}
	};

	$scope.switchIframe = function(index) {
		for (var i = 0; i < $scope.iframes.length; i++) {
			$scope.iframes[i].show = (i == index);
			if (i == index) {
				$scope.pageH = $scope.iframes[i].h + 10;
			}
		}
	};
}