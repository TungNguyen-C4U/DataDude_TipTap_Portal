var fd = Object.defineProperty;
var dd = (e, t, r) => t in e ? fd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Or = (e, t, r) => dd(e, typeof t != "symbol" ? t + "" : t, r);
import { jsxs as O, jsx as u, Fragment as be } from "react/jsx-runtime";
import * as ne from "react";
import zr, { useState as re, useRef as bt, useEffect as me, useMemo as Te, useCallback as oe, createContext as hd, useContext as pd, useSyncExternalStore as md, Fragment as gd, memo as vd, forwardRef as yd, useId as xd, useImperativeHandle as bd, useLayoutEffect as wd } from "react";
import { c as En, B as Rt, N as Ra, R as Ia, g as Jn, u as Sd, E as Ad } from "./dom-dataset-CHDbKz5J.js";
import { Slot as iu } from "@radix-ui/react-slot";
import { k as Oe, B as Cd, p as Ur, u as Se, q as Td, I as Wr, j as Gr, i as ou, C as Ed, E as Rd } from "./index-5T4epA8j.js";
import * as au from "@radix-ui/react-separator";
import * as Ne from "@radix-ui/react-toast";
import { WrapText as Id, PencilRuler as Od, FlipHorizontal as Pd, FlipVertical as Nd, CropIcon as kd, ChevronUp as Md, Paperclip as Ld, Eye as $d, Settings as _d, ZoomOut as Dd, ZoomIn as Bd, BookMarked as jd, Sigma as zd, SmilePlusIcon as Hd, Replace as bs, SmilePlus as qd, Frame as Fd, Columns2 as ws, PanelRight as Ud, PanelLeft as Wd, Clipboard as Gd, Copy as Vd, GripVertical as Kd, Plus as su, Columns4 as Yd, Columns3 as Xd, Heading6 as Jd, Heading5 as Qd, Heading4 as Zd, Heading3 as eh, Heading2 as th, Heading1 as rh, ChevronsUpDown as nh, Trash as ih, Trash2 as oh, TableCellsSplit as ah, TableCellsMerge as sh, BetweenVerticalEnd as ch, BetweenVerticalStart as lh, BetweenHorizonalStart as uh, BetweenHorizonalEnd as fh, Unlink as dh, Pencil as hh, Sparkles as ph, Table as mh, Minimize as gh, Maximize as vh, ImageUp as yh, Link as xh, ListTodo as bh, ListOrdered as wh, List as Sh, IndentDecrease as Ah, IndentIncrease as Ch, Type as Th, CodeXml as Eh, Code as Rh, Superscript as Ih, Subscript as Oh, ChevronDown as Ph, Undo2 as Nh, Redo2 as kh, PaintRoller as Mh, Eraser as Lh, Minus as $h, Strikethrough as _h, Quote as Dh, Underline as Bh, Italic as jh, LoaderCircle as zh, Bold as Hh, X as cu, ChevronRight as qh, Check as lu, Circle as Fh } from "lucide-react";
import * as wr from "@radix-ui/react-tooltip";
import * as uu from "@radix-ui/react-toggle";
import { TextAlignRightIcon as Uh, TextAlignLeftIcon as Wh, TextAlignJustifyIcon as Gh, TextAlignCenterIcon as Vh } from "@radix-ui/react-icons";
import * as hr from "@radix-ui/react-popover";
import * as fu from "@radix-ui/react-label";
import * as Le from "@radix-ui/react-dialog";
import { H as Rn, I as Kh, z as Yh, u as Xh, a as Wt, P as It, T as Gt, A as Jh, J as Qh, K as Zh, M as ep, c as tp, m as it, L as rp, O as np, Q as ip, R as op, U as ap, V as sp, N as In, n as du, b as cp, D as lp, W as Vr, X as up, E as fp } from "./index-BWx1Mchx.js";
import { Resizable as dp } from "re-resizable";
import hp from "react-image-crop";
import * as Ot from "@radix-ui/react-tabs";
import * as Qo from "@radix-ui/react-checkbox";
import pp, { sticky as mp } from "tippy.js";
import { HexColorPicker as gp } from "react-colorful";
import * as Zo from "@radix-ui/react-switch";
import * as fe from "@radix-ui/react-dropdown-menu";
var hu = typeof global == "object" && global && global.Object === Object && global, vp = typeof self == "object" && self && self.Object === Object && self, Ke = hu || vp || Function("return this")(), Ge = Ke.Symbol, pu = Object.prototype, yp = pu.hasOwnProperty, xp = pu.toString, Zt = Ge ? Ge.toStringTag : void 0;
function bp(e) {
  var t = yp.call(e, Zt), r = e[Zt];
  try {
    e[Zt] = void 0;
    var n = !0;
  } catch {
  }
  var i = xp.call(e);
  return n && (t ? e[Zt] = r : delete e[Zt]), i;
}
var wp = Object.prototype, Sp = wp.toString;
function Ap(e) {
  return Sp.call(e);
}
var Cp = "[object Null]", Tp = "[object Undefined]", Ss = Ge ? Ge.toStringTag : void 0;
function St(e) {
  return e == null ? e === void 0 ? Tp : Cp : Ss && Ss in Object(e) ? bp(e) : Ap(e);
}
function ot(e) {
  return e != null && typeof e == "object";
}
var Ep = "[object Symbol]";
function On(e) {
  return typeof e == "symbol" || ot(e) && St(e) == Ep;
}
function mu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Ve = Array.isArray, As = Ge ? Ge.prototype : void 0, Cs = As ? As.toString : void 0;
function Kr(e) {
  if (typeof e == "string")
    return e;
  if (Ve(e))
    return mu(e, Kr) + "";
  if (On(e))
    return Cs ? Cs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Rp = /\s/;
function Ip(e) {
  for (var t = e.length; t-- && Rp.test(e.charAt(t)); )
    ;
  return t;
}
var Op = /^\s+/;
function Pp(e) {
  return e && e.slice(0, Ip(e) + 1).replace(Op, "");
}
function wt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ts = NaN, Np = /^[-+]0x[0-9a-f]+$/i, kp = /^0b[01]+$/i, Mp = /^0o[0-7]+$/i, Lp = parseInt;
function zt(e) {
  if (typeof e == "number")
    return e;
  if (On(e))
    return Ts;
  if (wt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Pp(e);
  var r = kp.test(e);
  return r || Mp.test(e) ? Lp(e.slice(2), r ? 2 : 8) : Np.test(e) ? Ts : +e;
}
var Es = 1 / 0, $p = 17976931348623157e292;
function _p(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = zt(e), e === Es || e === -Es) {
    var t = e < 0 ? -1 : 1;
    return t * $p;
  }
  return e === e ? e : 0;
}
function Dp(e) {
  var t = _p(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function Oa(e) {
  return e;
}
var Bp = "[object AsyncFunction]", jp = "[object Function]", zp = "[object GeneratorFunction]", Hp = "[object Proxy]";
function gu(e) {
  if (!wt(e))
    return !1;
  var t = St(e);
  return t == jp || t == zp || t == Bp || t == Hp;
}
var Qn = Ke["__core-js_shared__"], Rs = function() {
  var e = /[^.]+$/.exec(Qn && Qn.keys && Qn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function qp(e) {
  return !!Rs && Rs in e;
}
var Fp = Function.prototype, Up = Fp.toString;
function Pt(e) {
  if (e != null) {
    try {
      return Up.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Wp = /[\\^$.*+?()[\]{}|]/g, Gp = /^\[object .+?Constructor\]$/, Vp = Function.prototype, Kp = Object.prototype, Yp = Vp.toString, Xp = Kp.hasOwnProperty, Jp = RegExp(
  "^" + Yp.call(Xp).replace(Wp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Qp(e) {
  if (!wt(e) || qp(e))
    return !1;
  var t = gu(e) ? Jp : Gp;
  return t.test(Pt(e));
}
function Zp(e, t) {
  return e == null ? void 0 : e[t];
}
function Nt(e, t) {
  var r = Zp(e, t);
  return Qp(r) ? r : void 0;
}
var ea = Nt(Ke, "WeakMap");
function em(e, t, r) {
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
var tm = 800, rm = 16, nm = Date.now;
function im(e) {
  var t = 0, r = 0;
  return function() {
    var n = nm(), i = rm - (n - r);
    if (r = n, i > 0) {
      if (++t >= tm)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function om(e) {
  return function() {
    return e;
  };
}
var Is = function() {
  try {
    var e = Nt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), am = Is ? function(e, t) {
  return Is(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: om(t),
    writable: !0
  });
} : Oa, sm = im(am);
function cm(e, t, r, n) {
  for (var i = e.length, o = r + -1; ++o < i; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
function lm(e) {
  return e !== e;
}
function um(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
function fm(e, t, r) {
  return t === t ? um(e, t, r) : cm(e, lm, r);
}
function dm(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && fm(e, t, 0) > -1;
}
var hm = 9007199254740991, pm = /^(?:0|[1-9]\d*)$/;
function vu(e, t) {
  var r = typeof e;
  return t = t ?? hm, !!t && (r == "number" || r != "symbol" && pm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function yu(e, t) {
  return e === t || e !== e && t !== t;
}
var Os = Math.max;
function mm(e, t, r) {
  return t = Os(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, o = Os(n.length - t, 0), a = Array(o); ++i < o; )
      a[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(a), em(e, this, s);
  };
}
function gm(e, t) {
  return sm(mm(e, t, Oa), e + "");
}
var vm = 9007199254740991;
function Pa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vm;
}
function xu(e) {
  return e != null && Pa(e.length) && !gu(e);
}
var ym = Object.prototype;
function xm(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ym;
  return e === r;
}
function bm(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var wm = "[object Arguments]";
function Ps(e) {
  return ot(e) && St(e) == wm;
}
var bu = Object.prototype, Sm = bu.hasOwnProperty, Am = bu.propertyIsEnumerable, Na = Ps(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ps : function(e) {
  return ot(e) && Sm.call(e, "callee") && !Am.call(e, "callee");
};
function Cm() {
  return !1;
}
var wu = typeof exports == "object" && exports && !exports.nodeType && exports, Ns = wu && typeof module == "object" && module && !module.nodeType && module, Tm = Ns && Ns.exports === wu, ks = Tm ? Ke.Buffer : void 0, Em = ks ? ks.isBuffer : void 0, ta = Em || Cm, Rm = "[object Arguments]", Im = "[object Array]", Om = "[object Boolean]", Pm = "[object Date]", Nm = "[object Error]", km = "[object Function]", Mm = "[object Map]", Lm = "[object Number]", $m = "[object Object]", _m = "[object RegExp]", Dm = "[object Set]", Bm = "[object String]", jm = "[object WeakMap]", zm = "[object ArrayBuffer]", Hm = "[object DataView]", qm = "[object Float32Array]", Fm = "[object Float64Array]", Um = "[object Int8Array]", Wm = "[object Int16Array]", Gm = "[object Int32Array]", Vm = "[object Uint8Array]", Km = "[object Uint8ClampedArray]", Ym = "[object Uint16Array]", Xm = "[object Uint32Array]", le = {};
le[qm] = le[Fm] = le[Um] = le[Wm] = le[Gm] = le[Vm] = le[Km] = le[Ym] = le[Xm] = !0;
le[Rm] = le[Im] = le[zm] = le[Om] = le[Hm] = le[Pm] = le[Nm] = le[km] = le[Mm] = le[Lm] = le[$m] = le[_m] = le[Dm] = le[Bm] = le[jm] = !1;
function Jm(e) {
  return ot(e) && Pa(e.length) && !!le[St(e)];
}
function ka(e) {
  return function(t) {
    return e(t);
  };
}
var Su = typeof exports == "object" && exports && !exports.nodeType && exports, or = Su && typeof module == "object" && module && !module.nodeType && module, Qm = or && or.exports === Su, Zn = Qm && hu.process, Yr = function() {
  try {
    var e = or && or.require && or.require("util").types;
    return e || Zn && Zn.binding && Zn.binding("util");
  } catch {
  }
}(), Ms = Yr && Yr.isTypedArray, Au = Ms ? ka(Ms) : Jm, Zm = Object.prototype, eg = Zm.hasOwnProperty;
function tg(e, t) {
  var r = Ve(e), n = !r && Na(e), i = !r && !n && ta(e), o = !r && !n && !i && Au(e), a = r || n || i || o, s = a ? bm(e.length, String) : [], c = s.length;
  for (var l in e)
    eg.call(e, l) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    vu(l, c))) && s.push(l);
  return s;
}
function rg(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ng = rg(Object.keys, Object), ig = Object.prototype, og = ig.hasOwnProperty;
function ag(e) {
  if (!xm(e))
    return ng(e);
  var t = [];
  for (var r in Object(e))
    og.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Cu(e) {
  return xu(e) ? tg(e) : ag(e);
}
var sg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cg = /^\w*$/;
function Ma(e, t) {
  if (Ve(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || On(e) ? !0 : cg.test(e) || !sg.test(e) || t != null && e in Object(t);
}
var pr = Nt(Object, "create");
function lg() {
  this.__data__ = pr ? pr(null) : {}, this.size = 0;
}
function ug(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var fg = "__lodash_hash_undefined__", dg = Object.prototype, hg = dg.hasOwnProperty;
function pg(e) {
  var t = this.__data__;
  if (pr) {
    var r = t[e];
    return r === fg ? void 0 : r;
  }
  return hg.call(t, e) ? t[e] : void 0;
}
var mg = Object.prototype, gg = mg.hasOwnProperty;
function vg(e) {
  var t = this.__data__;
  return pr ? t[e] !== void 0 : gg.call(t, e);
}
var yg = "__lodash_hash_undefined__";
function xg(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = pr && t === void 0 ? yg : t, this;
}
function Et(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Et.prototype.clear = lg;
Et.prototype.delete = ug;
Et.prototype.get = pg;
Et.prototype.has = vg;
Et.prototype.set = xg;
function bg() {
  this.__data__ = [], this.size = 0;
}
function Pn(e, t) {
  for (var r = e.length; r--; )
    if (yu(e[r][0], t))
      return r;
  return -1;
}
var wg = Array.prototype, Sg = wg.splice;
function Ag(e) {
  var t = this.__data__, r = Pn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Sg.call(t, r, 1), --this.size, !0;
}
function Cg(e) {
  var t = this.__data__, r = Pn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Tg(e) {
  return Pn(this.__data__, e) > -1;
}
function Eg(e, t) {
  var r = this.__data__, n = Pn(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function at(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
at.prototype.clear = bg;
at.prototype.delete = Ag;
at.prototype.get = Cg;
at.prototype.has = Tg;
at.prototype.set = Eg;
var mr = Nt(Ke, "Map");
function Rg() {
  this.size = 0, this.__data__ = {
    hash: new Et(),
    map: new (mr || at)(),
    string: new Et()
  };
}
function Ig(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Nn(e, t) {
  var r = e.__data__;
  return Ig(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Og(e) {
  var t = Nn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Pg(e) {
  return Nn(this, e).get(e);
}
function Ng(e) {
  return Nn(this, e).has(e);
}
function kg(e, t) {
  var r = Nn(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function st(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
st.prototype.clear = Rg;
st.prototype.delete = Og;
st.prototype.get = Pg;
st.prototype.has = Ng;
st.prototype.set = kg;
var Mg = "Expected a function";
function La(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Mg);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new (La.Cache || st)(), r;
}
La.Cache = st;
var Lg = 500;
function $g(e) {
  var t = La(e, function(n) {
    return r.size === Lg && r.clear(), n;
  }), r = t.cache;
  return t;
}
var _g = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dg = /\\(\\)?/g, Bg = $g(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(_g, function(r, n, i, o) {
    t.push(i ? o.replace(Dg, "$1") : n || r);
  }), t;
});
function ra(e) {
  return e == null ? "" : Kr(e);
}
function Tu(e, t) {
  return Ve(e) ? e : Ma(e, t) ? [e] : Bg(ra(e));
}
function kn(e) {
  if (typeof e == "string" || On(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Eu(e, t) {
  t = Tu(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[kn(t[r++])];
  return r && r == n ? e : void 0;
}
function jg(e, t, r) {
  var n = e == null ? void 0 : Eu(e, t);
  return n === void 0 ? r : n;
}
function Ru(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var Ls = Ge ? Ge.isConcatSpreadable : void 0;
function zg(e) {
  return Ve(e) || Na(e) || !!(Ls && e && e[Ls]);
}
function Hg(e, t, r, n, i) {
  var o = -1, a = e.length;
  for (r || (r = zg), i || (i = []); ++o < a; ) {
    var s = e[o];
    r(s) && Ru(i, s);
  }
  return i;
}
function qg(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++n < i; )
    o[n] = e[n + t];
  return o;
}
function Fg(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : qg(e, t, r);
}
var Ug = "\\ud800-\\udfff", Wg = "\\u0300-\\u036f", Gg = "\\ufe20-\\ufe2f", Vg = "\\u20d0-\\u20ff", Kg = Wg + Gg + Vg, Yg = "\\ufe0e\\ufe0f", Xg = "\\u200d", Jg = RegExp("[" + Xg + Ug + Kg + Yg + "]");
function $a(e) {
  return Jg.test(e);
}
function Qg(e) {
  return e.split("");
}
var Iu = "\\ud800-\\udfff", Zg = "\\u0300-\\u036f", e1 = "\\ufe20-\\ufe2f", t1 = "\\u20d0-\\u20ff", r1 = Zg + e1 + t1, n1 = "\\ufe0e\\ufe0f", i1 = "[" + Iu + "]", na = "[" + r1 + "]", ia = "\\ud83c[\\udffb-\\udfff]", o1 = "(?:" + na + "|" + ia + ")", Ou = "[^" + Iu + "]", Pu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Nu = "[\\ud800-\\udbff][\\udc00-\\udfff]", a1 = "\\u200d", ku = o1 + "?", Mu = "[" + n1 + "]?", s1 = "(?:" + a1 + "(?:" + [Ou, Pu, Nu].join("|") + ")" + Mu + ku + ")*", c1 = Mu + ku + s1, l1 = "(?:" + [Ou + na + "?", na, Pu, Nu, i1].join("|") + ")", u1 = RegExp(ia + "(?=" + ia + ")|" + l1 + c1, "g");
function f1(e) {
  return e.match(u1) || [];
}
function d1(e) {
  return $a(e) ? f1(e) : Qg(e);
}
function h1(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Lu(e, t, r) {
  return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = zt(r), r = r === r ? r : 0), t !== void 0 && (t = zt(t), t = t === t ? t : 0), h1(zt(e), t, r);
}
function p1() {
  this.__data__ = new at(), this.size = 0;
}
function m1(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function g1(e) {
  return this.__data__.get(e);
}
function v1(e) {
  return this.__data__.has(e);
}
var y1 = 200;
function x1(e, t) {
  var r = this.__data__;
  if (r instanceof at) {
    var n = r.__data__;
    if (!mr || n.length < y1 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new st(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function nt(e) {
  var t = this.__data__ = new at(e);
  this.size = t.size;
}
nt.prototype.clear = p1;
nt.prototype.delete = m1;
nt.prototype.get = g1;
nt.prototype.has = v1;
nt.prototype.set = x1;
function b1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function w1() {
  return [];
}
var S1 = Object.prototype, A1 = S1.propertyIsEnumerable, $s = Object.getOwnPropertySymbols, C1 = $s ? function(e) {
  return e == null ? [] : (e = Object(e), b1($s(e), function(t) {
    return A1.call(e, t);
  }));
} : w1;
function T1(e, t, r) {
  var n = t(e);
  return Ve(e) ? n : Ru(n, r(e));
}
function _s(e) {
  return T1(e, Cu, C1);
}
var oa = Nt(Ke, "DataView"), aa = Nt(Ke, "Promise"), sa = Nt(Ke, "Set"), Ds = "[object Map]", E1 = "[object Object]", Bs = "[object Promise]", js = "[object Set]", zs = "[object WeakMap]", Hs = "[object DataView]", R1 = Pt(oa), I1 = Pt(mr), O1 = Pt(aa), P1 = Pt(sa), N1 = Pt(ea), gt = St;
(oa && gt(new oa(new ArrayBuffer(1))) != Hs || mr && gt(new mr()) != Ds || aa && gt(aa.resolve()) != Bs || sa && gt(new sa()) != js || ea && gt(new ea()) != zs) && (gt = function(e) {
  var t = St(e), r = t == E1 ? e.constructor : void 0, n = r ? Pt(r) : "";
  if (n)
    switch (n) {
      case R1:
        return Hs;
      case I1:
        return Ds;
      case O1:
        return Bs;
      case P1:
        return js;
      case N1:
        return zs;
    }
  return t;
});
var qs = Ke.Uint8Array, k1 = "__lodash_hash_undefined__";
function M1(e) {
  return this.__data__.set(e, k1), this;
}
function L1(e) {
  return this.__data__.has(e);
}
function gr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new st(); ++t < r; )
    this.add(e[t]);
}
gr.prototype.add = gr.prototype.push = M1;
gr.prototype.has = L1;
function $1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function $u(e, t) {
  return e.has(t);
}
var _1 = 1, D1 = 2;
function _u(e, t, r, n, i, o) {
  var a = r & _1, s = e.length, c = t.length;
  if (s != c && !(a && c > s))
    return !1;
  var l = o.get(e), d = o.get(t);
  if (l && d)
    return l == t && d == e;
  var f = -1, h = !0, p = r & D1 ? new gr() : void 0;
  for (o.set(e, t), o.set(t, e); ++f < s; ) {
    var m = e[f], g = t[f];
    if (n)
      var v = a ? n(g, m, f, t, e, o) : n(m, g, f, e, t, o);
    if (v !== void 0) {
      if (v)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!$1(t, function(b, w) {
        if (!$u(p, w) && (m === b || i(m, b, r, n, o)))
          return p.push(w);
      })) {
        h = !1;
        break;
      }
    } else if (!(m === g || i(m, g, r, n, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), h;
}
function B1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function j1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var z1 = 1, H1 = 2, q1 = "[object Boolean]", F1 = "[object Date]", U1 = "[object Error]", W1 = "[object Map]", G1 = "[object Number]", V1 = "[object RegExp]", K1 = "[object Set]", Y1 = "[object String]", X1 = "[object Symbol]", J1 = "[object ArrayBuffer]", Q1 = "[object DataView]", Fs = Ge ? Ge.prototype : void 0, ei = Fs ? Fs.valueOf : void 0;
function Z1(e, t, r, n, i, o, a) {
  switch (r) {
    case Q1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case J1:
      return !(e.byteLength != t.byteLength || !o(new qs(e), new qs(t)));
    case q1:
    case F1:
    case G1:
      return yu(+e, +t);
    case U1:
      return e.name == t.name && e.message == t.message;
    case V1:
    case Y1:
      return e == t + "";
    case W1:
      var s = B1;
    case K1:
      var c = n & z1;
      if (s || (s = j1), e.size != t.size && !c)
        return !1;
      var l = a.get(e);
      if (l)
        return l == t;
      n |= H1, a.set(e, t);
      var d = _u(s(e), s(t), n, i, o, a);
      return a.delete(e), d;
    case X1:
      if (ei)
        return ei.call(e) == ei.call(t);
  }
  return !1;
}
var e0 = 1, t0 = Object.prototype, r0 = t0.hasOwnProperty;
function n0(e, t, r, n, i, o) {
  var a = r & e0, s = _s(e), c = s.length, l = _s(t), d = l.length;
  if (c != d && !a)
    return !1;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(a ? h in t : r0.call(t, h)))
      return !1;
  }
  var p = o.get(e), m = o.get(t);
  if (p && m)
    return p == t && m == e;
  var g = !0;
  o.set(e, t), o.set(t, e);
  for (var v = a; ++f < c; ) {
    h = s[f];
    var b = e[h], w = t[h];
    if (n)
      var S = a ? n(w, b, h, t, e, o) : n(b, w, h, e, t, o);
    if (!(S === void 0 ? b === w || i(b, w, r, n, o) : S)) {
      g = !1;
      break;
    }
    v || (v = h == "constructor");
  }
  if (g && !v) {
    var A = e.constructor, E = t.constructor;
    A != E && "constructor" in e && "constructor" in t && !(typeof A == "function" && A instanceof A && typeof E == "function" && E instanceof E) && (g = !1);
  }
  return o.delete(e), o.delete(t), g;
}
var i0 = 1, Us = "[object Arguments]", Ws = "[object Array]", Pr = "[object Object]", o0 = Object.prototype, Gs = o0.hasOwnProperty;
function a0(e, t, r, n, i, o) {
  var a = Ve(e), s = Ve(t), c = a ? Ws : gt(e), l = s ? Ws : gt(t);
  c = c == Us ? Pr : c, l = l == Us ? Pr : l;
  var d = c == Pr, f = l == Pr, h = c == l;
  if (h && ta(e)) {
    if (!ta(t))
      return !1;
    a = !0, d = !1;
  }
  if (h && !d)
    return o || (o = new nt()), a || Au(e) ? _u(e, t, r, n, i, o) : Z1(e, t, c, r, n, i, o);
  if (!(r & i0)) {
    var p = d && Gs.call(e, "__wrapped__"), m = f && Gs.call(t, "__wrapped__");
    if (p || m) {
      var g = p ? e.value() : e, v = m ? t.value() : t;
      return o || (o = new nt()), i(g, v, r, n, o);
    }
  }
  return h ? (o || (o = new nt()), n0(e, t, r, n, i, o)) : !1;
}
function _a(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !ot(e) && !ot(t) ? e !== e && t !== t : a0(e, t, r, n, _a, i);
}
var s0 = 1, c0 = 2;
function l0(e, t, r, n) {
  var i = r.length, o = i;
  if (e == null)
    return !o;
  for (e = Object(e); i--; ) {
    var a = r[i];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++i < o; ) {
    a = r[i];
    var s = a[0], c = e[s], l = a[1];
    if (a[2]) {
      if (c === void 0 && !(s in e))
        return !1;
    } else {
      var d = new nt(), f;
      if (!(f === void 0 ? _a(l, c, s0 | c0, n, d) : f))
        return !1;
    }
  }
  return !0;
}
function Du(e) {
  return e === e && !wt(e);
}
function u0(e) {
  for (var t = Cu(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Du(i)];
  }
  return t;
}
function Bu(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function f0(e) {
  var t = u0(e);
  return t.length == 1 && t[0][2] ? Bu(t[0][0], t[0][1]) : function(r) {
    return r === e || l0(r, e, t);
  };
}
function d0(e, t) {
  return e != null && t in Object(e);
}
function h0(e, t, r) {
  t = Tu(t, e);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = kn(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && Pa(i) && vu(a, i) && (Ve(e) || Na(e)));
}
function p0(e, t) {
  return e != null && h0(e, t, d0);
}
var m0 = 1, g0 = 2;
function v0(e, t) {
  return Ma(e) && Du(t) ? Bu(kn(e), t) : function(r) {
    var n = jg(r, e);
    return n === void 0 && n === t ? p0(r, e) : _a(t, n, m0 | g0);
  };
}
function ju(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function y0(e) {
  return function(t) {
    return Eu(t, e);
  };
}
function x0(e) {
  return Ma(e) ? ju(kn(e)) : y0(e);
}
function b0(e) {
  return typeof e == "function" ? e : e == null ? Oa : typeof e == "object" ? Ve(e) ? v0(e[0], e[1]) : f0(e) : x0(e);
}
var ti = function() {
  return Ke.Date.now();
}, w0 = "Expected a function", S0 = Math.max, A0 = Math.min;
function Mn(e, t, r) {
  var n, i, o, a, s, c, l = 0, d = !1, f = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(w0);
  t = zt(t) || 0, wt(r) && (d = !!r.leading, f = "maxWait" in r, o = f ? S0(zt(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);
  function p(N) {
    var M = n, I = i;
    return n = i = void 0, l = N, a = e.apply(I, M), a;
  }
  function m(N) {
    return l = N, s = setTimeout(b, t), d ? p(N) : a;
  }
  function g(N) {
    var M = N - c, I = N - l, k = t - M;
    return f ? A0(k, o - I) : k;
  }
  function v(N) {
    var M = N - c, I = N - l;
    return c === void 0 || M >= t || M < 0 || f && I >= o;
  }
  function b() {
    var N = ti();
    if (v(N))
      return w(N);
    s = setTimeout(b, g(N));
  }
  function w(N) {
    return s = void 0, h && n ? p(N) : (n = i = void 0, a);
  }
  function S() {
    s !== void 0 && clearTimeout(s), l = 0, n = c = i = s = void 0;
  }
  function A() {
    return s === void 0 ? a : w(ti());
  }
  function E() {
    var N = ti(), M = v(N);
    if (n = arguments, i = this, c = N, M) {
      if (s === void 0)
        return m(c);
      if (f)
        return clearTimeout(s), s = setTimeout(b, t), p(c);
    }
    return s === void 0 && (s = setTimeout(b, t)), a;
  }
  return E.cancel = S, E.flush = A, E;
}
function ri(e) {
  return ot(e) && xu(e);
}
var C0 = 200;
function T0(e, t, r, n) {
  var i = -1, o = dm, a = !0, s = e.length, c = [], l = t.length;
  if (!s)
    return c;
  r && (t = mu(t, ka(r))), t.length >= C0 && (o = $u, a = !1, t = new gr(t));
  e:
    for (; ++i < s; ) {
      var d = e[i], f = r == null ? d : r(d);
      if (d = d !== 0 ? d : 0, a && f === f) {
        for (var h = l; h--; )
          if (t[h] === f)
            continue e;
        c.push(d);
      } else o(t, f, n) || c.push(d);
    }
  return c;
}
function E0(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var R0 = gm(function(e, t) {
  var r = E0(t);
  return ri(r) && (r = void 0), ri(e) ? T0(e, Hg(t, 1, ri), b0(r)) : [];
}), I0 = "[object Number]";
function Xr(e) {
  return typeof e == "number" || ot(e) && St(e) == I0;
}
var O0 = "[object RegExp]";
function P0(e) {
  return ot(e) && St(e) == O0;
}
var Vs = Yr && Yr.isRegExp, N0 = Vs ? ka(Vs) : P0, k0 = ju("length"), zu = "\\ud800-\\udfff", M0 = "\\u0300-\\u036f", L0 = "\\ufe20-\\ufe2f", $0 = "\\u20d0-\\u20ff", _0 = M0 + L0 + $0, D0 = "\\ufe0e\\ufe0f", B0 = "[" + zu + "]", ca = "[" + _0 + "]", la = "\\ud83c[\\udffb-\\udfff]", j0 = "(?:" + ca + "|" + la + ")", Hu = "[^" + zu + "]", qu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Fu = "[\\ud800-\\udbff][\\udc00-\\udfff]", z0 = "\\u200d", Uu = j0 + "?", Wu = "[" + D0 + "]?", H0 = "(?:" + z0 + "(?:" + [Hu, qu, Fu].join("|") + ")" + Wu + Uu + ")*", q0 = Wu + Uu + H0, F0 = "(?:" + [Hu + ca + "?", ca, qu, Fu, B0].join("|") + ")", Ks = RegExp(la + "(?=" + la + ")|" + F0 + q0, "g");
function U0(e) {
  for (var t = Ks.lastIndex = 0; Ks.test(e); )
    ++t;
  return t;
}
function W0(e) {
  return $a(e) ? U0(e) : k0(e);
}
var G0 = "Expected a function";
function vr(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(G0);
  return wt(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Mn(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var V0 = 30, K0 = "...", Y0 = /\w*$/;
function X0(e, t) {
  var r = V0, n = K0;
  if (wt(t)) {
    var i = "separator" in t ? t.separator : i;
    r = "length" in t ? Dp(t.length) : r, n = "omission" in t ? Kr(t.omission) : n;
  }
  e = ra(e);
  var o = e.length;
  if ($a(e)) {
    var a = d1(e);
    o = a.length;
  }
  if (r >= o)
    return e;
  var s = r - W0(n);
  if (s < 1)
    return n;
  var c = a ? Fg(a, 0, s).join("") : e.slice(0, s);
  if (i === void 0)
    return c + n;
  if (a && (s += c.length - s), N0(i)) {
    if (e.slice(s).search(i)) {
      var l, d = c;
      for (i.global || (i = RegExp(i.source, ra(Y0.exec(i)) + "g")), i.lastIndex = 0; l = i.exec(d); )
        var f = l.index;
      c = c.slice(0, f === void 0 ? s : f);
    }
  } else if (e.indexOf(Kr(i), s) != s) {
    var h = c.lastIndexOf(i);
    h > -1 && (c = c.slice(0, h));
  }
  return c + n;
}
const Da = "-", J0 = (e) => {
  const t = Z0(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(Da);
      return s[0] === "" && s.length !== 1 && s.shift(), Gu(s, t) || Q0(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, Gu = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? Gu(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(Da);
  return (a = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : a.classGroupId;
}, Ys = /^\[(.+)\]$/, Q0 = (e) => {
  if (Ys.test(e)) {
    const t = Ys.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Z0 = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return tv(Object.entries(e.classGroups), r).forEach(([o, a]) => {
    ua(a, n, o, t);
  }), n;
}, ua = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : Xs(t, i);
      o.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (ev(i)) {
        ua(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([o, a]) => {
      ua(a, Xs(t, o), r, n);
    });
  });
}, Xs = (e, t) => {
  let r = e;
  return t.split(Da).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, ev = (e) => e.isThemeGetter, tv = (e, t) => t ? e.map(([r, n]) => {
  const i = n.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, s]) => [t + a, s])) : o);
  return [r, i];
}) : e, rv = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (o, a) => {
    r.set(o, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let a = r.get(o);
      if (a !== void 0)
        return a;
      if ((a = n.get(o)) !== void 0)
        return i(o, a), a;
    },
    set(o, a) {
      r.has(o) ? r.set(o, a) : i(o, a);
    }
  };
}, Vu = "!", nv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], o = t.length, a = (s) => {
    const c = [];
    let l = 0, d = 0, f;
    for (let v = 0; v < s.length; v++) {
      let b = s[v];
      if (l === 0) {
        if (b === i && (n || s.slice(v, v + o) === t)) {
          c.push(s.slice(d, v)), d = v + o;
          continue;
        }
        if (b === "/") {
          f = v;
          continue;
        }
      }
      b === "[" ? l++ : b === "]" && l--;
    }
    const h = c.length === 0 ? s : s.substring(d), p = h.startsWith(Vu), m = p ? h.substring(1) : h, g = f && f > d ? f - d : void 0;
    return {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, iv = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, ov = (e) => ({
  cache: rv(e.cacheSize),
  parseClassName: nv(e),
  ...J0(e)
}), av = /\s+/, sv = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, o = [], a = e.trim().split(av);
  let s = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const l = a[c], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: p
    } = r(l);
    let m = !!p, g = n(m ? h.substring(0, p) : h);
    if (!g) {
      if (!m) {
        s = l + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (g = n(h), !g) {
        s = l + (s.length > 0 ? " " + s : s);
        continue;
      }
      m = !1;
    }
    const v = iv(d).join(":"), b = f ? v + Vu : v, w = b + g;
    if (o.includes(w))
      continue;
    o.push(w);
    const S = i(g, m);
    for (let A = 0; A < S.length; ++A) {
      const E = S[A];
      o.push(b + E);
    }
    s = l + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function cv() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ku(t)) && (n && (n += " "), n += r);
  return n;
}
const Ku = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ku(e[n])) && (r && (r += " "), r += t);
  return r;
};
function lv(e, ...t) {
  let r, n, i, o = a;
  function a(c) {
    const l = t.reduce((d, f) => f(d), e());
    return r = ov(l), n = r.cache.get, i = r.cache.set, o = s, s(c);
  }
  function s(c) {
    const l = n(c);
    if (l)
      return l;
    const d = sv(c, r);
    return i(c, d), d;
  }
  return function() {
    return o(cv.apply(null, arguments));
  };
}
const ce = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Yu = /^\[(?:([a-z-]+):)?(.+)\]$/i, uv = /^\d+\/\d+$/, fv = /* @__PURE__ */ new Set(["px", "full", "screen"]), dv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, pv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, mv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, gv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ze = (e) => Ht(e) || fv.has(e) || uv.test(e), ht = (e) => Vt(e, "length", Cv), Ht = (e) => !!e && !Number.isNaN(Number(e)), ni = (e) => Vt(e, "number", Ht), er = (e) => !!e && Number.isInteger(Number(e)), vv = (e) => e.endsWith("%") && Ht(e.slice(0, -1)), U = (e) => Yu.test(e), pt = (e) => dv.test(e), yv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), xv = (e) => Vt(e, yv, Xu), bv = (e) => Vt(e, "position", Xu), wv = /* @__PURE__ */ new Set(["image", "url"]), Sv = (e) => Vt(e, wv, Ev), Av = (e) => Vt(e, "", Tv), tr = () => !0, Vt = (e, t, r) => {
  const n = Yu.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Cv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hv.test(e) && !pv.test(e)
), Xu = () => !1, Tv = (e) => mv.test(e), Ev = (e) => gv.test(e), Rv = () => {
  const e = ce("colors"), t = ce("spacing"), r = ce("blur"), n = ce("brightness"), i = ce("borderColor"), o = ce("borderRadius"), a = ce("borderSpacing"), s = ce("borderWidth"), c = ce("contrast"), l = ce("grayscale"), d = ce("hueRotate"), f = ce("invert"), h = ce("gap"), p = ce("gradientColorStops"), m = ce("gradientColorStopPositions"), g = ce("inset"), v = ce("margin"), b = ce("opacity"), w = ce("padding"), S = ce("saturate"), A = ce("scale"), E = ce("sepia"), N = ce("skew"), M = ce("space"), I = ce("translate"), k = () => ["auto", "contain", "none"], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", U, t], P = () => [U, t], $ = () => ["", Ze, ht], B = () => ["auto", Ht, U], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], z = () => ["solid", "dashed", "dotted", "double", "none"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ee = () => ["", "0", U], ge = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], he = () => [Ht, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [tr],
      spacing: [Ze, ht],
      blur: ["none", "", pt, U],
      brightness: he(),
      borderColor: [e],
      borderRadius: ["none", "", "full", pt, U],
      borderSpacing: P(),
      borderWidth: $(),
      contrast: he(),
      grayscale: ee(),
      hueRotate: he(),
      invert: ee(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [vv, ht],
      inset: C(),
      margin: C(),
      opacity: he(),
      padding: P(),
      saturate: he(),
      scale: he(),
      sepia: ee(),
      skew: he(),
      space: P(),
      translate: P()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", U]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [pt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ge()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ge()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...W(), U]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: _()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": _()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": _()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", er, U]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: C()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ee()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ee()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", er, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [tr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", er, U]
        }, U]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [tr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [er, U]
        }, U]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...J()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...J(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...J(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [M]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [M]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [U, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [U, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [pt]
        }, pt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [U, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", pt, ht]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ni]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tr]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ht, ni]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ze, U]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [b]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ze, ht]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ze, U]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", U]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [b]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...W(), bv]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", xv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Sv]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...z(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: z()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...z()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ze, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ze, ht]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ze, ht]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", pt, Av]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [tr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", pt, U]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: he()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: he()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [A]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [A]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [A]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [er, U]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [I]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [I]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", U]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ze, ht, ni]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Iv = /* @__PURE__ */ lv(Rv);
function Q(...e) {
  return Iv(En(e));
}
let ii;
function oi() {
  return ii === void 0 && (ii = navigator.platform.includes("Mac")), ii;
}
function Ov(e) {
  return `${e}`.toLowerCase() === "mod" ? oi() ? "⌘" : "Ctrl" : `${e}`.toLowerCase() === "alt" ? oi() ? "⌥" : "Alt" : `${e}`.toLowerCase() === "shift" ? oi() ? "⇧" : "Shift" : e;
}
function Pv(e) {
  return e.map(Ov).join(" ");
}
const K = zr.forwardRef(
  (e, t) => {
    const {
      icon: r = void 0,
      // title = undefined,
      tooltip: n = void 0,
      disabled: i = !1,
      customClass: o = "",
      // color = undefined,
      loading: a = void 0,
      shortcutKeys: s = void 0,
      tooltipOptions: c = {},
      action: l = void 0,
      isActive: d = void 0,
      children: f,
      asChild: h = !1,
      upload: p = !1,
      initialDisplayedColor: m = void 0,
      ...g
    } = e, v = Zu[r];
    return /* @__PURE__ */ O(Nf, { children: [
      /* @__PURE__ */ u(kf, { asChild: !0, children: /* @__PURE__ */ O(
        h ? iu : Pf,
        {
          "data-state": d != null && d() ? "on" : "off",
          onClick: l,
          ref: t,
          size: "sm",
          className: Q("richtext-w-[32px] richtext-h-[32px]", o),
          disabled: i,
          ...g,
          children: [
            v && /* @__PURE__ */ u(v, { className: "richtext-size-4" }),
            f
          ]
        }
      ) }),
      n && /* @__PURE__ */ u(Za, { ...c, children: /* @__PURE__ */ O("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        /* @__PURE__ */ u("div", { children: n }),
        !!(s != null && s.length) && /* @__PURE__ */ u("span", { children: Pv(s) })
      ] }) })
    ] });
  }
);
function Nv(e) {
  const t = ["size-small", "size-medium", "size-large"], r = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, i) => ({
    type: `image-${n}`,
    component: K,
    componentProps: {
      tooltip: Oe.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[i],
      action: () => e.commands.updateImage({ width: Ur[n] }),
      isActive: () => e.isActive("image", { width: Ur[n] })
    }
  }));
}
function kv(e) {
  const t = ["size-small", "size-medium", "size-large"], r = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, i) => ({
    type: `image-${n}`,
    component: K,
    componentProps: {
      tooltip: Oe.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[i],
      action: () => e.commands.updateImageGif({ width: Ur[n] }),
      isActive: () => e.isActive("image", { width: Ur[n] })
    }
  }));
}
function Mv(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: K,
    componentProps: {
      tooltip: Oe.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var i, o;
        return (o = (i = e.commands) == null ? void 0 : i.setAlignImage) == null ? void 0 : o.call(i, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function Lv(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: K,
    componentProps: {
      tooltip: Oe.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var i, o;
        return (o = (i = e.commands) == null ? void 0 : i.setAlignImageGif) == null ? void 0 : o.call(i, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function $v(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: K,
    componentProps: {
      tooltip: Oe.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var i, o;
        return (o = (i = e.commands) == null ? void 0 : i.setAlignImageMermaid) == null ? void 0 : o.call(i, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function _v(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: K,
    componentProps: {
      tooltip: Oe.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var i, o;
        return (o = (i = e.commands) == null ? void 0 : i.setAlignImageDrawer) == null ? void 0 : o.call(i, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function Dv(e) {
  return [
    {
      type: "flipX",
      component: K,
      componentProps: {
        editor: e,
        tooltip: Oe.t("editor.tooltip.flipX"),
        icon: "FlipX",
        action: () => {
          const t = e.getAttributes("image"), { flipX: r } = t;
          e.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipX: !r
          }).run();
        }
      }
    },
    {
      type: "flipY",
      component: K,
      componentProps: {
        editor: e,
        tooltip: Oe.t("editor.tooltip.flipY"),
        icon: "FlipY",
        action: () => {
          const t = e.getAttributes("image"), { flipY: r } = t;
          e.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipY: !r
          }).run();
        }
      }
    },
    ...Nv(e),
    ...Mv(e),
    {
      type: "remove",
      component: K,
      componentProps: {
        editor: e,
        tooltip: Oe.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Rn(t, r);
        }
      }
    }
  ];
}
function Bv(e) {
  return [
    ...kv(e),
    ...Lv(e),
    {
      type: "remove",
      component: K,
      componentProps: {
        editor: e,
        tooltip: Oe.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Rn(t, r);
        }
      }
    }
  ];
}
function J2(e) {
  return [
    ...$v(e),
    {
      type: "edit",
      component: K,
      componentProps: {
        editor: e,
        tooltip: Oe.t("editor.edit"),
        icon: "Pencil",
        action: () => !0
      }
    },
    {
      type: "remove",
      component: K,
      componentProps: {
        editor: e,
        tooltip: Oe.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Rn(t, r);
        }
      }
    }
  ];
}
function Q2(e) {
  return [
    ..._v(e),
    {
      type: "edit",
      component: K,
      componentProps: {
        editor: e,
        tooltip: Oe.t("editor.edit"),
        icon: "Pencil",
        action: () => (console.log("AAA"), !0)
      }
    },
    {
      type: "remove",
      component: K,
      componentProps: {
        editor: e,
        tooltip: Oe.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Rn(t, r);
        }
      }
    }
  ];
}
function jv(e, t) {
  return Cd.reduce((r, n) => {
    if (n === "divider" && r.length > 0)
      return [...r, {
        type: "divider",
        component: void 0,
        componentProps: {}
      }];
    const i = e.extensionManager.extensions.find((o) => o.name === n);
    return i ? [...r, i.configure().options.button({ editor: e, t, extension: i })] : r;
  }, []);
}
function Ba(e, t, r) {
  const n = [], i = e.node(0);
  r = typeof r == "number" && r >= 0 ? r : e.sameParent(t) ? Math.max(0, e.sharedDepth(t.pos) - 1) : e.sharedDepth(t.pos);
  const o = new Kh(e, t, r), a = o.depth === 0 ? 0 : i.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((s, c) => {
    const l = a + c, d = l + s.nodeSize;
    if (l < o.start || l >= o.end) return;
    const f = new Yh(i.resolve(l), i.resolve(d));
    n.push(f);
  }), n;
}
class ja {
  constructor(t, r) {
    Or(this, "anchor");
    Or(this, "head");
    this.anchor = t, this.head = r;
  }
  map(t) {
    return new ja(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const r = t.resolve(this.anchor), n = t.resolve(this.head);
    return new Ue(r, n);
  }
}
class Ue extends Xh {
  constructor(r, n, i, o = 1) {
    const { doc: a } = r, s = r === n, c = r.pos === a.content.size && n.pos === a.content.size, l = s && !c ? a.resolve(n.pos + (o > 0 ? 1 : -1)) : n, d = s && c ? a.resolve(r.pos - (o > 0 ? 1 : -1)) : r, f = Ba(d.min(l), d.max(l), i);
    super(
      l.pos >= r.pos ? f[0].$from : f[f.length - 1].$to,
      l.pos >= r.pos ? f[f.length - 1].$to : f[0].$from,
      f
    );
    Or(this, "depth");
    this.depth = i;
  }
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(r) {
    return r instanceof Ue && r.$from.pos === this.$from.pos && r.$to.pos === this.$to.pos;
  }
  map(r, n) {
    const i = r.resolve(n.map(this.anchor)), o = r.resolve(n.map(this.head));
    return new Ue(i, o);
  }
  toJSON() {
    return { type: "nodeRange", anchor: this.anchor, head: this.head };
  }
  get isForwards() {
    return this.head >= this.anchor;
  }
  get isBackwards() {
    return !this.isForwards;
  }
  extendBackwards() {
    const { doc: r } = this.$from;
    if (this.isForwards && this.ranges.length > 1) {
      const o = this.ranges.slice(0, -1), a = o[0].$from, s = o[o.length - 1].$to;
      return new Ue(a, s, this.depth);
    }
    const n = this.ranges[0], i = r.resolve(Math.max(0, n.$from.pos - 1));
    return new Ue(this.$anchor, i, this.depth);
  }
  extendForwards() {
    const { doc: r } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const o = this.ranges.slice(1), a = o[0].$from, s = o[o.length - 1].$to;
      return new Ue(s, a, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], i = r.resolve(Math.min(r.content.size, n.$to.pos + 1));
    return new Ue(this.$anchor, i, this.depth);
  }
  static fromJSON(r, n) {
    return new Ue(r.resolve(n.anchor), r.resolve(n.head));
  }
  static create(r, n, i, o, a = 1) {
    return new this(r.resolve(n), r.resolve(i), o, a);
  }
  getBookmark() {
    return new ja(this.anchor, this.head);
  }
}
function zv(e) {
  const t = e.cloneNode(!0), r = [e, ...Array.from(e.getElementsByTagName("*"))], n = [t, ...Array.from(t.getElementsByTagName("*"))];
  return r.forEach((i, o) => {
    n[o].style.cssText = function(a) {
      let s = "";
      const c = getComputedStyle(a);
      for (let l = 0; l < c.length; l += 1)
        s += `${c[l]}:${c.getPropertyValue(c[l])};`;
      return s;
    }(i);
  }), t;
}
function Nr(e, t) {
  return window.getComputedStyle(e)[t];
}
function Hv(e = 0, t = 0, r = 0) {
  return Math.min(Math.max(e, t), r);
}
function Js(e) {
  e.parentNode !== null && e.parentNode !== void 0 && e.parentNode.removeChild(e);
}
function Ju(e) {
  const { x: t, y: r, direction: n, editor: i } = e;
  let o = null, a = null, s = null, c = t;
  for (; a === null && c < window.innerWidth && c > 0; ) {
    const l = document.elementsFromPoint(c, r), d = l.findIndex((h) => h.classList.contains("ProseMirror")), f = l.slice(0, d);
    if (f.length > 0) {
      const h = f[0];
      if (o = h, s = i.view.posAtDOM(h, 0), s >= 0) {
        a = i.state.doc.nodeAt(Math.max(s - 1, 0)), (a === null || a.isText) && (a = i.state.doc.nodeAt(Math.max(s - 1, 0))), a || (a = i.state.doc.nodeAt(Math.max(s, 0)));
        break;
      }
    }
    n === "left" ? c -= 1 : c += 1;
  }
  return {
    resultElement: o,
    resultNode: a,
    pos: s !== null ? s : null
  };
}
function qv(e, t) {
  const { doc: r } = t.view.state, n = Ju({ editor: t, x: e.clientX, y: e.clientY, direction: "right" });
  if (!n.resultNode || n.pos === null) return [];
  const i = e.clientX, o = function(d, f, h) {
    const p = Number.parseInt(Nr(d.dom, "paddingLeft"), 10), m = Number.parseInt(Nr(d.dom, "paddingRight"), 10), g = Number.parseInt(Nr(d.dom, "borderLeftWidth"), 10), v = Number.parseInt(Nr(d.dom, "borderLeftWidth"), 10), b = d.dom.getBoundingClientRect();
    return {
      left: Hv(
        f,
        b.left + p + g,
        b.right - m - v
      ),
      top: h
    };
  }(t.view, i, e.clientY), a = t.view.posAtCoords(o);
  if (!a) return [];
  const { pos: s } = a;
  if (!r.resolve(s).parent) return [];
  const c = r.resolve(n.pos), l = r.resolve(n.pos + 1);
  return Ba(c, l, 0);
}
function Qs(e, t) {
  const r = e.resolve(t), { depth: n } = r;
  return n === 0 ? t : r.pos - r.parentOffset - 1;
}
function Zs(e, t) {
  const r = e.nodeAt(t), n = e.resolve(t);
  let { depth: i } = n, o = r;
  for (; i > 0; ) {
    const a = n.node(i);
    i -= 1, i === 0 && (o = a);
  }
  return o;
}
function ec(e, t) {
  let r = t;
  for (; r && r.parentNode && r.parentNode !== e.dom; ) r = r.parentNode;
  return r;
}
const Qu = new Wt("dragHandle");
function Fv({
  pluginKey: e = Qu,
  element: t,
  editor: r,
  tippyOptions: n,
  onNodeChange: i
}) {
  const o = document.createElement("div");
  let a = null, s = !1, c = null, l = -1;
  return t.addEventListener("dragstart", (d) => {
    const { view: f } = r;
    if (!d.dataTransfer) return;
    const { empty: h, $from: p, $to: m } = f.state.selection, g = qv(d, r), v = Ba(p, m, 0), b = v.some((k) => g.find((_) => _.$from === k.$from && _.$to === k.$to)), w = h || !b ? g : v;
    if (w.length === 0) return;
    const { tr: S } = f.state, A = document.createElement("div"), E = w[0].$from.pos, N = w[w.length - 1].$to.pos, M = Ue.create(f.state.doc, E, N), I = M.content();
    w.forEach((k) => {
      const _ = zv(f.nodeDOM(k.$from.pos));
      A.append(_);
    }), A.style.position = "absolute", A.style.top = "-10000px", document.body.append(A), d.dataTransfer.clearData(), d.dataTransfer.setDragImage(A, 0, 0), f.dragging = { slice: I, move: !0 }, S.setSelection(M), f.dispatch(S), document.addEventListener("drop", () => Js(A), { once: !0 }), setTimeout(() => {
      t && (t.style.pointerEvents = "none");
    }, 0);
  }), t.addEventListener("dragend", () => {
    t && (t.style.pointerEvents = "auto");
  }), new It({
    key: typeof e == "string" ? new Wt(e) : e,
    state: {
      init: () => ({ locked: !1 }),
      apply(d, f) {
        const h = d.getMeta("lockDragHandle"), p = d.getMeta("hideDragHandle");
        if (h !== void 0 && (s = h), p && a)
          return a.hide(), s = !1, c = null, l = -1, i == null || i({ editor: r, node: null, pos: -1 }), f;
        if (d.docChanged && l !== -1 && t && a) {
          const m = d.mapping.map(l);
          m !== l && (l = m);
        }
        return f;
      }
    },
    view: (d) => {
      return f(), h(r.view.dom), a = pp(d.dom, {
        ...p(),
        ...n
      }), {
        update(A, E) {
          if (!m(t, a) || (t.draggable = !s, !g(A, E)))
            return;
          const N = v(A);
          N && b(A, N);
        },
        destroy() {
          S();
        }
      };
      function f() {
        t.draggable = !0, t.style.pointerEvents = "auto";
      }
      function h(A) {
        var E;
        (E = A.parentElement) == null || E.appendChild(o), o.appendChild(t), Object.assign(o.style, {
          pointerEvents: "none",
          position: "absolute",
          top: "0",
          left: "0"
        });
      }
      function p() {
        return {
          getReferenceClientRect: null,
          interactive: !0,
          trigger: "manual",
          placement: "left-start",
          hideOnClick: !1,
          duration: 100,
          zIndex: 10,
          appendTo: o,
          content: t,
          popperOptions: {
            modifiers: [
              { name: "flip", enabled: !1 },
              {
                name: "preventOverflow",
                options: {
                  rootBoundary: "document",
                  mainAxis: !1
                }
              }
            ]
          }
        };
      }
      function m(A, E) {
        return A && E;
      }
      function g(A, E) {
        return !A.state.doc.eq(E.doc) && l !== -1;
      }
      function v(A) {
        let E = A.nodeDOM(l);
        return E = ec(A, E), E === A.dom || (E == null ? void 0 : E.nodeType) !== 1 ? null : E;
      }
      function b(A, E) {
        const N = A.posAtDOM(E, 0), M = Zs(r.state.doc, N);
        if (M === c)
          return;
        const I = Qs(r.state.doc, N);
        c = M, l = I, i == null || i({
          editor: r,
          node: c,
          pos: l
        }), w(E);
      }
      function w(A) {
        a.setProps({
          getReferenceClientRect: () => A.getBoundingClientRect()
        }), a.show();
      }
      function S() {
        a == null || a.destroy(), t && Js(o);
      }
    },
    props: {
      handleDOMEvents: {
        mouseleave: (d, f) => {
          if (s || !h(f)) return !1;
          return p(), m(), !1;
          function h(g) {
            return g.target && !o.contains(g.relatedTarget);
          }
          function p() {
            a == null || a.hide();
          }
          function m() {
            c = null, l = -1, i == null || i({
              editor: r,
              node: null,
              pos: -1
            });
          }
        },
        mousemove: Mn((d, f) => {
          if (!t || !a || s)
            return !1;
          const h = Ju({
            x: f.clientX,
            y: f.clientY,
            direction: "right",
            editor: r
          });
          if (!h.resultElement || h.resultElement === d.dom)
            return !1;
          const p = ec(d, h.resultElement);
          if (p === d.dom || (p == null ? void 0 : p.nodeType) !== 1)
            return !1;
          const m = d.posAtDOM(p, 0), g = Zs(r.state.doc, m);
          if (g === c)
            return !1;
          const v = Qs(r.state.doc, m);
          return c = g, l = v, i == null || i({
            editor: r,
            node: c,
            pos: l
          }), a.setProps({
            getReferenceClientRect: () => p.getBoundingClientRect()
          }), a.show(), !1;
        }, 100)
      }
    }
  });
}
var fa = /* @__PURE__ */ ((e) => (e[e.max = 7] = "max", e[e.min = 0] = "min", e[e.more = 1] = "more", e[e.less = -1] = "less", e))(fa || {});
function Uv(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
function Wv(e, t, r, n) {
  const { doc: i, selection: o } = e;
  if (!i || !o || !(o instanceof Gt || o instanceof Jh))
    return e;
  const { from: a, to: s } = o;
  return i.nodesBetween(a, s, (c, l) => {
    const d = c.type;
    return r.includes(d.name) ? (e = da(e, l, t), !1) : !Qh(c.type.name, n.extensionManager.extensions);
  }), e;
}
function da(e, t, r) {
  if (!e.doc)
    return e;
  const n = e.doc.nodeAt(t);
  if (!n)
    return e;
  const a = Uv((n.attrs.indent || 0) + r, 0, 7);
  if (a === n.attrs.indent)
    return e;
  const s = {
    ...n.attrs,
    indent: a
  };
  return e.setNodeMarkup(t, n.type, s, n.marks);
}
function Z2({ delta: e, types: t }) {
  return ({ state: r, dispatch: n, editor: i }) => {
    const { selection: o } = r;
    let { tr: a } = r;
    return a = a.setSelection(o), a = Wv(a, e, t, i), a.docChanged ? (n && n(a), !0) : !1;
  };
}
function Gv(e) {
  var I, k, _;
  const { pluginKey: t = Qu } = e, { t: r } = Se(), [n, i] = re(null), [o, a] = re(-1), s = bt(null), c = bt(null), [l, d] = re(!1), f = e.editor.extensionManager.extensions.some((C) => C.name === "textAlign"), h = e.editor.extensionManager.extensions.some((C) => C.name === "indent"), p = e.editor.extensionManager.extensions.some((C) => C.name === "clear");
  me(() => {
    s.current && !e.editor.isDestroyed && (c.current = Fv({
      editor: e.editor,
      element: s.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: E
    }), e.editor.registerPlugin(c.current));
  }, [e.editor, s]);
  function m() {
    const C = e.editor.chain();
    C.setNodeSelection(o).unsetAllMarks(), (n == null ? void 0 : n.type.name) !== "paragraph" && C.setParagraph(), C.run();
  }
  function g() {
    e.editor.chain().focus().setNodeSelection(o).run(), document.execCommand("copy");
  }
  function v() {
    e.editor.commands.setNodeSelection(o);
    const { $anchor: C } = e.editor.state.selection, P = C.node(1) || e.editor.state.selection.node;
    e.editor.chain().setMeta("hideDragHandle", !0).insertContentAt(o + ((n == null ? void 0 : n.nodeSize) || 0), P.toJSON()).run();
  }
  function b(C) {
    e.editor.commands.setTextAlign(C);
  }
  function w() {
    const C = da(e.editor.state.tr, o, 1);
    C.setMeta("hideDragHandle", !0), e.editor.view.dispatch && e.editor.view.dispatch(C);
  }
  function S() {
    const C = da(e.editor.state.tr, o, -1);
    e.editor.view.dispatch && e.editor.view.dispatch(C);
  }
  function A() {
    e.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(o).deleteSelection().run();
  }
  function E(C) {
    C.node && i(C.node), a(C.pos);
  }
  function N() {
    var C;
    if (o !== -1) {
      const P = (n == null ? void 0 : n.nodeSize) || 0, $ = o + P, B = (n == null ? void 0 : n.type.name) === "paragraph" && ((C = n == null ? void 0 : n.content) == null ? void 0 : C.size) === 0, W = B ? o + 2 : $ + 2;
      e.editor.chain().command(({ dispatch: z, tr: Z, state: J }) => z ? (B ? Z.insertText("/", o, o + 1) : Z.insert(
        $,
        J.schema.nodes.paragraph.create(null, [J.schema.text("/")])
      ), z(Z)) : !0).focus(W).run();
    }
  }
  me(() => (l ? e.editor.commands.setMeta("lockDragHandle", !0) : e.editor.commands.setMeta("lockDragHandle", !1), () => {
    e.editor.commands.setMeta("lockDragHandle", !1);
  }), [l]), me(() => () => {
    c.current && (e.editor.unregisterPlugin(t), c.current = null);
  }, []), me(() => {
    var C;
    (C = e.editor) != null && C.isDestroyed && c.current && (e.editor.unregisterPlugin(t), c.current = null);
  }, [(I = e.editor) == null ? void 0 : I.isDestroyed]);
  const M = (C) => {
    e != null && e.disabled || d(C);
  };
  return /* @__PURE__ */ u(
    "div",
    {
      ref: s,
      className: `drag-handle richtext-duration-200 richtext-ease-in-out [transition-property:top,_left] ${e == null ? void 0 : e.className}`,
      style: {
        opacity: e != null && e.disabled ? 0 : 1
      },
      children: /* @__PURE__ */ O("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5 richtext-duration-200 richtext-ease-in-out [transition-property:top,_left]", children: [
        /* @__PURE__ */ u(
          Ee,
          {
            className: "!richtext-size-7 richtext-cursor-grab",
            disabled: e == null ? void 0 : e.disabled,
            onClick: N,
            size: "icon",
            type: "button",
            variant: "ghost",
            children: /* @__PURE__ */ u(
              xe,
              {
                className: "richtext-text-lg richtext-text-neutral-600 dark:richtext-text-neutral-200",
                name: "Plus"
              }
            )
          }
        ),
        /* @__PURE__ */ O(
          Sx,
          {
            onOpenChange: M,
            open: l,
            children: [
              /* @__PURE__ */ O("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
                /* @__PURE__ */ O(Nf, { children: [
                  /* @__PURE__ */ u(
                    kf,
                    {
                      asChild: !0,
                      disabled: e == null ? void 0 : e.disabled,
                      children: /* @__PURE__ */ u(
                        Ee,
                        {
                          className: "richtext-relative richtext-z-[1] !richtext-size-7 richtext-cursor-grab",
                          disabled: e == null ? void 0 : e.disabled,
                          size: "icon",
                          type: "button",
                          variant: "ghost",
                          onMouseUp: (C) => {
                            C.preventDefault(), !(e != null && e.disabled) && d(!0);
                          },
                          children: /* @__PURE__ */ u(
                            xe,
                            {
                              className: "richtext-text-sm richtext-text-neutral-600 dark:richtext-text-neutral-200",
                              name: "Grip"
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ u(Za, { children: r("editor.draghandle.tooltip") })
                ] }),
                /* @__PURE__ */ u(Ax, { className: "richtext-absolute richtext-left-0 richtext-top-0 richtext-z-0 richtext-size-[28px]" })
              ] }),
              /* @__PURE__ */ O(
                wf,
                {
                  align: "start",
                  className: "richtext-w-48",
                  side: "bottom",
                  sideOffset: 0,
                  children: [
                    /* @__PURE__ */ O(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3 richtext-bg-opacity-10 hover:richtext-bg-red-400 hover:richtext-bg-opacity-20 focus:richtext-bg-red-400 focus:richtext-bg-opacity-30 focus:richtext-text-red-500 dark:hover:richtext-bg-opacity-20 dark:hover:richtext-text-red-500",
                        onClick: A,
                        children: [
                          /* @__PURE__ */ u(xe, { name: "Trash2" }),
                          /* @__PURE__ */ u("span", { children: r("editor.remove") })
                        ]
                      }
                    ),
                    p ? /* @__PURE__ */ O(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: m,
                        children: [
                          /* @__PURE__ */ u(xe, { name: "PaintRoller" }),
                          /* @__PURE__ */ u("span", { children: r("editor.clear.tooltip") })
                        ]
                      }
                    ) : null,
                    /* @__PURE__ */ O(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: g,
                        children: [
                          /* @__PURE__ */ u(xe, { name: "Clipboard" }),
                          /* @__PURE__ */ u("span", { children: r("editor.copyToClipboard") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ O(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: v,
                        children: [
                          /* @__PURE__ */ u(xe, { name: "Copy" }),
                          /* @__PURE__ */ u("span", { children: r("editor.copy") })
                        ]
                      }
                    ),
                    f || h ? /* @__PURE__ */ u(Sf, {}) : null,
                    f ? /* @__PURE__ */ O(dc, { children: [
                      /* @__PURE__ */ O(Sa, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ u(xe, { name: "AlignCenter" }),
                        /* @__PURE__ */ u("span", { children: r("editor.textalign.tooltip") })
                      ] }),
                      /* @__PURE__ */ u(fc, { children: /* @__PURE__ */ O(Aa, { children: [
                        /* @__PURE__ */ O(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => b("left"),
                            children: [
                              /* @__PURE__ */ u(xe, { name: "AlignLeft" }),
                              /* @__PURE__ */ u("span", { children: r("editor.textalign.left.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ O(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => b("center"),
                            children: [
                              /* @__PURE__ */ u(xe, { name: "AlignCenter" }),
                              /* @__PURE__ */ u("span", { children: r("editor.textalign.center.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ O(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => b("right"),
                            children: [
                              /* @__PURE__ */ u(xe, { name: "AlignRight" }),
                              /* @__PURE__ */ u("span", { children: r("editor.textalign.right.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null,
                    h ? /* @__PURE__ */ O(dc, { children: [
                      /* @__PURE__ */ O(Sa, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ u(xe, { name: "IndentIncrease" }),
                        /* @__PURE__ */ u("span", { children: r("editor.indent") })
                      ] }),
                      /* @__PURE__ */ u(fc, { children: /* @__PURE__ */ O(Aa, { children: [
                        /* @__PURE__ */ O(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((k = n == null ? void 0 : n.attrs) == null ? void 0 : k.indent) >= fa.max,
                            onClick: w,
                            children: [
                              /* @__PURE__ */ u(xe, { name: "IndentIncrease" }),
                              /* @__PURE__ */ u("span", { children: r("editor.indent.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ O(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((_ = n == null ? void 0 : n.attrs) == null ? void 0 : _.indent) <= fa.min,
                            onClick: S,
                            children: [
                              /* @__PURE__ */ u(xe, { name: "IndentDecrease" }),
                              /* @__PURE__ */ u("span", { children: r("editor.outdent.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
const Vv = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function Kv({ item: e, disabled: t, editor: r }) {
  var i;
  const n = e.component;
  return n ? /* @__PURE__ */ u(
    n,
    {
      ...e.componentProps,
      disabled: t || ((i = e == null ? void 0 : e.componentProps) == null ? void 0 : i.disabled),
      editor: r
    }
  ) : /* @__PURE__ */ u(be, {});
}
function Yv(e) {
  const { t, lang: r } = Se(), n = ({ editor: o }) => {
    const { selection: a } = o.view.state, { $from: s, to: c } = a;
    return s.pos === c ? !1 : a instanceof Gt;
  }, i = Te(() => e.disabled || !(e != null && e.editor) ? [] : jv(e.editor, t), [e.disabled, e.editor, r, t]);
  return /* @__PURE__ */ u(
    Rt,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: n,
      tippyOptions: Vv,
      children: i != null && i.length ? /* @__PURE__ */ u("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-gap-[4px] richtext-whitespace-nowrap", children: i == null ? void 0 : i.map((o, a) => (o == null ? void 0 : o.type) === "divider" ? /* @__PURE__ */ u(
        We,
        {
          className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
          orientation: "vertical"
        },
        `bubbleMenu-divider-${a}`
      ) : /* @__PURE__ */ u(
        Kv,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: o
        },
        `bubbleMenu-text-${a}`
      )) }) }) : /* @__PURE__ */ u(be, {})
    }
  );
}
function Xv(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function Jv(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6 15h15m0 4H6m9-8h6m0-4h-6M9 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2M3 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2"
    }
  ) });
}
function Qv() {
  return /* @__PURE__ */ u(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      className: "richtext-w-4 richtext-h-4",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ u(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M5.5 3c1.404 0 2.107 0 2.611.38c.219.164.406.375.552.62C9 4.568 9 5.358 9 6.938v10.125c0 1.58 0 2.37-.337 2.937a2.1 2.1 0 0 1-.552.621c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C2 19.432 2 18.642 2 17.062V6.938c0-1.58 0-2.37.337-2.938a2.1 2.1 0 0 1 .552-.62C3.393 3 4.096 3 5.5 3M20 11.938v5.124c0 1.58 0 2.37-.337 2.938a2.1 2.1 0 0 1-.552.62c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C13 19.433 13 18.642 13 17.063V6.938c0-1.58 0-2.37.337-2.938M22 9l-6-6m6 0l-6 6",
          color: "currentColor"
        }
      )
    }
  );
}
function Zv() {
  return /* @__PURE__ */ u(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      className: "richtext-w-4 richtext-h-4",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ u(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M21 18.5c0 1.404 0 2.107-.38 2.611a2.1 2.1 0 0 1-.62.552c-.567.337-1.358.337-2.937.337H6.938c-1.58 0-2.37 0-2.938-.337a2.1 2.1 0 0 1-.62-.552C3 20.607 3 19.904 3 18.5s0-2.107.38-2.611c.163-.218.374-.406.62-.552C4.567 15 5.357 15 6.938 15h10.125c1.58 0 2.37 0 2.937.337c.246.146.457.334.62.552c.38.504.38 1.207.38 2.611M12.063 4H6.937C5.358 4 4.568 4 4 4.337a2.1 2.1 0 0 0-.62.552C3 5.393 3 6.096 3 7.5s0 2.107.38 2.611c.163.218.374.406.62.552C4.567 11 5.357 11 6.938 11h10.125c1.58 0 2.37 0 2.937-.337M21 8l-6-6m6 0l-6 6",
          color: "currentColor"
        }
      )
    }
  );
}
function ey(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function xe(e) {
  const t = Zu[e.name];
  return t ? /* @__PURE__ */ u(t, { onClick: e == null ? void 0 : e.onClick, className: `richtext-w-4 richtext-h-4 ${(e == null ? void 0 : e.className) || ""}` }) : null;
}
function ty(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function ry(e) {
  return /* @__PURE__ */ u(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      ...e,
      children: /* @__PURE__ */ u(
        "path",
        {
          fill: "currentColor",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M36 19L24 31L12 19z"
        }
      )
    }
  );
}
function ny(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function iy(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function oy(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function ay() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4" }) });
}
function sy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4" }) });
}
function cy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u("path", { fill: "currentColor", d: "M23.943 19.806a.2.2 0 0 0-.168-.034c-1.26-1.855-2.873-3.61-4.419-5.315l-.252-.284c-.001-.073-.067-.12-.134-.15l-.084-.084c-.05-.1-.169-.167-.286-.1c-.47.234-.907.585-1.327.919c-.554.434-1.109.87-1.63 1.354a5 5 0 0 0-.588.618c-.084.117-.017.217.084.267c-.37.368-.74.736-1.109 1.12a.2.2 0 0 0-.05.134c0 .05.033.1.067.117l.655.502v.016c.924.92 2.554 2.173 4.285 3.527c.251.201.52.402.773.602c.117.134.234.285.335.418c.05.066.169.084.236.033c.033.034.084.067.118.1a.24.24 0 0 0 .1.034a.15.15 0 0 0 .135-.066a.24.24 0 0 0 .033-.1c.017 0 .017.016.034.016a.2.2 0 0 0 .134-.05l3.058-3.327c.12-.116.014-.267 0-.267m-7.628-.134l-1.546-1.17l-.15-.1c-.035-.017-.068-.05-.102-.067l-.117-.1c.66-.66 1.33-1.308 2-1.956c-.488.484-1.463 1.906-1.261 2.373c.002 0 .018.042.067.084zm4.1 3.126l-1.277-.97a27 27 0 0 0-1.58-1.504c.69.518 1.277.97 1.361 1.053c.673.585.638.485 1.093.87l.554.4c-.074.103-.151.148-.151.151m.336.25l-.034-.016a1 1 0 0 0 .152-.117zM.588 3.476c.033.217.084.435.117.636c.201 1.103.403 2.106.772 2.858l.152.568c.05.217.134.485.219.552a67 67 0 0 0 3.578 2.942a.18.18 0 0 0 .219 0s0 .016.016.016a.15.15 0 0 0 .118.05a.2.2 0 0 0 .134-.05c1.798-1.989 3.142-3.627 4.1-4.998c.068-.066.084-.167.084-.25c.067-.067.118-.151.185-.201c.067-.067.067-.184 0-.235l-.017-.016c0-.033-.017-.084-.05-.1c-.42-.401-.722-.685-1.042-.986a94 94 0 0 1-2.352-2.273c-.017-.017-.034-.034-.067-.034c-.336-.117-1.025-.234-1.882-.385c-1.277-.216-3.008-.517-4.57-.986c0 0-.101 0-.118.017l-.05.05C.05.714.022.707 0 .718c.017.1.017.167.05.284c0 .033.068.301.068.334zm7.19 4.78l-.033.034a.036.036 0 0 1 .033-.034M6.553 2.238c.101.1.521.502.622.585c-.437-.2-1.529-.702-2.034-.869c.505.1 1.194.201 1.412.284M.79 1.403c.252.434.454 1.939.655 3.41c-.118-.469-.201-.936-.302-1.372C.992 2.673.84 1.988.638 1.386c.124 0 .152.021.152.017m-.286-.369c0-.016 0-.033-.017-.033c.085 0 .135.017.202.05c0 .006-.145-.017-.185-.017m23.17-.217c.017-.066-.336-.367-.219-.384c.253-.017.253-.401 0-.401c-.335.017-.688.1-1.008.15c-.587.117-1.192.234-1.78.367a80 80 0 0 0-3.949.937c-.403.117-.857.2-1.243.401c-.135.067-.118.2-.05.284c-.034.017-.051.017-.085.034c-.117.017-.218.034-.335.05c-.102.017-.152.1-.135.2c0 .017.017.05.017.067c-.706.936-1.496 1.923-2.353 2.976c-.84.969-1.73 1.989-2.62 3.042c-2.84 3.31-6.05 7.07-9.594 10.38a.16.16 0 0 0 0 .234c.016.016.033.033.05.033c-.05.05-.101.085-.152.134q-.05.05-.05.1a.4.4 0 0 0-.067.084c-.067.067-.067.184.017.234c.067.066.185.066.235-.017c.017-.017.017-.033.033-.033a.265.265 0 0 1 .37 0c.202.217.404.435.588.618l-.42-.35c-.067-.067-.184-.05-.234.016c-.068.066-.051.184.016.234l4.469 3.727c.034.034.067.034.118.034a.15.15 0 0 0 .117-.05l.101-.1c.017.016.05.016.067.016c.05 0 .084-.016.118-.05c6.049-6.05 10.922-10.614 16.5-14.693c.05-.033.067-.1.067-.15c.067 0 .118-.05.15-.117c1.026-3.125 1.228-5.9 1.295-7.27c0-.059.016-.038.016-.068c.017-.033.017-.05.017-.05a.98.98 0 0 0-.067-.619m-10.82 4.915c.268-.301.537-.619.806-.903c-1.73 2.273-4.603 5.767-8.67 9.929c2.773-3.059 5.562-6.218 7.864-9.026M5.14 23.466c-.016-.017-.016-.017 0-.017zm2.504-2.156c.135-.15.27-.284.42-.434c0 0 0 .016.017.016c-.224.198-.433.418-.437.418m.69-.668c.099-.1.14-.173.284-.318c.992-1.02 2.017-2.04 3.059-3.076l.016-.016c.252-.2.555-.418.824-.619a228 228 0 0 0-4.184 4.029M14.852 3.91c-.554.719-1.176 1.671-1.697 2.423c-1.646 2.374-6.94 8.174-7.057 8.274a1190 1190 0 0 1-4.839 4.597l-.1.1c-.085-.1-.085-.25.016-.334C8.652 11.966 13.19 6.133 15.021 3.576c-.05.116-.084.216-.168.334zm2.906 3.427c-.671-.386-.99-.987-.806-1.572l.05-.2a.8.8 0 0 1 .085-.167a1.9 1.9 0 0 1 .756-.703c.016 0 .033 0 .05-.016c-.017-.034-.017-.084-.017-.134c.017-.1.085-.167.202-.167c.202 0 .824.184 1.059.384c.067.05.134.117.202.184c.084.1.218.268.285.401c.034.017.067.184.118.268c.033.134.067.284.05.418c-.017.016 0 .116-.017.116a1.6 1.6 0 0 1-.218.619c-.03.03.006.012-.05.067a1.2 1.2 0 0 1-.32.334a1.49 1.49 0 0 1-1.26.234a2 2 0 0 0-.169-.066m4.37 1.403c0 .017-.017.05 0 .067c-.034 0-.05.017-.085.034a110 110 0 0 0-3.915 3.025c1.11-.986 2.218-1.989 3.378-2.975c.336-.301.571-.686.638-1.12l.168-1.003v-.033c.085-.201.404-.118.353.1c-.004-.001-.173.795-.537 1.905" }) });
}
function ly() {
  return /* @__PURE__ */ O("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ u("path", { fill: "currentColor", d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z" }),
    /* @__PURE__ */ u("path", { fill: "currentColor", d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z" })
  ] });
}
function uy() {
  return /* @__PURE__ */ O(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      className: "icon",
      viewBox: "0 0 1024 1024",
      children: [
        /* @__PURE__ */ u(
          "path",
          {
            fill: "currentColor",
            d: "M679.253 402.364 618.77 561.015l-60.348-158.651a30.04 30.04 0 0 0-30.447-18.637 29.76 29.76 0 0 0-30.447 18.637l-60.416 158.651-60.416-158.651a30.515 30.515 0 0 0-38.843-17.272 28.945 28.945 0 0 0-17.954 37.547l88.815 233.267c4.369 11.469 15.7 19.115 28.398 19.115a30.31 30.31 0 0 0 28.468-19.115l62.395-163.908 62.396 163.84c4.437 11.605 15.701 19.183 28.4 19.183a30.31 30.31 0 0 0 28.466-19.115l88.747-233.267a28.945 28.945 0 0 0-17.886-37.547 30.447 30.447 0 0 0-38.912 17.272zm219.478 395.605-51.883-29.218c-28.672-16.18-52.224-3.072-52.224 29.082v.273H643.209a29.833 29.833 0 0 0-30.31 29.354c0 16.18 13.584 29.218 30.31 29.218h151.825c1.092 30.516 24.03 43.077 52.224 27.648l51.063-27.989c29.013-15.906 29.15-42.189.41-58.368"
          }
        ),
        /* @__PURE__ */ u(
          "path",
          {
            fill: "currentColor",
            d: "m810.667 913.135-.478.068H201.796c-19.865 0-36.727-11.673-36.727-25.6v-618.36h154.965c51.268 0 92.911-39.39 92.911-87.858v-87.86H810.19c19.797 0 36.522 11.742 36.522 25.669V739.26h61.987V119.262c0-46.421-44.169-84.241-98.51-84.241H328.364l-225.28 194.56v658.09c0 46.285 44.236 84.105 98.713 84.105H810.19c43.759 0 80.554-24.713 93.32-58.573h-92.842zM350.89 94.89v86.562c0 16.11-13.858 29.286-30.925 29.286H216.815L350.959 94.891z"
          }
        )
      ]
    }
  );
}
function fy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ O("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", color: "currentColor", children: [
    /* @__PURE__ */ u("path", { d: "M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.2 4.2 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628c.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252c1.166.406 2.085 1.263 2.52 2.35c.27.676.27 1.523.27 3.216V10" }),
    /* @__PURE__ */ u("path", { d: "M2.75 12c0-1.84 1.506-3.333 3.364-3.333c.672 0 1.464.116 2.117-.057a1.67 1.67 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2m.002 16h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523" })
  ] }) });
}
function dy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 48 48", children: /* @__PURE__ */ O("g", { fill: "none", stroke: "currentColor", strokeWidth: "4", children: [
    /* @__PURE__ */ u("circle", { cx: "10", cy: "24", r: "4" }),
    /* @__PURE__ */ u("circle", { cx: "38", cy: "10", r: "4" }),
    /* @__PURE__ */ u("circle", { cx: "38", cy: "24", r: "4" }),
    /* @__PURE__ */ u("circle", { cx: "38", cy: "38", r: "4" }),
    /* @__PURE__ */ u("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M34 38H22V10h12M14 24h20" })
  ] }) });
}
function hy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548", color: "currentColor" }) });
}
function py() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6l1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6l-1.4-1.4z"
    }
  ) });
}
const Zu = {
  Bold: Hh,
  LoaderCircle: zh,
  Italic: jh,
  Underline: Bh,
  Quote: Dh,
  TextQuote: Jv,
  Strikethrough: _h,
  Minus: $h,
  Eraser: Lh,
  PaintRoller: Mh,
  Redo2: kh,
  Undo2: Nh,
  AlignCenter: Vh,
  AlignJustify: Gh,
  AlignLeft: Wh,
  AlignRight: Uh,
  ChevronDown: Ph,
  Subscript: Oh,
  Superscript: Ih,
  Code: Rh,
  Code2: Eh,
  Type: Th,
  IndentIncrease: Ch,
  IndentDecrease: Ah,
  List: Sh,
  ListOrdered: wh,
  ListTodo: bh,
  Link: xh,
  ImageUp: yh,
  Maximize: vh,
  Minimize: gh,
  Table: mh,
  Sparkles: ph,
  Pencil: hh,
  Unlink: dh,
  BetweenHorizonalEnd: fh,
  BetweenHorizonalStart: uh,
  BetweenVerticalStart: lh,
  BetweenVerticalEnd: ch,
  TableCellsMerge: sh,
  TableCellsSplit: ah,
  Trash2: oh,
  Trash: ih,
  Replace: bs,
  ChevronsUpDown: nh,
  LineHeight: ty,
  Word: ey,
  Heading1: rh,
  Heading2: th,
  Heading3: eh,
  Heading4: Zd,
  Heading5: Qd,
  Heading6: Jd,
  Columns2: ws,
  Columns3: Xd,
  Columns4: Yd,
  Plus: su,
  Grip: Kd,
  Copy: Vd,
  Clipboard: Gd,
  PanelLeft: Wd,
  PanelRight: Ud,
  Columns: ws,
  Iframe: Fd,
  MenuDown: ry,
  SizeS: oy,
  SizeM: iy,
  SizeL: ny,
  AspectRatio: Xv,
  Emoji: qd,
  DeleteColumn: Qv,
  DeleteRow: Zv,
  SearchAndReplace: bs,
  EmojiIcon: Hd,
  KatexIcon: zd,
  ExportPdf: ly,
  ExportWord: uy,
  ColumnAddLeft: ay,
  ColumnAddRight: sy,
  BookMarked: jd,
  Excalidraw: cy,
  ZoomIn: Bd,
  ZoomOut: Dd,
  Settings: _d,
  Eye: $d,
  Attachment: Ld,
  GifIcon: fy,
  ChevronUp: Md,
  Crop: kd,
  Mermaid: dy,
  Twitter: hy,
  CodeView: py,
  FlipX: Nd,
  FlipY: Pd,
  PencilRuler: Od,
  WrapText: Id
};
function my({ fill: e }) {
  return /* @__PURE__ */ u(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 256 256",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ u("g", { id: "icon/填充色", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ O("g", { id: "icon/背景颜色", children: [
        /* @__PURE__ */ u("g", { id: "编组", fill: "currentColor", children: /* @__PURE__ */ O(
          "g",
          {
            transform: "translate(119.502295, 137.878331) rotate(-135.000000) translate(-119.502295, -137.878331) translate(48.002295, 31.757731)",
            id: "矩形",
            children: [
              /* @__PURE__ */ u(
                "path",
                {
                  d: "M100.946943,60.8084699 L43.7469427,60.8084699 C37.2852111,60.8084699 32.0469427,66.0467383 32.0469427,72.5084699 L32.0469427,118.70847 C32.0469427,125.170201 37.2852111,130.40847 43.7469427,130.40847 L100.946943,130.40847 C107.408674,130.40847 112.646943,125.170201 112.646943,118.70847 L112.646943,72.5084699 C112.646943,66.0467383 107.408674,60.8084699 100.946943,60.8084699 Z M93.646,79.808 L93.646,111.408 L51.046,111.408 L51.046,79.808 L93.646,79.808 Z",
                  fillRule: "nonzero"
                }
              ),
              /* @__PURE__ */ u(
                "path",
                {
                  d: "M87.9366521,16.90916 L87.9194966,68.2000001 C87.9183543,69.4147389 86.9334998,70.399264 85.7187607,70.4 L56.9423078,70.4 C55.7272813,70.4 54.7423078,69.4150264 54.7423078,68.2 L54.7423078,39.4621057 C54.7423078,37.2523513 55.5736632,35.1234748 57.0711706,33.4985176 L76.4832996,12.4342613 C78.9534987,9.75382857 83.1289108,9.5834005 85.8093436,12.0535996 C87.1658473,13.303709 87.9372691,15.0644715 87.9366521,16.90916 Z",
                  fillRule: "evenodd"
                }
              ),
              /* @__PURE__ */ u(
                "path",
                {
                  d: "M131.3,111.241199 L11.7,111.241199 C5.23826843,111.241199 0,116.479467 0,122.941199 L0,200.541199 C0,207.002931 5.23826843,212.241199 11.7,212.241199 L131.3,212.241199 C137.761732,212.241199 143,207.002931 143,200.541199 L143,122.941199 C143,116.479467 137.761732,111.241199 131.3,111.241199 Z M124,130.241 L124,193.241 L19,193.241 L19,130.241 L124,130.241 Z",
                  fillRule: "nonzero"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ u(
          "path",
          {
            d: "M51,218 L205,218 C211.075132,218 216,222.924868 216,229 C216,235.075132 211.075132,240 205,240 L51,240 C44.9248678,240 40,235.075132 40,229 C40,222.924868 44.9248678,218 51,218 Z",
            id: "矩形",
            fill: e || "#FBDE28"
          }
        )
      ] }) })
    }
  );
}
function gy(e) {
  const [t, r] = re(void 0);
  function n(a) {
    var s;
    (s = e.action) == null || s.call(e, a);
  }
  function i() {
    var a;
    (a = e.action) == null || a.call(e, t);
  }
  const o = oe(
    Mn((a) => {
      r(a);
    }, 350),
    []
  );
  return /* @__PURE__ */ O("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ u(
      K,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        action: i,
        tooltipOptions: e == null ? void 0 : e.tooltipOptions,
        shortcutKeys: e == null ? void 0 : e.shortcutKeys,
        children: /* @__PURE__ */ u("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ u(my, { fill: t }) })
      }
    ),
    /* @__PURE__ */ u(
      x2,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: n,
        highlight: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ u(Ee, { variant: "ghost", size: "icon", className: "!richtext-w-3 !richtext-h-[32px]", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ u(xe, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
function vy({ editor: e, disabled: t, actions: r }) {
  var v, b, w, S, A, E, N, M, I, k, _, C, P, $, B, W, z, Z;
  const n = ({ editor: J }) => Zh(J.view.state, "table"), { t: i } = Se();
  function o() {
    e.chain().focus().addColumnBefore().run();
  }
  function a() {
    e.chain().focus().addColumnAfter().run();
  }
  function s() {
    e.chain().focus().deleteColumn().run();
  }
  function c() {
    e.chain().focus().addRowBefore().run();
  }
  function l() {
    e.chain().focus().addRowAfter().run();
  }
  function d() {
    e.chain().focus().deleteRow().run();
  }
  function f() {
    e.chain().focus().mergeCells().run();
  }
  function h() {
    e == null || e.chain().focus().splitCell().run();
  }
  function p() {
    e.chain().focus().deleteTable().run();
  }
  function m(J) {
    e.chain().focus().setTableCellBackground(J).run();
  }
  return /* @__PURE__ */ u(
    Rt,
    {
      editor: e,
      pluginKey: "table",
      shouldShow: n,
      updateDelay: 0,
      tippyOptions: {
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        maxWidth: "auto",
        getReferenceClientRect: () => {
          var De;
          const {
            view: J,
            state: {
              selection: { from: ee }
            }
          } = e, ge = J.domAtPos(ee).node;
          if (!ge)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const he = (De = ge == null ? void 0 : ge.closest) == null ? void 0 : De.call(ge, ".tableWrapper");
          return he ? he.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [mp],
        sticky: "popper"
      },
      children: t ? /* @__PURE__ */ u(be, {}) : /* @__PURE__ */ O("div", { className: "richtext-flex richtext-size-full richtext-min-w-32 richtext-flex-row richtext-items-center richtext-gap-0.5 richtext-rounded-lg !richtext-border richtext-border-border richtext-bg-background richtext-p-2 richtext-leading-none richtext-shadow-sm", children: [
        /* @__PURE__ */ u(
          K,
          {
            action: o,
            disabled: !((b = (v = e == null ? void 0 : e.can()) == null ? void 0 : v.addColumnBefore) != null && b.call(v)),
            icon: "BetweenHorizonalEnd",
            tooltip: i("editor.table.menu.insertColumnBefore"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ u(
          K,
          {
            action: a,
            disabled: !((S = (w = e == null ? void 0 : e.can()) == null ? void 0 : w.addColumnAfter) != null && S.call(w)),
            icon: "BetweenHorizonalStart",
            tooltip: i("editor.table.menu.insertColumnAfter"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ u(
          K,
          {
            action: s,
            disabled: !((E = e == null ? void 0 : (A = e.can()).deleteColumn) != null && E.call(A)),
            icon: "DeleteColumn",
            tooltip: i("editor.table.menu.deleteColumn"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ u(
          We,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ u(
          K,
          {
            action: c,
            disabled: !((M = e == null ? void 0 : (N = e.can()).addRowBefore) != null && M.call(N)),
            icon: "BetweenVerticalEnd",
            tooltip: i("editor.table.menu.insertRowAbove"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ u(
          K,
          {
            action: l,
            disabled: !((k = (I = e == null ? void 0 : e.can()) == null ? void 0 : I.addRowAfter) != null && k.call(I)),
            icon: "BetweenVerticalStart",
            tooltip: i("editor.table.menu.insertRowBelow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ u(
          K,
          {
            action: d,
            disabled: !((C = (_ = e == null ? void 0 : e.can()) == null ? void 0 : _.deleteRow) != null && C.call(_)),
            icon: "DeleteRow",
            tooltip: i("editor.table.menu.deleteRow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ u(
          We,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ u(
          K,
          {
            action: f,
            disabled: !(($ = (P = e == null ? void 0 : e.can()) == null ? void 0 : P.mergeCells) != null && $.call(P)),
            icon: "TableCellsMerge",
            tooltip: i("editor.table.menu.mergeCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ u(
          K,
          {
            action: h,
            disabled: !((W = (B = e == null ? void 0 : e.can()) == null ? void 0 : B.splitCell) != null && W.call(B)),
            icon: "TableCellsSplit",
            tooltip: i("editor.table.menu.splitCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ u(
          We,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ u(
          gy,
          {
            action: m,
            editor: e,
            tooltip: i("editor.table.menu.setCellsBgColor"),
            tooltipOptions: {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ u(
          K,
          {
            action: p,
            disabled: !((Z = (z = e == null ? void 0 : e.can()) == null ? void 0 : z.deleteTable) != null && Z.call(z)),
            icon: "Trash2",
            tooltip: i("editor.table.menu.deleteTable"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        r && r.map((J, ee) => /* @__PURE__ */ u(
          K,
          {
            ...J
          },
          ee
        ))
      ] })
    }
  );
}
const yy = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", xy = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Ft = (e, t) => {
  for (const r in t)
    e[r] = t[r];
  return e;
}, ha = "numeric", pa = "ascii", ma = "alpha", ar = "asciinumeric", ir = "alphanumeric", ga = "domain", ef = "emoji", by = "scheme", wy = "slashscheme", ai = "whitespace";
function Sy(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Tt(e, t, r) {
  t[ha] && (t[ar] = !0, t[ir] = !0), t[pa] && (t[ar] = !0, t[ma] = !0), t[ar] && (t[ir] = !0), t[ma] && (t[ir] = !0), t[ir] && (t[ga] = !0), t[ef] && (t[ga] = !0);
  for (const n in t) {
    const i = Sy(n, r);
    i.indexOf(e) < 0 && i.push(e);
  }
}
function Ay(e, t) {
  const r = {};
  for (const n in t)
    t[n].indexOf(e) >= 0 && (r[n] = !0);
  return r;
}
function Ie(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
Ie.groups = {};
Ie.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(e) {
    const t = this, r = t.j[e];
    if (r)
      return r;
    for (let n = 0; n < t.jr.length; n++) {
      const i = t.jr[n][0], o = t.jr[n][1];
      if (o && i.test(e))
        return o;
    }
    return t.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(e, t = !1) {
    return t ? e in this.j : !!this.go(e);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(e, t, r, n) {
    for (let i = 0; i < e.length; i++)
      this.tt(e[i], t, r, n);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(e, t, r, n) {
    n = n || Ie.groups;
    let i;
    return t && t.j ? i = t : (i = new Ie(t), r && n && Tt(t, r, n)), this.jr.push([e, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(e, t, r, n) {
    let i = this;
    const o = e.length;
    if (!o)
      return i;
    for (let a = 0; a < o - 1; a++)
      i = i.tt(e[a]);
    return i.tt(e[o - 1], t, r, n);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(e, t, r, n) {
    n = n || Ie.groups;
    const i = this;
    if (t && t.j)
      return i.j[e] = t, t;
    const o = t;
    let a, s = i.go(e);
    if (s ? (a = new Ie(), Ft(a.j, s.j), a.jr.push.apply(a.jr, s.jr), a.jd = s.jd, a.t = s.t) : a = new Ie(), o) {
      if (n)
        if (a.t && typeof a.t == "string") {
          const c = Ft(Ay(a.t, n), r);
          Tt(o, c, n);
        } else r && Tt(o, r, n);
      a.t = o;
    }
    return i.j[e] = a, a;
  }
};
const V = (e, t, r, n, i) => e.ta(t, r, n, i), de = (e, t, r, n, i) => e.tr(t, r, n, i), tc = (e, t, r, n, i) => e.ts(t, r, n, i), R = (e, t, r, n, i) => e.tt(t, r, n, i), rt = "WORD", va = "UWORD", tf = "ASCIINUMERICAL", rf = "ALPHANUMERICAL", yr = "LOCALHOST", ya = "TLD", xa = "UTLD", Hr = "SCHEME", Bt = "SLASH_SCHEME", za = "NUM", ba = "WS", Ha = "NL", sr = "OPENBRACE", cr = "CLOSEBRACE", Jr = "OPENBRACKET", Qr = "CLOSEBRACKET", Zr = "OPENPAREN", en = "CLOSEPAREN", tn = "OPENANGLEBRACKET", rn = "CLOSEANGLEBRACKET", nn = "FULLWIDTHLEFTPAREN", on = "FULLWIDTHRIGHTPAREN", an = "LEFTCORNERBRACKET", sn = "RIGHTCORNERBRACKET", cn = "LEFTWHITECORNERBRACKET", ln = "RIGHTWHITECORNERBRACKET", un = "FULLWIDTHLESSTHAN", fn = "FULLWIDTHGREATERTHAN", dn = "AMPERSAND", qa = "APOSTROPHE", hn = "ASTERISK", vt = "AT", pn = "BACKSLASH", mn = "BACKTICK", gn = "CARET", yt = "COLON", Fa = "COMMA", vn = "DOLLAR", qe = "DOT", yn = "EQUALS", Ua = "EXCLAMATION", Me = "HYPHEN", lr = "PERCENT", xn = "PIPE", bn = "PLUS", wn = "POUND", ur = "QUERY", Wa = "QUOTE", nf = "FULLWIDTHMIDDLEDOT", Ga = "SEMI", Fe = "SLASH", fr = "TILDE", Sn = "UNDERSCORE", of = "EMOJI", An = "SYM";
var af = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: rt,
  UWORD: va,
  ASCIINUMERICAL: tf,
  ALPHANUMERICAL: rf,
  LOCALHOST: yr,
  TLD: ya,
  UTLD: xa,
  SCHEME: Hr,
  SLASH_SCHEME: Bt,
  NUM: za,
  WS: ba,
  NL: Ha,
  OPENBRACE: sr,
  CLOSEBRACE: cr,
  OPENBRACKET: Jr,
  CLOSEBRACKET: Qr,
  OPENPAREN: Zr,
  CLOSEPAREN: en,
  OPENANGLEBRACKET: tn,
  CLOSEANGLEBRACKET: rn,
  FULLWIDTHLEFTPAREN: nn,
  FULLWIDTHRIGHTPAREN: on,
  LEFTCORNERBRACKET: an,
  RIGHTCORNERBRACKET: sn,
  LEFTWHITECORNERBRACKET: cn,
  RIGHTWHITECORNERBRACKET: ln,
  FULLWIDTHLESSTHAN: un,
  FULLWIDTHGREATERTHAN: fn,
  AMPERSAND: dn,
  APOSTROPHE: qa,
  ASTERISK: hn,
  AT: vt,
  BACKSLASH: pn,
  BACKTICK: mn,
  CARET: gn,
  COLON: yt,
  COMMA: Fa,
  DOLLAR: vn,
  DOT: qe,
  EQUALS: yn,
  EXCLAMATION: Ua,
  HYPHEN: Me,
  PERCENT: lr,
  PIPE: xn,
  PLUS: bn,
  POUND: wn,
  QUERY: ur,
  QUOTE: Wa,
  FULLWIDTHMIDDLEDOT: nf,
  SEMI: Ga,
  SLASH: Fe,
  TILDE: fr,
  UNDERSCORE: Sn,
  EMOJI: of,
  SYM: An
});
const et = /[a-z]/, rr = new RegExp("\\p{L}", "u"), si = new RegExp("\\p{Emoji}", "u"), tt = /\d/, ci = /\s/, rc = "\r", li = `
`, Cy = "️", Ty = "‍", ui = "￼";
let kr = null, Mr = null;
function Ey(e = []) {
  const t = {};
  Ie.groups = t;
  const r = new Ie();
  kr == null && (kr = nc(yy)), Mr == null && (Mr = nc(xy)), R(r, "'", qa), R(r, "{", sr), R(r, "}", cr), R(r, "[", Jr), R(r, "]", Qr), R(r, "(", Zr), R(r, ")", en), R(r, "<", tn), R(r, ">", rn), R(r, "（", nn), R(r, "）", on), R(r, "「", an), R(r, "」", sn), R(r, "『", cn), R(r, "』", ln), R(r, "＜", un), R(r, "＞", fn), R(r, "&", dn), R(r, "*", hn), R(r, "@", vt), R(r, "`", mn), R(r, "^", gn), R(r, ":", yt), R(r, ",", Fa), R(r, "$", vn), R(r, ".", qe), R(r, "=", yn), R(r, "!", Ua), R(r, "-", Me), R(r, "%", lr), R(r, "|", xn), R(r, "+", bn), R(r, "#", wn), R(r, "?", ur), R(r, '"', Wa), R(r, "/", Fe), R(r, ";", Ga), R(r, "~", fr), R(r, "_", Sn), R(r, "\\", pn), R(r, "・", nf);
  const n = de(r, tt, za, {
    [ha]: !0
  });
  de(n, tt, n);
  const i = de(n, et, tf, {
    [ar]: !0
  }), o = de(n, rr, rf, {
    [ir]: !0
  }), a = de(r, et, rt, {
    [pa]: !0
  });
  de(a, tt, i), de(a, et, a), de(i, tt, i), de(i, et, i);
  const s = de(r, rr, va, {
    [ma]: !0
  });
  de(s, et), de(s, tt, o), de(s, rr, s), de(o, tt, o), de(o, et), de(o, rr, o);
  const c = R(r, li, Ha, {
    [ai]: !0
  }), l = R(r, rc, ba, {
    [ai]: !0
  }), d = de(r, ci, ba, {
    [ai]: !0
  });
  R(r, ui, d), R(l, li, c), R(l, ui, d), de(l, ci, d), R(d, rc), R(d, li), de(d, ci, d), R(d, ui, d);
  const f = de(r, si, of, {
    [ef]: !0
  });
  R(f, "#"), de(f, si, f), R(f, Cy, f);
  const h = R(f, Ty);
  R(h, "#"), de(h, si, f);
  const p = [[et, a], [tt, i]], m = [[et, null], [rr, s], [tt, o]];
  for (let g = 0; g < kr.length; g++)
    mt(r, kr[g], ya, rt, p);
  for (let g = 0; g < Mr.length; g++)
    mt(r, Mr[g], xa, va, m);
  Tt(ya, {
    tld: !0,
    ascii: !0
  }, t), Tt(xa, {
    utld: !0,
    alpha: !0
  }, t), mt(r, "file", Hr, rt, p), mt(r, "mailto", Hr, rt, p), mt(r, "http", Bt, rt, p), mt(r, "https", Bt, rt, p), mt(r, "ftp", Bt, rt, p), mt(r, "ftps", Bt, rt, p), Tt(Hr, {
    scheme: !0,
    ascii: !0
  }, t), Tt(Bt, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((g, v) => g[0] > v[0] ? 1 : -1);
  for (let g = 0; g < e.length; g++) {
    const v = e[g][0], w = e[g][1] ? {
      [by]: !0
    } : {
      [wy]: !0
    };
    v.indexOf("-") >= 0 ? w[ga] = !0 : et.test(v) ? tt.test(v) ? w[ar] = !0 : w[pa] = !0 : w[ha] = !0, tc(r, v, v, w);
  }
  return tc(r, "localhost", yr, {
    ascii: !0
  }), r.jd = new Ie(An), {
    start: r,
    tokens: Ft({
      groups: t
    }, af)
  };
}
function sf(e, t) {
  const r = Ry(t.replace(/[A-Z]/g, (s) => s.toLowerCase())), n = r.length, i = [];
  let o = 0, a = 0;
  for (; a < n; ) {
    let s = e, c = null, l = 0, d = null, f = -1, h = -1;
    for (; a < n && (c = s.go(r[a])); )
      s = c, s.accepts() ? (f = 0, h = 0, d = s) : f >= 0 && (f += r[a].length, h++), l += r[a].length, o += r[a].length, a++;
    o -= f, a -= h, l -= f, i.push({
      t: d.t,
      // token type/name
      v: t.slice(o - l, o),
      // string value
      s: o - l,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function Ry(e) {
  const t = [], r = e.length;
  let n = 0;
  for (; n < r; ) {
    let i = e.charCodeAt(n), o, a = i < 55296 || i > 56319 || n + 1 === r || (o = e.charCodeAt(n + 1)) < 56320 || o > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(a), n += a.length;
  }
  return t;
}
function mt(e, t, r, n, i) {
  let o;
  const a = t.length;
  for (let s = 0; s < a - 1; s++) {
    const c = t[s];
    e.j[c] ? o = e.j[c] : (o = new Ie(n), o.jr = i.slice(), e.j[c] = o), e = o;
  }
  return o = new Ie(r), o.jr = i.slice(), e.j[t[a - 1]] = o, o;
}
function nc(e) {
  const t = [], r = [];
  let n = 0, i = "0123456789";
  for (; n < e.length; ) {
    let o = 0;
    for (; i.indexOf(e[n + o]) >= 0; )
      o++;
    if (o > 0) {
      t.push(r.join(""));
      for (let a = parseInt(e.substring(n, n + o), 10); a > 0; a--)
        r.pop();
      n += o;
    } else
      r.push(e[n]), n++;
  }
  return t;
}
const xr = {
  defaultProtocol: "http",
  events: null,
  format: ic,
  formatHref: ic,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Va(e, t = null) {
  let r = Ft({}, xr);
  e && (r = Ft(r, e instanceof Va ? e.o : e));
  const n = r.ignoreTags, i = [];
  for (let o = 0; o < n.length; o++)
    i.push(n[o].toUpperCase());
  this.o = r, t && (this.defaultRender = t), this.ignoreTags = i;
}
Va.prototype = {
  o: xr,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(e) {
    return e;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(e) {
    return this.get("validate", e.toString(), e);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(e, t, r) {
    const n = t != null;
    let i = this.o[e];
    return i && (typeof i == "object" ? (i = r.t in i ? i[r.t] : xr[e], typeof i == "function" && n && (i = i(t, r))) : typeof i == "function" && n && (i = i(t, r.t, r)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(e, t, r) {
    let n = this.o[e];
    return typeof n == "function" && t != null && (n = n(t, r.t, r)), n;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(e) {
    const t = e.render(this);
    return (this.get("render", null, e) || this.defaultRender)(t, e.t, e);
  }
};
function ic(e) {
  return e;
}
function cf(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
cf.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(e) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(e) {
    const t = this.toString(), r = e.get("truncate", t, this), n = e.get("format", t, this);
    return r && n.length > r ? n.substring(0, r) + "…" : n;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(e) {
    return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(e = xr.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(e) {
    return {
      type: this.t,
      value: this.toFormattedString(e),
      isLink: this.isLink,
      href: this.toFormattedHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(e) {
    return e.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(e) {
    const t = this, r = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", r, this), i = e.get("tagName", r, t), o = this.toFormattedString(e), a = {}, s = e.get("className", r, t), c = e.get("target", r, t), l = e.get("rel", r, t), d = e.getObj("attributes", r, t), f = e.getObj("events", r, t);
    return a.href = n, s && (a.class = s), c && (a.target = c), l && (a.rel = l), d && Ft(a, d), {
      tagName: i,
      attributes: a,
      content: o,
      eventListeners: f
    };
  }
};
function Ln(e, t) {
  class r extends cf {
    constructor(i, o) {
      super(i, o), this.t = e;
    }
  }
  for (const n in t)
    r.prototype[n] = t[n];
  return r.t = e, r;
}
const oc = Ln("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), ac = Ln("text"), Iy = Ln("nl"), Lr = Ln("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(e = xr.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== yr && e[1].t === yt;
  }
}), ke = (e) => new Ie(e);
function Oy({
  groups: e
}) {
  const t = e.domain.concat([dn, hn, vt, pn, mn, gn, vn, yn, Me, za, lr, xn, bn, wn, Fe, An, fr, Sn]), r = [yt, Fa, qe, Ua, lr, ur, Wa, Ga, tn, rn, sr, cr, Qr, Jr, Zr, en, nn, on, an, sn, cn, ln, un, fn], n = [dn, qa, hn, pn, mn, gn, vn, yn, Me, sr, cr, lr, xn, bn, wn, ur, Fe, An, fr, Sn], i = ke(), o = R(i, fr);
  V(o, n, o), V(o, e.domain, o);
  const a = ke(), s = ke(), c = ke();
  V(i, e.domain, a), V(i, e.scheme, s), V(i, e.slashscheme, c), V(a, n, o), V(a, e.domain, a);
  const l = R(a, vt);
  R(o, vt, l), R(s, vt, l), R(c, vt, l);
  const d = R(o, qe);
  V(d, n, o), V(d, e.domain, o);
  const f = ke();
  V(l, e.domain, f), V(f, e.domain, f);
  const h = R(f, qe);
  V(h, e.domain, f);
  const p = ke(oc);
  V(h, e.tld, p), V(h, e.utld, p), R(l, yr, p);
  const m = R(f, Me);
  R(m, Me, m), V(m, e.domain, f), V(p, e.domain, f), R(p, qe, h), R(p, Me, m);
  const g = R(p, yt);
  V(g, e.numeric, oc);
  const v = R(a, Me), b = R(a, qe);
  R(v, Me, v), V(v, e.domain, a), V(b, n, o), V(b, e.domain, a);
  const w = ke(Lr);
  V(b, e.tld, w), V(b, e.utld, w), V(w, e.domain, a), V(w, n, o), R(w, qe, b), R(w, Me, v), R(w, vt, l);
  const S = R(w, yt), A = ke(Lr);
  V(S, e.numeric, A);
  const E = ke(Lr), N = ke();
  V(E, t, E), V(E, r, N), V(N, t, E), V(N, r, N), R(w, Fe, E), R(A, Fe, E);
  const M = R(s, yt), I = R(c, yt), k = R(I, Fe), _ = R(k, Fe);
  V(s, e.domain, a), R(s, qe, b), R(s, Me, v), V(c, e.domain, a), R(c, qe, b), R(c, Me, v), V(M, e.domain, E), R(M, Fe, E), R(M, ur, E), V(_, e.domain, E), V(_, t, E), R(_, Fe, E);
  const C = [
    [sr, cr],
    // {}
    [Jr, Qr],
    // []
    [Zr, en],
    // ()
    [tn, rn],
    // <>
    [nn, on],
    // （）
    [an, sn],
    // 「」
    [cn, ln],
    // 『』
    [un, fn]
    // ＜＞
  ];
  for (let P = 0; P < C.length; P++) {
    const [$, B] = C[P], W = R(E, $);
    R(N, $, W), R(W, B, E);
    const z = ke(Lr);
    V(W, t, z);
    const Z = ke();
    V(W, r), V(z, t, z), V(z, r, Z), V(Z, t, z), V(Z, r, Z), R(z, B, E), R(Z, B, E);
  }
  return R(i, yr, w), R(i, Ha, Iy), {
    start: i,
    tokens: af
  };
}
function Py(e, t, r) {
  let n = r.length, i = 0, o = [], a = [];
  for (; i < n; ) {
    let s = e, c = null, l = null, d = 0, f = null, h = -1;
    for (; i < n && !(c = s.go(r[i].t)); )
      a.push(r[i++]);
    for (; i < n && (l = c || s.go(r[i].t)); )
      c = null, s = l, s.accepts() ? (h = 0, f = s) : h >= 0 && h++, i++, d++;
    if (h < 0)
      i -= d, i < n && (a.push(r[i]), i++);
    else {
      a.length > 0 && (o.push(fi(ac, t, a)), a = []), i -= h, d -= h;
      const p = f.t, m = r.slice(i - d, i);
      o.push(fi(p, t, m));
    }
  }
  return a.length > 0 && o.push(fi(ac, t, a)), o;
}
function fi(e, t, r) {
  const n = r[0].s, i = r[r.length - 1].e, o = t.slice(n, i);
  return new e(o, r);
}
const Ny = typeof console < "u" && console && console.warn || (() => {
}), ky = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ue = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function My() {
  return Ie.groups = {}, ue.scanner = null, ue.parser = null, ue.tokenQueue = [], ue.pluginQueue = [], ue.customSchemes = [], ue.initialized = !1, ue;
}
function sc(e, t = !1) {
  if (ue.initialized && Ny(`linkifyjs: already initialized - will not register custom scheme "${e}" ${ky}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ue.customSchemes.push([e, t]);
}
function Ly() {
  ue.scanner = Ey(ue.customSchemes);
  for (let e = 0; e < ue.tokenQueue.length; e++)
    ue.tokenQueue[e][1]({
      scanner: ue.scanner
    });
  ue.parser = Oy(ue.scanner.tokens);
  for (let e = 0; e < ue.pluginQueue.length; e++)
    ue.pluginQueue[e][1]({
      scanner: ue.scanner,
      parser: ue.parser
    });
  return ue.initialized = !0, ue;
}
function Ka(e) {
  return ue.initialized || Ly(), Py(ue.parser.start, e, sf(ue.scanner.start, e));
}
Ka.scan = sf;
function lf(e, t = null, r = null) {
  if (t && typeof t == "object") {
    if (r)
      throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
    r = t, t = null;
  }
  const n = new Va(r), i = Ka(e), o = [];
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    s.isLink && (!t || s.t === t) && n.check(s) && o.push(s.toFormattedObject(n));
  }
  return o;
}
function $y(e) {
  return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function _y(e) {
  return new It({
    key: new Wt("autolink"),
    appendTransaction: (t, r, n) => {
      const i = t.some((l) => l.docChanged) && !r.doc.eq(n.doc), o = t.some((l) => l.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: a } = n, s = rp(r.doc, [...t]);
      if (np(s).forEach(({ newRange: l }) => {
        const d = ip(n.doc, l, (p) => p.isTextblock);
        let f, h;
        if (d.length > 1 ? (f = d[0], h = n.doc.textBetween(f.pos, f.pos + f.node.nodeSize, void 0, " ")) : d.length && n.doc.textBetween(l.from, l.to, " ", " ").endsWith(" ") && (f = d[0], h = n.doc.textBetween(f.pos, l.to, void 0, " ")), f && h) {
          const p = h.split(" ").filter((b) => b !== "");
          if (p.length <= 0)
            return !1;
          const m = p[p.length - 1], g = f.pos + h.lastIndexOf(m);
          if (!m)
            return !1;
          const v = Ka(m).map((b) => b.toObject(e.defaultProtocol));
          if (!$y(v))
            return !1;
          v.filter((b) => b.isLink).map((b) => ({
            ...b,
            from: g + b.start + 1,
            to: g + b.end + 1
          })).filter((b) => n.schema.marks.code ? !n.doc.rangeHasMark(b.from, b.to, n.schema.marks.code) : !0).filter((b) => e.validate(b.value)).filter((b) => e.shouldAutoLink(b.value)).forEach((b) => {
            op(b.from, b.to, n.doc).some((w) => w.mark.type === e.type) || a.addMark(b.from, b.to, e.type.create({
              href: b.href
            }));
          });
        }
      }), !!a.steps.length)
        return a;
    }
  });
}
function Dy(e) {
  return new It({
    key: new Wt("handleClickLink"),
    props: {
      handleClick: (t, r, n) => {
        var i, o;
        if (n.button !== 0 || !t.editable)
          return !1;
        let a = n.target;
        const s = [];
        for (; a.nodeName !== "DIV"; )
          s.push(a), a = a.parentNode;
        if (!s.find((h) => h.nodeName === "A"))
          return !1;
        const c = ap(t.state, e.type.name), l = n.target, d = (i = l == null ? void 0 : l.href) !== null && i !== void 0 ? i : c.href, f = (o = l == null ? void 0 : l.target) !== null && o !== void 0 ? o : c.target;
        return l && d ? (window.open(d, f), !0) : !1;
      }
    }
  });
}
function By(e) {
  return new It({
    key: new Wt("handlePasteLink"),
    props: {
      handlePaste: (t, r, n) => {
        const { state: i } = t, { selection: o } = i, { empty: a } = o;
        if (a)
          return !1;
        let s = "";
        n.content.forEach((l) => {
          s += l.textContent;
        });
        const c = lf(s, { defaultProtocol: e.defaultProtocol }).find((l) => l.isLink && l.value === s);
        return !s || !c ? !1 : e.editor.commands.setMark(e.type, {
          href: c.href
        });
      }
    }
  });
}
const jy = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g;
function Ct(e, t) {
  const r = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  return t && t.forEach((n) => {
    const i = typeof n == "string" ? n : n.scheme;
    i && r.push(i);
  }), !e || e.replace(jy, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${r.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const zy = ep.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
      if (typeof e == "string") {
        sc(e);
        return;
      }
      sc(e.scheme, e.optionalSlashes);
    });
  },
  onDestroy() {
    My();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (e, t) => !!Ct(e, t.protocols),
      validate: (e) => !!e,
      shouldAutoLink: (e) => !!e
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(e) {
          return e.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (e) => {
          const t = e.getAttribute("href");
          return !t || !this.options.isAllowedUri(t, {
            defaultValidate: (r) => !!Ct(r, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return this.options.isAllowedUri(e.href, {
      defaultValidate: (t) => !!Ct(t, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", it(this.options.HTMLAttributes, e), 0] : [
      "a",
      it(this.options.HTMLAttributes, { ...e, href: "" }),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (e) => ({ chain: t }) => {
        const { href: r } = e;
        return this.options.isAllowedUri(r, {
          defaultValidate: (n) => !!Ct(n, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? t().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (e) => ({ chain: t }) => {
        const { href: r } = e;
        return this.options.isAllowedUri(r, {
          defaultValidate: (n) => !!Ct(n, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? t().toggleMark(this.name, e, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run() : !1;
      },
      unsetLink: () => ({ chain: e }) => e().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      tp({
        find: (e) => {
          const t = [];
          if (e) {
            const { protocols: r, defaultProtocol: n } = this.options, i = lf(e).filter((o) => o.isLink && this.options.isAllowedUri(o.value, {
              defaultValidate: (a) => !!Ct(a, r),
              protocols: r,
              defaultProtocol: n
            }));
            i.length && i.forEach((o) => t.push({
              text: o.value,
              data: {
                href: o.href
              },
              index: o.start
            }));
          }
          return t;
        },
        type: this.type,
        getAttributes: (e) => {
          var t;
          return {
            href: (t = e.data) === null || t === void 0 ? void 0 : t.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const e = [], { protocols: t, defaultProtocol: r } = this.options;
    return this.options.autolink && e.push(_y({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (n) => this.options.isAllowedUri(n, {
        defaultValidate: (i) => !!Ct(i, t),
        protocols: t,
        defaultProtocol: r
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && e.push(Dy({
      type: this.type
    })), this.options.linkOnPaste && e.push(By({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), e;
  }
});
function Hy(e) {
  const [t, r] = re(!1);
  function n(i, o, a) {
    e.action && (e.action({ link: i, text: o, openInNewTab: a }), r(!1));
  }
  return /* @__PURE__ */ O(Sr, { modal: !0, open: t, onOpenChange: r, children: [
    /* @__PURE__ */ u(Ar, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ u(
      K,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ u(xe, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ u(Kt, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ u(uf, { editor: e.editor, onSetLink: n }) })
  ] });
}
const qy = /* @__PURE__ */ zy.extend({
  inclusive: !1,
  parseHTML() {
    return [
      {
        tag: 'a[href]:not([data-type="button"]):not([href *= "javascript:" i])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [
      "a",
      it(this.options.HTMLAttributes, e, {
        class: "link"
      }),
      0
    ];
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      openOnClick: !0,
      button: ({ editor: t, t: r }) => ({
        component: Hy,
        componentProps: {
          editor: t,
          action: (n) => {
            const { link: i, text: o, openInNewTab: a } = n, { state: s } = t, { from: c } = s.selection, l = o.length, d = c + l;
            t.chain().extendMarkRange("link").insertContent({
              type: "text",
              text: o,
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: i,
                    target: a ? "_blank" : ""
                  }
                }
              ]
            }).setLink({ href: i }).setTextSelection({ from: c, to: d }).focus().run();
          },
          id: "linkk",
          isActive: () => t.isActive("link") || !1,
          disabled: !t.can().setLink({ href: "" }),
          icon: "Link",
          tooltip: r("editor.link.tooltip")
        }
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      new It({
        props: {
          handleClick: (e, t) => {
            const { schema: r, doc: n, tr: i } = e.state, o = sp(n.resolve(t), r.marks.link);
            if (!o)
              return !1;
            const a = n.resolve(o.from), s = n.resolve(o.to), c = i.setSelection(
              new Gt(a, s)
            );
            e.dispatch(c);
          }
        }
      })
    ];
  }
});
function uf(e) {
  const { t } = Se(), [r, n] = re({
    text: "",
    link: ""
  }), [i, o] = re(!1);
  me(() => {
    const s = () => {
      var c, l, d;
      if ((c = e.editor) != null && c.isActive("link")) {
        const { href: f, target: h } = e.editor.getAttributes("link"), { from: p, to: m } = e.editor.state.selection, g = e.editor.state.doc.textBetween(p, m, " ");
        n({ link: f || "", text: g }), o(h === "_blank");
      } else {
        const f = (l = e.editor.extensionManager.extensions.find(
          (h) => h.name === qy.name
        )) == null ? void 0 : l.options;
        o(((d = f == null ? void 0 : f.HTMLAttributes) == null ? void 0 : d.target) === "_blank");
      }
    };
    return s(), e.editor.on("selectionUpdate", s), () => {
      e.editor.off("selectionUpdate", s);
    };
  }, [e.editor]);
  function a(s) {
    s.preventDefault(), s.stopPropagation(), e == null || e.onSetLink(r.link, r.text, i), n({ text: "", link: "" });
  }
  return /* @__PURE__ */ u("div", { className: "border-neutral-200 richtext-rounded-lg !richtext-border richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ O("div", { className: "richtext-flex richtext-flex-col richtext-gap-2", children: [
    /* @__PURE__ */ u(xt, { className: "mb-[6px]", children: t("editor.link.dialog.text") }),
    /* @__PURE__ */ u("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ u(
      ze,
      {
        className: "richtext-w-80",
        onChange: (s) => n({ ...r, text: s.target.value }),
        placeholder: "Text",
        required: !0,
        type: "text",
        value: r.text
      }
    ) }) }),
    /* @__PURE__ */ u(xt, { className: "mb-[6px]", children: t("editor.link.dialog.link") }),
    /* @__PURE__ */ u("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ O("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: [
      /* @__PURE__ */ u(
        ze,
        {
          className: "richtext-pl-10",
          onChange: (s) => n({ ...r, link: s.target.value }),
          required: !0,
          type: "url",
          value: r.link
        }
      ),
      /* @__PURE__ */ u("span", { className: "richtext-absolute richtext-inset-y-0 richtext-start-0 richtext-flex richtext-items-center richtext-justify-center richtext-px-2", children: /* @__PURE__ */ u(
        xe,
        {
          className: "richtext-size-5 richtext-text-muted-foreground",
          name: "Link"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ O("div", { className: "richtext-flex richtext-items-center richtext-space-x-2", children: [
      /* @__PURE__ */ u(xt, { children: t("editor.link.dialog.openInNewTab") }),
      /* @__PURE__ */ u(
        Af,
        {
          checked: i,
          onCheckedChange: (s) => {
            o(s);
          }
        }
      )
    ] }),
    /* @__PURE__ */ u(
      Ee,
      {
        className: "richtext-mt-2 richtext-self-end",
        onClick: a,
        type: "button",
        children: t("editor.link.dialog.button.apply")
      }
    )
  ] }) });
}
function Fy(e) {
  const { t } = Se();
  return /* @__PURE__ */ O("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
    /* @__PURE__ */ u(
      "a",
      {
        href: e == null ? void 0 : e.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "richtext-text-sm richtext-underline richtext-break-all",
        children: X0(e == null ? void 0 : e.link, {
          length: 50,
          omission: "…"
        })
      }
    ),
    (e == null ? void 0 : e.link) && /* @__PURE__ */ u(We, { orientation: "vertical", className: "!richtext-h-4" }),
    /* @__PURE__ */ O("div", { className: "richtext-flex richtext-flex-nowrap", children: [
      /* @__PURE__ */ u(
        K,
        {
          icon: "Pencil",
          tooltip: t("editor.link.edit.tooltip"),
          action: () => {
            e == null || e.onEdit();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      ),
      /* @__PURE__ */ u(
        K,
        {
          icon: "Unlink",
          tooltip: t("editor.link.unlink.tooltip"),
          action: () => {
            e == null || e.onClear();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      )
    ] })
  ] });
}
function Uy({ editor: e, disabled: t }) {
  const [r, n] = re(!1), i = Te(() => {
    const { href: c } = e.getAttributes("link");
    return c;
  }, [e]), o = oe(({ editor: c }) => c.isActive("link"), []), a = (c, l, d) => {
    const f = e.state.selection, { from: h } = f, p = (l == null ? void 0 : l.length) ?? 0, m = h + p;
    e.chain().extendMarkRange("link").insertContent({
      type: "text",
      text: l,
      marks: [
        {
          type: "link",
          attrs: {
            href: c,
            target: d ? "_blank" : ""
          }
        }
      ]
    }).setLink({ href: c }).setTextSelection({ from: h, to: m }).focus().run(), n(!1);
  }, s = oe(() => {
    e.chain().extendMarkRange("link").unsetLink().focus().run(), n(!1);
  }, [e]);
  return /* @__PURE__ */ u(be, { children: /* @__PURE__ */ u(
    Rt,
    {
      editor: e,
      shouldShow: o,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          n(!1);
        }
      },
      children: t ? /* @__PURE__ */ u(be, {}) : /* @__PURE__ */ u(be, { children: r ? /* @__PURE__ */ u(uf, { onSetLink: a, editor: e }) : /* @__PURE__ */ u(
        Fy,
        {
          editor: e,
          onClear: s,
          onEdit: () => {
            n(!0);
          },
          link: i
        }
      ) })
    }
  ) });
}
const Wy = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, ff = In.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["img", it(this.options.HTMLAttributes, e)];
  },
  addCommands() {
    return {
      setImage: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      })
    };
  },
  addInputRules() {
    return [
      du({
        find: Wy,
        type: this.type,
        getAttributes: (e) => {
          const [, , t, r, n] = e;
          return { src: r, alt: t, title: n };
        }
      })
    ];
  }
}), Ya = Le.Root, Xa = Le.Trigger, Gy = Le.Portal, df = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Le.Overlay,
  {
    ref: r,
    className: Q(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 richtext- data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      e
    ),
    ...t
  }
));
df.displayName = Le.Overlay.displayName;
const $n = ne.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ O(Gy, { children: [
  /* @__PURE__ */ u(df, {}),
  /* @__PURE__ */ O(
    Le.Content,
    {
      ref: n,
      className: Q(
        "richtext-dialog-content richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ O(Le.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ u(cu, { className: "richtext-h-4 richtext-w-4" }),
          /* @__PURE__ */ u("span", { className: "richtext-sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
$n.displayName = Le.Content.displayName;
function hf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u(
    "div",
    {
      className: Q(
        "richtext-flex richtext-flex-col richtext-space-y-1.5 richtext-text-center sm:richtext-text-left",
        e
      ),
      ...t
    }
  );
}
hf.displayName = "DialogHeader";
function Ja({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u(
    "div",
    {
      className: Q(
        "richtext-flex richtext-flex-col-reverse sm:richtext-flex-row sm:richtext-justify-end sm:richtext-space-x-2",
        e
      ),
      ...t
    }
  );
}
Ja.displayName = "DialogFooter";
const _n = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Le.Title,
  {
    ref: r,
    className: Q(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight",
      e
    ),
    ...t
  }
));
_n.displayName = Le.Title.displayName;
const Vy = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Le.Description,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-text-muted-foreground", e),
    ...t
  }
));
Vy.displayName = Le.Description.displayName;
const cc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, lc = En, Dn = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return lc(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: o } = t, a = Object.keys(i).map((l) => {
    const d = r == null ? void 0 : r[l], f = o == null ? void 0 : o[l];
    if (d === null) return null;
    const h = cc(d) || cc(f);
    return i[l][h];
  }), s = r && Object.entries(r).reduce((l, d) => {
    let [f, h] = d;
    return h === void 0 || (l[f] = h), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, d) => {
    let { class: f, className: h, ...p } = d;
    return Object.entries(p).every((m) => {
      let [g, v] = m;
      return Array.isArray(v) ? v.includes({
        ...o,
        ...s
      }[g]) : {
        ...o,
        ...s
      }[g] === v;
    }) ? [
      ...l,
      f,
      h
    ] : l;
  }, []);
  return lc(e, a, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Ky = Dn(
  "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-md richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50",
  {
    variants: {
      variant: {
        default: "!richtext-bg-primary !richtext-text-primary-foreground hover:!richtext-bg-primary/90",
        destructive: "richtext-bg-destructive richtext-text-destructive-foreground hover:richtext-bg-destructive/90",
        outline: "richtext-border richtext-border-input richtext-bg-background hover:richtext-bg-accent hover:richtext-text-accent-foreground",
        secondary: "richtext-bg-secondary richtext-text-secondary-foreground hover:richtext-bg-secondary/80",
        ghost: "hover:richtext-bg-accent hover:richtext-text-accent-foreground",
        link: "richtext-text-primary richtext-underline-offset-4 hover:richtext-underline"
      },
      size: {
        default: "richtext-h-10 richtext-px-4 richtext-py-2",
        sm: "richtext-h-9 richtext-rounded-md richtext-px-3",
        lg: "richtext-h-11 richtext-rounded-md richtext-px-8",
        icon: "richtext-h-10 richtext-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ee = ne.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...i }, o) => /* @__PURE__ */ u(
    n ? iu : "button",
    {
      className: Q(Ky({ variant: t, size: r, className: e })),
      ref: o,
      ...i
    }
  )
);
Ee.displayName = "Button";
function ew(e) {
  return e.replace(/^.*\/|\..+$/g, "");
}
function tw(e) {
  return e.split(".").pop();
}
function rw(e) {
  return e < 1024 ? `${e} Byte` : e < 1024 * 1024 ? `${(e / 1024).toFixed(2)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function nw(e) {
  return e ? e === "application/pdf" ? "pdf" : e.startsWith("application/") && [".document", "word"].some((t) => e.includes(t)) ? "word" : e.startsWith("application/") && ["presentation"].some((t) => e.includes(t)) ? "excel" : e.startsWith("application/") && ["sheet"].some((t) => e.includes(t)) ? "ppt" : e.startsWith("image") ? "image" : e.startsWith("audio") ? "audio" : e.startsWith("video") ? "video" : "file" : "file";
}
function Yy(e) {
  return new Promise((t) => {
    const r = new FileReader();
    r.addEventListener(
      "load",
      () => {
        t({
          alt: e.name,
          src: r.result
        });
      },
      !1
    ), r.readAsDataURL(e);
  });
}
function Xy(e, t) {
  const r = e.split(","), n = r[0].match(/:(.*?);/)[1], i = atob(r[r.length - 1]);
  let o = i.length;
  const a = new Uint8Array(o);
  for (; o--; )
    a[o] = i.charCodeAt(o);
  return new File([a], t, { type: n });
}
function Jy({ editor: e, imageInline: t, onClose: r }) {
  const { t: n } = Se(), [i, o] = re(!1), a = zr.useRef(null), [s, c] = zr.useState(), [l, d] = zr.useState(""), f = bt(null), [h, p] = re({
    src: "",
    file: null
  });
  function m(S) {
    if (a.current && S.width && S.height) {
      const A = g(a.current, S);
      d(A);
    }
  }
  function g(S, A) {
    const E = document.createElement("canvas"), N = S.naturalWidth / S.width, M = S.naturalHeight / S.height;
    E.width = A.width * N, E.height = A.height * M;
    const I = E.getContext("2d");
    return I && (I.imageSmoothingEnabled = !1, I.drawImage(
      S,
      A.x * N,
      A.y * M,
      A.width * N,
      A.height * M,
      0,
      0,
      A.width * N,
      A.height * M
    )), E.toDataURL("image/png", 1);
  }
  async function v() {
    var S, A;
    try {
      const E = Xy(l, ((S = h == null ? void 0 : h.file) == null ? void 0 : S.name) || "image.png"), N = (A = e.extensionManager.extensions.find(
        (I) => I.name === br.name
      )) == null ? void 0 : A.options;
      let M = "";
      N.upload ? M = await N.upload(E) : M = URL.createObjectURL(E), e.chain().focus().setImageInline({ src: M, inline: t }).run(), o(!1), p({
        src: "",
        file: null
      }), r();
    } catch (E) {
      console.log("Error cropping image", E);
    }
  }
  function b(S) {
    var A;
    S.preventDefault(), (A = f.current) == null || A.click();
  }
  const w = async (S) => {
    var M;
    const A = (M = S == null ? void 0 : S.target) == null ? void 0 : M.files;
    if (!e || e.isDestroyed || A.length === 0)
      return;
    const E = A[0], N = await Yy(E);
    o(!0), p({
      src: N.src,
      file: E
    });
  };
  return /* @__PURE__ */ O(be, { children: [
    /* @__PURE__ */ u(
      Ee,
      {
        className: "richtext-mt-1 richtext-w-full",
        onClick: b,
        size: "sm",
        children: n("editor.image.dialog.tab.uploadCrop")
      }
    ),
    /* @__PURE__ */ O(Ya, { open: i, children: [
      /* @__PURE__ */ u(Xa, {}),
      /* @__PURE__ */ O($n, { children: [
        /* @__PURE__ */ u(_n, { children: n("editor.image.dialog.tab.uploadCrop") }),
        /* @__PURE__ */ u("div", { children: h.src && /* @__PURE__ */ u(
          hp,
          {
            className: "richtext-w-full",
            crop: s,
            onChange: (S) => c(S),
            onComplete: (S) => m(S),
            children: /* @__PURE__ */ u(
              "img",
              {
                alt: "Crop me",
                ref: a,
                src: h.src
              }
            )
          }
        ) }),
        /* @__PURE__ */ O(Ja, { children: [
          /* @__PURE__ */ O(
            Ee,
            {
              onClick: () => {
                o(!1), p({
                  src: "",
                  file: null
                });
              },
              children: [
                n("editor.imageUpload.cancel"),
                /* @__PURE__ */ u(
                  xe,
                  {
                    className: "richtext-ml-[4px]",
                    name: "Trash2"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ O(
            Ee,
            {
              className: "richtext-w-fit",
              onClick: v,
              children: [
                n("editor.imageUpload.crop"),
                /* @__PURE__ */ u(
                  xe,
                  {
                    className: "richtext-ml-[4px]",
                    name: "Crop"
                  }
                )
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u(
      "input",
      {
        accept: "image/*",
        multiple: !0,
        onChange: w,
        ref: f,
        type: "file",
        style: {
          display: "none"
        }
      }
    )
  ] });
}
function Bn(e) {
  function t() {
    const o = bt(e), a = oe(() => o.current, []), s = bt(/* @__PURE__ */ new Set()), c = oe((d) => {
      o.current = { ...o.current, ...d }, s.current.forEach((f) => f());
    }, []), l = oe((d) => (s.current.add(d), () => s.current.delete(d)), []);
    return {
      get: a,
      set: c,
      subscribe: l
    };
  }
  const r = hd(null);
  function n({ children: o }) {
    return /* @__PURE__ */ u(r.Provider, { value: t(), children: o });
  }
  function i(o) {
    const a = pd(r);
    if (!a)
      throw new Error("Store not found");
    return [md(
      a.subscribe,
      () => o(a.get()),
      () => o(e)
    ), a.set];
  }
  return {
    Provider: n,
    useStore: i
  };
}
Bn({
  value: !1
});
Bn({
  value: !1
});
const { Provider: Qy, useStore: pf } = Bn({
  value: !1
}), { Provider: Zy, useStore: mf } = Bn({
  value: "light"
});
Td("0");
function wa(e, t) {
  return window.addEventListener(e, t), () => {
    window.removeEventListener(e, t);
  };
}
function Qa(e, t) {
  window.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}
const Ut = {
  UPLOAD_IMAGE: (e) => `UPLOAD_IMAGE-${e}`,
  UPLOAD_VIDEO: (e) => `UPLOAD_VIDEO-${e}`,
  EDIT: (e) => `EDIT-${e}`,
  UPDATE_THEME: (e) => `UPDATE_THEME-${e}`,
  SEARCH_REPLCE: "SEARCH_REPLACE"
}, ex = {
  setOpen: (e, t) => {
    Qa(Ut.UPLOAD_IMAGE(e), t);
  }
};
function tx(e) {
  var m;
  const { t } = Se(), [r, n] = re(!1), i = (g) => {
    n(g.detail);
  }, [o, a] = re(""), s = bt(null), [c, l] = re(((m = e.editor.extensionManager.extensions.find(
    (g) => g.name === br.name
  )) == null ? void 0 : m.options.defaultInline) || !1), d = Te(() => {
    var v;
    return (v = e.editor.extensionManager.extensions.find(
      (b) => b.name === br.name
    )) == null ? void 0 : v.options;
  }, [e.editor]);
  me(() => {
    const g = wa(Ut.UPLOAD_IMAGE(e.editor.id), i);
    return () => {
      g();
    };
  }, []);
  async function f(g) {
    var S;
    const v = (S = g == null ? void 0 : g.target) == null ? void 0 : S.files;
    if (!e.editor || e.editor.isDestroyed || v.length === 0)
      return;
    const b = v[0];
    let w = "";
    d.upload ? w = await d.upload(b) : w = URL.createObjectURL(b), e.editor.chain().focus().setImageInline({ src: w, inline: c }).run(), n(!1), l(!1);
  }
  function h(g) {
    g.preventDefault(), g.stopPropagation(), e.editor.chain().focus().setImageInline({ src: o, inline: c }).run(), n(!1), l(!1), a("");
  }
  function p(g) {
    var v;
    g.preventDefault(), (v = s.current) == null || v.click();
  }
  return /* @__PURE__ */ O(
    Ya,
    {
      onOpenChange: n,
      open: r,
      children: [
        /* @__PURE__ */ u(Xa, { asChild: !0, children: /* @__PURE__ */ u(
          K,
          {
            action: () => n(!0),
            icon: e.icon,
            tooltip: e.tooltip
          }
        ) }),
        /* @__PURE__ */ O($n, { children: [
          /* @__PURE__ */ u(_n, { children: t("editor.image.dialog.title") }),
          /* @__PURE__ */ O(
            Ox,
            {
              activationMode: "manual",
              defaultValue: d.resourceImage === "both" || d.resourceImage === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ O(Cf, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  d.resourceImage === "both" || d.resourceImage === "upload" ? /* @__PURE__ */ u(Ca, { value: "upload", children: t("editor.image.dialog.tab.upload") }) : /* @__PURE__ */ u(be, {}),
                  d.resourceImage === "both" || d.resourceImage === "link" ? /* @__PURE__ */ u(Ca, { value: "link", children: t("editor.image.dialog.tab.url") }) : /* @__PURE__ */ u(be, {})
                ] }),
                /* @__PURE__ */ O("div", { className: "richtext-my-[10px] richtext-flex richtext-items-center richtext-gap-[4px]", children: [
                  /* @__PURE__ */ u(
                    Mf,
                    {
                      checked: c,
                      onCheckedChange: (g) => {
                        l(g);
                      }
                    }
                  ),
                  /* @__PURE__ */ u(xt, { children: t("editor.link.dialog.inline") })
                ] }),
                /* @__PURE__ */ O(Ta, { value: "upload", children: [
                  /* @__PURE__ */ O("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                    /* @__PURE__ */ u(
                      Ee,
                      {
                        className: "richtext-mt-1 richtext-w-full",
                        onClick: p,
                        size: "sm",
                        children: t("editor.image.dialog.tab.upload")
                      }
                    ),
                    /* @__PURE__ */ u(
                      Jy,
                      {
                        editor: e.editor,
                        imageInline: c,
                        onClose: () => ex.setOpen(e.editor.id, !1)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ u(
                    "input",
                    {
                      accept: "image/*",
                      multiple: !0,
                      onChange: f,
                      ref: s,
                      type: "file",
                      style: {
                        display: "none"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ u(Ta, { value: "link", children: /* @__PURE__ */ u("form", { onSubmit: h, children: /* @__PURE__ */ O("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                  /* @__PURE__ */ u(
                    ze,
                    {
                      autoFocus: !0,
                      onChange: (g) => a(g.target.value),
                      placeholder: t("editor.image.dialog.placeholder"),
                      required: !0,
                      type: "url",
                      value: o
                    }
                  ),
                  /* @__PURE__ */ u(Ee, { type: "submit", children: t("editor.image.dialog.button.apply") })
                ] }) }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const $r = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function rx(e) {
  var I, k, _;
  const [t, r] = re({
    width: Wr,
    height: Wr
  }), [n, i] = re({
    width: 0,
    height: 0
  }), [o] = re([
    $r.TOP_LEFT,
    $r.TOP_RIGHT,
    $r.BOTTOM_LEFT,
    $r.BOTTOM_RIGHT
  ]), [a, s] = re(!1), [c, l] = re({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: d, inline: f } = (I = e == null ? void 0 : e.node) == null ? void 0 : I.attrs, h = f && (d === "left" || d === "right"), p = Te(() => {
    var _e;
    const { src: C, alt: P, width: $, height: B, flipX: W, flipY: z } = (_e = e == null ? void 0 : e.node) == null ? void 0 : _e.attrs, Z = Xr($) ? `${$}px` : $, J = Xr(B) ? `${B}px` : B, ee = [];
    W && ee.push("rotateX(180deg)"), z && ee.push("rotateY(180deg)");
    const ge = ee.join(" ");
    return {
      src: C || void 0,
      alt: P || void 0,
      style: {
        width: Z || void 0,
        height: J || void 0,
        transform: ge || "none",
        ...h ? { float: d } : {}
      }
    };
  }, [(k = e == null ? void 0 : e.node) == null ? void 0 : k.attrs]), m = Te(() => {
    const {
      style: { width: C }
    } = p;
    return { width: C === "100%" ? C : void 0 };
  }, [p]);
  function g(C) {
    i({
      width: C.target.width,
      height: C.target.height
    });
  }
  function v() {
    const { editor: C, getPos: P } = e;
    C.commands.setNodeSelection(P());
  }
  const b = oe(
    vr(() => {
      const { editor: C } = e, { width: P } = getComputedStyle(C.view.dom);
      r(($) => ({
        ...$,
        width: Number.parseInt(P, 10)
      }));
    }, Gr),
    [e == null ? void 0 : e.editor]
  );
  function w(C, P) {
    C.preventDefault(), C.stopPropagation();
    const $ = n.width, B = n.height, W = $ / B;
    let z = Number(e.node.attrs.width), Z = Number(e.node.attrs.height);
    const J = t.width;
    z && !Z ? (z = z > J ? J : z, Z = Math.round(z / W)) : Z && !z ? (z = Math.round(Z * W), z = z > J ? J : z) : !z && !Z ? (z = $ > J ? J : $, Z = Math.round(z / W)) : z = z > J ? J : z, s(!0), l({
      x: C.clientX,
      y: C.clientY,
      w: z,
      h: Z,
      dir: P
    });
  }
  const S = oe(
    vr((C) => {
      if (C.preventDefault(), C.stopPropagation(), !a)
        return;
      const { x: P, w: $, dir: B } = c, W = (C.clientX - P) * (/l/.test(B) ? -1 : 1), z = Lu($ + W, ou, t.width);
      e.updateAttributes({
        width: z,
        height: null
      });
    }, Gr),
    [a, c, t, e.updateAttributes]
  ), A = oe(
    (C) => {
      C.preventDefault(), C.stopPropagation(), a && (l({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), s(!1), v());
    },
    [a, v]
  ), E = oe(() => {
    document == null || document.addEventListener("mousemove", S, !0), document == null || document.addEventListener("mouseup", A, !0);
  }, [S, A]), N = oe(() => {
    document == null || document.removeEventListener("mousemove", S, !0), document == null || document.removeEventListener("mouseup", A, !0);
  }, [S, A]);
  me(() => (a ? E() : N(), () => {
    N();
  }), [a, E, N]);
  const M = Te(() => new ResizeObserver(() => b()), [b]);
  return me(() => (M.observe(e.editor.view.dom), () => {
    M.disconnect();
  }), [e.editor.view.dom, M]), /* @__PURE__ */ u(
    Ra,
    {
      as: f ? "span" : "div",
      className: "image-view",
      style: {
        float: h ? d : void 0,
        margin: h ? d === "left" ? "1em 1em 1em 0" : "1em 0 1em 1em" : void 0,
        display: f ? "inline" : "block",
        textAlign: h ? void 0 : d,
        width: ((_ = p.style) == null ? void 0 : _.width) ?? "auto",
        ...h ? {} : m
      },
      children: /* @__PURE__ */ O(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: m,
          className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${a ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ u(
              "img",
              {
                alt: p.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: v,
                onLoad: g,
                src: p.src,
                style: p.style
              }
            ),
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || a) && /* @__PURE__ */ u("div", { className: "image-resizer", children: o == null ? void 0 : o.map((C) => /* @__PURE__ */ u(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${C}`,
                onMouseDown: (P) => w(P, C)
              },
              `image-dir-${C}`
            )) })
          ]
        }
      )
    }
  );
}
const qt = new Wt("upload-image");
function nx() {
  return new It({
    key: qt,
    state: {
      init() {
        return lp.empty;
      },
      apply(e, t) {
        t = t.map(e.mapping, e.doc);
        const r = e.getMeta(qt);
        if (r != null && r.add)
          for (const { id: n, pos: i, src: o } of r.add) {
            const a = ix(o), s = cp.widget(i, a, { id: n });
            t = t.add(e.doc, [s]);
          }
        else if (r != null && r.remove)
          for (const n of r.remove)
            t = t.remove(t.find(void 0, void 0, (i) => i.id === n));
        return t;
      }
    },
    props: {
      decorations(e) {
        return this.getState(e);
      }
    }
  });
}
function ix(e) {
  const t = document.createElement("div"), r = document.createElement("img");
  return r.setAttribute("class", "opacity-50"), r.src = e, r.addEventListener("load", () => {
    t.setAttribute("class", "img-placeholder");
  }), t.append(r), t;
}
function ox(e, t) {
  var i;
  const n = qt.getState(e).find(void 0, void 0, (o) => o.id === t);
  return n.length > 0 ? (i = n[0]) == null ? void 0 : i.from : null;
}
function ax({ validateFn: e, onUpload: t, postUpload: r, defaultInline: n = !1 }) {
  return (i, o, a) => {
    for (const s of i) {
      if (e && !e(s))
        continue;
      const c = Date.now().toString(), l = o.state.tr;
      l.selection.empty || l.deleteSelection();
      const d = URL.createObjectURL(s);
      l.setMeta(qt, {
        add: [{ id: c, pos: a, src: d }]
      }), o.dispatch(l), t(s).then(
        async (f) => {
          var w;
          r && typeof f == "string" && (f = await r(f));
          const { schema: h } = o.state;
          let p = ox(o.state, c);
          if (p === null)
            return;
          const m = typeof f == "object" ? d : f, g = (w = h.nodes.image) == null ? void 0 : w.create({
            src: m,
            inline: n
          });
          if (!g)
            return;
          const { doc: v } = o.state;
          p > v.content.size && (p = v.content.size - 1);
          const b = o.state.tr.replaceWith(p, p, g).setMeta(qt, { remove: [c] });
          o.dispatch(b);
        },
        () => {
          const f = o.state.tr.delete(a, a).setMeta(qt, { remove: [c] });
          o.dispatch(f);
        }
      );
    }
  };
}
function sx(e, t, r) {
  var i;
  const n = [...((i = t.clipboardData) == null ? void 0 : i.files) || []];
  if (n.length > 0) {
    t.preventDefault();
    const o = e.state.selection.from;
    return r(n, e, o + 1), !0;
  }
  return !1;
}
function cx(e, t, r, n) {
  var o;
  const i = [...((o = t.dataTransfer) == null ? void 0 : o.files) || []];
  if (!r && i.length > 0) {
    t.preventDefault();
    const a = e.posAtCoords({
      left: t.clientX,
      top: t.clientY
    });
    if (a)
      return n(i, e, a.pos + 1), !0;
  }
  return !1;
}
const lx = {
  acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
  maxSize: 1024 * 1024 * 5,
  // 5MB
  resourceImage: "both",
  defaultInline: !1
}, br = /* @__PURE__ */ ff.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var e;
    return {
      ...lx,
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: t,
        extension: r,
        t: n
      }) => {
        var i, o;
        return {
          component: tx,
          componentProps: {
            action: () => !0,
            upload: r.options.upload,
            /* If setImage is not available(when Image Component is not imported), the button is disabled */
            disabled: !((o = (i = t.can()).setImage) != null && o.call(i, {})),
            icon: "ImageUp",
            tooltip: n("editor.image.tooltip"),
            editor: t
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      flipX: {
        default: !1
      },
      flipY: {
        default: !1
      },
      width: {
        default: null,
        parseHTML: (t) => {
          const r = t.style.width || t.getAttribute("width") || null;
          return r ? Number.parseInt(r, 10) : null;
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      },
      inline: {
        default: !1,
        parseHTML: (t) => !!t.getAttribute("inline"),
        renderHTML: (t) => ({
          inline: t.inline
        })
      }
    };
  },
  addNodeView() {
    return Ia(rx);
  },
  addCommands() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      setImageInline: (t) => ({ commands: r }) => r.insertContent({
        type: this.name,
        attrs: {
          ...t,
          inline: t.inline ?? this.options.defaultInline
        }
      }),
      updateImage: (t) => ({ commands: r }) => r.updateAttributes(this.name, t),
      setAlignImage: (t) => ({ commands: r }) => r.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { flipX: t, flipY: r, align: n, inline: i } = e, o = i && (n === "left" || n === "right"), a = t || r ? `transform: rotateX(${t ? "180" : "0"}deg) rotateY(${r ? "180" : "0"}deg);` : "", s = o ? "" : `text-align: ${n};`, d = `${o ? `float: ${n};` : ""}${o ? n === "left" ? "margin: 1em 1em 1em 0;" : "margin: 1em 0 1em 1em;" : ""}${a}`;
    return [
      i ? "span" : "div",
      {
        style: s,
        class: "image"
      },
      [
        "img",
        it(
          {
            height: "auto",
            style: d
          },
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "span.image img",
        getAttrs: (e) => {
          var o;
          const t = e == null ? void 0 : e.parentElement, r = e == null ? void 0 : e.getAttribute("width"), n = (e == null ? void 0 : e.getAttribute("flipx")) || !1, i = (e == null ? void 0 : e.getAttribute("flipy")) || !1;
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            caption: e == null ? void 0 : e.getAttribute("caption"),
            width: r ? Number.parseInt(r, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || ((o = t == null ? void 0 : t.style) == null ? void 0 : o.textAlign) || null,
            inline: (e == null ? void 0 : e.getAttribute("inline")) || !1,
            flipX: n === "true",
            flipY: i === "true"
          };
        }
      },
      {
        tag: "div[class=image]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), r = t == null ? void 0 : t.getAttribute("width"), n = (t == null ? void 0 : t.getAttribute("flipx")) || !1, i = (t == null ? void 0 : t.getAttribute("flipy")) || !1;
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            caption: t == null ? void 0 : t.getAttribute("caption"),
            width: r ? Number.parseInt(r, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null,
            inline: (t == null ? void 0 : t.getAttribute("inline")) || !1,
            flipX: n === "true",
            flipY: i === "true"
          };
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    const t = ax({
      validateFn: (r) => !(!this.options.acceptMimes.includes(r.type) || r.size > this.options.maxSize),
      onUpload: this.options.upload,
      // postUpload: this.options.postUpload,
      defaultInline: this.options.defaultInline
    });
    return [
      new It({
        props: {
          handlePaste: (r, n) => !n.clipboardData || [...n.clipboardData.files || []].some((o) => o.type === "text/html") ? !1 : sx(r, n, t),
          handleDrop: (r, n, i, o) => (!(n instanceof DragEvent) || !n.dataTransfer || cx(r, n, o, t), !1)
        }
      }),
      nx()
    ];
  }
});
function ux({ selectImage: e, giphyApiKey: t, children: r }) {
  const [n, i] = re([]), [o] = re(15), a = bt(null), s = (l, d = "search") => {
    if (!t)
      return;
    const h = `${d === "search" ? `https://api.giphy.com/v1/gifs/search?q=${l}` : `https://api.giphy.com/v1/gifs/trending?q=${l}`}&limit=${o}&api_key=${t}`;
    fetch(h).then((p) => p.json()).then((p) => {
      i(p.data);
    }).catch((p) => {
      console.log(p);
    });
  };
  me(() => {
    s("", "trend");
  }, []);
  const c = oe(
    Mn((l) => {
      if (!l.target.value) {
        s("", "trend");
        return;
      }
      s(l.target.value);
    }, 350),
    // Adjust the debounce delay as needed
    []
  );
  return /* @__PURE__ */ O(Sr, { modal: !0, children: [
    /* @__PURE__ */ u(Ar, { asChild: !0, children: r }),
    /* @__PURE__ */ u(
      Kt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: t ? /* @__PURE__ */ O(be, { children: [
          /* @__PURE__ */ u("div", { className: "richtext-mb-[10px] richtext-w-full", children: /* @__PURE__ */ u(
            ze,
            {
              onChange: c,
              placeholder: "Search GIF",
              ref: a,
              type: "text"
            }
          ) }),
          /* @__PURE__ */ u("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ u("div", { className: "richtext-grid richtext-grid-cols-2 richtext-gap-1 ", children: n != null && n.length ? n == null ? void 0 : n.map((l) => /* @__PURE__ */ u(
            "img",
            {
              alt: "giphy",
              className: "richtext-cursor-pointer richtext-text-center",
              height: l.images.fixed_width_downsampled.height,
              onClick: () => e(l),
              src: l.images.fixed_width_downsampled.url,
              width: l.images.fixed_width_downsampled.width
            },
            `giphy-${l.id}`
          )) : /* @__PURE__ */ u("p", { children: "No GIFs found" }) }) })
        ] }) : /* @__PURE__ */ u("div", { children: /* @__PURE__ */ u("p", { children: "Missing Giphy API Key" }) })
      }
    )
  ] });
}
function fx({ editor: e, icon: t, giphyApiKey: r, ...n }) {
  return /* @__PURE__ */ u(
    ux,
    {
      giphyApiKey: r,
      selectImage: (o) => {
        const { url: a } = o.images.original;
        e.chain().focus().setImageGif({ src: a }).run();
      },
      children: /* @__PURE__ */ u(
        K,
        {
          icon: t,
          tooltip: n == null ? void 0 : n.tooltip
        }
      )
    }
  );
}
const _r = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function dx(e) {
  var N, M;
  const [t, r] = re({
    width: Wr,
    height: Wr
  }), [n, i] = re({
    width: 0,
    height: 0
  }), [o] = re([
    _r.TOP_LEFT,
    _r.TOP_RIGHT,
    _r.BOTTOM_LEFT,
    _r.BOTTOM_RIGHT
  ]), [a, s] = re(!1), [c, l] = re({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: d } = (N = e == null ? void 0 : e.node) == null ? void 0 : N.attrs, f = Te(() => {
    var B;
    const { src: I, alt: k, width: _, height: C } = (B = e == null ? void 0 : e.node) == null ? void 0 : B.attrs, P = Xr(_) ? `${_}px` : _, $ = Xr(C) ? `${C}px` : C;
    return {
      src: I || void 0,
      alt: k || void 0,
      style: {
        width: P || void 0,
        height: $ || void 0
      }
    };
  }, [(M = e == null ? void 0 : e.node) == null ? void 0 : M.attrs]), h = Te(() => {
    const {
      style: { width: I }
    } = f;
    return { width: I === "100%" ? I : void 0 };
  }, [f]);
  function p(I) {
    i({
      width: I.target.width,
      height: I.target.height
    });
  }
  function m() {
    const { editor: I, getPos: k } = e;
    I.commands.setNodeSelection(k());
  }
  const g = oe(
    vr(() => {
      const { editor: I } = e, { width: k } = getComputedStyle(I.view.dom);
      r((_) => ({
        ..._,
        width: Number.parseInt(k, 10)
      }));
    }, Gr),
    [e == null ? void 0 : e.editor]
  );
  function v(I, k) {
    I.preventDefault(), I.stopPropagation();
    const _ = n.width, C = n.height, P = _ / C;
    let $ = Number(e.node.attrs.width), B = Number(e.node.attrs.height);
    const W = t.width;
    $ && !B ? ($ = $ > W ? W : $, B = Math.round($ / P)) : B && !$ ? ($ = Math.round(B * P), $ = $ > W ? W : $) : !$ && !B ? ($ = _ > W ? W : _, B = Math.round($ / P)) : $ = $ > W ? W : $, s(!0), l({
      x: I.clientX,
      y: I.clientY,
      w: $,
      h: B,
      dir: k
    });
  }
  const b = oe(
    vr((I) => {
      if (I.preventDefault(), I.stopPropagation(), !a)
        return;
      const { x: k, w: _, dir: C } = c, P = (I.clientX - k) * (/l/.test(C) ? -1 : 1), $ = Lu(_ + P, ou, t.width);
      e.updateAttributes({
        width: $,
        height: null
      });
    }, Gr),
    [a, c, t, e.updateAttributes]
  ), w = oe(
    (I) => {
      I.preventDefault(), I.stopPropagation(), a && (l({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), s(!1), m());
    },
    [a, m]
  ), S = oe(() => {
    document == null || document.addEventListener("mousemove", b, !0), document == null || document.addEventListener("mouseup", w, !0);
  }, [b, w]), A = oe(() => {
    document == null || document.removeEventListener("mousemove", b, !0), document == null || document.removeEventListener("mouseup", w, !0);
  }, [b, w]);
  me(() => (a ? S() : A(), () => {
    A();
  }), [a, S, A]);
  const E = Te(() => new ResizeObserver(() => g()), [g]);
  return me(() => (E.observe(e.editor.view.dom), () => {
    E.disconnect();
  }), [e.editor.view.dom, E]), /* @__PURE__ */ u(
    Ra,
    {
      className: "image-view",
      style: { ...h, width: "100%", textAlign: d },
      children: /* @__PURE__ */ O(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: h,
          className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${a ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ u(
              "img",
              {
                alt: f.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: m,
                onLoad: p,
                src: f.src,
                style: f.style
              }
            ),
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || a) && /* @__PURE__ */ u("div", { className: "image-resizer", children: o == null ? void 0 : o.map((I) => /* @__PURE__ */ u(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${I}`,
                onMouseDown: (k) => v(k, I)
              },
              `image-dir-${I}`
            )) })
          ]
        }
      )
    }
  );
}
const gf = /* @__PURE__ */ ff.extend({
  name: "imageGif",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      GIPHY_API_KEY: "",
      draggable: !1,
      selectable: !0,
      atom: !0,
      button: ({ editor: t, extension: r, t: n }) => {
        var o;
        const i = ((o = r == null ? void 0 : r.options) == null ? void 0 : o.GIPHY_API_KEY) || "";
        return {
          component: fx,
          componentProps: {
            editor: t,
            action: () => {
            },
            isActive: () => !1,
            disabled: !1,
            icon: "GifIcon",
            tooltip: n("editor.imageGif.tooltip"),
            giphyApiKey: i
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      width: {
        default: null,
        parseHTML: (t) => {
          const r = t.style.width || t.getAttribute("width") || "10";
          return r === void 0 ? null : Number.parseInt(`${r}`, 10);
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      }
    };
  },
  addNodeView() {
    return Ia(dx);
  },
  addCommands() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      setImageGif: (t) => ({ commands: r }) => r.insertContent({
        type: this.name,
        attrs: t
      }),
      updateImageGif: (t) => ({ commands: r }) => r.updateAttributes(this.name, t),
      setAlignImageGif: (t) => ({ commands: r }) => r.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { align: t } = e;
    return [
      "div",
      // Parent element
      {
        style: t ? `text-align: ${t};` : "",
        class: "imageGIf"
      },
      [
        "img",
        it(
          // Always render the `height="auto"`
          {
            height: "auto"
          },
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageGIf]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), r = t == null ? void 0 : t.getAttribute("width");
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            title: t == null ? void 0 : t.getAttribute("title"),
            width: r ? Number.parseInt(r, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null
          };
        }
      }
    ];
  }
}), vf = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function yf({ item: e, disabled: t, editor: r }) {
  var i;
  const n = e.component;
  return n ? /* @__PURE__ */ u(gd, { children: e.type === "divider" ? /* @__PURE__ */ u(
    We,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ u(
    n,
    {
      ...e.componentProps,
      disabled: t || ((i = e == null ? void 0 : e.componentProps) == null ? void 0 : i.disabled),
      editor: r
    }
  ) }) : /* @__PURE__ */ u(be, {});
}
function hx(e) {
  return e.type.name === br.name;
}
function px(e) {
  return e.type.name === gf.name;
}
function mx(e) {
  const { lang: t } = Se(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (l) => {
      if (hx(l))
        return c = !0, !1;
    }), c;
  }, n = Te(() => e.disabled ? [] : Dv(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ u(be, { children: /* @__PURE__ */ u(
    Rt,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: r,
      tippyOptions: vf,
      children: n != null && n.length ? /* @__PURE__ */ u("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((i, o) => /* @__PURE__ */ u(
        yf,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-image-${o}`
      )) }) }) : /* @__PURE__ */ u(be, {})
    }
  ) });
}
function gx(e) {
  const { lang: t } = Se(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (l) => {
      if (px(l))
        return c = !0, !1;
    }), c;
  }, n = Te(() => e.disabled ? [] : Bv(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ u(be, { children: /* @__PURE__ */ u(
    Rt,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: r,
      tippyOptions: vf,
      children: n != null && n.length ? /* @__PURE__ */ u("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((i, o) => /* @__PURE__ */ u(
        yf,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-image-gif-${o}`
      )) }) }) : /* @__PURE__ */ u(be, {})
    }
  ) });
}
function vx(e, t, r = null) {
  return r ? e.createChecked({ index: t }, r) : e.createAndFill({ index: t });
}
function yx(e) {
  if (e.cached.columnsNodeTypes)
    return e.cached.columnsNodeTypes;
  const t = {
    columns: e.nodes.columns,
    column: e.nodes.column
  };
  return e.cached.columnsNodeTypes = t, t;
}
function xx(e, t, r = null) {
  const n = yx(e), i = [];
  for (let o = 0; o < t; o += 1) {
    const a = vx(n.column, o, r);
    a && i.push(a);
  }
  return n.columns.createChecked({ cols: t }, i);
}
function di({
  state: e,
  dispatch: t,
  type: r
}) {
  const n = Vr((o) => o.type.name === Cn.name)(e.selection), i = Vr((o) => o.type.name === xf.name)(e.selection);
  if (t && n && i) {
    const o = n.node, a = i.node.attrs.index, s = o.toJSON();
    let c = a;
    r === "delete" ? (c = a - 1, s.content.splice(a, 1)) : (c = r === "addBefore" ? a : a + 1, s.content.splice(c, 0, {
      type: "column",
      attrs: {
        index: a
      },
      content: [
        {
          type: "paragraph"
        }
      ]
    })), s.attrs.cols = s.content.length, s.content.forEach((h, p) => {
      h.attrs.index = p;
    });
    const l = up.fromJSON(e.schema, s);
    let d = n.pos;
    l.content.forEach((h, p, m) => {
      m < c && (d += h.nodeSize);
    });
    const f = e.tr.setTime(Date.now());
    f.replaceWith(n.pos, n.pos + n.node.nodeSize, l).setSelection(
      Gt.near(f.doc.resolve(d))
    ), t(f);
  }
  return !0;
}
function uc({ state: e, dispatch: t, type: r }) {
  const n = Vr((o) => o.type.name === Cn.name)(e.selection), i = Vr((o) => o.type.name === xf.name)(e.selection);
  if (t && n && i) {
    const o = n.node, a = i.node.attrs.index;
    let s = 0;
    r === "before" ? s = (a - 1 + o.attrs.cols) % o.attrs.cols : s = (a + 1) % o.attrs.cols;
    let c = n.pos;
    o.content.forEach((d, f, h) => {
      h < s && (c += d.nodeSize);
    });
    const l = e.tr.setTime(Date.now());
    return l.setSelection(Gt.near(l.doc.resolve(c))), t(l), !0;
  }
  return !1;
}
const xf = /* @__PURE__ */ In.create({
  name: "column",
  content: "block+",
  isolating: !0,
  addOptions() {
    return {
      HTMLAttributes: {
        class: "column"
      }
    };
  },
  addAttributes() {
    return {
      index: {
        default: 0,
        parseHTML: (e) => e.getAttribute("index")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=column]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["div", it(this.options.HTMLAttributes, e), 0];
  }
}), iw = fp.create({
  name: "columnActionButton",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: r }) => ({
        component: K,
        componentProps: {
          action: () => {
            t.chain().focus().insertColumns({ cols: 2 }).run();
          },
          icon: "Columns",
          tooltip: r("editor.columns.tooltip")
        }
      })
    };
  }
}), bx = 200, Cn = /* @__PURE__ */ In.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: bx,
  addOptions() {
    return {
      HTMLAttributes: {
        class: "columns"
      }
    };
  },
  addAttributes() {
    return {
      cols: {
        default: 2,
        parseHTML: (e) => e.getAttribute("cols")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=grid]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["div", it(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      insertColumns: (e) => ({ tr: t, dispatch: r, editor: n }) => {
        const i = xx(n.schema, e && e.cols || 3);
        if (r) {
          const o = t.selection.anchor + 1;
          t.replaceSelectionWith(i).scrollIntoView().setSelection(Gt.near(t.doc.resolve(o)));
        }
        return !0;
      },
      addColBefore: () => ({ dispatch: e, state: t }) => di({ dispatch: e, state: t, type: "addBefore" }),
      addColAfter: () => ({ dispatch: e, state: t }) => di({ dispatch: e, state: t, type: "addAfter" }),
      deleteCol: () => ({ dispatch: e, state: t }) => di({ dispatch: e, state: t, type: "delete" })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => uc({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => uc({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "before"
      })
    };
  }
});
function bf(e, t) {
  const { state: r } = t, n = r.selection.$anchor;
  let i = !1;
  if (n.depth)
    for (let o = n.depth; o > 0; o--)
      n.node(o).type.name === e && (t.dispatchTransaction && t.dispatchTransaction(r.tr.delete(n.before(o), n.after(o)).scrollIntoView()), i = !0);
  else {
    const o = r.selection.node;
    o && o.type.name === e && (t.chain().deleteSelection().run(), i = !0);
  }
  if (!i) {
    const o = n.pos;
    if (o) {
      const a = r.tr.doc.nodeAt(o);
      a && a.type.name === e && (t.dispatchTransaction && t.dispatchTransaction(r.tr.delete(o, o + a.nodeSize)), i = !0);
    }
  }
  return i;
}
function wx({ editor: e }) {
  const { t } = Se(), r = oe(() => e.isActive(Cn.name), [e]), n = oe(() => bf(Cn.name, e), [e]), i = oe(() => e.chain().focus().addColBefore().run(), [e]), o = oe(() => e.chain().focus().addColAfter().run(), [e]), a = oe(() => e.chain().focus().deleteCol().run(), [e]);
  return /* @__PURE__ */ u(
    Rt,
    {
      editor: e,
      pluginKey: "columns-bubble-menu",
      shouldShow: r,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999
        // onHidden: () => {
        //   toggleVisible(false)
        // },
      },
      children: /* @__PURE__ */ O("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
        /* @__PURE__ */ u(
          K,
          {
            action: i,
            icon: "ColumnAddLeft",
            tooltip: t("editor.table.menu.insertColumnBefore")
          }
        ),
        /* @__PURE__ */ u(
          K,
          {
            action: o,
            icon: "ColumnAddRight",
            tooltip: t("editor.table.menu.insertColumnAfter")
          }
        ),
        /* @__PURE__ */ u(
          K,
          {
            action: a,
            icon: "DeleteColumn",
            tooltip: t("editor.table.menu.deleteColumn")
          }
        ),
        /* @__PURE__ */ u(
          K,
          {
            action: n,
            icon: "Trash2",
            tooltip: t("editor.table.menu.delete_column")
          }
        )
      ] })
    }
  );
}
const Sx = fe.Root, Ax = fe.Trigger, fc = fe.Portal, dc = fe.Sub, Sa = ne.forwardRef(({ className: e, inset: t, children: r, ...n }, i) => /* @__PURE__ */ O(
  fe.SubTrigger,
  {
    ref: i,
    className: Q(
      "richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none focus:richtext-bg-accent data-[state=open]:richtext-bg-accent",
      t && "richtext-pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ u(qh, { className: "richtext-ml-auto richtext-h-4 richtext-w-4" })
    ]
  }
));
Sa.displayName = fe.SubTrigger.displayName;
const Aa = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  fe.SubContent,
  {
    ref: r,
    className: Q(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-lg data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Aa.displayName = fe.SubContent.displayName;
const wf = ne.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u(fe.Portal, { children: /* @__PURE__ */ u(
  fe.Content,
  {
    ref: n,
    sideOffset: t,
    className: Q(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
wf.displayName = fe.Content.displayName;
const He = ne.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ u(
  fe.Item,
  {
    ref: n,
    className: Q(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t && "richtext-pl-8",
      e
    ),
    ...r
  }
));
He.displayName = fe.Item.displayName;
const Cx = ne.forwardRef(({ className: e, children: t, checked: r, ...n }, i) => /* @__PURE__ */ O(
  fe.CheckboxItem,
  {
    ref: i,
    className: Q(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ u("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ u(fe.ItemIndicator, { children: /* @__PURE__ */ u(lu, { className: "richtext-h-4 richtext-w-4" }) }) }),
      t
    ]
  }
));
Cx.displayName = fe.CheckboxItem.displayName;
const Tx = ne.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ O(
  fe.RadioItem,
  {
    ref: n,
    className: Q(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ u("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ u(fe.ItemIndicator, { children: /* @__PURE__ */ u(Fh, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      t
    ]
  }
));
Tx.displayName = fe.RadioItem.displayName;
const Ex = ne.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ u(
  fe.Label,
  {
    ref: n,
    className: Q(
      "richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-font-semibold",
      t && "richtext-pl-8",
      e
    ),
    ...r
  }
));
Ex.displayName = fe.Label.displayName;
const Sf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  fe.Separator,
  {
    ref: r,
    className: Q("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
Sf.displayName = fe.Separator.displayName;
function Rx({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u(
    "span",
    {
      className: Q("richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", e),
      ...t
    }
  );
}
Rx.displayName = "DropdownMenuShortcut";
const ze = ne.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ u(
    "input",
    {
      type: t,
      className: Q(
        "richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background file:richtext-border-0 file:richtext-bg-transparent file:richtext-text-sm file:richtext-font-medium placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none  disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        e
      ),
      ref: n,
      ...r
    }
  )
);
ze.displayName = "Input";
const Ix = Dn(
  "richtext-text-sm richtext-font-medium richtext-leading-none peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), xt = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  fu.Root,
  {
    ref: r,
    className: Q(Ix(), e),
    ...t
  }
));
xt.displayName = fu.Root.displayName;
const Sr = hr.Root, Ar = hr.Trigger, Kt = ne.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, i) => /* @__PURE__ */ u(hr.Portal, { children: /* @__PURE__ */ u(
  hr.Content,
  {
    ref: i,
    align: t,
    sideOffset: r,
    className: Q(
      "richtext-z-50 richtext-w-72 richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Kt.displayName = hr.Content.displayName;
const We = ne.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, i) => /* @__PURE__ */ u(
    au.Root,
    {
      ref: i,
      decorative: r,
      orientation: t,
      className: Q(
        "richtext-shrink-0 richtext-bg-border",
        t === "horizontal" ? "richtext-h-[1px] richtext-w-full" : "richtext-h-full richtext-w-[1px]",
        e
      ),
      ...n
    }
  )
);
We.displayName = au.Root.displayName;
const Af = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Zo.Root,
  {
    className: Q(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ u(
      Zo.Thumb,
      {
        className: Q(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
Af.displayName = Zo.Root.displayName;
const Ox = Ot.Root, Cf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Ot.List,
  {
    ref: r,
    className: Q(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      e
    ),
    ...t
  }
));
Cf.displayName = Ot.List.displayName;
const Ca = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Ot.Trigger,
  {
    ref: r,
    className: Q(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      e
    ),
    ...t
  }
));
Ca.displayName = Ot.Trigger.displayName;
const Ta = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Ot.Content,
  {
    ref: r,
    className: Q(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2",
      e
    ),
    ...t
  }
));
Ta.displayName = Ot.Content.displayName;
const Px = Ne.Provider, Tf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Ne.Viewport,
  {
    ref: r,
    className: Q(
      "richtext-fixed richtext-top-0 richtext-z-[100] richtext-flex richtext-max-h-screen richtext-w-full richtext-flex-col-reverse richtext-p-4 sm:richtext-bottom-0 sm:richtext-right-0 sm:richtext-top-auto sm:richtext-flex-col md:richtext-max-w-[420px]",
      e
    ),
    ...t
  }
));
Tf.displayName = Ne.Viewport.displayName;
const Nx = Dn(
  "richtext-group richtext-pointer-events-auto richtext-relative richtext-flex richtext-w-full richtext-items-center richtext-justify-between richtext-space-x-4 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-p-6 richtext-pr-8 richtext-shadow-lg richtext-transition-all data-[swipe=cancel]:richtext-translate-x-0 data-[swipe=end]:richtext-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:richtext-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:richtext-transition-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[swipe=end]:richtext-animate-out data-[state=closed]:richtext-fade-out-80 data-[state=closed]:richtext-slide-out-to-right-full data-[state=open]:richtext-slide-in-from-top-full data-[state=open]:sm:richtext-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "richtext-border richtext-bg-background richtext-text-foreground",
        destructive: "richtext-destructive richtext-group richtext-border-destructive richtext-bg-destructive richtext-text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Ef = ne.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ u(
  Ne.Root,
  {
    ref: n,
    className: Q(Nx({ variant: t }), e),
    ...r
  }
));
Ef.displayName = Ne.Root.displayName;
const kx = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Ne.Action,
  {
    ref: r,
    className: Q(
      "richtext-inline-flex richtext-h-8 richtext-shrink-0 richtext-items-center richtext-justify-center richtext-rounded-md !richtext-border richtext-bg-transparent richtext-px-3 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-secondary focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 group-[.destructive]:richtext-border-muted/40 group-[.destructive]:hover:richtext-border-destructive/30 group-[.destructive]:hover:richtext-bg-destructive group-[.destructive]:hover:richtext-text-destructive-foreground group-[.destructive]:focus:richtext-ring-destructive",
      e
    ),
    ...t
  }
));
kx.displayName = Ne.Action.displayName;
const Rf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Ne.Close,
  {
    ref: r,
    className: Q(
      "richtext-absolute richtext-right-2 richtext-top-2 richtext-rounded-md richtext-p-1 richtext-text-foreground/50 richtext-opacity-0 richtext-transition-opacity hover:richtext-text-foreground focus:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 group-hover:richtext-opacity-100 group-[.destructive]:richtext-text-red-300 group-[.destructive]:hover:richtext-text-red-50 group-[.destructive]:focus:richtext-ring-red-400 group-[.destructive]:focus:richtext-ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ u(cu, { className: "richtext-h-4 richtext-w-4" })
  }
));
Rf.displayName = Ne.Close.displayName;
const If = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Ne.Title,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
If.displayName = Ne.Title.displayName;
const Of = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Ne.Description,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-opacity-90", e),
    ...t
  }
));
Of.displayName = Ne.Description.displayName;
const Mx = Dn(
  "richtext-inline-flex richtext-items-center richtext-justify-center richtext-rounded-md richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-muted hover:richtext-text-muted-foreground focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=on]:richtext-bg-accent data-[state=on]:richtext-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "richtext-bg-transparent",
        outline: "richtext-border richtext-border-input richtext-bg-transparent hover:richtext-bg-accent hover:richtext-text-accent-foreground"
      },
      size: {
        default: "richtext-h-10 richtext-px-3",
        sm: "richtext-h-9 richtext-px-2",
        lg: "richtext-h-11 richtext-px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Pf = ne.forwardRef(({ className: e, variant: t, size: r, ...n }, i) => /* @__PURE__ */ u(
  uu.Root,
  {
    ref: i,
    className: Q(Mx({ variant: t, size: r, className: e })),
    ...n
  }
));
Pf.displayName = uu.Root.displayName;
const Lx = wr.Provider, Nf = wr.Root, kf = wr.Trigger, Za = ne.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u(
  wr.Content,
  {
    ref: n,
    sideOffset: t,
    className: Q(
      "richtext-z-50 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-text-popover-foreground richtext-shadow-md richtext-animate-in richtext-fade-in-0 richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
Za.displayName = wr.Content.displayName;
const $x = 1, _x = 1e6;
let hi = 0;
function Dx() {
  return hi = (hi + 1) % Number.MAX_SAFE_INTEGER, hi.toString();
}
const pi = /* @__PURE__ */ new Map();
function hc(e) {
  if (pi.has(e))
    return;
  const t = setTimeout(() => {
    pi.delete(e), dr({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, _x);
  pi.set(e, t);
}
function Bx(e, t) {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, $x)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === t.toast.id ? { ...r, ...t.toast } : r
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: r } = t;
      return r ? hc(r) : e.toasts.forEach((n) => {
        hc(n.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === r || r === void 0 ? {
            ...n,
            open: !1
          } : n
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((r) => r.id !== t.toastId)
      };
  }
}
const qr = [];
let Fr = { toasts: [] };
function dr(e) {
  Fr = Bx(Fr, e), qr.forEach((t) => {
    t(Fr);
  });
}
function jx({ ...e }) {
  const t = Dx(), r = (i) => dr({
    type: "UPDATE_TOAST",
    toast: { ...i, id: t }
  }), n = () => dr({ type: "DISMISS_TOAST", toastId: t });
  return dr({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (i) => {
        i || n();
      }
    }
  }), {
    id: t,
    dismiss: n,
    update: r
  };
}
function zx() {
  const [e, t] = ne.useState(Fr);
  return ne.useEffect(() => (qr.push(t), () => {
    const r = qr.indexOf(t);
    r > -1 && qr.splice(r, 1);
  }), [e]), {
    ...e,
    toast: jx,
    dismiss: (r) => dr({ type: "DISMISS_TOAST", toastId: r })
  };
}
const Mf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Qo.Root,
  {
    ref: r,
    className: Q(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-p-0 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-2 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u(
      Qo.Indicator,
      {
        className: Q("!richtext-flex !richtext-p-0 !richtext-items-center !richtext-justify-center !richtext-text-current"),
        children: /* @__PURE__ */ u(lu, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
Mf.displayName = Qo.Root.displayName;
const Hx = { padding: "0 12px 12px" }, qx = ({ width: e, maxWidth: t, height: r, onOk: n, children: i }) => {
  const { t: o } = Se(), [a, s] = re({
    width: "",
    height: "",
    maxWidth: ""
  });
  me(() => {
    s({
      width: e,
      height: r,
      maxWidth: t
    });
  }, [r, t, e]);
  function c(l) {
    l.preventDefault(), l.stopPropagation(), n(a);
  }
  return /* @__PURE__ */ O(Sr, { modal: !0, children: [
    /* @__PURE__ */ u(Ar, { asChild: !0, children: i }),
    /* @__PURE__ */ u(Kt, { children: /* @__PURE__ */ u("div", { style: Hx, children: /* @__PURE__ */ O("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: c, children: [
      /* @__PURE__ */ u(xt, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ u("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ u(
        ze,
        {
          type: "number",
          value: a.width,
          required: !0,
          onChange: (l) => s({ ...a, width: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ u(xt, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ u("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ u(
        ze,
        {
          type: "number",
          value: a.maxWidth,
          required: !0,
          onChange: (l) => s({ ...a, maxWidth: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ u(xt, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ u("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ u(
        ze,
        {
          type: "number",
          value: a.height,
          required: !0,
          onChange: (l) => s({ ...a, height: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ u(Ee, { type: "submit", className: "richtext-self-end richtext-mt-2", children: o("editor.link.dialog.button.apply") })
    ] }) }) })
  ] });
}, Yt = {
  youtube: {
    example: "https://www.youtube.com/watch?v=I4sMhHbHYXM",
    src: "https://www.youtube.com/embed/I4sMhHbHYXM",
    srcPrefix: "https://www.youtube.com/embed",
    linkRule: [
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\s/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[&?]v=)|youtu\.be\/)([\w-]{11})/
    ]
  },
  youku: {
    example: "https://v.youku.com/v_show/id_XNDM0NDM4MTcy.html?spm=a2h0c.8166622.PhoneSokuUgc_4.dtitle",
    src: "https://player.youku.com/embed/XNDM0NDM4MTcy",
    srcPrefix: "https://player.youku.com/embed",
    linkRule: [String.raw`v.youku.com\/v_show\/id_\w+\=*`],
    idRule: String.raw`id_\w+\=*`
  },
  bilibili: {
    example: "https://www.bilibili.com/video/BV1EJ411u7DN",
    src: "https://player.bilibili.com/player.html?bvid=BV1EJ411u7DN",
    srcPrefix: "https://player.bilibili.com/player.html?bvid",
    linkRule: [String.raw`www.bilibili.com\/video\/\w+`]
  },
  qqvideo: {
    example: "https://v.qq.com/x/cover/mzc0020006aw1mn/u0033nvzb5v.html",
    src: "https://v.qq.com/txp/iframe/player.html?vid=u0033nvzb5v",
    srcPrefix: "https://v.qq.com/txp/iframe/player.html?vid",
    linkRule: [String.raw`v.qq.com\/x\/cover\/\w+\/\w+`]
  },
  amap: {
    example: "https://ditu.amap.com/",
    src: "https://www.amap.com/place/B000A45467",
    srcPrefix: "",
    linkRule: [String.raw`\.amap\.com`]
  },
  baidu_map: {
    example: "https://j.map.baidu.com/15/fo",
    src: "https://j.map.baidu.com/15/fo",
    srcPrefix: "",
    linkRule: [String.raw`map\.baidu\.com`]
  },
  modao: {
    example: "https://free.modao.cc/app/2cd26580a6717a147454df7470e7ec464093cba3/embed/v2#screen=sk71k6d1dfxulzx",
    src: "https://free.modao.cc/app/6UkpAxcGE3nPz52GLqhnOZgC7MATBSy/embed/v2",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/\w+.modao.cc\/app\/\w+\/embed\/v2`],
    tips: "Modao > More > Share > Embed > COPY"
  },
  lanhu: {
    example: "https://lanhuapp.com/link/#/invite?sid=evP7L",
    src: "https://lanhuapp.com/url/evP7L",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/lanhuapp.com\/url\/\w+`],
    tips: "Lanhu > Project > Share > Copy Link"
  },
  figma: {
    example: "https://www.figma.com/file/aS9uSgPXoNpaPkzbjNcK8v/Demo?node-id=0%3A1",
    src: "https://www.figma.com/file/aS9uSgPXoNpaPkzbjNcK8v/Demo?node-id=0%3A1",
    srcPrefix: "https://www.figma.com/embed?embed_host=share&url",
    linkRule: [String.raw`https:\/\/www.figma.com\/file\/\w+`]
  },
  canva: {
    example: "https://www.canva.cn/design/DAD61-t29UI/view",
    src: "https://www.canva.cn/design/DAD61-t29UI/view",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/www.canva.cn\/design\/.+\/view`]
  },
  processon: {
    example: "https://www.processon.com/embed/5ea99d8607912948b0e6fe78",
    src: "https://www.processon.com/embed/5ea99d8607912948b0e6fe78",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/www.processon.com\/embed\/\w+`]
  },
  codepen: {
    example: "https://codepen.io/mekery/embed/YzyrKOJ",
    src: "https://codepen.io/mekery/embed/YzyrKOJ",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/codepen.io\/.+\/embed\/\w+`]
  },
  jinshuju: {
    example: "https://jinshuju.net/f/q9YvVf",
    src: "https://jinshuju.net/f/q9YvVf",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/jinshuju.net\/f\/\w+`]
  },
  iframe: {
    example: "https://v.youku.com/v_show/id_XNDM0NDM4MTcy.html",
    src: "https://player.youku.com/embed/XNDM0NDM4MTcy",
    srcPrefix: "",
    linkRule: [".+"]
  },
  googlemaps: {
    example: "https://goo.gl/maps/8Ys8b4K1ZJY2",
    src: "https://www.google.com/maps/embed?pb=https://goo.gl/maps/8Ys8b4K1ZJY2",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/goo.gl\/maps\/\w+`]
  }
};
function Fx(e) {
  const t = Yt.youtube, r = e.matchedUrl;
  e.validLink = !0;
  const n = r.split("="), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}/${o}`, e.validId = !0;
  }
  return e;
}
function Ux(e) {
  const t = Yt.youku, r = e.matchedUrl, n = t.idRule, i = new RegExp(n), o = r.match(i);
  if (o && o.length > 0) {
    const a = o[0].slice(3);
    e.validId = !0, e.src = `${t.srcPrefix}/${a}`;
  } else
    e.validId = !1;
  return e;
}
function Wx(e) {
  const t = Yt.bilibili, n = e.matchedUrl.split("/"), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}=${o}`, e.validId = !0;
  }
  return e;
}
function Gx(e) {
  const t = Yt.qqvideo, n = e.matchedUrl.split("/"), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}=${o}`, e.validId = !0;
  }
  return e;
}
function Vx(e, t) {
  return t.src = e, t.validId = !0, t;
}
function Kx(e, t) {
  return t.src = e, t.validId = !0, t;
}
function Yx(e, t) {
  return t.src = e, t.validId = !0, t.originalLink = e, t;
}
function Xx(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function Jx(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function Qx(e) {
  const t = Yt.figma;
  return e.src = `${t.srcPrefix}=${encodeURIComponent(e.matchedUrl)}`, e.validId = !0, e.originalLink = e.matchedUrl, e;
}
function Zx(e, t) {
  return t.src = `${t.matchedUrl}?embed`, t.validId = !0, t.originalLink = e, t;
}
function eb(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function tb(e) {
  return e.src = `${e.matchedUrl}`, e.validId = !0, e.originalLink = e.src, e;
}
function rb(e, t) {
  return t.src = `${t.matchedUrl}?background=white&banner=show&embedded=true`, t.validId = !0, t.originalLink = e, t;
}
function nb(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function ib(e, t, r) {
  if (e === "googlemaps")
    return r.validLink = !0, r.matchedUrl = t, r;
  const i = Yt[e].linkRule;
  for (const o of i) {
    const a = new RegExp(o), s = t.match(a);
    if (s && s.length > 0)
      return r.validLink = !0, r.matchedUrl = e === "youtube" ? s[1] : s[0], r;
  }
  return r;
}
function ob(e) {
  var r, n;
  let t = "iframe";
  return ((r = e.includes) != null && r.call(e, "youtube") || (n = e.includes) != null && n.call(e, "youtu.be")) && (t = "youtube"), e.includes("youku") && (t = "youku"), e.includes("bilibili") && (t = "bilibili"), e.includes("qq") && (t = "qqvideo"), e.includes("amap") && (t = "amap"), e.includes("map.baidu") && (t = "baidu_map"), (e.includes("google.com/maps") || e.includes("maps.app.goo.gl")) && (t = "googlemaps"), e.includes("modao") && (t = "modao"), e.includes("lanhuapp") && (t = "lanhu"), e.includes("figma") && (t = "figma"), e.includes("canva") && (t = "canva"), e.includes("processon") && (t = "processon"), e.includes("codepen") && (t = "codepen"), e.includes("jinshuju") && (t = "jinshuju"), e.includes("iframe") && (t = "iframe"), t;
}
function Lf(e) {
  let t = {
    validLink: !1,
    validId: !1,
    matchedUrl: "",
    originalLink: e,
    src: ""
  };
  const r = ob(e);
  if (t = ib(r, e, t), !t.validLink)
    return t;
  switch (r) {
    case "youtube":
      return Fx(t);
    case "youku":
      return Ux(t);
    case "bilibili":
      return Wx(t);
    case "qqvideo":
      return Gx(t);
    case "amap":
      return Vx(e, t);
    case "baidu_map":
      return Kx(e, t);
    case "googlemaps":
      return Yx(e, t);
    case "modao":
      return Xx(t);
    case "lanhu":
      return Jx(t);
    case "figma":
      return Qx(t);
    case "canva":
      return Zx(e, t);
    case "processon":
      return eb(e, t);
    case "codepen":
      return tb(t);
    case "jinshuju":
      return rb(e, t);
    case "iframe":
      return nb(e, t);
    default:
      return e;
  }
}
function ab() {
  const [e] = pf((t) => t.value);
  return e;
}
const sb = {
  setDisable: (e, t) => {
    Qa(Ut.EDIT(e), t);
  }
}, cb = "_wrap_5y04w_1", lb = "_innerWrap_5y04w_15", pc = {
  wrap: cb,
  innerWrap: lb
};
function ub({ editor: e, node: t, updateAttributes: r }) {
  const n = ab(), { src: i, width: o, height: a } = t.attrs, [s, c] = re("");
  function l() {
    if (!s)
      return;
    const f = Lf(s);
    e.chain().updateAttributes(jt.name, {
      src: (f == null ? void 0 : f.src) || s
    }).setNodeSelection(e.state.selection.from).focus().run();
  }
  const d = oe(
    (f) => {
      r({ width: f.width, height: f.height });
    },
    [r]
  );
  return /* @__PURE__ */ O(Ra, { children: [
    !i && /* @__PURE__ */ O("div", { className: "richtext-mx-auto richtext-my-[12px] richtext-flex richtext-max-w-[600px] richtext-items-center richtext-justify-center richtext-gap-[10px] richtext-rounded-[12px] richtext-border richtext-border-solid richtext-border-[#ccc] richtext-p-[10px]", children: [
      /* @__PURE__ */ u(
        ze,
        {
          autoFocus: !0,
          className: "richtext-flex-1",
          onInput: (f) => c(f.target.value),
          placeholder: "Enter link",
          type: "url",
          value: s
        }
      ),
      /* @__PURE__ */ u(
        Ee,
        {
          className: "richtext-w-[60px]",
          onClick: l,
          children: "OK"
        }
      )
    ] }),
    i && /* @__PURE__ */ u(
      dp,
      {
        size: { width: Number.parseInt(o), height: Number.parseInt(a) },
        onResizeStop: (f, h, p, m) => {
          d({
            width: Number.parseInt(o) + m.width,
            height: Number.parseInt(a) + m.height
          });
        },
        children: /* @__PURE__ */ u("div", { className: En(pc.wrap, "render-wrapper"), children: /* @__PURE__ */ u(
          "div",
          {
            className: pc.innerWrap,
            style: { pointerEvents: n ? "none" : "auto" },
            children: /* @__PURE__ */ u(
              "iframe",
              {
                className: "richtext-my-[12px] ",
                src: i
              }
            )
          }
        ) })
      }
    )
  ] });
}
const jt = /* @__PURE__ */ In.create({
  name: "iframe",
  content: "",
  marks: "",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "iframe"
      },
      button: ({
        editor: t,
        extension: r,
        t: n
      }) => ({
        component: K,
        componentProps: {
          action: (i) => t.commands.setIframe(i),
          upload: r.options.upload,
          disabled: !t.can().setIframe({}),
          icon: "Iframe",
          tooltip: n("editor.iframe.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      width: {
        default: 600,
        parseHTML: Jn("width")
      },
      height: {
        default: 300,
        parseHTML: Jn("height")
      },
      src: {
        default: null,
        parseHTML: Jn("src")
      },
      defaultShowPicker: {
        default: !1
      },
      frameborder: {
        default: 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["iframe", it(this.options.HTMLAttributes, e)];
  },
  addCommands() {
    return {
      setIframe: (e) => ({ tr: t, commands: r, chain: n }) => {
        var o, a, s;
        if (((s = (a = (o = t.selection) == null ? void 0 : o.node) == null ? void 0 : a.type) == null ? void 0 : s.name) == this.name)
          return r.updateAttributes(this.name, e);
        const i = e || { url: "" };
        return n().insertContent({
          type: this.name,
          attrs: i
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      du({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  },
  addNodeView() {
    return Ia(ub);
  }
});
var Tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function db(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var mi, mc;
function $f() {
  if (mc) return mi;
  mc = 1;
  var e = Object.prototype.toString;
  return mi = function(r) {
    var n = e.call(r), i = n === "[object Arguments]";
    return i || (i = n !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && e.call(r.callee) === "[object Function]"), i;
  }, mi;
}
var gi, gc;
function hb() {
  if (gc) return gi;
  gc = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = $f(), i = Object.prototype.propertyIsEnumerable, o = !i.call({ toString: null }, "toString"), a = i.call(function() {
    }, "prototype"), s = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], c = function(h) {
      var p = h.constructor;
      return p && p.prototype === h;
    }, l = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, d = function() {
      if (typeof window > "u")
        return !1;
      for (var h in window)
        try {
          if (!l["$" + h] && t.call(window, h) && window[h] !== null && typeof window[h] == "object")
            try {
              c(window[h]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), f = function(h) {
      if (typeof window > "u" || !d)
        return c(h);
      try {
        return c(h);
      } catch {
        return !1;
      }
    };
    e = function(p) {
      var m = p !== null && typeof p == "object", g = r.call(p) === "[object Function]", v = n(p), b = m && r.call(p) === "[object String]", w = [];
      if (!m && !g && !v)
        throw new TypeError("Object.keys called on a non-object");
      var S = a && g;
      if (b && p.length > 0 && !t.call(p, 0))
        for (var A = 0; A < p.length; ++A)
          w.push(String(A));
      if (v && p.length > 0)
        for (var E = 0; E < p.length; ++E)
          w.push(String(E));
      else
        for (var N in p)
          !(S && N === "prototype") && t.call(p, N) && w.push(String(N));
      if (o)
        for (var M = f(p), I = 0; I < s.length; ++I)
          !(M && s[I] === "constructor") && t.call(p, s[I]) && w.push(s[I]);
      return w;
    };
  }
  return gi = e, gi;
}
var vi, vc;
function es() {
  if (vc) return vi;
  vc = 1;
  var e = Array.prototype.slice, t = $f(), r = Object.keys, n = r ? function(a) {
    return r(a);
  } : hb(), i = Object.keys;
  return n.shim = function() {
    if (Object.keys) {
      var a = function() {
        var s = Object.keys(arguments);
        return s && s.length === arguments.length;
      }(1, 2);
      a || (Object.keys = function(c) {
        return t(c) ? i(e.call(c)) : i(c);
      });
    } else
      Object.keys = n;
    return Object.keys || n;
  }, vi = n, vi;
}
var yi, yc;
function jn() {
  if (yc) return yi;
  yc = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return yi = e, yi;
}
var xi, xc;
function ts() {
  return xc || (xc = 1, xi = SyntaxError), xi;
}
var bi, bc;
function $e() {
  return bc || (bc = 1, bi = TypeError), bi;
}
var wi, wc;
function pb() {
  return wc || (wc = 1, wi = Object.getOwnPropertyDescriptor), wi;
}
var Si, Sc;
function kt() {
  if (Sc) return Si;
  Sc = 1;
  var e = /* @__PURE__ */ pb();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Si = e, Si;
}
var Ai, Ac;
function rs() {
  if (Ac) return Ai;
  Ac = 1;
  var e = /* @__PURE__ */ jn(), t = /* @__PURE__ */ ts(), r = /* @__PURE__ */ $e(), n = /* @__PURE__ */ kt();
  return Ai = function(o, a, s) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new r("`obj` must be an object or a function`");
    if (typeof a != "string" && typeof a != "symbol")
      throw new r("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new r("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new r("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new r("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new r("`loose`, if provided, must be a boolean");
    var c = arguments.length > 3 ? arguments[3] : null, l = arguments.length > 4 ? arguments[4] : null, d = arguments.length > 5 ? arguments[5] : null, f = arguments.length > 6 ? arguments[6] : !1, h = !!n && n(o, a);
    if (e)
      e(o, a, {
        configurable: d === null && h ? h.configurable : !d,
        enumerable: c === null && h ? h.enumerable : !c,
        value: s,
        writable: l === null && h ? h.writable : !l
      });
    else if (f || !c && !l && !d)
      o[a] = s;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, Ai;
}
var Ci, Cc;
function ns() {
  if (Cc) return Ci;
  Cc = 1;
  var e = /* @__PURE__ */ jn(), t = function() {
    return !!e;
  };
  return t.hasArrayLengthDefineBug = function() {
    if (!e)
      return null;
    try {
      return e([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, Ci = t, Ci;
}
var Ti, Tc;
function Mt() {
  if (Tc) return Ti;
  Tc = 1;
  var e = es(), t = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", r = Object.prototype.toString, n = Array.prototype.concat, i = /* @__PURE__ */ rs(), o = function(l) {
    return typeof l == "function" && r.call(l) === "[object Function]";
  }, a = /* @__PURE__ */ ns()(), s = function(l, d, f, h) {
    if (d in l) {
      if (h === !0) {
        if (l[d] === f)
          return;
      } else if (!o(h) || !h())
        return;
    }
    a ? i(l, d, f, !0) : i(l, d, f);
  }, c = function(l, d) {
    var f = arguments.length > 2 ? arguments[2] : {}, h = e(d);
    t && (h = n.call(h, Object.getOwnPropertySymbols(d)));
    for (var p = 0; p < h.length; p += 1)
      s(l, h[p], d[h[p]], f[h[p]]);
  };
  return c.supportsDescriptors = !!a, Ti = c, Ti;
}
var Ei = { exports: {} }, Ri, Ec;
function is() {
  return Ec || (Ec = 1, Ri = Object), Ri;
}
var Ii, Rc;
function _f() {
  return Rc || (Rc = 1, Ii = Error), Ii;
}
var Oi, Ic;
function mb() {
  return Ic || (Ic = 1, Oi = EvalError), Oi;
}
var Pi, Oc;
function gb() {
  return Oc || (Oc = 1, Pi = RangeError), Pi;
}
var Ni, Pc;
function vb() {
  return Pc || (Pc = 1, Ni = ReferenceError), Ni;
}
var ki, Nc;
function yb() {
  return Nc || (Nc = 1, ki = URIError), ki;
}
var Mi, kc;
function xb() {
  return kc || (kc = 1, Mi = Math.abs), Mi;
}
var Li, Mc;
function bb() {
  return Mc || (Mc = 1, Li = Math.floor), Li;
}
var $i, Lc;
function wb() {
  return Lc || (Lc = 1, $i = Math.max), $i;
}
var _i, $c;
function Sb() {
  return $c || ($c = 1, _i = Math.min), _i;
}
var Di, _c;
function Ab() {
  return _c || (_c = 1, Di = Math.pow), Di;
}
var Bi, Dc;
function Cb() {
  return Dc || (Dc = 1, Bi = Math.round), Bi;
}
var ji, Bc;
function Tb() {
  return Bc || (Bc = 1, ji = Number.isNaN || function(t) {
    return t !== t;
  }), ji;
}
var zi, jc;
function Eb() {
  if (jc) return zi;
  jc = 1;
  var e = /* @__PURE__ */ Tb();
  return zi = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, zi;
}
var Hi, zc;
function zn() {
  return zc || (zc = 1, Hi = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (var o in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (s.value !== i || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Hi;
}
var qi, Hc;
function os() {
  if (Hc) return qi;
  Hc = 1;
  var e = typeof Symbol < "u" && Symbol, t = zn();
  return qi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, qi;
}
var Fi, qc;
function Df() {
  return qc || (qc = 1, Fi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Fi;
}
var Ui, Fc;
function Bf() {
  if (Fc) return Ui;
  Fc = 1;
  var e = /* @__PURE__ */ is();
  return Ui = e.getPrototypeOf || null, Ui;
}
var Wi, Uc;
function Rb() {
  if (Uc) return Wi;
  Uc = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(c, l) {
    for (var d = [], f = 0; f < c.length; f += 1)
      d[f] = c[f];
    for (var h = 0; h < l.length; h += 1)
      d[h + c.length] = l[h];
    return d;
  }, o = function(c, l) {
    for (var d = [], f = l, h = 0; f < c.length; f += 1, h += 1)
      d[h] = c[f];
    return d;
  }, a = function(s, c) {
    for (var l = "", d = 0; d < s.length; d += 1)
      l += s[d], d + 1 < s.length && (l += c);
    return l;
  };
  return Wi = function(c) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== n)
      throw new TypeError(e + l);
    for (var d = o(arguments, 1), f, h = function() {
      if (this instanceof f) {
        var b = l.apply(
          this,
          i(d, arguments)
        );
        return Object(b) === b ? b : this;
      }
      return l.apply(
        c,
        i(d, arguments)
      );
    }, p = r(0, l.length - d.length), m = [], g = 0; g < p; g++)
      m[g] = "$" + g;
    if (f = Function("binder", "return function (" + a(m, ",") + "){ return binder.apply(this,arguments); }")(h), l.prototype) {
      var v = function() {
      };
      v.prototype = l.prototype, f.prototype = new v(), v.prototype = null;
    }
    return f;
  }, Wi;
}
var Gi, Wc;
function Cr() {
  if (Wc) return Gi;
  Wc = 1;
  var e = Rb();
  return Gi = Function.prototype.bind || e, Gi;
}
var Vi, Gc;
function as() {
  return Gc || (Gc = 1, Vi = Function.prototype.call), Vi;
}
var Ki, Vc;
function ss() {
  return Vc || (Vc = 1, Ki = Function.prototype.apply), Ki;
}
var Yi, Kc;
function Ib() {
  return Kc || (Kc = 1, Yi = typeof Reflect < "u" && Reflect && Reflect.apply), Yi;
}
var Xi, Yc;
function jf() {
  if (Yc) return Xi;
  Yc = 1;
  var e = Cr(), t = ss(), r = as(), n = Ib();
  return Xi = n || e.call(r, t), Xi;
}
var Ji, Xc;
function cs() {
  if (Xc) return Ji;
  Xc = 1;
  var e = Cr(), t = /* @__PURE__ */ $e(), r = as(), n = jf();
  return Ji = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, Ji;
}
var Qi, Jc;
function Ob() {
  if (Jc) return Qi;
  Jc = 1;
  var e = cs(), t = /* @__PURE__ */ kt(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return Qi = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return o(s == null ? s : i(s));
    }
  ) : !1, Qi;
}
var Zi, Qc;
function zf() {
  if (Qc) return Zi;
  Qc = 1;
  var e = Df(), t = Bf(), r = /* @__PURE__ */ Ob();
  return Zi = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, Zi;
}
var eo, Zc;
function ls() {
  if (Zc) return eo;
  Zc = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Cr();
  return eo = r.call(e, t), eo;
}
var to, el;
function ct() {
  if (el) return to;
  el = 1;
  var e, t = /* @__PURE__ */ is(), r = /* @__PURE__ */ _f(), n = /* @__PURE__ */ mb(), i = /* @__PURE__ */ gb(), o = /* @__PURE__ */ vb(), a = /* @__PURE__ */ ts(), s = /* @__PURE__ */ $e(), c = /* @__PURE__ */ yb(), l = /* @__PURE__ */ xb(), d = /* @__PURE__ */ bb(), f = /* @__PURE__ */ wb(), h = /* @__PURE__ */ Sb(), p = /* @__PURE__ */ Ab(), m = /* @__PURE__ */ Cb(), g = /* @__PURE__ */ Eb(), v = Function, b = function(te) {
    try {
      return v('"use strict"; return (' + te + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ kt(), S = /* @__PURE__ */ jn(), A = function() {
    throw new s();
  }, E = w ? function() {
    try {
      return arguments.callee, A;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return A;
      }
    }
  }() : A, N = os()(), M = zf(), I = Bf(), k = Df(), _ = ss(), C = as(), P = {}, $ = typeof Uint8Array > "u" || !M ? e : M(Uint8Array), B = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": N && M ? M([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": P,
    "%AsyncGenerator%": P,
    "%AsyncGeneratorFunction%": P,
    "%AsyncIteratorPrototype%": P,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": v,
    "%GeneratorFunction%": P,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": N && M ? M(M([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !N || !M ? e : M((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": w,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !N || !M ? e : M((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": N && M ? M(""[Symbol.iterator]()) : e,
    "%Symbol%": N ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": E,
    "%TypedArray%": $,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": C,
    "%Function.prototype.apply%": _,
    "%Object.defineProperty%": S,
    "%Object.getPrototypeOf%": I,
    "%Math.abs%": l,
    "%Math.floor%": d,
    "%Math.max%": f,
    "%Math.min%": h,
    "%Math.pow%": p,
    "%Math.round%": m,
    "%Math.sign%": g,
    "%Reflect.getPrototypeOf%": k
  };
  if (M)
    try {
      null.error;
    } catch (te) {
      var W = M(M(te));
      B["%Error.prototype%"] = W;
    }
  var z = function te(j) {
    var H;
    if (j === "%AsyncFunction%")
      H = b("async function () {}");
    else if (j === "%GeneratorFunction%")
      H = b("function* () {}");
    else if (j === "%AsyncGeneratorFunction%")
      H = b("async function* () {}");
    else if (j === "%AsyncGenerator%") {
      var D = te("%AsyncGeneratorFunction%");
      D && (H = D.prototype);
    } else if (j === "%AsyncIteratorPrototype%") {
      var G = te("%AsyncGenerator%");
      G && M && (H = M(G.prototype));
    }
    return B[j] = H, H;
  }, Z = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, J = Cr(), ee = /* @__PURE__ */ ls(), ge = J.call(C, Array.prototype.concat), he = J.call(_, Array.prototype.splice), _e = J.call(C, String.prototype.replace), De = J.call(C, String.prototype.slice), T = J.call(C, RegExp.prototype.exec), L = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, F = /\\(\\)?/g, q = function(j) {
    var H = De(j, 0, 1), D = De(j, -1);
    if (H === "%" && D !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (D === "%" && H !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var G = [];
    return _e(j, L, function(pe, ve, ye, we) {
      G[G.length] = ye ? _e(we, F, "$1") : ve || pe;
    }), G;
  }, X = function(j, H) {
    var D = j, G;
    if (ee(Z, D) && (G = Z[D], D = "%" + G[0] + "%"), ee(B, D)) {
      var pe = B[D];
      if (pe === P && (pe = z(D)), typeof pe > "u" && !H)
        throw new s("intrinsic " + j + " exists, but is not available. Please file an issue!");
      return {
        alias: G,
        name: D,
        value: pe
      };
    }
    throw new a("intrinsic " + j + " does not exist!");
  };
  return to = function(j, H) {
    if (typeof j != "string" || j.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof H != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (T(/^%?[^%]*%?$/, j) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var D = q(j), G = D.length > 0 ? D[0] : "", pe = X("%" + G + "%", H), ve = pe.name, ye = pe.value, we = !1, Ce = pe.alias;
    Ce && (G = Ce[0], he(D, ge([0, 1], Ce)));
    for (var Ye = 1, Be = !0; Ye < D.length; Ye += 1) {
      var Re = D[Ye], Xe = De(Re, 0, 1), Je = De(Re, -1);
      if ((Xe === '"' || Xe === "'" || Xe === "`" || Je === '"' || Je === "'" || Je === "`") && Xe !== Je)
        throw new a("property names with quotes must have matching quotes");
      if ((Re === "constructor" || !Be) && (we = !0), G += "." + Re, ve = "%" + G + "%", ee(B, ve))
        ye = B[ve];
      else if (ye != null) {
        if (!(Re in ye)) {
          if (!H)
            throw new s("base intrinsic for " + j + " exists, but the property is not available.");
          return;
        }
        if (w && Ye + 1 >= D.length) {
          var Qe = w(ye, Re);
          Be = !!Qe, Be && "get" in Qe && !("originalValue" in Qe.get) ? ye = Qe.get : ye = ye[Re];
        } else
          Be = ee(ye, Re), ye = ye[Re];
        Be && !we && (B[ve] = ye);
      }
    }
    return ye;
  }, to;
}
var ro, tl;
function Pb() {
  if (tl) return ro;
  tl = 1;
  var e = /* @__PURE__ */ ct(), t = /* @__PURE__ */ rs(), r = /* @__PURE__ */ ns()(), n = /* @__PURE__ */ kt(), i = /* @__PURE__ */ $e(), o = e("%Math.floor%");
  return ro = function(s, c) {
    if (typeof s != "function")
      throw new i("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || o(c) !== c)
      throw new i("`length` must be a positive 32-bit integer");
    var l = arguments.length > 2 && !!arguments[2], d = !0, f = !0;
    if ("length" in s && n) {
      var h = n(s, "length");
      h && !h.configurable && (d = !1), h && !h.writable && (f = !1);
    }
    return (d || f || !l) && (r ? t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c,
      !0,
      !0
    ) : t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c
    )), s;
  }, ro;
}
var no, rl;
function Nb() {
  if (rl) return no;
  rl = 1;
  var e = Cr(), t = ss(), r = jf();
  return no = function() {
    return r(e, t, arguments);
  }, no;
}
var nl;
function Xt() {
  return nl || (nl = 1, function(e) {
    var t = /* @__PURE__ */ Pb(), r = /* @__PURE__ */ jn(), n = cs(), i = Nb();
    e.exports = function(a) {
      var s = n(arguments), c = a.length - (arguments.length - 1);
      return t(
        s,
        1 + (c > 0 ? c : 0),
        !0
      );
    }, r ? r(e.exports, "apply", { value: i }) : e.exports.apply = i;
  }(Ei)), Ei.exports;
}
var io, il;
function Ae() {
  if (il) return io;
  il = 1;
  var e = /* @__PURE__ */ ct(), t = cs(), r = t([e("%String.prototype.indexOf%")]);
  return io = function(i, o) {
    var a = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(i, !!o)
    );
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t([a]) : a;
  }, io;
}
var oo, ol;
function Hf() {
  if (ol) return oo;
  ol = 1;
  var e = es(), t = zn()(), r = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ is(), i = r("Array.prototype.push"), o = r("Object.prototype.propertyIsEnumerable"), a = t ? n.getOwnPropertySymbols : null;
  return oo = function(c, l) {
    if (c == null)
      throw new TypeError("target must be an object");
    var d = n(c);
    if (arguments.length === 1)
      return d;
    for (var f = 1; f < arguments.length; ++f) {
      var h = n(arguments[f]), p = e(h), m = t && (n.getOwnPropertySymbols || a);
      if (m)
        for (var g = m(h), v = 0; v < g.length; ++v) {
          var b = g[v];
          o(h, b) && i(p, b);
        }
      for (var w = 0; w < p.length; ++w) {
        var S = p[w];
        if (o(h, S)) {
          var A = h[S];
          d[S] = A;
        }
      }
    }
    return d;
  }, oo;
}
var ao, al;
function qf() {
  if (al) return ao;
  al = 1;
  var e = Hf(), t = function() {
    if (!Object.assign)
      return !1;
    for (var n = "abcdefghijklmnopqrst", i = n.split(""), o = {}, a = 0; a < i.length; ++a)
      o[i[a]] = i[a];
    var s = Object.assign({}, o), c = "";
    for (var l in s)
      c += l;
    return n !== c;
  }, r = function() {
    if (!Object.assign || !Object.preventExtensions)
      return !1;
    var n = Object.preventExtensions({ 1: 2 });
    try {
      Object.assign(n, "xy");
    } catch {
      return n[1] === "y";
    }
    return !1;
  };
  return ao = function() {
    return !Object.assign || t() || r() ? e : Object.assign;
  }, ao;
}
var so, sl;
function kb() {
  if (sl) return so;
  sl = 1;
  var e = Mt(), t = qf();
  return so = function() {
    var n = t();
    return e(
      Object,
      { assign: n },
      { assign: function() {
        return Object.assign !== n;
      } }
    ), n;
  }, so;
}
var co, cl;
function Mb() {
  if (cl) return co;
  cl = 1;
  var e = Mt(), t = Xt(), r = Hf(), n = qf(), i = kb(), o = t.apply(n()), a = function(c, l) {
    return o(Object, arguments);
  };
  return e(a, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), co = a, co;
}
var lo, ll;
function Ff() {
  if (ll) return lo;
  ll = 1;
  var e = /* @__PURE__ */ ct(), t = Xt(), r = t(e("String.prototype.indexOf"));
  return lo = function(i, o) {
    var a = e(i, !!o);
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t(a) : a;
  }, lo;
}
var uo, ul;
function Lb() {
  if (ul) return uo;
  ul = 1;
  var e = function() {
    return typeof (function() {
    }).name == "string";
  }, t = Object.getOwnPropertyDescriptor;
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  e.functionsHaveConfigurableNames = function() {
    if (!e() || !t)
      return !1;
    var i = t(function() {
    }, "name");
    return !!i && !!i.configurable;
  };
  var r = Function.prototype.bind;
  return e.boundFunctionsHaveNames = function() {
    return e() && typeof r == "function" && (function() {
    }).bind().name !== "";
  }, uo = e, uo;
}
var fo, fl;
function $b() {
  if (fl) return fo;
  fl = 1;
  var e = /* @__PURE__ */ rs(), t = /* @__PURE__ */ ns()(), r = Lb().functionsHaveConfigurableNames(), n = /* @__PURE__ */ $e();
  return fo = function(o, a) {
    if (typeof o != "function")
      throw new n("`fn` is not a function");
    var s = arguments.length > 2 && !!arguments[2];
    return (!s || r) && (t ? e(
      /** @type {Parameters<define>[0]} */
      o,
      "name",
      a,
      !0,
      !0
    ) : e(
      /** @type {Parameters<define>[0]} */
      o,
      "name",
      a
    )), o;
  }, fo;
}
var ho, dl;
function Uf() {
  if (dl) return ho;
  dl = 1;
  var e = $b(), t = /* @__PURE__ */ $e(), r = Object;
  return ho = e(function() {
    if (this == null || this !== r(this))
      throw new t("RegExp.prototype.flags getter called on non-object");
    var i = "";
    return this.hasIndices && (i += "d"), this.global && (i += "g"), this.ignoreCase && (i += "i"), this.multiline && (i += "m"), this.dotAll && (i += "s"), this.unicode && (i += "u"), this.unicodeSets && (i += "v"), this.sticky && (i += "y"), i;
  }, "get flags", !0), ho;
}
var po, hl;
function Wf() {
  if (hl) return po;
  hl = 1;
  var e = Uf(), t = Mt().supportsDescriptors, r = Object.getOwnPropertyDescriptor;
  return po = function() {
    if (t && /a/mig.flags === "gim") {
      var i = r(RegExp.prototype, "flags");
      if (i && typeof i.get == "function" && "dotAll" in RegExp.prototype && "hasIndices" in RegExp.prototype) {
        var o = "", a = {};
        if (Object.defineProperty(a, "hasIndices", {
          get: function() {
            o += "d";
          }
        }), Object.defineProperty(a, "sticky", {
          get: function() {
            o += "y";
          }
        }), i.get.call(a), o === "dy")
          return i.get;
      }
    }
    return e;
  }, po;
}
var mo, pl;
function _b() {
  if (pl) return mo;
  pl = 1;
  var e = Mt().supportsDescriptors, t = Wf(), r = /* @__PURE__ */ kt(), n = Object.defineProperty, i = /* @__PURE__ */ _f(), o = zf(), a = /a/;
  return mo = function() {
    if (!e || !o)
      throw new i("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
    var c = t(), l = o(a), d = r(l, "flags");
    return (!d || d.get !== c) && n(l, "flags", {
      configurable: !0,
      enumerable: !1,
      get: c
    }), c;
  }, mo;
}
var go, ml;
function Db() {
  if (ml) return go;
  ml = 1;
  var e = Mt(), t = Xt(), r = Uf(), n = Wf(), i = _b(), o = t(n());
  return e(o, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), go = o, go;
}
var nr = { exports: {} }, vo, gl;
function Lt() {
  if (gl) return vo;
  gl = 1;
  var e = zn();
  return vo = function() {
    return e() && !!Symbol.toStringTag;
  }, vo;
}
var yo, vl;
function Gf() {
  if (vl) return yo;
  vl = 1;
  var e = Lt()(), t = /* @__PURE__ */ Ae(), r = t("Object.prototype.toString"), n = function(s) {
    return e && s && typeof s == "object" && Symbol.toStringTag in s ? !1 : r(s) === "[object Arguments]";
  }, i = function(s) {
    return n(s) ? !0 : s !== null && typeof s == "object" && "length" in s && typeof s.length == "number" && s.length >= 0 && r(s) !== "[object Array]" && "callee" in s && r(s.callee) === "[object Function]";
  }, o = function() {
    return n(arguments);
  }();
  return n.isLegacyArguments = i, yo = o ? n : i, yo;
}
const Bb = {}, jb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bb
}, Symbol.toStringTag, { value: "Module" })), zb = /* @__PURE__ */ db(jb);
var xo, yl;
function Hn() {
  if (yl) return xo;
  yl = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, s = i && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, l = c ? WeakMap.prototype.has : null, d = typeof WeakSet == "function" && WeakSet.prototype, f = d ? WeakSet.prototype.has : null, h = typeof WeakRef == "function" && WeakRef.prototype, p = h ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, g = Object.prototype.toString, v = Function.prototype.toString, b = String.prototype.match, w = String.prototype.slice, S = String.prototype.replace, A = String.prototype.toUpperCase, E = String.prototype.toLowerCase, N = RegExp.prototype.test, M = Array.prototype.concat, I = Array.prototype.join, k = Array.prototype.slice, _ = Math.floor, C = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, P = Object.getOwnPropertySymbols, $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, B = typeof Symbol == "function" && typeof Symbol.iterator == "object", W = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === B || !0) ? Symbol.toStringTag : null, z = Object.prototype.propertyIsEnumerable, Z = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(y) {
    return y.__proto__;
  } : null);
  function J(y, x) {
    if (y === 1 / 0 || y === -1 / 0 || y !== y || y && y > -1e3 && y < 1e3 || N.call(/e/, x))
      return x;
    var ie = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof y == "number") {
      var ae = y < 0 ? -_(-y) : _(y);
      if (ae !== y) {
        var se = String(ae), Y = w.call(x, se.length + 1);
        return S.call(se, ie, "$&_") + "." + S.call(S.call(Y, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return S.call(x, ie, "$&_");
  }
  var ee = zb, ge = ee.custom, he = pe(ge) ? ge : null, _e = {
    __proto__: null,
    double: '"',
    single: "'"
  }, De = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  xo = function y(x, ie, ae, se) {
    var Y = ie || {};
    if (we(Y, "quoteStyle") && !we(_e, Y.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (we(Y, "maxStringLength") && (typeof Y.maxStringLength == "number" ? Y.maxStringLength < 0 && Y.maxStringLength !== 1 / 0 : Y.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var ft = we(Y, "customInspect") ? Y.customInspect : !0;
    if (typeof ft != "boolean" && ft !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (we(Y, "indent") && Y.indent !== null && Y.indent !== "	" && !(parseInt(Y.indent, 10) === Y.indent && Y.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (we(Y, "numericSeparator") && typeof Y.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var At = Y.numericSeparator;
    if (typeof x > "u")
      return "undefined";
    if (x === null)
      return "null";
    if (typeof x == "boolean")
      return x ? "true" : "false";
    if (typeof x == "string")
      return $t(x, Y);
    if (typeof x == "number") {
      if (x === 0)
        return 1 / 0 / x > 0 ? "0" : "-0";
      var Pe = String(x);
      return At ? J(x, Pe) : Pe;
    }
    if (typeof x == "bigint") {
      var dt = String(x) + "n";
      return At ? J(x, dt) : dt;
    }
    var Un = typeof Y.depth > "u" ? 5 : Y.depth;
    if (typeof ae > "u" && (ae = 0), ae >= Un && Un > 0 && typeof x == "object")
      return q(x) ? "[Array]" : "[Object]";
    var _t = cd(Y, ae);
    if (typeof se > "u")
      se = [];
    else if (Be(se, x) >= 0)
      return "[Circular]";
    function je(Dt, Ir, ud) {
      if (Ir && (se = k.call(se), se.push(Ir)), ud) {
        var xs = {
          depth: Y.depth
        };
        return we(Y, "quoteStyle") && (xs.quoteStyle = Y.quoteStyle), y(Dt, xs, ae + 1, se);
      }
      return y(Dt, Y, ae + 1, se);
    }
    if (typeof x == "function" && !te(x)) {
      var ds = Ye(x), hs = Er(x, je);
      return "[Function" + (ds ? ": " + ds : " (anonymous)") + "]" + (hs.length > 0 ? " { " + I.call(hs, ", ") + " }" : "");
    }
    if (pe(x)) {
      var ps = B ? S.call(String(x), /^(Symbol\(.*\))_[^)]*$/, "$1") : $.call(x);
      return typeof x == "object" && !B ? ut(ps) : ps;
    }
    if (lt(x)) {
      for (var Qt = "<" + E.call(String(x.nodeName)), Wn = x.attributes || [], Rr = 0; Rr < Wn.length; Rr++)
        Qt += " " + Wn[Rr].name + "=" + T(L(Wn[Rr].value), "double", Y);
      return Qt += ">", x.childNodes && x.childNodes.length && (Qt += "..."), Qt += "</" + E.call(String(x.nodeName)) + ">", Qt;
    }
    if (q(x)) {
      if (x.length === 0)
        return "[]";
      var Gn = Er(x, je);
      return _t && !sd(Gn) ? "[" + Fn(Gn, _t) + "]" : "[ " + I.call(Gn, ", ") + " ]";
    }
    if (j(x)) {
      var Vn = Er(x, je);
      return !("cause" in Error.prototype) && "cause" in x && !z.call(x, "cause") ? "{ [" + String(x) + "] " + I.call(M.call("[cause]: " + je(x.cause), Vn), ", ") + " }" : Vn.length === 0 ? "[" + String(x) + "]" : "{ [" + String(x) + "] " + I.call(Vn, ", ") + " }";
    }
    if (typeof x == "object" && ft) {
      if (he && typeof x[he] == "function" && ee)
        return ee(x, { depth: Un - ae });
      if (ft !== "symbol" && typeof x.inspect == "function")
        return x.inspect();
    }
    if (Re(x)) {
      var ms = [];
      return n && n.call(x, function(Dt, Ir) {
        ms.push(je(Ir, x, !0) + " => " + je(Dt, x));
      }), fs("Map", r.call(x), ms, _t);
    }
    if (Qe(x)) {
      var gs = [];
      return s && s.call(x, function(Dt) {
        gs.push(je(Dt, x));
      }), fs("Set", a.call(x), gs, _t);
    }
    if (Xe(x))
      return qn("WeakMap");
    if (Tr(x))
      return qn("WeakSet");
    if (Je(x))
      return qn("WeakRef");
    if (D(x))
      return ut(je(Number(x)));
    if (ve(x))
      return ut(je(C.call(x)));
    if (G(x))
      return ut(m.call(x));
    if (H(x))
      return ut(je(String(x)));
    if (typeof window < "u" && x === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && x === globalThis || typeof Tn < "u" && x === Tn)
      return "{ [object globalThis] }";
    if (!X(x) && !te(x)) {
      var Kn = Er(x, je), vs = Z ? Z(x) === Object.prototype : x instanceof Object || x.constructor === Object, Yn = x instanceof Object ? "" : "null prototype", ys = !vs && W && Object(x) === x && W in x ? w.call(Ce(x), 8, -1) : Yn ? "Object" : "", ld = vs || typeof x.constructor != "function" ? "" : x.constructor.name ? x.constructor.name + " " : "", Xn = ld + (ys || Yn ? "[" + I.call(M.call([], ys || [], Yn || []), ": ") + "] " : "");
      return Kn.length === 0 ? Xn + "{}" : _t ? Xn + "{" + Fn(Kn, _t) + "}" : Xn + "{ " + I.call(Kn, ", ") + " }";
    }
    return String(x);
  };
  function T(y, x, ie) {
    var ae = ie.quoteStyle || x, se = _e[ae];
    return se + y + se;
  }
  function L(y) {
    return S.call(String(y), /"/g, "&quot;");
  }
  function F(y) {
    return !W || !(typeof y == "object" && (W in y || typeof y[W] < "u"));
  }
  function q(y) {
    return Ce(y) === "[object Array]" && F(y);
  }
  function X(y) {
    return Ce(y) === "[object Date]" && F(y);
  }
  function te(y) {
    return Ce(y) === "[object RegExp]" && F(y);
  }
  function j(y) {
    return Ce(y) === "[object Error]" && F(y);
  }
  function H(y) {
    return Ce(y) === "[object String]" && F(y);
  }
  function D(y) {
    return Ce(y) === "[object Number]" && F(y);
  }
  function G(y) {
    return Ce(y) === "[object Boolean]" && F(y);
  }
  function pe(y) {
    if (B)
      return y && typeof y == "object" && y instanceof Symbol;
    if (typeof y == "symbol")
      return !0;
    if (!y || typeof y != "object" || !$)
      return !1;
    try {
      return $.call(y), !0;
    } catch {
    }
    return !1;
  }
  function ve(y) {
    if (!y || typeof y != "object" || !C)
      return !1;
    try {
      return C.call(y), !0;
    } catch {
    }
    return !1;
  }
  var ye = Object.prototype.hasOwnProperty || function(y) {
    return y in this;
  };
  function we(y, x) {
    return ye.call(y, x);
  }
  function Ce(y) {
    return g.call(y);
  }
  function Ye(y) {
    if (y.name)
      return y.name;
    var x = b.call(v.call(y), /^function\s*([\w$]+)/);
    return x ? x[1] : null;
  }
  function Be(y, x) {
    if (y.indexOf)
      return y.indexOf(x);
    for (var ie = 0, ae = y.length; ie < ae; ie++)
      if (y[ie] === x)
        return ie;
    return -1;
  }
  function Re(y) {
    if (!r || !y || typeof y != "object")
      return !1;
    try {
      r.call(y);
      try {
        a.call(y);
      } catch {
        return !0;
      }
      return y instanceof Map;
    } catch {
    }
    return !1;
  }
  function Xe(y) {
    if (!l || !y || typeof y != "object")
      return !1;
    try {
      l.call(y, l);
      try {
        f.call(y, f);
      } catch {
        return !0;
      }
      return y instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Je(y) {
    if (!p || !y || typeof y != "object")
      return !1;
    try {
      return p.call(y), !0;
    } catch {
    }
    return !1;
  }
  function Qe(y) {
    if (!a || !y || typeof y != "object")
      return !1;
    try {
      a.call(y);
      try {
        r.call(y);
      } catch {
        return !0;
      }
      return y instanceof Set;
    } catch {
    }
    return !1;
  }
  function Tr(y) {
    if (!f || !y || typeof y != "object")
      return !1;
    try {
      f.call(y, f);
      try {
        l.call(y, l);
      } catch {
        return !0;
      }
      return y instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function lt(y) {
    return !y || typeof y != "object" ? !1 : typeof HTMLElement < "u" && y instanceof HTMLElement ? !0 : typeof y.nodeName == "string" && typeof y.getAttribute == "function";
  }
  function $t(y, x) {
    if (y.length > x.maxStringLength) {
      var ie = y.length - x.maxStringLength, ae = "... " + ie + " more character" + (ie > 1 ? "s" : "");
      return $t(w.call(y, 0, x.maxStringLength), x) + ae;
    }
    var se = De[x.quoteStyle || "single"];
    se.lastIndex = 0;
    var Y = S.call(S.call(y, se, "\\$1"), /[\x00-\x1f]/g, Jt);
    return T(Y, "single", x);
  }
  function Jt(y) {
    var x = y.charCodeAt(0), ie = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[x];
    return ie ? "\\" + ie : "\\x" + (x < 16 ? "0" : "") + A.call(x.toString(16));
  }
  function ut(y) {
    return "Object(" + y + ")";
  }
  function qn(y) {
    return y + " { ? }";
  }
  function fs(y, x, ie, ae) {
    var se = ae ? Fn(ie, ae) : I.call(ie, ", ");
    return y + " (" + x + ") {" + se + "}";
  }
  function sd(y) {
    for (var x = 0; x < y.length; x++)
      if (Be(y[x], `
`) >= 0)
        return !1;
    return !0;
  }
  function cd(y, x) {
    var ie;
    if (y.indent === "	")
      ie = "	";
    else if (typeof y.indent == "number" && y.indent > 0)
      ie = I.call(Array(y.indent + 1), " ");
    else
      return null;
    return {
      base: ie,
      prev: I.call(Array(x + 1), ie)
    };
  }
  function Fn(y, x) {
    if (y.length === 0)
      return "";
    var ie = `
` + x.prev + x.base;
    return ie + I.call(y, "," + ie) + `
` + x.prev;
  }
  function Er(y, x) {
    var ie = q(y), ae = [];
    if (ie) {
      ae.length = y.length;
      for (var se = 0; se < y.length; se++)
        ae[se] = we(y, se) ? x(y[se], y) : "";
    }
    var Y = typeof P == "function" ? P(y) : [], ft;
    if (B) {
      ft = {};
      for (var At = 0; At < Y.length; At++)
        ft["$" + Y[At]] = Y[At];
    }
    for (var Pe in y)
      we(y, Pe) && (ie && String(Number(Pe)) === Pe && Pe < y.length || B && ft["$" + Pe] instanceof Symbol || (N.call(/[^\w$]/, Pe) ? ae.push(x(Pe, y) + ": " + x(y[Pe], y)) : ae.push(Pe + ": " + x(y[Pe], y))));
    if (typeof P == "function")
      for (var dt = 0; dt < Y.length; dt++)
        z.call(y, Y[dt]) && ae.push("[" + x(Y[dt]) + "]: " + x(y[Y[dt]], y));
    return ae;
  }
  return xo;
}
var bo, xl;
function Hb() {
  if (xl) return bo;
  xl = 1;
  var e = /* @__PURE__ */ Hn(), t = /* @__PURE__ */ $e(), r = function(s, c, l) {
    for (var d = s, f; (f = d.next) != null; d = f)
      if (f.key === c)
        return d.next = f.next, l || (f.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = f), f;
  }, n = function(s, c) {
    if (s) {
      var l = r(s, c);
      return l && l.value;
    }
  }, i = function(s, c, l) {
    var d = r(s, c);
    d ? d.value = l : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: c,
      next: s.next,
      value: l
    };
  }, o = function(s, c) {
    return s ? !!r(s, c) : !1;
  }, a = function(s, c) {
    if (s)
      return r(s, c, !0);
  };
  return bo = function() {
    var c, l = {
      assert: function(d) {
        if (!l.has(d))
          throw new t("Side channel does not contain " + e(d));
      },
      delete: function(d) {
        var f = c && c.next, h = a(c, d);
        return h && f && f === h && (c = void 0), !!h;
      },
      get: function(d) {
        return n(c, d);
      },
      has: function(d) {
        return o(c, d);
      },
      set: function(d, f) {
        c || (c = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          c,
          d,
          f
        );
      }
    };
    return l;
  }, bo;
}
var wo, bl;
function Vf() {
  if (bl) return wo;
  bl = 1;
  var e = /* @__PURE__ */ ct(), t = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ Hn(), n = /* @__PURE__ */ $e(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return wo = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, h = {
      assert: function(p) {
        if (!h.has(p))
          throw new n("Side channel does not contain " + r(p));
      },
      delete: function(p) {
        if (f) {
          var m = c(f, p);
          return l(f) === 0 && (f = void 0), m;
        }
        return !1;
      },
      get: function(p) {
        if (f)
          return o(f, p);
      },
      has: function(p) {
        return f ? s(f, p) : !1;
      },
      set: function(p, m) {
        f || (f = new i()), a(f, p, m);
      }
    };
    return h;
  }, wo;
}
var So, wl;
function qb() {
  if (wl) return So;
  wl = 1;
  var e = /* @__PURE__ */ ct(), t = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ Hn(), n = Vf(), i = /* @__PURE__ */ $e(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return So = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, h, p = {
        assert: function(m) {
          if (!p.has(m))
            throw new i("Side channel does not contain " + r(m));
        },
        delete: function(m) {
          if (o && m && (typeof m == "object" || typeof m == "function")) {
            if (f)
              return l(f, m);
          } else if (n && h)
            return h.delete(m);
          return !1;
        },
        get: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && f ? a(f, m) : h && h.get(m);
        },
        has: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && f ? c(f, m) : !!h && h.has(m);
        },
        set: function(m, g) {
          o && m && (typeof m == "object" || typeof m == "function") ? (f || (f = new o()), s(f, m, g)) : n && (h || (h = n()), h.set(m, g));
        }
      };
      return p;
    }
  ) : n, So;
}
var Ao, Sl;
function Kf() {
  if (Sl) return Ao;
  Sl = 1;
  var e = /* @__PURE__ */ $e(), t = /* @__PURE__ */ Hn(), r = Hb(), n = Vf(), i = qb(), o = i || n || r;
  return Ao = function() {
    var s, c = {
      assert: function(l) {
        if (!c.has(l))
          throw new e("Side channel does not contain " + t(l));
      },
      delete: function(l) {
        return !!s && s.delete(l);
      },
      get: function(l) {
        return s && s.get(l);
      },
      has: function(l) {
        return !!s && s.has(l);
      },
      set: function(l, d) {
        s || (s = o()), s.set(l, d);
      }
    };
    return c;
  }, Ao;
}
var Co, Al;
function Fb() {
  if (Al) return Co;
  Al = 1;
  var e = /* @__PURE__ */ ls(), t = Kf()(), r = /* @__PURE__ */ $e(), n = {
    assert: function(i, o) {
      if (!i || typeof i != "object" && typeof i != "function")
        throw new r("`O` is not an object");
      if (typeof o != "string")
        throw new r("`slot` must be a string");
      if (t.assert(i), !n.has(i, o))
        throw new r("`" + o + "` is not present on `O`");
    },
    get: function(i, o) {
      if (!i || typeof i != "object" && typeof i != "function")
        throw new r("`O` is not an object");
      if (typeof o != "string")
        throw new r("`slot` must be a string");
      var a = t.get(i);
      return a && a[
        /** @type {SaltedInternalSlot} */
        "$" + o
      ];
    },
    has: function(i, o) {
      if (!i || typeof i != "object" && typeof i != "function")
        throw new r("`O` is not an object");
      if (typeof o != "string")
        throw new r("`slot` must be a string");
      var a = t.get(i);
      return !!a && e(
        a,
        /** @type {SaltedInternalSlot} */
        "$" + o
      );
    },
    set: function(i, o, a) {
      if (!i || typeof i != "object" && typeof i != "function")
        throw new r("`O` is not an object");
      if (typeof o != "string")
        throw new r("`slot` must be a string");
      var s = t.get(i);
      s || (s = {}, t.set(i, s)), s[
        /** @type {SaltedInternalSlot} */
        "$" + o
      ] = a;
    }
  };
  return Object.freeze && Object.freeze(n), Co = n, Co;
}
var To, Cl;
function Ub() {
  if (Cl) return To;
  Cl = 1;
  var e = Fb(), t = /* @__PURE__ */ ts(), r = typeof StopIteration == "object" ? StopIteration : null;
  return To = function(i) {
    if (!r)
      throw new t("this environment lacks StopIteration");
    e.set(i, "[[Done]]", !1);
    var o = {
      next: (
        /** @type {() => IteratorResult<T>} */
        function() {
          var s = (
            /** @type {typeof origIterator} */
            e.get(this, "[[Iterator]]")
          ), c = !!e.get(s, "[[Done]]");
          try {
            return {
              done: c,
              // eslint-disable-next-line no-extra-parens
              value: c ? void 0 : (
                /** @type {T} */
                s.next()
              )
            };
          } catch (l) {
            if (e.set(s, "[[Done]]", !0), l !== r)
              throw l;
            return {
              done: !0,
              value: void 0
            };
          }
        }
      )
    };
    return e.set(o, "[[Iterator]]", i), o;
  }, To;
}
var Eo, Tl;
function Yf() {
  if (Tl) return Eo;
  Tl = 1;
  var e = {}.toString;
  return Eo = Array.isArray || function(t) {
    return e.call(t) == "[object Array]";
  }, Eo;
}
var Ro, El;
function Xf() {
  if (El) return Ro;
  El = 1;
  var e = /* @__PURE__ */ Ae(), t = e("String.prototype.valueOf"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object String]", o = Lt()();
  return Ro = function(s) {
    return typeof s == "string" ? !0 : !s || typeof s != "object" ? !1 : o ? r(s) : n(s) === i;
  }, Ro;
}
var Io, Rl;
function Jf() {
  if (Rl) return Io;
  Rl = 1;
  var e = typeof Map == "function" && Map.prototype ? Map : null, t = typeof Set == "function" && Set.prototype ? Set : null, r;
  e || (r = function(a) {
    return !1;
  });
  var n = e ? Map.prototype.has : null, i = t ? Set.prototype.has : null;
  return !r && !n && (r = function(a) {
    return !1;
  }), Io = r || function(a) {
    if (!a || typeof a != "object")
      return !1;
    try {
      if (n.call(a), i)
        try {
          i.call(a);
        } catch {
          return !0;
        }
      return a instanceof e;
    } catch {
    }
    return !1;
  }, Io;
}
var Oo, Il;
function Qf() {
  if (Il) return Oo;
  Il = 1;
  var e = typeof Map == "function" && Map.prototype ? Map : null, t = typeof Set == "function" && Set.prototype ? Set : null, r;
  t || (r = function(a) {
    return !1;
  });
  var n = e ? Map.prototype.has : null, i = t ? Set.prototype.has : null;
  return !r && !i && (r = function(a) {
    return !1;
  }), Oo = r || function(a) {
    if (!a || typeof a != "object")
      return !1;
    try {
      if (i.call(a), n)
        try {
          n.call(a);
        } catch {
          return !0;
        }
      return a instanceof t;
    } catch {
    }
    return !1;
  }, Oo;
}
var Ol;
function Wb() {
  if (Ol) return nr.exports;
  Ol = 1;
  var e = /* @__PURE__ */ Gf(), t = /* @__PURE__ */ Ub();
  if (os()() || zn()()) {
    var r = Symbol.iterator;
    nr.exports = function(k) {
      if (k != null && typeof k[r] < "u")
        return k[r]();
      if (e(k))
        return Array.prototype[r].call(k);
    };
  } else {
    var n = Yf(), i = Xf(), o = /* @__PURE__ */ ct(), a = o("%Map%", !0), s = o("%Set%", !0), c = Ff(), l = c("Array.prototype.push"), d = c("String.prototype.charCodeAt"), f = c("String.prototype.slice"), h = function(k, _) {
      var C = k.length;
      if (_ + 1 >= C)
        return _ + 1;
      var P = d(k, _);
      if (P < 55296 || P > 56319)
        return _ + 1;
      var $ = d(k, _ + 1);
      return $ < 56320 || $ > 57343 ? _ + 1 : _ + 2;
    }, p = function(k) {
      var _ = 0;
      return {
        next: function() {
          var P = _ >= k.length, $;
          return P || ($ = k[_], _ += 1), {
            done: P,
            value: $
          };
        }
      };
    }, m = function(k, _) {
      if (n(k) || e(k))
        return p(k);
      if (i(k)) {
        var C = 0;
        return {
          next: function() {
            var $ = h(k, C), B = f(k, C, $);
            return C = $, {
              done: $ > k.length,
              value: B
            };
          }
        };
      }
      if (_ && typeof k["_es6-shim iterator_"] < "u")
        return k["_es6-shim iterator_"]();
    };
    if (!a && !s)
      nr.exports = function(k) {
        if (k != null)
          return m(k, !0);
      };
    else {
      var g = /* @__PURE__ */ Jf(), v = /* @__PURE__ */ Qf(), b = c("Map.prototype.forEach", !0), w = c("Set.prototype.forEach", !0);
      if (typeof process > "u" || !process.versions || !process.versions.node)
        var S = c("Map.prototype.iterator", !0), A = c("Set.prototype.iterator", !0);
      var E = c("Map.prototype.@@iterator", !0) || c("Map.prototype._es6-shim iterator_", !0), N = c("Set.prototype.@@iterator", !0) || c("Set.prototype._es6-shim iterator_", !0), M = function(k) {
        if (g(k)) {
          if (S)
            return t(S(k));
          if (E)
            return E(k);
          if (b) {
            var _ = [];
            return b(k, function(P, $) {
              l(_, [$, P]);
            }), p(_);
          }
        }
        if (v(k)) {
          if (A)
            return t(A(k));
          if (N)
            return N(k);
          if (w) {
            var C = [];
            return w(k, function(P) {
              l(C, P);
            }), p(C);
          }
        }
      };
      nr.exports = function(k) {
        return M(k) || m(k);
      };
    }
  }
  return nr.exports;
}
var Po, Pl;
function Zf() {
  if (Pl) return Po;
  Pl = 1;
  var e = function(t) {
    return t !== t;
  };
  return Po = function(r, n) {
    return r === 0 && n === 0 ? 1 / r === 1 / n : !!(r === n || e(r) && e(n));
  }, Po;
}
var No, Nl;
function ed() {
  if (Nl) return No;
  Nl = 1;
  var e = Zf();
  return No = function() {
    return typeof Object.is == "function" ? Object.is : e;
  }, No;
}
var ko, kl;
function Gb() {
  if (kl) return ko;
  kl = 1;
  var e = ed(), t = Mt();
  return ko = function() {
    var n = e();
    return t(Object, { is: n }, {
      is: function() {
        return Object.is !== n;
      }
    }), n;
  }, ko;
}
var Mo, Ml;
function Vb() {
  if (Ml) return Mo;
  Ml = 1;
  var e = Mt(), t = Xt(), r = Zf(), n = ed(), i = Gb(), o = t(n(), Object);
  return e(o, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), Mo = o, Mo;
}
var Lo, Ll;
function td() {
  if (Ll) return Lo;
  Ll = 1;
  var e = Xt(), t = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ ct(), n = r("%ArrayBuffer%", !0), i = t("ArrayBuffer.prototype.byteLength", !0), o = t("Object.prototype.toString"), a = !!n && !i && new n(0).slice, s = !!a && e(a);
  return Lo = i || s ? function(l) {
    if (!l || typeof l != "object")
      return !1;
    try {
      return i ? i(l) : s(l, 0), !0;
    } catch {
      return !1;
    }
  } : n ? function(l) {
    return o(l) === "[object ArrayBuffer]";
  } : function(l) {
    return !1;
  }, Lo;
}
var $o, $l;
function Kb() {
  if ($l) return $o;
  $l = 1;
  var e = /* @__PURE__ */ Ae(), t = e("Date.prototype.getDay"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object Date]", o = Lt()();
  return $o = function(s) {
    return typeof s != "object" || s === null ? !1 : o ? r(s) : n(s) === i;
  }, $o;
}
var _o, _l;
function rd() {
  if (_l) return _o;
  _l = 1;
  var e = /* @__PURE__ */ Ae(), t = Lt()(), r = /* @__PURE__ */ ls(), n = /* @__PURE__ */ kt(), i;
  if (t) {
    var o = e("RegExp.prototype.exec"), a = {}, s = function() {
      throw a;
    }, c = {
      toString: s,
      valueOf: s
    };
    typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = s), i = function(h) {
      if (!h || typeof h != "object")
        return !1;
      var p = (
        /** @type {NonNullable<typeof gOPD>} */
        n(
          /** @type {{ lastIndex?: unknown }} */
          h,
          "lastIndex"
        )
      ), m = p && r(p, "value");
      if (!m)
        return !1;
      try {
        o(
          h,
          /** @type {string} */
          /** @type {unknown} */
          c
        );
      } catch (g) {
        return g === a;
      }
    };
  } else {
    var l = e("Object.prototype.toString"), d = "[object RegExp]";
    i = function(h) {
      return !h || typeof h != "object" && typeof h != "function" ? !1 : l(h) === d;
    };
  }
  return _o = i, _o;
}
var Do, Dl;
function Yb() {
  if (Dl) return Do;
  Dl = 1;
  var e = /* @__PURE__ */ Ae(), t = e("SharedArrayBuffer.prototype.byteLength", !0);
  return Do = t ? function(n) {
    if (!n || typeof n != "object")
      return !1;
    try {
      return t(n), !0;
    } catch {
      return !1;
    }
  } : function(n) {
    return !1;
  }, Do;
}
var Bo, Bl;
function Xb() {
  if (Bl) return Bo;
  Bl = 1;
  var e = /* @__PURE__ */ Ae(), t = e("Number.prototype.toString"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object Number]", o = Lt()();
  return Bo = function(s) {
    return typeof s == "number" ? !0 : !s || typeof s != "object" ? !1 : o ? r(s) : n(s) === i;
  }, Bo;
}
var jo, jl;
function Jb() {
  if (jl) return jo;
  jl = 1;
  var e = /* @__PURE__ */ Ae(), t = e("Boolean.prototype.toString"), r = e("Object.prototype.toString"), n = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, i = "[object Boolean]", o = Lt()();
  return jo = function(s) {
    return typeof s == "boolean" ? !0 : s === null || typeof s != "object" ? !1 : o ? n(s) : r(s) === i;
  }, jo;
}
var Dr = { exports: {} }, zo, zl;
function Qb() {
  if (zl) return zo;
  zl = 1;
  var e = /* @__PURE__ */ Ae(), t = rd(), r = e("RegExp.prototype.exec"), n = /* @__PURE__ */ $e();
  return zo = function(o) {
    if (!t(o))
      throw new n("`regex` must be a RegExp");
    return function(s) {
      return r(o, s) !== null;
    };
  }, zo;
}
var Hl;
function Zb() {
  if (Hl) return Dr.exports;
  Hl = 1;
  var e = /* @__PURE__ */ Ae(), t = e("Object.prototype.toString"), r = os()(), n = /* @__PURE__ */ Qb();
  if (r) {
    var i = e("Symbol.prototype.toString"), o = n(/^Symbol\(.*\)$/), a = function(c) {
      return typeof c.valueOf() != "symbol" ? !1 : o(i(c));
    };
    Dr.exports = function(c) {
      if (typeof c == "symbol")
        return !0;
      if (!c || typeof c != "object" || t(c) !== "[object Symbol]")
        return !1;
      try {
        return a(c);
      } catch {
        return !1;
      }
    };
  } else
    Dr.exports = function(c) {
      return !1;
    };
  return Dr.exports;
}
var Br = { exports: {} }, Ho, ql;
function e2() {
  if (ql) return Ho;
  ql = 1;
  var e = typeof BigInt < "u" && BigInt;
  return Ho = function() {
    return typeof e == "function" && typeof BigInt == "function" && typeof e(42) == "bigint" && typeof BigInt(42) == "bigint";
  }, Ho;
}
var Fl;
function t2() {
  if (Fl) return Br.exports;
  Fl = 1;
  var e = e2()();
  if (e) {
    var t = BigInt.prototype.valueOf, r = function(i) {
      try {
        return t.call(i), !0;
      } catch {
      }
      return !1;
    };
    Br.exports = function(i) {
      return i === null || typeof i > "u" || typeof i == "boolean" || typeof i == "string" || typeof i == "number" || typeof i == "symbol" || typeof i == "function" ? !1 : typeof i == "bigint" ? !0 : r(i);
    };
  } else
    Br.exports = function(i) {
      return !1;
    };
  return Br.exports;
}
var qo, Ul;
function r2() {
  if (Ul) return qo;
  Ul = 1;
  var e = Xf(), t = Xb(), r = Jb(), n = Zb(), i = t2();
  return qo = function(a) {
    if (a == null || typeof a != "object" && typeof a != "function")
      return null;
    if (e(a))
      return "String";
    if (t(a))
      return "Number";
    if (r(a))
      return "Boolean";
    if (n(a))
      return "Symbol";
    if (i(a))
      return "BigInt";
  }, qo;
}
var Fo, Wl;
function n2() {
  if (Wl) return Fo;
  Wl = 1;
  var e = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, t = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, r;
  e || (r = function(a) {
    return !1;
  });
  var n = e ? e.prototype.has : null, i = t ? t.prototype.has : null;
  return !r && !n && (r = function(a) {
    return !1;
  }), Fo = r || function(a) {
    if (!a || typeof a != "object")
      return !1;
    try {
      if (n.call(a, n), i)
        try {
          i.call(a, i);
        } catch {
          return !0;
        }
      return a instanceof e;
    } catch {
    }
    return !1;
  }, Fo;
}
var jr = { exports: {} }, Gl;
function i2() {
  if (Gl) return jr.exports;
  Gl = 1;
  var e = /* @__PURE__ */ ct(), t = /* @__PURE__ */ Ae(), r = e("%WeakSet%", !0), n = t("WeakSet.prototype.has", !0);
  if (n) {
    var i = t("WeakMap.prototype.has", !0);
    jr.exports = function(a) {
      if (!a || typeof a != "object")
        return !1;
      try {
        if (n(a, n), i)
          try {
            i(a, i);
          } catch {
            return !0;
          }
        return a instanceof r;
      } catch {
      }
      return !1;
    };
  } else
    jr.exports = function(a) {
      return !1;
    };
  return jr.exports;
}
var Uo, Vl;
function o2() {
  if (Vl) return Uo;
  Vl = 1;
  var e = /* @__PURE__ */ Jf(), t = /* @__PURE__ */ Qf(), r = n2(), n = /* @__PURE__ */ i2();
  return Uo = function(o) {
    if (o && typeof o == "object") {
      if (e(o))
        return "Map";
      if (t(o))
        return "Set";
      if (r(o))
        return "WeakMap";
      if (n(o))
        return "WeakSet";
    }
    return !1;
  }, Uo;
}
var Wo, Kl;
function a2() {
  if (Kl) return Wo;
  Kl = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, r, n;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      r = Object.defineProperty({}, "length", {
        get: function() {
          throw n;
        }
      }), n = {}, t(function() {
        throw 42;
      }, null, r);
    } catch (w) {
      w !== n && (t = null);
    }
  else
    t = null;
  var i = /^\s*class\b/, o = function(S) {
    try {
      var A = e.call(S);
      return i.test(A);
    } catch {
      return !1;
    }
  }, a = function(S) {
    try {
      return o(S) ? !1 : (e.call(S), !0);
    } catch {
      return !1;
    }
  }, s = Object.prototype.toString, c = "[object Object]", l = "[object Function]", d = "[object GeneratorFunction]", f = "[object HTMLAllCollection]", h = "[object HTML document.all class]", p = "[object HTMLCollection]", m = typeof Symbol == "function" && !!Symbol.toStringTag, g = !(0 in [,]), v = function() {
    return !1;
  };
  if (typeof document == "object") {
    var b = document.all;
    s.call(b) === s.call(document.all) && (v = function(S) {
      if ((g || !S) && (typeof S > "u" || typeof S == "object"))
        try {
          var A = s.call(S);
          return (A === f || A === h || A === p || A === c) && S("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Wo = t ? function(S) {
    if (v(S))
      return !0;
    if (!S || typeof S != "function" && typeof S != "object")
      return !1;
    try {
      t(S, null, r);
    } catch (A) {
      if (A !== n)
        return !1;
    }
    return !o(S) && a(S);
  } : function(S) {
    if (v(S))
      return !0;
    if (!S || typeof S != "function" && typeof S != "object")
      return !1;
    if (m)
      return a(S);
    if (o(S))
      return !1;
    var A = s.call(S);
    return A !== l && A !== d && !/^\[object HTML/.test(A) ? !1 : a(S);
  }, Wo;
}
var Go, Yl;
function s2() {
  if (Yl) return Go;
  Yl = 1;
  var e = a2(), t = Object.prototype.toString, r = Object.prototype.hasOwnProperty, n = function(c, l, d) {
    for (var f = 0, h = c.length; f < h; f++)
      r.call(c, f) && (d == null ? l(c[f], f, c) : l.call(d, c[f], f, c));
  }, i = function(c, l, d) {
    for (var f = 0, h = c.length; f < h; f++)
      d == null ? l(c.charAt(f), f, c) : l.call(d, c.charAt(f), f, c);
  }, o = function(c, l, d) {
    for (var f in c)
      r.call(c, f) && (d == null ? l(c[f], f, c) : l.call(d, c[f], f, c));
  };
  function a(s) {
    return t.call(s) === "[object Array]";
  }
  return Go = function(c, l, d) {
    if (!e(l))
      throw new TypeError("iterator must be a function");
    var f;
    arguments.length >= 3 && (f = d), a(c) ? n(c, l, f) : typeof c == "string" ? i(c, l, f) : o(c, l, f);
  }, Go;
}
var Vo, Xl;
function c2() {
  return Xl || (Xl = 1, Vo = [
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ]), Vo;
}
var Ko, Jl;
function l2() {
  if (Jl) return Ko;
  Jl = 1;
  var e = /* @__PURE__ */ c2(), t = typeof globalThis > "u" ? Tn : globalThis;
  return Ko = function() {
    for (var n = [], i = 0; i < e.length; i++)
      typeof t[e[i]] == "function" && (n[n.length] = e[i]);
    return n;
  }, Ko;
}
var Yo, Ql;
function u2() {
  if (Ql) return Yo;
  Ql = 1;
  var e = s2(), t = /* @__PURE__ */ l2(), r = Xt(), n = /* @__PURE__ */ Ae(), i = /* @__PURE__ */ kt(), o = n("Object.prototype.toString"), a = Lt()(), s = typeof globalThis > "u" ? Tn : globalThis, c = t(), l = n("String.prototype.slice"), d = Object.getPrototypeOf, f = n("Array.prototype.indexOf", !0) || function(v, b) {
    for (var w = 0; w < v.length; w += 1)
      if (v[w] === b)
        return w;
    return -1;
  }, h = { __proto__: null };
  a && i && d ? e(c, function(g) {
    var v = new s[g]();
    if (Symbol.toStringTag in v) {
      var b = d(v), w = i(b, Symbol.toStringTag);
      if (!w) {
        var S = d(b);
        w = i(S, Symbol.toStringTag);
      }
      h["$" + g] = r(w.get);
    }
  }) : e(c, function(g) {
    var v = new s[g](), b = v.slice || v.set;
    b && (h["$" + g] = r(b));
  });
  var p = function(v) {
    var b = !1;
    return e(
      // eslint-disable-next-line no-extra-parens
      /** @type {Record<`\$${TypedArrayName}`, Getter>} */
      /** @type {any} */
      h,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, S) {
        if (!b)
          try {
            "$" + w(v) === S && (b = l(S, 1));
          } catch {
          }
      }
    ), b;
  }, m = function(v) {
    var b = !1;
    return e(
      // eslint-disable-next-line no-extra-parens
      /** @type {Record<`\$${TypedArrayName}`, Getter>} */
      /** @type {any} */
      h,
      /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, S) {
        if (!b)
          try {
            w(v), b = l(S, 1);
          } catch {
          }
      }
    ), b;
  };
  return Yo = function(v) {
    if (!v || typeof v != "object")
      return !1;
    if (!a) {
      var b = l(o(v), 8, -1);
      return f(c, b) > -1 ? b : b !== "Object" ? !1 : m(v);
    }
    return i ? p(v) : null;
  }, Yo;
}
var Xo, Zl;
function f2() {
  if (Zl) return Xo;
  Zl = 1;
  var e = /* @__PURE__ */ Ae(), t = e("ArrayBuffer.prototype.byteLength", !0), r = /* @__PURE__ */ td();
  return Xo = function(i) {
    return r(i) ? t ? t(i) : i.byteLength : NaN;
  }, Xo;
}
var Jo, eu;
function d2() {
  if (eu) return Jo;
  eu = 1;
  var e = Mb(), t = Ff(), r = Db(), n = /* @__PURE__ */ ct(), i = Wb(), o = Kf(), a = Vb(), s = /* @__PURE__ */ Gf(), c = Yf(), l = /* @__PURE__ */ td(), d = /* @__PURE__ */ Kb(), f = rd(), h = /* @__PURE__ */ Yb(), p = es(), m = r2(), g = /* @__PURE__ */ o2(), v = /* @__PURE__ */ u2(), b = /* @__PURE__ */ f2(), w = t("SharedArrayBuffer.prototype.byteLength", !0), S = t("Date.prototype.getTime"), A = Object.getPrototypeOf, E = t("Object.prototype.toString"), N = n("%Set%", !0), M = t("Map.prototype.has", !0), I = t("Map.prototype.get", !0), k = t("Map.prototype.size", !0), _ = t("Set.prototype.add", !0), C = t("Set.prototype.delete", !0), P = t("Set.prototype.has", !0), $ = t("Set.prototype.size", !0);
  function B(T, L, F, q) {
    for (var X = i(T), te; (te = X.next()) && !te.done; )
      if (ee(L, te.value, F, q))
        return C(T, te.value), !0;
    return !1;
  }
  function W(T) {
    if (typeof T > "u")
      return null;
    if (typeof T != "object")
      return typeof T == "symbol" ? !1 : typeof T == "string" || typeof T == "number" ? +T == +T : !0;
  }
  function z(T, L, F, q, X, te) {
    var j = W(F);
    if (j != null)
      return j;
    var H = I(L, j), D = e({}, X, { strict: !1 });
    return typeof H > "u" && !M(L, j) || !ee(q, H, D, te) ? !1 : !M(T, j) && ee(q, H, D, te);
  }
  function Z(T, L, F) {
    var q = W(F);
    return q ?? (P(L, q) && !P(T, q));
  }
  function J(T, L, F, q, X, te) {
    for (var j = i(T), H, D; (H = j.next()) && !H.done; )
      if (D = H.value, // eslint-disable-next-line no-use-before-define
      ee(F, D, X, te) && ee(q, I(L, D), X, te))
        return C(T, D), !0;
    return !1;
  }
  function ee(T, L, F, q) {
    var X = F || {};
    if (X.strict ? a(T, L) : T === L)
      return !0;
    var te = m(T), j = m(L);
    if (te !== j)
      return !1;
    if (!T || !L || typeof T != "object" && typeof L != "object")
      return X.strict ? a(T, L) : T == L;
    var H = q.has(T), D = q.has(L), G;
    if (H && D) {
      if (q.get(T) === q.get(L))
        return !0;
    } else
      G = {};
    return H || q.set(T, G), D || q.set(L, G), De(T, L, X, q);
  }
  function ge(T) {
    return !T || typeof T != "object" || typeof T.length != "number" || typeof T.copy != "function" || typeof T.slice != "function" || T.length > 0 && typeof T[0] != "number" ? !1 : !!(T.constructor && T.constructor.isBuffer && T.constructor.isBuffer(T));
  }
  function he(T, L, F, q) {
    if ($(T) !== $(L))
      return !1;
    for (var X = i(T), te = i(L), j, H, D; (j = X.next()) && !j.done; )
      if (j.value && typeof j.value == "object")
        D || (D = new N()), _(D, j.value);
      else if (!P(L, j.value)) {
        if (F.strict || !Z(T, L, j.value))
          return !1;
        D || (D = new N()), _(D, j.value);
      }
    if (D) {
      for (; (H = te.next()) && !H.done; )
        if (H.value && typeof H.value == "object") {
          if (!B(D, H.value, F.strict, q))
            return !1;
        } else if (!F.strict && !P(T, H.value) && !B(D, H.value, F.strict, q))
          return !1;
      return $(D) === 0;
    }
    return !0;
  }
  function _e(T, L, F, q) {
    if (k(T) !== k(L))
      return !1;
    for (var X = i(T), te = i(L), j, H, D, G, pe, ve; (j = X.next()) && !j.done; )
      if (G = j.value[0], pe = j.value[1], G && typeof G == "object")
        D || (D = new N()), _(D, G);
      else if (ve = I(L, G), typeof ve > "u" && !M(L, G) || !ee(pe, ve, F, q)) {
        if (F.strict || !z(T, L, G, pe, F, q))
          return !1;
        D || (D = new N()), _(D, G);
      }
    if (D) {
      for (; (H = te.next()) && !H.done; )
        if (G = H.value[0], ve = H.value[1], G && typeof G == "object") {
          if (!J(D, T, G, ve, F, q))
            return !1;
        } else if (!F.strict && (!T.has(G) || !ee(I(T, G), ve, F, q)) && !J(D, T, G, ve, e({}, F, { strict: !1 }), q))
          return !1;
      return $(D) === 0;
    }
    return !0;
  }
  function De(T, L, F, q) {
    var X, te;
    if (typeof T != typeof L || T == null || L == null || E(T) !== E(L) || s(T) !== s(L))
      return !1;
    var j = c(T), H = c(L);
    if (j !== H)
      return !1;
    var D = T instanceof Error, G = L instanceof Error;
    if (D !== G || (D || G) && (T.name !== L.name || T.message !== L.message))
      return !1;
    var pe = f(T), ve = f(L);
    if (pe !== ve || (pe || ve) && (T.source !== L.source || r(T) !== r(L)))
      return !1;
    var ye = d(T), we = d(L);
    if (ye !== we || (ye || we) && S(T) !== S(L) || F.strict && A && A(T) !== A(L))
      return !1;
    var Ce = v(T), Ye = v(L);
    if (Ce !== Ye)
      return !1;
    if (Ce || Ye) {
      if (T.length !== L.length)
        return !1;
      for (X = 0; X < T.length; X++)
        if (T[X] !== L[X])
          return !1;
      return !0;
    }
    var Be = ge(T), Re = ge(L);
    if (Be !== Re)
      return !1;
    if (Be || Re) {
      if (T.length !== L.length)
        return !1;
      for (X = 0; X < T.length; X++)
        if (T[X] !== L[X])
          return !1;
      return !0;
    }
    var Xe = l(T), Je = l(L);
    if (Xe !== Je)
      return !1;
    if (Xe || Je)
      return b(T) !== b(L) ? !1 : typeof Uint8Array == "function" && ee(new Uint8Array(T), new Uint8Array(L), F, q);
    var Qe = h(T), Tr = h(L);
    if (Qe !== Tr)
      return !1;
    if (Qe || Tr)
      return w(T) !== w(L) ? !1 : typeof Uint8Array == "function" && ee(new Uint8Array(T), new Uint8Array(L), F, q);
    if (typeof T != typeof L)
      return !1;
    var lt = p(T), $t = p(L);
    if (lt.length !== $t.length)
      return !1;
    for (lt.sort(), $t.sort(), X = lt.length - 1; X >= 0; X--)
      if (lt[X] != $t[X])
        return !1;
    for (X = lt.length - 1; X >= 0; X--)
      if (te = lt[X], !ee(T[te], L[te], F, q))
        return !1;
    var Jt = g(T), ut = g(L);
    return Jt !== ut ? !1 : Jt === "Set" || ut === "Set" ? he(T, L, F, q) : Jt === "Map" ? _e(T, L, F, q) : !0;
  }
  return Jo = function(L, F, q) {
    return ee(L, F, q, o());
  }, Jo;
}
var h2 = d2();
const p2 = /* @__PURE__ */ fb(h2);
function m2(e) {
  return e;
}
function g2(e, t, r, n) {
  const i = m2, [o, a] = re(i(r)), s = bt(o);
  return me(() => {
    const c = () => {
      const l = { ...r, ...e.getAttributes(t) };
      Object.keys(l).forEach((f) => {
        (l[f] === null || l[f] === void 0) && (l[f] = r ? r[f] : null);
      });
      const d = i(l);
      p2(s.current, d) || (a(d), s.current = d);
    };
    return e.on("selectionUpdate", c), e.on("transaction", c), () => {
      e.off("selectionUpdate", c), e.off("transaction", c);
    };
  }, [e, r, t, i]), o;
}
function v2({ editor: e }) {
  const { t } = Se(), { width: r, height: n, src: i } = g2(e, jt.name, {
    width: 0,
    height: 0,
    src: "",
    defaultShowPicker: !1
  }), [o, a] = re(!1), [s, c] = re(""), l = oe(() => {
    a(!1);
  }, [a]);
  me(() => {
    o && c(i);
  }, [o, i]);
  const d = oe(() => {
    const v = Lf(s);
    e.chain().updateAttributes(jt.name, {
      src: (v == null ? void 0 : v.src) || s
    }).setNodeSelection(e.state.selection.from).focus().run(), a(!1);
  }, [e, s, a]), f = oe(() => {
    window.open(i, "_blank");
  }, [i]), h = oe(() => {
    a(!0);
  }, [a]), p = oe(
    (v) => {
      e.chain().updateAttributes(jt.name, v).setNodeSelection(e.state.selection.from).focus().run();
    },
    [e]
  ), m = oe(() => e.isActive(jt.name) && !i, [e, i]), g = oe(() => bf(jt.name, e), [e]);
  return /* @__PURE__ */ O(be, { children: [
    /* @__PURE__ */ u(
      Rt,
      {
        className: "bubble-menu",
        editor: e,
        pluginKey: "iframe-bubble-menu",
        shouldShow: m,
        tippyOptions: {
          popperOptions: {
            modifiers: [{ name: "flip", enabled: !1 }]
          },
          placement: "bottom-start",
          offset: [-2, 16],
          zIndex: 9999
          // onHidden: () => {
          //   toggleVisible(false)
          // },
        },
        children: /* @__PURE__ */ O("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
          /* @__PURE__ */ u(
            K,
            {
              action: f,
              icon: "Eye",
              tooltip: "Visit Link"
            }
          ),
          /* @__PURE__ */ u(
            K,
            {
              action: h,
              icon: "Pencil",
              tooltip: "Open Edit Link"
            }
          ),
          /* @__PURE__ */ u(
            qx,
            {
              height: n,
              onOk: p,
              width: r,
              children: /* @__PURE__ */ u(
                K,
                {
                  icon: "Settings",
                  tooltip: t("editor.settings")
                }
              )
            }
          ),
          /* @__PURE__ */ u(
            K,
            {
              action: g,
              icon: "Trash2",
              tooltip: t("editor.delete")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ O(
      Ya,
      {
        onOpenChange: a,
        open: o,
        children: [
          /* @__PURE__ */ u(Xa, {}),
          /* @__PURE__ */ O($n, { children: [
            /* @__PURE__ */ u(hf, { children: /* @__PURE__ */ u(_n, { children: "Edit Link Iframe" }) }),
            /* @__PURE__ */ u(
              ze,
              {
                autoFocus: !0,
                onInput: (v) => c(v.target.value),
                placeholder: "Enter link",
                type: "url",
                value: s
              }
            ),
            /* @__PURE__ */ O(Ja, { children: [
              /* @__PURE__ */ u(Ee, { onClick: l, children: "Cancel" }),
              /* @__PURE__ */ u(Ee, { onClick: d, children: "OK" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function y2({ editor: e, disabled: t, bubbleMenu: r }) {
  const n = e.extensionManager.extensions.map((o) => o.name), i = () => {
    var o, a, s, c, l, d, f, h, p;
    return [
      n.includes("columns") && !((o = r == null ? void 0 : r.columnConfig) != null && o.hidden) ? /* @__PURE__ */ u(
        wx,
        {
          editor: e
        },
        "columns"
      ) : null,
      n.includes("table") && !((a = r == null ? void 0 : r.tableConfig) != null && a.hidden) ? /* @__PURE__ */ u(
        vy,
        {
          actions: (s = r == null ? void 0 : r.tableConfig) == null ? void 0 : s.actions,
          editor: e
        },
        "table"
      ) : null,
      n.includes("link") && !((c = r == null ? void 0 : r.linkConfig) != null && c.hidden) ? /* @__PURE__ */ u(
        Uy,
        {
          disabled: t,
          editor: e
        },
        "link"
      ) : null,
      n.includes(br.name) && !((l = r == null ? void 0 : r.imageConfig) != null && l.hidden) ? /* @__PURE__ */ u(
        mx,
        {
          disabled: t,
          editor: e
        },
        "image"
      ) : null,
      n.includes(gf.name) && !((d = r == null ? void 0 : r.imageGifConfig) != null && d.hidden) ? /* @__PURE__ */ u(
        gx,
        {
          disabled: t,
          editor: e
        },
        "imageGif"
      ) : null,
      n.includes("iframe") && !((f = r == null ? void 0 : r.iframeConfig) != null && f.hidden) ? /* @__PURE__ */ u(
        v2,
        {
          disabled: t,
          editor: e
        },
        "iframe"
      ) : null,
      (h = r == null ? void 0 : r.floatingMenuConfig) != null && h.hidden ? null : /* @__PURE__ */ u(
        Gv,
        {
          disabled: t,
          editor: e
        },
        "content"
      ),
      (p = r == null ? void 0 : r.textConfig) != null && p.hidden ? null : /* @__PURE__ */ u(
        Yv,
        {
          disabled: t,
          editor: e
        },
        "text"
      )
    ];
  };
  return r != null && r.render ? r.render({ editor: e, disabled: t || !1, extensionsNames: n, bubbleMenu: r }, i()) : i().filter(Boolean);
}
function tu() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function x2(e) {
  const { t } = Se(), {
    highlight: r = !1,
    disabled: n = !1,
    selectedColor: i,
    setSelectedColor: o,
    onChange: a,
    colors: s = Ed
  } = e, c = Te(() => {
    const p = s, m = [];
    for (let g = 0; g < p.length; g += 10)
      m.push(p.slice(g, g + 10));
    return m;
  }, [s]), [l, d] = re([]), f = (p) => {
    const m = [...l], g = m.indexOf(p);
    g !== -1 && m.splice(g, 1), m.unshift(p), m.length > 10 && m.pop(), d(m);
  };
  function h(p) {
    if (p === void 0) {
      o == null || o(p), a == null || a(p);
      return;
    }
    /^#([\da-f]{3}){1,2}$/i.test(p) && (o == null || o(p), a == null || a(p), f(p));
  }
  return /* @__PURE__ */ O(Sr, { modal: !0, children: [
    /* @__PURE__ */ u(
      Ar,
      {
        asChild: !0,
        className: "!richtext-p-0",
        disabled: n,
        children: e == null ? void 0 : e.children
      }
    ),
    /* @__PURE__ */ u(
      Kt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: /* @__PURE__ */ O("div", { className: "richtext-flex richtext-flex-col", children: [
          r ? /* @__PURE__ */ O(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => h(void 0),
              children: [
                /* @__PURE__ */ u(tu, {}),
                /* @__PURE__ */ u("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.nofill") })
              ]
            }
          ) : /* @__PURE__ */ O(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => {
                h(void 0);
              },
              children: [
                /* @__PURE__ */ u(tu, {}),
                /* @__PURE__ */ u("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.default") })
              ]
            }
          ),
          c.map((p, m) => /* @__PURE__ */ u(
            "span",
            {
              className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2",
              children: p.map((g, v) => /* @__PURE__ */ u(
                "span",
                {
                  className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                  onClick: () => h(g),
                  children: /* @__PURE__ */ u(
                    "span",
                    {
                      className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                      style: {
                        backgroundColor: g
                      },
                      children: g === i ? /* @__PURE__ */ u(
                        "svg",
                        {
                          className: "richtext-absolute -richtext-top-px richtext-left-px richtext-block richtext-size-3",
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)"
                          },
                          children: /* @__PURE__ */ u("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                        }
                      ) : /* @__PURE__ */ u(
                        "svg",
                        {
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)",
                            display: "none"
                          },
                          children: /* @__PURE__ */ u("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                        }
                      )
                    }
                  )
                },
                `sub-color-${v}`
              ))
            },
            m
          )),
          /* @__PURE__ */ O("div", { children: [
            /* @__PURE__ */ u("div", { className: "richtext-my-1 richtext-text-sm", children: t("editor.recent") }),
            /* @__PURE__ */ u("span", { className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2", children: l == null ? void 0 : l.map((p, m) => /* @__PURE__ */ u(
              "span",
              {
                className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                onClick: () => h(p),
                children: /* @__PURE__ */ u(
                  "span",
                  {
                    className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                    style: {
                      backgroundColor: p
                    },
                    children: /* @__PURE__ */ u(
                      "svg",
                      {
                        viewBox: "0 0 18 18",
                        style: {
                          fill: "rgb(255, 255, 255)",
                          display: "none"
                        },
                        children: /* @__PURE__ */ u("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                      }
                    )
                  }
                )
              },
              `sub-color-recent-${m}`
            )) })
          ] }),
          /* @__PURE__ */ u(b2, { setColor: h })
        ] })
      }
    )
  ] });
}
function b2({ setColor: e }) {
  const [t, r] = re("#000000"), [n, i] = re(!1), { t: o } = Se();
  return me(() => () => {
    i(!1);
  }, []), /* @__PURE__ */ O(Sr, { open: n, children: [
    /* @__PURE__ */ u(Ar, { asChild: !0, children: /* @__PURE__ */ O(
      "div",
      {
        className: "richtext-p-1.5 richtext-text-sm hover:richtext-cursor-pointer hover:richtext-bg-accent",
        onClick: (a) => {
          a.preventDefault(), i(!0);
        },
        children: [
          o("editor.color.more"),
          "..."
        ]
      }
    ) }),
    /* @__PURE__ */ O(Kt, { children: [
      /* @__PURE__ */ O("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ u(
          gp,
          {
            color: t,
            onChange: r
          }
        ),
        /* @__PURE__ */ u(
          ze,
          {
            className: "richtext-mt-[8px] richtext-w-full",
            type: "text",
            value: t.slice(1),
            onChange: (a) => {
              a.preventDefault(), r(`#${a.target.value}`);
            }
          }
        )
      ] }),
      /* @__PURE__ */ u(We, { className: "richtext-my-[10px]" }),
      /* @__PURE__ */ u(
        Ee,
        {
          className: "richtext-w-full",
          onClick: (a) => {
            a.preventDefault(), e(t), i(!1);
          },
          children: /* @__PURE__ */ u(su, { size: 16 })
        }
      )
    ] })
  ] });
}
function ow(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
const w2 = (e) => typeof e == "string", S2 = (e) => typeof e == "function";
function A2(e, t) {
  if (!e)
    return !1;
  const { extensions: r = [] } = (e == null ? void 0 : e.extensionManager) ?? {};
  return !!r.find((i) => i.name === t);
}
function aw(e) {
  return e.map((t) => w2(t) ? { value: t, name: t } : t);
}
function C2({ editor: e, disabled: t, toolbar: r }) {
  const { t: n, lang: i } = Se(), o = Te(() => {
    const l = [...e.extensionManager.extensions].sort((f, h) => {
      const p = f.options.sort ?? -1, m = h.options.sort ?? -1;
      return p - m;
    });
    let d = [];
    for (const f of l) {
      const {
        button: h,
        divider: p = !1,
        spacer: m = !1,
        toolbar: g = !0
      } = f.options;
      if (!h || !S2(h) || !g)
        continue;
      const v = h({
        editor: e,
        extension: f,
        t: n
      });
      if (Array.isArray(v)) {
        const b = v.map((w, S) => ({
          button: w,
          divider: S === v.length - 1 ? p : !1,
          spacer: S === 0 ? m : !1,
          type: f.type,
          name: f.name
        }));
        d = [...d, ...b];
        continue;
      }
      d.push({
        button: v,
        divider: p,
        spacer: m,
        type: f.type,
        name: f.name
      });
    }
    return d;
  }, [e, n, i]), a = (c) => /* @__PURE__ */ u(
    "div",
    {
      className: "richtext-px-1 richtext-py-2 !richtext-border-b",
      style: {
        pointerEvents: t ? "none" : "auto",
        opacity: t ? 0.5 : 1
      },
      children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-flex richtext-flex-wrap richtext-h-auto richtext-gap-y-1 richtext-gap-x-1", children: c })
    }
  ), s = o.map((c, l) => {
    var f, h;
    const d = c.button.component;
    return /* @__PURE__ */ O("div", { className: "richtext-flex richtext-items-center", children: [
      (c == null ? void 0 : c.spacer) && /* @__PURE__ */ u(We, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
      /* @__PURE__ */ u(
        d,
        {
          ...c.button.componentProps,
          disabled: t || ((h = (f = c == null ? void 0 : c.button) == null ? void 0 : f.componentProps) == null ? void 0 : h.disabled)
        }
      ),
      (c == null ? void 0 : c.divider) && /* @__PURE__ */ u(We, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
    ] }, `toolbar-item-${l}`);
  });
  return r && (r != null && r.render) ? r.render({ editor: e, disabled: t || !1 }, o, s, a) : a(s);
}
function T2({ editor: e, extensions: t }) {
  const { t: r } = Se(), n = Te(() => {
    var i, o, a;
    return (a = (o = (i = t == null ? void 0 : t.find((s) => s.name === "base-kit")) == null ? void 0 : i.options) == null ? void 0 : o.characterCount) == null ? void 0 : a.limit;
  }, [t]);
  return n ? /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ O("span", { children: [
    e.storage.characterCount.characters(),
    "/",
    n,
    " ",
    r("editor.characters")
  ] }) }) }) }) : /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ O("span", { children: [
    e.storage.characterCount.characters(),
    " ",
    r("editor.characters")
  ] }) }) }) });
}
function E2() {
  const { toasts: e } = zx();
  return /* @__PURE__ */ O(Px, { children: [
    e.map(({ id: t, title: r, description: n, action: i, ...o }) => /* @__PURE__ */ O(
      Ef,
      {
        ...o,
        children: [
          /* @__PURE__ */ O("div", { className: "richtext-grid richtext-gap-1", children: [
            r && /* @__PURE__ */ u(If, { children: r }),
            n && /* @__PURE__ */ u(Of, { children: n })
          ] }),
          i,
          /* @__PURE__ */ u(Rf, {})
        ]
      },
      t
    )),
    /* @__PURE__ */ u(Tf, {})
  ] });
}
const R2 = `
.reactjs-tiptap-editor,
.richtext-dialog-content {
  button,
  input:where([type=button]),
  input:where([type=reset]),
  input:where([type=submit]) {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }

  input,
  optgroup,
  select {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
  }

  button {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: hsl(var(--richtext-border));
  }

  background-color: hsl(var(--richtext-background));
  color: hsl(var(--richtext-foreground));

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }

  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }

  input {
    border-width: 1px;
  }


  input::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  button, input {
    cursor: pointer;
    color: inherit;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }
}

div[data-radix-popper-content-wrapper],
div[data-tippy-root] {
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: hsl(var(--richtext-border));
  }

  background-color: hsl(var(--richtext-background));
  color: hsl(var(--richtext-foreground));

  button, input {
    cursor: pointer;
    color: inherit;
  }
}
`, I2 = vd(({ children: e, id: t }) => {
  const [, r] = pf((a) => a.value), [, n] = mf((a) => a.value), i = (a) => {
    r({
      value: a.detail
    });
  }, o = (a) => {
    n({
      value: a.detail
    });
  };
  return me(() => {
    const a = wa(Ut.EDIT(t), i), s = wa(Ut.UPDATE_THEME(t), o);
    return () => {
      a(), s();
    };
  }, []), /* @__PURE__ */ u(be, { children: e });
});
function O2({ children: e, id: t }) {
  return /* @__PURE__ */ u(Qy, { children: /* @__PURE__ */ u(Zy, { children: /* @__PURE__ */ u(I2, { id: t, children: e }) }) });
}
function sw() {
  const [e] = mf((t) => t.value);
  return e;
}
const P2 = {
  setTheme: (e, t) => {
    Qa(Ut.UPDATE_THEME(e), t);
  }
}, ru = "data-rc-order", nu = "data-rc-priority", N2 = "rc-util-key", Ea = /* @__PURE__ */ new Map();
function k2(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  let r = t;
  for (; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
function nd({ mark: e } = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : N2;
}
function us(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function M2(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function id(e) {
  return [...(Ea.get(e) || e).children].filter(
    (t) => t.tagName === "STYLE"
  );
}
function od(e, t = {}) {
  const { csp: r, prepend: n, priority: i = 0 } = t, o = M2(n), a = o === "prependQueue", s = document.createElement("style");
  s.setAttribute(ru, o), a && i && s.setAttribute(nu, `${i}`), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = e;
  const c = us(t), { firstChild: l } = c;
  if (n) {
    if (a) {
      const d = id(c).filter((f) => {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(ru)))
          return !1;
        const h = Number(f.getAttribute(nu) || 0);
        return i >= h;
      });
      if (d.length > 0)
        return c.insertBefore(s, d.at(-1).nextSibling), s;
    }
    l.before(s);
  } else
    c.append(s);
  return s;
}
function ad(e, t = {}) {
  const r = us(t);
  return id(r).find((n) => n.getAttribute(nd(t)) === e);
}
function L2(e, t = {}) {
  const r = ad(e, t);
  r && r.remove();
}
function $2(e, t) {
  const r = Ea.get(e);
  if (!r || !k2(document, r)) {
    const n = od("", t), { parentNode: i } = n;
    Ea.set(e, i), n.remove();
  }
}
function _2(e, t, r = {}) {
  var a, s, c;
  const n = us(r);
  $2(n, r);
  const i = ad(t, r);
  if (i)
    return (a = r.csp) != null && a.nonce && i.nonce !== ((s = r.csp) == null ? void 0 : s.nonce) && (i.nonce = (c = r.csp) == null ? void 0 : c.nonce), i.innerHTML !== e && (i.innerHTML = e), i;
  const o = od(e, r);
  return o.setAttribute(nd(r), t), o;
}
function D2(e, t) {
  const { content: r, extensions: n, useEditorOptions: i = {} } = e, o = xd(), a = Te(() => {
    const f = R0(n, n, "name");
    return [...n.map((p) => {
      const m = n.find((g) => g.name === p.name);
      return m ? p.configure(m.options) : p;
    }), ...f].map((p, m) => p.configure({ sort: m }));
  }, [n]), s = vr((f) => {
    var p;
    const h = l(f, e.output);
    (p = e == null ? void 0 : e.onChangeContent) == null || p.call(e, h);
  }, Rd), c = Sd({
    extensions: a,
    content: r,
    immediatelyRender: (e == null ? void 0 : e.immediatelyRender) || !1,
    onUpdate: ({ editor: f }) => {
      s && s(f);
    },
    ...i
  });
  bd(t, () => ({
    editor: c
  })), me(() => {
    document.documentElement.classList.toggle("dark", e.dark), P2.setTheme(o, e.dark ? "dark" : "light");
  }, [e.dark]), me(() => {
    c == null || c.setEditable(!(e != null && e.disabled)), sb.setDisable(o, !(e != null && e.disabled));
  }, [c, e == null ? void 0 : e.disabled]), me(() => ((e == null ? void 0 : e.resetCSS) !== !1 && _2(R2, "react-tiptap-reset"), () => {
    L2("react-tiptap-reset");
  }), [e == null ? void 0 : e.resetCSS]);
  function l(f, h) {
    return e != null && e.removeDefaultWrapper ? h === "html" ? f.isEmpty ? "" : f.getHTML() : h === "json" ? f.isEmpty ? {} : f.getJSON() : h === "text" ? f.isEmpty ? "" : f.getText() : "" : h === "html" ? f.getHTML() : h === "json" ? f.getJSON() : h === "text" ? f.getText() : "";
  }
  wd(() => {
    c && (c.id = o);
  }, [o, c]), me(() => () => {
    var f;
    (f = c == null ? void 0 : c.destroy) == null || f.call(c);
  }, []);
  const d = A2(c, "characterCount");
  return c ? /* @__PURE__ */ O("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ u(O2, { id: o, children: /* @__PURE__ */ u(Lx, { delayDuration: 0, disableHoverableContent: !0, children: /* @__PURE__ */ u(
      "div",
      {
        className: En(
          "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background",
          !(e != null && e.disabled) && "richtext-shadow richtext-outline richtext-outline-1"
        ),
        children: /* @__PURE__ */ O("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: [
          !(e != null && e.hideToolbar) && /* @__PURE__ */ u(C2, { disabled: !!(e != null && e.disabled), editor: c, toolbar: e.toolbar }),
          /* @__PURE__ */ u(Ad, { className: `richtext-relative ${(e == null ? void 0 : e.contentClass) || ""}`, editor: c }),
          d && /* @__PURE__ */ u(T2, { editor: c, extensions: n }),
          !(e != null && e.hideBubble) && /* @__PURE__ */ u(y2, { bubbleMenu: e == null ? void 0 : e.bubbleMenu, disabled: e == null ? void 0 : e.disabled, editor: c })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ u(E2, {})
  ] }) : /* @__PURE__ */ u(be, {});
}
const cw = yd(D2);
export {
  rw as $,
  K as A,
  Ee as B,
  x2 as C,
  Sx as D,
  Ut as E,
  Xy as F,
  vr as G,
  gy as H,
  fa as I,
  ow as J,
  ff as K,
  xt as L,
  ry as M,
  br as N,
  ex as O,
  Sr as P,
  Pf as Q,
  g2 as R,
  Af as S,
  Nf as T,
  sw as U,
  nw as V,
  uy as W,
  ly as X,
  ab as Y,
  tw as Z,
  ew as _,
  kf as a,
  J2 as a0,
  We as a1,
  bf as a2,
  qx as a3,
  Q2 as a4,
  xf as a5,
  Cn as a6,
  cw as a7,
  qy as a8,
  gf as a9,
  bx as aa,
  iw as ab,
  jt as ac,
  Za as b,
  Z2 as c,
  Q as d,
  Ax as e,
  wf as f,
  Pv as g,
  Cx as h,
  Zu as i,
  aw as j,
  xe as k,
  wa as l,
  Ar as m,
  Kt as n,
  ze as o,
  p2 as p,
  Qa as q,
  Mn as r,
  Rx as s,
  Ov as t,
  Sf as u,
  Ya as v,
  Xa as w,
  $n as x,
  _n as y,
  Ja as z
};
