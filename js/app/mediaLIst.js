var app = angular.module("zhang8Medialist", ["com.zhang8.api", "zhang8.util", "ngAnimate", "ngCookies", "infinite-scroll"]);
app.controller("medialistController", ["$scope", "CommonApiService", "UtilService", "$timeout", "$cookies", "$http", "$httpParamSerializerJQLike", function(e, n, t, a, i, o, l) {
	function c(n, t) {
		o({
			method: "post",
			url: "/cmsmanager/cms/content/findByChannelId.cms",
			data: JSON.stringify({
				parentId: e.parentId,
				channelId: e.channelId,
				page: n,
				limit: 10
			})
		}).success(function(t, a, i, o) {
			e.newsList = t.jcContentDtos;
			for (var l = 0; l < e.newsList.length; l++) e.newsList[l].number = Math.ceil(20 * Math.random());
			var c = Math.ceil(t.totalCount / 11);
			e.pageSize = 10 * n > t.totalCount ? t.totalCount : 10 * n, e.page = n + 1 > c ? n : n + 1, e.disable = e.pageSize === t.totalCount
		})
	}
	e.page = 1, e.pageSize = 10;
	window.location.hostname;
	e.channelId = 154, e.parentId = 151, c(e.page, e.pageSize), e.loadMore = function(e, n) {
		c(e, n)
	}, e.newsDetail = function(e) {
		window.location.href = "/app/media/mediaDetail?contentId=" + e.contentId
	}
}]);