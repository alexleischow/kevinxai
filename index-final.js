(function () {
  "use strict";
  var j =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function xe(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function Se() {
    (this.__data__ = []), (this.size = 0);
  }
  var Ie = Se;
  function Pe(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var C = Pe,
    Ee = C;
  function Me(e, t) {
    for (var r = e.length; r--; ) if (Ee(e[r][0], t)) return r;
    return -1;
  }
  var A = Me,
    De = A,
    Fe = Array.prototype,
    Ue = Fe.splice;
  function Le(e) {
    var t = this.__data__,
      r = De(t, e);
    if (r < 0) return !1;
    var a = t.length - 1;
    return r == a ? t.pop() : Ue.call(t, r, 1), --this.size, !0;
  }
  var Ge = Le,
    Be = A;
  function ze(e) {
    var t = this.__data__,
      r = Be(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var He = ze,
    Re = A;
  function Ne(e) {
    return Re(this.__data__, e) > -1;
  }
  var Ve = Ne,
    Ke = A;
  function qe(e, t) {
    var r = this.__data__,
      a = Ke(r, e);
    return a < 0 ? (++this.size, r.push([e, t])) : (r[a][1] = t), this;
  }
  var We = qe,
    Je = Ie,
    Ye = Ge,
    Ze = He,
    ke = Ve,
    Qe = We;
  function b(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (b.prototype.clear = Je),
    (b.prototype.delete = Ye),
    (b.prototype.get = Ze),
    (b.prototype.has = ke),
    (b.prototype.set = Qe);
  var x = b,
    Xe = x;
  function et() {
    (this.__data__ = new Xe()), (this.size = 0);
  }
  var tt = et;
  function rt(e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  }
  var at = rt;
  function nt(e) {
    return this.__data__.get(e);
  }
  var it = nt;
  function ot(e) {
    return this.__data__.has(e);
  }
  var st = ot,
    ct = typeof j == "object" && j && j.Object === Object && j,
    H = ct,
    ut = H,
    lt = typeof self == "object" && self && self.Object === Object && self,
    ft = ut || lt || Function("return this")(),
    g = ft,
    pt = g,
    vt = pt.Symbol,
    R = vt,
    N = R,
    V = Object.prototype,
    dt = V.hasOwnProperty,
    ht = V.toString,
    m = N ? N.toStringTag : void 0;
  function bt(e) {
    var t = dt.call(e, m),
      r = e[m];
    try {
      e[m] = void 0;
      var a = !0;
    } catch {}
    var n = ht.call(e);
    return a && (t ? (e[m] = r) : delete e[m]), n;
  }
  var gt = bt,
    _t = Object.prototype,
    yt = _t.toString;
  function $t(e) {
    return yt.call(e);
  }
  var mt = $t,
    K = R,
    wt = gt,
    Ot = mt,
    Tt = "[object Null]",
    jt = "[object Undefined]",
    q = K ? K.toStringTag : void 0;
  function Ct(e) {
    return e == null
      ? e === void 0
        ? jt
        : Tt
      : q && q in Object(e)
      ? wt(e)
      : Ot(e);
  }
  var S = Ct;
  function At(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var h = At,
    xt = S,
    St = h,
    It = "[object AsyncFunction]",
    Pt = "[object Function]",
    Et = "[object GeneratorFunction]",
    Mt = "[object Proxy]";
  function Dt(e) {
    if (!St(e)) return !1;
    var t = xt(e);
    return t == Pt || t == Et || t == It || t == Mt;
  }
  var F = Dt,
    Ft = g,
    Ut = Ft["__core-js_shared__"],
    Lt = Ut,
    U = Lt,
    W = (function () {
      var e = /[^.]+$/.exec((U && U.keys && U.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  function Gt(e) {
    return !!W && W in e;
  }
  var Bt = Gt,
    zt = Function.prototype,
    Ht = zt.toString;
  function Rt(e) {
    if (e != null) {
      try {
        return Ht.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var Nt = Rt,
    Vt = F,
    Kt = Bt,
    qt = h,
    Wt = Nt,
    Jt = /[\\^$.*+?()[\]{}|]/g,
    Yt = /^\[object .+?Constructor\]$/,
    Zt = Function.prototype,
    kt = Object.prototype,
    Qt = Zt.toString,
    Xt = kt.hasOwnProperty,
    er = RegExp(
      "^" +
        Qt.call(Xt)
          .replace(Jt, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function tr(e) {
    if (!qt(e) || Kt(e)) return !1;
    var t = Vt(e) ? er : Yt;
    return t.test(Wt(e));
  }
  var rr = tr;
  function ar(e, t) {
    return e?.[t];
  }
  var nr = ar,
    ir = rr,
    or = nr;
  function sr(e, t) {
    var r = or(e, t);
    return ir(r) ? r : void 0;
  }
  var L = sr,
    cr = L,
    ur = g,
    lr = cr(ur, "Map"),
    J = lr,
    fr = L,
    pr = fr(Object, "create"),
    I = pr,
    Y = I;
  function vr() {
    (this.__data__ = Y ? Y(null) : {}), (this.size = 0);
  }
  var dr = vr;
  function hr(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var br = hr,
    gr = I,
    _r = "__lodash_hash_undefined__",
    yr = Object.prototype,
    $r = yr.hasOwnProperty;
  function mr(e) {
    var t = this.__data__;
    if (gr) {
      var r = t[e];
      return r === _r ? void 0 : r;
    }
    return $r.call(t, e) ? t[e] : void 0;
  }
  var wr = mr,
    Or = I,
    Tr = Object.prototype,
    jr = Tr.hasOwnProperty;
  function Cr(e) {
    var t = this.__data__;
    return Or ? t[e] !== void 0 : jr.call(t, e);
  }
  var Ar = Cr,
    xr = I,
    Sr = "__lodash_hash_undefined__";
  function Ir(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = xr && t === void 0 ? Sr : t),
      this
    );
  }
  var Pr = Ir,
    Er = dr,
    Mr = br,
    Dr = wr,
    Fr = Ar,
    Ur = Pr;
  function _(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (_.prototype.clear = Er),
    (_.prototype.delete = Mr),
    (_.prototype.get = Dr),
    (_.prototype.has = Fr),
    (_.prototype.set = Ur);
  var Lr = _,
    Z = Lr,
    Gr = x,
    Br = J;
  function zr() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Z(),
        map: new (Br || Gr)(),
        string: new Z(),
      });
  }
  var Hr = zr;
  function Rr(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  var Nr = Rr,
    Vr = Nr;
  function Kr(e, t) {
    var r = e.__data__;
    return Vr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  var P = Kr,
    qr = P;
  function Wr(e) {
    var t = qr(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var Jr = Wr,
    Yr = P;
  function Zr(e) {
    return Yr(this, e).get(e);
  }
  var kr = Zr,
    Qr = P;
  function Xr(e) {
    return Qr(this, e).has(e);
  }
  var ea = Xr,
    ta = P;
  function ra(e, t) {
    var r = ta(this, e),
      a = r.size;
    return r.set(e, t), (this.size += r.size == a ? 0 : 1), this;
  }
  var aa = ra,
    na = Hr,
    ia = Jr,
    oa = kr,
    sa = ea,
    ca = aa;
  function y(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (y.prototype.clear = na),
    (y.prototype.delete = ia),
    (y.prototype.get = oa),
    (y.prototype.has = sa),
    (y.prototype.set = ca);
  var ua = y,
    la = x,
    fa = J,
    pa = ua,
    va = 200;
  function da(e, t) {
    var r = this.__data__;
    if (r instanceof la) {
      var a = r.__data__;
      if (!fa || a.length < va - 1)
        return a.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new pa(a);
    }
    return r.set(e, t), (this.size = r.size), this;
  }
  var ha = da,
    ba = x,
    ga = tt,
    _a = at,
    ya = it,
    $a = st,
    ma = ha;
  function $(e) {
    var t = (this.__data__ = new ba(e));
    this.size = t.size;
  }
  ($.prototype.clear = ga),
    ($.prototype.delete = _a),
    ($.prototype.get = ya),
    ($.prototype.has = $a),
    ($.prototype.set = ma);
  var wa = $,
    Oa = L,
    Ta = (function () {
      try {
        var e = Oa(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch {}
    })(),
    k = Ta,
    Q = k;
  function ja(e, t, r) {
    t == "__proto__" && Q
      ? Q(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  var G = ja,
    Ca = G,
    Aa = C;
  function xa(e, t, r) {
    ((r !== void 0 && !Aa(e[t], r)) || (r === void 0 && !(t in e))) &&
      Ca(e, t, r);
  }
  var X = xa;
  function Sa(e) {
    return function (t, r, a) {
      for (var n = -1, i = Object(t), c = a(t), o = c.length; o--; ) {
        var u = c[e ? o : ++n];
        if (r(i[u], u, i) === !1) break;
      }
      return t;
    };
  }
  var Ia = Sa,
    Pa = Ia,
    Ea = Pa(),
    Ma = Ea,
    E = { exports: {} };
  E.exports,
    (function (e, t) {
      var r = g,
        a = t && !t.nodeType && t,
        n = a && !0 && e && !e.nodeType && e,
        i = n && n.exports === a,
        c = i ? r.Buffer : void 0,
        o = c ? c.allocUnsafe : void 0;
      function u(f, p) {
        if (p) return f.slice();
        var v = f.length,
          d = o ? o(v) : new f.constructor(v);
        return f.copy(d), d;
      }
      e.exports = u;
    })(E, E.exports);
  var Da = E.exports,
    Fa = g,
    Ua = Fa.Uint8Array,
    La = Ua,
    ee = La;
  function Ga(e) {
    var t = new e.constructor(e.byteLength);
    return new ee(t).set(new ee(e)), t;
  }
  var Ba = Ga,
    za = Ba;
  function Ha(e, t) {
    var r = t ? za(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  }
  var Ra = Ha;
  function Na(e, t) {
    var r = -1,
      a = e.length;
    for (t || (t = Array(a)); ++r < a; ) t[r] = e[r];
    return t;
  }
  var Va = Na,
    Ka = h,
    te = Object.create,
    qa = (function () {
      function e() {}
      return function (t) {
        if (!Ka(t)) return {};
        if (te) return te(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })(),
    Wa = qa;
  function Ja(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  var Ya = Ja,
    Za = Ya,
    ka = Za(Object.getPrototypeOf, Object),
    re = ka,
    Qa = Object.prototype;
  function Xa(e) {
    var t = e && e.constructor,
      r = (typeof t == "function" && t.prototype) || Qa;
    return e === r;
  }
  var ae = Xa,
    en = Wa,
    tn = re,
    rn = ae;
  function an(e) {
    return typeof e.constructor == "function" && !rn(e) ? en(tn(e)) : {};
  }
  var nn = an;
  function on(e) {
    return e != null && typeof e == "object";
  }
  var w = on,
    sn = S,
    cn = w,
    un = "[object Arguments]";
  function ln(e) {
    return cn(e) && sn(e) == un;
  }
  var fn = ln,
    ne = fn,
    pn = w,
    ie = Object.prototype,
    vn = ie.hasOwnProperty,
    dn = ie.propertyIsEnumerable,
    hn = ne(
      (function () {
        return arguments;
      })()
    )
      ? ne
      : function (e) {
          return pn(e) && vn.call(e, "callee") && !dn.call(e, "callee");
        },
    oe = hn,
    bn = Array.isArray,
    se = bn,
    gn = 9007199254740991;
  function _n(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gn;
  }
  var ce = _n,
    yn = F,
    $n = ce;
  function mn(e) {
    return e != null && $n(e.length) && !yn(e);
  }
  var B = mn,
    wn = B,
    On = w;
  function Tn(e) {
    return On(e) && wn(e);
  }
  var jn = Tn,
    M = { exports: {} };
  function Cn() {
    return !1;
  }
  var An = Cn;
  M.exports,
    (function (e, t) {
      var r = g,
        a = An,
        n = t && !t.nodeType && t,
        i = n && !0 && e && !e.nodeType && e,
        c = i && i.exports === n,
        o = c ? r.Buffer : void 0,
        u = o ? o.isBuffer : void 0,
        f = u || a;
      e.exports = f;
    })(M, M.exports);
  var ue = M.exports,
    xn = S,
    Sn = re,
    In = w,
    Pn = "[object Object]",
    En = Function.prototype,
    Mn = Object.prototype,
    le = En.toString,
    Dn = Mn.hasOwnProperty,
    Fn = le.call(Object);
  function Un(e) {
    if (!In(e) || xn(e) != Pn) return !1;
    var t = Sn(e);
    if (t === null) return !0;
    var r = Dn.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && le.call(r) == Fn;
  }
  var Ln = Un,
    Gn = S,
    Bn = ce,
    zn = w,
    Hn = "[object Arguments]",
    Rn = "[object Array]",
    Nn = "[object Boolean]",
    Vn = "[object Date]",
    Kn = "[object Error]",
    qn = "[object Function]",
    Wn = "[object Map]",
    Jn = "[object Number]",
    Yn = "[object Object]",
    Zn = "[object RegExp]",
    kn = "[object Set]",
    Qn = "[object String]",
    Xn = "[object WeakMap]",
    ei = "[object ArrayBuffer]",
    ti = "[object DataView]",
    ri = "[object Float32Array]",
    ai = "[object Float64Array]",
    ni = "[object Int8Array]",
    ii = "[object Int16Array]",
    oi = "[object Int32Array]",
    si = "[object Uint8Array]",
    ci = "[object Uint8ClampedArray]",
    ui = "[object Uint16Array]",
    li = "[object Uint32Array]",
    l = {};
  (l[ri] = l[ai] = l[ni] = l[ii] = l[oi] = l[si] = l[ci] = l[ui] = l[li] = !0),
    (l[Hn] =
      l[Rn] =
      l[ei] =
      l[Nn] =
      l[ti] =
      l[Vn] =
      l[Kn] =
      l[qn] =
      l[Wn] =
      l[Jn] =
      l[Yn] =
      l[Zn] =
      l[kn] =
      l[Qn] =
      l[Xn] =
        !1);
  function fi(e) {
    return zn(e) && Bn(e.length) && !!l[Gn(e)];
  }
  var pi = fi;
  function vi(e) {
    return function (t) {
      return e(t);
    };
  }
  var di = vi,
    D = { exports: {} };
  D.exports,
    (function (e, t) {
      var r = H,
        a = t && !t.nodeType && t,
        n = a && !0 && e && !e.nodeType && e,
        i = n && n.exports === a,
        c = i && r.process,
        o = (function () {
          try {
            var u = n && n.require && n.require("util").types;
            return u || (c && c.binding && c.binding("util"));
          } catch {}
        })();
      e.exports = o;
    })(D, D.exports);
  var hi = D.exports,
    bi = pi,
    gi = di,
    fe = hi,
    pe = fe && fe.isTypedArray,
    _i = pe ? gi(pe) : bi,
    ve = _i;
  function yi(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
      return e[t];
  }
  var de = yi,
    $i = G,
    mi = C,
    wi = Object.prototype,
    Oi = wi.hasOwnProperty;
  function Ti(e, t, r) {
    var a = e[t];
    (!(Oi.call(e, t) && mi(a, r)) || (r === void 0 && !(t in e))) &&
      $i(e, t, r);
  }
  var ji = Ti,
    Ci = ji,
    Ai = G;
  function xi(e, t, r, a) {
    var n = !r;
    r || (r = {});
    for (var i = -1, c = t.length; ++i < c; ) {
      var o = t[i],
        u = a ? a(r[o], e[o], o, r, e) : void 0;
      u === void 0 && (u = e[o]), n ? Ai(r, o, u) : Ci(r, o, u);
    }
    return r;
  }
  var Si = xi;
  function Ii(e, t) {
    for (var r = -1, a = Array(e); ++r < e; ) a[r] = t(r);
    return a;
  }
  var Pi = Ii,
    Ei = 9007199254740991,
    Mi = /^(?:0|[1-9]\d*)$/;
  function Di(e, t) {
    var r = typeof e;
    return (
      (t = t ?? Ei),
      !!t &&
        (r == "number" || (r != "symbol" && Mi.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var he = Di,
    Fi = Pi,
    Ui = oe,
    Li = se,
    Gi = ue,
    Bi = he,
    zi = ve,
    Hi = Object.prototype,
    Ri = Hi.hasOwnProperty;
  function Ni(e, t) {
    var r = Li(e),
      a = !r && Ui(e),
      n = !r && !a && Gi(e),
      i = !r && !a && !n && zi(e),
      c = r || a || n || i,
      o = c ? Fi(e.length, String) : [],
      u = o.length;
    for (var f in e)
      (t || Ri.call(e, f)) &&
        !(
          c &&
          (f == "length" ||
            (n && (f == "offset" || f == "parent")) ||
            (i && (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
            Bi(f, u))
        ) &&
        o.push(f);
    return o;
  }
  var Vi = Ni;
  function Ki(e) {
    var t = [];
    if (e != null) for (var r in Object(e)) t.push(r);
    return t;
  }
  var qi = Ki,
    Wi = h,
    Ji = ae,
    Yi = qi,
    Zi = Object.prototype,
    ki = Zi.hasOwnProperty;
  function Qi(e) {
    if (!Wi(e)) return Yi(e);
    var t = Ji(e),
      r = [];
    for (var a in e) (a == "constructor" && (t || !ki.call(e, a))) || r.push(a);
    return r;
  }
  var Xi = Qi,
    eo = Vi,
    to = Xi,
    ro = B;
  function ao(e) {
    return ro(e) ? eo(e, !0) : to(e);
  }
  var be = ao,
    no = Si,
    io = be;
  function oo(e) {
    return no(e, io(e));
  }
  var so = oo,
    ge = X,
    co = Da,
    uo = Ra,
    lo = Va,
    fo = nn,
    _e = oe,
    ye = se,
    po = jn,
    vo = ue,
    ho = F,
    bo = h,
    go = Ln,
    _o = ve,
    $e = de,
    yo = so;
  function $o(e, t, r, a, n, i, c) {
    var o = $e(e, r),
      u = $e(t, r),
      f = c.get(u);
    if (f) {
      ge(e, r, f);
      return;
    }
    var p = i ? i(o, u, r + "", e, t, c) : void 0,
      v = p === void 0;
    if (v) {
      var d = ye(u),
        T = !d && vo(u),
        Ae = !d && !T && _o(u);
      (p = u),
        d || T || Ae
          ? ye(o)
            ? (p = o)
            : po(o)
            ? (p = lo(o))
            : T
            ? ((v = !1), (p = co(u, !0)))
            : Ae
            ? ((v = !1), (p = uo(u, !0)))
            : (p = [])
          : go(u) || _e(u)
          ? ((p = o), _e(o) ? (p = yo(o)) : (!bo(o) || ho(o)) && (p = fo(u)))
          : (v = !1);
    }
    v && (c.set(u, p), n(p, u, a, i, c), c.delete(u)), ge(e, r, p);
  }
  var mo = $o,
    wo = wa,
    Oo = X,
    To = Ma,
    jo = mo,
    Co = h,
    Ao = be,
    xo = de;
  function me(e, t, r, a, n) {
    e !== t &&
      To(
        t,
        function (i, c) {
          if ((n || (n = new wo()), Co(i))) jo(e, t, c, r, me, a, n);
          else {
            var o = a ? a(xo(e, c), i, c + "", e, t, n) : void 0;
            o === void 0 && (o = i), Oo(e, c, o);
          }
        },
        Ao
      );
  }
  var So = me;
  function Io(e) {
    return e;
  }
  var we = Io;
  function Po(e, t, r) {
    switch (r.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, r[0]);
      case 2:
        return e.call(t, r[0], r[1]);
      case 3:
        return e.call(t, r[0], r[1], r[2]);
    }
    return e.apply(t, r);
  }
  var Eo = Po,
    Mo = Eo,
    Oe = Math.max;
  function Do(e, t, r) {
    return (
      (t = Oe(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var a = arguments, n = -1, i = Oe(a.length - t, 0), c = Array(i);
          ++n < i;

        )
          c[n] = a[t + n];
        n = -1;
        for (var o = Array(t + 1); ++n < t; ) o[n] = a[n];
        return (o[t] = r(c)), Mo(e, this, o);
      }
    );
  }
  var Fo = Do;
  function Uo(e) {
    return function () {
      return e;
    };
  }
  var Lo = Uo,
    Go = Lo,
    Te = k,
    Bo = we,
    zo = Te
      ? function (e, t) {
          return Te(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Go(t),
            writable: !0,
          });
        }
      : Bo,
    Ho = zo,
    Ro = 800,
    No = 16,
    Vo = Date.now;
  function Ko(e) {
    var t = 0,
      r = 0;
    return function () {
      var a = Vo(),
        n = No - (a - r);
      if (((r = a), n > 0)) {
        if (++t >= Ro) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var qo = Ko,
    Wo = Ho,
    Jo = qo,
    Yo = Jo(Wo),
    Zo = Yo,
    ko = we,
    Qo = Fo,
    Xo = Zo;
  function es(e, t) {
    return Xo(Qo(e, t, ko), e + "");
  }
  var ts = es,
    rs = C,
    as = B,
    ns = he,
    is = h;
  function os(e, t, r) {
    if (!is(r)) return !1;
    var a = typeof t;
    return (a == "number" ? as(r) && ns(t, r.length) : a == "string" && t in r)
      ? rs(r[t], e)
      : !1;
  }
  var ss = os,
    cs = ts,
    us = ss;
  function ls(e) {
    return cs(function (t, r) {
      var a = -1,
        n = r.length,
        i = n > 1 ? r[n - 1] : void 0,
        c = n > 2 ? r[2] : void 0;
      for (
        i = e.length > 3 && typeof i == "function" ? (n--, i) : void 0,
          c && us(r[0], r[1], c) && ((i = n < 3 ? void 0 : i), (n = 1)),
          t = Object(t);
        ++a < n;

      ) {
        var o = r[a];
        o && e(t, o, a, i);
      }
      return t;
    });
  }
  var fs = ls,
    ps = So,
    vs = fs,
    ds = vs(function (e, t, r) {
      ps(e, t, r);
    }),
    hs = ds;
  const z = xe(hs),
    bs = "body",
    gs = "https://cdn.botpress.cloud/webchat/v2.5/webchat.js",
    _s = "https://cdn.botpress.cloud/webchat/v2.5/fab.js",
    ys = () => {
      (s.state = "opened"), O(), s._emit("webchat:opened", {});
    },
    $s = () => {
      (s.state = "closed"), O(), s._emit("webchat:closed", {});
    },
    ms = () => {
      (s.state = s.state === "opened" ? "closed" : "opened"),
        O(),
        s.state === "opened"
          ? s._emit("webchat:opened", {})
          : s.state === "closed" && s._emit("webchat:closed", {});
    },
    ws = (e) => {
      throw new Error(
        "Botpress webchat is not initialized. Please call botpress.init() before sending events."
      );
    },
    Os = (e) => {
      throw new Error(
        "Botpress webchat is not initialized. Please call botpress.init() before sending messages."
      );
    },
    Ts = () => {
      throw new Error(
        "Botpress webchat is not initialized. Please call botpress.init() before trying to restart the conversation."
      );
    },
    js = () => {
      throw new Error(
        "Botpress webchat is not initialized. Please call botpress.init() before getting the user information."
      );
    },
    Cs = async (e) => {
      s.user = z(s.user, e);
    },
    As = (e) => {
      const { configuration: t, user: r } = e;
      t && (s.configuration = z(s.configuration, t)),
        r && (s.user = z(s.user, r)),
        O();
    },
    xs = (e) => {
      if (s.initialized) return;
      if (!e.botId) {
        console.error("Botpress: botId is required");
        return;
      }
      if (!e.clientId) {
        console.error("Botpress: clientId is required");
        return;
      }
      const {
        botId: t,
        clientId: r,
        selector: a = bs,
        webchatScriptUrl: n = gs,
        fabScriptUrl: i = _s,
        pushpinUrl: c,
        defaultState: o,
        configuration: u,
        user: f,
      } = e;
      (s.botId = t),
        (s.clientId = r),
        (s.pushpinUrl = c ?? s.pushpinUrl),
        (s.state = o ?? s.state),
        (s.configuration = u ?? s.configuration),
        (s.user = f ?? s.user);
      const p = document.querySelector(a);
      if (!p) {
        console.error(
          `Botpress: could not find element to inject the webchat selector "${a}"`
        );
        return;
      }
      (s.webchatIframe = je(
        p,
        s.webchatId,
        n,
        "webchat",
        s.configuration?.additionalStylesheetUrl
      )),
        (s.fabIframe = je(
          p,
          s.fabId,
          i,
          "fab",
          s.configuration?.additionalStylesheetUrl
        ));
      const v = s.configuration?.radius ?? 1;
      O();
      const d = document.createElement("style"),
        T = `
    .bpFab {
      bottom: 1.5rem;
      height: 4rem;
      width: 4rem;
      border-radius: 9999px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
      position: absolute !important;
      right: 10px;
      z-index: 10000;
    }

    .bpFab:hover {
      transform: scale(1.1);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    }

    .bpFab:active {
      transform: scale(0.9);
    }

    .bpWebchat {
      width: 100%;
      bottom: 0;
      right: 0;
      z-index: 9999;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      height: 100% !important;
      border-radius: 8px !important;
    }
    @media (min-width: 768px) {
      .bpWebchat {
        bottom: 6rem;
        right: 1.5rem;
        height: min(700px, calc(100% - 120px));
        transform-origin: bottom right;
      }
    }

    @media (max-width: 700px) {
      :has(.bpOpen) {
        overflow: hidden;
      }
    }

    .bpOpen {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      transition:
        opacity 100ms ease-in-out,
        transform 100ms ease-in-out;
    }
    .bpClose {
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
      transform: translateY(80px);
      transition:
        visibility 0s 100ms,
        opacity 100ms ease-in-out,
        transform 100ms ease-in-out;
    }
  `;
      (d.textContent = T),
        p.appendChild(d),
        (s.initialized = !0),
        s._emit("webchat:initialized", {});
    },
    O = () => {
      const e = s.state === "opened" ? "bpOpen" : "bpClose";
      s.webchatIframe?.setAttribute("class", `${e} bpWebchat bpReset`),
        s.fabIframe?.setAttribute("class", "bpFab");
    },
    Ss = () => !!navigator.userAgent.match("Firefox"),
    Is = (e) => {
      const t = document.createElement("script");
      return (t.type = "text/javascript"), (t.src = e), (t.type = "module"), t;
    },
    je = (e, t, r, a, n) => {
      const i = document.createElement("iframe");
      if (
        (i.setAttribute("aria-hidden", "true"),
        i.setAttribute("tabIndex", "-1"),
        i.setAttribute("title", "Botpress"),
        i.setAttribute("frameborder", "0"),
        i.setAttribute("name", a),
        e.appendChild(i),
        Ss())
      ) {
        const o = i.contentDocument?.open();
        o?.write("<!DOCTYPE html>"), o?.close();
      }
      i.contentDocument &&
        ((i.contentDocument.documentElement.innerHTML = `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1 viewport-fit=cover, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></head><body class="bpHeightFull"><div class="bpHeightFull" id="${t}"></div></body></html>`),
        i.contentDocument.documentElement.setAttribute("lang", "en"),
        i.contentDocument.documentElement.setAttribute(
          "class",
          "bpHeightFull bpReset"
        ));
      const c = Is(r);
      return (
        i.contentDocument?.head.append(c),
        i.contentDocument?.head.append(`<link
    href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet" integrity="sha384-eC8TG0ancmMThWZbv0pJnpiRIQdPyitlJ8xAcaBVu31uCZ0QrkUAfu57jjgWZ4UL" />`),
        n &&
          i.contentDocument?.head.append(
            `<link rel="stylesheet" href="${n}" />`
          ),
        i
      );
    },
    Ce = (() => {
      const e = {};
      return {
        on: (a, n) => (
          e[a] || (e[a] = new Set()), e[a]?.add(n), () => e[a]?.delete(n)
        ),
        emit: (a, n) => {
          e[a]?.forEach((i) => i(n)),
            e["*"]?.forEach((i) => i({ type: a, payload: n }));
        },
      };
    })(),
    s = {
      initialized: !1,
      version: "4cf71128d093fed2329a074d5552f6f32e49de9d",
      pushpinUrl: "https://webchat.botpress.cloud",
      clientId: "",
      botId: "",
      fabIframe: void 0,
      fabId: "fab-root",
      state: "initial",
      webchatIframe: void 0,
      webchatId: "webchat-root",
      configuration: void 0,
      user: void 0,
      allowFileUpload: void 0,
      open: ys,
      close: $s,
      toggle: ms,
      init: xs,
      config: As,
      sendEvent: ws,
      sendMessage: Os,
      updateUser: Cs,
      getUser: js,
      restartConversation: Ts,
      on: Ce.on,
      _emit: Ce.emit,
    };
  window.botpress = s;

  const scriptTag = document.currentScript;
  const botId = scriptTag.getAttribute("data-bot-id");
  const clientId = scriptTag.getAttribute("data-client-id");
  const configUrl = scriptTag.getAttribute("data-config-url");
  const selector =
    scriptTag.getAttribute("data-selector") || "#botpress-container";

  // Validate required attributes
  if (!botId || !clientId || !configUrl) {
    console.error(
      "Botpress: Missing required attributes (botId, clientId, configUrl).",
      { botId, clientId, configUrl }
    );
    return;
  }

  // Verify container exists
  const container = document.querySelector(selector);
  if (!container) {
    console.error(`Botpress: Container with selector "${selector}" not found.`);
    return;
  }

  // Initialize Botpress
  try {
    window.botpress.init({
      botId,
      clientId,
      selector, // Target the specific div
      webchatScriptUrl: "https://cdn.botpress.cloud/webchat/v2.5/webchat.js",
      fabScriptUrl: "https://cdn.botpress.cloud/webchat/v2.5/fab.js",
      defaultState: "closed",
      configuration: {
        composerPlaceholder: "I'm your small busines advisor! How can I help?",
        botName: "Small Business Advisor",
        botAvatar:
          "https://files.bpcontent.cloud/2025/05/22/18/20250522184409-6K69LFN2.png",
        botDescription:
          "A practical AI advisor that gives clear, expert-backed answers to small business questionsâ€”no fluff, just guidance that works.",
        website: {
          title: "https://kevinx.ai/",
          link: "https://kevinx.ai/",
        },
        email: {},
        phone: {},
        termsOfService: {},
        privacyPolicy: {},
        color: "#027FBC",
        variant: "solid",
        themeMode: "light",
        fontFamily: "inter",
        radius: 1,
      },
    });
    console.log("Botpress: Initialization successful with selector:", selector);

    // Log when the widget is toggled
    window.botpress.on("webchat:opened", () => {
      console.log("Botpress: Chat widget opened");
    });
    window.botpress.on("webchat:closed", () => {
      console.log("Botpress: Chat widget closed");
    });
    window.botpress.on("webchat:initialized", () => {
      console.log("Botpress: Webchat initialized");
    });
  } catch (error) {
    console.error("Botpress: Initialization failed.", error);
  }
})();
