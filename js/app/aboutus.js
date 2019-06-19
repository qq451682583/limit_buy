var app = angular.module("zhang8Aboutus", ["com.zhang8.api", "zhang8.util", "ngAnimate", "ngCookies"]);
app.controller("aboutusController", ["$scope", "CommonApiService", "UtilService", "$timeout", "$cookies", function(n, t, o, e, c) {
	n.content1 = !1, n.content2 = !1, n.content3 = !1, n.content4 = !1, n.tab1 = function() {
		n.content1 = !n.content1
	}, n.tab2 = function() {
		n.content2 = !n.content2
	}, n.tab3 = function() {
		n.content3 = !n.content3
	}, n.tab4 = function() {
		n.content4 = !n.content4
	}
}]);