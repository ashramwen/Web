angular.module('myModule', ['ui.bootstrap']).directive('selectOnClick', function() {	// Linker function	return function(scope, element, attrs) {		element.bind('click', function() {			this.select();		});	};});$(function() {	var request = $.ajax({		url : "getdata.php",		type : "POST",		dataType : "text"	});	request.done(function(msg) {		$("#text1").html(msg);	});	request.fail(function(jqXHR, textStatus) {		alert("Request failed: " + textStatus);	});});
function HousingCtrl($scope) {
}
