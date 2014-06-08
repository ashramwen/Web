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
	}, {
		url : "blacksmith/",
		show : false,
		h : 250
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

	$scope.links = [{
		url : "http://mabinogi.fws.tw/",
		target : "_blank",
		text : "Mabinogi奇幻世界"
	}, {
		url : "https://docs.google.com/a/inventalk.com.tw/spreadsheets/d/1lp_D13fmjRwSWCCwi5AV3fa8xsNj0Gie-ockSCSqQmA/edit#gid=0",
		target : "_blank",
		text : "活動時間表"
	}, {
		url : "https://docs.google.com/a/inventalk.com.tw/spreadsheet/ccc?key=0AmYaqEn_Pcx6dFVoSm12UWRuLVc3dVY5XzdrZWxObVE&usp=sharing#gid=0",
		target : "_blank",
		text : "背包整理"
	}, {
		url : "http://global.erinn.biz/shopboard.php?altsv=mabitw4",
		target : "_blank",
		text : "房屋看板"
	}, {
		url : "http://weather.erinn.biz/smuggler.php",
		target : "_blank",
		text : "走私販情報"
	}, {
		url : "https://docs.google.com/spreadsheets/d/1yTteVz2gJipzb5xF8Gh-3Xg-lWemqE5HnGXBMamnP4Q/edit#gid=0",
		target : "_blank",
		text : "土土料理手冊"
	}, {
		url : "http://mabicat.dousetsu.com/index.htm",
		target : "_blank",
		text : "路邊貓窩"
	}, {
		url : "http://tw.beanfun.com/mabinogi/index.aspx",
		target : "_blank",
		text : "瑪奇官網"
	}];
}