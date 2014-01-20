angular.module('myModule', ['ui.bootstrap']).directive('selectOnClick', function() {	// Linker function	return function(scope, element, attrs) {		element.bind('click', function() {			this.select();		});	};});
function AdvertiseCtrl($scope) {
}

