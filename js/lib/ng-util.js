var util = angular.module("zhang8.util", []);
util.service("UtilService", ["$location", "$window", function(r, t) {
	return {
		isWxBrower: function() {
			return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
		},
		getDevice: function() {
			return -1 != t.navigator.userAgent.indexOf("iPhone") ? "ios" : "android"
		},
		getUrlParams: function() {
			for (var r = window.location.search, t = r.length > 0 ? r.substr(1) : "", e = {}, n = t.length ? t.split("&") : [], i = 0; i < n.length; i++) {
				var a = n[i].split("="),
					o = decodeURIComponent(a[0]),
					u = decodeURIComponent(a[1]);
				o.length > 0 && (e[o] = u)
			}
			return e
		},
		dealNumber: function(r) {
			return 1 == r.toString().length ? "0" + r : r
		},
		getArray: function(r, t) {
			return r ? r.split(t || ",") : []
		},
		round: function(r, t) {
			return Number(Number(r).toFixed(t || 2))
		},
		validParam: function(r) {
			if (arguments.length > 1) {
				if ("tel" == arguments[1]) {
					var t = /^(1[3-9])[0-9]{9}$/;
					return !!t.test(r)
				}
				if ("telemail" == arguments[1]) {
					var t = /^(1[3-8])[0-9]{9}$|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;
					return !!t.test(r)
				}
				if ("stockCode" == arguments[1]) return !(!r || 6 != r.length);
				if ("stockNum" == arguments[1]) {
					var t = /^[1-9]\d*00$/;
					return !!t.test(r)
				}
				if ("password" == arguments[1]) {
					var t = /^(?![^a-zA-Z]+$)(?!\D+$)[a-zA-Z\d]{6,16}$/;
					return !!t.test(r)
				}
				if ("drawing" == arguments[1]) {
					var t = /^([\d]+|([\d]+[.]?[\d]+))$/;
					return !!t.test(r)
				}
				if ("bankcard" == arguments[1]) {
					var t = /^(\d{16,19}|\d{12})$/g;
					return !!t.test(r)
				}
				if ("payin" == arguments[1]) {
					var t = /^([\d]+|([\d]+[.]?[\d]{1,2}))$/;
					return !!(t.test(r) && r >= 100)
				}
				if ("idcard" == arguments[1]) {
					var t = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
					return !!t.test(r)
				}
				return !1
			}
			return !!r
		}
	}
}]), util.service("ConstantService", function() {
	return {
		getAppDownloadUrl: function(r) {
			var t = {
				ios: "https://itunes.apple.com/us/app/zhang8-duan-xian-pei-zi-chao/id1157334042",
				android: "http://image.zhang8.com/zhang8/app/zhang8Apk_1.3.0.apk"
			};
			return t[r] ? t[r] : t.android
		},
		getAppDownloadUrlByChannel: function(r) {
			return "http://image.zhang8.com/app/zhang8_" + r + ".apk"
		}
	}
}), util.filter("DateCNFilter", function() {
	return function(r) {
		var t = r.split(" ")[0];
		if (t && t.split("-").length > 0) {
			var e = t.split("-");
			return e[0] + "年" + e[1] + "月" + e[2] + "日"
		}
		return " 年 月 日"
	}
}), util.filter("formateDate", function() {
	return function(r) {
		function t(r) {
			return r < 10 ? "0" + r : r
		}
		var e = new Date(1e3 * parseInt(r)),
			n = e.getFullYear(),
			i = e.getMonth() + 1,
			a = e.getDate();
		e.getHours(), e.getMinutes(), e.getSeconds();
		return n + "-" + t(i) + "-" + t(a)
	}
}), util.filter("MoneyFilter", function() {
	return function(r) {
		var t, e, a, o = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"),
			u = new Array("", "拾", "佰", "仟"),
			s = new Array("", "万", "亿", "兆"),
			l = new Array("角", "分", "毫", "厘"),
			d = "";
		if ("" == r) return "";
		if ((r = parseFloat(r)) >= 1e15) return $.alert("超出最大处理数字"), "";
		if (0 == r) return d = o[0] + "元整";
		if (r = r.toString(), -1 == r.indexOf(".") ? (t = r, e = "") : (a = r.split("."), t = a[0], e = a[1].substr(0, 4)), parseInt(t, 10) > 0) {
			for (zeroCount = 0, IntLen = t.length, i = 0; i < IntLen; i++) n = t.substr(i, 1), p = IntLen - i - 1, q = p / 4, m = p % 4, "0" == n ? zeroCount++ : (zeroCount > 0 && (d += o[0]), zeroCount = 0, d += o[parseInt(n)] + u[m]), 0 == m && zeroCount < 4 && (d += s[q]);
			d += "元"
		}
		if ("" != e) for (decLen = e.length, i = 0; i < decLen; i++) n = e.substr(i, 1), "0" != n && (d += o[Number(n)] + l[i]);
		return "" == d ? d += o[0] + "元整" : "" == e && (d += "整"), d
	}
}), util.directive("zhang8Tip", function() {
	return {
		restrict: "AE",
		replace: !0,
		template: '<div class="error-wrap" ng-show="error.state"><span class="error-msg" ng-bind="error.msg"></span></div>',
		scope: {
			error: "="
		}
	}
});