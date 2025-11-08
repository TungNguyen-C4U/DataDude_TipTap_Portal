var pf = Object.defineProperty;
var mf = (e, t, r) => t in e ? pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var $r = (e, t, r) => mf(e, typeof t != "symbol" ? t + "" : t, r);
import { jsxs as E, jsx as l, Fragment as ge } from "react/jsx-runtime";
import * as ne from "react";
import Gr, { useState as Z, useRef as it, useEffect as he, useMemo as Ae, useCallback as oe, createContext as gf, useContext as vf, useSyncExternalStore as yf, Fragment as xf, memo as bf, forwardRef as wf, useId as Sf, useImperativeHandle as Af, useLayoutEffect as Cf } from "react";
import { c as Mn, B as St, N as Pa, R as Na, g as ri, u as Tf, E as Ef } from "./dom-dataset-CHDbKz5J.js";
import { Slot as cu } from "@radix-ui/react-slot";
import { m as Te, B as Rf, q as Xr, V as na, u as we, r as If, I as Jr, i as Zr, h as lu, C as Of, E as Pf } from "./index-D-DR0FPY.js";
import * as uu from "@radix-ui/react-separator";
import * as Ne from "@radix-ui/react-toast";
import { WrapText as Nf, PencilRuler as kf, FlipHorizontal as Mf, FlipVertical as Lf, CropIcon as $f, ChevronUp as _f, Paperclip as Df, Eye as Bf, Settings as jf, ZoomOut as zf, ZoomIn as Hf, BookMarked as qf, Sigma as Ff, SmilePlusIcon as Uf, Replace as Cs, SmilePlus as Wf, Frame as Gf, Columns2 as Ts, PanelRight as Vf, PanelLeft as Kf, Clipboard as Yf, Copy as Xf, GripVertical as Jf, Plus as du, Columns4 as Zf, Columns3 as Qf, Heading6 as eh, Heading5 as th, Heading4 as rh, Heading3 as nh, Heading2 as ih, Heading1 as oh, ChevronsUpDown as ah, Trash as sh, Trash2 as ch, TableCellsSplit as lh, TableCellsMerge as uh, BetweenVerticalEnd as dh, BetweenVerticalStart as fh, BetweenHorizonalStart as hh, BetweenHorizonalEnd as ph, Unlink as mh, Pencil as gh, Sparkles as vh, Table as yh, Minimize as xh, Maximize as bh, Video as wh, ImageUp as Sh, Link as Ah, ListTodo as Ch, ListOrdered as Th, List as Eh, IndentDecrease as Rh, IndentIncrease as Ih, Type as Oh, CodeXml as Ph, Code as Nh, Superscript as kh, Subscript as Mh, ChevronDown as Lh, Undo2 as $h, Redo2 as _h, PaintRoller as Dh, Eraser as Bh, Minus as jh, Strikethrough as zh, Quote as Hh, Underline as qh, Italic as Fh, LoaderCircle as Uh, Bold as Wh, X as fu, ChevronRight as Gh, Check as hu, Circle as Vh } from "lucide-react";
import * as Ar from "@radix-ui/react-tooltip";
import * as pu from "@radix-ui/react-toggle";
import { TextAlignRightIcon as Kh, TextAlignLeftIcon as Yh, TextAlignJustifyIcon as Xh, TextAlignCenterIcon as Jh } from "@radix-ui/react-icons";
import * as hr from "@radix-ui/react-popover";
import * as mu from "@radix-ui/react-label";
import * as $e from "@radix-ui/react-dialog";
import { H as Cr, I as Zh, z as Qh, u as ep, a as Wt, P as Ot, T as Gt, A as tp, J as rp, K as np, M as ip, c as op, m as ot, L as ap, O as sp, Q as cp, R as lp, U as up, V as dp, N as Tr, n as gu, b as fp, D as hp, W as Qr, X as pp, E as mp } from "./index-BWx1Mchx.js";
import { Resizable as gp } from "re-resizable";
import vp from "react-image-crop";
import * as Pt from "@radix-ui/react-tabs";
import * as ia from "@radix-ui/react-checkbox";
import yp, { sticky as xp } from "tippy.js";
import { HexColorPicker as bp } from "react-colorful";
import * as oa from "@radix-ui/react-switch";
import * as de from "@radix-ui/react-dropdown-menu";
var vu = typeof global == "object" && global && global.Object === Object && global, wp = typeof self == "object" && self && self.Object === Object && self, Ke = vu || wp || Function("return this")(), Ge = Ke.Symbol, yu = Object.prototype, Sp = yu.hasOwnProperty, Ap = yu.toString, Qt = Ge ? Ge.toStringTag : void 0;
function Cp(e) {
  var t = Sp.call(e, Qt), r = e[Qt];
  try {
    e[Qt] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ap.call(e);
  return n && (t ? e[Qt] = r : delete e[Qt]), i;
}
var Tp = Object.prototype, Ep = Tp.toString;
function Rp(e) {
  return Ep.call(e);
}
var Ip = "[object Null]", Op = "[object Undefined]", Es = Ge ? Ge.toStringTag : void 0;
function At(e) {
  return e == null ? e === void 0 ? Op : Ip : Es && Es in Object(e) ? Cp(e) : Rp(e);
}
function at(e) {
  return e != null && typeof e == "object";
}
var Pp = "[object Symbol]";
function Ln(e) {
  return typeof e == "symbol" || at(e) && At(e) == Pp;
}
function xu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Ve = Array.isArray, Rs = Ge ? Ge.prototype : void 0, Is = Rs ? Rs.toString : void 0;
function en(e) {
  if (typeof e == "string")
    return e;
  if (Ve(e))
    return xu(e, en) + "";
  if (Ln(e))
    return Is ? Is.call(e) : "";
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
var Os = NaN, $p = /^[-+]0x[0-9a-f]+$/i, _p = /^0b[01]+$/i, Dp = /^0o[0-7]+$/i, Bp = parseInt;
function Ht(e) {
  if (typeof e == "number")
    return e;
  if (Ln(e))
    return Os;
  if (wt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Lp(e);
  var r = _p.test(e);
  return r || Dp.test(e) ? Bp(e.slice(2), r ? 2 : 8) : $p.test(e) ? Os : +e;
}
var Ps = 1 / 0, jp = 17976931348623157e292;
function zp(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Ht(e), e === Ps || e === -Ps) {
    var t = e < 0 ? -1 : 1;
    return t * jp;
  }
  return e === e ? e : 0;
}
function Hp(e) {
  var t = zp(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function ka(e) {
  return e;
}
var qp = "[object AsyncFunction]", Fp = "[object Function]", Up = "[object GeneratorFunction]", Wp = "[object Proxy]";
function bu(e) {
  if (!wt(e))
    return !1;
  var t = At(e);
  return t == Fp || t == Up || t == qp || t == Wp;
}
var ni = Ke["__core-js_shared__"], Ns = function() {
  var e = /[^.]+$/.exec(ni && ni.keys && ni.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Gp(e) {
  return !!Ns && Ns in e;
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
var Yp = /[\\^$.*+?()[\]{}|]/g, Xp = /^\[object .+?Constructor\]$/, Jp = Function.prototype, Zp = Object.prototype, Qp = Jp.toString, em = Zp.hasOwnProperty, tm = RegExp(
  "^" + Qp.call(em).replace(Yp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rm(e) {
  if (!wt(e) || Gp(e))
    return !1;
  var t = bu(e) ? tm : Xp;
  return t.test(Nt(e));
}
function nm(e, t) {
  return e == null ? void 0 : e[t];
}
function kt(e, t) {
  var r = nm(e, t);
  return rm(r) ? r : void 0;
}
var aa = kt(Ke, "WeakMap");
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
var ks = function() {
  try {
    var e = kt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), um = ks ? function(e, t) {
  return ks(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: lm(t),
    writable: !0
  });
} : ka, dm = cm(um);
function fm(e, t, r, n) {
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
  return t === t ? pm(e, t, r) : fm(e, hm, r);
}
function gm(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && mm(e, t, 0) > -1;
}
var vm = 9007199254740991, ym = /^(?:0|[1-9]\d*)$/;
function wu(e, t) {
  var r = typeof e;
  return t = t ?? vm, !!t && (r == "number" || r != "symbol" && ym.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Su(e, t) {
  return e === t || e !== e && t !== t;
}
var Ms = Math.max;
function xm(e, t, r) {
  return t = Ms(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, o = Ms(n.length - t, 0), a = Array(o); ++i < o; )
      a[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(a), im(e, this, s);
  };
}
function bm(e, t) {
  return dm(xm(e, t, ka), e + "");
}
var wm = 9007199254740991;
function Ma(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wm;
}
function Au(e) {
  return e != null && Ma(e.length) && !bu(e);
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
function Ls(e) {
  return at(e) && At(e) == Tm;
}
var Cu = Object.prototype, Em = Cu.hasOwnProperty, Rm = Cu.propertyIsEnumerable, La = Ls(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ls : function(e) {
  return at(e) && Em.call(e, "callee") && !Rm.call(e, "callee");
};
function Im() {
  return !1;
}
var Tu = typeof exports == "object" && exports && !exports.nodeType && exports, $s = Tu && typeof module == "object" && module && !module.nodeType && module, Om = $s && $s.exports === Tu, _s = Om ? Ke.Buffer : void 0, Pm = _s ? _s.isBuffer : void 0, sa = Pm || Im, Nm = "[object Arguments]", km = "[object Array]", Mm = "[object Boolean]", Lm = "[object Date]", $m = "[object Error]", _m = "[object Function]", Dm = "[object Map]", Bm = "[object Number]", jm = "[object Object]", zm = "[object RegExp]", Hm = "[object Set]", qm = "[object String]", Fm = "[object WeakMap]", Um = "[object ArrayBuffer]", Wm = "[object DataView]", Gm = "[object Float32Array]", Vm = "[object Float64Array]", Km = "[object Int8Array]", Ym = "[object Int16Array]", Xm = "[object Int32Array]", Jm = "[object Uint8Array]", Zm = "[object Uint8ClampedArray]", Qm = "[object Uint16Array]", eg = "[object Uint32Array]", le = {};
le[Gm] = le[Vm] = le[Km] = le[Ym] = le[Xm] = le[Jm] = le[Zm] = le[Qm] = le[eg] = !0;
le[Nm] = le[km] = le[Um] = le[Mm] = le[Wm] = le[Lm] = le[$m] = le[_m] = le[Dm] = le[Bm] = le[jm] = le[zm] = le[Hm] = le[qm] = le[Fm] = !1;
function tg(e) {
  return at(e) && Ma(e.length) && !!le[At(e)];
}
function $a(e) {
  return function(t) {
    return e(t);
  };
}
var Eu = typeof exports == "object" && exports && !exports.nodeType && exports, or = Eu && typeof module == "object" && module && !module.nodeType && module, rg = or && or.exports === Eu, ii = rg && vu.process, tn = function() {
  try {
    var e = or && or.require && or.require("util").types;
    return e || ii && ii.binding && ii.binding("util");
  } catch {
  }
}(), Ds = tn && tn.isTypedArray, Ru = Ds ? $a(Ds) : tg, ng = Object.prototype, ig = ng.hasOwnProperty;
function og(e, t) {
  var r = Ve(e), n = !r && La(e), i = !r && !n && sa(e), o = !r && !n && !i && Ru(e), a = r || n || i || o, s = a ? Cm(e.length, String) : [], c = s.length;
  for (var u in e)
    ig.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    wu(u, c))) && s.push(u);
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
function Iu(e) {
  return Au(e) ? og(e) : ug(e);
}
var dg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fg = /^\w*$/;
function _a(e, t) {
  if (Ve(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ln(e) ? !0 : fg.test(e) || !dg.test(e) || t != null && e in Object(t);
}
var pr = kt(Object, "create");
function hg() {
  this.__data__ = pr ? pr(null) : {}, this.size = 0;
}
function pg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var mg = "__lodash_hash_undefined__", gg = Object.prototype, vg = gg.hasOwnProperty;
function yg(e) {
  var t = this.__data__;
  if (pr) {
    var r = t[e];
    return r === mg ? void 0 : r;
  }
  return vg.call(t, e) ? t[e] : void 0;
}
var xg = Object.prototype, bg = xg.hasOwnProperty;
function wg(e) {
  var t = this.__data__;
  return pr ? t[e] !== void 0 : bg.call(t, e);
}
var Sg = "__lodash_hash_undefined__";
function Ag(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = pr && t === void 0 ? Sg : t, this;
}
function Rt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Rt.prototype.clear = hg;
Rt.prototype.delete = pg;
Rt.prototype.get = yg;
Rt.prototype.has = wg;
Rt.prototype.set = Ag;
function Cg() {
  this.__data__ = [], this.size = 0;
}
function $n(e, t) {
  for (var r = e.length; r--; )
    if (Su(e[r][0], t))
      return r;
  return -1;
}
var Tg = Array.prototype, Eg = Tg.splice;
function Rg(e) {
  var t = this.__data__, r = $n(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Eg.call(t, r, 1), --this.size, !0;
}
function Ig(e) {
  var t = this.__data__, r = $n(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Og(e) {
  return $n(this.__data__, e) > -1;
}
function Pg(e, t) {
  var r = this.__data__, n = $n(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function st(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
st.prototype.clear = Cg;
st.prototype.delete = Rg;
st.prototype.get = Ig;
st.prototype.has = Og;
st.prototype.set = Pg;
var mr = kt(Ke, "Map");
function Ng() {
  this.size = 0, this.__data__ = {
    hash: new Rt(),
    map: new (mr || st)(),
    string: new Rt()
  };
}
function kg(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function _n(e, t) {
  var r = e.__data__;
  return kg(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Mg(e) {
  var t = _n(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Lg(e) {
  return _n(this, e).get(e);
}
function $g(e) {
  return _n(this, e).has(e);
}
function _g(e, t) {
  var r = _n(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ct(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ct.prototype.clear = Ng;
ct.prototype.delete = Mg;
ct.prototype.get = Lg;
ct.prototype.has = $g;
ct.prototype.set = _g;
var Dg = "Expected a function";
function Da(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Dg);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new (Da.Cache || ct)(), r;
}
Da.Cache = ct;
var Bg = 500;
function jg(e) {
  var t = Da(e, function(n) {
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
function ca(e) {
  return e == null ? "" : en(e);
}
function Ou(e, t) {
  return Ve(e) ? e : _a(e, t) ? [e] : qg(ca(e));
}
function Dn(e) {
  if (typeof e == "string" || Ln(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Pu(e, t) {
  t = Ou(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Dn(t[r++])];
  return r && r == n ? e : void 0;
}
function Fg(e, t, r) {
  var n = e == null ? void 0 : Pu(e, t);
  return n === void 0 ? r : n;
}
function Nu(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var Bs = Ge ? Ge.isConcatSpreadable : void 0;
function Ug(e) {
  return Ve(e) || La(e) || !!(Bs && e && e[Bs]);
}
function Wg(e, t, r, n, i) {
  var o = -1, a = e.length;
  for (r || (r = Ug), i || (i = []); ++o < a; ) {
    var s = e[o];
    r(s) && Nu(i, s);
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
var Kg = "\\ud800-\\udfff", Yg = "\\u0300-\\u036f", Xg = "\\ufe20-\\ufe2f", Jg = "\\u20d0-\\u20ff", Zg = Yg + Xg + Jg, Qg = "\\ufe0e\\ufe0f", e0 = "\\u200d", t0 = RegExp("[" + e0 + Kg + Zg + Qg + "]");
function Ba(e) {
  return t0.test(e);
}
function r0(e) {
  return e.split("");
}
var ku = "\\ud800-\\udfff", n0 = "\\u0300-\\u036f", i0 = "\\ufe20-\\ufe2f", o0 = "\\u20d0-\\u20ff", a0 = n0 + i0 + o0, s0 = "\\ufe0e\\ufe0f", c0 = "[" + ku + "]", la = "[" + a0 + "]", ua = "\\ud83c[\\udffb-\\udfff]", l0 = "(?:" + la + "|" + ua + ")", Mu = "[^" + ku + "]", Lu = "(?:\\ud83c[\\udde6-\\uddff]){2}", $u = "[\\ud800-\\udbff][\\udc00-\\udfff]", u0 = "\\u200d", _u = l0 + "?", Du = "[" + s0 + "]?", d0 = "(?:" + u0 + "(?:" + [Mu, Lu, $u].join("|") + ")" + Du + _u + ")*", f0 = Du + _u + d0, h0 = "(?:" + [Mu + la + "?", la, Lu, $u, c0].join("|") + ")", p0 = RegExp(ua + "(?=" + ua + ")|" + h0 + f0, "g");
function m0(e) {
  return e.match(p0) || [];
}
function g0(e) {
  return Ba(e) ? m0(e) : r0(e);
}
function v0(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Bu(e, t, r) {
  return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Ht(r), r = r === r ? r : 0), t !== void 0 && (t = Ht(t), t = t === t ? t : 0), v0(Ht(e), t, r);
}
function y0() {
  this.__data__ = new st(), this.size = 0;
}
function x0(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function b0(e) {
  return this.__data__.get(e);
}
function w0(e) {
  return this.__data__.has(e);
}
var S0 = 200;
function A0(e, t) {
  var r = this.__data__;
  if (r instanceof st) {
    var n = r.__data__;
    if (!mr || n.length < S0 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ct(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function nt(e) {
  var t = this.__data__ = new st(e);
  this.size = t.size;
}
nt.prototype.clear = y0;
nt.prototype.delete = x0;
nt.prototype.get = b0;
nt.prototype.has = w0;
nt.prototype.set = A0;
function C0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function T0() {
  return [];
}
var E0 = Object.prototype, R0 = E0.propertyIsEnumerable, js = Object.getOwnPropertySymbols, I0 = js ? function(e) {
  return e == null ? [] : (e = Object(e), C0(js(e), function(t) {
    return R0.call(e, t);
  }));
} : T0;
function O0(e, t, r) {
  var n = t(e);
  return Ve(e) ? n : Nu(n, r(e));
}
function zs(e) {
  return O0(e, Iu, I0);
}
var da = kt(Ke, "DataView"), fa = kt(Ke, "Promise"), ha = kt(Ke, "Set"), Hs = "[object Map]", P0 = "[object Object]", qs = "[object Promise]", Fs = "[object Set]", Us = "[object WeakMap]", Ws = "[object DataView]", N0 = Nt(da), k0 = Nt(mr), M0 = Nt(fa), L0 = Nt(ha), $0 = Nt(aa), vt = At;
(da && vt(new da(new ArrayBuffer(1))) != Ws || mr && vt(new mr()) != Hs || fa && vt(fa.resolve()) != qs || ha && vt(new ha()) != Fs || aa && vt(new aa()) != Us) && (vt = function(e) {
  var t = At(e), r = t == P0 ? e.constructor : void 0, n = r ? Nt(r) : "";
  if (n)
    switch (n) {
      case N0:
        return Ws;
      case k0:
        return Hs;
      case M0:
        return qs;
      case L0:
        return Fs;
      case $0:
        return Us;
    }
  return t;
});
var Gs = Ke.Uint8Array, _0 = "__lodash_hash_undefined__";
function D0(e) {
  return this.__data__.set(e, _0), this;
}
function B0(e) {
  return this.__data__.has(e);
}
function gr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ct(); ++t < r; )
    this.add(e[t]);
}
gr.prototype.add = gr.prototype.push = D0;
gr.prototype.has = B0;
function j0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function ju(e, t) {
  return e.has(t);
}
var z0 = 1, H0 = 2;
function zu(e, t, r, n, i, o) {
  var a = r & z0, s = e.length, c = t.length;
  if (s != c && !(a && c > s))
    return !1;
  var u = o.get(e), f = o.get(t);
  if (u && f)
    return u == t && f == e;
  var d = -1, h = !0, p = r & H0 ? new gr() : void 0;
  for (o.set(e, t), o.set(t, e); ++d < s; ) {
    var m = e[d], g = t[d];
    if (n)
      var v = a ? n(g, m, d, t, e, o) : n(m, g, d, e, t, o);
    if (v !== void 0) {
      if (v)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!j0(t, function(x, w) {
        if (!ju(p, w) && (m === x || i(m, x, r, n, o)))
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
function q0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function F0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var U0 = 1, W0 = 2, G0 = "[object Boolean]", V0 = "[object Date]", K0 = "[object Error]", Y0 = "[object Map]", X0 = "[object Number]", J0 = "[object RegExp]", Z0 = "[object Set]", Q0 = "[object String]", e1 = "[object Symbol]", t1 = "[object ArrayBuffer]", r1 = "[object DataView]", Vs = Ge ? Ge.prototype : void 0, oi = Vs ? Vs.valueOf : void 0;
function n1(e, t, r, n, i, o, a) {
  switch (r) {
    case r1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case t1:
      return !(e.byteLength != t.byteLength || !o(new Gs(e), new Gs(t)));
    case G0:
    case V0:
    case X0:
      return Su(+e, +t);
    case K0:
      return e.name == t.name && e.message == t.message;
    case J0:
    case Q0:
      return e == t + "";
    case Y0:
      var s = q0;
    case Z0:
      var c = n & U0;
      if (s || (s = F0), e.size != t.size && !c)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= W0, a.set(e, t);
      var f = zu(s(e), s(t), n, i, o, a);
      return a.delete(e), f;
    case e1:
      if (oi)
        return oi.call(e) == oi.call(t);
  }
  return !1;
}
var i1 = 1, o1 = Object.prototype, a1 = o1.hasOwnProperty;
function s1(e, t, r, n, i, o) {
  var a = r & i1, s = zs(e), c = s.length, u = zs(t), f = u.length;
  if (c != f && !a)
    return !1;
  for (var d = c; d--; ) {
    var h = s[d];
    if (!(a ? h in t : a1.call(t, h)))
      return !1;
  }
  var p = o.get(e), m = o.get(t);
  if (p && m)
    return p == t && m == e;
  var g = !0;
  o.set(e, t), o.set(t, e);
  for (var v = a; ++d < c; ) {
    h = s[d];
    var x = e[h], w = t[h];
    if (n)
      var S = a ? n(w, x, h, t, e, o) : n(x, w, h, e, t, o);
    if (!(S === void 0 ? x === w || i(x, w, r, n, o) : S)) {
      g = !1;
      break;
    }
    v || (v = h == "constructor");
  }
  if (g && !v) {
    var A = e.constructor, R = t.constructor;
    A != R && "constructor" in e && "constructor" in t && !(typeof A == "function" && A instanceof A && typeof R == "function" && R instanceof R) && (g = !1);
  }
  return o.delete(e), o.delete(t), g;
}
var c1 = 1, Ks = "[object Arguments]", Ys = "[object Array]", _r = "[object Object]", l1 = Object.prototype, Xs = l1.hasOwnProperty;
function u1(e, t, r, n, i, o) {
  var a = Ve(e), s = Ve(t), c = a ? Ys : vt(e), u = s ? Ys : vt(t);
  c = c == Ks ? _r : c, u = u == Ks ? _r : u;
  var f = c == _r, d = u == _r, h = c == u;
  if (h && sa(e)) {
    if (!sa(t))
      return !1;
    a = !0, f = !1;
  }
  if (h && !f)
    return o || (o = new nt()), a || Ru(e) ? zu(e, t, r, n, i, o) : n1(e, t, c, r, n, i, o);
  if (!(r & c1)) {
    var p = f && Xs.call(e, "__wrapped__"), m = d && Xs.call(t, "__wrapped__");
    if (p || m) {
      var g = p ? e.value() : e, v = m ? t.value() : t;
      return o || (o = new nt()), i(g, v, r, n, o);
    }
  }
  return h ? (o || (o = new nt()), s1(e, t, r, n, i, o)) : !1;
}
function ja(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !at(e) && !at(t) ? e !== e && t !== t : u1(e, t, r, n, ja, i);
}
var d1 = 1, f1 = 2;
function h1(e, t, r, n) {
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
    var s = a[0], c = e[s], u = a[1];
    if (a[2]) {
      if (c === void 0 && !(s in e))
        return !1;
    } else {
      var f = new nt(), d;
      if (!(d === void 0 ? ja(u, c, d1 | f1, n, f) : d))
        return !1;
    }
  }
  return !0;
}
function Hu(e) {
  return e === e && !wt(e);
}
function p1(e) {
  for (var t = Iu(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Hu(i)];
  }
  return t;
}
function qu(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function m1(e) {
  var t = p1(e);
  return t.length == 1 && t[0][2] ? qu(t[0][0], t[0][1]) : function(r) {
    return r === e || h1(r, e, t);
  };
}
function g1(e, t) {
  return e != null && t in Object(e);
}
function v1(e, t, r) {
  t = Ou(t, e);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = Dn(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && Ma(i) && wu(a, i) && (Ve(e) || La(e)));
}
function y1(e, t) {
  return e != null && v1(e, t, g1);
}
var x1 = 1, b1 = 2;
function w1(e, t) {
  return _a(e) && Hu(t) ? qu(Dn(e), t) : function(r) {
    var n = Fg(r, e);
    return n === void 0 && n === t ? y1(r, e) : ja(t, n, x1 | b1);
  };
}
function Fu(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function S1(e) {
  return function(t) {
    return Pu(t, e);
  };
}
function A1(e) {
  return _a(e) ? Fu(Dn(e)) : S1(e);
}
function C1(e) {
  return typeof e == "function" ? e : e == null ? ka : typeof e == "object" ? Ve(e) ? w1(e[0], e[1]) : m1(e) : A1(e);
}
var ai = function() {
  return Ke.Date.now();
}, T1 = "Expected a function", E1 = Math.max, R1 = Math.min;
function Bn(e, t, r) {
  var n, i, o, a, s, c, u = 0, f = !1, d = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(T1);
  t = Ht(t) || 0, wt(r) && (f = !!r.leading, d = "maxWait" in r, o = d ? E1(Ht(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);
  function p(N) {
    var M = n, O = i;
    return n = i = void 0, u = N, a = e.apply(O, M), a;
  }
  function m(N) {
    return u = N, s = setTimeout(x, t), f ? p(N) : a;
  }
  function g(N) {
    var M = N - c, O = N - u, k = t - M;
    return d ? R1(k, o - O) : k;
  }
  function v(N) {
    var M = N - c, O = N - u;
    return c === void 0 || M >= t || M < 0 || d && O >= o;
  }
  function x() {
    var N = ai();
    if (v(N))
      return w(N);
    s = setTimeout(x, g(N));
  }
  function w(N) {
    return s = void 0, h && n ? p(N) : (n = i = void 0, a);
  }
  function S() {
    s !== void 0 && clearTimeout(s), u = 0, n = c = i = s = void 0;
  }
  function A() {
    return s === void 0 ? a : w(ai());
  }
  function R() {
    var N = ai(), M = v(N);
    if (n = arguments, i = this, c = N, M) {
      if (s === void 0)
        return m(c);
      if (d)
        return clearTimeout(s), s = setTimeout(x, t), p(c);
    }
    return s === void 0 && (s = setTimeout(x, t)), a;
  }
  return R.cancel = S, R.flush = A, R;
}
function si(e) {
  return at(e) && Au(e);
}
var I1 = 200;
function O1(e, t, r, n) {
  var i = -1, o = gm, a = !0, s = e.length, c = [], u = t.length;
  if (!s)
    return c;
  r && (t = xu(t, $a(r))), t.length >= I1 && (o = ju, a = !1, t = new gr(t));
  e:
    for (; ++i < s; ) {
      var f = e[i], d = r == null ? f : r(f);
      if (f = f !== 0 ? f : 0, a && d === d) {
        for (var h = u; h--; )
          if (t[h] === d)
            continue e;
        c.push(f);
      } else o(t, d, n) || c.push(f);
    }
  return c;
}
function P1(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var N1 = bm(function(e, t) {
  var r = P1(t);
  return si(r) && (r = void 0), si(e) ? O1(e, Wg(t, 1, si), C1(r)) : [];
}), k1 = "[object Number]";
function rn(e) {
  return typeof e == "number" || at(e) && At(e) == k1;
}
var M1 = "[object RegExp]";
function L1(e) {
  return at(e) && At(e) == M1;
}
var Js = tn && tn.isRegExp, $1 = Js ? $a(Js) : L1, _1 = Fu("length"), Uu = "\\ud800-\\udfff", D1 = "\\u0300-\\u036f", B1 = "\\ufe20-\\ufe2f", j1 = "\\u20d0-\\u20ff", z1 = D1 + B1 + j1, H1 = "\\ufe0e\\ufe0f", q1 = "[" + Uu + "]", pa = "[" + z1 + "]", ma = "\\ud83c[\\udffb-\\udfff]", F1 = "(?:" + pa + "|" + ma + ")", Wu = "[^" + Uu + "]", Gu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Vu = "[\\ud800-\\udbff][\\udc00-\\udfff]", U1 = "\\u200d", Ku = F1 + "?", Yu = "[" + H1 + "]?", W1 = "(?:" + U1 + "(?:" + [Wu, Gu, Vu].join("|") + ")" + Yu + Ku + ")*", G1 = Yu + Ku + W1, V1 = "(?:" + [Wu + pa + "?", pa, Gu, Vu, q1].join("|") + ")", Zs = RegExp(ma + "(?=" + ma + ")|" + V1 + G1, "g");
function K1(e) {
  for (var t = Zs.lastIndex = 0; Zs.test(e); )
    ++t;
  return t;
}
function Y1(e) {
  return Ba(e) ? K1(e) : _1(e);
}
var X1 = "Expected a function";
function vr(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(X1);
  return wt(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Bn(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var J1 = 30, Z1 = "...", Q1 = /\w*$/;
function ev(e, t) {
  var r = J1, n = Z1;
  if (wt(t)) {
    var i = "separator" in t ? t.separator : i;
    r = "length" in t ? Hp(t.length) : r, n = "omission" in t ? en(t.omission) : n;
  }
  e = ca(e);
  var o = e.length;
  if (Ba(e)) {
    var a = g0(e);
    o = a.length;
  }
  if (r >= o)
    return e;
  var s = r - Y1(n);
  if (s < 1)
    return n;
  var c = a ? Vg(a, 0, s).join("") : e.slice(0, s);
  if (i === void 0)
    return c + n;
  if (a && (s += c.length - s), $1(i)) {
    if (e.slice(s).search(i)) {
      var u, f = c;
      for (i.global || (i = RegExp(i.source, ca(Q1.exec(i)) + "g")), i.lastIndex = 0; u = i.exec(f); )
        var d = u.index;
      c = c.slice(0, d === void 0 ? s : d);
    }
  } else if (e.indexOf(en(i), s) != s) {
    var h = c.lastIndexOf(i);
    h > -1 && (c = c.slice(0, h));
  }
  return c + n;
}
const za = "-", tv = (e) => {
  const t = nv(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(za);
      return s[0] === "" && s.length !== 1 && s.shift(), Xu(s, t) || rv(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, Xu = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? Xu(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(za);
  return (a = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : a.classGroupId;
}, Qs = /^\[(.+)\]$/, rv = (e) => {
  if (Qs.test(e)) {
    const t = Qs.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
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
    ga(a, n, o, t);
  }), n;
}, ga = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : ec(t, i);
      o.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (iv(i)) {
        ga(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([o, a]) => {
      ga(a, ec(t, o), r, n);
    });
  });
}, ec = (e, t) => {
  let r = e;
  return t.split(za).forEach((n) => {
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
}, Ju = "!", sv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], o = t.length, a = (s) => {
    const c = [];
    let u = 0, f = 0, d;
    for (let v = 0; v < s.length; v++) {
      let x = s[v];
      if (u === 0) {
        if (x === i && (n || s.slice(v, v + o) === t)) {
          c.push(s.slice(f, v)), f = v + o;
          continue;
        }
        if (x === "/") {
          d = v;
          continue;
        }
      }
      x === "[" ? u++ : x === "]" && u--;
    }
    const h = c.length === 0 ? s : s.substring(f), p = h.startsWith(Ju), m = p ? h.substring(1) : h, g = d && d > f ? d - f : void 0;
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
}), uv = /\s+/, dv = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, o = [], a = e.trim().split(uv);
  let s = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const u = a[c], {
      modifiers: f,
      hasImportantModifier: d,
      baseClassName: h,
      maybePostfixModifierPosition: p
    } = r(u);
    let m = !!p, g = n(m ? h.substring(0, p) : h);
    if (!g) {
      if (!m) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (g = n(h), !g) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      m = !1;
    }
    const v = cv(f).join(":"), x = d ? v + Ju : v, w = x + g;
    if (o.includes(w))
      continue;
    o.push(w);
    const S = i(g, m);
    for (let A = 0; A < S.length; ++A) {
      const R = S[A];
      o.push(x + R);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function fv() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Zu(t)) && (n && (n += " "), n += r);
  return n;
}
const Zu = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Zu(e[n])) && (r && (r += " "), r += t);
  return r;
};
function hv(e, ...t) {
  let r, n, i, o = a;
  function a(c) {
    const u = t.reduce((f, d) => d(f), e());
    return r = lv(u), n = r.cache.get, i = r.cache.set, o = s, s(c);
  }
  function s(c) {
    const u = n(c);
    if (u)
      return u;
    const f = dv(c, r);
    return i(c, f), f;
  }
  return function() {
    return o(fv.apply(null, arguments));
  };
}
const ce = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Qu = /^\[(?:([a-z-]+):)?(.+)\]$/i, pv = /^\d+\/\d+$/, mv = /* @__PURE__ */ new Set(["px", "full", "screen"]), gv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, yv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, xv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qe = (e) => qt(e) || mv.has(e) || pv.test(e), pt = (e) => Vt(e, "length", Iv), qt = (e) => !!e && !Number.isNaN(Number(e)), ci = (e) => Vt(e, "number", qt), er = (e) => !!e && Number.isInteger(Number(e)), wv = (e) => e.endsWith("%") && qt(e.slice(0, -1)), W = (e) => Qu.test(e), mt = (e) => gv.test(e), Sv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Av = (e) => Vt(e, Sv, ed), Cv = (e) => Vt(e, "position", ed), Tv = /* @__PURE__ */ new Set(["image", "url"]), Ev = (e) => Vt(e, Tv, Pv), Rv = (e) => Vt(e, "", Ov), tr = () => !0, Vt = (e, t, r) => {
  const n = Qu.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Iv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  vv.test(e) && !yv.test(e)
), ed = () => !1, Ov = (e) => xv.test(e), Pv = (e) => bv.test(e), Nv = () => {
  const e = ce("colors"), t = ce("spacing"), r = ce("blur"), n = ce("brightness"), i = ce("borderColor"), o = ce("borderRadius"), a = ce("borderSpacing"), s = ce("borderWidth"), c = ce("contrast"), u = ce("grayscale"), f = ce("hueRotate"), d = ce("invert"), h = ce("gap"), p = ce("gradientColorStops"), m = ce("gradientColorStopPositions"), g = ce("inset"), v = ce("margin"), x = ce("opacity"), w = ce("padding"), S = ce("saturate"), A = ce("scale"), R = ce("sepia"), N = ce("skew"), M = ce("space"), O = ce("translate"), k = () => ["auto", "contain", "none"], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", W, t], P = () => [W, t], $ = () => ["", Qe, pt], B = () => ["auto", qt, W], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], z = () => ["solid", "dashed", "dotted", "double", "none"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], te = () => ["", "0", W], ve = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], pe = () => [qt, W];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [tr],
      spacing: [Qe, pt],
      blur: ["none", "", mt, W],
      brightness: pe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", mt, W],
      borderSpacing: P(),
      borderWidth: $(),
      contrast: pe(),
      grayscale: te(),
      hueRotate: pe(),
      invert: te(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [wv, pt],
      inset: C(),
      margin: C(),
      opacity: pe(),
      padding: P(),
      saturate: pe(),
      scale: pe(),
      sepia: te(),
      skew: pe(),
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
        aspect: ["auto", "square", "video", W]
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
        columns: [mt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ve()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ve()
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
        object: [...G(), W]
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
        z: ["auto", er, W]
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
        flex: ["1", "auto", "initial", "none", W]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: te()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: te()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", er, W]
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
          span: ["full", er, W]
        }, W]
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
          span: [er, W]
        }, W]
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
        "auto-cols": ["auto", "min", "max", "fr", W]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", W]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [W, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [W, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [mt]
        }, mt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [W, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [W, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", mt, pt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ci]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", qt, ci]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qe, W]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", W]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", W]
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
        decoration: [...z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Qe, pt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Qe, W]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W]
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
        content: ["none", W]
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
        bg: [...G(), Cv]
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
        "divide-opacity": [x]
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
        "outline-offset": [Qe, W]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Qe, pt]
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
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Qe, pt]
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
        shadow: ["", "inner", "none", mt, Rv]
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
        "mix-blend": [...ee(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
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
        "drop-shadow": ["", "none", mt, W]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
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
        sepia: [R]
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
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
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
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W]
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
        ease: ["linear", "in", "out", "in-out", W]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", W]
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
        rotate: [er, W]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [O]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [O]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W]
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
        "will-change": ["auto", "scroll", "contents", "transform", W]
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
        stroke: [Qe, pt, ci]
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
  return kv(Mn(e));
}
let li;
function ui() {
  return li === void 0 && (li = navigator.platform.includes("Mac")), li;
}
function Mv(e) {
  return `${e}`.toLowerCase() === "mod" ? ui() ? "⌘" : "Ctrl" : `${e}`.toLowerCase() === "alt" ? ui() ? "⌥" : "Alt" : `${e}`.toLowerCase() === "shift" ? ui() ? "⇧" : "Shift" : e;
}
function Lv(e) {
  return e.map(Mv).join(" ");
}
const q = Gr.forwardRef(
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
      action: u = void 0,
      isActive: f = void 0,
      children: d,
      asChild: h = !1,
      upload: p = !1,
      initialDisplayedColor: m = void 0,
      ...g
    } = e, v = nd[r];
    return /* @__PURE__ */ E(Md, { children: [
      /* @__PURE__ */ l(Ld, { asChild: !0, children: /* @__PURE__ */ E(
        h ? cu : kd,
        {
          "data-state": f != null && f() ? "on" : "off",
          onClick: u,
          ref: t,
          size: "sm",
          className: Q("richtext-w-[32px] richtext-h-[32px]", o),
          disabled: i,
          ...g,
          children: [
            v && /* @__PURE__ */ l(v, { className: "richtext-size-4" }),
            d
          ]
        }
      ) }),
      n && /* @__PURE__ */ l(ns, { ...c, children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        /* @__PURE__ */ l("div", { children: n }),
        !!(s != null && s.length) && /* @__PURE__ */ l("span", { children: Lv(s) })
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
    component: q,
    componentProps: {
      tooltip: Te.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[i],
      action: () => e.commands.updateImage({ width: Xr[n] }),
      isActive: () => e.isActive("image", { width: Xr[n] })
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
    component: q,
    componentProps: {
      tooltip: Te.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[i],
      action: () => e.commands.updateImageGif({ width: Xr[n] }),
      isActive: () => e.isActive("image", { width: Xr[n] })
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
    component: q,
    componentProps: {
      tooltip: Te.t(`editor.textalign.${n}.tooltip`),
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
    component: q,
    componentProps: {
      tooltip: Te.t(`editor.textalign.${n}.tooltip`),
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
    component: q,
    componentProps: {
      tooltip: Te.t(`editor.textalign.${n}.tooltip`),
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
    component: q,
    componentProps: {
      tooltip: Te.t(`editor.textalign.${n}.tooltip`),
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
    { type: "flex-start", icon: "AlignLeft", tooltip: "Align left" },
    { type: "center", icon: "AlignCenter", tooltip: "Align center" },
    { type: "flex-end", icon: "AlignRight", tooltip: "Align right" }
  ].map((r) => ({
    type: `video-align-${r.type}`,
    component: q,
    componentProps: {
      tooltip: r.tooltip,
      icon: r.icon,
      action: () => e.commands.updateVideo({ align: r.type }),
      isActive: () => e.getAttributes("video").align === r.type
    }
  }));
}
function qv(e) {
  const t = ["size-small", "size-medium", "size-large"], r = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, i) => ({
    type: `video-${n}`,
    component: q,
    componentProps: {
      tooltip: Te.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[i],
      action: () => e.commands.updateVideo({ width: na[n] }),
      isActive: () => e.isActive("video", { width: na[n] })
    }
  }));
}
function Fv(e) {
  return [
    {
      type: "flipX",
      component: q,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.tooltip.flipX"),
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
      component: q,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.tooltip.flipY"),
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
      component: q,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Cr(t, r);
        }
      }
    }
  ];
}
function Uv(e) {
  return [
    ..._v(e),
    ...Bv(e),
    {
      type: "remove",
      component: q,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Cr(t, r);
        }
      }
    }
  ];
}
function pw(e) {
  return [
    ...jv(e),
    {
      type: "edit",
      component: q,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.edit"),
        icon: "Pencil",
        action: () => !0
      }
    },
    {
      type: "remove",
      component: q,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Cr(t, r);
        }
      }
    }
  ];
}
function mw(e) {
  return [
    ...zv(e),
    {
      type: "edit",
      component: q,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.edit"),
        icon: "Pencil",
        action: () => (console.log("AAA"), !0)
      }
    },
    {
      type: "remove",
      component: q,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Cr(t, r);
        }
      }
    }
  ];
}
function Wv(e) {
  return [
    ...qv(e),
    ...Hv(e),
    {
      type: "remove",
      component: q,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Cr(t, r);
        }
      }
    }
  ];
}
function Gv(e, t) {
  return Rf.reduce((r, n) => {
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
function Ha(e, t, r) {
  const n = [], i = e.node(0);
  r = typeof r == "number" && r >= 0 ? r : e.sameParent(t) ? Math.max(0, e.sharedDepth(t.pos) - 1) : e.sharedDepth(t.pos);
  const o = new Zh(e, t, r), a = o.depth === 0 ? 0 : i.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((s, c) => {
    const u = a + c, f = u + s.nodeSize;
    if (u < o.start || u >= o.end) return;
    const d = new Qh(i.resolve(u), i.resolve(f));
    n.push(d);
  }), n;
}
class qa {
  constructor(t, r) {
    $r(this, "anchor");
    $r(this, "head");
    this.anchor = t, this.head = r;
  }
  map(t) {
    return new qa(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const r = t.resolve(this.anchor), n = t.resolve(this.head);
    return new Ue(r, n);
  }
}
class Ue extends ep {
  constructor(r, n, i, o = 1) {
    const { doc: a } = r, s = r === n, c = r.pos === a.content.size && n.pos === a.content.size, u = s && !c ? a.resolve(n.pos + (o > 0 ? 1 : -1)) : n, f = s && c ? a.resolve(r.pos - (o > 0 ? 1 : -1)) : r, d = Ha(f.min(u), f.max(u), i);
    super(
      u.pos >= r.pos ? d[0].$from : d[d.length - 1].$to,
      u.pos >= r.pos ? d[d.length - 1].$to : d[0].$from,
      d
    );
    $r(this, "depth");
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
    return new qa(this.anchor, this.head);
  }
}
function Vv(e) {
  const t = e.cloneNode(!0), r = [e, ...Array.from(e.getElementsByTagName("*"))], n = [t, ...Array.from(t.getElementsByTagName("*"))];
  return r.forEach((i, o) => {
    n[o].style.cssText = function(a) {
      let s = "";
      const c = getComputedStyle(a);
      for (let u = 0; u < c.length; u += 1)
        s += `${c[u]}:${c.getPropertyValue(c[u])};`;
      return s;
    }(i);
  }), t;
}
function Dr(e, t) {
  return window.getComputedStyle(e)[t];
}
function Kv(e = 0, t = 0, r = 0) {
  return Math.min(Math.max(e, t), r);
}
function tc(e) {
  e.parentNode !== null && e.parentNode !== void 0 && e.parentNode.removeChild(e);
}
function td(e) {
  const { x: t, y: r, direction: n, editor: i } = e;
  let o = null, a = null, s = null, c = t;
  for (; a === null && c < window.innerWidth && c > 0; ) {
    const u = document.elementsFromPoint(c, r), f = u.findIndex((h) => h.classList.contains("ProseMirror")), d = u.slice(0, f);
    if (d.length > 0) {
      const h = d[0];
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
function Yv(e, t) {
  const { doc: r } = t.view.state, n = td({ editor: t, x: e.clientX, y: e.clientY, direction: "right" });
  if (!n.resultNode || n.pos === null) return [];
  const i = e.clientX, o = function(f, d, h) {
    const p = Number.parseInt(Dr(f.dom, "paddingLeft"), 10), m = Number.parseInt(Dr(f.dom, "paddingRight"), 10), g = Number.parseInt(Dr(f.dom, "borderLeftWidth"), 10), v = Number.parseInt(Dr(f.dom, "borderLeftWidth"), 10), x = f.dom.getBoundingClientRect();
    return {
      left: Kv(
        d,
        x.left + p + g,
        x.right - m - v
      ),
      top: h
    };
  }(t.view, i, e.clientY), a = t.view.posAtCoords(o);
  if (!a) return [];
  const { pos: s } = a;
  if (!r.resolve(s).parent) return [];
  const c = r.resolve(n.pos), u = r.resolve(n.pos + 1);
  return Ha(c, u, 0);
}
function rc(e, t) {
  const r = e.resolve(t), { depth: n } = r;
  return n === 0 ? t : r.pos - r.parentOffset - 1;
}
function nc(e, t) {
  const r = e.nodeAt(t), n = e.resolve(t);
  let { depth: i } = n, o = r;
  for (; i > 0; ) {
    const a = n.node(i);
    i -= 1, i === 0 && (o = a);
  }
  return o;
}
function ic(e, t) {
  let r = t;
  for (; r && r.parentNode && r.parentNode !== e.dom; ) r = r.parentNode;
  return r;
}
const rd = new Wt("dragHandle");
function Xv({
  pluginKey: e = rd,
  element: t,
  editor: r,
  tippyOptions: n,
  onNodeChange: i
}) {
  const o = document.createElement("div");
  let a = null, s = !1, c = null, u = -1;
  return t.addEventListener("dragstart", (f) => {
    const { view: d } = r;
    if (!f.dataTransfer) return;
    const { empty: h, $from: p, $to: m } = d.state.selection, g = Yv(f, r), v = Ha(p, m, 0), x = v.some((k) => g.find((_) => _.$from === k.$from && _.$to === k.$to)), w = h || !x ? g : v;
    if (w.length === 0) return;
    const { tr: S } = d.state, A = document.createElement("div"), R = w[0].$from.pos, N = w[w.length - 1].$to.pos, M = Ue.create(d.state.doc, R, N), O = M.content();
    w.forEach((k) => {
      const _ = Vv(d.nodeDOM(k.$from.pos));
      A.append(_);
    }), A.style.position = "absolute", A.style.top = "-10000px", document.body.append(A), f.dataTransfer.clearData(), f.dataTransfer.setDragImage(A, 0, 0), d.dragging = { slice: O, move: !0 }, S.setSelection(M), d.dispatch(S), document.addEventListener("drop", () => tc(A), { once: !0 }), setTimeout(() => {
      t && (t.style.pointerEvents = "none");
    }, 0);
  }), t.addEventListener("dragend", () => {
    t && (t.style.pointerEvents = "auto");
  }), new Ot({
    key: typeof e == "string" ? new Wt(e) : e,
    state: {
      init: () => ({ locked: !1 }),
      apply(f, d) {
        const h = f.getMeta("lockDragHandle"), p = f.getMeta("hideDragHandle");
        if (h !== void 0 && (s = h), p && a)
          return a.hide(), s = !1, c = null, u = -1, i == null || i({ editor: r, node: null, pos: -1 }), d;
        if (f.docChanged && u !== -1 && t && a) {
          const m = f.mapping.map(u);
          m !== u && (u = m);
        }
        return d;
      }
    },
    view: (f) => {
      return d(), h(r.view.dom), a = yp(f.dom, {
        ...p(),
        ...n
      }), {
        update(A, R) {
          if (!m(t, a) || (t.draggable = !s, !g(A, R)))
            return;
          const N = v(A);
          N && x(A, N);
        },
        destroy() {
          S();
        }
      };
      function d() {
        t.draggable = !0, t.style.pointerEvents = "auto";
      }
      function h(A) {
        var R;
        (R = A.parentElement) == null || R.appendChild(o), o.appendChild(t), Object.assign(o.style, {
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
      function m(A, R) {
        return A && R;
      }
      function g(A, R) {
        return !A.state.doc.eq(R.doc) && u !== -1;
      }
      function v(A) {
        let R = A.nodeDOM(u);
        return R = ic(A, R), R === A.dom || (R == null ? void 0 : R.nodeType) !== 1 ? null : R;
      }
      function x(A, R) {
        const N = A.posAtDOM(R, 0), M = nc(r.state.doc, N);
        if (M === c)
          return;
        const O = rc(r.state.doc, N);
        c = M, u = O, i == null || i({
          editor: r,
          node: c,
          pos: u
        }), w(R);
      }
      function w(A) {
        a.setProps({
          getReferenceClientRect: () => A.getBoundingClientRect()
        }), a.show();
      }
      function S() {
        a == null || a.destroy(), t && tc(o);
      }
    },
    props: {
      handleDOMEvents: {
        mouseleave: (f, d) => {
          if (s || !h(d)) return !1;
          return p(), m(), !1;
          function h(g) {
            return g.target && !o.contains(g.relatedTarget);
          }
          function p() {
            a == null || a.hide();
          }
          function m() {
            c = null, u = -1, i == null || i({
              editor: r,
              node: null,
              pos: -1
            });
          }
        },
        mousemove: Bn((f, d) => {
          if (!t || !a || s)
            return !1;
          const h = td({
            x: d.clientX,
            y: d.clientY,
            direction: "right",
            editor: r
          });
          if (!h.resultElement || h.resultElement === f.dom)
            return !1;
          const p = ic(f, h.resultElement);
          if (p === f.dom || (p == null ? void 0 : p.nodeType) !== 1)
            return !1;
          const m = f.posAtDOM(p, 0), g = nc(r.state.doc, m);
          if (g === c)
            return !1;
          const v = rc(r.state.doc, m);
          return c = g, u = v, i == null || i({
            editor: r,
            node: c,
            pos: u
          }), a.setProps({
            getReferenceClientRect: () => p.getBoundingClientRect()
          }), a.show(), !1;
        }, 100)
      }
    }
  });
}
var va = /* @__PURE__ */ ((e) => (e[e.max = 7] = "max", e[e.min = 0] = "min", e[e.more = 1] = "more", e[e.less = -1] = "less", e))(va || {});
function Jv(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
function Zv(e, t, r, n) {
  const { doc: i, selection: o } = e;
  if (!i || !o || !(o instanceof Gt || o instanceof tp))
    return e;
  const { from: a, to: s } = o;
  return i.nodesBetween(a, s, (c, u) => {
    const f = c.type;
    return r.includes(f.name) ? (e = ya(e, u, t), !1) : !rp(c.type.name, n.extensionManager.extensions);
  }), e;
}
function ya(e, t, r) {
  if (!e.doc)
    return e;
  const n = e.doc.nodeAt(t);
  if (!n)
    return e;
  const a = Jv((n.attrs.indent || 0) + r, 0, 7);
  if (a === n.attrs.indent)
    return e;
  const s = {
    ...n.attrs,
    indent: a
  };
  return e.setNodeMarkup(t, n.type, s, n.marks);
}
function gw({ delta: e, types: t }) {
  return ({ state: r, dispatch: n, editor: i }) => {
    const { selection: o } = r;
    let { tr: a } = r;
    return a = a.setSelection(o), a = Zv(a, e, t, i), a.docChanged ? (n && n(a), !0) : !1;
  };
}
function Qv(e) {
  var O, k, _;
  const { pluginKey: t = rd } = e, { t: r } = we(), [n, i] = Z(null), [o, a] = Z(-1), s = it(null), c = it(null), [u, f] = Z(!1), d = e.editor.extensionManager.extensions.some((C) => C.name === "textAlign"), h = e.editor.extensionManager.extensions.some((C) => C.name === "indent"), p = e.editor.extensionManager.extensions.some((C) => C.name === "clear");
  he(() => {
    s.current && !e.editor.isDestroyed && (c.current = Xv({
      editor: e.editor,
      element: s.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: R
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
  function x(C) {
    e.editor.commands.setTextAlign(C);
  }
  function w() {
    const C = ya(e.editor.state.tr, o, 1);
    C.setMeta("hideDragHandle", !0), e.editor.view.dispatch && e.editor.view.dispatch(C);
  }
  function S() {
    const C = ya(e.editor.state.tr, o, -1);
    e.editor.view.dispatch && e.editor.view.dispatch(C);
  }
  function A() {
    e.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(o).deleteSelection().run();
  }
  function R(C) {
    C.node && i(C.node), a(C.pos);
  }
  function N() {
    var C;
    if (o !== -1) {
      const P = (n == null ? void 0 : n.nodeSize) || 0, $ = o + P, B = (n == null ? void 0 : n.type.name) === "paragraph" && ((C = n == null ? void 0 : n.content) == null ? void 0 : C.size) === 0, G = B ? o + 2 : $ + 2;
      e.editor.chain().command(({ dispatch: z, tr: ee, state: J }) => z ? (B ? ee.insertText("/", o, o + 1) : ee.insert(
        $,
        J.schema.nodes.paragraph.create(null, [J.schema.text("/")])
      ), z(ee)) : !0).focus(G).run();
    }
  }
  he(() => (u ? e.editor.commands.setMeta("lockDragHandle", !0) : e.editor.commands.setMeta("lockDragHandle", !1), () => {
    e.editor.commands.setMeta("lockDragHandle", !1);
  }), [u]), he(() => () => {
    c.current && (e.editor.unregisterPlugin(t), c.current = null);
  }, []), he(() => {
    var C;
    (C = e.editor) != null && C.isDestroyed && c.current && (e.editor.unregisterPlugin(t), c.current = null);
  }, [(O = e.editor) == null ? void 0 : O.isDestroyed]);
  const M = (C) => {
    e != null && e.disabled || f(C);
  };
  return /* @__PURE__ */ l(
    "div",
    {
      ref: s,
      className: `drag-handle richtext-duration-200 richtext-ease-in-out [transition-property:top,_left] ${e == null ? void 0 : e.className}`,
      style: {
        opacity: e != null && e.disabled ? 0 : 1
      },
      children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5 richtext-duration-200 richtext-ease-in-out [transition-property:top,_left]", children: [
        /* @__PURE__ */ l(
          Ce,
          {
            className: "!richtext-size-7 richtext-cursor-grab",
            disabled: e == null ? void 0 : e.disabled,
            onClick: N,
            size: "icon",
            type: "button",
            variant: "ghost",
            children: /* @__PURE__ */ l(
              be,
              {
                className: "richtext-text-lg richtext-text-neutral-600 dark:richtext-text-neutral-200",
                name: "Plus"
              }
            )
          }
        ),
        /* @__PURE__ */ E(
          Fx,
          {
            onOpenChange: M,
            open: u,
            children: [
              /* @__PURE__ */ E("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
                /* @__PURE__ */ E(Md, { children: [
                  /* @__PURE__ */ l(
                    Ld,
                    {
                      asChild: !0,
                      disabled: e == null ? void 0 : e.disabled,
                      children: /* @__PURE__ */ l(
                        Ce,
                        {
                          className: "richtext-relative richtext-z-[1] !richtext-size-7 richtext-cursor-grab",
                          disabled: e == null ? void 0 : e.disabled,
                          size: "icon",
                          type: "button",
                          variant: "ghost",
                          onMouseUp: (C) => {
                            C.preventDefault(), !(e != null && e.disabled) && f(!0);
                          },
                          children: /* @__PURE__ */ l(
                            be,
                            {
                              className: "richtext-text-sm richtext-text-neutral-600 dark:richtext-text-neutral-200",
                              name: "Grip"
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ l(ns, { children: r("editor.draghandle.tooltip") })
                ] }),
                /* @__PURE__ */ l(Ux, { className: "richtext-absolute richtext-left-0 richtext-top-0 richtext-z-0 richtext-size-[28px]" })
              ] }),
              /* @__PURE__ */ E(
                Ad,
                {
                  align: "start",
                  className: "richtext-w-48",
                  side: "bottom",
                  sideOffset: 0,
                  children: [
                    /* @__PURE__ */ E(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3 richtext-bg-opacity-10 hover:richtext-bg-red-400 hover:richtext-bg-opacity-20 focus:richtext-bg-red-400 focus:richtext-bg-opacity-30 focus:richtext-text-red-500 dark:hover:richtext-bg-opacity-20 dark:hover:richtext-text-red-500",
                        onClick: A,
                        children: [
                          /* @__PURE__ */ l(be, { name: "Trash2" }),
                          /* @__PURE__ */ l("span", { children: r("editor.remove") })
                        ]
                      }
                    ),
                    p ? /* @__PURE__ */ E(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: m,
                        children: [
                          /* @__PURE__ */ l(be, { name: "PaintRoller" }),
                          /* @__PURE__ */ l("span", { children: r("editor.clear.tooltip") })
                        ]
                      }
                    ) : null,
                    /* @__PURE__ */ E(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: g,
                        children: [
                          /* @__PURE__ */ l(be, { name: "Clipboard" }),
                          /* @__PURE__ */ l("span", { children: r("editor.copyToClipboard") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ E(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: v,
                        children: [
                          /* @__PURE__ */ l(be, { name: "Copy" }),
                          /* @__PURE__ */ l("span", { children: r("editor.copy") })
                        ]
                      }
                    ),
                    d || h ? /* @__PURE__ */ l(Cd, {}) : null,
                    d ? /* @__PURE__ */ E(gc, { children: [
                      /* @__PURE__ */ E(Ra, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ l(be, { name: "AlignCenter" }),
                        /* @__PURE__ */ l("span", { children: r("editor.textalign.tooltip") })
                      ] }),
                      /* @__PURE__ */ l(mc, { children: /* @__PURE__ */ E(Ia, { children: [
                        /* @__PURE__ */ E(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => x("left"),
                            children: [
                              /* @__PURE__ */ l(be, { name: "AlignLeft" }),
                              /* @__PURE__ */ l("span", { children: r("editor.textalign.left.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ E(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => x("center"),
                            children: [
                              /* @__PURE__ */ l(be, { name: "AlignCenter" }),
                              /* @__PURE__ */ l("span", { children: r("editor.textalign.center.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ E(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => x("right"),
                            children: [
                              /* @__PURE__ */ l(be, { name: "AlignRight" }),
                              /* @__PURE__ */ l("span", { children: r("editor.textalign.right.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null,
                    h ? /* @__PURE__ */ E(gc, { children: [
                      /* @__PURE__ */ E(Ra, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ l(be, { name: "IndentIncrease" }),
                        /* @__PURE__ */ l("span", { children: r("editor.indent") })
                      ] }),
                      /* @__PURE__ */ l(mc, { children: /* @__PURE__ */ E(Ia, { children: [
                        /* @__PURE__ */ E(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((k = n == null ? void 0 : n.attrs) == null ? void 0 : k.indent) >= va.max,
                            onClick: w,
                            children: [
                              /* @__PURE__ */ l(be, { name: "IndentIncrease" }),
                              /* @__PURE__ */ l("span", { children: r("editor.indent.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ E(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((_ = n == null ? void 0 : n.attrs) == null ? void 0 : _.indent) <= va.min,
                            onClick: S,
                            children: [
                              /* @__PURE__ */ l(be, { name: "IndentDecrease" }),
                              /* @__PURE__ */ l("span", { children: r("editor.outdent.tooltip") })
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
const ey = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function ty({ item: e, disabled: t, editor: r }) {
  var i;
  const n = e.component;
  return n ? /* @__PURE__ */ l(
    n,
    {
      ...e.componentProps,
      disabled: t || ((i = e == null ? void 0 : e.componentProps) == null ? void 0 : i.disabled),
      editor: r
    }
  ) : /* @__PURE__ */ l(ge, {});
}
function ry(e) {
  const { t, lang: r } = we(), n = ({ editor: o }) => {
    const { selection: a } = o.view.state, { $from: s, to: c } = a;
    return s.pos === c ? !1 : a instanceof Gt;
  }, i = Ae(() => e.disabled || !(e != null && e.editor) ? [] : Gv(e.editor, t), [e.disabled, e.editor, r, t]);
  return /* @__PURE__ */ l(
    St,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: n,
      tippyOptions: ey,
      children: i != null && i.length ? /* @__PURE__ */ l("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-gap-[4px] richtext-whitespace-nowrap", children: i == null ? void 0 : i.map((o, a) => (o == null ? void 0 : o.type) === "divider" ? /* @__PURE__ */ l(
        We,
        {
          className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
          orientation: "vertical"
        },
        `bubbleMenu-divider-${a}`
      ) : /* @__PURE__ */ l(
        ty,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: o
        },
        `bubbleMenu-text-${a}`
      )) }) }) : /* @__PURE__ */ l(ge, {})
    }
  );
}
function ny(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function iy(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
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
function oy() {
  return /* @__PURE__ */ l(
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
      children: /* @__PURE__ */ l(
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
function ay() {
  return /* @__PURE__ */ l(
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
      children: /* @__PURE__ */ l(
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
function sy(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function be(e) {
  const t = nd[e.name];
  return t ? /* @__PURE__ */ l(t, { onClick: e == null ? void 0 : e.onClick, className: `richtext-w-4 richtext-h-4 ${(e == null ? void 0 : e.className) || ""}` }) : null;
}
function cy(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function ly(e) {
  return /* @__PURE__ */ l(
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
      children: /* @__PURE__ */ l(
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
function uy(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function dy(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function fy(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function hy() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4" }) });
}
function py() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4" }) });
}
function my() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 21v-4m0-4V9m0-4V3m-2 18h4M8 5v4h11l2-2l-2-2zm6 8v4H6l-2-2l2-2z" }) });
}
function gy() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M23.943 19.806a.2.2 0 0 0-.168-.034c-1.26-1.855-2.873-3.61-4.419-5.315l-.252-.284c-.001-.073-.067-.12-.134-.15l-.084-.084c-.05-.1-.169-.167-.286-.1c-.47.234-.907.585-1.327.919c-.554.434-1.109.87-1.63 1.354a5 5 0 0 0-.588.618c-.084.117-.017.217.084.267c-.37.368-.74.736-1.109 1.12a.2.2 0 0 0-.05.134c0 .05.033.1.067.117l.655.502v.016c.924.92 2.554 2.173 4.285 3.527c.251.201.52.402.773.602c.117.134.234.285.335.418c.05.066.169.084.236.033c.033.034.084.067.118.1a.24.24 0 0 0 .1.034a.15.15 0 0 0 .135-.066a.24.24 0 0 0 .033-.1c.017 0 .017.016.034.016a.2.2 0 0 0 .134-.05l3.058-3.327c.12-.116.014-.267 0-.267m-7.628-.134l-1.546-1.17l-.15-.1c-.035-.017-.068-.05-.102-.067l-.117-.1c.66-.66 1.33-1.308 2-1.956c-.488.484-1.463 1.906-1.261 2.373c.002 0 .018.042.067.084zm4.1 3.126l-1.277-.97a27 27 0 0 0-1.58-1.504c.69.518 1.277.97 1.361 1.053c.673.585.638.485 1.093.87l.554.4c-.074.103-.151.148-.151.151m.336.25l-.034-.016a1 1 0 0 0 .152-.117zM.588 3.476c.033.217.084.435.117.636c.201 1.103.403 2.106.772 2.858l.152.568c.05.217.134.485.219.552a67 67 0 0 0 3.578 2.942a.18.18 0 0 0 .219 0s0 .016.016.016a.15.15 0 0 0 .118.05a.2.2 0 0 0 .134-.05c1.798-1.989 3.142-3.627 4.1-4.998c.068-.066.084-.167.084-.25c.067-.067.118-.151.185-.201c.067-.067.067-.184 0-.235l-.017-.016c0-.033-.017-.084-.05-.1c-.42-.401-.722-.685-1.042-.986a94 94 0 0 1-2.352-2.273c-.017-.017-.034-.034-.067-.034c-.336-.117-1.025-.234-1.882-.385c-1.277-.216-3.008-.517-4.57-.986c0 0-.101 0-.118.017l-.05.05C.05.714.022.707 0 .718c.017.1.017.167.05.284c0 .033.068.301.068.334zm7.19 4.78l-.033.034a.036.036 0 0 1 .033-.034M6.553 2.238c.101.1.521.502.622.585c-.437-.2-1.529-.702-2.034-.869c.505.1 1.194.201 1.412.284M.79 1.403c.252.434.454 1.939.655 3.41c-.118-.469-.201-.936-.302-1.372C.992 2.673.84 1.988.638 1.386c.124 0 .152.021.152.017m-.286-.369c0-.016 0-.033-.017-.033c.085 0 .135.017.202.05c0 .006-.145-.017-.185-.017m23.17-.217c.017-.066-.336-.367-.219-.384c.253-.017.253-.401 0-.401c-.335.017-.688.1-1.008.15c-.587.117-1.192.234-1.78.367a80 80 0 0 0-3.949.937c-.403.117-.857.2-1.243.401c-.135.067-.118.2-.05.284c-.034.017-.051.017-.085.034c-.117.017-.218.034-.335.05c-.102.017-.152.1-.135.2c0 .017.017.05.017.067c-.706.936-1.496 1.923-2.353 2.976c-.84.969-1.73 1.989-2.62 3.042c-2.84 3.31-6.05 7.07-9.594 10.38a.16.16 0 0 0 0 .234c.016.016.033.033.05.033c-.05.05-.101.085-.152.134q-.05.05-.05.1a.4.4 0 0 0-.067.084c-.067.067-.067.184.017.234c.067.066.185.066.235-.017c.017-.017.017-.033.033-.033a.265.265 0 0 1 .37 0c.202.217.404.435.588.618l-.42-.35c-.067-.067-.184-.05-.234.016c-.068.066-.051.184.016.234l4.469 3.727c.034.034.067.034.118.034a.15.15 0 0 0 .117-.05l.101-.1c.017.016.05.016.067.016c.05 0 .084-.016.118-.05c6.049-6.05 10.922-10.614 16.5-14.693c.05-.033.067-.1.067-.15c.067 0 .118-.05.15-.117c1.026-3.125 1.228-5.9 1.295-7.27c0-.059.016-.038.016-.068c.017-.033.017-.05.017-.05a.98.98 0 0 0-.067-.619m-10.82 4.915c.268-.301.537-.619.806-.903c-1.73 2.273-4.603 5.767-8.67 9.929c2.773-3.059 5.562-6.218 7.864-9.026M5.14 23.466c-.016-.017-.016-.017 0-.017zm2.504-2.156c.135-.15.27-.284.42-.434c0 0 0 .016.017.016c-.224.198-.433.418-.437.418m.69-.668c.099-.1.14-.173.284-.318c.992-1.02 2.017-2.04 3.059-3.076l.016-.016c.252-.2.555-.418.824-.619a228 228 0 0 0-4.184 4.029M14.852 3.91c-.554.719-1.176 1.671-1.697 2.423c-1.646 2.374-6.94 8.174-7.057 8.274a1190 1190 0 0 1-4.839 4.597l-.1.1c-.085-.1-.085-.25.016-.334C8.652 11.966 13.19 6.133 15.021 3.576c-.05.116-.084.216-.168.334zm2.906 3.427c-.671-.386-.99-.987-.806-1.572l.05-.2a.8.8 0 0 1 .085-.167a1.9 1.9 0 0 1 .756-.703c.016 0 .033 0 .05-.016c-.017-.034-.017-.084-.017-.134c.017-.1.085-.167.202-.167c.202 0 .824.184 1.059.384c.067.05.134.117.202.184c.084.1.218.268.285.401c.034.017.067.184.118.268c.033.134.067.284.05.418c-.017.016 0 .116-.017.116a1.6 1.6 0 0 1-.218.619c-.03.03.006.012-.05.067a1.2 1.2 0 0 1-.32.334a1.49 1.49 0 0 1-1.26.234a2 2 0 0 0-.169-.066m4.37 1.403c0 .017-.017.05 0 .067c-.034 0-.05.017-.085.034a110 110 0 0 0-3.915 3.025c1.11-.986 2.218-1.989 3.378-2.975c.336-.301.571-.686.638-1.12l.168-1.003v-.033c.085-.201.404-.118.353.1c-.004-.001-.173.795-.537 1.905" }) });
}
function vy() {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z" }),
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z" })
  ] });
}
function yy() {
  return /* @__PURE__ */ E(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      className: "icon",
      viewBox: "0 0 1024 1024",
      children: [
        /* @__PURE__ */ l(
          "path",
          {
            fill: "currentColor",
            d: "M679.253 402.364 618.77 561.015l-60.348-158.651a30.04 30.04 0 0 0-30.447-18.637 29.76 29.76 0 0 0-30.447 18.637l-60.416 158.651-60.416-158.651a30.515 30.515 0 0 0-38.843-17.272 28.945 28.945 0 0 0-17.954 37.547l88.815 233.267c4.369 11.469 15.7 19.115 28.398 19.115a30.31 30.31 0 0 0 28.468-19.115l62.395-163.908 62.396 163.84c4.437 11.605 15.701 19.183 28.4 19.183a30.31 30.31 0 0 0 28.466-19.115l88.747-233.267a28.945 28.945 0 0 0-17.886-37.547 30.447 30.447 0 0 0-38.912 17.272zm219.478 395.605-51.883-29.218c-28.672-16.18-52.224-3.072-52.224 29.082v.273H643.209a29.833 29.833 0 0 0-30.31 29.354c0 16.18 13.584 29.218 30.31 29.218h151.825c1.092 30.516 24.03 43.077 52.224 27.648l51.063-27.989c29.013-15.906 29.15-42.189.41-58.368"
          }
        ),
        /* @__PURE__ */ l(
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
function xy() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ E("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", color: "currentColor", children: [
    /* @__PURE__ */ l("path", { d: "M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.2 4.2 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628c.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252c1.166.406 2.085 1.263 2.52 2.35c.27.676.27 1.523.27 3.216V10" }),
    /* @__PURE__ */ l("path", { d: "M2.75 12c0-1.84 1.506-3.333 3.364-3.333c.672 0 1.464.116 2.117-.057a1.67 1.67 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2m.002 16h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523" })
  ] }) });
}
function by() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M6.5 3a.75.75 0 0 1 .697.471l3 7.5a.75.75 0 0 1-1.393.557L7.992 9.5H5.008l-.811 2.028a.75.75 0 0 1-1.393-.556l3-7.5A.75.75 0 0 1 6.5 3m0 2.77L5.608 8h1.784zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z" }) });
}
function wy() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 48 48", children: /* @__PURE__ */ E("g", { fill: "none", stroke: "currentColor", strokeWidth: "4", children: [
    /* @__PURE__ */ l("circle", { cx: "10", cy: "24", r: "4" }),
    /* @__PURE__ */ l("circle", { cx: "38", cy: "10", r: "4" }),
    /* @__PURE__ */ l("circle", { cx: "38", cy: "24", r: "4" }),
    /* @__PURE__ */ l("circle", { cx: "38", cy: "38", r: "4" }),
    /* @__PURE__ */ l("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M34 38H22V10h12M14 24h20" })
  ] }) });
}
function Sy() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M13.5 3a.75.75 0 0 0-.697.471l-3 7.5a.75.75 0 0 0 1.393.557l.812-2.028h2.984l.811 2.028a.75.75 0 0 0 1.393-.556l-3-7.5A.75.75 0 0 0 13.5 3m0 2.77L14.392 8h-1.784zM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" }) });
}
function Ay() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548", color: "currentColor" }) });
}
function Cy() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6l1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6l-1.4-1.4z"
    }
  ) });
}
function Ty() {
  return /* @__PURE__ */ l(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
        }
      )
    }
  );
}
const nd = {
  Bold: Wh,
  LoaderCircle: Uh,
  Italic: Fh,
  Underline: qh,
  Quote: Hh,
  TextQuote: iy,
  Strikethrough: zh,
  Minus: jh,
  Eraser: Bh,
  PaintRoller: Dh,
  Redo2: _h,
  Undo2: $h,
  AlignCenter: Jh,
  AlignJustify: Xh,
  AlignLeft: Yh,
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
  Video: wh,
  Maximize: bh,
  Minimize: xh,
  Table: yh,
  Sparkles: vh,
  Pencil: gh,
  Unlink: mh,
  BetweenHorizonalEnd: ph,
  BetweenHorizonalStart: hh,
  BetweenVerticalStart: fh,
  BetweenVerticalEnd: dh,
  TableCellsMerge: uh,
  TableCellsSplit: lh,
  Trash2: ch,
  Trash: sh,
  Replace: Cs,
  ChevronsUpDown: ah,
  LineHeight: cy,
  Word: sy,
  Heading1: oh,
  Heading2: ih,
  Heading3: nh,
  Heading4: rh,
  Heading5: th,
  Heading6: eh,
  Columns2: Ts,
  Columns3: Qf,
  Columns4: Zf,
  Plus: du,
  Grip: Jf,
  Copy: Xf,
  Clipboard: Yf,
  PanelLeft: Kf,
  PanelRight: Vf,
  Columns: Ts,
  Iframe: Gf,
  MenuDown: ly,
  SizeS: fy,
  SizeM: dy,
  SizeL: uy,
  AspectRatio: ny,
  Emoji: Wf,
  DeleteColumn: oy,
  DeleteRow: ay,
  SearchAndReplace: Cs,
  EmojiIcon: Uf,
  KatexIcon: Ff,
  ExportPdf: vy,
  ExportWord: yy,
  ImportWord: Ty,
  ColumnAddLeft: hy,
  ColumnAddRight: py,
  BookMarked: qf,
  Excalidraw: gy,
  ZoomIn: Hf,
  ZoomOut: zf,
  Settings: jf,
  Eye: Bf,
  TextDirection: my,
  LeftToRight: by,
  RightToLeft: Sy,
  Attachment: Df,
  GifIcon: xy,
  ChevronUp: _f,
  Crop: $f,
  Mermaid: wy,
  Twitter: Ay,
  CodeView: Cy,
  FlipX: Lf,
  FlipY: Mf,
  PencilRuler: kf,
  WrapText: Nf
};
function Ey({ fill: e }) {
  return /* @__PURE__ */ l(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 256 256",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ l("g", { id: "icon/填充色", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ E("g", { id: "icon/背景颜色", children: [
        /* @__PURE__ */ l("g", { id: "编组", fill: "currentColor", children: /* @__PURE__ */ E(
          "g",
          {
            transform: "translate(119.502295, 137.878331) rotate(-135.000000) translate(-119.502295, -137.878331) translate(48.002295, 31.757731)",
            id: "矩形",
            children: [
              /* @__PURE__ */ l(
                "path",
                {
                  d: "M100.946943,60.8084699 L43.7469427,60.8084699 C37.2852111,60.8084699 32.0469427,66.0467383 32.0469427,72.5084699 L32.0469427,118.70847 C32.0469427,125.170201 37.2852111,130.40847 43.7469427,130.40847 L100.946943,130.40847 C107.408674,130.40847 112.646943,125.170201 112.646943,118.70847 L112.646943,72.5084699 C112.646943,66.0467383 107.408674,60.8084699 100.946943,60.8084699 Z M93.646,79.808 L93.646,111.408 L51.046,111.408 L51.046,79.808 L93.646,79.808 Z",
                  fillRule: "nonzero"
                }
              ),
              /* @__PURE__ */ l(
                "path",
                {
                  d: "M87.9366521,16.90916 L87.9194966,68.2000001 C87.9183543,69.4147389 86.9334998,70.399264 85.7187607,70.4 L56.9423078,70.4 C55.7272813,70.4 54.7423078,69.4150264 54.7423078,68.2 L54.7423078,39.4621057 C54.7423078,37.2523513 55.5736632,35.1234748 57.0711706,33.4985176 L76.4832996,12.4342613 C78.9534987,9.75382857 83.1289108,9.5834005 85.8093436,12.0535996 C87.1658473,13.303709 87.9372691,15.0644715 87.9366521,16.90916 Z",
                  fillRule: "evenodd"
                }
              ),
              /* @__PURE__ */ l(
                "path",
                {
                  d: "M131.3,111.241199 L11.7,111.241199 C5.23826843,111.241199 0,116.479467 0,122.941199 L0,200.541199 C0,207.002931 5.23826843,212.241199 11.7,212.241199 L131.3,212.241199 C137.761732,212.241199 143,207.002931 143,200.541199 L143,122.941199 C143,116.479467 137.761732,111.241199 131.3,111.241199 Z M124,130.241 L124,193.241 L19,193.241 L19,130.241 L124,130.241 Z",
                  fillRule: "nonzero"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ l(
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
function Ry(e) {
  const [t, r] = Z(void 0);
  function n(a) {
    var s;
    (s = e.action) == null || s.call(e, a);
  }
  function i() {
    var a;
    (a = e.action) == null || a.call(e, t);
  }
  const o = oe(
    Bn((a) => {
      r(a);
    }, 350),
    []
  );
  return /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ l(
      q,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        action: i,
        tooltipOptions: e == null ? void 0 : e.tooltipOptions,
        shortcutKeys: e == null ? void 0 : e.shortcutKeys,
        children: /* @__PURE__ */ l("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ l(Ey, { fill: t }) })
      }
    ),
    /* @__PURE__ */ l(
      j2,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: n,
        highlight: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ l(Ce, { variant: "ghost", size: "icon", className: "!richtext-w-3 !richtext-h-[32px]", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ l(be, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
function Iy({ editor: e, disabled: t, actions: r }) {
  var v, x, w, S, A, R, N, M, O, k, _, C, P, $, B, G, z, ee;
  const n = ({ editor: J }) => np(J.view.state, "table"), { t: i } = we();
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
  function u() {
    e.chain().focus().addRowAfter().run();
  }
  function f() {
    e.chain().focus().deleteRow().run();
  }
  function d() {
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
  return /* @__PURE__ */ l(
    St,
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
          var Be;
          const {
            view: J,
            state: {
              selection: { from: te }
            }
          } = e, ve = J.domAtPos(te).node;
          if (!ve)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const pe = (Be = ve == null ? void 0 : ve.closest) == null ? void 0 : Be.call(ve, ".tableWrapper");
          return pe ? pe.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [xp],
        sticky: "popper"
      },
      children: t ? /* @__PURE__ */ l(ge, {}) : /* @__PURE__ */ E("div", { className: "richtext-flex richtext-size-full richtext-min-w-32 richtext-flex-row richtext-items-center richtext-gap-0.5 richtext-rounded-lg !richtext-border richtext-border-border richtext-bg-background richtext-p-2 richtext-leading-none richtext-shadow-sm", children: [
        /* @__PURE__ */ l(
          q,
          {
            action: o,
            disabled: !((x = (v = e == null ? void 0 : e.can()) == null ? void 0 : v.addColumnBefore) != null && x.call(v)),
            icon: "BetweenHorizonalEnd",
            tooltip: i("editor.table.menu.insertColumnBefore"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          q,
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
        /* @__PURE__ */ l(
          q,
          {
            action: s,
            disabled: !((R = e == null ? void 0 : (A = e.can()).deleteColumn) != null && R.call(A)),
            icon: "DeleteColumn",
            tooltip: i("editor.table.menu.deleteColumn"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          We,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ l(
          q,
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
        /* @__PURE__ */ l(
          q,
          {
            action: u,
            disabled: !((k = (O = e == null ? void 0 : e.can()) == null ? void 0 : O.addRowAfter) != null && k.call(O)),
            icon: "BetweenVerticalStart",
            tooltip: i("editor.table.menu.insertRowBelow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          q,
          {
            action: f,
            disabled: !((C = (_ = e == null ? void 0 : e.can()) == null ? void 0 : _.deleteRow) != null && C.call(_)),
            icon: "DeleteRow",
            tooltip: i("editor.table.menu.deleteRow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          We,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ l(
          q,
          {
            action: d,
            disabled: !(($ = (P = e == null ? void 0 : e.can()) == null ? void 0 : P.mergeCells) != null && $.call(P)),
            icon: "TableCellsMerge",
            tooltip: i("editor.table.menu.mergeCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          q,
          {
            action: h,
            disabled: !((G = (B = e == null ? void 0 : e.can()) == null ? void 0 : B.splitCell) != null && G.call(B)),
            icon: "TableCellsSplit",
            tooltip: i("editor.table.menu.splitCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          We,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ l(
          Ry,
          {
            action: m,
            editor: e,
            tooltip: i("editor.table.menu.setCellsBgColor"),
            tooltipOptions: {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          q,
          {
            action: p,
            disabled: !((ee = (z = e == null ? void 0 : e.can()) == null ? void 0 : z.deleteTable) != null && ee.call(z)),
            icon: "Trash2",
            tooltip: i("editor.table.menu.deleteTable"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        r && r.map((J, te) => /* @__PURE__ */ l(
          q,
          {
            ...J
          },
          te
        ))
      ] })
    }
  );
}
const Oy = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Py = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Ut = (e, t) => {
  for (const r in t)
    e[r] = t[r];
  return e;
}, xa = "numeric", ba = "ascii", wa = "alpha", ar = "asciinumeric", ir = "alphanumeric", Sa = "domain", id = "emoji", Ny = "scheme", ky = "slashscheme", di = "whitespace";
function My(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Et(e, t, r) {
  t[xa] && (t[ar] = !0, t[ir] = !0), t[ba] && (t[ar] = !0, t[wa] = !0), t[ar] && (t[ir] = !0), t[wa] && (t[ir] = !0), t[ir] && (t[Sa] = !0), t[id] && (t[Sa] = !0);
  for (const n in t) {
    const i = My(n, r);
    i.indexOf(e) < 0 && i.push(e);
  }
}
function Ly(e, t) {
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
    return t && t.j ? i = t : (i = new Oe(t), r && n && Et(t, r, n)), this.jr.push([e, i]), i;
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
          const c = Ut(Ly(a.t, n), r);
          Et(o, c, n);
        } else r && Et(o, r, n);
      a.t = o;
    }
    return i.j[e] = a, a;
  }
};
const K = (e, t, r, n, i) => e.ta(t, r, n, i), fe = (e, t, r, n, i) => e.tr(t, r, n, i), oc = (e, t, r, n, i) => e.ts(t, r, n, i), I = (e, t, r, n, i) => e.tt(t, r, n, i), rt = "WORD", Aa = "UWORD", od = "ASCIINUMERICAL", ad = "ALPHANUMERICAL", yr = "LOCALHOST", Ca = "TLD", Ta = "UTLD", Vr = "SCHEME", jt = "SLASH_SCHEME", Fa = "NUM", Ea = "WS", Ua = "NL", sr = "OPENBRACE", cr = "CLOSEBRACE", nn = "OPENBRACKET", on = "CLOSEBRACKET", an = "OPENPAREN", sn = "CLOSEPAREN", cn = "OPENANGLEBRACKET", ln = "CLOSEANGLEBRACKET", un = "FULLWIDTHLEFTPAREN", dn = "FULLWIDTHRIGHTPAREN", fn = "LEFTCORNERBRACKET", hn = "RIGHTCORNERBRACKET", pn = "LEFTWHITECORNERBRACKET", mn = "RIGHTWHITECORNERBRACKET", gn = "FULLWIDTHLESSTHAN", vn = "FULLWIDTHGREATERTHAN", yn = "AMPERSAND", Wa = "APOSTROPHE", xn = "ASTERISK", yt = "AT", bn = "BACKSLASH", wn = "BACKTICK", Sn = "CARET", xt = "COLON", Ga = "COMMA", An = "DOLLAR", qe = "DOT", Cn = "EQUALS", Va = "EXCLAMATION", Me = "HYPHEN", lr = "PERCENT", Tn = "PIPE", En = "PLUS", Rn = "POUND", ur = "QUERY", Ka = "QUOTE", sd = "FULLWIDTHMIDDLEDOT", Ya = "SEMI", Fe = "SLASH", dr = "TILDE", In = "UNDERSCORE", cd = "EMOJI", On = "SYM";
var ld = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: rt,
  UWORD: Aa,
  ASCIINUMERICAL: od,
  ALPHANUMERICAL: ad,
  LOCALHOST: yr,
  TLD: Ca,
  UTLD: Ta,
  SCHEME: Vr,
  SLASH_SCHEME: jt,
  NUM: Fa,
  WS: Ea,
  NL: Ua,
  OPENBRACE: sr,
  CLOSEBRACE: cr,
  OPENBRACKET: nn,
  CLOSEBRACKET: on,
  OPENPAREN: an,
  CLOSEPAREN: sn,
  OPENANGLEBRACKET: cn,
  CLOSEANGLEBRACKET: ln,
  FULLWIDTHLEFTPAREN: un,
  FULLWIDTHRIGHTPAREN: dn,
  LEFTCORNERBRACKET: fn,
  RIGHTCORNERBRACKET: hn,
  LEFTWHITECORNERBRACKET: pn,
  RIGHTWHITECORNERBRACKET: mn,
  FULLWIDTHLESSTHAN: gn,
  FULLWIDTHGREATERTHAN: vn,
  AMPERSAND: yn,
  APOSTROPHE: Wa,
  ASTERISK: xn,
  AT: yt,
  BACKSLASH: bn,
  BACKTICK: wn,
  CARET: Sn,
  COLON: xt,
  COMMA: Ga,
  DOLLAR: An,
  DOT: qe,
  EQUALS: Cn,
  EXCLAMATION: Va,
  HYPHEN: Me,
  PERCENT: lr,
  PIPE: Tn,
  PLUS: En,
  POUND: Rn,
  QUERY: ur,
  QUOTE: Ka,
  FULLWIDTHMIDDLEDOT: sd,
  SEMI: Ya,
  SLASH: Fe,
  TILDE: dr,
  UNDERSCORE: In,
  EMOJI: cd,
  SYM: On
});
const et = /[a-z]/, rr = new RegExp("\\p{L}", "u"), fi = new RegExp("\\p{Emoji}", "u"), tt = /\d/, hi = /\s/, ac = "\r", pi = `
`, $y = "️", _y = "‍", mi = "￼";
let Br = null, jr = null;
function Dy(e = []) {
  const t = {};
  Oe.groups = t;
  const r = new Oe();
  Br == null && (Br = sc(Oy)), jr == null && (jr = sc(Py)), I(r, "'", Wa), I(r, "{", sr), I(r, "}", cr), I(r, "[", nn), I(r, "]", on), I(r, "(", an), I(r, ")", sn), I(r, "<", cn), I(r, ">", ln), I(r, "（", un), I(r, "）", dn), I(r, "「", fn), I(r, "」", hn), I(r, "『", pn), I(r, "』", mn), I(r, "＜", gn), I(r, "＞", vn), I(r, "&", yn), I(r, "*", xn), I(r, "@", yt), I(r, "`", wn), I(r, "^", Sn), I(r, ":", xt), I(r, ",", Ga), I(r, "$", An), I(r, ".", qe), I(r, "=", Cn), I(r, "!", Va), I(r, "-", Me), I(r, "%", lr), I(r, "|", Tn), I(r, "+", En), I(r, "#", Rn), I(r, "?", ur), I(r, '"', Ka), I(r, "/", Fe), I(r, ";", Ya), I(r, "~", dr), I(r, "_", In), I(r, "\\", bn), I(r, "・", sd);
  const n = fe(r, tt, Fa, {
    [xa]: !0
  });
  fe(n, tt, n);
  const i = fe(n, et, od, {
    [ar]: !0
  }), o = fe(n, rr, ad, {
    [ir]: !0
  }), a = fe(r, et, rt, {
    [ba]: !0
  });
  fe(a, tt, i), fe(a, et, a), fe(i, tt, i), fe(i, et, i);
  const s = fe(r, rr, Aa, {
    [wa]: !0
  });
  fe(s, et), fe(s, tt, o), fe(s, rr, s), fe(o, tt, o), fe(o, et), fe(o, rr, o);
  const c = I(r, pi, Ua, {
    [di]: !0
  }), u = I(r, ac, Ea, {
    [di]: !0
  }), f = fe(r, hi, Ea, {
    [di]: !0
  });
  I(r, mi, f), I(u, pi, c), I(u, mi, f), fe(u, hi, f), I(f, ac), I(f, pi), fe(f, hi, f), I(f, mi, f);
  const d = fe(r, fi, cd, {
    [id]: !0
  });
  I(d, "#"), fe(d, fi, d), I(d, $y, d);
  const h = I(d, _y);
  I(h, "#"), fe(h, fi, d);
  const p = [[et, a], [tt, i]], m = [[et, null], [rr, s], [tt, o]];
  for (let g = 0; g < Br.length; g++)
    gt(r, Br[g], Ca, rt, p);
  for (let g = 0; g < jr.length; g++)
    gt(r, jr[g], Ta, Aa, m);
  Et(Ca, {
    tld: !0,
    ascii: !0
  }, t), Et(Ta, {
    utld: !0,
    alpha: !0
  }, t), gt(r, "file", Vr, rt, p), gt(r, "mailto", Vr, rt, p), gt(r, "http", jt, rt, p), gt(r, "https", jt, rt, p), gt(r, "ftp", jt, rt, p), gt(r, "ftps", jt, rt, p), Et(Vr, {
    scheme: !0,
    ascii: !0
  }, t), Et(jt, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((g, v) => g[0] > v[0] ? 1 : -1);
  for (let g = 0; g < e.length; g++) {
    const v = e[g][0], w = e[g][1] ? {
      [Ny]: !0
    } : {
      [ky]: !0
    };
    v.indexOf("-") >= 0 ? w[Sa] = !0 : et.test(v) ? tt.test(v) ? w[ar] = !0 : w[ba] = !0 : w[xa] = !0, oc(r, v, v, w);
  }
  return oc(r, "localhost", yr, {
    ascii: !0
  }), r.jd = new Oe(On), {
    start: r,
    tokens: Ut({
      groups: t
    }, ld)
  };
}
function ud(e, t) {
  const r = By(t.replace(/[A-Z]/g, (s) => s.toLowerCase())), n = r.length, i = [];
  let o = 0, a = 0;
  for (; a < n; ) {
    let s = e, c = null, u = 0, f = null, d = -1, h = -1;
    for (; a < n && (c = s.go(r[a])); )
      s = c, s.accepts() ? (d = 0, h = 0, f = s) : d >= 0 && (d += r[a].length, h++), u += r[a].length, o += r[a].length, a++;
    o -= d, a -= h, u -= d, i.push({
      t: f.t,
      // token type/name
      v: t.slice(o - u, o),
      // string value
      s: o - u,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function By(e) {
  const t = [], r = e.length;
  let n = 0;
  for (; n < r; ) {
    let i = e.charCodeAt(n), o, a = i < 55296 || i > 56319 || n + 1 === r || (o = e.charCodeAt(n + 1)) < 56320 || o > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(a), n += a.length;
  }
  return t;
}
function gt(e, t, r, n, i) {
  let o;
  const a = t.length;
  for (let s = 0; s < a - 1; s++) {
    const c = t[s];
    e.j[c] ? o = e.j[c] : (o = new Oe(n), o.jr = i.slice(), e.j[c] = o), e = o;
  }
  return o = new Oe(r), o.jr = i.slice(), e.j[t[a - 1]] = o, o;
}
function sc(e) {
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
  format: cc,
  formatHref: cc,
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
function Xa(e, t = null) {
  let r = Ut({}, xr);
  e && (r = Ut(r, e instanceof Xa ? e.o : e));
  const n = r.ignoreTags, i = [];
  for (let o = 0; o < n.length; o++)
    i.push(n[o].toUpperCase());
  this.o = r, t && (this.defaultRender = t), this.ignoreTags = i;
}
Xa.prototype = {
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
function cc(e) {
  return e;
}
function dd(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
dd.prototype = {
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
    const t = this, r = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", r, this), i = e.get("tagName", r, t), o = this.toFormattedString(e), a = {}, s = e.get("className", r, t), c = e.get("target", r, t), u = e.get("rel", r, t), f = e.getObj("attributes", r, t), d = e.getObj("events", r, t);
    return a.href = n, s && (a.class = s), c && (a.target = c), u && (a.rel = u), f && Ut(a, f), {
      tagName: i,
      attributes: a,
      content: o,
      eventListeners: d
    };
  }
};
function jn(e, t) {
  class r extends dd {
    constructor(i, o) {
      super(i, o), this.t = e;
    }
  }
  for (const n in t)
    r.prototype[n] = t[n];
  return r.t = e, r;
}
const lc = jn("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), uc = jn("text"), jy = jn("nl"), zr = jn("url", {
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
    return e.length >= 2 && e[0].t !== yr && e[1].t === xt;
  }
}), ke = (e) => new Oe(e);
function zy({
  groups: e
}) {
  const t = e.domain.concat([yn, xn, yt, bn, wn, Sn, An, Cn, Me, Fa, lr, Tn, En, Rn, Fe, On, dr, In]), r = [xt, Ga, qe, Va, lr, ur, Ka, Ya, cn, ln, sr, cr, on, nn, an, sn, un, dn, fn, hn, pn, mn, gn, vn], n = [yn, Wa, xn, bn, wn, Sn, An, Cn, Me, sr, cr, lr, Tn, En, Rn, ur, Fe, On, dr, In], i = ke(), o = I(i, dr);
  K(o, n, o), K(o, e.domain, o);
  const a = ke(), s = ke(), c = ke();
  K(i, e.domain, a), K(i, e.scheme, s), K(i, e.slashscheme, c), K(a, n, o), K(a, e.domain, a);
  const u = I(a, yt);
  I(o, yt, u), I(s, yt, u), I(c, yt, u);
  const f = I(o, qe);
  K(f, n, o), K(f, e.domain, o);
  const d = ke();
  K(u, e.domain, d), K(d, e.domain, d);
  const h = I(d, qe);
  K(h, e.domain, d);
  const p = ke(lc);
  K(h, e.tld, p), K(h, e.utld, p), I(u, yr, p);
  const m = I(d, Me);
  I(m, Me, m), K(m, e.domain, d), K(p, e.domain, d), I(p, qe, h), I(p, Me, m);
  const g = I(p, xt);
  K(g, e.numeric, lc);
  const v = I(a, Me), x = I(a, qe);
  I(v, Me, v), K(v, e.domain, a), K(x, n, o), K(x, e.domain, a);
  const w = ke(zr);
  K(x, e.tld, w), K(x, e.utld, w), K(w, e.domain, a), K(w, n, o), I(w, qe, x), I(w, Me, v), I(w, yt, u);
  const S = I(w, xt), A = ke(zr);
  K(S, e.numeric, A);
  const R = ke(zr), N = ke();
  K(R, t, R), K(R, r, N), K(N, t, R), K(N, r, N), I(w, Fe, R), I(A, Fe, R);
  const M = I(s, xt), O = I(c, xt), k = I(O, Fe), _ = I(k, Fe);
  K(s, e.domain, a), I(s, qe, x), I(s, Me, v), K(c, e.domain, a), I(c, qe, x), I(c, Me, v), K(M, e.domain, R), I(M, Fe, R), I(M, ur, R), K(_, e.domain, R), K(_, t, R), I(_, Fe, R);
  const C = [
    [sr, cr],
    // {}
    [nn, on],
    // []
    [an, sn],
    // ()
    [cn, ln],
    // <>
    [un, dn],
    // （）
    [fn, hn],
    // 「」
    [pn, mn],
    // 『』
    [gn, vn]
    // ＜＞
  ];
  for (let P = 0; P < C.length; P++) {
    const [$, B] = C[P], G = I(R, $);
    I(N, $, G), I(G, B, R);
    const z = ke(zr);
    K(G, t, z);
    const ee = ke();
    K(G, r), K(z, t, z), K(z, r, ee), K(ee, t, z), K(ee, r, ee), I(z, B, R), I(ee, B, R);
  }
  return I(i, yr, w), I(i, Ua, jy), {
    start: i,
    tokens: ld
  };
}
function Hy(e, t, r) {
  let n = r.length, i = 0, o = [], a = [];
  for (; i < n; ) {
    let s = e, c = null, u = null, f = 0, d = null, h = -1;
    for (; i < n && !(c = s.go(r[i].t)); )
      a.push(r[i++]);
    for (; i < n && (u = c || s.go(r[i].t)); )
      c = null, s = u, s.accepts() ? (h = 0, d = s) : h >= 0 && h++, i++, f++;
    if (h < 0)
      i -= f, i < n && (a.push(r[i]), i++);
    else {
      a.length > 0 && (o.push(gi(uc, t, a)), a = []), i -= h, f -= h;
      const p = d.t, m = r.slice(i - f, i);
      o.push(gi(p, t, m));
    }
  }
  return a.length > 0 && o.push(gi(uc, t, a)), o;
}
function gi(e, t, r) {
  const n = r[0].s, i = r[r.length - 1].e, o = t.slice(n, i);
  return new e(o, r);
}
const qy = typeof console < "u" && console && console.warn || (() => {
}), Fy = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ue = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Uy() {
  return Oe.groups = {}, ue.scanner = null, ue.parser = null, ue.tokenQueue = [], ue.pluginQueue = [], ue.customSchemes = [], ue.initialized = !1, ue;
}
function dc(e, t = !1) {
  if (ue.initialized && qy(`linkifyjs: already initialized - will not register custom scheme "${e}" ${Fy}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ue.customSchemes.push([e, t]);
}
function Wy() {
  ue.scanner = Dy(ue.customSchemes);
  for (let e = 0; e < ue.tokenQueue.length; e++)
    ue.tokenQueue[e][1]({
      scanner: ue.scanner
    });
  ue.parser = zy(ue.scanner.tokens);
  for (let e = 0; e < ue.pluginQueue.length; e++)
    ue.pluginQueue[e][1]({
      scanner: ue.scanner,
      parser: ue.parser
    });
  return ue.initialized = !0, ue;
}
function Ja(e) {
  return ue.initialized || Wy(), Hy(ue.parser.start, e, ud(ue.scanner.start, e));
}
Ja.scan = ud;
function fd(e, t = null, r = null) {
  if (t && typeof t == "object") {
    if (r)
      throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
    r = t, t = null;
  }
  const n = new Xa(r), i = Ja(e), o = [];
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    s.isLink && (!t || s.t === t) && n.check(s) && o.push(s.toFormattedObject(n));
  }
  return o;
}
function Gy(e) {
  return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function Vy(e) {
  return new Ot({
    key: new Wt("autolink"),
    appendTransaction: (t, r, n) => {
      const i = t.some((u) => u.docChanged) && !r.doc.eq(n.doc), o = t.some((u) => u.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: a } = n, s = ap(r.doc, [...t]);
      if (sp(s).forEach(({ newRange: u }) => {
        const f = cp(n.doc, u, (p) => p.isTextblock);
        let d, h;
        if (f.length > 1 ? (d = f[0], h = n.doc.textBetween(d.pos, d.pos + d.node.nodeSize, void 0, " ")) : f.length && n.doc.textBetween(u.from, u.to, " ", " ").endsWith(" ") && (d = f[0], h = n.doc.textBetween(d.pos, u.to, void 0, " ")), d && h) {
          const p = h.split(" ").filter((x) => x !== "");
          if (p.length <= 0)
            return !1;
          const m = p[p.length - 1], g = d.pos + h.lastIndexOf(m);
          if (!m)
            return !1;
          const v = Ja(m).map((x) => x.toObject(e.defaultProtocol));
          if (!Gy(v))
            return !1;
          v.filter((x) => x.isLink).map((x) => ({
            ...x,
            from: g + x.start + 1,
            to: g + x.end + 1
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
function Ky(e) {
  return new Ot({
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
        const c = up(t.state, e.type.name), u = n.target, f = (i = u == null ? void 0 : u.href) !== null && i !== void 0 ? i : c.href, d = (o = u == null ? void 0 : u.target) !== null && o !== void 0 ? o : c.target;
        return u && f ? (window.open(f, d), !0) : !1;
      }
    }
  });
}
function Yy(e) {
  return new Ot({
    key: new Wt("handlePasteLink"),
    props: {
      handlePaste: (t, r, n) => {
        const { state: i } = t, { selection: o } = i, { empty: a } = o;
        if (a)
          return !1;
        let s = "";
        n.content.forEach((u) => {
          s += u.textContent;
        });
        const c = fd(s, { defaultProtocol: e.defaultProtocol }).find((u) => u.isLink && u.value === s);
        return !s || !c ? !1 : e.editor.commands.setMark(e.type, {
          href: c.href
        });
      }
    }
  });
}
const Xy = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g;
function Tt(e, t) {
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
  }), !e || e.replace(Xy, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${r.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const Jy = ip.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
      if (typeof e == "string") {
        dc(e);
        return;
      }
      dc(e.scheme, e.optionalSlashes);
    });
  },
  onDestroy() {
    Uy();
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
      isAllowedUri: (e, t) => !!Tt(e, t.protocols),
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
            defaultValidate: (r) => !!Tt(r, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return this.options.isAllowedUri(e.href, {
      defaultValidate: (t) => !!Tt(t, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", ot(this.options.HTMLAttributes, e), 0] : [
      "a",
      ot(this.options.HTMLAttributes, { ...e, href: "" }),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (e) => ({ chain: t }) => {
        const { href: r } = e;
        return this.options.isAllowedUri(r, {
          defaultValidate: (n) => !!Tt(n, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? t().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (e) => ({ chain: t }) => {
        const { href: r } = e;
        return this.options.isAllowedUri(r, {
          defaultValidate: (n) => !!Tt(n, this.options.protocols),
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
            const { protocols: r, defaultProtocol: n } = this.options, i = fd(e).filter((o) => o.isLink && this.options.isAllowedUri(o.value, {
              defaultValidate: (a) => !!Tt(a, r),
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
    return this.options.autolink && e.push(Vy({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (n) => this.options.isAllowedUri(n, {
        defaultValidate: (i) => !!Tt(i, t),
        protocols: t,
        defaultProtocol: r
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && e.push(Ky({
      type: this.type
    })), this.options.linkOnPaste && e.push(Yy({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), e;
  }
});
function Zy(e) {
  const [t, r] = Z(!1);
  function n(i, o, a) {
    e.action && (e.action({ link: i, text: o, openInNewTab: a }), r(!1));
  }
  return /* @__PURE__ */ E(Ir, { modal: !0, open: t, onOpenChange: r, children: [
    /* @__PURE__ */ l(Or, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ l(
      q,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ l(be, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ l(Kt, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ l(hd, { editor: e.editor, onSetLink: n }) })
  ] });
}
const Qy = /* @__PURE__ */ Jy.extend({
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
      ot(this.options.HTMLAttributes, e, {
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
        component: Zy,
        componentProps: {
          editor: t,
          action: (n) => {
            const { link: i, text: o, openInNewTab: a } = n, { state: s } = t, { from: c } = s.selection, u = o.length, f = c + u;
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
            }).setLink({ href: i }).setTextSelection({ from: c, to: f }).focus().run();
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
      new Ot({
        props: {
          handleClick: (e, t) => {
            const { schema: r, doc: n, tr: i } = e.state, o = dp(n.resolve(t), r.marks.link);
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
function hd(e) {
  const { t } = we(), [r, n] = Z({
    text: "",
    link: ""
  }), [i, o] = Z(!1);
  he(() => {
    const s = () => {
      var c, u, f;
      if ((c = e.editor) != null && c.isActive("link")) {
        const { href: d, target: h } = e.editor.getAttributes("link"), { from: p, to: m } = e.editor.state.selection, g = e.editor.state.doc.textBetween(p, m, " ");
        n({ link: d || "", text: g }), o(h === "_blank");
      } else {
        const d = (u = e.editor.extensionManager.extensions.find(
          (h) => h.name === Qy.name
        )) == null ? void 0 : u.options;
        o(((f = d == null ? void 0 : d.HTMLAttributes) == null ? void 0 : f.target) === "_blank");
      }
    };
    return s(), e.editor.on("selectionUpdate", s), () => {
      e.editor.off("selectionUpdate", s);
    };
  }, [e.editor]);
  function a(s) {
    s.preventDefault(), s.stopPropagation(), e == null || e.onSetLink(r.link, r.text, i), n({ text: "", link: "" });
  }
  return /* @__PURE__ */ l("div", { className: "border-neutral-200 richtext-rounded-lg !richtext-border richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-flex-col richtext-gap-2", children: [
    /* @__PURE__ */ l(bt, { className: "mb-[6px]", children: t("editor.link.dialog.text") }),
    /* @__PURE__ */ l("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ l(
      Le,
      {
        className: "richtext-w-80",
        onChange: (s) => n({ ...r, text: s.target.value }),
        placeholder: "Text",
        required: !0,
        type: "text",
        value: r.text
      }
    ) }) }),
    /* @__PURE__ */ l(bt, { className: "mb-[6px]", children: t("editor.link.dialog.link") }),
    /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ E("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: [
      /* @__PURE__ */ l(
        Le,
        {
          className: "richtext-pl-10",
          onChange: (s) => n({ ...r, link: s.target.value }),
          required: !0,
          type: "url",
          value: r.link
        }
      ),
      /* @__PURE__ */ l("span", { className: "richtext-absolute richtext-inset-y-0 richtext-start-0 richtext-flex richtext-items-center richtext-justify-center richtext-px-2", children: /* @__PURE__ */ l(
        be,
        {
          className: "richtext-size-5 richtext-text-muted-foreground",
          name: "Link"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-space-x-2", children: [
      /* @__PURE__ */ l(bt, { children: t("editor.link.dialog.openInNewTab") }),
      /* @__PURE__ */ l(
        Td,
        {
          checked: i,
          onCheckedChange: (s) => {
            o(s);
          }
        }
      )
    ] }),
    /* @__PURE__ */ l(
      Ce,
      {
        className: "richtext-mt-2 richtext-self-end",
        onClick: a,
        type: "button",
        children: t("editor.link.dialog.button.apply")
      }
    )
  ] }) });
}
function ex(e) {
  const { t } = we();
  return /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
    /* @__PURE__ */ l(
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
    (e == null ? void 0 : e.link) && /* @__PURE__ */ l(We, { orientation: "vertical", className: "!richtext-h-4" }),
    /* @__PURE__ */ E("div", { className: "richtext-flex richtext-flex-nowrap", children: [
      /* @__PURE__ */ l(
        q,
        {
          icon: "Pencil",
          tooltip: t("editor.link.edit.tooltip"),
          action: () => {
            e == null || e.onEdit();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      ),
      /* @__PURE__ */ l(
        q,
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
function tx({ editor: e, disabled: t }) {
  const [r, n] = Z(!1), i = Ae(() => {
    const { href: c } = e.getAttributes("link");
    return c;
  }, [e]), o = oe(({ editor: c }) => c.isActive("link"), []), a = (c, u, f) => {
    const d = e.state.selection, { from: h } = d, p = (u == null ? void 0 : u.length) ?? 0, m = h + p;
    e.chain().extendMarkRange("link").insertContent({
      type: "text",
      text: u,
      marks: [
        {
          type: "link",
          attrs: {
            href: c,
            target: f ? "_blank" : ""
          }
        }
      ]
    }).setLink({ href: c }).setTextSelection({ from: h, to: m }).focus().run(), n(!1);
  }, s = oe(() => {
    e.chain().extendMarkRange("link").unsetLink().focus().run(), n(!1);
  }, [e]);
  return /* @__PURE__ */ l(ge, { children: /* @__PURE__ */ l(
    St,
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
      children: t ? /* @__PURE__ */ l(ge, {}) : /* @__PURE__ */ l(ge, { children: r ? /* @__PURE__ */ l(hd, { onSetLink: a, editor: e }) : /* @__PURE__ */ l(
        ex,
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
const rx = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, pd = Tr.create({
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
    return ["img", ot(this.options.HTMLAttributes, e)];
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
      gu({
        find: rx,
        type: this.type,
        getAttributes: (e) => {
          const [, , t, r, n] = e;
          return { src: r, alt: t, title: n };
        }
      })
    ];
  }
}), zn = $e.Root, Hn = $e.Trigger, nx = $e.Portal, md = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  $e.Overlay,
  {
    ref: r,
    className: Q(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 richtext- data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      e
    ),
    ...t
  }
));
md.displayName = $e.Overlay.displayName;
const Er = ne.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ E(nx, { children: [
  /* @__PURE__ */ l(md, {}),
  /* @__PURE__ */ E(
    $e.Content,
    {
      ref: n,
      className: Q(
        "richtext-dialog-content richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ E($e.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ l(fu, { className: "richtext-h-4 richtext-w-4" }),
          /* @__PURE__ */ l("span", { className: "richtext-sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Er.displayName = $e.Content.displayName;
function gd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
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
gd.displayName = "DialogHeader";
function Za({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
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
Za.displayName = "DialogFooter";
const Rr = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  $e.Title,
  {
    ref: r,
    className: Q(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight",
      e
    ),
    ...t
  }
));
Rr.displayName = $e.Title.displayName;
const ix = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  $e.Description,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-text-muted-foreground", e),
    ...t
  }
));
ix.displayName = $e.Description.displayName;
const fc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, hc = Mn, qn = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return hc(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: o } = t, a = Object.keys(i).map((u) => {
    const f = r == null ? void 0 : r[u], d = o == null ? void 0 : o[u];
    if (f === null) return null;
    const h = fc(f) || fc(d);
    return i[u][h];
  }), s = r && Object.entries(r).reduce((u, f) => {
    let [d, h] = f;
    return h === void 0 || (u[d] = h), u;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, f) => {
    let { class: d, className: h, ...p } = f;
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
      ...u,
      d,
      h
    ] : u;
  }, []);
  return hc(e, a, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, ox = qn(
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
), Ce = ne.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...i }, o) => /* @__PURE__ */ l(
    n ? cu : "button",
    {
      className: Q(ox({ variant: t, size: r, className: e })),
      ref: o,
      ...i
    }
  )
);
Ce.displayName = "Button";
function vw(e) {
  return e.replace(/^.*\/|\..+$/g, "");
}
function yw(e) {
  return e.split(".").pop();
}
function xw(e) {
  return e < 1024 ? `${e} Byte` : e < 1024 * 1024 ? `${(e / 1024).toFixed(2)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function bw(e) {
  return e ? e === "application/pdf" ? "pdf" : e.startsWith("application/") && [".document", "word"].some((t) => e.includes(t)) ? "word" : e.startsWith("application/") && ["presentation"].some((t) => e.includes(t)) ? "excel" : e.startsWith("application/") && ["sheet"].some((t) => e.includes(t)) ? "ppt" : e.startsWith("image") ? "image" : e.startsWith("audio") ? "audio" : e.startsWith("video") ? "video" : "file" : "file";
}
function ax(e) {
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
function sx(e, t) {
  const r = e.split(","), n = r[0].match(/:(.*?);/)[1], i = atob(r[r.length - 1]);
  let o = i.length;
  const a = new Uint8Array(o);
  for (; o--; )
    a[o] = i.charCodeAt(o);
  return new File([a], t, { type: n });
}
function cx({ editor: e, imageInline: t, onClose: r }) {
  const { t: n } = we(), [i, o] = Z(!1), a = Gr.useRef(null), [s, c] = Gr.useState(), [u, f] = Gr.useState(""), d = it(null), [h, p] = Z({
    src: "",
    file: null
  });
  function m(S) {
    if (a.current && S.width && S.height) {
      const A = g(a.current, S);
      f(A);
    }
  }
  function g(S, A) {
    const R = document.createElement("canvas"), N = S.naturalWidth / S.width, M = S.naturalHeight / S.height;
    R.width = A.width * N, R.height = A.height * M;
    const O = R.getContext("2d");
    return O && (O.imageSmoothingEnabled = !1, O.drawImage(
      S,
      A.x * N,
      A.y * M,
      A.width * N,
      A.height * M,
      0,
      0,
      A.width * N,
      A.height * M
    )), R.toDataURL("image/png", 1);
  }
  async function v() {
    var S, A;
    try {
      const R = sx(u, ((S = h == null ? void 0 : h.file) == null ? void 0 : S.name) || "image.png"), N = (A = e.extensionManager.extensions.find(
        (O) => O.name === br.name
      )) == null ? void 0 : A.options;
      let M = "";
      N.upload ? M = await N.upload(R) : M = URL.createObjectURL(R), e.chain().focus().setImageInline({ src: M, inline: t }).run(), o(!1), p({
        src: "",
        file: null
      }), r();
    } catch (R) {
      console.log("Error cropping image", R);
    }
  }
  function x(S) {
    var A;
    S.preventDefault(), (A = d.current) == null || A.click();
  }
  const w = async (S) => {
    var M;
    const A = (M = S == null ? void 0 : S.target) == null ? void 0 : M.files;
    if (!e || e.isDestroyed || A.length === 0)
      return;
    const R = A[0], N = await ax(R);
    o(!0), p({
      src: N.src,
      file: R
    });
  };
  return /* @__PURE__ */ E(ge, { children: [
    /* @__PURE__ */ l(
      Ce,
      {
        className: "richtext-mt-1 richtext-w-full",
        onClick: x,
        size: "sm",
        children: n("editor.image.dialog.tab.uploadCrop")
      }
    ),
    /* @__PURE__ */ E(zn, { open: i, children: [
      /* @__PURE__ */ l(Hn, {}),
      /* @__PURE__ */ E(Er, { children: [
        /* @__PURE__ */ l(Rr, { children: n("editor.image.dialog.tab.uploadCrop") }),
        /* @__PURE__ */ l("div", { children: h.src && /* @__PURE__ */ l(
          vp,
          {
            className: "richtext-w-full",
            crop: s,
            onChange: (S) => c(S),
            onComplete: (S) => m(S),
            children: /* @__PURE__ */ l(
              "img",
              {
                alt: "Crop me",
                ref: a,
                src: h.src
              }
            )
          }
        ) }),
        /* @__PURE__ */ E(Za, { children: [
          /* @__PURE__ */ E(
            Ce,
            {
              onClick: () => {
                o(!1), p({
                  src: "",
                  file: null
                });
              },
              children: [
                n("editor.imageUpload.cancel"),
                /* @__PURE__ */ l(
                  be,
                  {
                    className: "richtext-ml-[4px]",
                    name: "Trash2"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ E(
            Ce,
            {
              className: "richtext-w-fit",
              onClick: v,
              children: [
                n("editor.imageUpload.crop"),
                /* @__PURE__ */ l(
                  be,
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
    /* @__PURE__ */ l(
      "input",
      {
        accept: "image/*",
        multiple: !0,
        onChange: w,
        ref: d,
        type: "file",
        style: {
          display: "none"
        }
      }
    )
  ] });
}
function Fn(e) {
  function t() {
    const o = it(e), a = oe(() => o.current, []), s = it(/* @__PURE__ */ new Set()), c = oe((f) => {
      o.current = { ...o.current, ...f }, s.current.forEach((d) => d());
    }, []), u = oe((f) => (s.current.add(f), () => s.current.delete(f)), []);
    return {
      get: a,
      set: c,
      subscribe: u
    };
  }
  const r = gf(null);
  function n({ children: o }) {
    return /* @__PURE__ */ l(r.Provider, { value: t(), children: o });
  }
  function i(o) {
    const a = vf(r);
    if (!a)
      throw new Error("Store not found");
    return [yf(
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
Fn({
  value: !1
});
Fn({
  value: !1
});
const { Provider: lx, useStore: vd } = Fn({
  value: !1
}), { Provider: ux, useStore: yd } = Fn({
  value: "light"
});
If("0");
function Pn(e, t) {
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
const It = {
  UPLOAD_IMAGE: (e) => `UPLOAD_IMAGE-${e}`,
  UPLOAD_VIDEO: (e) => `UPLOAD_VIDEO-${e}`,
  EDIT: (e) => `EDIT-${e}`,
  UPDATE_THEME: (e) => `UPDATE_THEME-${e}`,
  SEARCH_REPLCE: "SEARCH_REPLACE"
}, dx = {
  setOpen: (e, t) => {
    Qa(It.UPLOAD_IMAGE(e), t);
  }
};
function fx(e) {
  var m;
  const { t } = we(), [r, n] = Z(!1), i = (g) => {
    n(g.detail);
  }, [o, a] = Z(""), s = it(null), [c, u] = Z(((m = e.editor.extensionManager.extensions.find(
    (g) => g.name === br.name
  )) == null ? void 0 : m.options.defaultInline) || !1), f = Ae(() => {
    var v;
    return (v = e.editor.extensionManager.extensions.find(
      (x) => x.name === br.name
    )) == null ? void 0 : v.options;
  }, [e.editor]);
  he(() => {
    const g = Pn(It.UPLOAD_IMAGE(e.editor.id), i);
    return () => {
      g();
    };
  }, []);
  async function d(g) {
    var S;
    const v = (S = g == null ? void 0 : g.target) == null ? void 0 : S.files;
    if (!e.editor || e.editor.isDestroyed || v.length === 0)
      return;
    const x = v[0];
    let w = "";
    f.upload ? w = await f.upload(x) : w = URL.createObjectURL(x), e.editor.chain().focus().setImageInline({ src: w, inline: c }).run(), n(!1), u(!1);
  }
  function h(g) {
    g.preventDefault(), g.stopPropagation(), e.editor.chain().focus().setImageInline({ src: o, inline: c }).run(), n(!1), u(!1), a("");
  }
  function p(g) {
    var v;
    g.preventDefault(), (v = s.current) == null || v.click();
  }
  return /* @__PURE__ */ E(
    zn,
    {
      onOpenChange: n,
      open: r,
      children: [
        /* @__PURE__ */ l(Hn, { asChild: !0, children: /* @__PURE__ */ l(
          q,
          {
            action: () => n(!0),
            icon: e.icon,
            tooltip: e.tooltip
          }
        ) }),
        /* @__PURE__ */ E(Er, { children: [
          /* @__PURE__ */ l(Rr, { children: t("editor.image.dialog.title") }),
          /* @__PURE__ */ E(
            Ed,
            {
              activationMode: "manual",
              defaultValue: f.resourceImage === "both" || f.resourceImage === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ E(rs, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  f.resourceImage === "both" || f.resourceImage === "upload" ? /* @__PURE__ */ l(wr, { value: "upload", children: t("editor.image.dialog.tab.upload") }) : /* @__PURE__ */ l(ge, {}),
                  f.resourceImage === "both" || f.resourceImage === "link" ? /* @__PURE__ */ l(wr, { value: "link", children: t("editor.image.dialog.tab.url") }) : /* @__PURE__ */ l(ge, {})
                ] }),
                /* @__PURE__ */ E("div", { className: "richtext-my-[10px] richtext-flex richtext-items-center richtext-gap-[4px]", children: [
                  /* @__PURE__ */ l(
                    $d,
                    {
                      checked: c,
                      onCheckedChange: (g) => {
                        u(g);
                      }
                    }
                  ),
                  /* @__PURE__ */ l(bt, { children: t("editor.link.dialog.inline") })
                ] }),
                /* @__PURE__ */ E(Sr, { value: "upload", children: [
                  /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                    /* @__PURE__ */ l(
                      Ce,
                      {
                        className: "richtext-mt-1 richtext-w-full",
                        onClick: p,
                        size: "sm",
                        children: t("editor.image.dialog.tab.upload")
                      }
                    ),
                    /* @__PURE__ */ l(
                      cx,
                      {
                        editor: e.editor,
                        imageInline: c,
                        onClose: () => dx.setOpen(e.editor.id, !1)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      accept: "image/*",
                      multiple: !0,
                      onChange: d,
                      ref: s,
                      type: "file",
                      style: {
                        display: "none"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ l(Sr, { value: "link", children: /* @__PURE__ */ l("form", { onSubmit: h, children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                  /* @__PURE__ */ l(
                    Le,
                    {
                      autoFocus: !0,
                      onChange: (g) => a(g.target.value),
                      placeholder: t("editor.image.dialog.placeholder"),
                      required: !0,
                      type: "url",
                      value: o
                    }
                  ),
                  /* @__PURE__ */ l(Ce, { type: "submit", children: t("editor.image.dialog.button.apply") })
                ] }) }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Hr = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function hx(e) {
  var O, k, _;
  const [t, r] = Z({
    width: Jr,
    height: Jr
  }), [n, i] = Z({
    width: 0,
    height: 0
  }), [o] = Z([
    Hr.TOP_LEFT,
    Hr.TOP_RIGHT,
    Hr.BOTTOM_LEFT,
    Hr.BOTTOM_RIGHT
  ]), [a, s] = Z(!1), [c, u] = Z({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: f, inline: d } = (O = e == null ? void 0 : e.node) == null ? void 0 : O.attrs, h = d && (f === "left" || f === "right"), p = Ae(() => {
    var De;
    const { src: C, alt: P, width: $, height: B, flipX: G, flipY: z } = (De = e == null ? void 0 : e.node) == null ? void 0 : De.attrs, ee = rn($) ? `${$}px` : $, J = rn(B) ? `${B}px` : B, te = [];
    G && te.push("rotateX(180deg)"), z && te.push("rotateY(180deg)");
    const ve = te.join(" ");
    return {
      src: C || void 0,
      alt: P || void 0,
      style: {
        width: ee || void 0,
        height: J || void 0,
        transform: ve || "none",
        ...h ? { float: f } : {}
      }
    };
  }, [(k = e == null ? void 0 : e.node) == null ? void 0 : k.attrs]), m = Ae(() => {
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
  const x = oe(
    vr(() => {
      const { editor: C } = e, { width: P } = getComputedStyle(C.view.dom);
      r(($) => ({
        ...$,
        width: Number.parseInt(P, 10)
      }));
    }, Zr),
    [e == null ? void 0 : e.editor]
  );
  function w(C, P) {
    C.preventDefault(), C.stopPropagation();
    const $ = n.width, B = n.height, G = $ / B;
    let z = Number(e.node.attrs.width), ee = Number(e.node.attrs.height);
    const J = t.width;
    z && !ee ? (z = z > J ? J : z, ee = Math.round(z / G)) : ee && !z ? (z = Math.round(ee * G), z = z > J ? J : z) : !z && !ee ? (z = $ > J ? J : $, ee = Math.round(z / G)) : z = z > J ? J : z, s(!0), u({
      x: C.clientX,
      y: C.clientY,
      w: z,
      h: ee,
      dir: P
    });
  }
  const S = oe(
    vr((C) => {
      if (C.preventDefault(), C.stopPropagation(), !a)
        return;
      const { x: P, w: $, dir: B } = c, G = (C.clientX - P) * (/l/.test(B) ? -1 : 1), z = Bu($ + G, lu, t.width);
      e.updateAttributes({
        width: z,
        height: null
      });
    }, Zr),
    [a, c, t, e.updateAttributes]
  ), A = oe(
    (C) => {
      C.preventDefault(), C.stopPropagation(), a && (u({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), s(!1), v());
    },
    [a, v]
  ), R = oe(() => {
    document == null || document.addEventListener("mousemove", S, !0), document == null || document.addEventListener("mouseup", A, !0);
  }, [S, A]), N = oe(() => {
    document == null || document.removeEventListener("mousemove", S, !0), document == null || document.removeEventListener("mouseup", A, !0);
  }, [S, A]);
  he(() => (a ? R() : N(), () => {
    N();
  }), [a, R, N]);
  const M = Ae(() => new ResizeObserver(() => x()), [x]);
  return he(() => (M.observe(e.editor.view.dom), () => {
    M.disconnect();
  }), [e.editor.view.dom, M]), /* @__PURE__ */ l(
    Pa,
    {
      as: d ? "span" : "div",
      className: "image-view",
      style: {
        float: h ? f : void 0,
        margin: h ? f === "left" ? "1em 1em 1em 0" : "1em 0 1em 1em" : void 0,
        display: d ? "inline" : "block",
        textAlign: h ? void 0 : f,
        width: ((_ = p.style) == null ? void 0 : _.width) ?? "auto",
        ...h ? {} : m
      },
      children: /* @__PURE__ */ E(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: m,
          className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${a ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ l(
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
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || a) && /* @__PURE__ */ l("div", { className: "image-resizer", children: o == null ? void 0 : o.map((C) => /* @__PURE__ */ l(
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
const Ft = new Wt("upload-image");
function px() {
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
            const a = mx(o), s = fp.widget(i, a, { id: n });
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
function mx(e) {
  const t = document.createElement("div"), r = document.createElement("img");
  return r.setAttribute("class", "opacity-50"), r.src = e, r.addEventListener("load", () => {
    t.setAttribute("class", "img-placeholder");
  }), t.append(r), t;
}
function gx(e, t) {
  var i;
  const n = Ft.getState(e).find(void 0, void 0, (o) => o.id === t);
  return n.length > 0 ? (i = n[0]) == null ? void 0 : i.from : null;
}
function vx({ validateFn: e, onUpload: t, postUpload: r, defaultInline: n = !1 }) {
  return (i, o, a) => {
    for (const s of i) {
      if (e && !e(s))
        continue;
      const c = Date.now().toString(), u = o.state.tr;
      u.selection.empty || u.deleteSelection();
      const f = URL.createObjectURL(s);
      u.setMeta(Ft, {
        add: [{ id: c, pos: a, src: f }]
      }), o.dispatch(u), t(s).then(
        async (d) => {
          var w;
          r && typeof d == "string" && (d = await r(d));
          const { schema: h } = o.state;
          let p = gx(o.state, c);
          if (p === null)
            return;
          const m = typeof d == "object" ? f : d, g = (w = h.nodes.image) == null ? void 0 : w.create({
            src: m,
            inline: n
          });
          if (!g)
            return;
          const { doc: v } = o.state;
          p > v.content.size && (p = v.content.size - 1);
          const x = o.state.tr.replaceWith(p, p, g).setMeta(Ft, { remove: [c] });
          o.dispatch(x);
        },
        () => {
          const d = o.state.tr.delete(a, a).setMeta(Ft, { remove: [c] });
          o.dispatch(d);
        }
      );
    }
  };
}
function yx(e, t, r) {
  var i;
  const n = [...((i = t.clipboardData) == null ? void 0 : i.files) || []];
  if (n.length > 0) {
    t.preventDefault();
    const o = e.state.selection.from;
    return r(n, e, o + 1), !0;
  }
  return !1;
}
function xx(e, t, r, n) {
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
const bx = {
  acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
  maxSize: 1024 * 1024 * 5,
  // 5MB
  resourceImage: "both",
  defaultInline: !1
}, br = /* @__PURE__ */ pd.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var e;
    return {
      ...bx,
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: t,
        extension: r,
        t: n
      }) => {
        var i, o;
        return {
          component: fx,
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
    return Na(hx);
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
    const { flipX: t, flipY: r, align: n, inline: i } = e, o = i && (n === "left" || n === "right"), a = t || r ? `transform: rotateX(${t ? "180" : "0"}deg) rotateY(${r ? "180" : "0"}deg);` : "", s = o ? "" : `text-align: ${n};`, f = `${o ? `float: ${n};` : ""}${o ? n === "left" ? "margin: 1em 1em 1em 0;" : "margin: 1em 0 1em 1em;" : ""}${a}`;
    return [
      i ? "span" : "div",
      {
        style: s,
        class: "image"
      },
      [
        "img",
        ot(
          {
            height: "auto",
            style: f
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
    const t = vx({
      validateFn: (r) => !(!this.options.acceptMimes.includes(r.type) || r.size > this.options.maxSize),
      onUpload: this.options.upload,
      // postUpload: this.options.postUpload,
      defaultInline: this.options.defaultInline
    });
    return [
      new Ot({
        props: {
          handlePaste: (r, n) => !n.clipboardData || [...n.clipboardData.files || []].some((o) => o.type === "text/html") ? !1 : yx(r, n, t),
          handleDrop: (r, n, i, o) => (!(n instanceof DragEvent) || !n.dataTransfer || xx(r, n, o, t), !1)
        }
      }),
      px()
    ];
  }
});
function wx({ selectImage: e, giphyApiKey: t, children: r }) {
  const [n, i] = Z([]), [o] = Z(15), a = it(null), s = (u, f = "search") => {
    if (!t)
      return;
    const h = `${f === "search" ? `https://api.giphy.com/v1/gifs/search?q=${u}` : `https://api.giphy.com/v1/gifs/trending?q=${u}`}&limit=${o}&api_key=${t}`;
    fetch(h).then((p) => p.json()).then((p) => {
      i(p.data);
    }).catch((p) => {
      console.log(p);
    });
  };
  he(() => {
    s("", "trend");
  }, []);
  const c = oe(
    Bn((u) => {
      if (!u.target.value) {
        s("", "trend");
        return;
      }
      s(u.target.value);
    }, 350),
    // Adjust the debounce delay as needed
    []
  );
  return /* @__PURE__ */ E(Ir, { modal: !0, children: [
    /* @__PURE__ */ l(Or, { asChild: !0, children: r }),
    /* @__PURE__ */ l(
      Kt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: t ? /* @__PURE__ */ E(ge, { children: [
          /* @__PURE__ */ l("div", { className: "richtext-mb-[10px] richtext-w-full", children: /* @__PURE__ */ l(
            Le,
            {
              onChange: c,
              placeholder: "Search GIF",
              ref: a,
              type: "text"
            }
          ) }),
          /* @__PURE__ */ l("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ l("div", { className: "richtext-grid richtext-grid-cols-2 richtext-gap-1 ", children: n != null && n.length ? n == null ? void 0 : n.map((u) => /* @__PURE__ */ l(
            "img",
            {
              alt: "giphy",
              className: "richtext-cursor-pointer richtext-text-center",
              height: u.images.fixed_width_downsampled.height,
              onClick: () => e(u),
              src: u.images.fixed_width_downsampled.url,
              width: u.images.fixed_width_downsampled.width
            },
            `giphy-${u.id}`
          )) : /* @__PURE__ */ l("p", { children: "No GIFs found" }) }) })
        ] }) : /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("p", { children: "Missing Giphy API Key" }) })
      }
    )
  ] });
}
function Sx({ editor: e, icon: t, giphyApiKey: r, ...n }) {
  return /* @__PURE__ */ l(
    wx,
    {
      giphyApiKey: r,
      selectImage: (o) => {
        const { url: a } = o.images.original;
        e.chain().focus().setImageGif({ src: a }).run();
      },
      children: /* @__PURE__ */ l(
        q,
        {
          icon: t,
          tooltip: n == null ? void 0 : n.tooltip
        }
      )
    }
  );
}
const qr = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function Ax(e) {
  var N, M;
  const [t, r] = Z({
    width: Jr,
    height: Jr
  }), [n, i] = Z({
    width: 0,
    height: 0
  }), [o] = Z([
    qr.TOP_LEFT,
    qr.TOP_RIGHT,
    qr.BOTTOM_LEFT,
    qr.BOTTOM_RIGHT
  ]), [a, s] = Z(!1), [c, u] = Z({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: f } = (N = e == null ? void 0 : e.node) == null ? void 0 : N.attrs, d = Ae(() => {
    var B;
    const { src: O, alt: k, width: _, height: C } = (B = e == null ? void 0 : e.node) == null ? void 0 : B.attrs, P = rn(_) ? `${_}px` : _, $ = rn(C) ? `${C}px` : C;
    return {
      src: O || void 0,
      alt: k || void 0,
      style: {
        width: P || void 0,
        height: $ || void 0
      }
    };
  }, [(M = e == null ? void 0 : e.node) == null ? void 0 : M.attrs]), h = Ae(() => {
    const {
      style: { width: O }
    } = d;
    return { width: O === "100%" ? O : void 0 };
  }, [d]);
  function p(O) {
    i({
      width: O.target.width,
      height: O.target.height
    });
  }
  function m() {
    const { editor: O, getPos: k } = e;
    O.commands.setNodeSelection(k());
  }
  const g = oe(
    vr(() => {
      const { editor: O } = e, { width: k } = getComputedStyle(O.view.dom);
      r((_) => ({
        ..._,
        width: Number.parseInt(k, 10)
      }));
    }, Zr),
    [e == null ? void 0 : e.editor]
  );
  function v(O, k) {
    O.preventDefault(), O.stopPropagation();
    const _ = n.width, C = n.height, P = _ / C;
    let $ = Number(e.node.attrs.width), B = Number(e.node.attrs.height);
    const G = t.width;
    $ && !B ? ($ = $ > G ? G : $, B = Math.round($ / P)) : B && !$ ? ($ = Math.round(B * P), $ = $ > G ? G : $) : !$ && !B ? ($ = _ > G ? G : _, B = Math.round($ / P)) : $ = $ > G ? G : $, s(!0), u({
      x: O.clientX,
      y: O.clientY,
      w: $,
      h: B,
      dir: k
    });
  }
  const x = oe(
    vr((O) => {
      if (O.preventDefault(), O.stopPropagation(), !a)
        return;
      const { x: k, w: _, dir: C } = c, P = (O.clientX - k) * (/l/.test(C) ? -1 : 1), $ = Bu(_ + P, lu, t.width);
      e.updateAttributes({
        width: $,
        height: null
      });
    }, Zr),
    [a, c, t, e.updateAttributes]
  ), w = oe(
    (O) => {
      O.preventDefault(), O.stopPropagation(), a && (u({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), s(!1), m());
    },
    [a, m]
  ), S = oe(() => {
    document == null || document.addEventListener("mousemove", x, !0), document == null || document.addEventListener("mouseup", w, !0);
  }, [x, w]), A = oe(() => {
    document == null || document.removeEventListener("mousemove", x, !0), document == null || document.removeEventListener("mouseup", w, !0);
  }, [x, w]);
  he(() => (a ? S() : A(), () => {
    A();
  }), [a, S, A]);
  const R = Ae(() => new ResizeObserver(() => g()), [g]);
  return he(() => (R.observe(e.editor.view.dom), () => {
    R.disconnect();
  }), [e.editor.view.dom, R]), /* @__PURE__ */ l(
    Pa,
    {
      className: "image-view",
      style: { ...h, width: "100%", textAlign: f },
      children: /* @__PURE__ */ E(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: h,
          className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${a ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ l(
              "img",
              {
                alt: d.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: m,
                onLoad: p,
                src: d.src,
                style: d.style
              }
            ),
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || a) && /* @__PURE__ */ l("div", { className: "image-resizer", children: o == null ? void 0 : o.map((O) => /* @__PURE__ */ l(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${O}`,
                onMouseDown: (k) => v(k, O)
              },
              `image-dir-${O}`
            )) })
          ]
        }
      )
    }
  );
}
const xd = /* @__PURE__ */ pd.extend({
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
          component: Sx,
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
    return Na(Ax);
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
        ot(
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
});
function Cx(e, t) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return !(t != null && t.length) || t.length === 1 && t[0] === "." ? !0 : t.some((n) => {
    if (n.includes("*")) {
      const i = n.replace(/\./g, "\\.").replace(/\*/g, ".*");
      return new RegExp(`^${i}$`).test(r.hostname);
    }
    return r.hostname.includes(n);
  });
}
function Tx(e) {
  const { t } = we(), [r, n] = Z(""), i = it(null), [o, a] = Z(""), [s, c] = Z(!1), u = (m) => {
    c(m.detail);
  };
  he(() => {
    const m = Pn(It.UPLOAD_VIDEO(e.editor.id), u);
    return () => {
      m();
    };
  }, []);
  const f = Ae(() => {
    var g;
    return (g = e.editor.extensionManager.extensions.find(
      (v) => v.name === bd.name
    )) == null ? void 0 : g.options;
  }, [e.editor]);
  async function d(m) {
    var w;
    const g = (w = m == null ? void 0 : m.target) == null ? void 0 : w.files;
    if (!e.editor || e.editor.isDestroyed || g.length === 0)
      return;
    const v = g[0];
    let x = "";
    f.upload ? x = await f.upload(v) : x = URL.createObjectURL(v), e.editor.chain().focus().setVideo({
      src: x,
      width: "100%"
    }).run(), c(!1);
  }
  function h(m) {
    m.preventDefault(), m.stopPropagation(), r && (e.editor.chain().focus().setVideo({
      src: r,
      width: "100%"
    }).run(), c(!1));
  }
  function p(m) {
    var g;
    m.preventDefault(), (g = i.current) == null || g.click();
  }
  return /* @__PURE__ */ E(
    zn,
    {
      onOpenChange: c,
      open: s,
      children: [
        /* @__PURE__ */ l(Hn, { asChild: !0, children: /* @__PURE__ */ l(
          q,
          {
            action: () => c(!0),
            icon: e.icon,
            tooltip: e.tooltip
          }
        ) }),
        /* @__PURE__ */ E(Er, { children: [
          /* @__PURE__ */ l(Rr, { children: t("editor.video.dialog.title") }),
          /* @__PURE__ */ E(
            Ed,
            {
              activationMode: "manual",
              defaultValue: (f == null ? void 0 : f.resourceVideo) === "both" || (f == null ? void 0 : f.resourceVideo) === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ E(rs, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  ((f == null ? void 0 : f.resourceVideo) === "both" || (f == null ? void 0 : f.resourceVideo) === "upload") && /* @__PURE__ */ l(wr, { value: "upload", children: t("editor.video.dialog.tab.upload") }),
                  ((f == null ? void 0 : f.resourceVideo) === "both" || (f == null ? void 0 : f.resourceVideo) === "link") && /* @__PURE__ */ l(wr, { value: "link", children: t("editor.video.dialog.link") })
                ] }),
                /* @__PURE__ */ E(Sr, { value: "upload", children: [
                  /* @__PURE__ */ l("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: /* @__PURE__ */ l(
                    Ce,
                    {
                      className: "richtext-mt-1 richtext-w-full",
                      onClick: p,
                      size: "sm",
                      children: t("editor.video.dialog.tab.upload")
                    }
                  ) }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      accept: "video/*",
                      multiple: !0,
                      onChange: d,
                      ref: i,
                      type: "file",
                      style: {
                        display: "none"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ E(Sr, { value: "link", children: [
                  /* @__PURE__ */ l("form", { onSubmit: h, children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                    /* @__PURE__ */ l(
                      Le,
                      {
                        autoFocus: !0,
                        placeholder: t("editor.video.dialog.placeholder"),
                        required: !0,
                        type: "url",
                        value: r,
                        onChange: (m) => {
                          n(m.target.value);
                        },
                        onBlur: (m) => {
                          const g = m.target.value, v = f.videoProviders || ["."];
                          g && !Cx(g, v) ? a("Invalid video URL") : a("");
                        }
                      }
                    ),
                    /* @__PURE__ */ l(Ce, { type: "submit", children: t("editor.video.dialog.button.apply") })
                  ] }) }),
                  o && /* @__PURE__ */ l("div", { className: "richtext-my-[5px] richtext-text-red-500", children: o })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ww(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
const Ex = (e) => typeof e == "number", Rx = (e) => typeof e == "string", Ix = (e) => typeof e == "function";
function Ox(e, t = "px") {
  if (!e)
    return e;
  const r = Ex(e) ? String(e) : e, n = Number.parseFloat(r), i = r.match(/[%a-z]+$/i), o = i ? i[0] : t;
  return Number.isNaN(n) ? e : n + o;
}
function Px(e, t) {
  if (!e)
    return !1;
  const { extensions: r = [] } = (e == null ? void 0 : e.extensionManager) ?? {};
  return !!r.find((i) => i.name === t);
}
function Sw(e) {
  return e.map((t) => Rx(t) ? { value: t, name: t } : t);
}
function Nx(e) {
  e = e.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/");
  const t = e.match(/^https:\/\/www\.youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  t && (e = `https://www.youtube.com/embed/${t[1]}`);
  const r = e.match(/^https:\/\/vimeo\.com\/(\d+)(?:\/([a-zA-Z0-9]+))?/);
  if (r) {
    const i = r[1], o = r[2];
    o ? e = `https://player.vimeo.com/video/${i}?h=${o}` : e = `https://player.vimeo.com/video/${i}`;
  }
  return /^https?:\/\/www.bilibili.com\/video\/.*/i.test(e) && (e = e.replace(/\?.*$/, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), e.includes("drive.google.com") && (e = e.replace("/view", "/preview")), e;
}
const bd = /* @__PURE__ */ Tr.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      allowFullscreen: !0,
      upload: void 0,
      frameborder: !1,
      resourceVideo: "both",
      width: na["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper"
        // style: 'display: flex;justify-content: center;',
      },
      button: ({ editor: e, t }) => {
        var r, n;
        return {
          component: Tx,
          componentProps: {
            action: () => {
            },
            isActive: () => e.isActive("video") || !1,
            /* If setVideo is not available(when Video Component is not imported), the button is disabled */
            disabled: !((n = (r = e.can()).setVideo) != null && n.call(r, {})),
            icon: "Video",
            tooltip: t("editor.video.tooltip"),
            videoProviders: ["."],
            editor: e
          }
        };
      }
    };
  },
  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src: e }) => ({
          src: e ? Nx(e) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: e }) => ({
          width: Ox(e)
        })
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => this.options.frameborder ? 1 : 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      },
      align: {
        default: "center",
        // Default alignment
        renderHTML: ({ align: e }) => ({
          align: e
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video] iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    const { width: t = "100%", align: r = "center" } = e ?? {}, n = {
      ...e,
      width: "100%",
      height: "100%"
    }, i = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${t};`, o = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, f = ["div", { style: `display: flex; justify-content: ${r};` }, [
      "div",
      { style: i },
      ["div", { style: o }],
      ["iframe", n]
    ]];
    return ["div", {
      ...this.options.HTMLAttributes,
      class: "iframe-wrapper",
      "data-video": ""
    }, f];
  },
  addCommands() {
    return {
      setVideo: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      }),
      updateVideo: (e) => ({ commands: t }) => t.updateAttributes(this.name, e)
    };
  }
}), es = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function ts({ item: e, disabled: t, editor: r }) {
  var i;
  const n = e.component;
  return n ? /* @__PURE__ */ l(xf, { children: e.type === "divider" ? /* @__PURE__ */ l(
    We,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ l(
    n,
    {
      ...e.componentProps,
      disabled: t || ((i = e == null ? void 0 : e.componentProps) == null ? void 0 : i.disabled),
      editor: r
    }
  ) }) : /* @__PURE__ */ l(ge, {});
}
function kx(e) {
  return e.type.name === br.name;
}
function Mx(e) {
  return e.type.name === xd.name;
}
function Lx(e) {
  return e.type.name === bd.name;
}
function $x(e) {
  const { lang: t } = we(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (u) => {
      if (kx(u))
        return c = !0, !1;
    }), c;
  }, n = Ae(() => e.disabled ? [] : Fv(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ l(ge, { children: /* @__PURE__ */ l(
    St,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: r,
      tippyOptions: es,
      children: n != null && n.length ? /* @__PURE__ */ l("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((i, o) => /* @__PURE__ */ l(
        ts,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-image-${o}`
      )) }) }) : /* @__PURE__ */ l(ge, {})
    }
  ) });
}
function _x(e) {
  const { lang: t } = we(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (u) => {
      if (Mx(u))
        return c = !0, !1;
    }), c;
  }, n = Ae(() => e.disabled ? [] : Uv(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ l(ge, { children: /* @__PURE__ */ l(
    St,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: r,
      tippyOptions: es,
      children: n != null && n.length ? /* @__PURE__ */ l("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((i, o) => /* @__PURE__ */ l(
        ts,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-image-gif-${o}`
      )) }) }) : /* @__PURE__ */ l(ge, {})
    }
  ) });
}
function Dx(e) {
  const { lang: t } = we(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (u) => {
      if (Lx(u))
        return c = !0, !1;
    }), c;
  }, n = Ae(() => e.disabled ? [] : Wv(e.editor), [e.editor, e.disabled, t]);
  return /* @__PURE__ */ l(ge, { children: /* @__PURE__ */ l(
    St,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: r,
      tippyOptions: es,
      children: n != null && n.length ? /* @__PURE__ */ l("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((i, o) => /* @__PURE__ */ l(
        ts,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-video-${o}`
      )) }) }) : /* @__PURE__ */ l(ge, {})
    }
  ) });
}
function Bx(e, t, r = null) {
  return r ? e.createChecked({ index: t }, r) : e.createAndFill({ index: t });
}
function jx(e) {
  if (e.cached.columnsNodeTypes)
    return e.cached.columnsNodeTypes;
  const t = {
    columns: e.nodes.columns,
    column: e.nodes.column
  };
  return e.cached.columnsNodeTypes = t, t;
}
function zx(e, t, r = null) {
  const n = jx(e), i = [];
  for (let o = 0; o < t; o += 1) {
    const a = Bx(n.column, o, r);
    a && i.push(a);
  }
  return n.columns.createChecked({ cols: t }, i);
}
function vi({
  state: e,
  dispatch: t,
  type: r
}) {
  const n = Qr((o) => o.type.name === Nn.name)(e.selection), i = Qr((o) => o.type.name === wd.name)(e.selection);
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
    const u = pp.fromJSON(e.schema, s);
    let f = n.pos;
    u.content.forEach((h, p, m) => {
      m < c && (f += h.nodeSize);
    });
    const d = e.tr.setTime(Date.now());
    d.replaceWith(n.pos, n.pos + n.node.nodeSize, u).setSelection(
      Gt.near(d.doc.resolve(f))
    ), t(d);
  }
  return !0;
}
function pc({ state: e, dispatch: t, type: r }) {
  const n = Qr((o) => o.type.name === Nn.name)(e.selection), i = Qr((o) => o.type.name === wd.name)(e.selection);
  if (t && n && i) {
    const o = n.node, a = i.node.attrs.index;
    let s = 0;
    r === "before" ? s = (a - 1 + o.attrs.cols) % o.attrs.cols : s = (a + 1) % o.attrs.cols;
    let c = n.pos;
    o.content.forEach((f, d, h) => {
      h < s && (c += f.nodeSize);
    });
    const u = e.tr.setTime(Date.now());
    return u.setSelection(Gt.near(u.doc.resolve(c))), t(u), !0;
  }
  return !1;
}
const wd = /* @__PURE__ */ Tr.create({
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
    return ["div", ot(this.options.HTMLAttributes, e), 0];
  }
}), Aw = mp.create({
  name: "columnActionButton",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: r }) => ({
        component: q,
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
}), Hx = 200, Nn = /* @__PURE__ */ Tr.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: Hx,
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
    return ["div", ot(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      insertColumns: (e) => ({ tr: t, dispatch: r, editor: n }) => {
        const i = zx(n.schema, e && e.cols || 3);
        if (r) {
          const o = t.selection.anchor + 1;
          t.replaceSelectionWith(i).scrollIntoView().setSelection(Gt.near(t.doc.resolve(o)));
        }
        return !0;
      },
      addColBefore: () => ({ dispatch: e, state: t }) => vi({ dispatch: e, state: t, type: "addBefore" }),
      addColAfter: () => ({ dispatch: e, state: t }) => vi({ dispatch: e, state: t, type: "addAfter" }),
      deleteCol: () => ({ dispatch: e, state: t }) => vi({ dispatch: e, state: t, type: "delete" })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => pc({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => pc({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "before"
      })
    };
  }
});
function Sd(e, t) {
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
function qx({ editor: e }) {
  const { t } = we(), r = oe(() => e.isActive(Nn.name), [e]), n = oe(() => Sd(Nn.name, e), [e]), i = oe(() => e.chain().focus().addColBefore().run(), [e]), o = oe(() => e.chain().focus().addColAfter().run(), [e]), a = oe(() => e.chain().focus().deleteCol().run(), [e]);
  return /* @__PURE__ */ l(
    St,
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
      children: /* @__PURE__ */ E("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
        /* @__PURE__ */ l(
          q,
          {
            action: i,
            icon: "ColumnAddLeft",
            tooltip: t("editor.table.menu.insertColumnBefore")
          }
        ),
        /* @__PURE__ */ l(
          q,
          {
            action: o,
            icon: "ColumnAddRight",
            tooltip: t("editor.table.menu.insertColumnAfter")
          }
        ),
        /* @__PURE__ */ l(
          q,
          {
            action: a,
            icon: "DeleteColumn",
            tooltip: t("editor.table.menu.deleteColumn")
          }
        ),
        /* @__PURE__ */ l(
          q,
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
const Fx = de.Root, Ux = de.Trigger, mc = de.Portal, gc = de.Sub, Ra = ne.forwardRef(({ className: e, inset: t, children: r, ...n }, i) => /* @__PURE__ */ E(
  de.SubTrigger,
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
      /* @__PURE__ */ l(Gh, { className: "richtext-ml-auto richtext-h-4 richtext-w-4" })
    ]
  }
));
Ra.displayName = de.SubTrigger.displayName;
const Ia = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  de.SubContent,
  {
    ref: r,
    className: Q(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-lg data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Ia.displayName = de.SubContent.displayName;
const Ad = ne.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ l(de.Portal, { children: /* @__PURE__ */ l(
  de.Content,
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
Ad.displayName = de.Content.displayName;
const He = ne.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  de.Item,
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
He.displayName = de.Item.displayName;
const Wx = ne.forwardRef(({ className: e, children: t, checked: r, ...n }, i) => /* @__PURE__ */ E(
  de.CheckboxItem,
  {
    ref: i,
    className: Q(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ l(de.ItemIndicator, { children: /* @__PURE__ */ l(hu, { className: "richtext-h-4 richtext-w-4" }) }) }),
      t
    ]
  }
));
Wx.displayName = de.CheckboxItem.displayName;
const Gx = ne.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ E(
  de.RadioItem,
  {
    ref: n,
    className: Q(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ l("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ l(de.ItemIndicator, { children: /* @__PURE__ */ l(Vh, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      t
    ]
  }
));
Gx.displayName = de.RadioItem.displayName;
const Vx = ne.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  de.Label,
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
Vx.displayName = de.Label.displayName;
const Cd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  de.Separator,
  {
    ref: r,
    className: Q("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
Cd.displayName = de.Separator.displayName;
function Kx({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "span",
    {
      className: Q("richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", e),
      ...t
    }
  );
}
Kx.displayName = "DropdownMenuShortcut";
const Le = ne.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ l(
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
Le.displayName = "Input";
const Yx = qn(
  "richtext-text-sm richtext-font-medium richtext-leading-none peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), bt = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  mu.Root,
  {
    ref: r,
    className: Q(Yx(), e),
    ...t
  }
));
bt.displayName = mu.Root.displayName;
const Ir = hr.Root, Or = hr.Trigger, Kt = ne.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, i) => /* @__PURE__ */ l(hr.Portal, { children: /* @__PURE__ */ l(
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
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, i) => /* @__PURE__ */ l(
    uu.Root,
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
We.displayName = uu.Root.displayName;
const Td = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  oa.Root,
  {
    className: Q(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ l(
      oa.Thumb,
      {
        className: Q(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
Td.displayName = oa.Root.displayName;
const Ed = Pt.Root, rs = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
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
rs.displayName = Pt.List.displayName;
const wr = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
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
wr.displayName = Pt.Trigger.displayName;
const Sr = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
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
Sr.displayName = Pt.Content.displayName;
const Xx = Ne.Provider, Rd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
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
Rd.displayName = Ne.Viewport.displayName;
const Jx = qn(
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
), Id = ne.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ l(
  Ne.Root,
  {
    ref: n,
    className: Q(Jx({ variant: t }), e),
    ...r
  }
));
Id.displayName = Ne.Root.displayName;
const Zx = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
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
Zx.displayName = Ne.Action.displayName;
const Od = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Ne.Close,
  {
    ref: r,
    className: Q(
      "richtext-absolute richtext-right-2 richtext-top-2 richtext-rounded-md richtext-p-1 richtext-text-foreground/50 richtext-opacity-0 richtext-transition-opacity hover:richtext-text-foreground focus:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 group-hover:richtext-opacity-100 group-[.destructive]:richtext-text-red-300 group-[.destructive]:hover:richtext-text-red-50 group-[.destructive]:focus:richtext-ring-red-400 group-[.destructive]:focus:richtext-ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ l(fu, { className: "richtext-h-4 richtext-w-4" })
  }
));
Od.displayName = Ne.Close.displayName;
const Pd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Ne.Title,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
Pd.displayName = Ne.Title.displayName;
const Nd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Ne.Description,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-opacity-90", e),
    ...t
  }
));
Nd.displayName = Ne.Description.displayName;
const Qx = qn(
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
), kd = ne.forwardRef(({ className: e, variant: t, size: r, ...n }, i) => /* @__PURE__ */ l(
  pu.Root,
  {
    ref: i,
    className: Q(Qx({ variant: t, size: r, className: e })),
    ...n
  }
));
kd.displayName = pu.Root.displayName;
const eb = Ar.Provider, Md = Ar.Root, Ld = Ar.Trigger, ns = ne.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ l(
  Ar.Content,
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
ns.displayName = Ar.Content.displayName;
const tb = 1, rb = 1e6;
let yi = 0;
function nb() {
  return yi = (yi + 1) % Number.MAX_SAFE_INTEGER, yi.toString();
}
const xi = /* @__PURE__ */ new Map();
function vc(e) {
  if (xi.has(e))
    return;
  const t = setTimeout(() => {
    xi.delete(e), fr({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, rb);
  xi.set(e, t);
}
function ib(e, t) {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, tb)
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
      return r ? vc(r) : e.toasts.forEach((n) => {
        vc(n.id);
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
const Kr = [];
let Yr = { toasts: [] };
function fr(e) {
  Yr = ib(Yr, e), Kr.forEach((t) => {
    t(Yr);
  });
}
function ob({ ...e }) {
  const t = nb(), r = (i) => fr({
    type: "UPDATE_TOAST",
    toast: { ...i, id: t }
  }), n = () => fr({ type: "DISMISS_TOAST", toastId: t });
  return fr({
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
function ab() {
  const [e, t] = ne.useState(Yr);
  return ne.useEffect(() => (Kr.push(t), () => {
    const r = Kr.indexOf(t);
    r > -1 && Kr.splice(r, 1);
  }), [e]), {
    ...e,
    toast: ob,
    dismiss: (r) => fr({ type: "DISMISS_TOAST", toastId: r })
  };
}
const $d = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ia.Root,
  {
    ref: r,
    className: Q(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-p-0 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-2 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l(
      ia.Indicator,
      {
        className: Q("!richtext-flex !richtext-p-0 !richtext-items-center !richtext-justify-center !richtext-text-current"),
        children: /* @__PURE__ */ l(hu, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
$d.displayName = ia.Root.displayName;
const sb = { padding: "0 12px 12px" }, cb = ({ width: e, maxWidth: t, height: r, onOk: n, children: i }) => {
  const { t: o } = we(), [a, s] = Z({
    width: "",
    height: "",
    maxWidth: ""
  });
  he(() => {
    s({
      width: e,
      height: r,
      maxWidth: t
    });
  }, [r, t, e]);
  function c(u) {
    u.preventDefault(), u.stopPropagation(), n(a);
  }
  return /* @__PURE__ */ E(Ir, { modal: !0, children: [
    /* @__PURE__ */ l(Or, { asChild: !0, children: i }),
    /* @__PURE__ */ l(Kt, { children: /* @__PURE__ */ l("div", { style: sb, children: /* @__PURE__ */ E("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: c, children: [
      /* @__PURE__ */ l(bt, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ l(
        Le,
        {
          type: "number",
          value: a.width,
          required: !0,
          onChange: (u) => s({ ...a, width: u.target.value })
        }
      ) }) }),
      /* @__PURE__ */ l(bt, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ l(
        Le,
        {
          type: "number",
          value: a.maxWidth,
          required: !0,
          onChange: (u) => s({ ...a, maxWidth: u.target.value })
        }
      ) }) }),
      /* @__PURE__ */ l(bt, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ l(
        Le,
        {
          type: "number",
          value: a.height,
          required: !0,
          onChange: (u) => s({ ...a, height: u.target.value })
        }
      ) }) }),
      /* @__PURE__ */ l(Ce, { type: "submit", className: "richtext-self-end richtext-mt-2", children: o("editor.link.dialog.button.apply") })
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
function lb(e) {
  const t = Yt.youtube, r = e.matchedUrl;
  e.validLink = !0;
  const n = r.split("="), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}/${o}`, e.validId = !0;
  }
  return e;
}
function ub(e) {
  const t = Yt.youku, r = e.matchedUrl, n = t.idRule, i = new RegExp(n), o = r.match(i);
  if (o && o.length > 0) {
    const a = o[0].slice(3);
    e.validId = !0, e.src = `${t.srcPrefix}/${a}`;
  } else
    e.validId = !1;
  return e;
}
function db(e) {
  const t = Yt.bilibili, n = e.matchedUrl.split("/"), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}=${o}`, e.validId = !0;
  }
  return e;
}
function fb(e) {
  const t = Yt.qqvideo, n = e.matchedUrl.split("/"), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}=${o}`, e.validId = !0;
  }
  return e;
}
function hb(e, t) {
  return t.src = e, t.validId = !0, t;
}
function pb(e, t) {
  return t.src = e, t.validId = !0, t;
}
function mb(e, t) {
  return t.src = e, t.validId = !0, t.originalLink = e, t;
}
function gb(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function vb(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function yb(e) {
  const t = Yt.figma;
  return e.src = `${t.srcPrefix}=${encodeURIComponent(e.matchedUrl)}`, e.validId = !0, e.originalLink = e.matchedUrl, e;
}
function xb(e, t) {
  return t.src = `${t.matchedUrl}?embed`, t.validId = !0, t.originalLink = e, t;
}
function bb(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function wb(e) {
  return e.src = `${e.matchedUrl}`, e.validId = !0, e.originalLink = e.src, e;
}
function Sb(e, t) {
  return t.src = `${t.matchedUrl}?background=white&banner=show&embedded=true`, t.validId = !0, t.originalLink = e, t;
}
function Ab(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function Cb(e, t, r) {
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
function Tb(e) {
  var r, n;
  let t = "iframe";
  return ((r = e.includes) != null && r.call(e, "youtube") || (n = e.includes) != null && n.call(e, "youtu.be")) && (t = "youtube"), e.includes("youku") && (t = "youku"), e.includes("bilibili") && (t = "bilibili"), e.includes("qq") && (t = "qqvideo"), e.includes("amap") && (t = "amap"), e.includes("map.baidu") && (t = "baidu_map"), (e.includes("google.com/maps") || e.includes("maps.app.goo.gl")) && (t = "googlemaps"), e.includes("modao") && (t = "modao"), e.includes("lanhuapp") && (t = "lanhu"), e.includes("figma") && (t = "figma"), e.includes("canva") && (t = "canva"), e.includes("processon") && (t = "processon"), e.includes("codepen") && (t = "codepen"), e.includes("jinshuju") && (t = "jinshuju"), e.includes("iframe") && (t = "iframe"), t;
}
function _d(e) {
  let t = {
    validLink: !1,
    validId: !1,
    matchedUrl: "",
    originalLink: e,
    src: ""
  };
  const r = Tb(e);
  if (t = Cb(r, e, t), !t.validLink)
    return t;
  switch (r) {
    case "youtube":
      return lb(t);
    case "youku":
      return ub(t);
    case "bilibili":
      return db(t);
    case "qqvideo":
      return fb(t);
    case "amap":
      return hb(e, t);
    case "baidu_map":
      return pb(e, t);
    case "googlemaps":
      return mb(e, t);
    case "modao":
      return gb(t);
    case "lanhu":
      return vb(t);
    case "figma":
      return yb(t);
    case "canva":
      return xb(e, t);
    case "processon":
      return bb(e, t);
    case "codepen":
      return wb(t);
    case "jinshuju":
      return Sb(e, t);
    case "iframe":
      return Ab(e, t);
    default:
      return e;
  }
}
function Eb() {
  const [e] = vd((t) => t.value);
  return e;
}
const Rb = {
  setDisable: (e, t) => {
    Qa(It.EDIT(e), t);
  }
}, Ib = "_wrap_5y04w_1", Ob = "_innerWrap_5y04w_15", yc = {
  wrap: Ib,
  innerWrap: Ob
};
function Pb({ editor: e, node: t, updateAttributes: r }) {
  const n = Eb(), { src: i, width: o, height: a } = t.attrs, [s, c] = Z("");
  function u() {
    if (!s)
      return;
    const d = _d(s);
    e.chain().updateAttributes(zt.name, {
      src: (d == null ? void 0 : d.src) || s
    }).setNodeSelection(e.state.selection.from).focus().run();
  }
  const f = oe(
    (d) => {
      r({ width: d.width, height: d.height });
    },
    [r]
  );
  return /* @__PURE__ */ E(Pa, { children: [
    !i && /* @__PURE__ */ E("div", { className: "richtext-mx-auto richtext-my-[12px] richtext-flex richtext-max-w-[600px] richtext-items-center richtext-justify-center richtext-gap-[10px] richtext-rounded-[12px] richtext-border richtext-border-solid richtext-border-[#ccc] richtext-p-[10px]", children: [
      /* @__PURE__ */ l(
        Le,
        {
          autoFocus: !0,
          className: "richtext-flex-1",
          onInput: (d) => c(d.target.value),
          placeholder: "Enter link",
          type: "url",
          value: s
        }
      ),
      /* @__PURE__ */ l(
        Ce,
        {
          className: "richtext-w-[60px]",
          onClick: u,
          children: "OK"
        }
      )
    ] }),
    i && /* @__PURE__ */ l(
      gp,
      {
        size: { width: Number.parseInt(o), height: Number.parseInt(a) },
        onResizeStop: (d, h, p, m) => {
          f({
            width: Number.parseInt(o) + m.width,
            height: Number.parseInt(a) + m.height
          });
        },
        children: /* @__PURE__ */ l("div", { className: Mn(yc.wrap, "render-wrapper"), children: /* @__PURE__ */ l(
          "div",
          {
            className: yc.innerWrap,
            style: { pointerEvents: n ? "none" : "auto" },
            children: /* @__PURE__ */ l(
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
const zt = /* @__PURE__ */ Tr.create({
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
        component: q,
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
        parseHTML: ri("width")
      },
      height: {
        default: 300,
        parseHTML: ri("height")
      },
      src: {
        default: null,
        parseHTML: ri("src")
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
    return ["iframe", ot(this.options.HTMLAttributes, e)];
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
      gu({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  },
  addNodeView() {
    return Na(Pb);
  }
});
var kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function kb(e) {
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
var bi, xc;
function Dd() {
  if (xc) return bi;
  xc = 1;
  var e = Object.prototype.toString;
  return bi = function(r) {
    var n = e.call(r), i = n === "[object Arguments]";
    return i || (i = n !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && e.call(r.callee) === "[object Function]"), i;
  }, bi;
}
var wi, bc;
function Mb() {
  if (bc) return wi;
  bc = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Dd(), i = Object.prototype.propertyIsEnumerable, o = !i.call({ toString: null }, "toString"), a = i.call(function() {
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
    }, u = {
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
    }, f = function() {
      if (typeof window > "u")
        return !1;
      for (var h in window)
        try {
          if (!u["$" + h] && t.call(window, h) && window[h] !== null && typeof window[h] == "object")
            try {
              c(window[h]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), d = function(h) {
      if (typeof window > "u" || !f)
        return c(h);
      try {
        return c(h);
      } catch {
        return !1;
      }
    };
    e = function(p) {
      var m = p !== null && typeof p == "object", g = r.call(p) === "[object Function]", v = n(p), x = m && r.call(p) === "[object String]", w = [];
      if (!m && !g && !v)
        throw new TypeError("Object.keys called on a non-object");
      var S = a && g;
      if (x && p.length > 0 && !t.call(p, 0))
        for (var A = 0; A < p.length; ++A)
          w.push(String(A));
      if (v && p.length > 0)
        for (var R = 0; R < p.length; ++R)
          w.push(String(R));
      else
        for (var N in p)
          !(S && N === "prototype") && t.call(p, N) && w.push(String(N));
      if (o)
        for (var M = d(p), O = 0; O < s.length; ++O)
          !(M && s[O] === "constructor") && t.call(p, s[O]) && w.push(s[O]);
      return w;
    };
  }
  return wi = e, wi;
}
var Si, wc;
function is() {
  if (wc) return Si;
  wc = 1;
  var e = Array.prototype.slice, t = Dd(), r = Object.keys, n = r ? function(a) {
    return r(a);
  } : Mb(), i = Object.keys;
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
  }, Si = n, Si;
}
var Ai, Sc;
function Un() {
  if (Sc) return Ai;
  Sc = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ai = e, Ai;
}
var Ci, Ac;
function os() {
  return Ac || (Ac = 1, Ci = SyntaxError), Ci;
}
var Ti, Cc;
function _e() {
  return Cc || (Cc = 1, Ti = TypeError), Ti;
}
var Ei, Tc;
function Lb() {
  return Tc || (Tc = 1, Ei = Object.getOwnPropertyDescriptor), Ei;
}
var Ri, Ec;
function Mt() {
  if (Ec) return Ri;
  Ec = 1;
  var e = /* @__PURE__ */ Lb();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ri = e, Ri;
}
var Ii, Rc;
function as() {
  if (Rc) return Ii;
  Rc = 1;
  var e = /* @__PURE__ */ Un(), t = /* @__PURE__ */ os(), r = /* @__PURE__ */ _e(), n = /* @__PURE__ */ Mt();
  return Ii = function(o, a, s) {
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
    var c = arguments.length > 3 ? arguments[3] : null, u = arguments.length > 4 ? arguments[4] : null, f = arguments.length > 5 ? arguments[5] : null, d = arguments.length > 6 ? arguments[6] : !1, h = !!n && n(o, a);
    if (e)
      e(o, a, {
        configurable: f === null && h ? h.configurable : !f,
        enumerable: c === null && h ? h.enumerable : !c,
        value: s,
        writable: u === null && h ? h.writable : !u
      });
    else if (d || !c && !u && !f)
      o[a] = s;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, Ii;
}
var Oi, Ic;
function ss() {
  if (Ic) return Oi;
  Ic = 1;
  var e = /* @__PURE__ */ Un(), t = function() {
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
  }, Oi = t, Oi;
}
var Pi, Oc;
function Lt() {
  if (Oc) return Pi;
  Oc = 1;
  var e = is(), t = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", r = Object.prototype.toString, n = Array.prototype.concat, i = /* @__PURE__ */ as(), o = function(u) {
    return typeof u == "function" && r.call(u) === "[object Function]";
  }, a = /* @__PURE__ */ ss()(), s = function(u, f, d, h) {
    if (f in u) {
      if (h === !0) {
        if (u[f] === d)
          return;
      } else if (!o(h) || !h())
        return;
    }
    a ? i(u, f, d, !0) : i(u, f, d);
  }, c = function(u, f) {
    var d = arguments.length > 2 ? arguments[2] : {}, h = e(f);
    t && (h = n.call(h, Object.getOwnPropertySymbols(f)));
    for (var p = 0; p < h.length; p += 1)
      s(u, h[p], f[h[p]], d[h[p]]);
  };
  return c.supportsDescriptors = !!a, Pi = c, Pi;
}
var Ni = { exports: {} }, ki, Pc;
function cs() {
  return Pc || (Pc = 1, ki = Object), ki;
}
var Mi, Nc;
function Bd() {
  return Nc || (Nc = 1, Mi = Error), Mi;
}
var Li, kc;
function $b() {
  return kc || (kc = 1, Li = EvalError), Li;
}
var $i, Mc;
function _b() {
  return Mc || (Mc = 1, $i = RangeError), $i;
}
var _i, Lc;
function Db() {
  return Lc || (Lc = 1, _i = ReferenceError), _i;
}
var Di, $c;
function Bb() {
  return $c || ($c = 1, Di = URIError), Di;
}
var Bi, _c;
function jb() {
  return _c || (_c = 1, Bi = Math.abs), Bi;
}
var ji, Dc;
function zb() {
  return Dc || (Dc = 1, ji = Math.floor), ji;
}
var zi, Bc;
function Hb() {
  return Bc || (Bc = 1, zi = Math.max), zi;
}
var Hi, jc;
function qb() {
  return jc || (jc = 1, Hi = Math.min), Hi;
}
var qi, zc;
function Fb() {
  return zc || (zc = 1, qi = Math.pow), qi;
}
var Fi, Hc;
function Ub() {
  return Hc || (Hc = 1, Fi = Math.round), Fi;
}
var Ui, qc;
function Wb() {
  return qc || (qc = 1, Ui = Number.isNaN || function(t) {
    return t !== t;
  }), Ui;
}
var Wi, Fc;
function Gb() {
  if (Fc) return Wi;
  Fc = 1;
  var e = /* @__PURE__ */ Wb();
  return Wi = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Wi;
}
var Gi, Uc;
function Wn() {
  return Uc || (Uc = 1, Gi = function() {
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
  }), Gi;
}
var Vi, Wc;
function ls() {
  if (Wc) return Vi;
  Wc = 1;
  var e = typeof Symbol < "u" && Symbol, t = Wn();
  return Vi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Vi;
}
var Ki, Gc;
function jd() {
  return Gc || (Gc = 1, Ki = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ki;
}
var Yi, Vc;
function zd() {
  if (Vc) return Yi;
  Vc = 1;
  var e = /* @__PURE__ */ cs();
  return Yi = e.getPrototypeOf || null, Yi;
}
var Xi, Kc;
function Vb() {
  if (Kc) return Xi;
  Kc = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(c, u) {
    for (var f = [], d = 0; d < c.length; d += 1)
      f[d] = c[d];
    for (var h = 0; h < u.length; h += 1)
      f[h + c.length] = u[h];
    return f;
  }, o = function(c, u) {
    for (var f = [], d = u, h = 0; d < c.length; d += 1, h += 1)
      f[h] = c[d];
    return f;
  }, a = function(s, c) {
    for (var u = "", f = 0; f < s.length; f += 1)
      u += s[f], f + 1 < s.length && (u += c);
    return u;
  };
  return Xi = function(c) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var f = o(arguments, 1), d, h = function() {
      if (this instanceof d) {
        var x = u.apply(
          this,
          i(f, arguments)
        );
        return Object(x) === x ? x : this;
      }
      return u.apply(
        c,
        i(f, arguments)
      );
    }, p = r(0, u.length - f.length), m = [], g = 0; g < p; g++)
      m[g] = "$" + g;
    if (d = Function("binder", "return function (" + a(m, ",") + "){ return binder.apply(this,arguments); }")(h), u.prototype) {
      var v = function() {
      };
      v.prototype = u.prototype, d.prototype = new v(), v.prototype = null;
    }
    return d;
  }, Xi;
}
var Ji, Yc;
function Pr() {
  if (Yc) return Ji;
  Yc = 1;
  var e = Vb();
  return Ji = Function.prototype.bind || e, Ji;
}
var Zi, Xc;
function us() {
  return Xc || (Xc = 1, Zi = Function.prototype.call), Zi;
}
var Qi, Jc;
function ds() {
  return Jc || (Jc = 1, Qi = Function.prototype.apply), Qi;
}
var eo, Zc;
function Kb() {
  return Zc || (Zc = 1, eo = typeof Reflect < "u" && Reflect && Reflect.apply), eo;
}
var to, Qc;
function Hd() {
  if (Qc) return to;
  Qc = 1;
  var e = Pr(), t = ds(), r = us(), n = Kb();
  return to = n || e.call(r, t), to;
}
var ro, el;
function fs() {
  if (el) return ro;
  el = 1;
  var e = Pr(), t = /* @__PURE__ */ _e(), r = us(), n = Hd();
  return ro = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, ro;
}
var no, tl;
function Yb() {
  if (tl) return no;
  tl = 1;
  var e = fs(), t = /* @__PURE__ */ Mt(), r;
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
  return no = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return o(s == null ? s : i(s));
    }
  ) : !1, no;
}
var io, rl;
function qd() {
  if (rl) return io;
  rl = 1;
  var e = jd(), t = zd(), r = /* @__PURE__ */ Yb();
  return io = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, io;
}
var oo, nl;
function hs() {
  if (nl) return oo;
  nl = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Pr();
  return oo = r.call(e, t), oo;
}
var ao, il;
function lt() {
  if (il) return ao;
  il = 1;
  var e, t = /* @__PURE__ */ cs(), r = /* @__PURE__ */ Bd(), n = /* @__PURE__ */ $b(), i = /* @__PURE__ */ _b(), o = /* @__PURE__ */ Db(), a = /* @__PURE__ */ os(), s = /* @__PURE__ */ _e(), c = /* @__PURE__ */ Bb(), u = /* @__PURE__ */ jb(), f = /* @__PURE__ */ zb(), d = /* @__PURE__ */ Hb(), h = /* @__PURE__ */ qb(), p = /* @__PURE__ */ Fb(), m = /* @__PURE__ */ Ub(), g = /* @__PURE__ */ Gb(), v = Function, x = function(re) {
    try {
      return v('"use strict"; return (' + re + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ Mt(), S = /* @__PURE__ */ Un(), A = function() {
    throw new s();
  }, R = w ? function() {
    try {
      return arguments.callee, A;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return A;
      }
    }
  }() : A, N = ls()(), M = qd(), O = zd(), k = jd(), _ = ds(), C = us(), P = {}, $ = typeof Uint8Array > "u" || !M ? e : M(Uint8Array), B = {
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
    "%ThrowTypeError%": R,
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
    "%Object.getPrototypeOf%": O,
    "%Math.abs%": u,
    "%Math.floor%": f,
    "%Math.max%": d,
    "%Math.min%": h,
    "%Math.pow%": p,
    "%Math.round%": m,
    "%Math.sign%": g,
    "%Reflect.getPrototypeOf%": k
  };
  if (M)
    try {
      null.error;
    } catch (re) {
      var G = M(M(re));
      B["%Error.prototype%"] = G;
    }
  var z = function re(j) {
    var H;
    if (j === "%AsyncFunction%")
      H = x("async function () {}");
    else if (j === "%GeneratorFunction%")
      H = x("function* () {}");
    else if (j === "%AsyncGeneratorFunction%")
      H = x("async function* () {}");
    else if (j === "%AsyncGenerator%") {
      var D = re("%AsyncGeneratorFunction%");
      D && (H = D.prototype);
    } else if (j === "%AsyncIteratorPrototype%") {
      var V = re("%AsyncGenerator%");
      V && M && (H = M(V.prototype));
    }
    return B[j] = H, H;
  }, ee = {
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
  }, J = Pr(), te = /* @__PURE__ */ hs(), ve = J.call(C, Array.prototype.concat), pe = J.call(_, Array.prototype.splice), De = J.call(C, String.prototype.replace), Be = J.call(C, String.prototype.slice), T = J.call(C, RegExp.prototype.exec), L = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, U = /\\(\\)?/g, F = function(j) {
    var H = Be(j, 0, 1), D = Be(j, -1);
    if (H === "%" && D !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (D === "%" && H !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var V = [];
    return De(j, L, function(me, ye, xe, Se) {
      V[V.length] = xe ? De(Se, U, "$1") : ye || me;
    }), V;
  }, X = function(j, H) {
    var D = j, V;
    if (te(ee, D) && (V = ee[D], D = "%" + V[0] + "%"), te(B, D)) {
      var me = B[D];
      if (me === P && (me = z(D)), typeof me > "u" && !H)
        throw new s("intrinsic " + j + " exists, but is not available. Please file an issue!");
      return {
        alias: V,
        name: D,
        value: me
      };
    }
    throw new a("intrinsic " + j + " does not exist!");
  };
  return ao = function(j, H) {
    if (typeof j != "string" || j.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof H != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (T(/^%?[^%]*%?$/, j) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var D = F(j), V = D.length > 0 ? D[0] : "", me = X("%" + V + "%", H), ye = me.name, xe = me.value, Se = !1, Re = me.alias;
    Re && (V = Re[0], pe(D, ve([0, 1], Re)));
    for (var Ye = 1, je = !0; Ye < D.length; Ye += 1) {
      var Ie = D[Ye], Xe = Be(Ie, 0, 1), Je = Be(Ie, -1);
      if ((Xe === '"' || Xe === "'" || Xe === "`" || Je === '"' || Je === "'" || Je === "`") && Xe !== Je)
        throw new a("property names with quotes must have matching quotes");
      if ((Ie === "constructor" || !je) && (Se = !0), V += "." + Ie, ye = "%" + V + "%", te(B, ye))
        xe = B[ye];
      else if (xe != null) {
        if (!(Ie in xe)) {
          if (!H)
            throw new s("base intrinsic for " + j + " exists, but the property is not available.");
          return;
        }
        if (w && Ye + 1 >= D.length) {
          var Ze = w(xe, Ie);
          je = !!Ze, je && "get" in Ze && !("originalValue" in Ze.get) ? xe = Ze.get : xe = xe[Ie];
        } else
          je = te(xe, Ie), xe = xe[Ie];
        je && !Se && (B[ye] = xe);
      }
    }
    return xe;
  }, ao;
}
var so, ol;
function Xb() {
  if (ol) return so;
  ol = 1;
  var e = /* @__PURE__ */ lt(), t = /* @__PURE__ */ as(), r = /* @__PURE__ */ ss()(), n = /* @__PURE__ */ Mt(), i = /* @__PURE__ */ _e(), o = e("%Math.floor%");
  return so = function(s, c) {
    if (typeof s != "function")
      throw new i("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || o(c) !== c)
      throw new i("`length` must be a positive 32-bit integer");
    var u = arguments.length > 2 && !!arguments[2], f = !0, d = !0;
    if ("length" in s && n) {
      var h = n(s, "length");
      h && !h.configurable && (f = !1), h && !h.writable && (d = !1);
    }
    return (f || d || !u) && (r ? t(
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
  }, so;
}
var co, al;
function Jb() {
  if (al) return co;
  al = 1;
  var e = Pr(), t = ds(), r = Hd();
  return co = function() {
    return r(e, t, arguments);
  }, co;
}
var sl;
function Xt() {
  return sl || (sl = 1, function(e) {
    var t = /* @__PURE__ */ Xb(), r = /* @__PURE__ */ Un(), n = fs(), i = Jb();
    e.exports = function(a) {
      var s = n(arguments), c = a.length - (arguments.length - 1);
      return t(
        s,
        1 + (c > 0 ? c : 0),
        !0
      );
    }, r ? r(e.exports, "apply", { value: i }) : e.exports.apply = i;
  }(Ni)), Ni.exports;
}
var lo, cl;
function Ee() {
  if (cl) return lo;
  cl = 1;
  var e = /* @__PURE__ */ lt(), t = fs(), r = t([e("%String.prototype.indexOf%")]);
  return lo = function(i, o) {
    var a = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(i, !!o)
    );
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t([a]) : a;
  }, lo;
}
var uo, ll;
function Fd() {
  if (ll) return uo;
  ll = 1;
  var e = is(), t = Wn()(), r = /* @__PURE__ */ Ee(), n = /* @__PURE__ */ cs(), i = r("Array.prototype.push"), o = r("Object.prototype.propertyIsEnumerable"), a = t ? n.getOwnPropertySymbols : null;
  return uo = function(c, u) {
    if (c == null)
      throw new TypeError("target must be an object");
    var f = n(c);
    if (arguments.length === 1)
      return f;
    for (var d = 1; d < arguments.length; ++d) {
      var h = n(arguments[d]), p = e(h), m = t && (n.getOwnPropertySymbols || a);
      if (m)
        for (var g = m(h), v = 0; v < g.length; ++v) {
          var x = g[v];
          o(h, x) && i(p, x);
        }
      for (var w = 0; w < p.length; ++w) {
        var S = p[w];
        if (o(h, S)) {
          var A = h[S];
          f[S] = A;
        }
      }
    }
    return f;
  }, uo;
}
var fo, ul;
function Ud() {
  if (ul) return fo;
  ul = 1;
  var e = Fd(), t = function() {
    if (!Object.assign)
      return !1;
    for (var n = "abcdefghijklmnopqrst", i = n.split(""), o = {}, a = 0; a < i.length; ++a)
      o[i[a]] = i[a];
    var s = Object.assign({}, o), c = "";
    for (var u in s)
      c += u;
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
  return fo = function() {
    return !Object.assign || t() || r() ? e : Object.assign;
  }, fo;
}
var ho, dl;
function Zb() {
  if (dl) return ho;
  dl = 1;
  var e = Lt(), t = Ud();
  return ho = function() {
    var n = t();
    return e(
      Object,
      { assign: n },
      { assign: function() {
        return Object.assign !== n;
      } }
    ), n;
  }, ho;
}
var po, fl;
function Qb() {
  if (fl) return po;
  fl = 1;
  var e = Lt(), t = Xt(), r = Fd(), n = Ud(), i = Zb(), o = t.apply(n()), a = function(c, u) {
    return o(Object, arguments);
  };
  return e(a, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), po = a, po;
}
var mo, hl;
function Wd() {
  if (hl) return mo;
  hl = 1;
  var e = /* @__PURE__ */ lt(), t = Xt(), r = t(e("String.prototype.indexOf"));
  return mo = function(i, o) {
    var a = e(i, !!o);
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t(a) : a;
  }, mo;
}
var go, pl;
function e2() {
  if (pl) return go;
  pl = 1;
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
  }, go = e, go;
}
var vo, ml;
function t2() {
  if (ml) return vo;
  ml = 1;
  var e = /* @__PURE__ */ as(), t = /* @__PURE__ */ ss()(), r = e2().functionsHaveConfigurableNames(), n = /* @__PURE__ */ _e();
  return vo = function(o, a) {
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
  }, vo;
}
var yo, gl;
function Gd() {
  if (gl) return yo;
  gl = 1;
  var e = t2(), t = /* @__PURE__ */ _e(), r = Object;
  return yo = e(function() {
    if (this == null || this !== r(this))
      throw new t("RegExp.prototype.flags getter called on non-object");
    var i = "";
    return this.hasIndices && (i += "d"), this.global && (i += "g"), this.ignoreCase && (i += "i"), this.multiline && (i += "m"), this.dotAll && (i += "s"), this.unicode && (i += "u"), this.unicodeSets && (i += "v"), this.sticky && (i += "y"), i;
  }, "get flags", !0), yo;
}
var xo, vl;
function Vd() {
  if (vl) return xo;
  vl = 1;
  var e = Gd(), t = Lt().supportsDescriptors, r = Object.getOwnPropertyDescriptor;
  return xo = function() {
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
  }, xo;
}
var bo, yl;
function r2() {
  if (yl) return bo;
  yl = 1;
  var e = Lt().supportsDescriptors, t = Vd(), r = /* @__PURE__ */ Mt(), n = Object.defineProperty, i = /* @__PURE__ */ Bd(), o = qd(), a = /a/;
  return bo = function() {
    if (!e || !o)
      throw new i("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
    var c = t(), u = o(a), f = r(u, "flags");
    return (!f || f.get !== c) && n(u, "flags", {
      configurable: !0,
      enumerable: !1,
      get: c
    }), c;
  }, bo;
}
var wo, xl;
function n2() {
  if (xl) return wo;
  xl = 1;
  var e = Lt(), t = Xt(), r = Gd(), n = Vd(), i = r2(), o = t(n());
  return e(o, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), wo = o, wo;
}
var nr = { exports: {} }, So, bl;
function $t() {
  if (bl) return So;
  bl = 1;
  var e = Wn();
  return So = function() {
    return e() && !!Symbol.toStringTag;
  }, So;
}
var Ao, wl;
function Kd() {
  if (wl) return Ao;
  wl = 1;
  var e = $t()(), t = /* @__PURE__ */ Ee(), r = t("Object.prototype.toString"), n = function(s) {
    return e && s && typeof s == "object" && Symbol.toStringTag in s ? !1 : r(s) === "[object Arguments]";
  }, i = function(s) {
    return n(s) ? !0 : s !== null && typeof s == "object" && "length" in s && typeof s.length == "number" && s.length >= 0 && r(s) !== "[object Array]" && "callee" in s && r(s.callee) === "[object Function]";
  }, o = function() {
    return n(arguments);
  }();
  return n.isLegacyArguments = i, Ao = o ? n : i, Ao;
}
const i2 = {}, o2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: i2
}, Symbol.toStringTag, { value: "Module" })), a2 = /* @__PURE__ */ kb(o2);
var Co, Sl;
function Gn() {
  if (Sl) return Co;
  Sl = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, s = i && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, u = c ? WeakMap.prototype.has : null, f = typeof WeakSet == "function" && WeakSet.prototype, d = f ? WeakSet.prototype.has : null, h = typeof WeakRef == "function" && WeakRef.prototype, p = h ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, g = Object.prototype.toString, v = Function.prototype.toString, x = String.prototype.match, w = String.prototype.slice, S = String.prototype.replace, A = String.prototype.toUpperCase, R = String.prototype.toLowerCase, N = RegExp.prototype.test, M = Array.prototype.concat, O = Array.prototype.join, k = Array.prototype.slice, _ = Math.floor, C = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, P = Object.getOwnPropertySymbols, $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, B = typeof Symbol == "function" && typeof Symbol.iterator == "object", G = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === B || !0) ? Symbol.toStringTag : null, z = Object.prototype.propertyIsEnumerable, ee = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(y) {
    return y.__proto__;
  } : null);
  function J(y, b) {
    if (y === 1 / 0 || y === -1 / 0 || y !== y || y && y > -1e3 && y < 1e3 || N.call(/e/, b))
      return b;
    var ie = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof y == "number") {
      var ae = y < 0 ? -_(-y) : _(y);
      if (ae !== y) {
        var se = String(ae), Y = w.call(b, se.length + 1);
        return S.call(se, ie, "$&_") + "." + S.call(S.call(Y, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return S.call(b, ie, "$&_");
  }
  var te = a2, ve = te.custom, pe = me(ve) ? ve : null, De = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Be = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Co = function y(b, ie, ae, se) {
    var Y = ie || {};
    if (Se(Y, "quoteStyle") && !Se(De, Y.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Se(Y, "maxStringLength") && (typeof Y.maxStringLength == "number" ? Y.maxStringLength < 0 && Y.maxStringLength !== 1 / 0 : Y.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var ft = Se(Y, "customInspect") ? Y.customInspect : !0;
    if (typeof ft != "boolean" && ft !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Se(Y, "indent") && Y.indent !== null && Y.indent !== "	" && !(parseInt(Y.indent, 10) === Y.indent && Y.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Se(Y, "numericSeparator") && typeof Y.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Ct = Y.numericSeparator;
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
      var Pe = String(b);
      return Ct ? J(b, Pe) : Pe;
    }
    if (typeof b == "bigint") {
      var ht = String(b) + "n";
      return Ct ? J(b, ht) : ht;
    }
    var Yn = typeof Y.depth > "u" ? 5 : Y.depth;
    if (typeof ae > "u" && (ae = 0), ae >= Yn && Yn > 0 && typeof b == "object")
      return F(b) ? "[Array]" : "[Object]";
    var Dt = df(Y, ae);
    if (typeof se > "u")
      se = [];
    else if (je(se, b) >= 0)
      return "[Circular]";
    function ze(Bt, Lr, hf) {
      if (Lr && (se = k.call(se), se.push(Lr)), hf) {
        var As = {
          depth: Y.depth
        };
        return Se(Y, "quoteStyle") && (As.quoteStyle = Y.quoteStyle), y(Bt, As, ae + 1, se);
      }
      return y(Bt, Y, ae + 1, se);
    }
    if (typeof b == "function" && !re(b)) {
      var gs = Ye(b), vs = kr(b, ze);
      return "[Function" + (gs ? ": " + gs : " (anonymous)") + "]" + (vs.length > 0 ? " { " + O.call(vs, ", ") + " }" : "");
    }
    if (me(b)) {
      var ys = B ? S.call(String(b), /^(Symbol\(.*\))_[^)]*$/, "$1") : $.call(b);
      return typeof b == "object" && !B ? dt(ys) : ys;
    }
    if (ut(b)) {
      for (var Zt = "<" + R.call(String(b.nodeName)), Xn = b.attributes || [], Mr = 0; Mr < Xn.length; Mr++)
        Zt += " " + Xn[Mr].name + "=" + T(L(Xn[Mr].value), "double", Y);
      return Zt += ">", b.childNodes && b.childNodes.length && (Zt += "..."), Zt += "</" + R.call(String(b.nodeName)) + ">", Zt;
    }
    if (F(b)) {
      if (b.length === 0)
        return "[]";
      var Jn = kr(b, ze);
      return Dt && !uf(Jn) ? "[" + Kn(Jn, Dt) + "]" : "[ " + O.call(Jn, ", ") + " ]";
    }
    if (j(b)) {
      var Zn = kr(b, ze);
      return !("cause" in Error.prototype) && "cause" in b && !z.call(b, "cause") ? "{ [" + String(b) + "] " + O.call(M.call("[cause]: " + ze(b.cause), Zn), ", ") + " }" : Zn.length === 0 ? "[" + String(b) + "]" : "{ [" + String(b) + "] " + O.call(Zn, ", ") + " }";
    }
    if (typeof b == "object" && ft) {
      if (pe && typeof b[pe] == "function" && te)
        return te(b, { depth: Yn - ae });
      if (ft !== "symbol" && typeof b.inspect == "function")
        return b.inspect();
    }
    if (Ie(b)) {
      var xs = [];
      return n && n.call(b, function(Bt, Lr) {
        xs.push(ze(Lr, b, !0) + " => " + ze(Bt, b));
      }), ms("Map", r.call(b), xs, Dt);
    }
    if (Ze(b)) {
      var bs = [];
      return s && s.call(b, function(Bt) {
        bs.push(ze(Bt, b));
      }), ms("Set", a.call(b), bs, Dt);
    }
    if (Xe(b))
      return Vn("WeakMap");
    if (Nr(b))
      return Vn("WeakSet");
    if (Je(b))
      return Vn("WeakRef");
    if (D(b))
      return dt(ze(Number(b)));
    if (ye(b))
      return dt(ze(C.call(b)));
    if (V(b))
      return dt(m.call(b));
    if (H(b))
      return dt(ze(String(b)));
    if (typeof window < "u" && b === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && b === globalThis || typeof kn < "u" && b === kn)
      return "{ [object globalThis] }";
    if (!X(b) && !re(b)) {
      var Qn = kr(b, ze), ws = ee ? ee(b) === Object.prototype : b instanceof Object || b.constructor === Object, ei = b instanceof Object ? "" : "null prototype", Ss = !ws && G && Object(b) === b && G in b ? w.call(Re(b), 8, -1) : ei ? "Object" : "", ff = ws || typeof b.constructor != "function" ? "" : b.constructor.name ? b.constructor.name + " " : "", ti = ff + (Ss || ei ? "[" + O.call(M.call([], Ss || [], ei || []), ": ") + "] " : "");
      return Qn.length === 0 ? ti + "{}" : Dt ? ti + "{" + Kn(Qn, Dt) + "}" : ti + "{ " + O.call(Qn, ", ") + " }";
    }
    return String(b);
  };
  function T(y, b, ie) {
    var ae = ie.quoteStyle || b, se = De[ae];
    return se + y + se;
  }
  function L(y) {
    return S.call(String(y), /"/g, "&quot;");
  }
  function U(y) {
    return !G || !(typeof y == "object" && (G in y || typeof y[G] < "u"));
  }
  function F(y) {
    return Re(y) === "[object Array]" && U(y);
  }
  function X(y) {
    return Re(y) === "[object Date]" && U(y);
  }
  function re(y) {
    return Re(y) === "[object RegExp]" && U(y);
  }
  function j(y) {
    return Re(y) === "[object Error]" && U(y);
  }
  function H(y) {
    return Re(y) === "[object String]" && U(y);
  }
  function D(y) {
    return Re(y) === "[object Number]" && U(y);
  }
  function V(y) {
    return Re(y) === "[object Boolean]" && U(y);
  }
  function me(y) {
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
  function ye(y) {
    if (!y || typeof y != "object" || !C)
      return !1;
    try {
      return C.call(y), !0;
    } catch {
    }
    return !1;
  }
  var xe = Object.prototype.hasOwnProperty || function(y) {
    return y in this;
  };
  function Se(y, b) {
    return xe.call(y, b);
  }
  function Re(y) {
    return g.call(y);
  }
  function Ye(y) {
    if (y.name)
      return y.name;
    var b = x.call(v.call(y), /^function\s*([\w$]+)/);
    return b ? b[1] : null;
  }
  function je(y, b) {
    if (y.indexOf)
      return y.indexOf(b);
    for (var ie = 0, ae = y.length; ie < ae; ie++)
      if (y[ie] === b)
        return ie;
    return -1;
  }
  function Ie(y) {
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
    if (!u || !y || typeof y != "object")
      return !1;
    try {
      u.call(y, u);
      try {
        d.call(y, d);
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
  function Ze(y) {
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
  function Nr(y) {
    if (!d || !y || typeof y != "object")
      return !1;
    try {
      d.call(y, d);
      try {
        u.call(y, u);
      } catch {
        return !0;
      }
      return y instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function ut(y) {
    return !y || typeof y != "object" ? !1 : typeof HTMLElement < "u" && y instanceof HTMLElement ? !0 : typeof y.nodeName == "string" && typeof y.getAttribute == "function";
  }
  function _t(y, b) {
    if (y.length > b.maxStringLength) {
      var ie = y.length - b.maxStringLength, ae = "... " + ie + " more character" + (ie > 1 ? "s" : "");
      return _t(w.call(y, 0, b.maxStringLength), b) + ae;
    }
    var se = Be[b.quoteStyle || "single"];
    se.lastIndex = 0;
    var Y = S.call(S.call(y, se, "\\$1"), /[\x00-\x1f]/g, Jt);
    return T(Y, "single", b);
  }
  function Jt(y) {
    var b = y.charCodeAt(0), ie = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[b];
    return ie ? "\\" + ie : "\\x" + (b < 16 ? "0" : "") + A.call(b.toString(16));
  }
  function dt(y) {
    return "Object(" + y + ")";
  }
  function Vn(y) {
    return y + " { ? }";
  }
  function ms(y, b, ie, ae) {
    var se = ae ? Kn(ie, ae) : O.call(ie, ", ");
    return y + " (" + b + ") {" + se + "}";
  }
  function uf(y) {
    for (var b = 0; b < y.length; b++)
      if (je(y[b], `
`) >= 0)
        return !1;
    return !0;
  }
  function df(y, b) {
    var ie;
    if (y.indent === "	")
      ie = "	";
    else if (typeof y.indent == "number" && y.indent > 0)
      ie = O.call(Array(y.indent + 1), " ");
    else
      return null;
    return {
      base: ie,
      prev: O.call(Array(b + 1), ie)
    };
  }
  function Kn(y, b) {
    if (y.length === 0)
      return "";
    var ie = `
` + b.prev + b.base;
    return ie + O.call(y, "," + ie) + `
` + b.prev;
  }
  function kr(y, b) {
    var ie = F(y), ae = [];
    if (ie) {
      ae.length = y.length;
      for (var se = 0; se < y.length; se++)
        ae[se] = Se(y, se) ? b(y[se], y) : "";
    }
    var Y = typeof P == "function" ? P(y) : [], ft;
    if (B) {
      ft = {};
      for (var Ct = 0; Ct < Y.length; Ct++)
        ft["$" + Y[Ct]] = Y[Ct];
    }
    for (var Pe in y)
      Se(y, Pe) && (ie && String(Number(Pe)) === Pe && Pe < y.length || B && ft["$" + Pe] instanceof Symbol || (N.call(/[^\w$]/, Pe) ? ae.push(b(Pe, y) + ": " + b(y[Pe], y)) : ae.push(Pe + ": " + b(y[Pe], y))));
    if (typeof P == "function")
      for (var ht = 0; ht < Y.length; ht++)
        z.call(y, Y[ht]) && ae.push("[" + b(Y[ht]) + "]: " + b(y[Y[ht]], y));
    return ae;
  }
  return Co;
}
var To, Al;
function s2() {
  if (Al) return To;
  Al = 1;
  var e = /* @__PURE__ */ Gn(), t = /* @__PURE__ */ _e(), r = function(s, c, u) {
    for (var f = s, d; (d = f.next) != null; f = d)
      if (d.key === c)
        return f.next = d.next, u || (d.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = d), d;
  }, n = function(s, c) {
    if (s) {
      var u = r(s, c);
      return u && u.value;
    }
  }, i = function(s, c, u) {
    var f = r(s, c);
    f ? f.value = u : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: c,
      next: s.next,
      value: u
    };
  }, o = function(s, c) {
    return s ? !!r(s, c) : !1;
  }, a = function(s, c) {
    if (s)
      return r(s, c, !0);
  };
  return To = function() {
    var c, u = {
      assert: function(f) {
        if (!u.has(f))
          throw new t("Side channel does not contain " + e(f));
      },
      delete: function(f) {
        var d = c && c.next, h = a(c, f);
        return h && d && d === h && (c = void 0), !!h;
      },
      get: function(f) {
        return n(c, f);
      },
      has: function(f) {
        return o(c, f);
      },
      set: function(f, d) {
        c || (c = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          c,
          f,
          d
        );
      }
    };
    return u;
  }, To;
}
var Eo, Cl;
function Yd() {
  if (Cl) return Eo;
  Cl = 1;
  var e = /* @__PURE__ */ lt(), t = /* @__PURE__ */ Ee(), r = /* @__PURE__ */ Gn(), n = /* @__PURE__ */ _e(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return Eo = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var d, h = {
      assert: function(p) {
        if (!h.has(p))
          throw new n("Side channel does not contain " + r(p));
      },
      delete: function(p) {
        if (d) {
          var m = c(d, p);
          return u(d) === 0 && (d = void 0), m;
        }
        return !1;
      },
      get: function(p) {
        if (d)
          return o(d, p);
      },
      has: function(p) {
        return d ? s(d, p) : !1;
      },
      set: function(p, m) {
        d || (d = new i()), a(d, p, m);
      }
    };
    return h;
  }, Eo;
}
var Ro, Tl;
function c2() {
  if (Tl) return Ro;
  Tl = 1;
  var e = /* @__PURE__ */ lt(), t = /* @__PURE__ */ Ee(), r = /* @__PURE__ */ Gn(), n = Yd(), i = /* @__PURE__ */ _e(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return Ro = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var d, h, p = {
        assert: function(m) {
          if (!p.has(m))
            throw new i("Side channel does not contain " + r(m));
        },
        delete: function(m) {
          if (o && m && (typeof m == "object" || typeof m == "function")) {
            if (d)
              return u(d, m);
          } else if (n && h)
            return h.delete(m);
          return !1;
        },
        get: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && d ? a(d, m) : h && h.get(m);
        },
        has: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && d ? c(d, m) : !!h && h.has(m);
        },
        set: function(m, g) {
          o && m && (typeof m == "object" || typeof m == "function") ? (d || (d = new o()), s(d, m, g)) : n && (h || (h = n()), h.set(m, g));
        }
      };
      return p;
    }
  ) : n, Ro;
}
var Io, El;
function Xd() {
  if (El) return Io;
  El = 1;
  var e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ Gn(), r = s2(), n = Yd(), i = c2(), o = i || n || r;
  return Io = function() {
    var s, c = {
      assert: function(u) {
        if (!c.has(u))
          throw new e("Side channel does not contain " + t(u));
      },
      delete: function(u) {
        return !!s && s.delete(u);
      },
      get: function(u) {
        return s && s.get(u);
      },
      has: function(u) {
        return !!s && s.has(u);
      },
      set: function(u, f) {
        s || (s = o()), s.set(u, f);
      }
    };
    return c;
  }, Io;
}
var Oo, Rl;
function l2() {
  if (Rl) return Oo;
  Rl = 1;
  var e = /* @__PURE__ */ hs(), t = Xd()(), r = /* @__PURE__ */ _e(), n = {
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
  return Object.freeze && Object.freeze(n), Oo = n, Oo;
}
var Po, Il;
function u2() {
  if (Il) return Po;
  Il = 1;
  var e = l2(), t = /* @__PURE__ */ os(), r = typeof StopIteration == "object" ? StopIteration : null;
  return Po = function(i) {
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
          } catch (u) {
            if (e.set(s, "[[Done]]", !0), u !== r)
              throw u;
            return {
              done: !0,
              value: void 0
            };
          }
        }
      )
    };
    return e.set(o, "[[Iterator]]", i), o;
  }, Po;
}
var No, Ol;
function Jd() {
  if (Ol) return No;
  Ol = 1;
  var e = {}.toString;
  return No = Array.isArray || function(t) {
    return e.call(t) == "[object Array]";
  }, No;
}
var ko, Pl;
function Zd() {
  if (Pl) return ko;
  Pl = 1;
  var e = /* @__PURE__ */ Ee(), t = e("String.prototype.valueOf"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object String]", o = $t()();
  return ko = function(s) {
    return typeof s == "string" ? !0 : !s || typeof s != "object" ? !1 : o ? r(s) : n(s) === i;
  }, ko;
}
var Mo, Nl;
function Qd() {
  if (Nl) return Mo;
  Nl = 1;
  var e = typeof Map == "function" && Map.prototype ? Map : null, t = typeof Set == "function" && Set.prototype ? Set : null, r;
  e || (r = function(a) {
    return !1;
  });
  var n = e ? Map.prototype.has : null, i = t ? Set.prototype.has : null;
  return !r && !n && (r = function(a) {
    return !1;
  }), Mo = r || function(a) {
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
  }, Mo;
}
var Lo, kl;
function ef() {
  if (kl) return Lo;
  kl = 1;
  var e = typeof Map == "function" && Map.prototype ? Map : null, t = typeof Set == "function" && Set.prototype ? Set : null, r;
  t || (r = function(a) {
    return !1;
  });
  var n = e ? Map.prototype.has : null, i = t ? Set.prototype.has : null;
  return !r && !i && (r = function(a) {
    return !1;
  }), Lo = r || function(a) {
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
  }, Lo;
}
var Ml;
function d2() {
  if (Ml) return nr.exports;
  Ml = 1;
  var e = /* @__PURE__ */ Kd(), t = /* @__PURE__ */ u2();
  if (ls()() || Wn()()) {
    var r = Symbol.iterator;
    nr.exports = function(k) {
      if (k != null && typeof k[r] < "u")
        return k[r]();
      if (e(k))
        return Array.prototype[r].call(k);
    };
  } else {
    var n = Jd(), i = Zd(), o = /* @__PURE__ */ lt(), a = o("%Map%", !0), s = o("%Set%", !0), c = Wd(), u = c("Array.prototype.push"), f = c("String.prototype.charCodeAt"), d = c("String.prototype.slice"), h = function(k, _) {
      var C = k.length;
      if (_ + 1 >= C)
        return _ + 1;
      var P = f(k, _);
      if (P < 55296 || P > 56319)
        return _ + 1;
      var $ = f(k, _ + 1);
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
            var $ = h(k, C), B = d(k, C, $);
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
      var g = /* @__PURE__ */ Qd(), v = /* @__PURE__ */ ef(), x = c("Map.prototype.forEach", !0), w = c("Set.prototype.forEach", !0);
      if (typeof process > "u" || !process.versions || !process.versions.node)
        var S = c("Map.prototype.iterator", !0), A = c("Set.prototype.iterator", !0);
      var R = c("Map.prototype.@@iterator", !0) || c("Map.prototype._es6-shim iterator_", !0), N = c("Set.prototype.@@iterator", !0) || c("Set.prototype._es6-shim iterator_", !0), M = function(k) {
        if (g(k)) {
          if (S)
            return t(S(k));
          if (R)
            return R(k);
          if (x) {
            var _ = [];
            return x(k, function(P, $) {
              u(_, [$, P]);
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
              u(C, P);
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
var $o, Ll;
function tf() {
  if (Ll) return $o;
  Ll = 1;
  var e = function(t) {
    return t !== t;
  };
  return $o = function(r, n) {
    return r === 0 && n === 0 ? 1 / r === 1 / n : !!(r === n || e(r) && e(n));
  }, $o;
}
var _o, $l;
function rf() {
  if ($l) return _o;
  $l = 1;
  var e = tf();
  return _o = function() {
    return typeof Object.is == "function" ? Object.is : e;
  }, _o;
}
var Do, _l;
function f2() {
  if (_l) return Do;
  _l = 1;
  var e = rf(), t = Lt();
  return Do = function() {
    var n = e();
    return t(Object, { is: n }, {
      is: function() {
        return Object.is !== n;
      }
    }), n;
  }, Do;
}
var Bo, Dl;
function h2() {
  if (Dl) return Bo;
  Dl = 1;
  var e = Lt(), t = Xt(), r = tf(), n = rf(), i = f2(), o = t(n(), Object);
  return e(o, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), Bo = o, Bo;
}
var jo, Bl;
function nf() {
  if (Bl) return jo;
  Bl = 1;
  var e = Xt(), t = /* @__PURE__ */ Ee(), r = /* @__PURE__ */ lt(), n = r("%ArrayBuffer%", !0), i = t("ArrayBuffer.prototype.byteLength", !0), o = t("Object.prototype.toString"), a = !!n && !i && new n(0).slice, s = !!a && e(a);
  return jo = i || s ? function(u) {
    if (!u || typeof u != "object")
      return !1;
    try {
      return i ? i(u) : s(u, 0), !0;
    } catch {
      return !1;
    }
  } : n ? function(u) {
    return o(u) === "[object ArrayBuffer]";
  } : function(u) {
    return !1;
  }, jo;
}
var zo, jl;
function p2() {
  if (jl) return zo;
  jl = 1;
  var e = /* @__PURE__ */ Ee(), t = e("Date.prototype.getDay"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object Date]", o = $t()();
  return zo = function(s) {
    return typeof s != "object" || s === null ? !1 : o ? r(s) : n(s) === i;
  }, zo;
}
var Ho, zl;
function of() {
  if (zl) return Ho;
  zl = 1;
  var e = /* @__PURE__ */ Ee(), t = $t()(), r = /* @__PURE__ */ hs(), n = /* @__PURE__ */ Mt(), i;
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
    var u = e("Object.prototype.toString"), f = "[object RegExp]";
    i = function(h) {
      return !h || typeof h != "object" && typeof h != "function" ? !1 : u(h) === f;
    };
  }
  return Ho = i, Ho;
}
var qo, Hl;
function m2() {
  if (Hl) return qo;
  Hl = 1;
  var e = /* @__PURE__ */ Ee(), t = e("SharedArrayBuffer.prototype.byteLength", !0);
  return qo = t ? function(n) {
    if (!n || typeof n != "object")
      return !1;
    try {
      return t(n), !0;
    } catch {
      return !1;
    }
  } : function(n) {
    return !1;
  }, qo;
}
var Fo, ql;
function g2() {
  if (ql) return Fo;
  ql = 1;
  var e = /* @__PURE__ */ Ee(), t = e("Number.prototype.toString"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object Number]", o = $t()();
  return Fo = function(s) {
    return typeof s == "number" ? !0 : !s || typeof s != "object" ? !1 : o ? r(s) : n(s) === i;
  }, Fo;
}
var Uo, Fl;
function v2() {
  if (Fl) return Uo;
  Fl = 1;
  var e = /* @__PURE__ */ Ee(), t = e("Boolean.prototype.toString"), r = e("Object.prototype.toString"), n = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, i = "[object Boolean]", o = $t()();
  return Uo = function(s) {
    return typeof s == "boolean" ? !0 : s === null || typeof s != "object" ? !1 : o ? n(s) : r(s) === i;
  }, Uo;
}
var Fr = { exports: {} }, Wo, Ul;
function y2() {
  if (Ul) return Wo;
  Ul = 1;
  var e = /* @__PURE__ */ Ee(), t = of(), r = e("RegExp.prototype.exec"), n = /* @__PURE__ */ _e();
  return Wo = function(o) {
    if (!t(o))
      throw new n("`regex` must be a RegExp");
    return function(s) {
      return r(o, s) !== null;
    };
  }, Wo;
}
var Wl;
function x2() {
  if (Wl) return Fr.exports;
  Wl = 1;
  var e = /* @__PURE__ */ Ee(), t = e("Object.prototype.toString"), r = ls()(), n = /* @__PURE__ */ y2();
  if (r) {
    var i = e("Symbol.prototype.toString"), o = n(/^Symbol\(.*\)$/), a = function(c) {
      return typeof c.valueOf() != "symbol" ? !1 : o(i(c));
    };
    Fr.exports = function(c) {
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
    Fr.exports = function(c) {
      return !1;
    };
  return Fr.exports;
}
var Ur = { exports: {} }, Go, Gl;
function b2() {
  if (Gl) return Go;
  Gl = 1;
  var e = typeof BigInt < "u" && BigInt;
  return Go = function() {
    return typeof e == "function" && typeof BigInt == "function" && typeof e(42) == "bigint" && typeof BigInt(42) == "bigint";
  }, Go;
}
var Vl;
function w2() {
  if (Vl) return Ur.exports;
  Vl = 1;
  var e = b2()();
  if (e) {
    var t = BigInt.prototype.valueOf, r = function(i) {
      try {
        return t.call(i), !0;
      } catch {
      }
      return !1;
    };
    Ur.exports = function(i) {
      return i === null || typeof i > "u" || typeof i == "boolean" || typeof i == "string" || typeof i == "number" || typeof i == "symbol" || typeof i == "function" ? !1 : typeof i == "bigint" ? !0 : r(i);
    };
  } else
    Ur.exports = function(i) {
      return !1;
    };
  return Ur.exports;
}
var Vo, Kl;
function S2() {
  if (Kl) return Vo;
  Kl = 1;
  var e = Zd(), t = g2(), r = v2(), n = x2(), i = w2();
  return Vo = function(a) {
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
  }, Vo;
}
var Ko, Yl;
function A2() {
  if (Yl) return Ko;
  Yl = 1;
  var e = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, t = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, r;
  e || (r = function(a) {
    return !1;
  });
  var n = e ? e.prototype.has : null, i = t ? t.prototype.has : null;
  return !r && !n && (r = function(a) {
    return !1;
  }), Ko = r || function(a) {
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
  }, Ko;
}
var Wr = { exports: {} }, Xl;
function C2() {
  if (Xl) return Wr.exports;
  Xl = 1;
  var e = /* @__PURE__ */ lt(), t = /* @__PURE__ */ Ee(), r = e("%WeakSet%", !0), n = t("WeakSet.prototype.has", !0);
  if (n) {
    var i = t("WeakMap.prototype.has", !0);
    Wr.exports = function(a) {
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
    Wr.exports = function(a) {
      return !1;
    };
  return Wr.exports;
}
var Yo, Jl;
function T2() {
  if (Jl) return Yo;
  Jl = 1;
  var e = /* @__PURE__ */ Qd(), t = /* @__PURE__ */ ef(), r = A2(), n = /* @__PURE__ */ C2();
  return Yo = function(o) {
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
  }, Yo;
}
var Xo, Zl;
function E2() {
  if (Zl) return Xo;
  Zl = 1;
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
  }, s = Object.prototype.toString, c = "[object Object]", u = "[object Function]", f = "[object GeneratorFunction]", d = "[object HTMLAllCollection]", h = "[object HTML document.all class]", p = "[object HTMLCollection]", m = typeof Symbol == "function" && !!Symbol.toStringTag, g = !(0 in [,]), v = function() {
    return !1;
  };
  if (typeof document == "object") {
    var x = document.all;
    s.call(x) === s.call(document.all) && (v = function(S) {
      if ((g || !S) && (typeof S > "u" || typeof S == "object"))
        try {
          var A = s.call(S);
          return (A === d || A === h || A === p || A === c) && S("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Xo = t ? function(S) {
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
    return A !== u && A !== f && !/^\[object HTML/.test(A) ? !1 : a(S);
  }, Xo;
}
var Jo, Ql;
function R2() {
  if (Ql) return Jo;
  Ql = 1;
  var e = E2(), t = Object.prototype.toString, r = Object.prototype.hasOwnProperty, n = function(c, u, f) {
    for (var d = 0, h = c.length; d < h; d++)
      r.call(c, d) && (f == null ? u(c[d], d, c) : u.call(f, c[d], d, c));
  }, i = function(c, u, f) {
    for (var d = 0, h = c.length; d < h; d++)
      f == null ? u(c.charAt(d), d, c) : u.call(f, c.charAt(d), d, c);
  }, o = function(c, u, f) {
    for (var d in c)
      r.call(c, d) && (f == null ? u(c[d], d, c) : u.call(f, c[d], d, c));
  };
  function a(s) {
    return t.call(s) === "[object Array]";
  }
  return Jo = function(c, u, f) {
    if (!e(u))
      throw new TypeError("iterator must be a function");
    var d;
    arguments.length >= 3 && (d = f), a(c) ? n(c, u, d) : typeof c == "string" ? i(c, u, d) : o(c, u, d);
  }, Jo;
}
var Zo, eu;
function I2() {
  return eu || (eu = 1, Zo = [
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
  ]), Zo;
}
var Qo, tu;
function O2() {
  if (tu) return Qo;
  tu = 1;
  var e = /* @__PURE__ */ I2(), t = typeof globalThis > "u" ? kn : globalThis;
  return Qo = function() {
    for (var n = [], i = 0; i < e.length; i++)
      typeof t[e[i]] == "function" && (n[n.length] = e[i]);
    return n;
  }, Qo;
}
var ea, ru;
function P2() {
  if (ru) return ea;
  ru = 1;
  var e = R2(), t = /* @__PURE__ */ O2(), r = Xt(), n = /* @__PURE__ */ Ee(), i = /* @__PURE__ */ Mt(), o = n("Object.prototype.toString"), a = $t()(), s = typeof globalThis > "u" ? kn : globalThis, c = t(), u = n("String.prototype.slice"), f = Object.getPrototypeOf, d = n("Array.prototype.indexOf", !0) || function(v, x) {
    for (var w = 0; w < v.length; w += 1)
      if (v[w] === x)
        return w;
    return -1;
  }, h = { __proto__: null };
  a && i && f ? e(c, function(g) {
    var v = new s[g]();
    if (Symbol.toStringTag in v) {
      var x = f(v), w = i(x, Symbol.toStringTag);
      if (!w) {
        var S = f(x);
        w = i(S, Symbol.toStringTag);
      }
      h["$" + g] = r(w.get);
    }
  }) : e(c, function(g) {
    var v = new s[g](), x = v.slice || v.set;
    x && (h["$" + g] = r(x));
  });
  var p = function(v) {
    var x = !1;
    return e(
      // eslint-disable-next-line no-extra-parens
      /** @type {Record<`\$${TypedArrayName}`, Getter>} */
      /** @type {any} */
      h,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, S) {
        if (!x)
          try {
            "$" + w(v) === S && (x = u(S, 1));
          } catch {
          }
      }
    ), x;
  }, m = function(v) {
    var x = !1;
    return e(
      // eslint-disable-next-line no-extra-parens
      /** @type {Record<`\$${TypedArrayName}`, Getter>} */
      /** @type {any} */
      h,
      /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, S) {
        if (!x)
          try {
            w(v), x = u(S, 1);
          } catch {
          }
      }
    ), x;
  };
  return ea = function(v) {
    if (!v || typeof v != "object")
      return !1;
    if (!a) {
      var x = u(o(v), 8, -1);
      return d(c, x) > -1 ? x : x !== "Object" ? !1 : m(v);
    }
    return i ? p(v) : null;
  }, ea;
}
var ta, nu;
function N2() {
  if (nu) return ta;
  nu = 1;
  var e = /* @__PURE__ */ Ee(), t = e("ArrayBuffer.prototype.byteLength", !0), r = /* @__PURE__ */ nf();
  return ta = function(i) {
    return r(i) ? t ? t(i) : i.byteLength : NaN;
  }, ta;
}
var ra, iu;
function k2() {
  if (iu) return ra;
  iu = 1;
  var e = Qb(), t = Wd(), r = n2(), n = /* @__PURE__ */ lt(), i = d2(), o = Xd(), a = h2(), s = /* @__PURE__ */ Kd(), c = Jd(), u = /* @__PURE__ */ nf(), f = /* @__PURE__ */ p2(), d = of(), h = /* @__PURE__ */ m2(), p = is(), m = S2(), g = /* @__PURE__ */ T2(), v = /* @__PURE__ */ P2(), x = /* @__PURE__ */ N2(), w = t("SharedArrayBuffer.prototype.byteLength", !0), S = t("Date.prototype.getTime"), A = Object.getPrototypeOf, R = t("Object.prototype.toString"), N = n("%Set%", !0), M = t("Map.prototype.has", !0), O = t("Map.prototype.get", !0), k = t("Map.prototype.size", !0), _ = t("Set.prototype.add", !0), C = t("Set.prototype.delete", !0), P = t("Set.prototype.has", !0), $ = t("Set.prototype.size", !0);
  function B(T, L, U, F) {
    for (var X = i(T), re; (re = X.next()) && !re.done; )
      if (te(L, re.value, U, F))
        return C(T, re.value), !0;
    return !1;
  }
  function G(T) {
    if (typeof T > "u")
      return null;
    if (typeof T != "object")
      return typeof T == "symbol" ? !1 : typeof T == "string" || typeof T == "number" ? +T == +T : !0;
  }
  function z(T, L, U, F, X, re) {
    var j = G(U);
    if (j != null)
      return j;
    var H = O(L, j), D = e({}, X, { strict: !1 });
    return typeof H > "u" && !M(L, j) || !te(F, H, D, re) ? !1 : !M(T, j) && te(F, H, D, re);
  }
  function ee(T, L, U) {
    var F = G(U);
    return F ?? (P(L, F) && !P(T, F));
  }
  function J(T, L, U, F, X, re) {
    for (var j = i(T), H, D; (H = j.next()) && !H.done; )
      if (D = H.value, // eslint-disable-next-line no-use-before-define
      te(U, D, X, re) && te(F, O(L, D), X, re))
        return C(T, D), !0;
    return !1;
  }
  function te(T, L, U, F) {
    var X = U || {};
    if (X.strict ? a(T, L) : T === L)
      return !0;
    var re = m(T), j = m(L);
    if (re !== j)
      return !1;
    if (!T || !L || typeof T != "object" && typeof L != "object")
      return X.strict ? a(T, L) : T == L;
    var H = F.has(T), D = F.has(L), V;
    if (H && D) {
      if (F.get(T) === F.get(L))
        return !0;
    } else
      V = {};
    return H || F.set(T, V), D || F.set(L, V), Be(T, L, X, F);
  }
  function ve(T) {
    return !T || typeof T != "object" || typeof T.length != "number" || typeof T.copy != "function" || typeof T.slice != "function" || T.length > 0 && typeof T[0] != "number" ? !1 : !!(T.constructor && T.constructor.isBuffer && T.constructor.isBuffer(T));
  }
  function pe(T, L, U, F) {
    if ($(T) !== $(L))
      return !1;
    for (var X = i(T), re = i(L), j, H, D; (j = X.next()) && !j.done; )
      if (j.value && typeof j.value == "object")
        D || (D = new N()), _(D, j.value);
      else if (!P(L, j.value)) {
        if (U.strict || !ee(T, L, j.value))
          return !1;
        D || (D = new N()), _(D, j.value);
      }
    if (D) {
      for (; (H = re.next()) && !H.done; )
        if (H.value && typeof H.value == "object") {
          if (!B(D, H.value, U.strict, F))
            return !1;
        } else if (!U.strict && !P(T, H.value) && !B(D, H.value, U.strict, F))
          return !1;
      return $(D) === 0;
    }
    return !0;
  }
  function De(T, L, U, F) {
    if (k(T) !== k(L))
      return !1;
    for (var X = i(T), re = i(L), j, H, D, V, me, ye; (j = X.next()) && !j.done; )
      if (V = j.value[0], me = j.value[1], V && typeof V == "object")
        D || (D = new N()), _(D, V);
      else if (ye = O(L, V), typeof ye > "u" && !M(L, V) || !te(me, ye, U, F)) {
        if (U.strict || !z(T, L, V, me, U, F))
          return !1;
        D || (D = new N()), _(D, V);
      }
    if (D) {
      for (; (H = re.next()) && !H.done; )
        if (V = H.value[0], ye = H.value[1], V && typeof V == "object") {
          if (!J(D, T, V, ye, U, F))
            return !1;
        } else if (!U.strict && (!T.has(V) || !te(O(T, V), ye, U, F)) && !J(D, T, V, ye, e({}, U, { strict: !1 }), F))
          return !1;
      return $(D) === 0;
    }
    return !0;
  }
  function Be(T, L, U, F) {
    var X, re;
    if (typeof T != typeof L || T == null || L == null || R(T) !== R(L) || s(T) !== s(L))
      return !1;
    var j = c(T), H = c(L);
    if (j !== H)
      return !1;
    var D = T instanceof Error, V = L instanceof Error;
    if (D !== V || (D || V) && (T.name !== L.name || T.message !== L.message))
      return !1;
    var me = d(T), ye = d(L);
    if (me !== ye || (me || ye) && (T.source !== L.source || r(T) !== r(L)))
      return !1;
    var xe = f(T), Se = f(L);
    if (xe !== Se || (xe || Se) && S(T) !== S(L) || U.strict && A && A(T) !== A(L))
      return !1;
    var Re = v(T), Ye = v(L);
    if (Re !== Ye)
      return !1;
    if (Re || Ye) {
      if (T.length !== L.length)
        return !1;
      for (X = 0; X < T.length; X++)
        if (T[X] !== L[X])
          return !1;
      return !0;
    }
    var je = ve(T), Ie = ve(L);
    if (je !== Ie)
      return !1;
    if (je || Ie) {
      if (T.length !== L.length)
        return !1;
      for (X = 0; X < T.length; X++)
        if (T[X] !== L[X])
          return !1;
      return !0;
    }
    var Xe = u(T), Je = u(L);
    if (Xe !== Je)
      return !1;
    if (Xe || Je)
      return x(T) !== x(L) ? !1 : typeof Uint8Array == "function" && te(new Uint8Array(T), new Uint8Array(L), U, F);
    var Ze = h(T), Nr = h(L);
    if (Ze !== Nr)
      return !1;
    if (Ze || Nr)
      return w(T) !== w(L) ? !1 : typeof Uint8Array == "function" && te(new Uint8Array(T), new Uint8Array(L), U, F);
    if (typeof T != typeof L)
      return !1;
    var ut = p(T), _t = p(L);
    if (ut.length !== _t.length)
      return !1;
    for (ut.sort(), _t.sort(), X = ut.length - 1; X >= 0; X--)
      if (ut[X] != _t[X])
        return !1;
    for (X = ut.length - 1; X >= 0; X--)
      if (re = ut[X], !te(T[re], L[re], U, F))
        return !1;
    var Jt = g(T), dt = g(L);
    return Jt !== dt ? !1 : Jt === "Set" || dt === "Set" ? pe(T, L, U, F) : Jt === "Map" ? De(T, L, U, F) : !0;
  }
  return ra = function(L, U, F) {
    return te(L, U, F, o());
  }, ra;
}
var M2 = k2();
const L2 = /* @__PURE__ */ Nb(M2);
function $2(e) {
  return e;
}
function _2(e, t, r, n) {
  const i = $2, [o, a] = Z(i(r)), s = it(o);
  return he(() => {
    const c = () => {
      const u = { ...r, ...e.getAttributes(t) };
      Object.keys(u).forEach((d) => {
        (u[d] === null || u[d] === void 0) && (u[d] = r ? r[d] : null);
      });
      const f = i(u);
      L2(s.current, f) || (a(f), s.current = f);
    };
    return e.on("selectionUpdate", c), e.on("transaction", c), () => {
      e.off("selectionUpdate", c), e.off("transaction", c);
    };
  }, [e, r, t, i]), o;
}
function D2({ editor: e }) {
  const { t } = we(), { width: r, height: n, src: i } = _2(e, zt.name, {
    width: 0,
    height: 0,
    src: "",
    defaultShowPicker: !1
  }), [o, a] = Z(!1), [s, c] = Z(""), u = oe(() => {
    a(!1);
  }, [a]);
  he(() => {
    o && c(i);
  }, [o, i]);
  const f = oe(() => {
    const v = _d(s);
    e.chain().updateAttributes(zt.name, {
      src: (v == null ? void 0 : v.src) || s
    }).setNodeSelection(e.state.selection.from).focus().run(), a(!1);
  }, [e, s, a]), d = oe(() => {
    window.open(i, "_blank");
  }, [i]), h = oe(() => {
    a(!0);
  }, [a]), p = oe(
    (v) => {
      e.chain().updateAttributes(zt.name, v).setNodeSelection(e.state.selection.from).focus().run();
    },
    [e]
  ), m = oe(() => e.isActive(zt.name) && !i, [e, i]), g = oe(() => Sd(zt.name, e), [e]);
  return /* @__PURE__ */ E(ge, { children: [
    /* @__PURE__ */ l(
      St,
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
        children: /* @__PURE__ */ E("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
          /* @__PURE__ */ l(
            q,
            {
              action: d,
              icon: "Eye",
              tooltip: "Visit Link"
            }
          ),
          /* @__PURE__ */ l(
            q,
            {
              action: h,
              icon: "Pencil",
              tooltip: "Open Edit Link"
            }
          ),
          /* @__PURE__ */ l(
            cb,
            {
              height: n,
              onOk: p,
              width: r,
              children: /* @__PURE__ */ l(
                q,
                {
                  icon: "Settings",
                  tooltip: t("editor.settings")
                }
              )
            }
          ),
          /* @__PURE__ */ l(
            q,
            {
              action: g,
              icon: "Trash2",
              tooltip: t("editor.delete")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ E(
      zn,
      {
        onOpenChange: a,
        open: o,
        children: [
          /* @__PURE__ */ l(Hn, {}),
          /* @__PURE__ */ E(Er, { children: [
            /* @__PURE__ */ l(gd, { children: /* @__PURE__ */ l(Rr, { children: "Edit Link Iframe" }) }),
            /* @__PURE__ */ l(
              Le,
              {
                autoFocus: !0,
                onInput: (v) => c(v.target.value),
                placeholder: "Enter link",
                type: "url",
                value: s
              }
            ),
            /* @__PURE__ */ E(Za, { children: [
              /* @__PURE__ */ l(Ce, { onClick: u, children: "Cancel" }),
              /* @__PURE__ */ l(Ce, { onClick: f, children: "OK" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function B2({ editor: e, disabled: t, bubbleMenu: r }) {
  const n = e.extensionManager.extensions.map((o) => o.name), i = () => {
    var o, a, s, c, u, f, d, h, p, m;
    return [
      n.includes("columns") && !((o = r == null ? void 0 : r.columnConfig) != null && o.hidden) ? /* @__PURE__ */ l(
        qx,
        {
          editor: e
        },
        "columns"
      ) : null,
      n.includes("table") && !((a = r == null ? void 0 : r.tableConfig) != null && a.hidden) ? /* @__PURE__ */ l(
        Iy,
        {
          actions: (s = r == null ? void 0 : r.tableConfig) == null ? void 0 : s.actions,
          editor: e
        },
        "table"
      ) : null,
      n.includes("link") && !((c = r == null ? void 0 : r.linkConfig) != null && c.hidden) ? /* @__PURE__ */ l(
        tx,
        {
          disabled: t,
          editor: e
        },
        "link"
      ) : null,
      n.includes(br.name) && !((u = r == null ? void 0 : r.imageConfig) != null && u.hidden) ? /* @__PURE__ */ l(
        $x,
        {
          disabled: t,
          editor: e
        },
        "image"
      ) : null,
      n.includes(xd.name) && !((f = r == null ? void 0 : r.imageGifConfig) != null && f.hidden) ? /* @__PURE__ */ l(
        _x,
        {
          disabled: t,
          editor: e
        },
        "imageGif"
      ) : null,
      n.includes("video") && !((d = r == null ? void 0 : r.videoConfig) != null && d.hidden) ? /* @__PURE__ */ l(
        Dx,
        {
          disabled: t,
          editor: e
        },
        "video"
      ) : null,
      n.includes("iframe") && !((h = r == null ? void 0 : r.iframeConfig) != null && h.hidden) ? /* @__PURE__ */ l(
        D2,
        {
          disabled: t,
          editor: e
        },
        "iframe"
      ) : null,
      (p = r == null ? void 0 : r.floatingMenuConfig) != null && p.hidden ? null : /* @__PURE__ */ l(
        Qv,
        {
          disabled: t,
          editor: e
        },
        "content"
      ),
      (m = r == null ? void 0 : r.textConfig) != null && m.hidden ? null : /* @__PURE__ */ l(
        ry,
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
function ou() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function j2(e) {
  const { t } = we(), {
    highlight: r = !1,
    disabled: n = !1,
    selectedColor: i,
    setSelectedColor: o,
    onChange: a,
    colors: s = Of
  } = e, c = Ae(() => {
    const p = s, m = [];
    for (let g = 0; g < p.length; g += 10)
      m.push(p.slice(g, g + 10));
    return m;
  }, [s]), [u, f] = Z([]), d = (p) => {
    const m = [...u], g = m.indexOf(p);
    g !== -1 && m.splice(g, 1), m.unshift(p), m.length > 10 && m.pop(), f(m);
  };
  function h(p) {
    if (p === void 0) {
      o == null || o(p), a == null || a(p);
      return;
    }
    /^#([\da-f]{3}){1,2}$/i.test(p) && (o == null || o(p), a == null || a(p), d(p));
  }
  return /* @__PURE__ */ E(Ir, { modal: !0, children: [
    /* @__PURE__ */ l(
      Or,
      {
        asChild: !0,
        className: "!richtext-p-0",
        disabled: n,
        children: e == null ? void 0 : e.children
      }
    ),
    /* @__PURE__ */ l(
      Kt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-flex-col", children: [
          r ? /* @__PURE__ */ E(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => h(void 0),
              children: [
                /* @__PURE__ */ l(ou, {}),
                /* @__PURE__ */ l("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.nofill") })
              ]
            }
          ) : /* @__PURE__ */ E(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => {
                h(void 0);
              },
              children: [
                /* @__PURE__ */ l(ou, {}),
                /* @__PURE__ */ l("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.default") })
              ]
            }
          ),
          c.map((p, m) => /* @__PURE__ */ l(
            "span",
            {
              className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2",
              children: p.map((g, v) => /* @__PURE__ */ l(
                "span",
                {
                  className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                  onClick: () => h(g),
                  children: /* @__PURE__ */ l(
                    "span",
                    {
                      className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                      style: {
                        backgroundColor: g
                      },
                      children: g === i ? /* @__PURE__ */ l(
                        "svg",
                        {
                          className: "richtext-absolute -richtext-top-px richtext-left-px richtext-block richtext-size-3",
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)"
                          },
                          children: /* @__PURE__ */ l("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                        }
                      ) : /* @__PURE__ */ l(
                        "svg",
                        {
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)",
                            display: "none"
                          },
                          children: /* @__PURE__ */ l("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
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
          /* @__PURE__ */ E("div", { children: [
            /* @__PURE__ */ l("div", { className: "richtext-my-1 richtext-text-sm", children: t("editor.recent") }),
            /* @__PURE__ */ l("span", { className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2", children: u == null ? void 0 : u.map((p, m) => /* @__PURE__ */ l(
              "span",
              {
                className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                onClick: () => h(p),
                children: /* @__PURE__ */ l(
                  "span",
                  {
                    className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                    style: {
                      backgroundColor: p
                    },
                    children: /* @__PURE__ */ l(
                      "svg",
                      {
                        viewBox: "0 0 18 18",
                        style: {
                          fill: "rgb(255, 255, 255)",
                          display: "none"
                        },
                        children: /* @__PURE__ */ l("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                      }
                    )
                  }
                )
              },
              `sub-color-recent-${m}`
            )) })
          ] }),
          /* @__PURE__ */ l(z2, { setColor: h })
        ] })
      }
    )
  ] });
}
function z2({ setColor: e }) {
  const [t, r] = Z("#000000"), [n, i] = Z(!1), { t: o } = we();
  return he(() => () => {
    i(!1);
  }, []), /* @__PURE__ */ E(Ir, { open: n, children: [
    /* @__PURE__ */ l(Or, { asChild: !0, children: /* @__PURE__ */ E(
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
    /* @__PURE__ */ E(Kt, { children: [
      /* @__PURE__ */ E("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ l(
          bp,
          {
            color: t,
            onChange: r
          }
        ),
        /* @__PURE__ */ l(
          Le,
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
      /* @__PURE__ */ l(We, { className: "richtext-my-[10px]" }),
      /* @__PURE__ */ l(
        Ce,
        {
          className: "richtext-w-full",
          onClick: (a) => {
            a.preventDefault(), e(t), i(!1);
          },
          children: /* @__PURE__ */ l(du, { size: 16 })
        }
      )
    ] })
  ] });
}
function H2({ editor: e, disabled: t, toolbar: r }) {
  const { t: n, lang: i } = we(), o = Ae(() => {
    const u = [...e.extensionManager.extensions].sort((d, h) => {
      const p = d.options.sort ?? -1, m = h.options.sort ?? -1;
      return p - m;
    });
    let f = [];
    for (const d of u) {
      const {
        button: h,
        divider: p = !1,
        spacer: m = !1,
        toolbar: g = !0
      } = d.options;
      if (!h || !Ix(h) || !g)
        continue;
      const v = h({
        editor: e,
        extension: d,
        t: n
      });
      if (Array.isArray(v)) {
        const x = v.map((w, S) => ({
          button: w,
          divider: S === v.length - 1 ? p : !1,
          spacer: S === 0 ? m : !1,
          type: d.type,
          name: d.name
        }));
        f = [...f, ...x];
        continue;
      }
      f.push({
        button: v,
        divider: p,
        spacer: m,
        type: d.type,
        name: d.name
      });
    }
    return f;
  }, [e, n, i]), a = (c) => /* @__PURE__ */ l(
    "div",
    {
      className: "richtext-px-1 richtext-py-2 !richtext-border-b",
      style: {
        pointerEvents: t ? "none" : "auto",
        opacity: t ? 0.5 : 1
      },
      children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-flex richtext-flex-wrap richtext-h-auto richtext-gap-y-1 richtext-gap-x-1", children: c })
    }
  ), s = o.map((c, u) => {
    var d, h;
    const f = c.button.component;
    return /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center", children: [
      (c == null ? void 0 : c.spacer) && /* @__PURE__ */ l(We, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
      /* @__PURE__ */ l(
        f,
        {
          ...c.button.componentProps,
          disabled: t || ((h = (d = c == null ? void 0 : c.button) == null ? void 0 : d.componentProps) == null ? void 0 : h.disabled)
        }
      ),
      (c == null ? void 0 : c.divider) && /* @__PURE__ */ l(We, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
    ] }, `toolbar-item-${u}`);
  });
  return r && (r != null && r.render) ? r.render({ editor: e, disabled: t || !1 }, o, s, a) : a(s);
}
function q2({ editor: e, extensions: t }) {
  const { t: r } = we(), n = Ae(() => {
    var i, o, a;
    return (a = (o = (i = t == null ? void 0 : t.find((s) => s.name === "base-kit")) == null ? void 0 : i.options) == null ? void 0 : o.characterCount) == null ? void 0 : a.limit;
  }, [t]);
  return n ? /* @__PURE__ */ l("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ E("span", { children: [
    e.storage.characterCount.characters(),
    "/",
    n,
    " ",
    r("editor.characters")
  ] }) }) }) }) : /* @__PURE__ */ l("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ E("span", { children: [
    e.storage.characterCount.characters(),
    " ",
    r("editor.characters")
  ] }) }) }) });
}
function F2() {
  const { toasts: e } = ab();
  return /* @__PURE__ */ E(Xx, { children: [
    e.map(({ id: t, title: r, description: n, action: i, ...o }) => /* @__PURE__ */ E(
      Id,
      {
        ...o,
        children: [
          /* @__PURE__ */ E("div", { className: "richtext-grid richtext-gap-1", children: [
            r && /* @__PURE__ */ l(Pd, { children: r }),
            n && /* @__PURE__ */ l(Nd, { children: n })
          ] }),
          i,
          /* @__PURE__ */ l(Od, {})
        ]
      },
      t
    )),
    /* @__PURE__ */ l(Rd, {})
  ] });
}
const U2 = `
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
`, W2 = bf(({ children: e, id: t }) => {
  const [, r] = vd((a) => a.value), [, n] = yd((a) => a.value), i = (a) => {
    r({
      value: a.detail
    });
  }, o = (a) => {
    n({
      value: a.detail
    });
  };
  return he(() => {
    const a = Pn(It.EDIT(t), i), s = Pn(It.UPDATE_THEME(t), o);
    return () => {
      a(), s();
    };
  }, []), /* @__PURE__ */ l(ge, { children: e });
});
function G2({ children: e, id: t }) {
  return /* @__PURE__ */ l(lx, { children: /* @__PURE__ */ l(ux, { children: /* @__PURE__ */ l(W2, { id: t, children: e }) }) });
}
function Cw() {
  const [e] = yd((t) => t.value);
  return e;
}
const V2 = {
  setTheme: (e, t) => {
    Qa(It.UPDATE_THEME(e), t);
  }
}, au = "data-rc-order", su = "data-rc-priority", K2 = "rc-util-key", Oa = /* @__PURE__ */ new Map();
function Y2(e, t) {
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
function af({ mark: e } = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : K2;
}
function ps(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function X2(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function sf(e) {
  return [...(Oa.get(e) || e).children].filter(
    (t) => t.tagName === "STYLE"
  );
}
function cf(e, t = {}) {
  const { csp: r, prepend: n, priority: i = 0 } = t, o = X2(n), a = o === "prependQueue", s = document.createElement("style");
  s.setAttribute(au, o), a && i && s.setAttribute(su, `${i}`), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = e;
  const c = ps(t), { firstChild: u } = c;
  if (n) {
    if (a) {
      const f = sf(c).filter((d) => {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(au)))
          return !1;
        const h = Number(d.getAttribute(su) || 0);
        return i >= h;
      });
      if (f.length > 0)
        return c.insertBefore(s, f.at(-1).nextSibling), s;
    }
    u.before(s);
  } else
    c.append(s);
  return s;
}
function lf(e, t = {}) {
  const r = ps(t);
  return sf(r).find((n) => n.getAttribute(af(t)) === e);
}
function J2(e, t = {}) {
  const r = lf(e, t);
  r && r.remove();
}
function Z2(e, t) {
  const r = Oa.get(e);
  if (!r || !Y2(document, r)) {
    const n = cf("", t), { parentNode: i } = n;
    Oa.set(e, i), n.remove();
  }
}
function Q2(e, t, r = {}) {
  var a, s, c;
  const n = ps(r);
  Z2(n, r);
  const i = lf(t, r);
  if (i)
    return (a = r.csp) != null && a.nonce && i.nonce !== ((s = r.csp) == null ? void 0 : s.nonce) && (i.nonce = (c = r.csp) == null ? void 0 : c.nonce), i.innerHTML !== e && (i.innerHTML = e), i;
  const o = cf(e, r);
  return o.setAttribute(af(r), t), o;
}
function ew(e, t) {
  const { content: r, extensions: n, useEditorOptions: i = {} } = e, o = Sf(), a = Ae(() => {
    const d = N1(n, n, "name");
    return [...n.map((p) => {
      const m = n.find((g) => g.name === p.name);
      return m ? p.configure(m.options) : p;
    }), ...d].map((p, m) => p.configure({ sort: m }));
  }, [n]), s = vr((d) => {
    var p;
    const h = u(d, e.output);
    (p = e == null ? void 0 : e.onChangeContent) == null || p.call(e, h);
  }, Pf), c = Tf({
    extensions: a,
    content: r,
    immediatelyRender: (e == null ? void 0 : e.immediatelyRender) || !1,
    onUpdate: ({ editor: d }) => {
      s && s(d);
    },
    ...i
  });
  Af(t, () => ({
    editor: c
  })), he(() => {
    document.documentElement.classList.toggle("dark", e.dark), V2.setTheme(o, e.dark ? "dark" : "light");
  }, [e.dark]), he(() => {
    c == null || c.setEditable(!(e != null && e.disabled)), Rb.setDisable(o, !(e != null && e.disabled));
  }, [c, e == null ? void 0 : e.disabled]), he(() => ((e == null ? void 0 : e.resetCSS) !== !1 && Q2(U2, "react-tiptap-reset"), () => {
    J2("react-tiptap-reset");
  }), [e == null ? void 0 : e.resetCSS]);
  function u(d, h) {
    return e != null && e.removeDefaultWrapper ? h === "html" ? d.isEmpty ? "" : d.getHTML() : h === "json" ? d.isEmpty ? {} : d.getJSON() : h === "text" ? d.isEmpty ? "" : d.getText() : "" : h === "html" ? d.getHTML() : h === "json" ? d.getJSON() : h === "text" ? d.getText() : "";
  }
  Cf(() => {
    c && (c.id = o);
  }, [o, c]), he(() => () => {
    var d;
    (d = c == null ? void 0 : c.destroy) == null || d.call(c);
  }, []);
  const f = Px(c, "characterCount");
  return c ? /* @__PURE__ */ E("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ l(G2, { id: o, children: /* @__PURE__ */ l(eb, { delayDuration: 0, disableHoverableContent: !0, children: /* @__PURE__ */ l(
      "div",
      {
        className: Mn(
          "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background",
          !(e != null && e.disabled) && "richtext-shadow richtext-outline richtext-outline-1"
        ),
        children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: [
          !(e != null && e.hideToolbar) && /* @__PURE__ */ l(H2, { disabled: !!(e != null && e.disabled), editor: c, toolbar: e.toolbar }),
          /* @__PURE__ */ l(Ef, { className: `richtext-relative ${(e == null ? void 0 : e.contentClass) || ""}`, editor: c }),
          f && /* @__PURE__ */ l(q2, { editor: c, extensions: n }),
          !(e != null && e.hideBubble) && /* @__PURE__ */ l(B2, { bubbleMenu: e == null ? void 0 : e.bubbleMenu, disabled: e == null ? void 0 : e.disabled, editor: c })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ l(F2, {})
  ] }) : /* @__PURE__ */ l(ge, {});
}
const Tw = wf(ew);
export {
  vw as $,
  q as A,
  Ce as B,
  j2 as C,
  Fx as D,
  It as E,
  Za as F,
  sx as G,
  Ry as H,
  va as I,
  vr as J,
  ww as K,
  bt as L,
  ly as M,
  pd as N,
  _2 as O,
  Ir as P,
  Cw as Q,
  br as R,
  Td as S,
  Md as T,
  dx as U,
  bd as V,
  bw as W,
  yy as X,
  vy as Y,
  Eb as Z,
  yw as _,
  Ld as a,
  xw as a0,
  pw as a1,
  We as a2,
  Sd as a3,
  cb as a4,
  mw as a5,
  wd as a6,
  Nn as a7,
  Tw as a8,
  kb as a9,
  kn as aa,
  Nb as ab,
  ab as ac,
  Px as ad,
  Qy as ae,
  xd as af,
  Hx as ag,
  Aw as ah,
  zt as ai,
  ns as b,
  gw as c,
  Q as d,
  Ux as e,
  Ad as f,
  Lv as g,
  Wx as h,
  nd as i,
  Sw as j,
  be as k,
  Pn as l,
  Or as m,
  Kt as n,
  Le as o,
  L2 as p,
  Qa as q,
  kd as r,
  Mv as s,
  Bn as t,
  Cd as u,
  Kx as v,
  zn as w,
  Hn as x,
  Er as y,
  Rr as z
};
