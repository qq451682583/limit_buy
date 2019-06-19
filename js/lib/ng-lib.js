! function(t, e, n) {
	"use strict";

	function r(t, e) {
		return e = e || Error,
		function() {
			var n, r, i = arguments,
				o = i[0],
				a = "[" + (t ? t + ":" : "") + o + "] ",
				u = i[1];
			for (a += u.replace(/\{\d+\}/g, function(t) {
				var e = +t.slice(1, -1),
					n = e + 2;
				return n < i.length ? gt(i[n]) : t
			}), a += "\nhttp://errors.angularjs.org/1.4.3/" + (t ? t + "/" : "") + o, r = 2, n = "?"; r < i.length; r++, n = "&") a += n + "p" + (r - 2) + "=" + encodeURIComponent(gt(i[r]));
			return new e(a)
		}
	}
	function i(t) {
		if (null == t || k(t)) return !1;
		var e = "length" in Object(t) && t.length;
		return !(t.nodeType !== zr || !e) || (_(t) || Rr(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
	}
	function o(t, e, n) {
		var r, a;
		if (t) if (E(t)) for (r in t) "prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r, t);
		else if (Rr(t) || i(t)) {
			var u = "object" != typeof t;
			for (r = 0, a = t.length; r < a; r++)(u || r in t) && e.call(n, t[r], r, t)
		} else if (t.forEach && t.forEach !== o) t.forEach(e, n, t);
		else if (x(t)) for (r in t) e.call(n, t[r], r, t);
		else if ("function" == typeof t.hasOwnProperty) for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
		else for (r in t) yr.call(t, r) && e.call(n, t[r], r, t);
		return t
	}
	function a(t, e, n) {
		for (var r = Object.keys(t).sort(), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
		return r
	}
	function u(t) {
		return function(e, n) {
			t(n, e)
		}
	}
	function s() {
		return ++Fr
	}
	function c(t, e) {
		e ? t.$$hashKey = e : delete t.$$hashKey
	}
	function l(t, e, n) {
		for (var r = t.$$hashKey, i = 0, o = e.length; i < o; ++i) {
			var a = e[i];
			if (w(a) || E(a)) for (var u = Object.keys(a), s = 0, f = u.length; s < f; s++) {
				var h = u[s],
					p = a[h];
				n && w(p) ? S(p) ? t[h] = new Date(p.valueOf()) : (w(t[h]) || (t[h] = Rr(p) ? [] : {}), l(t[h], [p], !0)) : t[h] = p
			}
		}
		return c(t, r), t
	}
	function f(t) {
		return l(t, Ar.call(arguments, 1), !1)
	}
	function h(t) {
		return l(t, Ar.call(arguments, 1), !0)
	}
	function p(t) {
		return parseInt(t, 10)
	}
	function d(t, e) {
		return f(Object.create(t), e)
	}
	function v() {}
	function $(t) {
		return t
	}
	function m(t) {
		return function() {
			return t
		}
	}
	function g(t) {
		return E(t.toString) && t.toString !== Object.prototype.toString
	}
	function y(t) {
		return void 0 === t
	}
	function b(t) {
		return void 0 !== t
	}
	function w(t) {
		return null !== t && "object" == typeof t
	}
	function x(t) {
		return null !== t && "object" == typeof t && !Tr(t)
	}
	function _(t) {
		return "string" == typeof t
	}
	function C(t) {
		return "number" == typeof t
	}
	function S(t) {
		return "[object Date]" === jr.call(t)
	}
	function E(t) {
		return "function" == typeof t
	}
	function A(t) {
		return "[object RegExp]" === jr.call(t)
	}
	function k(t) {
		return t && t.window === t
	}
	function O(t) {
		return t && t.$evalAsync && t.$watch
	}
	function j(t) {
		return "[object File]" === jr.call(t)
	}
	function T(t) {
		return "[object FormData]" === jr.call(t)
	}
	function I(t) {
		return "[object Blob]" === jr.call(t)
	}
	function M(t) {
		return "boolean" == typeof t
	}
	function F(t) {
		return t && E(t.then)
	}
	function D(t) {
		return Pr.test(jr.call(t))
	}
	function R(t) {
		return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
	}
	function P(t) {
		var e, n = {}, r = t.split(",");
		for (e = 0; e < r.length; e++) n[r[e]] = !0;
		return n
	}
	function N(t) {
		return gr(t.nodeName || t[0] && t[0].nodeName)
	}
	function V(t, e) {
		var n = t.indexOf(e);
		return n >= 0 && t.splice(n, 1), n
	}
	function U(t, e, n, r) {
		if (k(t) || O(t)) throw Ir("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
		if (D(e)) throw Ir("cpta", "Can't copy! TypedArray destination cannot be mutated.");
		if (e) {
			if (t === e) throw Ir("cpi", "Can't copy! Source and destination are identical.");
			n = n || [], r = r || [], w(t) && (n.push(t), r.push(e));
			var i;
			if (Rr(t)) {
				e.length = 0;
				for (var a = 0; a < t.length; a++) e.push(U(t[a], null, n, r))
			} else {
				var u = e.$$hashKey;
				if (Rr(e) ? e.length = 0 : o(e, function(t, n) {
					delete e[n]
				}), x(t)) for (i in t) e[i] = U(t[i], null, n, r);
				else if (t && "function" == typeof t.hasOwnProperty) for (i in t) t.hasOwnProperty(i) && (e[i] = U(t[i], null, n, r));
				else for (i in t) yr.call(t, i) && (e[i] = U(t[i], null, n, r));
				c(e, u)
			}
		} else if (e = t, w(t)) {
			var s;
			if (n && -1 !== (s = n.indexOf(t))) return r[s];
			if (Rr(t)) return U(t, [], n, r);
			if (D(t)) e = new t.constructor(t);
			else if (S(t)) e = new Date(t.getTime());
			else {
				if (!A(t)) {
					var l = Object.create(Tr(t));
					return U(t, l, n, r)
				}
				e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex
			}
			r && (n.push(t), r.push(e))
		}
		return e
	}
	function q(t, e) {
		if (Rr(t)) {
			e = e || [];
			for (var n = 0, r = t.length; n < r; n++) e[n] = t[n]
		} else if (w(t)) {
			e = e || {};
			for (var i in t) "$" === i.charAt(0) && "$" === i.charAt(1) || (e[i] = t[i])
		}
		return e || t
	}
	function L(t, e) {
		if (t === e) return !0;
		if (null === t || null === e) return !1;
		if (t !== t && e !== e) return !0;
		var r, i, o, a = typeof t,
			u = typeof e;
		if (a == u && "object" == a) {
			if (!Rr(t)) {
				if (S(t)) return !!S(e) && L(t.getTime(), e.getTime());
				if (A(t)) return !!A(e) && t.toString() == e.toString();
				if (O(t) || O(e) || k(t) || k(e) || Rr(e) || S(e) || A(e)) return !1;
				o = vt();
				for (i in t) if ("$" !== i.charAt(0) && !E(t[i])) {
					if (!L(t[i], e[i])) return !1;
					o[i] = !0
				}
				for (i in e) if (!(i in o || "$" === i.charAt(0) || e[i] === n || E(e[i]))) return !1;
				return !0
			}
			if (!Rr(e)) return !1;
			if ((r = t.length) == e.length) {
				for (i = 0; i < r; i++) if (!L(t[i], e[i])) return !1;
				return !0
			}
		}
		return !1
	}
	function B(t, e, n) {
		return t.concat(Ar.call(e, n))
	}
	function H(t, e) {
		return Ar.call(t, e || 0)
	}
	function z(t, e) {
		var n = arguments.length > 2 ? H(arguments, 2) : [];
		return !E(e) || e instanceof RegExp ? e : n.length ? function() {
			return arguments.length ? e.apply(t, B(n, arguments, 0)) : e.apply(t, n)
		} : function() {
			return arguments.length ? e.apply(t, arguments) : e.call(t)
		}
	}
	function W(t, r) {
		var i = r;
		return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? i = n : k(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : O(r) && (i = "$SCOPE"), i
	}
	function G(t, e) {
		return void 0 === t ? n : (C(e) || (e = e ? 2 : null), JSON.stringify(t, W, e))
	}
	function J(t) {
		return _(t) ? JSON.parse(t) : t
	}
	function Y(t, e) {
		var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
		return isNaN(n) ? e : n
	}
	function K(t, e) {
		return t = new Date(t.getTime()), t.setMinutes(t.getMinutes() + e), t
	}
	function Z(t, e, n) {
		return n = n ? -1 : 1, K(t, n * (Y(e, t.getTimezoneOffset()) - t.getTimezoneOffset()))
	}
	function X(t) {
		t = Cr(t).clone();
		try {
			t.empty()
		} catch (t) {}
		var e = Cr("<div>").append(t).html();
		try {
			return t[0].nodeType === Wr ? gr(e) : e.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(t, e) {
				return "<" + gr(e)
			})
		} catch (t) {
			return gr(e)
		}
	}
	function Q(t) {
		try {
			return decodeURIComponent(t)
		} catch (t) {}
	}
	function tt(t) {
		var e, n, r = {};
		return o((t || "").split("&"), function(t) {
			if (t && (e = t.replace(/\+/g, "%20").split("="), n = Q(e[0]), b(n))) {
				var i = !b(e[1]) || Q(e[1]);
				yr.call(r, n) ? Rr(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
			}
		}), r
	}
	function et(t) {
		var e = [];
		return o(t, function(t, n) {
			Rr(t) ? o(t, function(t) {
				e.push(rt(n, !0) + (!0 === t ? "" : "=" + rt(t, !0)))
			}) : e.push(rt(n, !0) + (!0 === t ? "" : "=" + rt(t, !0)))
		}), e.length ? e.join("&") : ""
	}
	function nt(t) {
		return rt(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
	}
	function rt(t, e) {
		return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
	}
	function it(t, e) {
		var n, r, i = Lr.length;
		for (r = 0; r < i; ++r) if (n = Lr[r] + e, _(n = t.getAttribute(n))) return n;
		return null
	}
	function ot(t, e) {
		var n, r, i = {};
		o(Lr, function(e) {
			var i = e + "app";
			!n && t.hasAttribute && t.hasAttribute(i) && (n = t, r = t.getAttribute(i))
		}), o(Lr, function(e) {
			var i, o = e + "app";
			!n && (i = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
		}), n && (i.strictDi = null !== it(n, "strict-di"), e(n, r ? [r] : [], i))
	}
	function at(n, r, i) {
		w(i) || (i = {}), i = f({
			strictDi: !1
		}, i);
		var a = function() {
			if (n = Cr(n), n.injector()) {
				var t = n[0] === e ? "document" : X(n);
				throw Ir("btstrpd", "App Already Bootstrapped with this Element '{0}'", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
			}
			r = r || [], r.unshift(["$provide", function(t) {
				t.value("$rootElement", n)
			}]), i.debugInfoEnabled && r.push(["$compileProvider", function(t) {
				t.debugInfoEnabled(!0)
			}]), r.unshift("ng");
			var o = Kt(r, i.strictDi);
			return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(t, e, n, r) {
				t.$apply(function() {
					e.data("$injector", r), n(e)(t)
				})
			}]), o
		}, u = /^NG_ENABLE_DEBUG_INFO!/,
			s = /^NG_DEFER_BOOTSTRAP!/;
		if (t && u.test(t.name) && (i.debugInfoEnabled = !0, t.name = t.name.replace(u, "")), t && !s.test(t.name)) return a();
		t.name = t.name.replace(s, ""), Mr.resumeBootstrap = function(t) {
			return o(t, function(t) {
				r.push(t)
			}), a()
		}, E(Mr.resumeDeferredBootstrap) && Mr.resumeDeferredBootstrap()
	}
	function ut() {
		t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
	}
	function st(t) {
		var e = Mr.element(t).injector();
		if (!e) throw Ir("test", "no injector found for element argument to getTestability");
		return e.get("$$testability")
	}
	function ct(t, e) {
		return e = e || "_", t.replace(Br, function(t, n) {
			return (n ? e : "") + t.toLowerCase()
		})
	}
	function lt(t, e, n) {
		if (!t) throw Ir("areq", "Argument '{0}' is {1}", e || "?", n || "required");
		return t
	}
	function ft(t, e, n) {
		return n && Rr(t) && (t = t[t.length - 1]), lt(E(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
	}
	function ht(t, e) {
		if ("hasOwnProperty" === t) throw Ir("badname", "hasOwnProperty is not a valid {0} name", e)
	}
	function pt(t, e, n) {
		if (!e) return t;
		for (var r, i = e.split("."), o = t, a = i.length, u = 0; u < a; u++) r = i[u], t && (t = (o = t)[r]);
		return !n && E(t) ? z(o, t) : t
	}
	function dt(t) {
		var e = t[0],
			n = t[t.length - 1],
			r = [e];
		do {
			if (!(e = e.nextSibling)) break;
			r.push(e)
		} while (e !== n);
		return Cr(r)
	}
	function vt() {
		return Object.create(null)
	}
	function $t(t) {
		function e(t, e, n) {
			return t[e] || (t[e] = n())
		}
		var n = r("$injector"),
			i = r("ng"),
			o = e(t, "angular", Object);
		return o.$$minErr = o.$$minErr || r, e(o, "module", function() {
			var t = {};
			return function(r, o, a) {
				return function(t, e) {
					if ("hasOwnProperty" === t) throw i("badname", "hasOwnProperty is not a valid {0} name", e)
				}(r, "module"), o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function() {
					function t(t, e, n, r) {
						return r || (r = i),
						function() {
							return r[n || "push"]([t, e, arguments]), l
						}
					}
					function e(t, e) {
						return function(n, o) {
							return o && E(o) && (o.$$moduleName = r), i.push([t, e, arguments]), l
						}
					}
					if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
					var i = [],
						u = [],
						s = [],
						c = t("$injector", "invoke", "push", u),
						l = {
							_invokeQueue: i,
							_configBlocks: u,
							_runBlocks: s,
							requires: o,
							name: r,
							provider: e("$provide", "provider"),
							factory: e("$provide", "factory"),
							service: e("$provide", "service"),
							value: t("$provide", "value"),
							constant: t("$provide", "constant", "unshift"),
							decorator: e("$provide", "decorator"),
							animation: e("$animateProvider", "register"),
							filter: e("$filterProvider", "register"),
							controller: e("$controllerProvider", "register"),
							directive: e("$compileProvider", "directive"),
							config: c,
							run: function(t) {
								return s.push(t), this
							}
						};
					return a && c(a), l
				})
			}
		})
	}
	function mt(t) {
		var e = [];
		return JSON.stringify(t, function(t, n) {
			if (n = W(t, n), w(n)) {
				if (e.indexOf(n) >= 0) return "<<already seen>>";
				e.push(n)
			}
			return n
		})
	}
	function gt(t) {
		return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : void 0 === t ? "undefined" : "string" != typeof t ? mt(t) : t
	}
	function yt() {
		return ++Xr
	}
	function bt(t) {
		return t.replace(ei, function(t, e, n, r) {
			return r ? n.toUpperCase() : n
		}).replace(ni, "Moz$1")
	}
	function wt(t) {
		return !ai.test(t)
	}
	function xt(t) {
		var e = t.nodeType;
		return e === zr || !e || e === Jr
	}
	function _t(t) {
		for (var e in Zr[t.ng339]) return !0;
		return !1
	}
	function Ct(t, e) {
		var n, r, i, a, u = e.createDocumentFragment(),
			s = [];
		if (wt(t)) s.push(e.createTextNode(t));
		else {
			for (n = n || u.appendChild(e.createElement("div")), r = (ui.exec(t) || ["", ""])[1].toLowerCase(), i = ci[r] || ci._default, n.innerHTML = i[1] + t.replace(si, "<$1></$2>") + i[2], a = i[0]; a--;) n = n.lastChild;
			s = B(s, n.childNodes), n = u.firstChild, n.textContent = ""
		}
		return u.textContent = "", u.innerHTML = "", o(s, function(t) {
			u.appendChild(t)
		}), u
	}
	function St(t, n) {
		n = n || e;
		var r;
		return (r = oi.exec(t)) ? [n.createElement(r[1])] : (r = Ct(t, n)) ? r.childNodes : []
	}
	function Et(t) {
		if (t instanceof Et) return t;
		var e;
		if (_(t) && (t = Nr(t), e = !0), !(this instanceof Et)) {
			if (e && "<" != t.charAt(0)) throw ii("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
			return new Et(t)
		}
		e ? Rt(this, St(t)) : Rt(this, t)
	}
	function At(t) {
		return t.cloneNode(!0)
	}
	function kt(t, e) {
		if (e || jt(t), t.querySelectorAll) for (var n = t.querySelectorAll("*"), r = 0, i = n.length; r < i; r++) jt(n[r])
	}
	function Ot(t, e, n, r) {
		if (b(r)) throw ii("offargs", "jqLite#off() does not support the `selector` argument");
		var i = Tt(t),
			a = i && i.events,
			u = i && i.handle;
		if (u) if (e) o(e.split(" "), function(e) {
			if (b(n)) {
				var r = a[e];
				if (V(r || [], n), r && r.length > 0) return
			}
			ti(t, e, u), delete a[e]
		});
		else for (e in a) "$destroy" !== e && ti(t, e, u), delete a[e]
	}
	function jt(t, e) {
		var r = t.ng339,
			i = r && Zr[r];
		if (i) {
			if (e) return void delete i.data[e];
			i.handle && (i.events.$destroy && i.handle({}, "$destroy"), Ot(t)), delete Zr[r], t.ng339 = n
		}
	}
	function Tt(t, e) {
		var r = t.ng339,
			i = r && Zr[r];
		return e && !i && (t.ng339 = r = yt(), i = Zr[r] = {
			events: {},
			data: {},
			handle: n
		}), i
	}
	function It(t, e, n) {
		if (xt(t)) {
			var r = b(n),
				i = !r && e && !w(e),
				o = !e,
				a = Tt(t, !i),
				u = a && a.data;
			if (r) u[e] = n;
			else {
				if (o) return u;
				if (i) return u && u[e];
				f(u, e)
			}
		}
	}
	function Mt(t, e) {
		return !!t.getAttribute && (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1
	}
	function Ft(t, e) {
		e && t.setAttribute && o(e.split(" "), function(e) {
			t.setAttribute("class", Nr((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Nr(e) + " ", " ")))
		})
	}
	function Dt(t, e) {
		if (e && t.setAttribute) {
			var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
			o(e.split(" "), function(t) {
				t = Nr(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
			}), t.setAttribute("class", Nr(n))
		}
	}
	function Rt(t, e) {
		if (e) if (e.nodeType) t[t.length++] = e;
		else {
			var n = e.length;
			if ("number" == typeof n && e.window !== e) {
				if (n) for (var r = 0; r < n; r++) t[t.length++] = e[r]
			} else t[t.length++] = e
		}
	}
	function Pt(t, e) {
		return Nt(t, "$" + (e || "ngController") + "Controller")
	}
	function Nt(t, e, r) {
		t.nodeType == Jr && (t = t.documentElement);
		for (var i = Rr(e) ? e : [e]; t;) {
			for (var o = 0, a = i.length; o < a; o++) if ((r = Cr.data(t, i[o])) !== n) return r;
			t = t.parentNode || t.nodeType === Yr && t.host
		}
	}
	function Vt(t) {
		for (kt(t, !0); t.firstChild;) t.removeChild(t.firstChild)
	}
	function Ut(t, e) {
		e || kt(t);
		var n = t.parentNode;
		n && n.removeChild(t)
	}
	function qt(e, n) {
		n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : Cr(n).on("load", e)
	}
	function Lt(t, e) {
		var n = fi[e.toLowerCase()];
		return n && hi[N(t)] && n
	}
	function Bt(t, e) {
		var n = t.nodeName;
		return ("INPUT" === n || "TEXTAREA" === n) && pi[e]
	}
	function Ht(t, e) {
		var n = function(n, r) {
			n.isDefaultPrevented = function() {
				return n.defaultPrevented
			};
			var i = e[r || n.type],
				o = i ? i.length : 0;
			if (o) {
				if (y(n.immediatePropagationStopped)) {
					var a = n.stopImmediatePropagation;
					n.stopImmediatePropagation = function() {
						n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
					}
				}
				n.isImmediatePropagationStopped = function() {
					return !0 === n.immediatePropagationStopped
				}, o > 1 && (i = q(i));
				for (var u = 0; u < o; u++) n.isImmediatePropagationStopped() || i[u].call(t, n)
			}
		};
		return n.elem = t, n
	}
	function zt() {
		this.$get = function() {
			return f(Et, {
				hasClass: function(t, e) {
					return t.attr && (t = t[0]), Mt(t, e)
				},
				addClass: function(t, e) {
					return t.attr && (t = t[0]), Dt(t, e)
				},
				removeClass: function(t, e) {
					return t.attr && (t = t[0]), Ft(t, e)
				}
			})
		}
	}
	function Wt(t, e) {
		var n = t && t.$$hashKey;
		if (n) return "function" == typeof n && (n = t.$$hashKey()), n;
		var r = typeof t;
		return n = "function" == r || "object" == r && null !== t ? t.$$hashKey = r + ":" + (e || s)() : r + ":" + t
	}
	function Gt(t, e) {
		if (e) {
			var n = 0;
			this.nextUid = function() {
				return ++n
			}
		}
		o(t, this.put, this)
	}
	function Jt(t) {
		var e = t.toString().replace(gi, ""),
			n = e.match(vi);
		return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
	}
	function Yt(t, e, n) {
		var r, i, a, u;
		if ("function" == typeof t) {
			if (!(r = t.$inject)) {
				if (r = [], t.length) {
					if (e) throw _(n) && n || (n = t.name || Jt(t)), yi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
					i = t.toString().replace(gi, ""), a = i.match(vi), o(a[1].split($i), function(t) {
						t.replace(mi, function(t, e, n) {
							r.push(n)
						})
					})
				}
				t.$inject = r
			}
		} else Rr(t) ? (u = t.length - 1, ft(t[u], "fn"), r = t.slice(0, u)) : ft(t, "fn", !0);
		return r
	}
	function Kt(t, e) {
		function r(t) {
			return function(e, n) {
				if (!w(e)) return t(e, n);
				o(e, u(t))
			}
		}
		function i(t, e) {
			if (ht(t, "service"), (E(e) || Rr(e)) && (e = C.instantiate(e)), !e.$get) throw yi("pget", "Provider '{0}' must define $get factory method.", t);
			return x[t + $] = e
		}
		function a(t, e) {
			return function() {
				var n = A.invoke(e, this);
				if (y(n)) throw yi("undef", "Provider '{0}' must return a value from $get factory method.", t);
				return n
			}
		}
		function s(t, e, n) {
			return i(t, {
				$get: !1 !== n ? a(t, e) : e
			})
		}
		function c(t, e) {
			return s(t, ["$injector", function(t) {
				return t.instantiate(e)
			}])
		}
		function l(t, e) {
			return s(t, m(e), !1)
		}
		function f(t, e) {
			ht(t, "constant"), x[t] = e, S[t] = e
		}
		function h(t, e) {
			var n = C.get(t + $),
				r = n.$get;
			n.$get = function() {
				var t = A.invoke(r, n);
				return A.invoke(e, null, {
					$delegate: t
				})
			}
		}
		function p(t) {
			var e, n = [];
			return o(t, function(t) {
				function r(t) {
					var e, n;
					for (e = 0, n = t.length; e < n; e++) {
						var r = t[e],
							i = C.get(r[0]);
						i[r[1]].apply(i, r[2])
					}
				}
				if (!b.get(t)) {
					b.put(t, !0);
					try {
						_(t) ? (e = Er(t), n = n.concat(p(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : E(t) ? n.push(C.invoke(t)) : Rr(t) ? n.push(C.invoke(t)) : ft(t, "module")
					} catch (e) {
						throw Rr(t) && (t = t[t.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), yi("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, e.stack || e.message || e)
					}
				}
			}), n
		}
		function d(t, n) {
			function r(e, r) {
				if (t.hasOwnProperty(e)) {
					if (t[e] === v) throw yi("cdep", "Circular dependency found: {0}", e + " <- " + g.join(" <- "));
					return t[e]
				}
				try {
					return g.unshift(e), t[e] = v, t[e] = n(e, r)
				} catch (n) {
					throw t[e] === v && delete t[e], n
				} finally {
					g.shift()
				}
			}
			function i(t, n, i, o) {
				"string" == typeof i && (o = i, i = null);
				var a, u, s, c = [],
					l = Kt.$$annotate(t, e, o);
				for (u = 0, a = l.length; u < a; u++) {
					if ("string" != typeof(s = l[u])) throw yi("itkn", "Incorrect injection token! Expected service name as string, got {0}", s);
					c.push(i && i.hasOwnProperty(s) ? i[s] : r(s, o))
				}
				return Rr(t) && (t = t[a]), t.apply(n, c)
			}
			function o(t, e, n) {
				var r = Object.create((Rr(t) ? t[t.length - 1] : t).prototype || null),
					o = i(t, r, e, n);
				return w(o) || E(o) ? o : r
			}
			return {
				invoke: i,
				instantiate: o,
				get: r,
				annotate: Kt.$$annotate,
				has: function(e) {
					return x.hasOwnProperty(e + $) || t.hasOwnProperty(e)
				}
			}
		}
		e = !0 === e;
		var v = {}, $ = "Provider",
			g = [],
			b = new Gt([], !0),
			x = {
				$provide: {
					provider: r(i),
					factory: r(s),
					service: r(c),
					value: r(l),
					constant: r(f),
					decorator: h
				}
			}, C = x.$injector = d(x, function(t, e) {
				throw Mr.isString(e) && g.push(e), yi("unpr", "Unknown provider: {0}", g.join(" <- "))
			}),
			S = {}, A = S.$injector = d(S, function(t, e) {
				var r = C.get(t + $, e);
				return A.invoke(r.$get, r, n, t)
			});
		return o(p(t), function(t) {
			t && A.invoke(t)
		}), A
	}
	function Zt() {
		var t = !0;
		this.disableAutoScrolling = function() {
			t = !1
		}, this.$get = ["$window", "$location", "$rootScope", function(e, n, r) {
			function i(t) {
				var e = null;
				return Array.prototype.some.call(t, function(t) {
					if ("a" === N(t)) return e = t, !0
				}), e
			}
			function o() {
				var t = u.yOffset;
				if (E(t)) t = t();
				else if (R(t)) {
					var n = t[0],
						r = e.getComputedStyle(n);
					t = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
				} else C(t) || (t = 0);
				return t
			}
			function a(t) {
				if (t) {
					t.scrollIntoView();
					var n = o();
					if (n) {
						var r = t.getBoundingClientRect().top;
						e.scrollBy(0, r - n)
					}
				} else e.scrollTo(0, 0)
			}
			function u(t) {
				t = _(t) ? t : n.hash();
				var e;
				t ? (e = s.getElementById(t)) ? a(e) : (e = i(s.getElementsByName(t))) ? a(e) : "top" === t && a(null) : a(null)
			}
			var s = e.document;
			return t && r.$watch(function() {
				return n.hash()
			}, function(t, e) {
				t === e && "" === t || qt(function() {
					r.$evalAsync(u)
				})
			}), u
		}]
	}
	function Xt(t, e) {
		return t || e ? t ? e ? (Rr(t) && (t = t.join(" ")), Rr(e) && (e = e.join(" ")), t + " " + e) : t : e : ""
	}
	function Qt(t) {
		for (var e = 0; e < t.length; e++) {
			var n = t[e];
			if (n.nodeType === wi) return n
		}
	}
	function te(t) {
		_(t) && (t = t.split(" "));
		var e = vt();
		return o(t, function(t) {
			t.length && (e[t] = !0)
		}), e
	}
	function ee(t) {
		return w(t) ? t : {}
	}
	function ne(t, e, n, r) {
		function i(t) {
			try {
				t.apply(null, H(arguments, 1))
			} finally {
				if (0 === --g) for (; b.length;) try {
					b.pop()()
				} catch (t) {
					n.error(t)
				}
			}
		}
		function a(t) {
			var e = t.indexOf("#");
			return -1 === e ? "" : t.substr(e)
		}
		function u() {
			c(), l()
		}
		function s() {
			try {
				return p.state
			} catch (t) {}
		}
		function c() {
			w = s(), w = y(w) ? null : w, L(w, k) && (w = k), k = w
		}
		function l() {
			_ === f.url() && x === w || (_ = f.url(), x = w, o(E, function(t) {
				t(f.url(), w)
			}))
		}
		var f = this,
			h = (e[0], t.location),
			p = t.history,
			d = t.setTimeout,
			$ = t.clearTimeout,
			m = {};
		f.isMock = !1;
		var g = 0,
			b = [];
		f.$$completeOutstandingRequest = i, f.$$incOutstandingRequestCount = function() {
			g++
		}, f.notifyWhenNoOutstandingRequests = function(t) {
			0 === g ? t() : b.push(t)
		};
		var w, x, _ = h.href,
			C = e.find("base"),
			S = null;
		c(), x = w, f.url = function(e, n, i) {
			if (y(i) && (i = null), h !== t.location && (h = t.location), p !== t.history && (p = t.history), e) {
				var o = x === i;
				if (_ === e && (!r.history || o)) return f;
				var u = _ && Fe(_) === Fe(e);
				return _ = e, x = i, !r.history || u && o ? (u && !S || (S = e), n ? h.replace(e) : u ? h.hash = a(e) : h.href = e) : (p[n ? "replaceState" : "pushState"](i, "", e), c(), x = w), f
			}
			return S || h.href.replace(/%27/g, "'")
		}, f.state = function() {
			return w
		};
		var E = [],
			A = !1,
			k = null;
		f.onUrlChange = function(e) {
			return A || (r.history && Cr(t).on("popstate", u), Cr(t).on("hashchange", u), A = !0), E.push(e), e
		}, f.$$applicationDestroyed = function() {
			Cr(t).off("hashchange popstate", u)
		}, f.$$checkUrlChange = l, f.baseHref = function() {
			var t = C.attr("href");
			return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
		}, f.defer = function(t, e) {
			var n;
			return g++, n = d(function() {
				delete m[n], i(t)
			}, e || 0), m[n] = !0, n
		}, f.defer.cancel = function(t) {
			return !!m[t] && (delete m[t], $(t), i(v), !0)
		}
	}
	function re() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function(t, e, n, r) {
			return new ne(t, r, e, n)
		}]
	}
	function ie() {
		this.$get = function() {
			function t(t, n) {
				function i(t) {
					t != h && (p ? p == t && (p = t.n) : p = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
				}
				function o(t, e) {
					t != e && (t && (t.p = e), e && (e.n = t))
				}
				if (t in e) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
				var a = 0,
					u = f({}, n, {
						id: t
					}),
					s = {}, c = n && n.capacity || Number.MAX_VALUE,
					l = {}, h = null,
					p = null;
				return e[t] = {
					put: function(t, e) {
						if (!y(e)) {
							if (c < Number.MAX_VALUE) {
								i(l[t] || (l[t] = {
									key: t
								}))
							}
							return t in s || a++, s[t] = e, a > c && this.remove(p.key), e
						}
					},
					get: function(t) {
						if (c < Number.MAX_VALUE) {
							var e = l[t];
							if (!e) return;
							i(e)
						}
						return s[t]
					},
					remove: function(t) {
						if (c < Number.MAX_VALUE) {
							var e = l[t];
							if (!e) return;
							e == h && (h = e.p), e == p && (p = e.n), o(e.n, e.p), delete l[t]
						}
						delete s[t], a--
					},
					removeAll: function() {
						s = {}, a = 0, l = {}, h = p = null
					},
					destroy: function() {
						s = null, u = null, l = null, delete e[t]
					},
					info: function() {
						return f({}, u, {
							size: a
						})
					}
				}
			}
			var e = {};
			return t.info = function() {
				var t = {};
				return o(e, function(e, n) {
					t[n] = e.info()
				}), t
			}, t.get = function(t) {
				return e[t]
			}, t
		}
	}
	function oe() {
		this.$get = ["$cacheFactory", function(t) {
			return t("templates")
		}]
	}
	function ae(t, r) {
		function i(t, e, n) {
			var r = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
				i = {};
			return o(t, function(t, o) {
				var a = t.match(r);
				if (!a) throw Si("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, o, t, n ? "controller bindings definition" : "isolate scope definition");
				i[o] = {
					mode: a[1][0],
					collection: "*" === a[2],
					optional: "?" === a[3],
					attrName: a[4] || o
				}
			}), i
		}
		function a(t, e) {
			var n = {
				isolateScope: null,
				bindToController: null
			};
			if (w(t.scope) && (!0 === t.bindToController ? (n.bindToController = i(t.scope, e, !0), n.isolateScope = {}) : n.isolateScope = i(t.scope, e, !1)), w(t.bindToController) && (n.bindToController = i(t.bindToController, e, !0)), w(n.bindToController)) {
				var r = t.controller,
					o = t.controllerAs;
				if (!r) throw Si("noctrl", "Cannot bind to controller without directive '{0}'s controller.", e);
				if (!le(r, o)) throw Si("noident", "Cannot bind to controller without identifier for directive '{0}'.", e)
			}
			return n
		}
		function s(t) {
			var e = t.charAt(0);
			if (!e || e !== gr(e)) throw Si("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", t);
			if (t !== t.trim()) throw Si("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", t)
		}
		var c = {}, l = "Directive",
			h = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
			p = /(([\w\-]+)(?:\:([^;]+))?;?)/,
			g = P("ngSrc,ngSrcset,src,srcset"),
			y = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
			x = /^(on[a-z]+|formaction)$/;
		this.directive = function e(n, r) {
			return ht(n, "directive"), _(n) ? (s(n), lt(r, "directiveFactory"), c.hasOwnProperty(n) || (c[n] = [], t.factory(n + l, ["$injector", "$exceptionHandler", function(t, e) {
				var r = [];
				return o(c[n], function(i, o) {
					try {
						var u = t.invoke(i);
						E(u) ? u = {
							compile: m(u)
						} : !u.compile && u.link && (u.compile = m(u.link)), u.priority = u.priority || 0, u.index = o, u.name = u.name || n, u.require = u.require || u.controller && u.name, u.restrict = u.restrict || "EA";
						var s = u.$$bindings = a(u, u.name);
						w(s.isolateScope) && (u.$$isolateBindings = s.isolateScope), u.$$moduleName = i.$$moduleName, r.push(u)
					} catch (t) {
						e(t)
					}
				}), r
			}])), c[n].push(r)) : o(n, u(e)), this
		}, this.aHrefSanitizationWhitelist = function(t) {
			return b(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
		}, this.imgSrcSanitizationWhitelist = function(t) {
			return b(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
		};
		var C = !0;
		this.debugInfoEnabled = function(t) {
			return b(t) ? (C = t, this) : C
		}, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(t, r, i, a, u, s, m, b, S, A, k) {
			function j(t, e) {
				try {
					t.addClass(e)
				} catch (t) {}
			}
			function T(t, e, n, r, i) {
				t instanceof Cr || (t = Cr(t)), o(t, function(e, n) {
					e.nodeType == Wr && e.nodeValue.match(/\S+/) && (t[n] = Cr(e).wrap("<span></span>").parent()[0])
				});
				var a = M(t, e, t, n, r, i);
				T.$$addScopeClass(t);
				var u = null;
				return function(e, n, r) {
					lt(e, "scope"), r = r || {};
					var i = r.parentBoundTranscludeFn,
						o = r.transcludeControllers,
						s = r.futureParentElement;
					i && i.$$boundTransclude && (i = i.$$boundTransclude), u || (u = I(s));
					var c;
					if (c = "html" !== u ? Cr(Z(u, Cr("<div>").append(t).html())) : n ? li.clone.call(t) : t, o) for (var l in o) c.data("$" + l + "Controller", o[l].instance);
					return T.$$addScopeInfo(c, e), n && n(c, e), a && a(e, c, c, i), c
				}
			}
			function I(t) {
				var e = t && t[0];
				return e && "foreignobject" !== N(e) && e.toString().match(/SVG/) ? "svg" : "html"
			}
			function M(t, e, r, i, o, a) {
				function u(t, r, i, o) {
					var a, u, s, c, l, f, h, p, $;
					if (d) {
						var m = r.length;
						for ($ = new Array(m), l = 0; l < v.length; l += 3) h = v[l], $[h] = r[h]
					} else $ = r;
					for (l = 0, f = v.length; l < f;) if (s = $[v[l++]], a = v[l++], u = v[l++], a) {
						if (a.scope) {
							c = t.$new(), T.$$addScopeInfo(Cr(s), c);
							var g = a.$$destroyBindings;
							g && (a.$$destroyBindings = null, c.$on("$destroyed", g))
						} else c = t;
						p = a.transcludeOnThisElement ? F(t, a.transclude, o) : !a.templateOnThisElement && o ? o : !o && e ? F(t, e) : null, a(u, c, s, i, p, a)
					} else u && u(t, s.childNodes, n, o)
				}
				for (var s, c, l, f, h, p, d, v = [], $ = 0; $ < t.length; $++) s = new ot, c = D(t[$], [], s, 0 === $ ? i : n, o), l = c.length ? U(c, t[$], s, e, r, null, [], [], a) : null, l && l.scope && T.$$addScopeClass(s.$$element), h = l && l.terminal || !(f = t[$].childNodes) || !f.length ? null : M(f, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : e), (l || h) && (v.push($, l, h), p = !0, d = d || l), a = null;
				return p ? u : null
			}
			function F(t, e, n) {
				return function(r, i, o, a, u) {
					return r || (r = t.$new(!1, u), r.$$transcluded = !0), e(r, i, {
						parentBoundTranscludeFn: n,
						transcludeControllers: o,
						futureParentElement: a
					})
				}
			}
			function D(t, e, n, r, i) {
				var o, a, u = t.nodeType,
					s = n.$attr;
				switch (u) {
					case zr:
						B(e, ue(N(t)), "E", r, i);
						for (var c, l, f, d, v, $, m = t.attributes, g = 0, y = m && m.length; g < y; g++) {
							var b = !1,
								x = !1;
							c = m[g], l = c.name, v = Nr(c.value), d = ue(l), ($ = ft.test(d)) && (l = l.replace(Ei, "").substr(8).replace(/_(.)/g, function(t, e) {
								return e.toUpperCase()
							}));
							var C = d.replace(/(Start|End)$/, "");
							z(C) && d === C + "Start" && (b = l, x = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6)), f = ue(l.toLowerCase()), s[f] = l, !$ && n.hasOwnProperty(f) || (n[f] = v, Lt(t, f) && (n[f] = !0)), tt(t, e, v, f, $), B(e, f, "A", r, i, b, x)
						}
						if (a = t.className, w(a) && (a = a.animVal), _(a) && "" !== a) for (; o = p.exec(a);) f = ue(o[2]), B(e, f, "C", r, i) && (n[f] = Nr(o[3])), a = a.substr(o.index + o[0].length);
						break;
					case Wr:
						if (11 === _r) for (; t.parentNode && t.nextSibling && t.nextSibling.nodeType === Wr;) t.nodeValue = t.nodeValue + t.nextSibling.nodeValue, t.parentNode.removeChild(t.nextSibling);
						K(e, t.nodeValue);
						break;
					case Gr:
						try {
							o = h.exec(t.nodeValue), o && (f = ue(o[1]), B(e, f, "M", r, i) && (n[f] = Nr(o[2])))
						} catch (t) {}
				}
				return e.sort(J), e
			}
			function R(t, e, n) {
				var r = [],
					i = 0;
				if (e && t.hasAttribute && t.hasAttribute(e)) do {
					if (!t) throw Si("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
					t.nodeType == zr && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
				} while (i > 0);
				else r.push(t);
				return Cr(r)
			}
			function P(t, e, n) {
				return function(r, i, o, a, u) {
					return i = R(i[0], e, n), t(r, i, o, a, u)
				}
			}
			function U(t, r, o, a, u, c, l, f, h) {
				function p(t, e, n, r) {
					t && (n && (t = P(t, n, r)), t.require = m.require, t.directiveName = g, (j === m || m.$$isolateScope) && (t = nt(t, {
						isolateScope: !0
					})), l.push(t)), e && (n && (e = P(e, n, r)), e.require = m.require, e.directiveName = g, (j === m || m.$$isolateScope) && (e = nt(e, {
						isolateScope: !0
					})), f.push(e))
				}
				function d(t, e, n, r) {
					var i;
					if (_(e)) {
						var o = e.match(y),
							a = e.substring(o[0].length),
							u = o[1] || o[3],
							s = "?" === o[2];
						if ("^^" === u ? n = n.parent() : (i = r && r[a], i = i && i.instance), !i) {
							var c = "$" + a + "Controller";
							i = u ? n.inheritedData(c) : n.data(c)
						}
						if (!i && !s) throw Si("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, t)
					} else if (Rr(e)) {
						i = [];
						for (var l = 0, f = e.length; l < f; l++) i[l] = d(t, e[l], n, r)
					}
					return i || null
				}
				function v(t, e, n, r, i, o) {
					var a = vt();
					for (var u in r) {
						var c = r[u],
							l = {
								$scope: c === j || c.$$isolateScope ? i : o,
								$element: t,
								$attrs: e,
								$transclude: n
							}, f = c.controller;
						"@" == f && (f = e[c.name]);
						var h = s(f, l, !0, c.controllerAs);
						a[c.name] = h, V || t.data("$" + c.name + "Controller", h.instance)
					}
					return a
				}
				function $(t, e, i, a, u, s) {
					function c(t, e, r) {
						var i;
						return O(t) || (r = e, e = t, t = n), V && (i = y), r || (r = V ? w.parent() : w), u(t, e, i, r, M)
					}
					var h, p, $, m, g, y, b, w, x;
					if (r === i ? (x = o, w = o.$$element) : (w = Cr(i), x = new ot(w, o)), j && (g = e.$new(!0)), u && (b = c, b.$$boundTransclude = u), k && (y = v(w, x, b, k, g, e)), j && (T.$$addScopeInfo(w, g, !0, !(I && (I === j || I === j.$$originalDirective))), T.$$addScopeClass(w, !0), g.$$isolateBindings = j.$$isolateBindings, it(e, x, g, g.$$isolateBindings, j, g)), y) {
						var _, C, S = j || A;
						S && y[S.name] && (_ = S.$$bindings.bindToController, (m = y[S.name]) && m.identifier && _ && (C = m, s.$$destroyBindings = it(e, x, m.instance, _, S)));
						for (h in y) {
							m = y[h];
							var E = m();
							E !== m.instance && (m.instance = E, w.data("$" + h + "Controller", E), m === C && (s.$$destroyBindings(), s.$$destroyBindings = it(e, x, E, _, S)))
						}
					}
					for (h = 0, p = l.length; h < p; h++) $ = l[h], rt($, $.isolateScope ? g : e, w, x, $.require && d($.directiveName, $.require, w, y), b);
					var M = e;
					for (j && (j.template || null === j.templateUrl) && (M = g), t && t(M, i.childNodes, n, u), h = f.length - 1; h >= 0; h--) $ = f[h], rt($, $.isolateScope ? g : e, w, x, $.require && d($.directiveName, $.require, w, y), b)
				}
				h = h || {};
				for (var m, g, b, x, C, S = -Number.MAX_VALUE, A = h.newScopeDirective, k = h.controllerDirectives, j = h.newIsolateScopeDirective, I = h.templateDirective, M = h.nonTlbTranscludeDirective, F = !1, N = !1, V = h.hasElementTranscludeDirective, U = o.$$element = Cr(r), L = c, B = a, z = 0, J = t.length; z < J; z++) {
					m = t[z];
					var K = m.$$start,
						Q = m.$$end;
					if (K && (U = R(r, K, Q)), b = n, S > m.priority) break;
					if ((C = m.scope) && (m.templateUrl || (w(C) ? (Y("new/isolated scope", j || A, m, U), j = m) : Y("new/isolated scope", j, m, U)), A = A || m), g = m.name, !m.templateUrl && m.controller && (C = m.controller, k = k || vt(), Y("'" + g + "' controller", k[g], m, U), k[g] = m), (C = m.transclude) && (F = !0, m.$$tlb || (Y("transclusion", M, m, U), M = m), "element" == C ? (V = !0, S = m.priority, b = U, U = o.$$element = Cr(e.createComment(" " + g + ": " + o[g] + " ")), r = U[0], et(u, H(b), r), B = T(b, a, S, L && L.name, {
						nonTlbTranscludeDirective: M
					})) : (b = Cr(At(r)).contents(), U.empty(), B = T(b, a))), m.template) if (N = !0, Y("template", I, m, U), I = m, C = E(m.template) ? m.template(U, o) : m.template, C = st(C), m.replace) {
						if (L = m, b = wt(C) ? [] : ce(Z(m.templateNamespace, Nr(C))), r = b[0], 1 != b.length || r.nodeType !== zr) throw Si("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g, "");
						et(u, U, r);
						var tt = {
							$attr: {}
						}, at = D(r, [], tt),
							ut = t.splice(z + 1, t.length - (z + 1));
						j && q(at), t = t.concat(at).concat(ut), W(o, tt), J = t.length
					} else U.html(C);
					if (m.templateUrl) N = !0, Y("template", I, m, U), I = m, m.replace && (L = m), $ = G(t.splice(z, t.length - z), U, o, u, F && B, l, f, {
						controllerDirectives: k,
						newScopeDirective: A !== m && A,
						newIsolateScopeDirective: j,
						templateDirective: I,
						nonTlbTranscludeDirective: M
					}), J = t.length;
					else if (m.compile) try {
						x = m.compile(U, o, B), E(x) ? p(null, x, K, Q) : x && p(x.pre, x.post, K, Q)
					} catch (t) {
						i(t, X(U))
					}
					m.terminal && ($.terminal = !0, S = Math.max(S, m.priority))
				}
				return $.scope = A && !0 === A.scope, $.transcludeOnThisElement = F, $.templateOnThisElement = N, $.transclude = B, h.hasElementTranscludeDirective = V, $
			}
			function q(t) {
				for (var e = 0, n = t.length; e < n; e++) t[e] = d(t[e], {
					$$isolateScope: !0
				})
			}
			function B(e, r, o, a, u, s, f) {
				if (r === u) return null;
				var h = null;
				if (c.hasOwnProperty(r)) for (var p, v = t.get(r + l), $ = 0, m = v.length; $ < m; $++) try {
					p = v[$], (a === n || a > p.priority) && -1 != p.restrict.indexOf(o) && (s && (p = d(p, {
						$$start: s,
						$$end: f
					})), e.push(p), h = p)
				} catch (t) {
					i(t)
				}
				return h
			}
			function z(e) {
				if (c.hasOwnProperty(e)) for (var n, r = t.get(e + l), i = 0, o = r.length; i < o; i++) if (n = r[i], n.multiElement) return !0;
				return !1
			}
			function W(t, e) {
				var n = e.$attr,
					r = t.$attr,
					i = t.$$element;
				o(t, function(r, i) {
					"$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
				}), o(e, function(e, o) {
					"class" == o ? (j(i, e), t.class = (t.class ? t.class + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
				})
			}
			function G(t, e, n, r, i, u, s, c) {
				var l, f, h = [],
					p = e[0],
					v = t.shift(),
					$ = d(v, {
						templateUrl: null,
						transclude: null,
						replace: null,
						$$originalDirective: v
					}),
					m = E(v.templateUrl) ? v.templateUrl(e, n) : v.templateUrl,
					g = v.templateNamespace;
				return e.empty(), a(m).then(function(a) {
					var d, y, b, x;
					if (a = st(a), v.replace) {
						if (b = wt(a) ? [] : ce(Z(g, Nr(a))), d = b[0], 1 != b.length || d.nodeType !== zr) throw Si("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", v.name, m);
						y = {
							$attr: {}
						}, et(r, e, d);
						var _ = D(d, [], y);
						w(v.scope) && q(_), t = _.concat(t), W(n, y)
					} else d = p, e.html(a);
					for (t.unshift($), l = U(t, d, n, i, e, v, u, s, c), o(r, function(t, n) {
						t == d && (r[n] = e[0])
					}), f = M(e[0].childNodes, i); h.length;) {
						var C = h.shift(),
							S = h.shift(),
							E = h.shift(),
							A = h.shift(),
							k = e[0];
						if (!C.$$destroyed) {
							if (S !== p) {
								var O = S.className;
								c.hasElementTranscludeDirective && v.replace || (k = At(d)), et(E, Cr(S), k), j(Cr(k), O)
							}
							x = l.transcludeOnThisElement ? F(C, l.transclude, A) : A, l(f, C, k, r, x, l)
						}
					}
					h = null
				}),
				function(t, e, n, r, i) {
					var o = i;
					e.$$destroyed || (h ? h.push(e, n, r, o) : (l.transcludeOnThisElement && (o = F(e, l.transclude, i)), l(f, e, n, r, o, l)))
				}
			}
			function J(t, e) {
				var n = e.priority - t.priority;
				return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
			}
			function Y(t, e, n, r) {
				function i(t) {
					return t ? " (module: " + t + ")" : ""
				}
				if (e) throw Si("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", e.name, i(e.$$moduleName), n.name, i(n.$$moduleName), t, X(r))
			}
			function K(t, e) {
				var n = r(e, !0);
				n && t.push({
					priority: 0,
					compile: function(t) {
						var e = t.parent(),
							r = !! e.length;
						return r && T.$$addBindingClass(e),
						function(t, e) {
							var i = e.parent();
							r || T.$$addBindingClass(i), T.$$addBindingInfo(i, n.expressions), t.$watch(n, function(t) {
								e[0].nodeValue = t
							})
						}
					}
				})
			}
			function Z(t, n) {
				switch (t = gr(t || "html")) {
					case "svg":
					case "math":
						var r = e.createElement("div");
						return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
					default:
						return n
				}
			}
			function Q(t, e) {
				if ("srcdoc" == e) return S.HTML;
				var n = N(t);
				return "xlinkHref" == e || "form" == n && "action" == e || "img" != n && ("src" == e || "ngSrc" == e) ? S.RESOURCE_URL : void 0
			}
			function tt(t, e, n, i, o) {
				var a = Q(t, i);
				o = g[i] || o;
				var u = r(n, !0, a, o);
				if (u) {
					if ("multiple" === i && "select" === N(t)) throw Si("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", X(t));
					e.push({
						priority: 100,
						compile: function() {
							return {
								pre: function(t, e, s) {
									var c = s.$$observers || (s.$$observers = {});
									if (x.test(i)) throw Si("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
									var l = s[i];
									l !== n && (u = l && r(l, !0, a, o), n = l), u && (s[i] = u(t), (c[i] || (c[i] = [])).$$inter = !0, (s.$$observers && s.$$observers[i].$$scope || t).$watch(u, function(t, e) {
										"class" === i && t != e ? s.$updateClass(t, e) : s.$set(i, t)
									}))
								}
							}
						}
					})
				}
			}
			function et(t, n, r) {
				var i, o, a = n[0],
					u = n.length,
					s = a.parentNode;
				if (t) for (i = 0, o = t.length; i < o; i++) if (t[i] == a) {
					t[i++] = r;
					for (var c = i, l = c + u - 1, f = t.length; c < f; c++, l++) l < f ? t[c] = t[l] : delete t[c];
					t.length -= u - 1, t.context === a && (t.context = r);
					break
				}
				s && s.replaceChild(r, a);
				var h = e.createDocumentFragment();
				h.appendChild(a), Cr.hasData(a) && (Cr(r).data(Cr(a).data()), Sr ? (Dr = !0, Sr.cleanData([a])) : delete Cr.cache[a[Cr.expando]]);
				for (var p = 1, d = n.length; p < d; p++) {
					var v = n[p];
					Cr(v).remove(), h.appendChild(v), delete n[p]
				}
				n[0] = r, n.length = 1
			}
			function nt(t, e) {
				return f(function() {
					return t.apply(null, arguments)
				}, t, e)
			}
			function rt(t, e, n, r, o, a) {
				try {
					t(e, n, r, o, a)
				} catch (t) {
					i(t, X(n))
				}
			}
			function it(t, e, i, a, s, c) {
				var l;
				o(a, function(o, a) {
					var c, f, h, p, d = o.attrName,
						$ = o.optional,
						m = o.mode;
					switch (yr.call(e, d) || (e[d] = n), m) {
						case "@":
							e[d] || $ || (i[a] = n), e.$observe(d, function(t) {
								i[a] = t
							}), e.$$observers[d].$$scope = t, e[d] && (i[a] = r(e[d])(t));
							break;
						case "=":
							if ($ && !e[d]) return;
							f = u(e[d]), p = f.literal ? L : function(t, e) {
								return t === e || t !== t && e !== e
							}, h = f.assign || function() {
								throw c = i[a] = f(t), Si("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", e[d], s.name)
							}, c = i[a] = f(t);
							var g = function(e) {
								return p(e, i[a]) || (p(e, c) ? h(t, e = i[a]) : i[a] = e), c = e
							};
							g.$stateful = !0;
							var y;
							y = o.collection ? t.$watchCollection(e[d], g) : t.$watch(u(e[d], g), null, f.literal), l = l || [], l.push(y);
							break;
						case "&":
							if ((f = u(e[d])) === v && $) break;
							i[a] = function(e) {
								return f(t, e)
							}
					}
				});
				var f = l ? function() {
						for (var t = 0, e = l.length; t < e; ++t) l[t]()
					} : v;
				return c && f !== v ? (c.$on("$destroy", f), v) : f
			}
			var ot = function(t, e) {
				if (e) {
					var n, r, i, o = Object.keys(e);
					for (n = 0, r = o.length; n < r; n++) i = o[n], this[i] = e[i]
				} else this.$attr = {};
				this.$$element = t
			};
			ot.prototype = {
				$normalize: ue,
				$addClass: function(t) {
					t && t.length > 0 && A.addClass(this.$$element, t)
				},
				$removeClass: function(t) {
					t && t.length > 0 && A.removeClass(this.$$element, t)
				},
				$updateClass: function(t, e) {
					var n = se(t, e);
					n && n.length && A.addClass(this.$$element, n);
					var r = se(e, t);
					r && r.length && A.removeClass(this.$$element, r)
				},
				$set: function(t, e, r, a) {
					var u, s = this.$$element[0],
						c = Lt(s, t),
						l = Bt(s, t),
						f = t;
					if (c ? (this.$$element.prop(t, e), a = c) : l && (this[l] = e, f = l), this[t] = e, a ? this.$attr[t] = a : (a = this.$attr[t]) || (this.$attr[t] = a = ct(t, "-")), "a" === (u = N(this.$$element)) && "href" === t || "img" === u && "src" === t) this[t] = e = k(e, "src" === t);
					else if ("img" === u && "srcset" === t) {
						for (var h = "", p = Nr(e), d = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, v = /\s/.test(p) ? d : /(,)/, $ = p.split(v), m = Math.floor($.length / 2), g = 0; g < m; g++) {
							var y = 2 * g;
							h += k(Nr($[y]), !0), h += " " + Nr($[y + 1])
						}
						var b = Nr($[2 * g]).split(/\s/);
						h += k(Nr(b[0]), !0), 2 === b.length && (h += " " + Nr(b[1])), this[t] = e = h
					}!1 !== r && (null === e || e === n ? this.$$element.removeAttr(a) : this.$$element.attr(a, e));
					var w = this.$$observers;
					w && o(w[f], function(t) {
						try {
							t(e)
						} catch (t) {
							i(t)
						}
					})
				},
				$observe: function(t, e) {
					var n = this,
						r = n.$$observers || (n.$$observers = vt()),
						i = r[t] || (r[t] = []);
					return i.push(e), m.$evalAsync(function() {
						!i.$$inter && n.hasOwnProperty(t) && e(n[t])
					}),
					function() {
						V(i, e)
					}
				}
			};
			var at = r.startSymbol(),
				ut = r.endSymbol(),
				st = "{{" == at || "}}" == ut ? $ : function(t) {
					return t.replace(/\{\{/g, at).replace(/}}/g, ut)
				}, ft = /^ngAttr[A-Z]/;
			return T.$$addBindingInfo = C ? function(t, e) {
				var n = t.data("$binding") || [];
				Rr(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
			} : v, T.$$addBindingClass = C ? function(t) {
				j(t, "ng-binding")
			} : v, T.$$addScopeInfo = C ? function(t, e, n, r) {
				var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
				t.data(i, e)
			} : v, T.$$addScopeClass = C ? function(t, e) {
				j(t, e ? "ng-isolate-scope" : "ng-scope")
			} : v, T
		}]
	}
	function ue(t) {
		return bt(t.replace(Ei, ""))
	}
	function se(t, e) {
		var n = "",
			r = t.split(/\s+/),
			i = e.split(/\s+/);
		t: for (var o = 0; o < r.length; o++) {
			for (var a = r[o], u = 0; u < i.length; u++) if (a == i[u]) continue t;
			n += (n.length > 0 ? " " : "") + a
		}
		return n
	}
	function ce(t) {
		t = Cr(t);
		var e = t.length;
		if (e <= 1) return t;
		for (; e--;) {
			t[e].nodeType === Gr && kr.call(t, e, 1)
		}
		return t
	}
	function le(t, e) {
		if (e && _(e)) return e;
		if (_(t)) {
			var n = ki.exec(t);
			if (n) return n[3]
		}
	}
	function fe() {
		var t = {}, e = !1;
		this.register = function(e, n) {
			ht(e, "controller"), w(e) ? f(t, e) : t[e] = n
		}, this.allowGlobals = function() {
			e = !0
		}, this.$get = ["$injector", "$window", function(i, o) {
			function a(t, e, n, i) {
				if (!t || !w(t.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, e);
				t.$scope[e] = n
			}
			return function(r, u, s, c) {
				var l, h, p, d;
				if (s = !0 === s, c && _(c) && (d = c), _(r)) {
					if (!(h = r.match(ki))) throw Ai("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
					p = h[1], d = d || h[3], r = t.hasOwnProperty(p) ? t[p] : pt(u.$scope, p, !0) || (e ? pt(o, p, !0) : n), ft(r, p, !0)
				}
				if (s) {
					var v = (Rr(r) ? r[r.length - 1] : r).prototype;
					l = Object.create(v || null), d && a(u, d, l, p || r.name);
					return f(function() {
						var t = i.invoke(r, l, u, p);
						return t !== l && (w(t) || E(t)) && (l = t, d && a(u, d, l, p || r.name)), l
					}, {
						instance: l,
						identifier: d
					})
				}
				return l = i.instantiate(r, u, p), d && a(u, d, l, p || r.name), l
			}
		}]
	}
	function he() {
		this.$get = ["$window", function(t) {
			return Cr(t.document)
		}]
	}
	function pe() {
		this.$get = ["$log", function(t) {
			return function(e, n) {
				t.error.apply(t, arguments)
			}
		}]
	}
	function de(t) {
		return w(t) ? S(t) ? t.toISOString() : G(t) : t
	}
	function ve() {
		this.$get = function() {
			return function(t) {
				if (!t) return "";
				var e = [];
				return a(t, function(t, n) {
					null === t || y(t) || (Rr(t) ? o(t, function(t, r) {
						e.push(rt(n) + "=" + rt(de(t)))
					}) : e.push(rt(n) + "=" + rt(de(t))))
				}), e.join("&")
			}
		}
	}
	function $e() {
		this.$get = function() {
			return function(t) {
				function e(t, r, i) {
					null === t || y(t) || (Rr(t) ? o(t, function(t) {
						e(t, r + "[]")
					}) : w(t) && !S(t) ? a(t, function(t, n) {
						e(t, r + (i ? "" : "[") + n + (i ? "" : "]"))
					}) : n.push(rt(r) + "=" + rt(de(t))))
				}
				if (!t) return "";
				var n = [];
				return e(t, "", !0), n.join("&")
			}
		}
	}
	function me(t, e) {
		if (_(t)) {
			var n = t.replace(Mi, "").trim();
			if (n) {
				var r = e("Content-Type");
				(r && 0 === r.indexOf(Oi) || ge(n)) && (t = J(n))
			}
		}
		return t
	}
	function ge(t) {
		var e = t.match(Ti);
		return e && Ii[e[0]].test(t)
	}
	function ye(t) {
		function e(t, e) {
			t && (r[t] = r[t] ? r[t] + ", " + e : e)
		}
		var n, r = vt();
		return _(t) ? o(t.split("\n"), function(t) {
			n = t.indexOf(":"), e(gr(Nr(t.substr(0, n))), Nr(t.substr(n + 1)))
		}) : w(t) && o(t, function(t, n) {
			e(gr(n), Nr(t))
		}), r
	}
	function be(t) {
		var e;
		return function(n) {
			if (e || (e = ye(t)), n) {
				var r = e[gr(n)];
				return void 0 === r && (r = null), r
			}
			return e
		}
	}
	function we(t, e, n, r) {
		return E(r) ? r(t, e, n) : (o(r, function(r) {
			t = r(t, e, n)
		}), t)
	}
	function xe(t) {
		return 200 <= t && t < 300
	}
	function _e() {
		var t = this.defaults = {
			transformResponse: [me],
			transformRequest: [function(t) {
				return !w(t) || j(t) || I(t) || T(t) ? t : G(t)
			}],
			headers: {
				common: {
					Accept: "application/json, text/plain, */*"
				},
				post: q(ji),
				put: q(ji),
				patch: q(ji)
			},
			xsrfCookieName: "XSRF-TOKEN",
			xsrfHeaderName: "X-XSRF-TOKEN",
			paramSerializer: "$httpParamSerializer"
		}, e = !1;
		this.useApplyAsync = function(t) {
			return b(t) ? (e = !! t, this) : e
		};
		var i = this.interceptors = [];
		this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, u, s, c, l, h) {
			function p(e) {
				function i(t) {
					var e = f({}, t);
					return t.data ? e.data = we(t.data, t.headers, t.status, u.transformResponse) : e.data = t.data, xe(t.status) ? e : l.reject(e)
				}
				function a(t, e) {
					var n, r = {};
					return o(t, function(t, i) {
						E(t) ? null != (n = t(e)) && (r[i] = n) : r[i] = t
					}), r
				}
				if (!Mr.isObject(e)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
				var u = f({
					method: "get",
					transformRequest: t.transformRequest,
					transformResponse: t.transformResponse,
					paramSerializer: t.paramSerializer
				}, e);
				u.headers = function(e) {
					var n, r, i, o = t.headers,
						u = f({}, e.headers);
					o = f({}, o.common, o[gr(e.method)]);
					t: for (n in o) {
						r = gr(n);
						for (i in u) if (gr(i) === r) continue t;
						u[n] = o[n]
					}
					return a(u, q(e))
				}(e), u.method = br(u.method), u.paramSerializer = _(u.paramSerializer) ? h.get(u.paramSerializer) : u.paramSerializer;
				var s = function(e) {
					var r = e.headers,
						a = we(e.data, be(r), n, e.transformRequest);
					return y(a) && o(r, function(t, e) {
						"content-type" === gr(e) && delete r[e]
					}), y(e.withCredentials) && !y(t.withCredentials) && (e.withCredentials = t.withCredentials), d(e, a).then(i, i)
				}, c = [s, n],
					p = l.when(u);
				for (o(m, function(t) {
					(t.request || t.requestError) && c.unshift(t.request, t.requestError), (t.response || t.responseError) && c.push(t.response, t.responseError)
				}); c.length;) {
					var v = c.shift(),
						$ = c.shift();
					p = p.then(v, $)
				}
				return p.success = function(t) {
					return ft(t, "fn"), p.then(function(e) {
						t(e.data, e.status, e.headers, u)
					}), p
				}, p.error = function(t) {
					return ft(t, "fn"), p.then(null, function(e) {
						t(e.data, e.status, e.headers, u)
					}), p
				}, p
			}
			function d(r, i) {
				function o(t, n, r, i) {
					function o() {
						s(n, t, r, i)
					}
					d && (xe(t) ? d.put(C, [t, n, ye(r), i]) : d.remove(C)), e ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
				}
				function s(t, e, n, i) {
					e = Math.max(e, 0), (xe(e) ? g.resolve : g.reject)({
						data: t,
						status: e,
						headers: be(n),
						config: r,
						statusText: i
					})
				}
				function f(t) {
					s(t.data, t.status, q(t.headers()), t.statusText)
				}
				function h() {
					var t = p.pendingRequests.indexOf(r); - 1 !== t && p.pendingRequests.splice(t, 1)
				}
				var d, m, g = l.defer(),
					x = g.promise,
					_ = r.headers,
					C = v(r.url, r.paramSerializer(r.params));
				if (p.pendingRequests.push(r), x.then(h, h), !r.cache && !t.cache || !1 === r.cache || "GET" !== r.method && "JSONP" !== r.method || (d = w(r.cache) ? r.cache : w(t.cache) ? t.cache : $), d && (m = d.get(C), b(m) ? F(m) ? m.then(f, f) : Rr(m) ? s(m[1], m[0], q(m[2]), m[3]) : s(m, 200, {}, "OK") : d.put(C, x)), y(m)) {
					var S = Sn(r.url) ? u()[r.xsrfCookieName || t.xsrfCookieName] : n;
					S && (_[r.xsrfHeaderName || t.xsrfHeaderName] = S), a(r.method, C, i, o, _, r.timeout, r.withCredentials, r.responseType)
				}
				return x
			}
			function v(t, e) {
				return e.length > 0 && (t += (-1 == t.indexOf("?") ? "?" : "&") + e), t
			}
			var $ = s("$http");
			t.paramSerializer = _(t.paramSerializer) ? h.get(t.paramSerializer) : t.paramSerializer;
			var m = [];
			return o(i, function(t) {
				m.unshift(_(t) ? h.get(t) : h.invoke(t))
			}), p.pendingRequests = [],
			function(t) {
				o(arguments, function(t) {
					p[t] = function(e, n) {
						return p(f({}, n || {}, {
							method: t,
							url: e
						}))
					}
				})
			}("get", "delete", "head", "jsonp"),
			function(t) {
				o(arguments, function(t) {
					p[t] = function(e, n, r) {
						return p(f({}, r || {}, {
							method: t,
							url: e,
							data: n
						}))
					}
				})
			}("post", "put", "patch"), p.defaults = t, p
		}]
	}
	function Ce() {
		return new t.XMLHttpRequest
	}
	function Se() {
		this.$get = ["$browser", "$window", "$document", function(t, e, n) {
			return Ee(t, Ce, t.defer, e.angular.callbacks, n[0])
		}]
	}
	function Ee(t, e, r, i, a) {
		function u(t, e, n) {
			var r = a.createElement("script"),
				o = null;
			return r.type = "text/javascript", r.src = t, r.async = !0, o = function(t) {
				ti(r, "load", o), ti(r, "error", o), a.body.removeChild(r), r = null;
				var u = -1,
					s = "unknown";
				t && ("load" !== t.type || i[e].called || (t = {
					type: "error"
				}), s = t.type, u = "error" === t.type ? 404 : 200), n && n(u, s)
			}, Qr(r, "load", o), Qr(r, "error", o), a.body.appendChild(r), o
		}
		return function(a, s, c, l, f, h, p, d) {
			function $() {
				y && y(), w && w.abort()
			}
			function m(e, i, o, a, u) {
				_ !== n && r.cancel(_), y = w = null, e(i, o, a, u), t.$$completeOutstandingRequest(v)
			}
			if (t.$$incOutstandingRequestCount(), s = s || t.url(), "jsonp" == gr(a)) {
				var g = "_" + (i.counter++).toString(36);
				i[g] = function(t) {
					i[g].data = t, i[g].called = !0
				};
				var y = u(s.replace("JSON_CALLBACK", "angular.callbacks." + g), g, function(t, e) {
					m(l, t, i[g].data, "", e), i[g] = v
				})
			} else {
				var w = e();
				w.open(a, s, !0), o(f, function(t, e) {
					b(t) && w.setRequestHeader(e, t)
				}), w.onload = function() {
					var t = w.statusText || "",
						e = "response" in w ? w.response : w.responseText,
						n = 1223 === w.status ? 204 : w.status;
					0 === n && (n = e ? 200 : "file" == Cn(s).protocol ? 404 : 0), m(l, n, e, w.getAllResponseHeaders(), t)
				};
				var x = function() {
					m(l, -1, null, null, "")
				};
				if (w.onerror = x, w.onabort = x, p && (w.withCredentials = !0), d) try {
					w.responseType = d
				} catch (t) {
					if ("json" !== d) throw t
				}
				w.send(c)
			}
			if (h > 0) var _ = r($, h);
			else F(h) && h.then($)
		}
	}
	function Ae() {
		var t = "{{",
			e = "}}";
		this.startSymbol = function(e) {
			return e ? (t = e, this) : t
		}, this.endSymbol = function(t) {
			return t ? (e = t, this) : e
		}, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
			function o(t) {
				return "\\\\\\" + t
			}
			function a(n) {
				return n.replace(h, t).replace(p, e)
			}
			function u(t) {
				if (null == t) return "";
				switch (typeof t) {
					case "string":
						break;
					case "number":
						t = "" + t;
						break;
					default:
						t = G(t)
				}
				return t
			}
			function s(o, s, h, p) {
				function d(t) {
					try {
						return t = k(t), p && !b(t) ? t : u(t)
					} catch (t) {
						r(Fi.interr(o, t))
					}
				}
				p = !! p;
				for (var v, $, m, g = 0, w = [], x = [], _ = o.length, C = [], S = []; g < _;) {
					if (-1 == (v = o.indexOf(t, g)) || -1 == ($ = o.indexOf(e, v + c))) {
						g !== _ && C.push(a(o.substring(g)));
						break
					}
					g !== v && C.push(a(o.substring(g, v))), m = o.substring(v + c, $), w.push(m), x.push(n(m, d)), g = $ + l, S.push(C.length), C.push("")
				}
				if (h && C.length > 1 && Fi.throwNoconcat(o), !s || w.length) {
					var A = function(t) {
						for (var e = 0, n = w.length; e < n; e++) {
							if (p && y(t[e])) return;
							C[S[e]] = t[e]
						}
						return C.join("")
					}, k = function(t) {
						return h ? i.getTrusted(h, t) : i.valueOf(t)
					};
					return f(function(t) {
						var e = 0,
							n = w.length,
							i = new Array(n);
						try {
							for (; e < n; e++) i[e] = x[e](t);
							return A(i)
						} catch (t) {
							r(Fi.interr(o, t))
						}
					}, {
						exp: o,
						expressions: w,
						$$watchDelegate: function(t, e) {
							var n;
							return t.$watchGroup(x, function(r, i) {
								var o = A(r);
								E(e) && e.call(this, o, r !== i ? n : o, t), n = o
							})
						}
					})
				}
			}
			var c = t.length,
				l = e.length,
				h = new RegExp(t.replace(/./g, o), "g"),
				p = new RegExp(e.replace(/./g, o), "g");
			return s.startSymbol = function() {
				return t
			}, s.endSymbol = function() {
				return e
			}, s
		}]
	}
	function ke() {
		this.$get = ["$rootScope", "$window", "$q", "$$q", function(t, e, n, r) {
			function i(i, a, u, s) {
				var c = arguments.length > 4,
					l = c ? H(arguments, 4) : [],
					f = e.setInterval,
					h = e.clearInterval,
					p = 0,
					d = b(s) && !s,
					v = (d ? r : n).defer(),
					$ = v.promise;
				return u = b(u) ? u : 0, $.then(null, null, c ? function() {
					i.apply(null, l)
				} : i), $.$$intervalId = f(function() {
					v.notify(p++), u > 0 && p >= u && (v.resolve(p), h($.$$intervalId), delete o[$.$$intervalId]), d || t.$apply()
				}, a), o[$.$$intervalId] = v, $
			}
			var o = {};
			return i.cancel = function(t) {
				return !!(t && t.$$intervalId in o) && (o[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete o[t.$$intervalId], !0)
			}, i
		}]
	}
	function Oe() {
		this.$get = function() {
			return {
				id: "en-us",
				NUMBER_FORMATS: {
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						minInt: 1,
						minFrac: 0,
						maxFrac: 3,
						posPre: "",
						posSuf: "",
						negPre: "-",
						negSuf: "",
						gSize: 3,
						lgSize: 3
					}, {
						minInt: 1,
						minFrac: 2,
						maxFrac: 2,
						posPre: "¤",
						posSuf: "",
						negPre: "(¤",
						negSuf: ")",
						gSize: 3,
						lgSize: 3
					}],
					CURRENCY_SYM: "$"
				},
				DATETIME_FORMATS: {
					MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
					SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
					DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
					SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
					AMPMS: ["AM", "PM"],
					medium: "MMM d, y h:mm:ss a",
					short: "M/d/yy h:mm a",
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					mediumDate: "MMM d, y",
					shortDate: "M/d/yy",
					mediumTime: "h:mm:ss a",
					shortTime: "h:mm a",
					ERANAMES: ["Before Christ", "Anno Domini"],
					ERAS: ["BC", "AD"]
				},
				pluralCat: function(t) {
					return 1 === t ? "one" : "other"
				}
			}
		}
	}
	function je(t) {
		for (var e = t.split("/"), n = e.length; n--;) e[n] = nt(e[n]);
		return e.join("/")
	}
	function Te(t, e) {
		var n = Cn(t);
		e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = p(n.port) || Ri[n.protocol] || null
	}
	function Ie(t, e) {
		var n = "/" !== t.charAt(0);
		n && (t = "/" + t);
		var r = Cn(t);
		e.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), e.$$search = tt(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
	}
	function Me(t, e) {
		if (0 === e.indexOf(t)) return e.substr(t.length)
	}
	function Fe(t) {
		var e = t.indexOf("#");
		return -1 == e ? t : t.substr(0, e)
	}
	function De(t) {
		return t.replace(/(#.+)|#$/, "$1")
	}
	function Re(t) {
		return t.substr(0, Fe(t).lastIndexOf("/") + 1)
	}
	function Pe(t) {
		return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
	}
	function Ne(t, e) {
		this.$$html5 = !0, e = e || "";
		var r = Re(t);
		Te(t, this), this.$$parse = function(t) {
			var e = Me(r, t);
			if (!_(e)) throw Pi("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, r);
			Ie(e, this), this.$$path || (this.$$path = "/"), this.$$compose()
		}, this.$$compose = function() {
			var t = et(this.$$search),
				e = this.$$hash ? "#" + nt(this.$$hash) : "";
			this.$$url = je(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = r + this.$$url.substr(1)
		}, this.$$parseLinkUrl = function(i, o) {
			if (o && "#" === o[0]) return this.hash(o.slice(1)), !0;
			var a, u, s;
			return (a = Me(t, i)) !== n ? (u = a, s = (a = Me(e, a)) !== n ? r + (Me("/", a) || a) : t + u) : (a = Me(r, i)) !== n ? s = r + a : r == i + "/" && (s = r), s && this.$$parse(s), !! s
		}
	}
	function Ve(t, e) {
		var n = Re(t);
		Te(t, this), this.$$parse = function(r) {
			var i, o = Me(t, r) || Me(n, r);
			y(o) || "#" !== o.charAt(0) ? this.$$html5 ? i = o : (i = "", y(o) && (t = r, this.replace())) : (i = Me(e, o), y(i) && (i = o)), Ie(i, this), this.$$path = function(t, e, n) {
				var r, i = /^\/[A-Z]:(\/.*)/;
				return 0 === e.indexOf(n) && (e = e.replace(n, "")), i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
			}(this.$$path, i, t), this.$$compose()
		}, this.$$compose = function() {
			var n = et(this.$$search),
				r = this.$$hash ? "#" + nt(this.$$hash) : "";
			this.$$url = je(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + (this.$$url ? e + this.$$url : "")
		}, this.$$parseLinkUrl = function(e, n) {
			return Fe(t) == Fe(e) && (this.$$parse(e), !0)
		}
	}
	function Ue(t, e) {
		this.$$html5 = !0, Ve.apply(this, arguments);
		var n = Re(t);
		this.$$parseLinkUrl = function(r, i) {
			if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
			var o, a;
			return t == Fe(r) ? o = r : (a = Me(n, r)) ? o = t + e + a : n === r + "/" && (o = n), o && this.$$parse(o), !! o
		}, this.$$compose = function() {
			var n = et(this.$$search),
				r = this.$$hash ? "#" + nt(this.$$hash) : "";
			this.$$url = je(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + e + this.$$url
		}
	}
	function qe(t) {
		return function() {
			return this[t]
		}
	}
	function Le(t, e) {
		return function(n) {
			return y(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
		}
	}
	function Be() {
		var t = "",
			e = {
				enabled: !1,
				requireBase: !0,
				rewriteLinks: !0
			};
		this.hashPrefix = function(e) {
			return b(e) ? (t = e, this) : t
		}, this.html5Mode = function(t) {
			return M(t) ? (e.enabled = t, this) : w(t) ? (M(t.enabled) && (e.enabled = t.enabled), M(t.requireBase) && (e.requireBase = t.requireBase), M(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
		}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
			function u(t, e, n) {
				var i = c.url(),
					o = c.$$state;
				try {
					r.url(t, e, n), c.$$state = r.state()
				} catch (t) {
					throw c.url(i), c.$$state = o, t
				}
			}
			function s(t, e) {
				n.$broadcast("$locationChangeSuccess", c.absUrl(), t, c.$$state, e)
			}
			var c, l, f, h = r.baseHref(),
				p = r.url();
			if (e.enabled) {
				if (!h && e.requireBase) throw Pi("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
				f = Pe(p) + (h || "/"), l = i.history ? Ne : Ue
			} else f = Fe(p), l = Ve;
			c = new l(f, "#" + t), c.$$parseLinkUrl(p, p), c.$$state = r.state();
			var d = /^\s*(javascript|mailto):/i;
			o.on("click", function(t) {
				if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 != t.which && 2 != t.button) {
					for (var i = Cr(t.target);
					"a" !== N(i[0]);) if (i[0] === o[0] || !(i = i.parent())[0]) return;
					var u = i.prop("href"),
						s = i.attr("href") || i.attr("xlink:href");
					w(u) && "[object SVGAnimatedString]" === u.toString() && (u = Cn(u.animVal).href), d.test(u) || !u || i.attr("target") || t.isDefaultPrevented() || c.$$parseLinkUrl(u, s) && (t.preventDefault(), c.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
				}
			}), De(c.absUrl()) != De(p) && r.url(c.absUrl(), !0);
			var v = !0;
			return r.onUrlChange(function(t, e) {
				n.$evalAsync(function() {
					var r, i = c.absUrl(),
						o = c.$$state;
					c.$$parse(t), c.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, c.absUrl() === t && (r ? (c.$$parse(i), c.$$state = o, u(i, !1, o)) : (v = !1, s(i, o)))
				}), n.$$phase || n.$digest()
			}), n.$watch(function() {
				var t = De(r.url()),
					e = De(c.absUrl()),
					o = r.state(),
					a = c.$$replace,
					l = t !== e || c.$$html5 && i.history && o !== c.$$state;
				(v || l) && (v = !1, n.$evalAsync(function() {
					var e = c.absUrl(),
						r = n.$broadcast("$locationChangeStart", e, t, c.$$state, o).defaultPrevented;
					c.absUrl() === e && (r ? (c.$$parse(t), c.$$state = o) : (l && u(e, a, o === c.$$state ? null : c.$$state), s(t, o)))
				})), c.$$replace = !1
			}), c
		}]
	}
	function He() {
		var t = !0,
			e = this;
		this.debugEnabled = function(e) {
			return b(e) ? (t = e, this) : t
		}, this.$get = ["$window", function(n) {
			function r(t) {
				return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
			}
			function i(t) {
				var e = n.console || {}, i = e[t] || e.log || v,
					a = !1;
				try {
					a = !! i.apply
				} catch (t) {}
				return a ? function() {
					var t = [];
					return o(arguments, function(e) {
						t.push(r(e))
					}), i.apply(e, t)
				} : function(t, e) {
					i(t, null == e ? "" : e)
				}
			}
			return {
				log: i("log"),
				info: i("info"),
				warn: i("warn"),
				error: i("error"),
				debug: function() {
					var n = i("debug");
					return function() {
						t && n.apply(e, arguments)
					}
				}()
			}
		}]
	}
	function ze(t, e) {
		if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw Vi("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
		return t
	}
	function We(t, e) {
		if (t) {
			if (t.constructor === t) throw Vi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
			if (t.window === t) throw Vi("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
			if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw Vi("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
			if (t === Object) throw Vi("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
		}
		return t
	}
	function Ge(t, e) {
		if (t) {
			if (t.constructor === t) throw Vi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
			if (t === Ui || t === qi || t === Li) throw Vi("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e)
		}
	}
	function Je(t, e) {
		return void 0 !== t ? t : e
	}
	function Ye(t, e) {
		return void 0 === t ? e : void 0 === e ? t : t + e
	}
	function Ke(t, e) {
		return !t(e).$stateful
	}
	function Ze(t, e) {
		var n, r;
		switch (t.type) {
			case Wi.Program:
				n = !0, o(t.body, function(t) {
					Ze(t.expression, e), n = n && t.expression.constant
				}), t.constant = n;
				break;
			case Wi.Literal:
				t.constant = !0, t.toWatch = [];
				break;
			case Wi.UnaryExpression:
				Ze(t.argument, e), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
				break;
			case Wi.BinaryExpression:
				Ze(t.left, e), Ze(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
				break;
			case Wi.LogicalExpression:
				Ze(t.left, e), Ze(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
				break;
			case Wi.ConditionalExpression:
				Ze(t.test, e), Ze(t.alternate, e), Ze(t.consequent, e), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
				break;
			case Wi.Identifier:
				t.constant = !1, t.toWatch = [t];
				break;
			case Wi.MemberExpression:
				Ze(t.object, e), t.computed && Ze(t.property, e), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = [t];
				break;
			case Wi.CallExpression:
				n = !! t.filter && Ke(e, t.callee.name), r = [], o(t.arguments, function(t) {
					Ze(t, e), n = n && t.constant, t.constant || r.push.apply(r, t.toWatch)
				}), t.constant = n, t.toWatch = t.filter && Ke(e, t.callee.name) ? r : [t];
				break;
			case Wi.AssignmentExpression:
				Ze(t.left, e), Ze(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
				break;
			case Wi.ArrayExpression:
				n = !0, r = [], o(t.elements, function(t) {
					Ze(t, e), n = n && t.constant, t.constant || r.push.apply(r, t.toWatch)
				}), t.constant = n, t.toWatch = r;
				break;
			case Wi.ObjectExpression:
				n = !0, r = [], o(t.properties, function(t) {
					Ze(t.value, e), n = n && t.value.constant, t.value.constant || r.push.apply(r, t.value.toWatch)
				}), t.constant = n, t.toWatch = r;
				break;
			case Wi.ThisExpression:
				t.constant = !1, t.toWatch = []
		}
	}
	function Xe(t) {
		if (1 == t.length) {
			var e = t[0].expression,
				r = e.toWatch;
			return 1 !== r.length ? r : r[0] !== e ? r : n
		}
	}
	function Qe(t) {
		return t.type === Wi.Identifier || t.type === Wi.MemberExpression
	}
	function tn(t) {
		if (1 === t.body.length && Qe(t.body[0].expression)) return {
			type: Wi.AssignmentExpression,
			left: t.body[0].expression,
			right: {
				type: Wi.NGValueParameter
			},
			operator: "="
		}
	}
	function en(t) {
		return 0 === t.body.length || 1 === t.body.length && (t.body[0].expression.type === Wi.Literal || t.body[0].expression.type === Wi.ArrayExpression || t.body[0].expression.type === Wi.ObjectExpression)
	}
	function nn(t) {
		return t.constant
	}
	function rn(t, e) {
		this.astBuilder = t, this.$filter = e
	}
	function on(t, e) {
		this.astBuilder = t, this.$filter = e
	}
	function an(t, e, n, r) {
		We(t, r);
		for (var i, o = e.split("."), a = 0; o.length > 1; a++) {
			i = ze(o.shift(), r);
			var u = We(t[i], r);
			u || (u = {}, t[i] = u), t = u
		}
		return i = ze(o.shift(), r), We(t[i], r), t[i] = n, n
	}
	function un(t) {
		return "constructor" == t
	}
	function sn(t) {
		return E(t.valueOf) ? t.valueOf() : Ji.call(t)
	}
	function cn() {
		var t = vt(),
			e = vt();
		this.$get = ["$filter", "$sniffer", function(r, i) {
			function a(t, e) {
				return null == t || null == e ? t === e : ("object" != typeof t || "object" != typeof(t = sn(t))) && (t === e || t !== t && e !== e)
			}
			function u(t, e, r, i, o) {
				var u, s = i.inputs;
				if (1 === s.length) {
					var c = a;
					return s = s[0], t.$watch(function(t) {
						var e = s(t);
						return a(e, c) || (u = i(t, n, n, [e]), c = e && sn(e)), u
					}, e, r, o)
				}
				for (var l = [], f = [], h = 0, p = s.length; h < p; h++) l[h] = a, f[h] = null;
				return t.$watch(function(t) {
					for (var e = !1, r = 0, o = s.length; r < o; r++) {
						var c = s[r](t);
						(e || (e = !a(c, l[r]))) && (f[r] = c, l[r] = c && sn(c))
					}
					return e && (u = i(t, n, n, f)), u
				}, e, r, o)
			}
			function s(t, e, n, r) {
				var i, o;
				return i = t.$watch(function(t) {
					return r(t)
				}, function(t, n, r) {
					o = t, E(e) && e.apply(this, arguments), b(t) && r.$$postDigest(function() {
						b(o) && i()
					})
				}, n)
			}
			function c(t, e, n, r) {
				function i(t) {
					var e = !0;
					return o(t, function(t) {
						b(t) || (e = !1)
					}), e
				}
				var a, u;
				return a = t.$watch(function(t) {
					return r(t)
				}, function(t, n, r) {
					u = t, E(e) && e.call(this, t, n, r), i(t) && r.$$postDigest(function() {
						i(u) && a()
					})
				}, n)
			}
			function l(t, e, n, r) {
				var i;
				return i = t.$watch(function(t) {
					return r(t)
				}, function(t, n, r) {
					E(e) && e.apply(this, arguments), i()
				}, n)
			}
			function f(t, e) {
				if (!e) return t;
				var n = t.$$watchDelegate,
					r = n !== c && n !== s,
					i = r ? function(n, r, i, o) {
						var a = t(n, r, i, o);
						return e(a, n, r)
					} : function(n, r, i, o) {
						var a = t(n, r, i, o),
							u = e(a, n, r);
						return b(a) ? u : a
					};
				return t.$$watchDelegate && t.$$watchDelegate !== u ? i.$$watchDelegate = t.$$watchDelegate : e.$stateful || (i.$$watchDelegate = u, i.inputs = t.inputs ? t.inputs : [t]), i
			}
			var h = {
				csp: i.csp,
				expensiveChecks: !1
			}, p = {
				csp: i.csp,
				expensiveChecks: !0
			};
			return function(n, i, o) {
				var a, d, $;
				switch (typeof n) {
					case "string":
						n = n.trim(), $ = n;
						var m = o ? e : t;
						if (!(a = m[$])) {
							":" === n.charAt(0) && ":" === n.charAt(1) && (d = !0, n = n.substring(2));
							var g = o ? p : h,
								y = new zi(g);
							a = new Gi(y, r, g).parse(n), a.constant ? a.$$watchDelegate = l : d ? a.$$watchDelegate = a.literal ? c : s : a.inputs && (a.$$watchDelegate = u), m[$] = a
						}
						return f(a, i);
					case "function":
						return f(n, i);
					default:
						return v
				}
			}
		}]
	}
	function ln() {
		this.$get = ["$rootScope", "$exceptionHandler", function(t, e) {
			return hn(function(e) {
				t.$evalAsync(e)
			}, e)
		}]
	}
	function fn() {
		this.$get = ["$browser", "$exceptionHandler", function(t, e) {
			return hn(function(e) {
				t.defer(e)
			}, e)
		}]
	}
	function hn(t, e) {
		function i(t, e, n) {
			function r(e) {
				return function(n) {
					i || (i = !0, e.call(t, n))
				}
			}
			var i = !1;
			return [r(e), r(n)]
		}
		function a() {
			this.$$state = {
				status: 0
			}
		}
		function u(t, e) {
			return function(n) {
				e.call(t, n)
			}
		}
		function s(t) {
			var r, i, o;
			o = t.pending, t.processScheduled = !1, t.pending = n;
			for (var a = 0, u = o.length; a < u; ++a) {
				i = o[a][0], r = o[a][t.status];
				try {
					E(r) ? i.resolve(r(t.value)) : 1 === t.status ? i.resolve(t.value) : i.reject(t.value)
				} catch (t) {
					i.reject(t), e(t)
				}
			}
		}
		function c(e) {
			!e.processScheduled && e.pending && (e.processScheduled = !0, t(function() {
				s(e)
			}))
		}
		function l() {
			this.promise = new a, this.resolve = u(this, this.resolve), this.reject = u(this, this.reject), this.notify = u(this, this.notify)
		}
		function f(t) {
			var e = new l,
				n = 0,
				r = Rr(t) ? [] : {};
			return o(t, function(t, i) {
				n++, m(t).then(function(t) {
					r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
				}, function(t) {
					r.hasOwnProperty(i) || e.reject(t)
				})
			}), 0 === n && e.resolve(r), e.promise
		}
		var h = r("$q", TypeError),
			p = function() {
				return new l
			};
		a.prototype = {
			then: function(t, e, n) {
				var r = new l;
				return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), this.$$state.status > 0 && c(this.$$state), r.promise
			},
			catch: function(t) {
				return this.then(null, t)
			},
			finally: function(t, e) {
				return this.then(function(e) {
					return $(e, !0, t)
				}, function(e) {
					return $(e, !1, t)
				}, e)
			}
		}, l.prototype = {
			resolve: function(t) {
				this.promise.$$state.status || (t === this.promise ? this.$$reject(h("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : this.$$resolve(t))
			},
			$$resolve: function(t) {
				var n, r;
				r = i(this, this.$$resolve, this.$$reject);
				try {
					(w(t) || E(t)) && (n = t && t.then), E(n) ? (this.promise.$$state.status = -1, n.call(t, r[0], r[1], this.notify)) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, c(this.promise.$$state))
				} catch (t) {
					r[1](t), e(t)
				}
			},
			reject: function(t) {
				this.promise.$$state.status || this.$$reject(t)
			},
			$$reject: function(t) {
				this.promise.$$state.value = t, this.promise.$$state.status = 2, c(this.promise.$$state)
			},
			notify: function(n) {
				var r = this.promise.$$state.pending;
				this.promise.$$state.status <= 0 && r && r.length && t(function() {
					for (var t, i, o = 0, a = r.length; o < a; o++) {
						i = r[o][0], t = r[o][3];
						try {
							i.notify(E(t) ? t(n) : n)
						} catch (t) {
							e(t)
						}
					}
				})
			}
		};
		var d = function(t) {
			var e = new l;
			return e.reject(t), e.promise
		}, v = function(t, e) {
			var n = new l;
			return e ? n.resolve(t) : n.reject(t), n.promise
		}, $ = function(t, e, n) {
			var r = null;
			try {
				E(n) && (r = n())
			} catch (t) {
				return v(t, !1)
			}
			return F(r) ? r.then(function() {
				return v(t, e)
			}, function(t) {
				return v(t, !1)
			}) : v(t, e)
		}, m = function(t, e, n, r) {
			var i = new l;
			return i.resolve(t), i.promise.then(e, n, r)
		}, g = m,
			y = function t(e) {
				function n(t) {
					i.resolve(t)
				}
				function r(t) {
					i.reject(t)
				}
				if (!E(e)) throw h("norslvr", "Expected resolverFn, got '{0}'", e);
				if (!(this instanceof t)) return new t(e);
				var i = new l;
				return e(n, r), i.promise
			};
		return y.defer = p, y.reject = d, y.when = m, y.resolve = g, y.all = f, y
	}
	function pn() {
		this.$get = ["$window", "$timeout", function(t, e) {
			function n() {
				for (var t = 0; t < l.length; t++) {
					var e = l[t];
					e && (l[t] = null, e())
				}
				c = l.length = 0
			}
			function r(t) {
				var e = l.length;
				return c++, l.push(t), 0 === e && (s = u(n)),
				function() {
					e >= 0 && (l[e] = null, e = null, 0 == --c && s && (s(), s = null, l.length = 0))
				}
			}
			var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
				o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
				a = !! i,
				u = a ? function(t) {
					var e = i(t);
					return function() {
						o(e)
					}
				} : function(t) {
					var n = e(t, 16.66, !1);
					return function() {
						e.cancel(n)
					}
				};
			r.supported = a;
			var s, c = 0,
				l = [];
			return r
		}]
	}
	function dn() {
		function t(t) {
			function e() {
				this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = s(), this.$$ChildScope = null
			}
			return e.prototype = t, e
		}
		var e = 10,
			n = r("$rootScope"),
			a = null,
			u = null;
		this.digestTtl = function(t) {
			return arguments.length && (e = t), e
		}, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, c, l, f) {
			function h(t) {
				t.currentScope.$$destroyed = !0
			}
			function p() {
				this.$id = s(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
			}
			function d(t) {
				if (C.$$phase) throw n("inprog", "{0} already in progress", C.$$phase);
				C.$$phase = t
			}
			function $() {
				C.$$phase = null
			}
			function m(t, e) {
				do {
					t.$$watchersCount += e
				} while (t = t.$parent)
			}
			function g(t, e, n) {
				do {
					t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]
				} while (t = t.$parent)
			}
			function b() {}
			function x() {
				for (; k.length;) try {
					k.shift()()
				} catch (t) {
					c(t)
				}
				u = null
			}
			function _() {
				null === u && (u = f.defer(function() {
					C.$apply(x)
				}))
			}
			p.prototype = {
				constructor: p,
				$new: function(e, n) {
					var r;
					return n = n || this, e ? (r = new p, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (e || n != this) && r.$on("$destroy", h), r
				},
				$watch: function(t, e, n, r) {
					var i = l(t);
					if (i.$$watchDelegate) return i.$$watchDelegate(this, e, n, i, t);
					var o = this,
						u = o.$$watchers,
						s = {
							fn: e,
							last: b,
							get: i,
							exp: r || t,
							eq: !! n
						};
					return a = null, E(e) || (s.fn = v), u || (u = o.$$watchers = []), u.unshift(s), m(this, 1),
					function() {
						V(u, s) >= 0 && m(o, -1), a = null
					}
				},
				$watchGroup: function(t, e) {
					function n() {
						s = !1, c ? (c = !1, e(i, i, u)) : e(i, r, u)
					}
					var r = new Array(t.length),
						i = new Array(t.length),
						a = [],
						u = this,
						s = !1,
						c = !0;
					if (!t.length) {
						var l = !0;
						return u.$evalAsync(function() {
							l && e(i, i, u)
						}),
						function() {
							l = !1
						}
					}
					return 1 === t.length ? this.$watch(t[0], function(t, n, o) {
						i[0] = t, r[0] = n, e(i, t === n ? i : r, o)
					}) : (o(t, function(t, e) {
						var o = u.$watch(t, function(t, o) {
							i[e] = t, r[e] = o, s || (s = !0, u.$evalAsync(n))
						});
						a.push(o)
					}), function() {
						for (; a.length;) a.shift()()
					})
				},
				$watchCollection: function(t, e) {
					function n(t) {
						o = t;
						var e, n, r, u;
						if (!y(o)) {
							if (w(o)) if (i(o)) {
								a !== p && (a = p, $ = a.length = 0, f++), e = o.length, $ !== e && (f++, a.length = $ = e);
								for (var s = 0; s < e; s++) u = a[s], r = o[s], u !== u && r !== r || u === r || (f++, a[s] = r)
							} else {
								a !== d && (a = d = {}, $ = 0, f++), e = 0;
								for (n in o) o.hasOwnProperty(n) && (e++, r = o[n], u = a[n], n in a ? u !== u && r !== r || u === r || (f++, a[n] = r) : ($++, a[n] = r, f++));
								if ($ > e) {
									f++;
									for (n in a) o.hasOwnProperty(n) || ($--, delete a[n])
								}
							} else a !== o && (a = o, f++);
							return f
						}
					}
					function r() {
						if (v ? (v = !1, e(o, o, s)) : e(o, u, s), c) if (w(o)) if (i(o)) {
							u = new Array(o.length);
							for (var t = 0; t < o.length; t++) u[t] = o[t]
						} else {
							u = {};
							for (var n in o) yr.call(o, n) && (u[n] = o[n])
						} else u = o
					}
					n.$stateful = !0;
					var o, a, u, s = this,
						c = e.length > 1,
						f = 0,
						h = l(t, n),
						p = [],
						d = {}, v = !0,
						$ = 0;
					return this.$watch(h, r)
				},
				$digest: function() {
					var t, r, i, o, s, l, h, p, v, m, g = e,
						y = this,
						w = [];
					d("$digest"), f.$$checkUrlChange(), this === C && null !== u && (f.defer.cancel(u), x()), a = null;
					do {
						for (l = !1, p = y; S.length;) {
							try {
								m = S.shift(), m.scope.$eval(m.expression, m.locals)
							} catch (t) {
								c(t)
							}
							a = null
						}
						t: do {
							if (o = p.$$watchers) for (s = o.length; s--;) try {
								if (t = o[s]) if ((r = t.get(p)) === (i = t.last) || (t.eq ? L(r, i) : "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i))) {
									if (t === a) {
										l = !1;
										break t
									}
								} else l = !0, a = t, t.last = t.eq ? U(r, null) : r, t.fn(r, i === b ? r : i, p), g < 5 && (v = 4 - g, w[v] || (w[v] = []), w[v].push({
									msg: E(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp,
									newVal: r,
									oldVal: i
								}))
							} catch (t) {
								c(t)
							}
							if (!(h = p.$$watchersCount && p.$$childHead || p !== y && p.$$nextSibling)) for (; p !== y && !(h = p.$$nextSibling);) p = p.$parent
						} while (p = h);
						if ((l || S.length) && !g--) throw $(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, w)
					} while (l || S.length);
					for ($(); A.length;) try {
						A.shift()()
					} catch (t) {
						c(t)
					}
				},
				$destroy: function() {
					if (!this.$$destroyed) {
						var t = this.$parent;
						this.$broadcast("$destroy"), this.$$destroyed = !0, this === C && f.$$applicationDestroyed(), m(this, -this.$$watchersCount);
						for (var e in this.$$listenerCount) g(this, this.$$listenerCount[e], e);
						t && t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t && t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = v, this.$on = this.$watch = this.$watchGroup = function() {
							return v
						}, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
					}
				},
				$eval: function(t, e) {
					return l(t)(this, e)
				},
				$evalAsync: function(t, e) {
					C.$$phase || S.length || f.defer(function() {
						S.length && C.$digest()
					}), S.push({
						scope: this,
						expression: t,
						locals: e
					})
				},
				$$postDigest: function(t) {
					A.push(t)
				},
				$apply: function(t) {
					try {
						return d("$apply"), this.$eval(t)
					} catch (t) {
						c(t)
					} finally {
						$();
						try {
							C.$digest()
						} catch (t) {
							throw c(t), t
						}
					}
				},
				$applyAsync: function(t) {
					function e() {
						n.$eval(t)
					}
					var n = this;
					t && k.push(e), _()
				},
				$on: function(t, e) {
					var n = this.$$listeners[t];
					n || (this.$$listeners[t] = n = []), n.push(e);
					var r = this;
					do {
						r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++
					} while (r = r.$parent);
					var i = this;
					return function() {
						var r = n.indexOf(e); - 1 !== r && (n[r] = null, g(i, 1, t))
					}
				},
				$emit: function(t, e) {
					var n, r, i, o = [],
						a = this,
						u = !1,
						s = {
							name: t,
							targetScope: a,
							stopPropagation: function() {
								u = !0
							},
							preventDefault: function() {
								s.defaultPrevented = !0
							},
							defaultPrevented: !1
						}, l = B([s], arguments, 1);
					do {
						for (n = a.$$listeners[t] || o, s.currentScope = a, r = 0, i = n.length; r < i; r++) if (n[r]) try {
							n[r].apply(null, l)
						} catch (t) {
							c(t)
						} else n.splice(r, 1), r--, i--;
						if (u) return s.currentScope = null, s;
						a = a.$parent
					} while (a);
					return s.currentScope = null, s
				},
				$broadcast: function(t, e) {
					var n = this,
						r = n,
						i = n,
						o = {
							name: t,
							targetScope: n,
							preventDefault: function() {
								o.defaultPrevented = !0
							},
							defaultPrevented: !1
						};
					if (!n.$$listenerCount[t]) return o;
					for (var a, u, s, l = B([o], arguments, 1); r = i;) {
						for (o.currentScope = r, a = r.$$listeners[t] || [], u = 0, s = a.length; u < s; u++) if (a[u]) try {
							a[u].apply(null, l)
						} catch (t) {
							c(t)
						} else a.splice(u, 1), u--, s--;
						if (!(i = r.$$listenerCount[t] && r.$$childHead || r !== n && r.$$nextSibling)) for (; r !== n && !(i = r.$$nextSibling);) r = r.$parent
					}
					return o.currentScope = null, o
				}
			};
			var C = new p,
				S = C.$$asyncQueue = [],
				A = C.$$postDigestQueue = [],
				k = C.$$applyAsyncQueue = [];
			return C
		}]
	}
	function vn() {
		var t = /^\s*(https?|ftp|mailto|tel|file):/,
			e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
		this.aHrefSanitizationWhitelist = function(e) {
			return b(e) ? (t = e, this) : t
		}, this.imgSrcSanitizationWhitelist = function(t) {
			return b(t) ? (e = t, this) : e
		}, this.$get = function() {
			return function(n, r) {
				var i, o = r ? e : t;
				return i = Cn(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
			}
		}
	}
	function $n(t) {
		if ("self" === t) return t;
		if (_(t)) {
			if (t.indexOf("***") > -1) throw Yi("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
			return t = Vr(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
		}
		if (A(t)) return new RegExp("^" + t.source + "$");
		throw Yi("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
	}
	function mn(t) {
		var e = [];
		return b(t) && o(t, function(t) {
			e.push($n(t))
		}), e
	}
	function gn() {
		this.SCE_CONTEXTS = Ki;
		var t = ["self"],
			e = [];
		this.resourceUrlWhitelist = function(e) {
			return arguments.length && (t = mn(e)), t
		}, this.resourceUrlBlacklist = function(t) {
			return arguments.length && (e = mn(t)), e
		}, this.$get = ["$injector", function(r) {
			function i(t, e) {
				return "self" === t ? Sn(e) : !! t.exec(e.href)
			}
			function o(n) {
				var r, o, a = Cn(n.toString()),
					u = !1;
				for (r = 0, o = t.length; r < o; r++) if (i(t[r], a)) {
					u = !0;
					break
				}
				if (u) for (r = 0, o = e.length; r < o; r++) if (i(e[r], a)) {
					u = !1;
					break
				}
				return u
			}
			function a(t) {
				var e = function(t) {
					this.$$unwrapTrustedValue = function() {
						return t
					}
				};
				return t && (e.prototype = new t), e.prototype.valueOf = function() {
					return this.$$unwrapTrustedValue()
				}, e.prototype.toString = function() {
					return this.$$unwrapTrustedValue().toString()
				}, e
			}
			function u(t, e) {
				var r = h.hasOwnProperty(t) ? h[t] : null;
				if (!r) throw Yi("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
				if (null === e || e === n || "" === e) return e;
				if ("string" != typeof e) throw Yi("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
				return new r(e)
			}
			function s(t) {
				return t instanceof f ? t.$$unwrapTrustedValue() : t
			}
			function c(t, e) {
				if (null === e || e === n || "" === e) return e;
				var r = h.hasOwnProperty(t) ? h[t] : null;
				if (r && e instanceof r) return e.$$unwrapTrustedValue();
				if (t === Ki.RESOURCE_URL) {
					if (o(e)) return e;
					throw Yi("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
				}
				if (t === Ki.HTML) return l(e);
				throw Yi("unsafe", "Attempting to use an unsafe value in a safe context.")
			}
			var l = function(t) {
				throw Yi("unsafe", "Attempting to use an unsafe value in a safe context.")
			};
			r.has("$sanitize") && (l = r.get("$sanitize"));
			var f = a(),
				h = {};
			return h[Ki.HTML] = a(f), h[Ki.CSS] = a(f), h[Ki.URL] = a(f), h[Ki.JS] = a(f), h[Ki.RESOURCE_URL] = a(h[Ki.URL]), {
				trustAs: u,
				getTrusted: c,
				valueOf: s
			}
		}]
	}
	function yn() {
		var t = !0;
		this.enabled = function(e) {
			return arguments.length && (t = !! e), t
		}, this.$get = ["$parse", "$sceDelegate", function(e, n) {
			if (t && _r < 8) throw Yi("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
			var r = q(Ki);
			r.isEnabled = function() {
				return t
			}, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function(t, e) {
				return e
			}, r.valueOf = $), r.parseAs = function(t, n) {
				var i = e(n);
				return i.literal && i.constant ? i : e(n, function(e) {
					return r.getTrusted(t, e)
				})
			};
			var i = r.parseAs,
				a = r.getTrusted,
				u = r.trustAs;
			return o(Ki, function(t, e) {
				var n = gr(e);
				r[bt("parse_as_" + n)] = function(e) {
					return i(t, e)
				}, r[bt("get_trusted_" + n)] = function(e) {
					return a(t, e)
				}, r[bt("trust_as_" + n)] = function(e) {
					return u(t, e)
				}
			}), r
		}]
	}
	function bn() {
		this.$get = ["$window", "$document", function(t, e) {
			var n, r, i = {}, o = p((/android (\d+)/.exec(gr((t.navigator || {}).userAgent)) || [])[1]),
				a = /Boxee/i.test((t.navigator || {}).userAgent),
				u = e[0] || {}, s = /^(Moz|webkit|ms)(?=[A-Z])/,
				c = u.body && u.body.style,
				l = !1,
				f = !1;
			if (c) {
				for (var h in c) if (r = s.exec(h)) {
					n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
					break
				}
				n || (n = "WebkitOpacity" in c && "webkit"), l = !! ("transition" in c || n + "Transition" in c), f = !! ("animation" in c || n + "Animation" in c), !o || l && f || (l = _(c.webkitTransition), f = _(c.webkitAnimation))
			}
			return {
				history: !(!t.history || !t.history.pushState || o < 4 || a),
				hasEvent: function(t) {
					if ("input" === t && _r <= 11) return !1;
					if (y(i[t])) {
						var e = u.createElement("div");
						i[t] = "on" + t in e
					}
					return i[t]
				},
				csp: Ur(),
				vendorPrefix: n,
				transitions: l,
				animations: f,
				android: o
			}
		}]
	}
	function wn() {
		this.$get = ["$templateCache", "$http", "$q", "$sce", function(t, e, n, r) {
			function i(o, a) {
				function u(t) {
					if (!a) throw Si("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", o, t.status, t.statusText);
					return n.reject(t)
				}
				i.totalPendingRequests++, _(o) && t.get(o) || (o = r.getTrustedResourceUrl(o));
				var s = e.defaults && e.defaults.transformResponse;
				Rr(s) ? s = s.filter(function(t) {
					return t !== me
				}) : s === me && (s = null);
				var c = {
					cache: t,
					transformResponse: s
				};
				return e.get(o, c).
				finally(function() {
					i.totalPendingRequests--
				}).then(function(e) {
					return t.put(o, e.data), e.data
				}, u)
			}
			return i.totalPendingRequests = 0, i
		}]
	}
	function xn() {
		this.$get = ["$rootScope", "$browser", "$location", function(t, e, n) {
			var r = {};
			return r.findBindings = function(t, e, n) {
				var r = t.getElementsByClassName("ng-binding"),
					i = [];
				return o(r, function(t) {
					var r = Mr.element(t).data("$binding");
					r && o(r, function(r) {
						if (n) {
							new RegExp("(^|\\s)" + Vr(e) + "(\\s|\\||$)").test(r) && i.push(t)
						} else -1 != r.indexOf(e) && i.push(t)
					})
				}), i
			}, r.findModels = function(t, e, n) {
				for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
					var o = n ? "=" : "*=",
						a = "[" + r[i] + "model" + o + '"' + e + '"]',
						u = t.querySelectorAll(a);
					if (u.length) return u
				}
			}, r.getLocation = function() {
				return n.url()
			}, r.setLocation = function(e) {
				e !== n.url() && (n.url(e), t.$digest())
			}, r.whenStable = function(t) {
				e.notifyWhenNoOutstandingRequests(t)
			}, r
		}]
	}
	function _n() {
		this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(t, e, n, r, i) {
			function o(o, u, s) {
				E(o) || (s = u, u = o, o = v);
				var c, l = H(arguments, 3),
					f = b(s) && !s,
					h = (f ? r : n).defer(),
					p = h.promise;
				return c = e.defer(function() {
					try {
						h.resolve(o.apply(null, l))
					} catch (t) {
						h.reject(t), i(t)
					} finally {
						delete a[p.$$timeoutId]
					}
					f || t.$apply()
				}, u), p.$$timeoutId = c, a[c] = h, p
			}
			var a = {};
			return o.cancel = function(t) {
				return !!(t && t.$$timeoutId in a) && (a[t.$$timeoutId].reject("canceled"), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId))
			}, o
		}]
	}
	function Cn(t) {
		var e = t;
		return _r && (Zi.setAttribute("href", e), e = Zi.href), Zi.setAttribute("href", e), {
			href: Zi.href,
			protocol: Zi.protocol ? Zi.protocol.replace(/:$/, "") : "",
			host: Zi.host,
			search: Zi.search ? Zi.search.replace(/^\?/, "") : "",
			hash: Zi.hash ? Zi.hash.replace(/^#/, "") : "",
			hostname: Zi.hostname,
			port: Zi.port,
			pathname: "/" === Zi.pathname.charAt(0) ? Zi.pathname : "/" + Zi.pathname
		}
	}
	function Sn(t) {
		var e = _(t) ? Cn(t) : t;
		return e.protocol === Xi.protocol && e.host === Xi.host
	}
	function En() {
		this.$get = m(t)
	}
	function An(t) {
		function e(t) {
			try {
				return decodeURIComponent(t)
			} catch (e) {
				return t
			}
		}
		var r = t[0] || {}, i = {}, o = "";
		return function() {
			var t, a, u, s, c, l = r.cookie || "";
			if (l !== o) for (o = l, t = o.split("; "), i = {}, u = 0; u < t.length; u++) a = t[u], (s = a.indexOf("=")) > 0 && (c = e(a.substring(0, s)), i[c] === n && (i[c] = e(a.substring(s + 1))));
			return i
		}
	}
	function kn() {
		this.$get = An
	}
	function On(t) {
		function e(r, i) {
			if (w(r)) {
				var a = {};
				return o(r, function(t, n) {
					a[n] = e(n, t)
				}), a
			}
			return t.factory(r + n, i)
		}
		var n = "Filter";
		this.register = e, this.$get = ["$injector", function(t) {
			return function(e) {
				return t.get(e + n)
			}
		}], e("currency", Fn), e("date", Gn), e("filter", jn), e("json", Jn), e("limitTo", Yn), e("lowercase", ro), e("number", Dn), e("orderBy", Kn), e("uppercase", io)
	}
	function jn() {
		return function(t, e, n) {
			if (!i(t)) {
				if (null == t) return t;
				throw r("filter")("notarray", "Expected array but received: {0}", t)
			}
			var o, a, u = Mn(e);
			switch (u) {
				case "function":
					o = e;
					break;
				case "boolean":
				case "null":
				case "number":
				case "string":
					a = !0;
				case "object":
					o = Tn(e, n, a);
					break;
				default:
					return t
			}
			return Array.prototype.filter.call(t, o)
		}
	}
	function Tn(t, e, n) {
		var r = w(t) && "$" in t;
		return !0 === e ? e = L : E(e) || (e = function(t, e) {
			return !y(t) && (null === t || null === e ? t === e : !(w(e) || w(t) && !g(t)) && (t = gr("" + t), e = gr("" + e), -1 !== t.indexOf(e)))
		}),
		function(i) {
			return r && !w(i) ? In(i, t.$, e, !1) : In(i, t, e, n)
		}
	}
	function In(t, e, n, r, i) {
		var o = Mn(t),
			a = Mn(e);
		if ("string" === a && "!" === e.charAt(0)) return !In(t, e.substring(1), n, r);
		if (Rr(t)) return t.some(function(t) {
			return In(t, e, n, r)
		});
		switch (o) {
			case "object":
				var u;
				if (r) {
					for (u in t) if ("$" !== u.charAt(0) && In(t[u], e, n, !0)) return !0;
					return !i && In(t, e, n, !1)
				}
				if ("object" === a) {
					for (u in e) {
						var s = e[u];
						if (!E(s) && !y(s)) {
							var c = "$" === u;
							if (!In(c ? t : t[u], s, n, c, c)) return !1
						}
					}
					return !0
				}
				return n(t, e);
			case "function":
				return !1;
			default:
				return n(t, e)
		}
	}
	function Mn(t) {
		return null === t ? "null" : typeof t
	}
	function Fn(t) {
		var e = t.NUMBER_FORMATS;
		return function(t, n, r) {
			return y(n) && (n = e.CURRENCY_SYM), y(r) && (r = e.PATTERNS[1].maxFrac), null == t ? t : Rn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n)
		}
	}
	function Dn(t) {
		var e = t.NUMBER_FORMATS;
		return function(t, n) {
			return null == t ? t : Rn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
		}
	}
	function Rn(t, e, n, r, i) {
		if (w(t)) return "";
		var o = t < 0;
		t = Math.abs(t);
		var a = t === 1 / 0;
		if (!a && !isFinite(t)) return "";
		var u = t + "",
			s = "",
			c = !1,
			l = [];
		if (a && (s = "∞"), !a && -1 !== u.indexOf("e")) {
			var f = u.match(/([\d\.]+)e(-?)(\d+)/);
			f && "-" == f[2] && f[3] > i + 1 ? t = 0 : (s = u, c = !0)
		}
		if (a || c) i > 0 && t < 1 && (s = t.toFixed(i), t = parseFloat(s));
		else {
			var h = (u.split(Qi)[1] || "").length;
			y(i) && (i = Math.min(Math.max(e.minFrac, h), e.maxFrac)), t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i);
			var p = ("" + t).split(Qi),
				d = p[0];
			p = p[1] || "";
			var v, $ = 0,
				m = e.lgSize,
				g = e.gSize;
			if (d.length >= m + g) for ($ = d.length - m, v = 0; v < $; v++)($ - v) % g == 0 && 0 !== v && (s += n), s += d.charAt(v);
			for (v = $; v < d.length; v++)(d.length - v) % m == 0 && 0 !== v && (s += n), s += d.charAt(v);
			for (; p.length < i;) p += "0";
			i && "0" !== i && (s += r + p.substr(0, i))
		}
		return 0 === t && (o = !1), l.push(o ? e.negPre : e.posPre, s, o ? e.negSuf : e.posSuf), l.join("")
	}
	function Pn(t, e, n) {
		var r = "";
		for (t < 0 && (r = "-", t = -t), t = "" + t; t.length < e;) t = "0" + t;
		return n && (t = t.substr(t.length - e)), r + t
	}
	function Nn(t, e, n, r) {
		return n = n || 0,
		function(i) {
			var o = i["get" + t]();
			return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), Pn(o, e, r)
		}
	}
	function Vn(t, e) {
		return function(n, r) {
			var i = n["get" + t]();
			return r[br(e ? "SHORT" + t : t)][i]
		}
	}
	function Un(t, e, n) {
		var r = -1 * n,
			i = r >= 0 ? "+" : "";
		return i += Pn(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Pn(Math.abs(r % 60), 2)
	}
	function qn(t) {
		var e = new Date(t, 0, 1).getDay();
		return new Date(t, 0, (e <= 4 ? 5 : 12) - e)
	}
	function Ln(t) {
		return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
	}
	function Bn(t) {
		return function(e) {
			var n = qn(e.getFullYear()),
				r = Ln(e),
				i = +r - +n;
			return Pn(1 + Math.round(i / 6048e5), t)
		}
	}
	function Hn(t, e) {
		return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
	}
	function zn(t, e) {
		return t.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1]
	}
	function Wn(t, e) {
		return t.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1]
	}
	function Gn(t) {
		function e(t) {
			var e;
			if (e = t.match(n)) {
				var r = new Date(0),
					i = 0,
					o = 0,
					a = e[8] ? r.setUTCFullYear : r.setFullYear,
					u = e[8] ? r.setUTCHours : r.setHours;
				e[9] && (i = p(e[9] + e[10]), o = p(e[9] + e[11])), a.call(r, p(e[1]), p(e[2]) - 1, p(e[3]));
				var s = p(e[4] || 0) - i,
					c = p(e[5] || 0) - o,
					l = p(e[6] || 0),
					f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
				return u.call(r, s, c, l, f), r
			}
			return t
		}
		var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function(n, r, i) {
			var a, u, s = "",
				c = [];
			if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, _(n) && (n = no.test(n) ? p(n) : e(n)), C(n) && (n = new Date(n)), !S(n) || !isFinite(n.getTime())) return n;
			for (; r;) u = eo.exec(r), u ? (c = B(c, u, 1), r = c.pop()) : (c.push(r), r = null);
			var l = n.getTimezoneOffset();
			return i && (l = Y(i, n.getTimezoneOffset()), n = Z(n, i, !0)), o(c, function(e) {
				a = to[e], s += a ? a(n, t.DATETIME_FORMATS, l) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
			}), s
		}
	}
	function Jn() {
		return function(t, e) {
			return y(e) && (e = 2), G(t, e)
		}
	}
	function Yn() {
		return function(t, e, n) {
			return e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : p(e), isNaN(e) ? t : (C(t) && (t = t.toString()), Rr(t) || _(t) ? (n = !n || isNaN(n) ? 0 : p(n), n = n < 0 && n >= -t.length ? t.length + n : n, e >= 0 ? t.slice(n, n + e) : 0 === n ? t.slice(e, t.length) : t.slice(Math.max(0, n + e), n)) : t)
		}
	}
	function Kn(t) {
		function e(e, n) {
			return n = n ? -1 : 1, e.map(function(e) {
				var r = 1,
					i = $;
				if (E(e)) i = e;
				else if (_(e) && ("+" != e.charAt(0) && "-" != e.charAt(0) || (r = "-" == e.charAt(0) ? -1 : 1, e = e.substring(1)), "" !== e && (i = t(e), i.constant))) {
					var o = i();
					i = function(t) {
						return t[o]
					}
				}
				return {
					get: i,
					descending: r * n
				}
			})
		}
		function n(t) {
			switch (typeof t) {
				case "number":
				case "boolean":
				case "string":
					return !0;
				default:
					return !1
			}
		}
		function r(t, e) {
			return "function" == typeof t.valueOf && (t = t.valueOf(), n(t)) ? t : g(t) && (t = t.toString(), n(t)) ? t : e
		}
		function o(t, e) {
			var n = typeof t;
			return null === t ? (n = "string", t = "null") : "string" === n ? t = t.toLowerCase() : "object" === n && (t = r(t, e)), {
				value: t,
				type: n
			}
		}
		function a(t, e) {
			var n = 0;
			return t.type === e.type ? t.value !== e.value && (n = t.value < e.value ? -1 : 1) : n = t.type < e.type ? -1 : 1, n
		}
		return function(t, n, r) {
			function u(t, e) {
				return {
					value: t,
					predicateValues: c.map(function(n) {
						return o(n.get(t), e)
					})
				}
			}
			function s(t, e) {
				for (var n = 0, r = 0, i = c.length; r < i && !(n = a(t.predicateValues[r], e.predicateValues[r]) * c[r].descending); ++r);
				return n
			}
			if (!i(t)) return t;
			Rr(n) || (n = [n]), 0 === n.length && (n = ["+"]);
			var c = e(n, r),
				l = Array.prototype.map.call(t, u);
			return l.sort(s), t = l.map(function(t) {
				return t.value
			})
		}
	}
	function Zn(t) {
		return E(t) && (t = {
			link: t
		}), t.restrict = t.restrict || "AC", m(t)
	}
	function Xn(t, e) {
		t.$name = e
	}
	function Qn(t, e, r, i, a) {
		var u = this,
			s = [],
			c = u.$$parentForm = t.parent().controller("form") || uo;
		u.$error = {}, u.$$success = {}, u.$pending = n, u.$name = a(e.name || e.ngForm || "")(r), u.$dirty = !1, u.$pristine = !0, u.$valid = !0, u.$invalid = !1, u.$submitted = !1, c.$addControl(u), u.$rollbackViewValue = function() {
			o(s, function(t) {
				t.$rollbackViewValue()
			})
		}, u.$commitViewValue = function() {
			o(s, function(t) {
				t.$commitViewValue()
			})
		}, u.$addControl = function(t) {
			ht(t.$name, "input"), s.push(t), t.$name && (u[t.$name] = t)
		}, u.$$renameControl = function(t, e) {
			var n = t.$name;
			u[n] === t && delete u[n], u[e] = t, t.$name = e
		}, u.$removeControl = function(t) {
			t.$name && u[t.$name] === t && delete u[t.$name], o(u.$pending, function(e, n) {
				u.$setValidity(n, null, t)
			}), o(u.$error, function(e, n) {
				u.$setValidity(n, null, t)
			}), o(u.$$success, function(e, n) {
				u.$setValidity(n, null, t)
			}), V(s, t)
		}, dr({
			ctrl: this,
			$element: t,
			set: function(t, e, n) {
				var r = t[e];
				if (r) {
					-1 === r.indexOf(n) && r.push(n)
				} else t[e] = [n]
			},
			unset: function(t, e, n) {
				var r = t[e];
				r && (V(r, n), 0 === r.length && delete t[e])
			},
			parentForm: c,
			$animate: i
		}), u.$setDirty = function() {
			i.removeClass(t, Ho), i.addClass(t, zo), u.$dirty = !0, u.$pristine = !1, c.$setDirty()
		}, u.$setPristine = function() {
			i.setClass(t, Ho, zo + " " + so), u.$dirty = !1, u.$pristine = !0, u.$submitted = !1, o(s, function(t) {
				t.$setPristine()
			})
		}, u.$setUntouched = function() {
			o(s, function(t) {
				t.$setUntouched()
			})
		}, u.$setSubmitted = function() {
			i.addClass(t, so), u.$submitted = !0, c.$setSubmitted()
		}
	}
	function tr(t) {
		t.$formatters.push(function(e) {
			return t.$isEmpty(e) ? e : e.toString()
		})
	}
	function er(t, e, n, r, i, o) {
		nr(t, e, n, r, i, o), tr(r)
	}
	function nr(t, e, n, r, i, o) {
		var a = gr(e[0].type);
		if (!i.android) {
			var u = !1;
			e.on("compositionstart", function(t) {
				u = !0
			}), e.on("compositionend", function() {
				u = !1, s()
			})
		}
		var s = function(t) {
			if (c && (o.defer.cancel(c), c = null), !u) {
				var i = e.val(),
					s = t && t.type;
				"password" === a || n.ngTrim && "false" === n.ngTrim || (i = Nr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, s)
			}
		};
		if (i.hasEvent("input")) e.on("input", s);
		else {
			var c, l = function(t, e, n) {
				c || (c = o.defer(function() {
					c = null, e && e.value === n || s(t)
				}))
			};
			e.on("keydown", function(t) {
				var e = t.keyCode;
				91 === e || 15 < e && e < 19 || 37 <= e && e <= 40 || l(t, this, this.value)
			}), i.hasEvent("paste") && e.on("paste cut", l)
		}
		e.on("change", s), r.$render = function() {
			e.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
		}
	}
	function rr(t, e) {
		if (S(t)) return t;
		if (_(t)) {
			yo.lastIndex = 0;
			var n = yo.exec(t);
			if (n) {
				var r = +n[1],
					i = +n[2],
					o = 0,
					a = 0,
					u = 0,
					s = 0,
					c = qn(r),
					l = 7 * (i - 1);
				return e && (o = e.getHours(), a = e.getMinutes(), u = e.getSeconds(), s = e.getMilliseconds()), new Date(r, 0, c.getDate() + l, o, a, u, s)
			}
		}
		return NaN
	}
	function ir(t, e) {
		return function(n, r) {
			var i, a;
			if (S(n)) return n;
			if (_(n)) {
				if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), ho.test(n)) return new Date(n);
				if (t.lastIndex = 0, i = t.exec(n)) return i.shift(), a = r ? {
					yyyy: r.getFullYear(),
					MM: r.getMonth() + 1,
					dd: r.getDate(),
					HH: r.getHours(),
					mm: r.getMinutes(),
					ss: r.getSeconds(),
					sss: r.getMilliseconds() / 1e3
				} : {
					yyyy: 1970,
					MM: 1,
					dd: 1,
					HH: 0,
					mm: 0,
					ss: 0,
					sss: 0
				}, o(i, function(t, n) {
					n < e.length && (a[e[n]] = +t)
				}), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
			}
			return NaN
		}
	}
	function or(t, e, r, i) {
		return function(o, a, u, s, c, l, f) {
			function h(t) {
				return t && !(t.getTime && t.getTime() !== t.getTime())
			}
			function p(t) {
				return b(t) ? S(t) ? t : r(t) : n
			}
			ar(o, a, u, s), nr(o, a, u, s, c, l);
			var d, v = s && s.$options && s.$options.timezone;
			if (s.$$parserName = t, s.$parsers.push(function(t) {
				if (s.$isEmpty(t)) return null;
				if (e.test(t)) {
					var i = r(t, d);
					return v && (i = Z(i, v)), i
				}
				return n
			}), s.$formatters.push(function(t) {
				if (t && !S(t)) throw Go("datefmt", "Expected `{0}` to be a date", t);
				return h(t) ? (d = t, d && v && (d = Z(d, v, !0)), f("date")(t, i, v)) : (d = null, "")
			}), b(u.min) || u.ngMin) {
				var $;
				s.$validators.min = function(t) {
					return !h(t) || y($) || r(t) >= $
				}, u.$observe("min", function(t) {
					$ = p(t), s.$validate()
				})
			}
			if (b(u.max) || u.ngMax) {
				var m;
				s.$validators.max = function(t) {
					return !h(t) || y(m) || r(t) <= m
				}, u.$observe("max", function(t) {
					m = p(t), s.$validate()
				})
			}
		}
	}
	function ar(t, e, r, i) {
		var o = e[0];
		(i.$$hasNativeValidators = w(o.validity)) && i.$parsers.push(function(t) {
			var r = e.prop(mr) || {};
			return r.badInput && !r.typeMismatch ? n : t
		})
	}
	function ur(t, e, r, i, o, a) {
		if (ar(t, e, r, i), nr(t, e, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function(t) {
			return i.$isEmpty(t) ? null : $o.test(t) ? parseFloat(t) : n
		}), i.$formatters.push(function(t) {
			if (!i.$isEmpty(t)) {
				if (!C(t)) throw Go("numfmt", "Expected `{0}` to be a number", t);
				t = t.toString()
			}
			return t
		}), b(r.min) || r.ngMin) {
			var u;
			i.$validators.min = function(t) {
				return i.$isEmpty(t) || y(u) || t >= u
			}, r.$observe("min", function(t) {
				b(t) && !C(t) && (t = parseFloat(t, 10)), u = C(t) && !isNaN(t) ? t : n, i.$validate()
			})
		}
		if (b(r.max) || r.ngMax) {
			var s;
			i.$validators.max = function(t) {
				return i.$isEmpty(t) || y(s) || t <= s
			}, r.$observe("max", function(t) {
				b(t) && !C(t) && (t = parseFloat(t, 10)), s = C(t) && !isNaN(t) ? t : n, i.$validate()
			})
		}
	}
	function sr(t, e, n, r, i, o) {
		nr(t, e, n, r, i, o), tr(r), r.$$parserName = "url", r.$validators.url = function(t, e) {
			var n = t || e;
			return r.$isEmpty(n) || po.test(n)
		}
	}
	function cr(t, e, n, r, i, o) {
		nr(t, e, n, r, i, o), tr(r), r.$$parserName = "email", r.$validators.email = function(t, e) {
			var n = t || e;
			return r.$isEmpty(n) || vo.test(n)
		}
	}
	function lr(t, e, n, r) {
		y(n.name) && e.attr("name", s());
		var i = function(t) {
			e[0].checked && r.$setViewValue(n.value, t && t.type)
		};
		e.on("click", i), r.$render = function() {
			var t = n.value;
			e[0].checked = t == r.$viewValue
		}, n.$observe("value", r.$render)
	}
	function fr(t, e, n, i, o) {
		var a;
		if (b(i)) {
			if (a = t(i), !a.constant) throw r("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
			return a(e)
		}
		return o
	}
	function hr(t, e, n, r, i, o, a, u) {
		var s = fr(u, t, "ngTrueValue", n.ngTrueValue, !0),
			c = fr(u, t, "ngFalseValue", n.ngFalseValue, !1),
			l = function(t) {
				r.$setViewValue(e[0].checked, t && t.type)
			};
		e.on("click", l), r.$render = function() {
			e[0].checked = r.$viewValue
		}, r.$isEmpty = function(t) {
			return !1 === t
		}, r.$formatters.push(function(t) {
			return L(t, s)
		}), r.$parsers.push(function(t) {
			return t ? s : c
		})
	}
	function pr(t, e) {
		return t = "ngClass" + t, ["$animate", function(n) {
			function r(t, e) {
				var n = [];
				t: for (var r = 0; r < t.length; r++) {
					for (var i = t[r], o = 0; o < e.length; o++) if (i == e[o]) continue t;
					n.push(i)
				}
				return n
			}
			function i(t) {
				var e = [];
				return Rr(t) ? (o(t, function(t) {
					e = e.concat(i(t))
				}), e) : _(t) ? t.split(" ") : w(t) ? (o(t, function(t, n) {
					t && (e = e.concat(n.split(" ")))
				}), e) : t
			}
			return {
				restrict: "AC",
				link: function(a, u, s) {
					function c(t) {
						var e = f(t, 1);
						s.$addClass(e)
					}
					function l(t) {
						var e = f(t, -1);
						s.$removeClass(e)
					}
					function f(t, e) {
						var n = u.data("$classCounts") || vt(),
							r = [];
						return o(t, function(t) {
							(e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
						}), u.data("$classCounts", n), r.join(" ")
					}
					function h(t, e) {
						var i = r(e, t),
							o = r(t, e);
						i = f(i, 1), o = f(o, -1), i && i.length && n.addClass(u, i), o && o.length && n.removeClass(u, o)
					}
					function p(t) {
						if (!0 === e || a.$index % 2 === e) {
							var n = i(t || []);
							if (d) {
								if (!L(t, d)) {
									var r = i(d);
									h(r, n)
								}
							} else c(n)
						}
						d = q(t)
					}
					var d;
					a.$watch(s[t], p, !0), s.$observe("class", function(e) {
						p(a.$eval(s[t]))
					}), "ngClass" !== t && a.$watch("$index", function(n, r) {
						var o = 1 & n;
						if (o !== (1 & r)) {
							var u = i(a.$eval(s[t]));
							o === e ? c(u) : l(u)
						}
					})
				}
			}
		}]
	}
	function dr(t) {
		function e(t, e, s) {
			e === n ? r("$pending", t, s) : i("$pending", t, s), M(e) ? e ? (f(u.$error, t, s), l(u.$$success, t, s)) : (l(u.$error, t, s), f(u.$$success, t, s)) : (f(u.$error, t, s), f(u.$$success, t, s)), u.$pending ? (o(Wo, !0), u.$valid = u.$invalid = n, a("", null)) : (o(Wo, !1), u.$valid = vr(u.$error), u.$invalid = !u.$valid, a("", u.$valid));
			var c;
			c = u.$pending && u.$pending[t] ? n : !u.$error[t] && ( !! u.$$success[t] || null), a(t, c), h.$setValidity(t, c, u)
		}
		function r(t, e, n) {
			u[t] || (u[t] = {}), l(u[t], e, n)
		}
		function i(t, e, r) {
			u[t] && f(u[t], e, r), vr(u[t]) && (u[t] = n)
		}
		function o(t, e) {
			e && !c[t] ? (p.addClass(s, t), c[t] = !0) : !e && c[t] && (p.removeClass(s, t), c[t] = !1)
		}
		function a(t, e) {
			t = t ? "-" + ct(t, "-") : "", o(Lo + t, !0 === e), o(Bo + t, !1 === e)
		}
		var u = t.ctrl,
			s = t.$element,
			c = {}, l = t.set,
			f = t.unset,
			h = t.parentForm,
			p = t.$animate;
		c[Bo] = !(c[Lo] = s.hasClass(Lo)), u.$setValidity = e
	}
	function vr(t) {
		if (t) for (var e in t) if (t.hasOwnProperty(e)) return !1;
		return !0
	}
	var $r = /^\/(.+)\/([a-z]*)$/,
		mr = "validity",
		gr = function(t) {
			return _(t) ? t.toLowerCase() : t
		}, yr = Object.prototype.hasOwnProperty,
		br = function(t) {
			return _(t) ? t.toUpperCase() : t
		}, wr = function(t) {
			return _(t) ? t.replace(/[A-Z]/g, function(t) {
				return String.fromCharCode(32 | t.charCodeAt(0))
			}) : t
		}, xr = function(t) {
			return _(t) ? t.replace(/[a-z]/g, function(t) {
				return String.fromCharCode(-33 & t.charCodeAt(0))
			}) : t
		};
	"i" !== "I".toLowerCase() && (gr = wr, br = xr);
	var _r, Cr, Sr, Er, Ar = [].slice,
		kr = [].splice,
		Or = [].push,
		jr = Object.prototype.toString,
		Tr = Object.getPrototypeOf,
		Ir = r("ng"),
		Mr = t.angular || (t.angular = {}),
		Fr = 0;
	_r = e.documentMode, v.$inject = [], $.$inject = [];
	var Dr, Rr = Array.isArray,
		Pr = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
		Nr = function(t) {
			return _(t) ? t.trim() : t
		}, Vr = function(t) {
			return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
		}, Ur = function() {
			if (b(Ur.isActive_)) return Ur.isActive_;
			var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
			if (!t) try {
				new Function("")
			} catch (e) {
				t = !0
			}
			return Ur.isActive_ = t
		}, qr = function() {
			if (b(qr.name_)) return qr.name_;
			var t, n, r, i, o = Lr.length;
			for (n = 0; n < o; ++n) if (r = Lr[n], t = e.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
				i = t.getAttribute(r + "jq");
				break
			}
			return qr.name_ = i
		}, Lr = ["ng-", "data-ng-", "ng:", "x-ng-"],
		Br = /[A-Z]/g,
		Hr = !1,
		zr = 1,
		Wr = 3,
		Gr = 8,
		Jr = 9,
		Yr = 11,
		Kr = {
			full: "1.4.3",
			major: 1,
			minor: 4,
			dot: 3,
			codeName: "foam-acceleration"
		};
	Et.expando = "ng339";
	var Zr = Et.cache = {}, Xr = 1,
		Qr = function(t, e, n) {
			t.addEventListener(e, n, !1)
		}, ti = function(t, e, n) {
			t.removeEventListener(e, n, !1)
		};
	Et._data = function(t) {
		return this.cache[t[this.expando]] || {}
	};
	var ei = /([\:\-\_]+(.))/g,
		ni = /^moz([A-Z])/,
		ri = {
			mouseleave: "mouseout",
			mouseenter: "mouseover"
		}, ii = r("jqLite"),
		oi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ai = /<|&#?\w+;/,
		ui = /<([\w:]+)/,
		si = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		ci = {
			option: [1, '<select multiple="multiple">', "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ci.optgroup = ci.option, ci.tbody = ci.tfoot = ci.colgroup = ci.caption = ci.thead, ci.th = ci.td;
	var li = Et.prototype = {
		ready: function(n) {
			function r() {
				i || (i = !0, n())
			}
			var i = !1;
			"complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), Et(t).on("load", r))
		},
		toString: function() {
			var t = [];
			return o(this, function(e) {
				t.push("" + e)
			}), "[" + t.join(", ") + "]"
		},
		eq: function(t) {
			return Cr(t >= 0 ? this[t] : this[this.length + t])
		},
		length: 0,
		push: Or,
		sort: [].sort,
		splice: [].splice
	}, fi = {};
	o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(t) {
		fi[gr(t)] = t
	});
	var hi = {};
	o("input,select,option,textarea,button,form,details".split(","), function(t) {
		hi[t] = !0
	});
	var pi = {
		ngMinlength: "minlength",
		ngMaxlength: "maxlength",
		ngMin: "min",
		ngMax: "max",
		ngPattern: "pattern"
	};
	o({
		data: It,
		removeData: jt,
		hasData: _t
	}, function(t, e) {
		Et[e] = t
	}), o({
		data: It,
		inheritedData: Nt,
		scope: function(t) {
			return Cr.data(t, "$scope") || Nt(t.parentNode || t, ["$isolateScope", "$scope"])
		},
		isolateScope: function(t) {
			return Cr.data(t, "$isolateScope") || Cr.data(t, "$isolateScopeNoTemplate")
		},
		controller: Pt,
		injector: function(t) {
			return Nt(t, "$injector")
		},
		removeAttr: function(t, e) {
			t.removeAttribute(e)
		},
		hasClass: Mt,
		css: function(t, e, n) {
			if (e = bt(e), !b(n)) return t.style[e];
			t.style[e] = n
		},
		attr: function(t, e, r) {
			var i = t.nodeType;
			if (i !== Wr && 2 !== i && i !== Gr) {
				var o = gr(e);
				if (fi[o]) {
					if (!b(r)) return t[e] || (t.attributes.getNamedItem(e) || v).specified ? o : n;
					r ? (t[e] = !0, t.setAttribute(e, o)) : (t[e] = !1, t.removeAttribute(o))
				} else if (b(r)) t.setAttribute(e, r);
				else if (t.getAttribute) {
					var a = t.getAttribute(e, 2);
					return null === a ? n : a
				}
			}
		},
		prop: function(t, e, n) {
			if (!b(n)) return t[e];
			t[e] = n
		},
		text: function() {
			function t(t, e) {
				if (y(e)) {
					var n = t.nodeType;
					return n === zr || n === Wr ? t.textContent : ""
				}
				t.textContent = e
			}
			return t.$dv = "", t
		}(),
		val: function(t, e) {
			if (y(e)) {
				if (t.multiple && "select" === N(t)) {
					var n = [];
					return o(t.options, function(t) {
						t.selected && n.push(t.value || t.text)
					}), 0 === n.length ? null : n
				}
				return t.value
			}
			t.value = e
		},
		html: function(t, e) {
			if (y(e)) return t.innerHTML;
			kt(t, !0), t.innerHTML = e
		},
		empty: Vt
	}, function(t, e) {
		Et.prototype[e] = function(e, r) {
			var i, o, a = this.length;
			if (t !== Vt && (2 == t.length && t !== Mt && t !== Pt ? e : r) === n) {
				if (w(e)) {
					for (i = 0; i < a; i++) if (t === It) t(this[i], e);
					else for (o in e) t(this[i], o, e[o]);
					return this
				}
				for (var u = t.$dv, s = u === n ? Math.min(a, 1) : a, c = 0; c < s; c++) {
					var l = t(this[c], e, r);
					u = u ? u + l : l
				}
				return u
			}
			for (i = 0; i < a; i++) t(this[i], e, r);
			return this
		}
	}), o({
		removeData: jt,
		on: function t(e, n, r, i) {
			if (b(i)) throw ii("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
			if (xt(e)) {
				var o = Tt(e, !0),
					a = o.events,
					u = o.handle;
				u || (u = o.handle = Ht(e, a));
				for (var s = n.indexOf(" ") >= 0 ? n.split(" ") : [n], c = s.length; c--;) {
					n = s[c];
					var l = a[n];
					l || (a[n] = [], "mouseenter" === n || "mouseleave" === n ? t(e, ri[n], function(t) {
						var e = this,
							r = t.relatedTarget;
						r && (r === e || e.contains(r)) || u(t, n)
					}) : "$destroy" !== n && Qr(e, n, u), l = a[n]), l.push(r)
				}
			}
		},
		off: Ot,
		one: function(t, e, n) {
			t = Cr(t), t.on(e, function r() {
				t.off(e, n), t.off(e, r)
			}), t.on(e, n)
		},
		replaceWith: function(t, e) {
			var n, r = t.parentNode;
			kt(t), o(new Et(e), function(e) {
				n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
			})
		},
		children: function(t) {
			var e = [];
			return o(t.childNodes, function(t) {
				t.nodeType === zr && e.push(t)
			}), e
		},
		contents: function(t) {
			return t.contentDocument || t.childNodes || []
		},
		append: function(t, e) {
			var n = t.nodeType;
			if (n === zr || n === Yr) {
				e = new Et(e);
				for (var r = 0, i = e.length; r < i; r++) {
					var o = e[r];
					t.appendChild(o)
				}
			}
		},
		prepend: function(t, e) {
			if (t.nodeType === zr) {
				var n = t.firstChild;
				o(new Et(e), function(e) {
					t.insertBefore(e, n)
				})
			}
		},
		wrap: function(t, e) {
			e = Cr(e).eq(0).clone()[0];
			var n = t.parentNode;
			n && n.replaceChild(e, t), e.appendChild(t)
		},
		remove: Ut,
		detach: function(t) {
			Ut(t, !0)
		},
		after: function(t, e) {
			var n = t,
				r = t.parentNode;
			e = new Et(e);
			for (var i = 0, o = e.length; i < o; i++) {
				var a = e[i];
				r.insertBefore(a, n.nextSibling), n = a
			}
		},
		addClass: Dt,
		removeClass: Ft,
		toggleClass: function(t, e, n) {
			e && o(e.split(" "), function(e) {
				var r = n;
				y(r) && (r = !Mt(t, e)), (r ? Dt : Ft)(t, e)
			})
		},
		parent: function(t) {
			var e = t.parentNode;
			return e && e.nodeType !== Yr ? e : null
		},
		next: function(t) {
			return t.nextElementSibling
		},
		find: function(t, e) {
			return t.getElementsByTagName ? t.getElementsByTagName(e) : []
		},
		clone: At,
		triggerHandler: function(t, e, n) {
			var r, i, a, u = e.type || e,
				s = Tt(t),
				c = s && s.events,
				l = c && c[u];
			l && (r = {
				preventDefault: function() {
					this.defaultPrevented = !0
				},
				isDefaultPrevented: function() {
					return !0 === this.defaultPrevented
				},
				stopImmediatePropagation: function() {
					this.immediatePropagationStopped = !0
				},
				isImmediatePropagationStopped: function() {
					return !0 === this.immediatePropagationStopped
				},
				stopPropagation: v,
				type: u,
				target: t
			}, e.type && (r = f(r, e)), i = q(l), a = n ? [r].concat(n) : [r], o(i, function(e) {
				r.isImmediatePropagationStopped() || e.apply(t, a)
			}))
		}
	}, function(t, e) {
		Et.prototype[e] = function(e, n, r) {
			for (var i, o = 0, a = this.length; o < a; o++) y(i) ? (i = t(this[o], e, n, r), b(i) && (i = Cr(i))) : Rt(i, t(this[o], e, n, r));
			return b(i) ? i : this
		}, Et.prototype.bind = Et.prototype.on, Et.prototype.unbind = Et.prototype.off
	}), Gt.prototype = {
		put: function(t, e) {
			this[Wt(t, this.nextUid)] = e
		},
		get: function(t) {
			return this[Wt(t, this.nextUid)]
		},
		remove: function(t) {
			var e = this[t = Wt(t, this.nextUid)];
			return delete this[t], e
		}
	};
	var di = [function() {
		this.$get = [function() {
			return Gt
		}]
	}],
		vi = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
		$i = /,/,
		mi = /^\s*(_?)(\S+?)\1\s*$/,
		gi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
		yi = r("$injector");
	Kt.$$annotate = Yt;
	var bi = r("$animate"),
		wi = 1,
		xi = function() {
			this.$get = ["$q", "$$rAF", function(t, e) {
				function n() {}
				return n.all = v, n.chain = v, n.prototype = {
					end: v,
					cancel: v,
					resume: v,
					pause: v,
					complete: v,
					then: function(n, r) {
						return t(function(t) {
							e(function() {
								t()
							})
						}).then(n, r)
					}
				}, n
			}]
		}, _i = function() {
			var t = new Gt,
				e = [];
			this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
				function i(n, i, a) {
					var u = t.get(n);
					u || (t.put(n, u = {}), e.push(n)), i && o(i.split(" "), function(t) {
						t && (u[t] = !0)
					}), a && o(a.split(" "), function(t) {
						t && (u[t] = !1)
					}), e.length > 1 || r.$$postDigest(function() {
						o(e, function(e) {
							var n = t.get(e);
							if (n) {
								var r = te(e.attr("class")),
									i = "",
									a = "";
								o(n, function(t, e) {
									t !== !! r[e] && (t ? i += (i.length ? " " : "") + e : a += (a.length ? " " : "") + e)
								}), o(e, function(t) {
									i && Dt(t, i), a && Ft(t, a)
								}), t.remove(e)
							}
						}), e.length = 0
					})
				}
				return {
					enabled: v,
					on: v,
					off: v,
					pin: v,
					push: function(t, e, r, o) {
						return o && o(), r = r || {}, r.from && t.css(r.from), r.to && t.css(r.to), (r.addClass || r.removeClass) && i(t, r.addClass, r.removeClass), new n
					}
				}
			}]
		}, Ci = ["$provide", function(t) {
			var e = this;
			this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
				if (n && "." !== n.charAt(0)) throw bi("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
				var i = n + "-animation";
				e.$$registeredAnimations[n.substr(1)] = i, t.factory(i, r)
			}, this.classNameFilter = function(t) {
				if (1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null, this.$$classNameFilter)) {
					if (new RegExp("(\\s+|\\/)ng-animate(\\s+|\\/)").test(this.$$classNameFilter.toString())) throw bi("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', "ng-animate")
				}
				return this.$$classNameFilter
			}, this.$get = ["$$animateQueue", function(t) {
				function e(t, e, n) {
					if (n) {
						var r = Qt(n);
						!r || r.parentNode || r.previousElementSibling || (n = null)
					}
					n ? n.after(t) : e.prepend(t)
				}
				return {
					on: t.on,
					off: t.off,
					pin: t.pin,
					enabled: t.enabled,
					cancel: function(t) {
						t.end && t.end()
					},
					enter: function(n, r, i, o) {
						return r = r && Cr(r), i = i && Cr(i), r = r || i.parent(), e(n, r, i), t.push(n, "enter", ee(o))
					},
					move: function(n, r, i, o) {
						return r = r && Cr(r), i = i && Cr(i), r = r || i.parent(), e(n, r, i), t.push(n, "move", ee(o))
					},
					leave: function(e, n) {
						return t.push(e, "leave", ee(n), function() {
							e.remove()
						})
					},
					addClass: function(e, n, r) {
						return r = ee(r), r.addClass = Xt(r.addclass, n), t.push(e, "addClass", r)
					},
					removeClass: function(e, n, r) {
						return r = ee(r), r.removeClass = Xt(r.removeClass, n), t.push(e, "removeClass", r)
					},
					setClass: function(e, n, r, i) {
						return i = ee(i), i.addClass = Xt(i.addClass, n), i.removeClass = Xt(i.removeClass, r), t.push(e, "setClass", i)
					},
					animate: function(e, n, r, i, o) {
						return o = ee(o), o.from = o.from ? f(o.from, n) : n, o.to = o.to ? f(o.to, r) : r, i = i || "ng-inline-animate", o.tempClasses = Xt(o.tempClasses, i), t.push(e, "animate", o)
					}
				}
			}]
		}],
		Si = r("$compile");
	ae.$inject = ["$provide", "$$sanitizeUriProvider"];
	var Ei = /^((?:x|data)[\:\-_])/i,
		Ai = r("$controller"),
		ki = /^(\S+)(\s+as\s+(\w+))?$/,
		Oi = "application/json",
		ji = {
			"Content-Type": Oi + ";charset=utf-8"
		}, Ti = /^\[|^\{(?!\{)/,
		Ii = {
			"[": /]$/,
			"{": /}$/
		}, Mi = /^\)\]\}',?\n/,
		Fi = Mr.$interpolateMinErr = r("$interpolate");
	Fi.throwNoconcat = function(t) {
		throw Fi("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", t)
	}, Fi.interr = function(t, e) {
		return Fi("interr", "Can't interpolate: {0}\n{1}", t, e.toString())
	};
	var Di = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
		Ri = {
			http: 80,
			https: 443,
			ftp: 21
		}, Pi = r("$location"),
		Ni = {
			$$html5: !1,
			$$replace: !1,
			absUrl: qe("$$absUrl"),
			url: function(t) {
				if (y(t)) return this.$$url;
				var e = Di.exec(t);
				return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
			},
			protocol: qe("$$protocol"),
			host: qe("$$host"),
			port: qe("$$port"),
			path: Le("$$path", function(t) {
				return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
			}),
			search: function(t, e) {
				switch (arguments.length) {
					case 0:
						return this.$$search;
					case 1:
						if (_(t) || C(t)) t = t.toString(), this.$$search = tt(t);
						else {
							if (!w(t)) throw Pi("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
							t = U(t, {}), o(t, function(e, n) {
								null == e && delete t[n]
							}), this.$$search = t
						}
						break;
					default:
						y(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
				}
				return this.$$compose(), this
			},
			hash: Le("$$hash", function(t) {
				return null !== t ? t.toString() : ""
			}),
			replace: function() {
				return this.$$replace = !0, this
			}
		};
	o([Ue, Ve, Ne], function(t) {
		t.prototype = Object.create(Ni), t.prototype.state = function(e) {
			if (!arguments.length) return this.$$state;
			if (t !== Ne || !this.$$html5) throw Pi("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
			return this.$$state = y(e) ? null : e, this
		}
	});
	var Vi = r("$parse"),
		Ui = Function.prototype.call,
		qi = Function.prototype.apply,
		Li = Function.prototype.bind,
		Bi = vt();
	o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(t) {
		Bi[t] = !0
	});
	var Hi = {
		n: "\n",
		f: "\f",
		r: "\r",
		t: "\t",
		v: "\v",
		"'": "'",
		'"': '"'
	}, zi = function(t) {
		this.options = t
	};
	zi.prototype = {
		constructor: zi,
		lex: function(t) {
			for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
				var e = this.text.charAt(this.index);
				if ('"' === e || "'" === e) this.readString(e);
				else if (this.isNumber(e) || "." === e && this.isNumber(this.peek())) this.readNumber();
				else if (this.isIdent(e)) this.readIdent();
				else if (this.is(e, "(){}[].,;:?")) this.tokens.push({
					index: this.index,
					text: e
				}), this.index++;
				else if (this.isWhitespace(e)) this.index++;
				else {
					var n = e + this.peek(),
						r = n + this.peek(2),
						i = Bi[e],
						o = Bi[n],
						a = Bi[r];
					if (i || o || a) {
						var u = a ? r : o ? n : e;
						this.tokens.push({
							index: this.index,
							text: u,
							operator: !0
						}), this.index += u.length
					} else this.throwError("Unexpected next character ", this.index, this.index + 1)
				}
			}
			return this.tokens
		},
		is: function(t, e) {
			return -1 !== e.indexOf(t)
		},
		peek: function(t) {
			var e = t || 1;
			return this.index + e < this.text.length && this.text.charAt(this.index + e)
		},
		isNumber: function(t) {
			return "0" <= t && t <= "9" && "string" == typeof t
		},
		isWhitespace: function(t) {
			return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t
		},
		isIdent: function(t) {
			return "a" <= t && t <= "z" || "A" <= t && t <= "Z" || "_" === t || "$" === t
		},
		isExpOperator: function(t) {
			return "-" === t || "+" === t || this.isNumber(t)
		},
		throwError: function(t, e, n) {
			n = n || this.index;
			var r = b(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
			throw Vi("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text)
		},
		readNumber: function() {
			for (var t = "", e = this.index; this.index < this.text.length;) {
				var n = gr(this.text.charAt(this.index));
				if ("." == n || this.isNumber(n)) t += n;
				else {
					var r = this.peek();
					if ("e" == n && this.isExpOperator(r)) t += n;
					else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1)) t += n;
					else {
						if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1)) break;
						this.throwError("Invalid exponent")
					}
				}
				this.index++
			}
			this.tokens.push({
				index: e,
				text: t,
				constant: !0,
				value: Number(t)
			})
		},
		readIdent: function() {
			for (var t = this.index; this.index < this.text.length;) {
				var e = this.text.charAt(this.index);
				if (!this.isIdent(e) && !this.isNumber(e)) break;
				this.index++
			}
			this.tokens.push({
				index: t,
				text: this.text.slice(t, this.index),
				identifier: !0
			})
		},
		readString: function(t) {
			var e = this.index;
			this.index++;
			for (var n = "", r = t, i = !1; this.index < this.text.length;) {
				var o = this.text.charAt(this.index);
				if (r += o, i) {
					if ("u" === o) {
						var a = this.text.substring(this.index + 1, this.index + 5);
						a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
					} else {
						n += Hi[o] || o
					}
					i = !1
				} else if ("\\" === o) i = !0;
				else {
					if (o === t) return this.index++, void this.tokens.push({
						index: e,
						text: r,
						constant: !0,
						value: n
					});
					n += o
				}
				this.index++
			}
			this.throwError("Unterminated quote", e)
		}
	};
	var Wi = function(t, e) {
		this.lexer = t, this.options = e
	};
	Wi.Program = "Program", Wi.ExpressionStatement = "ExpressionStatement", Wi.AssignmentExpression = "AssignmentExpression", Wi.ConditionalExpression = "ConditionalExpression", Wi.LogicalExpression = "LogicalExpression", Wi.BinaryExpression = "BinaryExpression", Wi.UnaryExpression = "UnaryExpression", Wi.CallExpression = "CallExpression", Wi.MemberExpression = "MemberExpression", Wi.Identifier = "Identifier", Wi.Literal = "Literal", Wi.ArrayExpression = "ArrayExpression", Wi.Property = "Property", Wi.ObjectExpression = "ObjectExpression", Wi.ThisExpression = "ThisExpression", Wi.NGValueParameter = "NGValueParameter", Wi.prototype = {
		ast: function(t) {
			this.text = t, this.tokens = this.lexer.lex(t);
			var e = this.program();
			return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e
		},
		program: function() {
			for (var t = [];;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";")) return {
				type: Wi.Program,
				body: t
			}
		},
		expressionStatement: function() {
			return {
				type: Wi.ExpressionStatement,
				expression: this.filterChain()
			}
		},
		filterChain: function() {
			for (var t = this.expression(); this.expect("|");) t = this.filter(t);
			return t
		},
		expression: function() {
			return this.assignment()
		},
		assignment: function() {
			var t = this.ternary();
			return this.expect("=") && (t = {
				type: Wi.AssignmentExpression,
				left: t,
				right: this.assignment(),
				operator: "="
			}), t
		},
		ternary: function() {
			var t, e, n = this.logicalOR();
			return this.expect("?") && (t = this.expression(), this.consume(":")) ? (e = this.expression(), {
				type: Wi.ConditionalExpression,
				test: n,
				alternate: t,
				consequent: e
			}) : n
		},
		logicalOR: function() {
			for (var t = this.logicalAND(); this.expect("||");) t = {
				type: Wi.LogicalExpression,
				operator: "||",
				left: t,
				right: this.logicalAND()
			};
			return t
		},
		logicalAND: function() {
			for (var t = this.equality(); this.expect("&&");) t = {
				type: Wi.LogicalExpression,
				operator: "&&",
				left: t,
				right: this.equality()
			};
			return t
		},
		equality: function() {
			for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");) e = {
				type: Wi.BinaryExpression,
				operator: t.text,
				left: e,
				right: this.relational()
			};
			return e
		},
		relational: function() {
			for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");) e = {
				type: Wi.BinaryExpression,
				operator: t.text,
				left: e,
				right: this.additive()
			};
			return e
		},
		additive: function() {
			for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = {
				type: Wi.BinaryExpression,
				operator: t.text,
				left: e,
				right: this.multiplicative()
			};
			return e
		},
		multiplicative: function() {
			for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = {
				type: Wi.BinaryExpression,
				operator: t.text,
				left: e,
				right: this.unary()
			};
			return e
		},
		unary: function() {
			var t;
			return (t = this.expect("+", "-", "!")) ? {
				type: Wi.UnaryExpression,
				operator: t.text,
				prefix: !0,
				argument: this.unary()
			} : this.primary()
		},
		primary: function() {
			var t;
			this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.constants.hasOwnProperty(this.peek().text) ? t = U(this.constants[this.consume().text]) : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
			for (var e; e = this.expect("(", "[", ".");) "(" === e.text ? (t = {
				type: Wi.CallExpression,
				callee: t,
				arguments: this.parseArguments()
			}, this.consume(")")) : "[" === e.text ? (t = {
				type: Wi.MemberExpression,
				object: t,
				property: this.expression(),
				computed: !0
			}, this.consume("]")) : "." === e.text ? t = {
				type: Wi.MemberExpression,
				object: t,
				property: this.identifier(),
				computed: !1
			} : this.throwError("IMPOSSIBLE");
			return t
		},
		filter: function(t) {
			for (var e = [t], n = {
				type: Wi.CallExpression,
				callee: this.identifier(),
				arguments: e,
				filter: !0
			}; this.expect(":");) e.push(this.expression());
			return n
		},
		parseArguments: function() {
			var t = [];
			if (")" !== this.peekToken().text) do {
				t.push(this.expression())
			} while (this.expect(","));
			return t
		},
		identifier: function() {
			var t = this.consume();
			return t.identifier || this.throwError("is not a valid identifier", t), {
				type: Wi.Identifier,
				name: t.text
			}
		},
		constant: function() {
			return {
				type: Wi.Literal,
				value: this.consume().value
			}
		},
		arrayDeclaration: function() {
			var t = [];
			if ("]" !== this.peekToken().text) do {
				if (this.peek("]")) break;
				t.push(this.expression())
			} while (this.expect(","));
			return this.consume("]"), {
				type: Wi.ArrayExpression,
				elements: t
			}
		},
		object: function() {
			var t, e = [];
			if ("}" !== this.peekToken().text) do {
				if (this.peek("}")) break;
				t = {
					type: Wi.Property,
					kind: "init"
				}, this.peek().constant ? t.key = this.constant() : this.peek().identifier ? t.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), t.value = this.expression(), e.push(t)
			} while (this.expect(","));
			return this.consume("}"), {
				type: Wi.ObjectExpression,
				properties: e
			}
		},
		throwError: function(t, e) {
			throw Vi("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
		},
		consume: function(t) {
			if (0 === this.tokens.length) throw Vi("ueoe", "Unexpected end of expression: {0}", this.text);
			var e = this.expect(t);
			return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
		},
		peekToken: function() {
			if (0 === this.tokens.length) throw Vi("ueoe", "Unexpected end of expression: {0}", this.text);
			return this.tokens[0]
		},
		peek: function(t, e, n, r) {
			return this.peekAhead(0, t, e, n, r)
		},
		peekAhead: function(t, e, n, r, i) {
			if (this.tokens.length > t) {
				var o = this.tokens[t],
					a = o.text;
				if (a === e || a === n || a === r || a === i || !e && !n && !r && !i) return o
			}
			return !1
		},
		expect: function(t, e, n, r) {
			var i = this.peek(t, e, n, r);
			return !!i && (this.tokens.shift(), i)
		},
		constants: {
			true: {
				type: Wi.Literal,
				value: !0
			},
			false: {
				type: Wi.Literal,
				value: !1
			},
			null: {
				type: Wi.Literal,
				value: null
			},
			undefined: {
				type: Wi.Literal,
				value: n
			},
			this: {
				type: Wi.ThisExpression
			}
		}
	}, rn.prototype = {
		compile: function(t, e) {
			var r = this,
				i = this.astBuilder.ast(t);
			this.state = {
				nextId: 0,
				filters: {},
				expensiveChecks: e,
				fn: {
					vars: [],
					body: [],
					own: {}
				},
				assign: {
					vars: [],
					body: [],
					own: {}
				},
				inputs: []
			}, Ze(i, r.$filter);
			var a, u = "";
			if (this.stage = "assign", a = tn(i)) {
				this.state.computing = "assign";
				var s = this.nextId();
				this.recurse(a, s), u = "fn.assign=" + this.generateFunction("assign", "s,v,l")
			}
			var c = Xe(i.body);
			r.stage = "inputs", o(c, function(t, e) {
				var n = "fn" + e;
				r.state[n] = {
					vars: [],
					body: [],
					own: {}
				}, r.state.computing = n;
				var i = r.nextId();
				r.recurse(t, i), r.return_(i), r.state.inputs.push(n), t.watchId = e
			}), this.state.computing = "fn", this.stage = "main", this.recurse(i);
			var l = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + u + this.watchFns() + "return fn;",
				f = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "ifDefined", "plus", "text", l)(this.$filter, ze, We, Ge, Je, Ye, t);
			return this.state = this.stage = n, f.literal = en(i), f.constant = nn(i), f
		},
		USE: "use",
		STRICT: "strict",
		watchFns: function() {
			var t = [],
				e = this.state.inputs,
				n = this;
			return o(e, function(e) {
				t.push("var " + e + "=" + n.generateFunction(e, "s"))
			}), e.length && t.push("fn.inputs=[" + e.join(",") + "];"), t.join("")
		},
		generateFunction: function(t, e) {
			return "function(" + e + "){" + this.varsPrefix(t) + this.body(t) + "};"
		},
		filterPrefix: function() {
			var t = [],
				e = this;
			return o(this.state.filters, function(n, r) {
				t.push(n + "=$filter(" + e.escape(r) + ")")
			}), t.length ? "var " + t.join(",") + ";" : ""
		},
		varsPrefix: function(t) {
			return this.state[t].vars.length ? "var " + this.state[t].vars.join(",") + ";" : ""
		},
		body: function(t) {
			return this.state[t].body.join("")
		},
		recurse: function(t, e, r, i, a, u) {
			var s, c, l, f, h = this;
			if (i = i || v, !u && b(t.watchId)) return e = e || this.nextId(), void this.if_("i", this.lazyAssign(e, this.computedMember("i", t.watchId)), this.lazyRecurse(t, e, r, i, a, !0));
			switch (t.type) {
				case Wi.Program:
					o(t.body, function(e, r) {
						h.recurse(e.expression, n, n, function(t) {
							c = t
						}), r !== t.body.length - 1 ? h.current().body.push(c, ";") : h.return_(c)
					});
					break;
				case Wi.Literal:
					f = this.escape(t.value), this.assign(e, f), i(f);
					break;
				case Wi.UnaryExpression:
					this.recurse(t.argument, n, n, function(t) {
						c = t
					}), f = t.operator + "(" + this.ifDefined(c, 0) + ")", this.assign(e, f), i(f);
					break;
				case Wi.BinaryExpression:
					this.recurse(t.left, n, n, function(t) {
						s = t
					}), this.recurse(t.right, n, n, function(t) {
						c = t
					}), f = "+" === t.operator ? this.plus(s, c) : "-" === t.operator ? this.ifDefined(s, 0) + t.operator + this.ifDefined(c, 0) : "(" + s + ")" + t.operator + "(" + c + ")", this.assign(e, f), i(f);
					break;
				case Wi.LogicalExpression:
					e = e || this.nextId(), h.recurse(t.left, e), h.if_("&&" === t.operator ? e : h.not(e), h.lazyRecurse(t.right, e)), i(e);
					break;
				case Wi.ConditionalExpression:
					e = e || this.nextId(), h.recurse(t.test, e), h.if_(e, h.lazyRecurse(t.alternate, e), h.lazyRecurse(t.consequent, e)), i(e);
					break;
				case Wi.Identifier:
					e = e || this.nextId(), r && (r.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", t.name) + "?l:s"), r.computed = !1, r.name = t.name), ze(t.name), h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", t.name)), function() {
						h.if_("inputs" === h.stage || "s", function() {
							a && 1 !== a && h.if_(h.not(h.nonComputedMember("s", t.name)), h.lazyAssign(h.nonComputedMember("s", t.name), "{}")), h.assign(e, h.nonComputedMember("s", t.name))
						})
					}, e && h.lazyAssign(e, h.nonComputedMember("l", t.name))), (h.state.expensiveChecks || un(t.name)) && h.addEnsureSafeObject(e), i(e);
					break;
				case Wi.MemberExpression:
					s = r && (r.context = this.nextId()) || this.nextId(), e = e || this.nextId(), h.recurse(t.object, s, n, function() {
						h.if_(h.notNull(s), function() {
							t.computed ? (c = h.nextId(), h.recurse(t.property, c), h.addEnsureSafeMemberName(c), a && 1 !== a && h.if_(h.not(h.computedMember(s, c)), h.lazyAssign(h.computedMember(s, c), "{}")), f = h.ensureSafeObject(h.computedMember(s, c)), h.assign(e, f), r && (r.computed = !0, r.name = c)) : (ze(t.property.name), a && 1 !== a && h.if_(h.not(h.nonComputedMember(s, t.property.name)), h.lazyAssign(h.nonComputedMember(s, t.property.name), "{}")), f = h.nonComputedMember(s, t.property.name), (h.state.expensiveChecks || un(t.property.name)) && (f = h.ensureSafeObject(f)), h.assign(e, f), r && (r.computed = !1, r.name = t.property.name))
						}, function() {
							h.assign(e, "undefined")
						}), i(e)
					}, !! a);
					break;
				case Wi.CallExpression:
					e = e || this.nextId(), t.filter ? (c = h.filter(t.callee.name), l = [], o(t.arguments, function(t) {
						var e = h.nextId();
						h.recurse(t, e), l.push(e)
					}), f = c + "(" + l.join(",") + ")", h.assign(e, f), i(e)) : (c = h.nextId(), s = {}, l = [], h.recurse(t.callee, c, s, function() {
						h.if_(h.notNull(c), function() {
							h.addEnsureSafeFunction(c), o(t.arguments, function(t) {
								h.recurse(t, h.nextId(), n, function(t) {
									l.push(h.ensureSafeObject(t))
								})
							}), s.name ? (h.state.expensiveChecks || h.addEnsureSafeObject(s.context), f = h.member(s.context, s.name, s.computed) + "(" + l.join(",") + ")") : f = c + "(" + l.join(",") + ")", f = h.ensureSafeObject(f), h.assign(e, f)
						}, function() {
							h.assign(e, "undefined")
						}), i(e)
					}));
					break;
				case Wi.AssignmentExpression:
					if (c = this.nextId(), s = {}, !Qe(t.left)) throw Vi("lval", "Trying to assing a value to a non l-value");
					this.recurse(t.left, n, s, function() {
						h.if_(h.notNull(s.context), function() {
							h.recurse(t.right, c), h.addEnsureSafeObject(h.member(s.context, s.name, s.computed)), f = h.member(s.context, s.name, s.computed) + t.operator + c, h.assign(e, f), i(e || f)
						})
					}, 1);
					break;
				case Wi.ArrayExpression:
					l = [], o(t.elements, function(t) {
						h.recurse(t, h.nextId(), n, function(t) {
							l.push(t)
						})
					}), f = "[" + l.join(",") + "]", this.assign(e, f), i(f);
					break;
				case Wi.ObjectExpression:
					l = [], o(t.properties, function(t) {
						h.recurse(t.value, h.nextId(), n, function(e) {
							l.push(h.escape(t.key.type === Wi.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
						})
					}), f = "{" + l.join(",") + "}", this.assign(e, f), i(f);
					break;
				case Wi.ThisExpression:
					this.assign(e, "s"), i("s");
					break;
				case Wi.NGValueParameter:
					this.assign(e, "v"), i("v")
			}
		},
		getHasOwnProperty: function(t, e) {
			var n = t + "." + e,
				r = this.current().own;
			return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, t + "&&(" + this.escape(e) + " in " + t + ")")), r[n]
		},
		assign: function(t, e) {
			if (t) return this.current().body.push(t, "=", e, ";"), t
		},
		filter: function(t) {
			return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), this.state.filters[t]
		},
		ifDefined: function(t, e) {
			return "ifDefined(" + t + "," + this.escape(e) + ")"
		},
		plus: function(t, e) {
			return "plus(" + t + "," + e + ")"
		},
		return_: function(t) {
			this.current().body.push("return ", t, ";")
		},
		if_: function(t, e, n) {
			if (!0 === t) e();
			else {
				var r = this.current().body;
				r.push("if(", t, "){"), e(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
			}
		},
		not: function(t) {
			return "!(" + t + ")"
		},
		notNull: function(t) {
			return t + "!=null"
		},
		nonComputedMember: function(t, e) {
			return t + "." + e
		},
		computedMember: function(t, e) {
			return t + "[" + e + "]"
		},
		member: function(t, e, n) {
			return n ? this.computedMember(t, e) : this.nonComputedMember(t, e)
		},
		addEnsureSafeObject: function(t) {
			this.current().body.push(this.ensureSafeObject(t), ";")
		},
		addEnsureSafeMemberName: function(t) {
			this.current().body.push(this.ensureSafeMemberName(t), ";")
		},
		addEnsureSafeFunction: function(t) {
			this.current().body.push(this.ensureSafeFunction(t), ";")
		},
		ensureSafeObject: function(t) {
			return "ensureSafeObject(" + t + ",text)"
		},
		ensureSafeMemberName: function(t) {
			return "ensureSafeMemberName(" + t + ",text)"
		},
		ensureSafeFunction: function(t) {
			return "ensureSafeFunction(" + t + ",text)"
		},
		lazyRecurse: function(t, e, n, r, i, o) {
			var a = this;
			return function() {
				a.recurse(t, e, n, r, i, o)
			}
		},
		lazyAssign: function(t, e) {
			var n = this;
			return function() {
				n.assign(t, e)
			}
		},
		stringEscapeRegex: /[^ a-zA-Z0-9]/g,
		stringEscapeFn: function(t) {
			return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
		},
		escape: function(t) {
			if (_(t)) return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
			if (C(t)) return t.toString();
			if (!0 === t) return "true";
			if (!1 === t) return "false";
			if (null === t) return "null";
			if (void 0 === t) return "undefined";
			throw Vi("esc", "IMPOSSIBLE")
		},
		nextId: function(t, e) {
			var n = "v" + this.state.nextId++;
			return t || this.current().vars.push(n + (e ? "=" + e : "")), n
		},
		current: function() {
			return this.state[this.state.computing]
		}
	}, on.prototype = {
		compile: function(t, e) {
			var n = this,
				r = this.astBuilder.ast(t);
			this.expression = t, this.expensiveChecks = e, Ze(r, n.$filter);
			var i, a;
			(i = tn(r)) && (a = this.recurse(i));
			var u, s = Xe(r.body);
			s && (u = [], o(s, function(t, e) {
				var r = n.recurse(t);
				t.input = r, u.push(r), t.watchId = e
			}));
			var c = [];
			o(r.body, function(t) {
				c.push(n.recurse(t.expression))
			});
			var l = 0 === r.body.length ? function() {} : 1 === r.body.length ? c[0] : function(t, e) {
					var n;
					return o(c, function(r) {
						n = r(t, e)
					}), n
				};
			return a && (l.assign = function(t, e, n) {
				return a(t, n, e)
			}), u && (l.inputs = u), l.literal = en(r), l.constant = nn(r), l
		},
		recurse: function(t, e, r) {
			var i, a, u, s = this;
			if (t.input) return this.inputs(t.input, t.watchId);
			switch (t.type) {
				case Wi.Literal:
					return this.value(t.value, e);
				case Wi.UnaryExpression:
					return a = this.recurse(t.argument), this["unary" + t.operator](a, e);
				case Wi.BinaryExpression:
				case Wi.LogicalExpression:
					return i = this.recurse(t.left), a = this.recurse(t.right), this["binary" + t.operator](i, a, e);
				case Wi.ConditionalExpression:
					return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), e);
				case Wi.Identifier:
					return ze(t.name, s.expression), s.identifier(t.name, s.expensiveChecks || un(t.name), e, r, s.expression);
				case Wi.MemberExpression:
					return i = this.recurse(t.object, !1, !! r), t.computed || (ze(t.property.name, s.expression), a = t.property.name), t.computed && (a = this.recurse(t.property)), t.computed ? this.computedMember(i, a, e, r, s.expression) : this.nonComputedMember(i, a, s.expensiveChecks, e, r, s.expression);
				case Wi.CallExpression:
					return u = [], o(t.arguments, function(t) {
						u.push(s.recurse(t))
					}), t.filter && (a = this.$filter(t.callee.name)), t.filter || (a = this.recurse(t.callee, !0)), t.filter ? function(t, r, i, o) {
						for (var s = [], c = 0; c < u.length; ++c) s.push(u[c](t, r, i, o));
						var l = a.apply(n, s, o);
						return e ? {
							context: n,
							name: n,
							value: l
						} : l
					} : function(t, n, r, i) {
						var o, c = a(t, n, r, i);
						if (null != c.value) {
							We(c.context, s.expression), Ge(c.value, s.expression);
							for (var l = [], f = 0; f < u.length; ++f) l.push(We(u[f](t, n, r, i), s.expression));
							o = We(c.value.apply(c.context, l), s.expression)
						}
						return e ? {
							value: o
						} : o
					};
				case Wi.AssignmentExpression:
					return i = this.recurse(t.left, !0, 1), a = this.recurse(t.right),
					function(t, n, r, o) {
						var u = i(t, n, r, o),
							c = a(t, n, r, o);
						return We(u.value, s.expression), u.context[u.name] = c, e ? {
							value: c
						} : c
					};
				case Wi.ArrayExpression:
					return u = [], o(t.elements, function(t) {
						u.push(s.recurse(t))
					}),
					function(t, n, r, i) {
						for (var o = [], a = 0; a < u.length; ++a) o.push(u[a](t, n, r, i));
						return e ? {
							value: o
						} : o
					};
				case Wi.ObjectExpression:
					return u = [], o(t.properties, function(t) {
						u.push({
							key: t.key.type === Wi.Identifier ? t.key.name : "" + t.key.value,
							value: s.recurse(t.value)
						})
					}),
					function(t, n, r, i) {
						for (var o = {}, a = 0; a < u.length; ++a) o[u[a].key] = u[a].value(t, n, r, i);
						return e ? {
							value: o
						} : o
					};
				case Wi.ThisExpression:
					return function(t) {
						return e ? {
							value: t
						} : t
					};
				case Wi.NGValueParameter:
					return function(t, n, r, i) {
						return e ? {
							value: r
						} : r
					}
			}
		},
		"unary+": function(t, e) {
			return function(n, r, i, o) {
				var a = t(n, r, i, o);
				return a = b(a) ? +a : 0, e ? {
					value: a
				} : a
			}
		},
		"unary-": function(t, e) {
			return function(n, r, i, o) {
				var a = t(n, r, i, o);
				return a = b(a) ? -a : 0, e ? {
					value: a
				} : a
			}
		},
		"unary!": function(t, e) {
			return function(n, r, i, o) {
				var a = !t(n, r, i, o);
				return e ? {
					value: a
				} : a
			}
		},
		"binary+": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a),
					s = e(r, i, o, a),
					c = Ye(u, s);
				return n ? {
					value: c
				} : c
			}
		},
		"binary-": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a),
					s = e(r, i, o, a),
					c = (b(u) ? u : 0) - (b(s) ? s : 0);
				return n ? {
					value: c
				} : c
			}
		},
		"binary*": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) * e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary/": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) / e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary%": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) % e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary===": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) === e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary!==": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) !== e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary==": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) == e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary!=": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) != e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary<": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) < e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary>": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) > e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary<=": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) <= e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary>=": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) >= e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary&&": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) && e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"binary||": function(t, e, n) {
			return function(r, i, o, a) {
				var u = t(r, i, o, a) || e(r, i, o, a);
				return n ? {
					value: u
				} : u
			}
		},
		"ternary?:": function(t, e, n, r) {
			return function(i, o, a, u) {
				var s = t(i, o, a, u) ? e(i, o, a, u) : n(i, o, a, u);
				return r ? {
					value: s
				} : s
			}
		},
		value: function(t, e) {
			return function() {
				return e ? {
					context: n,
					name: n,
					value: t
				} : t
			}
		},
		identifier: function(t, e, r, i, o) {
			return function(a, u, s, c) {
				var l = u && t in u ? u : a;
				i && 1 !== i && l && !l[t] && (l[t] = {});
				var f = l ? l[t] : n;
				return e && We(f, o), r ? {
					context: l,
					name: t,
					value: f
				} : f
			}
		},
		computedMember: function(t, e, n, r, i) {
			return function(o, a, u, s) {
				var c, l, f = t(o, a, u, s);
				return null != f && (c = e(o, a, u, s), ze(c, i), r && 1 !== r && f && !f[c] && (f[c] = {}), l = f[c], We(l, i)), n ? {
					context: f,
					name: c,
					value: l
				} : l
			}
		},
		nonComputedMember: function(t, e, r, i, o, a) {
			return function(u, s, c, l) {
				var f = t(u, s, c, l);
				o && 1 !== o && f && !f[e] && (f[e] = {});
				var h = null != f ? f[e] : n;
				return (r || un(e)) && We(h, a), i ? {
					context: f,
					name: e,
					value: h
				} : h
			}
		},
		inputs: function(t, e) {
			return function(n, r, i, o) {
				return o ? o[e] : t(n, r, i)
			}
		}
	};
	var Gi = function(t, e, n) {
		this.lexer = t, this.$filter = e, this.options = n, this.ast = new Wi(this.lexer), this.astCompiler = n.csp ? new on(this.ast, e) : new rn(this.ast, e)
	};
	Gi.prototype = {
		constructor: Gi,
		parse: function(t) {
			return this.astCompiler.compile(t, this.options.expensiveChecks)
		}
	};
	var Ji = (vt(), vt(), Object.prototype.valueOf),
		Yi = r("$sce"),
		Ki = {
			HTML: "html",
			CSS: "css",
			URL: "url",
			RESOURCE_URL: "resourceUrl",
			JS: "js"
		}, Si = r("$compile"),
		Zi = e.createElement("a"),
		Xi = Cn(t.location.href);
	An.$inject = ["$document"], On.$inject = ["$provide"], Fn.$inject = ["$locale"], Dn.$inject = ["$locale"];
	var Qi = ".",
		to = {
			yyyy: Nn("FullYear", 4),
			yy: Nn("FullYear", 2, 0, !0),
			y: Nn("FullYear", 1),
			MMMM: Vn("Month"),
			MMM: Vn("Month", !0),
			MM: Nn("Month", 2, 1),
			M: Nn("Month", 1, 1),
			dd: Nn("Date", 2),
			d: Nn("Date", 1),
			HH: Nn("Hours", 2),
			H: Nn("Hours", 1),
			hh: Nn("Hours", 2, -12),
			h: Nn("Hours", 1, -12),
			mm: Nn("Minutes", 2),
			m: Nn("Minutes", 1),
			ss: Nn("Seconds", 2),
			s: Nn("Seconds", 1),
			sss: Nn("Milliseconds", 3),
			EEEE: Vn("Day"),
			EEE: Vn("Day", !0),
			a: Hn,
			Z: Un,
			ww: Bn(2),
			w: Bn(1),
			G: zn,
			GG: zn,
			GGG: zn,
			GGGG: Wn
		}, eo = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
		no = /^\-?\d+$/;
	Gn.$inject = ["$locale"];
	var ro = m(gr),
		io = m(br);
	Kn.$inject = ["$parse"];
	var oo = m({
		restrict: "E",
		compile: function(t, e) {
			if (!e.href && !e.xlinkHref) return function(t, e) {
				if ("a" === e[0].nodeName.toLowerCase()) {
					var n = "[object SVGAnimatedString]" === jr.call(e.prop("href")) ? "xlink:href" : "href";
					e.on("click", function(t) {
						e.attr(n) || t.preventDefault()
					})
				}
			}
		}
	}),
		ao = {};
	o(fi, function(t, e) {
		function n(t, n, i) {
			t.$watch(i[r], function(t) {
				i.$set(e, !! t)
			})
		}
		if ("multiple" != t) {
			var r = ue("ng-" + e),
				i = n;
			"checked" === t && (i = function(t, e, i) {
				i.ngModel !== i[r] && n(t, e, i)
			}), ao[r] = function() {
				return {
					restrict: "A",
					priority: 100,
					link: i
				}
			}
		}
	}), o(pi, function(t, e) {
		ao[e] = function() {
			return {
				priority: 100,
				link: function(t, n, r) {
					if ("ngPattern" === e && "/" == r.ngPattern.charAt(0)) {
						var i = r.ngPattern.match($r);
						if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
					}
					t.$watch(r[e], function(t) {
						r.$set(e, t)
					})
				}
			}
		}
	}), o(["src", "srcset", "href"], function(t) {
		var e = ue("ng-" + t);
		ao[e] = function() {
			return {
				priority: 99,
				link: function(n, r, i) {
					var o = t,
						a = t;
					"href" === t && "[object SVGAnimatedString]" === jr.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(e, function(e) {
						if (!e) return void("href" === t && i.$set(a, null));
						i.$set(a, e), _r && o && r.prop(o, i[a])
					})
				}
			}
		}
	});
	var uo = {
		$addControl: v,
		$$renameControl: Xn,
		$removeControl: v,
		$setValidity: v,
		$setDirty: v,
		$setPristine: v,
		$setSubmitted: v
	}, so = "ng-submitted";
	Qn.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
	var co = function(t) {
		return ["$timeout", function(e) {
			return {
				name: "form",
				restrict: t ? "EAC" : "E",
				controller: Qn,
				compile: function(r, i) {
					r.addClass(Ho).addClass(Lo);
					var o = i.name ? "name" : !(!t || !i.ngForm) && "ngForm";
					return {
						pre: function(t, r, i, a) {
							if (!("action" in i)) {
								var u = function(e) {
									t.$apply(function() {
										a.$commitViewValue(), a.$setSubmitted()
									}), e.preventDefault()
								};
								Qr(r[0], "submit", u), r.on("$destroy", function() {
									e(function() {
										ti(r[0], "submit", u)
									}, 0, !1)
								})
							}
							var s = a.$$parentForm;
							o && (an(t, a.$name, a, a.$name), i.$observe(o, function(e) {
								a.$name !== e && (an(t, a.$name, n, a.$name), s.$$renameControl(a, e), an(t, a.$name, a, a.$name))
							})), r.on("$destroy", function() {
								s.$removeControl(a), o && an(t, i[o], n, a.$name), f(a, uo)
							})
						}
					}
				}
			}
		}]
	}, lo = co(),
		fo = co(!0),
		ho = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
		po = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
		vo = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
		$o = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
		mo = /^(\d{4})-(\d{2})-(\d{2})$/,
		go = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
		yo = /^(\d{4})-W(\d\d)$/,
		bo = /^(\d{4})-(\d\d)$/,
		wo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
		xo = {
			text: er,
			date: or("date", mo, ir(mo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
			"datetime-local": or("datetimelocal", go, ir(go, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
			time: or("time", wo, ir(wo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
			week: or("week", yo, rr, "yyyy-Www"),
			month: or("month", bo, ir(bo, ["yyyy", "MM"]), "yyyy-MM"),
			number: ur,
			url: sr,
			email: cr,
			radio: lr,
			checkbox: hr,
			hidden: v,
			button: v,
			submit: v,
			reset: v,
			file: v
		}, _o = ["$browser", "$sniffer", "$filter", "$parse", function(t, e, n, r) {
			return {
				restrict: "E",
				require: ["?ngModel"],
				link: {
					pre: function(i, o, a, u) {
						u[0] && (xo[gr(a.type)] || xo.text)(i, o, a, u[0], e, t, n, r)
					}
				}
			}
		}],
		Co = /^(true|false|\d+)$/,
		So = function() {
			return {
				restrict: "A",
				priority: 100,
				compile: function(t, e) {
					return Co.test(e.ngValue) ? function(t, e, n) {
						n.$set("value", t.$eval(n.ngValue))
					} : function(t, e, n) {
						t.$watch(n.ngValue, function(t) {
							n.$set("value", t)
						})
					}
				}
			}
		}, Eo = ["$compile", function(t) {
			return {
				restrict: "AC",
				compile: function(e) {
					return t.$$addBindingClass(e),
					function(e, r, i) {
						t.$$addBindingInfo(r, i.ngBind), r = r[0], e.$watch(i.ngBind, function(t) {
							r.textContent = t === n ? "" : t
						})
					}
				}
			}
		}],
		Ao = ["$interpolate", "$compile", function(t, e) {
			return {
				compile: function(r) {
					return e.$$addBindingClass(r),
					function(r, i, o) {
						var a = t(i.attr(o.$attr.ngBindTemplate));
						e.$$addBindingInfo(i, a.expressions), i = i[0], o.$observe("ngBindTemplate", function(t) {
							i.textContent = t === n ? "" : t
						})
					}
				}
			}
		}],
		ko = ["$sce", "$parse", "$compile", function(t, e, n) {
			return {
				restrict: "A",
				compile: function(r, i) {
					var o = e(i.ngBindHtml),
						a = e(i.ngBindHtml, function(t) {
							return (t || "").toString()
						});
					return n.$$addBindingClass(r),
					function(e, r, i) {
						n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function() {
							r.html(t.getTrustedHtml(o(e)) || "")
						})
					}
				}
			}
		}],
		Oo = m({
			restrict: "A",
			require: "ngModel",
			link: function(t, e, n, r) {
				r.$viewChangeListeners.push(function() {
					t.$eval(n.ngChange)
				})
			}
		}),
		jo = pr("", !0),
		To = pr("Odd", 0),
		Io = pr("Even", 1),
		Mo = Zn({
			compile: function(t, e) {
				e.$set("ngCloak", n), t.removeClass("ng-cloak")
			}
		}),
		Fo = [function() {
			return {
				restrict: "A",
				scope: !0,
				controller: "@",
				priority: 500
			}
		}],
		Do = {}, Ro = {
			blur: !0,
			focus: !0
		};
	o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(t) {
		var e = ue("ng-" + t);
		Do[e] = ["$parse", "$rootScope", function(n, r) {
			return {
				restrict: "A",
				compile: function(i, o) {
					var a = n(o[e], null, !0);
					return function(e, n) {
						n.on(t, function(n) {
							var i = function() {
								a(e, {
									$event: n
								})
							};
							Ro[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i)
						})
					}
				}
			}
		}]
	});
	var Po = ["$animate", function(t) {
		return {
			multiElement: !0,
			transclude: "element",
			priority: 600,
			terminal: !0,
			restrict: "A",
			$$tlb: !0,
			link: function(n, r, i, o, a) {
				var u, s, c;
				n.$watch(i.ngIf, function(n) {
					n ? s || a(function(n, o) {
						s = o, n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "), u = {
							clone: n
						}, t.enter(n, r.parent(), r)
					}) : (c && (c.remove(), c = null), s && (s.$destroy(), s = null), u && (c = dt(u.clone), t.leave(c).then(function() {
						c = null
					}), u = null))
				})
			}
		}
	}],
		No = ["$templateRequest", "$anchorScroll", "$animate", function(t, e, n) {
			return {
				restrict: "ECA",
				priority: 400,
				terminal: !0,
				transclude: "element",
				controller: Mr.noop,
				compile: function(r, i) {
					var o = i.ngInclude || i.src,
						a = i.onload || "",
						u = i.autoscroll;
					return function(r, i, s, c, l) {
						var f, h, p, d = 0,
							v = function() {
								h && (h.remove(), h = null), f && (f.$destroy(), f = null), p && (n.leave(p).then(function() {
									h = null
								}), h = p, p = null)
							};
						r.$watch(o, function(o) {
							var s = function() {
								!b(u) || u && !r.$eval(u) || e()
							}, h = ++d;
							o ? (t(o, !0).then(function(t) {
								if (h === d) {
									var e = r.$new();
									c.template = t;
									var u = l(e, function(t) {
										v(), n.enter(t, null, i).then(s)
									});
									f = e, p = u, f.$emit("$includeContentLoaded", o), r.$eval(a)
								}
							}, function() {
								h === d && (v(), r.$emit("$includeContentError", o))
							}), r.$emit("$includeContentRequested", o)) : (v(), c.template = null)
						})
					}
				}
			}
		}],
		Vo = ["$compile", function(t) {
			return {
				restrict: "ECA",
				priority: -400,
				require: "ngInclude",
				link: function(n, r, i, o) {
					if (/SVG/.test(r[0].toString())) return r.empty(), void t(Ct(o.template, e).childNodes)(n, function(t) {
						r.append(t)
					}, {
						futureParentElement: r
					});
					r.html(o.template), t(r.contents())(n)
				}
			}
		}],
		Uo = Zn({
			priority: 450,
			compile: function() {
				return {
					pre: function(t, e, n) {
						t.$eval(n.ngInit)
					}
				}
			}
		}),
		qo = function() {
			return {
				restrict: "A",
				priority: 100,
				require: "ngModel",
				link: function(t, e, r, i) {
					var a = e.attr(r.$attr.ngList) || ", ",
						u = "false" !== r.ngTrim,
						s = u ? Nr(a) : a,
						c = function(t) {
							if (!y(t)) {
								var e = [];
								return t && o(t.split(s), function(t) {
									t && e.push(u ? Nr(t) : t)
								}), e
							}
						};
					i.$parsers.push(c), i.$formatters.push(function(t) {
						return Rr(t) ? t.join(a) : n
					}), i.$isEmpty = function(t) {
						return !t || !t.length
					}
				}
			}
		}, Lo = "ng-valid",
		Bo = "ng-invalid",
		Ho = "ng-pristine",
		zo = "ng-dirty",
		Wo = "ng-pending",
		Go = new r("ngModel"),
		Jo = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(t, e, r, i, a, u, s, c, l, f) {
			this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(r.name || "", !1)(t);
			var h, p = a(r.ngModel),
				d = p.assign,
				$ = p,
				m = d,
				g = null,
				w = this;
			this.$$setOptions = function(t) {
				if (w.$options = t, t && t.getterSetter) {
					var e = a(r.ngModel + "()"),
						n = a(r.ngModel + "($$$p)");
					$ = function(t) {
						var n = p(t);
						return E(n) && (n = e(t)), n
					}, m = function(t, e) {
						E(p(t)) ? n(t, {
							$$$p: w.$modelValue
						}) : d(t, w.$modelValue)
					}
				} else if (!p.assign) throw Go("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, X(i))
			}, this.$render = v, this.$isEmpty = function(t) {
				return y(t) || "" === t || null === t || t !== t
			};
			var x = i.inheritedData("$formController") || uo,
				_ = 0;
			dr({
				ctrl: this,
				$element: i,
				set: function(t, e) {
					t[e] = !0
				},
				unset: function(t, e) {
					delete t[e]
				},
				parentForm: x,
				$animate: u
			}), this.$setPristine = function() {
				w.$dirty = !1, w.$pristine = !0, u.removeClass(i, zo), u.addClass(i, Ho)
			}, this.$setDirty = function() {
				w.$dirty = !0, w.$pristine = !1, u.removeClass(i, Ho), u.addClass(i, zo), x.$setDirty()
			}, this.$setUntouched = function() {
				w.$touched = !1, w.$untouched = !0, u.setClass(i, "ng-untouched", "ng-touched")
			}, this.$setTouched = function() {
				w.$touched = !0, w.$untouched = !1, u.setClass(i, "ng-touched", "ng-untouched")
			}, this.$rollbackViewValue = function() {
				s.cancel(g), w.$viewValue = w.$$lastCommittedViewValue, w.$render()
			}, this.$validate = function() {
				if (!C(w.$modelValue) || !isNaN(w.$modelValue)) {
					var t = w.$$lastCommittedViewValue,
						e = w.$$rawModelValue,
						r = w.$valid,
						i = w.$modelValue,
						o = w.$options && w.$options.allowInvalid;
					w.$$runValidators(e, t, function(t) {
						o || r === t || (w.$modelValue = t ? e : n, w.$modelValue !== i && w.$$writeModelToScope())
					})
				}
			}, this.$$runValidators = function(t, e, r) {
				function i(t, e) {
					u === _ && w.$setValidity(t, e)
				}
				function a(t) {
					u === _ && r(t)
				}
				_++;
				var u = _;
				return function() {
					var t = w.$$parserName || "parse";
					return h !== n ? (h || (o(w.$validators, function(t, e) {
						i(e, null)
					}), o(w.$asyncValidators, function(t, e) {
						i(e, null)
					})), i(t, h), h) : (i(t, null), !0)
				}() && function() {
					var n = !0;
					return o(w.$validators, function(r, o) {
						var a = r(t, e);
						n = n && a, i(o, a)
					}), !! n || (o(w.$asyncValidators, function(t, e) {
						i(e, null)
					}), !1)
				}() ? void
				function() {
					var r = [],
						u = !0;
					o(w.$asyncValidators, function(o, a) {
						var s = o(t, e);
						if (!F(s)) throw Go("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
						i(a, n), r.push(s.then(function() {
							i(a, !0)
						}, function(t) {
							u = !1, i(a, !1)
						}))
					}), r.length ? l.all(r).then(function() {
						a(u)
					}, v) : a(!0)
				}() : void a(!1)
			}, this.$commitViewValue = function() {
				var t = w.$viewValue;
				s.cancel(g), (w.$$lastCommittedViewValue !== t || "" === t && w.$$hasNativeValidators) && (w.$$lastCommittedViewValue = t, w.$pristine && this.$setDirty(), this.$$parseAndValidate())
			}, this.$$parseAndValidate = function() {
				function e() {
					w.$modelValue !== a && w.$$writeModelToScope()
				}
				var r = w.$$lastCommittedViewValue,
					i = r;
				if (h = !y(i) || n) for (var o = 0; o < w.$parsers.length; o++) if (i = w.$parsers[o](i), y(i)) {
					h = !1;
					break
				}
				C(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = $(t));
				var a = w.$modelValue,
					u = w.$options && w.$options.allowInvalid;
				w.$$rawModelValue = i, u && (w.$modelValue = i, e()), w.$$runValidators(i, w.$$lastCommittedViewValue, function(t) {
					u || (w.$modelValue = t ? i : n, e())
				})
			}, this.$$writeModelToScope = function() {
				m(t, w.$modelValue), o(w.$viewChangeListeners, function(t) {
					try {
						t()
					} catch (t) {
						e(t)
					}
				})
			}, this.$setViewValue = function(t, e) {
				w.$viewValue = t, w.$options && !w.$options.updateOnDefault || w.$$debounceViewValueCommit(e)
			}, this.$$debounceViewValueCommit = function(e) {
				var n, r = 0,
					i = w.$options;
				i && b(i.debounce) && (n = i.debounce, C(n) ? r = n : C(n[e]) ? r = n[e] : C(n.
				default) && (r = n.
				default)), s.cancel(g), r ? g = s(function() {
					w.$commitViewValue()
				}, r) : c.$$phase ? w.$commitViewValue() : t.$apply(function() {
					w.$commitViewValue()
				})
			}, t.$watch(function() {
				var e = $(t);
				if (e !== w.$modelValue && (w.$modelValue === w.$modelValue || e === e)) {
					w.$modelValue = w.$$rawModelValue = e, h = n;
					for (var r = w.$formatters, i = r.length, o = e; i--;) o = r[i](o);
					w.$viewValue !== o && (w.$viewValue = w.$$lastCommittedViewValue = o, w.$render(), w.$$runValidators(e, o, v))
				}
				return e
			})
		}],
		Yo = ["$rootScope", function(t) {
			return {
				restrict: "A",
				require: ["ngModel", "^?form", "^?ngModelOptions"],
				controller: Jo,
				priority: 1,
				compile: function(e) {
					return e.addClass(Ho).addClass("ng-untouched").addClass(Lo), {
						pre: function(t, e, n, r) {
							var i = r[0],
								o = r[1] || uo;
							i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function(t) {
								i.$name !== t && o.$$renameControl(i, t)
							}), t.$on("$destroy", function() {
								o.$removeControl(i)
							})
						},
						post: function(e, n, r, i) {
							var o = i[0];
							o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(t) {
								o.$$debounceViewValueCommit(t && t.type)
							}), n.on("blur", function(n) {
								o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched))
							})
						}
					}
				}
			}
		}],
		Ko = /(\s+|^)default(\s+|$)/,
		Zo = function() {
			return {
				restrict: "A",
				controller: ["$scope", "$attrs", function(t, e) {
					var r = this;
					this.$options = U(t.$eval(e.ngModelOptions)), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Nr(this.$options.updateOn.replace(Ko, function() {
						return r.$options.updateOnDefault = !0, " "
					}))) : this.$options.updateOnDefault = !0
				}]
			}
		}, Xo = Zn({
			terminal: !0,
			priority: 1e3
		}),
		Qo = r("ngOptions"),
		ta = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
		ea = ["$compile", "$parse", function(t, n) {
			function r(t, e, r) {
				function o(t, e, n, r, i) {
					this.selectValue = t, this.viewValue = e, this.label = n, this.group = r, this.disabled = i
				}
				function a(t) {
					var e;
					if (!c && i(t)) e = t;
					else {
						e = [];
						for (var n in t) t.hasOwnProperty(n) && "$" !== n.charAt(0) && e.push(n)
					}
					return e
				}
				var u = t.match(ta);
				if (!u) throw Qo("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", t, X(e));
				var s = u[5] || u[7],
					c = u[6],
					l = / as /.test(u[0]) && u[1],
					f = u[9],
					h = n(u[2] ? u[1] : s),
					p = l && n(l),
					d = p || h,
					v = f && n(f),
					$ = f ? function(t, e) {
						return v(r, e)
					} : function(t) {
						return Wt(t)
					}, m = function(t, e) {
						return $(t, _(t, e))
					}, g = n(u[2] || u[1]),
					y = n(u[3] || ""),
					b = n(u[4] || ""),
					w = n(u[8]),
					x = {}, _ = c ? function(t, e) {
						return x[c] = e, x[s] = t, x
					} : function(t) {
						return x[s] = t, x
					};
				return {
					trackBy: f,
					getTrackByValue: m,
					getWatchables: n(w, function(t) {
						var e = [];
						t = t || [];
						for (var n = a(t), i = n.length, o = 0; o < i; o++) {
							var s = t === n ? o : n[o],
								c = (t[s], _(t[s], s)),
								l = $(t[s], c);
							if (e.push(l), u[2] || u[1]) {
								var f = g(r, c);
								e.push(f)
							}
							if (u[4]) {
								var h = b(r, c);
								e.push(h)
							}
						}
						return e
					}),
					getOptions: function() {
						for (var t = [], e = {}, n = w(r) || [], i = a(n), u = i.length, s = 0; s < u; s++) {
							var c = n === i ? s : i[s],
								l = n[c],
								h = _(l, c),
								p = d(r, h),
								v = $(p, h),
								x = g(r, h),
								C = y(r, h),
								S = b(r, h),
								E = new o(v, p, x, C, S);
							t.push(E), e[v] = E
						}
						return {
							items: t,
							selectValueMap: e,
							getOptionFromViewValue: function(t) {
								return e[m(t)]
							},
							getViewValueFromOption: function(t) {
								return f ? Mr.copy(t.viewValue) : t.viewValue
							}
						}
					}
				}
			}
			var a = e.createElement("option"),
				u = e.createElement("optgroup");
			return {
				restrict: "A",
				terminal: !0,
				require: ["select", "?ngModel"],
				link: function(e, n, i, s) {
					function c(t, e) {
						t.element = e, e.disabled = t.disabled, t.value !== e.value && (e.value = t.selectValue), t.label !== e.label && (e.label = t.label, e.textContent = t.label)
					}
					function l(t, e, n, r) {
						var i;
						return e && gr(e.nodeName) === n ? i = e : (i = r.cloneNode(!1), e ? t.insertBefore(i, e) : t.appendChild(i)), i
					}
					function f(t) {
						for (var e; t;) e = t.nextSibling, Ut(t), t = e
					}
					function h(t) {
						var e = v && v[0],
							n = x && x[0];
						if (e || n) for (; t && (t === e || t === n);) t = t.nextSibling;
						return t
					}
					function p() {
						var t = _ && $.readValue();
						_ = C.getOptions();
						var e = {}, r = n[0].firstChild;
						if (w && n.prepend(v), r = h(r), _.items.forEach(function(t) {
							var i, o, s;
							t.group ? (i = e[t.group], i || (o = l(n[0], r, "optgroup", u), r = o.nextSibling, o.label = t.group, i = e[t.group] = {
								groupElement: o,
								currentOptionElement: o.firstChild
							}), s = l(i.groupElement, i.currentOptionElement, "option", a), c(t, s), i.currentOptionElement = s.nextSibling) : (s = l(n[0], r, "option", a), c(t, s), r = s.nextSibling)
						}), Object.keys(e).forEach(function(t) {
							f(e[t].currentOptionElement)
						}), f(r), d.$render(), !d.$isEmpty(t)) {
							var i = $.readValue();
							(C.trackBy ? L(t, i) : t === i) || (d.$setViewValue(i), d.$render())
						}
					}
					var d = s[1];
					if (d) {
						for (var v, $ = s[0], m = i.multiple, g = 0, y = n.children(), b = y.length; g < b; g++) if ("" === y[g].value) {
							v = y.eq(g);
							break
						}
						var w = !! v,
							x = Cr(a.cloneNode(!1));
						x.val("?");
						var _, C = r(i.ngOptions, n, e),
							S = function() {
								w || n.prepend(v), n.val(""), v.prop("selected", !0), v.attr("selected", !0)
							}, E = function() {
								w || v.remove()
							}, A = function() {
								n.prepend(x), n.val("?"), x.prop("selected", !0), x.attr("selected", !0)
							}, k = function() {
								x.remove()
							};
						m ? (d.$isEmpty = function(t) {
							return !t || 0 === t.length
						}, $.writeValue = function(t) {
							_.items.forEach(function(t) {
								t.element.selected = !1
							}), t && t.forEach(function(t) {
								var e = _.getOptionFromViewValue(t);
								e && !e.disabled && (e.element.selected = !0)
							})
						}, $.readValue = function() {
							var t = n.val() || [],
								e = [];
							return o(t, function(t) {
								var n = _.selectValueMap[t];
								n.disabled || e.push(_.getViewValueFromOption(n))
							}), e
						}, C.trackBy && e.$watchCollection(function() {
							if (Rr(d.$viewValue)) return d.$viewValue.map(function(t) {
								return C.getTrackByValue(t)
							})
						}, function() {
							d.$render()
						})) : ($.writeValue = function(t) {
							var e = _.getOptionFromViewValue(t);
							e && !e.disabled ? n[0].value !== e.selectValue && (k(), E(), n[0].value = e.selectValue, e.element.selected = !0, e.element.setAttribute("selected", "selected")) : null === t || w ? (k(), S()) : (E(), A())
						}, $.readValue = function() {
							var t = _.selectValueMap[n.val()];
							return t && !t.disabled ? (E(), k(), _.getViewValueFromOption(t)) : null
						}, C.trackBy && e.$watch(function() {
							return C.getTrackByValue(d.$viewValue)
						}, function() {
							d.$render()
						})), w ? (v.remove(), t(v)(e), v.removeClass("ng-scope")) : v = Cr(a.cloneNode(!1)), p(), e.$watchCollection(C.getWatchables, p)
					}
				}
			}
		}],
		na = ["$locale", "$interpolate", "$log", function(t, e, n) {
			var r = /{}/g,
				i = /^when(Minus)?(.+)$/;
			return {
				link: function(a, u, s) {
					function c(t) {
						u.text(t || "")
					}
					var l, f = s.count,
						h = s.$attr.when && u.attr(s.$attr.when),
						p = s.offset || 0,
						d = a.$eval(h) || {}, $ = {}, m = e.startSymbol(),
						g = e.endSymbol(),
						b = m + f + "-" + p + g,
						w = Mr.noop;
					o(s, function(t, e) {
						var n = i.exec(e);
						if (n) {
							var r = (n[1] ? "-" : "") + gr(n[2]);
							d[r] = u.attr(s.$attr[e])
						}
					}), o(d, function(t, n) {
						$[n] = e(t.replace(r, b))
					}), a.$watch(f, function(e) {
						var r = parseFloat(e),
							i = isNaN(r);
						if (i || r in d || (r = t.pluralCat(r - p)), r !== l && !(i && C(l) && isNaN(l))) {
							w();
							var o = $[r];
							y(o) ? (null != e && n.debug("ngPluralize: no rule defined for '" + r + "' in " + h), w = v, c()) : w = a.$watch(o, c), l = r
						}
					})
				}
			}
		}],
		ra = ["$parse", "$animate", function(t, a) {
			var u = r("ngRepeat"),
				s = function(t, e, n, r, i, o, a) {
					t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 == (1 & e))
				}, c = function(t) {
					return t.clone[0]
				}, l = function(t) {
					return t.clone[t.clone.length - 1]
				};
			return {
				restrict: "A",
				multiElement: !0,
				transclude: "element",
				priority: 1e3,
				terminal: !0,
				$$tlb: !0,
				compile: function(r, f) {
					var h = f.ngRepeat,
						p = e.createComment(" end ngRepeat: " + h + " "),
						d = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
					if (!d) throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", h);
					var v = d[1],
						$ = d[2],
						m = d[3],
						g = d[4];
					if (!(d = v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/))) throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", v);
					var y = d[3] || d[1],
						b = d[2];
					if (m && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(m))) throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", m);
					var w, x, _, C, S = {
						$id: Wt
					};
					return g ? w = t(g) : (_ = function(t, e) {
						return Wt(e)
					}, C = function(t) {
						return t
					}),
					function(t, e, r, f, d) {
						w && (x = function(e, n, r) {
							return b && (S[b] = e), S[y] = n, S.$index = r, w(t, S)
						});
						var v = vt();
						t.$watchCollection($, function(r) {
							var f, $, g, w, S, E, A, k, O, j, T, I, M = e[0],
								F = vt();
							if (m && (t[m] = r), i(r)) O = r, k = x || _;
							else {
								k = x || C, O = [];
								for (var D in r) r.hasOwnProperty(D) && "$" !== D.charAt(0) && O.push(D)
							}
							for (w = O.length, T = new Array(w), f = 0; f < w; f++) if (S = r === O ? f : O[f], E = r[S], A = k(S, E, f), v[A]) j = v[A], delete v[A], F[A] = j, T[f] = j;
							else {
								if (F[A]) throw o(T, function(t) {
									t && t.scope && (v[t.id] = t)
								}), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", h, A, E);
								T[f] = {
									id: A,
									scope: n,
									clone: n
								}, F[A] = !0
							}
							for (var R in v) {
								if (j = v[R], I = dt(j.clone), a.leave(I), I[0].parentNode) for (f = 0, $ = I.length; f < $; f++) I[f].$$NG_REMOVED = !0;
								j.scope.$destroy()
							}
							for (f = 0; f < w; f++) if (S = r === O ? f : O[f], E = r[S], j = T[f], j.scope) {
								g = M;
								do {
									g = g.nextSibling
								} while (g && g.$$NG_REMOVED);
								c(j) != g && a.move(dt(j.clone), null, Cr(M)), M = l(j), s(j.scope, f, y, E, b, S, w)
							} else d(function(t, e) {
								j.scope = e;
								var n = p.cloneNode(!1);
								t[t.length++] = n, a.enter(t, null, Cr(M)), M = n, j.clone = t, F[j.id] = j, s(j.scope, f, y, E, b, S, w)
							});
							v = F
						})
					}
				}
			}
		}],
		ia = ["$animate", function(t) {
			return {
				restrict: "A",
				multiElement: !0,
				link: function(e, n, r) {
					e.$watch(r.ngShow, function(e) {
						t[e ? "removeClass" : "addClass"](n, "ng-hide", {
							tempClasses: "ng-hide-animate"
						})
					})
				}
			}
		}],
		oa = ["$animate", function(t) {
			return {
				restrict: "A",
				multiElement: !0,
				link: function(e, n, r) {
					e.$watch(r.ngHide, function(e) {
						t[e ? "addClass" : "removeClass"](n, "ng-hide", {
							tempClasses: "ng-hide-animate"
						})
					})
				}
			}
		}],
		aa = Zn(function(t, e, n) {
			t.$watch(n.ngStyle, function(t, n) {
				n && t !== n && o(n, function(t, n) {
					e.css(n, "")
				}), t && e.css(t)
			}, !0)
		}),
		ua = ["$animate", function(t) {
			return {
				require: "ngSwitch",
				controller: ["$scope", function() {
					this.cases = {}
				}],
				link: function(n, r, i, a) {
					var u = i.ngSwitch || i.on,
						s = [],
						c = [],
						l = [],
						f = [],
						h = function(t, e) {
							return function() {
								t.splice(e, 1)
							}
						};
					n.$watch(u, function(n) {
						var r, i;
						for (r = 0, i = l.length; r < i; ++r) t.cancel(l[r]);
						for (l.length = 0, r = 0, i = f.length; r < i; ++r) {
							var u = dt(c[r].clone);
							f[r].$destroy();
							(l[r] = t.leave(u)).then(h(l, r))
						}
						c.length = 0, f.length = 0, (s = a.cases["!" + n] || a.cases["?"]) && o(s, function(n) {
							n.transclude(function(r, i) {
								f.push(i);
								var o = n.element;
								r[r.length++] = e.createComment(" end ngSwitchWhen: ");
								var a = {
									clone: r
								};
								c.push(a), t.enter(r, o.parent(), o)
							})
						})
					})
				}
			}
		}],
		sa = Zn({
			transclude: "element",
			priority: 1200,
			require: "^ngSwitch",
			multiElement: !0,
			link: function(t, e, n, r, i) {
				r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
					transclude: i,
					element: e
				})
			}
		}),
		ca = Zn({
			transclude: "element",
			priority: 1200,
			require: "^ngSwitch",
			multiElement: !0,
			link: function(t, e, n, r, i) {
				r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
					transclude: i,
					element: e
				})
			}
		}),
		la = Zn({
			restrict: "EAC",
			link: function(t, e, n, i, o) {
				if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", X(e));
				o(function(t) {
					e.empty(), e.append(t)
				})
			}
		}),
		fa = ["$templateCache", function(t) {
			return {
				restrict: "E",
				terminal: !0,
				compile: function(e, n) {
					if ("text/ng-template" == n.type) {
						var r = n.id,
							i = e[0].text;
						t.put(r, i)
					}
				}
			}
		}],
		ha = {
			$setViewValue: v,
			$render: v
		}, pa = ["$element", "$scope", "$attrs", function(t, r, i) {
			var o = this,
				a = new Gt;
			o.ngModelCtrl = ha, o.unknownOption = Cr(e.createElement("option")), o.renderUnknownOption = function(e) {
				var n = "? " + Wt(e) + " ?";
				o.unknownOption.val(n), t.prepend(o.unknownOption), t.val(n)
			}, r.$on("$destroy", function() {
				o.renderUnknownOption = v
			}), o.removeUnknownOption = function() {
				o.unknownOption.parent() && o.unknownOption.remove()
			}, o.readValue = function() {
				return o.removeUnknownOption(), t.val()
			}, o.writeValue = function(e) {
				o.hasOption(e) ? (o.removeUnknownOption(), t.val(e), "" === e && o.emptyOption.prop("selected", !0)) : null == e && o.emptyOption ? (o.removeUnknownOption(), t.val("")) : o.renderUnknownOption(e)
			}, o.addOption = function(t, e) {
				ht(t, '"option value"'), "" === t && (o.emptyOption = e);
				var n = a.get(t) || 0;
				a.put(t, n + 1)
			}, o.removeOption = function(t) {
				var e = a.get(t);
				e && (1 === e ? (a.remove(t), "" === t && (o.emptyOption = n)) : a.put(t, e - 1))
			}, o.hasOption = function(t) {
				return !!a.get(t)
			}
		}],
		da = function() {
			return {
				restrict: "E",
				require: ["select", "?ngModel"],
				controller: pa,
				link: function(t, e, n, r) {
					var i = r[1];
					if (i) {
						var a = r[0];
						if (a.ngModelCtrl = i, i.$render = function() {
							a.writeValue(i.$viewValue)
						}, e.on("change", function() {
							t.$apply(function() {
								i.$setViewValue(a.readValue())
							})
						}), n.multiple) {
							a.readValue = function() {
								var t = [];
								return o(e.find("option"), function(e) {
									e.selected && t.push(e.value)
								}), t
							}, a.writeValue = function(t) {
								var n = new Gt(t);
								o(e.find("option"), function(t) {
									t.selected = b(n.get(t.value))
								})
							};
							var u, s = NaN;
							t.$watch(function() {
								s !== i.$viewValue || L(u, i.$viewValue) || (u = q(i.$viewValue), i.$render()), s = i.$viewValue
							}), i.$isEmpty = function(t) {
								return !t || 0 === t.length
							}
						}
					}
				}
			}
		}, va = ["$interpolate", function(t) {
			function e(t) {
				t[0].hasAttribute("selected") && (t[0].selected = !0)
			}
			return {
				restrict: "E",
				priority: 100,
				compile: function(n, r) {
					if (y(r.value)) {
						var i = t(n.text(), !0);
						i || r.$set("value", n.text())
					}
					return function(t, n, r) {
						var o = n.parent(),
							a = o.data("$selectController") || o.parent().data("$selectController");
						a && a.ngModelCtrl && (i ? t.$watch(i, function(t, i) {
							r.$set("value", t), i !== t && a.removeOption(i), a.addOption(t, n), a.ngModelCtrl.$render(), e(n)
						}) : (a.addOption(r.value, n), a.ngModelCtrl.$render(), e(n)), n.on("$destroy", function() {
							a.removeOption(r.value), a.ngModelCtrl.$render()
						}))
					}
				}
			}
		}],
		$a = m({
			restrict: "E",
			terminal: !1
		}),
		ma = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(t, e, n, r) {
					r && (n.required = !0, r.$validators.required = function(t, e) {
						return !n.required || !r.$isEmpty(e)
					}, n.$observe("required", function() {
						r.$validate()
					}))
				}
			}
		}, ga = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(t, e, i, o) {
					if (o) {
						var a, u = i.ngPattern || i.pattern;
						i.$observe("pattern", function(t) {
							if (_(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", u, t, X(e));
							a = t || n, o.$validate()
						}), o.$validators.pattern = function(t) {
							return o.$isEmpty(t) || y(a) || a.test(t)
						}
					}
				}
			}
		}, ya = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(t, e, n, r) {
					if (r) {
						var i = -1;
						n.$observe("maxlength", function(t) {
							var e = p(t);
							i = isNaN(e) ? -1 : e, r.$validate()
						}), r.$validators.maxlength = function(t, e) {
							return i < 0 || r.$isEmpty(e) || e.length <= i
						}
					}
				}
			}
		}, ba = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(t, e, n, r) {
					if (r) {
						var i = 0;
						n.$observe("minlength", function(t) {
							i = p(t) || 0, r.$validate()
						}), r.$validators.minlength = function(t, e) {
							return r.$isEmpty(e) || e.length >= i
						}
					}
				}
			}
		};
	if (t.angular.bootstrap) return void console.log("WARNING: Tried to load angular more than once.");
	! function() {
		var e;
		if (!Hr) {
			var r = qr();
			Sr = t.jQuery, b(r) && (Sr = null === r ? n : t[r]), Sr && Sr.fn.on ? (Cr = Sr, f(Sr.fn, {
				scope: li.scope,
				isolateScope: li.isolateScope,
				controller: li.controller,
				injector: li.injector,
				inheritedData: li.inheritedData
			}), e = Sr.cleanData, Sr.cleanData = function(t) {
				var n;
				if (Dr) Dr = !1;
				else for (var r, i = 0; null != (r = t[i]); i++)(n = Sr._data(r, "events")) && n.$destroy && Sr(r).triggerHandler("$destroy");
				e(t)
			}) : Cr = Et, Mr.element = Cr, Hr = !0
		}
	}(),
	function(e) {
		f(e, {
			bootstrap: at,
			copy: U,
			extend: f,
			merge: h,
			equals: L,
			element: Cr,
			forEach: o,
			injector: Kt,
			noop: v,
			bind: z,
			toJson: G,
			fromJson: J,
			identity: $,
			isUndefined: y,
			isDefined: b,
			isString: _,
			isFunction: E,
			isObject: w,
			isNumber: C,
			isElement: R,
			isArray: Rr,
			version: Kr,
			isDate: S,
			lowercase: gr,
			uppercase: br,
			callbacks: {
				counter: 0
			},
			getTestability: st,
			$$minErr: r,
			$$csp: Ur,
			reloadWithDebugInfo: ut
		}), Er = $t(t);
		try {
			Er("ngLocale")
		} catch (t) {
			Er("ngLocale", []).provider("$locale", Oe)
		}
		Er("ng", ["ngLocale"], ["$provide", function(t) {
			t.provider({
				$$sanitizeUri: vn
			}), t.provider("$compile", ae).directive({
				a: oo,
				input: _o,
				textarea: _o,
				form: lo,
				script: fa,
				select: da,
				style: $a,
				option: va,
				ngBind: Eo,
				ngBindHtml: ko,
				ngBindTemplate: Ao,
				ngClass: jo,
				ngClassEven: Io,
				ngClassOdd: To,
				ngCloak: Mo,
				ngController: Fo,
				ngForm: fo,
				ngHide: oa,
				ngIf: Po,
				ngInclude: No,
				ngInit: Uo,
				ngNonBindable: Xo,
				ngPluralize: na,
				ngRepeat: ra,
				ngShow: ia,
				ngStyle: aa,
				ngSwitch: ua,
				ngSwitchWhen: sa,
				ngSwitchDefault: ca,
				ngOptions: ea,
				ngTransclude: la,
				ngModel: Yo,
				ngList: qo,
				ngChange: Oo,
				pattern: ga,
				ngPattern: ga,
				required: ma,
				ngRequired: ma,
				minlength: ba,
				ngMinlength: ba,
				maxlength: ya,
				ngMaxlength: ya,
				ngValue: So,
				ngModelOptions: Zo
			}).directive({
				ngInclude: Vo
			}).directive(ao).directive(Do), t.provider({
				$anchorScroll: Zt,
				$animate: Ci,
				$$animateQueue: _i,
				$$AnimateRunner: xi,
				$browser: re,
				$cacheFactory: ie,
				$controller: fe,
				$document: he,
				$exceptionHandler: pe,
				$filter: On,
				$interpolate: Ae,
				$interval: ke,
				$http: _e,
				$httpParamSerializer: ve,
				$httpParamSerializerJQLike: $e,
				$httpBackend: Se,
				$location: Be,
				$log: He,
				$parse: cn,
				$rootScope: dn,
				$q: ln,
				$$q: fn,
				$sce: yn,
				$sceDelegate: gn,
				$sniffer: bn,
				$templateCache: oe,
				$templateRequest: wn,
				$$testability: xn,
				$timeout: _n,
				$window: En,
				$$rAF: pn,
				$$jqLite: zt,
				$$HashMap: di,
				$$cookieReader: kn
			})
		}])
	}(Mr), Cr(e).ready(function() {
		ot(e, at)
	})
}(window, document), !window.angular.$$csp() && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
function(t, e, n) {
	"use strict";

	function r(t, e, n) {
		if (!t) throw ngMinErr("areq", "Argument '{0}' is {1}", e || "?", n || "required");
		return t
	}
	function i(t, e) {
		return t || e ? t ? e ? (N(t) && (t = t.join(" ")), N(e) && (e = e.join(" ")), t + " " + e) : t : e : ""
	}
	function o(t) {
		var e = {};
		return t && (t.to || t.from) && (e.to = t.to, e.from = t.from), e
	}
	function a(t, e, n) {
		var r = "";
		return t = N(t) ? t : t && V(t) && t.length ? t.split(/\s+/) : [], P(t, function(t, i) {
			t && t.length > 0 && (r += i > 0 ? " " : "", r += n ? e + t : t + e)
		}), r
	}
	function u(t, e) {
		var n = t.indexOf(e);
		e >= 0 && t.splice(n, 1)
	}
	function s(t) {
		if (t instanceof R) switch (t.length) {
			case 0:
				return [];
			case 1:
				if (t[0].nodeType === z) return t;
				break;
			default:
				return R(c(t))
		}
		if (t.nodeType === z) return R(t)
	}
	function c(t) {
		if (!t[0]) return t;
		for (var e = 0; e < t.length; e++) {
			var n = t[e];
			if (n.nodeType == z) return n
		}
	}
	function l(t, e, n) {
		P(e, function(e) {
			t.addClass(e, n)
		})
	}
	function f(t, e, n) {
		P(e, function(e) {
			t.removeClass(e, n)
		})
	}
	function h(t) {
		return function(e, n) {
			n.addClass && (l(t, e, n.addClass), n.addClass = null), n.removeClass && (f(t, e, n.removeClass), n.removeClass = null)
		}
	}
	function p(t) {
		if (t = t || {}, !t.$$prepared) {
			var e = t.domOperation || F;
			t.domOperation = function() {
				t.$$domOperationFired = !0, e(), e = F
			}, t.$$prepared = !0
		}
		return t
	}
	function d(t, e) {
		v(t, e), $(t, e)
	}
	function v(t, e) {
		e.from && (t.css(e.from), e.from = null)
	}
	function $(t, e) {
		e.to && (t.css(e.to), e.to = null)
	}
	function m(t, e, n) {
		var r = (e.addClass || "") + " " + (n.addClass || ""),
			i = (e.removeClass || "") + " " + (n.removeClass || ""),
			o = g(t.attr("class"), r, i);
		return D(e, n), o.addClass ? e.addClass = o.addClass : e.addClass = null, o.removeClass ? e.removeClass = o.removeClass : e.removeClass = null, e
	}
	function g(t, e, n) {
		function r(t) {
			V(t) && (t = t.split(" "));
			var e = {};
			return P(t, function(t) {
				t.length && (e[t] = !0)
			}), e
		}
		var i = {};
		t = r(t), e = r(e), P(e, function(t, e) {
			i[e] = 1
		}), n = r(n), P(n, function(t, e) {
			i[e] = 1 === i[e] ? null : -1
		});
		var o = {
			addClass: "",
			removeClass: ""
		};
		return P(i, function(e, n) {
			var r, i;
			1 === e ? (r = "addClass", i = !t[n]) : -1 === e && (r = "removeClass", i = t[n]), i && (o[r].length && (o[r] += " "), o[r] += n)
		}), o
	}
	function y(t) {
		return t instanceof e.element ? t[0] : t
	}
	function b(t, e, n) {
		var r = Object.create(null),
			i = t.getComputedStyle(e) || {};
		return P(n, function(t, e) {
			var n = i[t];
			if (n) {
				var o = n.charAt(0);
				("-" === o || "+" === o || o >= 0) && (n = w(n)), 0 === n && (n = null), r[e] = n
			}
		}), r
	}
	function w(t) {
		var e = 0,
			n = t.split(/\s*,\s*/);
		return P(n, function(t) {
			"s" == t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1)), t = parseFloat(t) || 0, e = e ? Math.max(t, e) : t
		}), e
	}
	function x(t) {
		return 0 === t || null != t
	}
	function _(t, e) {
		var n = j,
			r = t + "s";
		return e ? n += K : r += " linear all", [n, r]
	}
	function C(t) {
		return [ot, t + "s"]
	}
	function S(t, e) {
		return [e ? it : at, t + "s"]
	}
	function E(t, e) {
		var n = e ? "-" + e + "s" : "";
		return k(t, [at, n]), [at, n]
	}
	function A(t, e) {
		var n = e ? "paused" : "",
			r = I + Q;
		return k(t, [r, n]), [r, n]
	}
	function k(t, e) {
		var n = e[0],
			r = e[1];
		t.style[n] = r
	}
	function O() {
		var t = Object.create(null);
		return {
			flush: function() {
				t = Object.create(null)
			},
			count: function(e) {
				var n = t[e];
				return n ? n.total : 0
			},
			get: function(e) {
				var n = t[e];
				return n && n.value
			},
			put: function(e, n) {
				t[e] ? t[e].total++ : t[e] = {
					total: 1,
					value: n
				}
			}
		}
	}
	var j, T, I, M, F = e.noop,
		D = e.extend,
		R = e.element,
		P = e.forEach,
		N = e.isArray,
		V = e.isString,
		U = e.isObject,
		q = e.isUndefined,
		L = e.isDefined,
		B = e.isFunction,
		H = e.isElement,
		z = 1,
		W = "ng-animate",
		G = "$$ngAnimateChildren",
		J = ["$$rAF", function(t) {
			function e(t) {
				o.push([].concat(t)), n()
			}
			function n() {
				if (o.length) {
					for (var e = [], a = 0; a < o.length; a++) {
						var u = o[a];
						r(u), u.length && e.push(u)
					}
					o = e, i || t(function() {
						i || n()
					})
				}
			}
			function r(t) {
				t.shift()()
			}
			var i, o = [];
			return e.waitUntilQuiet = function(e) {
				i && i(), i = t(function() {
					i = null, e(), n()
				})
			}, e
		}],
		Y = [function() {
			return function(t, n, r) {
				var i = r.ngAnimateChildren;
				e.isString(i) && 0 === i.length ? n.data(G, !0) : r.$observe("ngAnimateChildren", function(t) {
					t = "on" === t || "true" === t, n.data(G, t)
				})
			}
		}];
	void 0 === t.ontransitionend && void 0 !== t.onwebkittransitionend ? ("-webkit-", j = "WebkitTransition", T = "webkitTransitionEnd transitionend") : (j = "transition", T = "transitionend"), void 0 === t.onanimationend && void 0 !== t.onwebkitanimationend ? ("-webkit-", I = "WebkitAnimation", M = "webkitAnimationEnd animationend") : (I = "animation", M = "animationend");
	var K = "Duration",
		Z = "Property",
		X = "TimingFunction",
		Q = "PlayState",
		tt = 3,
		et = 1.5,
		nt = 1e3,
		rt = 9999,
		it = I + "Delay",
		ot = I + K,
		at = j + "Delay",
		ut = j + K,
		st = {
			transitionDuration: ut,
			transitionDelay: at,
			transitionProperty: j + Z,
			animationDuration: ot,
			animationDelay: it,
			animationIterationCount: I + "IterationCount"
		}, ct = {
			transitionDuration: ut,
			transitionDelay: at,
			animationDuration: ot,
			animationDelay: it
		}, lt = ["$animateProvider", function(t) {
			var e = O(),
				n = O();
			this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$document", "$sniffer", "$$rAFScheduler", function(t, r, i, s, c, l, f) {
				function m(t, e) {
					var n = "$$ngAnimateParentKey",
						r = t.parentNode;
					return (r[n] || (r[n] = ++V)) + "-" + t.getAttribute("class") + "-" + e
				}
				function g(n, r, i, o) {
					var a = e.get(i);
					return a || (a = b(t, n, o), "infinite" === a.animationIterationCount && (a.animationIterationCount = 1)), e.put(i, a), a
				}
				function w(i, o, u, s) {
					var c;
					if (e.count(u) > 0 && !(c = n.get(u))) {
						var l = a(o, "-stagger");
						r.addClass(i, l), c = b(t, i, s), c.animationDuration = Math.max(c.animationDuration, 0), c.transitionDuration = Math.max(c.transitionDuration, 0), r.removeClass(i, l), n.put(u, c)
					}
					return c || {}
				}
				function O(t) {
					q.push(t), f.waitUntilQuiet(function() {
						e.flush(), n.flush();
						for (var t = U.offsetWidth + 1, r = 0; r < q.length; r++) q[r](t);
						q.length = 0
					})
				}
				function F(t, e, n) {
					var r = g(t, e, n, st),
						i = r.animationDelay,
						o = r.transitionDelay;
					return r.maxDelay = i && o ? Math.max(i, o) : i || o, r.maxDuration = Math.max(r.animationDuration * r.animationIterationCount, r.transitionDuration), r
				}
				function D(t, n) {
					function c() {
						h()
					}
					function f() {
						h(!0)
					}
					function h(e) {
						U || L && q || (U = !0, q = !1, r.removeClass(t, st), r.removeClass(t, ft), A(V, !1), E(V, !1), P(Y, function(t) {
							V.style[t[0]] = ""
						}), R(t, n), d(t, n), n.onDone && n.onDone(), B && B.complete(!e))
					}
					function g(t) {
						Ct.blockTransition && E(V, t), Ct.blockKeyframeAnimation && A(V, !! t)
					}
					function b() {
						return B = new i({
							end: c,
							cancel: f
						}), h(), {
							$$willAnimate: !1,
							start: function() {
								return B
							},
							end: c
						}
					}
					function D() {
						function e() {
							if (!U) {
								if (g(!1), P(Y, function(t) {
									var e = t[0],
										n = t[1];
									V.style[e] = n
								}), R(t, n), r.addClass(t, ft), Ct.recalculateTimingStyles) {
									if (lt = V.className + " " + st, pt = m(V, lt), xt = F(V, lt, pt), _t = xt.maxDelay, z = Math.max(_t, 0), 0 === (G = xt.maxDuration)) return void h();
									Ct.hasTransitions = xt.transitionDuration > 0, Ct.hasAnimations = xt.animationDuration > 0
								}
								if (Ct.applyTransitionDelay || Ct.applyAnimationDelay) {
									_t = "boolean" != typeof n.delay && x(n.delay) ? parseFloat(n.delay) : _t, z = Math.max(_t, 0);
									var e;
									Ct.applyTransitionDelay && (xt.transitionDelay = _t, e = S(_t), Y.push(e), V.style[e[0]] = e[1]), Ct.applyAnimationDelay && (xt.animationDelay = _t, e = S(_t, !0), Y.push(e), V.style[e[0]] = e[1])
								}
								if (W = z * nt, J = G * nt, n.easing) {
									var u, l = n.easing;
									Ct.hasTransitions && (u = j + X, Y.push([u, l]), V.style[u] = l), Ct.hasAnimations && (u = I + X, Y.push([u, l]), V.style[u] = l)
								}
								xt.transitionDuration && c.push(T), xt.animationDuration && c.push(M), a = Date.now(), t.on(c.join(" "), o), s(i, W + et * J), $(t, n)
							}
						}
						function i() {
							h()
						}
						function o(t) {
							t.stopPropagation();
							var e = t.originalEvent || t,
								n = e.$manualTimeStamp || e.timeStamp || Date.now(),
								r = parseFloat(e.elapsedTime.toFixed(tt));
							Math.max(n - a, 0) >= W && r >= G && (L = !0, h())
						}
						if (!U) {
							if (!V.parentNode) return void h();
							var a, c = [],
								l = function(t) {
									if (L) q && t && (q = !1, h());
									else if (q = !t, xt.animationDuration) {
										var e = A(V, q);
										q ? Y.push(e) : u(Y, e)
									}
								}, f = bt > 0 && (xt.transitionDuration && 0 === dt.transitionDuration || xt.animationDuration && 0 === dt.animationDuration) && Math.max(dt.animationDelay, dt.transitionDelay);
							f ? s(e, Math.floor(f * bt * nt), !1) : e(), H.resume = function() {
								l(!0)
							}, H.pause = function() {
								l(!1)
							}
						}
					}
					var V = y(t);
					if (!V || !V.parentNode) return b();
					n = p(n);
					var U, q, L, B, H, z, W, G, J, Y = [],
						K = t.attr("class"),
						Q = o(n);
					if (0 === n.duration || !l.animations && !l.transitions) return b();
					var it = n.event && N(n.event) ? n.event.join(" ") : n.event,
						ot = it && n.structural,
						at = "",
						ut = "";
					ot ? at = a(it, "ng-", !0) : it && (at = it), n.addClass && (ut += a(n.addClass, "-add")), n.removeClass && (ut.length && (ut += " "), ut += a(n.removeClass, "-remove")), n.applyClassesEarly && ut.length && (R(t, n), ut = "");
					var st = [at, ut].join(" ").trim(),
						lt = K + " " + st,
						ft = a(st, "-active"),
						ht = Q.to && Object.keys(Q.to).length > 0;
					if (!((n.keyframeStyle || "").length > 0 || ht || st)) return b();
					var pt, dt;
					if (n.stagger > 0) {
						var vt = parseFloat(n.stagger);
						dt = {
							transitionDelay: vt,
							animationDelay: vt,
							transitionDuration: 0,
							animationDuration: 0
						}
					} else pt = m(V, lt), dt = w(V, st, pt, ct);
					r.addClass(t, st);
					var $t;
					if (n.transitionStyle) {
						var mt = [j, n.transitionStyle];
						k(V, mt), Y.push(mt)
					}
					if (n.duration >= 0) {
						$t = V.style[j].length > 0;
						var gt = _(n.duration, $t);
						k(V, gt), Y.push(gt)
					}
					if (n.keyframeStyle) {
						var yt = [I, n.keyframeStyle];
						k(V, yt), Y.push(yt)
					}
					var bt = dt ? n.staggerIndex >= 0 ? n.staggerIndex : e.count(pt) : 0,
						wt = 0 === bt;
					wt && E(V, rt);
					var xt = F(V, lt, pt),
						_t = xt.maxDelay;
					z = Math.max(_t, 0), G = xt.maxDuration;
					var Ct = {};
					return Ct.hasTransitions = xt.transitionDuration > 0, Ct.hasAnimations = xt.animationDuration > 0, Ct.hasTransitionAll = Ct.hasTransitions && "all" == xt.transitionProperty, Ct.applyTransitionDuration = ht && (Ct.hasTransitions && !Ct.hasTransitionAll || Ct.hasAnimations && !Ct.hasTransitions), Ct.applyAnimationDuration = n.duration && Ct.hasAnimations, Ct.applyTransitionDelay = x(n.delay) && (Ct.applyTransitionDuration || Ct.hasTransitions), Ct.applyAnimationDelay = x(n.delay) && Ct.hasAnimations, Ct.recalculateTimingStyles = ut.length > 0, (Ct.applyTransitionDuration || Ct.applyAnimationDuration) && (G = n.duration ? parseFloat(n.duration) : G, Ct.applyTransitionDuration && (Ct.hasTransitions = !0, xt.transitionDuration = G, $t = V.style[j + Z].length > 0, Y.push(_(G, $t))), Ct.applyAnimationDuration && (Ct.hasAnimations = !0, xt.animationDuration = G, Y.push(C(G)))), 0 !== G || Ct.recalculateTimingStyles ? (null == n.duration && xt.transitionDuration > 0 && (Ct.recalculateTimingStyles = Ct.recalculateTimingStyles || wt), W = z * nt, J = G * nt, n.skipBlocking || (Ct.blockTransition = xt.transitionDuration > 0, Ct.blockKeyframeAnimation = xt.animationDuration > 0 && dt.animationDelay > 0 && 0 === dt.animationDuration), v(t, n), Ct.blockTransition || E(V, !1), g(G), {
						$$willAnimate: !0,
						end: c,
						start: function() {
							if (!U) return H = {
								end: c,
								cancel: f,
								resume: null,
								pause: null
							}, B = new i(H), O(D), B
						}
					}) : b()
				}
				var R = h(r),
					V = 0,
					U = y(c).body,
					q = [];
				return D
			}]
		}],
		ft = ["$$animationProvider", function(t) {
			t.drivers.push("$$animateCssDriver");
			var e = "ng-animate-shim",
				n = "ng-anchor-out";
			this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$document", "$sniffer", function(t, r, i, o, a, u) {
				function s(t) {
					return t.replace(/\bng-\S+\b/g, "")
				}
				function c(t, e) {
					return V(t) && (t = t.split(" ")), V(e) && (e = e.split(" ")), t.filter(function(t) {
						return -1 === e.indexOf(t)
					}).join(" ")
				}
				function l(r, o, a) {
					function u(t) {
						var e = {}, n = y(t).getBoundingClientRect();
						return P(["width", "height", "top", "left"], function(t) {
							var r = n[t];
							switch (t) {
								case "top":
									r += p.scrollTop;
									break;
								case "left":
									r += p.scrollLeft
							}
							e[t] = Math.floor(r) + "px"
						}), e
					}
					function l(t) {
						return t.attr("class") || ""
					}
					function f() {
						var e = s(l(a)),
							r = c(e, $),
							i = c($, e),
							o = t(d, {
								to: u(a),
								addClass: "ng-anchor-in " + r,
								removeClass: n + " " + i,
								delay: !0
							});
						return o.$$willAnimate ? o : null
					}
					function h() {
						d.remove(), o.removeClass(e), a.removeClass(e)
					}
					var d = R(y(o).cloneNode(!0)),
						$ = s(l(d));
					o.addClass(e), a.addClass(e), d.addClass("ng-anchor"), v.append(d);
					var m, g = function() {
						var e = t(d, {
							addClass: n,
							delay: !0,
							from: u(o)
						});
						return e.$$willAnimate ? e : null
					}();
					if (!g && !(m = f())) return h();
					var b = g || m;
					return {
						start: function() {
							function t() {
								n && n.end()
							}
							var e, n = b.start();
							return n.done(function() {
								if (n = null, !m && (m = f())) return n = m.start(), n.done(function() {
									n = null, h(), e.complete()
								}), n;
								h(), e.complete()
							}), e = new i({
								end: t,
								cancel: t
							})
						}
					}
				}
				function f(t, e, n, r) {
					var o = h(t),
						a = h(e),
						u = [];
					if (P(r, function(t) {
						var e = t.out,
							r = t. in ,
							i = l(n, e, r);
						i && u.push(i)
					}), o || a || 0 !== u.length) return {
						start: function() {
							function t() {
								P(e, function(t) {
									t.end()
								})
							}
							var e = [];
							o && e.push(o.start()), a && e.push(a.start()), P(u, function(t) {
								e.push(t.start())
							});
							var n = new i({
								end: t,
								cancel: t
							});
							return i.all(e, function(t) {
								n.complete(t)
							}), n
						}
					}
				}
				function h(e) {
					var n = e.element,
						r = e.options || {};
					e.structural ? (r.structural = r.applyClassesEarly = !0, r.event = e.event, "leave" === r.event && (r.onDone = r.domOperation)) : r.event = null;
					var i = t(n, r);
					return i.$$willAnimate ? i : null
				}
				if (!u.animations && !u.transitions) return F;
				var p = y(a).body,
					d = y(o),
					v = R(p.parentNode === d ? p : d);
				return function(t) {
					return t.from && t.to ? f(t.from, t.to, t.classes, t.anchors) : h(t)
				}
			}]
		}],
		ht = ["$animateProvider", function(t) {
			this.$get = ["$injector", "$$AnimateRunner", "$$rAFMutex", "$$jqLite", function(e, n, r, i) {
				function o(n) {
					n = N(n) ? n : n.split(" ");
					for (var r = [], i = {}, o = 0; o < n.length; o++) {
						var a = n[o],
							u = t.$$registeredAnimations[a];
						u && !i[a] && (r.push(e.get(u)), i[a] = !0)
					}
					return r
				}
				var a = h(i);
				return function(t, e, r, i) {
					function u() {
						i.domOperation(), a(t, i)
					}
					function s(t, e, r, i, o) {
						var a;
						switch (r) {
							case "animate":
								a = [e, i.from, i.to, o];
								break;
							case "setClass":
								a = [e, v, $, o];
								break;
							case "addClass":
								a = [e, v, o];
								break;
							case "removeClass":
								a = [e, $, o];
								break;
							default:
								a = [e, o]
						}
						a.push(i);
						var u = t.apply(t, a);
						if (u) if (B(u.start) && (u = u.start()), u instanceof n) u.done(o);
						else if (B(u)) return u;
						return F
					}
					function c(t, e, r, i, o) {
						var a = [];
						return P(i, function(i) {
							var u = i[o];
							u && a.push(function() {
								var i, o, a = !1,
									c = function(t) {
										a || (a = !0, (o || F)(t), i.complete(!t))
									};
								return i = new n({
									end: function() {
										c()
									},
									cancel: function() {
										c(!0)
									}
								}), o = s(u, t, e, r, function(t) {
									c(!1 === t)
								}), i
							})
						}), a
					}
					function l(t, e, r, i, o) {
						var a = c(t, e, r, i, o);
						if (0 === a.length) {
							var u, s;
							"beforeSetClass" === o ? (u = c(t, "removeClass", r, i, "beforeRemoveClass"), s = c(t, "addClass", r, i, "beforeAddClass")) : "setClass" === o && (u = c(t, "removeClass", r, i, "removeClass"), s = c(t, "addClass", r, i, "addClass")), u && (a = a.concat(u)), s && (a = a.concat(s))
						}
						if (0 !== a.length) return function(t) {
							var e = [];
							return a.length && P(a, function(t) {
								e.push(t())
							}), e.length ? n.all(e, t) : t(),
							function(t) {
								P(e, function(e) {
									t ? e.cancel() : e.end()
								})
							}
						}
					}
					3 === arguments.length && U(r) && (i = r, r = null), i = p(i), r || (r = t.attr("class") || "", i.addClass && (r += " " + i.addClass), i.removeClass && (r += " " + i.removeClass));
					var f, h, v = i.addClass,
						$ = i.removeClass,
						m = o(r);
					if (m.length) {
						var g, y;
						"leave" == e ? (y = "leave", g = "afterLeave") : (y = "before" + e.charAt(0).toUpperCase() + e.substr(1), g = e), "enter" !== e && "move" !== e && (f = l(t, e, i, m, y)), h = l(t, e, i, m, g)
					}
					if (f || h) return {
						start: function() {
							function e(e) {
								s = !0, u(), d(t, i), c.complete(e)
							}
							function r(t) {
								s || ((o || F)(t), e(t))
							}
							var o, a = [];
							f && a.push(function(t) {
								o = f(t)
							}), a.length ? a.push(function(t) {
								u(), t(!0)
							}) : u(), h && a.push(function(t) {
								o = h(t)
							});
							var s = !1,
								c = new n({
									end: function() {
										r()
									},
									cancel: function() {
										r(!0)
									}
								});
							return n.chain(a, e), c
						}
					}
				}
			}]
		}],
		pt = ["$$animationProvider", function(t) {
			t.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function(t, e) {
				function n(e) {
					var n = e.element,
						r = e.event,
						i = e.options,
						o = e.classes;
					return t(n, r, o, i)
				}
				return function(t) {
					if (t.from && t.to) {
						var r = n(t.from),
							i = n(t.to);
						if (!r && !i) return;
						return {
							start: function() {
								function t() {
									return function() {
										P(o, function(t) {
											t.end()
										})
									}
								}
								function n(t) {
									a.complete(t)
								}
								var o = [];
								r && o.push(r.start()), i && o.push(i.start()), e.all(o, n);
								var a = new e({
									end: t(),
									cancel: t()
								});
								return a
							}
						}
					}
					return n(t)
				}
			}]
		}],
		dt = "data-ng-animate",
		vt = "$ngAnimatePin",
		$t = ["$animateProvider", function(t) {
			function e(t, e, n, r) {
				return a[t].some(function(t) {
					return t(e, n, r)
				})
			}
			function n(t, e) {
				t = t || {};
				var n = (t.addClass || "").length > 0,
					r = (t.removeClass || "").length > 0;
				return e ? n && r : n || r
			}
			var i = 1,
				o = 2,
				a = this.rules = {
					skip: [],
					cancel: [],
					join: []
				};
			a.join.push(function(t, e, r) {
				return !e.structural && n(e.options)
			}), a.skip.push(function(t, e, r) {
				return !e.structural && !n(e.options)
			}), a.skip.push(function(t, e, n) {
				return "leave" == n.event && e.structural
			}), a.skip.push(function(t, e, n) {
				return n.structural && !e.structural
			}), a.cancel.push(function(t, e, n) {
				return n.structural && e.structural
			}), a.cancel.push(function(t, e, n) {
				return n.state === o && e.structural
			}), a.cancel.push(function(t, e, n) {
				var r = e.options,
					i = n.options;
				return r.addClass && r.addClass === i.removeClass || r.removeClass && r.removeClass === i.addClass
			}), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", function(a, u, l, f, v, $, g, b, w) {
				function x(t, e) {
					return m(t, e, {})
				}
				function _(t, e) {
					var n = y(t),
						r = [],
						i = W[e];
					return i && P(i, function(t) {
						t.node.contains(n) && r.push(t.callback)
					}), r
				}
				function C(t, e, n, r) {
					a(function() {
						P(_(e, t), function(t) {
							t(e, n, r)
						})
					})
				}
				function S(t, r, a) {
					function c(e, n, r, i) {
						C(n, t, r, i), e.progress(n, r, i)
					}
					function l(e) {
						K(t, a), d(t, a), a.domOperation(), v.complete(!e)
					}
					var f, h;
					t = s(t), t && (f = y(t), h = t.parent()), a = p(a);
					var v = new g;
					if (!f) return l(), v;
					N(a.addClass) && (a.addClass = a.addClass.join(" ")), N(a.removeClass) && (a.removeClass = a.removeClass.join(" ")), a.from && !U(a.from) && (a.from = null), a.to && !U(a.to) && (a.to = null);
					var b = [f.className, a.addClass, a.removeClass].join(" ");
					if (!Y(b)) return l(), v;
					var w = ["enter", "move", "leave"].indexOf(r) >= 0,
						_ = !F || M.get(f),
						S = !_ && I.get(f) || {}, k = !! S.state;
					if (_ || k && S.state == i || (_ = !j(t, h, r)), _) return l(), v;
					w && E(t);
					var D = {
						structural: w,
						element: t,
						event: r,
						close: l,
						options: a,
						runner: v
					};
					if (k) {
						if (e("skip", t, D, S)) return S.state === o ? (l(), v) : (m(t, S.options, a), S.runner);
						if (e("cancel", t, D, S)) S.state === o ? S.runner.end() : S.structural ? S.close() : m(t, D.options, S.options);
						else {
							if (e("join", t, D, S)) {
								if (S.state !== o) return r = D.event = S.event, a = m(t, S.options, D.options), v;
								x(t, a)
							}
						}
					} else x(t, a);
					var R = D.structural;
					if (R || (R = "animate" === D.event && Object.keys(D.options.to || {}).length > 0 || n(D.options)), !R) return l(), A(t), v;
					w && O(h);
					var P = (S.counter || 0) + 1;
					return D.counter = P, T(t, i, D), u.$$postDigest(function() {
						var e = I.get(f),
							i = !e;
						e = e || {};
						var u = t.parent() || [],
							s = u.length > 0 && ("animate" === e.event || e.structural || n(e.options));
						if (i || e.counter !== P || !s) return i && (K(t, a), d(t, a)), (i || w && e.event !== r) && (a.domOperation(), v.end()), void(s || A(t));
						r = !e.structural && n(e.options, !0) ? "setClass" : e.event, e.structural && O(u), T(t, o);
						var h = $(t, r, e.options);
						h.done(function(e) {
							l(!e);
							var n = I.get(f);
							n && n.counter === P && A(y(t)), c(v, r, "close", {})
						}), v.setHost(h), c(v, r, "start", {})
					}), v
				}
				function E(t) {
					var e = y(t),
						n = e.querySelectorAll("[" + dt + "]");
					P(n, function(t) {
						var e = parseInt(t.getAttribute(dt)),
							n = I.get(t);
						switch (e) {
							case o:
								n.runner.end();
							case i:
								n && I.remove(t)
						}
					})
				}
				function A(t) {
					var e = y(t);
					e.removeAttribute(dt), I.remove(e)
				}
				function k(t, e) {
					return y(t) === y(e)
				}
				function O(t) {
					for (var e = y(t);;) {
						if (!e || e.nodeType !== z) break;
						var r = I.get(e);
						r && function(t, e) {
							!e.structural && n(e.options) && (e.state === o && e.runner.end(), A(t))
						}(e, r), e = e.parentNode
					}
				}
				function j(t, e, n) {
					var r, i = !1,
						o = !1,
						a = !1,
						u = t.data(vt);
					for (u && (e = u); e && e.length;) {
						o || (o = k(e, l));
						var s = e[0];
						if (s.nodeType !== z) break;
						var c = I.get(s) || {};
						if (a || (a = c.structural || M.get(s)), q(r) || !0 === r) {
							var f = e.data(G);
							L(f) && (r = f)
						}
						if (a && !1 === r) break;
						o || (o = k(e, l)) || (u = e.data(vt)) && (e = u), i || (i = k(e, B)), e = e.parent()
					}
					return (!a || r) && o && i
				}
				function T(t, e, n) {
					n = n || {}, n.state = e;
					var r = y(t);
					r.setAttribute(dt, e);
					var i = I.get(r),
						o = i ? D(i, n) : n;
					I.put(r, o)
				}
				var I = new v,
					M = new v,
					F = null,
					V = u.$watch(function() {
						return 0 === b.totalPendingRequests
					}, function(t) {
						t && (V(), u.$$postDigest(function() {
							u.$$postDigest(function() {
								null === F && (F = !0)
							})
						}))
					}),
					B = R(f[0].body),
					W = {}, J = t.classNameFilter(),
					Y = J ? function(t) {
						return J.test(t)
					} : function() {
						return !0
					}, K = h(w);
				return {
					on: function(t, e, n) {
						var r = c(e);
						W[t] = W[t] || [], W[t].push({
							node: r,
							callback: n
						})
					},
					off: function(t, e, n) {
						var r = W[t];
						r && (W[t] = 1 === arguments.length ? null : function(t, e, n) {
							var r = c(e);
							return t.filter(function(t) {
								return !(t.node === r && (!n || t.callback === n))
							})
						}(r, e, n))
					},
					pin: function(t, e) {
						r(H(t), "element", "not an element"), r(H(e), "parentElement", "not an element"), t.data(vt, e)
					},
					push: function(t, e, n, r) {
						return n = n || {}, n.domOperation = r, S(t, e, n)
					},
					enabled: function(t, e) {
						var n = arguments.length;
						if (0 === n) e = !! F;
						else {
							if (H(t)) {
								var r = y(t),
									i = M.get(r);
								1 === n ? e = !i : (e = !! e, e ? i && M.remove(r) : M.put(r, !0))
							} else e = F = !! t
						}
						return e
					}
				}
			}]
		}],
		mt = ["$$rAF", function(t) {
			return function() {
				var e = !1;
				return t(function() {
					e = !0
				}),
				function(n) {
					e ? n() : t(n)
				}
			}
		}],
		gt = ["$q", "$$rAFMutex", function(t, e) {
			function n(t) {
				this.setHost(t), this._doneCallbacks = [], this._runInAnimationFrame = e(), this._state = 0
			}
			return n.chain = function(t, e) {
				function n() {
					if (r === t.length) return void e(!0);
					t[r](function(t) {
						if (!1 === t) return void e(!1);
						r++, n()
					})
				}
				var r = 0;
				n()
			}, n.all = function(t, e) {
				function n(n) {
					i = i && n, ++r === t.length && e(i)
				}
				var r = 0,
					i = !0;
				P(t, function(t) {
					t.done(n)
				})
			}, n.prototype = {
				setHost: function(t) {
					this.host = t || {}
				},
				done: function(t) {
					2 === this._state ? t() : this._doneCallbacks.push(t)
				},
				progress: F,
				getPromise: function() {
					if (!this.promise) {
						var e = this;
						this.promise = t(function(t, n) {
							e.done(function(e) {
								!1 === e ? n() : t()
							})
						})
					}
					return this.promise
				},
				then: function(t, e) {
					return this.getPromise().then(t, e)
				},
				catch: function(t) {
					return this.getPromise().
					catch (t)
				},
				finally: function(t) {
					return this.getPromise().
					finally(t)
				},
				pause: function() {
					this.host.pause && this.host.pause()
				},
				resume: function() {
					this.host.resume && this.host.resume()
				},
				end: function() {
					this.host.end && this.host.end(), this._resolve(!0)
				},
				cancel: function() {
					this.host.cancel && this.host.cancel(), this._resolve(!1)
				},
				complete: function(t) {
					var e = this;
					0 === e._state && (e._state = 1, e._runInAnimationFrame(function() {
						e._resolve(t)
					}))
				},
				_resolve: function(t) {
					2 !== this._state && (P(this._doneCallbacks, function(e) {
						e(t)
					}), this._doneCallbacks.length = 0, this._state = 2)
				}
			}, n
		}],
		yt = ["$animateProvider", function(t) {
			function e(t, e) {
				t.data(u, e)
			}
			function n(t) {
				t.removeData(u)
			}
			function r(t) {
				return t.data(u)
			}
			var o = "ng-animate-ref",
				a = this.drivers = [],
				u = "$$animationRunner";
			this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$rAFScheduler", function(t, u, s, c, l) {
				var f = [],
					v = h(t),
					$ = 0,
					m = 0,
					g = [];
				return function(h, b, w) {
					function x(t) {
						var e = "[" + o + "]",
							n = t.hasAttribute(o) ? [t] : t.querySelectorAll(e),
							r = [];
						return P(n, function(t) {
							var e = t.getAttribute(o);
							e && e.length && r.push(t)
						}), r
					}
					function _(t) {
						var e = [],
							n = {};
						P(t, function(t, r) {
							var i = t.element,
								a = y(i),
								u = t.event,
								s = ["enter", "move"].indexOf(u) >= 0,
								c = t.structural ? x(a) : [];
							if (c.length) {
								var l = s ? "to" : "from";
								P(c, function(t) {
									var e = t.getAttribute(o);
									n[e] = n[e] || {}, n[e][l] = {
										animationID: r,
										element: R(t)
									}
								})
							} else e.push(t)
						});
						var r = {}, i = {};
						return P(n, function(n, o) {
							var a = n.from,
								u = n.to;
							if (!a || !u) {
								var s = a ? a.animationID : u.animationID,
									c = s.toString();
								return void(r[c] || (r[c] = !0, e.push(t[s])))
							}
							var l = t[a.animationID],
								f = t[u.animationID],
								h = a.animationID.toString();
							if (!i[h]) {
								var p = i[h] = {
									structural: !0,
									beforeStart: function() {
										l.beforeStart(), f.beforeStart()
									},
									close: function() {
										l.close(), f.close()
									},
									classes: C(l.classes, f.classes),
									from: l,
									to: f,
									anchors: []
								};
								p.classes.length ? e.push(p) : (e.push(l), e.push(f))
							}
							i[h].anchors.push({
								out: a.element,
								in : u.element
							})
						}), e
					}
					function C(t, e) {
						t = t.split(" "), e = e.split(" ");
						for (var n = [], r = 0; r < t.length; r++) {
							var i = t[r];
							if ("ng-" !== i.substring(0, 3)) for (var o = 0; o < e.length; o++) if (i === e[o]) {
								n.push(i);
								break
							}
						}
						return n.join(" ")
					}
					function S(t) {
						for (var e = a.length - 1; e >= 0; e--) {
							var n = a[e];
							if (s.has(n)) {
								var r = s.get(n),
									i = r(t);
								if (i) return i
							}
						}
					}
					function E() {
						h.addClass(W), M && t.addClass(h, M)
					}
					function A(t, e) {
						function n(t) {
							r(t).setHost(e)
						}
						t.from && t.to ? (n(t.from.element), n(t.to.element)) : n(t.element)
					}
					function k() {
						var t = r(h);
						!t || "leave" === b && w.$$domOperationFired || t.end()
					}
					function O(e) {
						h.off("$destroy", k), n(h), v(h, w), d(h, w), w.domOperation(), M && t.removeClass(h, M), h.removeClass(W), T.complete(!e)
					}
					w = p(w);
					var j = ["enter", "move", "leave"].indexOf(b) >= 0,
						T = new c({
							end: function() {
								O()
							},
							cancel: function() {
								O(!0)
							}
						});
					if (!a.length) return O(), T;
					e(h, T);
					var I = i(h.attr("class"), i(w.addClass, w.removeClass)),
						M = w.tempClasses;
					M && (I += " " + M, w.tempClasses = null);
					var F;
					return j || (F = $, $ += 1), f.push({
						element: h,
						classes: I,
						event: b,
						classBasedIndex: F,
						structural: j,
						options: w,
						beforeStart: E,
						close: O
					}), h.on("$destroy", k), f.length > 1 ? T : (u.$$postDigest(function() {
						m = $, $ = 0, g.length = 0;
						var t = [];
						P(f, function(e) {
							r(e.element) && t.push(e)
						}), f.length = 0, P(_(t), function(t) {
							function e() {
								t.beforeStart();
								var e, n = t.close,
									i = t.anchors ? t.from.element || t.to.element : t.element;
								if (r(i) && y(i).parentNode) {
									var o = S(t);
									o && (e = o.start)
								}
								if (e) {
									var a = e();
									a.done(function(t) {
										n(!t)
									}), A(t, a)
								} else n()
							}
							t.structural ? e() : (g.push({
								node: y(t.element),
								fn: e
							}), t.classBasedIndex === m - 1 && (g = g.sort(function(t, e) {
								return e.node.contains(t.node)
							}).map(function(t) {
								return t.fn
							}), l(g)))
						})
					}), T)
				}
			}]
		}];
	e.module("ngAnimate", []).directive("ngAnimateChildren", Y).factory("$$rAFMutex", mt).factory("$$rAFScheduler", J).factory("$$AnimateRunner", gt).provider("$$animateQueue", $t).provider("$$animation", yt).provider("$animateCss", lt).provider("$$animateCssDriver", ft).provider("$$animateJs", ht).provider("$$animateJsDriver", pt)
}(window, window.angular),
function(t, e, n) {
	"use strict";

	function r(t, r, i) {
		function o(t, i, o) {
			var u, s;
			o = o || {}, s = o.expires, u = e.isDefined(o.path) ? o.path : a, i === n && (s = "Thu, 01 Jan 1970 00:00:00 GMT", i = ""), e.isString(s) && (s = new Date(s));
			var c = encodeURIComponent(t) + "=" + encodeURIComponent(i);
			c += u ? ";path=" + u : "", c += o.domain ? ";domain=" + o.domain : "", c += s ? ";expires=" + s.toUTCString() : "", c += o.secure ? ";secure" : "";
			var l = c.length + 1;
			return l > 4096 && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + l + " > 4096 bytes)!"), c
		}
		var a = i.baseHref(),
			u = t[0];
		return function(t, e, n) {
			u.cookie = o(t, e, n)
		}
	}
	e.module("ngCookies", ["ng"]).provider("$cookies", [function() {
		function t(t) {
			return t ? e.extend({}, r, t) : r
		}
		var r = this.defaults = {};
		this.$get = ["$$cookieReader", "$$cookieWriter", function(r, i) {
			return {
				get: function(t) {
					return r()[t]
				},
				getObject: function(t) {
					var n = this.get(t);
					return n ? e.fromJson(n) : n
				},
				getAll: function() {
					return r()
				},
				put: function(e, n, r) {
					i(e, n, t(r))
				},
				putObject: function(t, n, r) {
					this.put(t, e.toJson(n), r)
				},
				remove: function(e, r) {
					i(e, n, t(r))
				}
			}
		}]
	}]), e.module("ngCookies").factory("$cookieStore", ["$cookies", function(t) {
		return {
			get: function(e) {
				return t.getObject(e)
			},
			put: function(e, n) {
				t.putObject(e, n)
			},
			remove: function(e) {
				t.remove(e)
			}
		}
	}]), r.$inject = ["$document", "$log", "$browser"], e.module("ngCookies").provider("$$cookieWriter", function() {
		this.$get = r
	})
}(window, window.angular),
function(t, e, n) {
	"use strict";

	function r(t) {
		return e.lowercase(t.nodeName || t[0] && t[0].nodeName)
	}
	function i(t, n, r) {
		o.directive(t, ["$parse", "$swipe", function(i, o) {
			return function(a, u, s) {
				function c(t) {
					if (!l) return !1;
					var e = Math.abs(t.y - l.y),
						r = (t.x - l.x) * n;
					return f && e < 75 && r > 0 && r > 30 && e / r < .3
				}
				var l, f, h = i(s[t]),
					p = ["touch"];
				e.isDefined(s.ngSwipeDisableMouse) || p.push("mouse"), o.bind(u, {
					start: function(t, e) {
						l = t, f = !0
					},
					cancel: function(t) {
						f = !1
					},
					end: function(t, e) {
						c(t) && a.$apply(function() {
							u.triggerHandler(r), h(a, {
								$event: e
							})
						})
					}
				}, p)
			}
		}])
	}
	var o = e.module("ngTouch", []);
	o.factory("$swipe", [function() {
		function t(t) {
			var e = t.originalEvent || t,
				n = e.touches && e.touches.length ? e.touches : [e],
				r = e.changedTouches && e.changedTouches[0] || n[0];
			return {
				x: r.clientX,
				y: r.clientY
			}
		}
		function n(t, n) {
			var i = [];
			return e.forEach(t, function(t) {
				var e = r[t][n];
				e && i.push(e)
			}), i.join(" ")
		}
		var r = {
			mouse: {
				start: "mousedown",
				move: "mousemove",
				end: "mouseup"
			},
			touch: {
				start: "touchstart",
				move: "touchmove",
				end: "touchend",
				cancel: "touchcancel"
			}
		};
		return {
			bind: function(e, r, i) {
				var o, a, u, s, c = !1;
				i = i || ["mouse", "touch"], e.on(n(i, "start"), function(e) {
					u = t(e), c = !0, o = 0, a = 0, s = u, r.start && r.start(u, e)
				});
				var l = n(i, "cancel");
				l && e.on(l, function(t) {
					c = !1, r.cancel && r.cancel(t)
				}), e.on(n(i, "move"), function(e) {
					if (c && u) {
						var n = t(e);
						if (o += Math.abs(n.x - s.x), a += Math.abs(n.y - s.y), s = n, !(o < 10 && a < 10)) return a > o ? (c = !1, void(r.cancel && r.cancel(e))) : (e.preventDefault(), void(r.move && r.move(n, e)))
					}
				}), e.on(n(i, "end"), function(e) {
					c && (c = !1, r.end && r.end(t(e), e))
				})
			}
		}
	}]), o.config(["$provide", function(t) {
		t.decorator("ngClickDirective", ["$delegate", function(t) {
			return t.shift(), t
		}])
	}]), o.directive("ngClick", ["$parse", "$timeout", "$rootElement", function(t, n, i) {
		function o(t, e, n, r) {
			return Math.abs(t - n) < d && Math.abs(e - r) < d
		}
		function a(t, e, n) {
			for (var r = 0; r < t.length; r += 2) if (o(t[r], t[r + 1], e, n)) return t.splice(r, r + 2), !0;
			return !1
		}
		function u(t) {
			if (!(Date.now() - l > p)) {
				var e = t.touches && t.touches.length ? t.touches : [t],
					n = e[0].clientX,
					i = e[0].clientY;
				n < 1 && i < 1 || h && h[0] === n && h[1] === i || (h && (h = null), "label" === r(t.target) && (h = [n, i]), a(f, n, i) || (t.stopPropagation(), t.preventDefault(), t.target && t.target.blur && t.target.blur()))
			}
		}
		function s(t) {
			var e = t.touches && t.touches.length ? t.touches : [t],
				r = e[0].clientX,
				i = e[0].clientY;
			f.push(r, i), n(function() {
				for (var t = 0; t < f.length; t += 2) if (f[t] == r && f[t + 1] == i) return void f.splice(t, t + 2)
			}, p, !1)
		}
		function c(t, e) {
			f || (i[0].addEventListener("click", u, !0), i[0].addEventListener("touchstart", s, !0), f = []), l = Date.now(), a(f, t, e)
		}
		var l, f, h, p = 2500,
			d = 25,
			v = "ng-click-active";
		return function(n, r, i) {
			function o() {
				h = !1, r.removeClass(v)
			}
			var a, u, s, l, f = t(i.ngClick),
				h = !1;
			r.on("touchstart", function(t) {
				h = !0, a = t.target ? t.target : t.srcElement, 3 == a.nodeType && (a = a.parentNode), r.addClass(v), u = Date.now();
				var e = t.originalEvent || t,
					n = e.touches && e.touches.length ? e.touches : [e],
					i = n[0];
				s = i.clientX, l = i.clientY
			}), r.on("touchcancel", function(t) {
				o()
			}), r.on("touchend", function(t) {
				var n = Date.now() - u,
					f = t.originalEvent || t,
					p = f.changedTouches && f.changedTouches.length ? f.changedTouches : f.touches && f.touches.length ? f.touches : [f],
					d = p[0],
					v = d.clientX,
					$ = d.clientY,
					m = Math.sqrt(Math.pow(v - s, 2) + Math.pow($ - l, 2));
				h && n < 750 && m < 12 && (c(v, $), a && a.blur(), e.isDefined(i.disabled) && !1 !== i.disabled || r.triggerHandler("click", [t])), o()
			}), r.onclick = function(t) {}, r.on("click", function(t, e) {
				n.$apply(function() {
					f(n, {
						$event: e || t
					})
				})
			}), r.on("mousedown", function(t) {
				r.addClass(v)
			}), r.on("mousemove mouseup", function(t) {
				r.removeClass(v)
			})
		}
	}]), i("ngSwipeLeft", -1, "swipeleft"), i("ngSwipeRight", 1, "swiperight")
}(window, window.angular), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
function(t, e, n) {
	"use strict";

	function r(t, e) {
		return B(new(B(function() {}, {
			prototype: t
		})), e)
	}
	function i(t) {
		return L(arguments, function(e) {
			e !== t && L(e, function(e, n) {
				t.hasOwnProperty(n) || (t[n] = e)
			})
		}), t
	}
	function o(t, e) {
		var n = [];
		for (var r in t.path) {
			if (t.path[r] !== e.path[r]) break;
			n.push(t.path[r])
		}
		return n
	}
	function a(t) {
		if (Object.keys) return Object.keys(t);
		var e = [];
		return L(t, function(t, n) {
			e.push(n)
		}), e
	}
	function u(t, e) {
		if (Array.prototype.indexOf) return t.indexOf(e, Number(arguments[2]) || 0);
		var n = t.length >>> 0,
			r = Number(arguments[2]) || 0;
		for (r = r < 0 ? Math.ceil(r) : Math.floor(r), r < 0 && (r += n); r < n; r++) if (r in t && t[r] === e) return r;
		return -1
	}
	function s(t, e, n, r) {
		var i, s = o(n, r),
			c = {}, l = [];
		for (var f in s) if (s[f] && s[f].params && (i = a(s[f].params), i.length)) for (var h in i) u(l, i[h]) >= 0 || (l.push(i[h]), c[i[h]] = t[i[h]]);
		return B({}, c, e)
	}
	function c(t, e, n) {
		if (!n) {
			n = [];
			for (var r in t) n.push(r)
		}
		for (var i = 0; i < n.length; i++) {
			var o = n[i];
			if (t[o] != e[o]) return !1
		}
		return !0
	}
	function l(t, e) {
		var n = {};
		return L(t, function(t) {
			n[t] = e[t]
		}), n
	}
	function f(t) {
		var e = {}, n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
		return L(n, function(n) {
			n in t && (e[n] = t[n])
		}), e
	}
	function h(t) {
		var e = {}, n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
		for (var r in t) - 1 == u(n, r) && (e[r] = t[r]);
		return e
	}
	function p(t, e) {
		var n = q(t),
			r = n ? [] : {};
		return L(t, function(t, i) {
			e(t, i) && (r[n ? r.length : i] = t)
		}), r
	}
	function d(t, e) {
		var n = q(t) ? [] : {};
		return L(t, function(t, r) {
			n[r] = e(t, r)
		}), n
	}
	function v(t, e) {
		var r = 1,
			o = 2,
			s = {}, c = [],
			l = s,
			f = B(t.when(s), {
				$$promises: s,
				$$values: s
			});
		this.study = function(s) {
			function p(t, n) {
				if (g[n] !== o) {
					if (m.push(n), g[n] === r) throw m.splice(0, u(m, n)), new Error("Cyclic dependency: " + m.join(" -> "));
					if (g[n] = r, V(t)) $.push(n, [function() {
						return e.get(t)
					}], c);
					else {
						var i = e.annotate(t);
						L(i, function(t) {
							t !== n && s.hasOwnProperty(t) && p(s[t], t)
						}), $.push(n, t, i)
					}
					m.pop(), g[n] = o
				}
			}
			function d(t) {
				return U(t) && t.then && t.$$promises
			}
			if (!U(s)) throw new Error("'invocables' must be an object");
			var v = a(s || {}),
				$ = [],
				m = [],
				g = {};
			return L(s, p), s = m = g = null,
			function(r, o, a) {
				function u() {
					--y || (b || i(g, o.$$values), p.$$values = g, p.$$promises = p.$$promises || !0, delete p.$$inheritedValues, c.resolve(g))
				}
				function s(t) {
					p.$$failure = t, c.reject(t)
				}
				if (d(r) && a === n && (a = o, o = r, r = null), r) {
					if (!U(r)) throw new Error("'locals' must be an object")
				} else r = l;
				if (o) {
					if (!d(o)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
				} else o = f;
				var c = t.defer(),
					p = c.promise,
					m = p.$$promises = {}, g = B({}, r),
					y = 1 + $.length / 3,
					b = !1;
				if (P(o.$$failure)) return s(o.$$failure), p;
				o.$$inheritedValues && i(g, h(o.$$inheritedValues, v)), B(m, o.$$promises), o.$$values ? (b = i(g, h(o.$$values, v)), p.$$inheritedValues = h(o.$$values, v), u()) : (o.$$inheritedValues && (p.$$inheritedValues = h(o.$$inheritedValues, v)), o.then(u, s));
				for (var w = 0, x = $.length; w < x; w += 3) r.hasOwnProperty($[w]) ? u() : function(n, i, o) {
					function c(t) {
						f.reject(t), s(t)
					}
					function l() {
						if (!P(p.$$failure)) try {
							f.resolve(e.invoke(i, a, g)), f.promise.then(function(t) {
								g[n] = t, u()
							}, c)
						} catch (t) {
							c(t)
						}
					}
					var f = t.defer(),
						h = 0;
					L(o, function(t) {
						m.hasOwnProperty(t) && !r.hasOwnProperty(t) && (h++, m[t].then(function(e) {
							g[t] = e, --h || l()
						}, c))
					}), h || l(), m[n] = f.promise
				}($[w], $[w + 1], $[w + 2]);
				return p
			}
		}, this.resolve = function(t, e, n, r) {
			return this.study(t)(e, n, r)
		}
	}
	function $(t, e, n) {
		this.fromConfig = function(t, e, n) {
			return P(t.template) ? this.fromString(t.template, e) : P(t.templateUrl) ? this.fromUrl(t.templateUrl, e) : P(t.templateProvider) ? this.fromProvider(t.templateProvider, e, n) : null
		}, this.fromString = function(t, e) {
			return N(t) ? t(e) : t
		}, this.fromUrl = function(n, r) {
			return N(n) && (n = n(r)), null == n ? null : t.get(n, {
				cache: e,
				headers: {
					Accept: "text/html"
				}
			}).then(function(t) {
				return t.data
			})
		}, this.fromProvider = function(t, e, r) {
			return n.invoke(t, null, r || {
				params: e
			})
		}
	}
	function m(t, e, i) {
		function o(e, n, r, i) {
			if ($.push(e), d[e]) return d[e];
			if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(e)) throw new Error("Invalid parameter name '" + e + "' in pattern '" + t + "'");
			if (v[e]) throw new Error("Duplicate parameter name '" + e + "' in pattern '" + t + "'");
			return v[e] = new W.Param(e, n, r, i), v[e]
		}
		function a(t, e, n, r) {
			var i = ["", ""],
				o = t.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
			if (!e) return o;
			switch (n) {
				case !1:
					i = ["(", ")" + (r ? "?" : "")];
					break;
				case !0:
					o = o.replace(/\/$/, ""), i = ["(?:/(", ")|/)?"];
					break;
				default:
					i = ["(" + n + "|", ")?"]
			}
			return o + i[0] + e + i[1]
		}
		function u(i, o) {
			var a, u, s, c, l;
			return a = i[2] || i[3], l = e.params[a], s = t.substring(h, i.index), u = o ? i[4] : i[4] || ("*" == i[1] ? ".*" : null), u && (c = W.type(u) || r(W.type("string"), {
				pattern: new RegExp(u, e.caseInsensitive ? "i" : n)
			})), {
				id: a,
				regexp: u,
				segment: s,
				type: c,
				cfg: l
			}
		}
		e = B({
			params: {}
		}, U(e) ? e : {});
		var s, c = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
			l = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
			f = "^",
			h = 0,
			p = this.segments = [],
			d = i ? i.params : {}, v = this.params = i ? i.params.$$new() : new W.ParamSet,
			$ = [];
		this.source = t;
		for (var m, g, y;
		(s = c.exec(t)) && (m = u(s, !1), !(m.segment.indexOf("?") >= 0));) g = o(m.id, m.type, m.cfg, "path"), f += a(m.segment, g.type.pattern.source, g.squash, g.isOptional), p.push(m.segment), h = c.lastIndex;
		y = t.substring(h);
		var b = y.indexOf("?");
		if (b >= 0) {
			var w = this.sourceSearch = y.substring(b);
			if (y = y.substring(0, b), this.sourcePath = t.substring(0, h + b), w.length > 0) for (h = 0; s = l.exec(w);) m = u(s, !0), g = o(m.id, m.type, m.cfg, "search"), h = c.lastIndex
		} else this.sourcePath = t, this.sourceSearch = "";
		f += a(y) + (!1 === e.strict ? "/?" : "") + "$", p.push(y), this.regexp = new RegExp(f, e.caseInsensitive ? "i" : n), this.prefix = p[0], this.$$paramNames = $
	}
	function g(t) {
		B(this, t)
	}
	function y() {
		function t(t) {
			return null != t ? t.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : t
		}
		function i(t) {
			return null != t ? t.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : t
		}
		function o() {
			return {
				strict: v,
				caseInsensitive: h
			}
		}
		function s(t) {
			return N(t) || q(t) && N(t[t.length - 1])
		}
		function c() {
			for (; x.length;) {
				var t = x.shift();
				if (t.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
				e.extend(b[t.name], f.invoke(t.def))
			}
		}
		function l(t) {
			B(this, t || {})
		}
		W = this;
		var f, h = !1,
			v = !0,
			$ = !1,
			b = {}, w = !0,
			x = [],
			_ = {
				string: {
					encode: t,
					decode: i,
					is: function(t) {
						return null == t || !P(t) || "string" == typeof t
					},
					pattern: /[^\/]*/
				},
				int: {
					encode: t,
					decode: function(t) {
						return parseInt(t, 10)
					},
					is: function(t) {
						return P(t) && this.decode(t.toString()) === t
					},
					pattern: /\d+/
				},
				bool: {
					encode: function(t) {
						return t ? 1 : 0
					},
					decode: function(t) {
						return 0 !== parseInt(t, 10)
					},
					is: function(t) {
						return !0 === t || !1 === t
					},
					pattern: /0|1/
				},
				date: {
					encode: function(t) {
						return this.is(t) ? [t.getFullYear(), ("0" + (t.getMonth() + 1)).slice(-2), ("0" + t.getDate()).slice(-2)].join("-") : n
					},
					decode: function(t) {
						if (this.is(t)) return t;
						var e = this.capture.exec(t);
						return e ? new Date(e[1], e[2] - 1, e[3]) : n
					},
					is: function(t) {
						return t instanceof Date && !isNaN(t.valueOf())
					},
					equals: function(t, e) {
						return this.is(t) && this.is(e) && t.toISOString() === e.toISOString()
					},
					pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
					capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
				},
				json: {
					encode: e.toJson,
					decode: e.fromJson,
					is: e.isObject,
					equals: e.equals,
					pattern: /[^\/]*/
				},
				any: {
					encode: e.identity,
					decode: e.identity,
					equals: e.equals,
					pattern: /.*/
				}
			};
		y.$$getDefaultValue = function(t) {
			if (!s(t.value)) return t.value;
			if (!f) throw new Error("Injectable functions cannot be called at configuration time");
			return f.invoke(t.value)
		}, this.caseInsensitive = function(t) {
			return P(t) && (h = t), h
		}, this.strictMode = function(t) {
			return P(t) && (v = t), v
		}, this.defaultSquashPolicy = function(t) {
			if (!P(t)) return $;
			if (!0 !== t && !1 !== t && !V(t)) throw new Error("Invalid squash policy: " + t + ". Valid policies: false, true, arbitrary-string");
			return $ = t, t
		}, this.compile = function(t, e) {
			return new m(t, B(o(), e))
		}, this.isMatcher = function(t) {
			if (!U(t)) return !1;
			var e = !0;
			return L(m.prototype, function(n, r) {
				N(n) && (e = e && P(t[r]) && N(t[r]))
			}), e
		}, this.type = function(t, e, n) {
			if (!P(e)) return b[t];
			if (b.hasOwnProperty(t)) throw new Error("A type named '" + t + "' has already been defined.");
			return b[t] = new g(B({
				name: t
			}, e)), n && (x.push({
				name: t,
				def: n
			}), w || c()), this
		}, L(_, function(t, e) {
			b[e] = new g(B({
				name: e
			}, t))
		}), b = r(b, {}), this.$get = ["$injector", function(t) {
			return f = t, w = !1, c(), L(_, function(t, e) {
				b[e] || (b[e] = new g(t))
			}), this
		}], this.Param = function(t, r, i, o) {
			function c() {
				if (!f) throw new Error("Injectable functions cannot be called at configuration time");
				var t = f.invoke(i.$$fn);
				if (null !== t && t !== n && !v.type.is(t)) throw new Error("Default value (" + t + ") for parameter '" + v.id + "' is not an instance of Type (" + v.type.name + ")");
				return t
			}
			function l(t) {
				function e(t) {
					return function(e) {
						return e.from === t
					}
				}
				return t = function(t) {
					var n = d(p(v.replace, e(t)), function(t) {
						return t.to
					});
					return n.length ? n[0] : t
				}(t), P(t) ? v.type.$normalize(t) : c()
			}
			function h() {
				return "{Param:" + t + " " + r + " squash: '" + w + "' optional: " + y + "}"
			}
			var v = this;
			i = function(t) {
				var e = U(t) ? a(t) : [];
				return -1 === u(e, "value") && -1 === u(e, "type") && -1 === u(e, "squash") && -1 === u(e, "array") && (t = {
					value: t
				}), t.$$fn = s(t.value) ? t.value : function() {
					return t.value
				}, t
			}(i), r = function(n, r, i) {
				if (n.type && r) throw new Error("Param '" + t + "' has two type configurations.");
				return r || (n.type ? e.isString(n.type) ? b[n.type] : n.type instanceof g ? n.type : new g(n.type) : "config" === i ? b.any : b.string)
			}(i, r, o);
			var m = function() {
				var e = {
					array: "search" === o && "auto"
				}, n = t.match(/\[\]$/) ? {
					array: !0
				} : {};
				return B(e, n, i).array
			}();
			r = m ? r.$asArray(m, "search" === o) : r, "string" !== r.name || m || "path" !== o || i.value !== n || (i.value = "");
			var y = i.value !== n,
				w = function(t, e) {
					var n = t.squash;
					if (!e || !1 === n) return !1;
					if (!P(n) || null == n) return $;
					if (!0 === n || V(n)) return n;
					throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
				}(i, y),
				x = function(t, e, r, i) {
					var o, a, s = [{
						from: "",
						to: r || e ? n : ""
					}, {
						from: null,
						to: r || e ? n : ""
					}];
					return o = q(t.replace) ? t.replace : [], V(i) && o.push({
						from: i,
						to: n
					}), a = d(o, function(t) {
						return t.from
					}), p(s, function(t) {
						return -1 === u(a, t.from)
					}).concat(o)
				}(i, m, y, w);
			B(this, {
				id: t,
				type: r,
				location: o,
				array: m,
				squash: w,
				replace: x,
				isOptional: y,
				value: l,
				dynamic: n,
				config: i,
				toString: h
			})
		}, l.prototype = {
			$$new: function() {
				return r(this, B(new l, {
					$$parent: this
				}))
			},
			$$keys: function() {
				for (var t = [], e = [], n = this, r = a(l.prototype); n;) e.push(n), n = n.$$parent;
				return e.reverse(), L(e, function(e) {
					L(a(e), function(e) {
						-1 === u(t, e) && -1 === u(r, e) && t.push(e)
					})
				}), t
			},
			$$values: function(t) {
				var e = {}, n = this;
				return L(n.$$keys(), function(r) {
					e[r] = n[r].value(t && t[r])
				}), e
			},
			$$equals: function(t, e) {
				var n = !0,
					r = this;
				return L(r.$$keys(), function(i) {
					var o = t && t[i],
						a = e && e[i];
					r[i].type.equals(o, a) || (n = !1)
				}), n
			},
			$$validates: function(t) {
				var r, i, o, a, u, s = this.$$keys();
				for (r = 0; r < s.length && (i = this[s[r]], (o = t[s[r]]) !== n && null !== o || !i.isOptional); r++) {
					if (a = i.type.$normalize(o), !i.type.is(a)) return !1;
					if (u = i.type.encode(a), e.isString(u) && !i.type.pattern.exec(u)) return !1
				}
				return !0
			},
			$$parent: n
		}, this.ParamSet = l
	}
	function b(t, r) {
		function i(t) {
			var e = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(t.source);
			return null != e ? e[1].replace(/\\(.)/g, "$1") : ""
		}
		function o(t, e) {
			return t.replace(/\$(\$|\d{1,2})/, function(t, n) {
				return e["$" === n ? 0 : Number(n)]
			})
		}
		function a(t, e, n) {
			if (!n) return !1;
			var r = t.invoke(e, e, {
				$match: n
			});
			return !P(r) || r
		}
		function u(r, i, o, a, u) {
			function h(t, e, n) {
				return "/" === $ ? t : e ? $.slice(0, -1) + t : n ? $.slice(1) + t : t
			}
			function p(t) {
				function e(t) {
					var e = t(o, r);
					return !!e && (V(e) && r.replace().url(e), !0)
				}
				if (!t || !t.defaultPrevented) {
					v && r.url();
					v = n;
					var i, a = c.length;
					for (i = 0; i < a; i++) if (e(c[i])) return;
					l && e(l)
				}
			}
			function d() {
				return s = s || i.$on("$locationChangeSuccess", p)
			}
			var v, $ = a.baseHref(),
				m = r.url();
			return f || d(), {
				sync: function() {
					p()
				},
				listen: function() {
					return d()
				},
				update: function(t) {
					if (t) return void(m = r.url());
					r.url() !== m && (r.url(m), r.replace())
				},
				push: function(t, e, i) {
					var o = t.format(e || {});
					null !== o && e && e["#"] && (o += "#" + e["#"]), r.url(o), v = i && i.$$avoidResync ? r.url() : n, i && i.replace && r.replace()
				},
				href: function(n, i, o) {
					if (!n.validates(i)) return null;
					var a = t.html5Mode();
					e.isObject(a) && (a = a.enabled), a = a && u.history;
					var s = n.format(i);
					if (o = o || {}, a || null === s || (s = "#" + t.hashPrefix() + s), null !== s && i && i["#"] && (s += "#" + i["#"]), s = h(s, a, o.absolute), !o.absolute || !s) return s;
					var c = !a && s ? "/" : "",
						l = r.port();
					return l = 80 === l || 443 === l ? "" : ":" + l, [r.protocol(), "://", r.host(), l, c, s].join("")
				}
			}
		}
		var s, c = [],
			l = null,
			f = !1;
		this.rule = function(t) {
			if (!N(t)) throw new Error("'rule' must be a function");
			return c.push(t), this
		}, this.otherwise = function(t) {
			if (V(t)) {
				var e = t;
				t = function() {
					return e
				}
			} else if (!N(t)) throw new Error("'rule' must be a function");
			return l = t, this
		}, this.when = function(t, e) {
			var n, u = V(e);
			if (V(t) && (t = r.compile(t)), !u && !N(e) && !q(e)) throw new Error("invalid 'handler' in when()");
			var s = {
				matcher: function(t, e) {
					return u && (n = r.compile(e), e = ["$match", function(t) {
						return n.format(t)
					}]), B(function(n, r) {
						return a(n, e, t.exec(r.path(), r.search()))
					}, {
						prefix: V(t.prefix) ? t.prefix : ""
					})
				},
				regex: function(t, e) {
					if (t.global || t.sticky) throw new Error("when() RegExp must not be global or sticky");
					return u && (n = e, e = ["$match", function(t) {
						return o(n, t)
					}]), B(function(n, r) {
						return a(n, e, t.exec(r.path()))
					}, {
						prefix: i(t)
					})
				}
			}, c = {
				matcher: r.isMatcher(t),
				regex: t instanceof RegExp
			};
			for (var l in c) if (c[l]) return this.rule(s[l](t, e));
			throw new Error("invalid 'what' in when()")
		}, this.deferIntercept = function(t) {
			t === n && (t = !0), f = t
		}, this.$get = u, u.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"]
	}
	function w(t, i) {
		function o(t) {
			return 0 === t.indexOf(".") || 0 === t.indexOf("^")
		}
		function h(t, e) {
			if (!t) return n;
			var r = V(t),
				i = r ? t : t.name;
			if (o(i)) {
				if (!e) throw new Error("No reference point given for path '" + i + "'");
				e = h(e);
				for (var a = i.split("."), u = 0, s = a.length, c = e; u < s; u++) if ("" !== a[u] || 0 !== u) {
					if ("^" !== a[u]) break;
					if (!c.parent) throw new Error("Path '" + i + "' not valid for state '" + e.name + "'");
					c = c.parent
				} else c = e;
				a = a.slice(u).join("."), i = c.name + (c.name && a ? "." : "") + a
			}
			var l = S[i];
			return !l || !r && (r || l !== t && l.self !== t) ? n : l
		}
		function p(t, e) {
			E[t] || (E[t] = []), E[t].push(e)
		}
		function v(t) {
			for (var e = E[t] || []; e.length;) $(e.shift())
		}
		function $(e) {
			e = r(e, {
				self: e,
				resolve: e.resolve || {},
				toString: function() {
					return this.name
				}
			});
			var n = e.name;
			if (!V(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
			if (S.hasOwnProperty(n)) throw new Error("State '" + n + "' is already defined");
			var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : V(e.parent) ? e.parent : U(e.parent) && V(e.parent.name) ? e.parent.name : "";
			if (i && !S[i]) return p(i, e.self);
			for (var o in k) N(k[o]) && (e[o] = k[o](e, k.$delegates[o]));
			return S[n] = e, !e[A] && e.url && t.when(e.url, ["$match", "$stateParams", function(t, n) {
				C.$current.navigable == e && c(t, n) || C.transitionTo(e, t, {
					inherit: !0,
					location: !1
				})
			}]), v(n), e
		}
		function m(t) {
			return t.indexOf("*") > -1
		}
		function g(t) {
			for (var e = t.split("."), n = C.$current.name.split("."), r = 0, i = e.length; r < i; r++) "*" === e[r] && (n[r] = "*");
			return "**" === e[0] && (n = n.slice(u(n, e[1])), n.unshift("**")), "**" === e[e.length - 1] && (n.splice(u(n, e[e.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), e.length == n.length && n.join("") === e.join("")
		}
		function y(t, e) {
			return V(t) && !P(e) ? k[t] : N(e) && V(t) ? (k[t] && !k.$delegates[t] && (k.$delegates[t] = k[t]), k[t] = e, this) : this
		}
		function b(t, e) {
			return U(t) ? e = t : e.name = t, $(e), this
		}
		function w(t, i, o, u, f, p, v, $, y) {
			function b(e, n, r, o) {
				var a = t.$broadcast("$stateNotFound", e, n, r);
				if (a.defaultPrevented) return v.update(), O;
				if (!a.retry) return null;
				if (o.$retry) return v.update(), j;
				var u = C.transition = i.when(a.retry);
				return u.then(function() {
					return u !== C.transition ? E : (e.options.$retry = !0, C.transitionTo(e.to, e.toParams, e.options))
				}, function() {
					return O
				}), v.update(), u
			}
			function w(t, n, r, a, s, c) {
				function h() {
					var n = [];
					return L(t.views, function(r, i) {
						var a = r.resolve && r.resolve !== t.resolve ? r.resolve : {};
						a.$template = [function() {
							return o.load(i, {
								view: r,
								locals: s.globals,
								params: p,
								notify: c.notify
							}) || ""
						}], n.push(f.resolve(a, s.globals, s.resolve, t).then(function(n) {
							if (N(r.controllerProvider) || q(r.controllerProvider)) {
								var o = e.extend({}, a, s.globals);
								n.$$controller = u.invoke(r.controllerProvider, null, o)
							} else n.$$controller = r.controller;
							n.$$state = t, n.$$controllerAs = r.controllerAs, n.$$resolveAs = r.resolveAs, s[i] = n
						}))
					}), i.all(n).then(function() {
						return s.globals
					})
				}
				var p = r ? n : l(t.params.$$keys(), n),
					d = {
						$stateParams: p
					};
				s.resolve = f.resolve(t.resolve, d, s.resolve, t);
				var v = [s.resolve.then(function(t) {
					s.globals = t
				})];
				return a && v.push(a), i.all(v).then(h).then(function(t) {
					return s
				})
			}
			var E = i.reject(new Error("transition superseded")),
				k = i.reject(new Error("transition prevented")),
				O = i.reject(new Error("transition aborted")),
				j = i.reject(new Error("transition failed"));
			return _.locals = {
				resolve: null,
				globals: {
					$stateParams: {}
				}
			}, C = {
				params: {},
				current: _.self,
				$current: _,
				transition: null
			}, C.reload = function(t) {
				return C.transitionTo(C.current, p, {
					reload: t || !0,
					inherit: !1,
					notify: !0
				})
			}, C.go = function(t, e, n) {
				return C.transitionTo(t, e, B({
					inherit: !0,
					relative: C.$current
				}, n))
			}, C.transitionTo = function(e, n, o) {
				n = n || {}, o = B({
					location: !0,
					inherit: !1,
					relative: null,
					notify: !0,
					reload: !1,
					$retry: !1
				}, o || {});
				var a, c = C.$current,
					f = C.params,
					d = c.path,
					$ = h(e, o.relative),
					m = n["#"];
				if (!P($)) {
					var g = {
						to: e,
						toParams: n,
						options: o
					}, y = b(g, c.self, f, o);
					if (y) return y;
					if (e = g.to, n = g.toParams, o = g.options, $ = h(e, o.relative), !P($)) {
						if (!o.relative) throw new Error("No such state '" + e + "'");
						throw new Error("Could not resolve '" + e + "' from state '" + o.relative + "'")
					}
				}
				if ($[A]) throw new Error("Cannot transition to abstract state '" + e + "'");
				if (o.inherit && (n = s(p, n || {}, C.$current, $)), !$.params.$$validates(n)) return j;
				n = $.params.$$values(n), e = $;
				var S = e.path,
					O = 0,
					T = S[O],
					I = _.locals,
					M = [];
				if (o.reload) {
					if (V(o.reload) || U(o.reload)) {
						if (U(o.reload) && !o.reload.name) throw new Error("Invalid reload state object");
						var F = !0 === o.reload ? d[0] : h(o.reload);
						if (o.reload && !F) throw new Error("No such reload state '" + (V(o.reload) ? o.reload : o.reload.name) + "'");
						for (; T && T === d[O] && T !== F;) I = M[O] = T.locals, O++, T = S[O]
					}
				} else for (; T && T === d[O] && T.ownParams.$$equals(n, f);) I = M[O] = T.locals, O++, T = S[O];
				if (x(e, n, c, f, I, o)) return m && (n["#"] = m), C.params = n, H(C.params, p), H(l(e.params.$$keys(), p), e.locals.globals.$stateParams), o.location && e.navigable && e.navigable.url && (v.push(e.navigable.url, n, {
					$$avoidResync: !0,
					replace: "replace" === o.location
				}), v.update(!0)), C.transition = null, i.when(C.current);
				if (n = l(e.params.$$keys(), n || {}), m && (n["#"] = m), o.notify && t.$broadcast("$stateChangeStart", e.self, n, c.self, f, o).defaultPrevented) return t.$broadcast("$stateChangeCancel", e.self, n, c.self, f), null == C.transition && v.update(), k;
				for (var D = i.when(I), R = O; R < S.length; R++, T = S[R]) I = M[R] = r(I), D = w(T, n, T === e, D, I, o);
				var N = C.transition = D.then(function() {
					var r, i, a;
					if (C.transition !== N) return E;
					for (r = d.length - 1; r >= O; r--) a = d[r], a.self.onExit && u.invoke(a.self.onExit, a.self, a.locals.globals), a.locals = null;
					for (r = O; r < S.length; r++) i = S[r], i.locals = M[r], i.self.onEnter && u.invoke(i.self.onEnter, i.self, i.locals.globals);
					return C.transition !== N ? E : (C.$current = e, C.current = e.self, C.params = n, H(C.params, p), C.transition = null, o.location && e.navigable && v.push(e.navigable.url, e.navigable.locals.globals.$stateParams, {
						$$avoidResync: !0,
						replace: "replace" === o.location
					}), o.notify && t.$broadcast("$stateChangeSuccess", e.self, n, c.self, f), v.update(!0), C.current)
				}).then(null, function(r) {
					return C.transition !== N ? E : (C.transition = null, a = t.$broadcast("$stateChangeError", e.self, n, c.self, f, r), a.defaultPrevented || v.update(), i.reject(r))
				});
				return N
			}, C.is = function(t, e, r) {
				r = B({
					relative: C.$current
				}, r || {});
				var i = h(t, r.relative);
				return P(i) ? C.$current === i && (!e || c(i.params.$$values(e), p)) : n
			}, C.includes = function(t, e, r) {
				if (r = B({
					relative: C.$current
				}, r || {}), V(t) && m(t)) {
					if (!g(t)) return !1;
					t = C.$current.name
				}
				var i = h(t, r.relative);
				return P(i) ? !! P(C.$current.includes[i.name]) && (!e || c(i.params.$$values(e), p, a(e))) : n
			}, C.href = function(t, e, r) {
				r = B({
					lossy: !0,
					inherit: !0,
					absolute: !1,
					relative: C.$current
				}, r || {});
				var i = h(t, r.relative);
				if (!P(i)) return null;
				r.inherit && (e = s(p, e || {}, C.$current, i));
				var o = i && r.lossy ? i.navigable : i;
				return o && o.url !== n && null !== o.url ? v.href(o.url, l(i.params.$$keys().concat("#"), e || {}), {
					absolute: r.absolute
				}) : null
			}, C.get = function(t, e) {
				if (0 === arguments.length) return d(a(S), function(t) {
					return S[t].self
				});
				var n = h(t, e || C.$current);
				return n && n.self ? n.self : null
			}, C
		}
		function x(t, e, n, r, i, o) {
			if (!o.reload && t === n && (i === n.locals || !1 === t.self.reloadOnSearch && function(t, e, n) {
				function r(e) {
					return "search" != t.params[e].location
				}
				var i = t.params.$$keys().filter(r),
					o = f.apply({}, [t.params].concat(i));
				return new W.ParamSet(o).$$equals(e, n)
			}(n, r, e))) return !0
		}
		var _, C, S = {}, E = {}, A = "abstract",
			k = {
				parent: function(t) {
					if (P(t.parent) && t.parent) return h(t.parent);
					var e = /^(.+)\.[^.]+$/.exec(t.name);
					return e ? h(e[1]) : _
				},
				data: function(t) {
					return t.parent && t.parent.data && (t.data = t.self.data = r(t.parent.data, t.data)), t.data
				},
				url: function(t) {
					var e = t.url,
						n = {
							params: t.params || {}
						};
					if (V(e)) return "^" == e.charAt(0) ? i.compile(e.substring(1), n) : (t.parent.navigable || _).url.concat(e, n);
					if (!e || i.isMatcher(e)) return e;
					throw new Error("Invalid url '" + e + "' in state '" + t + "'")
				},
				navigable: function(t) {
					return t.url ? t : t.parent ? t.parent.navigable : null
				},
				ownParams: function(t) {
					var e = t.url && t.url.params || new W.ParamSet;
					return L(t.params || {}, function(t, n) {
						e[n] || (e[n] = new W.Param(n, null, t, "config"))
					}), e
				},
				params: function(t) {
					var e = f(t.ownParams, t.ownParams.$$keys());
					return t.parent && t.parent.params ? B(t.parent.params.$$new(), e) : new W.ParamSet
				},
				views: function(t) {
					var e = {};
					return L(P(t.views) ? t.views : {
						"": t
					}, function(n, r) {
						r.indexOf("@") < 0 && (r += "@" + t.parent.name), n.resolveAs = n.resolveAs || t.resolveAs || "$resolve", e[r] = n
					}), e
				},
				path: function(t) {
					return t.parent ? t.parent.path.concat(t) : []
				},
				includes: function(t) {
					var e = t.parent ? B({}, t.parent.includes) : {};
					return e[t.name] = !0, e
				},
				$delegates: {}
			};
		_ = $({
			name: "",
			url: "^",
			views: null,
			abstract: !0
		}), _.navigable = null, this.decorator = y, this.state = b, this.$get = w, w.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
	}
	function x() {
		function t(t, e) {
			return {
				load: function(t, n) {
					var r;
					return n = B({
						template: null,
						controller: null,
						view: null,
						locals: null,
						notify: !0,
						async: !0,
						params: {}
					}, n), n.view && (r = e.fromConfig(n.view, n.params, n.locals)), r
				}
			}
		}
		this.$get = t, t.$inject = ["$rootScope", "$templateFactory"]
	}
	function _() {
		var t = !1;
		this.useAnchorScroll = function() {
			t = !0
		}, this.$get = ["$anchorScroll", "$timeout", function(e, n) {
			return t ? e : function(t) {
				return n(function() {
					t[0].scrollIntoView()
				}, 0, !1)
			}
		}]
	}
	function C(t, n, r, i, o) {
		function a(t, n) {
			if (c) return {
				enter: function(t, n, r) {
					e.version.minor > 2 ? c.enter(t, null, n).then(r) : c.enter(t, null, n, r)
				},
				leave: function(t, n) {
					e.version.minor > 2 ? c.leave(t).then(n) : c.leave(t, n)
				}
			};
			if (s) {
				var r = s && s(n, t);
				return {
					enter: function(t, e, n) {
						r.enter(t, null, e), n()
					},
					leave: function(t, e) {
						r.leave(t), e()
					}
				}
			}
			return function() {
				return {
					enter: function(t, e, n) {
						e.after(t), n()
					},
					leave: function(t, e) {
						t.remove(), e()
					}
				}
			}()
		}
		var u = function() {
			return n.has ? function(t) {
				return n.has(t) ? n.get(t) : null
			} : function(t) {
				try {
					return n.get(t)
				} catch (t) {
					return null
				}
			}
		}(),
			s = u("$animator"),
			c = u("$animate");
		return {
			restrict: "ECA",
			terminal: !0,
			priority: 400,
			transclude: "element",
			compile: function(n, u, s) {
				return function(n, u, c) {
					function l() {
						if (h && (h.remove(), h = null), d && (d.$destroy(), d = null), p) {
							var t = p.data("$uiViewAnim");
							g.leave(p, function() {
								t.$$animLeave.resolve(), h = null
							}), h = p, p = null
						}
					}
					function f(a) {
						var f, h = E(n, c, u, i),
							y = h && t.$current && t.$current.locals[h];
						if (a || y !== v) {
							f = n.$new(), v = t.$current.locals[h], f.$emit("$viewContentLoading", h);
							var b = s(f, function(t) {
								var i = o.defer(),
									a = o.defer(),
									s = {
										$animEnter: i.promise,
										$animLeave: a.promise,
										$$animLeave: a
									};
								t.data("$uiViewAnim", s), g.enter(t, u, function() {
									i.resolve(), d && d.$emit("$viewContentAnimationEnded"), (e.isDefined(m) && !m || n.$eval(m)) && r(t)
								}), l()
							});
							p = b, d = f, d.$emit("$viewContentLoaded", h), d.$eval($)
						}
					}
					var h, p, d, v, $ = c.onload || "",
						m = c.autoscroll,
						g = a(c, n);
					u.inheritedData("$uiView");
					n.$on("$stateChangeSuccess", function() {
						f(!1)
					}), f(!0)
				}
			}
		}
	}
	function S(t, n, r, i) {
		return {
			restrict: "ECA",
			priority: -400,
			compile: function(o) {
				var a = o.html();
				return function(o, u, s) {
					var c = r.$current,
						l = E(o, s, u, i),
						f = c && c.locals[l];
					if (f) {
						u.data("$uiView", {
							name: l,
							state: f.$$state
						}), u.html(f.$template ? f.$template : a);
						var h = e.extend({}, f);
						o[f.$$resolveAs] = h;
						var p = t(u.contents());
						if (f.$$controller) {
							f.$scope = o, f.$element = u;
							var d = n(f.$$controller, f);
							f.$$controllerAs && (o[f.$$controllerAs] = d, o[f.$$controllerAs][f.$$resolveAs] = h), N(d.$onInit) && d.$onInit(), u.data("$ngControllerController", d), u.children().data("$ngControllerController", d)
						}
						p(o)
					}
				}
			}
		}
	}
	function E(t, e, n, r) {
		var i = r(e.uiView || e.name || "")(t),
			o = n.inheritedData("$uiView");
		return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "")
	}
	function A(t, e) {
		var n, r = t.match(/^\s*({[^}]*})\s*$/);
		if (r && (t = e + "(" + r[1] + ")"), !(n = t.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/)) || 4 !== n.length) throw new Error("Invalid state ref '" + t + "'");
		return {
			state: n[1],
			paramExpr: n[3] || null
		}
	}
	function k(t) {
		var e = t.parent().inheritedData("$uiView");
		if (e && e.state && e.state.name) return e.state
	}
	function O(t) {
		var e = "[object SVGAnimatedString]" === Object.prototype.toString.call(t.prop("href")),
			n = "FORM" === t[0].nodeName;
		return {
			attr: n ? "action" : e ? "xlink:href" : "href",
			isAnchor: "A" === t.prop("tagName").toUpperCase(),
			clickable: !n
		}
	}
	function j(t, e, n, r, i) {
		return function(o) {
			var a = o.which || o.button,
				u = i();
			if (!(a > 1 || o.ctrlKey || o.metaKey || o.shiftKey || t.attr("target"))) {
				var s = n(function() {
					e.go(u.state, u.params, u.options)
				});
				o.preventDefault();
				var c = r.isAnchor && !u.href ? 1 : 0;
				o.preventDefault = function() {
					c-- <= 0 && n.cancel(s)
				}
			}
		}
	}
	function T(t, e) {
		return {
			relative: k(t) || e.$current,
			inherit: !0
		}
	}
	function I(t, n) {
		return {
			restrict: "A",
			require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
			link: function(r, i, o, a) {
				var u, s = A(o.uiSref, t.current.name),
					c = {
						state: s.state,
						href: null,
						params: null
					}, l = O(i),
					f = a[1] || a[0],
					h = null;
				c.options = B(T(i, t), o.uiSrefOpts ? r.$eval(o.uiSrefOpts) : {});
				var p = function(n) {
					n && (c.params = e.copy(n)), c.href = t.href(s.state, c.params, c.options), h && h(), f && (h = f.$$addStateInfo(s.state, c.params)), null !== c.href && o.$set(l.attr, c.href)
				};
				s.paramExpr && (r.$watch(s.paramExpr, function(t) {
					t !== c.params && p(t)
				}, !0), c.params = e.copy(r.$eval(s.paramExpr))), p(), l.clickable && (u = j(i, t, n, l, function() {
					return c
				}), i.bind("click", u), r.$on("$destroy", function() {
					i.unbind("click", u)
				}))
			}
		}
	}
	function M(t, e) {
		return {
			restrict: "A",
			require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
			link: function(n, r, i, o) {
				function a(e) {
					h.state = e[0], h.params = e[1], h.options = e[2], h.href = t.href(h.state, h.params, h.options), p && p(), c && (p = c.$$addStateInfo(h.state, h.params)), h.href && i.$set(s.attr, h.href)
				}
				var u, s = O(r),
					c = o[1] || o[0],
					l = [i.uiState, i.uiStateParams || null, i.uiStateOpts || null],
					f = "[" + l.map(function(t) {
						return t || "null"
					}).join(", ") + "]",
					h = {
						state: null,
						params: null,
						options: null,
						href: null
					}, p = null;
				n.$watch(f, a, !0), a(n.$eval(f)), s.clickable && (u = j(r, t, e, s, function() {
					return h
				}), r.bind("click", u), n.$on("$destroy", function() {
					r.unbind("click", u)
				}))
			}
		}
	}
	function F(t, e, n) {
		return {
			restrict: "A",
			controller: ["$scope", "$element", "$attrs", "$timeout", function(e, r, i, o) {
				function a(e, n, i) {
					var o = t.get(e, k(r)),
						a = u(e, n),
						s = {
							state: o || {
								name: e
							},
							params: n,
							hash: a
						};
					return v.push(s), $[a] = i,
					function() {
						var t = v.indexOf(s); - 1 !== t && v.splice(t, 1)
					}
				}
				function u(t, n) {
					if (!V(t)) throw new Error("state should be a string");
					return U(n) ? t + z(n) : (n = e.$eval(n), U(n) ? t + z(n) : t)
				}
				function s() {
					for (var t = 0; t < v.length; t++) f(v[t].state, v[t].params) ? c(r, $[v[t].hash]) : l(r, $[v[t].hash]), h(v[t].state, v[t].params) ? c(r, p) : l(r, p)
				}
				function c(t, e) {
					o(function() {
						t.addClass(e)
					})
				}
				function l(t, e) {
					t.removeClass(e)
				}
				function f(e, n) {
					return t.includes(e.name, n)
				}
				function h(e, n) {
					return t.is(e.name, n)
				}
				var p, d, v = [],
					$ = {};
				p = n(i.uiSrefActiveEq || "", !1)(e);
				try {
					d = e.$eval(i.uiSrefActive)
				} catch (t) {}
				d = d || n(i.uiSrefActive || "", !1)(e), U(d) && L(d, function(n, r) {
					if (V(n)) {
						var i = A(n, t.current.name);
						a(i.state, e.$eval(i.paramExpr), r)
					}
				}), this.$$addStateInfo = function(t, e) {
					if (!(U(d) && v.length > 0)) {
						var n = a(t, e, d);
						return s(), n
					}
				}, e.$on("$stateChangeSuccess", s), s()
			}]
		}
	}
	function D(t) {
		var e = function(e, n) {
			return t.is(e, n)
		};
		return e.$stateful = !0, e
	}
	function R(t) {
		var e = function(e, n, r) {
			return t.includes(e, n, r)
		};
		return e.$stateful = !0, e
	}
	var P = e.isDefined,
		N = e.isFunction,
		V = e.isString,
		U = e.isObject,
		q = e.isArray,
		L = e.forEach,
		B = e.extend,
		H = e.copy,
		z = e.toJson;
	e.module("ui.router.util", ["ng"]), e.module("ui.router.router", ["ui.router.util"]), e.module("ui.router.state", ["ui.router.router", "ui.router.util"]), e.module("ui.router", ["ui.router.state"]), e.module("ui.router.compat", ["ui.router"]), v.$inject = ["$q", "$injector"], e.module("ui.router.util").service("$resolve", v), $.$inject = ["$http", "$templateCache", "$injector"], e.module("ui.router.util").service("$templateFactory", $);
	var W;
	m.prototype.concat = function(t, e) {
		var n = {
			caseInsensitive: W.caseInsensitive(),
			strict: W.strictMode(),
			squash: W.defaultSquashPolicy()
		};
		return new m(this.sourcePath + t + this.sourceSearch, B(n, e), this)
	}, m.prototype.toString = function() {
		return this.source
	}, m.prototype.exec = function(t, e) {
		var n = this.regexp.exec(t);
		if (!n) return null;
		e = e || {};
		var r, i, o, a = this.parameters(),
			u = a.length,
			s = this.segments.length - 1,
			c = {};
		if (s !== n.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
		var l, f;
		for (r = 0; r < s; r++) {
			for (o = a[r], l = this.params[o], f = n[r + 1], i = 0; i < l.replace.length; i++) l.replace[i].from === f && (f = l.replace[i].to);
			f && !0 === l.array && (f = function(t) {
				function e(t) {
					return t.split("").reverse().join("")
				}
				function n(t) {
					return t.replace(/\\-/g, "-")
				}
				return d(d(e(t).split(/-(?!\\)/), e), n).reverse()
			}(f)), P(f) && (f = l.type.decode(f)), c[o] = l.value(f)
		}
		for (; r < u; r++) {
			for (o = a[r], c[o] = this.params[o].value(e[o]), l = this.params[o], f = e[o], i = 0; i < l.replace.length; i++) l.replace[i].from === f && (f = l.replace[i].to);
			P(f) && (f = l.type.decode(f)), c[o] = l.value(f)
		}
		return c
	}, m.prototype.parameters = function(t) {
		return P(t) ? this.params[t] || null : this.$$paramNames
	}, m.prototype.validates = function(t) {
		return this.params.$$validates(t)
	}, m.prototype.format = function(t) {
		function e(t) {
			return encodeURIComponent(t).replace(/-/g, function(t) {
				return "%5C%" + t.charCodeAt(0).toString(16).toUpperCase()
			})
		}
		t = t || {};
		var n = this.segments,
			r = this.parameters(),
			i = this.params;
		if (!this.validates(t)) return null;
		var o, a = !1,
			u = n.length - 1,
			s = r.length,
			c = n[0];
		for (o = 0; o < s; o++) {
			var l = o < u,
				f = r[o],
				h = i[f],
				p = h.value(t[f]),
				v = h.isOptional && h.type.equals(h.value(), p),
				$ = !! v && h.squash,
				m = h.type.encode(p);
			if (l) {
				var g = n[o + 1],
					y = o + 1 === u;
				if (!1 === $) null != m && (q(m) ? c += d(m, e).join("-") : c += encodeURIComponent(m)), c += g;
				else if (!0 === $) {
					var b = c.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
					c += g.match(b)[1]
				} else V($) && (c += $ + g);
				y && !0 === h.squash && "/" === c.slice(-1) && (c = c.slice(0, -1))
			} else {
				if (null == m || v && !1 !== $) continue;
				if (q(m) || (m = [m]), 0 === m.length) continue;
				m = d(m, encodeURIComponent).join("&" + f + "="), c += (a ? "&" : "?") + f + "=" + m, a = !0
			}
		}
		return c
	}, g.prototype.is = function(t, e) {
		return !0
	}, g.prototype.encode = function(t, e) {
		return t
	}, g.prototype.decode = function(t, e) {
		return t
	}, g.prototype.equals = function(t, e) {
		return t == e
	}, g.prototype.$subPattern = function() {
		var t = this.pattern.toString();
		return t.substr(1, t.length - 2)
	}, g.prototype.pattern = /.*/, g.prototype.toString = function() {
		return "{Type:" + this.name + "}"
	}, g.prototype.$normalize = function(t) {
		return this.is(t) ? t : this.decode(t)
	}, g.prototype.$asArray = function(t, e) {
		function r(t, e) {
			function r(t, e) {
				return function() {
					return t[e].apply(t, arguments)
				}
			}
			function i(t) {
				return q(t) ? t : P(t) ? [t] : []
			}
			function o(t) {
				switch (t.length) {
					case 0:
						return n;
					case 1:
						return "auto" === e ? t[0] : t;
					default:
						return t
				}
			}
			function a(t) {
				return !t
			}
			function u(t, e) {
				return function(n) {
					if (q(n) && 0 === n.length) return n;
					n = i(n);
					var r = d(n, t);
					return !0 === e ? 0 === p(r, a).length : o(r)
				}
			}
			this.encode = u(r(t, "encode")), this.decode = u(r(t, "decode")), this.is = u(r(t, "is"), !0), this.equals = function(t) {
				return function(e, n) {
					var r = i(e),
						o = i(n);
					if (r.length !== o.length) return !1;
					for (var a = 0; a < r.length; a++) if (!t(r[a], o[a])) return !1;
					return !0
				}
			}(r(t, "equals")), this.pattern = t.pattern, this.$normalize = u(r(t, "$normalize")), this.name = t.name, this.$arrayMode = e
		}
		if (!t) return this;
		if ("auto" === t && !e) throw new Error("'auto' array mode is for query parameters only");
		return new r(this, t)
	}, e.module("ui.router.util").provider("$urlMatcherFactory", y), e.module("ui.router.util").run(["$urlMatcherFactory", function(t) {}]), b.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], e.module("ui.router.router").provider("$urlRouter", b), w.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], e.module("ui.router.state").factory("$stateParams", function() {
		return {}
	}).constant("$state.runtime", {
		autoinject: !0
	}).provider("$state", w).run(["$injector", function(t) {
		t.get("$state.runtime").autoinject && t.get("$state")
	}]), x.$inject = [], e.module("ui.router.state").provider("$view", x), e.module("ui.router.state").provider("$uiViewScroll", _), C.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate", "$q"], S.$inject = ["$compile", "$controller", "$state", "$interpolate"], e.module("ui.router.state").directive("uiView", C), e.module("ui.router.state").directive("uiView", S), I.$inject = ["$state", "$timeout"], M.$inject = ["$state", "$timeout"], F.$inject = ["$state", "$stateParams", "$interpolate"], e.module("ui.router.state").directive("uiSref", I).directive("uiSrefActive", F).directive("uiSrefActiveEq", F).directive("uiState", M), D.$inject = ["$state"], R.$inject = ["$state"], e.module("ui.router.state").filter("isState", D).filter("includedByState", R)
}(window, window.angular),
function() {
	function t(t, e) {
		return t.set(e[0], e[1]), t
	}
	function e(t, e) {
		return t.add(e), t
	}
	function n(t, e, n) {
		switch (n.length) {
			case 0:
				return t.call(e);
			case 1:
				return t.call(e, n[0]);
			case 2:
				return t.call(e, n[0], n[1]);
			case 3:
				return t.call(e, n[0], n[1], n[2])
		}
		return t.apply(e, n)
	}
	function r(t, e, n, r) {
		for (var i = -1, o = t.length; ++i < o;) {
			var a = t[i];
			e(r, a, n(a), t)
		}
		return r
	}
	function i(t, e) {
		for (var n = -1, r = t.length, i = -1, o = e.length, a = Array(r + o); ++n < r;) a[n] = t[n];
		for (; ++i < o;) a[n++] = e[i];
		return a
	}
	function o(t, e) {
		for (var n = -1, r = t.length; ++n < r && !1 !== e(t[n], n, t););
		return t
	}
	function a(t, e) {
		for (var n = t.length; n-- && !1 !== e(t[n], n, t););
		return t
	}
	function u(t, e) {
		for (var n = -1, r = t.length; ++n < r;) if (!e(t[n], n, t)) return !1;
		return !0
	}
	function s(t, e) {
		for (var n = -1, r = t.length, i = -1, o = []; ++n < r;) {
			var a = t[n];
			e(a, n, t) && (o[++i] = a)
		}
		return o
	}
	function c(t, e) {
		return !!t.length && y(t, e, 0) > -1
	}
	function l(t, e, n) {
		for (var r = -1, i = t.length; ++r < i;) if (n(e, t[r])) return !0;
		return !1
	}
	function f(t, e) {
		for (var n = -1, r = t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
		return i
	}
	function h(t, e) {
		for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
		return t
	}
	function p(t, e, n, r) {
		var i = -1,
			o = t.length;
		for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
		return n
	}
	function d(t, e, n, r) {
		var i = t.length;
		for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t);
		return n
	}
	function v(t, e) {
		for (var n = -1, r = t.length; ++n < r;) if (e(t[n], n, t)) return !0;
		return !1
	}
	function $(t, e, n) {
		for (var r = -1, i = t.length; ++r < i;) {
			var o = t[r],
				a = e(o);
			if (null != a && (u === W ? a === a : n(a, u))) var u = a,
				s = o
		}
		return s
	}
	function m(t, e, n, r) {
		var i;
		return n(t, function(t, n, o) {
			if (e(t, n, o)) return i = r ? n : t, !1
		}), i
	}
	function g(t, e, n) {
		for (var r = t.length, i = n ? r : -1; n ? i-- : ++i < r;) if (e(t[i], i, t)) return i;
		return -1
	}
	function y(t, e, n) {
		if (e !== e) return D(t, n);
		for (var r = n - 1, i = t.length; ++r < i;) if (t[r] === e) return r;
		return -1
	}
	function b(t, e, n, r, i) {
		return i(t, function(t, i, o) {
			n = r ? (r = !1, t) : e(n, t, i, o)
		}), n
	}
	function w(t, e) {
		var n = t.length;
		for (t.sort(e); n--;) t[n] = t[n].value;
		return t
	}
	function x(t, e) {
		for (var n, r = -1, i = t.length; ++r < i;) {
			var o = e(t[r]);
			o !== W && (n = n === W ? o : n + o)
		}
		return n
	}
	function _(t, e) {
		for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
		return r
	}
	function C(t, e) {
		return f(e, function(e) {
			return [e, t[e]]
		})
	}
	function S(t) {
		return function(e) {
			return t(e)
		}
	}
	function E(t, e) {
		return f(e, function(e) {
			return t[e]
		})
	}
	function A(t, e) {
		for (var n = -1, r = t.length; ++n < r && y(e, t[n], 0) > -1;);
		return n
	}
	function k(t, e) {
		for (var n = t.length; n-- && y(e, t[n], 0) > -1;);
		return n
	}
	function O(t) {
		return t && t.Object === Object ? t : null
	}
	function j(t, e) {
		if (t !== e) {
			var n = null === t,
				r = t === W,
				i = t === t,
				o = null === e,
				a = e === W,
				u = e === e;
			if (t > e && !o || !i || n && !a && u || r && u) return 1;
			if (t < e && !n || !u || o && !r && i || a && i) return -1
		}
		return 0
	}
	function T(t, e, n) {
		for (var r = -1, i = t.criteria, o = e.criteria, a = i.length, u = n.length; ++r < a;) {
			var s = j(i[r], o[r]);
			if (s) {
				if (r >= u) return s;
				return s * ("desc" == n[r] ? -1 : 1)
			}
		}
		return t.index - e.index
	}
	function I(t) {
		return Ze[t]
	}
	function M(t) {
		return Xe[t]
	}
	function F(t) {
		return "\\" + en[t]
	}
	function D(t, e, n) {
		for (var r = t.length, i = e + (n ? 0 : -1); n ? i-- : ++i < r;) {
			var o = t[i];
			if (o !== o) return i
		}
		return -1
	}
	function R(t) {
		var e = !1;
		if (null != t && "function" != typeof t.toString) try {
			e = !! (t + "")
		} catch (t) {}
		return e
	}
	function P(t, e) {
		return t = "number" == typeof t || xe.test(t) ? +t : -1, e = null == e ? mt : e, t > -1 && t % 1 == 0 && t < e
	}
	function N(t) {
		for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
		return n
	}
	function V(t) {
		var e = -1,
			n = Array(t.size);
		return t.forEach(function(t, r) {
			n[++e] = [r, t]
		}), n
	}
	function U(t, e) {
		for (var n = -1, r = t.length, i = -1, o = []; ++n < r;) t[n] === e && (t[n] = _t, o[++i] = n);
		return o
	}
	function q(t) {
		var e = -1,
			n = Array(t.size);
		return t.forEach(function(t) {
			n[++e] = t
		}), n
	}
	function L(t) {
		if (!t || !Be.test(t)) return t.length;
		for (var e = Le.lastIndex = 0; Le.test(t);) e++;
		return e
	}
	function B(t) {
		return t.match(Le)
	}
	function H(t) {
		return Qe[t]
	}
	function z(O) {
		function xe(t) {
			if (Fa(t) && !$l(t) && !(t instanceof ke)) {
				if (t instanceof Ae) return t;
				if (Vs.call(t, "__wrapped__")) return ji(t)
			}
			return new Ae(t)
		}
		function Ee() {}
		function Ae(t, e) {
			this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !! e, this.__index__ = 0, this.__values__ = W
		}
		function ke(t) {
			this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = bt, this.__views__ = []
		}
		function Oe() {
			var t = new ke(this.__wrapped__);
			return t.__actions__ = Fr(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Fr(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Fr(this.__views__), t
		}
		function je() {
			if (this.__filtered__) {
				var t = new ke(this);
				t.__dir__ = -1, t.__filtered__ = !0
			} else t = this.clone(), t.__dir__ *= -1;
			return t
		}
		function Te() {
			var t = this.__wrapped__.value(),
				e = this.__dir__,
				n = $l(t),
				r = e < 0,
				i = n ? t.length : 0,
				o = fi(0, i, this.__views__),
				a = o.start,
				u = o.end,
				s = u - a,
				c = r ? u : a - 1,
				l = this.__iteratees__,
				f = l.length,
				h = 0,
				p = cc(s, this.__takeCount__);
			if (!n || i < lt || i == s && p == s) return xr(t, this.__actions__);
			var d = [];
			t: for (; s-- && h < p;) {
				c += e;
				for (var v = -1, $ = t[c]; ++v < f;) {
					var m = l[v],
						g = m.iteratee,
						y = m.type,
						b = g($);
					if (y == ht) $ = b;
					else if (!b) {
						if (y == ft) continue t;
						break t
					}
				}
				d[h++] = $
			}
			return d
		}
		function Ie() {}
		function Me(t, e) {
			return De(t, e) && delete t[e]
		}
		function Fe(t, e) {
			if ($c) {
				var n = t[e];
				return n === vt ? W : n
			}
			return Vs.call(t, e) ? t[e] : W
		}
		function De(t, e) {
			return $c ? t[e] !== W : Vs.call(t, e)
		}
		function Re(t, e, n) {
			t[e] = $c && n === W ? vt : n
		}
		function Pe(t) {
			var e = -1,
				n = t ? t.length : 0;
			for (this.clear(); ++e < n;) {
				var r = t[e];
				this.set(r[0], r[1])
			}
		}
		function Ne() {
			this.__data__ = {
				hash: new Ie,
				map: pc ? new pc : [],
				string: new Ie
			}
		}
		function Ve(t) {
			var e = this.__data__;
			return yi(t) ? Me("string" == typeof t ? e.string : e.hash, t) : pc ? e.map.delete(t) : fn(e.map, t)
		}
		function Ue(t) {
			var e = this.__data__;
			return yi(t) ? Fe("string" == typeof t ? e.string : e.hash, t) : pc ? e.map.get(t) : dn(e.map, t)
		}
		function Le(t) {
			var e = this.__data__;
			return yi(t) ? De("string" == typeof t ? e.string : e.hash, t) : pc ? e.map.has(t) : vn(e.map, t)
		}
		function Ze(t, e) {
			var n = this.__data__;
			return yi(t) ? Re("string" == typeof t ? n.string : n.hash, t, e) : pc ? n.map.set(t, e) : mn(n.map, t, e), this
		}
		function Xe(t) {
			var e = -1,
				n = t ? t.length : 0;
			for (this.__data__ = new Pe; ++e < n;) this.push(t[e])
		}
		function Qe(t, e) {
			var n = t.__data__;
			if (yi(e)) {
				var r = n.__data__;
				return ("string" == typeof e ? r.string : r.hash)[e] === vt
			}
			return n.has(e)
		}
		function tn(t) {
			var e = this.__data__;
			if (yi(t)) {
				var n = e.__data__;
				("string" == typeof t ? n.string : n.hash)[t] = vt
			} else e.set(t, vt)
		}
		function en(t) {
			var e = -1,
				n = t ? t.length : 0;
			for (this.clear(); ++e < n;) {
				var r = t[e];
				this.set(r[0], r[1])
			}
		}
		function on() {
			this.__data__ = {
				array: [],
				map: null
			}
		}
		function an(t) {
			var e = this.__data__,
				n = e.array;
			return n ? fn(n, t) : e.map.delete(t)
		}
		function un(t) {
			var e = this.__data__,
				n = e.array;
			return n ? dn(n, t) : e.map.get(t)
		}
		function sn(t) {
			var e = this.__data__,
				n = e.array;
			return n ? vn(n, t) : e.map.has(t)
		}
		function cn(t, e) {
			var n = this.__data__,
				r = n.array;
			r && (r.length < lt - 1 ? mn(r, t, e) : (n.array = null, n.map = new Pe(r)));
			var i = n.map;
			return i && i.set(t, e), this
		}
		function fn(t, e) {
			var n = $n(t, e);
			return !(n < 0) && (n == t.length - 1 ? t.pop() : nc.call(t, n, 1), !0)
		}
		function dn(t, e) {
			var n = $n(t, e);
			return n < 0 ? W : t[n][1]
		}
		function vn(t, e) {
			return $n(t, e) > -1
		}
		function $n(t, e) {
			for (var n = t.length; n--;) if (va(t[n][0], e)) return n;
			return -1
		}
		function mn(t, e, n) {
			var r = $n(t, e);
			r < 0 ? t.push([e, n]) : t[r][1] = n
		}
		function gn(t, e, n, r) {
			return t === W || va(t, Ps[n]) && !Vs.call(r, n) ? e : t
		}
		function yn(t, e, n) {
			(n === W || va(t[e], n)) && ("number" != typeof e || n !== W || e in t) || (t[e] = n)
		}
		function bn(t, e, n) {
			var r = t[e];
			va(r, n) && (!va(r, Ps[e]) || Vs.call(t, e)) && (n !== W || e in t) || (t[e] = n)
		}
		function wn(t, e, n, r) {
			return Ec(t, function(t, i, o) {
				e(r, t, n(t), o)
			}), r
		}
		function xn(t, e) {
			return t && Dr(e, bu(e), t)
		}
		function _n(t, e) {
			for (var n = -1, r = null == t, i = e.length, o = Array(i); ++n < i;) o[n] = r ? W : mu(t, e[n]);
			return o
		}
		function Cn(t, e, n) {
			return t === t && (n !== W && (t = t <= n ? t : n), e !== W && (t = t >= e ? t : e)), t
		}
		function Sn(t, e, n, r, i, a) {
			var u;
			if (n && (u = i ? n(t, r, i, a) : n(t)), u !== W) return u;
			if (!Ma(t)) return t;
			var s = $l(t);
			if (s) {
				if (u = pi(t), !e) return Fr(t, u)
			} else {
				var c = li(t),
					l = c == Ot || c == jt;
				if (ml(t)) return Sr(t, e);
				if (c != Mt && c != Ct && (!l || i)) return Ke[c] ? vi(t, c, e) : i ? t : {};
				if (R(t)) return i ? t : {};
				if (u = di(l ? {} : t), !e) return Pr(t, xn(u, t))
			}
			a || (a = new en);
			var f = a.get(t);
			return f || (a.set(t, u), (s ? o : Fn)(t, function(r, i) {
				bn(u, i, Sn(r, e, n, i, t, a))
			}), s ? u : Pr(t, u))
		}
		function En(t) {
			var e = bu(t),
				n = e.length;
			return function(r) {
				if (null == r) return !n;
				for (var i = n; i--;) {
					var o = e[i],
						a = t[o],
						u = r[o];
					if (u === W && !(o in Object(r)) || !a(u)) return !1
				}
				return !0
			}
		}
		function An(t, e, n) {
			if ("function" != typeof t) throw new Ds(dt);
			return ec(function() {
				t.apply(W, n)
			}, e)
		}
		function kn(t, e, n, r) {
			var i = -1,
				o = c,
				a = !0,
				u = t.length,
				s = [],
				h = e.length;
			if (!u) return s;
			n && (e = f(e, S(n))), r ? (o = l, a = !1) : e.length >= lt && (o = Qe, a = !1, e = new Xe(e));
			t: for (; ++i < u;) {
				var p = t[i],
					d = n ? n(p) : p;
				if (a && d === d) {
					for (var v = h; v--;) if (e[v] === d) continue t;
					s.push(p)
				} else o(e, d, r) || s.push(p)
			}
			return s
		}
		function On(t, e) {
			var n = !0;
			return Ec(t, function(t, r, i) {
				return n = !! e(t, r, i)
			}), n
		}
		function jn(t, e, n, r) {
			var i = t.length;
			for (n = nu(n), n < 0 && (n = -n > i ? 0 : i + n), r = r === W || r > i ? i : nu(r), r < 0 && (r += i), r = n > r ? 0 : ru(r); n < r;) t[n++] = e;
			return t
		}
		function Tn(t, e) {
			var n = [];
			return Ec(t, function(t, r, i) {
				e(t, r, i) && n.push(t)
			}), n
		}
		function In(t, e, n, r) {
			r || (r = []);
			for (var i = -1, o = t.length; ++i < o;) {
				var a = t[i];
				wa(a) && (n || $l(a) || ga(a)) ? e ? In(a, e, n, r) : h(r, a) : n || (r[r.length] = a)
			}
			return r
		}
		function Mn(t, e) {
			return null == t ? t : kc(t, e, wu)
		}
		function Fn(t, e) {
			return t && kc(t, e, bu)
		}
		function Dn(t, e) {
			return t && Oc(t, e, bu)
		}
		function Rn(t, e) {
			return s(e, function(e) {
				return ja(t[e])
			})
		}
		function Pn(t, e) {
			e = gi(e, t) ? [e + ""] : gr(e);
			for (var n = 0, r = e.length; null != t && n < r;) t = t[e[n++]];
			return n && n == r ? t : W
		}
		function Nn(t, e) {
			return Vs.call(t, e) || "object" == typeof t && e in t && null === Zs(t)
		}
		function Vn(t, e) {
			return e in Object(t)
		}
		function Un(t, e, n) {
			return t >= cc(e, n) && t < sc(e, n)
		}
		function qn(t, e, n) {
			for (var r = n ? l : c, i = t.length, o = i, a = Array(i), u = []; o--;) {
				var s = t[o];
				o && e && (s = f(s, S(e))), a[o] = !n && (e || s.length >= 120) ? new Xe(o && s) : W
			}
			s = t[0];
			var h = -1,
				p = s.length,
				d = a[0];
			t: for (; ++h < p;) {
				var v = s[h],
					$ = e ? e(v) : v;
				if (!(d ? Qe(d, $) : r(u, $, n))) {
					for (var o = i; --o;) {
						var m = a[o];
						if (!(m ? Qe(m, $) : r(t[o], $, n))) continue t
					}
					d && d.push($), u.push(v)
				}
			}
			return u
		}
		function Ln(t, e, n, r) {
			return Fn(t, function(t, i, o) {
				e(r, n(t), i, o)
			}), r
		}
		function Bn(t, e, r) {
			gi(e, t) || (e = gr(e), t = Si(t, e), e = Gi(e));
			var i = null == t ? t : t[e];
			return null == i ? W : n(i, t, r)
		}

		function Hn(t, e, n, r, i) {
			return t === e || (null == t || null == e || !Ma(t) && !Fa(e) ? t !== t && e !== e : zn(t, e, Hn, n, r, i))
		}
		function zn(t, e, n, r, i, o) {
			var a = $l(t),
				u = $l(e),
				s = St,
				c = St;
			a || (s = li(t), s == Ct ? s = Mt : s != Mt && (a = Ya(t))), u || (c = li(e), c == Ct ? c = Mt : c != Mt && (u = Ya(e)));
			var l = s == Mt && !R(t),
				f = c == Mt && !R(e),
				h = s == c;
			if (h && !a && !l) return ii(t, e, s, n, r, i);
			if (!(i & ot)) {
				var p = l && Vs.call(t, "__wrapped__"),
					d = f && Vs.call(e, "__wrapped__");
				if (p || d) return n(p ? t.value() : t, d ? e.value() : e, r, i, o)
			}
			return !!h && (o || (o = new en), (a ? ri : oi)(t, e, n, r, i, o))
		}
		function Wn(t, e, n, r) {
			var i = n.length,
				o = i,
				a = !r;
			if (null == t) return !o;
			for (t = Object(t); i--;) {
				var u = n[i];
				if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1
			}
			for (; ++i < o;) {
				u = n[i];
				var s = u[0],
					c = t[s],
					l = u[1];
				if (a && u[2]) {
					if (c === W && !(s in t)) return !1
				} else {
					var f = new en,
						h = r ? r(c, l, s, t, e, f) : W;
					if (!(h === W ? Hn(l, c, r, it | ot, f) : h)) return !1
				}
			}
			return !0
		}
		function Gn(t) {
			var e = typeof t;
			return "function" == e ? t : null == t ? cs : "object" == e ? $l(t) ? Xn(t[0], t[1]) : Zn(t) : ms(t)
		}
		function Jn(t) {
			return uc(Object(t))
		}
		function Yn(t) {
			t = null == t ? t : Object(t);
			var e = [];
			for (var n in t) e.push(n);
			return e
		}
		function Kn(t, e) {
			var n = -1,
				r = ba(t) ? Array(t.length) : [];
			return Ec(t, function(t, i, o) {
				r[++n] = e(t, i, o)
			}), r
		}
		function Zn(t) {
			var e = si(t);
			if (1 == e.length && e[0][2]) {
				var n = e[0][0],
					r = e[0][1];
				return function(t) {
					return null != t && (t[n] === r && (r !== W || n in Object(t)))
				}
			}
			return function(n) {
				return n === t || Wn(n, t, e)
			}
		}
		function Xn(t, e) {
			return function(n) {
				var r = mu(n, t);
				return r === W && r === e ? yu(n, t) : Hn(e, r, W, it | ot)
			}
		}
		function Qn(t, e, n, r, i) {
			if (t !== e) {
				var a = $l(e) || Ya(e) ? W : wu(e);
				o(a || e, function(o, u) {
					if (a && (u = o, o = e[u]), Ma(o)) i || (i = new en), tr(t, e, u, n, Qn, r, i);
					else {
						var s = r ? r(t[u], o, u + "", t, e, i) : W;
						s === W && (s = o), yn(t, u, s)
					}
				})
			}
		}
		function tr(t, e, n, r, i, o, a) {
			var u = t[n],
				s = e[n],
				c = a.get(s);
			if (c) return void yn(t, n, c);
			var l = o ? o(u, s, n + "", t, e, a) : W,
				f = l === W;
			f && (l = s, $l(s) || Ya(s) ? $l(u) ? l = r ? Fr(u) : u : wa(u) ? l = Fr(u) : (f = !1, l = Sn(s)) : Ba(s) || ga(s) ? ga(u) ? l = ou(u) : !Ma(u) || r && ja(u) ? (f = !1, l = Sn(s)) : l = r ? Sn(u) : u : f = !1), a.set(s, l), f && i(l, s, r, o, a), yn(t, n, l)
		}
		function er(t, e, n) {
			var r = -1,
				i = ui();
			return e = f(e.length ? e : Array(1), function(t) {
				return i(t)
			}), w(Kn(t, function(t, n, i) {
				return {
					criteria: f(e, function(e) {
						return e(t)
					}),
					index: ++r,
					value: t
				}
			}), function(t, e) {
				return T(t, e, n)
			})
		}
		function nr(t, e) {
			return t = Object(t), p(e, function(e, n) {
				return n in t && (e[n] = t[n]), e
			}, {})
		}
		function rr(t, e) {
			var n = {};
			return Mn(t, function(t, r) {
				e(t, r) && (n[r] = t)
			}), n
		}
		function ir(t) {
			return function(e) {
				return null == e ? W : e[t]
			}
		}
		function or(t) {
			return function(e) {
				return Pn(e, t)
			}
		}
		function ar(t, e) {
			return ur(t, e)
		}
		function ur(t, e, n) {
			var r = -1,
				i = e.length,
				o = t;
			for (n && (o = f(t, function(t) {
				return n(t)
			})); ++r < i;) for (var a = 0, u = e[r], s = n ? n(u) : u;
			(a = y(o, s, a)) > -1;) o !== t && nc.call(o, a, 1), nc.call(t, a, 1);
			return t
		}
		function sr(t, e) {
			for (var n = t ? e.length : 0, r = n - 1; n--;) {
				var i = e[n];
				if (r == n || i != o) {
					var o = i;
					if (P(i)) nc.call(t, i, 1);
					else if (gi(i, t)) delete t[i];
					else {
						var a = gr(i),
							u = Si(t, a);
						null != u && delete u[Gi(a)]
					}
				}
			}
			return t
		}
		function cr(t, e) {
			return t + ic(fc() * (e - t + 1))
		}
		function lr(t, e, n, r) {
			for (var i = -1, o = sc(rc((e - t) / (n || 1)), 0), a = Array(o); o--;) a[r ? o : ++i] = t, t += n;
			return a
		}
		function fr(t, e, n, r) {
			e = gi(e, t) ? [e + ""] : gr(e);
			for (var i = -1, o = e.length, a = o - 1, u = t; null != u && ++i < o;) {
				var s = e[i];
				if (Ma(u)) {
					var c = n;
					if (i != a) {
						var l = u[s];
						c = r ? r(l, s, u) : W, c === W && (c = null == l ? P(e[i + 1]) ? [] : {} : l)
					}
					bn(u, s, c)
				}
				u = u[s]
			}
			return t
		}
		function hr(t, e, n) {
			var r = -1,
				i = t.length;
			e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
			for (var o = Array(i); ++r < i;) o[r] = t[r + e];
			return o
		}
		function pr(t, e) {
			var n;
			return Ec(t, function(t, r, i) {
				return !(n = e(t, r, i))
			}), !! n
		}
		function dr(t, e, n) {
			var r = 0,
				i = t ? t.length : r;
			if ("number" == typeof e && e === e && i <= xt) {
				for (; r < i;) {
					var o = r + i >>> 1,
						a = t[o];
					(n ? a <= e : a < e) && null !== a ? r = o + 1 : i = o
				}
				return i
			}
			return vr(t, e, cs, n)
		}
		function vr(t, e, n, r) {
			e = n(e);
			for (var i = 0, o = t ? t.length : 0, a = e !== e, u = null === e, s = e === W; i < o;) {
				var c = ic((i + o) / 2),
					l = n(t[c]),
					f = l !== W,
					h = l === l;
				if (a) var p = h || r;
				else p = u ? h && f && (r || null != l) : s ? h && (r || f) : null != l && (r ? l <= e : l < e);
				p ? i = c + 1 : o = c
			}
			return cc(o, wt)
		}
		function $r(t) {
			return mr(t)
		}
		function mr(t, e) {
			for (var n = 0, r = t.length, i = t[0], o = e ? e(i) : i, a = o, u = 0, s = [i]; ++n < r;) i = t[n], o = e ? e(i) : i, va(o, a) || (a = o, s[++u] = i);
			return s
		}
		function gr(t) {
			return $l(t) ? t : Ai(t)
		}
		function yr(t, e, n) {
			var r = -1,
				i = c,
				o = t.length,
				a = !0,
				u = [],
				s = u;
			if (n) a = !1, i = l;
			else if (o >= lt) {
				var f = e ? null : Tc(t);
				if (f) return q(f);
				a = !1, i = Qe, s = new Xe
			} else s = e ? [] : u;
			t: for (; ++r < o;) {
				var h = t[r],
					p = e ? e(h) : h;
				if (a && p === p) {
					for (var d = s.length; d--;) if (s[d] === p) continue t;
					e && s.push(p), u.push(h)
				} else i(s, p, n) || (s !== u && s.push(p), u.push(h))
			}
			return u
		}
		function br(t, e) {
			e = gi(e, t) ? [e + ""] : gr(e), t = Si(t, e);
			var n = Gi(e);
			return null == t || !gu(t, n) || delete t[n]
		}
		function wr(t, e, n, r) {
			for (var i = t.length, o = r ? i : -1;
			(r ? o-- : ++o < i) && e(t[o], o, t););
			return n ? hr(t, r ? 0 : o, r ? o + 1 : i) : hr(t, r ? o + 1 : 0, r ? i : o)
		}
		function xr(t, e) {
			var n = t;
			return n instanceof ke && (n = n.value()), p(e, function(t, e) {
				return e.func.apply(e.thisArg, h([t], e.args))
			}, n)
		}
		function _r(t, e, n) {
			for (var r = -1, i = t.length; ++r < i;) var o = o ? h(kn(o, t[r], e, n), kn(t[r], o, e, n)) : t[r];
			return o && o.length ? yr(o, e, n) : []
		}
		function Cr(t, e, n) {
			for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i;) n(a, t[r], r < o ? e[r] : W);
			return a
		}
		function Sr(t, e) {
			if (e) return t.slice();
			var n = t.constructor,
				r = new n(t.length);
			return t.copy(r), r
		}
		function Er(t) {
			var e = t.constructor,
				n = new e(t.byteLength);
			return new Js(n).set(new Js(t)), n
		}
		function Ar(e) {
			var n = e.constructor;
			return p(V(e), t, new n)
		}
		function kr(t) {
			var e = t.constructor,
				n = new e(t.source, $e.exec(t));
			return n.lastIndex = t.lastIndex, n
		}
		function Or(t) {
			var n = t.constructor;
			return p(q(t), e, new n)
		}
		function jr(t) {
			return Gs ? Object(xc.call(t)) : {}
		}
		function Tr(t, e) {
			var n = t.buffer;
			return new(0, t.constructor)(e ? Er(n) : n, t.byteOffset, t.length)
		}
		function Ir(t, e, n) {
			for (var r = n.length, i = -1, o = sc(t.length - r, 0), a = -1, u = e.length, s = Array(u + o); ++a < u;) s[a] = e[a];
			for (; ++i < r;) s[n[i]] = t[i];
			for (; o--;) s[a++] = t[i++];
			return s
		}
		function Mr(t, e, n) {
			for (var r = -1, i = n.length, o = -1, a = sc(t.length - i, 0), u = -1, s = e.length, c = Array(a + s); ++o < a;) c[o] = t[o];
			for (var l = o; ++u < s;) c[l + u] = e[u];
			for (; ++r < i;) c[l + n[r]] = t[o++];
			return c
		}
		function Fr(t, e) {
			var n = -1,
				r = t.length;
			for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
			return e
		}
		function Dr(t, e, n) {
			return Rr(t, e, n)
		}
		function Rr(t, e, n, r) {
			n || (n = {});
			for (var i = -1, o = e.length; ++i < o;) {
				var a = e[i];
				bn(n, a, r ? r(n[a], t[a], a, n, t) : t[a])
			}
			return n
		}
		function Pr(t, e) {
			return Dr(t, Fc(t), e)
		}
		function Nr(t, e) {
			return function(n, i) {
				var o = $l(n) ? r : wn,
					a = e ? e() : {};
				return o(n, t, ui(i), a)
			}
		}
		function Vr(t) {
			return aa(function(e, n) {
				var r = -1,
					i = n.length,
					o = i > 1 ? n[i - 1] : W,
					a = i > 2 ? n[2] : W;
				for (o = "function" == typeof o ? (i--, o) : W, a && mi(n[0], n[1], a) && (o = i < 3 ? W : o, i = 1), e = Object(e); ++r < i;) {
					var u = n[r];
					u && t(e, u, r, o)
				}
				return e
			})
		}
		function Ur(t, e) {
			return function(n, r) {
				if (null == n) return n;
				if (!ba(n)) return t(n, r);
				for (var i = n.length, o = e ? i : -1, a = Object(n);
				(e ? o-- : ++o < i) && !1 !== r(a[o], o, a););
				return n
			}
		}
		function qr(t) {
			return function(e, n, r) {
				for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
					var s = a[t ? u : ++i];
					if (!1 === n(o[s], s, o)) break
				}
				return e
			}
		}
		function Lr(t, e, n) {
			function r() {
				return (this && this !== hn && this instanceof r ? o : t).apply(i ? n : this, arguments)
			}
			var i = e & J,
				o = zr(t);
			return r
		}
		function Br(t) {
			return function(e) {
				e = uu(e);
				var n = Be.test(e) ? B(e) : W,
					r = n ? n[0] : e.charAt(0),
					i = n ? n.slice(1).join("") : e.slice(1);
				return r[t]() + i
			}
		}
		function Hr(t) {
			return function(e) {
				return p(os(Vu(e)), t, "")
			}
		}
		function zr(t) {
			return function() {
				var e = arguments;
				switch (e.length) {
					case 0:
						return new t;
					case 1:
						return new t(e[0]);
					case 2:
						return new t(e[0], e[1]);
					case 3:
						return new t(e[0], e[1], e[2]);
					case 4:
						return new t(e[0], e[1], e[2], e[3]);
					case 5:
						return new t(e[0], e[1], e[2], e[3], e[4]);
					case 6:
						return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
					case 7:
						return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
				}
				var n = Sc(t.prototype),
					r = t.apply(n, e);
				return Ma(r) ? r : n
			}
		}
		function Wr(t, e, r) {
			function i() {
				for (var a = arguments.length, u = a, s = Array(a), c = this && this !== hn && this instanceof i ? o : t, l = xe.placeholder || i.placeholder; u--;) s[u] = arguments[u];
				var f = a < 3 && s[0] !== l && s[a - 1] !== l ? [] : U(s, l);
				return a -= f.length, a < r ? ti(t, e, Jr, l, W, s, f, W, W, r - a) : n(c, this, s)
			}
			var o = zr(t);
			return i
		}
		function Gr(t) {
			return aa(function(e) {
				e = In(e);
				var n = e.length,
					r = n,
					i = Ae.prototype.thru;
				for (t && e.reverse(); r--;) {
					var o = e[r];
					if ("function" != typeof o) throw new Ds(dt);
					if (i && !a && "wrapper" == ai(o)) var a = new Ae([], !0)
				}
				for (r = a ? r : n; ++r < n;) {
					o = e[r];
					var u = ai(o),
						s = "wrapper" == u ? Ic(o) : W;
					a = s && bi(s[0]) && s[1] == (et | Z | Q | nt) && !s[4].length && 1 == s[9] ? a[ai(s[0])].apply(a, s[3]) : 1 == o.length && bi(o) ? a[u]() : a.thru(o)
				}
				return function() {
					var t = arguments,
						r = t[0];
					if (a && 1 == t.length && $l(r) && r.length >= lt) return a.plant(r).value();
					for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
					return o
				}
			})
		}
		function Jr(t, e, n, r, i, o, a, u, s, c) {
			function l() {
				for (var g = arguments.length, y = g, b = Array(g); y--;) b[y] = arguments[y];
				if (r && (b = Ir(b, r, i)), o && (b = Mr(b, o, a)), d || v) {
					var w = xe.placeholder || l.placeholder,
						x = U(b, w);
					if ((g -= x.length) < c) return ti(t, e, Jr, w, n, b, x, u, s, c - g)
				}
				var _ = h ? n : this,
					C = p ? _[t] : t;
				return u ? b = Ei(b, u) : $ && b.length > 1 && b.reverse(), f && s < b.length && (b.length = s), this && this !== hn && this instanceof l && (C = m || zr(C)), C.apply(_, b)
			}
			var f = e & et,
				h = e & J,
				p = e & Y,
				d = e & Z,
				v = e & X,
				$ = e & rt,
				m = p ? W : zr(t);
			return l
		}
		function Yr(t, e) {
			return function(n, r) {
				return Ln(n, t, e(r), {})
			}
		}
		function Kr(t) {
			return aa(function(e) {
				return e = f(In(e), ui()), aa(function(r) {
					var i = this;
					return t(e, function(t) {
						return n(t, i, r)
					})
				})
			})
		}
		function Zr(t, e, n) {
			e = nu(e);
			var r = L(t);
			if (!e || r >= e) return "";
			var i = e - r;
			n = n === W ? " " : n + "";
			var o = Gu(n, rc(i / L(n)));
			return Be.test(n) ? B(o).slice(0, i).join("") : o.slice(0, i)
		}
		function Xr(t, e, r, i) {
			function o() {
				for (var e = -1, s = arguments.length, c = -1, l = i.length, f = Array(l + s), h = this && this !== hn && this instanceof o ? u : t; ++c < l;) f[c] = i[c];
				for (; s--;) f[c++] = arguments[++e];
				return n(h, a ? r : this, f)
			}
			var a = e & J,
				u = zr(t);
			return o
		}
		function Qr(t) {
			return function(e, n, r) {
				return r && "number" != typeof r && mi(e, n, r) && (n = r = W), e = iu(e), e = e === e ? e : 0, n === W ? (n = e, e = 0) : n = iu(n) || 0, r = r === W ? e < n ? 1 : -1 : iu(r) || 0, lr(e, n, r, t)
			}
		}
		function ti(t, e, n, r, i, o, a, u, s, c) {
			var l = e & Z,
				f = u ? Fr(u) : W,
				h = l ? a : W,
				p = l ? W : a,
				d = l ? o : W,
				v = l ? W : o;
			e |= l ? Q : tt, (e &= ~ (l ? tt : Q)) & K || (e &= ~ (J | Y));
			var $ = [t, e, i, d, h, v, p, f, s, c],
				m = n.apply(W, $);
			return bi(t) && Dc(m, $), m.placeholder = r, m
		}
		function ei(t) {
			var e = Ms[t];
			return function(t, n) {
				if (t = iu(t), n = nu(n)) {
					var r = (uu(t) + "e").split("e");
					return r = (uu(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"), +(r[0] + "e" + (+r[1] - n))
				}
				return e(t)
			}
		}
		function ni(t, e, n, r, i, o, a, u) {
			var s = e & Y;
			if (!s && "function" != typeof t) throw new Ds(dt);
			var c = r ? r.length : 0;
			if (c || (e &= ~ (Q | tt), r = i = W), a = a === W ? a : sc(nu(a), 0), u = u === W ? u : nu(u), c -= i ? i.length : 0, e & tt) {
				var l = r,
					f = i;
				r = i = W
			}
			var h = s ? W : Ic(t),
				p = [t, e, n, r, i, l, f, o, a, u];
			if (h && _i(p, h), t = p[0], e = p[1], n = p[2], r = p[3], i = p[4], u = p[9] = null == p[9] ? s ? 0 : t.length : sc(p[9] - c, 0), !u && e & (Z | X) && (e &= ~ (Z | X)), e && e != J) d = e == Z || e == X ? Wr(t, e, u) : e != Q && e != (J | Q) || i.length ? Jr.apply(W, p) : Xr(t, e, n, r);
			else var d = Lr(t, e, n);
			return (h ? jc : Dc)(d, p)
		}
		function ri(t, e, n, r, i, o) {
			var a = -1,
				u = i & ot,
				s = i & it,
				c = t.length,
				l = e.length;
			if (c != l && !(u && l > c)) return !1;
			var f = o.get(t);
			if (f) return f == e;
			var h = !0;
			for (o.set(t, e); ++a < c;) {
				var p = t[a],
					d = e[a];
				if (r) var $ = u ? r(d, p, a, e, t, o) : r(p, d, a, t, e, o);
				if ($ !== W) {
					if ($) continue;
					h = !1;
					break
				}
				if (s) {
					if (!v(e, function(t) {
						return p === t || n(p, t, r, i, o)
					})) {
						h = !1;
						break
					}
				} else if (p !== d && !n(p, d, r, i, o)) {
					h = !1;
					break
				}
			}
			return o.delete(t), h
		}
		function ii(t, e, n, r, i, o) {
			switch (n) {
				case Ut:
					return !(t.byteLength != e.byteLength || !r(new Js(t), new Js(e)));
				case Et:
				case At:
					return +t == +e;
				case kt:
					return t.name == e.name && t.message == e.message;
				case It:
					return t != +t ? e != +e : t == +e;
				case Ft:
				case Rt:
					return t == e + "";
				case Tt:
					var a = V;
				case Dt:
					var u = o & ot;
					return a || (a = q), (u || t.size == e.size) && r(a(t), a(e), i, o | it);
				case Pt:
					return !!Gs && xc.call(t) == xc.call(e)
			}
			return !1
		}
		function oi(t, e, n, r, i, o) {
			var a = i & ot,
				u = bu(t),
				s = u.length;
			if (s != bu(e).length && !a) return !1;
			for (var c = s; c--;) {
				var l = u[c];
				if (!(a ? l in e : Nn(e, l))) return !1
			}
			var f = o.get(t);
			if (f) return f == e;
			var h = !0;
			o.set(t, e);
			for (var p = a; ++c < s;) {
				l = u[c];
				var d = t[l],
					v = e[l];
				if (r) var $ = a ? r(v, d, l, e, t, o) : r(d, v, l, t, e, o);
				if (!($ === W ? d === v || n(d, v, r, i, o) : $)) {
					h = !1;
					break
				}
				p || (p = "constructor" == l)
			}
			if (h && !p) {
				var m = t.constructor,
					g = e.constructor;
				m != g && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof g && g instanceof g) && (h = !1)
			}
			return o.delete(t), h
		}
		function ai(t) {
			for (var e = t.name + "", n = Cc[e], r = Vs.call(Cc, e) ? n.length : 0; r--;) {
				var i = n[r],
					o = i.func;
				if (null == o || o == t) return i.name
			}
			return e
		}
		function ui() {
			var t = xe.iteratee || ls;
			return t = t === ls ? Gn : t, arguments.length ? t(arguments[0], arguments[1]) : t
		}
		function si(t) {
			for (var e = Ou(t), n = e.length; n--;) e[n][2] = xi(e[n][1]);
			return e
		}
		function ci(t, e) {
			var n = null == t ? W : t[e];
			return Va(n) ? n : W
		}
		function li(t) {
			return Ls.call(t)
		}
		function fi(t, e, n) {
			for (var r = -1, i = n.length; ++r < i;) {
				var o = n[r],
					a = o.size;
				switch (o.type) {
					case "drop":
						t += a;
						break;
					case "dropRight":
						e -= a;
						break;
					case "take":
						e = cc(e, t + a);
						break;
					case "takeRight":
						t = sc(t, e - a)
				}
			}
			return {
				start: t,
				end: e
			}
		}
		function hi(t, e, n) {
			if (null == t) return !1;
			var r = n(t, e);
			r || gi(e) || (e = gr(e), null != (t = Si(t, e)) && (e = Gi(e), r = n(t, e)));
			var i = t ? t.length : W;
			return r || !! i && Ia(i) && P(e, i) && ($l(t) || Ga(t) || ga(t))
		}
		function pi(t) {
			var e = t.length,
				n = t.constructor(e);
			return e && "string" == typeof t[0] && Vs.call(t, "index") && (n.index = t.index, n.input = t.input), n
		}
		function di(t) {
			if (wi(t)) return {};
			var e = t.constructor;
			return Sc(ja(e) ? e.prototype : W)
		}
		function vi(t, e, n) {
			var r = t.constructor;
			switch (e) {
				case Ut:
					return Er(t);
				case Et:
				case At:
					return new r(+t);
				case qt:
				case Lt:
				case Bt:
				case Ht:
				case zt:
				case Wt:
				case Gt:
				case Jt:
				case Yt:
					return Tr(t, n);
				case Tt:
					return Ar(t);
				case It:
				case Rt:
					return new r(t);
				case Ft:
					return kr(t);
				case Dt:
					return Or(t);
				case Pt:
					return jr(t)
			}
		}
		function $i(t) {
			var e = t ? t.length : W;
			return Ia(e) && ($l(t) || Ga(t) || ga(t)) ? _(e, String) : null
		}
		function mi(t, e, n) {
			if (!Ma(n)) return !1;
			var r = typeof e;
			return !!("number" == r ? ba(n) && P(e, n.length) : "string" == r && e in n) && va(n[e], t)
		}
		function gi(t, e) {
			return "number" == typeof t || !$l(t) && (ue.test(t) || !ae.test(t) || null != e && t in Object(e))
		}
		function yi(t) {
			var e = typeof t;
			return "number" == e || "boolean" == e || "string" == e && "__proto__" !== t || null == t
		}
		function bi(t) {
			var e = ai(t),
				n = xe[e];
			if ("function" != typeof n || !(e in ke.prototype)) return !1;
			if (t === n) return !0;
			var r = Ic(n);
			return !!r && t === r[0]
		}
		function wi(t) {
			var e = t && t.constructor;
			return t === ("function" == typeof e && e.prototype || Ps)
		}
		function xi(t) {
			return t === t && !Ma(t)
		}
		function _i(t, e) {
			var n = t[1],
				r = e[1],
				i = n | r,
				o = i < (J | Y | et),
				a = r == et && n == Z || r == et && n == nt && t[7].length <= e[8] || r == (et | nt) && e[7].length <= e[8] && n == Z;
			if (!o && !a) return t;
			r & J && (t[2] = e[2], i |= n & J ? 0 : K);
			var u = e[3];
			if (u) {
				var s = t[3];
				t[3] = s ? Ir(s, u, e[4]) : Fr(u), t[4] = s ? U(t[3], _t) : Fr(e[4])
			}
			return u = e[5], u && (s = t[5], t[5] = s ? Mr(s, u, e[6]) : Fr(u), t[6] = s ? U(t[5], _t) : Fr(e[6])), u = e[7], u && (t[7] = Fr(u)), r & et && (t[8] = null == t[8] ? e[8] : cc(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i, t
		}
		function Ci(t, e, n, r, i, o) {
			return Ma(t) && Ma(e) && (o.set(e, t), Qn(t, e, W, Ci, o)), t
		}
		function Si(t, e) {
			return 1 == e.length ? t : mu(t, hr(e, 0, -1))
		}
		function Ei(t, e) {
			for (var n = t.length, r = cc(e.length, n), i = Fr(t); r--;) {
				var o = e[r];
				t[r] = P(o, n) ? i[o] : W
			}
			return t
		}
		function Ai(t) {
			var e = [];
			return uu(t).replace(se, function(t, n, r, i) {
				e.push(r ? i.replace(de, "$1") : n || t)
			}), e
		}
		function ki(t) {
			return wa(t) ? t : []
		}
		function Oi(t) {
			return "function" == typeof t ? t : cs
		}
		function ji(t) {
			if (t instanceof ke) return t.clone();
			var e = new Ae(t.__wrapped__, t.__chain__);
			return e.__actions__ = Fr(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
		}
		function Ti(t, e) {
			e = sc(nu(e), 0);
			var n = t ? t.length : 0;
			if (!n || e < 1) return [];
			for (var r = 0, i = -1, o = Array(rc(n / e)); r < n;) o[++i] = hr(t, r, r += e);
			return o
		}
		function Ii(t) {
			for (var e = -1, n = t ? t.length : 0, r = -1, i = []; ++e < n;) {
				var o = t[e];
				o && (i[++r] = o)
			}
			return i
		}
		function Mi(t, e, n) {
			var r = t ? t.length : 0;
			return r ? (e = n || e === W ? 1 : nu(e), hr(t, e < 0 ? 0 : e, r)) : []
		}
		function Fi(t, e, n) {
			var r = t ? t.length : 0;
			return r ? (e = n || e === W ? 1 : nu(e), e = r - e, hr(t, 0, e < 0 ? 0 : e)) : []
		}
		function Di(t, e) {
			return t && t.length ? wr(t, ui(e, 3), !0, !0) : []
		}
		function Ri(t, e) {
			return t && t.length ? wr(t, ui(e, 3), !0) : []
		}
		function Pi(t, e, n, r) {
			var i = t ? t.length : 0;
			return i ? (n && "number" != typeof n && mi(t, e, n) && (n = 0, r = i), jn(t, e, n, r)) : []
		}
		function Ni(t, e) {
			return t && t.length ? g(t, ui(e, 3)) : -1
		}
		function Vi(t, e) {
			return t && t.length ? g(t, ui(e, 3), !0) : -1
		}
		function Ui(t) {
			return (t ? t.length : 0) ? In(t) : []
		}
		function qi(t) {
			return (t ? t.length : 0) ? In(t, !0) : []
		}
		function Li(t) {
			for (var e = -1, n = t ? t.length : 0, r = {}; ++e < n;) {
				var i = t[e];
				r[i[0]] = i[1]
			}
			return r
		}
		function Bi(t) {
			return t ? t[0] : W
		}
		function Hi(t, e, n) {
			var r = t ? t.length : 0;
			return r ? (n = nu(n), n < 0 && (n = sc(r + n, 0)), y(t, e, n)) : -1
		}
		function zi(t) {
			return Fi(t, 1)
		}
		function Wi(t, e) {
			return t ? ac.call(t, e) : ""
		}
		function Gi(t) {
			var e = t ? t.length : 0;
			return e ? t[e - 1] : W
		}
		function Ji(t, e, n) {
			var r = t ? t.length : 0;
			if (!r) return -1;
			var i = r;
			if (n !== W && (i = nu(n), i = (i < 0 ? sc(r + i, 0) : cc(i, r - 1)) + 1), e !== e) return D(t, i, !0);
			for (; i--;) if (t[i] === e) return i;
			return -1
		}
		function Yi(t, e) {
			return t && t.length && e && e.length ? ar(t, e) : t
		}
		function Ki(t, e, n) {
			return t && t.length && e && e.length ? ur(t, e, ui(n)) : t
		}
		function Zi(t, e) {
			var n = [];
			if (!t || !t.length) return n;
			var r = -1,
				i = [],
				o = t.length;
			for (e = ui(e, 3); ++r < o;) {
				var a = t[r];
				e(a, r, t) && (n.push(a), i.push(r))
			}
			return sr(t, i), n
		}
		function Xi(t) {
			return t ? hc.call(t) : t
		}
		function Qi(t, e, n) {
			var r = t ? t.length : 0;
			return r ? (n && "number" != typeof n && mi(t, e, n) ? (e = 0, n = r) : (e = null == e ? 0 : nu(e), n = n === W ? r : nu(n)), hr(t, e, n)) : []
		}
		function to(t, e) {
			return dr(t, e)
		}
		function eo(t, e, n) {
			return vr(t, e, ui(n))
		}
		function no(t, e) {
			var n = t ? t.length : 0;
			if (n) {
				var r = dr(t, e);
				if (r < n && va(t[r], e)) return r
			}
			return -1
		}
		function ro(t, e) {
			return dr(t, e, !0)
		}
		function io(t, e, n) {
			return vr(t, e, ui(n), !0)
		}
		function oo(t, e) {
			if (t ? t.length : 0) {
				var n = dr(t, e, !0) - 1;
				if (va(t[n], e)) return n
			}
			return -1
		}
		function ao(t) {
			return t && t.length ? $r(t) : []
		}
		function uo(t, e) {
			return t && t.length ? mr(t, ui(e)) : []
		}
		function so(t) {
			return Mi(t, 1)
		}
		function co(t, e, n) {
			return t && t.length ? (e = n || e === W ? 1 : nu(e), hr(t, 0, e < 0 ? 0 : e)) : []
		}
		function lo(t, e, n) {
			var r = t ? t.length : 0;
			return r ? (e = n || e === W ? 1 : nu(e), e = r - e, hr(t, e < 0 ? 0 : e, r)) : []
		}
		function fo(t, e) {
			return t && t.length ? wr(t, ui(e, 3), !1, !0) : []
		}
		function ho(t, e) {
			return t && t.length ? wr(t, ui(e, 3)) : []
		}
		function po(t) {
			return t && t.length ? yr(t) : []
		}
		function vo(t, e) {
			return t && t.length ? yr(t, ui(e)) : []
		}
		function $o(t, e) {
			return t && t.length ? yr(t, W, e) : []
		}
		function mo(t) {
			if (!t || !t.length) return [];
			var e = 0;
			return t = s(t, function(t) {
				if (wa(t)) return e = sc(t.length, e), !0
			}), _(e, function(e) {
				return f(t, ir(e))
			})
		}
		function go(t, e) {
			if (!t || !t.length) return [];
			var r = mo(t);
			return null == e ? r : f(r, function(t) {
				return n(e, W, t)
			})
		}
		function yo(t, e) {
			return Cr(t || [], e || [], bn)
		}
		function bo(t, e) {
			return Cr(t || [], e || [], fr)
		}
		function wo(t) {
			var e = xe(t);
			return e.__chain__ = !0, e
		}
		function xo(t, e) {
			return e(t), t
		}
		function _o(t, e) {
			return e(t)
		}
		function Co() {
			return wo(this)
		}
		function So() {
			return new Ae(this.value(), this.__chain__)
		}
		function Eo(t) {
			return this.map(t).flatten()
		}
		function Ao() {
			this.__values__ === W && (this.__values__ = eu(this.value()));
			var t = this.__index__ >= this.__values__.length;
			return {
				done: t,
				value: t ? W : this.__values__[this.__index__++]
			}
		}
		function ko() {
			return this
		}
		function Oo(t) {
			for (var e, n = this; n instanceof Ee;) {
				var r = ji(n);
				r.__index__ = 0, r.__values__ = W, e ? i.__wrapped__ = r : e = r;
				var i = r;
				n = n.__wrapped__
			}
			return i.__wrapped__ = t, e
		}
		function jo() {
			var t = this.__wrapped__;
			if (t instanceof ke) {
				var e = t;
				return this.__actions__.length && (e = new ke(this)), e = e.reverse(), e.__actions__.push({
					func: _o,
					args: [Xi],
					thisArg: W
				}), new Ae(e, this.__chain__)
			}
			return this.thru(Xi)
		}
		function To() {
			return xr(this.__wrapped__, this.__actions__)
		}
		function Io(t, e, n) {
			var r = $l(t) ? u : On;
			return n && mi(t, e, n) && (e = W), r(t, ui(e, 3))
		}
		function Mo(t, e) {
			return ($l(t) ? s : Tn)(t, ui(e, 3))
		}
		function Fo(t, e) {
			if (e = ui(e, 3), $l(t)) {
				var n = g(t, e);
				return n > -1 ? t[n] : W
			}
			return m(t, e, Ec)
		}
		function Do(t, e) {
			if (e = ui(e, 3), $l(t)) {
				var n = g(t, e, !0);
				return n > -1 ? t[n] : W
			}
			return m(t, e, Ac)
		}
		function Ro(t, e) {
			return In(Uo(t, e))
		}
		function Po(t, e) {
			return "function" == typeof e && $l(t) ? o(t, e) : Ec(t, Oi(e))
		}
		function No(t, e) {
			return "function" == typeof e && $l(t) ? a(t, e) : Ac(t, Oi(e))
		}
		function Vo(t, e, n, r) {
			t = ba(t) ? t : Mu(t), n = n && !r ? nu(n) : 0;
			var i = t.length;
			return n < 0 && (n = sc(i + n, 0)), Ga(t) ? n <= i && t.indexOf(e, n) > -1 : !! i && y(t, e, n) > -1
		}
		function Uo(t, e) {
			return ($l(t) ? f : Kn)(t, ui(e, 3))
		}
		function qo(t, e, n, r) {
			return null == t ? [] : ($l(e) || (e = null == e ? [] : [e]), n = r ? W : n, $l(n) || (n = null == n ? [] : [n]), er(t, e, n))
		}
		function Lo(t, e, n) {
			var r = $l(t) ? p : b,
				i = arguments.length < 3;
			return r(t, ui(e, 4), n, i, Ec)
		}
		function Bo(t, e, n) {
			var r = $l(t) ? d : b,
				i = arguments.length < 3;
			return r(t, ui(e, 4), n, i, Ac)
		}
		function Ho(t, e) {
			var n = $l(t) ? s : Tn;
			return e = ui(e, 3), n(t, function(t, n, r) {
				return !e(t, n, r)
			})
		}
		function zo(t) {
			var e = ba(t) ? t : Mu(t),
				n = e.length;
			return n > 0 ? e[cr(0, n - 1)] : W
		}
		function Wo(t, e) {
			var n = -1,
				r = eu(t),
				i = r.length,
				o = i - 1;
			for (e = Cn(nu(e), 0, i); ++n < e;) {
				var a = cr(n, o),
					u = r[a];
				r[a] = r[n], r[n] = u
			}
			return r.length = e, r
		}
		function Go(t) {
			return Wo(t, bt)
		}
		function Jo(t) {
			if (null == t) return 0;
			if (ba(t)) {
				var e = t.length;
				return e && Ga(t) ? L(t) : e
			}
			return bu(t).length
		}
		function Yo(t, e, n) {
			var r = $l(t) ? v : pr;
			return n && mi(t, e, n) && (e = W), r(t, ui(e, 3))
		}
		function Ko(t, e) {
			if ("function" != typeof e) throw new Ds(dt);
			return t = nu(t),
			function() {
				if (--t < 1) return e.apply(this, arguments)
			}
		}
		function Zo(t, e, n) {
			return e = n ? W : e, e = t && null == e ? t.length : e, ni(t, et, W, W, W, W, e)
		}
		function Xo(t, e) {
			var n;
			if ("function" != typeof e) throw new Ds(dt);
			return t = nu(t),
			function() {
				return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = W), n
			}
		}
		function Qo(t, e, n) {
			e = n ? W : e;
			var r = ni(t, Z, W, W, W, W, W, e);
			return r.placeholder = xe.placeholder || Qo.placeholder, r
		}
		function ta(t, e, n) {
			e = n ? W : e;
			var r = ni(t, X, W, W, W, W, W, e);
			return r.placeholder = xe.placeholder || ta.placeholder, r
		}
		function ea(t, e, n) {
			function r() {
				d && Ys(d), l && Ys(l), $ = 0, c = l = p = d = v = W
			}
			function i(e, n) {
				n && Ys(n), l = d = v = W, e && ($ = ul(), f = t.apply(p, c), d || l || (c = p = W))
			}
			function o() {
				var t = e - (ul() - h);
				t <= 0 || t > e ? i(v, l) : d = ec(o, t)
			}
			function a() {
				return (d && v || l && y) && (f = t.apply(p, c)), r(), f
			}
			function u() {
				i(y, d)
			}
			function s() {
				if (c = arguments, h = ul(), p = this, v = y && (d || !m), !1 === g) var n = m && !d;
				else {
					$ || l || m || ($ = h);
					var r = g - (h - $),
						i = r <= 0 || r > g;
					i ? (l && (l = Ys(l)), $ = h, f = t.apply(p, c)) : l || (l = ec(u, r))
				}
				return i && d ? d = Ys(d) : d || e === g || (d = ec(o, e)), n && (i = !0, f = t.apply(p, c)), !i || d || l || (c = p = W), f
			}
			var c, l, f, h, p, d, v, $ = 0,
				m = !1,
				g = !1,
				y = !0;
			if ("function" != typeof t) throw new Ds(dt);
			return e = iu(e) || 0, Ma(n) && (m = !! n.leading, g = "maxWait" in n && sc(iu(n.maxWait) || 0, e), y = "trailing" in n ? !! n.trailing : y), s.cancel = r, s.flush = a, s
		}
		function na(t) {
			return ni(t, rt)
		}
		function ra(t, e) {
			if ("function" != typeof t || e && "function" != typeof e) throw new Ds(dt);
			var n = function() {
				var r = arguments,
					i = e ? e.apply(this, r) : r[0],
					o = n.cache;
				if (o.has(i)) return o.get(i);
				var a = t.apply(this, r);
				return n.cache = o.set(i, a), a
			};
			return n.cache = new ra.Cache, n
		}
		function ia(t) {
			if ("function" != typeof t) throw new Ds(dt);
			return function() {
				return !t.apply(this, arguments)
			}
		}
		function oa(t) {
			return Xo(2, t)
		}
		function aa(t, e) {
			if ("function" != typeof t) throw new Ds(dt);
			return e = sc(e === W ? t.length - 1 : nu(e), 0),
			function() {
				for (var r = arguments, i = -1, o = sc(r.length - e, 0), a = Array(o); ++i < o;) a[i] = r[e + i];
				switch (e) {
					case 0:
						return t.call(this, a);
					case 1:
						return t.call(this, r[0], a);
					case 2:
						return t.call(this, r[0], r[1], a)
				}
				var u = Array(e + 1);
				for (i = -1; ++i < e;) u[i] = r[i];
				return u[e] = a, n(t, this, u)
			}
		}
		function ua(t, e) {
			if ("function" != typeof t) throw new Ds(dt);
			return e = e === W ? 0 : sc(nu(e), 0), aa(function(r) {
				var i = r[e],
					o = r.slice(0, e);
				return i && h(o, i), n(t, this, o)
			})
		}
		function sa(t, e, n) {
			var r = !0,
				i = !0;
			if ("function" != typeof t) throw new Ds(dt);
			return Ma(n) && (r = "leading" in n ? !! n.leading : r, i = "trailing" in n ? !! n.trailing : i), ea(t, e, {
				leading: r,
				maxWait: e,
				trailing: i
			})
		}
		function ca(t) {
			return Zo(t, 1)
		}
		function la(t, e) {
			return e = null == e ? cs : e, pl(e, t)
		}
		function fa(t) {
			return Sn(t)
		}
		function ha(t, e) {
			return Sn(t, !1, e)
		}
		function pa(t) {
			return Sn(t, !0)
		}
		function da(t, e) {
			return Sn(t, !0, e)
		}
		function va(t, e) {
			return t === e || t !== t && e !== e
		}
		function $a(t, e) {
			return t > e
		}
		function ma(t, e) {
			return t >= e
		}
		function ga(t) {
			return wa(t) && Vs.call(t, "callee") && (!tc.call(t, "callee") || Ls.call(t) == Ct)
		}
		function ya(t) {
			return Fa(t) && Ls.call(t) == Ut
		}
		function ba(t) {
			return null != t && !("function" == typeof t && ja(t)) && Ia(Mc(t))
		}
		function wa(t) {
			return Fa(t) && ba(t)
		}
		function xa(t) {
			return !0 === t || !1 === t || Fa(t) && Ls.call(t) == Et
		}
		function _a(t) {
			return Fa(t) && Ls.call(t) == At
		}
		function Ca(t) {
			return !!t && 1 === t.nodeType && Fa(t) && !Ba(t)
		}
		function Sa(t) {
			if (ba(t) && ($l(t) || Ga(t) || ja(t.splice) || ga(t))) return !t.length;
			for (var e in t) if (Vs.call(t, e)) return !1;
			return !0
		}
		function Ea(t, e) {
			return Hn(t, e)
		}
		function Aa(t, e, n) {
			n = "function" == typeof n ? n : W;
			var r = n ? n(t, e) : W;
			return r === W ? Hn(t, e, n) : !! r
		}
		function ka(t) {
			return Fa(t) && "string" == typeof t.message && Ls.call(t) == kt
		}
		function Oa(t) {
			return "number" == typeof t && oc(t)
		}
		function ja(t) {
			var e = Ma(t) ? Ls.call(t) : "";
			return e == Ot || e == jt
		}
		function Ta(t) {
			return "number" == typeof t && t == nu(t)
		}
		function Ia(t) {
			return "number" == typeof t && t > -1 && t % 1 == 0 && t <= mt
		}
		function Ma(t) {
			var e = typeof t;
			return !!t && ("object" == e || "function" == e)
		}
		function Fa(t) {
			return !!t && "object" == typeof t
		}
		function Da(t) {
			return Fa(t) && li(t) == Tt
		}
		function Ra(t, e) {
			return t === e || Wn(t, e, si(e))
		}
		function Pa(t, e, n) {
			return n = "function" == typeof n ? n : W, Wn(t, e, si(e), n)
		}
		function Na(t) {
			return La(t) && t != +t
		}
		function Va(t) {
			return null != t && (ja(t) ? Hs.test(Ns.call(t)) : Fa(t) && (R(t) ? Hs : be).test(t))
		}
		function Ua(t) {
			return null === t
		}
		function qa(t) {
			return null == t
		}
		function La(t) {
			return "number" == typeof t || Fa(t) && Ls.call(t) == It
		}
		function Ba(t) {
			if (!Fa(t) || Ls.call(t) != Mt || R(t)) return !1;
			var e = Ps;
			if ("function" == typeof t.constructor && (e = Zs(t)), null === e) return !0;
			var n = e.constructor;
			return "function" == typeof n && n instanceof n && Ns.call(n) == qs
		}
		function Ha(t) {
			return Ma(t) && Ls.call(t) == Ft
		}
		function za(t) {
			return Ta(t) && t >= -mt && t <= mt
		}
		function Wa(t) {
			return Fa(t) && li(t) == Dt
		}
		function Ga(t) {
			return "string" == typeof t || !$l(t) && Fa(t) && Ls.call(t) == Rt
		}
		function Ja(t) {
			return "symbol" == typeof t || Fa(t) && Ls.call(t) == Pt
		}
		function Ya(t) {
			return Fa(t) && Ia(t.length) && !! Ye[Ls.call(t)]
		}
		function Ka(t) {
			return t === W
		}
		function Za(t) {
			return Fa(t) && li(t) == Nt
		}
		function Xa(t) {
			return Fa(t) && Ls.call(t) == Vt
		}
		function Qa(t, e) {
			return t < e
		}
		function tu(t, e) {
			return t <= e
		}
		function eu(t) {
			if (!t) return [];
			if (ba(t)) return Ga(t) ? B(t) : Fr(t);
			if (Qs && t[Qs]) return N(t[Qs]());
			var e = li(t);
			return (e == Tt ? V : e == Dt ? q : Mu)(t)
		}
		function nu(t) {
			if (!t) return 0 === t ? t : 0;
			if ((t = iu(t)) === $t || t === -$t) {
				return (t < 0 ? -1 : 1) * gt
			}
			var e = t % 1;
			return t === t ? e ? t - e : t : 0
		}
		function ru(t) {
			return t ? Cn(nu(t), 0, bt) : 0
		}
		function iu(t) {
			if (Ma(t)) {
				var e = ja(t.valueOf) ? t.valueOf() : t;
				t = Ma(e) ? e + "" : e
			}
			if ("string" != typeof t) return 0 === t ? t : +t;
			t = t.replace(fe, "");
			var n = ye.test(t);
			return n || we.test(t) ? rn(t.slice(2), n ? 2 : 8) : ge.test(t) ? yt : +t
		}
		function ou(t) {
			return Dr(t, wu(t))
		}
		function au(t) {
			return Cn(nu(t), -mt, mt)
		}
		function uu(t) {
			if ("string" == typeof t) return t;
			if (null == t) return "";
			if (Ja(t)) return Gs ? _c.call(t) : "";
			var e = t + "";
			return "0" == e && 1 / t == -$t ? "-0" : e
		}
		function su(t, e) {
			var n = Sc(t);
			return e ? xn(n, e) : n
		}
		function cu(t, e) {
			return m(t, ui(e, 3), Fn, !0)
		}
		function lu(t, e) {
			return m(t, ui(e, 3), Dn, !0)
		}
		function fu(t, e) {
			return null == t ? t : kc(t, Oi(e), wu)
		}
		function hu(t, e) {
			return null == t ? t : Oc(t, Oi(e), wu)
		}
		function pu(t, e) {
			return t && Fn(t, Oi(e))
		}
		function du(t, e) {
			return t && Dn(t, Oi(e))
		}
		function vu(t) {
			return null == t ? [] : Rn(t, bu(t))
		}
		function $u(t) {
			return null == t ? [] : Rn(t, wu(t))
		}
		function mu(t, e, n) {
			var r = null == t ? W : Pn(t, e);
			return r === W ? n : r
		}
		function gu(t, e) {
			return hi(t, e, Nn)
		}
		function yu(t, e) {
			return hi(t, e, Vn)
		}
		function bu(t) {
			var e = wi(t);
			if (!e && !ba(t)) return Jn(t);
			var n = $i(t),
				r = !! n,
				i = n || [],
				o = i.length;
			for (var a in t)!Nn(t, a) || r && ("length" == a || P(a, o)) || e && "constructor" == a || i.push(a);
			return i
		}
		function wu(t) {
			for (var e = -1, n = wi(t), r = Yn(t), i = r.length, o = $i(t), a = !! o, u = o || [], s = u.length; ++e < i;) {
				var c = r[e];
				a && ("length" == c || P(c, s)) || "constructor" == c && (n || !Vs.call(t, c)) || u.push(c)
			}
			return u
		}
		function xu(t, e) {
			var n = {};
			return e = ui(e, 3), Fn(t, function(t, r, i) {
				n[e(t, r, i)] = t
			}), n
		}
		function _u(t, e) {
			var n = {};
			return e = ui(e, 3), Fn(t, function(t, r, i) {
				n[r] = e(t, r, i)
			}), n
		}
		function Cu(t, e) {
			return e = ui(e, 2), rr(t, function(t, n) {
				return !e(t, n)
			})
		}
		function Su(t, e) {
			return null == t ? {} : rr(t, ui(e, 2))
		}
		function Eu(t, e, n) {
			if (gi(e, t)) r = null == t ? W : t[e];
			else {
				e = gr(e);
				var r = mu(t, e);
				t = Si(t, e)
			}
			return r === W && (r = n), ja(r) ? r.call(t) : r
		}
		function Au(t, e, n) {
			return null == t ? t : fr(t, e, n)
		}
		function ku(t, e, n, r) {
			return r = "function" == typeof r ? r : W, null == t ? t : fr(t, e, n, r)
		}
		function Ou(t) {
			return C(t, bu(t))
		}
		function ju(t) {
			return C(t, wu(t))
		}
		function Tu(t, e, n) {
			var r = $l(t) || Ya(t);
			if (e = ui(e, 4), null == n) if (r || Ma(t)) {
				var i = t.constructor;
				n = r ? $l(t) ? new i : [] : Sc(ja(i) ? i.prototype : W)
			} else n = {};
			return (r ? o : Fn)(t, function(t, r, i) {
				return e(n, t, r, i)
			}), n
		}
		function Iu(t, e) {
			return null == t || br(t, e)
		}
		function Mu(t) {
			return t ? E(t, bu(t)) : []
		}
		function Fu(t) {
			return null == t ? E(t, wu(t)) : []
		}
		function Du(t, e, n) {
			return n === W && (n = e, e = W), n !== W && (n = iu(n), n = n === n ? n : 0), e !== W && (e = iu(e), e = e === e ? e : 0), Cn(iu(t), e, n)
		}
		function Ru(t, e, n) {
			return e = iu(e) || 0, n === W ? (n = e, e = 0) : n = iu(n) || 0, t = iu(t), Un(t, e, n)
		}
		function Pu(t, e, n) {
			if (n && "boolean" != typeof n && mi(t, e, n) && (e = n = W), n === W && ("boolean" == typeof e ? (n = e, e = W) : "boolean" == typeof t && (n = t, t = W)), t === W && e === W ? (t = 0, e = 1) : (t = iu(t) || 0, e === W ? (e = t, t = 0) : e = iu(e) || 0), t > e) {
				var r = t;
				t = e, e = r
			}
			if (n || t % 1 || e % 1) {
				var i = fc();
				return cc(t + i * (e - t + nn("1e-" + ((i + "").length - 1))), e)
			}
			return cr(t, e)
		}
		function Nu(t) {
			return Rl(uu(t).toLowerCase())
		}
		function Vu(t) {
			return (t = uu(t)) && t.replace(_e, I).replace(qe, "")
		}
		function Uu(t, e, n) {
			t = uu(t), e = "string" == typeof e ? e : e + "";
			var r = t.length;
			return n = n === W ? r : Cn(nu(n), 0, r), (n -= e.length) >= 0 && t.indexOf(e, n) == n
		}
		function qu(t) {
			return t = uu(t), t && ne.test(t) ? t.replace(te, M) : t
		}
		function Lu(t) {
			return t = uu(t), t && le.test(t) ? t.replace(ce, "\\$&") : t
		}
		function Bu(t, e, n) {
			t = uu(t), e = nu(e);
			var r = L(t);
			if (!e || r >= e) return t;
			var i = (e - r) / 2,
				o = ic(i),
				a = rc(i);
			return Zr("", o, n) + t + Zr("", a, n)
		}
		function Hu(t, e, n) {
			return (t = uu(t)) + Zr(t, e, n)
		}
		function zu(t, e, n) {
			return t = uu(t), Zr(t, e, n) + t
		}
		function Wu(t, e, n) {
			return n || null == e ? e = 0 : e && (e = +e), t = uu(t).replace(fe, ""), lc(t, e || (me.test(t) ? 16 : 10))
		}
		function Gu(t, e) {
			t = uu(t), e = nu(e);
			var n = "";
			if (!t || e < 1 || e > mt) return n;
			do {
				e % 2 && (n += t), e = ic(e / 2), t += t
			} while (e);
			return n
		}
		function Ju() {
			var t = arguments,
				e = uu(t[0]);
			return t.length < 3 ? e : e.replace(t[1], t[2])
		}
		function Yu(t, e, n) {
			return uu(t).split(e, n)
		}
		function Ku(t, e, n) {
			return t = uu(t), n = Cn(nu(n), 0, t.length), t.lastIndexOf(e, n) == n
		}
		function Zu(t, e, n) {
			var r = xe.templateSettings;
			n && mi(t, e, n) && (e = W), t = uu(t), e = bl({}, e, r, gn);
			var i, o, a = bl({}, e.imports, r.imports, gn),
				u = bu(a),
				s = E(a, u),
				c = 0,
				l = e.interpolate || Ce,
				f = "__p += '",
				h = Fs((e.escape || Ce).source + "|" + l.source + "|" + (l === oe ? ve : Ce).source + "|" + (e.evaluate || Ce).source + "|$", "g"),
				p = "//# sourceURL=" + ("sourceURL" in e ? e.sourceURL : "lodash.templateSources[" + ++Je + "]") + "\n";
			t.replace(h, function(e, n, r, a, u, s) {
				return r || (r = a), f += t.slice(c, s).replace(Se, F), n && (i = !0, f += "' +\n__e(" + n + ") +\n'"), u && (o = !0, f += "';\n" + u + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), c = s + e.length, e
			}), f += "';\n";
			var d = e.variable;
			d || (f = "with (obj) {\n" + f + "\n}\n"), f = (o ? f.replace(Kt, "") : f).replace(Zt, "$1").replace(Xt, "$1;"), f = "function(" + (d || "obj") + ") {\n" + (d ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
			var v = Ul(function() {
				return Function(u, p + "return " + f).apply(W, s)
			});
			if (v.source = f, ka(v)) throw v;
			return v
		}
		function Xu(t) {
			return uu(t).toLowerCase()
		}
		function Qu(t) {
			return uu(t).toUpperCase()
		}
		function ts(t, e, n) {
			if (!(t = uu(t))) return t;
			if (n || e === W) return t.replace(fe, "");
			if (!(e += "")) return t;
			var r = B(t),
				i = B(e);
			return r.slice(A(r, i), k(r, i) + 1).join("")
		}
		function es(t, e, n) {
			if (!(t = uu(t))) return t;
			if (n || e === W) return t.replace(pe, "");
			if (!(e += "")) return t;
			var r = B(t);
			return r.slice(0, k(r, B(e)) + 1).join("")
		}
		function ns(t, e, n) {
			if (!(t = uu(t))) return t;
			if (n || e === W) return t.replace(he, "");
			if (!(e += "")) return t;
			var r = B(t);
			return r.slice(A(r, B(e))).join("")
		}
		function rs(t, e) {
			var n = at,
				r = ut;
			if (Ma(e)) {
				var i = "separator" in e ? e.separator : i;
				n = "length" in e ? nu(e.length) : n, r = "omission" in e ? uu(e.omission) : r
			}
			t = uu(t);
			var o = t.length;
			if (Be.test(t)) {
				var a = B(t);
				o = a.length
			}
			if (n >= o) return t;
			var u = n - L(r);
			if (u < 1) return r;
			var s = a ? a.slice(0, u).join("") : t.slice(0, u);
			if (i === W) return s + r;
			if (a && (u += s.length - u), Ha(i)) {
				if (t.slice(u).search(i)) {
					var c, l = s;
					for (i.global || (i = Fs(i.source, uu($e.exec(i)) + "g")), i.lastIndex = 0; c = i.exec(l);) var f = c.index;
					s = s.slice(0, f === W ? u : f)
				}
			} else if (t.indexOf(i, u) != u) {
				var h = s.lastIndexOf(i);
				h > -1 && (s = s.slice(0, h))
			}
			return s + r
		}
		function is(t) {
			return t = uu(t), t && ee.test(t) ? t.replace(Qt, H) : t
		}
		function os(t, e, n) {
			return t = uu(t), e = n ? W : e, e === W && (e = We.test(t) ? ze : He), t.match(e) || []
		}
		function as(t) {
			var e = t ? t.length : 0,
				r = ui();
			return t = e ? f(t, function(t) {
				if ("function" != typeof t[1]) throw new Ds(dt);
				return [r(t[0]), t[1]]
			}) : [], aa(function(r) {
				for (var i = -1; ++i < e;) {
					var o = t[i];
					if (n(o[0], this, r)) return n(o[1], this, r)
				}
			})
		}
		function us(t) {
			return En(Sn(t, !0))
		}
		function ss(t) {
			return function() {
				return t
			}
		}
		function cs(t) {
			return t
		}
		function ls(t) {
			return Gn("function" == typeof t ? t : Sn(t, !0))
		}
		function fs(t) {
			return Zn(Sn(t, !0))
		}
		function hs(t, e) {
			return Xn(t, Sn(e, !0))
		}
		function ps(t, e, n) {
			var r = bu(e),
				i = Rn(e, r);
			null != n || Ma(e) && (i.length || !r.length) || (n = e, e = t, t = this, i = Rn(e, bu(e)));
			var a = !(Ma(n) && "chain" in n) || n.chain,
				u = ja(t);
			return o(i, function(n) {
				var r = e[n];
				t[n] = r, u && (t.prototype[n] = function() {
					var e = this.__chain__;
					if (a || e) {
						var n = t(this.__wrapped__);
						return (n.__actions__ = Fr(this.__actions__)).push({
							func: r,
							args: arguments,
							thisArg: t
						}), n.__chain__ = e, n
					}
					return r.apply(t, h([this.value()], arguments))
				})
			}), t
		}
		function ds() {
			return hn._ === this && (hn._ = Bs), this
		}
		function vs() {}
		function $s(t) {
			return t = nu(t),
			function() {
				return arguments[t]
			}
		}
		function ms(t) {
			return gi(t) ? ir(t) : or(t)
		}
		function gs(t) {
			return function(e) {
				return null == t ? W : Pn(t, e)
			}
		}
		function ys(t, e) {
			if ((t = nu(t)) < 1 || t > mt) return [];
			var n = bt,
				r = cc(t, bt);
			e = Oi(e), t -= bt;
			for (var i = _(r, e); ++n < t;) e(n);
			return i
		}
		function bs(t) {
			return $l(t) ? f(t, String) : Ai(t)
		}
		function ws(t) {
			var e = ++Us;
			return uu(t) + e
		}
		function xs(t, e) {
			var n;
			return t === W && e === W ? 0 : (t !== W && (n = t), e !== W && (n = n === W ? e : n + e), n)
		}
		function _s(t) {
			return t && t.length ? $(t, cs, $a) : W
		}
		function Cs(t, e) {
			return t && t.length ? $(t, ui(e), $a) : W
		}
		function Ss(t) {
			return Os(t) / (t ? t.length : 0)
		}
		function Es(t) {
			return t && t.length ? $(t, cs, Qa) : W
		}
		function As(t, e) {
			return t && t.length ? $(t, ui(e), Qa) : W
		}
		function ks(t, e) {
			var n;
			return t === W && e === W ? 0 : (t !== W && (n = t), e !== W && (n = n === W ? e : n - e), n)
		}
		function Os(t) {
			return t && t.length ? x(t, cs) : 0
		}
		function js(t, e) {
			return t && t.length ? x(t, ui(e)) : 0
		}
		O = O ? pn.defaults({}, O, pn.pick(hn, Ge)) : hn;
		var Ts = O.Date,
			Is = O.Error,
			Ms = O.Math,
			Fs = O.RegExp,
			Ds = O.TypeError,
			Rs = O.Array.prototype,
			Ps = O.Object.prototype,
			Ns = O.Function.prototype.toString,
			Vs = Ps.hasOwnProperty,
			Us = 0,
			qs = Ns.call(Object),
			Ls = Ps.toString,
			Bs = hn._,
			Hs = Fs("^" + Ns.call(Vs).replace(ce, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
			zs = ln ? O.Buffer : W,
			Ws = O.Reflect,
			Gs = O.Symbol,
			Js = O.Uint8Array,
			Ys = O.clearTimeout,
			Ks = Ws ? Ws.enumerate : W,
			Zs = Object.getPrototypeOf,
			Xs = Object.getOwnPropertySymbols,
			Qs = "symbol" == typeof(Qs = Gs && Gs.iterator) ? Qs : W,
			tc = Ps.propertyIsEnumerable,
			ec = O.setTimeout,
			nc = Rs.splice,
			rc = Ms.ceil,
			ic = Ms.floor,
			oc = O.isFinite,
			ac = Rs.join,
			uc = Object.keys,
			sc = Ms.max,
			cc = Ms.min,
			lc = O.parseInt,
			fc = Ms.random,
			hc = Rs.reverse,
			pc = ci(O, "Map"),
			dc = ci(O, "Set"),
			vc = ci(O, "WeakMap"),
			$c = ci(Object, "create"),
			mc = vc && new vc,
			gc = pc ? Ns.call(pc) : "",
			yc = dc ? Ns.call(dc) : "",
			bc = vc ? Ns.call(vc) : "",
			wc = Gs ? Gs.prototype : W,
			xc = Gs ? wc.valueOf : W,
			_c = Gs ? wc.toString : W,
			Cc = {};
		xe.templateSettings = {
			escape: re,
			evaluate: ie,
			interpolate: oe,
			variable: "",
			imports: {
				_: xe
			}
		};
		var Sc = function() {
			function t() {}
			return function(e) {
				if (Ma(e)) {
					t.prototype = e;
					var n = new t;
					t.prototype = W
				}
				return n || {}
			}
		}(),
			Ec = Ur(Fn),
			Ac = Ur(Dn, !0),
			kc = qr(),
			Oc = qr(!0);
		Ks && !tc.call({
			valueOf: 1
		}, "valueOf") && (Yn = function(t) {
			return N(Ks(t))
		});
		var jc = mc ? function(t, e) {
				return mc.set(t, e), t
			} : cs,
			Tc = dc && 2 === new dc([1, 2]).size ? function(t) {
				return new dc(t)
			} : vs,
			Ic = mc ? function(t) {
				return mc.get(t)
			} : vs,
			Mc = ir("length"),
			Fc = Xs || function() {
				return []
			};
		(pc && li(new pc) != Tt || dc && li(new dc) != Dt || vc && li(new vc) != Nt) && (li = function(t) {
			var e = Ls.call(t),
				n = e == Mt ? t.constructor : null,
				r = "function" == typeof n ? Ns.call(n) : "";
			if (r) switch (r) {
				case gc:
					return Tt;
				case yc:
					return Dt;
				case bc:
					return Nt
			}
			return e
		});
		var Dc = function() {
			var t = 0,
				e = 0;
			return function(n, r) {
				var i = ul(),
					o = ct - (i - e);
				if (e = i, o > 0) {
					if (++t >= st) return n
				} else t = 0;
				return jc(n, r)
			}
		}(),
			Rc = aa(function(t, e) {
				return $l(t) || (t = null == t ? [] : [Object(t)]), e = In(e), i(t, e)
			}),
			Pc = aa(function(t, e) {
				return wa(t) ? kn(t, In(e, !1, !0)) : []
			}),
			Nc = aa(function(t, e) {
				var n = Gi(e);
				return wa(n) && (n = W), wa(t) ? kn(t, In(e, !1, !0), ui(n)) : []
			}),
			Vc = aa(function(t, e) {
				var n = Gi(e);
				return wa(n) && (n = W), wa(t) ? kn(t, In(e, !1, !0), W, n) : []
			}),
			Uc = aa(function(t) {
				var e = f(t, ki);
				return e.length && e[0] === t[0] ? qn(e) : []
			}),
			qc = aa(function(t) {
				var e = Gi(t),
					n = f(t, ki);
				return e === Gi(n) ? e = W : n.pop(), n.length && n[0] === t[0] ? qn(n, ui(e)) : []
			}),
			Lc = aa(function(t) {
				var e = Gi(t),
					n = f(t, ki);
				return e === Gi(n) ? e = W : n.pop(), n.length && n[0] === t[0] ? qn(n, W, e) : []
			}),
			Bc = aa(Yi),
			Hc = aa(function(t, e) {
				e = f(In(e), String);
				var n = _n(t, e);
				return sr(t, e.sort(j)), n
			}),
			zc = aa(function(t) {
				return yr(In(t, !1, !0))
			}),
			Wc = aa(function(t) {
				var e = Gi(t);
				return wa(e) && (e = W), yr(In(t, !1, !0), ui(e))
			}),
			Gc = aa(function(t) {
				var e = Gi(t);
				return wa(e) && (e = W), yr(In(t, !1, !0), W, e)
			}),
			Jc = aa(function(t, e) {
				return wa(t) ? kn(t, e) : []
			}),
			Yc = aa(function(t) {
				return _r(s(t, wa))
			}),
			Kc = aa(function(t) {
				var e = Gi(t);
				return wa(e) && (e = W), _r(s(t, wa), ui(e))
			}),
			Zc = aa(function(t) {
				var e = Gi(t);
				return wa(e) && (e = W), _r(s(t, wa), W, e)
			}),
			Xc = aa(mo),
			Qc = aa(function(t) {
				var e = t.length,
					n = e > 1 ? t[e - 1] : W;
				return n = "function" == typeof n ? (t.pop(), n) : W, go(t, n)
			}),
			tl = aa(function(t) {
				t = In(t);
				var e = t.length,
					n = e ? t[0] : 0,
					r = this.__wrapped__,
					i = function(e) {
						return _n(e, t)
					};
				return !(e > 1 || this.__actions__.length) && r instanceof ke && P(n) ? (r = r.slice(n, +n + (e ? 1 : 0)), r.__actions__.push({
					func: _o,
					args: [i],
					thisArg: W
				}), new Ae(r, this.__chain__).thru(function(t) {
					return e && !t.length && t.push(W), t
				})) : this.thru(i)
			}),
			el = Nr(function(t, e, n) {
				Vs.call(t, n) ? ++t[n] : t[n] = 1
			}),
			nl = Nr(function(t, e, n) {
				Vs.call(t, n) ? t[n].push(e) : t[n] = [e]
			}),
			rl = aa(function(t, e, r) {
				var i = -1,
					o = "function" == typeof e,
					a = gi(e),
					u = ba(t) ? Array(t.length) : [];
				return Ec(t, function(t) {
					var s = o ? e : a && null != t ? t[e] : W;
					u[++i] = s ? n(s, t, r) : Bn(t, e, r)
				}), u
			}),
			il = Nr(function(t, e, n) {
				t[n] = e
			}),
			ol = Nr(function(t, e, n) {
				t[n ? 0 : 1].push(e)
			}, function() {
				return [[], []]
			}),
			al = aa(function(t, e) {
				if (null == t) return [];
				var n = e.length;
				return n > 1 && mi(t, e[0], e[1]) ? e = [] : n > 2 && mi(e[0], e[1], e[2]) && (e.length = 1), er(t, In(e), [])
			}),
			ul = Ts.now,
			sl = aa(function(t, e, n) {
				var r = J;
				if (n.length) {
					var i = xe.placeholder || sl.placeholder,
						o = U(n, i);
					r |= Q
				}
				return ni(t, r, e, n, o)
			}),
			cl = aa(function(t, e, n) {
				var r = J | Y;
				if (n.length) {
					var i = xe.placeholder || cl.placeholder,
						o = U(n, i);
					r |= Q
				}
				return ni(e, r, t, n, o)
			}),
			ll = aa(function(t, e) {
				return An(t, 1, e)
			}),
			fl = aa(function(t, e, n) {
				return An(t, iu(e) || 0, n)
			}),
			hl = aa(function(t, e) {
				e = f(In(e), ui());
				var r = e.length;
				return aa(function(i) {
					for (var o = -1, a = cc(i.length, r); ++o < a;) i[o] = e[o].call(this, i[o]);
					return n(t, this, i)
				})
			}),
			pl = aa(function(t, e) {
				var n = xe.placeholder || pl.placeholder,
					r = U(e, n);
				return ni(t, Q, W, e, r)
			}),
			dl = aa(function(t, e) {
				var n = xe.placeholder || dl.placeholder,
					r = U(e, n);
				return ni(t, tt, W, e, r)
			}),
			vl = aa(function(t, e) {
				return ni(t, nt, W, W, W, In(e))
			}),
			$l = Array.isArray,
			ml = zs ? function(t) {
				return t instanceof zs
			} : ss(!1),
			gl = Vr(function(t, e) {
				Dr(e, bu(e), t)
			}),
			yl = Vr(function(t, e) {
				Dr(e, wu(e), t)
			}),
			bl = Vr(function(t, e, n, r) {
				Rr(e, wu(e), t, r)
			}),
			wl = Vr(function(t, e, n, r) {
				Rr(e, bu(e), t, r)
			}),
			xl = aa(function(t, e) {
				return _n(t, In(e))
			}),
			_l = aa(function(t) {
				return t.push(W, gn), n(bl, W, t)
			}),
			Cl = aa(function(t) {
				return t.push(W, Ci), n(Ol, W, t)
			}),
			Sl = Yr(function(t, e, n) {
				t[e] = n
			}, ss(cs)),
			El = Yr(function(t, e, n) {
				Vs.call(t, e) ? t[e].push(n) : t[e] = [n]
			}, ui),
			Al = aa(Bn),
			kl = Vr(function(t, e, n) {
				Qn(t, e, n)
			}),
			Ol = Vr(function(t, e, n, r) {
				Qn(t, e, n, r)
			}),
			jl = aa(function(t, e) {
				return null == t ? {} : (e = f(In(e), String), nr(t, kn(wu(t), e)))
			}),
			Tl = aa(function(t, e) {
				return null == t ? {} : nr(t, In(e))
			}),
			Il = Hr(function(t, e, n) {
				return e = e.toLowerCase(), t + (n ? Nu(e) : e)
			}),
			Ml = Hr(function(t, e, n) {
				return t + (n ? "-" : "") + e.toLowerCase()
			}),
			Fl = Hr(function(t, e, n) {
				return t + (n ? " " : "") + e.toLowerCase()
			}),
			Dl = Br("toLowerCase"),
			Rl = Br("toUpperCase"),
			Pl = Hr(function(t, e, n) {
				return t + (n ? "_" : "") + e.toLowerCase()
			}),
			Nl = Hr(function(t, e, n) {
				return t + (n ? " " : "") + Nu(e)
			}),
			Vl = Hr(function(t, e, n) {
				return t + (n ? " " : "") + e.toUpperCase()
			}),
			Ul = aa(function(t, e) {
				try {
					return n(t, W, e)
				} catch (t) {
					return Ma(t) ? t : new Is(t)
				}
			}),
			ql = aa(function(t, e) {
				return o(In(e), function(e) {
					t[e] = sl(t[e], t)
				}), t
			}),
			Ll = Gr(),
			Bl = Gr(!0),
			Hl = aa(function(t, e) {
				return function(n) {
					return Bn(n, t, e)
				}
			}),
			zl = aa(function(t, e) {
				return function(n) {
					return Bn(t, n, e)
				}
			}),
			Wl = Kr(f),
			Gl = Kr(u),
			Jl = Kr(v),
			Yl = Qr(),
			Kl = Qr(!0),
			Zl = ei("ceil"),
			Xl = ei("floor"),
			Ql = ei("round");
		return xe.prototype = Ee.prototype, Ae.prototype = Sc(Ee.prototype), Ae.prototype.constructor = Ae, ke.prototype = Sc(Ee.prototype), ke.prototype.constructor = ke, Ie.prototype = $c ? $c(null) : Ps, Pe.prototype.clear = Ne, Pe.prototype.delete = Ve, Pe.prototype.get = Ue, Pe.prototype.has = Le, Pe.prototype.set = Ze, Xe.prototype.push = tn, en.prototype.clear = on, en.prototype.delete = an, en.prototype.get = un, en.prototype.has = sn, en.prototype.set = cn, ra.Cache = Pe, xe.after = Ko, xe.ary = Zo, xe.assign = gl, xe.assignIn = yl, xe.assignInWith = bl, xe.assignWith = wl, xe.at = xl, xe.before = Xo, xe.bind = sl, xe.bindAll = ql, xe.bindKey = cl, xe.chain = wo, xe.chunk = Ti, xe.compact = Ii, xe.concat = Rc, xe.cond = as, xe.conforms = us, xe.constant = ss, xe.countBy = el, xe.create = su, xe.curry = Qo, xe.curryRight = ta, xe.debounce = ea, xe.defaults = _l, xe.defaultsDeep = Cl, xe.defer = ll, xe.delay = fl, xe.difference = Pc, xe.differenceBy = Nc, xe.differenceWith = Vc, xe.drop = Mi, xe.dropRight = Fi, xe.dropRightWhile = Di, xe.dropWhile = Ri, xe.fill = Pi, xe.filter = Mo, xe.flatMap = Ro, xe.flatten = Ui, xe.flattenDeep = qi, xe.flip = na, xe.flow = Ll, xe.flowRight = Bl, xe.fromPairs = Li, xe.functions = vu, xe.functionsIn = $u, xe.groupBy = nl, xe.initial = zi, xe.intersection = Uc, xe.intersectionBy = qc, xe.intersectionWith = Lc, xe.invert = Sl, xe.invertBy = El, xe.invokeMap = rl, xe.iteratee = ls, xe.keyBy = il, xe.keys = bu, xe.keysIn = wu, xe.map = Uo, xe.mapKeys = xu, xe.mapValues = _u, xe.matches = fs, xe.matchesProperty = hs, xe.memoize = ra, xe.merge = kl, xe.mergeWith = Ol, xe.method = Hl, xe.methodOf = zl, xe.mixin = ps, xe.negate = ia, xe.nthArg = $s, xe.omit = jl, xe.omitBy = Cu, xe.once = oa, xe.orderBy = qo, xe.over = Wl, xe.overArgs = hl, xe.overEvery = Gl, xe.overSome = Jl, xe.partial = pl, xe.partialRight = dl, xe.partition = ol, xe.pick = Tl, xe.pickBy = Su, xe.property = ms, xe.propertyOf = gs, xe.pull = Bc, xe.pullAll = Yi, xe.pullAllBy = Ki, xe.pullAt = Hc, xe.range = Yl, xe.rangeRight = Kl, xe.rearg = vl, xe.reject = Ho, xe.remove = Zi, xe.rest = aa, xe.reverse = Xi, xe.sampleSize = Wo, xe.set = Au, xe.setWith = ku, xe.shuffle = Go, xe.slice = Qi, xe.sortBy = al, xe.sortedUniq = ao, xe.sortedUniqBy = uo, xe.split = Yu, xe.spread = ua, xe.tail = so, xe.take = co, xe.takeRight = lo, xe.takeRightWhile = fo, xe.takeWhile = ho, xe.tap = xo, xe.throttle = sa, xe.thru = _o, xe.toArray = eu, xe.toPairs = Ou, xe.toPairsIn = ju, xe.toPath = bs, xe.toPlainObject = ou, xe.transform = Tu, xe.unary = ca, xe.union = zc, xe.unionBy = Wc, xe.unionWith = Gc, xe.uniq = po, xe.uniqBy = vo, xe.uniqWith = $o, xe.unset = Iu, xe.unzip = mo, xe.unzipWith = go, xe.values = Mu, xe.valuesIn = Fu, xe.without = Jc, xe.words = os, xe.wrap = la, xe.xor = Yc, xe.xorBy = Kc, xe.xorWith = Zc, xe.zip = Xc, xe.zipObject = yo, xe.zipObjectDeep = bo, xe.zipWith = Qc, xe.extend = yl, xe.extendWith = bl, ps(xe, xe), xe.add = xs, xe.attempt = Ul, xe.camelCase = Il, xe.capitalize = Nu, xe.ceil = Zl, xe.clamp = Du, xe.clone = fa, xe.cloneDeep = pa, xe.cloneDeepWith = da, xe.cloneWith = ha, xe.deburr = Vu, xe.endsWith = Uu, xe.eq = va, xe.escape = qu, xe.escapeRegExp = Lu, xe.every = Io, xe.find = Fo, xe.findIndex = Ni, xe.findKey = cu, xe.findLast = Do, xe.findLastIndex = Vi, xe.findLastKey = lu, xe.floor = Xl, xe.forEach = Po, xe.forEachRight = No, xe.forIn = fu, xe.forInRight = hu, xe.forOwn = pu, xe.forOwnRight = du, xe.get = mu, xe.gt = $a, xe.gte = ma, xe.has = gu, xe.hasIn = yu, xe.head = Bi, xe.identity = cs, xe.includes = Vo, xe.indexOf = Hi, xe.inRange = Ru, xe.invoke = Al, xe.isArguments = ga, xe.isArray = $l, xe.isArrayBuffer = ya, xe.isArrayLike = ba, xe.isArrayLikeObject = wa, xe.isBoolean = xa, xe.isBuffer = ml, xe.isDate = _a, xe.isElement = Ca, xe.isEmpty = Sa, xe.isEqual = Ea, xe.isEqualWith = Aa, xe.isError = ka, xe.isFinite = Oa, xe.isFunction = ja, xe.isInteger = Ta, xe.isLength = Ia, xe.isMap = Da, xe.isMatch = Ra, xe.isMatchWith = Pa, xe.isNaN = Na, xe.isNative = Va, xe.isNil = qa, xe.isNull = Ua, xe.isNumber = La, xe.isObject = Ma, xe.isObjectLike = Fa, xe.isPlainObject = Ba, xe.isRegExp = Ha, xe.isSafeInteger = za, xe.isSet = Wa, xe.isString = Ga, xe.isSymbol = Ja, xe.isTypedArray = Ya, xe.isUndefined = Ka, xe.isWeakMap = Za, xe.isWeakSet = Xa, xe.join = Wi, xe.kebabCase = Ml, xe.last = Gi, xe.lastIndexOf = Ji, xe.lowerCase = Fl, xe.lowerFirst = Dl, xe.lt = Qa, xe.lte = tu, xe.max = _s, xe.maxBy = Cs, xe.mean = Ss, xe.min = Es, xe.minBy = As, xe.noConflict = ds, xe.noop = vs, xe.now = ul, xe.pad = Bu, xe.padEnd = Hu, xe.padStart = zu, xe.parseInt = Wu, xe.random = Pu, xe.reduce = Lo, xe.reduceRight = Bo, xe.repeat = Gu, xe.replace = Ju, xe.result = Eu, xe.round = Ql, xe.runInContext = z, xe.sample = zo, xe.size = Jo, xe.snakeCase = Pl, xe.some = Yo, xe.sortedIndex = to, xe.sortedIndexBy = eo, xe.sortedIndexOf = no, xe.sortedLastIndex = ro, xe.sortedLastIndexBy = io, xe.sortedLastIndexOf = oo, xe.startCase = Nl, xe.startsWith = Ku, xe.subtract = ks, xe.sum = Os, xe.sumBy = js, xe.template = Zu, xe.times = ys, xe.toInteger = nu, xe.toLength = ru, xe.toLower = Xu, xe.toNumber = iu, xe.toSafeInteger = au, xe.toString = uu, xe.toUpper = Qu, xe.trim = ts, xe.trimEnd = es, xe.trimStart = ns, xe.truncate = rs, xe.unescape = is, xe.uniqueId = ws, xe.upperCase = Vl, xe.upperFirst = Rl, xe.each = Po, xe.eachRight = No, xe.first = Bi, ps(xe, function() {
			var t = {};
			return Fn(xe, function(e, n) {
				Vs.call(xe.prototype, n) || (t[n] = e)
			}), t
		}(), {
			chain: !1
		}), xe.VERSION = G, o(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
			xe[t].placeholder = xe
		}), o(["drop", "take"], function(t, e) {
			ke.prototype[t] = function(n) {
				var r = this.__filtered__;
				if (r && !e) return new ke(this);
				n = n === W ? 1 : sc(nu(n), 0);
				var i = this.clone();
				return r ? i.__takeCount__ = cc(n, i.__takeCount__) : i.__views__.push({
					size: cc(n, bt),
					type: t + (i.__dir__ < 0 ? "Right" : "")
				}), i
			}, ke.prototype[t + "Right"] = function(e) {
				return this.reverse()[t](e).reverse()
			}
		}), o(["filter", "map", "takeWhile"], function(t, e) {
			var n = e + 1,
				r = n == ft || n == pt;
			ke.prototype[t] = function(t) {
				var e = this.clone();
				return e.__iteratees__.push({
					iteratee: ui(t, 3),
					type: n
				}), e.__filtered__ = e.__filtered__ || r, e
			}
		}), o(["head", "last"], function(t, e) {
			var n = "take" + (e ? "Right" : "");
			ke.prototype[t] = function() {
				return this[n](1).value()[0]
			}
		}), o(["initial", "tail"], function(t, e) {
			var n = "drop" + (e ? "" : "Right");
			ke.prototype[t] = function() {
				return this.__filtered__ ? new ke(this) : this[n](1)
			}
		}), ke.prototype.compact = function() {
			return this.filter(cs)
		}, ke.prototype.find = function(t) {
			return this.filter(t).head()
		}, ke.prototype.findLast = function(t) {
			return this.reverse().find(t)
		}, ke.prototype.invokeMap = aa(function(t, e) {
			return "function" == typeof t ? new ke(this) : this.map(function(n) {
				return Bn(n, t, e)
			})
		}), ke.prototype.reject = function(t) {
			return t = ui(t, 3), this.filter(function(e) {
				return !t(e)
			})
		}, ke.prototype.slice = function(t, e) {
			t = nu(t);
			var n = this;
			return n.__filtered__ && (t > 0 || e < 0) ? new ke(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== W && (e = nu(e), n = e < 0 ? n.dropRight(-e) : n.take(e - t)), n)
		}, ke.prototype.takeRightWhile = function(t) {
			return this.reverse().takeWhile(t).reverse()
		}, ke.prototype.toArray = function() {
			return this.take(bt)
		}, Fn(ke.prototype, function(t, e) {
			var n = /^(?:filter|find|map|reject)|While$/.test(e),
				r = /^(?:head|last)$/.test(e),
				i = xe[r ? "take" + ("last" == e ? "Right" : "") : e],
				o = r || /^find/.test(e);
			i && (xe.prototype[e] = function() {
				var e = this.__wrapped__,
					a = r ? [1] : arguments,
					u = e instanceof ke,
					s = a[0],
					c = u || $l(e),
					l = function(t) {
						var e = i.apply(xe, h([t], a));
						return r && f ? e[0] : e
					};
				c && n && "function" == typeof s && 1 != s.length && (u = c = !1);
				var f = this.__chain__,
					p = !! this.__actions__.length,
					d = o && !f,
					v = u && !p;
				if (!o && c) {
					e = v ? e : new ke(this);
					var $ = t.apply(e, a);
					return $.__actions__.push({
						func: _o,
						args: [l],
						thisArg: W
					}), new Ae($, f)
				}
				return d && v ? t.apply(this, a) : ($ = this.thru(l), d ? r ? $.value()[0] : $.value() : $)
			})
		}), o(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
			var e = Rs[t],
				n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
				r = /^(?:pop|shift)$/.test(t);
			xe.prototype[t] = function() {
				var t = arguments;
				return r && !this.__chain__ ? e.apply(this.value(), t) : this[n](function(n) {
					return e.apply(n, t)
				})
			}
		}), Fn(ke.prototype, function(t, e) {
			var n = xe[e];
			if (n) {
				var r = n.name + "";
				(Cc[r] || (Cc[r] = [])).push({
					name: e,
					func: n
				})
			}
		}), Cc[Jr(W, Y).name] = [{
			name: "wrapper",
			func: W
		}], ke.prototype.clone = Oe, ke.prototype.reverse = je, ke.prototype.value = Te, xe.prototype.at = tl, xe.prototype.chain = Co, xe.prototype.commit = So, xe.prototype.flatMap = Eo, xe.prototype.next = Ao, xe.prototype.plant = Oo, xe.prototype.reverse = jo, xe.prototype.toJSON = xe.prototype.valueOf = xe.prototype.value = To, Qs && (xe.prototype[Qs] = ko), xe
	}
	var W, G = "4.3.0",
		J = 1,
		Y = 2,
		K = 4,
		Z = 8,
		X = 16,
		Q = 32,
		tt = 64,
		et = 128,
		nt = 256,
		rt = 512,
		it = 1,
		ot = 2,
		at = 30,
		ut = "...",
		st = 150,
		ct = 16,
		lt = 200,
		ft = 1,
		ht = 2,
		pt = 3,
		dt = "Expected a function",
		vt = "__lodash_hash_undefined__",
		$t = 1 / 0,
		mt = 9007199254740991,
		gt = 1.7976931348623157e308,
		yt = NaN,
		bt = 4294967295,
		wt = bt - 1,
		xt = bt >>> 1,
		_t = "__lodash_placeholder__",
		Ct = "[object Arguments]",
		St = "[object Array]",
		Et = "[object Boolean]",
		At = "[object Date]",
		kt = "[object Error]",
		Ot = "[object Function]",
		jt = "[object GeneratorFunction]",
		Tt = "[object Map]",
		It = "[object Number]",
		Mt = "[object Object]",
		Ft = "[object RegExp]",
		Dt = "[object Set]",
		Rt = "[object String]",
		Pt = "[object Symbol]",
		Nt = "[object WeakMap]",
		Vt = "[object WeakSet]",
		Ut = "[object ArrayBuffer]",
		qt = "[object Float32Array]",
		Lt = "[object Float64Array]",
		Bt = "[object Int8Array]",
		Ht = "[object Int16Array]",
		zt = "[object Int32Array]",
		Wt = "[object Uint8Array]",
		Gt = "[object Uint8ClampedArray]",
		Jt = "[object Uint16Array]",
		Yt = "[object Uint32Array]",
		Kt = /\b__p \+= '';/g,
		Zt = /\b(__p \+=) '' \+/g,
		Xt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
		Qt = /&(?:amp|lt|gt|quot|#39|#96);/g,
		te = /[&<>"'`]/g,
		ee = RegExp(Qt.source),
		ne = RegExp(te.source),
		re = /<%-([\s\S]+?)%>/g,
		ie = /<%([\s\S]+?)%>/g,
		oe = /<%=([\s\S]+?)%>/g,
		ae = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
		ue = /^\w*$/,
		se = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
		ce = /[\\^$.*+?()[\]{}|]/g,
		le = RegExp(ce.source),
		fe = /^\s+|\s+$/g,
		he = /^\s+/,
		pe = /\s+$/,
		de = /\\(\\)?/g,
		ve = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
		$e = /\w*$/,
		me = /^0x/i,
		ge = /^[-+]0x[0-9a-f]+$/i,
		ye = /^0b[01]+$/i,
		be = /^\[object .+?Constructor\]$/,
		we = /^0o[0-7]+$/i,
		xe = /^(?:0|[1-9]\d*)$/,
		_e = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
		Ce = /($^)/,
		Se = /['\n\r\u2028\u2029\\]/g,
		Ee = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
		Ae = "[" + Ee + "]",
		ke = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
		Oe = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
		je = "[^\\ud800-\\udfff" + Ee + "\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
		Te = "\\ud83c[\\udffb-\\udfff]",
		Ie = "(?:\\ud83c[\\udde6-\\uddff]){2}",
		Me = "[\\ud800-\\udbff][\\udc00-\\udfff]",
		Fe = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
		De = "(?:" + Oe + "|" + je + ")",
		Re = "(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",
		Pe = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", Ie, Me].join("|") + ")[\\ufe0e\\ufe0f]?" + Re + ")*",
		Ne = "[\\ufe0e\\ufe0f]?" + Re + Pe,
		Ve = "(?:" + ["[\\u2700-\\u27bf]", Ie, Me].join("|") + ")" + Ne,
		Ue = "(?:" + ["[^\\ud800-\\udfff]" + ke + "?", ke, Ie, Me, "[\\ud800-\\udfff]"].join("|") + ")",
		qe = RegExp(ke, "g"),
		Le = RegExp(Te + "(?=" + Te + ")|" + Ue + Ne, "g"),
		Be = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
		He = /[a-zA-Z0-9]+/g,
		ze = RegExp([Fe + "?" + Oe + "+(?=" + [Ae, Fe, "$"].join("|") + ")", "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?=" + [Ae, Fe + De, "$"].join("|") + ")", Fe + "?" + De + "+", Fe + "+", "\\d+", Ve].join("|"), "g"),
		We = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
		Ge = ["Array", "Buffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Reflect", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
		Je = -1,
		Ye = {};
	Ye[qt] = Ye[Lt] = Ye[Bt] = Ye[Ht] = Ye[zt] = Ye[Wt] = Ye[Gt] = Ye[Jt] = Ye[Yt] = !0, Ye[Ct] = Ye[St] = Ye[Ut] = Ye[Et] = Ye[At] = Ye[kt] = Ye[Ot] = Ye[Tt] = Ye[It] = Ye[Mt] = Ye[Ft] = Ye[Dt] = Ye[Rt] = Ye[Nt] = !1;
	var Ke = {};
	Ke[Ct] = Ke[St] = Ke[Ut] = Ke[Et] = Ke[At] = Ke[qt] = Ke[Lt] = Ke[Bt] = Ke[Ht] = Ke[zt] = Ke[Tt] = Ke[It] = Ke[Mt] = Ke[Ft] = Ke[Dt] = Ke[Rt] = Ke[Pt] = Ke[Wt] = Ke[Gt] = Ke[Jt] = Ke[Yt] = !0, Ke[kt] = Ke[Ot] = Ke[Nt] = !1;
	var Ze = {
		"À": "A",
		"Á": "A",
		"Â": "A",
		"Ã": "A",
		"Ä": "A",
		"Å": "A",
		"à": "a",
		"á": "a",
		"â": "a",
		"ã": "a",
		"ä": "a",
		"å": "a",
		"Ç": "C",
		"ç": "c",
		"Ð": "D",
		"ð": "d",
		"È": "E",
		"É": "E",
		"Ê": "E",
		"Ë": "E",
		"è": "e",
		"é": "e",
		"ê": "e",
		"ë": "e",
		"Ì": "I",
		"Í": "I",
		"Î": "I",
		"Ï": "I",
		"ì": "i",
		"í": "i",
		"î": "i",
		"ï": "i",
		"Ñ": "N",
		"ñ": "n",
		"Ò": "O",
		"Ó": "O",
		"Ô": "O",
		"Õ": "O",
		"Ö": "O",
		"Ø": "O",
		"ò": "o",
		"ó": "o",
		"ô": "o",
		"õ": "o",
		"ö": "o",
		"ø": "o",
		"Ù": "U",
		"Ú": "U",
		"Û": "U",
		"Ü": "U",
		"ù": "u",
		"ú": "u",
		"û": "u",
		"ü": "u",
		"Ý": "Y",
		"ý": "y",
		"ÿ": "y",
		"Æ": "Ae",
		"æ": "ae",
		"Þ": "Th",
		"þ": "th",
		"ß": "ss"
	}, Xe = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;",
		"`": "&#96;"
	}, Qe = {
		"&amp;": "&",
		"&lt;": "<",
		"&gt;": ">",
		"&quot;": '"',
		"&#39;": "'",
		"&#96;": "`"
	}, tn = {
		function: !0,
		object: !0
	}, en = {
		"\\": "\\",
		"'": "'",
		"\n": "n",
		"\r": "r",
		"\u2028": "u2028",
		"\u2029": "u2029"
	}, nn = parseFloat,
		rn = parseInt,
		on = tn[typeof exports] && exports && !exports.nodeType ? exports : null,
		an = tn[typeof module] && module && !module.nodeType ? module : null,
		un = O(on && an && "object" == typeof global && global),
		sn = O(tn[typeof self] && self),
		cn = O(tn[typeof window] && window),
		ln = an && an.exports === on ? on : null,
		fn = O(tn[typeof this] && this),
		hn = un || cn !== (fn && fn.window) && cn || sn || fn || Function("return this")(),
		pn = z();
	(cn || sn || {})._ = pn, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
		return pn
	}) : on && an ? (ln && ((an.exports = pn)._ = pn), on._ = pn) : hn._ = pn
}.call(this),
function() {
	angular.module("restangular", []).provider("Restangular", function() {
		var t = {};
		t.init = function(t, e) {
			function n(t, e, n, r) {
				var i = {};
				return _.each(_.keys(r), function(o) {
					var a = r[o];
					a.params = _.extend({}, a.params, t.defaultRequestParams[a.method.toLowerCase()]), _.isEmpty(a.params) && delete a.params, t.isSafe(a.method) ? i[o] = function() {
						return e(_.extend(a, {
							url: n
						}))
					} : i[o] = function(t) {
						return e(_.extend(a, {
							url: n,
							data: t
						}))
					}
				}), i
			}
			t.configuration = e;
			var r = ["get", "head", "options", "trace", "getlist"];
			e.isSafe = function(t) {
				return _.includes(r, t.toLowerCase())
			};
			var i = /^https?:\/\//i;
			e.isAbsoluteUrl = function(t) {
				return _.isUndefined(e.absoluteUrl) || _.isNull(e.absoluteUrl) ? t && i.test(t) : e.absoluteUrl
			}, e.absoluteUrl = !! _.isUndefined(e.absoluteUrl) || e.absoluteUrl, t.setSelfLinkAbsoluteUrl = function(t) {
				e.absoluteUrl = t
			}, e.baseUrl = _.isUndefined(e.baseUrl) ? "" : e.baseUrl, t.setBaseUrl = function(t) {
				return e.baseUrl = /\/$/.test(t) ? t.substring(0, t.length - 1) : t, this
			}, e.extraFields = e.extraFields || [], t.setExtraFields = function(t) {
				return e.extraFields = t, this
			}, e.defaultHttpFields = e.defaultHttpFields || {}, t.setDefaultHttpFields = function(t) {
				return e.defaultHttpFields = t, this
			}, e.withHttpValues = function(t, n) {
				return _.defaults(n, t, e.defaultHttpFields)
			}, e.encodeIds = !! _.isUndefined(e.encodeIds) || e.encodeIds, t.setEncodeIds = function(t) {
				e.encodeIds = t
			}, e.defaultRequestParams = e.defaultRequestParams || {
				get: {},
				post: {},
				put: {},
				remove: {},
				common: {}
			}, t.setDefaultRequestParams = function(t, n) {
				var r = [],
					i = n || t;
				return _.isUndefined(n) ? r.push("common") : _.isArray(t) ? r = t : r.push(t), _.each(r, function(t) {
					e.defaultRequestParams[t] = i
				}), this
			}, t.requestParams = e.defaultRequestParams, e.defaultHeaders = e.defaultHeaders || {}, t.setDefaultHeaders = function(n) {
				return e.defaultHeaders = n, t.defaultHeaders = e.defaultHeaders, this
			}, t.defaultHeaders = e.defaultHeaders, e.methodOverriders = e.methodOverriders || [], t.setMethodOverriders = function(t) {
				var n = _.extend([], t);
				return e.isOverridenMethod("delete", n) && n.push("remove"), e.methodOverriders = n, this
			}, e.jsonp = !_.isUndefined(e.jsonp) && e.jsonp, t.setJsonp = function(t) {
				e.jsonp = t
			}, e.isOverridenMethod = function(t, n) {
				var r = n || e.methodOverriders;
				return !_.isUndefined(_.find(r, function(e) {
					return e.toLowerCase() === t.toLowerCase()
				}))
			}, e.urlCreator = e.urlCreator || "path", t.setUrlCreator = function(t) {
				if (!_.has(e.urlCreatorFactory, t)) throw new Error("URL Path selected isn't valid");
				return e.urlCreator = t, this
			}, e.restangularFields = e.restangularFields || {
				id: "id",
				route: "route",
				parentResource: "parentResource",
				restangularCollection: "restangularCollection",
				cannonicalId: "__cannonicalId",
				etag: "restangularEtag",
				selfLink: "href",
				get: "get",
				getList: "getList",
				put: "put",
				post: "post",
				remove: "remove",
				head: "head",
				trace: "trace",
				options: "options",
				patch: "patch",
				getRestangularUrl: "getRestangularUrl",
				getRequestedUrl: "getRequestedUrl",
				putElement: "putElement",
				addRestangularMethod: "addRestangularMethod",
				getParentList: "getParentList",
				clone: "clone",
				ids: "ids",
				httpConfig: "_$httpConfig",
				reqParams: "reqParams",
				one: "one",
				all: "all",
				several: "several",
				oneUrl: "oneUrl",
				allUrl: "allUrl",
				customPUT: "customPUT",
				customPOST: "customPOST",
				customDELETE: "customDELETE",
				customGET: "customGET",
				customGETLIST: "customGETLIST",
				customOperation: "customOperation",
				doPUT: "doPUT",
				doPOST: "doPOST",
				doDELETE: "doDELETE",
				doGET: "doGET",
				doGETLIST: "doGETLIST",
				fromServer: "fromServer",
				withConfig: "withConfig",
				withHttpConfig: "withHttpConfig",
				singleOne: "singleOne",
				plain: "plain",
				save: "save",
				restangularized: "restangularized"
			}, t.setRestangularFields = function(t) {
				return e.restangularFields = _.extend(e.restangularFields, t), this
			}, e.isRestangularized = function(t) {
				return !!t[e.restangularFields.restangularized]
			}, e.setFieldToElem = function(t, e, n) {
				var r = t.split("."),
					i = e;
				return _.each(_.initial(r), function(t) {
					i[t] = {}, i = i[t]
				}), i[_.last(r)] = n, this
			}, e.getFieldFromElem = function(t, e) {
				var n = t.split("."),
					r = e;
				return _.each(n, function(t) {
					r && (r = r[t])
				}), angular.copy(r)
			}, e.setIdToElem = function(t, n) {
				return e.setFieldToElem(e.restangularFields.id, t, n), this
			}, e.getIdFromElem = function(t) {
				return e.getFieldFromElem(e.restangularFields.id, t)
			}, e.isValidId = function(t) {
				return "" !== t && !_.isUndefined(t) && !_.isNull(t)
			}, e.setUrlToElem = function(t, n) {
				return e.setFieldToElem(e.restangularFields.selfLink, t, n), this
			}, e.getUrlFromElem = function(t) {
				return e.getFieldFromElem(e.restangularFields.selfLink, t)
			}, e.useCannonicalId = !_.isUndefined(e.useCannonicalId) && e.useCannonicalId, t.setUseCannonicalId = function(t) {
				return e.useCannonicalId = t, this
			}, e.getCannonicalIdFromElem = function(t) {
				var n = t[e.restangularFields.cannonicalId];
				return e.isValidId(n) ? n : e.getIdFromElem(t)
			}, e.responseInterceptors = e.responseInterceptors || [], e.defaultResponseInterceptor = function(t) {
				return t
			}, e.responseExtractor = function(t, n, r, i, o, a) {
				var u = angular.copy(e.responseInterceptors);
				u.push(e.defaultResponseInterceptor);
				var s = t;
				return _.each(u, function(t) {
					s = t(s, n, r, i, o, a)
				}), s
			}, t.addResponseInterceptor = function(t) {
				return e.responseInterceptors.push(t), this
			}, e.errorInterceptors = e.errorInterceptors || [], t.addErrorInterceptor = function(t) {
				return e.errorInterceptors.push(t), this
			}, t.setResponseInterceptor = t.addResponseInterceptor, t.setResponseExtractor = t.addResponseInterceptor, t.setErrorInterceptor = t.addErrorInterceptor, e.requestInterceptors = e.requestInterceptors || [], e.defaultInterceptor = function(t, e, n, r, i, o, a) {
				return {
					element: t,
					headers: i,
					params: o,
					httpConfig: a
				}
			}, e.fullRequestInterceptor = function(t, n, r, i, o, a, u) {
				var s = angular.copy(e.requestInterceptors),
					c = e.defaultInterceptor(t, n, r, i, o, a, u);
				return _.reduce(s, function(t, e) {
					return _.extend(t, e(t.element, n, r, i, t.headers, t.params, t.httpConfig))
				}, c)
			}, t.addRequestInterceptor = function(t) {
				return e.requestInterceptors.push(function(e, n, r, i, o, a, u) {
					return {
						headers: o,
						params: a,
						element: t(e, n, r, i),
						httpConfig: u
					}
				}), this
			}, t.setRequestInterceptor = t.addRequestInterceptor, t.addFullRequestInterceptor = function(t) {
				return e.requestInterceptors.push(t), this
			}, t.setFullRequestInterceptor = t.addFullRequestInterceptor, e.onBeforeElemRestangularized = e.onBeforeElemRestangularized || function(t) {
				return t
			}, t.setOnBeforeElemRestangularized = function(t) {
				return e.onBeforeElemRestangularized = t, this
			}, t.setRestangularizePromiseInterceptor = function(t) {
				return e.restangularizePromiseInterceptor = t, this
			}, e.onElemRestangularized = e.onElemRestangularized || function(t) {
				return t
			}, t.setOnElemRestangularized = function(t) {
				return e.onElemRestangularized = t, this
			}, e.shouldSaveParent = e.shouldSaveParent || function() {
				return !0
			}, t.setParentless = function(t) {
				return _.isArray(t) ? e.shouldSaveParent = function(e) {
					return !_.includes(t, e)
				} : _.isBoolean(t) && (e.shouldSaveParent = function() {
					return !t
				}), this
			}, e.suffix = _.isUndefined(e.suffix) ? null : e.suffix, t.setRequestSuffix = function(t) {
				return e.suffix = t, this
			}, e.transformers = e.transformers || {}, t.addElementTransformer = function(n, r, i) {
				var o = null,
					a = null;
				2 === arguments.length ? a = r : (a = i, o = r);
				var u = e.transformers[n];
				return u || (u = e.transformers[n] = []), u.push(function(t, e) {
					return _.isNull(o) || t === o ? a(e) : e
				}), t
			}, t.extendCollection = function(e, n) {
				return t.addElementTransformer(e, !0, n)
			}, t.extendModel = function(e, n) {
				return t.addElementTransformer(e, !1, n)
			}, e.transformElem = function(t, n, r, i, o) {
				if (!o && !e.transformLocalElements && !t[e.restangularFields.fromServer]) return t;
				var a = e.transformers[r],
					u = t;
				return a && _.each(a, function(t) {
					u = t(n, u)
				}), e.onElemRestangularized(u, n, r, i)
			}, e.transformLocalElements = !_.isUndefined(e.transformLocalElements) && e.transformLocalElements, t.setTransformOnlyServerElements = function(t) {
				e.transformLocalElements = !t
			}, e.fullResponse = !_.isUndefined(e.fullResponse) && e.fullResponse, t.setFullResponse = function(t) {
				return e.fullResponse = t, this
			}, e.urlCreatorFactory = {};
			var o = function() {};
			o.prototype.setConfig = function(t) {
				return this.config = t, this
			}, o.prototype.parentsArray = function(t) {
				for (var e = []; t;) e.push(t), t = t[this.config.restangularFields.parentResource];
				return e.reverse()
			}, o.prototype.resource = function(t, r, i, o, a, u, s, c) {
				var l = _.defaults(a || {}, this.config.defaultRequestParams.common),
					f = _.defaults(o || {}, this.config.defaultHeaders);
				s && (e.isSafe(c) ? f["If-None-Match"] = s : f["If-Match"] = s);
				var h = this.base(t);
				if (u) {
					var p = "";
					/\/$/.test(h) || (p += "/"), p += u, h += p
				}
				return this.config.suffix && -1 === h.indexOf(this.config.suffix, h.length - this.config.suffix.length) && !this.config.getUrlFromElem(t) && (h += this.config.suffix), t[this.config.restangularFields.httpConfig] = void 0, n(this.config, r, h, {
					getList: this.config.withHttpValues(i, {
						method: "GET",
						params: l,
						headers: f
					}),
					get: this.config.withHttpValues(i, {
						method: "GET",
						params: l,
						headers: f
					}),
					jsonp: this.config.withHttpValues(i, {
						method: "jsonp",
						params: l,
						headers: f
					}),
					put: this.config.withHttpValues(i, {
						method: "PUT",
						params: l,
						headers: f
					}),
					post: this.config.withHttpValues(i, {
						method: "POST",
						params: l,
						headers: f
					}),
					remove: this.config.withHttpValues(i, {
						method: "DELETE",
						params: l,
						headers: f
					}),
					head: this.config.withHttpValues(i, {
						method: "HEAD",
						params: l,
						headers: f
					}),
					trace: this.config.withHttpValues(i, {
						method: "TRACE",
						params: l,
						headers: f
					}),
					options: this.config.withHttpValues(i, {
						method: "OPTIONS",
						params: l,
						headers: f
					}),
					patch: this.config.withHttpValues(i, {
						method: "PATCH",
						params: l,
						headers: f
					})
				})
			};
			var a = function() {};
			a.prototype = new o, a.prototype.normalizeUrl = function(t) {
				var e = /(http[s]?:\/\/)?(.*)?/.exec(t);
				return e[2] = e[2].replace(/[\\\/]+/g, "/"), void 0 !== e[1] ? e[1] + e[2] : e[2]
			}, a.prototype.base = function(t) {
				var n = this;
				return _.reduce(this.parentsArray(t), function(t, r) {
					var i, o = n.config.getUrlFromElem(r);
					if (o) {
						if (n.config.isAbsoluteUrl(o)) return o;
						i = o
					} else if (i = r[n.config.restangularFields.route], r[n.config.restangularFields.restangularCollection]) {
						var a = r[n.config.restangularFields.ids];
						a && (i += "/" + a.join(","))
					} else {
						var u;
						u = n.config.useCannonicalId ? n.config.getCannonicalIdFromElem(r) : n.config.getIdFromElem(r), e.isValidId(u) && !r.singleOne && (i += "/" + (n.config.encodeIds ? encodeURIComponent(u) : u))
					}
					return t = t.replace(/\/$/, "") + "/" + i, n.normalizeUrl(t)
				}, this.config.baseUrl)
			}, a.prototype.fetchUrl = function(t, e) {
				var n = this.base(t);
				return e && (n += "/" + e), n
			}, a.prototype.fetchRequestedUrl = function(t, n) {
				function r(t) {
					var e = [];
					for (var n in t) t.hasOwnProperty(n) && e.push(n);
					return e.sort()
				}
				function i(t, e) {
					return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
				}
				var o = this.fetchUrl(t, n),
					a = t[e.restangularFields.reqParams];
				if (!a) return o + (this.config.suffix || "");
				var u = [];
				return function(t, e, n) {
					for (var i = r(t), o = 0; o < i.length; o++) e.call(n, t[i[o]], i[o])
				}(a, function(t, e) {
					null !== t && void 0 !== t && (angular.isArray(t) || (t = [t]), angular.forEach(t, function(t) {
						angular.isObject(t) && (t = angular.toJson(t)), u.push(i(e) + "=" + i(t))
					}))
				}), o + (this.config.suffix || "") + (-1 === o.indexOf("?") ? "?" : "&") + u.join("&")
			}, e.urlCreatorFactory.path = a
		};
		var e = {};
		t.init(this, e), this.$get = ["$http", "$q", function(n, r) {
			function i(e) {
				function o(t, n, r, i, o) {
					if (n[e.restangularFields.route] = r, n[e.restangularFields.getRestangularUrl] = _.bind(L.fetchUrl, L, n), n[e.restangularFields.getRequestedUrl] = _.bind(L.fetchRequestedUrl, L, n), n[e.restangularFields.addRestangularMethod] = _.bind(N, n), n[e.restangularFields.clone] = _.bind(m, n, n), n[e.restangularFields.reqParams] = _.isEmpty(i) ? null : i, n[e.restangularFields.withHttpConfig] = _.bind(E, n), n[e.restangularFields.plain] = _.bind(v, n, n), n[e.restangularFields.restangularized] = !0, n[e.restangularFields.one] = _.bind(a, n, n), n[e.restangularFields.all] = _.bind(u, n, n), n[e.restangularFields.several] = _.bind(s, n, n), n[e.restangularFields.oneUrl] = _.bind(c, n, n), n[e.restangularFields.allUrl] = _.bind(l, n, n), n[e.restangularFields.fromServer] = !! o, t && e.shouldSaveParent(r)) {
						var f = e.getIdFromElem(t),
							h = e.getUrlFromElem(t),
							p = _.union(_.values(_.pick(e.restangularFields, ["route", "singleOne", "parentResource"])), e.extraFields),
							d = _.pick(t, p);
						e.isValidId(f) && e.setIdToElem(d, f, r), e.isValidId(h) && e.setUrlToElem(d, h, r), n[e.restangularFields.parentResource] = d
					} else n[e.restangularFields.parentResource] = null;
					return n
				}
				function a(t, n, r, i) {
					var o;
					if (_.isNumber(n) || _.isNumber(t)) throw o = "You're creating a Restangular entity with the number ", o += "instead of the route or the parent. For example, you can't call .one(12).", new Error(o);
					if (_.isUndefined(n)) throw o = "You're creating a Restangular entity either without the path. ", o += "For example you can't call .one(). Please check if your arguments are valid.", new Error(o);
					var a = {};
					return e.setIdToElem(a, r, n), e.setFieldToElem(e.restangularFields.singleOne, a, i), g(t, a, n, !1)
				}
				function u(t, e) {
					return y(t, [], e, !1)
				}
				function s(t, n) {
					var r = [];
					return r[e.restangularFields.ids] = Array.prototype.splice.call(arguments, 2), y(t, r, n, !1)
				}
				function c(t, n, r) {
					if (!n) throw new Error("Route is mandatory when creating new Restangular objects.");
					var i = {};
					return e.setUrlToElem(i, r, n), g(t, i, n, !1)
				}
				function l(t, n, r) {
					if (!n) throw new Error("Route is mandatory when creating new Restangular objects.");
					var i = {};
					return e.setUrlToElem(i, r, n), y(t, i, n, !1)
				}
				function f(t, n, r) {
					return t.call = _.bind(h, t), t.get = _.bind(p, t), t[e.restangularFields.restangularCollection] = n, n && (t.push = _.bind(h, t, "push")), t.$object = r, e.restangularizePromiseInterceptor && e.restangularizePromiseInterceptor(t), t
				}
				function h(t) {
					var n = r.defer(),
						i = arguments,
						o = {};
					return this.then(function(e) {
						var r = Array.prototype.slice.call(i, 1);
						e[t].apply(e, r), o = e, n.resolve(e)
					}), f(n.promise, this[e.restangularFields.restangularCollection], o)
				}
				function p(t) {
					var n = r.defer(),
						i = {};
					return this.then(function(e) {
						i = e[t], n.resolve(i)
					}), f(n.promise, this[e.restangularFields.restangularCollection], i)
				}
				function d(t, n, r, i) {
					if (_.extend(i, r), e.fullResponse) return t.resolve(_.extend(n, {
						data: r
					}));
					t.resolve(r)
				}
				function v(t) {
					if (_.isArray(t)) {
						var n = [];
						return _.each(t, function(t) {
							n.push(e.isRestangularized(t) ? v(t) : t)
						}), n
					}
					return _.omit(t, _.values(_.omit(e.restangularFields, "id")))
				}
				function $(t) {
					t[e.restangularFields.customOperation] = _.bind(P, t), _.each(["put", "post", "get", "delete"], function(e) {
						_.each(["do", "custom"], function(n) {
							var r, i = "delete" === e ? "remove" : e,
								o = n + e.toUpperCase();
							r = "put" !== i && "post" !== i ? P : function(t, e, n, r, i) {
								return _.bind(P, this)(t, n, r, i, e)
							}, t[o] = _.bind(r, t, i)
						})
					}), t[e.restangularFields.customGETLIST] = _.bind(S, t), t[e.restangularFields.doGETLIST] = t[e.restangularFields.customGETLIST]
				}
				function m(t, n) {
					var r = angular.copy(t, n);
					return g(r[e.restangularFields.parentResource], r, r[e.restangularFields.route], !0)
				}
				function g(t, n, r, i, a, u) {
					var s = e.onBeforeElemRestangularized(n, !1, r),
						c = o(t, s, r, u, i);
					return e.useCannonicalId && (c[e.restangularFields.cannonicalId] = e.getIdFromElem(c)), a && (c[e.restangularFields.getParentList] = function() {
						return a
					}), c[e.restangularFields.restangularCollection] = !1, c[e.restangularFields.get] = _.bind(O, c), c[e.restangularFields.getList] = _.bind(S, c), c[e.restangularFields.put] = _.bind(T, c), c[e.restangularFields.post] = _.bind(I, c), c[e.restangularFields.remove] = _.bind(j, c), c[e.restangularFields.head] = _.bind(M, c), c[e.restangularFields.trace] = _.bind(F, c), c[e.restangularFields.options] = _.bind(D, c), c[e.restangularFields.patch] = _.bind(R, c), c[e.restangularFields.save] = _.bind(A, c), $(c), e.transformElem(c, !1, r, q, !0)
				}
				function y(t, n, r, i, a) {
					var u = e.onBeforeElemRestangularized(n, !0, r),
						s = o(t, u, r, a, i);
					return s[e.restangularFields.restangularCollection] = !0, s[e.restangularFields.post] = _.bind(I, s, null), s[e.restangularFields.remove] = _.bind(j, s), s[e.restangularFields.head] = _.bind(M, s), s[e.restangularFields.trace] = _.bind(F, s), s[e.restangularFields.putElement] = _.bind(x, s), s[e.restangularFields.options] = _.bind(D, s), s[e.restangularFields.patch] = _.bind(R, s), s[e.restangularFields.get] = _.bind(w, s), s[e.restangularFields.getList] = _.bind(S, s, null), $(s), e.transformElem(s, !0, r, q, !0)
				}
				function b(t, e, n) {
					var r = y(t, e, n, !1);
					return _.each(r, function(e) {
						g(t, e, n, !1)
					}), r
				}
				function w(t, e, n) {
					return this.customGET(t.toString(), e, n)
				}
				function x(t, n, i) {
					var o = this,
						a = this[t],
						u = r.defer(),
						s = [];
					return s = e.transformElem(s, !0, a[e.restangularFields.route], q), a.put(n, i).then(function(e) {
						var n = m(o);
						n[t] = e, s = n, u.resolve(n)
					}, function(t) {
						u.reject(t)
					}), f(u.promise, !0, s)
				}
				function C(t, n, r, i, o, a) {
					var u = e.responseExtractor(t, n, r, i, o, a),
						s = o.headers("ETag");
					return u && s && (u[e.restangularFields.etag] = s), u
				}
				function S(t, i, o) {
					var a = this,
						u = r.defer(),
						s = L.fetchUrl(this, t),
						c = t || a[e.restangularFields.route],
						l = e.fullRequestInterceptor(null, "getList", c, s, o || {}, i || {}, this[e.restangularFields.httpConfig] || {}),
						h = [];
					h = e.transformElem(h, !0, c, q);
					var p = "getList";
					e.jsonp && (p = "jsonp");
					var v = function(n) {
						var r = n.data,
							i = n.config.params,
							o = C(r, "getList", c, s, n, u);
						if ((_.isUndefined(o) || "" === o) && (o = []), !_.isArray(o)) throw new Error("Response for getList SHOULD be an array and not an object or something else");
						var l = _.map(o, function(n) {
							return a[e.restangularFields.restangularCollection] ? g(a[e.restangularFields.parentResource], n, a[e.restangularFields.route], !0, o) : g(a, n, t, !0, o)
						});
						l = _.extend(o, l), a[e.restangularFields.restangularCollection] ? d(u, n, y(a[e.restangularFields.parentResource], l, a[e.restangularFields.route], !0, i), h) : d(u, n, y(a, l, t, !0, i), h)
					};
					return L.resource(this, n, l.httpConfig, l.headers, l.params, t, this[e.restangularFields.etag], "getList")[p]().then(v, function(t) {
						304 === t.status && a[e.restangularFields.restangularCollection] ? d(u, t, a, h) : _.every(e.errorInterceptors, function(e) {
							return !1 !== e(t, u, v)
						}) && u.reject(t)
					}), f(u.promise, !0, h)
				}
				function E(t) {
					return this[e.restangularFields.httpConfig] = t, this
				}
				function A(t, n) {
					return this[e.restangularFields.fromServer] ? this[e.restangularFields.put](t, n) : _.bind(k, this)("post", void 0, t, void 0, n)
				}
				function k(t, i, o, a, u) {
					var s = this,
						c = r.defer(),
						l = o || {}, h = i || this[e.restangularFields.route],
						p = L.fetchUrl(this, i),
						$ = a || this,
						m = $[e.restangularFields.etag] || ("post" !== t ? this[e.restangularFields.etag] : null);
					_.isObject($) && e.isRestangularized($) && ($ = v($));
					var y = e.fullRequestInterceptor($, t, h, p, u || {}, l || {}, this[e.restangularFields.httpConfig] || {}),
						b = {};
					b = e.transformElem(b, !1, h, q);
					var w = function(n) {
						var r = n.data,
							i = n.config.params,
							o = C(r, t, h, p, n, c);
						if (o) if ("post" !== t || s[e.restangularFields.restangularCollection]) {
							var a = g(s[e.restangularFields.parentResource], o, s[e.restangularFields.route], !0, null, i);
							a[e.restangularFields.singleOne] = s[e.restangularFields.singleOne], d(c, n, a, b)
						} else {
							var a = g(s[e.restangularFields.parentResource], o, h, !0, null, i);
							d(c, n, a, b)
						} else d(c, n, void 0, b)
					}, x = function(n) {
						304 === n.status && e.isSafe(t) ? d(c, n, s, b) : _.every(e.errorInterceptors, function(t) {
							return !1 !== t(n, c, w)
						}) && c.reject(n)
					}, S = t,
						E = _.extend({}, y.headers),
						A = e.isOverridenMethod(t);
					return A ? (S = "post", E = _.extend(E, {
						"X-HTTP-Method-Override": "remove" === t ? "DELETE" : t.toUpperCase()
					})) : e.jsonp && "get" === S && (S = "jsonp"), e.isSafe(t) ? A ? L.resource(this, n, y.httpConfig, E, y.params, i, m, S)[S]({}).then(w, x) : L.resource(this, n, y.httpConfig, E, y.params, i, m, S)[S]().then(w, x) : L.resource(this, n, y.httpConfig, E, y.params, i, m, S)[S](y.element).then(w, x), f(c.promise, !1, b)
				}
				function O(t, e) {
					return _.bind(k, this)("get", void 0, t, void 0, e)
				}
				function j(t, e) {
					return _.bind(k, this)("remove", void 0, t, void 0, e)
				}
				function T(t, e) {
					return _.bind(k, this)("put", void 0, t, void 0, e)
				}
				function I(t, e, n, r) {
					return _.bind(k, this)("post", t, n, e, r)
				}
				function M(t, e) {
					return _.bind(k, this)("head", void 0, t, void 0, e)
				}
				function F(t, e) {
					return _.bind(k, this)("trace", void 0, t, void 0, e)
				}
				function D(t, e) {
					return _.bind(k, this)("options", void 0, t, void 0, e)
				}
				function R(t, e, n) {
					return _.bind(k, this)("patch", void 0, e, t, n)
				}
				function P(t, e, n, r, i) {
					return _.bind(k, this)(t, e, n, i, r)
				}
				function N(t, n, r, i, o, a) {
					var u;
					u = "getList" === n ? _.bind(S, this, r) : _.bind(P, this, n, r);
					var s = function(t, e, n) {
						var r = _.defaults({
							params: t,
							headers: e,
							elem: n
						}, {
							params: i,
							headers: o,
							elem: a
						});
						return u(r.params, r.headers, r.elem)
					};
					e.isSafe(n) ? this[t] = s : this[t] = function(t, e, n) {
						return s(e, n, t)
					}
				}
				function V(n) {
					var r = angular.copy(_.omit(e, "configuration"));
					return t.init(r, r), n(r), i(r)
				}
				function U(t, n) {
					var r = _.values(e.restangularFields),
						i = {}, o = (n || q).all(t);
					i.one = _.bind(a, n || q, n, t), i.post = _.bind(o.post, o), i.getList = _.bind(o.getList, o);
					for (var u in o) o.hasOwnProperty(u) && _.isFunction(o[u]) && !_.includes(r, u) && (i[u] = _.bind(o[u], o));
					return i
				}
				var q = {}, L = new e.urlCreatorFactory[e.urlCreator];
				return L.setConfig(e), t.init(q, e), q.copy = _.bind(m, q), q.service = _.bind(U, q), q.withConfig = _.bind(V, q), q.one = _.bind(a, q, null), q.all = _.bind(u, q, null), q.several = _.bind(s, q, null), q.oneUrl = _.bind(c, q, null), q.allUrl = _.bind(l, q, null), q.stripRestangular = _.bind(v, q), q.restangularizeElement = _.bind(g, q), q.restangularizeCollection = _.bind(b, q), q
			}
			return i(e)
		}]
	})
}(), angular.module("infinite-scroll", []).value("THROTTLE_MILLISECONDS", null).directive("infiniteScroll", ["$rootScope", "$window", "$interval", "THROTTLE_MILLISECONDS", function(t, e, n, r) {
	return {
		scope: {
			infiniteScroll: "&",
			infiniteScrollContainer: "=",
			infiniteScrollDistance: "=",
			infiniteScrollDisabled: "=",
			infiniteScrollUseDocumentBottom: "=",
			infiniteScrollListenForEvent: "@"
		},
		link: function(i, o, a) {
			var u, s, c, l, f, h, p, d, v, $, m, g, y, b, w, x, _, C, S;
			return S = angular.element(e), b = null, w = null, c = null, l = null, m = !0, C = !1, _ = null, s = !1, $ = function(t) {
				return t = t[0] || t, isNaN(t.offsetHeight) ? t.document.documentElement.clientHeight : t.offsetHeight
			}, g = function(t) {
				if (t[0].getBoundingClientRect && !t.css("none")) return t[0].getBoundingClientRect().top + y(t)
			}, y = function(t) {
				return t = t[0] || t, isNaN(window.pageYOffset) ? t.document.documentElement.scrollTop : t.ownerDocument.defaultView.pageYOffset
			}, v = function() {
				var e, r, a, u, f;
				return l === S ? (e = $(l) + y(l[0].document.documentElement), a = g(o) + $(o)) : (e = $(l), r = 0, void 0 !== g(l) && (r = g(l)), a = g(o) - r + $(o)), C && (a = $((o[0].ownerDocument || o[0].document).documentElement)), u = a - e, f = u <= $(l) * b + 1, f ? (c = !0, w ? i.$$phase || t.$$phase ? i.infiniteScroll() : i.$apply(i.infiniteScroll) : void 0) : (s && n.cancel(s), c = !1)
			}, x = function(t, e) {
				var r, i, o;
				return o = null, i = 0, r = function() {
					return i = (new Date).getTime(), n.cancel(o), o = null, t.call()
				},
				function() {
					var a, u;
					return a = (new Date).getTime(), u = e - (a - i), u <= 0 ? (n.cancel(o), o = null, i = a, t.call()) : o ? void 0 : o = n(r, u, 1)
				}
			}, null != r && (v = x(v, r)), i.$on("$destroy", function() {
				if (l.unbind("scroll", v), null != _ && (_(), _ = null), s) return n.cancel(s)
			}), p = function(t) {
				return b = parseFloat(t) || 0
			}, i.$watch("infiniteScrollDistance", p), p(i.infiniteScrollDistance), h = function(t) {
				if ((w = !t) && c) return c = !1, v()
			}, i.$watch("infiniteScrollDisabled", h), h(i.infiniteScrollDisabled), d = function(t) {
				return C = t
			}, i.$watch("infiniteScrollUseDocumentBottom", d), d(i.infiniteScrollUseDocumentBottom), u = function(t) {
				if (null != l && l.unbind("scroll", v), l = t, null != t) return l.bind("scroll", v)
			}, u(S), i.infiniteScrollListenForEvent && (_ = t.$on(i.infiniteScrollListenForEvent, v)), f = function(t) {
				if (null != t && 0 !== t.length) {
					if (t.nodeType && 1 === t.nodeType ? t = angular.element(t) : "function" == typeof t.append ? t = angular.element(t[t.length - 1]) : "string" == typeof t && (t = angular.element(document.querySelector(t))), null != t) return u(t);
					throw new Error("invalid infinite-scroll-container attribute.")
				}
			}, i.$watch("infiniteScrollContainer", f), f(i.infiniteScrollContainer || []), null != a.infiniteScrollParent && u(angular.element(o.parent())), null != a.infiniteScrollImmediateCheck && (m = i.$eval(a.infiniteScrollImmediateCheck)), s = n(function() {
				return m && v(), n.cancel(s)
			})
		}
	}
}]), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "infinite-scroll");