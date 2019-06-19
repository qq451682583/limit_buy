angular.module("Zhangextend", ["com.zhang8.api", "zhang8.util", "infinite-scroll"]).controller("extendDetailUserController", ["$scope", "CommonApiService", "UtilService", function(e, t, a) {
	e.successInvite = a.getUrlParams().mc, e.successPayBack = a.getUrlParams().amount, e.error = {
		state: null,
		msg: null
	}, e.extendPeople = function() {
		window.location.href = "detailUser?amount=" + e.successPayBack + "&mc=" + e.successInvite
	}, e.extendProfit = function() {
		window.location.href = "detaiProfit?amount=" + e.successPayBack + "&mc=" + e.successInvite
	}, e.reddit = {
		items: [],
		busy: !1,
		page: 1,
		pageSize: 10,
		nextPage: function() {
			if (!this.busy) {
				this.busy = !0;
				var a = {};
				a.page = this.page, a.pageSize = this.pageSize, t.getMyTrackMember(a.page, a.pageSize).then(function(t) {
					if (1 == t.data.status) {
						var i = t.data.result.resultList;
						if (!i) return;
						if (t.data.result.totalPage >= a.page) {
							for (var r = 0; r < i.length; r++) this.items.push(i[r]);
							this.busy = !1, this.page++
						}
					} else e.error.state = !0, e.error.msg = t.data.resultMsg, $timeout(function() {
						e.error.state = !1
					}, 5e3)
				}.bind(this))
			}
		}
	}
}]).controller("extendController", ["$scope", "CommonApiService", "$timeout", function(e, t, a) {
	! function() {
		t.gettrackinfo().then(function(t) {
			t.data.success ? (e.successInvite = t.data.mc, e.successPayBack = t.data.amount, e.amount = t.data.amount, e.mc = t.data.mc, e.trackId = t.data.track.trackId || 0, e.gradeWeight = t.data.grade.gradeWeight, t.data.headerImg ? e.headerImg = "http://image.zhang8.com.cn/zhang8" + t.data.headerImg : e.headerImg = "/images/extend/m/header.jpg") : (e.error.state = !0, e.error.msg = t.data.resultMsg, a(function() {
				e.error.state = !1
			}, 3e3))
		}), e.inviteFriend = function() {
			window.location.href = "sendred?trackId=" + e.trackId
		}, e.watchExtendDetail = function() {
			window.location.href = "detailUser?amount=" + e.amount + "&mc=" + e.mc
		}
	}(), e.error = {
		state: null,
		msg: null
	}
}]).controller("extendDetailProfitController", ["$scope", "CommonApiService", "UtilService", function(e, t, a) {
	e.successInvite = a.getUrlParams().mc, e.successPayBack = a.getUrlParams().amount, e.error = {
		state: null,
		msg: null
	}, e.extendPeople = function() {
		window.location.href = "detailUser?amount=" + e.successPayBack + "&mc=" + e.successInvite
	}, e.extendProfit = function() {
		window.location.href = "detaiProfit?amount=" + e.successPayBack + "&mc=" + e.successInvite
	}, e.reddit = {
		items: [],
		busy: !1,
		page: 1,
		pageSize: 10,
		nextPage: function() {
			if (!this.busy) {
				this.busy = !0;
				var a = {};
				a.page = this.page, a.pageSize = this.pageSize, t.getmytrack(a.page, a.pageSize).then(function(t) {
					if (1 == t.data.status) {
						var i = t.data.result.resultList;
						if (!i) return;
						if (t.data.result.totalPage >= a.page) {
							for (var r = 0; r < i.length; r++) this.items.push(i[r]);
							this.busy = !1, this.page++
						}
					} else e.error.state = !0, e.error.msg = t.data.resultMsg, $timeout(function() {
						e.error.state = !1
					}, 5e3)
				}.bind(this))
			}
		}
	}
}]).filter("DatePointerFilter", function() {
	return function(e) {
		if (e && e.split("-").length > 0) {
			var t = e.split("-"),
				a = t[2].split(" "),
				i = a[1].split(":");
			return t[0] + "." + t[1] + "." + a[0] + " " + i[0] + ":" + i[1]
		}
	}
});