/**
 * @author Han
 */

var path = 'http://tw.tbook.mabinogi.gamania.com/Game_House/ShopAdvertise/ShopAdvertise.aspx?Name_Server=mabitw4&CharacterId=4503599627372517&Page=1&Row=7&SearchType=4&SortType=&SortOption=1&SearchWord=染色';
$(function() {
	var path2 = encodeURI(path);
	$("#text1").val(path2);
	//test3(path2);
});

function test3() {
	var request = $.ajax({
		crossDomain : true,
		url : path,
		type : "GET",
		dataType : "text"
	});
	request.done(function(msg) {
		$("#text2").html(msg);
	});
	request.fail(function(jqXHR, textStatus) {
		//alert("Request failed: " + textStatus);
	});
	request.always(function(msg, textStatus, errorThrown) {
		$("#text2").html(msg);
	});
}

function test(path2) {
	var a = 1;
	$.support.cors = true;

	$.ajax({
		crossDomain : true,
		headers : {
			'Access-Control-Allow-Origin' : '*',
			'Access-Control-Allow-Methods' : 'GET',
			'Access-Control-Allow-Headers' : 'Authorization'
		},
		// The 'type' property sets the HTTP method.
		// A value of 'PUT' or 'DELETE' will trigger a preflight request.
		type : 'GET',

		// The URL to make the request to.
		url : path2,

		// The 'contentType' property sets the 'Content-Type' header.
		// The JQuery default for this property is
		// 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
		// a preflight. If you set this value to anything other than
		// application/x-www-form-urlencoded, multipart/form-data, or text/plain,
		// you will trigger a preflight request.
		contentType : 'text/plain',
		dataType : 'jsonp',
		xhrFields : {
			// The 'xhrFields' property sets additional fields on the XMLHttpRequest.
			// This can be used to set the 'withCredentials' property.
			// Set the value to 'true' if you'd like to pass cookies to the server.
			// If this is enabled, your server must respond with the header
			// 'Access-Control-Allow-Credentials: true'.
			withCredentials : true
		},

		headers : {
			// Set any custom headers here.
			// If you set any non-simple headers, your server must include these
			// headers in the 'Access-Control-Allow-Headers' response header.
		},

		success : function(data) {
			// Here's where you handle a successful response.
			$("#text2").html(data);
		},

		error : function() {
			// Here's where you handle an error response.
			// Note that if the error was due to a CORS issue,
			// this function will still fire, but there won't be any additional
			// information about the error.
		}
	});
}

function TestCtrl($scope, $http) {
	var path = 'http://tw.tbook.mabinogi.gamania.com/Game_House/ShopAdvertise/ShopAdvertise.aspx?Name_Server=mabitw4&CharacterId=4503599627372517&Page=1&Row=7&SearchType=&SortType=&SortOption=&SearchWord=';
	$http({
		method : 'GET',
		url : path,
		responseType : 'text',
		withCredentials : true,
		headers : {
			'Access-Control-Allow-Origin' : '*',
			'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
			'X-Random-Shit' : '123123123'
		}
	}).success(function(data, status, headers, config) {
		// this callback will be called asynchronously
		// when the response is available
		var a = 1;
	}).error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		var a = 1;
	});
	//$http.get(path).success(successCallback);
	function successCallback(data) {
		var a = 1;
	}

}
