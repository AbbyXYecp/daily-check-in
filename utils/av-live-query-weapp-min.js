! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AV = t() : e.AV = t()
}(this, function() {
  return function(e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.i = function(e) {
      return e
    }, t.d = function(e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, t.n = function(e) {
      var n = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return t.d(n, "a", n), n
    }, t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 35)
  }([function(e, t, n) {
    var r, i;
    (function() {
      function n(e) {
        function t(t, n, r, i, o, s) {
          for (; o >= 0 && o < s; o += e) {
            var a = i ? i[o] : o;
            r = n(r, t[a], a, t)
          }
          return r
        }
        return function(n, r, i, o) {
          r = S(r, o, 4);
          var s = !x(n) && E.keys(n),
            a = (s || n).length,
            u = e > 0 ? 0 : a - 1;
          return arguments.length < 3 && (i = n[s ? s[u] : u], u += e), t(n, r, i, s, u, a)
        }
      }

      function o(e) {
        return function(t, n, r) {
          n = T(n, r);
          for (var i = C(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
            if (n(t[o], o, t)) return o;
          return -1
        }
      }

      function s(e, t, n) {
        return function(r, i, o) {
          var s = 0,
            a = C(r);
          if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
          else if (n && o && a) return o = n(r, i), r[o] === i ? o : -1;
          if (i !== i) return o = t(p.call(r, s, a), E.isNaN), o >= 0 ? o + s : -1;
          for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e)
            if (r[o] === i) return o;
          return -1
        }
      }

      function a(e, t) {
        var n = L.length,
          r = e.constructor,
          i = E.isFunction(r) && r.prototype || l,
          o = "constructor";
        for (E.has(e, o) && !E.contains(t, o) && t.push(o); n--;)(o = L[n]) in e && e[o] !== i[o] && !E.contains(t, o) && t.push(o)
      }
      var u = this,
        c = u._,
        f = Array.prototype,
        l = Object.prototype,
        h = Function.prototype,
        d = f.push,
        p = f.slice,
        y = l.toString,
        v = l.hasOwnProperty,
        g = Array.isArray,
        m = Object.keys,
        _ = h.bind,
        b = Object.create,
        w = function() {},
        E = function(e) {
          return e instanceof E ? e : this instanceof E ? void(this._wrapped = e) : new E(e)
        };
      void 0 !== e && e.exports && (t = e.exports = E), t._ = E, E.VERSION = "1.8.3";
      var S = function(e, t, n) {
          if (void 0 === t) return e;
          switch (null == n ? 3 : n) {
            case 1:
              return function(n) {
                return e.call(t, n)
              };
            case 2:
              return function(n, r) {
                return e.call(t, n, r)
              };
            case 3:
              return function(n, r, i) {
                return e.call(t, n, r, i)
              };
            case 4:
              return function(n, r, i, o) {
                return e.call(t, n, r, i, o)
              }
          }
          return function() {
            return e.apply(t, arguments)
          }
        },
        T = function(e, t, n) {
          return null == e ? E.identity : E.isFunction(e) ? S(e, t, n) : E.isObject(e) ? E.matcher(e) : E.property(e)
        };
      E.iteratee = function(e, t) {
        return T(e, t, 1 / 0)
      };
      var O = function(e, t) {
          return function(n) {
            var r = arguments.length;
            if (r < 2 || null == n) return n;
            for (var i = 1; i < r; i++)
              for (var o = arguments[i], s = e(o), a = s.length, u = 0; u < a; u++) {
                var c = s[u];
                t && void 0 !== n[c] || (n[c] = o[c])
              }
            return n
          }
        },
        A = function(e) {
          if (!E.isObject(e)) return {};
          if (b) return b(e);
          w.prototype = e;
          var t = new w;
          return w.prototype = null, t
        },
        I = function(e) {
          return function(t) {
            return null == t ? void 0 : t[e]
          }
        },
        N = Math.pow(2, 53) - 1,
        C = I("length"),
        x = function(e) {
          var t = C(e);
          return "number" == typeof t && t >= 0 && t <= N
        };
      E.each = E.forEach = function(e, t, n) {
        t = S(t, n);
        var r, i;
        if (x(e))
          for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
        else {
          var o = E.keys(e);
          for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
        }
        return e
      }, E.map = E.collect = function(e, t, n) {
        t = T(t, n);
        for (var r = !x(e) && E.keys(e), i = (r || e).length, o = Array(i), s = 0; s < i; s++) {
          var a = r ? r[s] : s;
          o[s] = t(e[a], a, e)
        }
        return o
      }, E.reduce = E.foldl = E.inject = n(1), E.reduceRight = E.foldr = n(-1), E.find = E.detect = function(e, t, n) {
        var r;
        if (void 0 !== (r = x(e) ? E.findIndex(e, t, n) : E.findKey(e, t, n)) && -1 !== r) return e[r]
      }, E.filter = E.select = function(e, t, n) {
        var r = [];
        return t = T(t, n), E.each(e, function(e, n, i) {
          t(e, n, i) && r.push(e)
        }), r
      }, E.reject = function(e, t, n) {
        return E.filter(e, E.negate(T(t)), n)
      }, E.every = E.all = function(e, t, n) {
        t = T(t, n);
        for (var r = !x(e) && E.keys(e), i = (r || e).length, o = 0; o < i; o++) {
          var s = r ? r[o] : o;
          if (!t(e[s], s, e)) return !1
        }
        return !0
      }, E.some = E.any = function(e, t, n) {
        t = T(t, n);
        for (var r = !x(e) && E.keys(e), i = (r || e).length, o = 0; o < i; o++) {
          var s = r ? r[o] : o;
          if (t(e[s], s, e)) return !0
        }
        return !1
      }, E.contains = E.includes = E.include = function(e, t, n, r) {
        return x(e) || (e = E.values(e)), ("number" != typeof n || r) && (n = 0), E.indexOf(e, t, n) >= 0
      }, E.invoke = function(e, t) {
        var n = p.call(arguments, 2),
          r = E.isFunction(t);
        return E.map(e, function(e) {
          var i = r ? t : e[t];
          return null == i ? i : i.apply(e, n)
        })
      }, E.pluck = function(e, t) {
        return E.map(e, E.property(t))
      }, E.where = function(e, t) {
        return E.filter(e, E.matcher(t))
      }, E.findWhere = function(e, t) {
        return E.find(e, E.matcher(t))
      }, E.max = function(e, t, n) {
        var r, i, o = -1 / 0,
          s = -1 / 0;
        if (null == t && null != e) {
          e = x(e) ? e : E.values(e);
          for (var a = 0, u = e.length; a < u; a++)(r = e[a]) > o && (o = r)
        } else t = T(t, n), E.each(e, function(e, n, r) {
          ((i = t(e, n, r)) > s || i === -1 / 0 && o === -1 / 0) && (o = e, s = i)
        });
        return o
      }, E.min = function(e, t, n) {
        var r, i, o = 1 / 0,
          s = 1 / 0;
        if (null == t && null != e) {
          e = x(e) ? e : E.values(e);
          for (var a = 0, u = e.length; a < u; a++)(r = e[a]) < o && (o = r)
        } else t = T(t, n), E.each(e, function(e, n, r) {
          ((i = t(e, n, r)) < s || i === 1 / 0 && o === 1 / 0) && (o = e, s = i)
        });
        return o
      }, E.shuffle = function(e) {
        for (var t, n = x(e) ? e : E.values(e), r = n.length, i = Array(r), o = 0; o < r; o++) t = E.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
        return i
      }, E.sample = function(e, t, n) {
        return null == t || n ? (x(e) || (e = E.values(e)), e[E.random(e.length - 1)]) : E.shuffle(e).slice(0, Math.max(0, t))
      }, E.sortBy = function(e, t, n) {
        return t = T(t, n), E.pluck(E.map(e, function(e, n, r) {
          return {
            value: e,
            index: n,
            criteria: t(e, n, r)
          }
        }).sort(function(e, t) {
          var n = e.criteria,
            r = t.criteria;
          if (n !== r) {
            if (n > r || void 0 === n) return 1;
            if (n < r || void 0 === r) return -1
          }
          return e.index - t.index
        }), "value")
      };
      var j = function(e) {
        return function(t, n, r) {
          var i = {};
          return n = T(n, r), E.each(t, function(r, o) {
            var s = n(r, o, t);
            e(i, r, s)
          }), i
        }
      };
      E.groupBy = j(function(e, t, n) {
        E.has(e, n) ? e[n].push(t) : e[n] = [t]
      }), E.indexBy = j(function(e, t, n) {
        e[n] = t
      }), E.countBy = j(function(e, t, n) {
        E.has(e, n) ? e[n]++ : e[n] = 1
      }), E.toArray = function(e) {
        return e ? E.isArray(e) ? p.call(e) : x(e) ? E.map(e, E.identity) : E.values(e) : []
      }, E.size = function(e) {
        return null == e ? 0 : x(e) ? e.length : E.keys(e).length
      }, E.partition = function(e, t, n) {
        t = T(t, n);
        var r = [],
          i = [];
        return E.each(e, function(e, n, o) {
          (t(e, n, o) ? r : i).push(e)
        }), [r, i]
      }, E.first = E.head = E.take = function(e, t, n) {
        if (null != e) return null == t || n ? e[0] : E.initial(e, e.length - t)
      }, E.initial = function(e, t, n) {
        return p.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
      }, E.last = function(e, t, n) {
        if (null != e) return null == t || n ? e[e.length - 1] : E.rest(e, Math.max(0, e.length - t))
      }, E.rest = E.tail = E.drop = function(e, t, n) {
        return p.call(e, null == t || n ? 1 : t)
      }, E.compact = function(e) {
        return E.filter(e, E.identity)
      };
      var P = function(e, t, n, r) {
        for (var i = [], o = 0, s = r || 0, a = C(e); s < a; s++) {
          var u = e[s];
          if (x(u) && (E.isArray(u) || E.isArguments(u))) {
            t || (u = P(u, t, n));
            var c = 0,
              f = u.length;
            for (i.length += f; c < f;) i[o++] = u[c++]
          } else n || (i[o++] = u)
        }
        return i
      };
      E.flatten = function(e, t) {
        return P(e, t, !1)
      }, E.without = function(e) {
        return E.difference(e, p.call(arguments, 1))
      }, E.uniq = E.unique = function(e, t, n, r) {
        E.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = T(n, r));
        for (var i = [], o = [], s = 0, a = C(e); s < a; s++) {
          var u = e[s],
            c = n ? n(u, s, e) : u;
          t ? (s && o === c || i.push(u), o = c) : n ? E.contains(o, c) || (o.push(c), i.push(u)) : E.contains(i, u) || i.push(u)
        }
        return i
      }, E.union = function() {
        return E.uniq(P(arguments, !0, !0))
      }, E.intersection = function(e) {
        for (var t = [], n = arguments.length, r = 0, i = C(e); r < i; r++) {
          var o = e[r];
          if (!E.contains(t, o)) {
            for (var s = 1; s < n && E.contains(arguments[s], o); s++);
            s === n && t.push(o)
          }
        }
        return t
      }, E.difference = function(e) {
        var t = P(arguments, !0, !0, 1);
        return E.filter(e, function(e) {
          return !E.contains(t, e)
        })
      }, E.zip = function() {
        return E.unzip(arguments)
      }, E.unzip = function(e) {
        for (var t = e && E.max(e, C).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = E.pluck(e, r);
        return n
      }, E.object = function(e, t) {
        for (var n = {}, r = 0, i = C(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
      }, E.findIndex = o(1), E.findLastIndex = o(-1), E.sortedIndex = function(e, t, n, r) {
        n = T(n, r, 1);
        for (var i = n(t), o = 0, s = C(e); o < s;) {
          var a = Math.floor((o + s) / 2);
          n(e[a]) < i ? o = a + 1 : s = a
        }
        return o
      }, E.indexOf = s(1, E.findIndex, E.sortedIndex), E.lastIndexOf = s(-1, E.findLastIndex), E.range = function(e, t, n) {
        null == t && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
        return i
      };
      var R = function(e, t, n, r, i) {
        if (!(r instanceof t)) return e.apply(n, i);
        var o = A(e.prototype),
          s = e.apply(o, i);
        return E.isObject(s) ? s : o
      };
      E.bind = function(e, t) {
        if (_ && e.bind === _) return _.apply(e, p.call(arguments, 1));
        if (!E.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var n = p.call(arguments, 2),
          r = function() {
            return R(e, r, t, this, n.concat(p.call(arguments)))
          };
        return r
      }, E.partial = function(e) {
        var t = p.call(arguments, 1),
          n = function() {
            for (var r = 0, i = t.length, o = Array(i), s = 0; s < i; s++) o[s] = t[s] === E ? arguments[r++] : t[s];
            for (; r < arguments.length;) o.push(arguments[r++]);
            return R(e, n, this, this, o)
          };
        return n
      }, E.bindAll = function(e) {
        var t, n, r = arguments.length;
        if (r <= 1) throw new Error("bindAll must be passed function names");
        for (t = 1; t < r; t++) n = arguments[t], e[n] = E.bind(e[n], e);
        return e
      }, E.memoize = function(e, t) {
        var n = function(r) {
          var i = n.cache,
            o = "" + (t ? t.apply(this, arguments) : r);
          return E.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
        };
        return n.cache = {}, n
      }, E.delay = function(e, t) {
        var n = p.call(arguments, 2);
        return setTimeout(function() {
          return e.apply(null, n)
        }, t)
      }, E.defer = E.partial(E.delay, E, 1), E.throttle = function(e, t, n) {
        var r, i, o, s = null,
          a = 0;
        n || (n = {});
        var u = function() {
          a = !1 === n.leading ? 0 : E.now(), s = null, o = e.apply(r, i), s || (r = i = null)
        };
        return function() {
          var c = E.now();
          a || !1 !== n.leading || (a = c);
          var f = t - (c - a);
          return r = this, i = arguments, f <= 0 || f > t ? (s && (clearTimeout(s), s = null), a = c, o = e.apply(r, i), s || (r = i = null)) : s || !1 === n.trailing || (s = setTimeout(u, f)), o
        }
      }, E.debounce = function(e, t, n) {
        var r, i, o, s, a, u = function() {
          var c = E.now() - s;
          c < t && c >= 0 ? r = setTimeout(u, t - c) : (r = null, n || (a = e.apply(o, i), r || (o = i = null)))
        };
        return function() {
          o = this, i = arguments, s = E.now();
          var c = n && !r;
          return r || (r = setTimeout(u, t)), c && (a = e.apply(o, i), o = i = null), a
        }
      }, E.wrap = function(e, t) {
        return E.partial(t, e)
      }, E.negate = function(e) {
        return function() {
          return !e.apply(this, arguments)
        }
      }, E.compose = function() {
        var e = arguments,
          t = e.length - 1;
        return function() {
          for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
          return r
        }
      }, E.after = function(e, t) {
        return function() {
          if (--e < 1) return t.apply(this, arguments)
        }
      }, E.before = function(e, t) {
        var n;
        return function() {
          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
        }
      }, E.once = E.partial(E.before, 2);
      var k = !{
          toString: null
        }.propertyIsEnumerable("toString"),
        L = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
      E.keys = function(e) {
        if (!E.isObject(e)) return [];
        if (m) return m(e);
        var t = [];
        for (var n in e) E.has(e, n) && t.push(n);
        return k && a(e, t), t
      }, E.allKeys = function(e) {
        if (!E.isObject(e)) return [];
        var t = [];
        for (var n in e) t.push(n);
        return k && a(e, t), t
      }, E.values = function(e) {
        for (var t = E.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
        return r
      }, E.mapObject = function(e, t, n) {
        t = T(t, n);
        for (var r, i = E.keys(e), o = i.length, s = {}, a = 0; a < o; a++) r = i[a], s[r] = t(e[r], r, e);
        return s
      }, E.pairs = function(e) {
        for (var t = E.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
        return r
      }, E.invert = function(e) {
        for (var t = {}, n = E.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
      }, E.functions = E.methods = function(e) {
        var t = [];
        for (var n in e) E.isFunction(e[n]) && t.push(n);
        return t.sort()
      }, E.extend = O(E.allKeys), E.extendOwn = E.assign = O(E.keys), E.findKey = function(e, t, n) {
        t = T(t, n);
        for (var r, i = E.keys(e), o = 0, s = i.length; o < s; o++)
          if (r = i[o], t(e[r], r, e)) return r
      }, E.pick = function(e, t, n) {
        var r, i, o = {},
          s = e;
        if (null == s) return o;
        E.isFunction(t) ? (i = E.allKeys(s), r = S(t, n)) : (i = P(arguments, !1, !1, 1), r = function(e, t, n) {
          return t in n
        }, s = Object(s));
        for (var a = 0, u = i.length; a < u; a++) {
          var c = i[a],
            f = s[c];
          r(f, c, s) && (o[c] = f)
        }
        return o
      }, E.omit = function(e, t, n) {
        if (E.isFunction(t)) t = E.negate(t);
        else {
          var r = E.map(P(arguments, !1, !1, 1), String);
          t = function(e, t) {
            return !E.contains(r, t)
          }
        }
        return E.pick(e, t, n)
      }, E.defaults = O(E.allKeys, !0), E.create = function(e, t) {
        var n = A(e);
        return t && E.extendOwn(n, t), n
      }, E.clone = function(e) {
        return E.isObject(e) ? E.isArray(e) ? e.slice() : E.extend({}, e) : e
      }, E.tap = function(e, t) {
        return t(e), e
      }, E.isMatch = function(e, t) {
        var n = E.keys(t),
          r = n.length;
        if (null == e) return !r;
        for (var i = Object(e), o = 0; o < r; o++) {
          var s = n[o];
          if (t[s] !== i[s] || !(s in i)) return !1
        }
        return !0
      };
      var U = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof E && (e = e._wrapped), t instanceof E && (t = t._wrapped);
        var i = y.call(e);
        if (i !== y.call(t)) return !1;
        switch (i) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;
          case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e == +t
        }
        var o = "[object Array]" === i;
        if (!o) {
          if ("object" != typeof e || "object" != typeof t) return !1;
          var s = e.constructor,
            a = t.constructor;
          if (s !== a && !(E.isFunction(s) && s instanceof s && E.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
        }
        n = n || [], r = r || [];
        for (var u = n.length; u--;)
          if (n[u] === e) return r[u] === t;
        if (n.push(e), r.push(t), o) {
          if ((u = e.length) !== t.length) return !1;
          for (; u--;)
            if (!U(e[u], t[u], n, r)) return !1
        } else {
          var c, f = E.keys(e);
          if (u = f.length, E.keys(t).length !== u) return !1;
          for (; u--;)
            if (c = f[u], !E.has(t, c) || !U(e[c], t[c], n, r)) return !1
        }
        return n.pop(), r.pop(), !0
      };
      E.isEqual = function(e, t) {
        return U(e, t)
      }, E.isEmpty = function(e) {
        return null == e || (x(e) && (E.isArray(e) || E.isString(e) || E.isArguments(e)) ? 0 === e.length : 0 === E.keys(e).length)
      }, E.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
      }, E.isArray = g || function(e) {
        return "[object Array]" === y.call(e)
      }, E.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
      }, E.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
        E["is" + e] = function(t) {
          return y.call(t) === "[object " + e + "]"
        }
      }), E.isArguments(arguments) || (E.isArguments = function(e) {
        return E.has(e, "callee")
      }), "function" != typeof /./ && "object" != typeof Int8Array && (E.isFunction = function(e) {
        return "function" == typeof e || !1
      }), E.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
      }, E.isNaN = function(e) {
        return E.isNumber(e) && e !== +e
      }, E.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === y.call(e)
      }, E.isNull = function(e) {
        return null === e
      }, E.isUndefined = function(e) {
        return void 0 === e
      }, E.has = function(e, t) {
        return null != e && v.call(e, t)
      }, E.noConflict = function() {
        return u._ = c, this
      }, E.identity = function(e) {
        return e
      }, E.constant = function(e) {
        return function() {
          return e
        }
      }, E.noop = function() {}, E.property = I, E.propertyOf = function(e) {
        return null == e ? function() {} : function(t) {
          return e[t]
        }
      }, E.matcher = E.matches = function(e) {
        return e = E.extendOwn({}, e),
          function(t) {
            return E.isMatch(t, e)
          }
      }, E.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        t = S(t, n, 1);
        for (var i = 0; i < e; i++) r[i] = t(i);
        return r
      }, E.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
      }, E.now = Date.now || function() {
        return (new Date).getTime()
      };
      var M = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;"
        },
        D = E.invert(M),
        F = function(e) {
          var t = function(t) {
              return e[t]
            },
            n = "(?:" + E.keys(e).join("|") + ")",
            r = RegExp(n),
            i = RegExp(n, "g");
          return function(e) {
            return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
          }
        };
      E.escape = F(M), E.unescape = F(D), E.result = function(e, t, n) {
        var r = null == e ? void 0 : e[t];
        return void 0 === r && (r = n), E.isFunction(r) ? r.call(e) : r
      };
      var B = 0;
      E.uniqueId = function(e) {
        var t = ++B + "";
        return e ? e + t : t
      }, E.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var q = /(.)^/,
        V = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        },
        Y = /\\|'|\r|\n|\u2028|\u2029/g,
        W = function(e) {
          return "\\" + V[e]
        };
      E.template = function(e, t, n) {
        !t && n && (t = n), t = E.defaults({}, t, E.templateSettings);
        var r = RegExp([(t.escape || q).source, (t.interpolate || q).source, (t.evaluate || q).source].join("|") + "|$", "g"),
          i = 0,
          o = "__p+='";
        e.replace(r, function(t, n, r, s, a) {
          return o += e.slice(i, a).replace(Y, W), i = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), t
        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
          var s = new Function(t.variable || "obj", "_", o)
        } catch (e) {
          throw e.source = o, e
        }
        var a = function(e) {
          return s.call(this, e, E)
        };
        return a.source = "function(" + (t.variable || "obj") + "){\n" + o + "}", a
      }, E.chain = function(e) {
        var t = E(e);
        return t._chain = !0, t
      };
      var z = function(e, t) {
        return e._chain ? E(t).chain() : t
      };
      E.mixin = function(e) {
        E.each(E.functions(e), function(t) {
          var n = E[t] = e[t];
          E.prototype[t] = function() {
            var e = [this._wrapped];
            return d.apply(e, arguments), z(this, n.apply(E, e))
          }
        })
      }, E.mixin(E), E.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = f[e];
        E.prototype[e] = function() {
          var n = this._wrapped;
          return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], z(this, n)
        }
      }), E.each(["concat", "join", "slice"], function(e) {
        var t = f[e];
        E.prototype[e] = function() {
          return z(this, t.apply(this._wrapped, arguments))
        }
      }), E.prototype.value = function() {
        return this._wrapped
      }, E.prototype.valueOf = E.prototype.toJSON = E.prototype.value, E.prototype.toString = function() {
        return "" + this._wrapped
      }, r = [], void 0 !== (i = function() {
        return E
      }.apply(t, r)) && (e.exports = i)
    }).call(this)
  }, function(e, t, n) {
    "use strict";
    var r = (n(0), n(59).Promise);
    r._continueWhile = function(e, t) {
      return e() ? t().then(function() {
        return r._continueWhile(e, t)
      }) : r.resolve()
    }, e.exports = r
  }, function(e, t, n) {
    "use strict";
    var r = n(66),
      i = n(0),
      o = i.extend,
      s = n(1),
      a = n(4),
      u = n(5),
      c = n(3),
      f = c.getSessionToken,
      l = c.ajax,
      h = function(e, t) {
        var n = (new Date).getTime(),
          i = r(n + e);
        return t ? i + "," + n + ",master" : i + "," + n
      },
      d = function(e, t) {
        t ? e["X-LC-Sign"] = h(u.applicationKey) : e["X-LC-Key"] = u.applicationKey
      },
      p = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments[1],
          n = {
            "X-LC-Id": u.applicationId,
            "Content-Type": "application/json;charset=UTF-8"
          },
          r = !1;
        return "boolean" == typeof e.useMasterKey ? r = e.useMasterKey : "boolean" == typeof u._config.useMasterKey && (r = u._config.useMasterKey), r ? u.masterKey ? t ? n["X-LC-Sign"] = h(u.masterKey, !0) : n["X-LC-Key"] = u.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), d(n, t)) : d(n, t), u.hookKey && (n["X-LC-Hook-Key"] = u.hookKey), null !== u._config.production && (n["X-LC-Prod"] = String(u._config.production)), n["X-LC-UA"] = u._sharedConfig.userAgent, s.resolve().then(function() {
          var t = f(e);
          if (t) n["X-LC-Session"] = t;
          else if (!u._config.disableCurrentUser) return u.User.currentAsync().then(function(e) {
            return e && e._sessionToken && (n["X-LC-Session"] = e._sessionToken), n
          });
          return n
        })
      },
      y = function(e) {
        var t = e.service,
          n = void 0 === t ? "api" : t,
          r = e.version,
          i = void 0 === r ? "1.1" : r,
          o = e.path,
          s = u._config.serverURLs[n];
        if (!s) throw new Error("undefined server URL for " + n);
        return "/" !== s.charAt(s.length - 1) && (s += "/"), s += i, o && (s += o), s
      },
      v = function(e) {
        return new s(function(t, n) {
          var r = {
            code: e.code || -1,
            error: e.message || e.responseText
          };
          if (e.response && e.response.code) r = e.response;
          else if (e.responseText) try {
            r = JSON.parse(e.responseText)
          } catch (e) {}
          n(new a(r.code, r.error))
        })
      },
      g = function(e) {
        var t = e.service,
          n = e.version,
          r = e.method,
          i = e.path,
          o = e.query,
          s = e.data,
          a = void 0 === s ? {} : s,
          c = e.authOptions,
          f = e.signKey,
          h = void 0 === f || f;
        if (!u.applicationId || !u.applicationKey && !u.masterKey) throw new Error("Not initialized");
        u._appRouter.refresh();
        var d = y({
          service: t,
          path: i,
          version: n
        });
        return p(c, h).then(function(e) {
          return l({
            method: r,
            url: d,
            query: o,
            data: a,
            headers: e
          }).catch(v)
        })
      },
      m = function(e, t, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          s = arguments[5],
          a = arguments[6],
          u = "";
        if (e && (u += "/" + e), t && (u += "/" + t), n && (u += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");
        if (i && i._where) throw new Error("_where should be in the query");
        return r && "get" === r.toLowerCase() && (a = o({}, a, i), i = null), g({
          method: r,
          path: u,
          query: a,
          data: i,
          authOptions: s
        })
      };
    u.request = g, e.exports = {
      _request: m,
      request: g
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      var t = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),
        n = t.exec(e);
      if (!n) return null;
      var r = n[1] || 0,
        i = (n[2] || 1) - 1,
        o = n[3] || 0,
        s = n[4] || 0,
        a = n[5] || 0,
        u = n[6] || 0,
        c = n[8] || 0;
      return new Date(Date.UTC(r, i, o, s, a, u, c))
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = n(0),
      s = n(8),
      a = n(6)("leancloud:request"),
      u = 0,
      c = function(e) {
        var t = e.method,
          n = e.url,
          r = e.query,
          o = e.data,
          c = e.headers,
          f = void 0 === c ? {} : c,
          l = e.onprogress,
          h = u++;
        a("request(" + h + ")", t, n, r, o, f);
        var d = {};
        if (r)
          for (var p in r) "object" === i(r[p]) ? d[p] = JSON.stringify(r[p]) : d[p] = r[p];
        return new Promise(function(e, r) {
          var i = s(t, n).set(f).query(d).send(o);
          l && i.on("progress", l), i.end(function(t, n) {
            return n && a("response(" + h + ")", n.status, n.body || n.text, n.header), t ? (n && (t.statusCode = n.status, t.responseText = n.text, t.response = n.body), r(t)) : e(n.body)
          })
        })
      },
      f = function(e) {
        return o.isNull(e) || o.isUndefined(e)
      },
      l = function(e) {
        return o.isArray(e) ? e : void 0 === e || null === e ? [] : [e]
      },
      h = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.keys,
          n = e.include,
          r = e.includeACL,
          i = {};
        return t && (i.keys = l(t).join(",")), n && (i.include = l(n).join(",")), r && (i.returnACL = r), i
      },
      d = function(e) {
        return e.sessionToken ? e.sessionToken : e.user && "function" == typeof e.user.getSessionToken ? e.user.getSessionToken() : void 0
      },
      p = function(e) {
        return function(t) {
          return e(t), t
        }
      },
      y = function() {},
      v = function(e, t, n) {
        var r;
        return r = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
          e.apply(this, arguments)
        }, o.extend(r, e), y.prototype = e.prototype, r.prototype = new y, t && o.extend(r.prototype, t), n && o.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r
      };
    e.exports = {
      ajax: c,
      isNullOrUndefined: f,
      ensureArray: l,
      transformFetchOptions: h,
      getSessionToken: d,
      tap: p,
      inherits: v,
      parseDate: r
    }
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      var n = new Error(t);
      return n.code = e, n
    }
    n(0).extend(r, {
      OTHER_CAUSE: -1,
      INTERNAL_SERVER_ERROR: 1,
      CONNECTION_FAILED: 100,
      OBJECT_NOT_FOUND: 101,
      INVALID_QUERY: 102,
      INVALID_CLASS_NAME: 103,
      MISSING_OBJECT_ID: 104,
      INVALID_KEY_NAME: 105,
      INVALID_POINTER: 106,
      INVALID_JSON: 107,
      COMMAND_UNAVAILABLE: 108,
      NOT_INITIALIZED: 109,
      INCORRECT_TYPE: 111,
      INVALID_CHANNEL_NAME: 112,
      PUSH_MISCONFIGURED: 115,
      OBJECT_TOO_LARGE: 116,
      OPERATION_FORBIDDEN: 119,
      CACHE_MISS: 120,
      INVALID_NESTED_KEY: 121,
      INVALID_FILE_NAME: 122,
      INVALID_ACL: 123,
      TIMEOUT: 124,
      INVALID_EMAIL_ADDRESS: 125,
      MISSING_CONTENT_TYPE: 126,
      MISSING_CONTENT_LENGTH: 127,
      INVALID_CONTENT_LENGTH: 128,
      FILE_TOO_LARGE: 129,
      FILE_SAVE_ERROR: 130,
      FILE_DELETE_ERROR: 153,
      DUPLICATE_VALUE: 137,
      INVALID_ROLE_NAME: 139,
      EXCEEDED_QUOTA: 140,
      SCRIPT_FAILED: 141,
      VALIDATION_ERROR: 142,
      INVALID_IMAGE_DATA: 150,
      UNSAVED_FILE_ERROR: 151,
      INVALID_PUSH_TIME_ERROR: 152,
      USERNAME_MISSING: 200,
      PASSWORD_MISSING: 201,
      USERNAME_TAKEN: 202,
      EMAIL_TAKEN: 203,
      EMAIL_MISSING: 204,
      EMAIL_NOT_FOUND: 205,
      SESSION_MISSING: 206,
      MUST_CREATE_USER_THROUGH_SIGNUP: 207,
      ACCOUNT_ALREADY_LINKED: 208,
      LINKED_ID_MISSING: 250,
      INVALID_LINKED_SESSION: 251,
      UNSUPPORTED_SERVICE: 252,
      X_DOMAIN_REQUEST: 602
    }), e.exports = r
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = n(0),
        i = n(49),
        o = n(3),
        s = o.inherits,
        a = o.parseDate,
        u = t.AV || {};
      u._config = {
        serverURLs: {},
        useMasterKey: !1,
        production: null,
        realtime: null
      }, u._sharedConfig = {
        userAgent: i,
        liveQueryRealtime: null
      }, u._getAVPath = function(e) {
        if (!u.applicationId) throw new Error("You need to call AV.initialize before using AV.");
        if (e || (e = ""), !r.isString(e)) throw new Error("Tried to get a localStorage path that wasn't a String.");
        return "/" === e[0] && (e = e.substring(1)), "AV/" + u.applicationId + "/" + e
      };
      var c = function() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        },
        f = function() {
          return "" + c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c() + c() + c()
        };
      u._installationId = null, u._getInstallationId = function() {
        if (u._installationId) return u.Promise.resolve(u._installationId);
        var e = u._getAVPath("installationId");
        return u.localStorage.getItemAsync(e).then(function(t) {
          return u._installationId = t, u._installationId ? t : (u._installationId = t = f(), u.localStorage.setItemAsync(e, t).then(function() {
            return t
          }))
        })
      }, u._subscriptionId = null, u._refreshSubscriptionId = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u._getAVPath("subscriptionId"),
          t = u._subscriptionId = f();
        return u.localStorage.setItemAsync(e, t).then(function() {
          return t
        })
      }, u._getSubscriptionId = function() {
        if (u._subscriptionId) return u.Promise.resolve(u._subscriptionId);
        var e = u._getAVPath("subscriptionId");
        return u.localStorage.getItemAsync(e).then(function(t) {
          return u._subscriptionId = t, u._subscriptionId || (t = u._refreshSubscriptionId(e)), t
        })
      }, u._parseDate = a, u._extend = function(e, t) {
        var n = s(this, e, t);
        return n.extend = this.extend, n
      }, u._encode = function(e, t, n) {
        var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (e instanceof u.Object) {
          if (n) throw new Error("AV.Objects not allowed here");
          return t && !r.include(t, e) && e._hasData ? e._toFullJSON(t.concat(e), i) : e._toPointer()
        }
        if (e instanceof u.ACL) return e.toJSON();
        if (r.isDate(e)) return i ? {
          __type: "Date",
          iso: e.toJSON()
        } : e.toJSON();
        if (e instanceof u.GeoPoint) return e.toJSON();
        if (r.isArray(e)) return r.map(e, function(e) {
          return u._encode(e, t, n, i)
        });
        if (r.isRegExp(e)) return e.source;
        if (e instanceof u.Relation) return e.toJSON();
        if (e instanceof u.Op) return e.toJSON();
        if (e instanceof u.File) {
          if (!e.url() && !e.id) throw new Error("Tried to save an object containing an unsaved file.");
          return e._toFullJSON(t, i)
        }
        return r.isObject(e) ? r.mapObject(e, function(e, r) {
          return u._encode(e, t, n, i)
        }) : e
      }, u._decode = function(e, t) {
        if (!r.isObject(e) || r.isDate(e)) return e;
        if (r.isArray(e)) return r.map(e, function(e) {
          return u._decode(e)
        });
        if (e instanceof u.Object) return e;
        if (e instanceof u.File) return e;
        if (e instanceof u.Op) return e;
        if (e instanceof u.GeoPoint) return e;
        if (e instanceof u.ACL) return e;
        if ("ACL" === t) return new u.ACL(e);
        if (e.__op) return u.Op._decode(e);
        var n;
        if ("Pointer" === e.__type) {
          n = e.className;
          var i = u.Object._create(n);
          if (Object.keys(e).length > 3) {
            var o = r.clone(e);
            delete o.__type, delete o.className, i._finishFetch(o, !0)
          } else i._finishFetch({
            objectId: e.objectId
          }, !1);
          return i
        }
        if ("Object" === e.__type) {
          n = e.className;
          var s = r.clone(e);
          delete s.__type, delete s.className;
          var a = u.Object._create(n);
          return a._finishFetch(s, !0), a
        }
        if ("Date" === e.__type) return u._parseDate(e.iso);
        if ("GeoPoint" === e.__type) return new u.GeoPoint({
          latitude: e.latitude,
          longitude: e.longitude
        });
        if ("Relation" === e.__type) {
          if (!t) throw new Error("key missing decoding a Relation");
          var c = new u.Relation(null, t);
          return c.targetClassName = e.className, c
        }
        if ("File" === e.__type) {
          var f = new u.File(e.name),
            l = r.clone(e);
          return delete l.__type, f._finishFetch(l), f
        }
        return r.mapObject(e, u._decode)
      }, u.parseJSON = u._decode, u._encodeObjectOrArray = function(e) {
        var t = function(e) {
          return e && e._toFullJSON && (e = e._toFullJSON([])), r.mapObject(e, function(e) {
            return u._encode(e, [])
          })
        };
        return r.isArray(e) ? e.map(function(e) {
          return t(e)
        }) : t(e)
      }, u._arrayEach = r.each, u._traverse = function(e, t, n) {
        if (e instanceof u.Object) {
          if (n = n || [], r.indexOf(n, e) >= 0) return;
          return n.push(e), u._traverse(e.attributes, t, n), t(e)
        }
        return e instanceof u.Relation || e instanceof u.File ? t(e) : r.isArray(e) ? (r.each(e, function(r, i) {
          var o = u._traverse(r, t, n);
          o && (e[i] = o)
        }), t(e)) : r.isObject(e) ? (u._each(e, function(r, i) {
          var o = u._traverse(r, t, n);
          o && (e[i] = o)
        }), t(e)) : t(e)
      }, u._objectEach = u._each = function(e, t) {
        r.isObject(e) ? r.each(r.keys(e), function(n) {
          t(e[n], n)
        }) : r.each(e, t)
      }, e.exports = u
    }).call(t, n(7))
  }, function(e, t, n) {
    function r() {
      return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    }

    function i(e) {
      var n = this.useColors;
      if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
        var r = "color: " + this.color;
        e.splice(1, 0, r, "color: inherit");
        var i = 0,
          o = 0;
        e[0].replace(/%[a-zA-Z%]/g, function(e) {
          "%%" !== e && (i++, "%c" === e && (o = i))
        }), e.splice(o, 0, r)
      }
    }

    function o() {
      return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }

    function s(e) {
      try {
        null == e ? t.storage.removeItem("debug") : t.storage.debug = e
      } catch (e) {}
    }

    function a() {
      var e;
      try {
        e = t.storage.debug
      } catch (e) {}
      return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
    }
    t = e.exports = n(58), t.log = o, t.formatArgs = i, t.save = s, t.load = a, t.useColors = r, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
      try {
        return window.localStorage
      } catch (e) {}
    }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
      try {
        return JSON.stringify(e)
      } catch (e) {
        return "[UnexpectedJSONParseError]: " + e.message
      }
    }, t.enable(a())
  }, function(e, t) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, function(e, t, n) {
    function r() {}

    function i(e) {
      if (!y(e)) return e;
      var t = [];
      for (var n in e) o(t, n, e[n]);
      return t.join("&")
    }

    function o(e, t, n) {
      if (null != n)
        if (Array.isArray(n)) n.forEach(function(n) {
          o(e, t, n)
        });
        else if (y(n))
        for (var r in n) o(e, t + "[" + r + "]", n[r]);
      else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
      else null === n && e.push(encodeURIComponent(t))
    }

    function s(e) {
      for (var t, n, r = {}, i = e.split("&"), o = 0, s = i.length; o < s; ++o) t = i[o], n = t.indexOf("="), -1 == n ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
      return r
    }

    function a(e) {
      var t, n, r, i, o = e.split(/\r?\n/),
        s = {};
      o.pop();
      for (var a = 0, u = o.length; a < u; ++a) n = o[a], t = n.indexOf(":"), r = n.slice(0, t).toLowerCase(), i = b(n.slice(t + 1)), s[r] = i;
      return s
    }

    function u(e) {
      return /[\/+]json\b/.test(e)
    }

    function c(e) {
      this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
      var t = this.xhr.status;
      1223 === t && (t = 204), this._setStatusProperties(t), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
    }

    function f(e, t) {
      var n = this;
      this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function() {
        var e = null,
          t = null;
        try {
          t = new c(n)
        } catch (t) {
          return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = t, n.xhr ? (e.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, e.status = n.xhr.status ? n.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, e.status = null), n.callback(e)
        }
        n.emit("response", t);
        var r;
        try {
          n._isResponseOK(t) || (r = new Error(t.statusText || "Unsuccessful HTTP response"), r.original = e, r.response = t, r.status = t.status)
        } catch (e) {
          r = e
        }
        r ? n.callback(r, t) : n.callback(null, t)
      })
    }

    function l(e, t, n) {
      var r = _("DELETE", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }
    var h;
    "undefined" != typeof window ? h = window : "undefined" != typeof self ? h = self : (console.warn("Using browser-only version of superagent in non-browser environment"), h = this);
    var d = n(56),
      p = n(69),
      y = n(11),
      v = n(68),
      g = n(70),
      m = n(71),
      _ = t = e.exports = function(e, n) {
        return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 == arguments.length ? new t.Request("GET", e) : new t.Request(e, n)
      };
    t.Request = f, _.getXHR = function() {
      if (!(!h.XMLHttpRequest || h.location && "file:" == h.location.protocol && h.ActiveXObject)) return new XMLHttpRequest;
      try {
        return new ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
      } catch (e) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
      } catch (e) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP")
      } catch (e) {}
      throw Error("Browser-only verison of superagent could not find XHR")
    };
    var b = "".trim ? function(e) {
      return e.trim()
    } : function(e) {
      return e.replace(/(^\s*|\s*$)/g, "")
    };
    _.serializeObject = i, _.parseString = s, _.types = {
      html: "text/html",
      json: "application/json",
      xml: "application/xml",
      urlencoded: "application/x-www-form-urlencoded",
      form: "application/x-www-form-urlencoded",
      "form-data": "application/x-www-form-urlencoded"
    }, _.serialize = {
      "application/x-www-form-urlencoded": i,
      "application/json": JSON.stringify
    }, _.parse = {
      "application/x-www-form-urlencoded": s,
      "application/json": JSON.parse
    }, g(c.prototype), c.prototype._parseBody = function(e) {
      var t = _.parse[this.type];
      return this.req._parser ? this.req._parser(this, e) : (!t && u(this.type) && (t = _.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null)
    }, c.prototype.toError = function() {
      var e = this.req,
        t = e.method,
        n = e.url,
        r = "cannot " + t + " " + n + " (" + this.status + ")",
        i = new Error(r);
      return i.status = this.status, i.method = t, i.url = n, i
    }, _.Response = c, d(f.prototype), p(f.prototype), f.prototype.type = function(e) {
      return this.set("Content-Type", _.types[e] || e), this
    }, f.prototype.accept = function(e) {
      return this.set("Accept", _.types[e] || e), this
    }, f.prototype.auth = function(e, t, n) {
      switch ("object" == typeof t && null !== t && (n = t), n || (n = {
        type: "function" == typeof btoa ? "basic" : "auto"
      }), n.type) {
        case "basic":
          this.set("Authorization", "Basic " + btoa(e + ":" + t));
          break;
        case "auto":
          this.username = e, this.password = t;
          break;
        case "bearer":
          this.set("Authorization", "Bearer " + e)
      }
      return this
    }, f.prototype.query = function(e) {
      return "string" != typeof e && (e = i(e)), e && this._query.push(e), this
    }, f.prototype.attach = function(e, t, n) {
      if (t) {
        if (this._data) throw Error("superagent can't mix .send() and .attach()");
        this._getFormData().append(e, t, n || t.name)
      }
      return this
    }, f.prototype._getFormData = function() {
      return this._formData || (this._formData = new h.FormData), this._formData
    }, f.prototype.callback = function(e, t) {
      if (this._maxRetries && this._retries++ < this._maxRetries && m(e, t)) return this._retry();
      var n = this._callback;
      this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t)
    }, f.prototype.crossDomainError = function() {
      var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
      e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
    }, f.prototype.buffer = f.prototype.ca = f.prototype.agent = function() {
      return console.warn("This is not supported in browser version of superagent"), this
    }, f.prototype.pipe = f.prototype.write = function() {
      throw Error("Streaming is not supported in browser version of superagent")
    }, f.prototype._appendQueryString = function() {
      var e = this._query.join("&");
      if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e), this._sort) {
        var t = this.url.indexOf("?");
        if (t >= 0) {
          var n = this.url.substring(t + 1).split("&");
          v(this._sort) ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&")
        }
      }
    }, f.prototype._isHost = function(e) {
      return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
    }, f.prototype.end = function(e) {
      return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || r, this._appendQueryString(), this._end()
    }, f.prototype._end = function() {
      var e = this,
        t = this.xhr = _.getXHR(),
        n = this._formData || this._data;
      this._setTimeouts(), t.onreadystatechange = function() {
        var n = t.readyState;
        if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 == n) {
          var r;
          try {
            r = t.status
          } catch (e) {
            r = 0
          }
          if (!r) {
            if (e.timedout || e._aborted) return;
            return e.crossDomainError()
          }
          e.emit("end")
        }
      };
      var r = function(t, n) {
        n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = t, e.emit("progress", n)
      };
      if (this.hasListeners("progress")) try {
        t.onprogress = r.bind(null, "download"), t.upload && (t.upload.onprogress = r.bind(null, "upload"))
      } catch (e) {}
      try {
        this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0)
      } catch (e) {
        return this.callback(e)
      }
      if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
        var i = this._header["content-type"],
          o = this._serializer || _.serialize[i ? i.split(";")[0] : ""];
        !o && u(i) && (o = _.serialize["application/json"]), o && (n = o(n))
      }
      for (var s in this.header) null != this.header[s] && this.header.hasOwnProperty(s) && t.setRequestHeader(s, this.header[s]);
      return this._responseType && (t.responseType = this._responseType), this.emit("request", this), t.send(void 0 !== n ? n : null), this
    }, _.get = function(e, t, n) {
      var r = _("GET", e);
      return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
    }, _.head = function(e, t, n) {
      var r = _("HEAD", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, _.options = function(e, t, n) {
      var r = _("OPTIONS", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, _.del = l, _.delete = l, _.patch = function(e, t, n) {
      var r = _("PATCH", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, _.post = function(e, t, n) {
      var r = _("POST", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, _.put = function(e, t, n) {
      var r = _("PUT", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = function() {
        function e() {
          r(this, e), this._entries = []
        }
        return o(e, [{
          key: "append",
          value: function(e, t) {
            if ("string" != typeof e) throw new TypeError("FormData name must be a string");
            if ("string" != typeof t && ("object" !== (void 0 === t ? "undefined" : i(t)) || "string" != typeof t.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");
            this._entries.push([e, t])
          }
        }, {
          key: "set",
          value: function(e, t) {
            var n = this.get(e);
            n ? n[1] = t : this.append(e, t)
          }
        }, {
          key: "delete",
          value: function(e) {
            this._entries = this._entries.filter(function(t) {
              return t[0] !== e
            })
          }
        }, {
          key: "entries",
          value: function() {
            return this._entries
          }
        }, {
          key: "get",
          value: function(e) {
            return this._entries.find(function(t) {
              return t[0] === e
            })
          }
        }, {
          key: "getAll",
          value: function(e) {
            return this._entries.filter(function(t) {
              return t[0] === e
            })
          }
        }, {
          key: "has",
          value: function(e) {
            return this._entries.some(function(t) {
              return t[0] === e
            })
          }
        }, {
          key: "keys",
          value: function() {
            return this._entries.map(function(e) {
              return e[0]
            })
          }
        }, {
          key: "values",
          value: function() {
            return this._entries.map(function(e) {
              return e[1]
            })
          }
        }]), e
      }();
    e.exports = s
  }, function(e, t, n) {
    "use strict";
    var r = t.createUniqueKey = "undefined" != typeof Symbol ? Symbol : function(e) {
      return "[[" + e + "_" + Math.random().toFixed(8).slice(2) + "]]"
    };
    t.LISTENERS = r("listeners"), t.CAPTURE = 1, t.BUBBLE = 2, t.ATTRIBUTE = 3, t.newNode = function(e, t) {
      return {
        listener: e,
        kind: t,
        next: null
      }
    }
  }, function(e, t) {
    function n(e) {
      return null !== e && "object" == typeof e
    }
    e.exports = n
  }, function(e, t, n) {
    e.exports = n(64)
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      o = function() {
        function e() {
          r(this, e)
        }
        return i(e, [{
          key: "getItem",
          value: function(e) {
            return wx.getStorageSync(e)
          }
        }, {
          key: "setItem",
          value: function(e, t) {
            return wx.setStorageSync(e, t)
          }
        }, {
          key: "removeItem",
          value: function(e) {
            return this.setItem(e, "")
          }
        }, {
          key: "clear",
          value: function() {
            return wx.clearStorageSync()
          }
        }]), e
      }();
    e.exports = new o
  }, function(e, t, n) {
    "use strict";
    e.exports = {}
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e) {
      "" !== e.message && p && (p._readyState = h, p.dispatchEvent({
        type: "error",
        message: e.errMsg
      }))
    }
    var a = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = n(22),
      c = n(21),
      f = 0,
      l = 1,
      h = 3,
      d = ["open", "error", "message", "close"],
      p = void 0,
      y = function(e) {
        function t(e, n) {
          if (r(this, t), !e) throw new TypeError("Failed to construct 'WebSocket': url required");
          if (n) throw new Error("subprotocal not supported in weapp");
          var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return o._url = e, o._protocal = "", o._readyState = f, p && p.dispatchEvent({
            type: "close"
          }), p = o, wx.onSocketOpen(function(e) {
            p && (p._readyState = l, p.dispatchEvent({
              type: "open"
            }))
          }), wx.onSocketError(s), wx.onSocketMessage(function(e) {
            if (p) {
              var t = e.data,
                n = e.origin,
                r = e.ports,
                i = e.source;
              p.dispatchEvent({
                data: t,
                origin: n,
                ports: r,
                source: i,
                type: "message"
              })
            }
          }), wx.onSocketClose(function(e) {
            if (p) {
              p._readyState = h;
              var t = e.code,
                n = e.reason,
                r = e.wasClean;
              p.dispatchEvent({
                code: t,
                reason: n,
                wasClean: r,
                type: "close"
              }), p = null
            }
          }), wx.connectSocket({
            url: e,
            fail: function(e) {
              return setTimeout(function() {
                return s(e)
              }, 0)
            }
          }), o
        }
        return o(t, e), a(t, [{
          key: "close",
          value: function() {
            this.readyState === f && console.warn("close WebSocket which is connecting might not work"), wx.closeSocket()
          }
        }, {
          key: "send",
          value: function(e) {
            if (this.readyState !== l) throw new Error("INVALID_STATE_ERR");
            if ("string" != typeof e) throw new TypeError("only string typed data are supported");
            wx.sendSocketMessage({
              data: e
            })
          }
        }, {
          key: "url",
          get: function() {
            return this._url
          }
        }, {
          key: "protocal",
          get: function() {
            return this._protocal
          }
        }, {
          key: "readyState",
          get: function() {
            return this._readyState
          }
        }]), t
      }(c(d));
    u(y, {
      CONNECTING: f,
      OPEN: l,
      CLOSING: 2,
      CLOSED: h
    }), e.exports = y
  }, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function a(e) {
      this.status = e.statusCode, this.statusText = e.statusCode;
      var t = e.data;
      "string" != typeof t && (t = JSON.stringify(t)), this.responseText = this.response = t, this.readyState = d, this.dispatchEvent({
        type: "readystatechange"
      })
    }
    var u = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      c = n(22),
      f = n(21),
      l = n(9),
      h = 0,
      d = 4,
      p = ["abort", "error", "load", "loadstart", "progress", "timeout", "loadend", "readystatechange"],
      y = function(e) {
        function t() {
          i(this, t);
          var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return e.readyState = h, e._headers = {}, e
        }
        return s(t, e), u(t, [{
          key: "abort",
          value: function() {
            throw new Error("not supported in weapp")
          }
        }, {
          key: "getAllResponseHeaders",
          value: function() {
            return console.warn("getAllResponseHeaders always returns ''"), ""
          }
        }, {
          key: "getResponseHeader",
          value: function(e) {
            return "content-type" === e ? (console.warn("get content-type always returns 'application/json'"), "application/json") : (console.warn("getResponseHeader always returns ''"), "")
          }
        }, {
          key: "overrideMimeType",
          value: function() {
            throw new Error("not supported in weapp")
          }
        }, {
          key: "open",
          value: function(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.readyState !== h) throw new Error("request is already opened");
            if (!n) throw new Error("sync request is not supported");
            this._method = e, this._url = t, this.readyState = 1, this.dispatchEvent({
              type: "readystatechange"
            })
          }
        }, {
          key: "setRequestHeader",
          value: function(e, t) {
            if (1 !== this.readyState) throw new Error("request is not opened");
            this._headers[e.toLowerCase()] = t
          }
        }, {
          key: "send",
          value: function(e) {
            var t = this;
            if (1 !== this.readyState) throw new Error("request is not opened");
            if (e instanceof l) {
              var n = e.entries(),
                i = n.filter(function(e) {
                  return "string" != typeof e[1]
                });
              if (0 === i.length) throw new Error("Must specify a Blob field in FormData");
              i.length > 1 && console.warn("Only the first Blob will be send in Weapp");
              var o = n.filter(function(e) {
                return "string" == typeof e[1]
              }).reduce(function(e, t) {
                return c(e, r({}, t[0], t[1]))
              }, {});
              wx.uploadFile({
                url: this._url,
                name: i[0][0],
                filePath: i[0][1].uri,
                formData: o,
                header: this._headers,
                success: a.bind(this),
                fail: function(e) {
                  t.status = 0, t.readyState = d, t.dispatchEvent({
                    type: "readystatechange"
                  }), t.dispatchEvent({
                    type: "error"
                  })
                }
              })
            } else wx.request({
              url: this._url,
              data: e || "",
              method: this._method.toUpperCase(),
              header: this._headers,
              success: a.bind(this),
              fail: function(e) {
                t.status = 0, t.readyState = d, t.dispatchEvent({
                  type: "readystatechange"
                }), t.dispatchEvent({
                  type: "error"
                })
              }
            })
          }
        }]), t
      }(f(p));
    c(y, {
      UNSENT: h,
      OPENED: 1,
      HEADERS_RECEIVED: 2,
      LOADING: 3,
      DONE: d
    }), e.exports = y
  }, function(e, t, n) {
    "use strict";
    var r = n(18),
      i = n(5),
      o = t.removeAsync = r.removeItemAsync.bind(r),
      s = function(e, t) {
        try {
          e = JSON.parse(e)
        } catch (e) {
          return null
        }
        if (e) {
          return e.expiredAt && e.expiredAt < Date.now() ? o(t).then(function() {
            return null
          }) : e.value
        }
        return null
      };
    t.getAsync = function(e) {
      return e = "AV/" + i.applicationId + "/" + e, r.getItemAsync(e).then(function(t) {
        return s(t, e)
      })
    }, t.setAsync = function(e, t, n) {
      var o = {
        value: t
      };
      return "number" == typeof n && (o.expiredAt = Date.now() + n), r.setItemAsync("AV/" + i.applicationId + "/" + e, JSON.stringify(o))
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(1),
      o = n(54),
      s = ["getItem", "setItem", "removeItem", "clear"];
    o.async ? r(s).each(function(e) {
      "function" != typeof o[e] && (o[e] = function() {
        var t = new Error("Synchronous API [" + e + "] is not available in this runtime.");
        throw t.code = "SYNC_API_NOT_AVAILABLE", t
      })
    }) : r(s).each(function(e) {
      "function" == typeof o[e] && (o[e + "Async"] = function() {
        return i.resolve(o[e].apply(o, arguments))
      })
    }), e.exports = o
  }, function(e, t, n) {
    "use strict";
    e.exports = "3.0.0-beta.3"
  }, function(e, t) {
    var n = {
      utf8: {
        stringToBytes: function(e) {
          return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
        },
        bytesToString: function(e) {
          return decodeURIComponent(escape(n.bin.bytesToString(e)))
        }
      },
      bin: {
        stringToBytes: function(e) {
          for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
          return t
        },
        bytesToString: function(e) {
          for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
          return t.join("")
        }
      }
    };
    e.exports = n
  }, function(e, t, n) {
    "use strict";
    var r = n(10),
      i = n(60),
      o = n(61),
      s = r.LISTENERS,
      a = r.CAPTURE,
      u = r.BUBBLE,
      c = r.ATTRIBUTE,
      f = r.newNode,
      l = i.defineCustomEventTarget,
      h = o.createEventWrapper,
      d = o.STOP_IMMEDIATE_PROPAGATION_FLAG,
      p = "undefined" != typeof window && void 0 !== window.EventTarget,
      y = e.exports = function e() {
        if (!(this instanceof e)) {
          if (1 === arguments.length && Array.isArray(arguments[0])) return l(e, arguments[0]);
          if (arguments.length > 0) {
            for (var t = Array(arguments.length), n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            return l(e, t)
          }
          throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(this, s, {
          value: Object.create(null)
        })
      };
    y.prototype = Object.create((p ? window.EventTarget : Object).prototype, {
      constructor: {
        value: y,
        writable: !0,
        configurable: !0
      },
      addEventListener: {
        value: function(e, t, n) {
          if (null == t) return !1;
          if ("function" != typeof t && "object" != typeof t) throw new TypeError('"listener" is not an object.');
          var r = n ? a : u,
            i = this[s][e];
          if (null == i) return this[s][e] = f(t, r), !0;
          for (var o = null; null != i;) {
            if (i.listener === t && i.kind === r) return !1;
            o = i, i = i.next
          }
          return o.next = f(t, r), !0
        },
        configurable: !0,
        writable: !0
      },
      removeEventListener: {
        value: function(e, t, n) {
          if (null == t) return !1;
          for (var r = n ? a : u, i = null, o = this[s][e]; null != o;) {
            if (o.listener === t && o.kind === r) return null == i ? this[s][e] = o.next : i.next = o.next, !0;
            i = o, o = o.next
          }
          return !1
        },
        configurable: !0,
        writable: !0
      },
      dispatchEvent: {
        value: function(e) {
          var t = this[s][e.type];
          if (null == t) return !0;
          for (var n = h(e, this); null != t && ("function" == typeof t.listener ? t.listener.call(this, n) : t.kind !== c && "function" == typeof t.listener.handleEvent && t.listener.handleEvent(n), !n[d]);) t = t.next;
          return !n.defaultPrevented
        },
        configurable: !0,
        writable: !0
      }
    })
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e)
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var i = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      s = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
            return t[e]
          }).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
          r[e] = e
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
      } catch (e) {
        return !1
      }
    }() ? Object.assign : function(e, t) {
      for (var n, a, u = r(e), c = 1; c < arguments.length; c++) {
        n = Object(arguments[c]);
        for (var f in n) o.call(n, f) && (u[f] = n[f]);
        if (i) {
          a = i(n);
          for (var l = 0; l < a.length; l++) s.call(n, a[l]) && (u[a[l]] = n[a[l]])
        }
      }
      return u
    }
  }, function(e, t, n) {
    "use strict";
    /*!
     * LeanCloud JavaScript SDK
     * https://leancloud.cn
     *
     * Copyright 2016 LeanCloud.cn, Inc.
     * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
     */
    n(41);
    var r = n(5);
    r._ = n(0), r.version = n(19), r.Promise = n(1), r.localStorage = n(18), r.Cache = n(17), r.Error = n(4), n(36), n(32)(r), n(34)(r), n(27)(r), n(40)(r), n(44)(r), n(33)(r), n(39)(r), n(45)(r), n(53)(r), n(43)(r), n(38)(r), n(29)(r), n(30)(r), n(42)(r), n(47)(r), n(46)(r), n(37)(r), r.Conversation = n(31), e.exports = r
  }, function(e, t, n) {
    ! function(e, r) {
      r(t, n(12))
    }(0, function(e, t) {
      "use strict";

      function n(e) {
        return e && e.__esModule ? e.default : e
      }

      function r(e, t) {
        return t = {
          exports: {}
        }, e(t, t.exports), t.exports
      }
      if (!t.Protocals) throw new Error("LeanCloud Realtime SDK not installed");
      var i = r(function(e) {
          var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
          "number" == typeof __g && (__g = t)
        }),
        o = r(function(e) {
          var t = e.exports = {
            version: "2.4.0"
          };
          "number" == typeof __e && (__e = t)
        }),
        s = function(e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e
        },
        a = function(e, t, n) {
          if (s(e), void 0 === t) return e;
          switch (n) {
            case 1:
              return function(n) {
                return e.call(t, n)
              };
            case 2:
              return function(n, r) {
                return e.call(t, n, r)
              };
            case 3:
              return function(n, r, i) {
                return e.call(t, n, r, i)
              }
          }
          return function() {
            return e.apply(t, arguments)
          }
        },
        u = function(e) {
          return "object" == typeof e ? null !== e : "function" == typeof e
        },
        c = function(e) {
          if (!u(e)) throw TypeError(e + " is not an object!");
          return e
        },
        f = function(e) {
          try {
            return !!e()
          } catch (e) {
            return !0
          }
        },
        l = !f(function() {
          return 7 != Object.defineProperty({}, "a", {
            get: function() {
              return 7
            }
          }).a
        }),
        h = i.document,
        d = u(h) && u(h.createElement),
        p = function(e) {
          return d ? h.createElement(e) : {}
        },
        y = !l && !f(function() {
          return 7 != Object.defineProperty(p("div"), "a", {
            get: function() {
              return 7
            }
          }).a
        }),
        v = function(e, t) {
          if (!u(e)) return e;
          var n, r;
          if (t && "function" == typeof(n = e.toString) && !u(r = n.call(e))) return r;
          if ("function" == typeof(n = e.valueOf) && !u(r = n.call(e))) return r;
          if (!t && "function" == typeof(n = e.toString) && !u(r = n.call(e))) return r;
          throw TypeError("Can't convert object to primitive value")
        },
        g = Object.defineProperty,
        m = l ? Object.defineProperty : function(e, t, n) {
          if (c(e), t = v(t, !0), c(n), y) try {
            return g(e, t, n)
          } catch (e) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e
        },
        _ = {
          f: m
        },
        b = function(e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
          }
        },
        w = l ? function(e, t, n) {
          return _.f(e, t, b(1, n))
        } : function(e, t, n) {
          return e[t] = n, e
        },
        E = function(e, t, n) {
          var r, s, u, c = e & E.F,
            f = e & E.G,
            l = e & E.S,
            h = e & E.P,
            d = e & E.B,
            p = e & E.W,
            y = f ? o : o[t] || (o[t] = {}),
            v = y.prototype,
            g = f ? i : l ? i[t] : (i[t] || {}).prototype;
          f && (n = t);
          for (r in n)(s = !c && g && void 0 !== g[r]) && r in y || (u = s ? g[r] : n[r], y[r] = f && "function" != typeof g[r] ? n[r] : d && s ? a(u, i) : p && g[r] == u ? function(e) {
            var t = function(t, n, r) {
              if (this instanceof e) {
                switch (arguments.length) {
                  case 0:
                    return new e;
                  case 1:
                    return new e(t);
                  case 2:
                    return new e(t, n)
                }
                return new e(t, n, r)
              }
              return e.apply(this, arguments)
            };
            return t.prototype = e.prototype, t
          }(u) : h && "function" == typeof u ? a(Function.call, u) : u, h && ((y.virtual || (y.virtual = {}))[r] = u, e & E.R && v && !v[r] && w(v, r, u)))
        };
      E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128;
      var S = E,
        T = {}.hasOwnProperty,
        O = function(e, t) {
          return T.call(e, t)
        },
        A = {}.toString,
        I = function(e) {
          return A.call(e).slice(8, -1)
        },
        N = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
          return "String" == I(e) ? e.split("") : Object(e)
        },
        C = function(e) {
          if (void 0 == e) throw TypeError("Can't call method on  " + e);
          return e
        },
        x = function(e) {
          return N(C(e))
        },
        j = Math.ceil,
        P = Math.floor,
        R = function(e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? P : j)(e)
        },
        k = Math.min,
        L = function(e) {
          return e > 0 ? k(R(e), 9007199254740991) : 0
        },
        U = Math.max,
        M = Math.min,
        D = function(e, t) {
          return e = R(e), e < 0 ? U(e + t, 0) : M(e, t)
        },
        F = i["__core-js_shared__"] || (i["__core-js_shared__"] = {}),
        B = function(e) {
          return F[e] || (F[e] = {})
        },
        q = 0,
        V = Math.random(),
        Y = function(e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++q + V).toString(36))
        },
        W = B("keys"),
        z = function(e) {
          return W[e] || (W[e] = Y(e))
        },
        J = function(e) {
          return function(t, n, r) {
            var i, o = x(t),
              s = L(o.length),
              a = D(r, s);
            if (e && n != n) {
              for (; s > a;)
                if ((i = o[a++]) != i) return !0
            } else
              for (; s > a; a++)
                if ((e || a in o) && o[a] === n) return e || a || 0;
            return !e && -1
          }
        }(!1),
        G = z("IE_PROTO"),
        H = function(e, t) {
          var n, r = x(e),
            i = 0,
            o = [];
          for (n in r) n != G && O(r, n) && o.push(n);
          for (; t.length > i;) O(r, n = t[i++]) && (~J(o, n) || o.push(n));
          return o
        },
        Q = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        K = Object.keys || function(e) {
          return H(e, Q)
        },
        $ = Object.getOwnPropertySymbols,
        X = {
          f: $
        },
        Z = {}.propertyIsEnumerable,
        ee = {
          f: Z
        },
        te = function(e) {
          return Object(C(e))
        },
        ne = Object.assign,
        re = !ne || f(function() {
          var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
          return e[n] = 7, r.split("").forEach(function(e) {
            t[e] = e
          }), 7 != ne({}, e)[n] || Object.keys(ne({}, t)).join("") != r
        }) ? function(e, t) {
          for (var n = te(e), r = arguments.length, i = 1, o = X.f, s = ee.f; r > i;)
            for (var a, u = N(arguments[i++]), c = o ? K(u).concat(o(u)) : K(u), f = c.length, l = 0; f > l;) s.call(u, a = c[l++]) && (n[a] = u[a]);
          return n
        } : ne;
      S(S.S + S.F, "Object", {
        assign: re
      });
      var ie = o.Object.assign,
        oe = r(function(e) {
          e.exports = {
            default: ie,
            __esModule: !0
          }
        }),
        se = n(oe),
        ae = w,
        ue = {},
        ce = l ? Object.defineProperties : function(e, t) {
          c(e);
          for (var n, r = K(t), i = r.length, o = 0; i > o;) _.f(e, n = r[o++], t[n]);
          return e
        },
        fe = i.document && document.documentElement,
        le = z("IE_PROTO"),
        he = function() {},
        de = function() {
          var e, t = p("iframe"),
            n = Q.length;
          for (t.style.display = "none", fe.appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), de = e.F; n--;) delete de.prototype[Q[n]];
          return de()
        },
        pe = Object.create || function(e, t) {
          var n;
          return null !== e ? (he.prototype = c(e), n = new he, he.prototype = null, n[le] = e) : n = de(), void 0 === t ? n : ce(n, t)
        },
        ye = r(function(e) {
          var t = B("wks"),
            n = i.Symbol,
            r = "function" == typeof n;
          (e.exports = function(e) {
            return t[e] || (t[e] = r && n[e] || (r ? n : Y)("Symbol." + e))
          }).store = t
        }),
        ve = _.f,
        ge = ye("toStringTag"),
        me = function(e, t, n) {
          e && !O(e = n ? e : e.prototype, ge) && ve(e, ge, {
            configurable: !0,
            value: t
          })
        },
        _e = {};
      w(_e, ye("iterator"), function() {
        return this
      });
      var be = function(e, t, n) {
          e.prototype = pe(_e, {
            next: b(1, n)
          }), me(e, t + " Iterator")
        },
        we = z("IE_PROTO"),
        Ee = Object.prototype,
        Se = Object.getPrototypeOf || function(e) {
          return e = te(e), O(e, we) ? e[we] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Ee : null
        },
        Te = ye("iterator"),
        Oe = !([].keys && "next" in [].keys()),
        Ae = function() {
          return this
        },
        Ie = function(e, t, n, r, i, o, s) {
          be(n, t, r);
          var a, u, c, f = function(e) {
              if (!Oe && e in p) return p[e];
              switch (e) {
                case "keys":
                case "values":
                  return function() {
                    return new n(this, e)
                  }
              }
              return function() {
                return new n(this, e)
              }
            },
            l = t + " Iterator",
            h = "values" == i,
            d = !1,
            p = e.prototype,
            y = p[Te] || p["@@iterator"] || i && p[i],
            v = y || f(i),
            g = i ? h ? f("entries") : v : void 0,
            m = "Array" == t ? p.entries || y : y;
          if (m && (c = Se(m.call(new e))) !== Object.prototype && me(c, l, !0), h && y && "values" !== y.name && (d = !0, v = function() {
              return y.call(this)
            }), s && (Oe || d || !p[Te]) && w(p, Te, v), ue[t] = v, ue[l] = Ae, i)
            if (a = {
                values: h ? v : f("values"),
                keys: o ? v : f("keys"),
                entries: g
              }, s)
              for (u in a) u in p || ae(p, u, a[u]);
            else S(S.P + S.F * (Oe || d), t, a);
          return a
        },
        Ne = function(e) {
          return function(t, n) {
            var r, i, o = String(C(t)),
              s = R(n),
              a = o.length;
            return s < 0 || s >= a ? e ? "" : void 0 : (r = o.charCodeAt(s), r < 55296 || r > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? e ? o.charAt(s) : r : e ? o.slice(s, s + 2) : i - 56320 + (r - 55296 << 10) + 65536)
          }
        }(!0);
      Ie(String, "String", function(e) {
        this._t = String(e), this._i = 0
      }, function() {
        var e, t = this._t,
          n = this._i;
        return n >= t.length ? {
          value: void 0,
          done: !0
        } : (e = Ne(t, n), this._i += e.length, {
          value: e,
          done: !1
        })
      });
      var Ce = function(e, t) {
        return {
          value: t,
          done: !!e
        }
      };
      Ie(Array, "Array", function(e, t) {
        this._t = x(e), this._i = 0, this._k = t
      }, function() {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, Ce(1)) : "keys" == t ? Ce(0, n) : "values" == t ? Ce(0, e[n]) : Ce(0, [n, e[n]])
      }, "values");
      ue.Arguments = ue.Array;
      for (var xe = ye("toStringTag"), je = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], Pe = 0; Pe < 5; Pe++) {
        var Re = je[Pe],
          ke = i[Re],
          Le = ke && ke.prototype;
        Le && !Le[xe] && w(Le, xe, Re), ue[Re] = ue.Array
      }
      var Ue = function(e, t, n) {
          for (var r in t) n && e[r] ? e[r] = t[r] : w(e, r, t[r]);
          return e
        },
        Me = function(e, t, n, r) {
          if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
          return e
        },
        De = function(e, t, n, r) {
          try {
            return r ? t(c(n)[0], n[1]) : t(n)
          } catch (t) {
            var i = e.return;
            throw void 0 !== i && c(i.call(e)), t
          }
        },
        Fe = ye("iterator"),
        Be = Array.prototype,
        qe = function(e) {
          return void 0 !== e && (ue.Array === e || Be[Fe] === e)
        },
        Ve = ye("toStringTag"),
        Ye = "Arguments" == I(function() {
          return arguments
        }()),
        We = function(e, t) {
          try {
            return e[t]
          } catch (e) {}
        },
        ze = function(e) {
          var t, n, r;
          return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = We(t = Object(e), Ve)) ? n : Ye ? I(t) : "Object" == (r = I(t)) && "function" == typeof t.callee ? "Arguments" : r
        },
        Je = ye("iterator"),
        Ge = o.getIteratorMethod = function(e) {
          if (void 0 != e) return e[Je] || e["@@iterator"] || ue[ze(e)]
        },
        He = r(function(e) {
          var t = {},
            n = {},
            r = e.exports = function(e, r, i, o, s) {
              var u, f, l, h, d = s ? function() {
                  return e
                } : Ge(e),
                p = a(i, o, r ? 2 : 1),
                y = 0;
              if ("function" != typeof d) throw TypeError(e + " is not iterable!");
              if (qe(d)) {
                for (u = L(e.length); u > y; y++)
                  if ((h = r ? p(c(f = e[y])[0], f[1]) : p(e[y])) === t || h === n) return h
              } else
                for (l = d.call(e); !(f = l.next()).done;)
                  if ((h = De(l, p, f.value, r)) === t || h === n) return h
            };
          r.BREAK = t, r.RETURN = n
        }),
        Qe = ye("species"),
        Ke = function(e) {
          var t = "function" == typeof o[e] ? o[e] : i[e];
          l && t && !t[Qe] && _.f(t, Qe, {
            configurable: !0,
            get: function() {
              return this
            }
          })
        },
        $e = r(function(e) {
          var t = Y("meta"),
            n = _.f,
            r = 0,
            i = Object.isExtensible || function() {
              return !0
            },
            o = !f(function() {
              return i(Object.preventExtensions({}))
            }),
            s = function(e) {
              n(e, t, {
                value: {
                  i: "O" + ++r,
                  w: {}
                }
              })
            },
            a = function(e, n) {
              if (!u(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
              if (!O(e, t)) {
                if (!i(e)) return "F";
                if (!n) return "E";
                s(e)
              }
              return e[t].i
            },
            c = function(e, n) {
              if (!O(e, t)) {
                if (!i(e)) return !0;
                if (!n) return !1;
                s(e)
              }
              return e[t].w
            },
            l = function(e) {
              return o && h.NEED && i(e) && !O(e, t) && s(e), e
            },
            h = e.exports = {
              KEY: t,
              NEED: !1,
              fastKey: a,
              getWeak: c,
              onFreeze: l
            }
        }),
        Xe = _.f,
        Ze = $e.fastKey,
        et = l ? "_s" : "size",
        tt = function(e, t) {
          var n, r = Ze(t);
          if ("F" !== r) return e._i[r];
          for (n = e._f; n; n = n.n)
            if (n.k == t) return n
        },
        nt = {
          getConstructor: function(e, t, n, r) {
            var i = e(function(e, o) {
              Me(e, i, t, "_i"), e._i = pe(null), e._f = void 0, e._l = void 0, e[et] = 0, void 0 != o && He(o, n, e[r], e)
            });
            return Ue(i.prototype, {
              clear: function() {
                for (var e = this, t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                e._f = e._l = void 0, e[et] = 0
              },
              delete: function(e) {
                var t = this,
                  n = tt(t, e);
                if (n) {
                  var r = n.n,
                    i = n.p;
                  delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[et]--
                }
                return !!n
              },
              forEach: function(e) {
                Me(this, i, "forEach");
                for (var t, n = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
                  for (n(t.v, t.k, this); t && t.r;) t = t.p
              },
              has: function(e) {
                return !!tt(this, e)
              }
            }), l && Xe(i.prototype, "size", {
              get: function() {
                return C(this[et])
              }
            }), i
          },
          def: function(e, t, n) {
            var r, i, o = tt(e, t);
            return o ? o.v = n : (e._l = o = {
              i: i = Ze(t, !0),
              k: t,
              v: n,
              p: r = e._l,
              n: void 0,
              r: !1
            }, e._f || (e._f = o), r && (r.n = o), e[et]++, "F" !== i && (e._i[i] = o)), e
          },
          getEntry: tt,
          setStrong: function(e, t, n) {
            Ie(e, t, function(e, t) {
              this._t = e, this._k = t, this._l = void 0
            }, function() {
              for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
              return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? Ce(0, n.k) : "values" == t ? Ce(0, n.v) : Ce(0, [n.k, n.v]) : (e._t = void 0, Ce(1))
            }, n ? "entries" : "values", !n, !0), Ke(t)
          }
        },
        rt = Array.isArray || function(e) {
          return "Array" == I(e)
        },
        it = ye("species"),
        ot = function(e) {
          var t;
          return rt(e) && (t = e.constructor, "function" != typeof t || t !== Array && !rt(t.prototype) || (t = void 0), u(t) && null === (t = t[it]) && (t = void 0)), void 0 === t ? Array : t
        },
        st = function(e, t) {
          return new(ot(e))(t)
        },
        at = _.f,
        ut = function(e, t) {
          var n = 1 == e,
            r = 2 == e,
            i = 3 == e,
            o = 4 == e,
            s = 6 == e,
            u = 5 == e || s,
            c = t || st;
          return function(t, f, l) {
            for (var h, d, p = te(t), y = N(p), v = a(f, l, 3), g = L(y.length), m = 0, _ = n ? c(t, g) : r ? c(t, 0) : void 0; g > m; m++)
              if ((u || m in y) && (h = y[m], d = v(h, m, p), e))
                if (n) _[m] = d;
                else if (d) switch (e) {
              case 3:
                return !0;
              case 5:
                return h;
              case 6:
                return m;
              case 2:
                _.push(h)
            } else if (o) return !1;
            return s ? -1 : i || o ? o : _
          }
        }(0),
        ct = (function(e, t, n, r, o, s) {
          var a = i[e],
            c = a,
            h = o ? "set" : "add",
            d = c && c.prototype,
            p = {};
          l && "function" == typeof c && (s || d.forEach && !f(function() {
            (new c).entries().next()
          })) ? (c = t(function(t, n) {
            Me(t, c, e, "_c"), t._c = new a, void 0 != n && He(n, o, t[h], t)
          }), ut("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
            var t = "add" == e || "set" == e;
            e in d && (!s || "clear" != e) && w(c.prototype, e, function(n, r) {
              if (Me(this, c, e), !t && s && !u(n)) return "get" == e && void 0;
              var i = this._c[e](0 === n ? 0 : n, r);
              return t ? this : i
            })
          }), "size" in d && at(c.prototype, "size", {
            get: function() {
              return this._c.size
            }
          })) : (c = r.getConstructor(t, e, o, h), Ue(c.prototype, n), $e.NEED = !0), me(c, e), p[e] = c, S(S.G + S.W + S.F, p), s || r.setStrong(c, e, o)
        }("Set", function(e) {
          return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
          }
        }, {
          add: function(e) {
            return nt.def(this, e = 0 === e ? 0 : e, e)
          }
        }, nt), function(e, t) {
          var n = [];
          return He(e, !1, n.push, n, t), n
        });
      S(S.P + S.R, "Set", {
        toJSON: function(e) {
          return function() {
            if (ze(this) != e) throw TypeError(e + "#toJSON isn't generic");
            return ct(this)
          }
        }("Set")
      });
      var ft = o.Set,
        lt = r(function(e) {
          e.exports = {
            default: ft,
            __esModule: !0
          }
        }),
        ht = n(lt),
        dt = r(function(e, t) {
          t.__esModule = !0, t.default = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }
        }),
        pt = n(dt),
        yt = ye,
        vt = {
          f: yt
        },
        gt = vt.f("iterator"),
        mt = r(function(e) {
          e.exports = {
            default: gt,
            __esModule: !0
          }
        }),
        _t = _.f,
        bt = function(e) {
          var t = o.Symbol || (o.Symbol = {});
          "_" == e.charAt(0) || e in t || _t(t, e, {
            value: vt.f(e)
          })
        },
        wt = function(e, t) {
          for (var n, r = x(e), i = K(r), o = i.length, s = 0; o > s;)
            if (r[n = i[s++]] === t) return n
        },
        Et = function(e) {
          var t = K(e),
            n = X.f;
          if (n)
            for (var r, i = n(e), o = ee.f, s = 0; i.length > s;) o.call(e, r = i[s++]) && t.push(r);
          return t
        },
        St = Q.concat("length", "prototype"),
        Tt = Object.getOwnPropertyNames || function(e) {
          return H(e, St)
        },
        Ot = {
          f: Tt
        },
        At = Ot.f,
        It = {}.toString,
        Nt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Ct = function(e) {
          try {
            return At(e)
          } catch (e) {
            return Nt.slice()
          }
        },
        xt = function(e) {
          return Nt && "[object Window]" == It.call(e) ? Ct(e) : At(x(e))
        },
        jt = {
          f: xt
        },
        Pt = Object.getOwnPropertyDescriptor,
        Rt = l ? Pt : function(e, t) {
          if (e = x(e), t = v(t, !0), y) try {
            return Pt(e, t)
          } catch (e) {}
          if (O(e, t)) return b(!ee.f.call(e, t), e[t])
        },
        kt = {
          f: Rt
        },
        Lt = $e.KEY,
        Ut = kt.f,
        Mt = _.f,
        Dt = jt.f,
        Ft = i.Symbol,
        Bt = i.JSON,
        qt = Bt && Bt.stringify,
        Vt = ye("_hidden"),
        Yt = ye("toPrimitive"),
        Wt = {}.propertyIsEnumerable,
        zt = B("symbol-registry"),
        Jt = B("symbols"),
        Gt = B("op-symbols"),
        Ht = Object.prototype,
        Qt = "function" == typeof Ft,
        Kt = i.QObject,
        $t = !Kt || !Kt.prototype || !Kt.prototype.findChild,
        Xt = l && f(function() {
          return 7 != pe(Mt({}, "a", {
            get: function() {
              return Mt(this, "a", {
                value: 7
              }).a
            }
          })).a
        }) ? function(e, t, n) {
          var r = Ut(Ht, t);
          r && delete Ht[t], Mt(e, t, n), r && e !== Ht && Mt(Ht, t, r)
        } : Mt,
        Zt = function(e) {
          var t = Jt[e] = pe(Ft.prototype);
          return t._k = e, t
        },
        en = Qt && "symbol" == typeof Ft.iterator ? function(e) {
          return "symbol" == typeof e
        } : function(e) {
          return e instanceof Ft
        },
        tn = function(e, t, n) {
          return e === Ht && tn(Gt, t, n), c(e), t = v(t, !0), c(n), O(Jt, t) ? (n.enumerable ? (O(e, Vt) && e[Vt][t] && (e[Vt][t] = !1), n = pe(n, {
            enumerable: b(0, !1)
          })) : (O(e, Vt) || Mt(e, Vt, b(1, {})), e[Vt][t] = !0), Xt(e, t, n)) : Mt(e, t, n)
        },
        nn = function(e, t) {
          c(e);
          for (var n, r = Et(t = x(t)), i = 0, o = r.length; o > i;) tn(e, n = r[i++], t[n]);
          return e
        },
        rn = function(e, t) {
          return void 0 === t ? pe(e) : nn(pe(e), t)
        },
        on = function(e) {
          var t = Wt.call(this, e = v(e, !0));
          return !(this === Ht && O(Jt, e) && !O(Gt, e)) && (!(t || !O(this, e) || !O(Jt, e) || O(this, Vt) && this[Vt][e]) || t)
        },
        sn = function(e, t) {
          if (e = x(e), t = v(t, !0), e !== Ht || !O(Jt, t) || O(Gt, t)) {
            var n = Ut(e, t);
            return !n || !O(Jt, t) || O(e, Vt) && e[Vt][t] || (n.enumerable = !0), n
          }
        },
        an = function(e) {
          for (var t, n = Dt(x(e)), r = [], i = 0; n.length > i;) O(Jt, t = n[i++]) || t == Vt || t == Lt || r.push(t);
          return r
        },
        un = function(e) {
          for (var t, n = e === Ht, r = Dt(n ? Gt : x(e)), i = [], o = 0; r.length > o;) !O(Jt, t = r[o++]) || n && !O(Ht, t) || i.push(Jt[t]);
          return i
        };
      Qt || (Ft = function() {
        if (this instanceof Ft) throw TypeError("Symbol is not a constructor!");
        var e = Y(arguments.length > 0 ? arguments[0] : void 0),
          t = function(n) {
            this === Ht && t.call(Gt, n), O(this, Vt) && O(this[Vt], e) && (this[Vt][e] = !1), Xt(this, e, b(1, n))
          };
        return l && $t && Xt(Ht, e, {
          configurable: !0,
          set: t
        }), Zt(e)
      }, ae(Ft.prototype, "toString", function() {
        return this._k
      }), kt.f = sn, _.f = tn, Ot.f = jt.f = an, ee.f = on, X.f = un, vt.f = function(e) {
        return Zt(ye(e))
      }), S(S.G + S.W + S.F * !Qt, {
        Symbol: Ft
      });
      for (var cn = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), fn = 0; cn.length > fn;) ye(cn[fn++]);
      for (var cn = K(ye.store), fn = 0; cn.length > fn;) bt(cn[fn++]);
      S(S.S + S.F * !Qt, "Symbol", {
        for: function(e) {
          return O(zt, e += "") ? zt[e] : zt[e] = Ft(e)
        },
        keyFor: function(e) {
          if (en(e)) return wt(zt, e);
          throw TypeError(e + " is not a symbol!")
        },
        useSetter: function() {
          $t = !0
        },
        useSimple: function() {
          $t = !1
        }
      }), S(S.S + S.F * !Qt, "Object", {
        create: rn,
        defineProperty: tn,
        defineProperties: nn,
        getOwnPropertyDescriptor: sn,
        getOwnPropertyNames: an,
        getOwnPropertySymbols: un
      }), Bt && S(S.S + S.F * (!Qt || f(function() {
        var e = Ft();
        return "[null]" != qt([e]) || "{}" != qt({
          a: e
        }) || "{}" != qt(Object(e))
      })), "JSON", {
        stringify: function(e) {
          if (void 0 !== e && !en(e)) {
            for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
            return t = r[1], "function" == typeof t && (n = t), !n && rt(t) || (t = function(e, t) {
              if (n && (t = n.call(this, e, t)), !en(t)) return t
            }), r[1] = t, qt.apply(Bt, r)
          }
        }
      }), Ft.prototype[Yt] || w(Ft.prototype, Yt, Ft.prototype.valueOf), me(Ft, "Symbol"), me(Math, "Math", !0), me(i.JSON, "JSON", !0), bt("asyncIterator"), bt("observable");
      var ln = o.Symbol,
        hn = r(function(e) {
          e.exports = {
            default: ln,
            __esModule: !0
          }
        }),
        dn = r(function(e, t) {
          function n(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }
          t.__esModule = !0;
          var r = n(mt),
            i = n(hn),
            o = "function" == typeof i.default && "symbol" == typeof r.default ? function(e) {
              return typeof e
            } : function(e) {
              return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
            };
          t.default = "function" == typeof i.default && "symbol" === o(r.default) ? function(e) {
            return void 0 === e ? "undefined" : o(e)
          } : function(e) {
            return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
          }
        }),
        pn = r(function(e, t) {
          t.__esModule = !0;
          var n = function(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }(dn);
          t.default = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : (0, n.default)(t)) && "function" != typeof t ? e : t
          }
        }),
        yn = n(pn),
        vn = function(e, t) {
          if (c(e), !u(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        },
        gn = {
          set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
            try {
              n = a(Function.call, kt.f(Object.prototype, "__proto__").set, 2), n(e, []), t = !(e instanceof Array)
            } catch (e) {
              t = !0
            }
            return function(e, r) {
              return vn(e, r), t ? e.__proto__ = r : n(e, r), e
            }
          }({}, !1) : void 0),
          check: vn
        };
      S(S.S, "Object", {
        setPrototypeOf: gn.set
      });
      var mn = o.Object.setPrototypeOf,
        _n = r(function(e) {
          e.exports = {
            default: mn,
            __esModule: !0
          }
        });
      S(S.S, "Object", {
        create: pe
      });
      var bn = o.Object,
        wn = function(e, t) {
          return bn.create(e, t)
        },
        En = r(function(e) {
          e.exports = {
            default: wn,
            __esModule: !0
          }
        }),
        Sn = r(function(e, t) {
          function n(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }
          t.__esModule = !0;
          var r = n(_n),
            i = n(En),
            o = n(dn);
          t.default = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, o.default)(t)));
            e.prototype = (0, i.default)(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t)
          }
        }),
        Tn = n(Sn),
        On = t.Protocals.CommandType,
        An = t.Protocals.GenericCommand,
        In = t.Protocals.AckCommand,
        Nn = function(e) {
          return console.warn(e.message)
        },
        Cn = function(e) {
          function n(r, i, o) {
            pt(this, n);
            var s = yn(this, e.call(this));
            return s._appId = r, s.id = i, s._connection = o, s._eventemitter = new t.EventEmitter, s._querys = new ht, s
          }
          return Tn(n, e), n.prototype._send = function(e) {
            for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            return (t = this._connection).send.apply(t, [se(e, {
              appId: this._appId,
              installationId: this.id,
              service: 1
            })].concat(r))
          }, n.prototype._open = function() {
            return this._send(new An({
              cmd: On.login
            }))
          }, n.prototype.close = function() {
            var e = this;
            return this._send(new An({
              cmd: On.logout
            })).then(function() {
              return e._eventemitter.emit("close")
            })
          }, n.prototype.register = function(e) {
            this._querys.add(e)
          }, n.prototype.deregister = function(e) {
            this._querys.delete(e), this._querys.size || this.close().catch(Nn)
          }, n.prototype._dispatchCommand = function(e) {
            return e.cmd !== On.data ? (this.emit("unhandledmessage", e), t.Promise.resolve()) : this._dispatchDataCommand(e)
          }, n.prototype._dispatchDataCommand = function(e) {
            var t = e.dataMessage,
              n = t.ids,
              r = t.msg;
            this.emit("message", r.map(function(e) {
              var t = e.data;
              return JSON.parse(t)
            }));
            var i = new An({
              cmd: On.ack,
              ackMessage: new In({
                ids: n
              })
            });
            return this._send(i, !1).catch(Nn)
          }, n
        }(t.EventEmitter),
        xn = function(e) {
          e._liveQueryClients = {}, e.createLiveQueryClient = function(n) {
            if (void 0 !== e._liveQueryClients[n]) return t.Promise.resolve(e._liveQueryClients[n]);
            var r = e._open().then(function(t) {
              var r = new Cn(e._options.appId, n, t);
              return t.on("reconnect", function() {
                return r._open().then(function() {
                  return r.emit("reconnect")
                }, function(e) {
                  return r.emit("reconnecterror", e)
                })
              }), r._eventemitter.on("close", function() {
                delete e._liveQueryClients[r.id], e._deregister(r)
              }, e), r._open().then(function() {
                return e._liveQueryClients[r.id] = r, e._register(r), r
              })
            });
            return e._liveQueryClients[n] = r, r
          }
        },
        jn = function(e, t) {
          if (!e.installationId || 1 !== e.service) return !0;
          var n = t._liveQueryClients[e.installationId];
          return n ? n._dispatchCommand(e).catch(function(e) {
            return console.warn(e)
          }) : console.warn("Unexpected message received without any live client match: %O", e), !1
        },
        Pn = {
          name: "leancloud-realtime-plugin-live-query",
          onRealtimeCreate: xn,
          beforeCommandDispatch: jn
        };
      e.LiveQueryPlugin = Pn, Object.defineProperty(e, "__esModule", {
        value: !0
      })
    })
  }, function(e, t, n) {
    "use strict";
    var r = n(26).polyfill;
    window = window || {}, r(), r(window);
    try {
      localStorage = localStorage || n(13)
    } catch (e) {}
    try {
      XMLHttpRequest = XMLHttpRequest || n(16)
    } catch (e) {}
    try {
      FormData = FormData || n(9)
    } catch (e) {}
    try {
      WebSocket = WebSocket || n(15)
    } catch (e) {}
    try {
      navigator = navigator || n(14)
    } catch (e) {}
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(13),
        o = n(16),
        s = n(9),
        a = n(15),
        u = n(14);
      e.exports = {
        polyfill: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t || window;
          if ("object" !== (void 0 === e ? "undefined" : r(e))) throw new Error("polyfill target is not an Object");
          var n = {
            localStorage: i,
            XMLHttpRequest: o,
            FormData: s,
            WebSocket: a,
            Object: Object,
            navigator: u
          };
          for (var c in n) e[c] || (e[c] = n[c])
        },
        localStorage: i,
        XMLHttpRequest: o,
        FormData: s,
        WebSocket: a
      }
    }).call(t, n(7))
  }, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e) {
      e.ACL = function(t) {
        var n = this;
        if (n.permissionsById = {}, r.isObject(t))
          if (t instanceof e.User) n.setReadAccess(t, !0), n.setWriteAccess(t, !0);
          else {
            if (r.isFunction(t)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
            e._objectEach(t, function(t, i) {
              if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
              n.permissionsById[i] = {}, e._objectEach(t, function(e, t) {
                if ("read" !== t && "write" !== t) throw new Error("Tried to create an ACL with an invalid permission type.");
                if (!r.isBoolean(e)) throw new Error("Tried to create an ACL with an invalid permission value.");
                n.permissionsById[i][t] = e
              })
            })
          }
      }, e.ACL.prototype.toJSON = function() {
        return r.clone(this.permissionsById)
      }, e.ACL.prototype._setAccess = function(t, n, i) {
        if (n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string.");
        if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
        var o = this.permissionsById[n];
        if (!o) {
          if (!i) return;
          o = {}, this.permissionsById[n] = o
        }
        i ? this.permissionsById[n][t] = !0 : (delete o[t], r.isEmpty(o) && delete this.permissionsById[n])
      }, e.ACL.prototype._getAccess = function(t, n) {
        n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName());
        var r = this.permissionsById[n];
        return !!r && !!r[t]
      }, e.ACL.prototype.setReadAccess = function(e, t) {
        this._setAccess("read", e, t)
      }, e.ACL.prototype.getReadAccess = function(e) {
        return this._getAccess("read", e)
      }, e.ACL.prototype.setWriteAccess = function(e, t) {
        this._setAccess("write", e, t)
      }, e.ACL.prototype.getWriteAccess = function(e) {
        return this._getAccess("write", e)
      }, e.ACL.prototype.setPublicReadAccess = function(e) {
        this.setReadAccess("*", e)
      }, e.ACL.prototype.getPublicReadAccess = function() {
        return this.getReadAccess("*")
      }, e.ACL.prototype.setPublicWriteAccess = function(e) {
        this.setWriteAccess("*", e)
      }, e.ACL.prototype.getPublicWriteAccess = function() {
        return this.getWriteAccess("*")
      }, e.ACL.prototype.getRoleReadAccess = function(t) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getReadAccess("role:" + t);
        throw new Error("role must be a AV.Role or a String")
      }, e.ACL.prototype.getRoleWriteAccess = function(t) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getWriteAccess("role:" + t);
        throw new Error("role must be a AV.Role or a String")
      }, e.ACL.prototype.setRoleReadAccess = function(t, n) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setReadAccess("role:" + t, n);
        throw new Error("role must be a AV.Role or a String")
      }, e.ACL.prototype.setRoleWriteAccess = function(t, n) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setWriteAccess("role:" + t, n);
        throw new Error("role must be a AV.Role or a String")
      }
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      var t = this;
      this.AV = e, this.lockedUntil = 0, s.getAsync("serverURLs").then(function(e) {
        if (!e) return t.lock(0);
        var n = e.serverURLs,
          r = e.lockedUntil;
        t.AV._setServerURLs(n, !1), t.lockedUntil = r
      }).catch(function() {
        return t.lock(0)
      })
    }
    var i = n(3),
      o = i.ajax,
      s = n(17);
    r.prototype.disable = function() {
      this.disabled = !0
    }, r.prototype.lock = function(e) {
      this.lockedUntil = Date.now() + e
    }, r.prototype.refresh = function() {
      var e = this;
      if (!(this.disabled || Date.now() < this.lockedUntil)) {
        this.lock(10);
        return o({
          method: "get",
          url: "https://app-router.leancloud.cn/2/route",
          query: {
            appId: this.AV.applicationId
          }
        }).then(function(t) {
          if (!e.disabled) {
            var n = t.ttl;
            if (!n) throw new Error("missing ttl");
            n *= 1e3;
            var r = {
              push: "https://" + t.push_server,
              stats: "https://" + t.stats_server,
              engine: "https://" + t.engine_server,
              api: "https://" + t.api_server
            };
            return e.AV._setServerURLs(r, !1), e.lock(n), s.setAsync("serverURLs", {
              serverURLs: r,
              lockedUntil: e.lockedUntil
            }, n)
          }
        }).catch(function(t) {
          console.warn("refresh server URLs failed: " + t.message), e.lock(600)
        })
      }
    }, e.exports = r
  }, function(e, t, n) {
    "use strict";
    var r = n(3),
      i = r.tap;
    e.exports = function(e) {
      e.Captcha = function(e, t) {
        this._options = e, this._authOptions = t, this.url = void 0, this.captchaToken = void 0, this.validateToken = void 0
      }, e.Captcha.prototype.refresh = function() {
        var t = this;
        return e.Cloud._requestCaptcha(this._options, this._authOptions).then(function(e) {
          var n = e.captchaToken,
            r = e.url;
          return Object.assign(t, {
            captchaToken: n,
            url: r
          }), r
        })
      }, e.Captcha.prototype.verify = function(t) {
        var n = this;
        return e.Cloud.verifyCaptcha(t, this.captchaToken).then(i(function(e) {
          return n.validateToken = e
        }))
      }, e.Captcha.request = function(t, n) {
        var r = new e.Captcha(t, n);
        return r.refresh().then(function() {
          return r
        })
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(2),
      o = i._request,
      s = i.request;
    e.exports = function(e) {
      e.Cloud = e.Cloud || {}, r.extend(e.Cloud, {
        run: function(t, n, r) {
          return s({
            service: "engine",
            method: "POST",
            path: "/functions/" + t,
            data: e._encode(n, null, !0),
            authOptions: r
          }).then(function(t) {
            return e._decode(t).result
          })
        },
        rpc: function(t, n, i) {
          return r.isArray(n) ? Promise.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : s({
            service: "engine",
            method: "POST",
            path: "/call/" + t,
            data: e._encodeObjectOrArray(n),
            authOptions: i
          }).then(function(t) {
            return e._decode(t).result
          })
        },
        getServerDate: function() {
          return o("date", null, null, "GET").then(function(t) {
            return e._decode(t)
          })
        },
        requestSmsCode: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (r.isString(e) && (e = {
              mobilePhoneNumber: e
            }), !e.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
          return t.validateToken && (e = r.extend({}, e, {
            validate_token: t.validateToken
          })), o("requestSmsCode", null, null, "POST", e, t)
        },
        verifySmsCode: function(e, t) {
          if (!e) throw new Error("Missing sms code.");
          var n = {};
          return r.isString(t) && (n.mobilePhoneNumber = t), o("verifySmsCode", e, null, "POST", n)
        },
        _requestCaptcha: function(e, t) {
          return o("requestCaptcha", null, null, "GET", e, t).then(function(e) {
            var t = e.captcha_url;
            return {
              captchaToken: e.captcha_token,
              url: t
            }
          })
        },
        requestCaptcha: e.Captcha.request,
        verifyCaptcha: function(e, t) {
          return o("verifyCaptcha", null, null, "POST", {
            captcha_code: e,
            captcha_token: t
          }).then(function(e) {
            return e.validate_token
          })
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(2),
      o = i._request,
      s = n(5);
    e.exports = s.Object.extend("_Conversation", {
      constructor: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        s.Object.prototype.constructor.call(this, null, null), this.set("name", e), void 0 !== t.isSystem && this.set("sys", !!t.isSystem), void 0 !== t.isTransient && this.set("tr", !!t.isTransient)
      },
      getCreator: function() {
        return this.get("c")
      },
      getLastMessageAt: function() {
        return this.get("lm")
      },
      getMembers: function() {
        return this.get("m")
      },
      addMember: function(e) {
        return this.add("m", e)
      },
      getMutedMembers: function() {
        return this.get("mu")
      },
      getName: function() {
        return this.get("name")
      },
      isTransient: function() {
        return this.get("tr")
      },
      isSystem: function() {
        return this.get("sys")
      },
      send: function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        "function" == typeof t.toJSON && (t = t.toJSON()), "string" != typeof t && (t = JSON.stringify(t));
        var i = {
          from_peer: e,
          conv_id: this.id,
          transient: !1,
          message: t
        };
        return void 0 !== n.toClients && (i.to_peers = n.toClients), void 0 !== n.transient && (i.transient = !!n.transient), void 0 !== n.pushData && (i.push_data = n.pushData), o("rtm", "messages", null, "POST", i, r)
      },
      broadcast: function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        "function" == typeof t.toJSON && (t = t.toJSON()), "string" != typeof t && (t = JSON.stringify(t));
        var s = {
          from_peer: e,
          conv_id: this.id,
          message: t
        };
        if (void 0 !== n.pushData && (s.push = n.pushData), void 0 !== n.validTill) {
          var a = n.validTill;
          r.isDate(a) && (a = a.getTime()), n.valid_till = a
        }
        return o("rtm", "broadcast", null, "POST", s, i)
      }
    })
  }, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e) {
      var t = /\s+/,
        n = Array.prototype.slice;
      e.Events = {
        on: function(e, n, r) {
          var i, o, s, a, u;
          if (!n) return this;
          for (e = e.split(t), i = this._callbacks || (this._callbacks = {}), o = e.shift(); o;) u = i[o], s = u ? u.tail : {}, s.next = a = {}, s.context = r, s.callback = n, i[o] = {
            tail: a,
            next: u ? u.next : s
          }, o = e.shift();
          return this
        },
        off: function(e, n, i) {
          var o, s, a, u, c, f;
          if (s = this._callbacks) {
            if (!(e || n || i)) return delete this._callbacks, this;
            for (e = e ? e.split(t) : r.keys(s), o = e.shift(); o;)
              if (a = s[o], delete s[o], a && (n || i)) {
                for (u = a.tail, a = a.next; a !== u;) c = a.callback, f = a.context, (n && c !== n || i && f !== i) && this.on(o, c, f), a = a.next;
                o = e.shift()
              }
            return this
          }
        },
        trigger: function(e) {
          var r, i, o, s, a, u, c;
          if (!(o = this._callbacks)) return this;
          for (u = o.all, e = e.split(t), c = n.call(arguments, 1), r = e.shift(); r;) {
            if (i = o[r])
              for (s = i.tail;
                (i = i.next) !== s;) i.callback.apply(i.context || this, c);
            if (i = u)
              for (s = i.tail, a = [r].concat(c);
                (i = i.next) !== s;) i.callback.apply(i.context || this, a);
            r = e.shift()
          }
          return this
        }
      }, e.Events.bind = e.Events.on, e.Events.unbind = e.Events.off
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(50),
      o = n(51),
      s = n(52),
      a = n(4),
      u = n(2)._request,
      c = n(1),
      f = n(3),
      l = f.tap,
      h = f.transformFetchOptions,
      d = n(6)("leancloud:file"),
      p = n(55);
    e.exports = function(e) {
      var t = (e._config, function() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }),
        n = function(e) {
          return e.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4]
        },
        f = function(e) {
          if (e < 26) return String.fromCharCode(65 + e);
          if (e < 52) return String.fromCharCode(e - 26 + 97);
          if (e < 62) return String.fromCharCode(e - 52 + 48);
          if (62 === e) return "+";
          if (63 === e) return "/";
          throw new Error("Tried to encode large digit " + e + " in base64.")
        },
        y = function(e) {
          var t = [];
          return t.length = Math.ceil(e.length / 3), r.times(t.length, function(n) {
            var r = e[3 * n],
              i = e[3 * n + 1] || 0,
              o = e[3 * n + 2] || 0,
              s = 3 * n + 1 < e.length,
              a = 3 * n + 2 < e.length;
            t[n] = [f(r >> 2 & 63), f(r << 4 & 48 | i >> 4 & 15), s ? f(i << 2 & 60 | o >> 6 & 3) : "=", a ? f(63 & o) : "="].join("")
          }), t.join("")
        };
      e.File = function(t, n, i) {
        if (this.attributes = {
            name: t,
            url: "",
            metaData: {},
            base64: ""
          }, r.isString(n)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
        r.isArray(n) && (this.attributes.metaData.size = n.length, n = {
          base64: y(n)
        }), this._extName = "", this._data = n;
        var o = void 0;
        if (n && n.owner) o = n.owner;
        else if (!e._config.disableCurrentUser) try {
          o = e.User.current()
        } catch (e) {
          if ("SYNC_API_NOT_AVAILABLE" !== e.code) throw e;
          console.warn("Get current user failed. It seems this runtime use an async storage system, please create AV.File in the callback of AV.User.currentAsync().")
        }
        this.attributes.metaData.owner = o ? o.id : "unknown", this.set("mime_type", i)
      }, e.File.withURL = function(t, n, r, i) {
        if (!t || !n) throw new Error("Please provide file name and url");
        var o = new e.File(t, null, i);
        if (r)
          for (var s in r) o.attributes.metaData[s] || (o.attributes.metaData[s] = r[s]);
        return o.attributes.url = n, o.attributes.metaData.__source = "external", o
      }, e.File.createWithoutData = function(t) {
        var n = new e.File;
        return n.id = t, n
      }, r.extend(e.File.prototype, {
        className: "_File",
        _toFullJSON: function(t) {
          var n = this,
            i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            o = r.clone(this.attributes);
          return e._objectEach(o, function(n, r) {
            o[r] = e._encode(n, t, void 0, i)
          }), e._objectEach(this._operations, function(e, t) {
            o[t] = e
          }), r.has(this, "id") && (o.objectId = this.id), r(["createdAt", "updatedAt"]).each(function(e) {
            if (r.has(n, e)) {
              var t = n[e];
              o[e] = r.isDate(t) ? t.toJSON() : t
            }
          }), i && (o.__type = "File"), o
        },
        toFullJSON: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return this._toFullJSON(e)
        },
        toJSON: function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [this];
          return this._toFullJSON(n, !1)
        },
        getACL: function() {
          return this._acl
        },
        setACL: function(t) {
          if (!(t instanceof e.ACL)) return new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.");
          this._acl = t
        },
        name: function() {
          return this.get("name")
        },
        url: function() {
          return this.get("url")
        },
        get: function(e) {
          switch (e) {
            case "objectId":
              return this.id;
            case "url":
            case "name":
            case "mime_type":
            case "metaData":
            case "createdAt":
            case "updatedAt":
              return this.attributes[e];
            default:
              return this.attributes.metaData[e]
          }
        },
        set: function() {
          for (var e = this, t = function(t, n) {
              switch (t) {
                case "name":
                case "url":
                case "mime_type":
                case "base64":
                case "metaData":
                  e.attributes[t] = n;
                  break;
                default:
                  e.attributes.metaData[t] = n
              }
            }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
          switch (r.length) {
            case 1:
              for (var o in r[0]) t(o, r[0][o]);
              break;
            case 2:
              t(r[0], r[1])
          }
        },
        metaData: function(e, t) {
          return e && t ? (this.attributes.metaData[e] = t, this) : e && !t ? this.attributes.metaData[e] : this.attributes.metaData
        },
        thumbnailURL: function(e, t, n, r, i) {
          var o = this.attributes.url;
          if (!o) throw new Error("Invalid url.");
          if (!e || !t || e <= 0 || t <= 0) throw new Error("Invalid width or height value.");
          if (n = n || 100, r = r || !0, n <= 0 || n > 100) throw new Error("Invalid quality value.");
          return i = i || "png", o + "?imageView/" + (r ? 2 : 1) + "/w/" + e + "/h/" + t + "/q/" + n + "/format/" + i
        },
        size: function() {
          return this.metaData().size
        },
        ownerId: function() {
          return this.metaData().owner
        },
        destroy: function(e) {
          return this.id ? u("files", null, this.id, "DELETE", null, e) : c.reject(new Error("The file id is not eixsts."))
        },
        _fileToken: function(e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fileTokens",
            i = this.attributes.name,
            o = n(i);
          !o && this._extName && (i += this._extName, o = this._extName);
          var s = t() + t() + t() + t() + t() + o,
            a = {
              key: s,
              name: i,
              ACL: this._acl,
              mime_type: e,
              metaData: this.attributes.metaData
            };
          return this._qiniu_key = s, u(r, null, null, "POST", a)
        },
        save: function(e) {
          var t = this;
          if (this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");
          if (!this._previousSave)
            if (this._data) {
              var r = this.get("mime_type");
              this._previousSave = this._fileToken(r).then(function(a) {
                return a.mime_type && (r = a.mime_type, t.set("mime_type", r)), t._token = a.token, c.resolve().then(function() {
                  var e = t._data;
                  if (e && e.base64) return p(e.base64, r);
                  if (e && e.blob) return !e.blob.type && r && (e.blob.type = r), e.blob.name || (e.blob.name = t.get("name")), t._extName = n(e.blob.uri), e.blob;
                  if ("undefined" != typeof File && e instanceof File) return e.size && (t.attributes.metaData.size = e.size), e.name && (t._extName = n(e.name)), e;
                  if ("undefined" != typeof Buffer && Buffer.isBuffer(e)) return t.attributes.metaData.size = e.length, e;
                  throw new TypeError("malformed file data")
                }).then(function(n) {
                  var r = void 0;
                  switch (a.provider) {
                    case "s3":
                      r = s(a, n, t, e);
                      break;
                    case "qcloud":
                      r = i(a, n, t, e);
                      break;
                    case "qiniu":
                    default:
                      r = o(a, n, t, e)
                  }
                  return r.then(l(function() {
                    return t._callback(!0)
                  }), function(e) {
                    throw t._callback(!1), e
                  })
                })
              })
            } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
            var a = {
              name: this.attributes.name,
              ACL: this._acl,
              metaData: this.attributes.metaData,
              mime_type: this.mimeType,
              url: this.attributes.url
            };
            this._previousSave = u("files", this.attributes.name, null, "post", a).then(function(e) {
              return t.attributes.name = e.name, t.attributes.url = e.url, t.id = e.objectId, e.size && (t.attributes.metaData.size = e.size), t
            })
          }
          return this._previousSave
        },
        _callback: function(e) {
          u("fileCallback", null, null, "post", {
            token: this._token,
            result: e
          }).catch(d), delete this._token, delete this._data
        },
        fetch: function(e, t) {
          return u("files", null, this.id, "GET", h(e), t).then(this._finishFetch.bind(this))
        },
        _finishFetch: function(t) {
          var n = e.Object.prototype.parse(t);
          return n.attributes = {
            name: n.name,
            url: n.url,
            mime_type: n.mime_type,
            bucket: n.bucket
          }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, r.extend(this, n), this
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e) {
      e.GeoPoint = function(t, n) {
        r.isArray(t) ? (e.GeoPoint._validate(t[0], t[1]), this.latitude = t[0], this.longitude = t[1]) : r.isObject(t) ? (e.GeoPoint._validate(t.latitude, t.longitude), this.latitude = t.latitude, this.longitude = t.longitude) : r.isNumber(t) && r.isNumber(n) ? (e.GeoPoint._validate(t, n), this.latitude = t, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
        var i = this;
        this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function() {
          return i._latitude
        }), this.__defineGetter__("longitude", function() {
          return i._longitude
        }), this.__defineSetter__("latitude", function(t) {
          e.GeoPoint._validate(t, i.longitude), i._latitude = t
        }), this.__defineSetter__("longitude", function(t) {
          e.GeoPoint._validate(i.latitude, t), i._longitude = t
        }))
      }, e.GeoPoint._validate = function(e, t) {
        if (e < -90) throw new Error("AV.GeoPoint latitude " + e + " < -90.0.");
        if (e > 90) throw new Error("AV.GeoPoint latitude " + e + " > 90.0.");
        if (t < -180) throw new Error("AV.GeoPoint longitude " + t + " < -180.0.");
        if (t > 180) throw new Error("AV.GeoPoint longitude " + t + " > 180.0.")
      }, e.GeoPoint.current = function() {
        return new e.Promise(function(t, n) {
          navigator.geolocation.getCurrentPosition(function(n) {
            t(new e.GeoPoint({
              latitude: n.coords.latitude,
              longitude: n.coords.longitude
            }))
          }, n)
        })
      }, r.extend(e.GeoPoint.prototype, {
        toJSON: function() {
          return e.GeoPoint._validate(this.latitude, this.longitude), {
            __type: "GeoPoint",
            latitude: this.latitude,
            longitude: this.longitude
          }
        },
        radiansTo: function(e) {
          var t = Math.PI / 180,
            n = this.latitude * t,
            r = this.longitude * t,
            i = e.latitude * t,
            o = e.longitude * t,
            s = n - i,
            a = r - o,
            u = Math.sin(s / 2),
            c = Math.sin(a / 2),
            f = u * u + Math.cos(n) * Math.cos(i) * c * c;
          return f = Math.min(1, f), 2 * Math.asin(Math.sqrt(f))
        },
        kilometersTo: function(e) {
          return 6371 * this.radiansTo(e)
        },
        milesTo: function(e) {
          return 3958.8 * this.radiansTo(e)
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(23),
      i = n(12),
      o = i.Realtime,
      s = n(24),
      a = s.LiveQueryPlugin;
    o.__preRegisteredPlugins = [a], r._sharedConfig.liveQueryRealtime = o, e.exports = r
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      if ("us" === t) return l("https://us-api.leancloud.cn");
      var n = void 0;
      switch (e.slice(-9)) {
        case "-9Nh9j0Va":
          return l("https://e1-api.leancloud.cn");
        case "-MdYXbMMI":
          return l("https://us-api.leancloud.cn");
        default:
          return n = e.slice(0, 8).toLowerCase(), {
            push: "https://" + n + ".push.lncld.net",
            stats: "https://" + n + ".stats.lncld.net",
            engine: "https://" + n + ".engine.lncld.net",
            api: "https://" + n + ".api.lncld.net"
          }
      }
    }
    var i = n(5),
      o = n(28),
      s = n(3),
      a = s.isNullOrUndefined,
      u = n(0),
      c = u.extend,
      f = u.isObject,
      l = function(e) {
        return {
          push: e,
          stats: e,
          engine: e,
          api: e
        }
      },
      h = !1;
    i.init = function(e) {
      if (!f(e)) return i.init({
        appId: e,
        appKey: arguments.length <= 1 ? void 0 : arguments[1],
        masterKey: arguments.length <= 2 ? void 0 : arguments[2],
        region: arguments.length <= 3 ? void 0 : arguments[3]
      });
      var t = e.appId,
        n = e.appKey,
        s = e.masterKey,
        a = (e.hookKey, e.region),
        u = void 0 === a ? "cn" : a,
        l = e.serverURLs,
        d = e.disableCurrentUser,
        p = void 0 !== d && d,
        y = e.production,
        v = e.realtime;
      if (i.applicationId) throw new Error("SDK is already initialized.");
      s && console.warn("MasterKey is not supposed to be used in browser."), i._config.applicationId = t, i._config.applicationKey = n, i._config.masterKey = s, void 0 !== y && (i._config.production = y), void 0 !== p && (i._config.disableCurrentUser = p), i._appRouter = new o(i);
      var g = h || void 0 !== l || "cn" !== u;
      i._setServerURLs(c({}, r(t, u), i._config.serverURLs, l), g), v ? i._config.realtime = v : i._sharedConfig.liveQueryRealtime && (i._config.realtime = new i._sharedConfig.liveQueryRealtime({
        appId: t,
        region: u
      }))
    }, i.setProduction = function(e) {
      a(e) ? i._config.production = null : i._config.production = e ? 1 : 0
    }, i._setServerURLs = function(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "string" != typeof e ? c(i._config.serverURLs, e) : i._config.serverURLs = l(e), t && (i._appRouter ? i._appRouter.disable() : h = !0)
    }, i.setServerURLs = function(e) {
      return i._setServerURLs(e)
    }, i.initialize = i.init, ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(function(e) {
      return Object.defineProperty(i, e, {
        get: function() {
          return i._config[e]
        },
        set: function(t) {
          i._config[e] = t
        }
      })
    })
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(4),
      o = n(2),
      s = o.request;
    e.exports = function(e) {
      e.Insight = e.Insight || {}, r.extend(e.Insight, {
        startJob: function(t, n) {
          if (!t || !t.sql) throw new Error("Please provide the sql to run the job.");
          var r = {
            jobConfig: t,
            appId: e.applicationId
          };
          return s({
            path: "/bigquery/jobs",
            method: "POST",
            data: e._encode(r, null, !0),
            authOptions: n,
            signKey: !1
          }).then(function(t) {
            return e._decode(t).id
          })
        },
        on: function(e, t) {}
      }), e.Insight.JobQuery = function(e, t) {
        if (!e) throw new Error("Please provide the job id.");
        this.id = e, this.className = t, this._skip = 0, this._limit = 100
      }, r.extend(e.Insight.JobQuery.prototype, {
        skip: function(e) {
          return this._skip = e, this
        },
        limit: function(e) {
          return this._limit = e, this
        },
        find: function(t) {
          var n = {
            skip: this._skip,
            limit: this._limit
          };
          return s({
            path: "/bigquery/jobs/" + this.id,
            method: "GET",
            query: n,
            authOptions: t,
            signKey: !1
          }).then(function(t) {
            return t.error ? e.Promise.reject(new i(t.code, t.error)) : e.Promise.resolve(t)
          })
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(62),
      i = n(1),
      o = n(3),
      s = o.inherits,
      a = n(2),
      u = a.request;
    e.exports = function(e) {
      e.LiveQuery = s(r, {
        constructor: function(e, t) {
          r.apply(this), this.id = e, this._client = t, this._client.register(this), t.on("message", this._dispatch.bind(this))
        },
        _dispatch: function(t) {
          var n = this;
          t.forEach(function(t) {
            var r = t.op,
              i = t.object,
              o = t.query_id,
              s = t.updatedKeys;
            if (o === n.id) {
              var a = e.parseJSON(Object.assign({
                __type: "_File" === i.className ? "File" : "Object"
              }, i));
              s ? n.emit(r, a, s) : n.emit(r, a)
            }
          })
        },
        unsubscribe: function() {
          return this._client.deregister(this), u({
            method: "POST",
            path: "/LiveQuery/unsubscribe",
            data: {
              id: this._client.id,
              query_id: this.id
            }
          })
        }
      }, {
        init: function(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = n.subscriptionId,
            o = void 0 === r ? e._getSubscriptionId() : r;
          if (!e._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query");
          if (!(t instanceof e.Query)) throw new TypeError("LiveQuery must be inited with a Query");
          var s = t.toJSON(),
            a = s.where,
            c = s.keys,
            f = s.returnACL;
          return i.resolve(o).then(function(n) {
            return u({
              method: "POST",
              path: "/LiveQuery/subscribe",
              data: {
                query: {
                  where: a,
                  keys: c,
                  returnACL: f,
                  className: t.className
                },
                id: n
              }
            }).then(function(t) {
              var r = t.query_id;
              return e._config.realtime.createLiveQueryClient(n).then(function(t) {
                return new e.LiveQuery(r, t)
              })
            })
          })
        }
      })
    }
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      return e && e[t] ? i.isFunction(e[t]) ? e[t]() : e[t] : null
    }
    var i = n(0),
      o = n(4),
      s = n(2),
      a = s._request,
      u = n(3),
      c = u.isNullOrUndefined,
      f = u.ensureArray,
      l = u.transformFetchOptions,
      h = ["objectId", "createdAt", "updatedAt"],
      d = function(e) {
        if (-1 !== h.indexOf(e)) throw new Error("key[" + e + "] is reserved")
      };
    e.exports = function(e) {
      e.Object = function(t, n) {
        if (i.isString(t)) return e.Object._create.apply(this, arguments);
        t = t || {}, n && n.parse && (t = this.parse(t), t = this._mergeMagicFields(t));
        var o = r(this, "defaults");
        o && (t = i.extend({}, o, t)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = i.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(t, {
          silent: !0
        }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = i.clone(this.attributes), this.initialize.apply(this, arguments)
      }, e.Object.saveAll = function(t, n) {
        return e.Object._deepSaveAsync(t, null, n)
      }, e.Object.fetchAll = function(t, n) {
        return e.Promise.resolve().then(function() {
          return a("batch", null, null, "POST", {
            requests: i.map(t, function(e) {
              if (!e.className) throw new Error("object must have className to fetch");
              if (!e.id) throw new Error("object must have id to fetch");
              if (e.dirty()) throw new Error("object is modified but not saved");
              return {
                method: "GET",
                path: "/1.1/classes/" + e.className + "/" + e.id
              }
            })
          }, n)
        }).then(function(e) {
          return i.forEach(t, function(t, n) {
            if (!e[n].success) {
              var r = new Error(e[n].error.error);
              throw r.code = e[n].error.code, r
            }
            t._finishFetch(t.parse(e[n].success))
          }), t
        })
      }, i.extend(e.Object.prototype, e.Events, {
        _fetchWhenSave: !1,
        initialize: function() {},
        fetchWhenSave: function(e) {
          if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !i.isBoolean(e)) throw new Error("Expect boolean value for fetchWhenSave");
          this._fetchWhenSave = e
        },
        getObjectId: function() {
          return this.id
        },
        getCreatedAt: function() {
          return this.createdAt || this.get("createdAt")
        },
        getUpdatedAt: function() {
          return this.updatedAt || this.get("updatedAt")
        },
        toJSON: function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return this._toFullJSON(n, !1)
        },
        toFullJSON: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return this._toFullJSON(e)
        },
        _toFullJSON: function(t) {
          var n = this,
            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            o = i.clone(this.attributes);
          if (i.isArray(t)) var s = t.concat(this);
          return e._objectEach(o, function(t, n) {
            o[n] = e._encode(t, s, void 0, r)
          }), e._objectEach(this._operations, function(e, t) {
            o[t] = e
          }), i.has(this, "id") && (o.objectId = this.id), i(["createdAt", "updatedAt"]).each(function(e) {
            if (i.has(n, e)) {
              var t = n[e];
              o[e] = i.isDate(t) ? t.toJSON() : t
            }
          }), r && (o.__type = "Object", i.isArray(t) && t.length && (o.__type = "Pointer"), o.className = this.className), o
        },
        _refreshCache: function() {
          var t = this;
          t._refreshingCache || (t._refreshingCache = !0, e._objectEach(this.attributes, function(n, r) {
            n instanceof e.Object ? n._refreshCache() : i.isObject(n) && t._resetCacheForKey(r) && t.set(r, new e.Op.Set(n), {
              silent: !0
            })
          }), delete t._refreshingCache)
        },
        dirty: function(e) {
          this._refreshCache();
          var t = i.last(this._opSetQueue);
          return e ? !!t[e] : !this.id || i.keys(t).length > 0
        },
        _toPointer: function() {
          return {
            __type: "Pointer",
            className: this.className,
            objectId: this.id
          }
        },
        get: function(e) {
          switch (e) {
            case "objectId":
              return this.id;
            case "createdAt":
            case "updatedAt":
              return this[e];
            default:
              return this.attributes[e]
          }
        },
        relation: function(t) {
          var n = this.get(t);
          if (n) {
            if (!(n instanceof e.Relation)) throw new Error("Called relation() on non-relation field " + t);
            return n._ensureParentAndKey(this, t), n
          }
          return new e.Relation(this, t)
        },
        escape: function(e) {
          var t = this._escapedAttributes[e];
          if (t) return t;
          var n, r = this.attributes[e];
          return n = c(r) ? "" : i.escape(r.toString()), this._escapedAttributes[e] = n, n
        },
        has: function(e) {
          return !c(this.attributes[e])
        },
        _mergeMagicFields: function(t) {
          var n = this,
            r = ["objectId", "createdAt", "updatedAt"];
          return e._arrayEach(r, function(r) {
            t[r] && ("objectId" === r ? n.id = t[r] : "createdAt" !== r && "updatedAt" !== r || i.isDate(t[r]) ? n[r] = t[r] : n[r] = e._parseDate(t[r]), delete t[r])
          }), t
        },
        _startSave: function() {
          this._opSetQueue.push({})
        },
        _cancelSave: function() {
          var t = i.first(this._opSetQueue);
          this._opSetQueue = i.rest(this._opSetQueue);
          var n = i.first(this._opSetQueue);
          e._objectEach(t, function(e, r) {
            var i = t[r],
              o = n[r];
            i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i)
          }), this._saving = this._saving - 1
        },
        _finishSave: function(t) {
          var n = {};
          e._traverse(this.attributes, function(t) {
            t instanceof e.Object && t.id && t._hasData && (n[t.id] = t)
          });
          var r = i.first(this._opSetQueue);
          this._opSetQueue = i.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(t);
          var o = this;
          e._objectEach(t, function(t, r) {
            o._serverData[r] = e._decode(t, r);
            var i = e._traverse(o._serverData[r], function(t) {
              if (t instanceof e.Object && n[t.id]) return n[t.id]
            });
            i && (o._serverData[r] = i)
          }), this._rebuildAllEstimatedData(), this._saving = this._saving - 1
        },
        _finishFetch: function(t, n) {
          this._opSetQueue = [{}], this._mergeMagicFields(t);
          var r = this;
          e._objectEach(t, function(t, n) {
            r._serverData[n] = e._decode(t, n)
          }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n
        },
        _applyOpSet: function(t, n) {
          var r = this;
          e._objectEach(t, function(t, i) {
            n[i] = t._estimate(n[i], r, i), n[i] === e.Op._UNSET && delete n[i]
          })
        },
        _resetCacheForKey: function(t) {
          var n = this.attributes[t];
          if (i.isObject(n) && !(n instanceof e.Object) && !(n instanceof e.File)) {
            n = n.toJSON ? n.toJSON() : n;
            var r = JSON.stringify(n);
            if (this._hashedJSON[t] !== r) {
              var o = !!this._hashedJSON[t];
              return this._hashedJSON[t] = r, o
            }
          }
          return !1
        },
        _rebuildEstimatedDataForKey: function(t) {
          var n = this;
          delete this.attributes[t], this._serverData[t] && (this.attributes[t] = this._serverData[t]), e._arrayEach(this._opSetQueue, function(r) {
            var i = r[t];
            i && (n.attributes[t] = i._estimate(n.attributes[t], n, t), n.attributes[t] === e.Op._UNSET ? delete n.attributes[t] : n._resetCacheForKey(t))
          })
        },
        _rebuildAllEstimatedData: function() {
          var t = this,
            n = i.clone(this.attributes);
          this.attributes = i.clone(this._serverData), e._arrayEach(this._opSetQueue, function(n) {
            t._applyOpSet(n, t.attributes), e._objectEach(n, function(e, n) {
              t._resetCacheForKey(n)
            })
          }), e._objectEach(n, function(e, n) {
            t.attributes[n] !== e && t.trigger("change:" + n, t, t.attributes[n], {})
          }), e._objectEach(this.attributes, function(e, r) {
            i.has(n, r) || t.trigger("change:" + r, t, e, {})
          })
        },
        set: function(t, n, r) {
          var o;
          if (i.isObject(t) || c(t) ? (o = i.mapObject(t, function(t, n) {
              return d(n), e._decode(t, n)
            }), r = n) : (o = {}, d(t), o[t] = e._decode(n, t)), r = r || {}, !o) return this;
          o instanceof e.Object && (o = o.attributes), r.unset && e._objectEach(o, function(t, n) {
            o[n] = new e.Op.Unset
          });
          var s = i.clone(o),
            a = this;
          e._objectEach(s, function(t, n) {
            t instanceof e.Op && (s[n] = t._estimate(a.attributes[n], a, n), s[n] === e.Op._UNSET && delete s[n])
          }), this._validate(o, r), r.changes = {};
          var u = this._escapedAttributes;
          this._previousAttributes;
          return e._arrayEach(i.keys(o), function(t) {
            var n = o[t];
            n instanceof e.Relation && (n.parent = a), n instanceof e.Op || (n = new e.Op.Set(n));
            var s = !0;
            n instanceof e.Op.Set && i.isEqual(a.attributes[t], n.value) && (s = !1), s && (delete u[t], r.silent ? a._silent[t] = !0 : r.changes[t] = !0);
            var c = i.last(a._opSetQueue);
            c[t] = n._mergeWithPrevious(c[t]), a._rebuildEstimatedDataForKey(t), s ? (a.changed[t] = a.attributes[t], r.silent || (a._pending[t] = !0)) : (delete a.changed[t], delete a._pending[t])
          }), r.silent || this.change(r), this
        },
        unset: function(e, t) {
          return t = t || {}, t.unset = !0, this.set(e, null, t)
        },
        increment: function(t, n) {
          return (i.isUndefined(n) || i.isNull(n)) && (n = 1), this.set(t, new e.Op.Increment(n))
        },
        add: function(t, n) {
          return this.set(t, new e.Op.Add(f(n)))
        },
        addUnique: function(t, n) {
          return this.set(t, new e.Op.AddUnique(f(n)))
        },
        remove: function(t, n) {
          return this.set(t, new e.Op.Remove(f(n)))
        },
        op: function(e) {
          return i.last(this._opSetQueue)[e]
        },
        clear: function(e) {
          e = e || {}, e.unset = !0;
          var t = i.extend(this.attributes, this._operations);
          return this.set(t, e)
        },
        _getSaveJSON: function() {
          var t = i.clone(i.first(this._opSetQueue));
          return e._objectEach(t, function(e, n) {
            t[n] = e.toJSON()
          }), t
        },
        _canBeSerialized: function() {
          return e.Object._canBeSerializedAsValue(this.attributes)
        },
        fetch: function(e, t) {
          var n = this;
          return a("classes", this.className, this.id, "GET", l(e), t).then(function(e) {
            return n._finishFetch(n.parse(e), !0), n
          })
        },
        save: function(t, n, r) {
          var o, s, u;
          i.isObject(t) || c(t) ? (o = t, u = n) : (o = {}, o[t] = n, u = r), u = i.clone(u) || {}, u.wait && (s = i.clone(this.attributes));
          var f = i.clone(u) || {};
          f.wait && (f.silent = !0), o && this.set(o, f);
          var l = this;
          l._refreshCache();
          var h = [],
            d = [];
          return e.Object._findUnsavedChildren(l.attributes, h, d), h.length + d.length > 0 ? e.Object._deepSaveAsync(this.attributes, l, u).then(function() {
            return l.save(null, u)
          }) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || e.Promise.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch(function(e) {}).then(function() {
            var e = l.id ? "PUT" : "POST",
              t = l._getSaveJSON(),
              n = {};
            if ((l._fetchWhenSave || u.fetchWhenSave) && (n.new = "true"), u.query) {
              var r;
              if ("function" == typeof u.query.toJSON && (r = u.query.toJSON()) && (n.where = r.where), !n.where) {
                throw new Error("options.query is not an AV.Query")
              }
            }
            i.extend(t, l._flags);
            var c = "classes",
              h = l.className;
            "_User" !== l.className || l.id || (c = "users", h = null);
            var d = u._makeRequest || a,
              p = d(c, h, l.id, e, t, u, n);
            return p = p.then(function(e) {
              var t = l.parse(e);
              return u.wait && (t = i.extend(o || {}, t)), l._finishSave(t), u.wait && l.set(s, f), l
            }, function(e) {
              throw l._cancelSave(), e
            })
          }), this._allPreviousSaves)
        },
        destroy: function(e) {
          e = e || {};
          var t = this,
            n = function() {
              t.trigger("destroy", t, t.collection, e)
            };
          return this.id ? (e.wait || n(), a("classes", this.className, this.id, "DELETE", this._flags, e).then(function() {
            return e.wait && n(), t
          })) : n()
        },
        parse: function(t) {
          var n = i.clone(t);
          return i(["createdAt", "updatedAt"]).each(function(t) {
            n[t] && (n[t] = e._parseDate(n[t]))
          }), n.updatedAt || (n.updatedAt = n.createdAt), n
        },
        clone: function() {
          return new this.constructor(this.attributes)
        },
        isNew: function() {
          return !this.id
        },
        change: function(t) {
          t = t || {};
          var n = this._changing;
          this._changing = !0;
          var r = this;
          e._objectEach(this._silent, function(e) {
            r._pending[e] = !0
          });
          var o = i.extend({}, t.changes, this._silent);
          if (this._silent = {}, e._objectEach(o, function(e, n) {
              r.trigger("change:" + n, r, r.get(n), t)
            }), n) return this;
          for (var s = function(e, t) {
              r._pending[t] || r._silent[t] || delete r.changed[t]
            }; !i.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, t), e._objectEach(this.changed, s), r._previousAttributes = i.clone(this.attributes);
          return this._changing = !1, this
        },
        hasChanged: function(e) {
          return arguments.length ? this.changed && i.has(this.changed, e) : !i.isEmpty(this.changed)
        },
        changedAttributes: function(t) {
          if (!t) return !!this.hasChanged() && i.clone(this.changed);
          var n = {},
            r = this._previousAttributes;
          return e._objectEach(t, function(e, t) {
            i.isEqual(r[t], e) || (n[t] = e)
          }), n
        },
        previous: function(e) {
          return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function() {
          return i.clone(this._previousAttributes)
        },
        isValid: function() {
          try {
            this.validate(this.attributes)
          } catch (e) {
            return !1
          }
          return !0
        },
        validate: function(t) {
          if (i.has(t, "ACL") && !(t.ACL instanceof e.ACL)) throw new o(o.OTHER_CAUSE, "ACL must be a AV.ACL.")
        },
        _validate: function(e, t) {
          !t.silent && this.validate && (e = i.extend({}, this.attributes, e), this.validate(e))
        },
        getACL: function() {
          return this.get("ACL")
        },
        setACL: function(e, t) {
          return this.set("ACL", e, t)
        },
        disableBeforeHook: function() {
          this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete")
        },
        disableAfterHook: function() {
          this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete")
        },
        ignoreHook: function(t) {
          i.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], t) || console.trace("Unsupported hookName: " + t), e.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(t)
        }
      }), e.Object.createWithoutData = function(t, n, r) {
        var i = new e.Object(t);
        return i.id = n, i._hasData = r, i
      }, e.Object.destroyAll = function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t || 0 === t.length) return e.Promise.resolve();
        var r = i.groupBy(t, function(e) {
            return JSON.stringify({
              className: e.className,
              flags: e._flags
            })
          }),
          o = {
            requests: i.map(r, function(e) {
              var t = i.map(e, "id").join(",");
              return {
                method: "DELETE",
                path: "/1.1/classes/" + e[0].className + "/" + t,
                body: e[0]._flags
              }
            })
          };
        return a("batch", null, null, "POST", o, n)
      }, e.Object._getSubclass = function(t) {
        if (!i.isString(t)) throw new Error("AV.Object._getSubclass requires a string argument.");
        var n = e.Object._classMap[t];
        return n || (n = e.Object.extend(t), e.Object._classMap[t] = n), n
      }, e.Object._create = function(t, n, r) {
        return new(e.Object._getSubclass(t))(n, r)
      }, e.Object._classMap = {}, e.Object._extend = e._extend, e.Object.new = function(t, n) {
        return new e.Object(t, n)
      }, e.Object.extend = function(t, n, r) {
        if (!i.isString(t)) {
          if (t && i.has(t, "className")) return e.Object.extend(t.className, t, n);
          throw new Error("AV.Object.extend's first argument should be the className.")
        }
        "User" === t && (t = "_User");
        var o = null;
        if (i.has(e.Object._classMap, t)) {
          var s = e.Object._classMap[t];
          if (!n && !r) return s;
          o = s._extend(n, r)
        } else n = n || {}, n._className = t, o = this._extend(n, r);
        return o.extend = function(n) {
          if (i.isString(n) || n && i.has(n, "className")) return e.Object.extend.apply(o, arguments);
          var r = [t].concat(i.toArray(arguments));
          return e.Object.extend.apply(o, r)
        }, o.new = function(e, t) {
          return new o(e, t)
        }, e.Object._classMap[t] = o, o
      }, Object.defineProperty(e.Object.prototype, "className", {
        get: function() {
          var e = this._className || this.constructor._LCClassName || this.constructor.name;
          return "User" === e ? "_User" : e
        }
      }), e.Object.register = function(t, n) {
        if (!(t.prototype instanceof e.Object)) throw new Error("registered class is not a subclass of AV.Object");
        var r = n || t.name;
        if (!r.length) throw new Error("registered class must be named");
        n && (t._LCClassName = n), e.Object._classMap[r] = t
      }, e.Object._findUnsavedChildren = function(t, n, r) {
        e._traverse(t, function(t) {
          return t instanceof e.Object ? (t._refreshCache(), void(t.dirty() && n.push(t))) : t instanceof e.File ? void(t.url() || t.id || r.push(t)) : void 0
        })
      }, e.Object._canBeSerializedAsValue = function(t) {
        var n = !0;
        return t instanceof e.Object || t instanceof e.File ? n = !!t.id : i.isArray(t) ? e._arrayEach(t, function(t) {
          e.Object._canBeSerializedAsValue(t) || (n = !1)
        }) : i.isObject(t) && e._objectEach(t, function(t) {
          e.Object._canBeSerializedAsValue(t) || (n = !1)
        }), n
      }, e.Object._deepSaveAsync = function(t, n, r) {
        var s = [],
          u = [];
        e.Object._findUnsavedChildren(t, s, u), n && (s = i.filter(s, function(e) {
          return e != n
        }));
        var c = e.Promise.resolve();
        i.each(u, function(e) {
          c = c.then(function() {
            return e.save()
          })
        });
        var f = i.uniq(s),
          l = i.uniq(f);
        return c.then(function() {
          return e.Promise._continueWhile(function() {
            return l.length > 0
          }, function() {
            var t = [],
              n = [];
            if (e._arrayEach(l, function(e) {
                if (t.length > 20) return void n.push(e);
                e._canBeSerialized() ? t.push(e) : n.push(e)
              }), l = n, 0 === t.length) return e.Promise.reject(new o(o.OTHER_CAUSE, "Tried to save a batch with a cycle."));
            var s = e.Promise.resolve(i.map(t, function(t) {
                return t._allPreviousSaves || e.Promise.resolve()
              })),
              u = s.then(function() {
                return a("batch", null, null, "POST", {
                  requests: i.map(t, function(e) {
                    var t = e._getSaveJSON();
                    i.extend(t, e._flags);
                    var n = "POST",
                      r = "/1.1/classes/" + e.className;
                    return e.id && (r = r + "/" + e.id, n = "PUT"), e._startSave(), {
                      method: n,
                      path: r,
                      body: t
                    }
                  })
                }, r).then(function(n) {
                  var r;
                  if (e._arrayEach(t, function(e, t) {
                      n[t].success ? e._finishSave(e.parse(n[t].success)) : (r = r || n[t].error, e._cancelSave())
                    }), r) return e.Promise.reject(new o(r.code, r.error))
                })
              });
            return e._arrayEach(t, function(e) {
              e._allPreviousSaves = u
            }), u
          })
        }).then(function() {
          return t
        })
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e) {
      e.Op = function() {
        this._initialize.apply(this, arguments)
      }, r.extend(e.Op.prototype, {
        _initialize: function() {}
      }), r.extend(e.Op, {
        _extend: e._extend,
        _opDecoderMap: {},
        _registerDecoder: function(t, n) {
          e.Op._opDecoderMap[t] = n
        },
        _decode: function(t) {
          var n = e.Op._opDecoderMap[t.__op];
          return n ? n(t) : void 0
        }
      }), e.Op._registerDecoder("Batch", function(t) {
        var n = null;
        return e._arrayEach(t.ops, function(t) {
          t = e.Op._decode(t), n = t._mergeWithPrevious(n)
        }), n
      }), e.Op.Set = e.Op._extend({
        _initialize: function(e) {
          this._value = e
        },
        value: function() {
          return this._value
        },
        toJSON: function() {
          return e._encode(this.value())
        },
        _mergeWithPrevious: function(e) {
          return this
        },
        _estimate: function(e) {
          return this.value()
        }
      }), e.Op._UNSET = {}, e.Op.Unset = e.Op._extend({
        toJSON: function() {
          return {
            __op: "Delete"
          }
        },
        _mergeWithPrevious: function(e) {
          return this
        },
        _estimate: function(t) {
          return e.Op._UNSET
        }
      }), e.Op._registerDecoder("Delete", function(t) {
        return new e.Op.Unset
      }), e.Op.Increment = e.Op._extend({
        _initialize: function(e) {
          this._amount = e
        },
        amount: function() {
          return this._amount
        },
        toJSON: function() {
          return {
            __op: "Increment",
            amount: this._amount
          }
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.amount());
            if (t instanceof e.Op.Set) return new e.Op.Set(t.value() + this.amount());
            if (t instanceof e.Op.Increment) return new e.Op.Increment(this.amount() + t.amount());
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(e) {
          return e ? e + this.amount() : this.amount()
        }
      }), e.Op._registerDecoder("Increment", function(t) {
        return new e.Op.Increment(t.amount)
      }), e.Op.Add = e.Op._extend({
        _initialize: function(e) {
          this._objects = e
        },
        objects: function() {
          return this._objects
        },
        toJSON: function() {
          return {
            __op: "Add",
            objects: e._encode(this.objects())
          }
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
            if (t instanceof e.Op.Add) return new e.Op.Add(t.objects().concat(this.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(e) {
          return e ? e.concat(this.objects()) : r.clone(this.objects())
        }
      }), e.Op._registerDecoder("Add", function(t) {
        return new e.Op.Add(e._decode(t.objects))
      }), e.Op.AddUnique = e.Op._extend({
        _initialize: function(e) {
          this._objects = r.uniq(e)
        },
        objects: function() {
          return this._objects
        },
        toJSON: function() {
          return {
            __op: "AddUnique",
            objects: e._encode(this.objects())
          }
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
            if (t instanceof e.Op.AddUnique) return new e.Op.AddUnique(this._estimate(t.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(t) {
          if (t) {
            var n = r.clone(t);
            return e._arrayEach(this.objects(), function(t) {
              if (t instanceof e.Object && t.id) {
                var i = r.find(n, function(n) {
                  return n instanceof e.Object && n.id === t.id
                });
                if (i) {
                  var o = r.indexOf(n, i);
                  n[o] = t
                } else n.push(t)
              } else r.contains(n, t) || n.push(t)
            }), n
          }
          return r.clone(this.objects())
        }
      }), e.Op._registerDecoder("AddUnique", function(t) {
        return new e.Op.AddUnique(e._decode(t.objects))
      }), e.Op.Remove = e.Op._extend({
        _initialize: function(e) {
          this._objects = r.uniq(e)
        },
        objects: function() {
          return this._objects
        },
        toJSON: function() {
          return {
            __op: "Remove",
            objects: e._encode(this.objects())
          }
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return t;
            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
            if (t instanceof e.Op.Remove) return new e.Op.Remove(r.union(t.objects(), this.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(t) {
          if (t) {
            var n = r.difference(t, this.objects());
            return e._arrayEach(this.objects(), function(t) {
              t instanceof e.Object && t.id && (n = r.reject(n, function(n) {
                return n instanceof e.Object && n.id === t.id
              }))
            }), n
          }
          return []
        }
      }), e.Op._registerDecoder("Remove", function(t) {
        return new e.Op.Remove(e._decode(t.objects))
      }), e.Op.Relation = e.Op._extend({
        _initialize: function(t, n) {
          this._targetClassName = null;
          var i = this,
            o = function(t) {
              if (t instanceof e.Object) {
                if (!t.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
                if (i._targetClassName || (i._targetClassName = t.className), i._targetClassName !== t.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + t.className + ".");
                return t.id
              }
              return t
            };
          this.relationsToAdd = r.uniq(r.map(t, o)), this.relationsToRemove = r.uniq(r.map(n, o))
        },
        added: function() {
          var t = this;
          return r.map(this.relationsToAdd, function(n) {
            var r = e.Object._create(t._targetClassName);
            return r.id = n, r
          })
        },
        removed: function() {
          var t = this;
          return r.map(this.relationsToRemove, function(n) {
            var r = e.Object._create(t._targetClassName);
            return r.id = n, r
          })
        },
        toJSON: function() {
          var e = null,
            t = null,
            n = this,
            i = function(e) {
              return {
                __type: "Pointer",
                className: n._targetClassName,
                objectId: e
              }
            },
            o = null;
          return this.relationsToAdd.length > 0 && (o = r.map(this.relationsToAdd, i), e = {
            __op: "AddRelation",
            objects: o
          }), this.relationsToRemove.length > 0 && (o = r.map(this.relationsToRemove, i), t = {
            __op: "RemoveRelation",
            objects: o
          }), e && t ? {
            __op: "Batch",
            ops: [e, t]
          } : e || t || {}
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) throw new Error("You can't modify a relation after deleting it.");
            if (t instanceof e.Op.Relation) {
              if (t._targetClassName && t._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + t._targetClassName + ", but " + this._targetClassName + " was passed in.");
              var n = r.union(r.difference(t.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                i = r.union(r.difference(t.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                o = new e.Op.Relation(n, i);
              return o._targetClassName = this._targetClassName, o
            }
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(t, n, r) {
          if (t) {
            if (t instanceof e.Relation) {
              if (this._targetClassName)
                if (t.targetClassName) {
                  if (t.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + t.targetClassName + ", but a " + this._targetClassName + " was passed in.")
                } else t.targetClassName = this._targetClassName;
              return t
            }
            throw new Error("Op is invalid after previous op.")
          }
          new e.Relation(n, r).targetClassName = this._targetClassName
        }
      }), e.Op._registerDecoder("AddRelation", function(t) {
        return new e.Op.Relation(e._decode(t.objects), [])
      }), e.Op._registerDecoder("RemoveRelation", function(t) {
        return new e.Op.Relation([], e._decode(t.objects))
      })
    }
  }, function(e, t, n) {
    "use strict";
    n(25)
  }, function(e, t, n) {
    "use strict";
    var r = n(2).request;
    e.exports = function(e) {
      e.Installation = e.Object.extend("_Installation"), e.Push = e.Push || {}, e.Push.send = function(e, t) {
        if (e.where && (e.where = e.where.toJSON().where), e.where && e.cql) throw new Error("Both where and cql can't be set");
        if (e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), e.expiration_time && e.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
        return r({
          service: "push",
          method: "POST",
          path: "/push",
          data: e,
          authOptions: t
        })
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(6)("leancloud:query"),
      o = n(1),
      s = n(4),
      a = n(2),
      u = a._request,
      c = n(3),
      f = c.ensureArray,
      l = c.transformFetchOptions,
      h = function(e, t) {
        if (void 0 === e) throw new Error(t)
      };
    e.exports = function(e) {
      e.Query = function(t) {
        r.isString(t) && (t = e.Object._getSubclass(t)), this.objectClass = t, this.className = t.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._extraOptions = {}
      }, e.Query.or = function() {
        var t = r.toArray(arguments),
          n = null;
        e._arrayEach(t, function(e) {
          if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class")
        });
        var i = new e.Query(n);
        return i._orQuery(t), i
      }, e.Query.and = function() {
        var t = r.toArray(arguments),
          n = null;
        e._arrayEach(t, function(e) {
          if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class")
        });
        var i = new e.Query(n);
        return i._andQuery(t), i
      }, e.Query.doCloudQuery = function(t, n, i) {
        var o = {
          cql: t
        };
        return r.isArray(n) ? o.pvalues = n : i = n, u("cloudQuery", null, null, "GET", o, i).then(function(t) {
          var n = new e.Query(t.className);
          return {
            results: r.map(t.results, function(e) {
              var r = n._newObject(t);
              return r._finishFetch && r._finishFetch(n._processResult(e), !0), r
            }),
            count: t.count,
            className: t.className
          }
        })
      }, e.Query._extend = e._extend, r.extend(e.Query.prototype, {
        _processResult: function(e) {
          return e
        },
        get: function(e, t) {
          if (!e) {
            throw new s(s.OBJECT_NOT_FOUND, "Object not found.")
          }
          var n = this._newObject();
          n.id = e;
          var i = this.toJSON(),
            o = {};
          return i.keys && (o.keys = i.keys), i.include && (o.include = i.include), i.includeACL && (o.includeACL = i.includeACL), u("classes", this.className, e, "GET", l(o), t).then(function(e) {
            if (r.isEmpty(e)) throw new s(s.OBJECT_NOT_FOUND, "Object not found.");
            return n._finishFetch(n.parse(e), !0), n
          })
        },
        toJSON: function() {
          var t = {
            where: this._where
          };
          return this._include.length > 0 && (t.include = this._include.join(",")), this._select.length > 0 && (t.keys = this._select.join(",")), void 0 !== this._includeACL && (t.returnACL = this._includeACL), this._limit >= 0 && (t.limit = this._limit), this._skip > 0 && (t.skip = this._skip), void 0 !== this._order && (t.order = this._order), e._objectEach(this._extraOptions, function(e, n) {
            t[n] = e
          }), t
        },
        _newObject: function(t) {
          return t && t.className ? new e.Object(t.className) : new this.objectClass
        },
        _createRequest: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.toJSON(),
            t = arguments[1];
          if (JSON.stringify(e).length > 2e3) {
            var n = {
              requests: [{
                method: "GET",
                path: "/1.1/classes/" + this.className,
                params: e
              }]
            };
            return u("batch", null, null, "POST", n, t).then(function(e) {
              var t = e[0];
              if (t.success) return t.success;
              var n = new Error(t.error.error || "Unknown batch error");
              throw n.code = t.error.code, n
            })
          }
          return u("classes", this.className, null, "GET", e, t)
        },
        _parseResponse: function(e) {
          var t = this;
          return r.map(e.results, function(n) {
            var r = t._newObject(e);
            return r._finishFetch && r._finishFetch(t._processResult(n), !0), r
          })
        },
        find: function(e) {
          return this._createRequest(void 0, e).then(this._parseResponse.bind(this))
        },
        scan: function() {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.orderedBy,
            s = t.batchSize,
            a = arguments[1],
            c = this.toJSON();
          i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete c.limit), n && (c.scan_key = n), s && (c.limit = s);
          var f = o.resolve([]),
            l = void 0,
            h = !1;
          return {
            next: function() {
              return f = f.then(function(t) {
                return h ? [] : t.length > 1 ? t : l || 0 === t.length ? u("scan/classes", e.className, null, "GET", l ? r.extend({}, c, {
                  cursor: l
                }) : c, a).then(function(t) {
                  return l = t.cursor, e._parseResponse(t)
                }).then(function(e) {
                  return e.length || (h = !0), t.concat(e)
                }) : (h = !0, t)
              }), f.then(function(e) {
                return e.shift()
              }).then(function(e) {
                return {
                  value: e,
                  done: h
                }
              })
            }
          }
        },
        destroyAll: function(t) {
          return this.find(t).then(function(n) {
            return e.Object.destroyAll(n, t)
          })
        },
        count: function(e) {
          var t = this.toJSON();
          return t.limit = 0, t.count = 1, this._createRequest(t, e).then(function(e) {
            return e.count
          })
        },
        first: function(e) {
          var t = this,
            n = this.toJSON();
          return n.limit = 1, this._createRequest(n, e).then(function(e) {
            return r.map(e.results, function(e) {
              var n = t._newObject();
              return n._finishFetch && n._finishFetch(t._processResult(e), !0), n
            })[0]
          })
        },
        skip: function(e) {
          return h(e, "undefined is not a valid skip value"), this._skip = e, this
        },
        limit: function(e) {
          return h(e, "undefined is not a valid limit value"), this._limit = e, this
        },
        equalTo: function(t, n) {
          return h(t, "undefined is not a valid key"), h(n, "undefined is not a valid value"), this._where[t] = e._encode(n), this
        },
        _addCondition: function(t, n, r) {
          return h(t, "undefined is not a valid condition key"), h(n, "undefined is not a valid condition"), h(r, "undefined is not a valid condition value"), this._where[t] || (this._where[t] = {}), this._where[t][n] = e._encode(r), this
        },
        sizeEqualTo: function(e, t) {
          this._addCondition(e, "$size", t)
        },
        notEqualTo: function(e, t) {
          return this._addCondition(e, "$ne", t), this
        },
        lessThan: function(e, t) {
          return this._addCondition(e, "$lt", t), this
        },
        greaterThan: function(e, t) {
          return this._addCondition(e, "$gt", t), this
        },
        lessThanOrEqualTo: function(e, t) {
          return this._addCondition(e, "$lte", t), this
        },
        greaterThanOrEqualTo: function(e, t) {
          return this._addCondition(e, "$gte", t), this
        },
        containedIn: function(e, t) {
          return this._addCondition(e, "$in", t), this
        },
        notContainedIn: function(e, t) {
          return this._addCondition(e, "$nin", t), this
        },
        containsAll: function(e, t) {
          return this._addCondition(e, "$all", t), this
        },
        exists: function(e) {
          return this._addCondition(e, "$exists", !0), this
        },
        doesNotExist: function(e) {
          return this._addCondition(e, "$exists", !1), this
        },
        matches: function(e, t, n) {
          return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), this
        },
        matchesQuery: function(e, t) {
          var n = t.toJSON();
          return n.className = t.className, this._addCondition(e, "$inQuery", n), this
        },
        doesNotMatchQuery: function(e, t) {
          var n = t.toJSON();
          return n.className = t.className, this._addCondition(e, "$notInQuery", n), this
        },
        matchesKeyInQuery: function(e, t, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(e, "$select", {
            key: t,
            query: r
          }), this
        },
        doesNotMatchKeyInQuery: function(e, t, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(e, "$dontSelect", {
            key: t,
            query: r
          }), this
        },
        _orQuery: function(e) {
          var t = r.map(e, function(e) {
            return e.toJSON().where
          });
          return this._where.$or = t, this
        },
        _andQuery: function(e) {
          var t = r.map(e, function(e) {
            return e.toJSON().where
          });
          return this._where.$and = t, this
        },
        _quote: function(e) {
          return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E"
        },
        contains: function(e, t) {
          return this._addCondition(e, "$regex", this._quote(t)), this
        },
        startsWith: function(e, t) {
          return this._addCondition(e, "$regex", "^" + this._quote(t)), this
        },
        endsWith: function(e, t) {
          return this._addCondition(e, "$regex", this._quote(t) + "$"), this
        },
        ascending: function(e) {
          return h(e, "undefined is not a valid key"), this._order = e, this
        },
        addAscending: function(e) {
          return h(e, "undefined is not a valid key"), this._order ? this._order += "," + e : this._order = e, this
        },
        descending: function(e) {
          return h(e, "undefined is not a valid key"), this._order = "-" + e, this
        },
        addDescending: function(e) {
          return h(e, "undefined is not a valid key"), this._order ? this._order += ",-" + e : this._order = "-" + e, this
        },
        near: function(t, n) {
          return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), this._addCondition(t, "$nearSphere", n), this
        },
        withinRadians: function(e, t, n) {
          return this.near(e, t), this._addCondition(e, "$maxDistance", n), this
        },
        withinMiles: function(e, t, n) {
          return this.withinRadians(e, t, n / 3958.8)
        },
        withinKilometers: function(e, t, n) {
          return this.withinRadians(e, t, n / 6371)
        },
        withinGeoBox: function(t, n, r) {
          return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), r instanceof e.GeoPoint || (r = new e.GeoPoint(r)), this._addCondition(t, "$within", {
            $box: [n, r]
          }), this
        },
        include: function(e) {
          var t = this;
          return h(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
            t._include = t._include.concat(f(e))
          }), this
        },
        includeACL: function() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return this._includeACL = e, this
        },
        select: function(e) {
          var t = this;
          return h(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
            t._select = t._select.concat(f(e))
          }), this
        },
        each: function(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this._order || this._skip || this._limit >= 0) {
            var i = new Error("Cannot iterate on a query with sort, skip, or limit.");
            return e.Promise.reject(i)
          }
          var o = new e.Query(this.objectClass);
          o._limit = n.batchSize || 100, o._where = r.clone(this._where), o._include = r.clone(this._include), o.ascending("objectId");
          var s = !1;
          return e.Promise._continueWhile(function() {
            return !s
          }, function() {
            return o.find(n).then(function(n) {
              var i = e.Promise.resolve();
              return r.each(n, function(e) {
                i = i.then(function() {
                  return t(e)
                })
              }), i.then(function() {
                n.length >= o._limit ? o.greaterThan("objectId", n[n.length - 1].id) : s = !0
              })
            })
          })
        },
        subscribe: function(t) {
          return e.LiveQuery.init(this, t)
        }
      }), e.FriendShipQuery = e.Query._extend({
        _objectClass: e.User,
        _newObject: function() {
          return new e.User
        },
        _processResult: function(e) {
          if (e && e[this._friendshipTag]) {
            var t = e[this._friendshipTag];
            return "Pointer" === t.__type && "_User" === t.className && (delete t.__type, delete t.className), t
          }
          return null
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e) {
      e.Relation = function(e, t) {
        if (!r.isString(t)) throw new TypeError("key must be a string");
        this.parent = e, this.key = t, this.targetClassName = null
      }, e.Relation.reverseQuery = function(t, n, r) {
        var i = new e.Query(t);
        return i.equalTo(n, r._toPointer()), i
      }, r.extend(e.Relation.prototype, {
        _ensureParentAndKey: function(e, t) {
          if (this.parent = this.parent || e, this.key = this.key || t, this.parent !== e) throw new Error("Internal Error. Relation retrieved from two different Objects.");
          if (this.key !== t) throw new Error("Internal Error. Relation retrieved from two different keys.")
        },
        add: function(t) {
          r.isArray(t) || (t = [t]);
          var n = new e.Op.Relation(t, []);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName
        },
        remove: function(t) {
          r.isArray(t) || (t = [t]);
          var n = new e.Op.Relation([], t);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName
        },
        toJSON: function() {
          return {
            __type: "Relation",
            className: this.targetClassName
          }
        },
        query: function() {
          var t, n;
          return this.targetClassName ? (t = e.Object._getSubclass(this.targetClassName), n = new e.Query(t)) : (t = e.Object._getSubclass(this.parent.className), n = new e.Query(t), n._extraOptions.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), n._addCondition("$relatedTo", "key", this.key), n
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(4);
    e.exports = function(e) {
      e.Role = e.Object.extend("_Role", {
        constructor: function(t, n) {
          if (r.isString(t) ? (e.Object.prototype.constructor.call(this, null, null), this.setName(t)) : e.Object.prototype.constructor.call(this, t, n), n) {
            if (!(n instanceof e.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
            this.setACL(n)
          }
        },
        getName: function() {
          return this.get("name")
        },
        setName: function(e, t) {
          return this.set("name", e, t)
        },
        getUsers: function() {
          return this.relation("users")
        },
        getRoles: function() {
          return this.relation("roles")
        },
        validate: function(t, n) {
          if ("name" in t && t.name !== this.getName()) {
            var o = t.name;
            if (this.id && this.id !== t.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
            if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
            if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
          }
          return !!e.Object.prototype.validate && e.Object.prototype.validate.call(this, t, n)
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(2)._request;
    e.exports = function(e) {
      e.SearchSortBuilder = function() {
        this._sortFields = []
      }, r.extend(e.SearchSortBuilder.prototype, {
        _addField: function(e, t, n, r) {
          var i = {};
          return i[e] = {
            order: t || "asc",
            mode: n || "avg",
            missing: "_" + (r || "last")
          }, this._sortFields.push(i), this
        },
        ascending: function(e, t, n) {
          return this._addField(e, "asc", t, n)
        },
        descending: function(e, t, n) {
          return this._addField(e, "desc", t, n)
        },
        whereNear: function(e, t, n) {
          n = n || {};
          var r = {},
            i = {
              lat: t.latitude,
              lon: t.longitude
            },
            o = {
              order: n.order || "asc",
              mode: n.mode || "avg",
              unit: n.unit || "km"
            };
          return o[e] = i, r._geo_distance = o, this._sortFields.push(r), this
        },
        build: function() {
          return JSON.stringify(e._encode(this._sortFields))
        }
      }), e.SearchQuery = e.Query._extend({
        _sid: null,
        _hits: 0,
        _queryString: null,
        _highlights: null,
        _sortBuilder: null,
        _createRequest: function(e, t) {
          return i("search/select", null, null, "GET", e || this.toJSON(), t)
        },
        sid: function(e) {
          return this._sid = e, this
        },
        queryString: function(e) {
          return this._queryString = e, this
        },
        highlights: function(e) {
          var t;
          return t = e && r.isString(e) ? arguments : e, this._highlights = t, this
        },
        sortBy: function(e) {
          return this._sortBuilder = e, this
        },
        hits: function() {
          return this._hits || (this._hits = 0), this._hits
        },
        _processResult: function(e) {
          return delete e.className, delete e._app_url, delete e._deeplink, e
        },
        hasMore: function() {
          return !this._hitEnd
        },
        reset: function() {
          this._hitEnd = !1, this._sid = null, this._hits = 0
        },
        find: function() {
          var e = this;
          return this._createRequest().then(function(t) {
            return t.sid ? (e._oldSid = e._sid, e._sid = t.sid) : (e._sid = null, e._hitEnd = !0), e._hits = t.hits || 0, r.map(t.results, function(n) {
              n.className && (t.className = n.className);
              var r = e._newObject(t);
              return r.appURL = n._app_url, r._finishFetch(e._processResult(n), !0), r
            })
          })
        },
        toJSON: function() {
          var t = e.SearchQuery.__super__.toJSON.call(this);
          if (delete t.where, this.className && (t.clazz = this.className), this._sid && (t.sid = this._sid), !this._queryString) throw new Error("Please set query string.");
          if (t.q = this._queryString, this._highlights && (t.highlights = this._highlights.join(",")), this._sortBuilder && t.order) throw new Error("sort and order can not be set at same time.");
          return this._sortBuilder && (t.sort = this._sortBuilder.build()), t
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = n(0),
      o = n(2)._request;
    e.exports = function(e) {
      var t = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return e.User.currentAsync().then(function(n) {
            return n || e.User._fetchUserBySessionToken(t.sessionToken)
          })
        },
        n = function(n) {
          return t(n).then(function(t) {
            return e.Object.createWithoutData("_User", t.id)._toPointer()
          })
        };
      e.Status = function(e, t) {
        return this.data = {}, this.inboxType = "default", this.query = null, e && "object" === (void 0 === e ? "undefined" : r(e)) ? this.data = e : (e && (this.data.image = e), t && (this.data.message = t)), this
      }, i.extend(e.Status.prototype, {
        get: function(e) {
          return this.data[e]
        },
        set: function(e, t) {
          return this.data[e] = t, this
        },
        destroy: function(t) {
          return this.id ? o("statuses", null, this.id, "DELETE", t) : e.Promise.reject(new Error("The status id is not exists."))
        },
        toObject: function() {
          return this.id ? e.Object.createWithoutData("_Status", this.id) : null
        },
        _getDataJSON: function() {
          var t = i.clone(this.data);
          return e._encode(t)
        },
        send: function() {
          var t = this,
            r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!r.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
          return this.query ? n(r).then(function(e) {
            var n = t.query.toJSON();
            n.className = t.query.className;
            var i = {};
            return i.query = n, t.data = t.data || {}, t.data.source = t.data.source || e, i.data = t._getDataJSON(), i.inboxType = t.inboxType || "default", o("statuses", null, null, "POST", i, r)
          }).then(function(n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
          }) : e.Status.sendStatusToFollowers(this, r)
        },
        _finishFetch: function(t) {
          this.id = t.objectId, this.createdAt = e._parseDate(t.createdAt), this.updatedAt = e._parseDate(t.updatedAt), this.messageId = t.messageId, delete t.messageId, delete t.objectId, delete t.createdAt, delete t.updatedAt, this.data = e._decode(t)
        }
      }), e.Status.sendStatusToFollowers = function(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!r.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
        return n(r).then(function(n) {
          var i = {};
          i.className = "_Follower", i.keys = "follower", i.where = {
            user: n
          };
          var s = {};
          return s.query = i, t.data = t.data || {}, t.data.source = t.data.source || n, s.data = t._getDataJSON(), s.inboxType = t.inboxType || "default", o("statuses", null, null, "POST", s, r).then(function(n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
          })
        })
      }, e.Status.sendPrivateStatus = function(t, r) {
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!s.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
        if (!r) throw new Error("Invalid target user.");
        var a = i.isString(r) ? r : r.id;
        if (!a) throw new Error("Invalid target user.");
        return n(s).then(function(n) {
          var r = {};
          r.className = "_User", r.where = {
            objectId: a
          };
          var i = {};
          return i.query = r, t.data = t.data || {}, t.data.source = t.data.source || n, i.data = t._getDataJSON(), i.inboxType = "private", t.inboxType = "private", o("statuses", null, null, "POST", i, s).then(function(n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
          })
        })
      }, e.Status.countUnreadStatuses = function(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (s = r), !s.sessionToken && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
        return t(s).then(function(t) {
          var n = {};
          return n.inboxType = e._encode(r), n.owner = e._encode(t), o("subscribe/statuses/count", null, null, "GET", n, s)
        })
      }, e.Status.resetUnreadCount = function(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (s = r), !s.sessionToken && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
        return t(s).then(function(t) {
          var n = {};
          return n.inboxType = e._encode(r), n.owner = e._encode(t), o("subscribe/statuses/resetUnreadCount", null, null, "POST", n, s)
        })
      }, e.Status.statusQuery = function(t) {
        var n = new e.Query("_Status");
        return t && n.equalTo("source", t), n
      }, e.InboxQuery = e.Query._extend({
        _objectClass: e.Status,
        _sinceId: 0,
        _maxId: 0,
        _inboxType: "default",
        _owner: null,
        _newObject: function() {
          return new e.Status
        },
        _createRequest: function(e, t) {
          return o("subscribe/statuses", null, null, "GET", e || this.toJSON(), t)
        },
        sinceId: function(e) {
          return this._sinceId = e, this
        },
        maxId: function(e) {
          return this._maxId = e, this
        },
        owner: function(e) {
          return this._owner = e, this
        },
        inboxType: function(e) {
          return this._inboxType = e, this
        },
        toJSON: function() {
          var t = e.InboxQuery.__super__.toJSON.call(this);
          return t.owner = e._encode(this._owner), t.inboxType = e._encode(this._inboxType), t.sinceId = e._encode(this._sinceId), t.maxId = e._encode(this._maxId), t
        }
      }), e.Status.inboxQuery = function(t, n) {
        var r = new e.InboxQuery(e.Status);
        return t && (r._owner = t), n && (r._inboxType = n), r
      }
    }
  }, function(e, t, n) {
    "use strict";
    e.exports = []
  }, function(e, t, n) {
    "use strict";
    var r = n(19),
      i = ["Weapp"].concat(n(48));
    e.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")"
  }, function(e, t, n) {
    "use strict";
    var r = n(8),
      i = n(6)("cos"),
      o = n(1);
    e.exports = function(e, t, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
      var a = e.upload_url + "?sign=" + encodeURIComponent(e.token);
      return new o(function(e, o) {
        var u = r("POST", a).field("fileContent", t).field("op", "upload");
        s.onprogress && u.on("progress", s.onprogress), u.end(function(t, r) {
          if (r && i(r.status, r.body, r.text), t) return r && (t.statusCode = r.status, t.responseText = r.text, t.response = r.body), o(t);
          e(n)
        })
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(8),
      i = n(1),
      o = n(6)("qiniu");
    e.exports = function(e, t, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
      var a = e.token;
      return new i(function(e, i) {
        var u = r("POST", "https://up.qbox.me").field("file", t).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);
        s.onprogress && u.on("progress", s.onprogress), u.end(function(t, r) {
          if (r && o(r.status, r.body, r.text), t) return r && (t.statusCode = r.status, t.responseText = r.text, t.response = r.body), i(t);
          e(n)
        })
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(8);
    n(1);
    e.exports = function(e, t, n) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId, new Promise(function(o, s) {
        var a = r("PUT", e.upload_url).set("Content-Type", n.get("mime_type")).send(t);
        i.onprogress && a.on("progress", i.onprogress), a.end(function(e, t) {
          if (e) return t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), s(e);
          o(n)
        })
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(4),
      o = n(2)._request,
      s = n(1),
      a = function() {
        if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("Weapp Login is only available in Weapp");
        return new s(function(e, t) {
          wx.login({
            success: function(n) {
              var r = n.code,
                i = n.errMsg;
              r ? e(r) : t(new Error(i))
            }
          })
        })
      };
    e.exports = function(e) {
      e.User = e.Object.extend("_User", {
        _isCurrentUser: !1,
        _mergeMagicFields: function(t) {
          t.sessionToken && (this._sessionToken = t.sessionToken, delete t.sessionToken), e.User.__super__._mergeMagicFields.call(this, t)
        },
        _cleanupAuthData: function() {
          if (this.isCurrent()) {
            var t = this.get("authData");
            t && e._objectEach(this.get("authData"), function(e, n) {
              t[n] || delete t[n]
            })
          }
        },
        _synchronizeAllAuthData: function() {
          if (this.get("authData")) {
            var t = this;
            e._objectEach(this.get("authData"), function(e, n) {
              t._synchronizeAuthData(n)
            })
          }
        },
        _synchronizeAuthData: function(t) {
          if (this.isCurrent()) {
            var n;
            r.isString(t) ? (n = t, t = e.User._authProviders[n]) : n = t.getAuthType();
            var i = this.get("authData");
            if (i && t) {
              t.restoreAuthentication(i[n]) || this._unlinkFrom(t)
            }
          }
        },
        _handleSaveResult: function(t) {
          return t && !e._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !t && !this.isCurrent() || e._config.disableCurrentUser ? s.resolve() : s.resolve(e.User._saveCurrentUser(this))
        },
        _linkWith: function(t, n) {
          var i, o = this;
          if (r.isString(t) ? (i = t, t = e.User._authProviders[t]) : i = t.getAuthType(), n) {
            var s = this.get("authData") || {};
            return s[i] = n, this.save({
              authData: s
            }).then(function(e) {
              return e._handleSaveResult(!0).then(function() {
                return e
              })
            })
          }
          return t.authenticate().then(function(e) {
            return o._linkWith(t, e)
          })
        },
        linkWithWeapp: function() {
          var e = this;
          return a().then(function(t) {
            return e._linkWith("lc_weapp", {
              code: t
            })
          })
        },
        _unlinkFrom: function(t) {
          var n = this;
          return r.isString(t) && (t = e.User._authProviders[t]), this._linkWith(t, null).then(function(e) {
            return n._synchronizeAuthData(t), e
          })
        },
        _isLinked: function(e) {
          var t;
          return t = r.isString(e) ? e : e.getAuthType(), !!(this.get("authData") || {})[t]
        },
        logOut: function() {
          this._logOutWithAll(), this._isCurrentUser = !1
        },
        _logOutWithAll: function() {
          if (this.get("authData")) {
            var t = this;
            e._objectEach(this.get("authData"), function(e, n) {
              t._logOutWith(n)
            })
          }
        },
        _logOutWith: function(t) {
          this.isCurrent() && (r.isString(t) && (t = e.User._authProviders[t]), t && t.deauthenticate && t.deauthenticate())
        },
        signUp: function(e, t) {
          var n = e && e.username || this.get("username");
          if (!n || "" === n) throw new i(i.OTHER_CAUSE, "Cannot sign up user with an empty name.");
          var r = e && e.password || this.get("password");
          if (!r || "" === r) throw new i(i.OTHER_CAUSE, "Cannot sign up user with an empty password.");
          return this.save(e, t).then(function(e) {
            return e._handleSaveResult(!0).then(function() {
              return e
            })
          })
        },
        signUpOrlogInWithMobilePhone: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e && e.mobilePhoneNumber || this.get("mobilePhoneNumber");
          if (!n || "" === n) throw new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
          var r = e && e.smsCode || this.get("smsCode");
          if (!r || "" === r) throw new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
          return t._makeRequest = function(e, t, n, r, i) {
            return o("usersByMobilePhone", null, null, "POST", i)
          }, this.save(e, t).then(function(e) {
            return delete e.attributes.smsCode, delete e._serverData.smsCode, e._handleSaveResult(!0).then(function() {
              return e
            })
          })
        },
        logIn: function() {
          var e = this;
          return o("login", null, null, "POST", this.toJSON()).then(function(t) {
            var n = e.parse(t);
            return e._finishFetch(n), e._handleSaveResult(!0).then(function() {
              return n.smsCode || delete e.attributes.smsCode, e
            })
          })
        },
        save: function(t, n, i) {
          var o, s;
          return r.isObject(t) || r.isNull(t) || r.isUndefined(t) ? (o = t, s = n) : (o = {}, o[t] = n, s = i), s = s || {}, e.Object.prototype.save.call(this, o, s).then(function(e) {
            return e._handleSaveResult(!1).then(function() {
              return e
            })
          })
        },
        follow: function(e, t) {
          if (!this.id) throw new Error("Please signin.");
          if (!e) throw new Error("Invalid target user.");
          var n = r.isString(e) ? e : e.id;
          if (!n) throw new Error("Invalid target user.");
          var i = "users/" + this.id + "/friendship/" + n;
          return o(i, null, null, "POST", null, t)
        },
        unfollow: function(e, t) {
          if (!this.id) throw new Error("Please signin.");
          if (!e) throw new Error("Invalid target user.");
          var n = r.isString(e) ? e : e.id;
          if (!n) throw new Error("Invalid target user.");
          var i = "users/" + this.id + "/friendship/" + n;
          return o(i, null, null, "DELETE", null, t)
        },
        followerQuery: function() {
          return e.User.followerQuery(this.id)
        },
        followeeQuery: function() {
          return e.User.followeeQuery(this.id)
        },
        fetch: function(t, n) {
          return e.Object.prototype.fetch.call(this, t, n).then(function(e) {
            return e._handleSaveResult(!1).then(function() {
              return e
            })
          })
        },
        updatePassword: function(e, t, n) {
          var r = "users/" + this.id + "/updatePassword";
          return o(r, null, null, "PUT", {
            old_password: e,
            new_password: t
          }, n)
        },
        isCurrent: function() {
          return this._isCurrentUser
        },
        getUsername: function() {
          return this.get("username")
        },
        getMobilePhoneNumber: function() {
          return this.get("mobilePhoneNumber")
        },
        setMobilePhoneNumber: function(e, t) {
          return this.set("mobilePhoneNumber", e, t)
        },
        setUsername: function(e, t) {
          return this.set("username", e, t)
        },
        setPassword: function(e, t) {
          return this.set("password", e, t)
        },
        getEmail: function() {
          return this.get("email")
        },
        setEmail: function(e, t) {
          return this.set("email", e, t)
        },
        authenticated: function() {
          return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), !!this._sessionToken && !e._config.disableCurrentUser && e.User.current() && e.User.current().id === this.id
        },
        isAuthenticated: function() {
          var t = this;
          return s.resolve().then(function() {
            return !!t._sessionToken && e.User._fetchUserBySessionToken(t._sessionToken).then(function() {
              return !0
            }, function(e) {
              if (211 === e.code) return !1;
              throw e
            })
          })
        },
        getSessionToken: function() {
          return this._sessionToken
        },
        refreshSessionToken: function(e) {
          var t = this;
          return o("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, e).then(function(e) {
            return t._finishFetch(e), t._handleSaveResult(!0).then(function() {
              return t
            })
          })
        },
        getRoles: function(t) {
          return e.Relation.reverseQuery("_Role", "users", this).find(t)
        }
      }, {
        _currentUser: null,
        _currentUserMatchesDisk: !1,
        _CURRENT_USER_KEY: "currentUser",
        _authProviders: {},
        signUp: function(t, n, r, i) {
          return r = r || {}, r.username = t, r.password = n, e.Object._create("_User").signUp(r, i)
        },
        logIn: function(t, n, r) {
          var i = e.Object._create("_User");
          return i._finishFetch({
            username: t,
            password: n
          }), i.logIn(r)
        },
        become: function(e) {
          return this._fetchUserBySessionToken(e).then(function(e) {
            return e._handleSaveResult(!0).then(function() {
              return e
            })
          })
        },
        _fetchUserBySessionToken: function(t) {
          var n = e.Object._create("_User");
          return o("users", "me", null, "GET", {
            session_token: t
          }).then(function(e) {
            var t = n.parse(e);
            return n._finishFetch(t), n
          })
        },
        logInWithMobilePhoneSmsCode: function(t, n, r) {
          var i = e.Object._create("_User");
          return i._finishFetch({
            mobilePhoneNumber: t,
            smsCode: n
          }), i.logIn(r)
        },
        signUpOrlogInWithMobilePhone: function(t, n, r, i) {
          return r = r || {}, r.mobilePhoneNumber = t, r.smsCode = n, e.Object._create("_User").signUpOrlogInWithMobilePhone(r, i)
        },
        logInWithMobilePhone: function(t, n, r) {
          var i = e.Object._create("_User");
          return i._finishFetch({
            mobilePhoneNumber: t,
            password: n
          }), i.logIn(r)
        },
        signUpOrlogInWithAuthData: function(t, n) {
          return e.User._logInWith(n, t)
        },
        loginWithWeapp: function() {
          var e = this;
          return a().then(function(t) {
            return e.signUpOrlogInWithAuthData({
              code: t
            }, "lc_weapp")
          })
        },
        associateWithAuthData: function(e, t, n) {
          return e._linkWith(t, n)
        },
        logOut: function() {
          return e._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), s.resolve(null)) : (null !== e.User._currentUser && (e.User._currentUser._logOutWithAll(), e.User._currentUser._isCurrentUser = !1), e.User._currentUserMatchesDisk = !0, e.User._currentUser = null, e.localStorage.removeItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(e._refreshSubscriptionId))
        },
        followerQuery: function(t) {
          if (!t || !r.isString(t)) throw new Error("Invalid user object id.");
          var n = new e.FriendShipQuery("_Follower");
          return n._friendshipTag = "follower", n.equalTo("user", e.Object.createWithoutData("_User", t)), n
        },
        followeeQuery: function(t) {
          if (!t || !r.isString(t)) throw new Error("Invalid user object id.");
          var n = new e.FriendShipQuery("_Followee");
          return n._friendshipTag = "followee", n.equalTo("user", e.Object.createWithoutData("_User", t)), n
        },
        requestPasswordReset: function(e) {
          return o("requestPasswordReset", null, null, "POST", {
            email: e
          })
        },
        requestEmailVerify: function(e) {
          return o("requestEmailVerify", null, null, "POST", {
            email: e
          })
        },
        requestMobilePhoneVerify: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
              mobilePhoneNumber: e
            };
          return t.validateToken && (n.validate_token = t.validateToken), o("requestMobilePhoneVerify", null, null, "POST", n, t)
        },
        requestPasswordResetBySmsCode: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
              mobilePhoneNumber: e
            };
          return t.validateToken && (n.validate_token = t.validateToken), o("requestPasswordResetBySmsCode", null, null, "POST", n, t)
        },
        resetPasswordBySmsCode: function(e, t) {
          return o("resetPasswordBySmsCode", null, e, "PUT", {
            password: t
          })
        },
        verifyMobilePhone: function(e) {
          return o("verifyMobilePhone", null, e, "POST", null)
        },
        requestLoginSmsCode: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
              mobilePhoneNumber: e
            };
          return t.validateToken && (n.validate_token = t.validateToken), o("requestLoginSmsCode", null, null, "POST", n, t)
        },
        currentAsync: function() {
          return e._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), s.resolve(null)) : e.User._currentUser ? s.resolve(e.User._currentUser) : e.User._currentUserMatchesDisk ? s.resolve(e.User._currentUser) : e.localStorage.getItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function(t) {
            if (!t) return null;
            e.User._currentUserMatchesDisk = !0, e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
            var n = JSON.parse(t);
            return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser
          })
        },
        current: function() {
          if (e._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;
          if (e.User._currentUser) return e.User._currentUser;
          if (e.User._currentUserMatchesDisk) return e.User._currentUser;
          e.User._currentUserMatchesDisk = !0;
          var t = e.localStorage.getItem(e._getAVPath(e.User._CURRENT_USER_KEY));
          if (!t) return null;
          e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
          var n = JSON.parse(t);
          return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser
        },
        _saveCurrentUser: function(t) {
          var n;
          return n = e.User._currentUser !== t ? e.User.logOut() : s.resolve(), n.then(function() {
            t._isCurrentUser = !0, e.User._currentUser = t;
            var n = t.toJSON();
            return n._id = t.id, n._sessionToken = t._sessionToken, e.localStorage.setItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function() {
              return e.User._currentUserMatchesDisk = !0, e._refreshSubscriptionId()
            })
          })
        },
        _registerAuthenticationProvider: function(t) {
          e.User._authProviders[t.getAuthType()] = t, !e._config.disableCurrentUser && e.User.current() && e.User.current()._synchronizeAuthData(t.getAuthType())
        },
        _logInWith: function(t, n) {
          return e.Object._create("_User")._linkWith(t, n)
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = n(0),
        i = (n(1), {}),
        o = ["getItem", "setItem", "removeItem", "clear"],
        s = t.localStorage;
      try {
        var a = "__storejs__";
        if (s.setItem(a, a), s.getItem(a) != a) throw new Error;
        s.removeItem(a)
      } catch (e) {
        s = n(65)
      }
      r(o).each(function(e) {
        i[e] = function() {
          return s[e].apply(s, arguments)
        }
      }), i.async = !1, e.exports = i
    }).call(t, n(7))
  }, function(e, t, n) {
    "use strict";
    var r = function(e, t) {
      var n;
      e.indexOf("base64") < 0 ? n = atob(e) : e.split(",")[0].indexOf("base64") >= 0 ? (t = t || e.split(",")[0].split(":")[1].split(";")[0], n = atob(e.split(",")[1])) : n = unescape(e.split(",")[1]);
      for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
      return new Blob([r], {
        type: t
      })
    };
    e.exports = r
  }, function(e, t, n) {
    function r(e) {
      if (e) return i(e)
    }

    function i(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e
    }
    e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, r.prototype.once = function(e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments)
      }
      return n.fn = t, this.on(e, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + e], this;
      for (var r, i = 0; i < n.length; i++)
        if ((r = n[i]) === t || r.fn === t) {
          n.splice(i, 1);
          break
        }
      return this
    }, r.prototype.emit = function(e) {
      this._callbacks = this._callbacks || {};
      var t = [].slice.call(arguments, 1),
        n = this._callbacks["$" + e];
      if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t)
      }
      return this
    }, r.prototype.listeners = function(e) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, r.prototype.hasListeners = function(e) {
      return !!this.listeners(e).length
    }
  }, function(e, t) {
    ! function() {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        n = {
          rotl: function(e, t) {
            return e << t | e >>> 32 - t
          },
          rotr: function(e, t) {
            return e << 32 - t | e >>> t
          },
          endian: function(e) {
            if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
            for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
            return e
          },
          randomBytes: function(e) {
            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
            return t
          },
          bytesToWords: function(e) {
            for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
            return t
          },
          wordsToBytes: function(e) {
            for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
            return t
          },
          bytesToHex: function(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
            return t.join("")
          },
          hexToBytes: function(e) {
            for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
            return t
          },
          bytesToBase64: function(e) {
            for (var n = [], r = 0; r < e.length; r += 3)
              for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
            return n.join("")
          },
          base64ToBytes: function(e) {
            e = e.replace(/[^A-Z0-9+\/]/gi, "");
            for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
            return n
          }
        };
      e.exports = n
    }()
  }, function(e, t, n) {
    function r(e) {
      var n, r = 0;
      for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
      return t.colors[Math.abs(r) % t.colors.length]
    }

    function i(e) {
      function n() {
        if (n.enabled) {
          var e = n,
            r = +new Date,
            i = r - (c || r);
          e.diff = i, e.prev = c, e.curr = r, c = r;
          for (var o = new Array(arguments.length), s = 0; s < o.length; s++) o[s] = arguments[s];
          o[0] = t.coerce(o[0]), "string" != typeof o[0] && o.unshift("%O");
          var a = 0;
          o[0] = o[0].replace(/%([a-zA-Z%])/g, function(n, r) {
            if ("%%" === n) return n;
            a++;
            var i = t.formatters[r];
            if ("function" == typeof i) {
              var s = o[a];
              n = i.call(e, s), o.splice(a, 1), a--
            }
            return n
          }), t.formatArgs.call(e, o);
          (n.log || t.log || console.log.bind(console)).apply(e, o)
        }
      }
      return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), "function" == typeof t.init && t.init(n), n
    }

    function o(e) {
      t.save(e), t.names = [], t.skips = [];
      for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (e = n[i].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
    }

    function s() {
      t.enable("")
    }

    function a(e) {
      var n, r;
      for (n = 0, r = t.skips.length; n < r; n++)
        if (t.skips[n].test(e)) return !1;
      for (n = 0, r = t.names.length; n < r; n++)
        if (t.names[n].test(e)) return !0;
      return !1
    }

    function u(e) {
      return e instanceof Error ? e.stack || e.message : e
    }
    t = e.exports = i.debug = i.default = i, t.coerce = u, t.disable = s, t.enable = o, t.enabled = a, t.humanize = n(67), t.names = [], t.skips = [], t.formatters = {};
    var c
  }, function(e, t, n) {
    (function(t) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   4.1.0
       */
      ! function(t, n) {
        e.exports = n()
      }(0, function() {
        "use strict";

        function e(e) {
          return "function" == typeof e || "object" == typeof e && null !== e
        }

        function r(e) {
          return "function" == typeof e
        }

        function i(e) {
          W = e
        }

        function o(e) {
          z = e
        }

        function s() {
          return void 0 !== Y ? function() {
            Y(u)
          } : a()
        }

        function a() {
          var e = setTimeout;
          return function() {
            return e(u, 1)
          }
        }

        function u() {
          for (var e = 0; e < V; e += 2) {
            (0, $[e])($[e + 1]), $[e] = void 0, $[e + 1] = void 0
          }
          V = 0
        }

        function c(e, t) {
          var n = arguments,
            r = this,
            i = new this.constructor(l);
          void 0 === i[Z] && x(i);
          var o = r._state;
          return o ? function() {
            var e = n[o - 1];
            z(function() {
              return I(o, i, e, r._result)
            })
          }() : S(r, i, e, t), i
        }

        function f(e) {
          var t = this;
          if (e && "object" == typeof e && e.constructor === t) return e;
          var n = new t(l);
          return _(n, e), n
        }

        function l() {}

        function h() {
          return new TypeError("You cannot resolve a promise with itself")
        }

        function d() {
          return new TypeError("A promises callback cannot return that same promise.")
        }

        function p(e) {
          try {
            return e.then
          } catch (e) {
            return re.error = e, re
          }
        }

        function y(e, t, n, r) {
          try {
            e.call(t, n, r)
          } catch (e) {
            return e
          }
        }

        function v(e, t, n) {
          z(function(e) {
            var r = !1,
              i = y(n, t, function(n) {
                r || (r = !0, t !== n ? _(e, n) : w(e, n))
              }, function(t) {
                r || (r = !0, E(e, t))
              }, "Settle: " + (e._label || " unknown promise"));
            !r && i && (r = !0, E(e, i))
          }, e)
        }

        function g(e, t) {
          t._state === te ? w(e, t._result) : t._state === ne ? E(e, t._result) : S(t, void 0, function(t) {
            return _(e, t)
          }, function(t) {
            return E(e, t)
          })
        }

        function m(e, t, n) {
          t.constructor === e.constructor && n === c && t.constructor.resolve === f ? g(e, t) : n === re ? (E(e, re.error), re.error = null) : void 0 === n ? w(e, t) : r(n) ? v(e, t, n) : w(e, t)
        }

        function _(t, n) {
          t === n ? E(t, h()) : e(n) ? m(t, n, p(n)) : w(t, n)
        }

        function b(e) {
          e._onerror && e._onerror(e._result), T(e)
        }

        function w(e, t) {
          e._state === ee && (e._result = t, e._state = te, 0 !== e._subscribers.length && z(T, e))
        }

        function E(e, t) {
          e._state === ee && (e._state = ne, e._result = t, z(b, e))
        }

        function S(e, t, n, r) {
          var i = e._subscribers,
            o = i.length;
          e._onerror = null, i[o] = t, i[o + te] = n, i[o + ne] = r, 0 === o && e._state && z(T, e)
        }

        function T(e) {
          var t = e._subscribers,
            n = e._state;
          if (0 !== t.length) {
            for (var r = void 0, i = void 0, o = e._result, s = 0; s < t.length; s += 3) r = t[s], i = t[s + n], r ? I(n, r, i, o) : i(o);
            e._subscribers.length = 0
          }
        }

        function O() {
          this.error = null
        }

        function A(e, t) {
          try {
            return e(t)
          } catch (e) {
            return ie.error = e, ie
          }
        }

        function I(e, t, n, i) {
          var o = r(n),
            s = void 0,
            a = void 0,
            u = void 0,
            c = void 0;
          if (o) {
            if (s = A(n, i), s === ie ? (c = !0, a = s.error, s.error = null) : u = !0, t === s) return void E(t, d())
          } else s = i, u = !0;
          t._state !== ee || (o && u ? _(t, s) : c ? E(t, a) : e === te ? w(t, s) : e === ne && E(t, s))
        }

        function N(e, t) {
          try {
            t(function(t) {
              _(e, t)
            }, function(t) {
              E(e, t)
            })
          } catch (t) {
            E(e, t)
          }
        }

        function C() {
          return oe++
        }

        function x(e) {
          e[Z] = oe++, e._state = void 0, e._result = void 0, e._subscribers = []
        }

        function j(e, t) {
          this._instanceConstructor = e, this.promise = new e(l), this.promise[Z] || x(this.promise), q(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && w(this.promise, this._result))) : E(this.promise, P())
        }

        function P() {
          return new Error("Array Methods must be provided an Array")
        }

        function R(e) {
          return new j(this, e).promise
        }

        function k(e) {
          var t = this;
          return new t(q(e) ? function(n, r) {
            for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
          } : function(e, t) {
            return t(new TypeError("You must pass an array to race."))
          })
        }

        function L(e) {
          var t = this,
            n = new t(l);
          return E(n, e), n
        }

        function U() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function M() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function D(e) {
          this[Z] = C(), this._result = this._state = void 0, this._subscribers = [], l !== e && ("function" != typeof e && U(), this instanceof D ? N(this, e) : M())
        }

        function F() {
          var e = void 0;
          if (void 0 !== t) e = t;
          else if ("undefined" != typeof self) e = self;
          else try {
            e = Function("return this")()
          } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
          }
          var n = e.Promise;
          if (n) {
            var r = null;
            try {
              r = Object.prototype.toString.call(n.resolve())
            } catch (e) {}
            if ("[object Promise]" === r && !n.cast) return
          }
          e.Promise = D
        }
        var B = void 0;
        B = Array.isArray ? Array.isArray : function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        };
        var q = B,
          V = 0,
          Y = void 0,
          W = void 0,
          z = function(e, t) {
            $[V] = e, $[V + 1] = t, 2 === (V += 2) && (W ? W(u) : X())
          },
          J = "undefined" != typeof window ? window : void 0,
          G = J || {},
          H = G.MutationObserver || G.WebKitMutationObserver,
          Q = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
          K = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
          $ = new Array(1e3),
          X = void 0;
        X = Q ? function() {
          return function() {
            return process.nextTick(u)
          }
        }() : H ? function() {
          var e = 0,
            t = new H(u),
            n = document.createTextNode("");
          return t.observe(n, {
              characterData: !0
            }),
            function() {
              n.data = e = ++e % 2
            }
        }() : K ? function() {
          var e = new MessageChannel;
          return e.port1.onmessage = u,
            function() {
              return e.port2.postMessage(0)
            }
        }() : void 0 === J ? function() {
          try {
            var e = n(73);
            return Y = e.runOnLoop || e.runOnContext, s()
          } catch (e) {
            return a()
          }
        }() : a();
        var Z = Math.random().toString(36).substring(16),
          ee = void 0,
          te = 1,
          ne = 2,
          re = new O,
          ie = new O,
          oe = 0;
        return j.prototype._enumerate = function() {
          for (var e = this.length, t = this._input, n = 0; this._state === ee && n < e; n++) this._eachEntry(t[n], n)
        }, j.prototype._eachEntry = function(e, t) {
          var n = this._instanceConstructor,
            r = n.resolve;
          if (r === f) {
            var i = p(e);
            if (i === c && e._state !== ee) this._settledAt(e._state, t, e._result);
            else if ("function" != typeof i) this._remaining--, this._result[t] = e;
            else if (n === D) {
              var o = new n(l);
              m(o, e, i), this._willSettleAt(o, t)
            } else this._willSettleAt(new n(function(t) {
              return t(e)
            }), t)
          } else this._willSettleAt(r(e), t)
        }, j.prototype._settledAt = function(e, t, n) {
          var r = this.promise;
          r._state === ee && (this._remaining--, e === ne ? E(r, n) : this._result[t] = n), 0 === this._remaining && w(r, this._result)
        }, j.prototype._willSettleAt = function(e, t) {
          var n = this;
          S(e, void 0, function(e) {
            return n._settledAt(te, t, e)
          }, function(e) {
            return n._settledAt(ne, t, e)
          })
        }, D.all = R, D.race = k, D.resolve = f, D.reject = L, D._setScheduler = i, D._setAsap = o, D._asap = z, D.prototype = {
          constructor: D,
          then: c,
          catch: function(e) {
            return this.then(null, e)
          }
        }, D.polyfill = F, D.Promise = D, D
      })
    }).call(t, n(7))
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      for (var n = e[s][t]; null != n;) {
        if (n.kind === a) return n.listener;
        n = n.next
      }
      return null
    }

    function i(e, t, n) {
      "function" != typeof n && "object" != typeof n && (n = null);
      for (var r = null, i = e[s][t]; null != i;) i.kind === a ? null == r ? e[s][t] = i.next : r.next = i.next : r = i, i = i.next;
      null != n && (null == r ? e[s][t] = u(n, a) : r.next = u(n, a))
    }
    var o = n(10),
      s = o.LISTENERS,
      a = o.ATTRIBUTE,
      u = o.newNode;
    t.defineCustomEventTarget = function(e, t) {
      function n() {
        e.call(this)
      }
      var o = {
        constructor: {
          value: n,
          configurable: !0,
          writable: !0
        }
      };
      return t.forEach(function(e) {
        o["on" + e] = {
          get: function() {
            return r(this, e)
          },
          set: function(t) {
            i(this, e, t)
          },
          configurable: !0,
          enumerable: !0
        }
      }), n.prototype = Object.create(e.prototype, o), n
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(10).createUniqueKey,
      i = r("stop_immediate_propagation_flag"),
      o = r("canceled_flag"),
      s = r("original_event"),
      a = Object.freeze({
        stopPropagation: Object.freeze({
          value: function() {
            var e = this[s];
            "function" == typeof e.stopPropagation && e.stopPropagation()
          },
          writable: !0,
          configurable: !0
        }),
        stopImmediatePropagation: Object.freeze({
          value: function() {
            this[i] = !0;
            var e = this[s];
            "function" == typeof e.stopImmediatePropagation && e.stopImmediatePropagation()
          },
          writable: !0,
          configurable: !0
        }),
        preventDefault: Object.freeze({
          value: function() {
            !0 === this.cancelable && (this[o] = !0);
            var e = this[s];
            "function" == typeof e.preventDefault && e.preventDefault()
          },
          writable: !0,
          configurable: !0
        }),
        defaultPrevented: Object.freeze({
          get: function() {
            return this[o]
          },
          enumerable: !0,
          configurable: !0
        })
      });
    t.STOP_IMMEDIATE_PROPAGATION_FLAG = i, t.createEventWrapper = function(e, t) {
      var n = "number" == typeof e.timeStamp ? e.timeStamp : Date.now(),
        r = {
          type: {
            value: e.type,
            enumerable: !0
          },
          target: {
            value: t,
            enumerable: !0
          },
          currentTarget: {
            value: t,
            enumerable: !0
          },
          eventPhase: {
            value: 2,
            enumerable: !0
          },
          bubbles: {
            value: Boolean(e.bubbles),
            enumerable: !0
          },
          cancelable: {
            value: Boolean(e.cancelable),
            enumerable: !0
          },
          timeStamp: {
            value: n,
            enumerable: !0
          },
          isTrusted: {
            value: !1,
            enumerable: !0
          }
        };
      return r[i] = {
        value: !1,
        writable: !0
      }, r[o] = {
        value: !1,
        writable: !0
      }, r[s] = {
        value: e
      }, void 0 !== e.detail && (r.detail = {
        value: e.detail,
        enumerable: !0
      }), Object.create(Object.create(e, a), r)
    }
  }, function(e, t, n) {
    "use strict";

    function r() {}

    function i(e, t, n) {
      this.fn = e, this.context = t, this.once = n || !1
    }

    function o() {
      this._events = new r, this._eventsCount = 0
    }
    var s = Object.prototype.hasOwnProperty,
      a = "~";
    Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (a = !1)), o.prototype.eventNames = function() {
      var e, t, n = [];
      if (0 === this._eventsCount) return n;
      for (t in e = this._events) s.call(e, t) && n.push(a ? t.slice(1) : t);
      return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
    }, o.prototype.listeners = function(e, t) {
      var n = a ? a + e : e,
        r = this._events[n];
      if (t) return !!r;
      if (!r) return [];
      if (r.fn) return [r.fn];
      for (var i = 0, o = r.length, s = new Array(o); i < o; i++) s[i] = r[i].fn;
      return s
    }, o.prototype.emit = function(e, t, n, r, i, o) {
      var s = a ? a + e : e;
      if (!this._events[s]) return !1;
      var u, c, f = this._events[s],
        l = arguments.length;
      if (f.fn) {
        switch (f.once && this.removeListener(e, f.fn, void 0, !0), l) {
          case 1:
            return f.fn.call(f.context), !0;
          case 2:
            return f.fn.call(f.context, t), !0;
          case 3:
            return f.fn.call(f.context, t, n), !0;
          case 4:
            return f.fn.call(f.context, t, n, r), !0;
          case 5:
            return f.fn.call(f.context, t, n, r, i), !0;
          case 6:
            return f.fn.call(f.context, t, n, r, i, o), !0
        }
        for (c = 1, u = new Array(l - 1); c < l; c++) u[c - 1] = arguments[c];
        f.fn.apply(f.context, u)
      } else {
        var h, d = f.length;
        for (c = 0; c < d; c++) switch (f[c].once && this.removeListener(e, f[c].fn, void 0, !0), l) {
          case 1:
            f[c].fn.call(f[c].context);
            break;
          case 2:
            f[c].fn.call(f[c].context, t);
            break;
          case 3:
            f[c].fn.call(f[c].context, t, n);
            break;
          case 4:
            f[c].fn.call(f[c].context, t, n, r);
            break;
          default:
            if (!u)
              for (h = 1, u = new Array(l - 1); h < l; h++) u[h - 1] = arguments[h];
            f[c].fn.apply(f[c].context, u)
        }
      }
      return !0
    }, o.prototype.on = function(e, t, n) {
      var r = new i(t, n || this),
        o = a ? a + e : e;
      return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
    }, o.prototype.once = function(e, t, n) {
      var r = new i(t, n || this, !0),
        o = a ? a + e : e;
      return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
    }, o.prototype.removeListener = function(e, t, n, i) {
      var o = a ? a + e : e;
      if (!this._events[o]) return this;
      if (!t) return 0 == --this._eventsCount ? this._events = new r : delete this._events[o], this;
      var s = this._events[o];
      if (s.fn) s.fn !== t || i && !s.once || n && s.context !== n || (0 == --this._eventsCount ? this._events = new r : delete this._events[o]);
      else {
        for (var u = 0, c = [], f = s.length; u < f; u++)(s[u].fn !== t || i && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
        c.length ? this._events[o] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new r : delete this._events[o]
      }
      return this
    }, o.prototype.removeAllListeners = function(e) {
      var t;
      return e ? (t = a ? a + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new r : delete this._events[t])) : (this._events = new r, this._eventsCount = 0), this
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
      return this
    }, o.prefixed = a, o.EventEmitter = o, e.exports = o
  }, function(e, t) {
    function n(e) {
      return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    function r(e) {
      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    e.exports = function(e) {
      return null != e && (n(e) || r(e) || !!e._isBuffer)
    }
  }, function(e, t, n) {
    (function(e) {
      ! function(e, n) {
        n(t)
      }(0, function(t) {
        "use strict";

        function n() {
          throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
        }

        function r(e) {
          return e && e.__esModule ? e.default : e
        }

        function i(e, t) {
          return t = {
            exports: {}
          }, e(t, t.exports), t.exports
        }

        function o(e) {
          if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e)
        }

        function s(e, t) {
          for (var n = e[pi][t]; null != n;) {
            if (n.kind === yi) return n.listener;
            n = n.next
          }
          return null
        }

        function a(e, t, n) {
          "function" != typeof n && "object" != typeof n && (n = null);
          for (var r = null, i = e[pi][t]; null != i;) i.kind === yi ? null == r ? e[pi][t] = i.next : r.next = i.next : r = i, i = i.next;
          null != n && (null == r ? e[pi][t] = vi(n, yi) : r.next = vi(n, yi))
        }

        function u(e) {
          this.status = e.statusCode, this.statusText = e.statusCode;
          var t = e.data;
          "string" != typeof t && (t = ui(t)), this.responseText = this.response = t, this.readyState = ji, this.dispatchEvent({
            type: "readystatechange"
          })
        }

        function c(e) {
          "" !== e.message && qi && (qi._readyState = Fi, qi.dispatchEvent({
            type: "error",
            message: e.errMsg
          }))
        }

        function f(e) {
          if (e = String(e), !(e.length > 100)) {
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (t) {
              var n = parseFloat(t[1]);
              switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return n * ns;
                case "days":
                case "day":
                case "d":
                  return n * ts;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return n * es;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return n * Zo;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return n * Xo;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return n;
                default:
                  return
              }
            }
          }
        }

        function l(e) {
          return e >= ts ? Math.round(e / ts) + "d" : e >= es ? Math.round(e / es) + "h" : e >= Zo ? Math.round(e / Zo) + "m" : e >= Xo ? Math.round(e / Xo) + "s" : e + "ms"
        }

        function h(e) {
          return d(e, ts, "day") || d(e, es, "hour") || d(e, Zo, "minute") || d(e, Xo, "second") || e + " ms"
        }

        function d(e, t, n) {
          if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }

        function p(e) {
          return "[object Array]" === as.call(e)
        }

        function y(e) {
          return "undefined" != typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(e)
        }

        function v(e) {
          return "[object ArrayBuffer]" === as.call(e)
        }

        function g(e) {
          return "undefined" != typeof FormData && e instanceof FormData
        }

        function m(e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }

        function _(e) {
          return "string" == typeof e
        }

        function b(e) {
          return "number" == typeof e
        }

        function w(e) {
          return void 0 === e
        }

        function E(e) {
          return null !== e && "object" === (void 0 === e ? "undefined" : Dr(e))
        }

        function S(e) {
          return "[object Date]" === as.call(e)
        }

        function T(e) {
          return "[object File]" === as.call(e)
        }

        function O(e) {
          return "[object Blob]" === as.call(e)
        }

        function A(e) {
          return "[object Function]" === as.call(e)
        }

        function I(e) {
          return E(e) && A(e.pipe)
        }

        function N(e) {
          return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }

        function C(e) {
          return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }

        function x() {
          return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        }

        function j(e, t) {
          if (null !== e && void 0 !== e)
            if ("object" === (void 0 === e ? "undefined" : Dr(e)) || p(e) || (e = [e]), p(e))
              for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
        }

        function P() {
          function e(e, n) {
            "object" === Dr(t[n]) && "object" === (void 0 === e ? "undefined" : Dr(e)) ? t[n] = P(t[n], e) : t[n] = e
          }
          for (var t = {}, n = 0, r = arguments.length; n < r; n++) j(arguments[n], e);
          return t
        }

        function R(e, t, n) {
          return j(t, function(t, r) {
            e[r] = n && "function" == typeof t ? ss(t, n) : t
          }), e
        }

        function k(e) {
          return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        function L() {
          this.message = "String contains an invalid character"
        }

        function U(e) {
          for (var t, n, r = String(e), i = "", o = 0, s = vs; r.charAt(0 | o) || (s = "=", o % 1); i += s.charAt(63 & t >> 8 - o % 1 * 8)) {
            if ((n = r.charCodeAt(o += .75)) > 255) throw new L;
            t = t << 8 | n
          }
          return i
        }

        function M(e, t) {
          !us.isUndefined(e) && us.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }

        function D() {
          this.handlers = []
        }

        function F(e) {
          e.cancelToken && e.cancelToken.throwIfRequested()
        }

        function B(e) {
          this.defaults = e, this.interceptors = {
            request: new Ts,
            response: new Ts
          }
        }

        function q(e) {
          this.message = e
        }

        function V(e) {
          if ("function" != typeof e) throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Pn(function(e) {
            t = e
          });
          var n = this;
          e(function(e) {
            n.reason || (n.reason = new js(e), t(n.reason))
          })
        }

        function Y(e) {
          var t = new xs(e),
            n = ss(xs.prototype.request, t);
          return us.extend(n, xs.prototype, t), us.extend(n, t), n
        }

        function W(e) {
          var t = da.call(e, ya),
            n = e[ya];
          try {
            e[ya] = void 0;
            var r = !0
          } catch (e) {}
          var i = pa.call(e);
          return r && (t ? e[ya] = n : delete e[ya]), i
        }

        function z(e) {
          return ma.call(e)
        }

        function J(e) {
          return null == e ? void 0 === e ? wa : ba : Ea && Ea in Object(e) ? va(e) : _a(e)
        }

        function G(e, t) {
          return function(n) {
            return e(t(n))
          }
        }

        function H(e) {
          return null != e && "object" == typeof e
        }

        function Q(e) {
          if (!Ia(e) || Sa(e) != Na) return !1;
          var t = Aa(e);
          if (null === t) return !0;
          var n = Pa.call(t, "constructor") && t.constructor;
          return "function" == typeof n && n instanceof n && ja.call(n) == Ra
        }

        function K(e, t, n, r, i) {
          var o = {};
          return Object.keys(r).forEach(function(e) {
            o[e] = r[e]
          }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) {
            return r(e, t, n) || n
          }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
        }
        var $ = window && window.process || {};
        $.env = $.env || {};
        var X = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
          Z = Math.ceil,
          ee = Math.floor,
          te = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? ee : Z)(e)
          },
          ne = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
          },
          re = i(function(e) {
            var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = t)
          }),
          ie = i(function(e) {
            var t = e.exports = {
              version: "2.4.0"
            };
            "number" == typeof __e && (__e = t)
          }),
          oe = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
          },
          se = function(e, t, n) {
            if (oe(e), void 0 === t) return e;
            switch (n) {
              case 1:
                return function(n) {
                  return e.call(t, n)
                };
              case 2:
                return function(n, r) {
                  return e.call(t, n, r)
                };
              case 3:
                return function(n, r, i) {
                  return e.call(t, n, r, i)
                }
            }
            return function() {
              return e.apply(t, arguments)
            }
          },
          ae = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
          },
          ue = function(e) {
            if (!ae(e)) throw TypeError(e + " is not an object!");
            return e
          },
          ce = function(e) {
            try {
              return !!e()
            } catch (e) {
              return !0
            }
          },
          fe = !ce(function() {
            return 7 != Object.defineProperty({}, "a", {
              get: function() {
                return 7
              }
            }).a
          }),
          le = re.document,
          he = ae(le) && ae(le.createElement),
          de = function(e) {
            return he ? le.createElement(e) : {}
          },
          pe = !fe && !ce(function() {
            return 7 != Object.defineProperty(de("div"), "a", {
              get: function() {
                return 7
              }
            }).a
          }),
          ye = function(e, t) {
            if (!ae(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !ae(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !ae(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !ae(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
          },
          ve = Object.defineProperty,
          ge = fe ? Object.defineProperty : function(e, t, n) {
            if (ue(e), t = ye(t, !0), ue(n), pe) try {
              return ve(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
          },
          me = {
            f: ge
          },
          _e = function(e, t) {
            return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t
            }
          },
          be = fe ? function(e, t, n) {
            return me.f(e, t, _e(1, n))
          } : function(e, t, n) {
            return e[t] = n, e
          },
          we = function(e, t, n) {
            var r, i, o, s = e & we.F,
              a = e & we.G,
              u = e & we.S,
              c = e & we.P,
              f = e & we.B,
              l = e & we.W,
              h = a ? ie : ie[t] || (ie[t] = {}),
              d = h.prototype,
              p = a ? re : u ? re[t] : (re[t] || {}).prototype;
            a && (n = t);
            for (r in n)(i = !s && p && void 0 !== p[r]) && r in h || (o = i ? p[r] : n[r], h[r] = a && "function" != typeof p[r] ? n[r] : f && i ? se(o, re) : l && p[r] == o ? function(e) {
              var t = function(t, n, r) {
                if (this instanceof e) {
                  switch (arguments.length) {
                    case 0:
                      return new e;
                    case 1:
                      return new e(t);
                    case 2:
                      return new e(t, n)
                  }
                  return new e(t, n, r)
                }
                return e.apply(this, arguments)
              };
              return t.prototype = e.prototype, t
            }(o) : c && "function" == typeof o ? se(Function.call, o) : o, c && ((h.virtual || (h.virtual = {}))[r] = o, e & we.R && d && !d[r] && be(d, r, o)))
          };
        we.F = 1, we.G = 2, we.S = 4, we.P = 8, we.B = 16, we.W = 32, we.U = 64, we.R = 128;
        var Ee = we,
          Se = be,
          Te = {}.hasOwnProperty,
          Oe = function(e, t) {
            return Te.call(e, t)
          },
          Ae = {},
          Ie = {}.toString,
          Ne = function(e) {
            return Ie.call(e).slice(8, -1)
          },
          Ce = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == Ne(e) ? e.split("") : Object(e)
          },
          xe = function(e) {
            return Ce(ne(e))
          },
          je = Math.min,
          Pe = function(e) {
            return e > 0 ? je(te(e), 9007199254740991) : 0
          },
          Re = Math.max,
          ke = Math.min,
          Le = function(e, t) {
            return e = te(e), e < 0 ? Re(e + t, 0) : ke(e, t)
          },
          Ue = re["__core-js_shared__"] || (re["__core-js_shared__"] = {}),
          Me = function(e) {
            return Ue[e] || (Ue[e] = {})
          },
          De = 0,
          Fe = Math.random(),
          Be = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++De + Fe).toString(36))
          },
          qe = Me("keys"),
          Ve = function(e) {
            return qe[e] || (qe[e] = Be(e))
          },
          Ye = function(e) {
            return function(t, n, r) {
              var i, o = xe(t),
                s = Pe(o.length),
                a = Le(r, s);
              if (e && n != n) {
                for (; s > a;)
                  if ((i = o[a++]) != i) return !0
              } else
                for (; s > a; a++)
                  if ((e || a in o) && o[a] === n) return e || a || 0;
              return !e && -1
            }
          }(!1),
          We = Ve("IE_PROTO"),
          ze = function(e, t) {
            var n, r = xe(e),
              i = 0,
              o = [];
            for (n in r) n != We && Oe(r, n) && o.push(n);
            for (; t.length > i;) Oe(r, n = t[i++]) && (~Ye(o, n) || o.push(n));
            return o
          },
          Je = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
          Ge = Object.keys || function(e) {
            return ze(e, Je)
          },
          He = fe ? Object.defineProperties : function(e, t) {
            ue(e);
            for (var n, r = Ge(t), i = r.length, o = 0; i > o;) me.f(e, n = r[o++], t[n]);
            return e
          },
          Qe = re.document && document.documentElement,
          Ke = Ve("IE_PROTO"),
          $e = function() {},
          Xe = function() {
            var e, t = de("iframe"),
              n = Je.length;
            for (t.style.display = "none", Qe.appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), Xe = e.F; n--;) delete Xe.prototype[Je[n]];
            return Xe()
          },
          Ze = Object.create || function(e, t) {
            var n;
            return null !== e ? ($e.prototype = ue(e), n = new $e, $e.prototype = null, n[Ke] = e) : n = Xe(), void 0 === t ? n : He(n, t)
          },
          et = i(function(e) {
            var t = Me("wks"),
              n = re.Symbol,
              r = "function" == typeof n;
            (e.exports = function(e) {
              return t[e] || (t[e] = r && n[e] || (r ? n : Be)("Symbol." + e))
            }).store = t
          }),
          tt = me.f,
          nt = et("toStringTag"),
          rt = function(e, t, n) {
            e && !Oe(e = n ? e : e.prototype, nt) && tt(e, nt, {
              configurable: !0,
              value: t
            })
          },
          it = {};
        be(it, et("iterator"), function() {
          return this
        });
        var ot = function(e, t, n) {
            e.prototype = Ze(it, {
              next: _e(1, n)
            }), rt(e, t + " Iterator")
          },
          st = function(e) {
            return Object(ne(e))
          },
          at = Ve("IE_PROTO"),
          ut = Object.prototype,
          ct = Object.getPrototypeOf || function(e) {
            return e = st(e), Oe(e, at) ? e[at] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? ut : null
          },
          ft = et("iterator"),
          lt = !([].keys && "next" in [].keys()),
          ht = function() {
            return this
          },
          dt = function(e, t, n, r, i, o, s) {
            ot(n, t, r);
            var a, u, c, f = function(e) {
                if (!lt && e in p) return p[e];
                switch (e) {
                  case "keys":
                  case "values":
                    return function() {
                      return new n(this, e)
                    }
                }
                return function() {
                  return new n(this, e)
                }
              },
              l = t + " Iterator",
              h = "values" == i,
              d = !1,
              p = e.prototype,
              y = p[ft] || p["@@iterator"] || i && p[i],
              v = y || f(i),
              g = i ? h ? f("entries") : v : void 0,
              m = "Array" == t ? p.entries || y : y;
            if (m && (c = ct(m.call(new e))) !== Object.prototype && rt(c, l, !0), h && y && "values" !== y.name && (d = !0, v = function() {
                return y.call(this)
              }), s && (lt || d || !p[ft]) && be(p, ft, v), Ae[t] = v, Ae[l] = ht, i)
              if (a = {
                  values: h ? v : f("values"),
                  keys: o ? v : f("keys"),
                  entries: g
                }, s)
                for (u in a) u in p || Se(p, u, a[u]);
              else Ee(Ee.P + Ee.F * (lt || d), t, a);
            return a
          },
          pt = function(e) {
            return function(t, n) {
              var r, i, o = String(ne(t)),
                s = te(n),
                a = o.length;
              return s < 0 || s >= a ? e ? "" : void 0 : (r = o.charCodeAt(s), r < 55296 || r > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? e ? o.charAt(s) : r : e ? o.slice(s, s + 2) : i - 56320 + (r - 55296 << 10) + 65536)
            }
          }(!0);
        dt(String, "String", function(e) {
          this._t = String(e), this._i = 0
        }, function() {
          var e, t = this._t,
            n = this._i;
          return n >= t.length ? {
            value: void 0,
            done: !0
          } : (e = pt(t, n), this._i += e.length, {
            value: e,
            done: !1
          })
        });
        var yt = function(e, t) {
          return {
            value: t,
            done: !!e
          }
        };
        dt(Array, "Array", function(e, t) {
          this._t = xe(e), this._i = 0, this._k = t
        }, function() {
          var e = this._t,
            t = this._k,
            n = this._i++;
          return !e || n >= e.length ? (this._t = void 0, yt(1)) : "keys" == t ? yt(0, n) : "values" == t ? yt(0, e[n]) : yt(0, [n, e[n]])
        }, "values");
        Ae.Arguments = Ae.Array;
        for (var vt = et("toStringTag"), gt = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], mt = 0; mt < 5; mt++) {
          var _t = gt[mt],
            bt = re[_t],
            wt = bt && bt.prototype;
          wt && !wt[vt] && be(wt, vt, _t), Ae[_t] = Ae.Array
        }
        var Et, St, Tt, Ot = et("toStringTag"),
          At = "Arguments" == Ne(function() {
            return arguments
          }()),
          It = function(e, t) {
            try {
              return e[t]
            } catch (e) {}
          },
          Nt = function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = It(t = Object(e), Ot)) ? n : At ? Ne(t) : "Object" == (r = Ne(t)) && "function" == typeof t.callee ? "Arguments" : r
          },
          Ct = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
          },
          xt = function(e, t, n, r) {
            try {
              return r ? t(ue(n)[0], n[1]) : t(n)
            } catch (t) {
              var i = e.return;
              throw void 0 !== i && ue(i.call(e)), t
            }
          },
          jt = et("iterator"),
          Pt = Array.prototype,
          Rt = function(e) {
            return void 0 !== e && (Ae.Array === e || Pt[jt] === e)
          },
          kt = et("iterator"),
          Lt = ie.getIteratorMethod = function(e) {
            if (void 0 != e) return e[kt] || e["@@iterator"] || Ae[Nt(e)]
          },
          Ut = i(function(e) {
            var t = {},
              n = {},
              r = e.exports = function(e, r, i, o, s) {
                var a, u, c, f, l = s ? function() {
                    return e
                  } : Lt(e),
                  h = se(i, o, r ? 2 : 1),
                  d = 0;
                if ("function" != typeof l) throw TypeError(e + " is not iterable!");
                if (Rt(l)) {
                  for (a = Pe(e.length); a > d; d++)
                    if ((f = r ? h(ue(u = e[d])[0], u[1]) : h(e[d])) === t || f === n) return f
                } else
                  for (c = l.call(e); !(u = c.next()).done;)
                    if ((f = xt(c, h, u.value, r)) === t || f === n) return f
              };
            r.BREAK = t, r.RETURN = n
          }),
          Mt = et("species"),
          Dt = function(e, t) {
            var n, r = ue(e).constructor;
            return void 0 === r || void 0 == (n = ue(r)[Mt]) ? t : oe(n)
          },
          Ft = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
              case 0:
                return r ? e() : e.call(n);
              case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
              case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
              case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
              case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
          },
          Bt = re.process,
          qt = re.setImmediate,
          Vt = re.clearImmediate,
          Yt = re.MessageChannel,
          Wt = 0,
          zt = {},
          Jt = function() {
            var e = +this;
            if (zt.hasOwnProperty(e)) {
              var t = zt[e];
              delete zt[e], t()
            }
          },
          Gt = function(e) {
            Jt.call(e.data)
          };
        qt && Vt || (qt = function(e) {
          for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
          return zt[++Wt] = function() {
            Ft("function" == typeof e ? e : Function(e), t)
          }, Et(Wt), Wt
        }, Vt = function(e) {
          delete zt[e]
        }, "process" == Ne(Bt) ? Et = function(e) {
          Bt.nextTick(se(Jt, e, 1))
        } : Yt ? (St = new Yt, Tt = St.port2, St.port1.onmessage = Gt, Et = se(Tt.postMessage, Tt, 1)) : re.addEventListener && "function" == typeof postMessage && !re.importScripts ? (Et = function(e) {
          re.postMessage(e + "", "*")
        }, re.addEventListener("message", Gt, !1)) : Et = "onreadystatechange" in de("script") ? function(e) {
          Qe.appendChild(de("script")).onreadystatechange = function() {
            Qe.removeChild(this), Jt.call(e)
          }
        } : function(e) {
          setTimeout(se(Jt, e, 1), 0)
        });
        var Ht = {
            set: qt,
            clear: Vt
          },
          Qt = Ht.set,
          Kt = re.MutationObserver || re.WebKitMutationObserver,
          $t = re.process,
          Xt = re.Promise,
          Zt = "process" == Ne($t),
          en = function(e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : be(e, r, t[r]);
            return e
          },
          tn = et("species"),
          nn = function(e) {
            var t = "function" == typeof ie[e] ? ie[e] : re[e];
            fe && t && !t[tn] && me.f(t, tn, {
              configurable: !0,
              get: function() {
                return this
              }
            })
          },
          rn = et("iterator"),
          on = !1;
        try {
          var sn = [7][rn]();
          sn.return = function() {
            on = !0
          }, Array.from(sn, function() {
            throw 2
          })
        } catch (e) {}
        var an, un, cn, fn = function(e, t) {
            if (!t && !on) return !1;
            var n = !1;
            try {
              var r = [7],
                i = r[rn]();
              i.next = function() {
                return {
                  done: n = !0
                }
              }, r[rn] = function() {
                return i
              }, e(r)
            } catch (e) {}
            return n
          },
          ln = Ht.set,
          hn = function() {
            var e, t, n, r = function() {
              var r, i;
              for (Zt && (r = $t.domain) && r.exit(); e;) {
                i = e.fn, e = e.next;
                try {
                  i()
                } catch (r) {
                  throw e ? n() : t = void 0, r
                }
              }
              t = void 0, r && r.enter()
            };
            if (Zt) n = function() {
              $t.nextTick(r)
            };
            else if (Kt) {
              var i = !0,
                o = document.createTextNode("");
              new Kt(r).observe(o, {
                characterData: !0
              }), n = function() {
                o.data = i = !i
              }
            } else if (Xt && Xt.resolve) {
              var s = Xt.resolve();
              n = function() {
                s.then(r)
              }
            } else n = function() {
              Qt.call(re, r)
            };
            return function(r) {
              var i = {
                fn: r,
                next: void 0
              };
              t && (t.next = i), e || (e = i, n()), t = i
            }
          }(),
          dn = re.TypeError,
          pn = re.process,
          yn = re.Promise,
          pn = re.process,
          vn = "process" == Nt(pn),
          gn = function() {},
          mn = !! function() {
            try {
              var e = yn.resolve(1),
                t = (e.constructor = {})[et("species")] = function(e) {
                  e(gn, gn)
                };
              return (vn || "function" == typeof PromiseRejectionEvent) && e.then(gn) instanceof t
            } catch (e) {}
          }(),
          _n = function(e, t) {
            return e === t || e === yn && t === cn
          },
          bn = function(e) {
            var t;
            return !(!ae(e) || "function" != typeof(t = e.then)) && t
          },
          wn = function(e) {
            return _n(yn, e) ? new En(e) : new un(e)
          },
          En = un = function(e) {
            var t, n;
            this.promise = new e(function(e, r) {
              if (void 0 !== t || void 0 !== n) throw dn("Bad Promise constructor");
              t = e, n = r
            }), this.resolve = oe(t), this.reject = oe(n)
          },
          Sn = function(e) {
            try {
              e()
            } catch (e) {
              return {
                error: e
              }
            }
          },
          Tn = function(e, t) {
            if (!e._n) {
              e._n = !0;
              var n = e._c;
              hn(function() {
                for (var r = e._v, i = 1 == e._s, o = 0; n.length > o;) ! function(t) {
                  var n, o, s = i ? t.ok : t.fail,
                    a = t.resolve,
                    u = t.reject,
                    c = t.domain;
                  try {
                    s ? (i || (2 == e._h && In(e), e._h = 1), !0 === s ? n = r : (c && c.enter(), n = s(r), c && c.exit()), n === t.promise ? u(dn("Promise-chain cycle")) : (o = bn(n)) ? o.call(n, a, u) : a(n)) : u(r)
                  } catch (e) {
                    u(e)
                  }
                }(n[o++]);
                e._c = [], e._n = !1, t && !e._h && On(e)
              })
            }
          },
          On = function(e) {
            ln.call(re, function() {
              var t, n, r, i = e._v;
              if (An(e) && (t = Sn(function() {
                  vn ? pn.emit("unhandledRejection", i, e) : (n = re.onunhandledrejection) ? n({
                    promise: e,
                    reason: i
                  }) : (r = re.console) && r.error && r.error("Unhandled promise rejection", i)
                }), e._h = vn || An(e) ? 2 : 1), e._a = void 0, t) throw t.error
            })
          },
          An = function(e) {
            if (1 == e._h) return !1;
            for (var t, n = e._a || e._c, r = 0; n.length > r;)
              if (t = n[r++], t.fail || !An(t.promise)) return !1;
            return !0
          },
          In = function(e) {
            ln.call(re, function() {
              var t;
              vn ? pn.emit("rejectionHandled", e) : (t = re.onrejectionhandled) && t({
                promise: e,
                reason: e._v
              })
            })
          },
          Nn = function(e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), Tn(t, !0))
          },
          Cn = function(e) {
            var t, n = this;
            if (!n._d) {
              n._d = !0, n = n._w || n;
              try {
                if (n === e) throw dn("Promise can't be resolved itself");
                (t = bn(e)) ? hn(function() {
                  var r = {
                    _w: n,
                    _d: !1
                  };
                  try {
                    t.call(e, se(Cn, r, 1), se(Nn, r, 1))
                  } catch (e) {
                    Nn.call(r, e)
                  }
                }): (n._v = e, n._s = 1, Tn(n, !1))
              } catch (e) {
                Nn.call({
                  _w: n,
                  _d: !1
                }, e)
              }
            }
          };
        mn || (yn = function(e) {
          Ct(this, yn, "Promise", "_h"), oe(e), an.call(this);
          try {
            e(se(Cn, this, 1), se(Nn, this, 1))
          } catch (e) {
            Nn.call(this, e)
          }
        }, an = function(e) {
          this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, an.prototype = en(yn.prototype, {
          then: function(e, t) {
            var n = wn(Dt(this, yn));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = vn ? pn.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && Tn(this, !1), n.promise
          },
          catch: function(e) {
            return this.then(void 0, e)
          }
        }), En = function() {
          var e = new an;
          this.promise = e, this.resolve = se(Cn, e, 1), this.reject = se(Nn, e, 1)
        }), Ee(Ee.G + Ee.W + Ee.F * !mn, {
          Promise: yn
        }), rt(yn, "Promise"), nn("Promise"), cn = ie.Promise, Ee(Ee.S + Ee.F * !mn, "Promise", {
          reject: function(e) {
            var t = wn(this);
            return (0, t.reject)(e), t.promise
          }
        }), Ee(Ee.S + !0 * Ee.F, "Promise", {
          resolve: function(e) {
            if (e instanceof yn && _n(e.constructor, this)) return e;
            var t = wn(this);
            return (0, t.resolve)(e), t.promise
          }
        }), Ee(Ee.S + Ee.F * !(mn && fn(function(e) {
          yn.all(e).catch(gn)
        })), "Promise", {
          all: function(e) {
            var t = this,
              n = wn(t),
              r = n.resolve,
              i = n.reject,
              o = Sn(function() {
                var n = [],
                  o = 0,
                  s = 1;
                Ut(e, !1, function(e) {
                  var a = o++,
                    u = !1;
                  n.push(void 0), s++, t.resolve(e).then(function(e) {
                    u || (u = !0, n[a] = e, --s || r(n))
                  }, i)
                }), --s || r(n)
              });
            return o && i(o.error), n.promise
          },
          race: function(e) {
            var t = this,
              n = wn(t),
              r = n.reject,
              i = Sn(function() {
                Ut(e, !1, function(e) {
                  t.resolve(e).then(n.resolve, r)
                })
              });
            return i && r(i.error), n.promise
          }
        });
        var xn = ie.Promise,
          jn = i(function(e) {
            e.exports = {
              default: xn,
              __esModule: !0
            }
          }),
          Pn = r(jn),
          Rn = et,
          kn = {
            f: Rn
          },
          Ln = kn.f("iterator"),
          Un = i(function(e) {
            e.exports = {
              default: Ln,
              __esModule: !0
            }
          }),
          Mn = i(function(e) {
            var t = Be("meta"),
              n = me.f,
              r = 0,
              i = Object.isExtensible || function() {
                return !0
              },
              o = !ce(function() {
                return i(Object.preventExtensions({}))
              }),
              s = function(e) {
                n(e, t, {
                  value: {
                    i: "O" + ++r,
                    w: {}
                  }
                })
              },
              a = function(e, n) {
                if (!ae(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!Oe(e, t)) {
                  if (!i(e)) return "F";
                  if (!n) return "E";
                  s(e)
                }
                return e[t].i
              },
              u = function(e, n) {
                if (!Oe(e, t)) {
                  if (!i(e)) return !0;
                  if (!n) return !1;
                  s(e)
                }
                return e[t].w
              },
              c = function(e) {
                return o && f.NEED && i(e) && !Oe(e, t) && s(e), e
              },
              f = e.exports = {
                KEY: t,
                NEED: !1,
                fastKey: a,
                getWeak: u,
                onFreeze: c
              }
          }),
          Dn = me.f,
          Fn = function(e) {
            var t = ie.Symbol || (ie.Symbol = {});
            "_" == e.charAt(0) || e in t || Dn(t, e, {
              value: kn.f(e)
            })
          },
          Bn = function(e, t) {
            for (var n, r = xe(e), i = Ge(r), o = i.length, s = 0; o > s;)
              if (r[n = i[s++]] === t) return n
          },
          qn = Object.getOwnPropertySymbols,
          Vn = {
            f: qn
          },
          Yn = {}.propertyIsEnumerable,
          Wn = {
            f: Yn
          },
          zn = function(e) {
            var t = Ge(e),
              n = Vn.f;
            if (n)
              for (var r, i = n(e), o = Wn.f, s = 0; i.length > s;) o.call(e, r = i[s++]) && t.push(r);
            return t
          },
          Jn = Array.isArray || function(e) {
            return "Array" == Ne(e)
          },
          Gn = Je.concat("length", "prototype"),
          Hn = Object.getOwnPropertyNames || function(e) {
            return ze(e, Gn)
          },
          Qn = {
            f: Hn
          },
          Kn = Qn.f,
          $n = {}.toString,
          Xn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
          Zn = function(e) {
            try {
              return Kn(e)
            } catch (e) {
              return Xn.slice()
            }
          },
          er = function(e) {
            return Xn && "[object Window]" == $n.call(e) ? Zn(e) : Kn(xe(e))
          },
          tr = {
            f: er
          },
          nr = Object.getOwnPropertyDescriptor,
          rr = fe ? nr : function(e, t) {
            if (e = xe(e), t = ye(t, !0), pe) try {
              return nr(e, t)
            } catch (e) {}
            if (Oe(e, t)) return _e(!Wn.f.call(e, t), e[t])
          },
          ir = {
            f: rr
          },
          or = Mn.KEY,
          sr = ir.f,
          ar = me.f,
          ur = tr.f,
          cr = re.Symbol,
          fr = re.JSON,
          lr = fr && fr.stringify,
          hr = et("_hidden"),
          dr = et("toPrimitive"),
          pr = {}.propertyIsEnumerable,
          yr = Me("symbol-registry"),
          vr = Me("symbols"),
          gr = Me("op-symbols"),
          mr = Object.prototype,
          _r = "function" == typeof cr,
          br = re.QObject,
          wr = !br || !br.prototype || !br.prototype.findChild,
          Er = fe && ce(function() {
            return 7 != Ze(ar({}, "a", {
              get: function() {
                return ar(this, "a", {
                  value: 7
                }).a
              }
            })).a
          }) ? function(e, t, n) {
            var r = sr(mr, t);
            r && delete mr[t], ar(e, t, n), r && e !== mr && ar(mr, t, r)
          } : ar,
          Sr = function(e) {
            var t = vr[e] = Ze(cr.prototype);
            return t._k = e, t
          },
          Tr = _r && "symbol" == typeof cr.iterator ? function(e) {
            return "symbol" == typeof e
          } : function(e) {
            return e instanceof cr
          },
          Or = function(e, t, n) {
            return e === mr && Or(gr, t, n), ue(e), t = ye(t, !0), ue(n), Oe(vr, t) ? (n.enumerable ? (Oe(e, hr) && e[hr][t] && (e[hr][t] = !1), n = Ze(n, {
              enumerable: _e(0, !1)
            })) : (Oe(e, hr) || ar(e, hr, _e(1, {})), e[hr][t] = !0), Er(e, t, n)) : ar(e, t, n)
          },
          Ar = function(e, t) {
            ue(e);
            for (var n, r = zn(t = xe(t)), i = 0, o = r.length; o > i;) Or(e, n = r[i++], t[n]);
            return e
          },
          Ir = function(e, t) {
            return void 0 === t ? Ze(e) : Ar(Ze(e), t)
          },
          Nr = function(e) {
            var t = pr.call(this, e = ye(e, !0));
            return !(this === mr && Oe(vr, e) && !Oe(gr, e)) && (!(t || !Oe(this, e) || !Oe(vr, e) || Oe(this, hr) && this[hr][e]) || t)
          },
          Cr = function(e, t) {
            if (e = xe(e), t = ye(t, !0), e !== mr || !Oe(vr, t) || Oe(gr, t)) {
              var n = sr(e, t);
              return !n || !Oe(vr, t) || Oe(e, hr) && e[hr][t] || (n.enumerable = !0), n
            }
          },
          xr = function(e) {
            for (var t, n = ur(xe(e)), r = [], i = 0; n.length > i;) Oe(vr, t = n[i++]) || t == hr || t == or || r.push(t);
            return r
          },
          jr = function(e) {
            for (var t, n = e === mr, r = ur(n ? gr : xe(e)), i = [], o = 0; r.length > o;) !Oe(vr, t = r[o++]) || n && !Oe(mr, t) || i.push(vr[t]);
            return i
          };
        _r || (cr = function() {
          if (this instanceof cr) throw TypeError("Symbol is not a constructor!");
          var e = Be(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
              this === mr && t.call(gr, n), Oe(this, hr) && Oe(this[hr], e) && (this[hr][e] = !1), Er(this, e, _e(1, n))
            };
          return fe && wr && Er(mr, e, {
            configurable: !0,
            set: t
          }), Sr(e)
        }, Se(cr.prototype, "toString", function() {
          return this._k
        }), ir.f = Cr, me.f = Or, Qn.f = tr.f = xr, Wn.f = Nr, Vn.f = jr, kn.f = function(e) {
          return Sr(et(e))
        }), Ee(Ee.G + Ee.W + Ee.F * !_r, {
          Symbol: cr
        });
        for (var Pr = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Rr = 0; Pr.length > Rr;) et(Pr[Rr++]);
        for (var Pr = Ge(et.store), Rr = 0; Pr.length > Rr;) Fn(Pr[Rr++]);
        Ee(Ee.S + Ee.F * !_r, "Symbol", {
          for: function(e) {
            return Oe(yr, e += "") ? yr[e] : yr[e] = cr(e)
          },
          keyFor: function(e) {
            if (Tr(e)) return Bn(yr, e);
            throw TypeError(e + " is not a symbol!")
          },
          useSetter: function() {
            wr = !0
          },
          useSimple: function() {
            wr = !1
          }
        }), Ee(Ee.S + Ee.F * !_r, "Object", {
          create: Ir,
          defineProperty: Or,
          defineProperties: Ar,
          getOwnPropertyDescriptor: Cr,
          getOwnPropertyNames: xr,
          getOwnPropertySymbols: jr
        }), fr && Ee(Ee.S + Ee.F * (!_r || ce(function() {
          var e = cr();
          return "[null]" != lr([e]) || "{}" != lr({
            a: e
          }) || "{}" != lr(Object(e))
        })), "JSON", {
          stringify: function(e) {
            if (void 0 !== e && !Tr(e)) {
              for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
              return t = r[1], "function" == typeof t && (n = t), !n && Jn(t) || (t = function(e, t) {
                if (n && (t = n.call(this, e, t)), !Tr(t)) return t
              }), r[1] = t, lr.apply(fr, r)
            }
          }
        }), cr.prototype[dr] || be(cr.prototype, dr, cr.prototype.valueOf), rt(cr, "Symbol"), rt(Math, "Math", !0), rt(re.JSON, "JSON", !0), Fn("asyncIterator"), Fn("observable");
        var kr = ie.Symbol,
          Lr = i(function(e) {
            e.exports = {
              default: kr,
              __esModule: !0
            }
          }),
          Ur = r(Lr),
          Mr = i(function(e, t) {
            function n(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }
            t.__esModule = !0;
            var r = n(Un),
              i = n(Lr),
              o = "function" == typeof i.default && "symbol" == typeof r.default ? function(e) {
                return typeof e
              } : function(e) {
                return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
              };
            t.default = "function" == typeof i.default && "symbol" === o(r.default) ? function(e) {
              return void 0 === e ? "undefined" : o(e)
            } : function(e) {
              return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
            }
          }),
          Dr = r(Mr),
          Fr = i(function(e, t) {
            t.__esModule = !0, t.default = function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
          }),
          Br = r(Fr),
          qr = function() {
            function e() {
              Br(this, e)
            }
            return e.prototype.getItem = function(e) {
              return wx.getStorageSync(e)
            }, e.prototype.setItem = function(e, t) {
              return wx.setStorageSync(e, t)
            }, e.prototype.removeItem = function(e) {
              return this.setItem(e, "")
            }, e.prototype.clear = function() {
              return wx.clearStorageSync()
            }, e
          }(),
          Vr = new qr;
        Ee(Ee.S + Ee.F * !fe, "Object", {
          defineProperty: me.f
        });
        var Yr = ie.Object,
          Wr = function(e, t, n) {
            return Yr.defineProperty(e, t, n)
          },
          zr = i(function(e) {
            e.exports = {
              default: Wr,
              __esModule: !0
            }
          }),
          Jr = i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(zr);
            t.default = function(e, t, r) {
              return t in e ? (0, n.default)(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r, e
            }
          }),
          Gr = r(Jr),
          Hr = i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(Mr);
            t.default = function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" !== (void 0 === t ? "undefined" : (0, n.default)(t)) && "function" != typeof t ? e : t
            }
          }),
          Qr = r(Hr),
          Kr = function(e, t) {
            if (ue(e), !ae(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
          },
          $r = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
              try {
                n = se(Function.call, ir.f(Object.prototype, "__proto__").set, 2), n(e, []), t = !(e instanceof Array)
              } catch (e) {
                t = !0
              }
              return function(e, r) {
                return Kr(e, r), t ? e.__proto__ = r : n(e, r), e
              }
            }({}, !1) : void 0),
            check: Kr
          };
        Ee(Ee.S, "Object", {
          setPrototypeOf: $r.set
        });
        var Xr = ie.Object.setPrototypeOf,
          Zr = i(function(e) {
            e.exports = {
              default: Xr,
              __esModule: !0
            }
          });
        Ee(Ee.S, "Object", {
          create: Ze
        });
        var ei = ie.Object,
          ti = function(e, t) {
            return ei.create(e, t)
          },
          ni = i(function(e) {
            e.exports = {
              default: ti,
              __esModule: !0
            }
          }),
          ri = i(function(e, t) {
            function n(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }
            t.__esModule = !0;
            var r = n(Zr),
              i = n(ni),
              o = n(Mr);
            t.default = function(e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, o.default)(t)));
              e.prototype = (0, i.default)(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t)
            }
          }),
          ii = r(ri),
          oi = ie.JSON || (ie.JSON = {
            stringify: JSON.stringify
          }),
          si = function(e) {
            return oi.stringify.apply(oi, arguments)
          },
          ai = i(function(e) {
            e.exports = {
              default: si,
              __esModule: !0
            }
          }),
          ui = r(ai),
          ci = Object.getOwnPropertySymbols,
          fi = Object.prototype.hasOwnProperty,
          li = Object.prototype.propertyIsEnumerable,
          hi = function() {
            try {
              if (!Object.assign) return !1;
              var e = new String("abc");
              if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
              for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
              if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                  return t[e]
                }).join("")) return !1;
              var r = {};
              return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e
              }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (e) {
              return !1
            }
          }() ? Object.assign : function(e, t) {
            for (var n, r, i = o(e), s = 1; s < arguments.length; s++) {
              n = Object(arguments[s]);
              for (var a in n) fi.call(n, a) && (i[a] = n[a]);
              if (ci) {
                r = ci(n);
                for (var u = 0; u < r.length; u++) li.call(n, r[u]) && (i[r[u]] = n[r[u]])
              }
            }
            return i
          },
          di = i(function(e, t) {
            var n = t.createUniqueKey = "undefined" != typeof Symbol ? Symbol : function(e) {
              return "[[" + e + "_" + Math.random().toFixed(8).slice(2) + "]]"
            };
            t.LISTENERS = n("listeners"), t.CAPTURE = 1, t.BUBBLE = 2, t.ATTRIBUTE = 3, t.newNode = function(e, t) {
              return {
                listener: e,
                kind: t,
                next: null
              }
            }
          }),
          pi = di.LISTENERS,
          yi = di.ATTRIBUTE,
          vi = di.newNode,
          gi = function(e, t) {
            function n() {
              e.call(this)
            }
            var r = {
              constructor: {
                value: n,
                configurable: !0,
                writable: !0
              }
            };
            return t.forEach(function(e) {
              r["on" + e] = {
                get: function() {
                  return s(this, e)
                },
                set: function(t) {
                  a(this, e, t)
                },
                configurable: !0,
                enumerable: !0
              }
            }), n.prototype = Object.create(e.prototype, r), n
          },
          mi = {
            defineCustomEventTarget: gi
          },
          _i = di.createUniqueKey,
          bi = _i("stop_immediate_propagation_flag"),
          wi = _i("canceled_flag"),
          Ei = _i("original_event"),
          Si = Object.freeze({
            stopPropagation: Object.freeze({
              value: function() {
                var e = this[Ei];
                "function" == typeof e.stopPropagation && e.stopPropagation()
              },
              writable: !0,
              configurable: !0
            }),
            stopImmediatePropagation: Object.freeze({
              value: function() {
                this[bi] = !0;
                var e = this[Ei];
                "function" == typeof e.stopImmediatePropagation && e.stopImmediatePropagation()
              },
              writable: !0,
              configurable: !0
            }),
            preventDefault: Object.freeze({
              value: function() {
                !0 === this.cancelable && (this[wi] = !0);
                var e = this[Ei];
                "function" == typeof e.preventDefault && e.preventDefault()
              },
              writable: !0,
              configurable: !0
            }),
            defaultPrevented: Object.freeze({
              get: function() {
                return this[wi]
              },
              enumerable: !0,
              configurable: !0
            })
          }),
          Ti = bi,
          Oi = function(e, t) {
            var n = "number" == typeof e.timeStamp ? e.timeStamp : Date.now(),
              r = {
                type: {
                  value: e.type,
                  enumerable: !0
                },
                target: {
                  value: t,
                  enumerable: !0
                },
                currentTarget: {
                  value: t,
                  enumerable: !0
                },
                eventPhase: {
                  value: 2,
                  enumerable: !0
                },
                bubbles: {
                  value: Boolean(e.bubbles),
                  enumerable: !0
                },
                cancelable: {
                  value: Boolean(e.cancelable),
                  enumerable: !0
                },
                timeStamp: {
                  value: n,
                  enumerable: !0
                },
                isTrusted: {
                  value: !1,
                  enumerable: !0
                }
              };
            return r[bi] = {
              value: !1,
              writable: !0
            }, r[wi] = {
              value: !1,
              writable: !0
            }, r[Ei] = {
              value: e
            }, void 0 !== e.detail && (r.detail = {
              value: e.detail,
              enumerable: !0
            }), Object.create(Object.create(e, Si), r)
          },
          Ai = {
            STOP_IMMEDIATE_PROPAGATION_FLAG: Ti,
            createEventWrapper: Oi
          },
          Ii = i(function(e) {
            var t = di.LISTENERS,
              n = di.CAPTURE,
              r = di.BUBBLE,
              i = di.ATTRIBUTE,
              o = di.newNode,
              s = mi.defineCustomEventTarget,
              a = Ai.createEventWrapper,
              u = Ai.STOP_IMMEDIATE_PROPAGATION_FLAG,
              c = "undefined" != typeof window && void 0 !== window.EventTarget,
              f = e.exports = function e() {
                if (!(this instanceof e)) {
                  if (1 === arguments.length && Array.isArray(arguments[0])) return s(e, arguments[0]);
                  if (arguments.length > 0) {
                    for (var n = Array(arguments.length), r = 0; r < arguments.length; ++r) n[r] = arguments[r];
                    return s(e, n)
                  }
                  throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(this, t, {
                  value: Object.create(null)
                })
              };
            f.prototype = Object.create((c ? window.EventTarget : Object).prototype, {
              constructor: {
                value: f,
                writable: !0,
                configurable: !0
              },
              addEventListener: {
                value: function(e, i, s) {
                  if (null == i) return !1;
                  if ("function" != typeof i && "object" != typeof i) throw new TypeError('"listener" is not an object.');
                  var a = s ? n : r,
                    u = this[t][e];
                  if (null == u) return this[t][e] = o(i, a), !0;
                  for (var c = null; null != u;) {
                    if (u.listener === i && u.kind === a) return !1;
                    c = u, u = u.next
                  }
                  return c.next = o(i, a), !0
                },
                configurable: !0,
                writable: !0
              },
              removeEventListener: {
                value: function(e, i, o) {
                  if (null == i) return !1;
                  for (var s = o ? n : r, a = null, u = this[t][e]; null != u;) {
                    if (u.listener === i && u.kind === s) return null == a ? this[t][e] = u.next : a.next = u.next, !0;
                    a = u, u = u.next
                  }
                  return !1
                },
                configurable: !0,
                writable: !0
              },
              dispatchEvent: {
                value: function(e) {
                  var n = this[t][e.type];
                  if (null == n) return !0;
                  for (var r = a(e, this); null != n && ("function" == typeof n.listener ? n.listener.call(this, r) : n.kind !== i && "function" == typeof n.listener.handleEvent && n.listener.handleEvent(r), !r[u]);) n = n.next;
                  return !r.defaultPrevented
                },
                configurable: !0,
                writable: !0
              }
            })
          }),
          Ni = function() {
            function e() {
              Br(this, e), this._entries = []
            }
            return e.prototype.append = function(e, t) {
              if ("string" != typeof e) throw new TypeError("FormData name must be a string");
              if ("string" != typeof t && ("object" !== (void 0 === t ? "undefined" : Dr(t)) || "string" != typeof t.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");
              this._entries.push([e, t])
            }, e.prototype.set = function(e, t) {
              var n = this.get(e);
              n ? n[1] = t : this.append(e, t)
            }, e.prototype.delete = function(e) {
              this._entries = this._entries.filter(function(t) {
                return t[0] !== e
              })
            }, e.prototype.entries = function() {
              return this._entries
            }, e.prototype.get = function(e) {
              return this._entries.find(function(t) {
                return t[0] === e
              })
            }, e.prototype.getAll = function(e) {
              return this._entries.filter(function(t) {
                return t[0] === e
              })
            }, e.prototype.has = function(e) {
              return this._entries.some(function(t) {
                return t[0] === e
              })
            }, e.prototype.keys = function() {
              return this._entries.map(function(e) {
                return e[0]
              })
            }, e.prototype.values = function() {
              return this._entries.map(function(e) {
                return e[1]
              })
            }, e
          }(),
          Ci = Ni,
          xi = 0,
          ji = 4,
          Pi = ["abort", "error", "load", "loadstart", "progress", "timeout", "loadend", "readystatechange"],
          Ri = function(e) {
            function t() {
              Br(this, t);
              var n = Qr(this, e.call(this));
              return n.readyState = xi, n._headers = {}, n
            }
            return ii(t, e), t.prototype.abort = function() {
              throw new Error("not supported in weapp")
            }, t.prototype.getAllResponseHeaders = function() {
              return console.warn("getAllResponseHeaders always returns ''"), ""
            }, t.prototype.getResponseHeader = function(e) {
              return "content-type" === e ? (console.warn("get content-type always returns 'application/json'"), "application/json") : (console.warn("getResponseHeader always returns ''"), "")
            }, t.prototype.overrideMimeType = function() {
              throw new Error("not supported in weapp")
            }, t.prototype.open = function(e, t) {
              var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (this.readyState !== xi) throw new Error("request is already opened");
              if (!n) throw new Error("sync request is not supported");
              this._method = e, this._url = t, this.readyState = 1, this.dispatchEvent({
                type: "readystatechange"
              })
            }, t.prototype.setRequestHeader = function(e, t) {
              if (1 !== this.readyState) throw new Error("request is not opened");
              this._headers[e.toLowerCase()] = t
            }, t.prototype.send = function(e) {
              var t = this;
              if (1 !== this.readyState) throw new Error("request is not opened");
              if (e instanceof Ci) {
                var n = e.entries(),
                  r = n.filter(function(e) {
                    return "string" != typeof e[1]
                  });
                if (0 === r.length) throw new Error("Must specify a Blob field in FormData");
                r.length > 1 && console.warn("Only the first Blob will be send in Weapp");
                var i = n.filter(function(e) {
                  return "string" == typeof e[1]
                }).reduce(function(e, t) {
                  return hi(e, Gr({}, t[0], t[1]))
                }, {});
                wx.uploadFile({
                  url: this._url,
                  name: r[0][0],
                  filePath: r[0][1].uri,
                  formData: i,
                  header: this._headers,
                  success: u.bind(this),
                  fail: function(e) {
                    t.status = 0, t.readyState = ji, t.dispatchEvent({
                      type: "readystatechange"
                    }), t.dispatchEvent({
                      type: "error"
                    })
                  }
                })
              } else wx.request({
                url: this._url,
                data: e || "",
                method: this._method.toUpperCase(),
                header: this._headers,
                success: u.bind(this),
                fail: function(e) {
                  t.status = 0, t.readyState = ji, t.dispatchEvent({
                    type: "readystatechange"
                  }), t.dispatchEvent({
                    type: "error"
                  })
                }
              })
            }, t
          }(Ii(Pi));
        hi(Ri, {
          UNSENT: xi,
          OPENED: 1,
          HEADERS_RECEIVED: 2,
          LOADING: 3,
          DONE: ji
        });
        var ki = Ri,
          Li = i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(zr);
            t.default = function() {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var i = t[r];
                  i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, n.default)(e, i.key, i)
                }
              }
              return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
              }
            }()
          }),
          Ui = r(Li),
          Mi = 0,
          Di = 1,
          Fi = 3,
          Bi = ["open", "error", "message", "close"],
          qi = void 0,
          Vi = function(e) {
            function t(n, r) {
              if (Br(this, t), !n) throw new TypeError("Failed to construct 'WebSocket': url required");
              if (r) throw new Error("subprotocal not supported in weapp");
              var i = Qr(this, e.call(this));
              return i._url = n, i._protocal = "", i._readyState = Mi, qi && qi.dispatchEvent({
                type: "close"
              }), qi = i, wx.onSocketOpen(function(e) {
                qi && (qi._readyState = Di, qi.dispatchEvent({
                  type: "open"
                }))
              }), wx.onSocketError(c), wx.onSocketMessage(function(e) {
                if (qi) {
                  var t = e.data,
                    n = e.origin,
                    r = e.ports,
                    i = e.source;
                  qi.dispatchEvent({
                    data: t,
                    origin: n,
                    ports: r,
                    source: i,
                    type: "message"
                  })
                }
              }), wx.onSocketClose(function(e) {
                if (qi) {
                  qi._readyState = Fi;
                  var t = e.code,
                    n = e.reason,
                    r = e.wasClean;
                  qi.dispatchEvent({
                    code: t,
                    reason: n,
                    wasClean: r,
                    type: "close"
                  }), qi = null
                }
              }), wx.connectSocket({
                url: n,
                fail: function(e) {
                  return setTimeout(function() {
                    return c(e)
                  }, 0)
                }
              }), i
            }
            return ii(t, e), t.prototype.close = function() {
              this.readyState === Mi && console.warn("close WebSocket which is connecting might not work"), wx.closeSocket()
            }, t.prototype.send = function(e) {
              if (this.readyState !== Di) throw new Error("INVALID_STATE_ERR");
              if ("string" != typeof e) throw new TypeError("only string typed data are supported");
              wx.sendSocketMessage({
                data: e
              })
            }, Ui(t, [{
              key: "url",
              get: function() {
                return this._url
              }
            }, {
              key: "protocal",
              get: function() {
                return this._protocal
              }
            }, {
              key: "readyState",
              get: function() {
                return this._readyState
              }
            }]), t
          }(Ii(Bi));
        hi(Vi, {
          CONNECTING: Mi,
          OPEN: Di,
          CLOSING: 2,
          CLOSED: Fi
        });
        var Yi = Vi,
          Wi = {},
          zi = {
            polyfill: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X || window;
              if ("object" !== (void 0 === e ? "undefined" : Dr(e))) throw new Error("polyfill target is not an Object");
              var t = {
                localStorage: Vr,
                XMLHttpRequest: ki,
                FormData: Ci,
                WebSocket: Yi,
                Object: Object,
                navigator: Wi
              };
              for (var n in t) e[n] || (e[n] = t[n])
            },
            localStorage: Vr,
            XMLHttpRequest: ki,
            FormData: Ci,
            WebSocket: Yi
          },
          Ji = zi.polyfill;
        window = window || {}, Ji(), Ji(window);
        try {
          localStorage = localStorage || Vr
        } catch (e) {}
        try {
          XMLHttpRequest = XMLHttpRequest || ki
        } catch (e) {}
        try {
          FormData = FormData || Ci
        } catch (e) {}
        try {
          WebSocket = WebSocket || Yi
        } catch (e) {}
        try {
          navigator = navigator || Wi
        } catch (e) {}
        var Gi = i(function(e) {
            /**
             * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
             * Released under the Apache License, Version 2.0
             * see: https://github.com/dcodeIO/long.js for details
             */
            ! function(t, r) {
              "function" == typeof n && e && e.exports ? e.exports = r() : (t.dcodeIO = t.dcodeIO || {}).Long = r()
            }(X, function() {
              function e(e, t, n) {
                this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n
              }

              function t(e) {
                return !0 === (e && e.__isLong__)
              }

              function n(e, t) {
                var n, r, o;
                return t ? (e >>>= 0, (o = 0 <= e && e < 256) && (r = u[e]) ? r : (n = i(e, (0 | e) < 0 ? -1 : 0, !0), o && (u[e] = n), n)) : (e |= 0, (o = -128 <= e && e < 128) && (r = a[e]) ? r : (n = i(e, e < 0 ? -1 : 0, !1), o && (a[e] = n), n))
              }

              function r(e, t) {
                if (isNaN(e) || !isFinite(e)) return t ? y : p;
                if (t) {
                  if (e < 0) return y;
                  if (e >= l) return b
                } else {
                  if (e <= -h) return w;
                  if (e + 1 >= h) return _
                }
                return e < 0 ? r(-e, t).neg() : i(e % f | 0, e / f | 0, t)
              }

              function i(t, n, r) {
                return new e(t, n, r)
              }

              function o(e, t, n) {
                if (0 === e.length) throw Error("empty string");
                if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return p;
                if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
                var i;
                if ((i = e.indexOf("-")) > 0) throw Error("interior hyphen");
                if (0 === i) return o(e.substring(1), t, n).neg();
                for (var s = r(c(n, 8)), a = p, u = 0; u < e.length; u += 8) {
                  var f = Math.min(8, e.length - u),
                    l = parseInt(e.substring(u, u + f), n);
                  if (f < 8) {
                    var h = r(c(n, f));
                    a = a.mul(h).add(r(l))
                  } else a = a.mul(s), a = a.add(r(l))
                }
                return a.unsigned = t, a
              }

              function s(t) {
                return t instanceof e ? t : "number" == typeof t ? r(t) : "string" == typeof t ? o(t) : i(t.low, t.high, t.unsigned)
              }
              e.prototype.__isLong__, Object.defineProperty(e.prototype, "__isLong__", {
                value: !0,
                enumerable: !1,
                configurable: !1
              }), e.isLong = t;
              var a = {},
                u = {};
              e.fromInt = n, e.fromNumber = r, e.fromBits = i;
              var c = Math.pow;
              e.fromString = o, e.fromValue = s;
              var f = 4294967296,
                l = f * f,
                h = l / 2,
                d = n(1 << 24),
                p = n(0);
              e.ZERO = p;
              var y = n(0, !0);
              e.UZERO = y;
              var v = n(1);
              e.ONE = v;
              var g = n(1, !0);
              e.UONE = g;
              var m = n(-1);
              e.NEG_ONE = m;
              var _ = i(-1, 2147483647, !1);
              e.MAX_VALUE = _;
              var b = i(-1, -1, !0);
              e.MAX_UNSIGNED_VALUE = b;
              var w = i(0, -2147483648, !1);
              e.MIN_VALUE = w;
              var E = e.prototype;
              return E.toInt = function() {
                return this.unsigned ? this.low >>> 0 : this.low
              }, E.toNumber = function() {
                return this.unsigned ? (this.high >>> 0) * f + (this.low >>> 0) : this.high * f + (this.low >>> 0)
              }, E.toString = function(e) {
                if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative()) {
                  if (this.eq(w)) {
                    var t = r(e),
                      n = this.div(t),
                      i = n.mul(t).sub(this);
                    return n.toString(e) + i.toInt().toString(e)
                  }
                  return "-" + this.neg().toString(e)
                }
                for (var o = r(c(e, 6), this.unsigned), s = this, a = "";;) {
                  var u = s.div(o),
                    f = s.sub(u.mul(o)).toInt() >>> 0,
                    l = f.toString(e);
                  if (s = u, s.isZero()) return l + a;
                  for (; l.length < 6;) l = "0" + l;
                  a = "" + l + a
                }
              }, E.getHighBits = function() {
                return this.high
              }, E.getHighBitsUnsigned = function() {
                return this.high >>> 0
              }, E.getLowBits = function() {
                return this.low
              }, E.getLowBitsUnsigned = function() {
                return this.low >>> 0
              }, E.getNumBitsAbs = function() {
                if (this.isNegative()) return this.eq(w) ? 64 : this.neg().getNumBitsAbs();
                for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--);
                return 0 != this.high ? t + 33 : t + 1
              }, E.isZero = function() {
                return 0 === this.high && 0 === this.low
              }, E.isNegative = function() {
                return !this.unsigned && this.high < 0
              }, E.isPositive = function() {
                return this.unsigned || this.high >= 0
              }, E.isOdd = function() {
                return 1 == (1 & this.low)
              }, E.isEven = function() {
                return 0 == (1 & this.low)
              }, E.equals = function(e) {
                return t(e) || (e = s(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && (this.high === e.high && this.low === e.low)
              }, E.eq = E.equals, E.notEquals = function(e) {
                return !this.eq(e)
              }, E.neq = E.notEquals, E.lessThan = function(e) {
                return this.comp(e) < 0
              }, E.lt = E.lessThan, E.lessThanOrEqual = function(e) {
                return this.comp(e) <= 0
              }, E.lte = E.lessThanOrEqual, E.greaterThan = function(e) {
                return this.comp(e) > 0
              }, E.gt = E.greaterThan, E.greaterThanOrEqual = function(e) {
                return this.comp(e) >= 0
              }, E.gte = E.greaterThanOrEqual, E.compare = function(e) {
                if (t(e) || (e = s(e)), this.eq(e)) return 0;
                var n = this.isNegative(),
                  r = e.isNegative();
                return n && !r ? -1 : !n && r ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
              }, E.comp = E.compare, E.negate = function() {
                return !this.unsigned && this.eq(w) ? w : this.not().add(v)
              }, E.neg = E.negate, E.add = function(e) {
                t(e) || (e = s(e));
                var n = this.high >>> 16,
                  r = 65535 & this.high,
                  o = this.low >>> 16,
                  a = 65535 & this.low,
                  u = e.high >>> 16,
                  c = 65535 & e.high,
                  f = e.low >>> 16,
                  l = 65535 & e.low,
                  h = 0,
                  d = 0,
                  p = 0,
                  y = 0;
                return y += a + l, p += y >>> 16, y &= 65535, p += o + f, d += p >>> 16, p &= 65535, d += r + c, h += d >>> 16, d &= 65535, h += n + u, h &= 65535, i(p << 16 | y, h << 16 | d, this.unsigned)
              }, E.subtract = function(e) {
                return t(e) || (e = s(e)), this.add(e.neg())
              }, E.sub = E.subtract, E.multiply = function(e) {
                if (this.isZero()) return p;
                if (t(e) || (e = s(e)), e.isZero()) return p;
                if (this.eq(w)) return e.isOdd() ? w : p;
                if (e.eq(w)) return this.isOdd() ? w : p;
                if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
                if (e.isNegative()) return this.mul(e.neg()).neg();
                if (this.lt(d) && e.lt(d)) return r(this.toNumber() * e.toNumber(), this.unsigned);
                var n = this.high >>> 16,
                  o = 65535 & this.high,
                  a = this.low >>> 16,
                  u = 65535 & this.low,
                  c = e.high >>> 16,
                  f = 65535 & e.high,
                  l = e.low >>> 16,
                  h = 65535 & e.low,
                  y = 0,
                  v = 0,
                  g = 0,
                  m = 0;
                return m += u * h, g += m >>> 16, m &= 65535, g += a * h, v += g >>> 16, g &= 65535, g += u * l, v += g >>> 16, g &= 65535, v += o * h, y += v >>> 16, v &= 65535, v += a * l, y += v >>> 16, v &= 65535, v += u * f, y += v >>> 16, v &= 65535, y += n * h + o * l + a * f + u * c, y &= 65535, i(g << 16 | m, y << 16 | v, this.unsigned)
              }, E.mul = E.multiply, E.divide = function(e) {
                if (t(e) || (e = s(e)), e.isZero()) throw Error("division by zero");
                if (this.isZero()) return this.unsigned ? y : p;
                var n, i, o;
                if (this.unsigned) {
                  if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return y;
                  if (e.gt(this.shru(1))) return g;
                  o = y
                } else {
                  if (this.eq(w)) {
                    if (e.eq(v) || e.eq(m)) return w;
                    if (e.eq(w)) return v;
                    return n = this.shr(1).div(e).shl(1), n.eq(p) ? e.isNegative() ? v : m : (i = this.sub(e.mul(n)), o = n.add(i.div(e)))
                  }
                  if (e.eq(w)) return this.unsigned ? y : p;
                  if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
                  if (e.isNegative()) return this.div(e.neg()).neg();
                  o = p
                }
                for (i = this; i.gte(e);) {
                  n = Math.max(1, Math.floor(i.toNumber() / e.toNumber()));
                  for (var a = Math.ceil(Math.log(n) / Math.LN2), u = a <= 48 ? 1 : c(2, a - 48), f = r(n), l = f.mul(e); l.isNegative() || l.gt(i);) n -= u, f = r(n, this.unsigned), l = f.mul(e);
                  f.isZero() && (f = v), o = o.add(f), i = i.sub(l)
                }
                return o
              }, E.div = E.divide, E.modulo = function(e) {
                return t(e) || (e = s(e)), this.sub(this.div(e).mul(e))
              }, E.mod = E.modulo, E.not = function() {
                return i(~this.low, ~this.high, this.unsigned)
              }, E.and = function(e) {
                return t(e) || (e = s(e)), i(this.low & e.low, this.high & e.high, this.unsigned)
              }, E.or = function(e) {
                return t(e) || (e = s(e)), i(this.low | e.low, this.high | e.high, this.unsigned)
              }, E.xor = function(e) {
                return t(e) || (e = s(e)), i(this.low ^ e.low, this.high ^ e.high, this.unsigned)
              }, E.shiftLeft = function(e) {
                return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? i(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : i(0, this.low << e - 32, this.unsigned)
              }, E.shl = E.shiftLeft, E.shiftRight = function(e) {
                return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? i(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : i(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned)
              }, E.shr = E.shiftRight, E.shiftRightUnsigned = function(e) {
                if (t(e) && (e = e.toInt()), 0 === (e &= 63)) return this;
                var n = this.high;
                if (e < 32) {
                  return i(this.low >>> e | n << 32 - e, n >>> e, this.unsigned)
                }
                return 32 === e ? i(n, 0, this.unsigned) : i(n >>> e - 32, 0, this.unsigned)
              }, E.shru = E.shiftRightUnsigned, E.toSigned = function() {
                return this.unsigned ? i(this.low, this.high, !1) : this
              }, E.toUnsigned = function() {
                return this.unsigned ? this : i(this.low, this.high, !0)
              }, E.toBytes = function(e) {
                return e ? this.toBytesLE() : this.toBytesBE()
              }, E.toBytesLE = function() {
                var e = this.high,
                  t = this.low;
                return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255]
              }, E.toBytesBE = function() {
                var e = this.high,
                  t = this.low;
                return [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
              }, e
            })
          }),
          Hi = i(function(e) {
            /**
             * @license bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>
             * Backing buffer: ArrayBuffer, Accessor: Uint8Array
             * Released under the Apache License, Version 2.0
             * see: https://github.com/dcodeIO/bytebuffer.js for details
             */
            ! function(t, r) {
              "function" == typeof n && e && e.exports ? e.exports = function() {
                var e;
                try {
                  e = Gi
                } catch (e) {}
                return r(e)
              }() : (t.dcodeIO = t.dcodeIO || {}).ByteBuffer = r(t.dcodeIO.Long)
            }(X, function(e) {
              function t(e) {
                var t = 0;
                return function() {
                  return t < e.length ? e.charCodeAt(t++) : null
                }
              }

              function n() {
                var e = [],
                  t = [];
                return function() {
                  if (0 === arguments.length) return t.join("") + u.apply(String, e);
                  e.length + arguments.length > 1024 && (t.push(u.apply(String, e)), e.length = 0), Array.prototype.push.apply(e, arguments)
                }
              }

              function r(e, t, n, r, i) {
                var o, s, a = 8 * i - r - 1,
                  u = (1 << a) - 1,
                  c = u >> 1,
                  f = -7,
                  l = n ? i - 1 : 0,
                  h = n ? -1 : 1,
                  d = e[t + l];
                for (l += h, o = d & (1 << -f) - 1, d >>= -f, f += a; f > 0; o = 256 * o + e[t + l], l += h, f -= 8);
                for (s = o & (1 << -f) - 1, o >>= -f, f += r; f > 0; s = 256 * s + e[t + l], l += h, f -= 8);
                if (0 === o) o = 1 - c;
                else {
                  if (o === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                  s += Math.pow(2, r), o -= c
                }
                return (d ? -1 : 1) * s * Math.pow(2, o - r)
              }

              function i(e, t, n, r, i, o) {
                var s, a, u, c = 8 * o - i - 1,
                  f = (1 << c) - 1,
                  l = f >> 1,
                  h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                  d = r ? 0 : o - 1,
                  p = r ? 1 : -1,
                  y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), t += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l), t * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + d] = 255 & a, d += p, a /= 256, i -= 8);
                for (s = s << i | a, c += i; c > 0; e[n + d] = 255 & s, d += p, s /= 256, c -= 8);
                e[n + d - p] |= 128 * y
              }
              var o = function(e, t, n) {
                if (void 0 === e && (e = o.DEFAULT_CAPACITY), void 0 === t && (t = o.DEFAULT_ENDIAN), void 0 === n && (n = o.DEFAULT_NOASSERT), !n) {
                  if ((e |= 0) < 0) throw RangeError("Illegal capacity");
                  t = !!t, n = !!n
                }
                this.buffer = 0 === e ? a : new ArrayBuffer(e), this.view = 0 === e ? null : new Uint8Array(this.buffer), this.offset = 0, this.markedOffset = -1, this.limit = e, this.littleEndian = t, this.noAssert = n
              };
              o.VERSION = "5.0.1", o.LITTLE_ENDIAN = !0, o.BIG_ENDIAN = !1, o.DEFAULT_CAPACITY = 16, o.DEFAULT_ENDIAN = o.BIG_ENDIAN, o.DEFAULT_NOASSERT = !1, o.Long = e || null;
              var s = o.prototype;
              s.__isByteBuffer__, Object.defineProperty(s, "__isByteBuffer__", {
                value: !0,
                enumerable: !1,
                configurable: !1
              });
              var a = new ArrayBuffer(0),
                u = String.fromCharCode;
              o.accessor = function() {
                return Uint8Array
              }, o.allocate = function(e, t, n) {
                return new o(e, t, n)
              }, o.concat = function(e, t, n, r) {
                "boolean" != typeof t && "string" == typeof t || (r = n, n = t, t = void 0);
                for (var i, s = 0, a = 0, u = e.length; a < u; ++a) o.isByteBuffer(e[a]) || (e[a] = o.wrap(e[a], t)), (i = e[a].limit - e[a].offset) > 0 && (s += i);
                if (0 === s) return new o(0, n, r);
                var c, f = new o(s, n, r);
                for (a = 0; a < u;) c = e[a++], (i = c.limit - c.offset) <= 0 || (f.view.set(c.view.subarray(c.offset, c.limit), f.offset), f.offset += i);
                return f.limit = f.offset, f.offset = 0, f
              }, o.isByteBuffer = function(e) {
                return !0 === (e && e.__isByteBuffer__)
              }, o.type = function() {
                return ArrayBuffer
              }, o.wrap = function(e, t, n, r) {
                if ("string" != typeof t && (r = n, n = t, t = void 0), "string" == typeof e) switch (void 0 === t && (t = "utf8"), t) {
                  case "base64":
                    return o.fromBase64(e, n);
                  case "hex":
                    return o.fromHex(e, n);
                  case "binary":
                    return o.fromBinary(e, n);
                  case "utf8":
                    return o.fromUTF8(e, n);
                  case "debug":
                    return o.fromDebug(e, n);
                  default:
                    throw Error("Unsupported encoding: " + t)
                }
                if (null === e || "object" != typeof e) throw TypeError("Illegal buffer");
                var i;
                if (o.isByteBuffer(e)) return i = s.clone.call(e), i.markedOffset = -1, i;
                if (e instanceof Uint8Array) i = new o(0, n, r), e.length > 0 && (i.buffer = e.buffer, i.offset = e.byteOffset, i.limit = e.byteOffset + e.byteLength, i.view = new Uint8Array(e.buffer));
                else if (e instanceof ArrayBuffer) i = new o(0, n, r), e.byteLength > 0 && (i.buffer = e, i.offset = 0, i.limit = e.byteLength, i.view = e.byteLength > 0 ? new Uint8Array(e) : null);
                else {
                  if ("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer");
                  i = new o(e.length, n, r), i.limit = e.length;
                  for (var a = 0; a < e.length; ++a) i.view[a] = e[a]
                }
                return i
              }, s.writeBitSet = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if (!(e instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var r, i = t,
                  o = e.length,
                  s = o >> 3,
                  a = 0;
                for (t += this.writeVarint32(o, t); s--;) r = 1 & !!e[a++] | (1 & !!e[a++]) << 1 | (1 & !!e[a++]) << 2 | (1 & !!e[a++]) << 3 | (1 & !!e[a++]) << 4 | (1 & !!e[a++]) << 5 | (1 & !!e[a++]) << 6 | (1 & !!e[a++]) << 7, this.writeByte(r, t++);
                if (a < o) {
                  var u = 0;
                  for (r = 0; a < o;) r |= (1 & !!e[a++]) << u++;
                  this.writeByte(r, t++)
                }
                return n ? (this.offset = t, this) : t - i
              }, s.readBitSet = function(e) {
                var t = void 0 === e;
                t && (e = this.offset);
                var n, r = this.readVarint32(e),
                  i = r.value,
                  o = i >> 3,
                  s = 0,
                  a = [];
                for (e += r.length; o--;) n = this.readByte(e++), a[s++] = !!(1 & n), a[s++] = !!(2 & n), a[s++] = !!(4 & n), a[s++] = !!(8 & n), a[s++] = !!(16 & n), a[s++] = !!(32 & n), a[s++] = !!(64 & n), a[s++] = !!(128 & n);
                if (s < i) {
                  var u = 0;
                  for (n = this.readByte(e++); s < i;) a[s++] = !!(n >> u++ & 1)
                }
                return t && (this.offset = e), a
              }, s.readBytes = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength)
                }
                var r = this.slice(t, t + e);
                return n && (this.offset += e), r
              }, s.writeBytes = s.append, s.writeInt8 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 1;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), this
              }, s.writeByte = s.writeInt8, s.readInt8 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var n = this.view[e];
                return 128 == (128 & n) && (n = -(255 - n + 1)), t && (this.offset += 1), n
              }, s.readByte = s.readInt8, s.writeUint8 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 1;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), this
              }, s.writeUInt8 = s.writeUint8, s.readUint8 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var n = this.view[e];
                return t && (this.offset += 1), n
              }, s.readUInt8 = s.readUint8, s.writeInt16 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 2;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), n && (this.offset += 2), this
              }, s.writeShort = s.writeInt16, s.readInt16 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, n |= this.view[e + 1]), 32768 == (32768 & n) && (n = -(65535 - n + 1)), t && (this.offset += 2), n
              }, s.readShort = s.readInt16, s.writeUint16 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 2;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), n && (this.offset += 2), this
              }, s.writeUInt16 = s.writeUint16, s.readUint16 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, n |= this.view[e + 1]), t && (this.offset += 2), n
              }, s.readUInt16 = s.readUint16, s.writeInt32 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), n && (this.offset += 4), this
              }, s.writeInt = s.writeInt32, s.readInt32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), n |= 0, t && (this.offset += 4), n
              }, s.readInt = s.readInt32, s.writeUint32 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), n && (this.offset += 4), this
              }, s.writeUInt32 = s.writeUint32, s.readUint32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), t && (this.offset += 4), n
              }, s.readUInt32 = s.readUint32, e && (s.writeInt64 = function(t, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" == typeof t) t = e.fromNumber(t);
                  else if ("string" == typeof t) t = e.fromString(t);
                  else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), n += 8;
                var i = this.buffer.byteLength;
                n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
                var o = t.low,
                  s = t.high;
                return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, this.view[n + 3] = 255 & o), r && (this.offset += 8), this
              }, s.writeLong = s.writeInt64, s.readInt64 = function(t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
                }
                var r = 0,
                  i = 0;
                this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], r += this.view[t] << 24 >>> 0);
                var o = new e(r, i, !1);
                return n && (this.offset += 8), o
              }, s.readLong = s.readInt64, s.writeUint64 = function(t, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" == typeof t) t = e.fromNumber(t);
                  else if ("string" == typeof t) t = e.fromString(t);
                  else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), n += 8;
                var i = this.buffer.byteLength;
                n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
                var o = t.low,
                  s = t.high;
                return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, this.view[n + 3] = 255 & o), r && (this.offset += 8), this
              }, s.writeUInt64 = s.writeUint64, s.readUint64 = function(t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
                }
                var r = 0,
                  i = 0;
                this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], r += this.view[t] << 24 >>> 0);
                var o = new e(r, i, !0);
                return n && (this.offset += 8), o
              }, s.readUInt64 = s.readUint64), s.writeFloat32 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, i(this.view, e, t, this.littleEndian, 23, 4), n && (this.offset += 4), this
              }, s.writeFloat = s.writeFloat32, s.readFloat32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var n = r(this.view, e, this.littleEndian, 23, 4);
                return t && (this.offset += 4), n
              }, s.readFloat = s.readFloat32, s.writeFloat64 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 8;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 8, i(this.view, e, t, this.littleEndian, 52, 8), n && (this.offset += 8), this
              }, s.writeDouble = s.writeFloat64, s.readFloat64 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                }
                var n = r(this.view, e, this.littleEndian, 52, 8);
                return t && (this.offset += 8), n
              }, s.readDouble = s.readFloat64, o.MAX_VARINT32_BYTES = 5, o.calculateVarint32 = function(e) {
                return e >>>= 0, e < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ? 3 : e < 1 << 28 ? 4 : 5
              }, o.zigZagEncode32 = function(e) {
                return ((e |= 0) << 1 ^ e >> 31) >>> 0
              }, o.zigZagDecode32 = function(e) {
                return e >>> 1 ^ -(1 & e) | 0
              }, s.writeVarint32 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var r, i = o.calculateVarint32(e);
                t += i;
                var s = this.buffer.byteLength;
                for (t > s && this.resize((s *= 2) > t ? s : t), t -= i, e >>>= 0; e >= 128;) r = 127 & e | 128, this.view[t++] = r, e >>>= 7;
                return this.view[t++] = e, n ? (this.offset = t, this) : i
              }, s.writeVarint32ZigZag = function(e, t) {
                return this.writeVarint32(o.zigZagEncode32(e), t)
              }, s.readVarint32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var n, r = 0,
                  i = 0;
                do {
                  if (!this.noAssert && e > this.limit) {
                    var o = Error("Truncated");
                    throw o.truncated = !0, o
                  }
                  n = this.view[e++], r < 5 && (i |= (127 & n) << 7 * r), ++r
                } while (0 != (128 & n));
                return i |= 0, t ? (this.offset = e, i) : {
                  value: i,
                  length: r
                }
              }, s.readVarint32ZigZag = function(e) {
                var t = this.readVarint32(e);
                return "object" == typeof t ? t.value = o.zigZagDecode32(t.value) : t = o.zigZagDecode32(t), t
              }, e && (o.MAX_VARINT64_BYTES = 10, o.calculateVarint64 = function(t) {
                "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t));
                var n = t.toInt() >>> 0,
                  r = t.shiftRightUnsigned(28).toInt() >>> 0,
                  i = t.shiftRightUnsigned(56).toInt() >>> 0;
                return 0 == i ? 0 == r ? n < 16384 ? n < 128 ? 1 : 2 : n < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : i < 128 ? 9 : 10
              }, o.zigZagEncode64 = function(t) {
                return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned()
              }, o.zigZagDecode64 = function(t) {
                return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned()
              }, s.writeVarint64 = function(t, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" == typeof t) t = e.fromNumber(t);
                  else if ("string" == typeof t) t = e.fromString(t);
                  else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned());
                var i = o.calculateVarint64(t),
                  s = t.toInt() >>> 0,
                  a = t.shiftRightUnsigned(28).toInt() >>> 0,
                  u = t.shiftRightUnsigned(56).toInt() >>> 0;
                n += i;
                var c = this.buffer.byteLength;
                switch (n > c && this.resize((c *= 2) > n ? c : n), n -= i, i) {
                  case 10:
                    this.view[n + 9] = u >>> 7 & 1;
                  case 9:
                    this.view[n + 8] = 9 !== i ? 128 | u : 127 & u;
                  case 8:
                    this.view[n + 7] = 8 !== i ? a >>> 21 | 128 : a >>> 21 & 127;
                  case 7:
                    this.view[n + 6] = 7 !== i ? a >>> 14 | 128 : a >>> 14 & 127;
                  case 6:
                    this.view[n + 5] = 6 !== i ? a >>> 7 | 128 : a >>> 7 & 127;
                  case 5:
                    this.view[n + 4] = 5 !== i ? 128 | a : 127 & a;
                  case 4:
                    this.view[n + 3] = 4 !== i ? s >>> 21 | 128 : s >>> 21 & 127;
                  case 3:
                    this.view[n + 2] = 3 !== i ? s >>> 14 | 128 : s >>> 14 & 127;
                  case 2:
                    this.view[n + 1] = 2 !== i ? s >>> 7 | 128 : s >>> 7 & 127;
                  case 1:
                    this.view[n] = 1 !== i ? 128 | s : 127 & s
                }
                return r ? (this.offset += i, this) : i
              }, s.writeVarint64ZigZag = function(e, t) {
                return this.writeVarint64(o.zigZagEncode64(e), t)
              }, s.readVarint64 = function(t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
                }
                var r = t,
                  i = 0,
                  o = 0,
                  s = 0,
                  a = 0;
                if (a = this.view[t++], i = 127 & a, 128 & a && (a = this.view[t++], i |= (127 & a) << 7, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], i |= (127 & a) << 14, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], i |= (127 & a) << 21, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o = 127 & a, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o |= (127 & a) << 7, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o |= (127 & a) << 14, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o |= (127 & a) << 21, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], s = 127 & a, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], s |= (127 & a) << 7, 128 & a || this.noAssert && void 0 === a)))))))))) throw Error("Buffer overrun");
                var u = e.fromBits(i | o << 28, o >>> 4 | s << 24, !1);
                return n ? (this.offset = t, u) : {
                  value: u,
                  length: t - r
                }
              }, s.readVarint64ZigZag = function(t) {
                var n = this.readVarint64(t);
                return n && n.value instanceof e ? n.value = o.zigZagDecode64(n.value) : n = o.zigZagDecode64(n), n
              }), s.writeCString = function(e, n) {
                var r = void 0 === n;
                r && (n = this.offset);
                var i, o = e.length;
                if (!this.noAssert) {
                  if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                  for (i = 0; i < o; ++i)
                    if (0 === e.charCodeAt(i)) throw RangeError("Illegal str: Contains NULL-characters");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                o = f.calculateUTF16asUTF8(t(e))[1], n += o + 1;
                var s = this.buffer.byteLength;
                return n > s && this.resize((s *= 2) > n ? s : n), n -= o + 1, f.encodeUTF16toUTF8(t(e), function(e) {
                  this.view[n++] = e
                }.bind(this)), this.view[n++] = 0, r ? (this.offset = n, this) : o
              }, s.readCString = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var r, i = e,
                  o = -1;
                return f.decodeUTF8toUTF16(function() {
                  if (0 === o) return null;
                  if (e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
                  return o = this.view[e++], 0 === o ? null : o
                }.bind(this), r = n(), !0), t ? (this.offset = e, r()) : {
                  string: r(),
                  length: e - i
                }
              }, s.writeIString = function(e, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                var i, o = n;
                i = f.calculateUTF16asUTF8(t(e), this.noAssert)[1], n += 4 + i;
                var s = this.buffer.byteLength;
                if (n > s && this.resize((s *= 2) > n ? s : n), n -= 4 + i, this.littleEndian ? (this.view[n + 3] = i >>> 24 & 255, this.view[n + 2] = i >>> 16 & 255, this.view[n + 1] = i >>> 8 & 255, this.view[n] = 255 & i) : (this.view[n] = i >>> 24 & 255, this.view[n + 1] = i >>> 16 & 255, this.view[n + 2] = i >>> 8 & 255, this.view[n + 3] = 255 & i), n += 4, f.encodeUTF16toUTF8(t(e), function(e) {
                    this.view[n++] = e
                  }.bind(this)), n !== o + 4 + i) throw RangeError("Illegal range: Truncated data, " + n + " == " + (n + 4 + i));
                return r ? (this.offset = n, this) : n - o
              }, s.readIString = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var n = e,
                  r = this.readUint32(e),
                  i = this.readUTF8String(r, o.METRICS_BYTES, e += 4);
                return e += i.length, t ? (this.offset = e, i.string) : {
                  string: i.string,
                  length: e - n
                }
              }, o.METRICS_CHARS = "c", o.METRICS_BYTES = "b", s.writeUTF8String = function(e, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                var i, o = n;
                i = f.calculateUTF16asUTF8(t(e))[1], n += i;
                var s = this.buffer.byteLength;
                return n > s && this.resize((s *= 2) > n ? s : n), n -= i, f.encodeUTF16toUTF8(t(e), function(e) {
                  this.view[n++] = e
                }.bind(this)), r ? (this.offset = n, this) : n - o
              }, s.writeString = s.writeUTF8String, o.calculateUTF8Chars = function(e) {
                return f.calculateUTF16asUTF8(t(e))[0]
              }, o.calculateUTF8Bytes = function(e) {
                return f.calculateUTF16asUTF8(t(e))[1]
              }, o.calculateString = o.calculateUTF8Bytes, s.readUTF8String = function(e, t, r) {
                "number" == typeof t && (r = t, t = void 0);
                var i = void 0 === r;
                if (i && (r = this.offset), void 0 === t && (t = o.METRICS_CHARS), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                  if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                }
                var s, a = 0,
                  u = r;
                if (t === o.METRICS_CHARS) {
                  if (s = n(), f.decodeUTF8(function() {
                      return a < e && r < this.limit ? this.view[r++] : null
                    }.bind(this), function(e) {
                      ++a, f.UTF8toUTF16(e, s)
                    }), a !== e) throw RangeError("Illegal range: Truncated data, " + a + " == " + e);
                  return i ? (this.offset = r, s()) : {
                    string: s(),
                    length: r - u
                  }
                }
                if (t === o.METRICS_BYTES) {
                  if (!this.noAssert) {
                    if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+" + e + ") <= " + this.buffer.byteLength)
                  }
                  var c = r + e;
                  if (f.decodeUTF8toUTF16(function() {
                      return r < c ? this.view[r++] : null
                    }.bind(this), s = n(), this.noAssert), r !== c) throw RangeError("Illegal range: Truncated data, " + r + " == " + c);
                  return i ? (this.offset = r, s()) : {
                    string: s(),
                    length: r - u
                  }
                }
                throw TypeError("Unsupported metrics: " + t)
              }, s.readString = s.readUTF8String, s.writeVString = function(e, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                var i, s, a = n;
                i = f.calculateUTF16asUTF8(t(e), this.noAssert)[1], s = o.calculateVarint32(i), n += s + i;
                var u = this.buffer.byteLength;
                if (n > u && this.resize((u *= 2) > n ? u : n), n -= s + i, n += this.writeVarint32(i, n), f.encodeUTF16toUTF8(t(e), function(e) {
                    this.view[n++] = e
                  }.bind(this)), n !== a + i + s) throw RangeError("Illegal range: Truncated data, " + n + " == " + (n + i + s));
                return r ? (this.offset = n, this) : n - a
              }, s.readVString = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var n = e,
                  r = this.readVarint32(e),
                  i = this.readUTF8String(r.value, o.METRICS_BYTES, e += r.length);
                return e += i.length, t ? (this.offset = e, i.string) : {
                  string: i.string,
                  length: e - n
                }
              }, s.append = function(e, t, n) {
                "number" != typeof t && "string" == typeof t || (n = t, t = void 0);
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                e instanceof o || (e = o.wrap(e, t));
                var i = e.limit - e.offset;
                if (i <= 0) return this;
                n += i;
                var s = this.buffer.byteLength;
                return n > s && this.resize((s *= 2) > n ? s : n), n -= i, this.view.set(e.view.subarray(e.offset, e.limit), n), e.offset += i, r && (this.offset += i), this
              }, s.appendTo = function(e, t) {
                return e.append(this, t), this
              }, s.assert = function(e) {
                return this.noAssert = !e, this
              }, s.capacity = function() {
                return this.buffer.byteLength
              }, s.clear = function() {
                return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, this
              }, s.clone = function(e) {
                var t = new o(0, this.littleEndian, this.noAssert);
                return e ? (t.buffer = new ArrayBuffer(this.buffer.byteLength), t.view = new Uint8Array(t.buffer)) : (t.buffer = this.buffer, t.view = this.view), t.offset = this.offset, t.markedOffset = this.markedOffset, t.limit = this.limit, t
              }, s.compact = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                if (0 === e && t === this.buffer.byteLength) return this;
                var n = t - e;
                if (0 === n) return this.buffer = a, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = 0, this;
                var r = new ArrayBuffer(n),
                  i = new Uint8Array(r);
                return i.set(this.view.subarray(e, t)), this.buffer = r, this.view = i, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = n, this
              }, s.copy = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                if (e === t) return new o(0, this.littleEndian, this.noAssert);
                var n = t - e,
                  r = new o(n, this.littleEndian, this.noAssert);
                return r.offset = 0, r.limit = n, r.markedOffset >= 0 && (r.markedOffset -= e), this.copyTo(r, 0, e, t), r
              }, s.copyTo = function(e, t, n, r) {
                var i, s;
                if (!this.noAssert && !o.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer");
                if (t = (s = void 0 === t) ? e.offset : 0 | t, n = (i = void 0 === n) ? this.offset : 0 | n, r = void 0 === r ? this.limit : 0 | r, t < 0 || t > e.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + t + " <= " + e.buffer.byteLength);
                if (n < 0 || r > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + n + " <= " + this.buffer.byteLength);
                var a = r - n;
                return 0 === a ? e : (e.ensureCapacity(t + a), e.view.set(this.view.subarray(n, r), t), i && (this.offset += a), s && (e.offset += a), this)
              }, s.ensureCapacity = function(e) {
                var t = this.buffer.byteLength;
                return t < e ? this.resize((t *= 2) > e ? t : e) : this
              }, s.fill = function(e, t, n) {
                var r = void 0 === t;
                if (r && (t = this.offset), "string" == typeof e && e.length > 0 && (e = e.charCodeAt(0)), void 0 === t && (t = this.offset), void 0 === n && (n = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength)
                }
                if (t >= n) return this;
                for (; t < n;) this.view[t++] = e;
                return r && (this.offset = t), this
              }, s.flip = function() {
                return this.limit = this.offset, this.offset = 0, this
              }, s.mark = function(e) {
                if (e = void 0 === e ? this.offset : e, !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                }
                return this.markedOffset = e, this
              }, s.order = function(e) {
                if (!this.noAssert && "boolean" != typeof e) throw TypeError("Illegal littleEndian: Not a boolean");
                return this.littleEndian = !!e, this
              }, s.LE = function(e) {
                return this.littleEndian = void 0 === e || !!e, this
              }, s.BE = function(e) {
                return this.littleEndian = void 0 !== e && !e, this
              }, s.prepend = function(e, t, n) {
                "number" != typeof t && "string" == typeof t || (n = t, t = void 0);
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                e instanceof o || (e = o.wrap(e, t));
                var i = e.limit - e.offset;
                if (i <= 0) return this;
                var s = i - n;
                if (s > 0) {
                  var a = new ArrayBuffer(this.buffer.byteLength + s),
                    u = new Uint8Array(a);
                  u.set(this.view.subarray(n, this.buffer.byteLength), i), this.buffer = a, this.view = u, this.offset += s, this.markedOffset >= 0 && (this.markedOffset += s), this.limit += s, n += s
                } else {
                  new Uint8Array(this.buffer)
                }
                return this.view.set(e.view.subarray(e.offset, e.limit), n - i), e.offset = e.limit, r && (this.offset -= i), this
              }, s.prependTo = function(e, t) {
                return e.prepend(this, t), this
              }, s.printDebug = function(e) {
                "function" != typeof e && (e = console.log.bind(console)), e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0))
              }, s.remaining = function() {
                return this.limit - this.offset
              }, s.reset = function() {
                return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, this
              }, s.resize = function(e) {
                if (!this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal capacity: " + e + " (not an integer)");
                  if ((e |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + e)
                }
                if (this.buffer.byteLength < e) {
                  var t = new ArrayBuffer(e),
                    n = new Uint8Array(t);
                  n.set(this.view), this.buffer = t, this.view = n
                }
                return this
              }, s.reverse = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                return e === t ? this : (Array.prototype.reverse.call(this.view.subarray(e, t)), this)
              }, s.skip = function(e) {
                if (!this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                  e |= 0
                }
                var t = this.offset + e;
                if (!this.noAssert && (t < 0 || t > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength);
                return this.offset = t, this
              }, s.slice = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                var n = this.clone();
                return n.offset = e, n.limit = t, n
              }, s.toBuffer = function(e) {
                var t = this.offset,
                  n = this.limit;
                if (!this.noAssert) {
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: Not an integer");
                  if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal limit: Not an integer");
                  if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength)
                }
                if (!e && 0 === t && n === this.buffer.byteLength) return this.buffer;
                if (t === n) return a;
                var r = new ArrayBuffer(n - t);
                return new Uint8Array(r).set(new Uint8Array(this.buffer).subarray(t, n), 0), r
              }, s.toArrayBuffer = s.toBuffer, s.toString = function(e, t, n) {
                if (void 0 === e) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
                switch ("number" == typeof e && (e = "utf8", t = e, n = t), e) {
                  case "utf8":
                    return this.toUTF8(t, n);
                  case "base64":
                    return this.toBase64(t, n);
                  case "hex":
                    return this.toHex(t, n);
                  case "binary":
                    return this.toBinary(t, n);
                  case "debug":
                    return this.toDebug();
                  case "columns":
                    return this.toColumns();
                  default:
                    throw Error("Unsupported encoding: " + e)
                }
              };
              var c = function() {
                for (var e = {}, t = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47], n = [], r = 0, i = t.length; r < i; ++r) n[t[r]] = r;
                return e.encode = function(e, n) {
                  for (var r, i; null !== (r = e());) n(t[r >> 2 & 63]), i = (3 & r) << 4, null !== (r = e()) ? (i |= r >> 4 & 15, n(t[63 & (i | r >> 4 & 15)]), i = (15 & r) << 2, null !== (r = e()) ? (n(t[63 & (i | r >> 6 & 3)]), n(t[63 & r])) : (n(t[63 & i]), n(61))) : (n(t[63 & i]), n(61), n(61))
                }, e.decode = function(e, t) {
                  function r(e) {
                    throw Error("Illegal character code: " + e)
                  }
                  for (var i, o, s; null !== (i = e());)
                    if (o = n[i], void 0 === o && r(i), null !== (i = e()) && (s = n[i], void 0 === s && r(i), t(o << 2 >>> 0 | (48 & s) >> 4), null !== (i = e()))) {
                      if (void 0 === (o = n[i])) {
                        if (61 === i) break;
                        r(i)
                      }
                      if (t((15 & s) << 4 >>> 0 | (60 & o) >> 2), null !== (i = e())) {
                        if (void 0 === (s = n[i])) {
                          if (61 === i) break;
                          r(i)
                        }
                        t((3 & o) << 6 >>> 0 | s)
                      }
                    }
                }, e.test = function(e) {
                  return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)
                }, e
              }();
              s.toBase64 = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), e |= 0, t |= 0, e < 0 || t > this.capacity || e > t) throw RangeError("begin, end");
                var r;
                return c.encode(function() {
                  return e < t ? this.view[e++] : null
                }.bind(this), r = n()), r()
              }, o.fromBase64 = function(e, n) {
                if ("string" != typeof e) throw TypeError("str");
                var r = new o(e.length / 4 * 3, n),
                  i = 0;
                return c.decode(t(e), function(e) {
                  r.view[i++] = e
                }), r.limit = i, r
              }, o.btoa = function(e) {
                return o.fromBinary(e).toBase64()
              }, o.atob = function(e) {
                return o.fromBase64(e).toBinary()
              }, s.toBinary = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), e |= 0, t |= 0, e < 0 || t > this.capacity() || e > t) throw RangeError("begin, end");
                if (e === t) return "";
                for (var n = [], r = []; e < t;) n.push(this.view[e++]), n.length >= 1024 && (r.push(String.fromCharCode.apply(String, n)), n = []);
                return r.join("") + String.fromCharCode.apply(String, n)
              }, o.fromBinary = function(e, t) {
                if ("string" != typeof e) throw TypeError("str");
                for (var n, r = 0, i = e.length, s = new o(i, t); r < i;) {
                  if ((n = e.charCodeAt(r)) > 255) throw RangeError("illegal char code: " + n);
                  s.view[r++] = n
                }
                return s.limit = i, s
              }, s.toDebug = function(e) {
                for (var t, n = -1, r = this.buffer.byteLength, i = "", o = "", s = ""; n < r;) {
                  if (-1 !== n && (t = this.view[n], i += t < 16 ? "0" + t.toString(16).toUpperCase() : t.toString(16).toUpperCase(), e && (o += t > 32 && t < 127 ? String.fromCharCode(t) : ".")), ++n, e && n > 0 && n % 16 == 0 && n !== r) {
                    for (; i.length < 51;) i += " ";
                    s += i + o + "\n", i = o = ""
                  }
                  n === this.offset && n === this.limit ? i += n === this.markedOffset ? "!" : "|" : n === this.offset ? i += n === this.markedOffset ? "[" : "<" : n === this.limit ? i += n === this.markedOffset ? "]" : ">" : i += n === this.markedOffset ? "'" : e || 0 !== n && n !== r ? " " : ""
                }
                if (e && " " !== i) {
                  for (; i.length < 51;) i += " ";
                  s += i + o + "\n"
                }
                return e ? s : i
              }, o.fromDebug = function(e, t, n) {
                for (var r, i, s = e.length, a = new o((s + 1) / 3 | 0, t, n), u = 0, c = 0, f = !1, l = !1, h = !1, d = !1, p = !1; u < s;) {
                  switch (r = e.charAt(u++)) {
                    case "!":
                      if (!n) {
                        if (l || h || d) {
                          p = !0;
                          break
                        }
                        l = h = d = !0
                      }
                      a.offset = a.markedOffset = a.limit = c, f = !1;
                      break;
                    case "|":
                      if (!n) {
                        if (l || d) {
                          p = !0;
                          break
                        }
                        l = d = !0
                      }
                      a.offset = a.limit = c, f = !1;
                      break;
                    case "[":
                      if (!n) {
                        if (l || h) {
                          p = !0;
                          break
                        }
                        l = h = !0
                      }
                      a.offset = a.markedOffset = c, f = !1;
                      break;
                    case "<":
                      if (!n) {
                        if (l) {
                          p = !0;
                          break
                        }
                        l = !0
                      }
                      a.offset = c, f = !1;
                      break;
                    case "]":
                      if (!n) {
                        if (d || h) {
                          p = !0;
                          break
                        }
                        d = h = !0
                      }
                      a.limit = a.markedOffset = c, f = !1;
                      break;
                    case ">":
                      if (!n) {
                        if (d) {
                          p = !0;
                          break
                        }
                        d = !0
                      }
                      a.limit = c, f = !1;
                      break;
                    case "'":
                      if (!n) {
                        if (h) {
                          p = !0;
                          break
                        }
                        h = !0
                      }
                      a.markedOffset = c, f = !1;
                      break;
                    case " ":
                      f = !1;
                      break;
                    default:
                      if (!n && f) {
                        p = !0;
                        break
                      }
                      if (i = parseInt(r + e.charAt(u++), 16), !n && (isNaN(i) || i < 0 || i > 255)) throw TypeError("Illegal str: Not a debug encoded string");
                      a.view[c++] = i, f = !0
                  }
                  if (p) throw TypeError("Illegal str: Invalid symbol at " + u)
                }
                if (!n) {
                  if (!l || !d) throw TypeError("Illegal str: Missing offset or limit");
                  if (c < a.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + c + " < " + s)
                }
                return a
              }, s.toHex = function(e, t) {
                if (e = void 0 === e ? this.offset : e, t = void 0 === t ? this.limit : t, !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                for (var n, r = new Array(t - e); e < t;) n = this.view[e++], n < 16 ? r.push("0", n.toString(16)) : r.push(n.toString(16));
                return r.join("")
              }, o.fromHex = function(e, t, n) {
                if (!n) {
                  if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                  if (e.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2")
                }
                for (var r, i = e.length, s = new o(i / 2 | 0, t), a = 0, u = 0; a < i; a += 2) {
                  if (r = parseInt(e.substring(a, a + 2), 16), !n && (!isFinite(r) || r < 0 || r > 255)) throw TypeError("Illegal str: Contains non-hex characters");
                  s.view[u++] = r
                }
                return s.limit = u, s
              };
              var f = function() {
                var e = {};
                return e.MAX_CODEPOINT = 1114111, e.encodeUTF8 = function(e, t) {
                  var n = null;
                  for ("number" == typeof e && (n = e, e = function() {
                      return null
                    }); null !== n || null !== (n = e());) n < 128 ? t(127 & n) : n < 2048 ? (t(n >> 6 & 31 | 192), t(63 & n | 128)) : n < 65536 ? (t(n >> 12 & 15 | 224), t(n >> 6 & 63 | 128), t(63 & n | 128)) : (t(n >> 18 & 7 | 240), t(n >> 12 & 63 | 128), t(n >> 6 & 63 | 128), t(63 & n | 128)), n = null
                }, e.decodeUTF8 = function(e, t) {
                  for (var n, r, i, o, s = function(e) {
                      e = e.slice(0, e.indexOf(null));
                      var t = Error(e.toString());
                      throw t.name = "TruncatedError", t.bytes = e, t
                    }; null !== (n = e());)
                    if (0 == (128 & n)) t(n);
                    else if (192 == (224 & n)) null === (r = e()) && s([n, r]), t((31 & n) << 6 | 63 & r);
                  else if (224 == (240 & n))(null === (r = e()) || null === (i = e())) && s([n, r, i]), t((15 & n) << 12 | (63 & r) << 6 | 63 & i);
                  else {
                    if (240 != (248 & n)) throw RangeError("Illegal starting byte: " + n);
                    (null === (r = e()) || null === (i = e()) || null === (o = e())) && s([n, r, i, o]), t((7 & n) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & o)
                  }
                }, e.UTF16toUTF8 = function(e, t) {
                  for (var n, r = null;;) {
                    if (null === (n = null !== r ? r : e())) break;
                    n >= 55296 && n <= 57343 && null !== (r = e()) && r >= 56320 && r <= 57343 ? (t(1024 * (n - 55296) + r - 56320 + 65536), r = null) : t(n)
                  }
                  null !== r && t(r)
                }, e.UTF8toUTF16 = function(e, t) {
                  var n = null;
                  for ("number" == typeof e && (n = e, e = function() {
                      return null
                    }); null !== n || null !== (n = e());) n <= 65535 ? t(n) : (n -= 65536, t(55296 + (n >> 10)), t(n % 1024 + 56320)), n = null
                }, e.encodeUTF16toUTF8 = function(t, n) {
                  e.UTF16toUTF8(t, function(t) {
                    e.encodeUTF8(t, n)
                  })
                }, e.decodeUTF8toUTF16 = function(t, n) {
                  e.decodeUTF8(t, function(t) {
                    e.UTF8toUTF16(t, n)
                  })
                }, e.calculateCodePoint = function(e) {
                  return e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
                }, e.calculateUTF8 = function(e) {
                  for (var t, n = 0; null !== (t = e());) n += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                  return n
                }, e.calculateUTF16asUTF8 = function(t) {
                  var n = 0,
                    r = 0;
                  return e.UTF16toUTF8(t, function(e) {
                    ++n, r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
                  }), [n, r]
                }, e
              }();
              return s.toUTF8 = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                var r;
                try {
                  f.decodeUTF8toUTF16(function() {
                    return e < t ? this.view[e++] : null
                  }.bind(this), r = n())
                } catch (n) {
                  if (e !== t) throw RangeError("Illegal range: Truncated data, " + e + " != " + t)
                }
                return r()
              }, o.fromUTF8 = function(e, n, r) {
                if (!r && "string" != typeof e) throw TypeError("Illegal str: Not a string");
                var i = new o(f.calculateUTF16asUTF8(t(e), !0)[1], n, r),
                  s = 0;
                return f.encodeUTF16toUTF8(t(e), function(e) {
                  i.view[s++] = e
                }), i.limit = s, i
              }, o
            })
          }),
          Qi = {},
          Ki = Object.freeze({
            default: Qi
          }),
          $i = Ki && Qi || Ki,
          Xi = i(function(e) {
            /**
             * @license protobuf.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
             * Released under the Apache License, Version 2.0
             * see: https://github.com/dcodeIO/protobuf.js for details
             */
            ! function(t, r) {
              "function" == typeof n && e && e.exports ? e.exports = r(Hi, !0) : (t.dcodeIO = t.dcodeIO || {}).ProtoBuf = r(t.dcodeIO.ByteBuffer)
            }(X, function(e, t) {
              var n = {};
              return n.ByteBuffer = e, n.Long = e.Long || null, n.VERSION = "5.0.2", n.WIRE_TYPES = {}, n.WIRE_TYPES.VARINT = 0, n.WIRE_TYPES.BITS64 = 1, n.WIRE_TYPES.LDELIM = 2, n.WIRE_TYPES.STARTGROUP = 3, n.WIRE_TYPES.ENDGROUP = 4, n.WIRE_TYPES.BITS32 = 5, n.PACKABLE_WIRE_TYPES = [n.WIRE_TYPES.VARINT, n.WIRE_TYPES.BITS64, n.WIRE_TYPES.BITS32], n.TYPES = {
                int32: {
                  name: "int32",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: 0
                },
                uint32: {
                  name: "uint32",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: 0
                },
                sint32: {
                  name: "sint32",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: 0
                },
                int64: {
                  name: "int64",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: n.Long ? n.Long.ZERO : void 0
                },
                uint64: {
                  name: "uint64",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: n.Long ? n.Long.UZERO : void 0
                },
                sint64: {
                  name: "sint64",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: n.Long ? n.Long.ZERO : void 0
                },
                bool: {
                  name: "bool",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: !1
                },
                double: {
                  name: "double",
                  wireType: n.WIRE_TYPES.BITS64,
                  defaultValue: 0
                },
                string: {
                  name: "string",
                  wireType: n.WIRE_TYPES.LDELIM,
                  defaultValue: ""
                },
                bytes: {
                  name: "bytes",
                  wireType: n.WIRE_TYPES.LDELIM,
                  defaultValue: null
                },
                fixed32: {
                  name: "fixed32",
                  wireType: n.WIRE_TYPES.BITS32,
                  defaultValue: 0
                },
                sfixed32: {
                  name: "sfixed32",
                  wireType: n.WIRE_TYPES.BITS32,
                  defaultValue: 0
                },
                fixed64: {
                  name: "fixed64",
                  wireType: n.WIRE_TYPES.BITS64,
                  defaultValue: n.Long ? n.Long.UZERO : void 0
                },
                sfixed64: {
                  name: "sfixed64",
                  wireType: n.WIRE_TYPES.BITS64,
                  defaultValue: n.Long ? n.Long.ZERO : void 0
                },
                float: {
                  name: "float",
                  wireType: n.WIRE_TYPES.BITS32,
                  defaultValue: 0
                },
                enum: {
                  name: "enum",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: 0
                },
                message: {
                  name: "message",
                  wireType: n.WIRE_TYPES.LDELIM,
                  defaultValue: null
                },
                group: {
                  name: "group",
                  wireType: n.WIRE_TYPES.STARTGROUP,
                  defaultValue: null
                }
              }, n.MAP_KEY_TYPES = [n.TYPES.int32, n.TYPES.sint32, n.TYPES.sfixed32, n.TYPES.uint32, n.TYPES.fixed32, n.TYPES.int64, n.TYPES.sint64, n.TYPES.sfixed64, n.TYPES.uint64, n.TYPES.fixed64, n.TYPES.bool, n.TYPES.string, n.TYPES.bytes], n.ID_MIN = 1, n.ID_MAX = 536870911, n.convertFieldsToCamelCase = !1, n.populateAccessors = !0, n.populateDefaults = !0, n.Util = function() {
                var e = {};
                return e.IS_NODE = !("object" != typeof $ || $ + "" != "[object process]" || $.browser), e.XHR = function() {
                  for (var e = [function() {
                      return new XMLHttpRequest
                    }, function() {
                      return new ActiveXObject("Msxml2.XMLHTTP")
                    }, function() {
                      return new ActiveXObject("Msxml3.XMLHTTP")
                    }, function() {
                      return new ActiveXObject("Microsoft.XMLHTTP")
                    }], t = null, n = 0; n < e.length; n++) {
                    try {
                      t = e[n]()
                    } catch (e) {
                      continue
                    }
                    break
                  }
                  if (!t) throw Error("XMLHttpRequest is not supported");
                  return t
                }, e.fetch = function(t, n) {
                  if (n && "function" != typeof n && (n = null), e.IS_NODE) {
                    var r = $i;
                    if (n) r.readFile(t, function(e, t) {
                      n(e ? null : "" + t)
                    });
                    else try {
                      return r.readFileSync(t)
                    } catch (e) {
                      return null
                    }
                  } else {
                    var i = e.XHR();
                    if (i.open("GET", t, !!n), i.setRequestHeader("Accept", "text/plain"), "function" == typeof i.overrideMimeType && i.overrideMimeType("text/plain"), !n) return i.send(null), 200 == i.status || 0 == i.status && "string" == typeof i.responseText ? i.responseText : null;
                    if (i.onreadystatechange = function() {
                        4 == i.readyState && n(200 == i.status || 0 == i.status && "string" == typeof i.responseText ? i.responseText : null)
                      }, 4 == i.readyState) return;
                    i.send(null)
                  }
                }, e.toCamelCase = function(e) {
                  return e.replace(/_([a-zA-Z])/g, function(e, t) {
                    return t.toUpperCase()
                  })
                }, e
              }(), n.Lang = {
                DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
                RULE: /^(?:required|optional|repeated|map)$/,
                TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
                NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
                TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
                TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
                FQTYPEREF: /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/,
                NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
                NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
                NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
                NUMBER_OCT: /^0[0-7]+$/,
                NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
                BOOL: /^(?:true|false)$/i,
                ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                WHITESPACE: /\s/,
                STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
                STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
                STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
              }, n.Reflect = function(t) {
                function n(n) {
                  if ("string" == typeof n && (n = t.TYPES[n]), void 0 === n.defaultValue) throw Error("default value for type " + n.name + " is not supported");
                  return n == t.TYPES.bytes ? new e(0) : n.defaultValue
                }

                function r(e, n) {
                  if (e && "number" == typeof e.low && "number" == typeof e.high && "boolean" == typeof e.unsigned && e.low === e.low && e.high === e.high) return new t.Long(e.low, e.high, void 0 === n ? e.unsigned : n);
                  if ("string" == typeof e) return t.Long.fromString(e, n || !1, 10);
                  if ("number" == typeof e) return t.Long.fromNumber(e, n || !1);
                  throw Error("not convertible to Long")
                }

                function i(e, n) {
                  var r = n.readVarint32(),
                    o = 7 & r,
                    s = r >>> 3;
                  switch (o) {
                    case t.WIRE_TYPES.VARINT:
                      do {
                        r = n.readUint8()
                      } while (128 == (128 & r));
                      break;
                    case t.WIRE_TYPES.BITS64:
                      n.offset += 8;
                      break;
                    case t.WIRE_TYPES.LDELIM:
                      r = n.readVarint32(), n.offset += r;
                      break;
                    case t.WIRE_TYPES.STARTGROUP:
                      i(s, n);
                      break;
                    case t.WIRE_TYPES.ENDGROUP:
                      if (s === e) return !1;
                      throw Error("Illegal GROUPEND after unknown group: " + s + " (" + e + " expected)");
                    case t.WIRE_TYPES.BITS32:
                      n.offset += 4;
                      break;
                    default:
                      throw Error("Illegal wire type in unknown group " + e + ": " + o)
                  }
                  return !0
                }
                var o = {},
                  s = function(e, t, n) {
                    this.builder = e, this.parent = t, this.name = n, this.className
                  },
                  a = s.prototype;
                a.fqn = function() {
                  for (var e = this.name, t = this;;) {
                    if (null == (t = t.parent)) break;
                    e = t.name + "." + e
                  }
                  return e
                }, a.toString = function(e) {
                  return (e ? this.className + " " : "") + this.fqn()
                }, a.build = function() {
                  throw Error(this.toString(!0) + " cannot be built directly")
                }, o.T = s;
                var u = function(e, t, n, r, i) {
                    s.call(this, e, t, n), this.className = "Namespace", this.children = [], this.options = r || {}, this.syntax = i || "proto2"
                  },
                  c = u.prototype = Object.create(s.prototype);
                c.getChildren = function(e) {
                  if (null == (e = e || null)) return this.children.slice();
                  for (var t = [], n = 0, r = this.children.length; n < r; ++n) this.children[n] instanceof e && t.push(this.children[n]);
                  return t
                }, c.addChild = function(e) {
                  var t;
                  if (t = this.getChild(e.name))
                    if (t instanceof h.Field && t.name !== t.originalName && null === this.getChild(t.originalName)) t.name = t.originalName;
                    else {
                      if (!(e instanceof h.Field && e.name !== e.originalName && null === this.getChild(e.originalName))) throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + e.name);
                      e.name = e.originalName
                    }
                  this.children.push(e)
                }, c.getChild = function(e) {
                  for (var t = "number" == typeof e ? "id" : "name", n = 0, r = this.children.length; n < r; ++n)
                    if (this.children[n][t] === e) return this.children[n];
                  return null
                }, c.resolve = function(e, t) {
                  var n = "string" == typeof e ? e.split(".") : e,
                    r = this,
                    i = 0;
                  if ("" === n[i]) {
                    for (; null !== r.parent;) r = r.parent;
                    i++
                  }
                  var s;
                  do {
                    do {
                      if (!(r instanceof o.Namespace)) {
                        r = null;
                        break
                      }
                      if (!(s = r.getChild(n[i])) || !(s instanceof o.T) || t && !(s instanceof o.Namespace)) {
                        r = null;
                        break
                      }
                      r = s, i++
                    } while (i < n.length);
                    if (null != r) break;
                    if (null !== this.parent) return this.parent.resolve(e, t)
                  } while (null != r);
                  return r
                }, c.qn = function(e) {
                  var t = [],
                    n = e;
                  do {
                    t.unshift(n.name), n = n.parent
                  } while (null !== n);
                  for (var r = 1; r <= t.length; r++) {
                    var i = t.slice(t.length - r);
                    if (e === this.resolve(i, e instanceof o.Namespace)) return i.join(".")
                  }
                  return e.fqn()
                }, c.build = function() {
                  for (var e, t = {}, n = this.children, r = 0, i = n.length; r < i; ++r)(e = n[r]) instanceof u && (t[e.name] = e.build());
                  return Object.defineProperty && Object.defineProperty(t, "$options", {
                    value: this.buildOpt()
                  }), t
                }, c.buildOpt = function() {
                  for (var e = {}, t = Object.keys(this.options), n = 0, r = t.length; n < r; ++n) {
                    var i = t[n],
                      o = this.options[t[n]];
                    e[i] = o
                  }
                  return e
                }, c.getOption = function(e) {
                  return void 0 === e ? this.options : void 0 !== this.options[e] ? this.options[e] : null
                }, o.Namespace = u;
                var f = function(e, n, r, i, o) {
                    if (this.type = e, this.resolvedType = n, this.isMapKey = r, this.syntax = i, this.name = o, r && t.MAP_KEY_TYPES.indexOf(e) < 0) throw Error("Invalid map key type: " + e.name)
                  },
                  l = f.prototype;
                f.defaultFieldValue = n, l.toString = function() {
                  return (this.name || "") + (this.isMapKey ? "map" : "value") + " element"
                }, l.verifyValue = function(n) {
                  function i(e, t) {
                    throw Error("Illegal value for " + o.toString(!0) + " of type " + o.type.name + ": " + e + " (" + t + ")")
                  }
                  var o = this;
                  switch (this.type) {
                    case t.TYPES.int32:
                    case t.TYPES.sint32:
                    case t.TYPES.sfixed32:
                      return ("number" != typeof n || n === n && n % 1 != 0) && i(typeof n, "not an integer"), n > 4294967295 ? 0 | n : n;
                    case t.TYPES.uint32:
                    case t.TYPES.fixed32:
                      return ("number" != typeof n || n === n && n % 1 != 0) && i(typeof n, "not an integer"), n < 0 ? n >>> 0 : n;
                    case t.TYPES.int64:
                    case t.TYPES.sint64:
                    case t.TYPES.sfixed64:
                      if (t.Long) try {
                        return r(n, !1)
                      } catch (e) {
                        i(typeof n, e.message)
                      } else i(typeof n, "requires Long.js");
                    case t.TYPES.uint64:
                    case t.TYPES.fixed64:
                      if (t.Long) try {
                        return r(n, !0)
                      } catch (e) {
                        i(typeof n, e.message)
                      } else i(typeof n, "requires Long.js");
                    case t.TYPES.bool:
                      return "boolean" != typeof n && i(typeof n, "not a boolean"), n;
                    case t.TYPES.float:
                    case t.TYPES.double:
                      return "number" != typeof n && i(typeof n, "not a number"), n;
                    case t.TYPES.string:
                      return "string" == typeof n || n && n instanceof String || i(typeof n, "not a string"), "" + n;
                    case t.TYPES.bytes:
                      return e.isByteBuffer(n) ? n : e.wrap(n, "base64");
                    case t.TYPES.enum:
                      var s = this.resolvedType.getChildren(t.Reflect.Enum.Value);
                      for (u = 0; u < s.length; u++) {
                        if (s[u].name == n) return s[u].id;
                        if (s[u].id == n) return s[u].id
                      }
                      if ("proto3" === this.syntax) return ("number" != typeof n || n === n && n % 1 != 0) && i(typeof n, "not an integer"), (n > 4294967295 || n < 0) && i(typeof n, "not in range for uint32"), n;
                      i(n, "not a valid enum value");
                    case t.TYPES.group:
                    case t.TYPES.message:
                      if (n && "object" == typeof n || i(typeof n, "object expected"), n instanceof this.resolvedType.clazz) return n;
                      if (n instanceof t.Builder.Message) {
                        var a = {};
                        for (var u in n) n.hasOwnProperty(u) && (a[u] = n[u]);
                        n = a
                      }
                      return new this.resolvedType.clazz(n)
                  }
                  throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + n + " (undefined type " + this.type + ")")
                }, l.calculateLength = function(n, r) {
                  if (null === r) return 0;
                  var i;
                  switch (this.type) {
                    case t.TYPES.int32:
                      return r < 0 ? e.calculateVarint64(r) : e.calculateVarint32(r);
                    case t.TYPES.uint32:
                      return e.calculateVarint32(r);
                    case t.TYPES.sint32:
                      return e.calculateVarint32(e.zigZagEncode32(r));
                    case t.TYPES.fixed32:
                    case t.TYPES.sfixed32:
                    case t.TYPES.float:
                      return 4;
                    case t.TYPES.int64:
                    case t.TYPES.uint64:
                      return e.calculateVarint64(r);
                    case t.TYPES.sint64:
                      return e.calculateVarint64(e.zigZagEncode64(r));
                    case t.TYPES.fixed64:
                    case t.TYPES.sfixed64:
                      return 8;
                    case t.TYPES.bool:
                      return 1;
                    case t.TYPES.enum:
                      return e.calculateVarint32(r);
                    case t.TYPES.double:
                      return 8;
                    case t.TYPES.string:
                      return i = e.calculateUTF8Bytes(r), e.calculateVarint32(i) + i;
                    case t.TYPES.bytes:
                      if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                      return e.calculateVarint32(r.remaining()) + r.remaining();
                    case t.TYPES.message:
                      return i = this.resolvedType.calculate(r), e.calculateVarint32(i) + i;
                    case t.TYPES.group:
                      return (i = this.resolvedType.calculate(r)) + e.calculateVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP)
                  }
                  throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)")
                }, l.encodeValue = function(n, r, i) {
                  if (null === r) return i;
                  switch (this.type) {
                    case t.TYPES.int32:
                      r < 0 ? i.writeVarint64(r) : i.writeVarint32(r);
                      break;
                    case t.TYPES.uint32:
                      i.writeVarint32(r);
                      break;
                    case t.TYPES.sint32:
                      i.writeVarint32ZigZag(r);
                      break;
                    case t.TYPES.fixed32:
                      i.writeUint32(r);
                      break;
                    case t.TYPES.sfixed32:
                      i.writeInt32(r);
                      break;
                    case t.TYPES.int64:
                    case t.TYPES.uint64:
                      i.writeVarint64(r);
                      break;
                    case t.TYPES.sint64:
                      i.writeVarint64ZigZag(r);
                      break;
                    case t.TYPES.fixed64:
                      i.writeUint64(r);
                      break;
                    case t.TYPES.sfixed64:
                      i.writeInt64(r);
                      break;
                    case t.TYPES.bool:
                      "string" == typeof r ? i.writeVarint32("false" === r.toLowerCase() ? 0 : !!r) : i.writeVarint32(r ? 1 : 0);
                      break;
                    case t.TYPES.enum:
                      i.writeVarint32(r);
                      break;
                    case t.TYPES.float:
                      i.writeFloat32(r);
                      break;
                    case t.TYPES.double:
                      i.writeFloat64(r);
                      break;
                    case t.TYPES.string:
                      i.writeVString(r);
                      break;
                    case t.TYPES.bytes:
                      if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                      var o = r.offset;
                      i.writeVarint32(r.remaining()), i.append(r), r.offset = o;
                      break;
                    case t.TYPES.message:
                      var s = (new e).LE();
                      this.resolvedType.encode(r, s), i.writeVarint32(s.offset), i.append(s.flip());
                      break;
                    case t.TYPES.group:
                      this.resolvedType.encode(r, i), i.writeVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP);
                      break;
                    default:
                      throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)")
                  }
                  return i
                }, l.decode = function(e, n, r) {
                  if (n != this.type.wireType) throw Error("Unexpected wire type for element");
                  var i, o;
                  switch (this.type) {
                    case t.TYPES.int32:
                      return 0 | e.readVarint32();
                    case t.TYPES.uint32:
                      return e.readVarint32() >>> 0;
                    case t.TYPES.sint32:
                      return 0 | e.readVarint32ZigZag();
                    case t.TYPES.fixed32:
                      return e.readUint32() >>> 0;
                    case t.TYPES.sfixed32:
                      return 0 | e.readInt32();
                    case t.TYPES.int64:
                      return e.readVarint64();
                    case t.TYPES.uint64:
                      return e.readVarint64().toUnsigned();
                    case t.TYPES.sint64:
                      return e.readVarint64ZigZag();
                    case t.TYPES.fixed64:
                      return e.readUint64();
                    case t.TYPES.sfixed64:
                      return e.readInt64();
                    case t.TYPES.bool:
                      return !!e.readVarint32();
                    case t.TYPES.enum:
                      return e.readVarint32();
                    case t.TYPES.float:
                      return e.readFloat();
                    case t.TYPES.double:
                      return e.readDouble();
                    case t.TYPES.string:
                      return e.readVString();
                    case t.TYPES.bytes:
                      if (o = e.readVarint32(), e.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + e.remaining());
                      return i = e.clone(), i.limit = i.offset + o, e.offset += o, i;
                    case t.TYPES.message:
                      return o = e.readVarint32(), this.resolvedType.decode(e, o);
                    case t.TYPES.group:
                      return this.resolvedType.decode(e, -1, r)
                  }
                  throw Error("[INTERNAL] Illegal decode type")
                }, l.valueFromString = function(n) {
                  if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element");
                  switch (this.type) {
                    case t.TYPES.int32:
                    case t.TYPES.sint32:
                    case t.TYPES.sfixed32:
                    case t.TYPES.uint32:
                    case t.TYPES.fixed32:
                      return this.verifyValue(parseInt(n));
                    case t.TYPES.int64:
                    case t.TYPES.sint64:
                    case t.TYPES.sfixed64:
                    case t.TYPES.uint64:
                    case t.TYPES.fixed64:
                      return this.verifyValue(n);
                    case t.TYPES.bool:
                      return "true" === n;
                    case t.TYPES.string:
                      return this.verifyValue(n);
                    case t.TYPES.bytes:
                      return e.fromBinary(n)
                  }
                }, l.valueToString = function(e) {
                  if (!this.isMapKey) throw Error("valueToString() called on non-map-key element");
                  return this.type === t.TYPES.bytes ? e.toString("binary") : e.toString()
                }, o.Element = f;
                var h = function(e, t, n, r, i, o) {
                    u.call(this, e, t, n, r, o), this.className = "Message", this.extensions = void 0, this.clazz = null, this.isGroup = !!i, this._fields = null, this._fieldsById = null, this._fieldsByName = null
                  },
                  d = h.prototype = Object.create(u.prototype);
                d.build = function(n) {
                  if (this.clazz && !n) return this.clazz;
                  var r = function(t, n) {
                    function r(n, i, o, s) {
                      if (null === n || "object" != typeof n) {
                        if (s && s instanceof t.Reflect.Enum) {
                          var a = t.Reflect.Enum.getName(s.object, n);
                          if (null !== a) return a
                        }
                        return n
                      }
                      if (e.isByteBuffer(n)) return i ? n.toBase64() : n.toBuffer();
                      if (t.Long.isLong(n)) return o ? n.toString() : t.Long.fromValue(n);
                      var u;
                      if (Array.isArray(n)) return u = [], n.forEach(function(e, t) {
                        u[t] = r(e, i, o, s)
                      }), u;
                      if (u = {}, n instanceof t.Map) {
                        for (var c = n.entries(), f = c.next(); !f.done; f = c.next()) u[n.keyElem.valueToString(f.value[0])] = r(f.value[1], i, o, n.valueElem.resolvedType);
                        return u
                      }
                      var l = n.$type,
                        h = void 0;
                      for (var d in n) n.hasOwnProperty(d) && (l && (h = l.getChild(d)) ? u[d] = r(n[d], i, o, h.resolvedType) : u[d] = r(n[d], i, o));
                      return u
                    }
                    var i = n.getChildren(t.Reflect.Message.Field),
                      o = n.getChildren(t.Reflect.Message.OneOf),
                      s = function(r, a) {
                        t.Builder.Message.call(this);
                        for (var u = 0, c = o.length; u < c; ++u) this[o[u].name] = null;
                        for (u = 0, c = i.length; u < c; ++u) {
                          var f = i[u];
                          this[f.name] = f.repeated ? [] : f.map ? new t.Map(f) : null, !f.required && "proto3" !== n.syntax || null === f.defaultValue || (this[f.name] = f.defaultValue)
                        }
                        if (arguments.length > 0) {
                          var l;
                          if (1 !== arguments.length || null === r || "object" != typeof r || !("function" != typeof r.encode || r instanceof s) || Array.isArray(r) || r instanceof t.Map || e.isByteBuffer(r) || r instanceof ArrayBuffer || t.Long && r instanceof t.Long)
                            for (u = 0, c = arguments.length; u < c; ++u) void 0 !== (l = arguments[u]) && this.$set(i[u].name, l);
                          else this.$set(r)
                        }
                      },
                      a = s.prototype = Object.create(t.Builder.Message.prototype);
                    a.add = function(e, r, i) {
                      var o = n._fieldsByName[e];
                      if (!i) {
                        if (!o) throw Error(this + "#" + e + " is undefined");
                        if (!(o instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + o.toString(!0));
                        if (!o.repeated) throw Error(this + "#" + e + " is not a repeated field");
                        r = o.verifyValue(r, !0)
                      }
                      return null === this[e] && (this[e] = []), this[e].push(r), this
                    }, a.$add = a.add, a.set = function(e, r, i) {
                      if (e && "object" == typeof e) {
                        i = r;
                        for (var o in e) e.hasOwnProperty(o) && void 0 !== (r = e[o]) && void 0 === n._oneofsByName[o] && this.$set(o, r, i);
                        return this
                      }
                      var s = n._fieldsByName[e];
                      if (i) this[e] = r;
                      else {
                        if (!s) throw Error(this + "#" + e + " is not a field: undefined");
                        if (!(s instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + s.toString(!0));
                        this[s.name] = r = s.verifyValue(r)
                      }
                      if (s && s.oneof) {
                        var a = this[s.oneof.name];
                        null !== r ? (null !== a && a !== s.name && (this[a] = null), this[s.oneof.name] = s.name) : a === e && (this[s.oneof.name] = null)
                      }
                      return this
                    }, a.$set = a.set, a.get = function(e, r) {
                      if (r) return this[e];
                      var i = n._fieldsByName[e];
                      if (!(i && i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: undefined");
                      if (!(i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + i.toString(!0));
                      return this[i.name]
                    }, a.$get = a.get;
                    for (var u = 0; u < i.length; u++) {
                      var c = i[u];
                      c instanceof t.Reflect.Message.ExtensionField || n.builder.options.populateAccessors && function(e) {
                        var t = e.originalName.replace(/(_[a-zA-Z])/g, function(e) {
                          return e.toUpperCase().replace("_", "")
                        });
                        t = t.substring(0, 1).toUpperCase() + t.substring(1);
                        var r = e.originalName.replace(/([A-Z])/g, function(e) {
                            return "_" + e
                          }),
                          i = function(t, n) {
                            return this[e.name] = n ? t : e.verifyValue(t), this
                          },
                          o = function() {
                            return this[e.name]
                          };
                        null === n.getChild("set" + t) && (a["set" + t] = i), null === n.getChild("set_" + r) && (a["set_" + r] = i), null === n.getChild("get" + t) && (a["get" + t] = o), null === n.getChild("get_" + r) && (a["get_" + r] = o)
                      }(c)
                    }
                    a.encode = function(t, r) {
                      "boolean" == typeof t && (r = t, t = void 0);
                      var i = !1;
                      t || (t = new e, i = !0);
                      var o = t.littleEndian;
                      try {
                        return n.encode(this, t.LE(), r), (i ? t.flip() : t).LE(o)
                      } catch (e) {
                        throw t.LE(o), e
                      }
                    }, s.encode = function(e, t, n) {
                      return new s(e).encode(t, n)
                    }, a.calculate = function() {
                      return n.calculate(this)
                    }, a.encodeDelimited = function(t, r) {
                      var i = !1;
                      t || (t = new e, i = !0);
                      var o = (new e).LE();
                      return n.encode(this, o, r).flip(), t.writeVarint32(o.remaining()), t.append(o), i ? t.flip() : t
                    }, a.encodeAB = function() {
                      try {
                        return this.encode().toArrayBuffer()
                      } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toArrayBuffer()), e
                      }
                    }, a.toArrayBuffer = a.encodeAB, a.encodeNB = function() {
                      try {
                        return this.encode().toBuffer()
                      } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toBuffer()), e
                      }
                    }, a.toBuffer = a.encodeNB, a.encode64 = function() {
                      try {
                        return this.encode().toBase64()
                      } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toBase64()), e
                      }
                    }, a.toBase64 = a.encode64, a.encodeHex = function() {
                      try {
                        return this.encode().toHex()
                      } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toHex()), e
                      }
                    }, a.toHex = a.encodeHex, a.toRaw = function(e, t) {
                      return r(this, !!e, !!t, this.$type)
                    }, a.encodeJSON = function() {
                      return JSON.stringify(r(this, !0, !0, this.$type))
                    }, s.decode = function(t, r, i) {
                      "string" == typeof r && (i = r, r = -1), "string" == typeof t ? t = e.wrap(t, i || "base64") : e.isByteBuffer(t) || (t = e.wrap(t));
                      var o = t.littleEndian;
                      try {
                        var s = n.decode(t.LE(), r);
                        return t.LE(o), s
                      } catch (e) {
                        throw t.LE(o), e
                      }
                    }, s.decodeDelimited = function(t, r) {
                      if ("string" == typeof t ? t = e.wrap(t, r || "base64") : e.isByteBuffer(t) || (t = e.wrap(t)), t.remaining() < 1) return null;
                      var i = t.offset,
                        o = t.readVarint32();
                      if (t.remaining() < o) return t.offset = i, null;
                      try {
                        var s = n.decode(t.slice(t.offset, t.offset + o).LE());
                        return t.offset += o, s
                      } catch (e) {
                        throw t.offset += o, e
                      }
                    }, s.decode64 = function(e) {
                      return s.decode(e, "base64")
                    }, s.decodeHex = function(e) {
                      return s.decode(e, "hex")
                    }, s.decodeJSON = function(e) {
                      return new s(JSON.parse(e))
                    }, a.toString = function() {
                      return n.toString()
                    };
                    return Object.defineProperty && (Object.defineProperty(s, "$options", {
                      value: n.buildOpt()
                    }), Object.defineProperty(a, "$options", {
                      value: s.$options
                    }), Object.defineProperty(s, "$type", {
                      value: n
                    }), Object.defineProperty(a, "$type", {
                      value: n
                    })), s
                  }(t, this);
                  this._fields = [], this._fieldsById = {}, this._fieldsByName = {}, this._oneofsByName = {};
                  for (var i, o = 0, s = this.children.length; o < s; o++)
                    if ((i = this.children[o]) instanceof m || i instanceof h || i instanceof w) {
                      if (r.hasOwnProperty(i.name)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + i.toString(!0) + " cannot override static property '" + i.name + "'");
                      r[i.name] = i.build()
                    } else if (i instanceof h.Field) i.build(), this._fields.push(i), this._fieldsById[i.id] = i, this._fieldsByName[i.name] = i;
                  else if (i instanceof h.OneOf) this._oneofsByName[i.name] = i;
                  else if (!(i instanceof h.OneOf || i instanceof b)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[o].toString(!0));
                  return this.clazz = r
                }, d.encode = function(e, t, n) {
                  for (var r, i, o = null, s = 0, a = this._fields.length; s < a; ++s) r = this._fields[s], i = e[r.name], r.required && null === i ? null === o && (o = r) : r.encode(n ? i : r.verifyValue(i), t, e);
                  if (null !== o) {
                    var u = Error("Missing at least one required field for " + this.toString(!0) + ": " + o);
                    throw u.encoded = t, u
                  }
                  return t
                }, d.calculate = function(e) {
                  for (var t, n, r = 0, i = 0, o = this._fields.length; i < o; ++i) {
                    if (t = this._fields[i], n = e[t.name], t.required && null === n) throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t);
                    r += t.calculate(n, e)
                  }
                  return r
                }, d.decode = function(e, n, r) {
                  "number" != typeof n && (n = -1);
                  for (var o, s, a, u, c = e.offset, f = new this.clazz; e.offset < c + n || -1 === n && e.remaining() > 0;) {
                    if (o = e.readVarint32(), s = 7 & o, a = o >>> 3, s === t.WIRE_TYPES.ENDGROUP) {
                      if (a !== r) throw Error("Illegal group end indicator for " + this.toString(!0) + ": " + a + " (" + (r ? r + " expected" : "not a group") + ")");
                      break
                    }
                    if (u = this._fieldsById[a]) {
                      if (u.repeated && !u.options.packed) f[u.name].push(u.decode(s, e));
                      else if (u.map) {
                        var l = u.decode(s, e);
                        f[u.name].set(l[0], l[1])
                      } else if (f[u.name] = u.decode(s, e), u.oneof) {
                        var h = f[u.oneof.name];
                        null !== h && h !== u.name && (f[h] = null), f[u.oneof.name] = u.name
                      }
                    } else switch (s) {
                      case t.WIRE_TYPES.VARINT:
                        e.readVarint32();
                        break;
                      case t.WIRE_TYPES.BITS32:
                        e.offset += 4;
                        break;
                      case t.WIRE_TYPES.BITS64:
                        e.offset += 8;
                        break;
                      case t.WIRE_TYPES.LDELIM:
                        var d = e.readVarint32();
                        e.offset += d;
                        break;
                      case t.WIRE_TYPES.STARTGROUP:
                        for (; i(a, e););
                        break;
                      default:
                        throw Error("Illegal wire type for unknown field " + a + " in " + this.toString(!0) + "#decode: " + s)
                    }
                  }
                  for (var p = 0, y = this._fields.length; p < y; ++p)
                    if (u = this._fields[p], null === f[u.name])
                      if ("proto3" === this.syntax) f[u.name] = u.defaultValue;
                      else {
                        if (u.required) {
                          var v = Error("Missing at least one required field for " + this.toString(!0) + ": " + u.name);
                          throw v.decoded = f, v
                        }
                        t.populateDefaults && null !== u.defaultValue && (f[u.name] = u.defaultValue)
                      }
                  return f
                }, o.Message = h;
                var p = function(e, n, r, i, o, a, u, c, f, l) {
                    s.call(this, e, n, a), this.className = "Message.Field", this.required = "required" === r, this.repeated = "repeated" === r, this.map = "map" === r, this.keyType = i || null, this.type = o, this.resolvedType = null, this.id = u, this.options = c || {}, this.defaultValue = null, this.oneof = f || null, this.syntax = l || "proto2", this.originalName = this.name, this.element = null, this.keyElement = null, !this.builder.options.convertFieldsToCamelCase || this instanceof h.ExtensionField || (this.name = t.Util.toCamelCase(this.name))
                  },
                  y = p.prototype = Object.create(s.prototype);
                y.build = function() {
                  this.element = new f(this.type, this.resolvedType, !1, this.syntax, this.name), this.map && (this.keyElement = new f(this.keyType, void 0, !0, this.syntax, this.name)), "proto3" !== this.syntax || this.repeated || this.map ? void 0 !== this.options.default && (this.defaultValue = this.verifyValue(this.options.default)) : this.defaultValue = f.defaultFieldValue(this.type)
                }, y.verifyValue = function(e, n) {
                  function r(e, t) {
                    throw Error("Illegal value for " + i.toString(!0) + " of type " + i.type.name + ": " + e + " (" + t + ")")
                  }
                  n = n || !1;
                  var i = this;
                  if (null === e) return this.required && r(typeof e, "required"), "proto3" === this.syntax && this.type !== t.TYPES.message && r(typeof e, "proto3 field without field presence cannot be null"), null;
                  var o;
                  if (this.repeated && !n) {
                    Array.isArray(e) || (e = [e]);
                    var s = [];
                    for (o = 0; o < e.length; o++) s.push(this.element.verifyValue(e[o]));
                    return s
                  }
                  return this.map && !n ? e instanceof t.Map ? e : (e instanceof Object || r(typeof e, "expected ProtoBuf.Map or raw object for map field"), new t.Map(this, e)) : (!this.repeated && Array.isArray(e) && r(typeof e, "no array expected"), this.element.verifyValue(e))
                }, y.hasWirePresence = function(e, n) {
                  if ("proto3" !== this.syntax) return null !== e;
                  if (this.oneof && n[this.oneof.name] === this.name) return !0;
                  switch (this.type) {
                    case t.TYPES.int32:
                    case t.TYPES.sint32:
                    case t.TYPES.sfixed32:
                    case t.TYPES.uint32:
                    case t.TYPES.fixed32:
                      return 0 !== e;
                    case t.TYPES.int64:
                    case t.TYPES.sint64:
                    case t.TYPES.sfixed64:
                    case t.TYPES.uint64:
                    case t.TYPES.fixed64:
                      return 0 !== e.low || 0 !== e.high;
                    case t.TYPES.bool:
                      return e;
                    case t.TYPES.float:
                    case t.TYPES.double:
                      return 0 !== e;
                    case t.TYPES.string:
                      return e.length > 0;
                    case t.TYPES.bytes:
                      return e.remaining() > 0;
                    case t.TYPES.enum:
                      return 0 !== e;
                    case t.TYPES.message:
                      return null !== e;
                    default:
                      return !0
                  }
                }, y.encode = function(n, r, i) {
                  if (null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                  if (null === n || this.repeated && 0 == n.length) return r;
                  try {
                    if (this.repeated) {
                      var o;
                      if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                        r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.ensureCapacity(r.offset += 1);
                        var s = r.offset;
                        for (o = 0; o < n.length; o++) this.element.encodeValue(this.id, n[o], r);
                        var a = r.offset - s,
                          u = e.calculateVarint32(a);
                        if (u > 1) {
                          var c = r.slice(s, r.offset);
                          s += u - 1, r.offset = s, r.append(c)
                        }
                        r.writeVarint32(a, s - u)
                      } else
                        for (o = 0; o < n.length; o++) r.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, n[o], r)
                    } else this.map ? n.forEach(function(n, i, o) {
                      var s = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, i) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                      r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.writeVarint32(s), r.writeVarint32(8 | this.keyType.wireType), this.keyElement.encodeValue(1, i, r), r.writeVarint32(16 | this.type.wireType), this.element.encodeValue(2, n, r)
                    }, this) : this.hasWirePresence(n, i) && (r.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, n, r))
                  } catch (e) {
                    throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")")
                  }
                  return r
                }, y.calculate = function(n, r) {
                  if (n = this.verifyValue(n), null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                  if (null === n || this.repeated && 0 == n.length) return 0;
                  var i = 0;
                  try {
                    if (this.repeated) {
                      var o, s;
                      if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                        for (i += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), s = 0, o = 0; o < n.length; o++) s += this.element.calculateLength(this.id, n[o]);
                        i += e.calculateVarint32(s), i += s
                      } else
                        for (o = 0; o < n.length; o++) i += e.calculateVarint32(this.id << 3 | this.type.wireType), i += this.element.calculateLength(this.id, n[o])
                    } else this.map ? n.forEach(function(n, r, o) {
                      var s = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, r) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                      i += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), i += e.calculateVarint32(s), i += s
                    }, this) : this.hasWirePresence(n, r) && (i += e.calculateVarint32(this.id << 3 | this.type.wireType), i += this.element.calculateLength(this.id, n))
                  } catch (e) {
                    throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")")
                  }
                  return i
                }, y.decode = function(e, n, r) {
                  var i, o;
                  if (!(!this.map && e == this.type.wireType || !r && this.repeated && this.options.packed && e == t.WIRE_TYPES.LDELIM || this.map && e == t.WIRE_TYPES.LDELIM)) throw Error("Illegal wire type for field " + this.toString(!0) + ": " + e + " (" + this.type.wireType + " expected)");
                  if (e == t.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !r) {
                    o = n.readVarint32(), o = n.offset + o;
                    for (var s = []; n.offset < o;) s.push(this.decode(this.type.wireType, n, !0));
                    return s
                  }
                  if (this.map) {
                    var a = f.defaultFieldValue(this.keyType);
                    if (i = f.defaultFieldValue(this.type), o = n.readVarint32(), n.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + n.remaining());
                    var u = n.clone();
                    for (u.limit = u.offset + o, n.offset += o; u.remaining() > 0;) {
                      var c = u.readVarint32();
                      e = 7 & c;
                      var l = c >>> 3;
                      if (1 === l) a = this.keyElement.decode(u, e, l);
                      else {
                        if (2 !== l) throw Error("Unexpected tag in map field key/value submessage");
                        i = this.element.decode(u, e, l)
                      }
                    }
                    return [a, i]
                  }
                  return this.element.decode(n, e, this.id)
                }, o.Message.Field = p;
                var v = function(e, t, n, r, i, o, s) {
                  p.call(this, e, t, n, null, r, i, o, s), this.extension
                };
                v.prototype = Object.create(p.prototype), o.Message.ExtensionField = v;
                var g = function(e, t, n) {
                  s.call(this, e, t, n), this.fields = []
                };
                o.Message.OneOf = g;
                var m = function(e, t, n, r, i) {
                  u.call(this, e, t, n, r, i), this.className = "Enum", this.object = null
                };
                m.getName = function(e, t) {
                  for (var n, r = Object.keys(e), i = 0; i < r.length; ++i)
                    if (e[n = r[i]] === t) return n;
                  return null
                }, (m.prototype = Object.create(u.prototype)).build = function(e) {
                  if (this.object && !e) return this.object;
                  for (var n = new t.Builder.Enum, r = this.getChildren(m.Value), i = 0, o = r.length; i < o; ++i) n[r[i].name] = r[i].id;
                  return Object.defineProperty && Object.defineProperty(n, "$options", {
                    value: this.buildOpt(),
                    enumerable: !1
                  }), this.object = n
                }, o.Enum = m;
                var _ = function(e, t, n, r) {
                  s.call(this, e, t, n), this.className = "Enum.Value", this.id = r
                };
                _.prototype = Object.create(s.prototype), o.Enum.Value = _;
                var b = function(e, t, n, r) {
                  s.call(this, e, t, n), this.field = r
                };
                b.prototype = Object.create(s.prototype), o.Extension = b;
                var w = function(e, t, n, r) {
                  u.call(this, e, t, n, r), this.className = "Service", this.clazz = null
                };
                (w.prototype = Object.create(u.prototype)).build = function(n) {
                  return this.clazz && !n ? this.clazz : this.clazz = function(t, n) {
                    for (var r = function(e) {
                        t.Builder.Service.call(this), this.rpcImpl = e || function(e, t, n) {
                          setTimeout(n.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0)
                        }
                      }, i = r.prototype = Object.create(t.Builder.Service.prototype), o = n.getChildren(t.Reflect.Service.RPCMethod), s = 0; s < o.length; s++) ! function(t) {
                      i[t.name] = function(r, i) {
                        try {
                          try {
                            r = t.resolvedRequestType.clazz.decode(e.wrap(r))
                          } catch (e) {
                            if (!(e instanceof TypeError)) throw e
                          }
                          if (null === r || "object" != typeof r) throw Error("Illegal arguments");
                          r instanceof t.resolvedRequestType.clazz || (r = new t.resolvedRequestType.clazz(r)), this.rpcImpl(t.fqn(), r, function(e, r) {
                            if (e) return void i(e);
                            null === r && (r = "");
                            try {
                              r = t.resolvedResponseType.clazz.decode(r)
                            } catch (e) {}
                            if (!(r && r instanceof t.resolvedResponseType.clazz)) return void i(Error("Illegal response type received in service method " + n.name + "#" + t.name));
                            i(null, r)
                          })
                        } catch (e) {
                          setTimeout(i.bind(this, e), 0)
                        }
                      }, r[t.name] = function(e, n, i) {
                        new r(e)[t.name](n, i)
                      }, Object.defineProperty && (Object.defineProperty(r[t.name], "$options", {
                        value: t.buildOpt()
                      }), Object.defineProperty(i[t.name], "$options", {
                        value: r[t.name].$options
                      }))
                    }(o[s]);
                    return Object.defineProperty && (Object.defineProperty(r, "$options", {
                      value: n.buildOpt()
                    }), Object.defineProperty(i, "$options", {
                      value: r.$options
                    }), Object.defineProperty(r, "$type", {
                      value: n
                    }), Object.defineProperty(i, "$type", {
                      value: n
                    })), r
                  }(t, this)
                }, o.Service = w;
                var E = function(e, t, n, r) {
                  s.call(this, e, t, n), this.className = "Service.Method", this.options = r || {}
                };
                (E.prototype = Object.create(s.prototype)).buildOpt = c.buildOpt, o.Service.Method = E;
                var S = function(e, t, n, r, i, o, s, a) {
                  E.call(this, e, t, n, a), this.className = "Service.RPCMethod", this.requestName = r, this.responseName = i, this.requestStream = o, this.responseStream = s, this.resolvedRequestType = null, this.resolvedResponseType = null
                };
                return S.prototype = Object.create(E.prototype), o.Service.RPCMethod = S, o
              }(n), n.Builder = function(e, t, n) {
                function r(e) {
                  e.messages && e.messages.forEach(function(t) {
                    t.syntax = e.syntax, r(t)
                  }), e.enums && e.enums.forEach(function(t) {
                    t.syntax = e.syntax
                  })
                }
                var i = function(e) {
                    this.ns = new n.Namespace(this, null, ""), this.ptr = this.ns, this.resolved = !1, this.result = null, this.files = {}, this.importRoot = null, this.options = e || {}
                  },
                  o = i.prototype;
                return i.isMessage = function(e) {
                  return "string" == typeof e.name && (void 0 === e.values && void 0 === e.rpc)
                }, i.isMessageField = function(e) {
                  return "string" == typeof e.rule && "string" == typeof e.name && "string" == typeof e.type && void 0 !== e.id
                }, i.isEnum = function(e) {
                  return "string" == typeof e.name && !(void 0 === e.values || !Array.isArray(e.values) || 0 === e.values.length)
                }, i.isService = function(e) {
                  return !("string" != typeof e.name || "object" != typeof e.rpc || !e.rpc)
                }, i.isExtend = function(e) {
                  return "string" == typeof e.ref
                }, o.reset = function() {
                  return this.ptr = this.ns, this
                }, o.define = function(e) {
                  if ("string" != typeof e || !t.TYPEREF.test(e)) throw Error("illegal namespace: " + e);
                  return e.split(".").forEach(function(e) {
                    var t = this.ptr.getChild(e);
                    null === t && this.ptr.addChild(t = new n.Namespace(this, this.ptr, e)), this.ptr = t
                  }, this), this
                }, o.create = function(t) {
                  if (!t) return this;
                  if (Array.isArray(t)) {
                    if (0 === t.length) return this;
                    t = t.slice()
                  } else t = [t];
                  for (var r = [t]; r.length > 0;) {
                    if (t = r.pop(), !Array.isArray(t)) throw Error("not a valid namespace: " + JSON.stringify(t));
                    for (; t.length > 0;) {
                      var o = t.shift();
                      if (i.isMessage(o)) {
                        var s = new n.Message(this, this.ptr, o.name, o.options, o.isGroup, o.syntax),
                          a = {};
                        o.oneofs && Object.keys(o.oneofs).forEach(function(e) {
                          s.addChild(a[e] = new n.Message.OneOf(this, s, e))
                        }, this), o.fields && o.fields.forEach(function(e) {
                          if (null !== s.getChild(0 | e.id)) throw Error("duplicate or invalid field id in " + s.name + ": " + e.id);
                          if (e.options && "object" != typeof e.options) throw Error("illegal field options in " + s.name + "#" + e.name);
                          var t = null;
                          if ("string" == typeof e.oneof && !(t = a[e.oneof])) throw Error("illegal oneof in " + s.name + "#" + e.name + ": " + e.oneof);
                          e = new n.Message.Field(this, s, e.rule, e.keytype, e.type, e.name, e.id, e.options, t, o.syntax), t && t.fields.push(e), s.addChild(e)
                        }, this);
                        var u = [];
                        if (o.enums && o.enums.forEach(function(e) {
                            u.push(e)
                          }), o.messages && o.messages.forEach(function(e) {
                            u.push(e)
                          }), o.services && o.services.forEach(function(e) {
                            u.push(e)
                          }), o.extensions && ("number" == typeof o.extensions[0] ? s.extensions = [o.extensions] : s.extensions = o.extensions), this.ptr.addChild(s), u.length > 0) {
                          r.push(t), t = u, u = null, this.ptr = s, s = null;
                          continue
                        }
                        u = null
                      } else if (i.isEnum(o)) s = new n.Enum(this, this.ptr, o.name, o.options, o.syntax), o.values.forEach(function(e) {
                        s.addChild(new n.Enum.Value(this, s, e.name, e.id))
                      }, this), this.ptr.addChild(s);
                      else if (i.isService(o)) s = new n.Service(this, this.ptr, o.name, o.options), Object.keys(o.rpc).forEach(function(e) {
                        var t = o.rpc[e];
                        s.addChild(new n.Service.RPCMethod(this, s, e, t.request, t.response, !!t.request_stream, !!t.response_stream, t.options))
                      }, this), this.ptr.addChild(s);
                      else {
                        if (!i.isExtend(o)) throw Error("not a valid definition: " + JSON.stringify(o));
                        if (s = this.ptr.resolve(o.ref, !0)) o.fields.forEach(function(t) {
                          if (null !== s.getChild(0 | t.id)) throw Error("duplicate extended field id in " + s.name + ": " + t.id);
                          if (s.extensions) {
                            var r = !1;
                            if (s.extensions.forEach(function(e) {
                                t.id >= e[0] && t.id <= e[1] && (r = !0)
                              }), !r) throw Error("illegal extended field id in " + s.name + ": " + t.id + " (not within valid ranges)")
                          }
                          var i = t.name;
                          this.options.convertFieldsToCamelCase && (i = e.Util.toCamelCase(i));
                          var o = new n.Message.ExtensionField(this, s, t.rule, t.type, this.ptr.fqn() + "." + i, t.id, t.options),
                            a = new n.Extension(this, this.ptr, t.name, o);
                          o.extension = a, this.ptr.addChild(a), s.addChild(o)
                        }, this);
                        else if (!/\.?google\.protobuf\./.test(o.ref)) throw Error("extended message " + o.ref + " is not defined")
                      }
                      o = null, s = null
                    }
                    t = null, this.ptr = this.ptr.parent
                  }
                  return this.resolved = !1, this.result = null, this
                }, o.import = function(t, n) {
                  var i = "/";
                  if ("string" == typeof n) {
                    if (e.Util.IS_NODE && (n = $i.resolve(n)), !0 === this.files[n]) return this.reset();
                    this.files[n] = !0
                  } else if ("object" == typeof n) {
                    var o = n.root;
                    e.Util.IS_NODE && (o = $i.resolve(o)), (o.indexOf("\\") >= 0 || n.file.indexOf("\\") >= 0) && (i = "\\");
                    var s;
                    if (s = e.Util.IS_NODE ? $i.join(o, n.file) : o + i + n.file, !0 === this.files[s]) return this.reset();
                    this.files[s] = !0
                  }
                  if (t.imports && t.imports.length > 0) {
                    var a, u = !1;
                    "object" == typeof n ? (this.importRoot = n.root, u = !0, a = this.importRoot, n = n.file, (a.indexOf("\\") >= 0 || n.indexOf("\\") >= 0) && (i = "\\")) : "string" == typeof n ? this.importRoot ? a = this.importRoot : n.indexOf("/") >= 0 ? "" === (a = n.replace(/\/[^\/]*$/, "")) && (a = "/") : n.indexOf("\\") >= 0 ? (a = n.replace(/\\[^\\]*$/, ""), i = "\\") : a = "." : a = null;
                    for (var c = 0; c < t.imports.length; c++)
                      if ("string" == typeof t.imports[c]) {
                        if (!a) throw Error("cannot determine import root");
                        var f = t.imports[c];
                        if ("google/protobuf/descriptor.proto" === f) continue;
                        if (f = e.Util.IS_NODE ? $i.join(a, f) : a + i + f, !0 === this.files[f]) continue;
                        /\.proto$/i.test(f) && !e.DotProto && (f = f.replace(/\.proto$/, ".json"));
                        var l = e.Util.fetch(f);
                        if (null === l) throw Error("failed to import '" + f + "' in '" + n + "': file not found");
                        /\.json$/i.test(f) ? this.import(JSON.parse(l + ""), f) : this.import(e.DotProto.Parser.parse(l), f)
                      } else n ? /\.(\w+)$/.test(n) ? this.import(t.imports[c], n.replace(/^(.+)\.(\w+)$/, function(e, t, n) {
                        return t + "_import" + c + "." + n
                      })) : this.import(t.imports[c], n + "_import" + c) : this.import(t.imports[c]);
                    u && (this.importRoot = null)
                  }
                  t.package && this.define(t.package), t.syntax && r(t);
                  var h = this.ptr;
                  return t.options && Object.keys(t.options).forEach(function(e) {
                    h.options[e] = t.options[e]
                  }), t.messages && (this.create(t.messages), this.ptr = h), t.enums && (this.create(t.enums), this.ptr = h), t.services && (this.create(t.services), this.ptr = h), t.extends && this.create(t.extends), this.reset()
                }, o.resolveAll = function() {
                  var r;
                  if (null == this.ptr || "object" == typeof this.ptr.type) return this;
                  if (this.ptr instanceof n.Namespace) this.ptr.children.forEach(function(e) {
                    this.ptr = e, this.resolveAll()
                  }, this);
                  else if (this.ptr instanceof n.Message.Field) {
                    if (t.TYPE.test(this.ptr.type)) this.ptr.type = e.TYPES[this.ptr.type];
                    else {
                      if (!t.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                      if (!(r = (this.ptr instanceof n.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0))) throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                      if (this.ptr.resolvedType = r, r instanceof n.Enum) {
                        if (this.ptr.type = e.TYPES.enum, "proto3" === this.ptr.syntax && "proto3" !== r.syntax) throw Error("proto3 message cannot reference proto2 enum")
                      } else {
                        if (!(r instanceof n.Message)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                        this.ptr.type = r.isGroup ? e.TYPES.group : e.TYPES.message
                      }
                    }
                    if (this.ptr.map) {
                      if (!t.TYPE.test(this.ptr.keyType)) throw Error("illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType);
                      this.ptr.keyType = e.TYPES[this.ptr.keyType]
                    }
                    "proto3" === this.ptr.syntax && this.ptr.repeated && void 0 === this.ptr.options.packed && -1 !== e.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) && (this.ptr.options.packed = !0)
                  } else if (this.ptr instanceof e.Reflect.Service.Method) {
                    if (!(this.ptr instanceof e.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(!0));
                    if (!((r = this.ptr.parent.resolve(this.ptr.requestName, !0)) && r instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
                    if (this.ptr.resolvedRequestType = r, !((r = this.ptr.parent.resolve(this.ptr.responseName, !0)) && r instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
                    this.ptr.resolvedResponseType = r
                  } else if (!(this.ptr instanceof e.Reflect.Message.OneOf || this.ptr instanceof e.Reflect.Extension || this.ptr instanceof e.Reflect.Enum.Value)) throw Error("illegal object in namespace: " + typeof this.ptr + ": " + this.ptr);
                  return this.reset()
                }, o.build = function(e) {
                  if (this.reset(), this.resolved || (this.resolveAll(), this.resolved = !0, this.result = null), null === this.result && (this.result = this.ns.build()), !e) return this.result;
                  for (var t = "string" == typeof e ? e.split(".") : e, n = this.result, r = 0; r < t.length; r++) {
                    if (!n[t[r]]) {
                      n = null;
                      break
                    }
                    n = n[t[r]]
                  }
                  return n
                }, o.lookup = function(e, t) {
                  return e ? this.ns.resolve(e, t) : this.ns
                }, o.toString = function() {
                  return "Builder"
                }, i.Message = function() {}, i.Enum = function() {}, i.Service = function() {}, i
              }(n, n.Lang, n.Reflect), n.Map = function(e, t) {
                function n(e) {
                  var t = 0;
                  return {
                    next: function() {
                      return t < e.length ? {
                        done: !1,
                        value: e[t++]
                      } : {
                        done: !0
                      }
                    }
                  }
                }
                var r = function(e, n) {
                    if (!e.map) throw Error("field is not a map");
                    if (this.field = e, this.keyElem = new t.Element(e.keyType, null, !0, e.syntax), this.valueElem = new t.Element(e.type, e.resolvedType, !1, e.syntax), this.map = {}, Object.defineProperty(this, "size", {
                        get: function() {
                          return Object.keys(this.map).length
                        }
                      }), n)
                      for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                        var o = this.keyElem.valueFromString(r[i]),
                          s = this.valueElem.verifyValue(n[r[i]]);
                        this.map[this.keyElem.valueToString(o)] = {
                          key: o,
                          value: s
                        }
                      }
                  },
                  i = r.prototype;
                return i.clear = function() {
                  this.map = {}
                }, i.delete = function(e) {
                  var t = this.keyElem.valueToString(this.keyElem.verifyValue(e)),
                    n = t in this.map;
                  return delete this.map[t], n
                }, i.entries = function() {
                  for (var e, t = [], r = Object.keys(this.map), i = 0; i < r.length; i++) t.push([(e = this.map[r[i]]).key, e.value]);
                  return n(t)
                }, i.keys = function() {
                  for (var e = [], t = Object.keys(this.map), r = 0; r < t.length; r++) e.push(this.map[t[r]].key);
                  return n(e)
                }, i.values = function() {
                  for (var e = [], t = Object.keys(this.map), r = 0; r < t.length; r++) e.push(this.map[t[r]].value);
                  return n(e)
                }, i.forEach = function(e, t) {
                  for (var n, r = Object.keys(this.map), i = 0; i < r.length; i++) e.call(t, (n = this.map[r[i]]).value, n.key, this)
                }, i.set = function(e, t) {
                  var n = this.keyElem.verifyValue(e),
                    r = this.valueElem.verifyValue(t);
                  return this.map[this.keyElem.valueToString(n)] = {
                    key: n,
                    value: r
                  }, this
                }, i.get = function(e) {
                  var t = this.keyElem.valueToString(this.keyElem.verifyValue(e));
                  if (t in this.map) return this.map[t].value
                }, i.has = function(e) {
                  return this.keyElem.valueToString(this.keyElem.verifyValue(e)) in this.map
                }, r
              }(0, n.Reflect), n.newBuilder = function(e) {
                return e = e || {}, void 0 === e.convertFieldsToCamelCase && (e.convertFieldsToCamelCase = n.convertFieldsToCamelCase), void 0 === e.populateAccessors && (e.populateAccessors = n.populateAccessors), new n.Builder(e)
              }, n.loadJson = function(e, t, r) {
                return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (r = t, t = null), t && "object" == typeof t || (t = n.newBuilder()), "string" == typeof e && (e = JSON.parse(e)), t.import(e, r), t.resolveAll(), t
              }, n.loadJsonFile = function(e, t, r) {
                if (t && "object" == typeof t ? (r = t, t = null) : t && "function" == typeof t || (t = null), t) return n.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function(i) {
                  if (null === i) return void t(Error("Failed to fetch file"));
                  try {
                    t(null, n.loadJson(JSON.parse(i), r, e))
                  } catch (e) {
                    t(e)
                  }
                });
                var i = n.Util.fetch("object" == typeof e ? e.root + "/" + e.file : e);
                return null === i ? null : n.loadJson(JSON.parse(i), r, e)
              }, n
            })
          }),
          Zi = Xi.newBuilder({}).import({
            package: "push_server.messages2",
            syntax: "proto2",
            options: {
              objc_class_prefix: "AVIM"
            },
            messages: [{
              name: "JsonObjectMessage",
              syntax: "proto2",
              fields: [{
                rule: "required",
                type: "string",
                name: "data",
                id: 1
              }]
            }, {
              name: "UnreadTuple",
              syntax: "proto2",
              fields: [{
                rule: "required",
                type: "string",
                name: "cid",
                id: 1
              }, {
                rule: "required",
                type: "int32",
                name: "unread",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "mid",
                id: 3
              }, {
                rule: "optional",
                type: "int64",
                name: "timestamp",
                id: 4
              }, {
                rule: "optional",
                type: "string",
                name: "from",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "data",
                id: 6
              }]
            }, {
              name: "LogItem",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "from",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "data",
                id: 2
              }, {
                rule: "optional",
                type: "int64",
                name: "timestamp",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "msgId",
                id: 4
              }, {
                rule: "optional",
                type: "int64",
                name: "ackAt",
                id: 5
              }, {
                rule: "optional",
                type: "int64",
                name: "readAt",
                id: 6
              }]
            }, {
              name: "DataCommand",
              syntax: "proto2",
              fields: [{
                rule: "repeated",
                type: "string",
                name: "ids",
                id: 1
              }, {
                rule: "repeated",
                type: "JsonObjectMessage",
                name: "msg",
                id: 2
              }, {
                rule: "optional",
                type: "bool",
                name: "offline",
                id: 3
              }]
            }, {
              name: "SessionCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "int64",
                name: "t",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "n",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "s",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "ua",
                id: 4
              }, {
                rule: "optional",
                type: "bool",
                name: "r",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "tag",
                id: 6
              }, {
                rule: "optional",
                type: "string",
                name: "deviceId",
                id: 7
              }, {
                rule: "repeated",
                type: "string",
                name: "sessionPeerIds",
                id: 8
              }, {
                rule: "repeated",
                type: "string",
                name: "onlineSessionPeerIds",
                id: 9
              }, {
                rule: "optional",
                type: "string",
                name: "st",
                id: 10
              }, {
                rule: "optional",
                type: "int32",
                name: "stTtl",
                id: 11
              }, {
                rule: "optional",
                type: "int32",
                name: "code",
                id: 12
              }, {
                rule: "optional",
                type: "string",
                name: "reason",
                id: 13
              }, {
                rule: "optional",
                type: "string",
                name: "deviceToken",
                id: 14
              }, {
                rule: "optional",
                type: "bool",
                name: "sp",
                id: 15
              }, {
                rule: "optional",
                type: "string",
                name: "detail",
                id: 16
              }, {
                rule: "optional",
                type: "int64",
                name: "lastUnreadNotifTime",
                id: 17
              }, {
                rule: "optional",
                type: "int64",
                name: "lastPatchTime",
                id: 18
              }]
            }, {
              name: "ErrorCommand",
              syntax: "proto2",
              fields: [{
                rule: "required",
                type: "int32",
                name: "code",
                id: 1
              }, {
                rule: "required",
                type: "string",
                name: "reason",
                id: 2
              }, {
                rule: "optional",
                type: "int32",
                name: "appCode",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "detail",
                id: 4
              }]
            }, {
              name: "DirectCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "msg",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "uid",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "fromPeerId",
                id: 3
              }, {
                rule: "optional",
                type: "int64",
                name: "timestamp",
                id: 4
              }, {
                rule: "optional",
                type: "bool",
                name: "offline",
                id: 5
              }, {
                rule: "optional",
                type: "bool",
                name: "hasMore",
                id: 6
              }, {
                rule: "repeated",
                type: "string",
                name: "toPeerIds",
                id: 7
              }, {
                rule: "optional",
                type: "bool",
                name: "r",
                id: 10
              }, {
                rule: "optional",
                type: "string",
                name: "cid",
                id: 11
              }, {
                rule: "optional",
                type: "string",
                name: "id",
                id: 12
              }, {
                rule: "optional",
                type: "bool",
                name: "transient",
                id: 13
              }, {
                rule: "optional",
                type: "string",
                name: "dt",
                id: 14
              }, {
                rule: "optional",
                type: "string",
                name: "roomId",
                id: 15
              }, {
                rule: "optional",
                type: "string",
                name: "pushData",
                id: 16
              }, {
                rule: "optional",
                type: "bool",
                name: "will",
                id: 17
              }]
            }, {
              name: "AckCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "int32",
                name: "code",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "reason",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "mid",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "cid",
                id: 4
              }, {
                rule: "optional",
                type: "int64",
                name: "t",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "uid",
                id: 6
              }, {
                rule: "optional",
                type: "int64",
                name: "fromts",
                id: 7
              }, {
                rule: "optional",
                type: "int64",
                name: "tots",
                id: 8
              }, {
                rule: "optional",
                type: "string",
                name: "type",
                id: 9
              }, {
                rule: "repeated",
                type: "string",
                name: "ids",
                id: 10
              }, {
                rule: "optional",
                type: "int32",
                name: "appCode",
                id: 11
              }]
            }, {
              name: "UnreadCommand",
              syntax: "proto2",
              fields: [{
                rule: "repeated",
                type: "UnreadTuple",
                name: "convs",
                id: 1
              }, {
                rule: "optional",
                type: "int64",
                name: "notifTime",
                id: 2
              }]
            }, {
              name: "ConvCommand",
              syntax: "proto2",
              fields: [{
                rule: "repeated",
                type: "string",
                name: "m",
                id: 1
              }, {
                rule: "optional",
                type: "bool",
                name: "transient",
                id: 2
              }, {
                rule: "optional",
                type: "bool",
                name: "unique",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "cid",
                id: 4
              }, {
                rule: "optional",
                type: "string",
                name: "cdate",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "initBy",
                id: 6
              }, {
                rule: "optional",
                type: "string",
                name: "sort",
                id: 7
              }, {
                rule: "optional",
                type: "int32",
                name: "limit",
                id: 8
              }, {
                rule: "optional",
                type: "int32",
                name: "skip",
                id: 9
              }, {
                rule: "optional",
                type: "int32",
                name: "flag",
                id: 10
              }, {
                rule: "optional",
                type: "int32",
                name: "count",
                id: 11
              }, {
                rule: "optional",
                type: "string",
                name: "udate",
                id: 12
              }, {
                rule: "optional",
                type: "int64",
                name: "t",
                id: 13
              }, {
                rule: "optional",
                type: "string",
                name: "n",
                id: 14
              }, {
                rule: "optional",
                type: "string",
                name: "s",
                id: 15
              }, {
                rule: "optional",
                type: "bool",
                name: "statusSub",
                id: 16
              }, {
                rule: "optional",
                type: "bool",
                name: "statusPub",
                id: 17
              }, {
                rule: "optional",
                type: "int32",
                name: "statusTTL",
                id: 18
              }, {
                rule: "optional",
                type: "string",
                name: "uniqueId",
                id: 19
              }, {
                rule: "optional",
                type: "string",
                name: "targetClientId",
                id: 20
              }, {
                rule: "optional",
                type: "int64",
                name: "maxReadTimestamp",
                id: 21
              }, {
                rule: "optional",
                type: "int64",
                name: "maxAckTimestamp",
                id: 22
              }, {
                rule: "optional",
                type: "bool",
                name: "queryAllMembers",
                id: 23
              }, {
                rule: "repeated",
                type: "MaxReadTuple",
                name: "maxReadTuples",
                id: 24
              }, {
                rule: "repeated",
                type: "string",
                name: "cids",
                id: 25
              }, {
                rule: "optional",
                type: "JsonObjectMessage",
                name: "results",
                id: 100
              }, {
                rule: "optional",
                type: "JsonObjectMessage",
                name: "where",
                id: 101
              }, {
                rule: "optional",
                type: "JsonObjectMessage",
                name: "attr",
                id: 103
              }]
            }, {
              name: "RoomCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "roomId",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "s",
                id: 2
              }, {
                rule: "optional",
                type: "int64",
                name: "t",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "n",
                id: 4
              }, {
                rule: "optional",
                type: "bool",
                name: "transient",
                id: 5
              }, {
                rule: "repeated",
                type: "string",
                name: "roomPeerIds",
                id: 6
              }, {
                rule: "optional",
                type: "string",
                name: "byPeerId",
                id: 7
              }]
            }, {
              name: "LogsCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "cid",
                id: 1
              }, {
                rule: "optional",
                type: "int32",
                name: "l",
                id: 2
              }, {
                rule: "optional",
                type: "int32",
                name: "limit",
                id: 3
              }, {
                rule: "optional",
                type: "int64",
                name: "t",
                id: 4
              }, {
                rule: "optional",
                type: "int64",
                name: "tt",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "tmid",
                id: 6
              }, {
                rule: "optional",
                type: "string",
                name: "mid",
                id: 7
              }, {
                rule: "optional",
                type: "string",
                name: "checksum",
                id: 8
              }, {
                rule: "optional",
                type: "bool",
                name: "stored",
                id: 9
              }, {
                rule: "optional",
                type: "bool",
                name: "reversed",
                id: 10
              }, {
                rule: "repeated",
                type: "LogItem",
                name: "logs",
                id: 105
              }]
            }, {
              name: "RcpCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "id",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "cid",
                id: 2
              }, {
                rule: "optional",
                type: "int64",
                name: "t",
                id: 3
              }, {
                rule: "optional",
                type: "bool",
                name: "read",
                id: 4
              }]
            }, {
              name: "ReadTuple",
              syntax: "proto2",
              fields: [{
                rule: "required",
                type: "string",
                name: "cid",
                id: 1
              }, {
                rule: "optional",
                type: "int64",
                name: "timestamp",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "mid",
                id: 3
              }]
            }, {
              name: "MaxReadTuple",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "pid",
                id: 1
              }, {
                rule: "optional",
                type: "int64",
                name: "maxAckTimestamp",
                id: 2
              }, {
                rule: "optional",
                type: "int64",
                name: "maxReadTimestamp",
                id: 3
              }]
            }, {
              name: "ReadCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "cid",
                id: 1
              }, {
                rule: "repeated",
                type: "string",
                name: "cids",
                id: 2
              }, {
                rule: "repeated",
                type: "ReadTuple",
                name: "convs",
                id: 3
              }]
            }, {
              name: "PresenceCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "StatusType",
                name: "status",
                id: 1
              }, {
                rule: "repeated",
                type: "string",
                name: "sessionPeerIds",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "cid",
                id: 3
              }]
            }, {
              name: "ReportCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "bool",
                name: "initiative",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "type",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "data",
                id: 3
              }]
            }, {
              name: "PatchItem",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "cid",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "mid",
                id: 2
              }, {
                rule: "optional",
                type: "int64",
                name: "timestamp",
                id: 3
              }, {
                rule: "optional",
                type: "bool",
                name: "recall",
                id: 4
              }, {
                rule: "optional",
                type: "string",
                name: "data",
                id: 5
              }, {
                rule: "optional",
                type: "int64",
                name: "patchTimestamp",
                id: 6
              }]
            }, {
              name: "PatchCommand",
              syntax: "proto2",
              fields: [{
                rule: "repeated",
                type: "PatchItem",
                name: "patches",
                id: 1
              }, {
                rule: "optional",
                type: "int64",
                name: "lastPatchTime",
                id: 2
              }]
            }, {
              name: "GenericCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "CommandType",
                name: "cmd",
                id: 1
              }, {
                rule: "optional",
                type: "OpType",
                name: "op",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "appId",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "peerId",
                id: 4
              }, {
                rule: "optional",
                type: "int32",
                name: "i",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "installationId",
                id: 6
              }, {
                rule: "optional",
                type: "int32",
                name: "priority",
                id: 7
              }, {
                rule: "optional",
                type: "int32",
                name: "service",
                id: 8
              }, {
                rule: "optional",
                type: "DataCommand",
                name: "dataMessage",
                id: 101
              }, {
                rule: "optional",
                type: "SessionCommand",
                name: "sessionMessage",
                id: 102
              }, {
                rule: "optional",
                type: "ErrorCommand",
                name: "errorMessage",
                id: 103
              }, {
                rule: "optional",
                type: "DirectCommand",
                name: "directMessage",
                id: 104
              }, {
                rule: "optional",
                type: "AckCommand",
                name: "ackMessage",
                id: 105
              }, {
                rule: "optional",
                type: "UnreadCommand",
                name: "unreadMessage",
                id: 106
              }, {
                rule: "optional",
                type: "ReadCommand",
                name: "readMessage",
                id: 107
              }, {
                rule: "optional",
                type: "RcpCommand",
                name: "rcpMessage",
                id: 108
              }, {
                rule: "optional",
                type: "LogsCommand",
                name: "logsMessage",
                id: 109
              }, {
                rule: "optional",
                type: "ConvCommand",
                name: "convMessage",
                id: 110
              }, {
                rule: "optional",
                type: "RoomCommand",
                name: "roomMessage",
                id: 111
              }, {
                rule: "optional",
                type: "PresenceCommand",
                name: "presenceMessage",
                id: 112
              }, {
                rule: "optional",
                type: "ReportCommand",
                name: "reportMessage",
                id: 113
              }, {
                rule: "optional",
                type: "PatchCommand",
                name: "patchMessage",
                id: 114
              }]
            }],
            enums: [{
              name: "CommandType",
              syntax: "proto2",
              values: [{
                name: "session",
                id: 0
              }, {
                name: "conv",
                id: 1
              }, {
                name: "direct",
                id: 2
              }, {
                name: "ack",
                id: 3
              }, {
                name: "rcp",
                id: 4
              }, {
                name: "unread",
                id: 5
              }, {
                name: "logs",
                id: 6
              }, {
                name: "error",
                id: 7
              }, {
                name: "login",
                id: 8
              }, {
                name: "data",
                id: 9
              }, {
                name: "room",
                id: 10
              }, {
                name: "read",
                id: 11
              }, {
                name: "presence",
                id: 12
              }, {
                name: "report",
                id: 13
              }, {
                name: "echo",
                id: 14
              }, {
                name: "loggedin",
                id: 15
              }, {
                name: "logout",
                id: 16
              }, {
                name: "loggedout",
                id: 17
              }, {
                name: "patch",
                id: 18
              }]
            }, {
              name: "OpType",
              syntax: "proto2",
              values: [{
                name: "open",
                id: 1
              }, {
                name: "add",
                id: 2
              }, {
                name: "remove",
                id: 3
              }, {
                name: "close",
                id: 4
              }, {
                name: "opened",
                id: 5
              }, {
                name: "closed",
                id: 6
              }, {
                name: "query",
                id: 7
              }, {
                name: "query_result",
                id: 8
              }, {
                name: "conflict",
                id: 9
              }, {
                name: "added",
                id: 10
              }, {
                name: "removed",
                id: 11
              }, {
                name: "start",
                id: 30
              }, {
                name: "started",
                id: 31
              }, {
                name: "joined",
                id: 32
              }, {
                name: "members_joined",
                id: 33
              }, {
                name: "left",
                id: 39
              }, {
                name: "members_left",
                id: 40
              }, {
                name: "results",
                id: 42
              }, {
                name: "count",
                id: 43
              }, {
                name: "result",
                id: 44
              }, {
                name: "update",
                id: 45
              }, {
                name: "updated",
                id: 46
              }, {
                name: "mute",
                id: 47
              }, {
                name: "unmute",
                id: 48
              }, {
                name: "status",
                id: 49
              }, {
                name: "members",
                id: 50
              }, {
                name: "max_read",
                id: 51
              }, {
                name: "is_member",
                id: 52
              }, {
                name: "join",
                id: 80
              }, {
                name: "invite",
                id: 81
              }, {
                name: "leave",
                id: 82
              }, {
                name: "kick",
                id: 83
              }, {
                name: "reject",
                id: 84
              }, {
                name: "invited",
                id: 85
              }, {
                name: "kicked",
                id: 86
              }, {
                name: "upload",
                id: 100
              }, {
                name: "uploaded",
                id: 101
              }, {
                name: "modify",
                id: 150
              }, {
                name: "modified",
                id: 151
              }]
            }, {
              name: "StatusType",
              syntax: "proto2",
              values: [{
                name: "on",
                id: 1
              }, {
                name: "off",
                id: 2
              }]
            }],
            isNamespace: !0
          }).build(),
          eo = Zi.push_server.messages2,
          to = eo.JsonObjectMessage,
          no = eo.UnreadTuple,
          ro = eo.LogItem,
          io = eo.DataCommand,
          oo = eo.SessionCommand,
          so = eo.ErrorCommand,
          ao = eo.DirectCommand,
          uo = eo.AckCommand,
          co = eo.UnreadCommand,
          fo = eo.ConvCommand,
          lo = eo.RoomCommand,
          ho = eo.LogsCommand,
          po = eo.RcpCommand,
          yo = eo.ReadTuple,
          vo = eo.MaxReadTuple,
          go = eo.ReadCommand,
          mo = eo.PresenceCommand,
          _o = eo.ReportCommand,
          bo = eo.GenericCommand,
          wo = eo.CommandType,
          Eo = eo.OpType,
          So = eo.StatusType,
          To = Object.freeze({
            JsonObjectMessage: to,
            UnreadTuple: no,
            LogItem: ro,
            DataCommand: io,
            SessionCommand: oo,
            ErrorCommand: so,
            DirectCommand: ao,
            AckCommand: uo,
            UnreadCommand: co,
            ConvCommand: fo,
            RoomCommand: lo,
            LogsCommand: ho,
            RcpCommand: po,
            ReadTuple: yo,
            MaxReadTuple: vo,
            ReadCommand: go,
            PresenceCommand: mo,
            ReportCommand: _o,
            GenericCommand: bo,
            CommandType: wo,
            OpType: Eo,
            StatusType: So
          }),
          Oo = i(function(e) {
            function t() {}

            function n(e, t, n) {
              this.fn = e, this.context = t, this.once = n || !1
            }

            function r() {
              this._events = new t, this._eventsCount = 0
            }
            var i = Object.prototype.hasOwnProperty,
              o = "~";
            Object.create && (t.prototype = Object.create(null), (new t).__proto__ || (o = !1)), r.prototype.eventNames = function() {
              var e, t, n = [];
              if (0 === this._eventsCount) return n;
              for (t in e = this._events) i.call(e, t) && n.push(o ? t.slice(1) : t);
              return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
            }, r.prototype.listeners = function(e, t) {
              var n = o ? o + e : e,
                r = this._events[n];
              if (t) return !!r;
              if (!r) return [];
              if (r.fn) return [r.fn];
              for (var i = 0, s = r.length, a = new Array(s); i < s; i++) a[i] = r[i].fn;
              return a
            }, r.prototype.emit = function(e, t, n, r, i, s) {
              var a = o ? o + e : e;
              if (!this._events[a]) return !1;
              var u, c, f = this._events[a],
                l = arguments.length;
              if (f.fn) {
                switch (f.once && this.removeListener(e, f.fn, void 0, !0), l) {
                  case 1:
                    return f.fn.call(f.context), !0;
                  case 2:
                    return f.fn.call(f.context, t), !0;
                  case 3:
                    return f.fn.call(f.context, t, n), !0;
                  case 4:
                    return f.fn.call(f.context, t, n, r), !0;
                  case 5:
                    return f.fn.call(f.context, t, n, r, i), !0;
                  case 6:
                    return f.fn.call(f.context, t, n, r, i, s), !0
                }
                for (c = 1, u = new Array(l - 1); c < l; c++) u[c - 1] = arguments[c];
                f.fn.apply(f.context, u)
              } else {
                var h, d = f.length;
                for (c = 0; c < d; c++) switch (f[c].once && this.removeListener(e, f[c].fn, void 0, !0), l) {
                  case 1:
                    f[c].fn.call(f[c].context);
                    break;
                  case 2:
                    f[c].fn.call(f[c].context, t);
                    break;
                  case 3:
                    f[c].fn.call(f[c].context, t, n);
                    break;
                  case 4:
                    f[c].fn.call(f[c].context, t, n, r);
                    break;
                  default:
                    if (!u)
                      for (h = 1, u = new Array(l - 1); h < l; h++) u[h - 1] = arguments[h];
                    f[c].fn.apply(f[c].context, u)
                }
              }
              return !0
            }, r.prototype.on = function(e, t, r) {
              var i = new n(t, r || this),
                s = o ? o + e : e;
              return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], i] : this._events[s].push(i) : (this._events[s] = i, this._eventsCount++), this
            }, r.prototype.once = function(e, t, r) {
              var i = new n(t, r || this, !0),
                s = o ? o + e : e;
              return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], i] : this._events[s].push(i) : (this._events[s] = i, this._eventsCount++), this
            }, r.prototype.removeListener = function(e, n, r, i) {
              var s = o ? o + e : e;
              if (!this._events[s]) return this;
              if (!n) return 0 == --this._eventsCount ? this._events = new t : delete this._events[s], this;
              var a = this._events[s];
              if (a.fn) a.fn !== n || i && !a.once || r && a.context !== r || (0 == --this._eventsCount ? this._events = new t : delete this._events[s]);
              else {
                for (var u = 0, c = [], f = a.length; u < f; u++)(a[u].fn !== n || i && !a[u].once || r && a[u].context !== r) && c.push(a[u]);
                c.length ? this._events[s] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new t : delete this._events[s]
              }
              return this
            }, r.prototype.removeAllListeners = function(e) {
              var n;
              return e ? (n = o ? o + e : e, this._events[n] && (0 == --this._eventsCount ? this._events = new t : delete this._events[n])) : (this._events = new t, this._eventsCount = 0), this
            }, r.prototype.off = r.prototype.removeListener, r.prototype.addListener = r.prototype.on, r.prototype.setMaxListeners = function() {
              return this
            }, r.prefixed = o, r.EventEmitter = r, e.exports = r
          }),
          Ao = function(e, t, n) {
            t in e ? me.f(e, t, _e(0, n)) : e[t] = n
          };
        Ee(Ee.S + Ee.F * !fn(function(e) {
          Array.from(e)
        }), "Array", {
          from: function(e) {
            var t, n, r, i, o = st(e),
              s = "function" == typeof this ? this : Array,
              a = arguments.length,
              u = a > 1 ? arguments[1] : void 0,
              c = void 0 !== u,
              f = 0,
              l = Lt(o);
            if (c && (u = se(u, a > 2 ? arguments[2] : void 0, 2)), void 0 == l || s == Array && Rt(l))
              for (t = Pe(o.length), n = new s(t); t > f; f++) Ao(n, f, c ? u(o[f], f) : o[f]);
            else
              for (i = l.call(o), n = new s; !(r = i.next()).done; f++) Ao(n, f, c ? xt(i, u, [r.value, f], !0) : r.value);
            return n.length = f, n
          }
        });
        var Io = ie.Array.from,
          No = i(function(e) {
            e.exports = {
              default: Io,
              __esModule: !0
            }
          }),
          Co = i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(No);
            t.default = function(e) {
              if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
              }
              return (0, n.default)(e)
            }
          }),
          xo = r(Co),
          jo = me.f,
          Po = Mn.fastKey,
          Ro = fe ? "_s" : "size",
          ko = function(e, t) {
            var n, r = Po(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n)
              if (n.k == t) return n
          },
          Lo = {
            getConstructor: function(e, t, n, r) {
              var i = e(function(e, o) {
                Ct(e, i, t, "_i"), e._i = Ze(null), e._f = void 0, e._l = void 0, e[Ro] = 0, void 0 != o && Ut(o, n, e[r], e)
              });
              return en(i.prototype, {
                clear: function() {
                  for (var e = this, t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                  e._f = e._l = void 0, e[Ro] = 0
                },
                delete: function(e) {
                  var t = this,
                    n = ko(t, e);
                  if (n) {
                    var r = n.n,
                      i = n.p;
                    delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[Ro]--
                  }
                  return !!n
                },
                forEach: function(e) {
                  Ct(this, i, "forEach");
                  for (var t, n = se(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
                    for (n(t.v, t.k, this); t && t.r;) t = t.p
                },
                has: function(e) {
                  return !!ko(this, e)
                }
              }), fe && jo(i.prototype, "size", {
                get: function() {
                  return ne(this[Ro])
                }
              }), i
            },
            def: function(e, t, n) {
              var r, i, o = ko(e, t);
              return o ? o.v = n : (e._l = o = {
                i: i = Po(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
              }, e._f || (e._f = o), r && (r.n = o), e[Ro]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: ko,
            setStrong: function(e, t, n) {
              dt(e, t, function(e, t) {
                this._t = e, this._k = t, this._l = void 0
              }, function() {
                for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? yt(0, n.k) : "values" == t ? yt(0, n.v) : yt(0, [n.k, n.v]) : (e._t = void 0, yt(1))
              }, n ? "entries" : "values", !n, !0), nn(t)
            }
          },
          Uo = et("species"),
          Mo = function(e) {
            var t;
            return Jn(e) && (t = e.constructor, "function" != typeof t || t !== Array && !Jn(t.prototype) || (t = void 0), ae(t) && null === (t = t[Uo]) && (t = void 0)), void 0 === t ? Array : t
          },
          Do = function(e, t) {
            return new(Mo(e))(t)
          },
          Fo = function(e, t) {
            var n = 1 == e,
              r = 2 == e,
              i = 3 == e,
              o = 4 == e,
              s = 6 == e,
              a = 5 == e || s,
              u = t || Do;
            return function(t, c, f) {
              for (var l, h, d = st(t), p = Ce(d), y = se(c, f, 3), v = Pe(p.length), g = 0, m = n ? u(t, v) : r ? u(t, 0) : void 0; v > g; g++)
                if ((a || g in p) && (l = p[g], h = y(l, g, d), e))
                  if (n) m[g] = h;
                  else if (h) switch (e) {
                case 3:
                  return !0;
                case 5:
                  return l;
                case 6:
                  return g;
                case 2:
                  m.push(l)
              } else if (o) return !1;
              return s ? -1 : i || o ? o : m
            }
          },
          Bo = me.f,
          qo = Fo(0),
          Vo = function(e, t, n, r, i, o) {
            var s = re[e],
              a = s,
              u = i ? "set" : "add",
              c = a && a.prototype,
              f = {};
            return fe && "function" == typeof a && (o || c.forEach && !ce(function() {
              (new a).entries().next()
            })) ? (a = t(function(t, n) {
              Ct(t, a, e, "_c"), t._c = new s, void 0 != n && Ut(n, i, t[u], t)
            }), qo("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
              var t = "add" == e || "set" == e;
              e in c && (!o || "clear" != e) && be(a.prototype, e, function(n, r) {
                if (Ct(this, a, e), !t && o && !ae(n)) return "get" == e && void 0;
                var i = this._c[e](0 === n ? 0 : n, r);
                return t ? this : i
              })
            }), "size" in c && Bo(a.prototype, "size", {
              get: function() {
                return this._c.size
              }
            })) : (a = r.getConstructor(t, e, i, u), en(a.prototype, n), Mn.NEED = !0), rt(a, e), f[e] = a, Ee(Ee.G + Ee.W + Ee.F, f), o || r.setStrong(a, e, i), a
          },
          Yo = (Vo("Set", function(e) {
            return function() {
              return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
          }, {
            add: function(e) {
              return Lo.def(this, e = 0 === e ? 0 : e, e)
            }
          }, Lo), function(e, t) {
            var n = [];
            return Ut(e, !1, n.push, n, t), n
          });
        Ee(Ee.P + Ee.R, "Set", {
          toJSON: function(e) {
            return function() {
              if (Nt(this) != e) throw TypeError(e + "#toJSON isn't generic");
              return Yo(this)
            }
          }("Set")
        });
        var Wo = ie.Set,
          zo = i(function(e) {
            e.exports = {
              default: Wo,
              __esModule: !0
            }
          }),
          Jo = r(zo),
          Go = Object.assign,
          Ho = !Go || ce(function() {
            var e = {},
              t = {},
              n = Symbol(),
              r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function(e) {
              t[e] = e
            }), 7 != Go({}, e)[n] || Object.keys(Go({}, t)).join("") != r
          }) ? function(e, t) {
            for (var n = st(e), r = arguments.length, i = 1, o = Vn.f, s = Wn.f; r > i;)
              for (var a, u = Ce(arguments[i++]), c = o ? Ge(u).concat(o(u)) : Ge(u), f = c.length, l = 0; f > l;) s.call(u, a = c[l++]) && (n[a] = u[a]);
            return n
          } : Go;
        Ee(Ee.S + Ee.F, "Object", {
          assign: Ho
        });
        var Qo = ie.Object.assign,
          Ko = i(function(e) {
            e.exports = {
              default: Qo,
              __esModule: !0
            }
          }),
          $o = r(Ko),
          Xo = 1e3,
          Zo = 60 * Xo,
          es = 60 * Zo,
          ts = 24 * es,
          ns = 365.25 * ts,
          rs = function(e, t) {
            t = t || {};
            var n = typeof e;
            if ("string" === n && e.length > 0) return f(e);
            if ("number" === n && !1 === isNaN(e)) return t.long ? h(e) : l(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
          },
          is = i(function(e, t) {
            function n(e) {
              var n, r = 0;
              for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
              return t.colors[Math.abs(r) % t.colors.length]
            }

            function r(e) {
              function r() {
                if (r.enabled) {
                  var e = r,
                    n = +new Date,
                    i = n - (u || n);
                  e.diff = i, e.prev = u, e.curr = n, u = n;
                  for (var o = new Array(arguments.length), s = 0; s < o.length; s++) o[s] = arguments[s];
                  o[0] = t.coerce(o[0]), "string" != typeof o[0] && o.unshift("%O");
                  var a = 0;
                  o[0] = o[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                    if ("%%" === n) return n;
                    a++;
                    var i = t.formatters[r];
                    if ("function" == typeof i) {
                      var s = o[a];
                      n = i.call(e, s), o.splice(a, 1), a--
                    }
                    return n
                  }), t.formatArgs.call(e, o);
                  (r.log || t.log || console.log.bind(console)).apply(e, o)
                }
              }
              return r.namespace = e, r.enabled = t.enabled(e), r.useColors = t.useColors(), r.color = n(e), "function" == typeof t.init && t.init(r), r
            }

            function i(e) {
              t.save(e), t.names = [], t.skips = [];
              for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (e = n[i].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
            }

            function o() {
              t.enable("")
            }

            function s(e) {
              var n, r;
              for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
              for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
              return !1
            }

            function a(e) {
              return e instanceof Error ? e.stack || e.message : e
            }
            t = e.exports = r.debug = r.default = r, t.coerce = a, t.disable = o, t.enable = i, t.enabled = s, t.humanize = rs, t.names = [], t.skips = [], t.formatters = {};
            var u
          }),
          os = i(function(e, t) {
            function n() {
              return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }

            function r(e) {
              var n = this.useColors;
              if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                var r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                var i = 0,
                  o = 0;
                e[0].replace(/%[a-zA-Z%]/g, function(e) {
                  "%%" !== e && (i++, "%c" === e && (o = i))
                }), e.splice(o, 0, r)
              }
            }

            function i() {
              return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function o(e) {
              try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
              } catch (e) {}
            }

            function s() {
              var e;
              try {
                e = t.storage.debug
              } catch (e) {}
              return !e && void 0 !== $ && "env" in $ && (e = $.env.DEBUG), e
            }
            t = e.exports = is, t.log = i, t.formatArgs = r, t.save = o, t.load = s, t.useColors = n, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
              try {
                return window.localStorage
              } catch (e) {}
            }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
              try {
                return JSON.stringify(e)
              } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
              }
            }, t.enable(s())
          }),
          ss = function(e, t) {
            return function() {
              for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
              return e.apply(t, n)
            }
          },
          as = Object.prototype.toString,
          us = {
            isArray: p,
            isArrayBuffer: v,
            isBuffer: y,
            isFormData: g,
            isArrayBufferView: m,
            isString: _,
            isNumber: b,
            isObject: E,
            isUndefined: w,
            isDate: S,
            isFile: T,
            isBlob: O,
            isFunction: A,
            isStream: I,
            isURLSearchParams: N,
            isStandardBrowserEnv: x,
            forEach: j,
            merge: P,
            extend: R,
            trim: C
          },
          cs = function(e, t) {
            us.forEach(e, function(n, r) {
              r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
            })
          },
          fs = function(e, t, n, r) {
            return e.config = t, n && (e.code = n), e.response = r, e
          },
          ls = function(e, t, n, r) {
            var i = new Error(e);
            return fs(i, t, n, r)
          },
          hs = function(e, t, n) {
            var r = n.config.validateStatus;
            n.status && r && !r(n.status) ? t(ls("Request failed with status code " + n.status, n.config, null, n)) : e(n)
          },
          ds = function(e, t, n) {
            if (!t) return e;
            var r;
            if (n) r = n(t);
            else if (us.isURLSearchParams(t)) r = t.toString();
            else {
              var i = [];
              us.forEach(t, function(e, t) {
                null !== e && void 0 !== e && (us.isArray(e) && (t += "[]"), us.isArray(e) || (e = [e]), us.forEach(e, function(e) {
                  us.isDate(e) ? e = e.toISOString() : us.isObject(e) && (e = ui(e)), i.push(k(t) + "=" + k(e))
                }))
              }), r = i.join("&")
            }
            return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e
          },
          ps = function(e) {
            var t, n, r, i = {};
            return e ? (us.forEach(e.split("\n"), function(e) {
              r = e.indexOf(":"), t = us.trim(e.substr(0, r)).toLowerCase(), n = us.trim(e.substr(r + 1)), t && (i[t] = i[t] ? i[t] + ", " + n : n)
            }), i) : i
          },
          ys = us.isStandardBrowserEnv() ? function() {
            function e(e) {
              var t = e;
              return n && (r.setAttribute("href", t), t = r.href), r.setAttribute("href", t), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
              }
            }
            var t, n = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement("a");
            return t = e(window.location.href),
              function(n) {
                var r = us.isString(n) ? e(n) : n;
                return r.protocol === t.protocol && r.host === t.host
              }
          }() : function() {
            return function() {
              return !0
            }
          }(),
          vs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        L.prototype = new Error, L.prototype.code = 5, L.prototype.name = "InvalidCharacterError";
        var gs = U,
          ms = us.isStandardBrowserEnv() ? function() {
            return {
              write: function(e, t, n, r, i, o) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)), us.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), us.isString(r) && s.push("path=" + r), us.isString(i) && s.push("domain=" + i), !0 === o && s.push("secure"), document.cookie = s.join("; ")
              },
              read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
              },
              remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
              }
            }
          }() : function() {
            return {
              write: function() {},
              read: function() {
                return null
              },
              remove: function() {}
            }
          }(),
          _s = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || gs,
          bs = function(e) {
            return new Pn(function(t, n) {
              var r = e.data,
                i = e.headers;
              us.isFormData(r) && delete i["Content-Type"];
              var o = new XMLHttpRequest,
                s = "onreadystatechange",
                a = !1;
              if ("test" === $.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in o || ys(e.url) || (o = new window.XDomainRequest, s = "onload", a = !0, o.onprogress = function() {}, o.ontimeout = function() {}), e.auth) {
                var u = e.auth.username || "",
                  c = e.auth.password || "";
                i.Authorization = "Basic " + _s(u + ":" + c)
              }
              if (o.open(e.method.toUpperCase(), ds(e.url, e.params, e.paramsSerializer), !0), o.timeout = e.timeout, o[s] = function() {
                  if (o && (4 === o.readyState || a) && (0 !== o.status || o.responseURL && 0 === o.responseURL.indexOf("file:"))) {
                    var r = "getAllResponseHeaders" in o ? ps(o.getAllResponseHeaders()) : null,
                      i = e.responseType && "text" !== e.responseType ? o.response : o.responseText,
                      s = {
                        data: i,
                        status: 1223 === o.status ? 204 : o.status,
                        statusText: 1223 === o.status ? "No Content" : o.statusText,
                        headers: r,
                        config: e,
                        request: o
                      };
                    hs(t, n, s), o = null
                  }
                }, o.onerror = function() {
                  n(ls("Network Error", e)), o = null
                }, o.ontimeout = function() {
                  n(ls("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED")), o = null
                }, us.isStandardBrowserEnv()) {
                var f = ms,
                  l = (e.withCredentials || ys(e.url)) && e.xsrfCookieName ? f.read(e.xsrfCookieName) : void 0;
                l && (i[e.xsrfHeaderName] = l)
              }
              if ("setRequestHeader" in o && us.forEach(i, function(e, t) {
                  void 0 === r && "content-type" === t.toLowerCase() ? delete i[t] : o.setRequestHeader(t, e)
                }), e.withCredentials && (o.withCredentials = !0), e.responseType) try {
                o.responseType = e.responseType
              } catch (t) {
                if ("json" !== e.responseType) throw t
              }
              "function" == typeof e.onDownloadProgress && o.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && o.upload && o.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                o && (o.abort(), n(e), o = null)
              }), void 0 === r && (r = null), o.send(r)
            })
          },
          ws = {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          Es = {
            adapter: function() {
              var e;
              return "undefined" != typeof XMLHttpRequest ? e = bs : void 0 !== $ && (e = bs), e
            }(),
            transformRequest: [function(e, t) {
              return cs(t, "Content-Type"), us.isFormData(e) || us.isArrayBuffer(e) || us.isBuffer(e) || us.isStream(e) || us.isFile(e) || us.isBlob(e) ? e : us.isArrayBufferView(e) ? e.buffer : us.isURLSearchParams(e) ? (M(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : us.isObject(e) ? (M(t, "application/json;charset=utf-8"), ui(e)) : e
            }],
            transformResponse: [function(e) {
              if ("string" == typeof e) try {
                e = JSON.parse(e)
              } catch (e) {}
              return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
              return e >= 200 && e < 300
            }
          };
        Es.headers = {
          common: {
            Accept: "application/json, text/plain, */*"
          }
        }, us.forEach(["delete", "get", "head"], function(e) {
          Es.headers[e] = {}
        }), us.forEach(["post", "put", "patch"], function(e) {
          Es.headers[e] = us.merge(ws)
        });
        var Ss = Es;
        D.prototype.use = function(e, t) {
          return this.handlers.push({
            fulfilled: e,
            rejected: t
          }), this.handlers.length - 1
        }, D.prototype.eject = function(e) {
          this.handlers[e] && (this.handlers[e] = null)
        }, D.prototype.forEach = function(e) {
          us.forEach(this.handlers, function(t) {
            null !== t && e(t)
          })
        };
        var Ts = D,
          Os = function(e, t, n) {
            return us.forEach(n, function(n) {
              e = n(e, t)
            }), e
          },
          As = function(e) {
            return !(!e || !e.__CANCEL__)
          },
          Is = function(e) {
            return F(e), e.headers = e.headers || {}, e.data = Os(e.data, e.headers, e.transformRequest), e.headers = us.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), us.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
              delete e.headers[t]
            }), (e.adapter || Ss.adapter)(e).then(function(t) {
              return F(e), t.data = Os(t.data, t.headers, e.transformResponse), t
            }, function(t) {
              return As(t) || (F(e), t && t.response && (t.response.data = Os(t.response.data, t.response.headers, e.transformResponse))), Pn.reject(t)
            })
          },
          Ns = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
          },
          Cs = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
          };
        B.prototype.request = function(e) {
          "string" == typeof e && (e = us.merge({
            url: arguments[0]
          }, arguments[1])), e = us.merge(Ss, this.defaults, {
            method: "get"
          }, e), e.baseURL && !Ns(e.url) && (e.url = Cs(e.baseURL, e.url));
          var t = [Is, void 0],
            n = Pn.resolve(e);
          for (this.interceptors.request.forEach(function(e) {
              t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function(e) {
              t.push(e.fulfilled, e.rejected)
            }); t.length;) n = n.then(t.shift(), t.shift());
          return n
        }, us.forEach(["delete", "get", "head", "options"], function(e) {
          B.prototype[e] = function(t, n) {
            return this.request(us.merge(n || {}, {
              method: e,
              url: t
            }))
          }
        }), us.forEach(["post", "put", "patch"], function(e) {
          B.prototype[e] = function(t, n, r) {
            return this.request(us.merge(r || {}, {
              method: e,
              url: t,
              data: n
            }))
          }
        });
        var xs = B;
        q.prototype.toString = function() {
          return "Cancel" + (this.message ? ": " + this.message : "")
        }, q.prototype.__CANCEL__ = !0;
        var js = q;
        V.prototype.throwIfRequested = function() {
          if (this.reason) throw this.reason
        }, V.source = function() {
          var e;
          return {
            token: new V(function(t) {
              e = t
            }),
            cancel: e
          }
        };
        var Ps = V,
          Rs = function(e) {
            return function(t) {
              return e.apply(null, t)
            }
          },
          ks = Y(Ss);
        ks.Axios = xs, ks.create = function(e) {
          return Y(us.merge(Ss, e))
        }, ks.Cancel = js, ks.CancelToken = Ps, ks.isCancel = As, ks.all = function(e) {
          return Pn.all(e)
        }, ks.spread = Rs;
        var Ls = ks,
          Us = ks;
        Ls.default = Us;
        var Ms = Ls,
          Ds = function(e, t) {
            var n = (ie.Object || {})[e] || Object[e],
              r = {};
            r[e] = t(n), Ee(Ee.S + Ee.F * ce(function() {
              n(1)
            }), "Object", r)
          },
          Fs = ir.f;
        Ds("getOwnPropertyDescriptor", function() {
          return function(e, t) {
            return Fs(xe(e), t)
          }
        });
        var Bs = ie.Object,
          qs = function(e, t) {
            return Bs.getOwnPropertyDescriptor(e, t)
          },
          Vs = i(function(e) {
            e.exports = {
              default: qs,
              __esModule: !0
            }
          }),
          Ys = r(Vs),
          Ws = i(function(e, t) {
            ! function() {
              var n = {
                VERSION: "2.4.0",
                Result: {
                  SUCCEEDED: 1,
                  NOTRANSITION: 2,
                  CANCELLED: 3,
                  PENDING: 4
                },
                Error: {
                  INVALID_TRANSITION: 100,
                  PENDING_TRANSITION: 200,
                  INVALID_CALLBACK: 300
                },
                WILDCARD: "*",
                ASYNC: "async",
                create: function(e, t) {
                  var r = "string" == typeof e.initial ? {
                      state: e.initial
                    } : e.initial,
                    i = e.terminal || e.final,
                    o = t || e.target || {},
                    s = e.events || [],
                    a = e.callbacks || {},
                    u = {},
                    c = {},
                    f = function(e) {
                      var t = Array.isArray(e.from) ? e.from : e.from ? [e.from] : [n.WILDCARD];
                      u[e.name] = u[e.name] || {};
                      for (var r = 0; r < t.length; r++) c[t[r]] = c[t[r]] || [], c[t[r]].push(e.name), u[e.name][t[r]] = e.to || t[r];
                      e.to && (c[e.to] = c[e.to] || [])
                    };
                  r && (r.event = r.event || "startup", f({
                    name: r.event,
                    from: "none",
                    to: r.state
                  }));
                  for (var l = 0; l < s.length; l++) f(s[l]);
                  for (var h in u) u.hasOwnProperty(h) && (o[h] = n.buildEvent(h, u[h]));
                  for (var h in a) a.hasOwnProperty(h) && (o[h] = a[h]);
                  return o.current = "none", o.is = function(e) {
                    return Array.isArray(e) ? e.indexOf(this.current) >= 0 : this.current === e
                  }, o.can = function(e) {
                    return !this.transition && void 0 !== u[e] && (u[e].hasOwnProperty(this.current) || u[e].hasOwnProperty(n.WILDCARD))
                  }, o.cannot = function(e) {
                    return !this.can(e)
                  }, o.transitions = function() {
                    return (c[this.current] || []).concat(c[n.WILDCARD] || [])
                  }, o.isFinished = function() {
                    return this.is(i)
                  }, o.error = e.error || function(e, t, n, r, i, o, s) {
                    throw s || o
                  }, o.states = function() {
                    return Object.keys(c).sort()
                  }, r && !r.defer && o[r.event](), o
                },
                doCallback: function(e, t, r, i, o, s) {
                  if (t) try {
                    return t.apply(e, [r, i, o].concat(s))
                  } catch (t) {
                    return e.error(r, i, o, s, n.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", t)
                  }
                },
                beforeAnyEvent: function(e, t, r, i, o) {
                  return n.doCallback(e, e.onbeforeevent, t, r, i, o)
                },
                afterAnyEvent: function(e, t, r, i, o) {
                  return n.doCallback(e, e.onafterevent || e.onevent, t, r, i, o)
                },
                leaveAnyState: function(e, t, r, i, o) {
                  return n.doCallback(e, e.onleavestate, t, r, i, o)
                },
                enterAnyState: function(e, t, r, i, o) {
                  return n.doCallback(e, e.onenterstate || e.onstate, t, r, i, o)
                },
                changeState: function(e, t, r, i, o) {
                  return n.doCallback(e, e.onchangestate, t, r, i, o)
                },
                beforeThisEvent: function(e, t, r, i, o) {
                  return n.doCallback(e, e["onbefore" + t], t, r, i, o)
                },
                afterThisEvent: function(e, t, r, i, o) {
                  return n.doCallback(e, e["onafter" + t] || e["on" + t], t, r, i, o)
                },
                leaveThisState: function(e, t, r, i, o) {
                  return n.doCallback(e, e["onleave" + r], t, r, i, o)
                },
                enterThisState: function(e, t, r, i, o) {
                  return n.doCallback(e, e["onenter" + i] || e["on" + i], t, r, i, o)
                },
                beforeEvent: function(e, t, r, i, o) {
                  if (!1 === n.beforeThisEvent(e, t, r, i, o) || !1 === n.beforeAnyEvent(e, t, r, i, o)) return !1
                },
                afterEvent: function(e, t, r, i, o) {
                  n.afterThisEvent(e, t, r, i, o), n.afterAnyEvent(e, t, r, i, o)
                },
                leaveState: function(e, t, r, i, o) {
                  var s = n.leaveThisState(e, t, r, i, o),
                    a = n.leaveAnyState(e, t, r, i, o);
                  return !1 !== s && !1 !== a && (n.ASYNC === s || n.ASYNC === a ? n.ASYNC : void 0)
                },
                enterState: function(e, t, r, i, o) {
                  n.enterThisState(e, t, r, i, o), n.enterAnyState(e, t, r, i, o)
                },
                buildEvent: function(e, t) {
                  return function() {
                    var r = this.current,
                      i = t[r] || (t[n.WILDCARD] != n.WILDCARD ? t[n.WILDCARD] : r) || r,
                      o = Array.prototype.slice.call(arguments);
                    if (this.transition) return this.error(e, r, i, o, n.Error.PENDING_TRANSITION, "event " + e + " inappropriate because previous transition did not complete");
                    if (this.cannot(e)) return this.error(e, r, i, o, n.Error.INVALID_TRANSITION, "event " + e + " inappropriate in current state " + this.current);
                    if (!1 === n.beforeEvent(this, e, r, i, o)) return n.Result.CANCELLED;
                    if (r === i) return n.afterEvent(this, e, r, i, o), n.Result.NOTRANSITION;
                    var s = this;
                    this.transition = function() {
                      return s.transition = null, s.current = i, n.enterState(s, e, r, i, o), n.changeState(s, e, r, i, o), n.afterEvent(s, e, r, i, o), n.Result.SUCCEEDED
                    }, this.transition.cancel = function() {
                      s.transition = null, n.afterEvent(s, e, r, i, o)
                    };
                    var a = n.leaveState(this, e, r, i, o);
                    return !1 === a ? (this.transition = null, n.Result.CANCELLED) : n.ASYNC === a ? n.Result.PENDING : this.transition ? this.transition() : void 0
                  }
                }
              };
              e.exports && (t = e.exports = n), t.StateMachine = n
            }()
          }),
          zs = (i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(Ko);
            t.default = n.default || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }
          }), Mn.getWeak),
          Js = Fo(5),
          Gs = Fo(6),
          Hs = 0,
          Qs = function(e) {
            return e._l || (e._l = new Ks)
          },
          Ks = function() {
            this.a = []
          },
          $s = function(e, t) {
            return Js(e.a, function(e) {
              return e[0] === t
            })
          };
        Ks.prototype = {
          get: function(e) {
            var t = $s(this, e);
            if (t) return t[1]
          },
          has: function(e) {
            return !!$s(this, e)
          },
          set: function(e, t) {
            var n = $s(this, e);
            n ? n[1] = t : this.a.push([e, t])
          },
          delete: function(e) {
            var t = Gs(this.a, function(t) {
              return t[0] === e
            });
            return ~t && this.a.splice(t, 1), !!~t
          }
        };
        var Xs = {
            getConstructor: function(e, t, n, r) {
              var i = e(function(e, o) {
                Ct(e, i, t, "_i"), e._i = Hs++, e._l = void 0, void 0 != o && Ut(o, n, e[r], e)
              });
              return en(i.prototype, {
                delete: function(e) {
                  if (!ae(e)) return !1;
                  var t = zs(e);
                  return !0 === t ? Qs(this).delete(e) : t && Oe(t, this._i) && delete t[this._i]
                },
                has: function(e) {
                  if (!ae(e)) return !1;
                  var t = zs(e);
                  return !0 === t ? Qs(this).has(e) : t && Oe(t, this._i)
                }
              }), i
            },
            def: function(e, t, n) {
              var r = zs(ue(t), !0);
              return !0 === r ? Qs(e).set(t, n) : r[e._i] = n, e
            },
            ufstore: Qs
          },
          Zs = (i(function(e) {
            var t, n = Fo(0),
              r = Mn.getWeak,
              i = Object.isExtensible,
              o = Xs.ufstore,
              s = {},
              a = function(e) {
                return function() {
                  return e(this, arguments.length > 0 ? arguments[0] : void 0)
                }
              },
              u = {
                get: function(e) {
                  if (ae(e)) {
                    var t = r(e);
                    return !0 === t ? o(this).get(e) : t ? t[this._i] : void 0
                  }
                },
                set: function(e, t) {
                  return Xs.def(this, e, t)
                }
              },
              c = e.exports = Vo("WeakMap", a, u, Xs, !0, !0);
            7 != (new c).set((Object.freeze || Object)(s), 7).get(s) && (t = Xs.getConstructor(a), Ho(t.prototype, u), Mn.NEED = !0, n(["delete", "has", "get", "set"], function(e) {
              var n = c.prototype,
                r = n[e];
              Se(n, e, function(n, o) {
                if (ae(n) && !i(n)) {
                  this._f || (this._f = new t);
                  var s = this._f[e](n, o);
                  return "set" == e ? this : s
                }
                return r.call(this, n, o)
              })
            }))
          }), ie.WeakMap),
          ea = i(function(e) {
            e.exports = {
              default: Zs,
              __esModule: !0
            }
          }),
          ta = r(ea);
        Ds("keys", function() {
          return function(e) {
            return Ge(st(e))
          }
        });
        var na = ie.Object.keys,
          ra = i(function(e) {
            e.exports = {
              default: na,
              __esModule: !0
            }
          }),
          ia = r(ra),
          oa = "object" == typeof X && X && X.Object === Object && X,
          sa = oa,
          aa = "object" == typeof self && self && self.Object === Object && self,
          ua = sa || aa || Function("return this")(),
          ca = ua,
          fa = ca.Symbol,
          la = fa,
          ha = Object.prototype,
          da = ha.hasOwnProperty,
          pa = ha.toString,
          ya = la ? la.toStringTag : void 0,
          va = W,
          ga = Object.prototype,
          ma = ga.toString,
          _a = z,
          ba = "[object Null]",
          wa = "[object Undefined]",
          Ea = la ? la.toStringTag : void 0,
          Sa = J,
          Ta = G,
          Oa = Ta(Object.getPrototypeOf, Object),
          Aa = Oa,
          Ia = H,
          Na = "[object Object]",
          Ca = Function.prototype,
          xa = Object.prototype,
          ja = Ca.toString,
          Pa = xa.hasOwnProperty,
          Ra = ja.call(Object),
          ka = Q,
          La = void 0 !== e ? e : "undefined" != typeof window ? window : {},
          Ua = Ur("expired"),
          Ma = os("LC:Expirable"),
          Da = function() {
            function e(t, n) {
              Br(this, e), this._value = t, "number" == typeof n && (this.expiredAt = Date.now() + n)
            }
            return Ui(e, [{
              key: "value",
              get: function() {
                var e = this.expiredAt && this.expiredAt < Date.now();
                return e && Ma("expired: " + this._value), e ? Ua : this._value
              }
            }]), e
          }();
        Da.EXPIRED = Ua;
        var Fa, Ba = os("LC:Cache"),
          qa = function() {
            function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "anonymous";
              Br(this, e), this.name = t, this._map = {}
            }
            return e.prototype.get = function(e) {
              var t = this._map[e];
              if (t) {
                var n = t.value;
                if (n !== Da.EXPIRED) return Ba("[%s] hit: %s %O", this.name, e, n), n;
                delete this._map[e]
              }
              return Ba("[" + this.name + "] missed: " + e), null
            }, e.prototype.set = function(e, t, n) {
              Ba("[%s] set: %s %O %d", this.name, e, t, n), this._map[e] = new Da(t, n)
            }, e
          }(),
          Va = function e(t) {
            var n = new Pn(t[0]);
            return 1 === t.length ? n : n.catch(function() {
              return e(t.slice(1))
            })
          },
          Ya = function(e) {
            return function(t) {
              return e(t), t
            }
          },
          Wa = (La.navigator && La.navigator.userAgent && La.navigator.userAgent.indexOf("MSIE 10."), new ta),
          za = function(e) {
            return Wa.has(e) || Wa.set(e, {}), Wa.get(e)
          },
          Ja = function e(t) {
            if (!ka(t)) return t;
            var n = $o({}, t);
            for (var r in n)
              if ({}.hasOwnProperty.call(n, r)) {
                var i = n[r];
                null === i ? delete n[r] : n[r] = e(i)
              }
            return n
          },
          Ga = function(e) {
            return Ja(JSON.parse(ui(e)))
          },
          Ha = function(e) {
            return Array.isArray(e) ? e : void 0 === e || null === e ? [] : [e]
          },
          Qa = "object" === ("undefined" == typeof wx ? "undefined" : Dr(wx)) && "function" == typeof wx.connectSocket,
          Ka = La.WebSocket || La.MozWebSocket,
          $a = os("LC:WebSocketPlus"),
          Xa = function(e) {
            return Math.min(1e3 * Math.pow(2, e), 3e5)
          },
          Za = function(e, t, n) {
            return $o({}, n, {
              value: function() {
                var e;
                if (!this.is("connected")) {
                  var r = this.current;
                  throw console.warn(t + " should not be called when the connection is " + r), (this.is("disconnected") || this.is("reconnecting")) && console.warn("disconnect and reconnect event should be handled to avoid such calls."), new Error("Connection unavailable")
                }
                for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                return (e = n.value).call.apply(e, [this].concat(o))
              }
            })
          },
          eu = (Fa = function(e) {
            function t(n, r) {
              if (Br(this, t), void 0 === Ka) throw new Error("WebSocket is undefined. Polyfill is required in this runtime.");
              var i = Qr(this, e.call(this));
              return i._getUrls = "function" != typeof n ? function() {
                return Pn.resolve(n)
              } : n, i._protocol = r, i.init(), i._createWs(i._getUrls, i._protocol).then(function() {
                i.__postponeTimeoutTimer = i._postponeTimeoutTimer.bind(i), La.addEventListener && (i.__pause = function() {
                  return i.pause()
                }, i.__resume = function() {
                  return i.resume()
                }, La.addEventListener("offline", i.__pause), La.addEventListener("online", i.__resume)), i.open()
              }).catch(i.throw.bind(i)), i
            }
            return ii(t, e), t.prototype._createWs = function(e, t) {
              var n = this;
              return e().then(function(e) {
                var r = e;
                return r instanceof Array || (r = [r]), Va(r.map(function(e) {
                  return function(r, i) {
                    $a("connect [" + e + "] " + t);
                    var o = t ? new Ka(e, t) : new Ka(e);
                    o.binaryType = n.binaryType || (La.Buffer ? "nodebuffer" : "arraybuffer"), o.onopen = function() {
                      return r(o)
                    }, o.onerror = o.onclose = function(t) {
                      return i(t instanceof Error ? t : new Error("Failed to connect [" + e + "]"))
                    }
                  }
                })).then(function(e) {
                  return n._ws = e, n._ws.onclose = n._handleClose.bind(n), n._ws.onmessage = n._handleMessage.bind(n), e
                })
              })
            }, t.prototype._destroyWs = function() {
              var e = this._ws;
              e && (e.onopen = e.onclose = e.onerror = e.onmessage = null, this._ws = null, e.close())
            }, t.prototype.onbeforeevent = function(e, t, n) {
              for (var r = arguments.length, i = Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++) i[o - 3] = arguments[o];
              $a.apply(void 0, [e + ": " + t + " -> " + n].concat(i))
            }, t.prototype.onopen = function() {
              this.emit("open")
            }, t.prototype.onconnected = function() {
              this._startConnectionKeeper()
            }, t.prototype.onleaveconnected = function(e, t, n) {
              this._stopConnectionKeeper(), this._destroyWs(), "offline" !== n && "disconnected" !== n || this.emit("disconnect")
            }, t.prototype.onpause = function() {
              this.emit("offline")
            }, t.prototype.onbeforeresume = function() {
              this.emit("online")
            }, t.prototype.onreconnect = function() {
              this.emit("reconnect")
            }, t.prototype.ondisconnected = function(e, t, n) {
              var r = this,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                o = Xa.call(null, i);
              $a("schedule attempt=" + i + " delay=" + o), this.emit("schedule", i, o), this.__scheduledRetry && clearTimeout(this.__scheduledRetry), this.__scheduledRetry = setTimeout(function() {
                r.is("disconnected") && r.retry(i)
              }, o)
            }, t.prototype.onretry = function(e, t, n) {
              var r = this,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
              this.emit("retry", i), this._createWs(this._getUrls, this._protocol).then(function() {
                return r.can("reconnect") ? r.reconnect() : r._destroyWs()
              }, function() {
                return r.can("fail") && r.fail(i + 1)
              })
            }, t.prototype.onerror = function(e, t, n, r) {
              this.emit("error", r)
            }, t.prototype.onclose = function() {
              La.removeEventListener && (this.__pause && La.removeEventListener("offline", this.__pause), this.__resume && La.removeEventListener("online", this.__resume))
            }, t.prototype._ping = function() {
              $a("ping");
              try {
                this.ping()
              } catch (e) {
                console.warn("websocket ping error: " + e.message)
              }
            }, t.prototype.ping = function() {
              this._ws.ping ? this._ws.ping() : console.warn("The WebSocket implement does not support sending ping frame.\n        Override ping method to use application defined ping/pong mechanism.")
            }, t.prototype._postponeTimeoutTimer = function() {
              var e = this;
              $a("_postponeTimeoutTimer"), this._clearTimeoutTimers(), this._timeoutTimer = setTimeout(function() {
                $a("timeout"), e.disconnect()
              }, 38e4)
            }, t.prototype._clearTimeoutTimers = function() {
              this._timeoutTimer && clearTimeout(this._timeoutTimer)
            }, t.prototype._startConnectionKeeper = function() {
              $a("start connection keeper"), this._heartbeatTimer = setInterval(this._ping.bind(this), 18e4);
              var e = this._ws.addListener || this._ws.addEventListener;
              e.call(this._ws, "message", this.__postponeTimeoutTimer), e.call(this._ws, "pong", this.__postponeTimeoutTimer), this._postponeTimeoutTimer()
            }, t.prototype._stopConnectionKeeper = function() {
              $a("stop connection keeper");
              var e = this._ws.removeListener || this._ws.removeEventListener;
              e.call(this._ws, "message", this.__postponeTimeoutTimer), e.call(this._ws, "pong", this.__postponeTimeoutTimer), this._clearTimeoutTimers(), this._heartbeatTimer && clearInterval(this._heartbeatTimer)
            }, t.prototype._handleClose = function(e) {
              $a("ws closed [" + e.code + "] " + e.reason), this.isFinished() || this.handleClose(e)
            }, t.prototype.handleClose = function() {
              this.disconnect()
            }, t.prototype.send = function(e) {
              $a("send", e), this._ws.send(e)
            }, t.prototype._handleMessage = function(e) {
              $a("message", e.data), this.handleMessage(e.data)
            }, t.prototype.handleMessage = function(e) {
              this.emit("message", e)
            }, t
          }(Oo), K(Fa.prototype, "_ping", [Za], Ys(Fa.prototype, "_ping"), Fa.prototype), K(Fa.prototype, "send", [Za], Ys(Fa.prototype, "send"), Fa.prototype), Fa);
        Ws.create({
          target: eu.prototype,
          initial: {
            state: "initialized",
            event: "init",
            defer: !0
          },
          terminal: "closed",
          events: [{
            name: "open",
            from: "initialized",
            to: "connected"
          }, {
            name: "disconnect",
            from: "connected",
            to: "disconnected"
          }, {
            name: "retry",
            from: "disconnected",
            to: "reconnecting"
          }, {
            name: "fail",
            from: "reconnecting",
            to: "disconnected"
          }, {
            name: "reconnect",
            from: "reconnecting",
            to: "connected"
          }, {
            name: "pause",
            from: ["connected", "disconnected", "reconnecting"],
            to: "offline"
          }, {}, {
            name: "resume",
            from: "offline",
            to: "disconnected"
          }, {
            name: "close",
            from: ["connected", "disconnected", "reconnecting", "offline"],
            to: "closed"
          }, {
            name: "throw",
            from: "*",
            to: "error"
          }]
        });
        var tu = Mn.onFreeze;
        Ds("freeze", function(e) {
          return function(t) {
            return e && ae(t) ? e(tu(t)) : t
          }
        });
        var nu = ie.Object.freeze,
          ru = i(function(e) {
            e.exports = {
              default: nu,
              __esModule: !0
            }
          }),
          iu = r(ru),
          ou = iu({
            1e3: {
              name: "CLOSE_NORMAL"
            },
            1006: {
              name: "CLOSE_ABNORMAL"
            },
            4100: {
              name: "APP_NOT_AVAILABLE",
              message: "App not exists or realtime message service is disabled."
            },
            4103: {
              name: "INVALID_LOGIN",
              message: "Malformed clientId."
            },
            4105: {
              name: "SESSION_REQUIRED",
              message: "Message sent before session opened. "
            },
            4107: {
              name: "READ_TIMEOUT"
            },
            4108: {
              name: "LOGIN_TIMEOUT"
            },
            4109: {
              name: "FRAME_TOO_LONG"
            },
            4110: {
              name: "INVALID_ORIGIN",
              message: "Access denied by domain whitelist."
            },
            4111: {
              name: "SESSION_CONFLICT"
            },
            4112: {
              name: "SESSION_TOKEN_EXPIRED"
            },
            4200: {
              name: "INTERNAL_ERROR",
              message: "Internal error, please contact LeanCloud for support."
            },
            4201: {
              name: "SEND_MESSAGE_TIMEOUT"
            },
            4302: {
              name: "CONVERSATION_SIGNATURE_FAILED"
            },
            4303: {
              name: "CONVERSATION_NOT_FOUND"
            },
            4304: {
              name: "CONVERSATION_FULL"
            },
            4305: {
              name: "CONVERSATION_REJECTED_BY_APP"
            },
            4306: {
              name: "CONVERSATION_UPDATE_FAILED"
            },
            4307: {
              name: "CONVERSATION_READ_ONLY"
            },
            4308: {
              name: "CONVERSATION_NOT_ALLOWED"
            },
            4401: {
              name: "INVALID_MESSAGING_TARGET"
            },
            4402: {
              name: "MESSAGE_REJECTED_BY_APP"
            }
          }),
          su = iu(ia(ou).reduce(function(e, t) {
            return $o(e, Gr({}, ou[t].name, Number(t)))
          }, {})),
          au = function(e) {
            var t = e.code,
              n = e.reason,
              r = e.appCode,
              i = e.detail,
              o = n || i;
            !o && ou[t] && (o = ou[t].message || ou[t].name), o || (o = "Unknow Error: " + t);
            var s = new Error(o);
            return $o(s, {
              code: t,
              appCode: r,
              detail: i
            })
          },
          uu = os("LC:Connection"),
          cu = function(e) {
            function t(n, r) {
              var i = r.format,
                o = r.version;
              Br(this, t), uu("initializing Connection");
              var s = "lc." + i + "." + o;
              if (Qa) var a = Qr(this, e.call(this, n().then(function(e) {
                return e.map(function(e) {
                  return e + (-1 === e.indexOf("?") ? "?" : "&") + "subprotocol=" + encodeURIComponent(s)
                })
              })));
              else var a = Qr(this, e.call(this, n, s));
              return a._protocalFormat = i, a._commands = {}, a._serialId = 0, Qr(a)
            }
            return ii(t, e), t.prototype.send = function(t) {
              var n = this,
                r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                i = void 0;
              r && (this._serialId += 1, i = this._serialId, t.i = i), uu("↑ %O sent", Ga(t));
              var o = void 0;
              if ("proto2base64" === this._protocalFormat ? o = t.toBase64() : t.toBuffer ? o = t.toBuffer() : t.toArrayBuffer && (o = t.toArrayBuffer()), !o) throw new TypeError(t + " is not a GenericCommand");
              return e.prototype.send.call(this, o), r ? new Pn(function(e, r) {
                n._commands[i] = {
                  resolve: e,
                  reject: r
                }, setTimeout(function() {
                  n._commands[i] && (uu("✗ %O timeout", Ga(t)), r(new Error("Command Timeout.")), delete n._commands[i])
                }, 2e4)
              }) : Pn.resolve()
            }, t.prototype.handleMessage = function(e) {
              var t = void 0;
              try {
                t = bo.decode(e), uu("↓ %O received", Ga(t))
              } catch (t) {
                console.warn("Decode message failed", e)
              }
              this.emit("allmessage", t);
              var n = t.i;
              n ? this._commands[n] ? (t.cmd === wo.error ? this._commands[n].reject(au(t.errorMessage)) : this._commands[n].resolve(t), delete this._commands[n]) : console.warn("Unexpected command received with serialId [" + n + "],\n         which have timed out or never been requested.") : t.cmd === wo.error ? this.emit("error", au(t.errorMessage)) : this.emit("message", t)
            }, t.prototype.ping = function() {
              return this.send(new bo({
                cmd: wo.echo
              })).catch(function(e) {
                return uu("ping failed:", e)
              })
            }, t
          }(eu),
          fu = function(e, t) {
            e && e.forEach(function(e) {
              try {
                e(t)
              } catch (t) {
                throw e._pluginName && (t.message += "[" + e._pluginName + "]"), t
              }
            })
          },
          lu = function(e, t) {
            return Ha(e).reduce(function(e, n) {
              return e.then(function(e) {
                return !1 !== e && n.apply(void 0, xo(t))
              }).catch(function(e) {
                throw n._pluginName && (e.message += "[" + n._pluginName + "]"), e
              })
            }, Pn.resolve(!0))
          },
          hu = os("LC:Realtime"),
          du = new qa("push-router"),
          pu = function(e) {
            function t(n) {
              Br(this, t), hu("initializing Realtime");
              var r = Qr(this, e.call(this));
              if ("string" != typeof n.appId) throw new TypeError("appId [" + n.appId + "] is not a string");
              return r._options = $o({
                appId: void 0,
                region: "cn",
                pushOfflineMessages: !1,
                noBinary: Qa,
                ssl: !0,
                server: $.env.SERVER
              }, n), r._cache = new qa("endpoints"), za(r).clients = new Jo, r._plugins = [].concat(xo(Ha(t.__preRegisteredPlugins)), xo(Ha(n.plugins))).reduce(function(e, t) {
                for (var n in t)({}).hasOwnProperty.call(t, n) && "name" !== n && (t.name && Ha(t[n]).forEach(function(e) {
                  e._pluginName = t.name
                }), e[n] = Ha(e[n]).concat(t[n]));
                return e
              }, {}), fu(r._plugins.onRealtimeCreate, r), r
            }
            return ii(t, e), t.prototype._open = function() {
              var e = this;
              if (this._openPromise) return this._openPromise;
              var t = "protobuf2";
              this._options.noBinary && (t = "proto2base64");
              var n = 3;
              this._options.pushOfflineMessages && (n = 1);
              var r = {
                format: t,
                version: n
              };
              return this._openPromise = new Pn(function(t, n) {
                hu("No connection established, create a new one.");
                var i = new cu(function() {
                  return e._getEndpoints(e._options)
                }, r);
                i.on("open", function() {
                  return t(i)
                }), i.on("error", n), i.on("message", e._dispatchCommand.bind(e)), ["disconnect", "reconnect", "retry", "schedule", "offline", "online"].forEach(function(t) {
                  return i.on(t, function() {
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    hu(t + " event emitted. %O", r), e.emit.apply(e, [t].concat(r)), "reconnect" !== t && za(e).clients.forEach(function(e) {
                      e.emit.apply(e, [t].concat(r))
                    })
                  })
                }), i.handleClose = function(e) {
                  [su.APP_NOT_AVAILABLE, su.INVALID_LOGIN, su.INVALID_ORIGIN].some(function(t) {
                    return t === e.code
                  }) ? this.throw(au(e)) : this.disconnect()
                }, za(e).connection = i
              }), this._openPromise
            }, t.prototype._getEndpoints = function(e) {
              var t = this;
              return Pn.resolve(this._cache.get("endpoints") || this.constructor._fetchEndpointsInfo(e).then(Ya(function(e) {
                return t._cache.set("endpoints", e, 1e3 * e.ttl)
              }))).then(function(e) {
                return hu("endpoint info: %O", e), [e.server, e.secondary]
              })
            }, t._fetchPushRouter = function(e) {
              var t = e.appId,
                n = e.region;
              switch (hu("fetch router"), n) {
                case "cn":
                  var r = du.get(t);
                  return r ? Pn.resolve(r) : Ms.get("https://app-router.leancloud.cn/1/route", {
                    params: {
                      appId: t
                    },
                    timeout: 2e4
                  }).then(function(e) {
                    return e.data
                  }).then(Ya(hu)).then(function(e) {
                    var n = e.push_router_server;
                    if (!n) throw new Error("push router not exists");
                    var r = e.ttl;
                    return "number" != typeof r && (r = 3600), du.set(t, n, 1e3 * r), n
                  }).catch(function() {
                    return "router-g0-push.leancloud.cn"
                  });
                case "us":
                  return Pn.resolve("router-a0-push.leancloud.cn");
                default:
                  throw new Error("Region [" + n + "] is not supported.")
              }
            }, t._fetchEndpointsInfo = function(e) {
              var t = e.appId,
                n = e.region,
                r = e.ssl,
                i = e.server;
              return hu("fetch endpoint info"), this._fetchPushRouter({
                appId: t,
                region: n
              }).then(Ya(hu)).then(function(e) {
                return Ms.get("https://" + e + "/v1/route", {
                  params: {
                    appId: t,
                    secure: r,
                    features: Qa ? "wechat" : void 0,
                    server: i,
                    _t: Date.now()
                  },
                  timeout: 2e4
                }).then(function(e) {
                  return e.data
                }).then(Ya(hu))
              })
            }, t.prototype._close = function() {
              this._openPromise && this._openPromise.then(function(e) {
                return e.close()
              }), delete this._openPromise
            }, t.prototype.retry = function() {
              var e = za(this).connection;
              if (!e) throw new Error("no connection established");
              if (e.cannot("retry")) throw new Error("retrying not allowed when not disconnected. the connection is now " + e.current);
              return e.retry()
            }, t.prototype.pause = function() {
              var e = za(this).connection;
              e && e.can("pause") && e.pause()
            }, t.prototype.resume = function() {
              var e = za(this).connection;
              e && e.can("resume") && e.resume()
            }, t.prototype._register = function(e) {
              za(this).clients.add(e)
            }, t.prototype._deregister = function(e) {
              za(this).clients.delete(e), 0 === za(this).clients.size && this._close()
            }, t.prototype._dispatchCommand = function(e) {
              return lu(this._plugins.beforeCommandDispatch, [e, this]).then(function(t) {
                return !!t && hu("[WARN] Unexpected message received: %O", Ga(e))
              })
            }, t
          }(Oo);
        t.Protocals = To, t.Promise = Pn, t.EventEmitter = Oo, t.Realtime = pu, t.ErrorCode = su, Object.defineProperty(t, "__esModule", {
          value: !0
        })
      })
    }).call(t, n(7))
  }, function(e, t, n) {
    ! function(t) {
      var n = {},
        r = {};
      n.length = 0, n.getItem = function(e) {
        return r[e] || null
      }, n.setItem = function(e, t) {
        void 0 === t ? n.removeItem(e) : (r.hasOwnProperty(e) || n.length++, r[e] = "" + t)
      }, n.removeItem = function(e) {
        r.hasOwnProperty(e) && (delete r[e], n.length--)
      }, n.key = function(e) {
        return Object.keys(r)[e] || null
      }, n.clear = function() {
        r = {}, n.length = 0
      }, e.exports = n
    }()
  }, function(e, t, n) {
    ! function() {
      var t = n(57),
        r = n(20).utf8,
        i = n(63),
        o = n(20).bin,
        s = function(e, n) {
          e.constructor == String ? e = n && "binary" === n.encoding ? o.stringToBytes(e) : r.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
          for (var a = t.bytesToWords(e), u = 8 * e.length, c = 1732584193, f = -271733879, l = -1732584194, h = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
          a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u;
          for (var p = s._ff, y = s._gg, v = s._hh, g = s._ii, d = 0; d < a.length; d += 16) {
            var m = c,
              _ = f,
              b = l,
              w = h;
            c = p(c, f, l, h, a[d + 0], 7, -680876936), h = p(h, c, f, l, a[d + 1], 12, -389564586), l = p(l, h, c, f, a[d + 2], 17, 606105819), f = p(f, l, h, c, a[d + 3], 22, -1044525330), c = p(c, f, l, h, a[d + 4], 7, -176418897), h = p(h, c, f, l, a[d + 5], 12, 1200080426), l = p(l, h, c, f, a[d + 6], 17, -1473231341), f = p(f, l, h, c, a[d + 7], 22, -45705983), c = p(c, f, l, h, a[d + 8], 7, 1770035416), h = p(h, c, f, l, a[d + 9], 12, -1958414417), l = p(l, h, c, f, a[d + 10], 17, -42063), f = p(f, l, h, c, a[d + 11], 22, -1990404162), c = p(c, f, l, h, a[d + 12], 7, 1804603682), h = p(h, c, f, l, a[d + 13], 12, -40341101), l = p(l, h, c, f, a[d + 14], 17, -1502002290), f = p(f, l, h, c, a[d + 15], 22, 1236535329), c = y(c, f, l, h, a[d + 1], 5, -165796510), h = y(h, c, f, l, a[d + 6], 9, -1069501632), l = y(l, h, c, f, a[d + 11], 14, 643717713), f = y(f, l, h, c, a[d + 0], 20, -373897302), c = y(c, f, l, h, a[d + 5], 5, -701558691), h = y(h, c, f, l, a[d + 10], 9, 38016083), l = y(l, h, c, f, a[d + 15], 14, -660478335), f = y(f, l, h, c, a[d + 4], 20, -405537848), c = y(c, f, l, h, a[d + 9], 5, 568446438), h = y(h, c, f, l, a[d + 14], 9, -1019803690), l = y(l, h, c, f, a[d + 3], 14, -187363961), f = y(f, l, h, c, a[d + 8], 20, 1163531501), c = y(c, f, l, h, a[d + 13], 5, -1444681467), h = y(h, c, f, l, a[d + 2], 9, -51403784), l = y(l, h, c, f, a[d + 7], 14, 1735328473), f = y(f, l, h, c, a[d + 12], 20, -1926607734), c = v(c, f, l, h, a[d + 5], 4, -378558), h = v(h, c, f, l, a[d + 8], 11, -2022574463), l = v(l, h, c, f, a[d + 11], 16, 1839030562), f = v(f, l, h, c, a[d + 14], 23, -35309556), c = v(c, f, l, h, a[d + 1], 4, -1530992060), h = v(h, c, f, l, a[d + 4], 11, 1272893353), l = v(l, h, c, f, a[d + 7], 16, -155497632), f = v(f, l, h, c, a[d + 10], 23, -1094730640), c = v(c, f, l, h, a[d + 13], 4, 681279174), h = v(h, c, f, l, a[d + 0], 11, -358537222), l = v(l, h, c, f, a[d + 3], 16, -722521979), f = v(f, l, h, c, a[d + 6], 23, 76029189), c = v(c, f, l, h, a[d + 9], 4, -640364487), h = v(h, c, f, l, a[d + 12], 11, -421815835), l = v(l, h, c, f, a[d + 15], 16, 530742520), f = v(f, l, h, c, a[d + 2], 23, -995338651), c = g(c, f, l, h, a[d + 0], 6, -198630844), h = g(h, c, f, l, a[d + 7], 10, 1126891415), l = g(l, h, c, f, a[d + 14], 15, -1416354905), f = g(f, l, h, c, a[d + 5], 21, -57434055), c = g(c, f, l, h, a[d + 12], 6, 1700485571), h = g(h, c, f, l, a[d + 3], 10, -1894986606), l = g(l, h, c, f, a[d + 10], 15, -1051523), f = g(f, l, h, c, a[d + 1], 21, -2054922799), c = g(c, f, l, h, a[d + 8], 6, 1873313359), h = g(h, c, f, l, a[d + 15], 10, -30611744), l = g(l, h, c, f, a[d + 6], 15, -1560198380), f = g(f, l, h, c, a[d + 13], 21, 1309151649), c = g(c, f, l, h, a[d + 4], 6, -145523070), h = g(h, c, f, l, a[d + 11], 10, -1120210379), l = g(l, h, c, f, a[d + 2], 15, 718787259), f = g(f, l, h, c, a[d + 9], 21, -343485551), c = c + m >>> 0, f = f + _ >>> 0, l = l + b >>> 0, h = h + w >>> 0
          }
          return t.endian([c, f, l, h])
        };
      s._ff = function(e, t, n, r, i, o, s) {
        var a = e + (t & n | ~t & r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._gg = function(e, t, n, r, i, o, s) {
        var a = e + (t & r | n & ~r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._hh = function(e, t, n, r, i, o, s) {
        var a = e + (t ^ n ^ r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._ii = function(e, t, n, r, i, o, s) {
        var a = e + (n ^ (t | ~r)) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._blocksize = 16, s._digestsize = 16, e.exports = function(e, n) {
        if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
        var r = t.wordsToBytes(s(e, n));
        return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r)
      }
    }()
  }, function(e, t) {
    function n(e) {
      if (e = String(e), !(e.length > 100)) {
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (t) {
          var n = parseFloat(t[1]);
          switch ((t[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return n * f;
            case "days":
            case "day":
            case "d":
              return n * c;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return n * u;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return n * a;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return n * s;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return n;
            default:
              return
          }
        }
      }
    }

    function r(e) {
      return e >= c ? Math.round(e / c) + "d" : e >= u ? Math.round(e / u) + "h" : e >= a ? Math.round(e / a) + "m" : e >= s ? Math.round(e / s) + "s" : e + "ms"
    }

    function i(e) {
      return o(e, c, "day") || o(e, u, "hour") || o(e, a, "minute") || o(e, s, "second") || e + " ms"
    }

    function o(e, t, n) {
      if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    var s = 1e3,
      a = 60 * s,
      u = 60 * a,
      c = 24 * u,
      f = 365.25 * c;
    e.exports = function(e, t) {
      t = t || {};
      var o = typeof e;
      if ("string" === o && e.length > 0) return n(e);
      if ("number" === o && !1 === isNaN(e)) return t.long ? i(e) : r(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
  }, function(e, t, n) {
    function r(e) {
      return "[object Function]" === (i(e) ? Object.prototype.toString.call(e) : "")
    }
    var i = n(11);
    e.exports = r
  }, function(e, t, n) {
    function r(e) {
      if (e) return i(e)
    }

    function i(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e
    }
    var o = n(11);
    e.exports = r, r.prototype.clearTimeout = function() {
      return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this
    }, r.prototype.parse = function(e) {
      return this._parser = e, this
    }, r.prototype.responseType = function(e) {
      return this._responseType = e, this
    }, r.prototype.serialize = function(e) {
      return this._serializer = e, this
    }, r.prototype.timeout = function(e) {
      if (!e || "object" != typeof e) return this._timeout = e, this._responseTimeout = 0, this;
      for (var t in e) switch (t) {
        case "deadline":
          this._timeout = e.deadline;
          break;
        case "response":
          this._responseTimeout = e.response;
          break;
        default:
          console.warn("Unknown timeout option", t)
      }
      return this
    }, r.prototype.retry = function(e) {
      return 0 !== arguments.length && !0 !== e || (e = 1), e <= 0 && (e = 0), this._maxRetries = e, this._retries = 0, this
    }, r.prototype._retry = function() {
      return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end()
    }, r.prototype.then = function(e, t) {
      if (!this._fullfilledPromise) {
        var n = this;
        this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(e, t) {
          n.end(function(n, r) {
            n ? t(n) : e(r)
          })
        })
      }
      return this._fullfilledPromise.then(e, t)
    }, r.prototype.catch = function(e) {
      return this.then(void 0, e)
    }, r.prototype.use = function(e) {
      return e(this), this
    }, r.prototype.ok = function(e) {
      if ("function" != typeof e) throw Error("Callback required");
      return this._okCallback = e, this
    }, r.prototype._isResponseOK = function(e) {
      return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300)
    }, r.prototype.get = function(e) {
      return this._header[e.toLowerCase()]
    }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function(e, t) {
      if (o(e)) {
        for (var n in e) this.set(n, e[n]);
        return this
      }
      return this._header[e.toLowerCase()] = t, this.header[e] = t, this
    }, r.prototype.unset = function(e) {
      return delete this._header[e.toLowerCase()], delete this.header[e], this
    }, r.prototype.field = function(e, t) {
      if (null === e || void 0 === e) throw new Error(".field(name, val) name can not be empty");
      if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), o(e)) {
        for (var n in e) this.field(n, e[n]);
        return this
      }
      if (Array.isArray(t)) {
        for (var r in t) this.field(e, t[r]);
        return this
      }
      if (null === t || void 0 === t) throw new Error(".field(name, val) val can not be empty");
      return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), this
    }, r.prototype.abort = function() {
      return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
    }, r.prototype.withCredentials = function(e) {
      return void 0 == e && (e = !0), this._withCredentials = e, this
    }, r.prototype.redirects = function(e) {
      return this._maxRedirects = e, this
    }, r.prototype.toJSON = function() {
      return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header
      }
    }, r.prototype.send = function(e) {
      var t = o(e),
        n = this._header["content-type"];
      if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});
      else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
      if (t && o(this._data))
        for (var r in e) this._data[r] = e[r];
      else "string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + e : e : (this._data || "") + e) : this._data = e;
      return !t || this._isHost(e) ? this : (n || this.type("json"), this)
    }, r.prototype.sortQuery = function(e) {
      return this._sort = void 0 === e || e, this
    }, r.prototype._timeoutError = function(e, t, n) {
      if (!this._aborted) {
        var r = new Error(e + t + "ms exceeded");
        r.timeout = t, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r)
      }
    }, r.prototype._setTimeouts = function() {
      var e = this;
      this._timeout && !this._timer && (this._timer = setTimeout(function() {
        e._timeoutError("Timeout of ", e._timeout, "ETIME")
      }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
        e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT")
      }, this._responseTimeout))
    }
  }, function(e, t, n) {
    function r(e) {
      if (e) return i(e)
    }

    function i(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e
    }
    var o = n(72);
    e.exports = r, r.prototype.get = function(e) {
      return this.header[e.toLowerCase()]
    }, r.prototype._setHeaderProperties = function(e) {
      var t = e["content-type"] || "";
      this.type = o.type(t);
      var n = o.params(t);
      for (var r in n) this[r] = n[r];
      this.links = {};
      try {
        e.link && (this.links = o.parseLinks(e.link))
      } catch (e) {}
    }, r.prototype._setStatusProperties = function(e) {
      var t = e / 100 | 0;
      this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.redirect = 3 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 == e, this.notFound = 404 == e
    }
  }, function(e, t) {
    var n = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    e.exports = function(e, t) {
      return !!(e && e.code && ~n.indexOf(e.code)) || (!!(t && t.status && t.status >= 500) || (!!(e && "timeout" in e && "ECONNABORTED" == e.code) || !!(e && "crossDomain" in e)))
    }
  }, function(e, t) {
    t.type = function(e) {
      return e.split(/ *; */).shift()
    }, t.params = function(e) {
      return e.split(/ *; */).reduce(function(e, t) {
        var n = t.split(/ *= */),
          r = n.shift(),
          i = n.shift();
        return r && i && (e[r] = i), e
      }, {})
    }, t.parseLinks = function(e) {
      return e.split(/ *, */).reduce(function(e, t) {
        var n = t.split(/ *; */),
          r = n[0].slice(1, -1);
        return e[n[1].split(/ *= */)[1].slice(1, -1)] = r, e
      }, {})
    }, t.cleanHeader = function(e, t) {
      return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && delete e.cookie, e
    }
  }, function(e, t) {}])
});
//# sourceMappingURL=av-live-query-weapp-min.js.map
