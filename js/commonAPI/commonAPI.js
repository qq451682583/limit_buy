! function(e) {
	e.config(["RestangularProvider", function(e) {
		function t(e, t) {
			return t()["Content-type"] = "application/x-www-form-urlencoded; charset=utf-8", n(e)
		}
		function n(e) {
			if (!angular.isObject(e)) return null === e ? "" : e.toString();
			var t = [];
			for (var n in e) if (e.hasOwnProperty(n)) {
				var r = e[n];
				t.push(encodeURIComponent(n) + "=" + encodeURIComponent(null === r ? "" : r))
			}
			return t.join("&").replace(/%20/g, "+")
		}
		e.setDefaultHeaders({
			Accept: "application/json,text/plain,*/*"
		}), e.addResponseInterceptor(function(e, t, n, r, o, u) {
			return e.hasOwnProperty("status") && "string" == typeof e.status && (e.status = "true" == e.status), o
		}), e.setFullRequestInterceptor(function(e, n, r, o, u, a, i) {
			switch (i.timeout = 5e4, n) {
				case "post":
					i.transformRequest = t, u["Content-type"] = "application/x-www-form-urlencoded; charset=utf-8";
					break;
				case "get":
					a = _.extend(a, {
						t: Date.now()
					})
			}
			return {
				element: e,
				headers: u,
				params: a,
				httpConfig: i
			}
		})
	}]), e.factory("CommonRestangular", ["Restangular", function(e) {
		return e.withConfig(function(e) {
			e.setRequestSuffix(".api")
		})
	}])
}(window.NCowAPI = angular.module("com.zhang8.api", ["restangular"])),
function(e) {
	if (_.isUndefined(e)) throw "NCowAPI not defined!";
	e.service("CommonApiService", ["CommonRestangular", function(e) {
		return {
			httpRequest: function(t, n, r) {
				return "POST" === t ? e.one(n).post(null, r) : "GET" === t ? e.one(n).get(r) : void 0
			},
			gettrackinfo: function() {
				return e.one("/user/gettrackinfo").post(null, null)
			},
			getmytrack: function(t, n) {
				return e.one("/user/getmytrack").post(null, {
					page: t,
					pageSize: n
				})
			},
			getMyTrackMember: function(t, n) {
				return e.one("/user/getMyTrackMember").post(null, {
					page: t,
					pageSize: n
				})
			},
			getbalance: function() {
				return e.one("/user/getbalance").get()
			},
			getverifycode: function(t, n, r) {
				return e.one("/user/getverifycode").post(null, {
					key: t,
					ivc: n,
					type: r
				})
			},
			regsaveByTrackId: function(t, n, r, o, u, a) {
				return e.one("/user/regsave").post(null, {
					userName: t,
					telephone: n,
					verifyCode: r,
					pwd: o,
					pwd2: u,
					regSource: 2,
					trackId: a
				})
			},
			getDownloadUrl: function(t) {
				return e.one("/app/version").get({
					appName: t
				})
			},
			gettradePre: function(t) {
				return e.one("/trade").get({
					pzType: t.pzType,
					pzAmount: t.pzAmount,
					multiple: t.multiple,
					cycle: t.cycle
				})
			}
		}
	}])
}(window.NCowAPI);