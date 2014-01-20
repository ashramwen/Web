/**
 * @author Han
 */
function reSize() {
　　//parent.document.all.iframe1.height = document.body.scrollHeight;
	if(frameElement!=null)
	parent.document.getElementById(frameElement.id).height = document.body.scrollHeight;
} 
//window.onload = reSize;

angular.module('myModule', ['ui.bootstrap']).directive('selectOnClick', function() {
	// Linker function
	return function(scope, element, attrs) {
		element.bind('click', function() {
			this.select();
		});
	};
});

function EnchantCtrl($scope) {
	$scope.oneAtATime = true;
	$scope.hand = [{
		name : "小的 Rank 8",
		url : "http://mabinogi.fws.tw/how_enchant_overlay.php?qenid=444&iid=181"
	}, {
		name : "損害的 Rank 9",
		url : "http://mabinogi.fws.tw/how_enchant_overlay.php?qenid=219&iid=181"
	}];
	
	$scope.head = [{
		name : "薄的[瘦的] Rank 8",
		url : "http://mabinogi.fws.tw/how_enchant_overlay.php?qenid=443&iid=1205"
	}, {
		name : "不便的 Rank 8",
		url : "http://mabinogi.fws.tw/how_enchant_overlay.php?qenid=215&iid=1205"
	}];
}