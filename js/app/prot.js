var app = angular.module("zhang8.prot", ["com.zhang8.api", "zhang8.util"]);
app.controller("ProtController", ["$scope", "CommonApiService", "UtilService", "ConstantService", function(t, r, e, p) {
	t.prot = e.getUrlParams(),
	function(e) {
		r.gettradePre(e).then(function(r) {
			t.prot.cycleType = r.data.trade.cycleType, t.prot.profitRate = r.data.trade.profitRate
		})
	}({
		pzType: (t.prot.pzType + "").trim(),
		pzAmount: (t.prot.pzAmount + "").trim(),
		cycle: (t.prot.cycle + "").trim(),
		multiple: (t.prot.pzMutiple + "").trim()
	})
}]);