var pd = Object.defineProperty;
var md = (e, t, r) => t in e ? pd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Pr = (e, t, r) => md(e, typeof t != "symbol" ? t + "" : t, r);
import { jsxs as P, jsx as u, Fragment as be } from "react/jsx-runtime";
import * as ne from "react";
import ir, { useState as Z, useRef as Ge, useEffect as ve, useMemo as Ae, useCallback as oe, createContext as gd, useContext as vd, useSyncExternalStore as yd, Fragment as xd, memo as bd, forwardRef as wd, useId as Sd, useImperativeHandle as Ad, useLayoutEffect as Cd } from "react";
import { c as Ta, B as Rt, N as Ea, R as Ra, g as Xn, u as Td, E as Ed } from "./dom-dataset-Di3tIRrR.js";
import { Slot as au } from "@radix-ui/react-slot";
import { m as Pe, B as Rd, q as Ur, u as Ce, r as Id, I as Wr, k as Gr, j as su, C as Od, E as Pd } from "./index-p_4uATkU.js";
import * as cu from "@radix-ui/react-separator";
import * as ke from "@radix-ui/react-toast";
import { Loader2 as Nd, WrapText as kd, PencilRuler as Md, FlipHorizontal as Ld, FlipVertical as $d, CropIcon as _d, ChevronUp as Dd, Paperclip as Bd, Eye as jd, Settings as zd, ZoomOut as Hd, ZoomIn as qd, BookMarked as Fd, Sigma as Ud, SmilePlusIcon as Wd, Replace as Ss, SmilePlus as Gd, Frame as Vd, Columns2 as As, PanelRight as Kd, PanelLeft as Xd, Clipboard as Yd, Copy as Jd, GripVertical as Qd, Plus as lu, Columns4 as Zd, Columns3 as eh, Heading6 as th, Heading5 as rh, Heading4 as nh, Heading3 as ih, Heading2 as oh, Heading1 as ah, ChevronsUpDown as sh, Trash as ch, Trash2 as lh, TableCellsSplit as uh, TableCellsMerge as fh, BetweenVerticalEnd as dh, BetweenVerticalStart as hh, BetweenHorizonalStart as ph, BetweenHorizonalEnd as mh, Unlink as gh, Pencil as vh, Sparkles as yh, Table as xh, Minimize as bh, Maximize as wh, ImageUp as Sh, Link as Ah, ListTodo as Ch, ListOrdered as Th, List as Eh, IndentDecrease as Rh, IndentIncrease as Ih, Type as Oh, CodeXml as Ph, Code as Nh, Superscript as kh, Subscript as Mh, ChevronDown as Lh, Undo2 as $h, Redo2 as _h, PaintRoller as Dh, Eraser as Bh, Minus as jh, Strikethrough as zh, Quote as Hh, Underline as qh, Italic as Fh, LoaderCircle as Uh, Bold as Wh, X as uu, ChevronRight as Gh, Check as fu, Circle as Vh } from "lucide-react";
import * as Sr from "@radix-ui/react-tooltip";
import * as du from "@radix-ui/react-toggle";
import { TextAlignRightIcon as Kh, TextAlignLeftIcon as Xh, TextAlignJustifyIcon as Yh, TextAlignCenterIcon as Jh } from "@radix-ui/react-icons";
import * as pr from "@radix-ui/react-popover";
import * as hu from "@radix-ui/react-label";
import * as _e from "@radix-ui/react-dialog";
import { I as En, J as Qh, B as Zh, v as ep, a as It, P as Ot, T as Gt, A as tp, K as rp, L as np, M as ip, c as op, m as at, O as ap, Q as sp, R as cp, U as lp, V as up, W as fp, N as Rn, n as pu, b as dp, D as hp, X as Vr, q as pp, E as mp } from "./index-DI9T3iLd.js";
import { Resizable as gp } from "re-resizable";
import vp from "react-image-crop";
import * as Pt from "@radix-ui/react-tabs";
import * as Yo from "@radix-ui/react-checkbox";
import yp, { sticky as xp } from "tippy.js";
import { HexColorPicker as bp } from "react-colorful";
import * as Jo from "@radix-ui/react-switch";
import * as fe from "@radix-ui/react-dropdown-menu";
var mu = typeof global == "object" && global && global.Object === Object && global, wp = typeof self == "object" && self && self.Object === Object && self, Xe = mu || wp || Function("return this")(), Ve = Xe.Symbol, gu = Object.prototype, Sp = gu.hasOwnProperty, Ap = gu.toString, Zt = Ve ? Ve.toStringTag : void 0;
function Cp(e) {
  var t = Sp.call(e, Zt), r = e[Zt];
  try {
    e[Zt] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ap.call(e);
  return n && (t ? e[Zt] = r : delete e[Zt]), i;
}
var Tp = Object.prototype, Ep = Tp.toString;
function Rp(e) {
  return Ep.call(e);
}
var Ip = "[object Null]", Op = "[object Undefined]", Cs = Ve ? Ve.toStringTag : void 0;
function St(e) {
  return e == null ? e === void 0 ? Op : Ip : Cs && Cs in Object(e) ? Cp(e) : Rp(e);
}
function st(e) {
  return e != null && typeof e == "object";
}
var Pp = "[object Symbol]";
function In(e) {
  return typeof e == "symbol" || st(e) && St(e) == Pp;
}
function vu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Ke = Array.isArray, Ts = Ve ? Ve.prototype : void 0, Es = Ts ? Ts.toString : void 0;
function Kr(e) {
  if (typeof e == "string")
    return e;
  if (Ke(e))
    return vu(e, Kr) + "";
  if (In(e))
    return Es ? Es.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Np = /\s/;
function kp(e) {
  for (var t = e.length; t-- && Np.test(e.charAt(t)); )
    ;
  return t;
}
var Mp = /^\s+/;
function Lp(e) {
  return e && e.slice(0, kp(e) + 1).replace(Mp, "");
}
function wt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Rs = NaN, $p = /^[-+]0x[0-9a-f]+$/i, _p = /^0b[01]+$/i, Dp = /^0o[0-7]+$/i, Bp = parseInt;
function Ht(e) {
  if (typeof e == "number")
    return e;
  if (In(e))
    return Rs;
  if (wt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Lp(e);
  var r = _p.test(e);
  return r || Dp.test(e) ? Bp(e.slice(2), r ? 2 : 8) : $p.test(e) ? Rs : +e;
}
var Is = 1 / 0, jp = 17976931348623157e292;
function zp(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Ht(e), e === Is || e === -Is) {
    var t = e < 0 ? -1 : 1;
    return t * jp;
  }
  return e === e ? e : 0;
}
function Hp(e) {
  var t = zp(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function Ia(e) {
  return e;
}
var qp = "[object AsyncFunction]", Fp = "[object Function]", Up = "[object GeneratorFunction]", Wp = "[object Proxy]";
function yu(e) {
  if (!wt(e))
    return !1;
  var t = St(e);
  return t == Fp || t == Up || t == qp || t == Wp;
}
var Yn = Xe["__core-js_shared__"], Os = function() {
  var e = /[^.]+$/.exec(Yn && Yn.keys && Yn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Gp(e) {
  return !!Os && Os in e;
}
var Vp = Function.prototype, Kp = Vp.toString;
function Nt(e) {
  if (e != null) {
    try {
      return Kp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xp = /[\\^$.*+?()[\]{}|]/g, Yp = /^\[object .+?Constructor\]$/, Jp = Function.prototype, Qp = Object.prototype, Zp = Jp.toString, em = Qp.hasOwnProperty, tm = RegExp(
  "^" + Zp.call(em).replace(Xp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rm(e) {
  if (!wt(e) || Gp(e))
    return !1;
  var t = yu(e) ? tm : Yp;
  return t.test(Nt(e));
}
function nm(e, t) {
  return e == null ? void 0 : e[t];
}
function kt(e, t) {
  var r = nm(e, t);
  return rm(r) ? r : void 0;
}
var Qo = kt(Xe, "WeakMap");
function im(e, t, r) {
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
var om = 800, am = 16, sm = Date.now;
function cm(e) {
  var t = 0, r = 0;
  return function() {
    var n = sm(), i = am - (n - r);
    if (r = n, i > 0) {
      if (++t >= om)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function lm(e) {
  return function() {
    return e;
  };
}
var Ps = function() {
  try {
    var e = kt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), um = Ps ? function(e, t) {
  return Ps(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: lm(t),
    writable: !0
  });
} : Ia, fm = cm(um);
function dm(e, t, r, n) {
  for (var i = e.length, o = r + -1; ++o < i; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
function hm(e) {
  return e !== e;
}
function pm(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
function mm(e, t, r) {
  return t === t ? pm(e, t, r) : dm(e, hm, r);
}
function gm(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && mm(e, t, 0) > -1;
}
var vm = 9007199254740991, ym = /^(?:0|[1-9]\d*)$/;
function xu(e, t) {
  var r = typeof e;
  return t = t ?? vm, !!t && (r == "number" || r != "symbol" && ym.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function bu(e, t) {
  return e === t || e !== e && t !== t;
}
var Ns = Math.max;
function xm(e, t, r) {
  return t = Ns(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, o = Ns(n.length - t, 0), a = Array(o); ++i < o; )
      a[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(a), im(e, this, s);
  };
}
function bm(e, t) {
  return fm(xm(e, t, Ia), e + "");
}
var wm = 9007199254740991;
function Oa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wm;
}
function wu(e) {
  return e != null && Oa(e.length) && !yu(e);
}
var Sm = Object.prototype;
function Am(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Sm;
  return e === r;
}
function Cm(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Tm = "[object Arguments]";
function ks(e) {
  return st(e) && St(e) == Tm;
}
var Su = Object.prototype, Em = Su.hasOwnProperty, Rm = Su.propertyIsEnumerable, Pa = ks(/* @__PURE__ */ function() {
  return arguments;
}()) ? ks : function(e) {
  return st(e) && Em.call(e, "callee") && !Rm.call(e, "callee");
};
function Im() {
  return !1;
}
var Au = typeof exports == "object" && exports && !exports.nodeType && exports, Ms = Au && typeof module == "object" && module && !module.nodeType && module, Om = Ms && Ms.exports === Au, Ls = Om ? Xe.Buffer : void 0, Pm = Ls ? Ls.isBuffer : void 0, Zo = Pm || Im, Nm = "[object Arguments]", km = "[object Array]", Mm = "[object Boolean]", Lm = "[object Date]", $m = "[object Error]", _m = "[object Function]", Dm = "[object Map]", Bm = "[object Number]", jm = "[object Object]", zm = "[object RegExp]", Hm = "[object Set]", qm = "[object String]", Fm = "[object WeakMap]", Um = "[object ArrayBuffer]", Wm = "[object DataView]", Gm = "[object Float32Array]", Vm = "[object Float64Array]", Km = "[object Int8Array]", Xm = "[object Int16Array]", Ym = "[object Int32Array]", Jm = "[object Uint8Array]", Qm = "[object Uint8ClampedArray]", Zm = "[object Uint16Array]", eg = "[object Uint32Array]", le = {};
le[Gm] = le[Vm] = le[Km] = le[Xm] = le[Ym] = le[Jm] = le[Qm] = le[Zm] = le[eg] = !0;
le[Nm] = le[km] = le[Um] = le[Mm] = le[Wm] = le[Lm] = le[$m] = le[_m] = le[Dm] = le[Bm] = le[jm] = le[zm] = le[Hm] = le[qm] = le[Fm] = !1;
function tg(e) {
  return st(e) && Oa(e.length) && !!le[St(e)];
}
function Na(e) {
  return function(t) {
    return e(t);
  };
}
var Cu = typeof exports == "object" && exports && !exports.nodeType && exports, ar = Cu && typeof module == "object" && module && !module.nodeType && module, rg = ar && ar.exports === Cu, Jn = rg && mu.process, Xr = function() {
  try {
    var e = ar && ar.require && ar.require("util").types;
    return e || Jn && Jn.binding && Jn.binding("util");
  } catch {
  }
}(), $s = Xr && Xr.isTypedArray, Tu = $s ? Na($s) : tg, ng = Object.prototype, ig = ng.hasOwnProperty;
function og(e, t) {
  var r = Ke(e), n = !r && Pa(e), i = !r && !n && Zo(e), o = !r && !n && !i && Tu(e), a = r || n || i || o, s = a ? Cm(e.length, String) : [], c = s.length;
  for (var l in e)
    ig.call(e, l) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    xu(l, c))) && s.push(l);
  return s;
}
function ag(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var sg = ag(Object.keys, Object), cg = Object.prototype, lg = cg.hasOwnProperty;
function ug(e) {
  if (!Am(e))
    return sg(e);
  var t = [];
  for (var r in Object(e))
    lg.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Eu(e) {
  return wu(e) ? og(e) : ug(e);
}
var fg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, dg = /^\w*$/;
function ka(e, t) {
  if (Ke(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || In(e) ? !0 : dg.test(e) || !fg.test(e) || t != null && e in Object(t);
}
var mr = kt(Object, "create");
function hg() {
  this.__data__ = mr ? mr(null) : {}, this.size = 0;
}
function pg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var mg = "__lodash_hash_undefined__", gg = Object.prototype, vg = gg.hasOwnProperty;
function yg(e) {
  var t = this.__data__;
  if (mr) {
    var r = t[e];
    return r === mg ? void 0 : r;
  }
  return vg.call(t, e) ? t[e] : void 0;
}
var xg = Object.prototype, bg = xg.hasOwnProperty;
function wg(e) {
  var t = this.__data__;
  return mr ? t[e] !== void 0 : bg.call(t, e);
}
var Sg = "__lodash_hash_undefined__";
function Ag(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = mr && t === void 0 ? Sg : t, this;
}
function Et(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Et.prototype.clear = hg;
Et.prototype.delete = pg;
Et.prototype.get = yg;
Et.prototype.has = wg;
Et.prototype.set = Ag;
function Cg() {
  this.__data__ = [], this.size = 0;
}
function On(e, t) {
  for (var r = e.length; r--; )
    if (bu(e[r][0], t))
      return r;
  return -1;
}
var Tg = Array.prototype, Eg = Tg.splice;
function Rg(e) {
  var t = this.__data__, r = On(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Eg.call(t, r, 1), --this.size, !0;
}
function Ig(e) {
  var t = this.__data__, r = On(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Og(e) {
  return On(this.__data__, e) > -1;
}
function Pg(e, t) {
  var r = this.__data__, n = On(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ct(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ct.prototype.clear = Cg;
ct.prototype.delete = Rg;
ct.prototype.get = Ig;
ct.prototype.has = Og;
ct.prototype.set = Pg;
var gr = kt(Xe, "Map");
function Ng() {
  this.size = 0, this.__data__ = {
    hash: new Et(),
    map: new (gr || ct)(),
    string: new Et()
  };
}
function kg(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Pn(e, t) {
  var r = e.__data__;
  return kg(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Mg(e) {
  var t = Pn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Lg(e) {
  return Pn(this, e).get(e);
}
function $g(e) {
  return Pn(this, e).has(e);
}
function _g(e, t) {
  var r = Pn(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function lt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
lt.prototype.clear = Ng;
lt.prototype.delete = Mg;
lt.prototype.get = Lg;
lt.prototype.has = $g;
lt.prototype.set = _g;
var Dg = "Expected a function";
function Ma(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Dg);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new (Ma.Cache || lt)(), r;
}
Ma.Cache = lt;
var Bg = 500;
function jg(e) {
  var t = Ma(e, function(n) {
    return r.size === Bg && r.clear(), n;
  }), r = t.cache;
  return t;
}
var zg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hg = /\\(\\)?/g, qg = jg(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(zg, function(r, n, i, o) {
    t.push(i ? o.replace(Hg, "$1") : n || r);
  }), t;
});
function ea(e) {
  return e == null ? "" : Kr(e);
}
function Ru(e, t) {
  return Ke(e) ? e : ka(e, t) ? [e] : qg(ea(e));
}
function Nn(e) {
  if (typeof e == "string" || In(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Iu(e, t) {
  t = Ru(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Nn(t[r++])];
  return r && r == n ? e : void 0;
}
function Fg(e, t, r) {
  var n = e == null ? void 0 : Iu(e, t);
  return n === void 0 ? r : n;
}
function Ou(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var _s = Ve ? Ve.isConcatSpreadable : void 0;
function Ug(e) {
  return Ke(e) || Pa(e) || !!(_s && e && e[_s]);
}
function Wg(e, t, r, n, i) {
  var o = -1, a = e.length;
  for (r || (r = Ug), i || (i = []); ++o < a; ) {
    var s = e[o];
    r(s) && Ou(i, s);
  }
  return i;
}
function Gg(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++n < i; )
    o[n] = e[n + t];
  return o;
}
function Vg(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : Gg(e, t, r);
}
var Kg = "\\ud800-\\udfff", Xg = "\\u0300-\\u036f", Yg = "\\ufe20-\\ufe2f", Jg = "\\u20d0-\\u20ff", Qg = Xg + Yg + Jg, Zg = "\\ufe0e\\ufe0f", e1 = "\\u200d", t1 = RegExp("[" + e1 + Kg + Qg + Zg + "]");
function La(e) {
  return t1.test(e);
}
function r1(e) {
  return e.split("");
}
var Pu = "\\ud800-\\udfff", n1 = "\\u0300-\\u036f", i1 = "\\ufe20-\\ufe2f", o1 = "\\u20d0-\\u20ff", a1 = n1 + i1 + o1, s1 = "\\ufe0e\\ufe0f", c1 = "[" + Pu + "]", ta = "[" + a1 + "]", ra = "\\ud83c[\\udffb-\\udfff]", l1 = "(?:" + ta + "|" + ra + ")", Nu = "[^" + Pu + "]", ku = "(?:\\ud83c[\\udde6-\\uddff]){2}", Mu = "[\\ud800-\\udbff][\\udc00-\\udfff]", u1 = "\\u200d", Lu = l1 + "?", $u = "[" + s1 + "]?", f1 = "(?:" + u1 + "(?:" + [Nu, ku, Mu].join("|") + ")" + $u + Lu + ")*", d1 = $u + Lu + f1, h1 = "(?:" + [Nu + ta + "?", ta, ku, Mu, c1].join("|") + ")", p1 = RegExp(ra + "(?=" + ra + ")|" + h1 + d1, "g");
function m1(e) {
  return e.match(p1) || [];
}
function g1(e) {
  return La(e) ? m1(e) : r1(e);
}
function v1(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function _u(e, t, r) {
  return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Ht(r), r = r === r ? r : 0), t !== void 0 && (t = Ht(t), t = t === t ? t : 0), v1(Ht(e), t, r);
}
function y1() {
  this.__data__ = new ct(), this.size = 0;
}
function x1(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function b1(e) {
  return this.__data__.get(e);
}
function w1(e) {
  return this.__data__.has(e);
}
var S1 = 200;
function A1(e, t) {
  var r = this.__data__;
  if (r instanceof ct) {
    var n = r.__data__;
    if (!gr || n.length < S1 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new lt(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function it(e) {
  var t = this.__data__ = new ct(e);
  this.size = t.size;
}
it.prototype.clear = y1;
it.prototype.delete = x1;
it.prototype.get = b1;
it.prototype.has = w1;
it.prototype.set = A1;
function C1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function T1() {
  return [];
}
var E1 = Object.prototype, R1 = E1.propertyIsEnumerable, Ds = Object.getOwnPropertySymbols, I1 = Ds ? function(e) {
  return e == null ? [] : (e = Object(e), C1(Ds(e), function(t) {
    return R1.call(e, t);
  }));
} : T1;
function O1(e, t, r) {
  var n = t(e);
  return Ke(e) ? n : Ou(n, r(e));
}
function Bs(e) {
  return O1(e, Eu, I1);
}
var na = kt(Xe, "DataView"), ia = kt(Xe, "Promise"), oa = kt(Xe, "Set"), js = "[object Map]", P1 = "[object Object]", zs = "[object Promise]", Hs = "[object Set]", qs = "[object WeakMap]", Fs = "[object DataView]", N1 = Nt(na), k1 = Nt(gr), M1 = Nt(ia), L1 = Nt(oa), $1 = Nt(Qo), yt = St;
(na && yt(new na(new ArrayBuffer(1))) != Fs || gr && yt(new gr()) != js || ia && yt(ia.resolve()) != zs || oa && yt(new oa()) != Hs || Qo && yt(new Qo()) != qs) && (yt = function(e) {
  var t = St(e), r = t == P1 ? e.constructor : void 0, n = r ? Nt(r) : "";
  if (n)
    switch (n) {
      case N1:
        return Fs;
      case k1:
        return js;
      case M1:
        return zs;
      case L1:
        return Hs;
      case $1:
        return qs;
    }
  return t;
});
var Us = Xe.Uint8Array, _1 = "__lodash_hash_undefined__";
function D1(e) {
  return this.__data__.set(e, _1), this;
}
function B1(e) {
  return this.__data__.has(e);
}
function vr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new lt(); ++t < r; )
    this.add(e[t]);
}
vr.prototype.add = vr.prototype.push = D1;
vr.prototype.has = B1;
function j1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Du(e, t) {
  return e.has(t);
}
var z1 = 1, H1 = 2;
function Bu(e, t, r, n, i, o) {
  var a = r & z1, s = e.length, c = t.length;
  if (s != c && !(a && c > s))
    return !1;
  var l = o.get(e), d = o.get(t);
  if (l && d)
    return l == t && d == e;
  var f = -1, h = !0, p = r & H1 ? new vr() : void 0;
  for (o.set(e, t), o.set(t, e); ++f < s; ) {
    var m = e[f], y = t[f];
    if (n)
      var g = a ? n(y, m, f, t, e, o) : n(m, y, f, e, t, o);
    if (g !== void 0) {
      if (g)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!j1(t, function(x, w) {
        if (!Du(p, w) && (m === x || i(m, x, r, n, o)))
          return p.push(w);
      })) {
        h = !1;
        break;
      }
    } else if (!(m === y || i(m, y, r, n, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), h;
}
function q1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function F1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var U1 = 1, W1 = 2, G1 = "[object Boolean]", V1 = "[object Date]", K1 = "[object Error]", X1 = "[object Map]", Y1 = "[object Number]", J1 = "[object RegExp]", Q1 = "[object Set]", Z1 = "[object String]", e0 = "[object Symbol]", t0 = "[object ArrayBuffer]", r0 = "[object DataView]", Ws = Ve ? Ve.prototype : void 0, Qn = Ws ? Ws.valueOf : void 0;
function n0(e, t, r, n, i, o, a) {
  switch (r) {
    case r0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case t0:
      return !(e.byteLength != t.byteLength || !o(new Us(e), new Us(t)));
    case G1:
    case V1:
    case Y1:
      return bu(+e, +t);
    case K1:
      return e.name == t.name && e.message == t.message;
    case J1:
    case Z1:
      return e == t + "";
    case X1:
      var s = q1;
    case Q1:
      var c = n & U1;
      if (s || (s = F1), e.size != t.size && !c)
        return !1;
      var l = a.get(e);
      if (l)
        return l == t;
      n |= W1, a.set(e, t);
      var d = Bu(s(e), s(t), n, i, o, a);
      return a.delete(e), d;
    case e0:
      if (Qn)
        return Qn.call(e) == Qn.call(t);
  }
  return !1;
}
var i0 = 1, o0 = Object.prototype, a0 = o0.hasOwnProperty;
function s0(e, t, r, n, i, o) {
  var a = r & i0, s = Bs(e), c = s.length, l = Bs(t), d = l.length;
  if (c != d && !a)
    return !1;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(a ? h in t : a0.call(t, h)))
      return !1;
  }
  var p = o.get(e), m = o.get(t);
  if (p && m)
    return p == t && m == e;
  var y = !0;
  o.set(e, t), o.set(t, e);
  for (var g = a; ++f < c; ) {
    h = s[f];
    var x = e[h], w = t[h];
    if (n)
      var C = a ? n(w, x, h, t, e, o) : n(x, w, h, e, t, o);
    if (!(C === void 0 ? x === w || i(x, w, r, n, o) : C)) {
      y = !1;
      break;
    }
    g || (g = h == "constructor");
  }
  if (y && !g) {
    var E = e.constructor, A = t.constructor;
    E != A && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof A == "function" && A instanceof A) && (y = !1);
  }
  return o.delete(e), o.delete(t), y;
}
var c0 = 1, Gs = "[object Arguments]", Vs = "[object Array]", Nr = "[object Object]", l0 = Object.prototype, Ks = l0.hasOwnProperty;
function u0(e, t, r, n, i, o) {
  var a = Ke(e), s = Ke(t), c = a ? Vs : yt(e), l = s ? Vs : yt(t);
  c = c == Gs ? Nr : c, l = l == Gs ? Nr : l;
  var d = c == Nr, f = l == Nr, h = c == l;
  if (h && Zo(e)) {
    if (!Zo(t))
      return !1;
    a = !0, d = !1;
  }
  if (h && !d)
    return o || (o = new it()), a || Tu(e) ? Bu(e, t, r, n, i, o) : n0(e, t, c, r, n, i, o);
  if (!(r & c0)) {
    var p = d && Ks.call(e, "__wrapped__"), m = f && Ks.call(t, "__wrapped__");
    if (p || m) {
      var y = p ? e.value() : e, g = m ? t.value() : t;
      return o || (o = new it()), i(y, g, r, n, o);
    }
  }
  return h ? (o || (o = new it()), s0(e, t, r, n, i, o)) : !1;
}
function $a(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !st(e) && !st(t) ? e !== e && t !== t : u0(e, t, r, n, $a, i);
}
var f0 = 1, d0 = 2;
function h0(e, t, r, n) {
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
      var d = new it(), f;
      if (!(f === void 0 ? $a(l, c, f0 | d0, n, d) : f))
        return !1;
    }
  }
  return !0;
}
function ju(e) {
  return e === e && !wt(e);
}
function p0(e) {
  for (var t = Eu(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, ju(i)];
  }
  return t;
}
function zu(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function m0(e) {
  var t = p0(e);
  return t.length == 1 && t[0][2] ? zu(t[0][0], t[0][1]) : function(r) {
    return r === e || h0(r, e, t);
  };
}
function g0(e, t) {
  return e != null && t in Object(e);
}
function v0(e, t, r) {
  t = Ru(t, e);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = Nn(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && Oa(i) && xu(a, i) && (Ke(e) || Pa(e)));
}
function y0(e, t) {
  return e != null && v0(e, t, g0);
}
var x0 = 1, b0 = 2;
function w0(e, t) {
  return ka(e) && ju(t) ? zu(Nn(e), t) : function(r) {
    var n = Fg(r, e);
    return n === void 0 && n === t ? y0(r, e) : $a(t, n, x0 | b0);
  };
}
function Hu(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function S0(e) {
  return function(t) {
    return Iu(t, e);
  };
}
function A0(e) {
  return ka(e) ? Hu(Nn(e)) : S0(e);
}
function C0(e) {
  return typeof e == "function" ? e : e == null ? Ia : typeof e == "object" ? Ke(e) ? w0(e[0], e[1]) : m0(e) : A0(e);
}
var Zn = function() {
  return Xe.Date.now();
}, T0 = "Expected a function", E0 = Math.max, R0 = Math.min;
function kn(e, t, r) {
  var n, i, o, a, s, c, l = 0, d = !1, f = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(T0);
  t = Ht(t) || 0, wt(r) && (d = !!r.leading, f = "maxWait" in r, o = f ? E0(Ht(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);
  function p(k) {
    var L = n, M = i;
    return n = i = void 0, l = k, a = e.apply(M, L), a;
  }
  function m(k) {
    return l = k, s = setTimeout(x, t), d ? p(k) : a;
  }
  function y(k) {
    var L = k - c, M = k - l, N = t - L;
    return f ? R0(N, o - M) : N;
  }
  function g(k) {
    var L = k - c, M = k - l;
    return c === void 0 || L >= t || L < 0 || f && M >= o;
  }
  function x() {
    var k = Zn();
    if (g(k))
      return w(k);
    s = setTimeout(x, y(k));
  }
  function w(k) {
    return s = void 0, h && n ? p(k) : (n = i = void 0, a);
  }
  function C() {
    s !== void 0 && clearTimeout(s), l = 0, n = c = i = s = void 0;
  }
  function E() {
    return s === void 0 ? a : w(Zn());
  }
  function A() {
    var k = Zn(), L = g(k);
    if (n = arguments, i = this, c = k, L) {
      if (s === void 0)
        return m(c);
      if (f)
        return clearTimeout(s), s = setTimeout(x, t), p(c);
    }
    return s === void 0 && (s = setTimeout(x, t)), a;
  }
  return A.cancel = C, A.flush = E, A;
}
function ei(e) {
  return st(e) && wu(e);
}
var I0 = 200;
function O0(e, t, r, n) {
  var i = -1, o = gm, a = !0, s = e.length, c = [], l = t.length;
  if (!s)
    return c;
  r && (t = vu(t, Na(r))), t.length >= I0 && (o = Du, a = !1, t = new vr(t));
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
function P0(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var N0 = bm(function(e, t) {
  var r = P0(t);
  return ei(r) && (r = void 0), ei(e) ? O0(e, Wg(t, 1, ei), C0(r)) : [];
}), k0 = "[object Number]";
function Yr(e) {
  return typeof e == "number" || st(e) && St(e) == k0;
}
var M0 = "[object RegExp]";
function L0(e) {
  return st(e) && St(e) == M0;
}
var Xs = Xr && Xr.isRegExp, $0 = Xs ? Na(Xs) : L0, _0 = Hu("length"), qu = "\\ud800-\\udfff", D0 = "\\u0300-\\u036f", B0 = "\\ufe20-\\ufe2f", j0 = "\\u20d0-\\u20ff", z0 = D0 + B0 + j0, H0 = "\\ufe0e\\ufe0f", q0 = "[" + qu + "]", aa = "[" + z0 + "]", sa = "\\ud83c[\\udffb-\\udfff]", F0 = "(?:" + aa + "|" + sa + ")", Fu = "[^" + qu + "]", Uu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Wu = "[\\ud800-\\udbff][\\udc00-\\udfff]", U0 = "\\u200d", Gu = F0 + "?", Vu = "[" + H0 + "]?", W0 = "(?:" + U0 + "(?:" + [Fu, Uu, Wu].join("|") + ")" + Vu + Gu + ")*", G0 = Vu + Gu + W0, V0 = "(?:" + [Fu + aa + "?", aa, Uu, Wu, q0].join("|") + ")", Ys = RegExp(sa + "(?=" + sa + ")|" + V0 + G0, "g");
function K0(e) {
  for (var t = Ys.lastIndex = 0; Ys.test(e); )
    ++t;
  return t;
}
function X0(e) {
  return La(e) ? K0(e) : _0(e);
}
var Y0 = "Expected a function";
function yr(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(Y0);
  return wt(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), kn(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var J0 = 30, Q0 = "...", Z0 = /\w*$/;
function ev(e, t) {
  var r = J0, n = Q0;
  if (wt(t)) {
    var i = "separator" in t ? t.separator : i;
    r = "length" in t ? Hp(t.length) : r, n = "omission" in t ? Kr(t.omission) : n;
  }
  e = ea(e);
  var o = e.length;
  if (La(e)) {
    var a = g1(e);
    o = a.length;
  }
  if (r >= o)
    return e;
  var s = r - X0(n);
  if (s < 1)
    return n;
  var c = a ? Vg(a, 0, s).join("") : e.slice(0, s);
  if (i === void 0)
    return c + n;
  if (a && (s += c.length - s), $0(i)) {
    if (e.slice(s).search(i)) {
      var l, d = c;
      for (i.global || (i = RegExp(i.source, ea(Z0.exec(i)) + "g")), i.lastIndex = 0; l = i.exec(d); )
        var f = l.index;
      c = c.slice(0, f === void 0 ? s : f);
    }
  } else if (e.indexOf(Kr(i), s) != s) {
    var h = c.lastIndexOf(i);
    h > -1 && (c = c.slice(0, h));
  }
  return c + n;
}
const _a = "-", tv = (e) => {
  const t = nv(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(_a);
      return s[0] === "" && s.length !== 1 && s.shift(), Ku(s, t) || rv(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, Ku = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? Ku(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(_a);
  return (a = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : a.classGroupId;
}, Js = /^\[(.+)\]$/, rv = (e) => {
  if (Js.test(e)) {
    const t = Js.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, nv = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ov(Object.entries(e.classGroups), r).forEach(([o, a]) => {
    ca(a, n, o, t);
  }), n;
}, ca = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : Qs(t, i);
      o.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (iv(i)) {
        ca(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([o, a]) => {
      ca(a, Qs(t, o), r, n);
    });
  });
}, Qs = (e, t) => {
  let r = e;
  return t.split(_a).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, iv = (e) => e.isThemeGetter, ov = (e, t) => t ? e.map(([r, n]) => {
  const i = n.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, s]) => [t + a, s])) : o);
  return [r, i];
}) : e, av = (e) => {
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
}, Xu = "!", sv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], o = t.length, a = (s) => {
    const c = [];
    let l = 0, d = 0, f;
    for (let g = 0; g < s.length; g++) {
      let x = s[g];
      if (l === 0) {
        if (x === i && (n || s.slice(g, g + o) === t)) {
          c.push(s.slice(d, g)), d = g + o;
          continue;
        }
        if (x === "/") {
          f = g;
          continue;
        }
      }
      x === "[" ? l++ : x === "]" && l--;
    }
    const h = c.length === 0 ? s : s.substring(d), p = h.startsWith(Xu), m = p ? h.substring(1) : h, y = f && f > d ? f - d : void 0;
    return {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: y
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, cv = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, lv = (e) => ({
  cache: av(e.cacheSize),
  parseClassName: sv(e),
  ...tv(e)
}), uv = /\s+/, fv = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, o = [], a = e.trim().split(uv);
  let s = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const l = a[c], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: p
    } = r(l);
    let m = !!p, y = n(m ? h.substring(0, p) : h);
    if (!y) {
      if (!m) {
        s = l + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (y = n(h), !y) {
        s = l + (s.length > 0 ? " " + s : s);
        continue;
      }
      m = !1;
    }
    const g = cv(d).join(":"), x = f ? g + Xu : g, w = x + y;
    if (o.includes(w))
      continue;
    o.push(w);
    const C = i(y, m);
    for (let E = 0; E < C.length; ++E) {
      const A = C[E];
      o.push(x + A);
    }
    s = l + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function dv() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Yu(t)) && (n && (n += " "), n += r);
  return n;
}
const Yu = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Yu(e[n])) && (r && (r += " "), r += t);
  return r;
};
function hv(e, ...t) {
  let r, n, i, o = a;
  function a(c) {
    const l = t.reduce((d, f) => f(d), e());
    return r = lv(l), n = r.cache.get, i = r.cache.set, o = s, s(c);
  }
  function s(c) {
    const l = n(c);
    if (l)
      return l;
    const d = fv(c, r);
    return i(c, d), d;
  }
  return function() {
    return o(dv.apply(null, arguments));
  };
}
const ce = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ju = /^\[(?:([a-z-]+):)?(.+)\]$/i, pv = /^\d+\/\d+$/, mv = /* @__PURE__ */ new Set(["px", "full", "screen"]), gv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, yv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, xv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, et = (e) => qt(e) || mv.has(e) || pv.test(e), mt = (e) => Vt(e, "length", Iv), qt = (e) => !!e && !Number.isNaN(Number(e)), ti = (e) => Vt(e, "number", qt), er = (e) => !!e && Number.isInteger(Number(e)), wv = (e) => e.endsWith("%") && qt(e.slice(0, -1)), G = (e) => Ju.test(e), gt = (e) => gv.test(e), Sv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Av = (e) => Vt(e, Sv, Qu), Cv = (e) => Vt(e, "position", Qu), Tv = /* @__PURE__ */ new Set(["image", "url"]), Ev = (e) => Vt(e, Tv, Pv), Rv = (e) => Vt(e, "", Ov), tr = () => !0, Vt = (e, t, r) => {
  const n = Ju.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Iv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  vv.test(e) && !yv.test(e)
), Qu = () => !1, Ov = (e) => xv.test(e), Pv = (e) => bv.test(e), Nv = () => {
  const e = ce("colors"), t = ce("spacing"), r = ce("blur"), n = ce("brightness"), i = ce("borderColor"), o = ce("borderRadius"), a = ce("borderSpacing"), s = ce("borderWidth"), c = ce("contrast"), l = ce("grayscale"), d = ce("hueRotate"), f = ce("invert"), h = ce("gap"), p = ce("gradientColorStops"), m = ce("gradientColorStopPositions"), y = ce("inset"), g = ce("margin"), x = ce("opacity"), w = ce("padding"), C = ce("saturate"), E = ce("scale"), A = ce("sepia"), k = ce("skew"), L = ce("space"), M = ce("translate"), N = () => ["auto", "contain", "none"], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", G, t], S = () => [G, t], O = () => ["", et, mt], D = () => ["auto", qt, G], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], re = () => ["", "0", G], de = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], pe = () => [qt, G];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [tr],
      spacing: [et, mt],
      blur: ["none", "", gt, G],
      brightness: pe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", gt, G],
      borderSpacing: S(),
      borderWidth: O(),
      contrast: pe(),
      grayscale: re(),
      hueRotate: pe(),
      invert: re(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [wv, mt],
      inset: T(),
      margin: T(),
      opacity: pe(),
      padding: S(),
      saturate: pe(),
      scale: pe(),
      sepia: re(),
      skew: pe(),
      space: S(),
      translate: S()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", G]
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
        columns: [gt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": de()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": de()
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
        object: [...H(), G]
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
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
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
        z: ["auto", er, G]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: T()
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
        flex: ["1", "auto", "initial", "none", G]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: re()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: re()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", er, G]
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
          span: ["full", er, G]
        }, G]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
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
          span: [er, G]
        }, G]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
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
        "auto-cols": ["auto", "min", "max", "fr", G]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", G]
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
        justify: ["normal", ...ee()]
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
        content: ["normal", ...ee(), "baseline"]
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
        "place-content": [...ee(), "baseline"]
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
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [L]
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
        "space-y": [L]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [G, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [gt]
        }, gt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [G, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", gt, mt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ti]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", qt, ti]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", et, G]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", G]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", G]
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
        "placeholder-opacity": [x]
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
        "text-opacity": [x]
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
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", et, mt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", et, G]
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
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
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
        content: ["none", G]
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
        "bg-opacity": [x]
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
        bg: [...H(), Cv]
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
        bg: ["auto", "cover", "contain", Av]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ev]
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
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden"]
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
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
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
        outline: ["", ...j()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [et, G]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [et, mt]
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
        ring: O()
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
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [et, mt]
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
        shadow: ["", "inner", "none", gt, Rv]
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
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...U(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": U()
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
        "drop-shadow": ["", "none", gt, G]
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
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [A]
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
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [A]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: pe()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", G]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: pe()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", G]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [er, G]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        "will-change": ["auto", "scroll", "contents", "transform", G]
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
        stroke: [et, mt, ti]
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
}, kv = /* @__PURE__ */ hv(Nv);
function Q(...e) {
  return kv(Ta(e));
}
let ri;
function ni() {
  return ri === void 0 && (ri = navigator.platform.includes("Mac")), ri;
}
function Mv(e) {
  return `${e}`.toLowerCase() === "mod" ? ni() ? "⌘" : "Ctrl" : `${e}`.toLowerCase() === "alt" ? ni() ? "⌥" : "Alt" : `${e}`.toLowerCase() === "shift" ? ni() ? "⇧" : "Shift" : e;
}
function Lv(e) {
  return e.map(Mv).join(" ");
}
const X = ir.forwardRef(
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
      ...y
    } = e, g = tf[r];
    return /* @__PURE__ */ P(Lf, { children: [
      /* @__PURE__ */ u($f, { asChild: !0, children: /* @__PURE__ */ P(
        h ? au : Mf,
        {
          "data-state": d != null && d() ? "on" : "off",
          onClick: l,
          ref: t,
          size: "sm",
          className: Q("richtext-w-[32px] richtext-h-[32px]", o),
          disabled: i,
          ...y,
          children: [
            g && /* @__PURE__ */ u(g, { className: "richtext-size-4" }),
            f
          ]
        }
      ) }),
      n && /* @__PURE__ */ u(es, { ...c, children: /* @__PURE__ */ P("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        /* @__PURE__ */ u("div", { children: n }),
        !!(s != null && s.length) && /* @__PURE__ */ u("span", { children: Lv(s) })
      ] }) })
    ] });
  }
);
function $v(e) {
  const t = ["size-small", "size-medium", "size-large"], r = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, i) => ({
    type: `image-${n}`,
    component: X,
    componentProps: {
      tooltip: Pe.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[i],
      action: () => e.commands.updateImage({ width: Ur[n] }),
      isActive: () => e.isActive("image", { width: Ur[n] })
    }
  }));
}
function _v(e) {
  const t = ["size-small", "size-medium", "size-large"], r = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, i) => ({
    type: `image-${n}`,
    component: X,
    componentProps: {
      tooltip: Pe.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[i],
      action: () => e.commands.updateImageGif({ width: Ur[n] }),
      isActive: () => e.isActive("image", { width: Ur[n] })
    }
  }));
}
function Dv(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: X,
    componentProps: {
      tooltip: Pe.t(`editor.textalign.${n}.tooltip`),
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
function Bv(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: X,
    componentProps: {
      tooltip: Pe.t(`editor.textalign.${n}.tooltip`),
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
function jv(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: X,
    componentProps: {
      tooltip: Pe.t(`editor.textalign.${n}.tooltip`),
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
function zv(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: X,
    componentProps: {
      tooltip: Pe.t(`editor.textalign.${n}.tooltip`),
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
function Hv(e) {
  return [
    {
      type: "flipX",
      component: X,
      componentProps: {
        editor: e,
        tooltip: Pe.t("editor.tooltip.flipX"),
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
      component: X,
      componentProps: {
        editor: e,
        tooltip: Pe.t("editor.tooltip.flipY"),
        icon: "FlipY",
        action: () => {
          const t = e.getAttributes("image"), { flipY: r } = t;
          e.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipY: !r
          }).run();
        }
      }
    },
    ...$v(e),
    ...Dv(e),
    {
      type: "remove",
      component: X,
      componentProps: {
        editor: e,
        tooltip: Pe.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          En(t, r);
        }
      }
    }
  ];
}
function qv(e) {
  return [
    ..._v(e),
    ...Bv(e),
    {
      type: "remove",
      component: X,
      componentProps: {
        editor: e,
        tooltip: Pe.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          En(t, r);
        }
      }
    }
  ];
}
function cw(e) {
  return [
    ...jv(e),
    {
      type: "edit",
      component: X,
      componentProps: {
        editor: e,
        tooltip: Pe.t("editor.edit"),
        icon: "Pencil",
        action: () => !0
      }
    },
    {
      type: "remove",
      component: X,
      componentProps: {
        editor: e,
        tooltip: Pe.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          En(t, r);
        }
      }
    }
  ];
}
function lw(e) {
  return [
    ...zv(e),
    {
      type: "edit",
      component: X,
      componentProps: {
        editor: e,
        tooltip: Pe.t("editor.edit"),
        icon: "Pencil",
        action: () => (console.log("AAA"), !0)
      }
    },
    {
      type: "remove",
      component: X,
      componentProps: {
        editor: e,
        tooltip: Pe.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          En(t, r);
        }
      }
    }
  ];
}
function Fv(e, t) {
  return Rd.reduce((r, n) => {
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
function Da(e, t, r) {
  const n = [], i = e.node(0);
  r = typeof r == "number" && r >= 0 ? r : e.sameParent(t) ? Math.max(0, e.sharedDepth(t.pos) - 1) : e.sharedDepth(t.pos);
  const o = new Qh(e, t, r), a = o.depth === 0 ? 0 : i.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((s, c) => {
    const l = a + c, d = l + s.nodeSize;
    if (l < o.start || l >= o.end) return;
    const f = new Zh(i.resolve(l), i.resolve(d));
    n.push(f);
  }), n;
}
class Ba {
  constructor(t, r) {
    Pr(this, "anchor");
    Pr(this, "head");
    this.anchor = t, this.head = r;
  }
  map(t) {
    return new Ba(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const r = t.resolve(this.anchor), n = t.resolve(this.head);
    return new Ue(r, n);
  }
}
class Ue extends ep {
  constructor(r, n, i, o = 1) {
    const { doc: a } = r, s = r === n, c = r.pos === a.content.size && n.pos === a.content.size, l = s && !c ? a.resolve(n.pos + (o > 0 ? 1 : -1)) : n, d = s && c ? a.resolve(r.pos - (o > 0 ? 1 : -1)) : r, f = Da(d.min(l), d.max(l), i);
    super(
      l.pos >= r.pos ? f[0].$from : f[f.length - 1].$to,
      l.pos >= r.pos ? f[f.length - 1].$to : f[0].$from,
      f
    );
    Pr(this, "depth");
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
    return new Ba(this.anchor, this.head);
  }
}
function Uv(e) {
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
function kr(e, t) {
  return window.getComputedStyle(e)[t];
}
function Wv(e = 0, t = 0, r = 0) {
  return Math.min(Math.max(e, t), r);
}
function Zs(e) {
  e.parentNode !== null && e.parentNode !== void 0 && e.parentNode.removeChild(e);
}
function Zu(e) {
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
function Gv(e, t) {
  const { doc: r } = t.view.state, n = Zu({ editor: t, x: e.clientX, y: e.clientY, direction: "right" });
  if (!n.resultNode || n.pos === null) return [];
  const i = e.clientX, o = function(d, f, h) {
    const p = Number.parseInt(kr(d.dom, "paddingLeft"), 10), m = Number.parseInt(kr(d.dom, "paddingRight"), 10), y = Number.parseInt(kr(d.dom, "borderLeftWidth"), 10), g = Number.parseInt(kr(d.dom, "borderLeftWidth"), 10), x = d.dom.getBoundingClientRect();
    return {
      left: Wv(
        f,
        x.left + p + y,
        x.right - m - g
      ),
      top: h
    };
  }(t.view, i, e.clientY), a = t.view.posAtCoords(o);
  if (!a) return [];
  const { pos: s } = a;
  if (!r.resolve(s).parent) return [];
  const c = r.resolve(n.pos), l = r.resolve(n.pos + 1);
  return Da(c, l, 0);
}
function ec(e, t) {
  const r = e.resolve(t), { depth: n } = r;
  return n === 0 ? t : r.pos - r.parentOffset - 1;
}
function tc(e, t) {
  const r = e.nodeAt(t), n = e.resolve(t);
  let { depth: i } = n, o = r;
  for (; i > 0; ) {
    const a = n.node(i);
    i -= 1, i === 0 && (o = a);
  }
  return o;
}
function rc(e, t) {
  let r = t;
  for (; r && r.parentNode && r.parentNode !== e.dom; ) r = r.parentNode;
  return r;
}
const ef = new It("dragHandle");
function Vv({
  pluginKey: e = ef,
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
    const { empty: h, $from: p, $to: m } = f.state.selection, y = Gv(d, r), g = Da(p, m, 0), x = g.some((N) => y.find((_) => _.$from === N.$from && _.$to === N.$to)), w = h || !x ? y : g;
    if (w.length === 0) return;
    const { tr: C } = f.state, E = document.createElement("div"), A = w[0].$from.pos, k = w[w.length - 1].$to.pos, L = Ue.create(f.state.doc, A, k), M = L.content();
    w.forEach((N) => {
      const _ = Uv(f.nodeDOM(N.$from.pos));
      E.append(_);
    }), E.style.position = "absolute", E.style.top = "-10000px", document.body.append(E), d.dataTransfer.clearData(), d.dataTransfer.setDragImage(E, 0, 0), f.dragging = { slice: M, move: !0 }, C.setSelection(L), f.dispatch(C), document.addEventListener("drop", () => Zs(E), { once: !0 }), setTimeout(() => {
      t && (t.style.pointerEvents = "none");
    }, 0);
  }), t.addEventListener("dragend", () => {
    t && (t.style.pointerEvents = "auto");
  }), new Ot({
    key: typeof e == "string" ? new It(e) : e,
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
      return f(), h(r.view.dom), a = yp(d.dom, {
        ...p(),
        ...n
      }), {
        update(E, A) {
          if (!m(t, a) || (t.draggable = !s, !y(E, A)))
            return;
          const k = g(E);
          k && x(E, k);
        },
        destroy() {
          C();
        }
      };
      function f() {
        t.draggable = !0, t.style.pointerEvents = "auto";
      }
      function h(E) {
        var A;
        (A = E.parentElement) == null || A.appendChild(o), o.appendChild(t), Object.assign(o.style, {
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
      function m(E, A) {
        return E && A;
      }
      function y(E, A) {
        return !E.state.doc.eq(A.doc) && l !== -1;
      }
      function g(E) {
        let A = E.nodeDOM(l);
        return A = rc(E, A), A === E.dom || (A == null ? void 0 : A.nodeType) !== 1 ? null : A;
      }
      function x(E, A) {
        const k = E.posAtDOM(A, 0), L = tc(r.state.doc, k);
        if (L === c)
          return;
        const M = ec(r.state.doc, k);
        c = L, l = M, i == null || i({
          editor: r,
          node: c,
          pos: l
        }), w(A);
      }
      function w(E) {
        a.setProps({
          getReferenceClientRect: () => E.getBoundingClientRect()
        }), a.show();
      }
      function C() {
        a == null || a.destroy(), t && Zs(o);
      }
    },
    props: {
      handleDOMEvents: {
        mouseleave: (d, f) => {
          if (s || !h(f)) return !1;
          return p(), m(), !1;
          function h(y) {
            return y.target && !o.contains(y.relatedTarget);
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
        mousemove: kn((d, f) => {
          if (!t || !a || s)
            return !1;
          const h = Zu({
            x: f.clientX,
            y: f.clientY,
            direction: "right",
            editor: r
          });
          if (!h.resultElement || h.resultElement === d.dom)
            return !1;
          const p = rc(d, h.resultElement);
          if (p === d.dom || (p == null ? void 0 : p.nodeType) !== 1)
            return !1;
          const m = d.posAtDOM(p, 0), y = tc(r.state.doc, m);
          if (y === c)
            return !1;
          const g = ec(r.state.doc, m);
          return c = y, l = g, i == null || i({
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
var la = /* @__PURE__ */ ((e) => (e[e.max = 7] = "max", e[e.min = 0] = "min", e[e.more = 1] = "more", e[e.less = -1] = "less", e))(la || {});
function Kv(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
function Xv(e, t, r, n) {
  const { doc: i, selection: o } = e;
  if (!i || !o || !(o instanceof Gt || o instanceof tp))
    return e;
  const { from: a, to: s } = o;
  return i.nodesBetween(a, s, (c, l) => {
    const d = c.type;
    return r.includes(d.name) ? (e = ua(e, l, t), !1) : !rp(c.type.name, n.extensionManager.extensions);
  }), e;
}
function ua(e, t, r) {
  if (!e.doc)
    return e;
  const n = e.doc.nodeAt(t);
  if (!n)
    return e;
  const a = Kv((n.attrs.indent || 0) + r, 0, 7);
  if (a === n.attrs.indent)
    return e;
  const s = {
    ...n.attrs,
    indent: a
  };
  return e.setNodeMarkup(t, n.type, s, n.marks);
}
function uw({ delta: e, types: t }) {
  return ({ state: r, dispatch: n, editor: i }) => {
    const { selection: o } = r;
    let { tr: a } = r;
    return a = a.setSelection(o), a = Xv(a, e, t, i), a.docChanged ? (n && n(a), !0) : !1;
  };
}
function Yv(e) {
  var M, N, _;
  const { pluginKey: t = ef } = e, { t: r } = Ce(), [n, i] = Z(null), [o, a] = Z(-1), s = Ge(null), c = Ge(null), [l, d] = Z(!1), f = e.editor.extensionManager.extensions.some((T) => T.name === "textAlign"), h = e.editor.extensionManager.extensions.some((T) => T.name === "indent"), p = e.editor.extensionManager.extensions.some((T) => T.name === "clear");
  ve(() => {
    s.current && !e.editor.isDestroyed && (c.current = Vv({
      editor: e.editor,
      element: s.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: A
    }), e.editor.registerPlugin(c.current));
  }, [e.editor, s]);
  function m() {
    const T = e.editor.chain();
    T.setNodeSelection(o).unsetAllMarks(), (n == null ? void 0 : n.type.name) !== "paragraph" && T.setParagraph(), T.run();
  }
  function y() {
    e.editor.chain().focus().setNodeSelection(o).run(), document.execCommand("copy");
  }
  function g() {
    e.editor.commands.setNodeSelection(o);
    const { $anchor: T } = e.editor.state.selection, S = T.node(1) || e.editor.state.selection.node;
    e.editor.chain().setMeta("hideDragHandle", !0).insertContentAt(o + ((n == null ? void 0 : n.nodeSize) || 0), S.toJSON()).run();
  }
  function x(T) {
    e.editor.commands.setTextAlign(T);
  }
  function w() {
    const T = ua(e.editor.state.tr, o, 1);
    T.setMeta("hideDragHandle", !0), e.editor.view.dispatch && e.editor.view.dispatch(T);
  }
  function C() {
    const T = ua(e.editor.state.tr, o, -1);
    e.editor.view.dispatch && e.editor.view.dispatch(T);
  }
  function E() {
    e.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(o).deleteSelection().run();
  }
  function A(T) {
    T.node && i(T.node), a(T.pos);
  }
  function k() {
    var T;
    if (o !== -1) {
      const S = (n == null ? void 0 : n.nodeSize) || 0, O = o + S, D = (n == null ? void 0 : n.type.name) === "paragraph" && ((T = n == null ? void 0 : n.content) == null ? void 0 : T.size) === 0, H = D ? o + 2 : O + 2;
      e.editor.chain().command(({ dispatch: j, tr: U, state: ee }) => j ? (D ? U.insertText("/", o, o + 1) : U.insert(
        O,
        ee.schema.nodes.paragraph.create(null, [ee.schema.text("/")])
      ), j(U)) : !0).focus(H).run();
    }
  }
  ve(() => (l ? e.editor.commands.setMeta("lockDragHandle", !0) : e.editor.commands.setMeta("lockDragHandle", !1), () => {
    e.editor.commands.setMeta("lockDragHandle", !1);
  }), [l]), ve(() => () => {
    c.current && (e.editor.unregisterPlugin(t), c.current = null);
  }, []), ve(() => {
    var T;
    (T = e.editor) != null && T.isDestroyed && c.current && (e.editor.unregisterPlugin(t), c.current = null);
  }, [(M = e.editor) == null ? void 0 : M.isDestroyed]);
  const L = (T) => {
    e != null && e.disabled || d(T);
  };
  return /* @__PURE__ */ u(
    "div",
    {
      ref: s,
      className: `drag-handle richtext-duration-200 richtext-ease-in-out [transition-property:top,_left] ${e == null ? void 0 : e.className}`,
      style: {
        opacity: e != null && e.disabled ? 0 : 1
      },
      children: /* @__PURE__ */ P("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5 richtext-duration-200 richtext-ease-in-out [transition-property:top,_left]", children: [
        /* @__PURE__ */ u(
          Re,
          {
            className: "!richtext-size-7 richtext-cursor-grab",
            disabled: e == null ? void 0 : e.disabled,
            onClick: k,
            size: "icon",
            type: "button",
            variant: "ghost",
            children: /* @__PURE__ */ u(
              ge,
              {
                className: "richtext-text-lg richtext-text-neutral-600 dark:richtext-text-neutral-200",
                name: "Plus"
              }
            )
          }
        ),
        /* @__PURE__ */ P(
          Lx,
          {
            onOpenChange: L,
            open: l,
            children: [
              /* @__PURE__ */ P("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
                /* @__PURE__ */ P(Lf, { children: [
                  /* @__PURE__ */ u(
                    $f,
                    {
                      asChild: !0,
                      disabled: e == null ? void 0 : e.disabled,
                      children: /* @__PURE__ */ u(
                        Re,
                        {
                          className: "richtext-relative richtext-z-[1] !richtext-size-7 richtext-cursor-grab",
                          disabled: e == null ? void 0 : e.disabled,
                          size: "icon",
                          type: "button",
                          variant: "ghost",
                          onMouseUp: (T) => {
                            T.preventDefault(), !(e != null && e.disabled) && d(!0);
                          },
                          children: /* @__PURE__ */ u(
                            ge,
                            {
                              className: "richtext-text-sm richtext-text-neutral-600 dark:richtext-text-neutral-200",
                              name: "Grip"
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ u(es, { children: r("editor.draghandle.tooltip") })
                ] }),
                /* @__PURE__ */ u($x, { className: "richtext-absolute richtext-left-0 richtext-top-0 richtext-z-0 richtext-size-[28px]" })
              ] }),
              /* @__PURE__ */ P(
                Cf,
                {
                  align: "start",
                  className: "richtext-w-48",
                  side: "bottom",
                  sideOffset: 0,
                  children: [
                    /* @__PURE__ */ P(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3 richtext-bg-opacity-10 hover:richtext-bg-red-400 hover:richtext-bg-opacity-20 focus:richtext-bg-red-400 focus:richtext-bg-opacity-30 focus:richtext-text-red-500 dark:hover:richtext-bg-opacity-20 dark:hover:richtext-text-red-500",
                        onClick: E,
                        children: [
                          /* @__PURE__ */ u(ge, { name: "Trash2" }),
                          /* @__PURE__ */ u("span", { children: r("editor.remove") })
                        ]
                      }
                    ),
                    p ? /* @__PURE__ */ P(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: m,
                        children: [
                          /* @__PURE__ */ u(ge, { name: "PaintRoller" }),
                          /* @__PURE__ */ u("span", { children: r("editor.clear.tooltip") })
                        ]
                      }
                    ) : null,
                    /* @__PURE__ */ P(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: y,
                        children: [
                          /* @__PURE__ */ u(ge, { name: "Clipboard" }),
                          /* @__PURE__ */ u("span", { children: r("editor.copyToClipboard") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ P(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: g,
                        children: [
                          /* @__PURE__ */ u(ge, { name: "Copy" }),
                          /* @__PURE__ */ u("span", { children: r("editor.copy") })
                        ]
                      }
                    ),
                    f || h ? /* @__PURE__ */ u(Tf, {}) : null,
                    f ? /* @__PURE__ */ P(pc, { children: [
                      /* @__PURE__ */ P(ba, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ u(ge, { name: "AlignCenter" }),
                        /* @__PURE__ */ u("span", { children: r("editor.textalign.tooltip") })
                      ] }),
                      /* @__PURE__ */ u(hc, { children: /* @__PURE__ */ P(wa, { children: [
                        /* @__PURE__ */ P(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => x("left"),
                            children: [
                              /* @__PURE__ */ u(ge, { name: "AlignLeft" }),
                              /* @__PURE__ */ u("span", { children: r("editor.textalign.left.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ P(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => x("center"),
                            children: [
                              /* @__PURE__ */ u(ge, { name: "AlignCenter" }),
                              /* @__PURE__ */ u("span", { children: r("editor.textalign.center.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ P(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => x("right"),
                            children: [
                              /* @__PURE__ */ u(ge, { name: "AlignRight" }),
                              /* @__PURE__ */ u("span", { children: r("editor.textalign.right.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null,
                    h ? /* @__PURE__ */ P(pc, { children: [
                      /* @__PURE__ */ P(ba, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ u(ge, { name: "IndentIncrease" }),
                        /* @__PURE__ */ u("span", { children: r("editor.indent") })
                      ] }),
                      /* @__PURE__ */ u(hc, { children: /* @__PURE__ */ P(wa, { children: [
                        /* @__PURE__ */ P(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((N = n == null ? void 0 : n.attrs) == null ? void 0 : N.indent) >= la.max,
                            onClick: w,
                            children: [
                              /* @__PURE__ */ u(ge, { name: "IndentIncrease" }),
                              /* @__PURE__ */ u("span", { children: r("editor.indent.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ P(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((_ = n == null ? void 0 : n.attrs) == null ? void 0 : _.indent) <= la.min,
                            onClick: C,
                            children: [
                              /* @__PURE__ */ u(ge, { name: "IndentDecrease" }),
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
const Jv = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function Qv({ item: e, disabled: t, editor: r }) {
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
function Zv(e) {
  const { t, lang: r } = Ce(), n = ({ editor: o }) => {
    const { selection: a } = o.view.state, { $from: s, to: c } = a;
    return s.pos === c ? !1 : a instanceof Gt;
  }, i = Ae(() => e.disabled || !(e != null && e.editor) ? [] : Fv(e.editor, t), [e.disabled, e.editor, r, t]);
  return /* @__PURE__ */ u(
    Rt,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: n,
      tippyOptions: Jv,
      children: i != null && i.length ? /* @__PURE__ */ u("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-gap-[4px] richtext-whitespace-nowrap", children: i == null ? void 0 : i.map((o, a) => (o == null ? void 0 : o.type) === "divider" ? /* @__PURE__ */ u(
        We,
        {
          className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
          orientation: "vertical"
        },
        `bubbleMenu-divider-${a}`
      ) : /* @__PURE__ */ u(
        Qv,
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
function ey(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function ty(e) {
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
function ry() {
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
function ny() {
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
function iy(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function ge(e) {
  const t = tf[e.name];
  return t ? /* @__PURE__ */ u(t, { onClick: e == null ? void 0 : e.onClick, className: `richtext-w-4 richtext-h-4 ${(e == null ? void 0 : e.className) || ""}` }) : null;
}
function oy(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function ay(e) {
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
function sy(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function cy(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function ly(e) {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function uy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u(
    "path",
    {
      fill: "currentColor",
      d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6l1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6l-1.4-1.4z"
    }
  ) });
}
function fy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4" }) });
}
function dy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4" }) });
}
function hy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u("path", { fill: "currentColor", d: "M23.943 19.806a.2.2 0 0 0-.168-.034c-1.26-1.855-2.873-3.61-4.419-5.315l-.252-.284c-.001-.073-.067-.12-.134-.15l-.084-.084c-.05-.1-.169-.167-.286-.1c-.47.234-.907.585-1.327.919c-.554.434-1.109.87-1.63 1.354a5 5 0 0 0-.588.618c-.084.117-.017.217.084.267c-.37.368-.74.736-1.109 1.12a.2.2 0 0 0-.05.134c0 .05.033.1.067.117l.655.502v.016c.924.92 2.554 2.173 4.285 3.527c.251.201.52.402.773.602c.117.134.234.285.335.418c.05.066.169.084.236.033c.033.034.084.067.118.1a.24.24 0 0 0 .1.034a.15.15 0 0 0 .135-.066a.24.24 0 0 0 .033-.1c.017 0 .017.016.034.016a.2.2 0 0 0 .134-.05l3.058-3.327c.12-.116.014-.267 0-.267m-7.628-.134l-1.546-1.17l-.15-.1c-.035-.017-.068-.05-.102-.067l-.117-.1c.66-.66 1.33-1.308 2-1.956c-.488.484-1.463 1.906-1.261 2.373c.002 0 .018.042.067.084zm4.1 3.126l-1.277-.97a27 27 0 0 0-1.58-1.504c.69.518 1.277.97 1.361 1.053c.673.585.638.485 1.093.87l.554.4c-.074.103-.151.148-.151.151m.336.25l-.034-.016a1 1 0 0 0 .152-.117zM.588 3.476c.033.217.084.435.117.636c.201 1.103.403 2.106.772 2.858l.152.568c.05.217.134.485.219.552a67 67 0 0 0 3.578 2.942a.18.18 0 0 0 .219 0s0 .016.016.016a.15.15 0 0 0 .118.05a.2.2 0 0 0 .134-.05c1.798-1.989 3.142-3.627 4.1-4.998c.068-.066.084-.167.084-.25c.067-.067.118-.151.185-.201c.067-.067.067-.184 0-.235l-.017-.016c0-.033-.017-.084-.05-.1c-.42-.401-.722-.685-1.042-.986a94 94 0 0 1-2.352-2.273c-.017-.017-.034-.034-.067-.034c-.336-.117-1.025-.234-1.882-.385c-1.277-.216-3.008-.517-4.57-.986c0 0-.101 0-.118.017l-.05.05C.05.714.022.707 0 .718c.017.1.017.167.05.284c0 .033.068.301.068.334zm7.19 4.78l-.033.034a.036.036 0 0 1 .033-.034M6.553 2.238c.101.1.521.502.622.585c-.437-.2-1.529-.702-2.034-.869c.505.1 1.194.201 1.412.284M.79 1.403c.252.434.454 1.939.655 3.41c-.118-.469-.201-.936-.302-1.372C.992 2.673.84 1.988.638 1.386c.124 0 .152.021.152.017m-.286-.369c0-.016 0-.033-.017-.033c.085 0 .135.017.202.05c0 .006-.145-.017-.185-.017m23.17-.217c.017-.066-.336-.367-.219-.384c.253-.017.253-.401 0-.401c-.335.017-.688.1-1.008.15c-.587.117-1.192.234-1.78.367a80 80 0 0 0-3.949.937c-.403.117-.857.2-1.243.401c-.135.067-.118.2-.05.284c-.034.017-.051.017-.085.034c-.117.017-.218.034-.335.05c-.102.017-.152.1-.135.2c0 .017.017.05.017.067c-.706.936-1.496 1.923-2.353 2.976c-.84.969-1.73 1.989-2.62 3.042c-2.84 3.31-6.05 7.07-9.594 10.38a.16.16 0 0 0 0 .234c.016.016.033.033.05.033c-.05.05-.101.085-.152.134q-.05.05-.05.1a.4.4 0 0 0-.067.084c-.067.067-.067.184.017.234c.067.066.185.066.235-.017c.017-.017.017-.033.033-.033a.265.265 0 0 1 .37 0c.202.217.404.435.588.618l-.42-.35c-.067-.067-.184-.05-.234.016c-.068.066-.051.184.016.234l4.469 3.727c.034.034.067.034.118.034a.15.15 0 0 0 .117-.05l.101-.1c.017.016.05.016.067.016c.05 0 .084-.016.118-.05c6.049-6.05 10.922-10.614 16.5-14.693c.05-.033.067-.1.067-.15c.067 0 .118-.05.15-.117c1.026-3.125 1.228-5.9 1.295-7.27c0-.059.016-.038.016-.068c.017-.033.017-.05.017-.05a.98.98 0 0 0-.067-.619m-10.82 4.915c.268-.301.537-.619.806-.903c-1.73 2.273-4.603 5.767-8.67 9.929c2.773-3.059 5.562-6.218 7.864-9.026M5.14 23.466c-.016-.017-.016-.017 0-.017zm2.504-2.156c.135-.15.27-.284.42-.434c0 0 0 .016.017.016c-.224.198-.433.418-.437.418m.69-.668c.099-.1.14-.173.284-.318c.992-1.02 2.017-2.04 3.059-3.076l.016-.016c.252-.2.555-.418.824-.619a228 228 0 0 0-4.184 4.029M14.852 3.91c-.554.719-1.176 1.671-1.697 2.423c-1.646 2.374-6.94 8.174-7.057 8.274a1190 1190 0 0 1-4.839 4.597l-.1.1c-.085-.1-.085-.25.016-.334C8.652 11.966 13.19 6.133 15.021 3.576c-.05.116-.084.216-.168.334zm2.906 3.427c-.671-.386-.99-.987-.806-1.572l.05-.2a.8.8 0 0 1 .085-.167a1.9 1.9 0 0 1 .756-.703c.016 0 .033 0 .05-.016c-.017-.034-.017-.084-.017-.134c.017-.1.085-.167.202-.167c.202 0 .824.184 1.059.384c.067.05.134.117.202.184c.084.1.218.268.285.401c.034.017.067.184.118.268c.033.134.067.284.05.418c-.017.016 0 .116-.017.116a1.6 1.6 0 0 1-.218.619c-.03.03.006.012-.05.067a1.2 1.2 0 0 1-.32.334a1.49 1.49 0 0 1-1.26.234a2 2 0 0 0-.169-.066m4.37 1.403c0 .017-.017.05 0 .067c-.034 0-.05.017-.085.034a110 110 0 0 0-3.915 3.025c1.11-.986 2.218-1.989 3.378-2.975c.336-.301.571-.686.638-1.12l.168-1.003v-.033c.085-.201.404-.118.353.1c-.004-.001-.173.795-.537 1.905" }) });
}
function py() {
  return /* @__PURE__ */ P("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ u("path", { fill: "currentColor", d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z" }),
    /* @__PURE__ */ u("path", { fill: "currentColor", d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z" })
  ] });
}
function my() {
  return /* @__PURE__ */ P(
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
function gy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ P("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", color: "currentColor", children: [
    /* @__PURE__ */ u("path", { d: "M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.2 4.2 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628c.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252c1.166.406 2.085 1.263 2.52 2.35c.27.676.27 1.523.27 3.216V10" }),
    /* @__PURE__ */ u("path", { d: "M2.75 12c0-1.84 1.506-3.333 3.364-3.333c.672 0 1.464.116 2.117-.057a1.67 1.67 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2m.002 16h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523" })
  ] }) });
}
function vy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 48 48", children: /* @__PURE__ */ P("g", { fill: "none", stroke: "currentColor", strokeWidth: "4", children: [
    /* @__PURE__ */ u("circle", { cx: "10", cy: "24", r: "4" }),
    /* @__PURE__ */ u("circle", { cx: "38", cy: "10", r: "4" }),
    /* @__PURE__ */ u("circle", { cx: "38", cy: "24", r: "4" }),
    /* @__PURE__ */ u("circle", { cx: "38", cy: "38", r: "4" }),
    /* @__PURE__ */ u("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M34 38H22V10h12M14 24h20" })
  ] }) });
}
function yy() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548", color: "currentColor" }) });
}
const tf = {
  Bold: Wh,
  LoaderCircle: Uh,
  Italic: Fh,
  Underline: qh,
  Quote: Hh,
  TextQuote: ty,
  Strikethrough: zh,
  Minus: jh,
  Eraser: Bh,
  PaintRoller: Dh,
  Redo2: _h,
  Undo2: $h,
  AlignCenter: Jh,
  AlignJustify: Yh,
  AlignLeft: Xh,
  AlignRight: Kh,
  ChevronDown: Lh,
  Subscript: Mh,
  Superscript: kh,
  Code: Nh,
  Code2: Ph,
  Type: Oh,
  IndentIncrease: Ih,
  IndentDecrease: Rh,
  List: Eh,
  ListOrdered: Th,
  ListTodo: Ch,
  Link: Ah,
  ImageUp: Sh,
  Maximize: wh,
  Minimize: bh,
  Table: xh,
  Sparkles: yh,
  Pencil: vh,
  Unlink: gh,
  BetweenHorizonalEnd: mh,
  BetweenHorizonalStart: ph,
  BetweenVerticalStart: hh,
  BetweenVerticalEnd: dh,
  TableCellsMerge: fh,
  TableCellsSplit: uh,
  Trash2: lh,
  Trash: ch,
  Replace: Ss,
  ChevronsUpDown: sh,
  LineHeight: oy,
  Word: iy,
  Heading1: ah,
  Heading2: oh,
  Heading3: ih,
  Heading4: nh,
  Heading5: rh,
  Heading6: th,
  Columns2: As,
  Columns3: eh,
  Columns4: Zd,
  Plus: lu,
  Grip: Qd,
  Copy: Jd,
  Clipboard: Yd,
  PanelLeft: Xd,
  PanelRight: Kd,
  Columns: As,
  Iframe: Vd,
  MenuDown: ay,
  SizeS: ly,
  SizeM: cy,
  SizeL: sy,
  AspectRatio: ey,
  Emoji: Gd,
  DeleteColumn: ry,
  DeleteRow: ny,
  SearchAndReplace: Ss,
  EmojiIcon: Wd,
  KatexIcon: Ud,
  ExportPdf: py,
  ExportWord: my,
  ColumnAddLeft: fy,
  ColumnAddRight: dy,
  BookMarked: Fd,
  Excalidraw: hy,
  ZoomIn: qd,
  ZoomOut: Hd,
  Settings: zd,
  Eye: jd,
  Attachment: Bd,
  GifIcon: gy,
  ChevronUp: Dd,
  Crop: _d,
  Mermaid: vy,
  Twitter: yy,
  CodeView: uy,
  FlipX: $d,
  FlipY: Ld,
  PencilRuler: Md,
  WrapText: kd,
  Loader: Nd
};
function xy({ fill: e }) {
  return /* @__PURE__ */ u(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 256 256",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ u("g", { id: "icon/填充色", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ P("g", { id: "icon/背景颜色", children: [
        /* @__PURE__ */ u("g", { id: "编组", fill: "currentColor", children: /* @__PURE__ */ P(
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
            fill: e || "none"
          }
        )
      ] }) })
    }
  );
}
function by(e) {
  const [t, r] = Z(e == null ? void 0 : e.defaultColor);
  function n(a) {
    var s;
    (s = e.action) == null || s.call(e, a);
  }
  function i() {
    var a;
    (a = e.action) == null || a.call(e, t);
  }
  const o = oe(
    kn((a) => {
      r(a);
    }, 350),
    []
  );
  return /* @__PURE__ */ P("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ u(
      X,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        action: i,
        tooltipOptions: e == null ? void 0 : e.tooltipOptions,
        shortcutKeys: e == null ? void 0 : e.shortcutKeys,
        children: /* @__PURE__ */ u("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ u(xy, { fill: t }) })
      }
    ),
    /* @__PURE__ */ u(
      P2,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: n,
        highlight: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ u(Re, { variant: "ghost", size: "icon", className: "!richtext-w-3 !richtext-h-[32px]", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ u(ge, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
function wy({ editor: e, disabled: t, actions: r, hiddenActions: n = [] }) {
  var w, C, E, A, k, L, M, N, _, T, S, O, D, H, j, U, ee, re;
  const i = ({ editor: de }) => np(de.view.state, "table"), { t: o } = Ce(), a = (de) => n.includes(de);
  function s() {
    e.chain().focus().addColumnBefore().run();
  }
  function c() {
    e.chain().focus().addColumnAfter().run();
  }
  function l() {
    e.chain().focus().deleteColumn().run();
  }
  function d() {
    e.chain().focus().addRowBefore().run();
  }
  function f() {
    e.chain().focus().addRowAfter().run();
  }
  function h() {
    e.chain().focus().deleteRow().run();
  }
  function p() {
    e.chain().focus().mergeCells().run();
  }
  function m() {
    e == null || e.chain().focus().splitCell().run();
  }
  function y() {
    e.chain().focus().deleteTable().run();
  }
  function g(de) {
    e.chain().focus().setTableCellBackground(de).run();
  }
  return /* @__PURE__ */ u(
    Rt,
    {
      editor: e,
      pluginKey: "table",
      shouldShow: i,
      updateDelay: 0,
      tippyOptions: {
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        maxWidth: "auto",
        getReferenceClientRect: () => {
          var $;
          const {
            view: de,
            state: {
              selection: { from: pe }
            }
          } = e, we = de.domAtPos(pe).node;
          if (!we)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const Be = ($ = we == null ? void 0 : we.closest) == null ? void 0 : $.call(we, ".tableWrapper");
          return Be ? Be.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [xp],
        sticky: "popper"
      },
      children: t ? /* @__PURE__ */ u(be, {}) : /* @__PURE__ */ P("div", { className: "richtext-flex richtext-size-full richtext-min-w-32 richtext-flex-row richtext-items-center richtext-gap-0.5 richtext-rounded-lg !richtext-border richtext-border-border richtext-bg-background richtext-p-2 richtext-leading-none richtext-shadow-sm", children: [
        !a("addColumnBefore") && /* @__PURE__ */ u(
          X,
          {
            action: s,
            disabled: !((C = (w = e == null ? void 0 : e.can()) == null ? void 0 : w.addColumnBefore) != null && C.call(w)),
            icon: "BetweenHorizonalEnd",
            tooltip: o("editor.table.menu.insertColumnBefore"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        !a("addColumnAfter") && /* @__PURE__ */ u(
          X,
          {
            action: c,
            disabled: !((A = (E = e == null ? void 0 : e.can()) == null ? void 0 : E.addColumnAfter) != null && A.call(E)),
            icon: "BetweenHorizonalStart",
            tooltip: o("editor.table.menu.insertColumnAfter"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        !a("deleteColumn") && /* @__PURE__ */ u(
          X,
          {
            action: l,
            disabled: !((L = e == null ? void 0 : (k = e.can()).deleteColumn) != null && L.call(k)),
            icon: "DeleteColumn",
            tooltip: o("editor.table.menu.deleteColumn"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        /* @__PURE__ */ u(We, { className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]", orientation: "vertical" }),
        !a("addRowAbove") && /* @__PURE__ */ u(
          X,
          {
            action: d,
            disabled: !((N = e == null ? void 0 : (M = e.can()).addRowBefore) != null && N.call(M)),
            icon: "BetweenVerticalEnd",
            tooltip: o("editor.table.menu.insertRowAbove"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        !a("addRowBelow") && /* @__PURE__ */ u(
          X,
          {
            action: f,
            disabled: !((T = (_ = e == null ? void 0 : e.can()) == null ? void 0 : _.addRowAfter) != null && T.call(_)),
            icon: "BetweenVerticalStart",
            tooltip: o("editor.table.menu.insertRowBelow"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        !a("deleteRow") && /* @__PURE__ */ u(
          X,
          {
            action: h,
            disabled: !((O = (S = e == null ? void 0 : e.can()) == null ? void 0 : S.deleteRow) != null && O.call(S)),
            icon: "DeleteRow",
            tooltip: o("editor.table.menu.deleteRow"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        /* @__PURE__ */ u(We, { className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]", orientation: "vertical" }),
        !a("mergeCells") && /* @__PURE__ */ u(
          X,
          {
            action: p,
            disabled: !((H = (D = e == null ? void 0 : e.can()) == null ? void 0 : D.mergeCells) != null && H.call(D)),
            icon: "TableCellsMerge",
            tooltip: o("editor.table.menu.mergeCells"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        !a("splitCells") && /* @__PURE__ */ u(
          X,
          {
            action: m,
            disabled: !((U = (j = e == null ? void 0 : e.can()) == null ? void 0 : j.splitCell) != null && U.call(j)),
            icon: "TableCellsSplit",
            tooltip: o("editor.table.menu.splitCells"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        /* @__PURE__ */ u(We, { className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]", orientation: "vertical" }),
        !a("setCellBackground") && /* @__PURE__ */ u(
          by,
          {
            action: g,
            editor: e,
            tooltip: o("editor.table.menu.setCellsBgColor"),
            tooltipOptions: { sideOffset: 15 }
          }
        ),
        !a("deleteTable") && /* @__PURE__ */ u(
          X,
          {
            action: y,
            disabled: !((re = (ee = e == null ? void 0 : e.can()) == null ? void 0 : ee.deleteTable) != null && re.call(ee)),
            icon: "Trash2",
            tooltip: o("editor.table.menu.deleteTable"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        r && r.map((de, pe) => /* @__PURE__ */ u(
          X,
          {
            ...de
          },
          pe
        ))
      ] })
    }
  );
}
const Sy = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Ay = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Ut = (e, t) => {
  for (const r in t)
    e[r] = t[r];
  return e;
}, fa = "numeric", da = "ascii", ha = "alpha", sr = "asciinumeric", or = "alphanumeric", pa = "domain", rf = "emoji", Cy = "scheme", Ty = "slashscheme", ii = "whitespace";
function Ey(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Tt(e, t, r) {
  t[fa] && (t[sr] = !0, t[or] = !0), t[da] && (t[sr] = !0, t[ha] = !0), t[sr] && (t[or] = !0), t[ha] && (t[or] = !0), t[or] && (t[pa] = !0), t[rf] && (t[pa] = !0);
  for (const n in t) {
    const i = Ey(n, r);
    i.indexOf(e) < 0 && i.push(e);
  }
}
function Ry(e, t) {
  const r = {};
  for (const n in t)
    t[n].indexOf(e) >= 0 && (r[n] = !0);
  return r;
}
function Oe(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
Oe.groups = {};
Oe.prototype = {
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
    n = n || Oe.groups;
    let i;
    return t && t.j ? i = t : (i = new Oe(t), r && n && Tt(t, r, n)), this.jr.push([e, i]), i;
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
    n = n || Oe.groups;
    const i = this;
    if (t && t.j)
      return i.j[e] = t, t;
    const o = t;
    let a, s = i.go(e);
    if (s ? (a = new Oe(), Ut(a.j, s.j), a.jr.push.apply(a.jr, s.jr), a.jd = s.jd, a.t = s.t) : a = new Oe(), o) {
      if (n)
        if (a.t && typeof a.t == "string") {
          const c = Ut(Ry(a.t, n), r);
          Tt(o, c, n);
        } else r && Tt(o, r, n);
      a.t = o;
    }
    return i.j[e] = a, a;
  }
};
const K = (e, t, r, n, i) => e.ta(t, r, n, i), he = (e, t, r, n, i) => e.tr(t, r, n, i), nc = (e, t, r, n, i) => e.ts(t, r, n, i), I = (e, t, r, n, i) => e.tt(t, r, n, i), nt = "WORD", ma = "UWORD", nf = "ASCIINUMERICAL", of = "ALPHANUMERICAL", xr = "LOCALHOST", ga = "TLD", va = "UTLD", Hr = "SCHEME", jt = "SLASH_SCHEME", ja = "NUM", ya = "WS", za = "NL", cr = "OPENBRACE", lr = "CLOSEBRACE", Jr = "OPENBRACKET", Qr = "CLOSEBRACKET", Zr = "OPENPAREN", en = "CLOSEPAREN", tn = "OPENANGLEBRACKET", rn = "CLOSEANGLEBRACKET", nn = "FULLWIDTHLEFTPAREN", on = "FULLWIDTHRIGHTPAREN", an = "LEFTCORNERBRACKET", sn = "RIGHTCORNERBRACKET", cn = "LEFTWHITECORNERBRACKET", ln = "RIGHTWHITECORNERBRACKET", un = "FULLWIDTHLESSTHAN", fn = "FULLWIDTHGREATERTHAN", dn = "AMPERSAND", Ha = "APOSTROPHE", hn = "ASTERISK", xt = "AT", pn = "BACKSLASH", mn = "BACKTICK", gn = "CARET", bt = "COLON", qa = "COMMA", vn = "DOLLAR", qe = "DOT", yn = "EQUALS", Fa = "EXCLAMATION", Le = "HYPHEN", ur = "PERCENT", xn = "PIPE", bn = "PLUS", wn = "POUND", fr = "QUERY", Ua = "QUOTE", af = "FULLWIDTHMIDDLEDOT", Wa = "SEMI", Fe = "SLASH", dr = "TILDE", Sn = "UNDERSCORE", sf = "EMOJI", An = "SYM";
var cf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: nt,
  UWORD: ma,
  ASCIINUMERICAL: nf,
  ALPHANUMERICAL: of,
  LOCALHOST: xr,
  TLD: ga,
  UTLD: va,
  SCHEME: Hr,
  SLASH_SCHEME: jt,
  NUM: ja,
  WS: ya,
  NL: za,
  OPENBRACE: cr,
  CLOSEBRACE: lr,
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
  APOSTROPHE: Ha,
  ASTERISK: hn,
  AT: xt,
  BACKSLASH: pn,
  BACKTICK: mn,
  CARET: gn,
  COLON: bt,
  COMMA: qa,
  DOLLAR: vn,
  DOT: qe,
  EQUALS: yn,
  EXCLAMATION: Fa,
  HYPHEN: Le,
  PERCENT: ur,
  PIPE: xn,
  PLUS: bn,
  POUND: wn,
  QUERY: fr,
  QUOTE: Ua,
  FULLWIDTHMIDDLEDOT: af,
  SEMI: Wa,
  SLASH: Fe,
  TILDE: dr,
  UNDERSCORE: Sn,
  EMOJI: sf,
  SYM: An
});
const tt = /[a-z]/, rr = new RegExp("\\p{L}", "u"), oi = new RegExp("\\p{Emoji}", "u"), rt = /\d/, ai = /\s/, ic = "\r", si = `
`, Iy = "️", Oy = "‍", ci = "￼";
let Mr = null, Lr = null;
function Py(e = []) {
  const t = {};
  Oe.groups = t;
  const r = new Oe();
  Mr == null && (Mr = oc(Sy)), Lr == null && (Lr = oc(Ay)), I(r, "'", Ha), I(r, "{", cr), I(r, "}", lr), I(r, "[", Jr), I(r, "]", Qr), I(r, "(", Zr), I(r, ")", en), I(r, "<", tn), I(r, ">", rn), I(r, "（", nn), I(r, "）", on), I(r, "「", an), I(r, "」", sn), I(r, "『", cn), I(r, "』", ln), I(r, "＜", un), I(r, "＞", fn), I(r, "&", dn), I(r, "*", hn), I(r, "@", xt), I(r, "`", mn), I(r, "^", gn), I(r, ":", bt), I(r, ",", qa), I(r, "$", vn), I(r, ".", qe), I(r, "=", yn), I(r, "!", Fa), I(r, "-", Le), I(r, "%", ur), I(r, "|", xn), I(r, "+", bn), I(r, "#", wn), I(r, "?", fr), I(r, '"', Ua), I(r, "/", Fe), I(r, ";", Wa), I(r, "~", dr), I(r, "_", Sn), I(r, "\\", pn), I(r, "・", af);
  const n = he(r, rt, ja, {
    [fa]: !0
  });
  he(n, rt, n);
  const i = he(n, tt, nf, {
    [sr]: !0
  }), o = he(n, rr, of, {
    [or]: !0
  }), a = he(r, tt, nt, {
    [da]: !0
  });
  he(a, rt, i), he(a, tt, a), he(i, rt, i), he(i, tt, i);
  const s = he(r, rr, ma, {
    [ha]: !0
  });
  he(s, tt), he(s, rt, o), he(s, rr, s), he(o, rt, o), he(o, tt), he(o, rr, o);
  const c = I(r, si, za, {
    [ii]: !0
  }), l = I(r, ic, ya, {
    [ii]: !0
  }), d = he(r, ai, ya, {
    [ii]: !0
  });
  I(r, ci, d), I(l, si, c), I(l, ci, d), he(l, ai, d), I(d, ic), I(d, si), he(d, ai, d), I(d, ci, d);
  const f = he(r, oi, sf, {
    [rf]: !0
  });
  I(f, "#"), he(f, oi, f), I(f, Iy, f);
  const h = I(f, Oy);
  I(h, "#"), he(h, oi, f);
  const p = [[tt, a], [rt, i]], m = [[tt, null], [rr, s], [rt, o]];
  for (let y = 0; y < Mr.length; y++)
    vt(r, Mr[y], ga, nt, p);
  for (let y = 0; y < Lr.length; y++)
    vt(r, Lr[y], va, ma, m);
  Tt(ga, {
    tld: !0,
    ascii: !0
  }, t), Tt(va, {
    utld: !0,
    alpha: !0
  }, t), vt(r, "file", Hr, nt, p), vt(r, "mailto", Hr, nt, p), vt(r, "http", jt, nt, p), vt(r, "https", jt, nt, p), vt(r, "ftp", jt, nt, p), vt(r, "ftps", jt, nt, p), Tt(Hr, {
    scheme: !0,
    ascii: !0
  }, t), Tt(jt, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((y, g) => y[0] > g[0] ? 1 : -1);
  for (let y = 0; y < e.length; y++) {
    const g = e[y][0], w = e[y][1] ? {
      [Cy]: !0
    } : {
      [Ty]: !0
    };
    g.indexOf("-") >= 0 ? w[pa] = !0 : tt.test(g) ? rt.test(g) ? w[sr] = !0 : w[da] = !0 : w[fa] = !0, nc(r, g, g, w);
  }
  return nc(r, "localhost", xr, {
    ascii: !0
  }), r.jd = new Oe(An), {
    start: r,
    tokens: Ut({
      groups: t
    }, cf)
  };
}
function lf(e, t) {
  const r = Ny(t.replace(/[A-Z]/g, (s) => s.toLowerCase())), n = r.length, i = [];
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
function Ny(e) {
  const t = [], r = e.length;
  let n = 0;
  for (; n < r; ) {
    let i = e.charCodeAt(n), o, a = i < 55296 || i > 56319 || n + 1 === r || (o = e.charCodeAt(n + 1)) < 56320 || o > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(a), n += a.length;
  }
  return t;
}
function vt(e, t, r, n, i) {
  let o;
  const a = t.length;
  for (let s = 0; s < a - 1; s++) {
    const c = t[s];
    e.j[c] ? o = e.j[c] : (o = new Oe(n), o.jr = i.slice(), e.j[c] = o), e = o;
  }
  return o = new Oe(r), o.jr = i.slice(), e.j[t[a - 1]] = o, o;
}
function oc(e) {
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
const br = {
  defaultProtocol: "http",
  events: null,
  format: ac,
  formatHref: ac,
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
function Ga(e, t = null) {
  let r = Ut({}, br);
  e && (r = Ut(r, e instanceof Ga ? e.o : e));
  const n = r.ignoreTags, i = [];
  for (let o = 0; o < n.length; o++)
    i.push(n[o].toUpperCase());
  this.o = r, t && (this.defaultRender = t), this.ignoreTags = i;
}
Ga.prototype = {
  o: br,
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
    return i && (typeof i == "object" ? (i = r.t in i ? i[r.t] : br[e], typeof i == "function" && n && (i = i(t, r))) : typeof i == "function" && n && (i = i(t, r.t, r)), i);
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
function ac(e) {
  return e;
}
function uf(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
uf.prototype = {
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
  toObject(e = br.defaultProtocol) {
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
    return a.href = n, s && (a.class = s), c && (a.target = c), l && (a.rel = l), d && Ut(a, d), {
      tagName: i,
      attributes: a,
      content: o,
      eventListeners: f
    };
  }
};
function Mn(e, t) {
  class r extends uf {
    constructor(i, o) {
      super(i, o), this.t = e;
    }
  }
  for (const n in t)
    r.prototype[n] = t[n];
  return r.t = e, r;
}
const sc = Mn("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), cc = Mn("text"), ky = Mn("nl"), $r = Mn("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(e = br.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== xr && e[1].t === bt;
  }
}), Me = (e) => new Oe(e);
function My({
  groups: e
}) {
  const t = e.domain.concat([dn, hn, xt, pn, mn, gn, vn, yn, Le, ja, ur, xn, bn, wn, Fe, An, dr, Sn]), r = [bt, qa, qe, Fa, ur, fr, Ua, Wa, tn, rn, cr, lr, Qr, Jr, Zr, en, nn, on, an, sn, cn, ln, un, fn], n = [dn, Ha, hn, pn, mn, gn, vn, yn, Le, cr, lr, ur, xn, bn, wn, fr, Fe, An, dr, Sn], i = Me(), o = I(i, dr);
  K(o, n, o), K(o, e.domain, o);
  const a = Me(), s = Me(), c = Me();
  K(i, e.domain, a), K(i, e.scheme, s), K(i, e.slashscheme, c), K(a, n, o), K(a, e.domain, a);
  const l = I(a, xt);
  I(o, xt, l), I(s, xt, l), I(c, xt, l);
  const d = I(o, qe);
  K(d, n, o), K(d, e.domain, o);
  const f = Me();
  K(l, e.domain, f), K(f, e.domain, f);
  const h = I(f, qe);
  K(h, e.domain, f);
  const p = Me(sc);
  K(h, e.tld, p), K(h, e.utld, p), I(l, xr, p);
  const m = I(f, Le);
  I(m, Le, m), K(m, e.domain, f), K(p, e.domain, f), I(p, qe, h), I(p, Le, m);
  const y = I(p, bt);
  K(y, e.numeric, sc);
  const g = I(a, Le), x = I(a, qe);
  I(g, Le, g), K(g, e.domain, a), K(x, n, o), K(x, e.domain, a);
  const w = Me($r);
  K(x, e.tld, w), K(x, e.utld, w), K(w, e.domain, a), K(w, n, o), I(w, qe, x), I(w, Le, g), I(w, xt, l);
  const C = I(w, bt), E = Me($r);
  K(C, e.numeric, E);
  const A = Me($r), k = Me();
  K(A, t, A), K(A, r, k), K(k, t, A), K(k, r, k), I(w, Fe, A), I(E, Fe, A);
  const L = I(s, bt), M = I(c, bt), N = I(M, Fe), _ = I(N, Fe);
  K(s, e.domain, a), I(s, qe, x), I(s, Le, g), K(c, e.domain, a), I(c, qe, x), I(c, Le, g), K(L, e.domain, A), I(L, Fe, A), I(L, fr, A), K(_, e.domain, A), K(_, t, A), I(_, Fe, A);
  const T = [
    [cr, lr],
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
  for (let S = 0; S < T.length; S++) {
    const [O, D] = T[S], H = I(A, O);
    I(k, O, H), I(H, D, A);
    const j = Me($r);
    K(H, t, j);
    const U = Me();
    K(H, r), K(j, t, j), K(j, r, U), K(U, t, j), K(U, r, U), I(j, D, A), I(U, D, A);
  }
  return I(i, xr, w), I(i, za, ky), {
    start: i,
    tokens: cf
  };
}
function Ly(e, t, r) {
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
      a.length > 0 && (o.push(li(cc, t, a)), a = []), i -= h, d -= h;
      const p = f.t, m = r.slice(i - d, i);
      o.push(li(p, t, m));
    }
  }
  return a.length > 0 && o.push(li(cc, t, a)), o;
}
function li(e, t, r) {
  const n = r[0].s, i = r[r.length - 1].e, o = t.slice(n, i);
  return new e(o, r);
}
const $y = typeof console < "u" && console && console.warn || (() => {
}), _y = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ue = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Dy() {
  return Oe.groups = {}, ue.scanner = null, ue.parser = null, ue.tokenQueue = [], ue.pluginQueue = [], ue.customSchemes = [], ue.initialized = !1, ue;
}
function lc(e, t = !1) {
  if (ue.initialized && $y(`linkifyjs: already initialized - will not register custom scheme "${e}" ${_y}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ue.customSchemes.push([e, t]);
}
function By() {
  ue.scanner = Py(ue.customSchemes);
  for (let e = 0; e < ue.tokenQueue.length; e++)
    ue.tokenQueue[e][1]({
      scanner: ue.scanner
    });
  ue.parser = My(ue.scanner.tokens);
  for (let e = 0; e < ue.pluginQueue.length; e++)
    ue.pluginQueue[e][1]({
      scanner: ue.scanner,
      parser: ue.parser
    });
  return ue.initialized = !0, ue;
}
function Va(e) {
  return ue.initialized || By(), Ly(ue.parser.start, e, lf(ue.scanner.start, e));
}
Va.scan = lf;
function ff(e, t = null, r = null) {
  if (t && typeof t == "object") {
    if (r)
      throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
    r = t, t = null;
  }
  const n = new Ga(r), i = Va(e), o = [];
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    s.isLink && (!t || s.t === t) && n.check(s) && o.push(s.toFormattedObject(n));
  }
  return o;
}
const Ka = "[\0-   ᠎ -\u2029 　]", jy = new RegExp(Ka), zy = new RegExp(`${Ka}$`), Hy = new RegExp(Ka, "g");
function qy(e) {
  return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function Fy(e) {
  return new Ot({
    key: new It("autolink"),
    appendTransaction: (t, r, n) => {
      const i = t.some((l) => l.docChanged) && !r.doc.eq(n.doc), o = t.some((l) => l.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: a } = n, s = ap(r.doc, [...t]);
      if (sp(s).forEach(({ newRange: l }) => {
        const d = cp(n.doc, l, (p) => p.isTextblock);
        let f, h;
        if (d.length > 1)
          f = d[0], h = n.doc.textBetween(f.pos, f.pos + f.node.nodeSize, void 0, " ");
        else if (d.length) {
          const p = n.doc.textBetween(l.from, l.to, " ", " ");
          if (!zy.test(p))
            return;
          f = d[0], h = n.doc.textBetween(f.pos, l.to, void 0, " ");
        }
        if (f && h) {
          const p = h.split(jy).filter(Boolean);
          if (p.length <= 0)
            return !1;
          const m = p[p.length - 1], y = f.pos + h.lastIndexOf(m);
          if (!m)
            return !1;
          const g = Va(m).map((x) => x.toObject(e.defaultProtocol));
          if (!qy(g))
            return !1;
          g.filter((x) => x.isLink).map((x) => ({
            ...x,
            from: y + x.start + 1,
            to: y + x.end + 1
          })).filter((x) => n.schema.marks.code ? !n.doc.rangeHasMark(x.from, x.to, n.schema.marks.code) : !0).filter((x) => e.validate(x.value)).filter((x) => e.shouldAutoLink(x.value)).forEach((x) => {
            lp(x.from, x.to, n.doc).some((w) => w.mark.type === e.type) || a.addMark(x.from, x.to, e.type.create({
              href: x.href
            }));
          });
        }
      }), !!a.steps.length)
        return a;
    }
  });
}
function Uy(e) {
  return new Ot({
    key: new It("handleClickLink"),
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
        const c = up(t.state, e.type.name), l = n.target, d = (i = l == null ? void 0 : l.href) !== null && i !== void 0 ? i : c.href, f = (o = l == null ? void 0 : l.target) !== null && o !== void 0 ? o : c.target;
        return l && d ? (window.open(d, f), !0) : !1;
      }
    }
  });
}
function Wy(e) {
  return new Ot({
    key: new It("handlePasteLink"),
    props: {
      handlePaste: (t, r, n) => {
        const { state: i } = t, { selection: o } = i, { empty: a } = o;
        if (a)
          return !1;
        let s = "";
        n.content.forEach((l) => {
          s += l.textContent;
        });
        const c = ff(s, { defaultProtocol: e.defaultProtocol }).find((l) => l.isLink && l.value === s);
        return !s || !c ? !1 : e.editor.commands.setMark(e.type, {
          href: c.href
        });
      }
    }
  });
}
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
  }), !e || e.replace(Hy, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${r.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const Gy = ip.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
      if (typeof e == "string") {
        lc(e);
        return;
      }
      lc(e.scheme, e.optionalSlashes);
    });
  },
  onDestroy() {
    Dy();
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
    }) ? ["a", at(this.options.HTMLAttributes, e), 0] : [
      "a",
      at(this.options.HTMLAttributes, { ...e, href: "" }),
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
      op({
        find: (e) => {
          const t = [];
          if (e) {
            const { protocols: r, defaultProtocol: n } = this.options, i = ff(e).filter((o) => o.isLink && this.options.isAllowedUri(o.value, {
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
    return this.options.autolink && e.push(Fy({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (n) => this.options.isAllowedUri(n, {
        defaultValidate: (i) => !!Ct(i, t),
        protocols: t,
        defaultProtocol: r
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && e.push(Uy({
      type: this.type
    })), this.options.linkOnPaste && e.push(Wy({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), e;
  }
});
function Vy(e) {
  const [t, r] = Z(!1);
  function n(i, o, a) {
    e.action && (e.action({ link: i, text: o, openInNewTab: a }), r(!1));
  }
  return /* @__PURE__ */ P(Ar, { modal: !0, open: t, onOpenChange: r, children: [
    /* @__PURE__ */ u(Cr, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ u(
      X,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        tooltipOptions: e == null ? void 0 : e.tooltipOptions,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ u(ge, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ u(Kt, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ u(df, { editor: e.editor, onSetLink: n, open: t, target: e.target }) })
  ] });
}
const Ky = /* @__PURE__ */ Gy.extend({
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
      at(this.options.HTMLAttributes, e, {
        class: "link"
      }),
      0
    ];
  },
  addOptions() {
    var r, n;
    const e = ((r = this.parent) == null ? void 0 : r.call(this)) || {}, t = (n = e.HTMLAttributes) == null ? void 0 : n.target;
    return {
      ...e,
      openOnClick: !0,
      button: ({ editor: i, t: o }) => ({
        component: Vy,
        componentProps: {
          editor: i,
          action: (a) => {
            const { link: s, text: c, openInNewTab: l } = a;
            if (!s) {
              i.chain().extendMarkRange("link").unsetLink().run();
              return;
            }
            i.isActive("link") && i.chain().extendMarkRange("link").run();
            const { from: d } = i.state.selection, f = c.length;
            i.chain().insertContent({
              type: "text",
              text: c,
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: s.match(/^https?:\/\//i) ? s : `http://${s}`,
                    target: t ?? (l ? "_blank" : "")
                  }
                }
              ]
            }).setLink({ href: s }).setTextSelection({ from: d, to: d + f }).focus().run();
          },
          id: "linkk",
          isActive: () => i.isActive("link") || !1,
          disabled: !i.can().setLink({ href: "" }),
          icon: "Link",
          tooltip: o("editor.link.tooltip"),
          target: t
        }
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      new Ot({
        props: {
          handleClick: (e, t) => {
            const { schema: r, doc: n, tr: i } = e.state, o = fp(n.resolve(t), r.marks.link);
            if (!o)
              return !1;
            let a = null;
            if (n.nodesBetween(o.from, o.to, (d) => (a = d.marks.find((f) => f.type === r.marks.link), !a)), this.options.openOnClick && (a != null && a.attrs.href) && t !== o.to)
              return window.open(a.attrs.href, a.attrs.target || "_self"), !0;
            const s = n.resolve(o.from), c = n.resolve(o.to), l = i.setSelection(
              new Gt(s, c)
            );
            e.dispatch(l);
          }
        }
      })
    ];
  }
});
function df(e) {
  const { t } = Ce(), [r, n] = Z({
    text: "",
    link: ""
  }), [i, o] = Z(!1), a = Ge(null), s = Ge(null);
  ve(() => {
    const l = () => {
      var w, C, E, A;
      const { from: d, to: f, empty: h } = e.editor.state.selection, p = (w = e.editor.extensionManager.extensions.find(
        (k) => k.name === Ky.name
      )) == null ? void 0 : w.options;
      let m = "", y = "", g = (C = p == null ? void 0 : p.HTMLAttributes) == null ? void 0 : C.target;
      const x = e.editor.state.doc.nodeAt(d);
      if (x) {
        const k = x.marks.find((L) => L.type.name === "link");
        k ? (y = k.attrs.href || "", g = k.attrs.target, h ? m = x.text || "" : m = e.editor.state.doc.textBetween(d, f, " ")) : m = e.editor.state.doc.textBetween(d, f, " ");
      }
      x || (m = e.editor.state.doc.textBetween(d, f, " ")), n({ link: y, text: m }), o(e.target ? e.target === "_blank" : g === "_blank"), e.open && (m === "" ? (E = a.current) == null || E.focus() : (A = s.current) == null || A.focus());
    };
    return l(), e.editor.on("selectionUpdate", l), () => {
      e.editor.off("selectionUpdate", l);
    };
  }, [e.editor, e.open]);
  function c(l) {
    l.preventDefault(), l.stopPropagation(), e == null || e.onSetLink(r.link, r.text, i), n({ text: "", link: "" });
  }
  return /* @__PURE__ */ u("div", { className: "border-neutral-200 richtext-rounded-lg !richtext-border richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ P("div", { className: "richtext-flex richtext-flex-col richtext-gap-2", children: [
    /* @__PURE__ */ u(ot, { className: "mb-[6px]", children: t("editor.link.dialog.text") }),
    /* @__PURE__ */ u("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ u(
      $e,
      {
        ref: a,
        className: "richtext-w-80",
        onChange: (l) => n({ ...r, text: l.target.value }),
        placeholder: "Text",
        required: !0,
        type: "text",
        value: r.text
      }
    ) }) }),
    /* @__PURE__ */ u(ot, { className: "mb-[6px]", children: t("editor.link.dialog.link") }),
    /* @__PURE__ */ u("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ P("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: [
      /* @__PURE__ */ u(
        $e,
        {
          ref: s,
          className: "richtext-pl-10",
          onChange: (l) => n({ ...r, link: l.target.value }),
          required: !0,
          type: "url",
          value: r.link
        }
      ),
      /* @__PURE__ */ u("span", { className: "richtext-absolute richtext-inset-y-0 richtext-start-0 richtext-flex richtext-items-center richtext-justify-center richtext-px-2", children: /* @__PURE__ */ u(
        ge,
        {
          className: "richtext-size-5 richtext-text-muted-foreground",
          name: "Link"
        }
      ) })
    ] }) }),
    !e.target && /* @__PURE__ */ P("div", { className: "richtext-flex richtext-items-center richtext-space-x-2", children: [
      /* @__PURE__ */ u(ot, { children: t("editor.link.dialog.openInNewTab") }),
      /* @__PURE__ */ u(
        Ef,
        {
          checked: i,
          onCheckedChange: (l) => {
            o(l);
          }
        }
      )
    ] }),
    /* @__PURE__ */ u(
      Re,
      {
        className: "richtext-mt-2 richtext-self-end",
        onClick: c,
        type: "button",
        children: t("editor.link.dialog.button.apply")
      }
    )
  ] }) });
}
function Xy(e) {
  const { t } = Ce();
  return /* @__PURE__ */ P("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
    /* @__PURE__ */ u(
      "a",
      {
        href: e == null ? void 0 : e.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "richtext-text-sm richtext-underline richtext-break-all",
        children: ev(e == null ? void 0 : e.link, {
          length: 50,
          omission: "…"
        })
      }
    ),
    (e == null ? void 0 : e.link) && /* @__PURE__ */ u(We, { orientation: "vertical", className: "!richtext-h-4" }),
    /* @__PURE__ */ P("div", { className: "richtext-flex richtext-flex-nowrap", children: [
      /* @__PURE__ */ u(
        X,
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
        X,
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
function Yy({ editor: e, disabled: t }) {
  const [r, n] = Z(!1), i = Ae(() => {
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
      children: t ? /* @__PURE__ */ u(be, {}) : /* @__PURE__ */ u(be, { children: r ? /* @__PURE__ */ u(df, { onSetLink: a, editor: e }) : /* @__PURE__ */ u(
        Xy,
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
const Jy = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, hf = Rn.create({
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
    return ["img", at(this.options.HTMLAttributes, e)];
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
      pu({
        find: Jy,
        type: this.type,
        getAttributes: (e) => {
          const [, , t, r, n] = e;
          return { src: r, alt: t, title: n };
        }
      })
    ];
  }
}), Xa = _e.Root, Ya = _e.Trigger, Qy = _e.Portal, pf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  _e.Overlay,
  {
    ref: r,
    className: Q(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 richtext- data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      e
    ),
    ...t
  }
));
pf.displayName = _e.Overlay.displayName;
const Ln = ne.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ P(Qy, { children: [
  /* @__PURE__ */ u(pf, {}),
  /* @__PURE__ */ P(
    _e.Content,
    {
      ref: n,
      className: Q(
        "richtext-dialog-content richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ P(_e.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ u(uu, { className: "richtext-h-4 richtext-w-4" }),
          /* @__PURE__ */ u("span", { className: "richtext-sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ln.displayName = _e.Content.displayName;
function mf({
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
mf.displayName = "DialogHeader";
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
const $n = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  _e.Title,
  {
    ref: r,
    className: Q(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight",
      e
    ),
    ...t
  }
));
$n.displayName = _e.Title.displayName;
const Zy = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  _e.Description,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-text-muted-foreground", e),
    ...t
  }
));
Zy.displayName = _e.Description.displayName;
const uc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, fc = Ta, _n = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return fc(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: o } = t, a = Object.keys(i).map((l) => {
    const d = r == null ? void 0 : r[l], f = o == null ? void 0 : o[l];
    if (d === null) return null;
    const h = uc(d) || uc(f);
    return i[l][h];
  }), s = r && Object.entries(r).reduce((l, d) => {
    let [f, h] = d;
    return h === void 0 || (l[f] = h), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, d) => {
    let { class: f, className: h, ...p } = d;
    return Object.entries(p).every((m) => {
      let [y, g] = m;
      return Array.isArray(g) ? g.includes({
        ...o,
        ...s
      }[y]) : {
        ...o,
        ...s
      }[y] === g;
    }) ? [
      ...l,
      f,
      h
    ] : l;
  }, []);
  return fc(e, a, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, ex = _n(
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
), Re = ne.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...i }, o) => /* @__PURE__ */ u(
    n ? au : "button",
    {
      className: Q(ex({ variant: t, size: r, className: e })),
      ref: o,
      ...i
    }
  )
);
Re.displayName = "Button";
function fw(e) {
  return e.replace(/^.*\/|\..+$/g, "");
}
function dw(e) {
  return e.split(".").pop();
}
function hw(e) {
  return e < 1024 ? `${e} Byte` : e < 1024 * 1024 ? `${(e / 1024).toFixed(2)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function pw(e) {
  return e ? e === "application/pdf" ? "pdf" : e.startsWith("application/") && [".document", "word"].some((t) => e.includes(t)) ? "word" : e.startsWith("application/") && ["presentation"].some((t) => e.includes(t)) ? "excel" : e.startsWith("application/") && ["sheet"].some((t) => e.includes(t)) ? "ppt" : e.startsWith("image") ? "image" : e.startsWith("audio") ? "audio" : e.startsWith("video") ? "video" : "file" : "file";
}
function tx(e) {
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
function rx(e, t) {
  const r = e.split(","), n = r[0].match(/:(.*?);/)[1], i = atob(r[r.length - 1]);
  let o = i.length;
  const a = new Uint8Array(o);
  for (; o--; )
    a[o] = i.charCodeAt(o);
  return new File([a], t, { type: n });
}
function nx(e, t) {
  const r = e.type, n = e.name.toLowerCase(), i = n.split(".").pop();
  if (!i) return !1;
  const a = r || {
    heif: "image/heif",
    heic: "image/heic",
    dng: "image/x-adobe-dng",
    cr2: "image/x-canon-cr2",
    nef: "image/x-nikon-nef",
    arw: "image/x-sony-arw",
    raf: "image/x-fuji-raf",
    orf: "image/x-olympus-orf"
  }[i];
  return t.some((s) => {
    if (s.startsWith("."))
      return n.endsWith(s);
    if (s.endsWith("/*")) {
      const c = s.split("/")[0];
      return a == null ? void 0 : a.startsWith(c + "/");
    }
    return a === s;
  });
}
function gf(e, t) {
  const { acceptMimes: r, maxSize: n, t: i, toast: o } = t, a = [];
  return (Array.isArray(e) ? e : Object.values(e)).forEach((c) => {
    if (!nx(c, r)) {
      t.onError ? t.onError({
        type: "type",
        message: i("editor.upload.fileTypeNotSupported", { fileName: c.name }),
        file: c
      }) : o({
        variant: "default",
        title: i("editor.upload.fileTypeNotSupported", { fileName: c.name })
      });
      return;
    }
    if (c.size > n) {
      const l = (n / 1024 / 1024).toFixed(2);
      t.onError ? t.onError({
        type: "size",
        message: i("editor.upload.fileSizeTooBig", { fileName: c.name, size: l }),
        file: c
      }) : o({
        variant: "default",
        title: i("editor.upload.fileSizeTooBig", { fileName: c.name, size: l })
      });
      return;
    }
    a.push(c);
  }), a;
}
function ix({ editor: e, imageInline: t, onClose: r, disabled: n, alt: i }) {
  var _, T;
  const { t: o } = Ce(), { toast: a } = ts(), [s, c] = Z(!1), [l, d] = Z(!1), f = ir.useRef(null), [h, p] = ir.useState(), [m, y] = ir.useState(""), g = Ge(null), [x, w] = Z({
    src: "",
    file: null
  }), C = Ae(() => {
    var S;
    return (S = e.extensionManager.extensions.find(
      (O) => O.name === wr.name
    )) == null ? void 0 : S.options;
  }, [e]);
  function E(S) {
    if (f.current && S.width && S.height) {
      const O = A(f.current, S);
      y(O);
    }
  }
  function A(S, O) {
    const D = document.createElement("canvas"), H = S.naturalWidth / S.width, j = S.naturalHeight / S.height;
    D.width = O.width * H, D.height = O.height * j;
    const U = D.getContext("2d");
    return U && (U.imageSmoothingEnabled = !1, U.drawImage(
      S,
      O.x * H,
      O.y * j,
      O.width * H,
      O.height * j,
      0,
      0,
      O.width * H,
      O.height * j
    )), D.toDataURL("image/png", 1);
  }
  const k = ir.useCallback(async () => {
    var S;
    if (!l) {
      d(!0);
      try {
        const O = rx(m, ((S = x == null ? void 0 : x.file) == null ? void 0 : S.name) || "image.png");
        let D = "";
        C.upload ? D = await C.upload(O) : D = URL.createObjectURL(O), e.chain().focus().setImageInline({ src: D, inline: t, alt: i }).run(), c(!1), w({
          src: "",
          file: null
        }), N(), r();
      } catch (O) {
        console.log("Error cropping image", O);
      } finally {
        d(!1);
      }
    }
  }, [m, e, t, l, r, (_ = x == null ? void 0 : x.file) == null ? void 0 : _.name, C]);
  function L(S) {
    var O;
    S.preventDefault(), (O = g.current) == null || O.click();
  }
  const M = async (S) => {
    var U;
    const O = (U = S == null ? void 0 : S.target) == null ? void 0 : U.files;
    if (!e || e.isDestroyed || O.length === 0) {
      S.target.value = "";
      return;
    }
    const D = gf(O, {
      acceptMimes: C == null ? void 0 : C.acceptMimes,
      maxSize: C == null ? void 0 : C.maxSize,
      t: o,
      toast: a,
      onError: C.onError
    });
    if (D.length <= 0) {
      S.target.value = "";
      return;
    }
    const H = D[0], j = await tx(H);
    c(!0), w({
      src: j.src,
      file: H
    });
  }, N = () => {
    g.current && (g.current.value = "");
  };
  return /* @__PURE__ */ P(be, { children: [
    /* @__PURE__ */ u(
      Re,
      {
        className: "richtext-mt-1 richtext-w-full",
        disabled: n,
        onClick: L,
        size: "sm",
        children: o("editor.image.dialog.tab.uploadCrop")
      }
    ),
    /* @__PURE__ */ P(
      Xa,
      {
        open: s,
        onOpenChange: (S) => {
          c(S), S || (w({ src: "", file: null }), N());
        },
        children: [
          /* @__PURE__ */ u(Ya, {}),
          /* @__PURE__ */ P(Ln, { children: [
            /* @__PURE__ */ u($n, { children: o("editor.image.dialog.tab.uploadCrop") }),
            /* @__PURE__ */ u("div", { children: x.src && /* @__PURE__ */ u(
              vp,
              {
                className: "richtext-w-full",
                crop: h,
                onChange: (S) => p(S),
                onComplete: (S) => E(S),
                children: /* @__PURE__ */ u(
                  "img",
                  {
                    alt: "Crop me",
                    ref: f,
                    src: x.src
                  }
                )
              }
            ) }),
            /* @__PURE__ */ P(Ja, { children: [
              /* @__PURE__ */ P(
                Re,
                {
                  disabled: l,
                  onClick: () => {
                    c(!1), w({
                      src: "",
                      file: null
                    }), N();
                  },
                  children: [
                    o("editor.imageUpload.cancel"),
                    /* @__PURE__ */ u(
                      ge,
                      {
                        className: "richtext-ml-1",
                        name: "Trash2"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ u(
                Re,
                {
                  className: "richtext-w-fit",
                  disabled: l || !h,
                  onClick: k,
                  children: l ? /* @__PURE__ */ P(be, { children: [
                    o("editor.imageUpload.uploading"),
                    /* @__PURE__ */ u(
                      ge,
                      {
                        className: "richtext-ml-1 richtext-animate-spin",
                        name: "Loader"
                      }
                    )
                  ] }) : /* @__PURE__ */ P(be, { children: [
                    o("editor.imageUpload.crop"),
                    /* @__PURE__ */ u(
                      ge,
                      {
                        className: "richtext-ml-1",
                        name: "Crop"
                      }
                    )
                  ] })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u(
      "input",
      {
        accept: ((T = C == null ? void 0 : C.acceptMimes) == null ? void 0 : T.join(",")) || "image/*",
        multiple: !1,
        onChange: M,
        ref: g,
        style: { display: "none" },
        type: "file"
      }
    )
  ] });
}
function Qa(e) {
  function t() {
    const o = Ge(e), a = oe(() => o.current, []), s = Ge(/* @__PURE__ */ new Set()), c = oe((d) => {
      o.current = { ...o.current, ...d }, s.current.forEach((f) => f());
    }, []), l = oe((d) => (s.current.add(d), () => s.current.delete(d)), []);
    return {
      get: a,
      set: c,
      subscribe: l
    };
  }
  const r = gd(null);
  function n({ children: o }) {
    return /* @__PURE__ */ u(r.Provider, { value: t(), children: o });
  }
  function i(o) {
    const a = vd(r);
    if (!a)
      throw new Error("Store not found");
    return [yd(
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
Qa({
  value: !1
});
const { Provider: ox, useStore: vf } = Qa({
  value: !1
}), { Provider: ax, useStore: yf } = Qa({
  value: "light"
});
Id("0");
function xa(e, t) {
  return window.addEventListener(e, t), () => {
    window.removeEventListener(e, t);
  };
}
function Za(e, t) {
  window.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}
const Wt = {
  UPLOAD_IMAGE: (e) => `UPLOAD_IMAGE-${e}`,
  UPLOAD_VIDEO: (e) => `UPLOAD_VIDEO-${e}`,
  EDIT: (e) => `EDIT-${e}`,
  UPDATE_THEME: (e) => `UPDATE_THEME-${e}`,
  SEARCH_REPLCE: "SEARCH_REPLACE"
}, sx = {
  setOpen: (e, t) => {
    Za(Wt.UPLOAD_IMAGE(e), t);
  }
};
function cx(e) {
  var E;
  const { t } = Ce(), { toast: r } = ts(), [n, i] = Z(!1), [o, a] = Z(!1), s = (A) => {
    i(A.detail);
  }, [c, l] = Z(""), [d, f] = Z(""), h = Ge(null), p = ((E = e.editor.extensionManager.extensions.find(
    (A) => A.name === wr.name
  )) == null ? void 0 : E.options.defaultInline) || !1, [m, y] = Z(p), g = Ae(() => {
    var k;
    return (k = e.editor.extensionManager.extensions.find(
      (L) => L.name === wr.name
    )) == null ? void 0 : k.options;
  }, [e.editor]);
  ve(() => {
    const A = xa(Wt.UPLOAD_IMAGE(e.editor.id), s);
    return () => {
      A();
    };
  }, []);
  async function x(A) {
    var M;
    const k = (M = A == null ? void 0 : A.target) == null ? void 0 : M.files;
    if (!e.editor || e.editor.isDestroyed || k.length === 0 || o) {
      A.target.value = "";
      return;
    }
    const L = gf(k, {
      acceptMimes: g == null ? void 0 : g.acceptMimes,
      maxSize: g == null ? void 0 : g.maxSize,
      t,
      toast: r,
      onError: g.onError
    });
    if (L.length <= 0) {
      A.target.value = "";
      return;
    }
    a(!0);
    try {
      if (g != null && g.multiple) {
        const N = L.map(async (T) => {
          let S = "";
          return g.upload ? S = await g.upload(T) : S = URL.createObjectURL(T), S;
        });
        (await Promise.all(N)).forEach((T) => {
          e.editor.chain().focus().setImageInline({ src: T, inline: m, alt: d }).run();
        });
      } else {
        const N = L[0];
        let _ = "";
        g.upload ? _ = await g.upload(N) : _ = URL.createObjectURL(N), e.editor.chain().focus().setImageInline({ src: _, inline: m, alt: d }).run();
      }
      i(!1), f(""), y(p);
    } catch (N) {
      console.error("Error uploading image", N), g.onError ? g.onError({
        type: "upload",
        message: t("editor.upload.error")
      }) : r({
        variant: "destructive",
        title: t("editor.upload.error")
      });
    } finally {
      a(!1), A.target.value = "";
    }
  }
  function w(A) {
    A.preventDefault(), A.stopPropagation(), e.editor.chain().focus().setImageInline({ src: c, inline: m, alt: d }).run(), i(!1), y(p), l(""), f("");
  }
  function C(A) {
    var k;
    A.preventDefault(), (k = h.current) == null || k.click();
  }
  return /* @__PURE__ */ P(
    Xa,
    {
      onOpenChange: i,
      open: n,
      children: [
        /* @__PURE__ */ u(Ya, { asChild: !0, children: /* @__PURE__ */ u(
          X,
          {
            action: () => i(!0),
            icon: e.icon,
            tooltip: e.tooltip,
            tooltipOptions: e.tooltipOptions
          }
        ) }),
        /* @__PURE__ */ P(Ln, { children: [
          /* @__PURE__ */ u($n, { children: t("editor.image.dialog.title") }),
          /* @__PURE__ */ P(
            Hx,
            {
              activationMode: "manual",
              defaultValue: g.resourceImage === "both" || g.resourceImage === "upload" ? "upload" : "link",
              children: [
                g.resourceImage === "both" && /* @__PURE__ */ P(Rf, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  /* @__PURE__ */ u(Sa, { value: "upload", children: t("editor.image.dialog.tab.upload") }),
                  /* @__PURE__ */ u(Sa, { value: "link", children: t("editor.image.dialog.tab.url") })
                ] }),
                /* @__PURE__ */ P("div", { className: "richtext-my-[10px] richtext-flex richtext-items-center richtext-gap-[4px]", children: [
                  /* @__PURE__ */ u(
                    _f,
                    {
                      checked: m,
                      onCheckedChange: (A) => {
                        y(A);
                      }
                    }
                  ),
                  /* @__PURE__ */ u(ot, { children: t("editor.link.dialog.inline") })
                ] }),
                g.enableAlt && /* @__PURE__ */ P("div", { className: "richtext-my-[10px] ", children: [
                  /* @__PURE__ */ u(ot, { className: "mb-[6px]", children: t("editor.imageUpload.alt") }),
                  /* @__PURE__ */ u(
                    $e,
                    {
                      onChange: (A) => f(A.target.value),
                      required: !0,
                      type: "text",
                      value: d
                    }
                  )
                ] }),
                /* @__PURE__ */ P(Aa, { value: "upload", children: [
                  /* @__PURE__ */ P("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                    /* @__PURE__ */ u(
                      Re,
                      {
                        className: "richtext-mt-1 richtext-w-full",
                        disabled: o,
                        onClick: C,
                        size: "sm",
                        children: o ? /* @__PURE__ */ P(be, { children: [
                          t("editor.imageUpload.uploading"),
                          /* @__PURE__ */ u(
                            ge,
                            {
                              className: "richtext-ml-1 richtext-animate-spin",
                              name: "Loader"
                            }
                          )
                        ] }) : t("editor.image.dialog.tab.upload")
                      }
                    ),
                    /* @__PURE__ */ u(
                      ix,
                      {
                        alt: d,
                        disabled: o,
                        editor: e.editor,
                        imageInline: m,
                        onClose: () => {
                          sx.setOpen(e.editor.id, !1), f("");
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ u(
                    "input",
                    {
                      accept: g.acceptMimes.join(",") || "image/*",
                      multiple: g.multiple,
                      onChange: x,
                      ref: h,
                      style: { display: "none" },
                      type: "file"
                    }
                  )
                ] }),
                /* @__PURE__ */ u(Aa, { value: "link", children: /* @__PURE__ */ u("form", { onSubmit: w, children: /* @__PURE__ */ P("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                  /* @__PURE__ */ u(
                    $e,
                    {
                      autoFocus: !0,
                      onChange: (A) => l(A.target.value),
                      placeholder: t("editor.image.dialog.placeholder"),
                      required: !0,
                      type: "url",
                      value: c
                    }
                  ),
                  /* @__PURE__ */ u(Re, { type: "submit", children: t("editor.image.dialog.button.apply") })
                ] }) }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const _r = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function lx(e) {
  var M, N, _;
  const [t, r] = Z({
    width: Wr,
    height: Wr
  }), [n, i] = Z({
    width: 0,
    height: 0
  }), [o] = Z([
    _r.TOP_LEFT,
    _r.TOP_RIGHT,
    _r.BOTTOM_LEFT,
    _r.BOTTOM_RIGHT
  ]), [a, s] = Z(!1), [c, l] = Z({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: d, inline: f } = (M = e == null ? void 0 : e.node) == null ? void 0 : M.attrs, h = f && (d === "left" || d === "right"), p = Ae(() => {
    var we;
    const { src: T, alt: S, width: O, height: D, flipX: H, flipY: j } = (we = e == null ? void 0 : e.node) == null ? void 0 : we.attrs, U = Yr(O) ? `${O}px` : O, ee = Yr(D) ? `${D}px` : D, re = [];
    H && re.push("rotateX(180deg)"), j && re.push("rotateY(180deg)");
    const de = re.join(" ");
    return {
      src: T || void 0,
      alt: S || void 0,
      style: {
        width: U || void 0,
        height: ee || void 0,
        transform: de || "none",
        ...h ? { float: d } : {}
      }
    };
  }, [(N = e == null ? void 0 : e.node) == null ? void 0 : N.attrs]), m = Ae(() => {
    const {
      style: { width: T }
    } = p;
    return { width: T === "100%" ? T : void 0 };
  }, [p]);
  function y(T) {
    i({
      width: T.target.width,
      height: T.target.height
    });
  }
  function g() {
    const { editor: T, getPos: S } = e;
    T.commands.setNodeSelection(S());
  }
  const x = oe(
    yr(() => {
      const { editor: T } = e, { width: S } = getComputedStyle(T.view.dom);
      r((O) => ({
        ...O,
        width: Number.parseInt(S, 10)
      }));
    }, Gr),
    [e == null ? void 0 : e.editor]
  );
  function w(T, S) {
    T.preventDefault(), T.stopPropagation();
    const O = n.width, D = n.height, H = O / D;
    let j = Number(e.node.attrs.width), U = Number(e.node.attrs.height);
    const ee = t.width;
    j && !U ? (j = j > ee ? ee : j, U = Math.round(j / H)) : U && !j ? (j = Math.round(U * H), j = j > ee ? ee : j) : !j && !U ? (j = O > ee ? ee : O, U = Math.round(j / H)) : j = j > ee ? ee : j, s(!0), l({
      x: T.clientX,
      y: T.clientY,
      w: j,
      h: U,
      dir: S
    });
  }
  const C = oe(
    yr((T) => {
      if (T.preventDefault(), T.stopPropagation(), !a)
        return;
      const { x: S, w: O, dir: D } = c, H = (T.clientX - S) * (/l/.test(D) ? -1 : 1), j = _u(O + H, su, t.width);
      e.updateAttributes({
        width: j,
        height: null
      });
    }, Gr),
    [a, c, t, e.updateAttributes]
  ), E = oe(
    (T) => {
      T.preventDefault(), T.stopPropagation(), a && (l({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), s(!1), g());
    },
    [a, g]
  ), A = oe(() => {
    document == null || document.addEventListener("mousemove", C, !0), document == null || document.addEventListener("mouseup", E, !0);
  }, [C, E]), k = oe(() => {
    document == null || document.removeEventListener("mousemove", C, !0), document == null || document.removeEventListener("mouseup", E, !0);
  }, [C, E]);
  ve(() => (a ? A() : k(), () => {
    k();
  }), [a, A, k]);
  const L = Ae(() => new ResizeObserver(() => x()), [x]);
  return ve(() => (L.observe(e.editor.view.dom), () => {
    L.disconnect();
  }), [e.editor.view.dom, L]), /* @__PURE__ */ u(
    Ea,
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
      children: /* @__PURE__ */ P(
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
                onClick: g,
                onLoad: y,
                src: p.src,
                style: p.style
              }
            ),
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || a) && /* @__PURE__ */ u("div", { className: "image-resizer", children: o == null ? void 0 : o.map((T) => /* @__PURE__ */ u(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${T}`,
                onMouseDown: (S) => w(S, T)
              },
              `image-dir-${T}`
            )) })
          ]
        }
      )
    }
  );
}
const Ft = new It("upload-image");
function ux() {
  return new Ot({
    key: Ft,
    state: {
      init() {
        return hp.empty;
      },
      apply(e, t) {
        t = t.map(e.mapping, e.doc);
        const r = e.getMeta(Ft);
        if (r != null && r.add)
          for (const { id: n, pos: i, src: o } of r.add) {
            const a = fx(o), s = dp.widget(i, a, { id: n });
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
function fx(e) {
  const t = document.createElement("div"), r = document.createElement("img");
  return r.setAttribute("class", "opacity-50"), r.src = e, r.addEventListener("load", () => {
    t.setAttribute("class", "img-placeholder");
  }), t.append(r), t;
}
function dx(e, t) {
  var i;
  const n = Ft.getState(e).find(void 0, void 0, (o) => o.id === t);
  return n.length > 0 ? (i = n[0]) == null ? void 0 : i.from : null;
}
function hx({ validateFn: e, onUpload: t, postUpload: r, defaultInline: n = !1 }) {
  return (i, o, a) => {
    for (const s of i) {
      if (e && !e(s))
        continue;
      const c = Date.now().toString(), l = o.state.tr;
      l.selection.empty || l.deleteSelection();
      const d = URL.createObjectURL(s);
      l.setMeta(Ft, {
        add: [{ id: c, pos: a, src: d }]
      }), o.dispatch(l), t(s).then(
        async (f) => {
          var w;
          r && typeof f == "string" && (f = await r(f));
          const { schema: h } = o.state;
          let p = dx(o.state, c);
          if (p === null)
            return;
          const m = typeof f == "object" ? d : f, y = (w = h.nodes.image) == null ? void 0 : w.create({
            src: m,
            inline: n
          });
          if (!y)
            return;
          const { doc: g } = o.state;
          p > g.content.size && (p = g.content.size - 1);
          const x = o.state.tr.replaceWith(p, p, y).setMeta(Ft, { remove: [c] });
          o.dispatch(x);
        },
        () => {
          const f = o.state.tr.delete(a, a).setMeta(Ft, { remove: [c] });
          o.dispatch(f);
        }
      );
    }
  };
}
function px(e, t, r) {
  var i;
  const n = [...((i = t.clipboardData) == null ? void 0 : i.files) || []];
  if (n.length > 0) {
    t.preventDefault();
    const o = e.state.selection.from;
    return r(n, e, o + 1), !0;
  }
  return !1;
}
function mx(e, t, r, n) {
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
const gx = {
  acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
  maxSize: 1024 * 1024 * 5,
  // 5MB
  multiple: !0,
  resourceImage: "both",
  defaultInline: !1,
  enableAlt: !0
}, wr = /* @__PURE__ */ hf.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var e;
    return {
      ...gx,
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: t,
        extension: r,
        t: n
      }) => {
        var i, o;
        return {
          component: cx,
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
      },
      alt: {
        default: "",
        parseHTML: (t) => t.getAttribute("alt"),
        renderHTML: (t) => ({
          alt: t.alt
        })
      }
    };
  },
  addNodeView() {
    return Ra(lx);
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
        at(
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
      },
      {
        tag: 'img[src]:not([src^="data:"])'
      }
    ];
  },
  addProseMirrorPlugins() {
    const t = hx({
      validateFn: (r) => !(!this.options.acceptMimes.includes(r.type) || r.size > this.options.maxSize),
      onUpload: this.options.upload,
      // postUpload: this.options.postUpload,
      defaultInline: this.options.defaultInline
    });
    return [
      ux(),
      new Ot({
        key: new It("image"),
        props: {
          handlePaste: (r, n) => {
            var a;
            return n.clipboardData && n.clipboardData.files && ((a = n.clipboardData.files) == null ? void 0 : a.length) ? [...n.clipboardData.files || []].some((s) => s.type === "text/html") ? !1 : px(r, n, t) : void 0;
          },
          handleDrop: (r, n, i, o) => (!(n instanceof DragEvent) || !n.dataTransfer || mx(r, n, o, t), !1)
        }
      })
    ];
  }
});
async function vx(e) {
  var n;
  const r = await (await fetch(`https://api.giphy.com/v1/gifs/trending?q=&limit=15&api_key=${e}`)).json();
  return (n = r == null ? void 0 : r.data) == null ? void 0 : n.map((i) => {
    var o, a, s;
    return {
      id: i == null ? void 0 : i.id,
      src: (o = i == null ? void 0 : i.images.original) == null ? void 0 : o.url,
      width: +((a = i == null ? void 0 : i.images.original) == null ? void 0 : a.width),
      height: +((s = i == null ? void 0 : i.images.original) == null ? void 0 : s.width)
    };
  });
}
async function yx(e, t) {
  var i;
  const n = await (await fetch(`https://api.giphy.com/v1/gifs/search?q=${e}&limit=15&api_key=${t}`)).json();
  return (i = n == null ? void 0 : n.data) == null ? void 0 : i.map((o) => {
    var a, s, c;
    return {
      id: o == null ? void 0 : o.id,
      src: (a = o == null ? void 0 : o.images.original) == null ? void 0 : a.url,
      width: +((s = o == null ? void 0 : o.images.original) == null ? void 0 : s.width),
      height: +((c = o == null ? void 0 : o.images.original) == null ? void 0 : c.width)
    };
  });
}
async function xx(e) {
  var o, a;
  const t = await fetch(`https://tenor.googleapis.com/v2/trending_terms?key=${e}&limit=10`), r = await (t == null ? void 0 : t.json()), i = await (await fetch(`https://tenor.googleapis.com/v2/search?key=${e}&q=${(o = r == null ? void 0 : r.results) == null ? void 0 : o[0]}&limit=15`)).json();
  return (a = i == null ? void 0 : i.results) == null ? void 0 : a.map((s) => {
    var c, l, d, f, h, p, m, y;
    return {
      id: s == null ? void 0 : s.id,
      src: (l = (c = s == null ? void 0 : s.media_formats) == null ? void 0 : c.gif) == null ? void 0 : l.url,
      width: (h = (f = (d = s == null ? void 0 : s.media_formats) == null ? void 0 : d.gif) == null ? void 0 : f.dims) == null ? void 0 : h[0],
      height: (y = (m = (p = s == null ? void 0 : s.media_formats) == null ? void 0 : p.gif) == null ? void 0 : m.dims) == null ? void 0 : y[1]
    };
  });
}
async function bx(e, t) {
  var i;
  const n = await (await fetch(`https://tenor.googleapis.com/v2/search?key=${t}&q=${e}&limit=15`)).json();
  return (i = n == null ? void 0 : n.results) == null ? void 0 : i.map((o) => {
    var a, s, c, l, d, f, h, p;
    return {
      id: o == null ? void 0 : o.id,
      src: (s = (a = o == null ? void 0 : o.media_formats) == null ? void 0 : a.gif) == null ? void 0 : s.url,
      width: (d = (l = (c = o == null ? void 0 : o.media_formats) == null ? void 0 : c.gif) == null ? void 0 : l.dims) == null ? void 0 : d[0],
      height: (p = (h = (f = o == null ? void 0 : o.media_formats) == null ? void 0 : f.gif) == null ? void 0 : h.dims) == null ? void 0 : p[1]
    };
  });
}
function wx(e, t) {
  return {
    searchTrending: async () => t ? e === "giphy" ? vx(t) : e === "tenor" ? xx(t) : [] : [],
    searchWord: async (i) => t ? e === "giphy" ? yx(i, t) : e === "tenor" ? bx(i, t) : [] : []
  };
}
function Sx({ selectImage: e, apiKey: t, provider: r, children: n }) {
  const [i, o] = Z([]), a = Ge(null), { searchTrending: s, searchWord: c } = wx(r, t);
  ve(() => {
    (async () => {
      const d = await s();
      o(d);
    })();
  }, []);
  const l = oe(
    kn(async (d) => {
      if (!d.target.value) {
        const h = await s();
        o(h);
        return;
      }
      const f = await c(d.target.value);
      o(f);
    }, 350),
    // Adjust the debounce delay as needed
    []
  );
  return /* @__PURE__ */ P(Ar, { modal: !0, children: [
    /* @__PURE__ */ u(Cr, { asChild: !0, children: n }),
    /* @__PURE__ */ u(
      Kt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: t ? /* @__PURE__ */ P(be, { children: [
          /* @__PURE__ */ u("div", { className: "richtext-mb-[10px] richtext-w-full", children: /* @__PURE__ */ u(
            $e,
            {
              onChange: l,
              placeholder: "Search GIF",
              ref: a,
              type: "text"
            }
          ) }),
          /* @__PURE__ */ u("div", { className: "richtext-max-h-[280px] !richtext-max-w-[400px] richtext-overflow-y-auto", children: /* @__PURE__ */ u("div", { className: "richtext-grid richtext-grid-cols-2 richtext-gap-1 ", children: i != null && i.length ? i == null ? void 0 : i.map((d) => /* @__PURE__ */ u(
            "img",
            {
              alt: "",
              className: "richtext-cursor-pointer richtext-object-contain richtext-text-center",
              onClick: () => e(d.src),
              src: d.src
            },
            d.id
          )) : /* @__PURE__ */ u("p", { children: "No GIFs found" }) }) })
        ] }) : /* @__PURE__ */ u("div", { children: /* @__PURE__ */ u("p", { children: "Missing Giphy API Key" }) })
      }
    )
  ] });
}
function Ax({ editor: e, icon: t, provider: r, apiKey: n, ...i }) {
  return /* @__PURE__ */ u(
    Sx,
    {
      apiKey: n,
      provider: r,
      selectImage: (a) => {
        e.chain().focus().setImageGif({ src: a }).run();
      },
      children: /* @__PURE__ */ u(
        X,
        {
          icon: t,
          tooltip: i == null ? void 0 : i.tooltip,
          tooltipOptions: i == null ? void 0 : i.tooltipOptions
        }
      )
    }
  );
}
const Dr = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function Cx(e) {
  var k, L;
  const [t, r] = Z({
    width: Wr,
    height: Wr
  }), [n, i] = Z({
    width: 0,
    height: 0
  }), [o] = Z([
    Dr.TOP_LEFT,
    Dr.TOP_RIGHT,
    Dr.BOTTOM_LEFT,
    Dr.BOTTOM_RIGHT
  ]), [a, s] = Z(!1), [c, l] = Z({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: d } = (k = e == null ? void 0 : e.node) == null ? void 0 : k.attrs, f = Ae(() => {
    var D;
    const { src: M, alt: N, width: _, height: T } = (D = e == null ? void 0 : e.node) == null ? void 0 : D.attrs, S = Yr(_) ? `${_}px` : _, O = Yr(T) ? `${T}px` : T;
    return {
      src: M || void 0,
      alt: N || void 0,
      style: {
        width: S || void 0,
        height: O || void 0
      }
    };
  }, [(L = e == null ? void 0 : e.node) == null ? void 0 : L.attrs]), h = Ae(() => {
    const {
      style: { width: M }
    } = f;
    return { width: M === "100%" ? M : void 0 };
  }, [f]);
  function p(M) {
    i({
      width: M.target.width,
      height: M.target.height
    });
  }
  function m() {
    const { editor: M, getPos: N } = e;
    M.commands.setNodeSelection(N());
  }
  const y = oe(
    yr(() => {
      const { editor: M } = e, { width: N } = getComputedStyle(M.view.dom);
      r((_) => ({
        ..._,
        width: Number.parseInt(N, 10)
      }));
    }, Gr),
    [e == null ? void 0 : e.editor]
  );
  function g(M, N) {
    M.preventDefault(), M.stopPropagation();
    const _ = n.width, T = n.height, S = _ / T;
    let O = Number(e.node.attrs.width), D = Number(e.node.attrs.height);
    const H = t.width;
    O && !D ? (O = O > H ? H : O, D = Math.round(O / S)) : D && !O ? (O = Math.round(D * S), O = O > H ? H : O) : !O && !D ? (O = _ > H ? H : _, D = Math.round(O / S)) : O = O > H ? H : O, s(!0), l({
      x: M.clientX,
      y: M.clientY,
      w: O,
      h: D,
      dir: N
    });
  }
  const x = oe(
    yr((M) => {
      if (M.preventDefault(), M.stopPropagation(), !a)
        return;
      const { x: N, w: _, dir: T } = c, S = (M.clientX - N) * (/l/.test(T) ? -1 : 1), O = _u(_ + S, su, t.width);
      e.updateAttributes({
        width: O,
        height: null
      });
    }, Gr),
    [a, c, t, e.updateAttributes]
  ), w = oe(
    (M) => {
      M.preventDefault(), M.stopPropagation(), a && (l({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), s(!1), m());
    },
    [a, m]
  ), C = oe(() => {
    document == null || document.addEventListener("mousemove", x, !0), document == null || document.addEventListener("mouseup", w, !0);
  }, [x, w]), E = oe(() => {
    document == null || document.removeEventListener("mousemove", x, !0), document == null || document.removeEventListener("mouseup", w, !0);
  }, [x, w]);
  ve(() => (a ? C() : E(), () => {
    E();
  }), [a, C, E]);
  const A = Ae(() => new ResizeObserver(() => y()), [y]);
  return ve(() => (A.observe(e.editor.view.dom), () => {
    A.disconnect();
  }), [e.editor.view.dom, A]), /* @__PURE__ */ u(
    Ea,
    {
      className: "image-view",
      style: { ...h, width: "100%", textAlign: d },
      children: /* @__PURE__ */ P(
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
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || a) && /* @__PURE__ */ u("div", { className: "image-resizer", children: o == null ? void 0 : o.map((M) => /* @__PURE__ */ u(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${M}`,
                onMouseDown: (N) => g(N, M)
              },
              `image-dir-${M}`
            )) })
          ]
        }
      )
    }
  );
}
const xf = /* @__PURE__ */ hf.extend({
  name: "imageGif",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      API_KEY: "",
      provider: "giphy",
      draggable: !1,
      selectable: !0,
      atom: !0,
      button: ({ editor: t, extension: r, t: n }) => {
        var a, s;
        const i = ((a = r == null ? void 0 : r.options) == null ? void 0 : a.provider) || "", o = ((s = r == null ? void 0 : r.options) == null ? void 0 : s.API_KEY) || "";
        return {
          component: Ax,
          componentProps: {
            editor: t,
            action: () => {
            },
            isActive: () => !1,
            disabled: !1,
            icon: "GifIcon",
            tooltip: n("editor.imageGif.tooltip"),
            apiKey: o,
            provider: i
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
    return Ra(Cx);
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
        at(
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
}), bf = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function wf({ item: e, disabled: t, editor: r }) {
  var i;
  const n = e.component;
  return n ? /* @__PURE__ */ u(xd, { children: e.type === "divider" ? /* @__PURE__ */ u(
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
function Tx(e) {
  return e.type.name === wr.name;
}
function Ex(e) {
  return e.type.name === xf.name;
}
function Rx(e) {
  const { lang: t } = Ce(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (l) => {
      if (Tx(l))
        return c = !0, !1;
    }), c;
  }, n = Ae(() => e.disabled ? [] : Hv(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ u(be, { children: /* @__PURE__ */ u(
    Rt,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: r,
      tippyOptions: bf,
      children: n != null && n.length ? /* @__PURE__ */ u("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((i, o) => /* @__PURE__ */ u(
        wf,
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
function Ix(e) {
  const { lang: t } = Ce(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (l) => {
      if (Ex(l))
        return c = !0, !1;
    }), c;
  }, n = Ae(() => e.disabled ? [] : qv(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ u(be, { children: /* @__PURE__ */ u(
    Rt,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: r,
      tippyOptions: bf,
      children: n != null && n.length ? /* @__PURE__ */ u("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((i, o) => /* @__PURE__ */ u(
        wf,
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
function Ox(e, t, r = null) {
  return r ? e.createChecked({ index: t }, r) : e.createAndFill({ index: t });
}
function Px(e) {
  if (e.cached.columnsNodeTypes)
    return e.cached.columnsNodeTypes;
  const t = {
    columns: e.nodes.columns,
    column: e.nodes.column
  };
  return e.cached.columnsNodeTypes = t, t;
}
function Nx(e, t, r = null) {
  const n = Px(e), i = [];
  for (let o = 0; o < t; o += 1) {
    const a = Ox(n.column, o, r);
    a && i.push(a);
  }
  return n.columns.createChecked({ cols: t }, i);
}
function ui({
  state: e,
  dispatch: t,
  type: r
}) {
  const n = Vr((o) => o.type.name === Cn.name)(e.selection), i = Vr((o) => o.type.name === Sf.name)(e.selection);
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
    const l = pp.fromJSON(e.schema, s);
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
function dc({ state: e, dispatch: t, type: r }) {
  const n = Vr((o) => o.type.name === Cn.name)(e.selection), i = Vr((o) => o.type.name === Sf.name)(e.selection);
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
const Sf = /* @__PURE__ */ Rn.create({
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
    return ["div", at(this.options.HTMLAttributes, e), 0];
  }
}), mw = mp.create({
  name: "columnActionButton",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: r }) => ({
        component: X,
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
}), kx = 200, Cn = /* @__PURE__ */ Rn.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: kx,
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
    return ["div", at(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      insertColumns: (e) => ({ tr: t, dispatch: r, editor: n }) => {
        const i = Nx(n.schema, e && e.cols || 3);
        if (r) {
          const o = t.selection.anchor + 1;
          t.replaceSelectionWith(i).scrollIntoView().setSelection(Gt.near(t.doc.resolve(o)));
        }
        return !0;
      },
      addColBefore: () => ({ dispatch: e, state: t }) => ui({ dispatch: e, state: t, type: "addBefore" }),
      addColAfter: () => ({ dispatch: e, state: t }) => ui({ dispatch: e, state: t, type: "addAfter" }),
      deleteCol: () => ({ dispatch: e, state: t }) => ui({ dispatch: e, state: t, type: "delete" })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => dc({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => dc({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "before"
      })
    };
  }
});
function Af(e, t) {
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
function Mx({ editor: e }) {
  const { t } = Ce(), r = oe(() => e.isActive(Cn.name), [e]), n = oe(() => Af(Cn.name, e), [e]), i = oe(() => e.chain().focus().addColBefore().run(), [e]), o = oe(() => e.chain().focus().addColAfter().run(), [e]), a = oe(() => e.chain().focus().deleteCol().run(), [e]);
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
      children: /* @__PURE__ */ P("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
        /* @__PURE__ */ u(
          X,
          {
            action: i,
            icon: "ColumnAddLeft",
            tooltip: t("editor.table.menu.insertColumnBefore")
          }
        ),
        /* @__PURE__ */ u(
          X,
          {
            action: o,
            icon: "ColumnAddRight",
            tooltip: t("editor.table.menu.insertColumnAfter")
          }
        ),
        /* @__PURE__ */ u(
          X,
          {
            action: a,
            icon: "DeleteColumn",
            tooltip: t("editor.table.menu.deleteColumn")
          }
        ),
        /* @__PURE__ */ u(
          X,
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
const Lx = fe.Root, $x = fe.Trigger, hc = fe.Portal, pc = fe.Sub, ba = ne.forwardRef(({ className: e, inset: t, children: r, ...n }, i) => /* @__PURE__ */ P(
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
      /* @__PURE__ */ u(Gh, { className: "richtext-ml-auto richtext-h-4 richtext-w-4" })
    ]
  }
));
ba.displayName = fe.SubTrigger.displayName;
const wa = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
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
wa.displayName = fe.SubContent.displayName;
const Cf = ne.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u(fe.Portal, { children: /* @__PURE__ */ u(
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
Cf.displayName = fe.Content.displayName;
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
const _x = ne.forwardRef(({ className: e, children: t, checked: r, ...n }, i) => /* @__PURE__ */ P(
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
      /* @__PURE__ */ u("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ u(fe.ItemIndicator, { children: /* @__PURE__ */ u(fu, { className: "richtext-h-4 richtext-w-4" }) }) }),
      t
    ]
  }
));
_x.displayName = fe.CheckboxItem.displayName;
const Dx = ne.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ P(
  fe.RadioItem,
  {
    ref: n,
    className: Q(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ u("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ u(fe.ItemIndicator, { children: /* @__PURE__ */ u(Vh, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      t
    ]
  }
));
Dx.displayName = fe.RadioItem.displayName;
const Bx = ne.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ u(
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
Bx.displayName = fe.Label.displayName;
const Tf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  fe.Separator,
  {
    ref: r,
    className: Q("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
Tf.displayName = fe.Separator.displayName;
function jx({
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
jx.displayName = "DropdownMenuShortcut";
const $e = ne.forwardRef(
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
$e.displayName = "Input";
const zx = _n(
  "richtext-text-sm richtext-font-medium richtext-leading-none peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), ot = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  hu.Root,
  {
    ref: r,
    className: Q(zx(), e),
    ...t
  }
));
ot.displayName = hu.Root.displayName;
const Ar = pr.Root, Cr = pr.Trigger, Kt = ne.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, i) => /* @__PURE__ */ u(pr.Portal, { children: /* @__PURE__ */ u(
  pr.Content,
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
Kt.displayName = pr.Content.displayName;
const We = ne.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, i) => /* @__PURE__ */ u(
    cu.Root,
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
We.displayName = cu.Root.displayName;
const Ef = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Jo.Root,
  {
    className: Q(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ u(
      Jo.Thumb,
      {
        className: Q(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
Ef.displayName = Jo.Root.displayName;
const Hx = Pt.Root, Rf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Pt.List,
  {
    ref: r,
    className: Q(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      e
    ),
    ...t
  }
));
Rf.displayName = Pt.List.displayName;
const Sa = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Pt.Trigger,
  {
    ref: r,
    className: Q(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      e
    ),
    ...t
  }
));
Sa.displayName = Pt.Trigger.displayName;
const Aa = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Pt.Content,
  {
    ref: r,
    className: Q(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2",
      e
    ),
    ...t
  }
));
Aa.displayName = Pt.Content.displayName;
const qx = ke.Provider, If = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  ke.Viewport,
  {
    ref: r,
    className: Q(
      "richtext-fixed richtext-top-0 richtext-z-[100] richtext-flex richtext-max-h-screen richtext-w-full richtext-flex-col-reverse richtext-p-4 sm:richtext-bottom-0 sm:richtext-right-0 sm:richtext-top-auto sm:richtext-flex-col md:richtext-max-w-[420px]",
      e
    ),
    ...t
  }
));
If.displayName = ke.Viewport.displayName;
const Fx = _n(
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
), Of = ne.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ u(
  ke.Root,
  {
    ref: n,
    className: Q(Fx({ variant: t }), e),
    ...r
  }
));
Of.displayName = ke.Root.displayName;
const Ux = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  ke.Action,
  {
    ref: r,
    className: Q(
      "richtext-inline-flex richtext-h-8 richtext-shrink-0 richtext-items-center richtext-justify-center richtext-rounded-md !richtext-border richtext-bg-transparent richtext-px-3 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-secondary focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 group-[.destructive]:richtext-border-muted/40 group-[.destructive]:hover:richtext-border-destructive/30 group-[.destructive]:hover:richtext-bg-destructive group-[.destructive]:hover:richtext-text-destructive-foreground group-[.destructive]:focus:richtext-ring-destructive",
      e
    ),
    ...t
  }
));
Ux.displayName = ke.Action.displayName;
const Pf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  ke.Close,
  {
    ref: r,
    className: Q(
      "richtext-absolute richtext-right-2 richtext-top-2 richtext-rounded-md richtext-p-1 richtext-text-foreground/50 richtext-opacity-0 richtext-transition-opacity hover:richtext-text-foreground focus:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 group-hover:richtext-opacity-100 group-[.destructive]:richtext-text-red-300 group-[.destructive]:hover:richtext-text-red-50 group-[.destructive]:focus:richtext-ring-red-400 group-[.destructive]:focus:richtext-ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ u(uu, { className: "richtext-h-4 richtext-w-4" })
  }
));
Pf.displayName = ke.Close.displayName;
const Nf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  ke.Title,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
Nf.displayName = ke.Title.displayName;
const kf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  ke.Description,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-opacity-90", e),
    ...t
  }
));
kf.displayName = ke.Description.displayName;
const Wx = _n(
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
), Mf = ne.forwardRef(({ className: e, variant: t, size: r, ...n }, i) => /* @__PURE__ */ u(
  du.Root,
  {
    ref: i,
    className: Q(Wx({ variant: t, size: r, className: e })),
    ...n
  }
));
Mf.displayName = du.Root.displayName;
const Gx = Sr.Provider, Lf = Sr.Root, $f = Sr.Trigger, es = ne.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u(
  Sr.Content,
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
es.displayName = Sr.Content.displayName;
const Vx = 1, Kx = 1e6;
let fi = 0;
function Xx() {
  return fi = (fi + 1) % Number.MAX_SAFE_INTEGER, fi.toString();
}
const di = /* @__PURE__ */ new Map();
function mc(e) {
  if (di.has(e))
    return;
  const t = setTimeout(() => {
    di.delete(e), hr({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Kx);
  di.set(e, t);
}
function Yx(e, t) {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Vx)
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
      return r ? mc(r) : e.toasts.forEach((n) => {
        mc(n.id);
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
function hr(e) {
  Fr = Yx(Fr, e), qr.forEach((t) => {
    t(Fr);
  });
}
function Jx({ ...e }) {
  const t = Xx(), r = (i) => hr({
    type: "UPDATE_TOAST",
    toast: { ...i, id: t }
  }), n = () => hr({ type: "DISMISS_TOAST", toastId: t });
  return hr({
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
function ts() {
  const [e, t] = ne.useState(Fr);
  return ne.useEffect(() => (qr.push(t), () => {
    const r = qr.indexOf(t);
    r > -1 && qr.splice(r, 1);
  }), [e]), {
    ...e,
    toast: Jx,
    dismiss: (r) => hr({ type: "DISMISS_TOAST", toastId: r })
  };
}
const _f = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u(
  Yo.Root,
  {
    ref: r,
    className: Q(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-p-0 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-2 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u(
      Yo.Indicator,
      {
        className: Q("!richtext-flex !richtext-p-0 !richtext-items-center !richtext-justify-center !richtext-text-current"),
        children: /* @__PURE__ */ u(fu, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
_f.displayName = Yo.Root.displayName;
const Qx = { padding: "0 12px 12px" }, Zx = ({ width: e, maxWidth: t, height: r, onOk: n, children: i }) => {
  const { t: o } = Ce(), [a, s] = Z({
    width: "",
    height: "",
    maxWidth: ""
  });
  ve(() => {
    s({
      width: e,
      height: r,
      maxWidth: t
    });
  }, [r, t, e]);
  function c(l) {
    l.preventDefault(), l.stopPropagation(), n(a);
  }
  return /* @__PURE__ */ P(Ar, { modal: !0, children: [
    /* @__PURE__ */ u(Cr, { asChild: !0, children: i }),
    /* @__PURE__ */ u(Kt, { children: /* @__PURE__ */ u("div", { style: Qx, children: /* @__PURE__ */ P("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: c, children: [
      /* @__PURE__ */ u(ot, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ u("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ u(
        $e,
        {
          type: "number",
          value: a.width,
          required: !0,
          onChange: (l) => s({ ...a, width: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ u(ot, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ u("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ u(
        $e,
        {
          type: "number",
          value: a.maxWidth,
          required: !0,
          onChange: (l) => s({ ...a, maxWidth: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ u(ot, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ u("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ u(
        $e,
        {
          type: "number",
          value: a.height,
          required: !0,
          onChange: (l) => s({ ...a, height: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ u(Re, { type: "submit", className: "richtext-self-end richtext-mt-2", children: o("editor.link.dialog.button.apply") })
    ] }) }) })
  ] });
}, Xt = {
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
function eb(e) {
  const t = Xt.youtube, r = e.matchedUrl;
  e.validLink = !0;
  const n = r.split("="), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}/${o}`, e.validId = !0;
  }
  return e;
}
function tb(e) {
  const t = Xt.youku, r = e.matchedUrl, n = t.idRule, i = new RegExp(n), o = r.match(i);
  if (o && o.length > 0) {
    const a = o[0].slice(3);
    e.validId = !0, e.src = `${t.srcPrefix}/${a}`;
  } else
    e.validId = !1;
  return e;
}
function rb(e) {
  const t = Xt.bilibili, n = e.matchedUrl.split("/"), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}=${o}`, e.validId = !0;
  }
  return e;
}
function nb(e) {
  const t = Xt.qqvideo, n = e.matchedUrl.split("/"), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}=${o}`, e.validId = !0;
  }
  return e;
}
function ib(e, t) {
  return t.src = e, t.validId = !0, t;
}
function ob(e, t) {
  return t.src = e, t.validId = !0, t;
}
function ab(e, t) {
  return t.src = e, t.validId = !0, t.originalLink = e, t;
}
function sb(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function cb(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function lb(e) {
  const t = Xt.figma;
  return e.src = `${t.srcPrefix}=${encodeURIComponent(e.matchedUrl)}`, e.validId = !0, e.originalLink = e.matchedUrl, e;
}
function ub(e, t) {
  return t.src = `${t.matchedUrl}?embed`, t.validId = !0, t.originalLink = e, t;
}
function fb(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function db(e) {
  return e.src = `${e.matchedUrl}`, e.validId = !0, e.originalLink = e.src, e;
}
function hb(e, t) {
  return t.src = `${t.matchedUrl}?background=white&banner=show&embedded=true`, t.validId = !0, t.originalLink = e, t;
}
function pb(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function mb(e, t, r) {
  if (e === "googlemaps")
    return r.validLink = !0, r.matchedUrl = t, r;
  const i = Xt[e].linkRule;
  for (const o of i) {
    const a = new RegExp(o), s = t.match(a);
    if (s && s.length > 0)
      return r.validLink = !0, r.matchedUrl = e === "youtube" ? s[1] : s[0], r;
  }
  return r;
}
function gb(e) {
  var r, n;
  let t = "iframe";
  return ((r = e.includes) != null && r.call(e, "youtube") || (n = e.includes) != null && n.call(e, "youtu.be")) && (t = "youtube"), e.includes("youku") && (t = "youku"), e.includes("bilibili") && (t = "bilibili"), e.includes("qq") && (t = "qqvideo"), e.includes("amap") && (t = "amap"), e.includes("map.baidu") && (t = "baidu_map"), (e.includes("google.com/maps") || e.includes("maps.app.goo.gl")) && (t = "googlemaps"), e.includes("modao") && (t = "modao"), e.includes("lanhuapp") && (t = "lanhu"), e.includes("figma") && (t = "figma"), e.includes("canva") && (t = "canva"), e.includes("processon") && (t = "processon"), e.includes("codepen") && (t = "codepen"), e.includes("jinshuju") && (t = "jinshuju"), e.includes("iframe") && (t = "iframe"), t;
}
function Df(e) {
  let t = {
    validLink: !1,
    validId: !1,
    matchedUrl: "",
    originalLink: e,
    src: ""
  };
  const r = gb(e);
  if (t = mb(r, e, t), !t.validLink)
    return t;
  switch (r) {
    case "youtube":
      return eb(t);
    case "youku":
      return tb(t);
    case "bilibili":
      return rb(t);
    case "qqvideo":
      return nb(t);
    case "amap":
      return ib(e, t);
    case "baidu_map":
      return ob(e, t);
    case "googlemaps":
      return ab(e, t);
    case "modao":
      return sb(t);
    case "lanhu":
      return cb(t);
    case "figma":
      return lb(t);
    case "canva":
      return ub(e, t);
    case "processon":
      return fb(e, t);
    case "codepen":
      return db(t);
    case "jinshuju":
      return hb(e, t);
    case "iframe":
      return pb(e, t);
    default:
      return e;
  }
}
function vb() {
  const [e] = vf((t) => t.value);
  return e;
}
const yb = {
  setDisable: (e, t) => {
    Za(Wt.EDIT(e), t);
  }
}, xb = "_wrap_5y04w_1", bb = "_innerWrap_5y04w_15", gc = {
  wrap: xb,
  innerWrap: bb
};
function wb({ editor: e, node: t, updateAttributes: r }) {
  const n = vb(), { src: i, width: o, height: a } = t.attrs, [s, c] = Z("");
  function l() {
    if (!s)
      return;
    const f = Df(s);
    e.chain().updateAttributes(zt.name, {
      src: (f == null ? void 0 : f.src) || s
    }).setNodeSelection(e.state.selection.from).focus().run();
  }
  const d = oe(
    (f) => {
      r({ width: f.width, height: f.height });
    },
    [r]
  );
  return /* @__PURE__ */ P(Ea, { children: [
    !i && /* @__PURE__ */ P("div", { className: "richtext-mx-auto richtext-my-[12px] richtext-flex richtext-max-w-[600px] richtext-items-center richtext-justify-center richtext-gap-[10px] richtext-rounded-[12px] richtext-border richtext-border-solid richtext-border-[#ccc] richtext-p-[10px]", children: [
      /* @__PURE__ */ u(
        $e,
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
        Re,
        {
          className: "richtext-w-[60px]",
          onClick: l,
          children: "OK"
        }
      )
    ] }),
    i && /* @__PURE__ */ u(
      gp,
      {
        size: { width: Number.parseInt(o), height: Number.parseInt(a) },
        onResizeStop: (f, h, p, m) => {
          d({
            width: Number.parseInt(o) + m.width,
            height: Number.parseInt(a) + m.height
          });
        },
        children: /* @__PURE__ */ u("div", { className: Ta(gc.wrap, "render-wrapper"), children: /* @__PURE__ */ u(
          "div",
          {
            className: gc.innerWrap,
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
const zt = /* @__PURE__ */ Rn.create({
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
        component: X,
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
        parseHTML: Xn("width")
      },
      height: {
        default: 300,
        parseHTML: Xn("height")
      },
      src: {
        default: null,
        parseHTML: Xn("src")
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
    return ["iframe", at(this.options.HTMLAttributes, e)];
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
      pu({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  },
  addNodeView() {
    return Ra(wb);
  }
});
var Tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ab(e) {
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
var hi, vc;
function Bf() {
  if (vc) return hi;
  vc = 1;
  var e = Object.prototype.toString;
  return hi = function(r) {
    var n = e.call(r), i = n === "[object Arguments]";
    return i || (i = n !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && e.call(r.callee) === "[object Function]"), i;
  }, hi;
}
var pi, yc;
function Cb() {
  if (yc) return pi;
  yc = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Bf(), i = Object.prototype.propertyIsEnumerable, o = !i.call({ toString: null }, "toString"), a = i.call(function() {
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
      var m = p !== null && typeof p == "object", y = r.call(p) === "[object Function]", g = n(p), x = m && r.call(p) === "[object String]", w = [];
      if (!m && !y && !g)
        throw new TypeError("Object.keys called on a non-object");
      var C = a && y;
      if (x && p.length > 0 && !t.call(p, 0))
        for (var E = 0; E < p.length; ++E)
          w.push(String(E));
      if (g && p.length > 0)
        for (var A = 0; A < p.length; ++A)
          w.push(String(A));
      else
        for (var k in p)
          !(C && k === "prototype") && t.call(p, k) && w.push(String(k));
      if (o)
        for (var L = f(p), M = 0; M < s.length; ++M)
          !(L && s[M] === "constructor") && t.call(p, s[M]) && w.push(s[M]);
      return w;
    };
  }
  return pi = e, pi;
}
var mi, xc;
function rs() {
  if (xc) return mi;
  xc = 1;
  var e = Array.prototype.slice, t = Bf(), r = Object.keys, n = r ? function(a) {
    return r(a);
  } : Cb(), i = Object.keys;
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
  }, mi = n, mi;
}
var gi, bc;
function Dn() {
  if (bc) return gi;
  bc = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return gi = e, gi;
}
var vi, wc;
function ns() {
  return wc || (wc = 1, vi = SyntaxError), vi;
}
var yi, Sc;
function De() {
  return Sc || (Sc = 1, yi = TypeError), yi;
}
var xi, Ac;
function Tb() {
  return Ac || (Ac = 1, xi = Object.getOwnPropertyDescriptor), xi;
}
var bi, Cc;
function Mt() {
  if (Cc) return bi;
  Cc = 1;
  var e = /* @__PURE__ */ Tb();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return bi = e, bi;
}
var wi, Tc;
function is() {
  if (Tc) return wi;
  Tc = 1;
  var e = /* @__PURE__ */ Dn(), t = /* @__PURE__ */ ns(), r = /* @__PURE__ */ De(), n = /* @__PURE__ */ Mt();
  return wi = function(o, a, s) {
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
  }, wi;
}
var Si, Ec;
function os() {
  if (Ec) return Si;
  Ec = 1;
  var e = /* @__PURE__ */ Dn(), t = function() {
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
  }, Si = t, Si;
}
var Ai, Rc;
function Lt() {
  if (Rc) return Ai;
  Rc = 1;
  var e = rs(), t = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", r = Object.prototype.toString, n = Array.prototype.concat, i = /* @__PURE__ */ is(), o = function(l) {
    return typeof l == "function" && r.call(l) === "[object Function]";
  }, a = /* @__PURE__ */ os()(), s = function(l, d, f, h) {
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
  return c.supportsDescriptors = !!a, Ai = c, Ai;
}
var Ci = { exports: {} }, Ti, Ic;
function as() {
  return Ic || (Ic = 1, Ti = Object), Ti;
}
var Ei, Oc;
function jf() {
  return Oc || (Oc = 1, Ei = Error), Ei;
}
var Ri, Pc;
function Eb() {
  return Pc || (Pc = 1, Ri = EvalError), Ri;
}
var Ii, Nc;
function Rb() {
  return Nc || (Nc = 1, Ii = RangeError), Ii;
}
var Oi, kc;
function Ib() {
  return kc || (kc = 1, Oi = ReferenceError), Oi;
}
var Pi, Mc;
function Ob() {
  return Mc || (Mc = 1, Pi = URIError), Pi;
}
var Ni, Lc;
function Pb() {
  return Lc || (Lc = 1, Ni = Math.abs), Ni;
}
var ki, $c;
function Nb() {
  return $c || ($c = 1, ki = Math.floor), ki;
}
var Mi, _c;
function kb() {
  return _c || (_c = 1, Mi = Math.max), Mi;
}
var Li, Dc;
function Mb() {
  return Dc || (Dc = 1, Li = Math.min), Li;
}
var $i, Bc;
function Lb() {
  return Bc || (Bc = 1, $i = Math.pow), $i;
}
var _i, jc;
function $b() {
  return jc || (jc = 1, _i = Math.round), _i;
}
var Di, zc;
function _b() {
  return zc || (zc = 1, Di = Number.isNaN || function(t) {
    return t !== t;
  }), Di;
}
var Bi, Hc;
function Db() {
  if (Hc) return Bi;
  Hc = 1;
  var e = /* @__PURE__ */ _b();
  return Bi = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Bi;
}
var ji, qc;
function Bn() {
  return qc || (qc = 1, ji = function() {
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
  }), ji;
}
var zi, Fc;
function ss() {
  if (Fc) return zi;
  Fc = 1;
  var e = typeof Symbol < "u" && Symbol, t = Bn();
  return zi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, zi;
}
var Hi, Uc;
function zf() {
  return Uc || (Uc = 1, Hi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Hi;
}
var qi, Wc;
function Hf() {
  if (Wc) return qi;
  Wc = 1;
  var e = /* @__PURE__ */ as();
  return qi = e.getPrototypeOf || null, qi;
}
var Fi, Gc;
function Bb() {
  if (Gc) return Fi;
  Gc = 1;
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
  return Fi = function(c) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== n)
      throw new TypeError(e + l);
    for (var d = o(arguments, 1), f, h = function() {
      if (this instanceof f) {
        var x = l.apply(
          this,
          i(d, arguments)
        );
        return Object(x) === x ? x : this;
      }
      return l.apply(
        c,
        i(d, arguments)
      );
    }, p = r(0, l.length - d.length), m = [], y = 0; y < p; y++)
      m[y] = "$" + y;
    if (f = Function("binder", "return function (" + a(m, ",") + "){ return binder.apply(this,arguments); }")(h), l.prototype) {
      var g = function() {
      };
      g.prototype = l.prototype, f.prototype = new g(), g.prototype = null;
    }
    return f;
  }, Fi;
}
var Ui, Vc;
function Tr() {
  if (Vc) return Ui;
  Vc = 1;
  var e = Bb();
  return Ui = Function.prototype.bind || e, Ui;
}
var Wi, Kc;
function cs() {
  return Kc || (Kc = 1, Wi = Function.prototype.call), Wi;
}
var Gi, Xc;
function ls() {
  return Xc || (Xc = 1, Gi = Function.prototype.apply), Gi;
}
var Vi, Yc;
function jb() {
  return Yc || (Yc = 1, Vi = typeof Reflect < "u" && Reflect && Reflect.apply), Vi;
}
var Ki, Jc;
function qf() {
  if (Jc) return Ki;
  Jc = 1;
  var e = Tr(), t = ls(), r = cs(), n = jb();
  return Ki = n || e.call(r, t), Ki;
}
var Xi, Qc;
function us() {
  if (Qc) return Xi;
  Qc = 1;
  var e = Tr(), t = /* @__PURE__ */ De(), r = cs(), n = qf();
  return Xi = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, Xi;
}
var Yi, Zc;
function zb() {
  if (Zc) return Yi;
  Zc = 1;
  var e = us(), t = /* @__PURE__ */ Mt(), r;
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
  return Yi = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return o(s == null ? s : i(s));
    }
  ) : !1, Yi;
}
var Ji, el;
function Ff() {
  if (el) return Ji;
  el = 1;
  var e = zf(), t = Hf(), r = /* @__PURE__ */ zb();
  return Ji = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, Ji;
}
var Qi, tl;
function fs() {
  if (tl) return Qi;
  tl = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Tr();
  return Qi = r.call(e, t), Qi;
}
var Zi, rl;
function ut() {
  if (rl) return Zi;
  rl = 1;
  var e, t = /* @__PURE__ */ as(), r = /* @__PURE__ */ jf(), n = /* @__PURE__ */ Eb(), i = /* @__PURE__ */ Rb(), o = /* @__PURE__ */ Ib(), a = /* @__PURE__ */ ns(), s = /* @__PURE__ */ De(), c = /* @__PURE__ */ Ob(), l = /* @__PURE__ */ Pb(), d = /* @__PURE__ */ Nb(), f = /* @__PURE__ */ kb(), h = /* @__PURE__ */ Mb(), p = /* @__PURE__ */ Lb(), m = /* @__PURE__ */ $b(), y = /* @__PURE__ */ Db(), g = Function, x = function(te) {
    try {
      return g('"use strict"; return (' + te + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ Mt(), C = /* @__PURE__ */ Dn(), E = function() {
    throw new s();
  }, A = w ? function() {
    try {
      return arguments.callee, E;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return E;
      }
    }
  }() : E, k = ss()(), L = Ff(), M = Hf(), N = zf(), _ = ls(), T = cs(), S = {}, O = typeof Uint8Array > "u" || !L ? e : L(Uint8Array), D = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": k && L ? L([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": S,
    "%AsyncGenerator%": S,
    "%AsyncGeneratorFunction%": S,
    "%AsyncIteratorPrototype%": S,
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
    "%Function%": g,
    "%GeneratorFunction%": S,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": k && L ? L(L([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !k || !L ? e : L((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
    "%SetIteratorPrototype%": typeof Set > "u" || !k || !L ? e : L((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": k && L ? L(""[Symbol.iterator]()) : e,
    "%Symbol%": k ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": A,
    "%TypedArray%": O,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": T,
    "%Function.prototype.apply%": _,
    "%Object.defineProperty%": C,
    "%Object.getPrototypeOf%": M,
    "%Math.abs%": l,
    "%Math.floor%": d,
    "%Math.max%": f,
    "%Math.min%": h,
    "%Math.pow%": p,
    "%Math.round%": m,
    "%Math.sign%": y,
    "%Reflect.getPrototypeOf%": N
  };
  if (L)
    try {
      null.error;
    } catch (te) {
      var H = L(L(te));
      D["%Error.prototype%"] = H;
    }
  var j = function te(z) {
    var q;
    if (z === "%AsyncFunction%")
      q = x("async function () {}");
    else if (z === "%GeneratorFunction%")
      q = x("function* () {}");
    else if (z === "%AsyncGeneratorFunction%")
      q = x("async function* () {}");
    else if (z === "%AsyncGenerator%") {
      var B = te("%AsyncGeneratorFunction%");
      B && (q = B.prototype);
    } else if (z === "%AsyncIteratorPrototype%") {
      var V = te("%AsyncGenerator%");
      V && L && (q = L(V.prototype));
    }
    return D[z] = q, q;
  }, U = {
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
  }, ee = Tr(), re = /* @__PURE__ */ fs(), de = ee.call(T, Array.prototype.concat), pe = ee.call(_, Array.prototype.splice), we = ee.call(T, String.prototype.replace), Be = ee.call(T, String.prototype.slice), R = ee.call(T, RegExp.prototype.exec), $ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, W = /\\(\\)?/g, F = function(z) {
    var q = Be(z, 0, 1), B = Be(z, -1);
    if (q === "%" && B !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (B === "%" && q !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var V = [];
    return we(z, $, function(me, ye, xe, Se) {
      V[V.length] = xe ? we(Se, W, "$1") : ye || me;
    }), V;
  }, J = function(z, q) {
    var B = z, V;
    if (re(U, B) && (V = U[B], B = "%" + V[0] + "%"), re(D, B)) {
      var me = D[B];
      if (me === S && (me = j(B)), typeof me > "u" && !q)
        throw new s("intrinsic " + z + " exists, but is not available. Please file an issue!");
      return {
        alias: V,
        name: B,
        value: me
      };
    }
    throw new a("intrinsic " + z + " does not exist!");
  };
  return Zi = function(z, q) {
    if (typeof z != "string" || z.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof q != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (R(/^%?[^%]*%?$/, z) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var B = F(z), V = B.length > 0 ? B[0] : "", me = J("%" + V + "%", q), ye = me.name, xe = me.value, Se = !1, Ee = me.alias;
    Ee && (V = Ee[0], pe(B, de([0, 1], Ee)));
    for (var Ye = 1, je = !0; Ye < B.length; Ye += 1) {
      var Ie = B[Ye], Je = Be(Ie, 0, 1), Qe = Be(Ie, -1);
      if ((Je === '"' || Je === "'" || Je === "`" || Qe === '"' || Qe === "'" || Qe === "`") && Je !== Qe)
        throw new a("property names with quotes must have matching quotes");
      if ((Ie === "constructor" || !je) && (Se = !0), V += "." + Ie, ye = "%" + V + "%", re(D, ye))
        xe = D[ye];
      else if (xe != null) {
        if (!(Ie in xe)) {
          if (!q)
            throw new s("base intrinsic for " + z + " exists, but the property is not available.");
          return;
        }
        if (w && Ye + 1 >= B.length) {
          var Ze = w(xe, Ie);
          je = !!Ze, je && "get" in Ze && !("originalValue" in Ze.get) ? xe = Ze.get : xe = xe[Ie];
        } else
          je = re(xe, Ie), xe = xe[Ie];
        je && !Se && (D[ye] = xe);
      }
    }
    return xe;
  }, Zi;
}
var eo, nl;
function Hb() {
  if (nl) return eo;
  nl = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ is(), r = /* @__PURE__ */ os()(), n = /* @__PURE__ */ Mt(), i = /* @__PURE__ */ De(), o = e("%Math.floor%");
  return eo = function(s, c) {
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
  }, eo;
}
var to, il;
function qb() {
  if (il) return to;
  il = 1;
  var e = Tr(), t = ls(), r = qf();
  return to = function() {
    return r(e, t, arguments);
  }, to;
}
var ol;
function Yt() {
  return ol || (ol = 1, function(e) {
    var t = /* @__PURE__ */ Hb(), r = /* @__PURE__ */ Dn(), n = us(), i = qb();
    e.exports = function(a) {
      var s = n(arguments), c = a.length - (arguments.length - 1);
      return t(
        s,
        1 + (c > 0 ? c : 0),
        !0
      );
    }, r ? r(e.exports, "apply", { value: i }) : e.exports.apply = i;
  }(Ci)), Ci.exports;
}
var ro, al;
function Te() {
  if (al) return ro;
  al = 1;
  var e = /* @__PURE__ */ ut(), t = us(), r = t([e("%String.prototype.indexOf%")]);
  return ro = function(i, o) {
    var a = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(i, !!o)
    );
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t([a]) : a;
  }, ro;
}
var no, sl;
function Uf() {
  if (sl) return no;
  sl = 1;
  var e = rs(), t = Bn()(), r = /* @__PURE__ */ Te(), n = /* @__PURE__ */ as(), i = r("Array.prototype.push"), o = r("Object.prototype.propertyIsEnumerable"), a = t ? n.getOwnPropertySymbols : null;
  return no = function(c, l) {
    if (c == null)
      throw new TypeError("target must be an object");
    var d = n(c);
    if (arguments.length === 1)
      return d;
    for (var f = 1; f < arguments.length; ++f) {
      var h = n(arguments[f]), p = e(h), m = t && (n.getOwnPropertySymbols || a);
      if (m)
        for (var y = m(h), g = 0; g < y.length; ++g) {
          var x = y[g];
          o(h, x) && i(p, x);
        }
      for (var w = 0; w < p.length; ++w) {
        var C = p[w];
        if (o(h, C)) {
          var E = h[C];
          d[C] = E;
        }
      }
    }
    return d;
  }, no;
}
var io, cl;
function Wf() {
  if (cl) return io;
  cl = 1;
  var e = Uf(), t = function() {
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
  return io = function() {
    return !Object.assign || t() || r() ? e : Object.assign;
  }, io;
}
var oo, ll;
function Fb() {
  if (ll) return oo;
  ll = 1;
  var e = Lt(), t = Wf();
  return oo = function() {
    var n = t();
    return e(
      Object,
      { assign: n },
      { assign: function() {
        return Object.assign !== n;
      } }
    ), n;
  }, oo;
}
var ao, ul;
function Ub() {
  if (ul) return ao;
  ul = 1;
  var e = Lt(), t = Yt(), r = Uf(), n = Wf(), i = Fb(), o = t.apply(n()), a = function(c, l) {
    return o(Object, arguments);
  };
  return e(a, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), ao = a, ao;
}
var so, fl;
function Gf() {
  if (fl) return so;
  fl = 1;
  var e = /* @__PURE__ */ ut(), t = Yt(), r = t(e("String.prototype.indexOf"));
  return so = function(i, o) {
    var a = e(i, !!o);
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t(a) : a;
  }, so;
}
var co, dl;
function Wb() {
  if (dl) return co;
  dl = 1;
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
  }, co = e, co;
}
var lo, hl;
function Gb() {
  if (hl) return lo;
  hl = 1;
  var e = /* @__PURE__ */ is(), t = /* @__PURE__ */ os()(), r = Wb().functionsHaveConfigurableNames(), n = /* @__PURE__ */ De();
  return lo = function(o, a) {
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
  }, lo;
}
var uo, pl;
function Vf() {
  if (pl) return uo;
  pl = 1;
  var e = Gb(), t = /* @__PURE__ */ De(), r = Object;
  return uo = e(function() {
    if (this == null || this !== r(this))
      throw new t("RegExp.prototype.flags getter called on non-object");
    var i = "";
    return this.hasIndices && (i += "d"), this.global && (i += "g"), this.ignoreCase && (i += "i"), this.multiline && (i += "m"), this.dotAll && (i += "s"), this.unicode && (i += "u"), this.unicodeSets && (i += "v"), this.sticky && (i += "y"), i;
  }, "get flags", !0), uo;
}
var fo, ml;
function Kf() {
  if (ml) return fo;
  ml = 1;
  var e = Vf(), t = Lt().supportsDescriptors, r = Object.getOwnPropertyDescriptor;
  return fo = function() {
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
  }, fo;
}
var ho, gl;
function Vb() {
  if (gl) return ho;
  gl = 1;
  var e = Lt().supportsDescriptors, t = Kf(), r = /* @__PURE__ */ Mt(), n = Object.defineProperty, i = /* @__PURE__ */ jf(), o = Ff(), a = /a/;
  return ho = function() {
    if (!e || !o)
      throw new i("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
    var c = t(), l = o(a), d = r(l, "flags");
    return (!d || d.get !== c) && n(l, "flags", {
      configurable: !0,
      enumerable: !1,
      get: c
    }), c;
  }, ho;
}
var po, vl;
function Kb() {
  if (vl) return po;
  vl = 1;
  var e = Lt(), t = Yt(), r = Vf(), n = Kf(), i = Vb(), o = t(n());
  return e(o, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), po = o, po;
}
var nr = { exports: {} }, mo, yl;
function $t() {
  if (yl) return mo;
  yl = 1;
  var e = Bn();
  return mo = function() {
    return e() && !!Symbol.toStringTag;
  }, mo;
}
var go, xl;
function Xf() {
  if (xl) return go;
  xl = 1;
  var e = $t()(), t = /* @__PURE__ */ Te(), r = t("Object.prototype.toString"), n = function(s) {
    return e && s && typeof s == "object" && Symbol.toStringTag in s ? !1 : r(s) === "[object Arguments]";
  }, i = function(s) {
    return n(s) ? !0 : s !== null && typeof s == "object" && "length" in s && typeof s.length == "number" && s.length >= 0 && r(s) !== "[object Array]" && "callee" in s && r(s.callee) === "[object Function]";
  }, o = function() {
    return n(arguments);
  }();
  return n.isLegacyArguments = i, go = o ? n : i, go;
}
const Xb = {}, Yb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xb
}, Symbol.toStringTag, { value: "Module" })), Jb = /* @__PURE__ */ Ab(Yb);
var vo, bl;
function jn() {
  if (bl) return vo;
  bl = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, s = i && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, l = c ? WeakMap.prototype.has : null, d = typeof WeakSet == "function" && WeakSet.prototype, f = d ? WeakSet.prototype.has : null, h = typeof WeakRef == "function" && WeakRef.prototype, p = h ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, y = Object.prototype.toString, g = Function.prototype.toString, x = String.prototype.match, w = String.prototype.slice, C = String.prototype.replace, E = String.prototype.toUpperCase, A = String.prototype.toLowerCase, k = RegExp.prototype.test, L = Array.prototype.concat, M = Array.prototype.join, N = Array.prototype.slice, _ = Math.floor, T = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, S = Object.getOwnPropertySymbols, O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, D = typeof Symbol == "function" && typeof Symbol.iterator == "object", H = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === D || !0) ? Symbol.toStringTag : null, j = Object.prototype.propertyIsEnumerable, U = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(v) {
    return v.__proto__;
  } : null);
  function ee(v, b) {
    if (v === 1 / 0 || v === -1 / 0 || v !== v || v && v > -1e3 && v < 1e3 || k.call(/e/, b))
      return b;
    var ie = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof v == "number") {
      var ae = v < 0 ? -_(-v) : _(v);
      if (ae !== v) {
        var se = String(ae), Y = w.call(b, se.length + 1);
        return C.call(se, ie, "$&_") + "." + C.call(C.call(Y, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return C.call(b, ie, "$&_");
  }
  var re = Jb, de = re.custom, pe = me(de) ? de : null, we = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Be = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  vo = function v(b, ie, ae, se) {
    var Y = ie || {};
    if (Se(Y, "quoteStyle") && !Se(we, Y.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Se(Y, "maxStringLength") && (typeof Y.maxStringLength == "number" ? Y.maxStringLength < 0 && Y.maxStringLength !== 1 / 0 : Y.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var ht = Se(Y, "customInspect") ? Y.customInspect : !0;
    if (typeof ht != "boolean" && ht !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Se(Y, "indent") && Y.indent !== null && Y.indent !== "	" && !(parseInt(Y.indent, 10) === Y.indent && Y.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Se(Y, "numericSeparator") && typeof Y.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var At = Y.numericSeparator;
    if (typeof b > "u")
      return "undefined";
    if (b === null)
      return "null";
    if (typeof b == "boolean")
      return b ? "true" : "false";
    if (typeof b == "string")
      return _t(b, Y);
    if (typeof b == "number") {
      if (b === 0)
        return 1 / 0 / b > 0 ? "0" : "-0";
      var Ne = String(b);
      return At ? ee(b, Ne) : Ne;
    }
    if (typeof b == "bigint") {
      var pt = String(b) + "n";
      return At ? ee(b, pt) : pt;
    }
    var qn = typeof Y.depth > "u" ? 5 : Y.depth;
    if (typeof ae > "u" && (ae = 0), ae >= qn && qn > 0 && typeof b == "object")
      return F(b) ? "[Array]" : "[Object]";
    var Dt = fd(Y, ae);
    if (typeof se > "u")
      se = [];
    else if (je(se, b) >= 0)
      return "[Circular]";
    function ze(Bt, Or, hd) {
      if (Or && (se = N.call(se), se.push(Or)), hd) {
        var ws = {
          depth: Y.depth
        };
        return Se(Y, "quoteStyle") && (ws.quoteStyle = Y.quoteStyle), v(Bt, ws, ae + 1, se);
      }
      return v(Bt, Y, ae + 1, se);
    }
    if (typeof b == "function" && !te(b)) {
      var ps = Ye(b), ms = Rr(b, ze);
      return "[Function" + (ps ? ": " + ps : " (anonymous)") + "]" + (ms.length > 0 ? " { " + M.call(ms, ", ") + " }" : "");
    }
    if (me(b)) {
      var gs = D ? C.call(String(b), /^(Symbol\(.*\))_[^)]*$/, "$1") : O.call(b);
      return typeof b == "object" && !D ? dt(gs) : gs;
    }
    if (ft(b)) {
      for (var Qt = "<" + A.call(String(b.nodeName)), Fn = b.attributes || [], Ir = 0; Ir < Fn.length; Ir++)
        Qt += " " + Fn[Ir].name + "=" + R($(Fn[Ir].value), "double", Y);
      return Qt += ">", b.childNodes && b.childNodes.length && (Qt += "..."), Qt += "</" + A.call(String(b.nodeName)) + ">", Qt;
    }
    if (F(b)) {
      if (b.length === 0)
        return "[]";
      var Un = Rr(b, ze);
      return Dt && !ud(Un) ? "[" + Hn(Un, Dt) + "]" : "[ " + M.call(Un, ", ") + " ]";
    }
    if (z(b)) {
      var Wn = Rr(b, ze);
      return !("cause" in Error.prototype) && "cause" in b && !j.call(b, "cause") ? "{ [" + String(b) + "] " + M.call(L.call("[cause]: " + ze(b.cause), Wn), ", ") + " }" : Wn.length === 0 ? "[" + String(b) + "]" : "{ [" + String(b) + "] " + M.call(Wn, ", ") + " }";
    }
    if (typeof b == "object" && ht) {
      if (pe && typeof b[pe] == "function" && re)
        return re(b, { depth: qn - ae });
      if (ht !== "symbol" && typeof b.inspect == "function")
        return b.inspect();
    }
    if (Ie(b)) {
      var vs = [];
      return n && n.call(b, function(Bt, Or) {
        vs.push(ze(Or, b, !0) + " => " + ze(Bt, b));
      }), hs("Map", r.call(b), vs, Dt);
    }
    if (Ze(b)) {
      var ys = [];
      return s && s.call(b, function(Bt) {
        ys.push(ze(Bt, b));
      }), hs("Set", a.call(b), ys, Dt);
    }
    if (Je(b))
      return zn("WeakMap");
    if (Er(b))
      return zn("WeakSet");
    if (Qe(b))
      return zn("WeakRef");
    if (B(b))
      return dt(ze(Number(b)));
    if (ye(b))
      return dt(ze(T.call(b)));
    if (V(b))
      return dt(m.call(b));
    if (q(b))
      return dt(ze(String(b)));
    if (typeof window < "u" && b === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && b === globalThis || typeof Tn < "u" && b === Tn)
      return "{ [object globalThis] }";
    if (!J(b) && !te(b)) {
      var Gn = Rr(b, ze), xs = U ? U(b) === Object.prototype : b instanceof Object || b.constructor === Object, Vn = b instanceof Object ? "" : "null prototype", bs = !xs && H && Object(b) === b && H in b ? w.call(Ee(b), 8, -1) : Vn ? "Object" : "", dd = xs || typeof b.constructor != "function" ? "" : b.constructor.name ? b.constructor.name + " " : "", Kn = dd + (bs || Vn ? "[" + M.call(L.call([], bs || [], Vn || []), ": ") + "] " : "");
      return Gn.length === 0 ? Kn + "{}" : Dt ? Kn + "{" + Hn(Gn, Dt) + "}" : Kn + "{ " + M.call(Gn, ", ") + " }";
    }
    return String(b);
  };
  function R(v, b, ie) {
    var ae = ie.quoteStyle || b, se = we[ae];
    return se + v + se;
  }
  function $(v) {
    return C.call(String(v), /"/g, "&quot;");
  }
  function W(v) {
    return !H || !(typeof v == "object" && (H in v || typeof v[H] < "u"));
  }
  function F(v) {
    return Ee(v) === "[object Array]" && W(v);
  }
  function J(v) {
    return Ee(v) === "[object Date]" && W(v);
  }
  function te(v) {
    return Ee(v) === "[object RegExp]" && W(v);
  }
  function z(v) {
    return Ee(v) === "[object Error]" && W(v);
  }
  function q(v) {
    return Ee(v) === "[object String]" && W(v);
  }
  function B(v) {
    return Ee(v) === "[object Number]" && W(v);
  }
  function V(v) {
    return Ee(v) === "[object Boolean]" && W(v);
  }
  function me(v) {
    if (D)
      return v && typeof v == "object" && v instanceof Symbol;
    if (typeof v == "symbol")
      return !0;
    if (!v || typeof v != "object" || !O)
      return !1;
    try {
      return O.call(v), !0;
    } catch {
    }
    return !1;
  }
  function ye(v) {
    if (!v || typeof v != "object" || !T)
      return !1;
    try {
      return T.call(v), !0;
    } catch {
    }
    return !1;
  }
  var xe = Object.prototype.hasOwnProperty || function(v) {
    return v in this;
  };
  function Se(v, b) {
    return xe.call(v, b);
  }
  function Ee(v) {
    return y.call(v);
  }
  function Ye(v) {
    if (v.name)
      return v.name;
    var b = x.call(g.call(v), /^function\s*([\w$]+)/);
    return b ? b[1] : null;
  }
  function je(v, b) {
    if (v.indexOf)
      return v.indexOf(b);
    for (var ie = 0, ae = v.length; ie < ae; ie++)
      if (v[ie] === b)
        return ie;
    return -1;
  }
  function Ie(v) {
    if (!r || !v || typeof v != "object")
      return !1;
    try {
      r.call(v);
      try {
        a.call(v);
      } catch {
        return !0;
      }
      return v instanceof Map;
    } catch {
    }
    return !1;
  }
  function Je(v) {
    if (!l || !v || typeof v != "object")
      return !1;
    try {
      l.call(v, l);
      try {
        f.call(v, f);
      } catch {
        return !0;
      }
      return v instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Qe(v) {
    if (!p || !v || typeof v != "object")
      return !1;
    try {
      return p.call(v), !0;
    } catch {
    }
    return !1;
  }
  function Ze(v) {
    if (!a || !v || typeof v != "object")
      return !1;
    try {
      a.call(v);
      try {
        r.call(v);
      } catch {
        return !0;
      }
      return v instanceof Set;
    } catch {
    }
    return !1;
  }
  function Er(v) {
    if (!f || !v || typeof v != "object")
      return !1;
    try {
      f.call(v, f);
      try {
        l.call(v, l);
      } catch {
        return !0;
      }
      return v instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function ft(v) {
    return !v || typeof v != "object" ? !1 : typeof HTMLElement < "u" && v instanceof HTMLElement ? !0 : typeof v.nodeName == "string" && typeof v.getAttribute == "function";
  }
  function _t(v, b) {
    if (v.length > b.maxStringLength) {
      var ie = v.length - b.maxStringLength, ae = "... " + ie + " more character" + (ie > 1 ? "s" : "");
      return _t(w.call(v, 0, b.maxStringLength), b) + ae;
    }
    var se = Be[b.quoteStyle || "single"];
    se.lastIndex = 0;
    var Y = C.call(C.call(v, se, "\\$1"), /[\x00-\x1f]/g, Jt);
    return R(Y, "single", b);
  }
  function Jt(v) {
    var b = v.charCodeAt(0), ie = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[b];
    return ie ? "\\" + ie : "\\x" + (b < 16 ? "0" : "") + E.call(b.toString(16));
  }
  function dt(v) {
    return "Object(" + v + ")";
  }
  function zn(v) {
    return v + " { ? }";
  }
  function hs(v, b, ie, ae) {
    var se = ae ? Hn(ie, ae) : M.call(ie, ", ");
    return v + " (" + b + ") {" + se + "}";
  }
  function ud(v) {
    for (var b = 0; b < v.length; b++)
      if (je(v[b], `
`) >= 0)
        return !1;
    return !0;
  }
  function fd(v, b) {
    var ie;
    if (v.indent === "	")
      ie = "	";
    else if (typeof v.indent == "number" && v.indent > 0)
      ie = M.call(Array(v.indent + 1), " ");
    else
      return null;
    return {
      base: ie,
      prev: M.call(Array(b + 1), ie)
    };
  }
  function Hn(v, b) {
    if (v.length === 0)
      return "";
    var ie = `
` + b.prev + b.base;
    return ie + M.call(v, "," + ie) + `
` + b.prev;
  }
  function Rr(v, b) {
    var ie = F(v), ae = [];
    if (ie) {
      ae.length = v.length;
      for (var se = 0; se < v.length; se++)
        ae[se] = Se(v, se) ? b(v[se], v) : "";
    }
    var Y = typeof S == "function" ? S(v) : [], ht;
    if (D) {
      ht = {};
      for (var At = 0; At < Y.length; At++)
        ht["$" + Y[At]] = Y[At];
    }
    for (var Ne in v)
      Se(v, Ne) && (ie && String(Number(Ne)) === Ne && Ne < v.length || D && ht["$" + Ne] instanceof Symbol || (k.call(/[^\w$]/, Ne) ? ae.push(b(Ne, v) + ": " + b(v[Ne], v)) : ae.push(Ne + ": " + b(v[Ne], v))));
    if (typeof S == "function")
      for (var pt = 0; pt < Y.length; pt++)
        j.call(v, Y[pt]) && ae.push("[" + b(Y[pt]) + "]: " + b(v[Y[pt]], v));
    return ae;
  }
  return vo;
}
var yo, wl;
function Qb() {
  if (wl) return yo;
  wl = 1;
  var e = /* @__PURE__ */ jn(), t = /* @__PURE__ */ De(), r = function(s, c, l) {
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
  return yo = function() {
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
  }, yo;
}
var xo, Sl;
function Yf() {
  if (Sl) return xo;
  Sl = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ Te(), r = /* @__PURE__ */ jn(), n = /* @__PURE__ */ De(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return xo = !!i && /** @type {Exclude<import('.'), false>} */
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
  }, xo;
}
var bo, Al;
function Zb() {
  if (Al) return bo;
  Al = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ Te(), r = /* @__PURE__ */ jn(), n = Yf(), i = /* @__PURE__ */ De(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return bo = o ? (
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
        set: function(m, y) {
          o && m && (typeof m == "object" || typeof m == "function") ? (f || (f = new o()), s(f, m, y)) : n && (h || (h = n()), h.set(m, y));
        }
      };
      return p;
    }
  ) : n, bo;
}
var wo, Cl;
function Jf() {
  if (Cl) return wo;
  Cl = 1;
  var e = /* @__PURE__ */ De(), t = /* @__PURE__ */ jn(), r = Qb(), n = Yf(), i = Zb(), o = i || n || r;
  return wo = function() {
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
  }, wo;
}
var So, Tl;
function e2() {
  if (Tl) return So;
  Tl = 1;
  var e = /* @__PURE__ */ fs(), t = Jf()(), r = /* @__PURE__ */ De(), n = {
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
  return Object.freeze && Object.freeze(n), So = n, So;
}
var Ao, El;
function t2() {
  if (El) return Ao;
  El = 1;
  var e = e2(), t = /* @__PURE__ */ ns(), r = typeof StopIteration == "object" ? StopIteration : null;
  return Ao = function(i) {
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
  }, Ao;
}
var Co, Rl;
function Qf() {
  if (Rl) return Co;
  Rl = 1;
  var e = {}.toString;
  return Co = Array.isArray || function(t) {
    return e.call(t) == "[object Array]";
  }, Co;
}
var To, Il;
function Zf() {
  if (Il) return To;
  Il = 1;
  var e = /* @__PURE__ */ Te(), t = e("String.prototype.valueOf"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object String]", o = $t()();
  return To = function(s) {
    return typeof s == "string" ? !0 : !s || typeof s != "object" ? !1 : o ? r(s) : n(s) === i;
  }, To;
}
var Eo, Ol;
function ed() {
  if (Ol) return Eo;
  Ol = 1;
  var e = typeof Map == "function" && Map.prototype ? Map : null, t = typeof Set == "function" && Set.prototype ? Set : null, r;
  e || (r = function(a) {
    return !1;
  });
  var n = e ? Map.prototype.has : null, i = t ? Set.prototype.has : null;
  return !r && !n && (r = function(a) {
    return !1;
  }), Eo = r || function(a) {
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
  }, Eo;
}
var Ro, Pl;
function td() {
  if (Pl) return Ro;
  Pl = 1;
  var e = typeof Map == "function" && Map.prototype ? Map : null, t = typeof Set == "function" && Set.prototype ? Set : null, r;
  t || (r = function(a) {
    return !1;
  });
  var n = e ? Map.prototype.has : null, i = t ? Set.prototype.has : null;
  return !r && !i && (r = function(a) {
    return !1;
  }), Ro = r || function(a) {
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
  }, Ro;
}
var Nl;
function r2() {
  if (Nl) return nr.exports;
  Nl = 1;
  var e = /* @__PURE__ */ Xf(), t = /* @__PURE__ */ t2();
  if (ss()() || Bn()()) {
    var r = Symbol.iterator;
    nr.exports = function(N) {
      if (N != null && typeof N[r] < "u")
        return N[r]();
      if (e(N))
        return Array.prototype[r].call(N);
    };
  } else {
    var n = Qf(), i = Zf(), o = /* @__PURE__ */ ut(), a = o("%Map%", !0), s = o("%Set%", !0), c = Gf(), l = c("Array.prototype.push"), d = c("String.prototype.charCodeAt"), f = c("String.prototype.slice"), h = function(N, _) {
      var T = N.length;
      if (_ + 1 >= T)
        return _ + 1;
      var S = d(N, _);
      if (S < 55296 || S > 56319)
        return _ + 1;
      var O = d(N, _ + 1);
      return O < 56320 || O > 57343 ? _ + 1 : _ + 2;
    }, p = function(N) {
      var _ = 0;
      return {
        next: function() {
          var S = _ >= N.length, O;
          return S || (O = N[_], _ += 1), {
            done: S,
            value: O
          };
        }
      };
    }, m = function(N, _) {
      if (n(N) || e(N))
        return p(N);
      if (i(N)) {
        var T = 0;
        return {
          next: function() {
            var O = h(N, T), D = f(N, T, O);
            return T = O, {
              done: O > N.length,
              value: D
            };
          }
        };
      }
      if (_ && typeof N["_es6-shim iterator_"] < "u")
        return N["_es6-shim iterator_"]();
    };
    if (!a && !s)
      nr.exports = function(N) {
        if (N != null)
          return m(N, !0);
      };
    else {
      var y = /* @__PURE__ */ ed(), g = /* @__PURE__ */ td(), x = c("Map.prototype.forEach", !0), w = c("Set.prototype.forEach", !0);
      if (typeof process > "u" || !process.versions || !process.versions.node)
        var C = c("Map.prototype.iterator", !0), E = c("Set.prototype.iterator", !0);
      var A = c("Map.prototype.@@iterator", !0) || c("Map.prototype._es6-shim iterator_", !0), k = c("Set.prototype.@@iterator", !0) || c("Set.prototype._es6-shim iterator_", !0), L = function(N) {
        if (y(N)) {
          if (C)
            return t(C(N));
          if (A)
            return A(N);
          if (x) {
            var _ = [];
            return x(N, function(S, O) {
              l(_, [O, S]);
            }), p(_);
          }
        }
        if (g(N)) {
          if (E)
            return t(E(N));
          if (k)
            return k(N);
          if (w) {
            var T = [];
            return w(N, function(S) {
              l(T, S);
            }), p(T);
          }
        }
      };
      nr.exports = function(N) {
        return L(N) || m(N);
      };
    }
  }
  return nr.exports;
}
var Io, kl;
function rd() {
  if (kl) return Io;
  kl = 1;
  var e = function(t) {
    return t !== t;
  };
  return Io = function(r, n) {
    return r === 0 && n === 0 ? 1 / r === 1 / n : !!(r === n || e(r) && e(n));
  }, Io;
}
var Oo, Ml;
function nd() {
  if (Ml) return Oo;
  Ml = 1;
  var e = rd();
  return Oo = function() {
    return typeof Object.is == "function" ? Object.is : e;
  }, Oo;
}
var Po, Ll;
function n2() {
  if (Ll) return Po;
  Ll = 1;
  var e = nd(), t = Lt();
  return Po = function() {
    var n = e();
    return t(Object, { is: n }, {
      is: function() {
        return Object.is !== n;
      }
    }), n;
  }, Po;
}
var No, $l;
function i2() {
  if ($l) return No;
  $l = 1;
  var e = Lt(), t = Yt(), r = rd(), n = nd(), i = n2(), o = t(n(), Object);
  return e(o, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), No = o, No;
}
var ko, _l;
function id() {
  if (_l) return ko;
  _l = 1;
  var e = Yt(), t = /* @__PURE__ */ Te(), r = /* @__PURE__ */ ut(), n = r("%ArrayBuffer%", !0), i = t("ArrayBuffer.prototype.byteLength", !0), o = t("Object.prototype.toString"), a = !!n && !i && new n(0).slice, s = !!a && e(a);
  return ko = i || s ? function(l) {
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
  }, ko;
}
var Mo, Dl;
function o2() {
  if (Dl) return Mo;
  Dl = 1;
  var e = /* @__PURE__ */ Te(), t = e("Date.prototype.getDay"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object Date]", o = $t()();
  return Mo = function(s) {
    return typeof s != "object" || s === null ? !1 : o ? r(s) : n(s) === i;
  }, Mo;
}
var Lo, Bl;
function od() {
  if (Bl) return Lo;
  Bl = 1;
  var e = /* @__PURE__ */ Te(), t = $t()(), r = /* @__PURE__ */ fs(), n = /* @__PURE__ */ Mt(), i;
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
      } catch (y) {
        return y === a;
      }
    };
  } else {
    var l = e("Object.prototype.toString"), d = "[object RegExp]";
    i = function(h) {
      return !h || typeof h != "object" && typeof h != "function" ? !1 : l(h) === d;
    };
  }
  return Lo = i, Lo;
}
var $o, jl;
function a2() {
  if (jl) return $o;
  jl = 1;
  var e = /* @__PURE__ */ Te(), t = e("SharedArrayBuffer.prototype.byteLength", !0);
  return $o = t ? function(n) {
    if (!n || typeof n != "object")
      return !1;
    try {
      return t(n), !0;
    } catch {
      return !1;
    }
  } : function(n) {
    return !1;
  }, $o;
}
var _o, zl;
function s2() {
  if (zl) return _o;
  zl = 1;
  var e = /* @__PURE__ */ Te(), t = e("Number.prototype.toString"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object Number]", o = $t()();
  return _o = function(s) {
    return typeof s == "number" ? !0 : !s || typeof s != "object" ? !1 : o ? r(s) : n(s) === i;
  }, _o;
}
var Do, Hl;
function c2() {
  if (Hl) return Do;
  Hl = 1;
  var e = /* @__PURE__ */ Te(), t = e("Boolean.prototype.toString"), r = e("Object.prototype.toString"), n = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, i = "[object Boolean]", o = $t()();
  return Do = function(s) {
    return typeof s == "boolean" ? !0 : s === null || typeof s != "object" ? !1 : o ? n(s) : r(s) === i;
  }, Do;
}
var Br = { exports: {} }, Bo, ql;
function l2() {
  if (ql) return Bo;
  ql = 1;
  var e = /* @__PURE__ */ Te(), t = od(), r = e("RegExp.prototype.exec"), n = /* @__PURE__ */ De();
  return Bo = function(o) {
    if (!t(o))
      throw new n("`regex` must be a RegExp");
    return function(s) {
      return r(o, s) !== null;
    };
  }, Bo;
}
var Fl;
function u2() {
  if (Fl) return Br.exports;
  Fl = 1;
  var e = /* @__PURE__ */ Te(), t = e("Object.prototype.toString"), r = ss()(), n = /* @__PURE__ */ l2();
  if (r) {
    var i = e("Symbol.prototype.toString"), o = n(/^Symbol\(.*\)$/), a = function(c) {
      return typeof c.valueOf() != "symbol" ? !1 : o(i(c));
    };
    Br.exports = function(c) {
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
    Br.exports = function(c) {
      return !1;
    };
  return Br.exports;
}
var jr = { exports: {} }, jo, Ul;
function f2() {
  if (Ul) return jo;
  Ul = 1;
  var e = typeof BigInt < "u" && BigInt;
  return jo = function() {
    return typeof e == "function" && typeof BigInt == "function" && typeof e(42) == "bigint" && typeof BigInt(42) == "bigint";
  }, jo;
}
var Wl;
function d2() {
  if (Wl) return jr.exports;
  Wl = 1;
  var e = f2()();
  if (e) {
    var t = BigInt.prototype.valueOf, r = function(i) {
      try {
        return t.call(i), !0;
      } catch {
      }
      return !1;
    };
    jr.exports = function(i) {
      return i === null || typeof i > "u" || typeof i == "boolean" || typeof i == "string" || typeof i == "number" || typeof i == "symbol" || typeof i == "function" ? !1 : typeof i == "bigint" ? !0 : r(i);
    };
  } else
    jr.exports = function(i) {
      return !1;
    };
  return jr.exports;
}
var zo, Gl;
function h2() {
  if (Gl) return zo;
  Gl = 1;
  var e = Zf(), t = s2(), r = c2(), n = u2(), i = d2();
  return zo = function(a) {
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
  }, zo;
}
var Ho, Vl;
function p2() {
  if (Vl) return Ho;
  Vl = 1;
  var e = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, t = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, r;
  e || (r = function(a) {
    return !1;
  });
  var n = e ? e.prototype.has : null, i = t ? t.prototype.has : null;
  return !r && !n && (r = function(a) {
    return !1;
  }), Ho = r || function(a) {
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
  }, Ho;
}
var zr = { exports: {} }, Kl;
function m2() {
  if (Kl) return zr.exports;
  Kl = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ Te(), r = e("%WeakSet%", !0), n = t("WeakSet.prototype.has", !0);
  if (n) {
    var i = t("WeakMap.prototype.has", !0);
    zr.exports = function(a) {
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
    zr.exports = function(a) {
      return !1;
    };
  return zr.exports;
}
var qo, Xl;
function g2() {
  if (Xl) return qo;
  Xl = 1;
  var e = /* @__PURE__ */ ed(), t = /* @__PURE__ */ td(), r = p2(), n = /* @__PURE__ */ m2();
  return qo = function(o) {
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
  }, qo;
}
var Fo, Yl;
function v2() {
  if (Yl) return Fo;
  Yl = 1;
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
  var i = /^\s*class\b/, o = function(C) {
    try {
      var E = e.call(C);
      return i.test(E);
    } catch {
      return !1;
    }
  }, a = function(C) {
    try {
      return o(C) ? !1 : (e.call(C), !0);
    } catch {
      return !1;
    }
  }, s = Object.prototype.toString, c = "[object Object]", l = "[object Function]", d = "[object GeneratorFunction]", f = "[object HTMLAllCollection]", h = "[object HTML document.all class]", p = "[object HTMLCollection]", m = typeof Symbol == "function" && !!Symbol.toStringTag, y = !(0 in [,]), g = function() {
    return !1;
  };
  if (typeof document == "object") {
    var x = document.all;
    s.call(x) === s.call(document.all) && (g = function(C) {
      if ((y || !C) && (typeof C > "u" || typeof C == "object"))
        try {
          var E = s.call(C);
          return (E === f || E === h || E === p || E === c) && C("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Fo = t ? function(C) {
    if (g(C))
      return !0;
    if (!C || typeof C != "function" && typeof C != "object")
      return !1;
    try {
      t(C, null, r);
    } catch (E) {
      if (E !== n)
        return !1;
    }
    return !o(C) && a(C);
  } : function(C) {
    if (g(C))
      return !0;
    if (!C || typeof C != "function" && typeof C != "object")
      return !1;
    if (m)
      return a(C);
    if (o(C))
      return !1;
    var E = s.call(C);
    return E !== l && E !== d && !/^\[object HTML/.test(E) ? !1 : a(C);
  }, Fo;
}
var Uo, Jl;
function y2() {
  if (Jl) return Uo;
  Jl = 1;
  var e = v2(), t = Object.prototype.toString, r = Object.prototype.hasOwnProperty, n = function(c, l, d) {
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
  return Uo = function(c, l, d) {
    if (!e(l))
      throw new TypeError("iterator must be a function");
    var f;
    arguments.length >= 3 && (f = d), a(c) ? n(c, l, f) : typeof c == "string" ? i(c, l, f) : o(c, l, f);
  }, Uo;
}
var Wo, Ql;
function x2() {
  return Ql || (Ql = 1, Wo = [
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
  ]), Wo;
}
var Go, Zl;
function b2() {
  if (Zl) return Go;
  Zl = 1;
  var e = /* @__PURE__ */ x2(), t = typeof globalThis > "u" ? Tn : globalThis;
  return Go = function() {
    for (var n = [], i = 0; i < e.length; i++)
      typeof t[e[i]] == "function" && (n[n.length] = e[i]);
    return n;
  }, Go;
}
var Vo, eu;
function w2() {
  if (eu) return Vo;
  eu = 1;
  var e = y2(), t = /* @__PURE__ */ b2(), r = Yt(), n = /* @__PURE__ */ Te(), i = /* @__PURE__ */ Mt(), o = n("Object.prototype.toString"), a = $t()(), s = typeof globalThis > "u" ? Tn : globalThis, c = t(), l = n("String.prototype.slice"), d = Object.getPrototypeOf, f = n("Array.prototype.indexOf", !0) || function(g, x) {
    for (var w = 0; w < g.length; w += 1)
      if (g[w] === x)
        return w;
    return -1;
  }, h = { __proto__: null };
  a && i && d ? e(c, function(y) {
    var g = new s[y]();
    if (Symbol.toStringTag in g) {
      var x = d(g), w = i(x, Symbol.toStringTag);
      if (!w) {
        var C = d(x);
        w = i(C, Symbol.toStringTag);
      }
      h["$" + y] = r(w.get);
    }
  }) : e(c, function(y) {
    var g = new s[y](), x = g.slice || g.set;
    x && (h["$" + y] = r(x));
  });
  var p = function(g) {
    var x = !1;
    return e(
      // eslint-disable-next-line no-extra-parens
      /** @type {Record<`\$${TypedArrayName}`, Getter>} */
      /** @type {any} */
      h,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, C) {
        if (!x)
          try {
            "$" + w(g) === C && (x = l(C, 1));
          } catch {
          }
      }
    ), x;
  }, m = function(g) {
    var x = !1;
    return e(
      // eslint-disable-next-line no-extra-parens
      /** @type {Record<`\$${TypedArrayName}`, Getter>} */
      /** @type {any} */
      h,
      /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, C) {
        if (!x)
          try {
            w(g), x = l(C, 1);
          } catch {
          }
      }
    ), x;
  };
  return Vo = function(g) {
    if (!g || typeof g != "object")
      return !1;
    if (!a) {
      var x = l(o(g), 8, -1);
      return f(c, x) > -1 ? x : x !== "Object" ? !1 : m(g);
    }
    return i ? p(g) : null;
  }, Vo;
}
var Ko, tu;
function S2() {
  if (tu) return Ko;
  tu = 1;
  var e = /* @__PURE__ */ Te(), t = e("ArrayBuffer.prototype.byteLength", !0), r = /* @__PURE__ */ id();
  return Ko = function(i) {
    return r(i) ? t ? t(i) : i.byteLength : NaN;
  }, Ko;
}
var Xo, ru;
function A2() {
  if (ru) return Xo;
  ru = 1;
  var e = Ub(), t = Gf(), r = Kb(), n = /* @__PURE__ */ ut(), i = r2(), o = Jf(), a = i2(), s = /* @__PURE__ */ Xf(), c = Qf(), l = /* @__PURE__ */ id(), d = /* @__PURE__ */ o2(), f = od(), h = /* @__PURE__ */ a2(), p = rs(), m = h2(), y = /* @__PURE__ */ g2(), g = /* @__PURE__ */ w2(), x = /* @__PURE__ */ S2(), w = t("SharedArrayBuffer.prototype.byteLength", !0), C = t("Date.prototype.getTime"), E = Object.getPrototypeOf, A = t("Object.prototype.toString"), k = n("%Set%", !0), L = t("Map.prototype.has", !0), M = t("Map.prototype.get", !0), N = t("Map.prototype.size", !0), _ = t("Set.prototype.add", !0), T = t("Set.prototype.delete", !0), S = t("Set.prototype.has", !0), O = t("Set.prototype.size", !0);
  function D(R, $, W, F) {
    for (var J = i(R), te; (te = J.next()) && !te.done; )
      if (re($, te.value, W, F))
        return T(R, te.value), !0;
    return !1;
  }
  function H(R) {
    if (typeof R > "u")
      return null;
    if (typeof R != "object")
      return typeof R == "symbol" ? !1 : typeof R == "string" || typeof R == "number" ? +R == +R : !0;
  }
  function j(R, $, W, F, J, te) {
    var z = H(W);
    if (z != null)
      return z;
    var q = M($, z), B = e({}, J, { strict: !1 });
    return typeof q > "u" && !L($, z) || !re(F, q, B, te) ? !1 : !L(R, z) && re(F, q, B, te);
  }
  function U(R, $, W) {
    var F = H(W);
    return F ?? (S($, F) && !S(R, F));
  }
  function ee(R, $, W, F, J, te) {
    for (var z = i(R), q, B; (q = z.next()) && !q.done; )
      if (B = q.value, // eslint-disable-next-line no-use-before-define
      re(W, B, J, te) && re(F, M($, B), J, te))
        return T(R, B), !0;
    return !1;
  }
  function re(R, $, W, F) {
    var J = W || {};
    if (J.strict ? a(R, $) : R === $)
      return !0;
    var te = m(R), z = m($);
    if (te !== z)
      return !1;
    if (!R || !$ || typeof R != "object" && typeof $ != "object")
      return J.strict ? a(R, $) : R == $;
    var q = F.has(R), B = F.has($), V;
    if (q && B) {
      if (F.get(R) === F.get($))
        return !0;
    } else
      V = {};
    return q || F.set(R, V), B || F.set($, V), Be(R, $, J, F);
  }
  function de(R) {
    return !R || typeof R != "object" || typeof R.length != "number" || typeof R.copy != "function" || typeof R.slice != "function" || R.length > 0 && typeof R[0] != "number" ? !1 : !!(R.constructor && R.constructor.isBuffer && R.constructor.isBuffer(R));
  }
  function pe(R, $, W, F) {
    if (O(R) !== O($))
      return !1;
    for (var J = i(R), te = i($), z, q, B; (z = J.next()) && !z.done; )
      if (z.value && typeof z.value == "object")
        B || (B = new k()), _(B, z.value);
      else if (!S($, z.value)) {
        if (W.strict || !U(R, $, z.value))
          return !1;
        B || (B = new k()), _(B, z.value);
      }
    if (B) {
      for (; (q = te.next()) && !q.done; )
        if (q.value && typeof q.value == "object") {
          if (!D(B, q.value, W.strict, F))
            return !1;
        } else if (!W.strict && !S(R, q.value) && !D(B, q.value, W.strict, F))
          return !1;
      return O(B) === 0;
    }
    return !0;
  }
  function we(R, $, W, F) {
    if (N(R) !== N($))
      return !1;
    for (var J = i(R), te = i($), z, q, B, V, me, ye; (z = J.next()) && !z.done; )
      if (V = z.value[0], me = z.value[1], V && typeof V == "object")
        B || (B = new k()), _(B, V);
      else if (ye = M($, V), typeof ye > "u" && !L($, V) || !re(me, ye, W, F)) {
        if (W.strict || !j(R, $, V, me, W, F))
          return !1;
        B || (B = new k()), _(B, V);
      }
    if (B) {
      for (; (q = te.next()) && !q.done; )
        if (V = q.value[0], ye = q.value[1], V && typeof V == "object") {
          if (!ee(B, R, V, ye, W, F))
            return !1;
        } else if (!W.strict && (!R.has(V) || !re(M(R, V), ye, W, F)) && !ee(B, R, V, ye, e({}, W, { strict: !1 }), F))
          return !1;
      return O(B) === 0;
    }
    return !0;
  }
  function Be(R, $, W, F) {
    var J, te;
    if (typeof R != typeof $ || R == null || $ == null || A(R) !== A($) || s(R) !== s($))
      return !1;
    var z = c(R), q = c($);
    if (z !== q)
      return !1;
    var B = R instanceof Error, V = $ instanceof Error;
    if (B !== V || (B || V) && (R.name !== $.name || R.message !== $.message))
      return !1;
    var me = f(R), ye = f($);
    if (me !== ye || (me || ye) && (R.source !== $.source || r(R) !== r($)))
      return !1;
    var xe = d(R), Se = d($);
    if (xe !== Se || (xe || Se) && C(R) !== C($) || W.strict && E && E(R) !== E($))
      return !1;
    var Ee = g(R), Ye = g($);
    if (Ee !== Ye)
      return !1;
    if (Ee || Ye) {
      if (R.length !== $.length)
        return !1;
      for (J = 0; J < R.length; J++)
        if (R[J] !== $[J])
          return !1;
      return !0;
    }
    var je = de(R), Ie = de($);
    if (je !== Ie)
      return !1;
    if (je || Ie) {
      if (R.length !== $.length)
        return !1;
      for (J = 0; J < R.length; J++)
        if (R[J] !== $[J])
          return !1;
      return !0;
    }
    var Je = l(R), Qe = l($);
    if (Je !== Qe)
      return !1;
    if (Je || Qe)
      return x(R) !== x($) ? !1 : typeof Uint8Array == "function" && re(new Uint8Array(R), new Uint8Array($), W, F);
    var Ze = h(R), Er = h($);
    if (Ze !== Er)
      return !1;
    if (Ze || Er)
      return w(R) !== w($) ? !1 : typeof Uint8Array == "function" && re(new Uint8Array(R), new Uint8Array($), W, F);
    if (typeof R != typeof $)
      return !1;
    var ft = p(R), _t = p($);
    if (ft.length !== _t.length)
      return !1;
    for (ft.sort(), _t.sort(), J = ft.length - 1; J >= 0; J--)
      if (ft[J] != _t[J])
        return !1;
    for (J = ft.length - 1; J >= 0; J--)
      if (te = ft[J], !re(R[te], $[te], W, F))
        return !1;
    var Jt = y(R), dt = y($);
    return Jt !== dt ? !1 : Jt === "Set" || dt === "Set" ? pe(R, $, W, F) : Jt === "Map" ? we(R, $, W, F) : !0;
  }
  return Xo = function($, W, F) {
    return re($, W, F, o());
  }, Xo;
}
var C2 = A2();
const T2 = /* @__PURE__ */ Sb(C2);
function E2(e) {
  return e;
}
function R2(e, t, r, n) {
  const i = E2, [o, a] = Z(i(r)), s = Ge(o);
  return ve(() => {
    const c = () => {
      const l = { ...r, ...e.getAttributes(t) };
      Object.keys(l).forEach((f) => {
        (l[f] === null || l[f] === void 0) && (l[f] = r ? r[f] : null);
      });
      const d = i(l);
      T2(s.current, d) || (a(d), s.current = d);
    };
    return e.on("selectionUpdate", c), e.on("transaction", c), () => {
      e.off("selectionUpdate", c), e.off("transaction", c);
    };
  }, [e, r, t, i]), o;
}
function I2({ editor: e }) {
  const { t } = Ce(), { width: r, height: n, src: i } = R2(e, zt.name, {
    width: 0,
    height: 0,
    src: "",
    defaultShowPicker: !1
  }), [o, a] = Z(!1), [s, c] = Z(""), l = oe(() => {
    a(!1);
  }, [a]);
  ve(() => {
    o && c(i);
  }, [o, i]);
  const d = oe(() => {
    const g = Df(s);
    e.chain().updateAttributes(zt.name, {
      src: (g == null ? void 0 : g.src) || s
    }).setNodeSelection(e.state.selection.from).focus().run(), a(!1);
  }, [e, s, a]), f = oe(() => {
    window.open(i, "_blank");
  }, [i]), h = oe(() => {
    a(!0);
  }, [a]), p = oe(
    (g) => {
      e.chain().updateAttributes(zt.name, g).setNodeSelection(e.state.selection.from).focus().run();
    },
    [e]
  ), m = oe(() => e.isActive(zt.name) && !i, [e, i]), y = oe(() => Af(zt.name, e), [e]);
  return /* @__PURE__ */ P(be, { children: [
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
        children: /* @__PURE__ */ P("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
          /* @__PURE__ */ u(
            X,
            {
              action: f,
              icon: "Eye",
              tooltip: "Visit Link"
            }
          ),
          /* @__PURE__ */ u(
            X,
            {
              action: h,
              icon: "Pencil",
              tooltip: "Open Edit Link"
            }
          ),
          /* @__PURE__ */ u(
            Zx,
            {
              height: n,
              onOk: p,
              width: r,
              children: /* @__PURE__ */ u(
                X,
                {
                  icon: "Settings",
                  tooltip: t("editor.settings")
                }
              )
            }
          ),
          /* @__PURE__ */ u(
            X,
            {
              action: y,
              icon: "Trash2",
              tooltip: t("editor.delete")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ P(
      Xa,
      {
        onOpenChange: a,
        open: o,
        children: [
          /* @__PURE__ */ u(Ya, {}),
          /* @__PURE__ */ P(Ln, { children: [
            /* @__PURE__ */ u(mf, { children: /* @__PURE__ */ u($n, { children: "Edit Link Iframe" }) }),
            /* @__PURE__ */ u(
              $e,
              {
                autoFocus: !0,
                onInput: (g) => c(g.target.value),
                placeholder: "Enter link",
                type: "url",
                value: s
              }
            ),
            /* @__PURE__ */ P(Ja, { children: [
              /* @__PURE__ */ u(Re, { onClick: l, children: "Cancel" }),
              /* @__PURE__ */ u(Re, { onClick: d, children: "OK" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function O2({ editor: e, disabled: t, bubbleMenu: r }) {
  const n = e.extensionManager.extensions.map((o) => o.name), i = () => {
    var o, a, s, c, l, d, f, h, p, m;
    return [
      n.includes("columns") && !((o = r == null ? void 0 : r.columnConfig) != null && o.hidden) ? /* @__PURE__ */ u(
        Mx,
        {
          editor: e
        },
        "columns"
      ) : null,
      n.includes("table") && !((a = r == null ? void 0 : r.tableConfig) != null && a.hidden) ? /* @__PURE__ */ u(
        wy,
        {
          actions: (s = r == null ? void 0 : r.tableConfig) == null ? void 0 : s.actions,
          editor: e,
          hiddenActions: (c = r == null ? void 0 : r.tableConfig) == null ? void 0 : c.hiddenActions
        },
        "table"
      ) : null,
      n.includes("link") && !((l = r == null ? void 0 : r.linkConfig) != null && l.hidden) ? /* @__PURE__ */ u(
        Yy,
        {
          disabled: t,
          editor: e
        },
        "link"
      ) : null,
      n.includes(wr.name) && !((d = r == null ? void 0 : r.imageConfig) != null && d.hidden) ? /* @__PURE__ */ u(
        Rx,
        {
          disabled: t,
          editor: e
        },
        "image"
      ) : null,
      n.includes(xf.name) && !((f = r == null ? void 0 : r.imageGifConfig) != null && f.hidden) ? /* @__PURE__ */ u(
        Ix,
        {
          disabled: t,
          editor: e
        },
        "imageGif"
      ) : null,
      n.includes("iframe") && !((h = r == null ? void 0 : r.iframeConfig) != null && h.hidden) ? /* @__PURE__ */ u(
        I2,
        {
          disabled: t,
          editor: e
        },
        "iframe"
      ) : null,
      (p = r == null ? void 0 : r.floatingMenuConfig) != null && p.hidden ? null : /* @__PURE__ */ u(
        Yv,
        {
          disabled: t,
          editor: e
        },
        "content"
      ),
      (m = r == null ? void 0 : r.textConfig) != null && m.hidden ? null : /* @__PURE__ */ u(
        Zv,
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
function nu() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function P2(e) {
  const { t } = Ce(), {
    highlight: r = !1,
    disabled: n = !1,
    selectedColor: i,
    setSelectedColor: o,
    onChange: a,
    colors: s = Od
  } = e, c = Ae(() => {
    const p = s, m = [];
    for (let y = 0; y < p.length; y += 10)
      m.push(p.slice(y, y + 10));
    return m;
  }, [s]), [l, d] = Z([]), f = (p) => {
    const m = [...l], y = m.indexOf(p);
    y !== -1 && m.splice(y, 1), m.unshift(p), m.length > 10 && m.pop(), d(m);
  };
  function h(p) {
    if (p === void 0) {
      o == null || o(p), a == null || a(p);
      return;
    }
    /^#([\da-f]{3}){1,2}$/i.test(p) && (o == null || o(p), a == null || a(p), f(p));
  }
  return /* @__PURE__ */ P(Ar, { modal: !0, children: [
    /* @__PURE__ */ u(
      Cr,
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
        children: /* @__PURE__ */ P("div", { className: "richtext-flex richtext-flex-col", children: [
          r ? /* @__PURE__ */ P(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => h(void 0),
              children: [
                /* @__PURE__ */ u(nu, {}),
                /* @__PURE__ */ u("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.nofill") })
              ]
            }
          ) : /* @__PURE__ */ P(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => {
                h(void 0);
              },
              children: [
                /* @__PURE__ */ u(nu, {}),
                /* @__PURE__ */ u("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.default") })
              ]
            }
          ),
          c.map((p, m) => /* @__PURE__ */ u(
            "span",
            {
              className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2",
              children: p.map((y, g) => /* @__PURE__ */ u(
                "span",
                {
                  className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                  onClick: () => h(y),
                  children: /* @__PURE__ */ u(
                    "span",
                    {
                      className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                      style: {
                        backgroundColor: y
                      },
                      children: y === i ? /* @__PURE__ */ u(
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
                `sub-color-${g}`
              ))
            },
            m
          )),
          /* @__PURE__ */ P("div", { children: [
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
          /* @__PURE__ */ u(N2, { setColor: h })
        ] })
      }
    )
  ] });
}
function N2({ setColor: e }) {
  const [t, r] = Z("#000000"), [n, i] = Z(!1), { t: o } = Ce();
  return ve(() => () => {
    i(!1);
  }, []), /* @__PURE__ */ P(Ar, { open: n, children: [
    /* @__PURE__ */ u(Cr, { asChild: !0, children: /* @__PURE__ */ P(
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
    /* @__PURE__ */ P(Kt, { children: [
      /* @__PURE__ */ P("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ u(
          bp,
          {
            color: t,
            onChange: r
          }
        ),
        /* @__PURE__ */ u(
          $e,
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
        Re,
        {
          className: "richtext-w-full",
          onClick: (a) => {
            a.preventDefault(), e(t), i(!1);
          },
          children: /* @__PURE__ */ u(lu, { size: 16 })
        }
      )
    ] })
  ] });
}
function gw(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
const k2 = (e) => typeof e == "string", M2 = (e) => typeof e == "function";
function L2(e, t) {
  if (!e)
    return !1;
  const { extensions: r = [] } = (e == null ? void 0 : e.extensionManager) ?? {};
  return !!r.find((i) => i.name === t);
}
function vw(e) {
  return e.map((t) => k2(t) ? { value: t, name: t } : t);
}
function $2({ editor: e, disabled: t, toolbar: r }) {
  const { t: n, lang: i } = Ce(), o = Ae(() => {
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
        toolbar: y = !0
      } = f.options;
      if (!h || !M2(h) || !y)
        continue;
      const g = h({
        editor: e,
        extension: f,
        t: n
      });
      if (Array.isArray(g)) {
        const x = g.map((w, C) => ({
          button: w,
          divider: C === g.length - 1 ? p : !1,
          spacer: C === 0 ? m : !1,
          type: f.type,
          name: f.name
        }));
        d = [...d, ...x];
        continue;
      }
      d.push({
        button: g,
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
    var f, h, p, m;
    const d = c.button.component;
    return /* @__PURE__ */ P("div", { className: "richtext-flex richtext-items-center", children: [
      (c == null ? void 0 : c.spacer) && /* @__PURE__ */ u(We, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
      /* @__PURE__ */ u(
        d,
        {
          ...c.button.componentProps,
          disabled: t || ((h = (f = c == null ? void 0 : c.button) == null ? void 0 : f.componentProps) == null ? void 0 : h.disabled),
          tooltipOptions: {
            ...(m = (p = c == null ? void 0 : c.button) == null ? void 0 : p.componentProps) == null ? void 0 : m.tooltipOptions,
            side: (r == null ? void 0 : r.tooltipSide) ?? "top"
          }
        }
      ),
      (c == null ? void 0 : c.divider) && /* @__PURE__ */ u(We, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
    ] }, `toolbar-item-${l}`);
  });
  return r && (r != null && r.render) ? r.render({ editor: e, disabled: t || !1 }, o, s, a) : a(s);
}
function _2({ editor: e, extensions: t }) {
  const { t: r } = Ce(), n = Ae(() => {
    var i, o, a;
    return (a = (o = (i = t == null ? void 0 : t.find((s) => s.name === "base-kit")) == null ? void 0 : i.options) == null ? void 0 : o.characterCount) == null ? void 0 : a.limit;
  }, [t]);
  return n ? /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ P("span", { children: [
    e.storage.characterCount.characters(),
    "/",
    n,
    " ",
    r("editor.characters")
  ] }) }) }) }) : /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ P("span", { children: [
    e.storage.characterCount.characters(),
    " ",
    r("editor.characters")
  ] }) }) }) });
}
function D2() {
  const { toasts: e } = ts();
  return /* @__PURE__ */ P(qx, { children: [
    e.map(({ id: t, title: r, description: n, action: i, ...o }) => /* @__PURE__ */ P(
      Of,
      {
        ...o,
        children: [
          /* @__PURE__ */ P("div", { className: "richtext-grid richtext-gap-1", children: [
            r && /* @__PURE__ */ u(Nf, { children: r }),
            n && /* @__PURE__ */ u(kf, { children: n })
          ] }),
          i,
          /* @__PURE__ */ u(Pf, {})
        ]
      },
      t
    )),
    /* @__PURE__ */ u(If, {})
  ] });
}
const B2 = `
.reactjs-tiptap-editor,
.richtext-dialog-content {
  color: hsl(var(--richtext-foreground));

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
  color: hsl(var(--richtext-foreground));

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: hsl(var(--richtext-border));
  }

  button, input {
    cursor: pointer;
    color: inherit;
  }
}
`, j2 = bd(({ children: e, id: t }) => {
  const [, r] = vf((a) => a.value), [, n] = yf((a) => a.value), i = (a) => {
    r({
      value: a.detail
    });
  }, o = (a) => {
    n({
      value: a.detail
    });
  };
  return ve(() => {
    const a = xa(Wt.EDIT(t), i), s = xa(Wt.UPDATE_THEME(t), o);
    return () => {
      a(), s();
    };
  }, []), /* @__PURE__ */ u(be, { children: e });
});
function z2({ children: e, id: t }) {
  return /* @__PURE__ */ u(ox, { children: /* @__PURE__ */ u(ax, { children: /* @__PURE__ */ u(j2, { id: t, children: e }) }) });
}
function yw() {
  const [e] = yf((t) => t.value);
  return e;
}
const H2 = {
  setTheme: (e, t) => {
    Za(Wt.UPDATE_THEME(e), t);
  }
}, iu = "data-rc-order", ou = "data-rc-priority", q2 = "rc-util-key", Ca = /* @__PURE__ */ new Map();
function F2(e, t) {
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
function ad({ mark: e } = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : q2;
}
function ds(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function U2(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function sd(e) {
  return [...(Ca.get(e) || e).children].filter(
    (t) => t.tagName === "STYLE"
  );
}
function cd(e, t = {}) {
  const { csp: r, prepend: n, priority: i = 0 } = t, o = U2(n), a = o === "prependQueue", s = document.createElement("style");
  s.setAttribute(iu, o), a && i && s.setAttribute(ou, `${i}`), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = e;
  const c = ds(t), { firstChild: l } = c;
  if (n) {
    if (a) {
      const d = sd(c).filter((f) => {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(iu)))
          return !1;
        const h = Number(f.getAttribute(ou) || 0);
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
function ld(e, t = {}) {
  const r = ds(t);
  return sd(r).find((n) => n.getAttribute(ad(t)) === e);
}
function W2(e, t = {}) {
  const r = ld(e, t);
  r && r.remove();
}
function G2(e, t) {
  const r = Ca.get(e);
  if (!r || !F2(document, r)) {
    const n = cd("", t), { parentNode: i } = n;
    Ca.set(e, i), n.remove();
  }
}
function V2(e, t, r = {}) {
  var a, s, c;
  const n = ds(r);
  G2(n, r);
  const i = ld(t, r);
  if (i)
    return (a = r.csp) != null && a.nonce && i.nonce !== ((s = r.csp) == null ? void 0 : s.nonce) && (i.nonce = (c = r.csp) == null ? void 0 : c.nonce), i.innerHTML !== e && (i.innerHTML = e), i;
  const o = cd(e, r);
  return o.setAttribute(ad(r), t), o;
}
function K2(e, t) {
  const { content: r, extensions: n, useEditorOptions: i = {} } = e, o = Sd(), a = Ae(() => {
    const f = N0(n, n, "name");
    return [...n.map((p) => {
      const m = n.find((y) => y.name === p.name);
      return m ? p.configure(m.options) : p;
    }), ...f].map((p, m) => p.configure({ sort: m }));
  }, [n]), s = yr((f) => {
    var p;
    const h = l(f, e.output);
    (p = e == null ? void 0 : e.onChangeContent) == null || p.call(e, h);
  }, Pd), c = Td({
    extensions: a,
    content: r,
    immediatelyRender: (e == null ? void 0 : e.immediatelyRender) || !1,
    onUpdate: ({ editor: f }) => {
      s && s(f);
    },
    ...i
  });
  Ad(t, () => ({
    editor: c
  })), ve(() => {
    document.documentElement.classList.toggle("dark", e.dark), H2.setTheme(o, e.dark ? "dark" : "light");
  }, [e.dark]), ve(() => {
    c == null || c.setEditable(!(e != null && e.disabled)), yb.setDisable(o, !(e != null && e.disabled));
  }, [c, e == null ? void 0 : e.disabled]), ve(() => ((e == null ? void 0 : e.resetCSS) !== !1 && V2(B2, "react-tiptap-reset"), () => {
    W2("react-tiptap-reset");
  }), [e == null ? void 0 : e.resetCSS]);
  function l(f, h) {
    return e != null && e.removeDefaultWrapper ? h === "html" ? f.isEmpty ? "" : f.getHTML() : h === "json" ? f.isEmpty ? {} : f.getJSON() : h === "text" ? f.isEmpty ? "" : f.getText() : "" : h === "html" ? f.getHTML() : h === "json" ? f.getJSON() : h === "text" ? f.getText() : "";
  }
  Cd(() => {
    c && (c.id = o);
  }, [o, c]), ve(() => () => {
    var f;
    (f = c == null ? void 0 : c.destroy) == null || f.call(c);
  }, []);
  const d = L2(c, "characterCount");
  return c ? /* @__PURE__ */ P("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ u(
      z2,
      {
        id: o,
        children: /* @__PURE__ */ u(
          Gx,
          {
            delayDuration: 0,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ u("div", { className: "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-outline richtext-outline-1", children: /* @__PURE__ */ P("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: [
              !(e != null && e.hideToolbar) && /* @__PURE__ */ u(
                $2,
                {
                  disabled: !!(e != null && e.disabled),
                  editor: c,
                  toolbar: e.toolbar
                }
              ),
              /* @__PURE__ */ u(
                Ed,
                {
                  className: `richtext-relative ${(e == null ? void 0 : e.contentClass) || ""}`,
                  editor: c
                }
              ),
              d && /* @__PURE__ */ u(
                _2,
                {
                  editor: c,
                  extensions: n
                }
              ),
              !(e != null && e.hideBubble) && /* @__PURE__ */ u(
                O2,
                {
                  bubbleMenu: e == null ? void 0 : e.bubbleMenu,
                  disabled: e == null ? void 0 : e.disabled,
                  editor: c
                }
              )
            ] }) })
          }
        )
      }
    ),
    /* @__PURE__ */ u(D2, {})
  ] }) : /* @__PURE__ */ u(be, {});
}
const xw = wd(K2);
export {
  hw as $,
  X as A,
  Re as B,
  P2 as C,
  Lx as D,
  Wt as E,
  rx as F,
  yr as G,
  by as H,
  la as I,
  gw as J,
  hf as K,
  ot as L,
  ay as M,
  wr as N,
  sx as O,
  Ar as P,
  Mf as Q,
  R2 as R,
  Ef as S,
  Lf as T,
  yw as U,
  pw as V,
  my as W,
  py as X,
  vb as Y,
  dw as Z,
  fw as _,
  $f as a,
  cw as a0,
  We as a1,
  Af as a2,
  Zx as a3,
  lw as a4,
  Sf as a5,
  Cn as a6,
  xw as a7,
  Ky as a8,
  xf as a9,
  kx as aa,
  mw as ab,
  zt as ac,
  es as b,
  uw as c,
  Q as d,
  $x as e,
  Cf as f,
  Lv as g,
  _x as h,
  tf as i,
  vw as j,
  ge as k,
  xa as l,
  Cr as m,
  Kt as n,
  $e as o,
  T2 as p,
  Za as q,
  kn as r,
  jx as s,
  Mv as t,
  Tf as u,
  Xa as v,
  Ya as w,
  Ln as x,
  $n as y,
  Ja as z
};
