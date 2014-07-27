/**
 * @author Han
 */
(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] ||
	function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o), m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-53221553-1', 'auto');
ga('send', 'pageview');

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
		url : "http://forum.gamer.com.tw/C.php?bsn=07422&snA=221554&tnum=19",
		target : "_blank",
		text : "SAO刀劍神域"
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
	}, {
		url : "https://www.youtube.com/playlist?list=PLUM8x224JrX_Dh3aC_9zx45Krq_cpZYic",
		target : "_blank",
		text : "《爸爸去哪儿》第二季"
	}];
}