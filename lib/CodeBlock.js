import { N as na, t as Mt, m as aa } from "./index-BWx1Mchx.js";
import { N as ra, c as Pt, R as ia } from "./dom-dataset-CHDbKz5J.js";
import { jsxs as Xe, jsx as M } from "react/jsx-runtime";
import { d as ne, A as sa, Z as oa, a3 as la } from "./RichTextEditor-Dg5WlAX5.js";
import * as ue from "react";
import { useRef as $t, useCallback as ca, useEffect as Dt } from "react";
import * as F from "@radix-ui/react-select";
import { ChevronDown as An, ChevronUp as da, Check as ua } from "lucide-react";
const pa = F.Root, fa = F.Value, In = ue.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ Xe(
  F.Trigger,
  {
    ref: r,
    className: ne(
      "richtext-flex richtext-h-10 richtext-w-full richtext-items-center richtext-justify-between richtext-rounded-md richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background placeholder:richtext-text-muted-foreground focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 [&>span]:richtext-line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ M(F.Icon, { asChild: !0, children: /* @__PURE__ */ M(An, { className: "richtext-h-4 richtext-w-4 richtext-opacity-50" }) })
    ]
  }
));
In.displayName = F.Trigger.displayName;
const Rn = ue.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ M(
  F.ScrollUpButton,
  {
    ref: n,
    className: ne(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ M(da, { className: "richtext-h-4 richtext-w-4" })
  }
));
Rn.displayName = F.ScrollUpButton.displayName;
const Sn = ue.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ M(
  F.ScrollDownButton,
  {
    ref: n,
    className: ne(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ M(An, { className: "richtext-h-4 richtext-w-4" })
  }
));
Sn.displayName = F.ScrollDownButton.displayName;
const xn = ue.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, c) => /* @__PURE__ */ M(F.Portal, { children: /* @__PURE__ */ Xe(
  F.Content,
  {
    ref: c,
    className: ne(
      "richtext-relative richtext-z-50 richtext-max-h-60 richtext-overflow-y-auto richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md richtext-border richtext-bg-popover richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:richtext-translate-y-1 data-[side=left]:richtext--translate-x-1 data-[side=right]:richtext-translate-x-1 data-[side=top]:richtext--translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ M(Rn, {}),
      /* @__PURE__ */ M(
        F.Viewport,
        {
          className: ne(
            "richtext-p-1",
            n === "popper" && "richtext-h-[var(--radix-select-trigger-height)] richtext-w-full richtext-min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ M(Sn, {})
    ]
  }
) }));
xn.displayName = F.Content.displayName;
const ba = ue.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ M(
  F.Label,
  {
    ref: n,
    className: ne("richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
ba.displayName = F.Label.displayName;
const kn = ue.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ Xe(
  F.Item,
  {
    ref: r,
    className: ne(
      "richtext-relative richtext-flex richtext-w-full richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ M("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ M(F.ItemIndicator, { children: /* @__PURE__ */ M(ua, { className: "richtext-h-4 richtext-w-4" }) }) }),
      /* @__PURE__ */ M(F.ItemText, { children: t })
    ]
  }
));
kn.displayName = F.Item.displayName;
const ga = ue.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ M(
  F.Separator,
  {
    ref: n,
    className: ne("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
ga.displayName = F.Separator.displayName;
function ma({ action: e, ...t }) {
  return /* @__PURE__ */ M(
    sa,
    {
      action: e,
      disabled: t == null ? void 0 : t.disabled,
      icon: t == null ? void 0 : t.icon,
      tooltip: t == null ? void 0 : t.tooltip
    }
  );
}
var Ne = {}, Y = Symbol(), ee = Symbol(), St = (e) => typeof e == "string" ? m[e] : e, m = {
  plain: Ne,
  plaintext: Ne,
  text: Ne,
  txt: Ne
}, ke = (e, t) => (t[ee] || Te)(e, t), Te = (e, t) => {
  for (var n = [e], r, c = [], d = 0; r = St(t[Y]); )
    delete t[Y], Object.assign(t, r);
  for (On(e, t, n, 0); c[d++] = n[0], n = n[1]; ) ;
  return c;
}, Ft = "</span>", Oe = "", ve = "", Tn = (e) => {
  for (var t = "", n = e.length, r = 0; r < n; ) t += Nn(e[r++]);
  return t;
}, Nn = (e) => {
  if (e instanceof be) {
    var { type: t, alias: n, content: r } = e, c = Oe, d = ve, u = `<span class="token ${t + (n ? " " + n : "") + (t == "keyword" && typeof r == "string" ? " keyword-" + r : "")}">`;
    ve += Ft, Oe += u;
    var f = Nn(r);
    return Oe = c, ve = d, u + f + Ft;
  }
  return typeof e != "string" ? Tn(e) : (e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;"), ve && e.includes(`
`) ? e.replace(/\n/g, ve + `
` + Oe) : e);
}, On = (e, t, n, r, c) => {
  for (var d in t)
    if (t[d]) for (var u = 0, f = t[d], E = Array.isArray(f) ? f : [f]; u < E.length; ++u) {
      if (c && c[0] == d && c[1] == u)
        return;
      for (var w = E[u], g = w.pattern || w, p = St(w.inside), v = w.lookbehind, h = w.greedy && g.global, _ = w.alias, a = n, i = r; a && (!c || i < c[2]); i += a[0].length, a = a[1]) {
        var l = a[0], o = 0, s, b;
        if (!(l instanceof be)) {
          if (g.lastIndex = h ? i : 0, s = g.exec(h ? e : l), s && v && s[1] && (b = s[1].length, s.index += b, s[0] = s[0].slice(b)), h) {
            if (!s)
              break;
            if (s[0]) {
              for (var x = s.index, S = x + s[0].length, I; x >= i + (I = a[0].length); a = a[1], i += I) ;
              if (a[0] instanceof be)
                continue;
              for (var y = a, f = i; (f += y[0].length) < S; y = y[1], o++) ;
              l = e.slice(i, f), s.index -= i;
            }
          }
          if (s && s[0]) {
            for (var x = s.index, T = s[0], k = l.slice(x + T.length), O = i + l.length, P = new be(d, p ? ke(T, p) : T, T, _), C = a, V = 0, H; C = C[1], V++ < o; ) ;
            k && (!C || C[0] instanceof be ? C = [k, C] : C[0] = k + C[0]), i += x, a[0] = x ? l.slice(0, x) : P, x ? a = a[1] = [P, C] : a[1] = C, o && (On(e, t, a, i, H = [d, u, O]), O = H[2]), c && O > c[2] && (c[2] = O);
          }
        }
      }
    }
};
function be(e, t, n, r) {
  this.type = e, this.content = t, this.alias = r, this.length = n.length;
}
var ze = "\\b(?:BASH(?:OPTS|_ALIASES|_ARG[CV]|_CMDS|_COMPLETION_COMPAT_DIR|_LINENO|_REMATCH|_SOURCE|_VERSINFO|_VERSION)?|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|E?UID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_(?:ADDRESS|ALL|IDENTIFICATION|MEASUREMENT|MONETARY|NAME|NUMERIC|PAPER|TELEPHONE|TIME)|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS[1-4]|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_(?:CONFIG_DIRS|CURRENT_DESKTOP|DATA_DIRS|GREETER_DATA_DIR|MENU_PREFIX|RUNTIME_DIR|SEAT|SEAT_PATH|SESSION_DESKTOP|SESSION_ID|SESSION_PATH|SESSION_TYPE|VTNR)|XMODIFIERS)\\b", ut = {
  pattern: /(^(["']?)\w+\2)[ 	]+\S.*/,
  lookbehind: !0,
  alias: "punctuation"
  // this looks reasonably well in all themes
}, Ln = {
  variable: /^\$\(|^`|\)$|`$/
}, Le = {
  bash: ut,
  environment: {
    pattern: RegExp("\\$" + ze),
    alias: "constant"
  },
  variable: [
    // [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([^]*?\)\)/g,
      greedy: !0,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        variable: [
          {
            pattern: /(^\$[^]+)../,
            lookbehind: !0
          },
          /^\$\(\(/
        ],
        number: /\b0x[a-fA-F\d]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        operator: /--|\+\+|&&|\|\||(?:\*\*|<<|>>|[%&|^!=<>/*+-])=?|[?:~]/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        punctuation: /\(\(?|\)\)?|,|;/
      }
    },
    // [1]: Command Substitution
    {
      pattern: /\$\((?:[^()]|\([^)]*\))*\)|`[^`]+`/g,
      greedy: !0,
      inside: Ln
    },
    // [2]: Brace expansion
    {
      pattern: /\$\{[^}]*\}/g,
      greedy: !0,
      inside: {
        operator: /:[?=+-]?|[!/]|##?|%%?|\^\^?|,,?/,
        punctuation: /[[\]]/,
        environment: {
          pattern: RegExp("(\\{)" + ze),
          lookbehind: !0,
          alias: "constant"
        }
      }
    },
    /\$(?:\w+|[#?*!@$])/
  ],
  // Escape sequences from echo and printf's manuals, and escaped quotes.
  entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[a-fA-F\d]{8}|u[a-fA-F\d]{4}|x[a-fA-F\d]{1,2})/
}, ha = ut.inside = m.sh = m.shell = m.bash = {
  shebang: {
    pattern: /^#!\s*\/.*/,
    alias: "important"
  },
  comment: {
    pattern: /(^|[^"{\\$])#.*/,
    lookbehind: !0
  },
  "function-name": [
    // a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: !0,
      alias: "function"
    },
    {
      // b)
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: "function"
    }
  ],
  // Highlight variable names as variables in for and select beginnings.
  "for-or-select": {
    pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
    lookbehind: !0,
    alias: "variable"
  },
  // Highlight variable names as variables in the left-hand part
  // of assignments (“=” and “+=”).
  "assign-left": {
    pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
    lookbehind: !0,
    alias: "variable",
    inside: {
      environment: {
        pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + ze),
        lookbehind: !0,
        alias: "constant"
      }
    }
  },
  // Highlight parameter names as variables
  parameter: {
    pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?![^\s=])/,
    lookbehind: !0,
    alias: "variable"
  },
  string: [
    // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[^]*?\n\2/g,
      lookbehind: !0,
      greedy: !0,
      inside: Le
    },
    // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[^]*?\n\3/g,
      lookbehind: !0,
      greedy: !0,
      inside: {
        bash: ut
      }
    },
    // “Normal” string
    {
      // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[^]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^\\"`$])*"/g,
      lookbehind: !0,
      greedy: !0,
      inside: Le
    },
    {
      // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
      pattern: /(^|[^$\\])'[^']*'/g,
      lookbehind: !0,
      greedy: !0
    },
    {
      // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
      pattern: /\$'(?:\\[^]|[^\\'])*'/g,
      greedy: !0,
      inside: {
        entity: Le.entity
      }
    }
  ],
  environment: {
    pattern: RegExp("\\$?" + ze),
    alias: "constant"
  },
  variable: Le.variable,
  function: {
    pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|c?fdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cron|crontab|c?split|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff3?|dig|dircolors|dirname|dirs?|dmesg|docker|docker-compose|du|[ef]?grep|eject|env|ethtool|expand|expect|expr|fdformat|fg|file|find|fmt|fold|format|free|fsck|fuser|g?awk|git|g?parted|groupadd|groupdel|groupmod|groups|grub-mkconfig|halt|head|hg|history|host|hostname|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|killall|less|link|ln|logname|logrotate|look|lpc|lprint[dq]?|lprm?|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mm?v|more|most|mtools|m?tr|mutt|nano|nc|netstat|nice|nl|node|nohup|notify-send|nslookup|op|open|passwd|paste|pathchk|ping|p?kill|p?npm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ra[mr]|reboot|remsync|rename|renice|rev|rmdir|rp?m|r?sync|[sr]?cp|screen|sdiff|se[dq]|sendmail|service|s?ftp|shellcheck|shuf|shutdown|sleep|s?locate|[sz]?sh|stat|strace|sudo|sum?|suspend|swapon|sysctl|tac|tail|tar|tee|time|timeout|h?top|touch|traceroute|t?sort|tty|u?mount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vim?|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|g?zip|zsh|zypper)(?=$|[)\s;|&])/,
    lookbehind: !0
  },
  keyword: {
    pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
    lookbehind: !0
  },
  // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
  builtin: {
    pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|[ls]et|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
    lookbehind: !0,
    // Alias added to make those easier to distinguish from strings.
    alias: "class-name"
  },
  boolean: {
    pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
    lookbehind: !0
  },
  "file-descriptor": {
    pattern: /\B&\d\b/,
    alias: "important"
  },
  operator: {
    // Lots of redirections here, but not just that.
    pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
    inside: {
      "file-descriptor": {
        pattern: /^\d/,
        alias: "important"
      }
    }
  },
  punctuation: /\$?\(\(?|\)\)?|\.\.|[[\]{};\\]/,
  number: {
    pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
    lookbehind: !0
  }
};
[
  "comment",
  "function-name",
  "for-or-select",
  "assign-left",
  "parameter",
  "string",
  "environment",
  "function",
  "keyword",
  "builtin",
  "boolean",
  "file-descriptor",
  "operator",
  "punctuation",
  "number"
].forEach((e) => Ln[e] = ha[e]);
var Cn = /(?:"(?:\\[^]|[^\\\n"])*"|'(?:\\[^]|[^\\\n'])*')/g, Ce = Cn.source, Ut = {
  rule: /^@[\w-]+/,
  "selector-function-argument": {
    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^)]*\))*\))+(?=\s*\))/,
    lookbehind: !0,
    alias: "selector"
  },
  keyword: {
    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
    lookbehind: !0
  }
  // See rest below
};
Ut[Y] = m.css = {
  comment: /\/\*[^]*?\*\//,
  atrule: {
    pattern: RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|${Ce})*?(?:;|(?=\\s*\\{))`),
    inside: Ut
  },
  url: {
    // https://drafts.csswg.org/css-values-3/#urls
    pattern: RegExp(`\\burl\\((?:${Ce}|(?:[^\\\\
"')=]|\\\\[^])*)\\)`, "gi"),
    greedy: !0,
    inside: {
      function: /^url/i,
      punctuation: /^\(|\)$/,
      string: {
        pattern: RegExp("^" + Ce + "$"),
        alias: "url"
      }
    }
  },
  selector: {
    pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|${Ce})*(?=\\s*\\{)`),
    lookbehind: !0
  },
  string: {
    pattern: Cn,
    greedy: !0
  },
  property: {
    pattern: /(^|[^-\w\xa0-\uffff])(?!\d)(?:(?!\s)[-\w\xa0-\uffff])+(?=\s*:)/i,
    lookbehind: !0
  },
  important: /!important\b/i,
  function: {
    pattern: /(^|[^-a-z\d])[-a-z\d]+(?=\()/i,
    lookbehind: !0
  },
  punctuation: /[(){},:;]/
};
var De = (e, t) => {
  if (t.has(e)) return t.get(e);
  var n = e, r = _a.call(e).slice(8, -1);
  if (r == "Object") {
    t.set(e, n = {});
    for (var c in e)
      n[c] = De(e[c], t);
    e[Y] && (n[Y] = De(e[Y], t)), e[ee] && (n[ee] = e[ee]);
  } else if (r == "Array") {
    t.set(e, n = []);
    for (var d = 0, u = e.length; d < u; d++)
      n[d] = De(e[d], t);
  }
  return n;
}, Qe = (e) => De(e, /* @__PURE__ */ new Map()), ie = (e, t) => Object.assign(Qe(m[e]), t), $ = (e, t, n) => {
  var r = {};
  for (var c in e)
    r[c] = e[c], delete e[c];
  for (var c in r)
    c == t && Object.assign(e, n), n.hasOwnProperty(c) || (e[c] = r[c]);
}, _a = {}.toString, He = m.css, Bt = {
  pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
  lookbehind: !0
}, Gt = {
  pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
  lookbehind: !0
};
He.selector.inside = He.atrule.inside["selector-function-argument"].inside = {
  "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
  "pseudo-class": /:[-\w]+/,
  class: /\.[-\w]+/,
  id: /#[-\w]+/,
  attribute: {
    pattern: /\[(?:[^[\]"']|(["'])(?:\\[^]|(?!\1)[^\\\n])*\1)*\]/g,
    greedy: !0,
    inside: {
      punctuation: /^\[|\]$/,
      "case-sensitivity": {
        pattern: /(\s)[si]$/i,
        lookbehind: !0,
        alias: "keyword"
      },
      namespace: {
        pattern: /^(\s*)(?:(?!\s)[-*\w\xa0-\uffff])*\|(?!=)/,
        lookbehind: !0,
        inside: {
          punctuation: /\|$/
        }
      },
      "attr-name": {
        pattern: /^(\s*)(?:(?!\s)[-\w\xa0-\uffff])+/,
        lookbehind: !0
      },
      "attr-value": {
        pattern: /(=\s*)(?:(?!\s)[-\w\xa0-\uffff])+(?=\s*$)|(["'])(?:\\[^]|(?!\2)[^\\\n])*\2/,
        lookbehind: !0
      },
      operator: /[|~*^$]?=/
    }
  },
  "n-th": [
    {
      pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
      lookbehind: !0,
      inside: {
        number: /[\dn]+/,
        operator: /[+-]/
      }
    },
    {
      pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
      lookbehind: !0
    }
  ],
  combinator: />|\+|~|\|\|/,
  // the `tag` token has been existed and removed.
  // because we can't find a perfect tokenize to match it.
  // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
  punctuation: /[(),]/
};
$(He, "property", {
  variable: {
    pattern: /(^|[^-\w\xa0-\uffff])--(?!\d)(?:(?!\s)[-\w\xa0-\uffff])*/i,
    lookbehind: !0
  }
});
$(He, "function", {
  operator: {
    pattern: /(\s)[/*+-](?!\S)/,
    lookbehind: !0
  },
  // CAREFUL!
  // Previewers and Inline color use hexcode and color.
  hexcode: {
    pattern: /\B#[a-f\d]{3,8}\b/i,
    alias: "color"
  },
  color: [
    {
      pattern: /(^|[^\w-])(?:(?:alice|cadet|cornflower|deepsky|dodger|midnight|powder|royal|sky|steel)blue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blueviolet|brown|burlywood|chartreuse|chocolate|coral|cornsilk|crimson|(?:dark)?(?:blue|cyan|goldenrod|gr[ae]y|green|khaki|magenta|olivegreen|orange|orchid|red|salmon|seagreen|slateblue|slategr[ae]y|turquoise|violet)|deeppink|dimgr[ae]y|firebrick|floralwhite|(?:forest|lawn|lime|pale|spring)green|fuchsia|gainsboro|ghostwhite|gold|greenyellow|honeydew|hotpink|indianred|indigo|ivory|lavender|lavenderblush|lemonchiffon|light(?:blue|coral|cyan|goldenrodyellow|gr[ae]y|green|pink|salmon|seagreen|skyblue|slategr[ae]y|steelblue|yellow)|lime|linen|maroon|medium(?:aquamarine|blue|orchid|purple|seagreen|slateblue|springgreen|turquoise|violetred)|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orangered|palegoldenrod|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|purple|rebeccapurple|rosybrown|saddlebrown|sandybrown|seashell|sienna|silver|snow|tan|teal|thistle|tomato|transparent|wheat|white|whitesmoke|yellow|yellowgreen)(?![\w-])/i,
      lookbehind: !0
    },
    {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        function: /^[^(]+/,
        unit: Bt,
        number: Gt,
        punctuation: /[(),]/
      }
    }
  ],
  // it's important that there is no boundary assertion after the hex digits
  entity: /\\[a-f\d]{1,8}/i,
  unit: Bt,
  number: Gt
});
m.ini = {
  /**
   * The component mimics the behavior of the Win32 API parser.
   *
   * @see {@link https://github.com/PrismJS/prism/issues/2775#issuecomment-787477723}
   */
  comment: {
    pattern: /(^[ \f	\v]*)[#;].*/m,
    lookbehind: !0
  },
  section: {
    pattern: /(^[ \f	\v]*)\[[^\n\]]*\]?/m,
    lookbehind: !0,
    inside: {
      "section-name": {
        pattern: /(^\[[ \f	\v]*)[^ \f	\v\]]+(?:[ \f	\v]+[^ \f	\v\]]+)*/,
        lookbehind: !0,
        alias: "selector"
      },
      punctuation: /[[\]]/
    }
  },
  key: {
    pattern: /(^[ \f	\v]*)[^ \f\n	\v=]+(?:[ \f	\v]+[^ \f\n	\v=]+)*(?=[ \f	\v]*=)/m,
    lookbehind: !0,
    alias: "attr-name"
  },
  value: {
    pattern: /(=[ \f	\v]*)[^ \f\n	\v]+(?:[ \f	\v]+[^ \f\n	\v]+)*/,
    lookbehind: !0,
    alias: "attr-value",
    inside: {
      "inner-value": {
        pattern: /^(["']).+(?=\1$)/,
        lookbehind: !0
      }
    }
  },
  punctuation: /=/
};
var se = () => ({
  pattern: /\/\/.*|\/\*[^]*?(?:\*\/|$)/g,
  greedy: !0
}), xt = () => ({
  pattern: /(["'])(?:\\[^]|(?!\1)[^\\\n])*\1/g,
  greedy: !0
}), Mn = /\b0x[a-f\d]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, ae = /[()[\]{}.,:;]/, K = /\b(?:false|true)\b/, at = {
  "interpolation-punctuation": {
    pattern: /^\$\{?|\}$/,
    alias: "punctuation"
  },
  expression: {
    pattern: /[^]+/
  }
};
at.expression.inside = m.kts = m.kt = m.kotlin = {
  // https://kotlinlang.org/spec/expressions.html#string-interpolation-expressions
  "string-literal": [
    {
      pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
      alias: "multiline",
      inside: {
        interpolation: {
          pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
          inside: at
        },
        string: /[^]+/
      }
    },
    {
      pattern: /"(?:\\.|[^\\\n"$]|\$(?:(?!\{)|\{[^{}]*\}))*"/,
      alias: "singleline",
      inside: {
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\\\)*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
          lookbehind: !0,
          inside: at
        },
        string: /[^]+/
      }
    }
  ],
  char: {
    // https://kotlinlang.org/spec/expressions.html#character-literals
    pattern: /'(?:[^\\\n']|\\(?:.|u[a-fA-F\d]{0,4}))'/g,
    greedy: !0
  },
  comment: se(),
  annotation: {
    pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
    alias: "builtin"
  },
  keyword: {
    // The lookbehind prevents wrong highlighting of e.g. kotlin.properties.get
    pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
    lookbehind: !0
  },
  boolean: K,
  label: {
    pattern: /\b\w+@|@\w+/,
    alias: "symbol"
  },
  function: {
    pattern: /(?:`[^\n`]+`|\b\w+)(?=\s*\()|(\.)(?:`[^\n`]+`|\w+)(?=\s*\{)/g,
    lookbehind: !0,
    greedy: !0
  },
  number: /\b(?:0[xX][a-fA-F\d]+(?:_[a-fA-F\d]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
  operator: /--|\+\+|&&|\|\||->|[!=]==|!!|[%!=<>/*+-]=?|[?:]:?|\.\.|\b(?:and|inv|shl|u?shr|x?or)\b/,
  punctuation: ae
};
var Pn = [
  {
    pattern: /&[a-z\d]{1,8};/i,
    alias: "named-entity"
  },
  /&#x?[a-f\d]{1,8};/i
], Ea = {
  pattern: /<\/?(?!\d)[^\s/=>$<%]+(?:\s(?:\s*[^\s/=>]+(?:\s*=\s*(?!\s)(?:"[^"]*"|'[^']*'|[^\s"'=>]+(?=[\s>]))?|(?=[\s/>])))+)?\s*\/?>/g,
  greedy: !0,
  inside: {
    punctuation: /^<\/?|\/?>$/,
    tag: {
      pattern: /^\S+/,
      inside: {
        namespace: /^[^:]+:/
      }
    },
    "attr-value": [{
      pattern: /(=\s*)(?:"[^"]*"|'[^']*'|[^\s"'=>]+)/g,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^["']|["']$/,
        entity: Pn
      }
    }],
    "attr-equals": /=/,
    "attr-name": {
      pattern: /\S+/,
      inside: {
        namespace: /^[^:]+:/
      }
    }
  }
};
m.rss = m.atom = m.ssml = m.xml = {
  comment: {
    pattern: /<!--(?:(?!<!--)[^])*?-->/g,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[^]+?\?>/g,
    greedy: !0
  },
  doctype: {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/gi,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(\[)[^]+(?=\]\s*>$)/,
        lookbehind: !0,
        inside: "xml"
      },
      string: /"[^"]*"|'[^']*'/,
      punctuation: /^<!|[>[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /\S+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[^]*?\]\]>/gi,
    greedy: !0
  },
  tag: Ea,
  entity: Pn,
  "markup-bracket": {
    pattern: /[()[\]{}]/,
    alias: "punctuation"
  }
};
var pt = (e, t) => (e["language-" + t] = {
  pattern: /[^]+/,
  inside: t
}, e), zt = (e, t) => ({
  pattern: RegExp(`(<${e}[^>]*>)(?!</${e}>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])+?(?=</${e}>)`, "gi"),
  lookbehind: !0,
  greedy: !0,
  inside: pt({
    "included-cdata": {
      pattern: /<!\[CDATA\[[^]*?\]\]>/i,
      inside: pt({
        cdata: /^<!\[CDATA\[|\]\]>$/i
      }, t)
    }
  }, t)
}), Ht = (e, t) => ({
  pattern: RegExp(`((?:^|["'\\s])(?:${e})\\s*=\\s*)(?:"[^"]*"|'[^']*'|[^\\s"'=>]+)`, "gi"),
  lookbehind: !0,
  greedy: !0,
  inside: pt({
    punctuation: /^["']|["']$/
  }, t)
}), $n = m.svg = m.mathml = m.html = m.markup = Qe(m.xml);
$n.tag.inside["attr-value"].unshift(
  Ht("style", "css"),
  Ht("on[a-z]+", "javascript")
);
$($n, "cdata", {
  style: zt("style", "css"),
  script: zt("script", "javascript")
});
m.r = {
  comment: /#.*/,
  string: {
    pattern: /(["'])(?:\\.|(?!\1)[^\\\n])*\1/g,
    greedy: !0
  },
  "percent-operator": {
    // Includes user-defined operators
    // and %%, %*%, %/%, %in%, %o%, %x%
    pattern: /%[^%\s]*%/,
    alias: "operator"
  },
  boolean: /\b(?:FALSE|TRUE)\b/,
  ellipsis: /\.\.(?:\.|\d+)/,
  number: [
    /\b(?:Inf|NaN)\b/,
    /(?:\b0x[a-fA-F\d]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
  ],
  keyword: /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
  operator: /->>?|<=|<<?-|[!=<>]=?|::?|&&?|\|\|?|[~^$@/*+-]/,
  punctuation: /[()[\]{},;]/
};
m.basic = {
  comment: {
    pattern: /(?:!|rem\b).+/i,
    inside: {
      keyword: /^rem/i
    }
  },
  string: {
    pattern: /"(?:""|[#$%&'().,:;\w ?^!=<>/*+-])*"/g,
    greedy: !0
  },
  number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  keyword: /\b(?:as|beep|bload|bsave|call absolute|call|case|chain|chdir|clear|close|cls|com|common|const|data|declare|def(?: fn| seg|dbl|int|[ls]ng|str)|dim|do|double|else|elseif|environ|erase|error|exit|field|files|for|function|get|gosub|goto|if|input|integer|ioctl|key|kill|line input|locate|lock|long|loop|[lr]set|mkdir|name|next|off|on(?: com| error| key| timer)?|open|option base|[op]ut|poke|read|redim|rem|restore|resume|return|rmdir|run|select case|shared|shell|single|sleep|static|step|stop|string|sub|swap|system|then|timer|to|troff|tron|type|unlock|until|using|view print|wait|w?end|while|write)(?:\$|\b)/i,
  function: /\b(?:abs|access|a?cos|angle|area|arithmetic|array|a?sin|ask|atn?|base|begin|break|cause|ceil|chr|clip|collate|color|co[nst]|cosh|csc|date|datum|debug|decimal|de[fgt]|degrees|delete|device|display|dot|elapsed|eps|erasable|exline|exp|external|extype|filetype|fixed|fp|go|graph|handler|idn|image|int?|internal|ip|is|keyed|[lu]bound|[lu]case|left|le[nt]|length|lines?|log2?|log10|[lr]trim|margin|ma[tx]|maxnum|mi[dn]|missing|mod|native|nul|numeric|of|option|ord|organization|outin|output|pi|pointer|points?|pos|print|program|prompt|rad|radians|randomize|record|recsize|rectype|relative|remainder|repeat|rest|retry|rewrite|right|rnd|round|same|se[ct]|select|sequential|setter|sgn|sinh|size|skip|s[qt]r|standard|status|stream|style|tab|tanh?|template|text|there|time|timeout|trace|transform|truncate|use|val|variable|viewport|when|window|with|zer|zonewidth)(?:\$|\b)/i,
  operator: /<=|<>|>=|[&^=<>/*+-]|\b(?:and|eqv|imp|not|x?or)\b/i,
  punctuation: /[(),:;]/
};
m.vbnet = ie("basic", {
  comment: {
    pattern: /(?:!|'|rem\b).*/i,
    inside: {
      keyword: /^rem/i
    }
  },
  string: {
    pattern: /(^|[^"])"(?:""|[^"])*"(?!")/g,
    lookbehind: !0,
    greedy: !0
  },
  keyword: /(?:\b(?:addhandler|addressof|alias|and|andalso|as|beep|bload|boolean|bsave|byref|byval|call absolute|call|case|catch|cbool|c?byte|cc?har|c?date|cdbl|cdec|chain|chdir|cu?int|class|clear|close|cls|cobj|com|common|const|continue|c?sbyte|c?u?short|c?sng|cstr|c?type|cu?lng|data|decimal|declare|def(?: fn| seg|dbl|int|lng|sng|str)|default|delegate|dim|directcast|do|double|else|elseif|enum|environ|erase|error|event|exit|false|true|field|files|finally|for each|for|friend|function|[gls]et|gettype|getxmlnamespace|global|gosub|goto|handles|i[fns]|implements|imports|inherits|input|interface|ioctl|isnot|key|kill|lib|like|line input|locate|lock|loop|[lr]set|me|mkdir|mod|module|mustinherit|mustoverride|mybase|myclass|name|namespace|narrowing|new|next|not|nothing|notinheritable|notoverridable|object|off?|on (?:com|error|key|timer)|on|open|operator|option base|option|optional|orelse|out|overloads|overridable|overrides|paramarray|partial|poke|private|property|protected|public|put|raiseevent|read|readonly|redim|removehandler|restore|resume|return|rmdir|run|select case|select|shadows|shared|shell|single|sleep|static|step|stop|string|structure|sub|swap|synclock|system|[tw]hen|throw|timer|to|troff|tron|try|trycast|typeof|u?integer|u?long|unlock|until|using|view print|wait|w?end|while|widening|with|withevents|write|writeonly|x?or)|\B#(?:const|else|elseif|end|if))(?:\$|\b)/i,
  punctuation: /[(){},:;]/
});
var Zt = {
  // https://en.cppreference.com/w/c/language/character_constant
  pattern: /'(?:\\[^]|[^\\\n']){0,32}'/g,
  greedy: !0
}, Vt = {
  pattern: /\/\/(?:[^\\\n]|\\\n?)*|\/\*[^]*?(?:\*\/|$)/g,
  greedy: !0
}, qt = {
  // https://en.cppreference.com/w/c/language/string_literal
  pattern: /"(?:\\[^]|[^\\\n"])*"/g,
  greedy: !0
}, Kt = {
  pattern: /\S[^]*/
};
Kt.inside = m.c = {
  comment: Vt,
  char: Zt,
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[ 	]*)#\s*[a-z](?:[^\\\n/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\[^])*/img,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        qt
      ],
      char: Zt,
      comment: Vt,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=\n)/,
      expression: Kt
    }
  },
  string: qt,
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([^]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[a-f\d]+(?:\.[a-f\d]*)?|\.[a-f\d]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: /->|([&|:+-])\1|[?:~]|>>=?|<<=?|[%&|^!=<>/*+-]=?/,
  punctuation: ae
};
$(
  m.opencl = ie("c", {
    // Extracted from the official specs (2.0) and http://streamcomputing.eu/downloads/?opencl.lang (opencl-keywords, opencl-types) and http://sourceforge.net/tracker/?func=detail&aid=2957794&group_id=95717&atid=612384 (Words2, partly Words3)
    keyword: /\b(?:(?:__)?(?:constant|global|kernel|local|private|read_only|read_write|write_only)|__attribute__|auto|(?:bool|u?(?:char|int|long|short)|half|quad)(?:2|3|4|8|16)?|break|case|complex|const|continue|(?:double|float)(?:16(?:x(?:1|2|4|8|16))?|1x(?:1|2|4|8|16)|2(?:x(?:1|2|4|8|16))?|3|4(?:x(?:1|2|4|8|16))?|8(?:x(?:1|2|4|8|16))?)?|default|do|else|enum|extern|for|goto|if|imaginary|inline|packed|pipe|register|restrict|return|signed|sizeof|static|struct|switch|typedef|uniform|union|unsigned|void|volatile|while)\b/,
    // Extracted from http://streamcomputing.eu/downloads/?opencl.lang (opencl-const)
    // Math Constants: https://www.khronos.org/registry/OpenCL/sdk/2.1/docs/man/xhtml/mathConstants.html
    // Macros and Limits: https://www.khronos.org/registry/OpenCL/sdk/2.1/docs/man/xhtml/macroLimits.html
    number: /(?:\b0x(?:[a-f\d]+(?:\.[a-f\d]*)?|\.[a-f\d]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[fuhl]{0,4}/i,
    boolean: K,
    "constant-opencl-kernel": {
      pattern: /\b(?:CHAR_(?:BIT|MAX|MIN)|CLK_(?:ADDRESS_(?:CLAMP(?:_TO_EDGE)?|NONE|REPEAT)|FILTER_(?:LINEAR|NEAREST)|(?:GLOBAL|LOCAL)_MEM_FENCE|NORMALIZED_COORDS_(?:FALSE|TRUE))|CL_(?:BGRA|(?:HALF_)?FLOAT|INTENSITY|LUMINANCE|A?R?G?B?[Ax]?|(?:(?:UN)?SIGNED|[US]NORM)_(?:INT(?:8|16|32))|UNORM_(?:INT_101010|SHORT_(?:555|565)))|(?:DBL|FLT|HALF)_(?:DIG|EPSILON|(?:MAX|MIN)(?:(?:_10)?_EXP)?|MANT_DIG)|FLT_RADIX|HUGE_VALF?|(?:INT|LONG|SCHAR|SHRT)_(?:MAX|MIN)|INFINITY|MAXFLOAT|M_(?:[12]_PI|2_SQRTPI|E|LN2|LN10|LOG2E?|LOG10E?|PI(?:_[24])?|SQRT(?:1_2|2))(?:_F|_H)?|NAN|(?:UCHAR|UINT|ULONG|USHRT)_MAX)\b/,
      alias: "constant"
    }
  }),
  "class-name",
  {
    // https://www.khronos.org/registry/OpenCL/sdk/2.1/docs/man/xhtml/scalarDataTypes.html
    // https://www.khronos.org/registry/OpenCL/sdk/2.1/docs/man/xhtml/otherDataTypes.html
    "builtin-type": {
      pattern: /\b(?:_cl_(?:command_queue|context|device_id|event|kernel|mem|platform_id|program|sampler)|cl_(?:image_format|mem_fence_flags)|clk_event_t|event_t|image(?:1d_(?:array_|buffer_)?t|2d_(?:array_(?:depth_|msaa_depth_|msaa_)?|depth_|msaa_depth_|msaa_)?t|3d_t)|ndrange_t|ptrdiff_t|queue_t|reserve_id_t|sampler_t|size_t|u?intptr_t)\b/,
      alias: "keyword"
    }
  }
);
var ft = {
  // Extracted from http://streamcomputing.eu/downloads/?opencl_host.lang (opencl-types and opencl-host)
  "type-opencl-host": {
    pattern: /\b(?:cl_(?:GLenum|GLint|GLuin|addressing_mode|bitfield|bool|buffer_create_type|build_status|channel_(?:order|type)|(?:u?(?:char|int|long|short)|double|float)(?:[2348]|16)?|command_(?:queue(?:_info|_properties)?|type)|context(?:_info|_properties)?|device_(?:exec_capabilities|fp_config|id|info|local_mem_type|mem_cache_type|type)|(?:event|sampler)(?:_info)?|filter_mode|half|image_info|kernel(?:_info|_work_group_info)?|map_flags|mem(?:_flags|_info|_object_type)?|platform_(?:id|info)|profiling_info|program(?:_build_info|_info)?))\b/,
    alias: "keyword"
  },
  "boolean-opencl-host": {
    pattern: /\bCL_(?:FALSE|TRUE)\b/,
    alias: "boolean"
  },
  // Extracted from cl.h (2.0) and http://streamcomputing.eu/downloads/?opencl_host.lang (opencl-const)
  "constant-opencl-host": {
    pattern: /\bCL_(?:A|ABGR|ADDRESS_(?:CLAMP(?:_TO_EDGE)?|MIRRORED_REPEAT|NONE|REPEAT)|ARGB|BLOCKING|BUFFER_CREATE_TYPE_REGION|BUILD_(?:ERROR|IN_PROGRESS|NONE|PROGRAM_FAILURE|SUCCESS)|COMMAND_(?:ACQUIRE_GL_OBJECTS|BARRIER|COPY_(?:BUFFER(?:_RECT|_TO_IMAGE)?|IMAGE(?:_TO_BUFFER)?)|FILL_(?:BUFFER|IMAGE)|MAP(?:_BUFFER|_IMAGE)|MARKER|MIGRATE(?:_SVM)?_MEM_OBJECTS|NATIVE_KERNEL|NDRANGE_KERNEL|READ_(?:BUFFER(?:_RECT)?|IMAGE)|RELEASE_GL_OBJECTS|SVM_(?:FREE|MAP|MEMCPY|MEMFILL|UNMAP)|TASK|UNMAP_MEM_OBJECT|USER|WRITE_(?:BUFFER(?:_RECT)?|IMAGE))|COMPILER_NOT_AVAILABLE|COMPILE_PROGRAM_FAILURE|COMPLETE|CONTEXT_(?:DEVICES|INTEROP_USER_SYNC|NUM_DEVICES|PLATFORM|PROPERTIES|REFERENCE_COUNT)|DEPTH(?:_STENCIL)?|DEVICE_(?:ADDRESS_BITS|AFFINITY_DOMAIN_(?:L[1-4]_CACHE|NEXT_PARTITIONABLE|NUMA)|AVAILABLE|BUILT_IN_KERNELS|COMPILER_AVAILABLE|DOUBLE_FP_CONFIG|ENDIAN_LITTLE|ERROR_CORRECTION_SUPPORT|EXECUTION_CAPABILITIES|EXTENSIONS|GLOBAL_(?:MEM_(?:CACHELINE_SIZE|CACHE_SIZE|CACHE_TYPE|SIZE)|VARIABLE_PREFERRED_TOTAL_SIZE)|HOST_UNIFIED_MEMORY|IL_VERSION|IMAGE(?:2D_MAX_(?:HEIGHT|WIDTH)|3D_MAX_(?:DEPTH|HEIGHT|WIDTH)|_BASE_ADDRESS_ALIGNMENT|_MAX_ARRAY_SIZE|_MAX_BUFFER_SIZE|_PITCH_ALIGNMENT|_SUPPORT)|LINKER_AVAILABLE|LOCAL_MEM_SIZE|LOCAL_MEM_TYPE|MAX_(?:CLOCK_FREQUENCY|COMPUTE_UNITS|CONSTANT_ARGS|CONSTANT_BUFFER_SIZE|GLOBAL_VARIABLE_SIZE|MEM_ALLOC_SIZE|NUM_SUB_GROUPS|ON_DEVICE_(?:EVENTS|QUEUES)|PARAMETER_SIZE|PIPE_ARGS|READ_IMAGE_ARGS|READ_WRITE_IMAGE_ARGS|SAMPLERS|WORK_GROUP_SIZE|WORK_ITEM_DIMENSIONS|WORK_ITEM_SIZES|WRITE_IMAGE_ARGS)|MEM_BASE_ADDR_ALIGN|MIN_DATA_TYPE_ALIGN_SIZE|NAME|NATIVE_VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT)|NOT_(?:AVAILABLE|FOUND)|OPENCL_C_VERSION|PARENT_DEVICE|PARTITION_(?:AFFINITY_DOMAIN|BY_AFFINITY_DOMAIN|BY_COUNTS|BY_COUNTS_LIST_END|EQUALLY|FAILED|MAX_SUB_DEVICES|PROPERTIES|TYPE)|PIPE_MAX_(?:ACTIVE_RESERVATIONS|PACKET_SIZE)|PLATFORM|PREFERRED_(?:GLOBAL_ATOMIC_ALIGNMENT|INTEROP_USER_SYNC|LOCAL_ATOMIC_ALIGNMENT|PLATFORM_ATOMIC_ALIGNMENT|VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT))|PRINTF_BUFFER_SIZE|PROFILE|PROFILING_TIMER_RESOLUTION|QUEUE_(?:ON_(?:DEVICE_(?:MAX_SIZE|PREFERRED_SIZE|PROPERTIES)|HOST_PROPERTIES)|PROPERTIES)|REFERENCE_COUNT|SINGLE_FP_CONFIG|SUB_GROUP_INDEPENDENT_FORWARD_PROGRESS|SVM_(?:ATOMICS|CAPABILITIES|COARSE_GRAIN_BUFFER|FINE_GRAIN_BUFFER|FINE_GRAIN_SYSTEM)|TYPE(?:_ACCELERATOR|_ALL|_CPU|_CUSTOM|_DEFAULT|_GPU)?|VENDOR(?:_ID)?|VERSION)|DRIVER_VERSION|EVENT_(?:COMMAND_(?:EXECUTION_STATUS|QUEUE|TYPE)|CONTEXT|REFERENCE_COUNT)|EXEC_(?:KERNEL|NATIVE_KERNEL|STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST)|FILTER_(?:LINEAR|NEAREST)|FLOAT|FP_(?:CORRECTLY_ROUNDED_DIVIDE_SQRT|DENORM|FMA|INF_NAN|ROUND_TO_INF|ROUND_TO_NEAREST|ROUND_TO_ZERO|SOFT_FLOAT)|GLOBAL|HALF_FLOAT|IMAGE_(?:ARRAY_SIZE|BUFFER|DEPTH|ELEMENT_SIZE|FORMAT|FORMAT_MISMATCH|FORMAT_NOT_SUPPORTED|HEIGHT|NUM_MIP_LEVELS|NUM_SAMPLES|ROW_PITCH|SLICE_PITCH|WIDTH)|INTENSITY|INVALID_(?:ARG_INDEX|ARG_SIZE|ARG_VALUE|BINARY|BUFFER_SIZE|BUILD_OPTIONS|COMMAND_QUEUE|COMPILER_OPTIONS|CONTEXT|DEVICE|DEVICE_PARTITION_COUNT|DEVICE_QUEUE|DEVICE_TYPE|EVENT|EVENT_WAIT_LIST|GLOBAL_OFFSET|GLOBAL_WORK_SIZE|GL_OBJECT|HOST_PTR|IMAGE_DESCRIPTOR|IMAGE_FORMAT_DESCRIPTOR|IMAGE_SIZE|KERNEL|KERNEL_ARGS|KERNEL_DEFINITION|KERNEL_NAME|LINKER_OPTIONS|MEM_OBJECT|MIP_LEVEL|OPERATION|PIPE_SIZE|PLATFORM|PROGRAM|PROGRAM_EXECUTABLE|PROPERTY|QUEUE_PROPERTIES|SAMPLER|VALUE|WORK_DIMENSION|WORK_GROUP_SIZE|WORK_ITEM_SIZE)|KERNEL_(?:ARG_(?:ACCESS_(?:NONE|QUALIFIER|READ_ONLY|READ_WRITE|WRITE_ONLY)|ADDRESS_(?:CONSTANT|GLOBAL|LOCAL|PRIVATE|QUALIFIER)|INFO_NOT_AVAILABLE|NAME|TYPE_(?:CONST|NAME|NONE|PIPE|QUALIFIER|RESTRICT|VOLATILE))|ATTRIBUTES|COMPILE_NUM_SUB_GROUPS|COMPILE_WORK_GROUP_SIZE|CONTEXT|EXEC_INFO_SVM_FINE_GRAIN_SYSTEM|EXEC_INFO_SVM_PTRS|FUNCTION_NAME|GLOBAL_WORK_SIZE|LOCAL_MEM_SIZE|LOCAL_SIZE_FOR_SUB_GROUP_COUNT|MAX_NUM_SUB_GROUPS|MAX_SUB_GROUP_SIZE_FOR_NDRANGE|NUM_ARGS|PREFERRED_WORK_GROUP_SIZE_MULTIPLE|PRIVATE_MEM_SIZE|PROGRAM|REFERENCE_COUNT|SUB_GROUP_COUNT_FOR_NDRANGE|WORK_GROUP_SIZE)|LINKER_NOT_AVAILABLE|LINK_PROGRAM_FAILURE|LOCAL|LUMINANCE|MAP_(?:FAILURE|READ|WRITE|WRITE_INVALIDATE_REGION)|MEM_(?:ALLOC_HOST_PTR|ASSOCIATED_MEMOBJECT|CONTEXT|COPY_HOST_PTR|COPY_OVERLAP|FLAGS|HOST_NO_ACCESS|HOST_PTR|HOST_READ_ONLY|HOST_WRITE_ONLY|KERNEL_READ_AND_WRITE|MAP_COUNT|OBJECT_(?:ALLOCATION_FAILURE|BUFFER|IMAGE1D|IMAGE1D_ARRAY|IMAGE1D_BUFFER|IMAGE2D|IMAGE2D_ARRAY|IMAGE3D|PIPE)|OFFSET|READ_ONLY|READ_WRITE|REFERENCE_COUNT|SIZE|SVM_ATOMICS|SVM_FINE_GRAIN_BUFFER|TYPE|USES_SVM_POINTER|USE_HOST_PTR|WRITE_ONLY)|MIGRATE_MEM_OBJECT_(?:CONTENT_UNDEFINED|HOST)|MISALIGNED_SUB_BUFFER_OFFSET|NONE|NON_BLOCKING|OUT_OF_(?:HOST_MEMORY|RESOURCES)|PIPE_(?:MAX_PACKETS|PACKET_SIZE)|PLATFORM_(?:EXTENSIONS|HOST_TIMER_RESOLUTION|NAME|PROFILE|VENDOR|VERSION)|PROFILING_(?:COMMAND_(?:COMPLETE|END|QUEUED|START|SUBMIT)|INFO_NOT_AVAILABLE)|PROGRAM_(?:BINARIES|BINARY_SIZES|BINARY_TYPE(?:_COMPILED_OBJECT|_EXECUTABLE|_LIBRARY|_NONE)?|BUILD_(?:GLOBAL_VARIABLE_TOTAL_SIZE|LOG|OPTIONS|STATUS)|CONTEXT|DEVICES|IL|KERNEL_NAMES|NUM_DEVICES|NUM_KERNELS|REFERENCE_COUNT|SOURCE)|QUEUED|QUEUE_(?:CONTEXT|DEVICE|DEVICE_DEFAULT|ON_DEVICE|ON_DEVICE_DEFAULT|OUT_OF_ORDER_EXEC_MODE_ENABLE|PROFILING_ENABLE|PROPERTIES|REFERENCE_COUNT|SIZE)|RA?|READ_(?:ONLY|WRITE)_CACHE|RG|RGB[Ax]?|RG?x|RUNNING|SAMPLER_(?:ADDRESSING_MODE|CONTEXT|FILTER_MODE|LOD_MAX|LOD_MIN|MIP_FILTER_MODE|NORMALIZED_COORDS|REFERENCE_COUNT)|(?:UN)?SIGNED_INT(?:8|16|32)|SNORM_INT(?:8|16)|SUBMITTED|SUCCESS|UNORM_INT(?:8|16|24|_101010|_101010_2)|UNORM_SHORT_5[56]5|VERSION_(?:1_[012]|2_[01])|s?BGRA|sRGB[Ax]?)\b/,
    alias: "constant"
  },
  // Extracted from cl.h (2.0) and http://streamcomputing.eu/downloads/?opencl_host.lang (opencl-host)
  "function-opencl-host": {
    pattern: /\bcl(?:BuildProgram|CloneKernel|CompileProgram|Create(?:Buffer|CommandQueue(?:WithProperties)?|Context|ContextFromType|Image|Image[23]D|Kernel|KernelsInProgram|Pipe|ProgramWith(?:Binary|BuiltInKernels|IL|Source)|Sampler|SamplerWithProperties|SubBuffer|SubDevices|UserEvent)|Enqueue(?:(?:Barrier|Marker)(?:WithWaitList)?|Copy(?:Buffer(?:Rect|ToImage)?|Image(?:ToBuffer)?)|(?:Fill|Map)(?:Buffer|Image)|MigrateMemObjects|NDRangeKernel|NativeKernel|(?:Read|Write)(?:Buffer(?:Rect)?|Image)|SVM(?:Free|Map|MemFill|Memcpy|MigrateMem|Unmap)|Task|UnmapMemObject|WaitForEvents)|Finish|Flush|Get(?:CommandQueueInfo|ContextInfo|Device(?:AndHostTimer|IDs|Info)|Event(?:Profiling)?Info|ExtensionFunctionAddress(?:ForPlatform)?|HostTimer|ImageInfo|Kernel(?:ArgInfo|Info|SubGroupInfo|WorkGroupInfo)|MemObjectInfo|PipeInfo|Platform(?:IDs|Info)|Program(?:Build)?Info|SamplerInfo|SupportedImageFormats)|LinkProgram|(?:Release|Retain)(?:CommandQueue|Context|Device|Event|Kernel|MemObject|Program|Sampler)|SVM(?:Alloc|Free)|Set(?:CommandQueueProperty|DefaultDeviceCommandQueue|EventCallback|Kernel|Kernel(?:Arg(?:SVMPointer)?|ExecInfo)|MemObjectDestructorCallback|UserEventStatus)|Unload(?:Platform)?Compiler|WaitForEvents)\b/,
    alias: "function"
  }
};
$(m.c, "keyword", ft);
m.cpp && (ft["type-opencl-host-cpp"] = {
  pattern: /\b(?:Buffer|BufferGL|BufferRenderGL|CommandQueue|Context|Device|DeviceCommandQueue|EnqueueArgs|Event|Image(?:[123]D|[12]DArray|1DBuffer|[23]DGL|Format|GL)?|Kernel|KernelFunctor|LocalSpaceArg|Memory|NDRange|Pipe|Platform|Program|SVMAllocator|SVMTrait(?:Atomic|Coarse|Fine|ReadOnly|ReadWrite|WriteOnly)|Sampler|UserEvent)\b/,
  alias: "keyword"
}, $(m.cpp, "keyword", ft));
var ya = m.diff = {
  // Match all kinds of coord lines (prefixed by "+++", "---" or "***").
  // Match "@@ ... @@" coord lines in unified diff.
  // Match coord lines in normal diff (starts with a number).
  coord: /^(?:\*{3}|-{3}|\+{3}|\d).*$|^@@.*@@$/m
  // deleted, inserted, unchanged, diff
}, rt = {
  "deleted-sign": "-",
  "deleted-arrow": "<",
  "inserted-sign": "+",
  "inserted-arrow": ">",
  unchanged: " ",
  diff: "!"
};
for (var pe in rt) {
  var it = pe.split("-")[0];
  ya[pe] = {
    pattern: RegExp("^(?:[" + rt[pe] + `].*$
?)+`, "m"),
    alias: it != pe ? it : pe == "diff" ? "bold" : void 0,
    inside: {
      prefix: {
        pattern: RegExp("^[" + rt[pe] + "]", "mg"),
        greedy: !0,
        alias: it
      }
    }
  };
}
var st = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|opens?|package|permits|private|protected|provides|public|record(?!\s*[()[\]{}%~.,:;?%&|^=<>/*+-])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throws?|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, Re = "(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*", bt = {
  pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
  inside: {
    punctuation: /\./
  }
}, gt = {
  namespace: bt,
  punctuation: /\./
}, jt = {
  pattern: RegExp(`(^|[^\\w.])${Re}[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b`),
  lookbehind: !0,
  inside: gt
};
m.java = {
  "doc-comment": {
    pattern: /\/\*\*(?!\/)[^]*?(?:\*\/|$)/g,
    greedy: !0,
    alias: "comment",
    inside: "javadoc"
  },
  comment: se(),
  "triple-quoted-string": {
    // http://openjdk.java.net/jeps/355#Description
    pattern: /"""[ 	]*\n(?:\\.|[^\\])*?"""/g,
    greedy: !0,
    alias: "string"
  },
  char: {
    pattern: /'(?:\\.|[^\\\n']){1,6}'/g,
    greedy: !0
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\\n"])*"/g,
    lookbehind: !0,
    greedy: !0
  },
  annotation: {
    pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
    lookbehind: !0,
    alias: "punctuation"
  },
  generics: {
    pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
    inside: {
      "class-name": jt,
      keyword: st,
      punctuation: /[().,:<>]/,
      operator: /[?&|]/
    }
  },
  import: [
    {
      pattern: RegExp(`(\\bimport\\s+)${Re}(?:[A-Z]\\w*|\\*)(?=\\s*;)`),
      lookbehind: !0,
      inside: {
        namespace: bt,
        punctuation: /\./,
        operator: /\*/,
        "class-name": /\w+/
      }
    },
    {
      pattern: RegExp(`(\\bimport\\s+static\\s+)${Re}(?:\\w+|\\*)(?=\\s*;)`),
      lookbehind: !0,
      alias: "static",
      inside: {
        namespace: bt,
        static: /\b\w+$/,
        punctuation: /\./,
        operator: /\*/,
        "class-name": /\w+/
      }
    }
  ],
  namespace: {
    pattern: RegExp(
      `(\\b(?:exports|import(?:\\s+static)?|module|opens?|package|provides|requires|to|transitive|uses|with)\\s+)(?!${st.source})[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?`
    ),
    lookbehind: !0,
    inside: {
      punctuation: /\./
    }
  },
  "class-name": [
    jt,
    {
      // variables, parameters, and constructor references
      // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
      pattern: RegExp(`(^|[^\\w.])${Re}[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)`),
      lookbehind: !0,
      inside: gt
    },
    {
      // class names based on keyword
      // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
      pattern: RegExp(`(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)${Re}[A-Z]\\w*\\b`),
      lookbehind: !0,
      inside: gt
    }
  ],
  keyword: st,
  boolean: K,
  function: {
    pattern: /\b\w+(?=\()|(::\s*)[a-z_]\w*/,
    lookbehind: !0
  },
  number: /\b0b[01][01_]*l?\b|\b0x(?:\.[a-f\d_p+-]+|[a-f\d_]+(?:\.[a-f\d_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
  constant: /\b[A-Z][A-Z_\d]+\b/,
  operator: {
    pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[%&|^!=<>/*+-]=?)/m,
    lookbehind: !0
  },
  punctuation: ae
};
$(
  m.less = ie("css", {
    comment: se(),
    atrule: {
      pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        punctuation: /[():]/
      }
    },
    // selectors and mixins are considered the same
    selector: {
      pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        // mixin parameters
        variable: /@+[\w-]+/
      }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
    operator: /[/*+-]/
  }),
  "property",
  {
    variable: [
      // Variable declaration (the colon must be consumed!)
      {
        pattern: /@[\w-]+\s*:/,
        inside: {
          punctuation: /:/
        }
      },
      // Variable usage
      /@@?[\w-]+/
    ],
    "mixin-usage": {
      pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
      lookbehind: !0,
      alias: "function"
    }
  }
);
m.objc = m.objectivec = ie("c", {
  string: {
    pattern: /@?"(?:\\[^]|[^\\\n"])*"/g,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int?|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|==?|>>?=?|<<?=?|&&?|\|\|?|[~^@%?/*]/
});
delete m.objc["class-name"];
var Dn = {
  pattern: /^(..)[^]+(?=.)/,
  lookbehind: !0
}, ot = "(?:([^a-zA-Z\\d\\s{(\\[<=])(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|\\((?:\\\\[\\s\\S]|[^\\\\()]|\\((?:\\\\[\\s\\S]|[^\\\\()])*\\))*\\)|\\{(?:\\\\[\\s\\S]|[^\\\\{}]|\\{(?:\\\\[\\s\\S]|[^\\\\{}])*\\})*\\}|\\[(?:\\\\[\\s\\S]|[^\\\\[\\]]|\\[(?:\\\\[\\s\\S]|[^\\\\[\\]])*\\])*\\]|<(?:\\\\[\\s\\S]|[^\\\\<>]|<(?:\\\\[\\s\\S]|[^\\\\<>])*>)*>)", Wt = `(?:"(?:\\\\.|[^\\\\
"])*"|(?:\\b(?!\\d)\\w+|[^\\s\0-\\x7f]+)[?!]?|\\$.)`, oe = {
  pattern: /((?:^|[^\\])(?:\\\\)*)#\{(?:[^{}]|\{[^}]*\})*\}/,
  lookbehind: !0,
  inside: {
    content: Dn,
    delimiter: {
      pattern: /.+/,
      alias: "punctuation"
    }
  }
};
Dn.inside = m.rb = m.ruby = {
  comment: {
    pattern: /#.*|^=begin\s[^]*?^=end/mg,
    greedy: !0
  },
  "string-literal": [
    {
      pattern: RegExp("%[qQiIwWs]?" + ot, "g"),
      greedy: !0,
      inside: {
        interpolation: oe,
        string: /[^]+/
      }
    },
    {
      pattern: /(["'])(?:#\{[^}]+\}|#(?!\{)|\\[^]|(?!\1)[^\\#\n])*\1/g,
      greedy: !0,
      inside: {
        interpolation: oe,
        string: /[^]+/
      }
    },
    {
      pattern: /<<[-~]?([a-z_]\w*)\n(?:.*\n)*?[ 	]*\1/gi,
      alias: "heredoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
          inside: {
            symbol: /\w+/,
            punctuation: /^<<[-~]?/
          }
        },
        interpolation: oe,
        string: /[^]+/
      }
    },
    {
      pattern: /<<[-~]?'([a-z_]\w*)'\n(?:.*\n)*?[ 	]*\1/gi,
      alias: "heredoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
          inside: {
            symbol: /\w+/,
            punctuation: /^<<[-~]?'|'$/
          }
        },
        string: /[^]+/
      }
    }
  ],
  "command-literal": [
    {
      pattern: RegExp("%x" + ot, "g"),
      greedy: !0,
      inside: {
        interpolation: oe,
        command: {
          pattern: /[^]+/,
          alias: "string"
        }
      }
    },
    {
      pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\[^]|[^\\`#\n])*`/g,
      greedy: !0,
      inside: {
        interpolation: oe,
        command: {
          pattern: /[^]+/,
          alias: "string"
        }
      }
    }
  ],
  "class-name": {
    pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  "regex-literal": [
    {
      pattern: RegExp(`%r${ot}[egimnosux]{0,6}`, "g"),
      greedy: !0,
      inside: {
        interpolation: oe,
        regex: /[^]+/
      }
    },
    {
      pattern: /(^|[^/])\/(?!\/)(?:\[[^\n\]]+\]|\\.|[^\\\n/[])+\/[egimnosux]{0,6}(?=\s*(?:$|[\n,.;})#]))/g,
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: oe,
        regex: /[^]+/
      }
    }
  ],
  variable: /[@$]+(?!\d)\w+(?:[?!]|\b)/,
  symbol: [
    {
      pattern: RegExp("(^|[^:]):" + Wt, "g"),
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: RegExp(`([
{(,][ 	]*)` + Wt + "(?=:(?!:))", "g"),
      lookbehind: !0,
      greedy: !0
    }
  ],
  "method-definition": {
    pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
    lookbehind: !0,
    inside: {
      function: /\b\w+$/,
      keyword: /^self\b/,
      "class-name": /^\w+/,
      punctuation: /\./
    }
  },
  keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|f?or|if|in|include|module|new|next|nil|not|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|[tw]hen|throw|undef|unless|until|while|yield)\b/,
  boolean: K,
  builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
  constant: /\b[A-Z][A-Z\d_]*(?:[?!]|\b)/,
  number: Mn,
  "double-colon": {
    pattern: /::/,
    alias: "punctuation"
  },
  operator: /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[%&|^!=<>/*+-])=?|[?:]/,
  punctuation: /[()[\]{}.,;]/
};
m.sql = {
  comment: /\/\*[^]*?\*\/|(?:--|\/\/|#).*/,
  variable: [
    {
      pattern: /@(["'`])(?:\\[^]|(?!\1)[^\\])+\1/g,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])(["'])(?:\\[^]|(?!\2)[^\\]|\2\2)*\2/g,
    lookbehind: !0,
    greedy: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[^]|[^\\`]|``)*`/g,
    lookbehind: !0,
    greedy: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:avg|count|first|format|last|[lu]case|len|max|mi[dn]|mod|now|round|sum)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:action|add|after|algorithm|alter|analyze|any|apply|asc?|authorization|auto_increment|backup|bdb|begin|berkeleydb|bigint|binary|bit|blob|bool|boolean|break|browse|[br]tree|bulk|by|c?all|cascaded?|case|chain|character|charset|check(?:point)?|close|clustered|coalesce|collate|columns?|comment|commit(?:ted)?|compute|connect|consistent|constraint|contains(?:table)?|continue|convert|create|cross|current(?:_date|_time|_timestamp|_user)?|cursor|cycle|data(?:bases?)?|date(?:time)?|day|dbcc|deallocate|dec|decimal|declare|default|definer|delayed|delete|delimiters?|deny|desc|describe|deterministic|disable|discard|disk|distinct|distinctrow|distributed|do|double|drop|dummy|dump(?:file)?|duplicate|else(?:if)?|enable|enclosed|end|engine|enum|errlvl|errors|escaped?|except|exec(?:ute)?|exists|exit|explain|extended|fetch|fields|file|fillfactor|first|fixed|float|following|for each row|for|force|foreign|freetexttable|freetext|from|full|function|geometry(?:collection)?|global|goto|grant|group|handler|hash|having|holdlock|hour|identity(?:col|_insert)?|if|ignore|import|index|infile|inner|innodb|inout|insert|integer|intersect|interval|into?|invoker|isolation|iterate|join|keys?|kill|language|last|leave|left|level|limit|lineno|lines|linestring|load|local|lock|long(?:blob|text)|loop|matched|match|(?:medium|tiny)(?:blob|int|text)|merge|middleint|minute|mode|modifies|modify|month|multi(?:linestring|point|polygon)|national|natural|n?char|next|no|nonclustered|nullif|numeric|off?|offsets?|on|open(?:datasource|query|rowset)?|optimize|option(?:ally)?|order|out(?:er|file)?|over|partial|partition|percent|pivot|plan|point|polygon|preceding|precision|prepare|prev|primary|print|privileges|proc(?:edure)?|public|purge|quick|raiserror|reads?|real|reconfigure|references|release|rename|repeat(?:able)?|replace|replication|require|resignal|restore|restrict|returning|returns?|revoke|right|rollback|routine|row(?:count|guidcol|s)?|rule|savepoint|save|schema|second|select|serializable|serial|session_user|session|setuser|set|share|show|shutdown|simple|smallint|snapshot|some|soname|sql|start(?:ing)?|statistics|status|striped|system_user|tables?|tablespace|temp(?:orary|table)?|terminated|textsize|text|[tw]hen|timestamp|time|top?|transactions?|tran|trigger|truncate|tsequal|types?|unbounded|uncommitted|undefined|union|unique|unlock|unpivot|unsigned|updatetext|update|usage|user?|using|values?|var(?:binary|char|character|ying)|view|waitfor|warnings|where|while|with(?: rollup|in)?|work|writetext|write|year)\b/i,
  boolean: /\b(?:false|true|null)\b/i,
  number: /\b0x[a-f\d]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[=%~^/*+-]|&&?|\|\|?|!=?|<<|<=?>?|>[>=]?|\b(?:and|between|div|[ir]?like|in|is|not|x?or|regexp|sounds like)\b/i,
  punctuation: /[()[\].,;`]/
};
m.wasm = {
  comment: /\(;[^]*?;\)|;;.*/,
  string: {
    pattern: /"(?:\\[^]|[^\\"])*"/g,
    greedy: !0
  },
  keyword: [
    {
      pattern: /\b(?:align|offset)=/,
      inside: {
        operator: /=/
      }
    },
    {
      pattern: /\b(?:(?:[fi]32|[fi]64)(?:\.(?:abs|a[dn]d|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|x?or))?|memory\.(?:grow|size))\b/,
      inside: {
        punctuation: /\./
      }
    },
    /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/
  ],
  variable: /\$[\w!#$%&'*./:<=>?@\\^`|~+-]+/,
  number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[a-fA-F\d](?:_?[a-fA-F\d])*(?:\.[a-fA-F\d](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[a-fA-F\d](?:_?[\da-fA-D])*)?\b/,
  punctuation: /[()]/
};
var Ee = (e, t) => {
  for (var n = 0; n < t; n++)
    e = e.replace(/<self>/g, `(?:${e})`);
  return e.replace(/<self>/g, "[]");
}, U = (e, t) => e.replace(/<(\d+)>/g, (n, r) => `(?:${t[+r]})`), N = (e, t, n) => RegExp(U(e, t), n), mt = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, _e = m.cpp = ie("c", {
  "class-name": [
    {
      pattern: RegExp(`(\\b(?:class|concept|enum|struct|typename)\\s+)(?!${mt.source})\\w+`),
      lookbehind: !0
    },
    // This is intended to capture the class name of method implementations like:
    //   void foo::bar() const {}
    // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
    // it starts with an uppercase letter. This approximation should give decent results.
    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
    // This will capture the class name before destructors like:
    //   Foo::~Foo() {}
    /\b[a-z_]\w*(?=\s*::\s*~\w+\s*\()/i,
    // This also intends to capture the class name of method implementations but here the class has template
    // parameters, so it can't be a namespace (until C++ adds generic namespaces).
    /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
  ],
  keyword: mt,
  number: {
    pattern: /(?:\b0b[01']+|\b0x(?:[a-f\d']+(?:\.[a-f\d']*)?|\.[a-f\d']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/gi,
    greedy: !0
  },
  operator: /->|--|\+\+|&&|\|\||[?:~]|<=>|>>=?|<<=?|[%&|^!=<>/*+-]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|x?or|x?or_eq)\b/,
  boolean: K
});
$(_e, "string", {
  module: {
    // https://en.cppreference.com/w/cpp/language/modules
    pattern: N(
      `(\\b(?:import|module)\\s+)(?:"(?:\\\\[\\s\\S]|[^\\\\
"])*"|<[^<>
]*>|<0>(?:\\s*:\\s*<0>)?|:\\s*<0>)`,
      [`\\b(?!${mt.source})\\w+(?:\\s*\\.\\s*\\w+)*\\b`],
      "g"
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      string: /^[<"][^]+/,
      operator: /:/,
      punctuation: /\./
    }
  },
  "raw-string": {
    pattern: /R"([^()\\ ]{0,16})\([^]*?\)\1"/g,
    greedy: !0,
    alias: "string"
  }
});
$(_e, "keyword", {
  "generic-function": {
    pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
    inside: {
      function: /^\w+/,
      generic: {
        pattern: /<[^]+/,
        alias: "class-name",
        inside: _e
      }
    }
  }
});
$(_e, "operator", {
  "double-colon": {
    pattern: /::/,
    alias: "punctuation"
  }
});
var Fn = Object.assign({}, _e);
$(_e, "class-name", {
  // the base clause is an optional list of parent classes
  // https://en.cppreference.com/w/cpp/language/class
  "base-clause": {
    pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/g,
    lookbehind: !0,
    greedy: !0,
    inside: Fn
  }
});
$(Fn, "double-colon", {
  // All untokenized words that are not namespaces should be class names
  "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
});
m.go = {
  comment: se(),
  char: {
    pattern: /'(?:\\.|[^\\\n']){0,10}'/g,
    greedy: !0
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\\n"])*"|`[^`]*`/g,
    lookbehind: !0,
    greedy: !0
  },
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|true|iota|nil)\b/,
  function: /\b\w+(?=\()/,
  number: [
    // binary and octal integers
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    // hexadecimal integers and floats
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    // decimal integers and floats
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
  ],
  operator: /--|\+\+|&&|\|\||&\^=?|<-|<<=?|>>=?|[%&|^!=<>/*+-]=?|:=|\.{3}/,
  punctuation: ae,
  builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
};
var lt = {};
m.js = m.javascript = Object.assign(lt, {
  "doc-comment": {
    pattern: /\/\*\*(?!\/)[^]*?(?:\*\/|$)/g,
    greedy: !0,
    alias: "comment",
    inside: "jsdoc"
  },
  comment: se(),
  hashbang: {
    pattern: /^#!.*/g,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[^]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}|(?!\$\{)[^\\`])*`/g,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\\\)*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          [Y]: lt
        }
      },
      string: /[^]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ 	]*)(["'])(?:\\[^]|(?!\2)[^\\\n])*\2(?=\s*:)/mg,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  },
  string: xt(),
  regex: {
    pattern: /((?:^|[^$\w\xa0-\uffff"'`.)\]\s]|\b(?:return|yield))\s*)\/(?:(?:\[(?:\\.|[^\\\n\]])*\]|\\.|[^\\\n/[])+\/[dgimyus]{0,7}|(?:\[(?:\\.|[^\\\n[\]]|\[(?:\\.|[^\\\n[\]]|\[(?:\\.|[^\\\n[\]])*\])*\])*\]|\\.|[^\\\n/[])+\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?!\/\*|[^()[\]{}.,:;?`\n%&|^!=<>/*+-]))/g,
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-flags": /\w+$/,
      "regex-delimiter": /^\/|\/$/,
      "regex-source": {
        pattern: /.+/,
        alias: "language-regex",
        inside: "regex"
      }
    }
  },
  "class-name": [
    {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new)\s+)(?!\d)(?:(?!\s)[$\w.\xa0-\uffff])+/,
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    },
    {
      pattern: /(^|[^$\w\xa0-\uffff]|\s)(?![a-z\d])(?:(?!\s)[$\w\xa0-\uffff])+(?=\.(?:constructor|prototype)\b)/,
      lookbehind: !0
    }
  ],
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^)]*\))*\)|(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+)\s*=>))/,
    alias: "function",
    inside: {
      "maybe-class-name": /^[A-Z].*/
    }
  },
  parameter: [
    /(function(?:\s+(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    /(^|[^$\w\xa0-\uffff]|\s)(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+(?=\s*=>)/,
    /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|continue|default|do|else|finally|for|if|return|switch|throw|try|while|yield|class|const|debugger|delete|enum|extends|function|[gs]et|export|from|import|implements|in|instanceof|interface|let|new|null|of|package|private|protected|public|static|super|this|typeof|undefined|var|void|with)(?![$\w\xa0-\uffff]))(?:(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/
  ].map((e) => ({
    pattern: e,
    lookbehind: !0,
    inside: lt
  })),
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  keyword: [
    {
      pattern: /(^|[^.]|\.{3}\s*)\b(?:as|assert(?=\s*\{)|export|from(?!\s*[^\s"'])|import)\b/,
      alias: "module",
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.{3}\s*)\b(?:await|break|case|catch|continue|default|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
      alias: "control-flow",
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.{3}\s*)\b(?:async(?!\s*[^\s($\w\xa0-\uffff])|class|const|debugger|delete|enum|extends|function|[gs]et(?!\s*[^\s#[$\w\xa0-\uffff])|implements|in|instanceof|interface|let|new|null|of|package|private|protected|public|static|super|this|typeof|undefined|var|void|with)\b/,
      lookbehind: !0
    }
  ],
  boolean: K,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: {
    pattern: /#?(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    inside: {
      "maybe-class-name": /^[A-Z].*/
    }
  },
  number: {
    pattern: /(^|[^$\w])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][a-fA-F\d]+(?:_[a-fA-F\d]+)*n?|\d+(?:_\d+)*n|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?)(?![$\w])/,
    lookbehind: !0
  },
  "literal-property": {
    pattern: /([\n,{][ 	]*)(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+(?=\s*:)/,
    lookbehind: !0,
    alias: "property"
  },
  operator: [
    {
      pattern: /=>/,
      alias: "arrow"
    },
    /--|\+\+|(?:\*\*|&&|\|\||[!=]=|>>>?|<<|[%&|^!=<>/*+-]|\?\?)=?|\.{3}|\?(?!\.)|~|:/
  ],
  "property-access": {
    pattern: /(\.\s*)#?(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+/,
    lookbehind: !0,
    inside: {
      "maybe-class-name": /^[A-Z].*/
    }
  },
  "maybe-class-name": {
    pattern: /(^|[^$\w\xa0-\uffff])[A-Z][$\w\xa0-\uffff]+/,
    lookbehind: !0
  },
  punctuation: /\?\.|[()[\]{}.,:;]/
});
var Un = (e) => (t, n) => {
  for (var r = St(e), c = "", d = [], u = 0, f = Te(t, n), E = 0, w = f.length, _ = 0; E < w; ) {
    var g = f[E++], p = g.length, v = g.type;
    v && v.slice(0, 6) != "ignore" ? (d[u++] = [_, g], c += " ".repeat(p)) : c += t.slice(_, _ + p), _ += p;
  }
  var h = 0, _ = 0, a = (l) => {
    for (var o = 0; h < u && o < l.length; o++) {
      var s = l[o], b = s.content;
      if (Array.isArray(b))
        a(b);
      else {
        for (var S = s.length, I = [], y, x, T = 0, k = _; ([y, x] = d[h], y >= _ && y < _ + S) && (k < y && (I[T++] = c.slice(k, y)), k = y + x.length, I[T++] = x, ++h != u); )
          ;
        _ += S, T && (k < _ && (I[T++] = c.slice(k, _)), b ? s.content = I : (l.splice(o, 1, ...I), o += T - 1));
      }
    }
  }, i = r ? ke(c, r) : [c];
  return a(i), i;
}, Bn = m.js, kt = Bn["template-string"], wa = kt.pattern.source, va = kt.inside.interpolation.pattern, fe = (e, t) => ({
  pattern: RegExp("((?:" + t + ")\\s*)" + wa, "g"),
  lookbehind: !0,
  greedy: !0,
  inside: {
    "template-punctuation": {
      pattern: /^`|`$/,
      alias: "string"
    },
    ["language-" + e]: {
      pattern: /[^]+/,
      inside: {
        interpolation: {
          pattern: va,
          lookbehind: !0,
          alias: "language-javascript",
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            [Y]: "js"
          }
        },
        [ee]: Un(e)
      }
    }
  }
});
Bn["template-string"] = [
  // styled-jsx:
  //   css`a { color: #25F; }`
  // styled-components:
  //   styled.h1`color: red;`
  fe("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),
  // html`<p></p>`
  // div.innerHTML = `<p></p>`
  fe("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),
  // svg`<path fill="#fff" d="M55.37 ..."/>`
  fe("svg", "\\bsvg"),
  // md`# h1`, markdown`## h2`
  fe("markdown", "\\b(?:markdown|md)"),
  // gql`...`, graphql`...`, graphql.experimental`...`
  fe("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),
  // sql`...`
  fe("sql", "\\bsql"),
  // vanilla template string
  kt
];
var Fe = "\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))*\\*/", ht = "\\{(?:[^{}]|\\{(?:[^{}]|\\{[^}]*\\})*\\})*\\}", Yt = U("\\{<0>*\\.{3}(?:[^{}]|<1>)*\\}", [Fe, ht]), Xt = (e) => e && (!e.type || e.type == "plain-text"), Aa = (e, t, n) => {
  for (var r = 0, c = [], d = 0; r < e.length; r++) {
    var u = e[r], f = u.length, E = u.type, w = !E, g, p, v, h, _;
    E && (_ = u.content, E == "tag" ? (v = _[0].length, p = _[2] ? t.substr(n + v, _[1].length) : "", v > 1 ? d && c[d - 1][0] == p && d-- : _[_.length - 1].length < 2 && (c[d++] = [p, 0])) : d && E == "punctuation" ? (g = c[d - 1], _ == "{" ? g[1]++ : g[1] && _ == "}" ? g[1]-- : w = !"}()[]".includes(_)) : w = !0), w && d && !c[d - 1][1] && (v = n, Xt(e[r + 1]) && (f += e[r + 1].length, e.splice(r + 1, 1)), Xt(e[r - 1]) && (v -= e[--r].length, e.splice(r, 1)), h = t.slice(v, n + f), e[r] = new be("plain-text", h, h)), n += f;
  }
  return e;
}, Gn = (e, t) => {
  $(m[t] = e = Qe(e), "regex", {
    tag: {
      pattern: N(
        `</?(?:(?!\\d)[^\\s/=><%]+(?:<0>(?:<0>*(?:[^\\s<>/={*]+(?:<0>*=<0>*(?!\\s)(?:"[^"]*"|'[^']*'|<1>)?|(?=[\\s/>]))|<2>))+)?<0>*/?)?>`,
        [Fe, ht, Yt],
        "g"
      ),
      greedy: !0,
      inside: {
        punctuation: /^<\/?|\/?>$/,
        tag: {
          pattern: /^[^\s/]+/,
          inside: {
            namespace: /^[^:]+:/,
            "class-name": /^[A-Z]\w*(?:\.[A-Z]\w*)*$/
          }
        },
        script: {
          // Allow for two levels of nesting
          pattern: N("(=<0>*)<1>", [Fe, ht]),
          lookbehind: !0,
          alias: t = "language-" + t,
          inside: e
        },
        spread: {
          pattern: RegExp(Yt),
          alias: t,
          inside: e
        },
        "attr-value": {
          pattern: N(`(=<0>*)(?:"[^"]*"|'[^']*')`, [Fe]),
          lookbehind: !0,
          inside: {
            punctuation: /^["']|["']$/
          }
        },
        comment: e.comment,
        "attr-equals": /=/,
        "attr-name": {
          pattern: /\S+/,
          inside: {
            namespace: /^[^:]+:/
          }
        }
      }
    }
  }), e[ee] = (n, r) => Aa(Te(n, r), n, 0);
};
Gn(m.js, "jsx");
m.lua = {
  comment: /^#!.+|--(?:\[(=*)\[[^]*?\]\1\]|.*)/m,
  // \z may be used to skip the following space
  string: {
    pattern: /(["'])(?:(?!\1)[^\\\n]|\\z\s|\\[^z])*\1|\[(=*)\[[^]*?\]\2\]/g,
    greedy: !0
  },
  number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
  keyword: /\b(?:and|break|do|else|elseif|end|false|true|f?or|function|goto|if|in|local|nil|not|repeat|return|then|until|while)\b/,
  function: /(?!\d)\w+(?=\s*(?:[({]))/,
  // Match ".." but don't break "..."
  operator: {
    pattern: /[%&|^#*+-]|\/\/?|<[<=]?|>[>=]?|[=~]=?|(^|[^.])\.\.(?!\.)/,
    lookbehind: !0
  },
  punctuation: /[()[\]{},;]|\.+|:+/
};
var Me = "(?:\\((?:\\\\[\\s\\S]|[^\\\\()])*\\)|\\{(?:\\\\[\\s\\S]|[^\\\\{}])*\\}|\\[(?:\\\\[\\s\\S]|[^\\\\[\\]])*\\]|<(?:\\\\[\\s\\S]|[^\\\\<>])*>)", Qt = "(?![a-zA-Zd])\\s*(?:([^a-zA-Zd\\s{([<])(?:\\\\[^]|(?!\\1)[^\\\\])*\\1|([a-zA-Zd])(?:\\\\[^]|(?!\\2)[^\\\\])*\\2";
m.perl = {
  comment: [
    {
      // POD
      pattern: /(^\s*)=\w[^]*?=cut.*/mg,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(^|[^\\$])#.*/g,
      lookbehind: !0,
      greedy: !0
    }
  ],
  // TODO Could be nice to handle Heredoc too.
  string: {
    pattern: RegExp(
      `\\bq[qwx]?${Qt}|${Me})|("|\`)(?:\\\\[^]|(?!\\3)[^\\\\])*\\3|'(?:\\\\.|[^\\\\
'])*'`,
      "g"
    ),
    greedy: !0
  },
  regex: [
    {
      pattern: RegExp(
        `\\b(?:m|qr)${Qt}|${Me})[msixpodualngc]*`,
        "g"
      ),
      greedy: !0
    },
    // The lookbehinds prevent -s from breaking
    {
      pattern: RegExp(
        `(^|[^-])\\b(?:s|tr|y)(?![a-zA-Zd])\\s*(?:([^a-zA-Zd\\s{([<])(?:\\\\[^]|(?!\\2)[^\\\\])*\\2(?:\\\\[^]|(?!\\2)[^\\\\])*\\2|([a-zA-Zd])(?:\\\\[^]|(?!\\3)[^\\\\])*\\3(?:\\\\[^]|(?!\\3)[^\\\\])*\\3|${Me}\\s*${Me})[msixpodualngcer]*`,
        "g"
      ),
      lookbehind: !0,
      greedy: !0
    },
    // /.../
    // The look-ahead tries to prevent two divisions on
    // the same line from being highlighted as regex.
    // This does not support multi-line regex.
    {
      pattern: /\/(?:\\.|[^\\\n/])*\/[msixpodualngc]*(?=\s*(?:$|[\n,.;})&|*~<>!?^+-]|(?:and|cmp|eq|[gl][et]|ne|not|x|x?or)\b))/g,
      greedy: !0
    }
  ],
  // FIXME Not sure about the handling of ::, ', and #
  variable: /[&*$@%](?:\{\^[A-Z]+\}|\^[A-Z_]|#?(?=\{)|#?(?:(?:::)*'?(?!\d)[$\w]+(?![$\w]))+(?:::)*|\d+)|(?!%=)[$@%][!"#$%&'*,./:;<=>?@()[\]{}||^_`|~+-]/,
  filehandle: {
    // <>, <FOO>, _
    pattern: /<(?![<=])\S*?>|\b_\b/,
    alias: "symbol"
  },
  "v-string": {
    // v1.2, 1.2.3
    pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
    alias: "string"
  },
  function: {
    pattern: /(\bsub[ 	]+)\w+/,
    lookbehind: !0
  },
  keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
  number: /\b(?:0x[a-fA-F\d](?:_?[a-fA-F\d])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
  operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|->|=>|=~|~~|<=>?|!~|--|\+\+|(?:\*\*|\/\/|&&|\|\||<<|>>|[~%&|^!=<>/*+-])=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|[gl][et]|ne|not|x?or)\b/,
  punctuation: /[()[\]{},:;]/
};
var Jt = {
  "format-spec": {
    pattern: /(:)[^(){}:]+(?=\}$)/,
    lookbehind: !0
  },
  "conversion-option": {
    pattern: /![sra](?=[:}]$)/,
    alias: "punctuation"
  }
};
Jt[Y] = m.py = m.python = {
  comment: {
    pattern: /#.*/g,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:fr?|rf)(?:("""|''')[^]*?\1|(["'])(?:\\[^]|(?!\2)[^\\\n])*\2)/gi,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}/,
        lookbehind: !0,
        inside: Jt
      },
      string: /[^]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:br?|rb?|u)?("""|''')[^]*?\1/gi,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:br?|rb?|u)?(["'])(?:\\[^]|(?!\1)[^\\\n])*\1/gi,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ 	]+)(?!\d)\w+(?=\s*\()/,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[ 	]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: "annotation punctuation",
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|de[fl]|elif|else|except|exec|finally|f?or|from|global|i[fns]|import|lambda|match|nonlocal|not|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|ma[px]|memoryview|min|next|object|oct|open|ord|pow|property|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|x?range|zip)\b/,
  boolean: /\b(?:False|True|None)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f\d])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /!=|:=|\*\*=?|\/\/=?|<>|>>|<<|[%=<>/*+-]=?|[&|^~]/,
  punctuation: ae
};
var Ia = Ee("/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", 2), en = {
  pattern: /b?"(?:\\[^]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/g,
  greedy: !0
}, tn = {
  "closure-punctuation": {
    pattern: /^\||\|$/,
    alias: "punctuation"
  }
};
tn[Y] = m.rust = {
  comment: {
    pattern: RegExp("//.*|" + Ia, "g"),
    greedy: !0
  },
  string: en,
  char: {
    pattern: /b?'(?:\\(?:x[0-7][a-fA-F\d]|u\{(?:[a-fA-F\d]_*){1,6}\}|.)|[^\\\n	'])'/g,
    greedy: !0
  },
  attribute: {
    pattern: /#!?\[(?:[^[\]"]|"(?:\\[^]|[^\\"])*")*\]/g,
    greedy: !0,
    alias: "attr-name",
    inside: {
      string: en
    }
  },
  // Closure params should not be confused with bitwise OR |
  "closure-params": {
    pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/g,
    lookbehind: !0,
    greedy: !0,
    inside: tn
  },
  "lifetime-annotation": {
    pattern: /'\w+/,
    alias: "symbol"
  },
  "fragment-specifier": {
    pattern: /(\$\w+:)[a-z]+/,
    lookbehind: !0,
    alias: "punctuation"
  },
  variable: /\$\w+/,
  "function-definition": {
    pattern: /(\bfn\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  "type-definition": {
    pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
    lookbehind: !0,
    alias: "class-name"
  },
  "module-declaration": [
    {
      pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
      lookbehind: !0,
      alias: "namespace"
    },
    {
      pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
      lookbehind: !0,
      alias: "namespace",
      inside: {
        punctuation: /::/
      }
    }
  ],
  // https://github.com/rust-lang/reference/blob/master/src/keywords.md
  // primitives and str
  // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
  keyword: /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield|bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/,
  // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
  // and Rust's naming conventions recommend snake_case anyway.
  // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
  function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
  macro: {
    pattern: /\b\w+!/,
    alias: "property"
  },
  constant: /\b[A-Z_][A-Z_\d]+\b/,
  "class-name": /\b[A-Z]\w*\b/,
  namespace: {
    pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
    inside: {
      punctuation: /::/
    }
  },
  // Hex, oct, bin, dec numbers with visual separators and type suffix
  number: /\b(?:0x[a-fA-F\d](?:_?[a-fA-F\d])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
  boolean: K,
  punctuation: /->|\.\.=|\.{1,3}|::|[()[\]{},:;]/,
  operator: /&&|\|\||=>|>>=?|<<=?|[%&|^!=<>/*+-]=?|[@?]/
};
var nn = m.swift = {
  comment: {
    // Nested comments are supported up to 2 levels
    pattern: /\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//g,
    greedy: !0
  },
  "string-literal": [
    // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
    {
      pattern: /(^|[^"#])(?:"(?:\\(?:\((?:[^()]|\([^)]*\))*\)|[^(])|[^\\\n"])*"|"""(?:\\(?:\((?:[^()]|\([^)]*\))*\)|[^(])|[^\\"]|"(?!""))*""")(?!["#])/g,
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))+(?=\))/,
          lookbehind: !0
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\\($/,
          alias: "punctuation"
        },
        punctuation: /\\(?=\n)/,
        string: /[^]+/
      }
    },
    {
      pattern: /(^|[^"#])(#+)(?:"(?:\\(?:#+\((?:[^()]|\([^)]*\))*\)|[^#])|[^\\\n])*?"|"""(?:\\(?:#+\((?:[^()]|\([^)]*\))*\)|[^#])|[^\\])*?""")\2/g,
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))+(?=\))/,
          lookbehind: !0
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\#+\($/,
          alias: "punctuation"
        },
        string: /[^]+/
      }
    }
  ],
  directive: {
    // directives with conditions
    pattern: /#(?:(?:elseif|if)\b(?:[ 	]*(?:![ 	]*)?(?:\b\w+\b(?:[ 	]*\((?:[^()]|\([^)]*\))*\))?|\((?:[^()]|\([^)]*\))*\))(?:[ 	]*(?:&&|\|\|))?)+|(?:else|endif)\b)/,
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: K,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b(?!\d)\w+(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|[Pp]rotocol|[Ss]elf|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|[gs]et|guard|higherThan|i[fns]|import|indirect|infix|init|inout|internal|isolated|lazy|lef?t|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|public|repeat|required|rethrows|return|right|safe|some|static|struct|subscript|super|switch|throws?|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: K,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f\d_]+(?:\.[a-f\dp_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  operator: /[~?%&|^!=<>/*+-]+|\.[.~?%&|^!=<>/*+-]+/,
  punctuation: /[()[\]{}.,:;\\]/
};
nn["string-literal"].forEach((e) => {
  e.inside.interpolation.inside = nn;
});
m.clike = {
  comment: se(),
  string: xt(),
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: K,
  function: /\b\w+(?=\()/,
  number: Mn,
  operator: /[!=]==|[!=<>]=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: ae
};
var Je = (e) => `\\b(?:${e})\\b`, zn = "bool|char|decimal|double|dynamic|float|object|s?byte|string|u?int|u?long|u?short|var|void", et = "class|enum|interface|record|struct", Hn = "add|alias|and|ascending|async|await|by|descending|from(?!\\s*[^\\s\\w])|[gls]et|global|group|into|init(?=\\s*;)|join|nameof|not|notnull|on|or|orderby|partial|remove|select|unmanaged|value|when|where|with(?=\\s*{)", Tt = "abstract|as|[bc]ase|break|catch|checked|const|continue|default|delegate|do|else|event|explicit|extern|finally|fixed|for|foreach|goto|i[fns]|implicit|internal|lock|namespace|new|null|operator|out|override|params|private|protected|public|readonly|ref|return|sealed|sizeof|stackalloc|static|switch|this|throw|try|typeof|unchecked|unsafe|using|virtual|volatile|while|yield", Zn = Je(et), Ze = RegExp(Je(zn + "|" + et + "|" + Hn + "|" + Tt)), Ra = Je(et + "|" + Hn + "|" + Tt), Sa = Je(zn + "|" + et + "|" + Tt), Ve = Ee("<(?:[^<>;=*/%&|^+-]|<self>)*>", 2), Ue = Ee("\\((?:[^()]|<self>)*\\)", 2), J = "@?\\b(?!\\d)\\w+\\b", qe = U("<0>(?:\\s*<1>)?", [J, Ve]), de = U("(?!<0>)<1>(?:\\s*\\.\\s*<1>)*", [Ra, qe]), Nt = "\\[\\s*(?:,\\s*)*\\]", xa = U("<0>(?:\\s*(?:\\?\\s*)?<1>)*(?:\\s*\\?)?", [de, Nt]), ka = U("[^()[\\],;%&|^=<>/*+-]|<0>|<1>|<2>", [Ve, Ue, Nt]), Ta = U("\\(<0>+(?:,<0>+)+\\)", [ka]), ge = U("(?:<0>|<1>)(?:\\s*(?:\\?\\s*)?<2>)*(?:\\s*\\?)?", [Ta, de, Nt]), W = {
  keyword: Ze,
  punctuation: /[()[\].,:<>?]/
}, Vn = `'(?:\\\\.|[^
'\\\\]|\\\\[Uux][a-fA-F\\d]{1,8})'`, qn = `"(?:\\\\.|[^\\\\
"])*"`, Na = '@"(?:""|\\\\[\\s\\S]|[^\\\\"])*"(?!")', re = m.dotnet = m.cs = m.csharp = ie("clike", {
  string: [
    {
      pattern: N("(^|[^$\\\\])<0>", [Na], "g"),
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: N("(^|[^@$\\\\])<0>", [qn], "g"),
      lookbehind: !0,
      greedy: !0
    }
  ],
  "class-name": [
    {
      // Using static
      // using static System.Math;
      pattern: N("(\\busing\\s+static\\s+)<0>(?=\\s*;)", [de]),
      lookbehind: !0,
      inside: W
    },
    {
      // Using alias (type)
      // using Project = PC.MyCompany.Project;
      pattern: N("(\\busing\\s+<0>\\s*=\\s*)<1>(?=\\s*;)", [J, ge]),
      lookbehind: !0,
      inside: W
    },
    {
      // Using alias (alias)
      // using Project = PC.MyCompany.Project;
      pattern: N("(\\busing\\s+)<0>(?=\\s*=)", [J]),
      lookbehind: !0
    },
    {
      // Type declarations
      // class Foo<A, B>
      // interface Foo<out A, B>
      pattern: N("(\\b<0>\\s+)<1>", [Zn, qe]),
      lookbehind: !0,
      inside: W
    },
    {
      // Single catch exception declaration
      // catch(Foo)
      // (things like catch(Foo e) is covered by variable declaration)
      pattern: N("(\\bcatch\\s*\\(\\s*)<0>", [de]),
      lookbehind: !0,
      inside: W
    },
    {
      // Name of the type parameter of generic constraints
      // where Foo : class
      pattern: N("(\\bwhere\\s+)<0>", [J]),
      lookbehind: !0
    },
    {
      // Casts and checks via as and is.
      // as Foo<A>, is Bar<B>
      // (things like if(a is Foo b) is covered by variable declaration)
      pattern: N("(\\b(?:is(?:\\s+not)?|as)\\s+)<0>", [xa]),
      lookbehind: !0,
      inside: W
    },
    {
      // Variable, field and parameter declaration
      // (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
      pattern: N("\\b<0>(?=\\s+(?!<1>|with\\s*\\{)<2>(?:\\s*[=,:;{)\\]]|\\s+(?:in|when)\\b))", [ge, Sa, J]),
      inside: W
    }
  ],
  keyword: Ze,
  // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
  number: /(?:\b0(?:x[a-f\d_]*[a-f\d]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[+-]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
  operator: /[=-]>|([&|+-])\1|~|\?\?=?|>>=?|<<=?|[%&|^!=<>/*+-]=?/,
  punctuation: /\?\.?|::|[()[\]{}.,:;]/
});
$(re, "number", {
  range: {
    pattern: /\.\./,
    alias: "operator"
  }
});
$(re, "punctuation", {
  "named-parameter": {
    pattern: N("([(,]\\s*)<0>(?=\\s*:)", [J]),
    lookbehind: !0,
    alias: "punctuation"
  }
});
$(re, "class-name", {
  namespace: {
    // namespace Foo.Bar {}
    // using Foo.Bar;
    pattern: N("(\\b(?:namespace|using)\\s+)<0>(?:\\s*\\.\\s*<0>)*(?=\\s*[;{])", [J]),
    lookbehind: !0,
    inside: {
      punctuation: /\./
    }
  },
  "type-expression": {
    // default(Foo), typeof(Foo<Bar>), sizeof(int)
    pattern: N("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<0>)+(?=\\s*\\))", [Ue]),
    lookbehind: !0,
    alias: "class-name",
    inside: W
  },
  "return-type": {
    // Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
    // int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
    // int Foo => 0; int Foo { get; set } = 0;
    pattern: N("<0>(?=\\s+(?:<1>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [ge, de]),
    alias: "class-name",
    inside: W
  },
  "constructor-invocation": {
    // new List<Foo<Bar[]>> { }
    pattern: N("(\\bnew\\s+)<0>(?=\\s*[[({])", [ge]),
    lookbehind: !0,
    alias: "class-name",
    inside: W
  },
  /*'explicit-implementation': {
  	// int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
  	pattern: replace(/\b<0>(?=\.<1>)/, className, methodOrPropertyDeclaration),
  	inside: classNameInside,
  	alias: 'class-name'
  },*/
  "generic-method": {
    // foo<Bar>()
    pattern: N("<0>\\s*<1>(?=\\s*\\()", [J, Ve]),
    inside: {
      function: N("^<0>", [J]),
      generic: {
        pattern: RegExp(Ve),
        alias: "class-name",
        inside: W
      }
    }
  },
  "type-list": {
    // The list of types inherited or of generic constraints
    // class Foo<F> : Bar, IList<FooBar>
    // where F : Bar, IList<int>
    pattern: N(
      "\\b((?:<0>\\s+<1>|record\\s+<1>\\s*<5>|where\\s+<2>)\\s*:\\s*)(?:<3>|<4>|<1>\\s*<5>|<6>)(?:\\s*,\\s*(?:<3>|<4>|<6>))*(?=\\s*(?:where|[{;]|=>|$))",
      [Zn, qe, J, ge, Ze.source, Ue, "\\bnew\\s*\\(\\s*\\)"]
    ),
    lookbehind: !0,
    inside: {
      "record-arguments": {
        pattern: N("(^(?!new\\s*\\()<0>\\s*)<1>", [qe, Ue], "g"),
        lookbehind: !0,
        greedy: !0,
        inside: re
      },
      keyword: Ze,
      "class-name": {
        pattern: RegExp(ge, "g"),
        greedy: !0,
        inside: W
      },
      punctuation: /[(),]/
    }
  },
  preprocessor: {
    pattern: /(^[ 	]*)#.*/m,
    lookbehind: !0,
    alias: "property",
    inside: {
      // highlight preprocessor directives as keywords
      directive: {
        pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
        lookbehind: !0,
        alias: "keyword"
      }
    }
  }
});
var Kn = qn + "|" + Vn, jn = U(`/(?![*/])|//[^
]*
|/\\*(?:[^*]|\\*(?!/))*\\*/|<0>`, [Kn]), Wn = Ee(U(`[^()"'/]|<0>|\\(<self>*\\)`, [jn]), 2), an = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b", Oa = U("<0>(?:\\s*\\(<1>*\\))?", [de, Wn]), Ot = `:[^
}]+`, Yn = Ee(U(`[^()"'/]|<0>|\\(<self>*\\)`, [jn]), 2), rn = U("\\{(?!\\{)(?:(?![}:])<0>)*<1>?\\}", [Yn, Ot]), Xn = Ee(U(`[^()"'/]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<0>|\\(<self>*\\)`, [Kn]), 2), sn = U("\\{(?!\\{)(?:(?![}:])<0>)*<1>?\\}", [Xn, Ot]), on = (e, t) => ({
  interpolation: {
    pattern: N("((?:^|[^{])(?:\\{\\{)*)<0>", [e]),
    lookbehind: !0,
    inside: {
      "format-string": {
        pattern: N("(^\\{(?:(?![}:])<0>)*)<1>(?=\\}$)", [t, Ot]),
        lookbehind: !0,
        inside: {
          punctuation: /^:/
        }
      },
      punctuation: /^\{|\}$/,
      expression: {
        pattern: /[^]+/,
        alias: "language-csharp",
        inside: re
      }
    }
  },
  string: /[^]+/
});
$(re, "class-name", {
  attribute: {
    // Attributes
    // [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
    pattern: N("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<0>\\s*:\\s*)?<1>(?:\\s*,\\s*<1>)*(?=\\s*\\])", [an, Oa], "g"),
    lookbehind: !0,
    greedy: !0,
    inside: {
      target: {
        pattern: N("^<0>(?=\\s*:)", [an]),
        alias: "keyword"
      },
      "attribute-arguments": {
        pattern: N("\\(<0>*\\)", [Wn]),
        inside: re
      },
      "class-name": {
        pattern: RegExp(de),
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /[,:]/
    }
  }
});
$(re, "string", {
  "interpolation-string": [
    {
      pattern: N('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[\\s\\S]|\\{\\{|<0>|[^\\\\{"])*"', [rn], "g"),
      lookbehind: !0,
      greedy: !0,
      inside: on(rn, Yn)
    },
    {
      pattern: N('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<0>|[^\\\\"{])*"', [sn], "g"),
      lookbehind: !0,
      greedy: !0,
      inside: on(sn, Xn)
    }
  ],
  char: {
    pattern: RegExp(Vn, "g"),
    greedy: !0
  }
});
m.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|"(?!""))*"""|"(?:\\.|[^\\\n"])*")(?=\s*[a-z_])/gi,
    greedy: !0,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /("(?!")|""")[^]+(?=\1)/,
        lookbehind: !0,
        inside: "md"
      }
    }
  },
  string: {
    pattern: /"""[^]*?"""|"(?:\\.|[^\\\n"])*"/g,
    greedy: !0
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: K,
  variable: /\$[a-z_]\w*/i,
  directive: {
    pattern: /@[a-z_]\w*/i,
    alias: "function"
  },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\\n"])*")*\))?:)/gi,
    greedy: !0
  },
  "atom-input": {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: "class-name"
  },
  scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
  constant: /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: !0
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))(?!\d)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)(?!\d)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  "definition-query": {
    pattern: /(\bquery\s+)(?!\d)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[&|!=]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  object: /\w+(?=\s*\{)/,
  punctuation: /[()[\]{},:!=]/,
  property: /\w+/,
  [ee](e, t) {
    for (var n = Te(e, t), r = n.filter(({ type: a }) => a && a != "comment" && a != "scalar"), c = r.length, d = 0, u = (a) => {
      for (var i = 0; i < a.length; i++)
        if (d + i == c || r[d + i].type != a[i])
          return !0;
    }, f = (a, i) => {
      for (var l = 1, o = d; o < c; o++) {
        var s = r[o], b = s.content;
        if (s.type == "punctuation") {
          if (a == b)
            l++;
          else if (i == b && !--l)
            return o;
        }
      }
    }; d < c; ) {
      var E = r[d++];
      if (E.type == "keyword" && E.content == "mutation") {
        var w = [];
        if (!u(["definition-mutation", "punctuation"]) && r[d + 1].content == "(") {
          d += 2;
          var g = f("(", ")");
          if (!g) continue;
          for (; d < g; d++) {
            var p = r[d];
            p.type == "variable" && (p.alias = "variable-input", w.push(p.content));
          }
          d = g + 1;
        }
        if (!u(["punctuation", "property-query"]) && r[d].content == "{" && (r[++d].alias = "property-mutation", w[0])) {
          var v = f("{", "}");
          if (v) for (var h = d; h < v; h++) {
            var _ = r[h];
            _.type == "variable" && w.indexOf(_.content) >= 0 && (_.alias = "variable-input");
          }
        }
      }
    }
    return n;
  }
};
m.webmanifest = m.json = {
  property: {
    pattern: /"(?:\\.|[^\\\n"])*"(?=\s*:)/g,
    greedy: !0
  },
  string: {
    pattern: /"(?:\\.|[^\\\n"])*"/g,
    greedy: !0
  },
  comment: se(),
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  operator: /:/,
  punctuation: /[[\]{},]/,
  boolean: K,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
m.makefile = {
  comment: /#(?:\\[^]|[^\\\n])*/,
  string: xt(),
  "builtin-target": {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: "builtin"
  },
  target: {
    pattern: /^(?:[^:=\s]|[ 	]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: "symbol",
    inside: {
      variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  // Directives
  keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|override|private|s?include|undefine|unexport|vpath)\b/,
  function: {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ 	])/,
    lookbehind: !0
  },
  operator: /(?:::|[?:+!])?=|[|@]/,
  punctuation: /[:;(){}]/
};
var Lt = m.scss = ie("css", {
  comment: se(),
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      rule: /@[\w-]+/,
      [Y]: "scss"
    }
  },
  // url, compassified
  url: /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  selector: {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?!\s)[^@;(){}]?(?:[^@;(){}\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      parent: {
        pattern: /&/,
        alias: "important"
      },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
$(Lt, "atrule", {
  keyword: [
    /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
    {
      pattern: /( )(?:from|through)(?= )/,
      lookbehind: !0
    }
  ]
});
$(Lt, "important", {
  // var and interpolated vars
  variable: /\$[-\w]+|#\{\$[-\w]+\}/
});
$(Lt, "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword"
  },
  placeholder: {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  statement: {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  boolean: K,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  operator: {
    pattern: /(\s)(?:[%/*+-]|[!=]=|[<>]=?|and|not|or)(?!\S)/,
    lookbehind: !0
  }
});
var Qn = {
  pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/g,
  lookbehind: !0,
  greedy: !0
}, ye = m.ts = m.typescript = ie("js", {
  "class-name": Qn
});
$(ye, "operator", {
  builtin: /\b(?:Array|Function|Promise|any|boolean|never|number|string|symbol|unknown)\b/
});
ye.keyword.push(
  /\b(?:abstract|declare|is|keyof|readonly|require)\b|\b(?:asserts|infer|interface|module|namespace|type)\b(?!\s*[^\s{_$a-zA-Z\xa0-\uffff])|\btype(?=\s*\*)/
);
delete ye.parameter;
delete ye["literal-property"];
var Ct = Qn.inside = Object.assign({}, ye);
delete Ct["class-name"];
delete Ct["maybe-class-name"];
$(ye, "function", {
  decorator: {
    pattern: /@[$\w\xa0-\uffff]+/,
    inside: {
      at: {
        pattern: /^@/,
        alias: "operator"
      },
      function: /.+/
    }
  },
  "generic-function": {
    // e.g. foo<T extends "bar" | "baz">( ...
    pattern: /#?(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+\s*<(?:[^<>=]|=[^<]|=?<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/g,
    greedy: !0,
    inside: {
      generic: {
        pattern: /<[^]+/,
        // everything after the first <
        alias: "class-name",
        inside: Ct
      },
      function: /\S+/
    }
  }
});
Gn(m.ts, "tsx");
var _t = m.tsx.tag, Jn = "(?:^|(";
try {
  RegExp("(?<=)"), Jn += "?<=";
} catch {
  _t.lookbehind = !0;
}
_t.pattern = RegExp(Jn + `[^\\w$])|(?=</))${_t.pattern.source}`, "g");
var Et = /[*&][^\s[\]{},]+/, yt = /!(?:<[\w%#;/?:@&=$,.!~*'()[\]+-]+>|(?:[a-zA-Z\d-]*!)?[\w%#;/?:@&=$.~*'()+-]+)?/, wt = `(?:${yt.source}(?:[ 	]+${Et.source})?|${Et.source}(?:[ 	]+${yt.source})?)`, La = U(
  "(?:[^\\s\0-\\x08\\x0e-\\x1f!\"#%&'*,:>?@[\\]{}`|\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff-]|[?:-]<0>)(?:[ 	]*(?:(?![#:])<0>|:<0>))*",
  ["[^\\s\0-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"]
), ln = `"(?:\\\\.|[^\\\\
"])*"|'(?:\\\\.|[^\\\\
'])*'`, Ae = (e, t) => N(
  `([:,[{-]\\s*(?:\\s<0>[ 	]+)?)<1>(?=[ 	]*(?:$|,|\\]|\\}|(?:
\\s*)?#))`,
  [wt, e],
  t
);
m.yml = m.yaml = {
  scalar: {
    pattern: N(`([:-]\\s*(?:\\s<0>[ 	]+)?[|>])[ 	]*(?:(
[ 	]+)\\S.*(?:\\2.+)*)`, [wt]),
    lookbehind: !0,
    alias: "string"
  },
  comment: /#.*/,
  key: {
    pattern: N(
      `((?:^|[:,[{
?-])[ 	]*(?:<0>[ 	]+)?)<1>(?=\\s*:\\s)`,
      [wt, "(?:" + La + "|" + ln + ")"],
      "g"
    ),
    lookbehind: !0,
    greedy: !0,
    alias: "atrule"
  },
  directive: {
    pattern: /(^[ 	]*)%.+/m,
    lookbehind: !0,
    alias: "important"
  },
  datetime: {
    pattern: Ae("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d\\d:\\d\\d(?:\\.\\d*)?(?:[ 	]*(?:Z|[+-]\\d\\d?(?::\\d\\d)?))?|\\d{4}-\\d\\d-\\d\\d|\\d\\d?:\\d\\d(?::\\d\\d(?:\\.\\d*)?)?", "m"),
    lookbehind: !0,
    alias: "number"
  },
  boolean: {
    pattern: Ae("false|true", "im"),
    lookbehind: !0,
    alias: "important"
  },
  null: {
    pattern: Ae("null|~", "im"),
    lookbehind: !0,
    alias: "important"
  },
  string: {
    pattern: Ae(ln, "mg"),
    lookbehind: !0,
    greedy: !0
  },
  number: {
    pattern: Ae("[+-]?(?:0x[a-f\\d]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "im"),
    lookbehind: !0
  },
  tag: yt,
  important: Et,
  punctuation: /---|[:[\]{},|>?-]|\.{3}/
};
var cn = {
  pattern: /\\[\\()[\]{}^$+*?|.]/,
  alias: "escape"
}, Be = /\\(?:x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|u\{[a-fA-F\d]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, Ca = {
  pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
  alias: "class-name"
}, Ma = {
  pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
  alias: "class-name"
}, dn = "(?:[^\\\\-]|" + Be.source + ")", Pa = RegExp(dn + "-" + dn), un = {
  pattern: /(<|')[^<>']+(?=[>']$)/,
  lookbehind: !0,
  alias: "variable"
};
m.regex = {
  "char-class": {
    pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:\\[^]|[^\\\]])*\]/,
    lookbehind: !0,
    inside: {
      "char-class-punctuation": {
        pattern: /^.|.$/g,
        greedy: !0,
        alias: "punctuation"
      },
      "char-class-negation": {
        pattern: /^\^/,
        alias: "operator"
      },
      range: {
        pattern: Pa,
        inside: {
          escape: Be,
          "range-punctuation": {
            pattern: /-/,
            alias: "operator"
          }
        }
      },
      "special-escape": cn,
      "char-set": Ma,
      escape: Be
    }
  },
  "special-escape": cn,
  "char-set": Ca,
  backreference: [
    {
      // a backreference which is not an octal escape
      pattern: /\\(?![123][0-7]{2})[1-9]/,
      alias: "keyword"
    },
    {
      pattern: /\\k<[^<>']+>/,
      alias: "keyword",
      inside: {
        "group-name": un
      }
    }
  ],
  anchor: {
    pattern: /[$^]|\\[ABbGZz]/,
    alias: "function"
  },
  escape: Be,
  group: [
    {
      // https://docs.oracle.com/javase/10/docs/api/java/util/regex/Pattern.html
      // https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference?view=netframework-4.7.2#grouping-constructs
      // (), (?<name>), (?'name'), (?>), (?:), (?=), (?!), (?<=), (?<!), (?is-m), (?i-m:)
      pattern: /(\()\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[!=]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?)/,
      lookbehind: !0,
      inside: {
        "group-name": un
      }
    },
    {
      pattern: /[()]/,
      alias: "punctuation"
    }
  ],
  quantifier: {
    pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
    alias: "number"
  },
  alternation: {
    pattern: /\|/,
    alias: "keyword"
  }
};
var pn = /\/\*[^]*?\*\/|\/\/.*|#(?!\[).*/, fn = [
  {
    pattern: /\b(?:false|true)\b/i,
    alias: "boolean"
  },
  {
    pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/gi,
    lookbehind: !0,
    greedy: !0
  },
  {
    pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/gi,
    lookbehind: !0,
    greedy: !0
  },
  /\b(?:null)\b/i,
  /\b[A-Z_][A-Z\d_]*\b(?!\s*\()/
], bn = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[a-f\d]+(?:_[a-f\d]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, gn = /<?=>|\?\?=?|\.{3}|\??->|[!=]==|::|--|\+\+|&&|\*\*=?|\|\||>>|<<|[?~]|[.%&|^!=<>/*+-]=?/, vt = {
  pattern: /\{\$(?:[^{}]|\{(?:[^{}]|\{[^}]+\})*\})*\}|(^|[^\\{])\$+(?:\w+(?:\[[^\n[\]]*\]|->\w+)?)/,
  lookbehind: !0
}, mn = [
  {
    pattern: /<<<'([^']+)'\n(?:.*\n)*?\1;/g,
    alias: "nowdoc-string",
    greedy: !0,
    inside: {
      delimiter: {
        pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
        alias: "symbol",
        inside: {
          punctuation: /^<<<'?|[';]$/
        }
      }
    }
  },
  {
    pattern: /<<<(?:"([^"]+)"\n(?:.*\n)*?\1;|([a-z_]\w*)\n(?:.*\n)*?\2;)/gi,
    greedy: !0,
    alias: "heredoc-string",
    inside: {
      delimiter: {
        pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
        alias: "symbol",
        inside: {
          punctuation: /^<<<"?|[";]$/
        }
      },
      interpolation: vt
    }
  },
  {
    pattern: /`(?:\\[^]|[^\\`])*`/g,
    alias: "backtick-quoted-string",
    greedy: !0
  },
  {
    pattern: /'(?:\\[^]|[^\\'])*'/g,
    greedy: !0,
    alias: "single-quoted-string"
  },
  {
    pattern: /"(?:\\[^]|[^\\"])*"/g,
    greedy: !0,
    alias: "double-quoted-string",
    inside: {
      interpolation: vt
    }
  }
], hn = vt.inside = {
  delimiter: {
    pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
    alias: "important"
  },
  "doc-comment": {
    pattern: /\/\*\*(?!\/)[^]*?\*\//g,
    greedy: !0,
    alias: "comment",
    inside: "phpdoc"
  },
  comment: pn,
  string: mn,
  attribute: {
    pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*')+\](?=\s*[a-z$#])/img,
    greedy: !0,
    inside: {
      "attribute-content": {
        pattern: /^(..)[^]+(?=.)/,
        lookbehind: !0,
        // inside can appear subset of php
        inside: {
          comment: pn,
          string: mn,
          "attribute-class-name": [
            {
              pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/gi,
              lookbehind: !0,
              greedy: !0,
              alias: "class-name"
            },
            {
              pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/gi,
              lookbehind: !0,
              greedy: !0,
              alias: "class-name class-name-fully-qualified",
              inside: {
                punctuation: /\\/
              }
            }
          ],
          constant: fn,
          number: bn,
          operator: gn,
          punctuation: ae
        }
      },
      delimiter: {
        pattern: /.+/,
        alias: "punctuation"
      }
    }
  },
  variable: /\$+(?:\w+|(?=\{))/,
  package: {
    pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
    lookbehind: !0,
    inside: {
      punctuation: /\\/
    }
  },
  "class-name-definition": {
    pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
    lookbehind: !0,
    alias: "class-name"
  },
  "function-definition": {
    pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
    lookbehind: !0,
    alias: "function"
  },
  keyword: [
    {
      pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "type-casting"
    },
    {
      pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "type-hint"
    },
    {
      pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "return-type"
    },
    {
      pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/gi,
      alias: "type-declaration",
      greedy: !0
    },
    {
      pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "type-declaration"
    },
    {
      pattern: /\b(?:parent|self|static)(?=\s*::)/gi,
      greedy: !0,
      alias: "static-context"
    },
    {
      // yield from
      pattern: /(\byield\s+)from\b/gi,
      lookbehind: !0
    },
    // `class` is always a keyword unlike other keywords
    /\bclass\b/i,
    {
      // https://www.php.net/manual/en/reserved.keywords.php
      //
      // keywords cannot be preceded by "->"
      // the complex lookbehind means `(?<!(?:->|::)\s*)`
      pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|[fx]?or|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|yield|__halt_compiler)\b/i,
      lookbehind: !0
    }
  ],
  "argument-name": {
    pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
    lookbehind: !0
  },
  "class-name": [
    {
      pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/gi,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/gi,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/gi,
      greedy: !0
    },
    {
      pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "class-name-fully-qualified",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/gi,
      greedy: !0,
      alias: "class-name-fully-qualified",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "class-name-fully-qualified",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /\b[a-z_]\w*(?=\s*\$)/gi,
      greedy: !0,
      alias: "type-declaration"
    },
    {
      pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/gi,
      greedy: !0,
      alias: "class-name-fully-qualified type-declaration",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /\b[a-z_]\w*(?=\s*::)/gi,
      greedy: !0,
      alias: "static-context"
    },
    {
      pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/gi,
      greedy: !0,
      alias: "class-name-fully-qualified static-context",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "type-hint"
    },
    {
      pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "class-name-fully-qualified type-hint",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/gi,
      alias: "return-type",
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "class-name-fully-qualified return-type",
      inside: {
        punctuation: /\\/
      }
    }
  ],
  constant: fn,
  function: {
    pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
    lookbehind: !0,
    inside: {
      punctuation: /\\/
    }
  },
  property: {
    pattern: /(->\s*)\w+/,
    lookbehind: !0
  },
  number: bn,
  operator: gn,
  punctuation: ae
}, $a = Un("html");
m.php = {
  php: {
    pattern: /<\?(?:[^"'/#]|\/(?![*/])|(["'])(?:\\[^]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^\n?]|\?(?!>))*(?=$|\?>|\n)|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/,
    alias: "language-php",
    inside: hn
  },
  [ee]: (e, t) => e.includes("<?") ? $a(e, t) : ke(e, hn)
};
var Da = [`(?:\\\\.|[^\\\\
]|
(?!
))`], Pe = (e) => N(`((?:^|[^\\\\])(?:\\\\\\\\)*)(?:${e})`, Da, "g"), At = /(?:\\.|``(?:[^\n`]|`(?!`))+``|`[^\n`]+`|[^\\\n|`])+/, _n = U(`\\|?<0>(?:\\|<0>)+\\|?(?:
|(?![\\s\\S]))`, [At.source]), Fa = `\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?
`, me = m.md = m.markdown = Qe(m.html);
$(me, "prolog", {
  "front-matter-block": {
    pattern: /(^(?:\s*\n)?)---(?!.)[^]*?\n---(?!.)/g,
    lookbehind: !0,
    greedy: !0,
    inside: {
      punctuation: /^---|---$/,
      "front-matter": {
        pattern: /\S(?:[^]*\S)?/,
        alias: "language-yaml",
        inside: "yaml"
      }
    }
  },
  blockquote: {
    // > ...
    pattern: /^>(?:[ 	]*>)*/m,
    alias: "punctuation"
  },
  table: {
    pattern: RegExp("^" + _n + Fa + "(?:" + _n + ")*", "m"),
    inside: {
      "table-header-row": {
        pattern: /^.+/,
        inside: {
          "table-header": {
            pattern: At,
            alias: "important",
            inside: me
          },
          punctuation: /\|/
        }
      },
      "table-data-rows": {
        pattern: /(.+\n)[^]+/,
        lookbehind: !0,
        inside: {
          "table-data": {
            pattern: At,
            inside: me
          },
          punctuation: /\|/
        }
      },
      "table-line": {
        pattern: /.+/,
        inside: {
          punctuation: /\S+/
        }
      }
    }
  },
  code: [
    {
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /(^[ 	]*\n)(?:    |	).+(?:\n(?:    |	).+)*/m,
      lookbehind: !0,
      alias: "keyword"
    },
    {
      // ```optional language
      // code block
      // ```
      pattern: /^(```+)[^`][^]*?^\1`*$/mg,
      greedy: !0,
      inside: {
        punctuation: /^`+|`+$/,
        "code-language": /^.+/,
        "code-block": /(?!^)[^]+(?=\n)/,
        [ee](e, t) {
          var n = Te(e, t), r;
          return n[5] && (r = (/[a-z][\w-]*/i.exec(
            n[1].content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp")
          ) || [""])[0].toLowerCase(), n[3].alias = "language-" + r, (t = m[r]) && (n[3].content = ke(n[3].content, t))), n;
        }
      }
    }
  ],
  title: [
    {
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*\n(?:==+|--+)(?=[ 	]*$)/m,
      alias: "important",
      inside: {
        punctuation: /=+$|-+$/
      }
    },
    {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#.+/m,
      lookbehind: !0,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }
  ],
  hr: {
    // ***
    // ---
    // * * *
    // -----------
    pattern: /(^\s*)([*-])(?:[ 	]*\2){2,}(?=\s*$)/m,
    lookbehind: !0,
    alias: "punctuation"
  },
  list: {
    // * item
    // + item
    // - item
    // 1. item
    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[ 	].)/m,
    lookbehind: !0,
    alias: "punctuation"
  },
  "url-reference": {
    // [id]: http://example.com "Optional title"
    // [id]: http://example.com 'Optional title'
    // [id]: http://example.com (Optional title)
    // [id]: <http://example.com> "Optional title"
    pattern: /!?\[[^\]]+\]:[ 	]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[ 	]+(?:"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      variable: {
        pattern: /^(!?\[)[^\]]+/,
        lookbehind: !0
      },
      string: /(?:"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'|\((?:\\.|[^)\\])*\))$/,
      punctuation: /^[[\]!:]|<|>/
    },
    alias: "url"
  },
  bold: {
    // **strong**
    // __strong__
    // allow one nested instance of italic text using the same delimiter
    pattern: Pe("\\b__(?:(?!_)<0>|_(?:(?!_)<0>)+_)+__\\b|\\*\\*(?:(?!\\*)<0>|\\*(?:(?!\\*)<0>)+\\*)+\\*\\*"),
    lookbehind: !0,
    greedy: !0,
    inside: {
      content: {
        pattern: /(^..)[^]+(?=..)/,
        lookbehind: !0,
        inside: {}
        // see below
      },
      punctuation: /../
    }
  },
  italic: {
    // *em*
    // _em_
    // allow one nested instance of bold text using the same delimiter
    pattern: Pe("\\b_(?:(?!_)<0>|__(?:(?!_)<0>)+__)+_\\b|\\*(?:(?!\\*)<0>|\\*\\*(?:(?!\\*)<0>)+\\*\\*)+\\*"),
    lookbehind: !0,
    greedy: !0,
    inside: {
      content: {
        pattern: /(?!^)[^]+(?=.)/,
        inside: {}
        // see below
      },
      punctuation: /./
    }
  },
  strike: {
    // ~~strike through~~
    // ~strike~
    // eslint-disable-next-line regexp/strict
    pattern: Pe("(~~?)(?:(?!~)<0>)+\\2"),
    lookbehind: !0,
    greedy: !0,
    inside: {
      punctuation: /^~~?|~~?$/,
      content: {
        pattern: /[^]+/,
        inside: {}
        // see below
      }
    }
  },
  "code-snippet": {
    // `code`
    // ``code``
    pattern: /(^|[^\\`])(?:``[^\n`]+(?:`[^\n`]+)*``(?!`)|`[^\n`]+`(?!`))/g,
    lookbehind: !0,
    greedy: !0,
    alias: "code keyword"
  },
  url: {
    // [example](http://example.com "Optional title")
    // [example][id]
    // [example] [id]
    pattern: Pe('!?\\[(?:(?!\\])<0>)+\\](?:\\([^\\s)]+(?:[ 	]+"(?:\\\\.|[^\\\\"])*")?\\)|[ 	]?\\[(?:(?!\\])<0>)+\\])'),
    lookbehind: !0,
    greedy: !0,
    inside: {
      operator: /^!/,
      content: {
        pattern: /(^\[)[^\]]+(?=\])/,
        lookbehind: !0,
        inside: {}
        // see below
      },
      variable: {
        pattern: /(^\][ 	]?\[)[^\]]+(?=\]$)/,
        lookbehind: !0
      },
      url: {
        pattern: /(^\]\()[^\s)]+/,
        lookbehind: !0
      },
      string: {
        pattern: /(^[ 	]+)"(?:\\.|[^\\"])*"(?=\)$)/,
        lookbehind: !0
      },
      "markup-bracket": me["markup-bracket"]
    }
  }
});
["url", "bold", "italic", "strike"].forEach((e) => {
  ["url", "bold", "italic", "strike", "code-snippet", "markup-bracket"].forEach((t) => {
    e != t && (me[e].inside.content.inside[t] = me[t]);
  });
});
const Ua = (e, t, ...n) => {
  var X;
  let r, c, d = [], u, f = "", E, w = !1, g = !1, p = !0, v = [], h, _ = 0;
  const a = Ga(), i = a.firstChild, l = i.children, o = l[0], s = o.firstChild, b = { language: "text", value: f }, S = new Set(n), I = {}, y = (A) => {
    if (Object.assign(b, A), f = A.value ?? f, r = b.language, !m[r]) throw Error(`Language '${r}' has no grammar.`);
    h = !!b.readOnly, a.style.tabSize = b.tabSize || 2, s.inputMode = h ? "none" : "", s.setAttribute("aria-readonly", h), k(), T(), (c != (c = m[r]) || f != s.value) && (V(), s.value = f, s.selectionEnd = 0, x());
  }, x = () => {
    v = ke(f = s.value, c), H("tokenize", v, r, f);
    let A = Tn(v).split(`
`), R = 0, L = _, q = _ = A.length;
    for (; A[R] == d[R] && R < q; ) ++R;
    for (; q && A[--q] == d[--L]; ) ;
    if (R == q && R == L) l[R + 1].innerHTML = A[R] + `
`;
    else {
      let Q = L < R ? L : R - 1, j = Q, we = "";
      for (; j < q; ) we += `<div class=pce-line aria-hidden=true>${A[++j]}
</div>`;
      for (j = q < R ? q : R - 1; j < L; j++) l[R + 1].remove();
      for (we && l[Q + 1].insertAdjacentHTML("afterend", we), j = Q + 1; j < _; ) l[++j].setAttribute("data-line", j);
      a.style.setProperty(
        "--number-width",
        Math.ceil(Math.log10(_ + 1)) + ".001ch"
      );
    }
    H("update", f), B(!0), p && setTimeout(setTimeout, 0, () => p = !0), d = A, p = !1;
  }, T = (A) => {
    (A || S).forEach((R) => {
      typeof R == "object" ? (R.update(D, b), A && S.add(R)) : (R(D, b), A || S.delete(R));
    });
  }, k = ([A, R] = O()) => {
    a.className = `prism-code-editor language-${r}${b.lineNumbers == !1 ? "" : " show-line-numbers"} pce-${b.wordWrap ? "" : "no"}wrap${b.rtl ? " pce-rtl" : ""} pce-${A < R ? "has" : "no"}-selection${g ? " pce-focus" : ""}${h ? " pce-readonly" : ""}`;
  }, O = () => [
    s.selectionStart,
    s.selectionEnd,
    s.selectionDirection
  ], P = {
    Escape() {
      s.blur();
    }
  }, C = {}, V = () => Ge && !g && z(
    D,
    "focus",
    (A) => {
      let R = A.relatedTarget;
      R ? R.focus() : s.blur();
    },
    { once: !0 }
  ), H = (A, ...R) => {
    var L, q;
    (L = I[A]) == null || L.forEach((Q) => Q.apply(D, R)), (q = b["on" + A[0].toUpperCase() + A.slice(1)]) == null || q.apply(D, R);
  }, B = (A) => {
    if (A || p) {
      const R = O(), L = l[E = ta(f, 0, R[R[2] < "f" ? 0 : 1])];
      L != u && (u == null || u.classList.remove("active-line"), L.classList.add("active-line"), u = L), k(R), H("selectionChange", R, f);
    }
  }, D = {
    scrollContainer: a,
    wrapper: i,
    overlays: o,
    textarea: s,
    get activeLine() {
      return u;
    },
    get activeLineNumber() {
      return E;
    },
    get value() {
      return f;
    },
    options: b,
    get focused() {
      return g;
    },
    get removed() {
      return w;
    },
    get tokens() {
      return v;
    },
    inputCommandMap: C,
    keyCommandMap: P,
    extensions: {},
    setOptions: y,
    update: x,
    getSelection: O,
    setSelection(A, R = A, L) {
      V(), s.setSelectionRange(A, R, L), B(!0);
    },
    addExtensions(...A) {
      T(A);
    },
    addListener(A, R) {
      (I[A] || (I[A] = /* @__PURE__ */ new Set())).add(R);
    },
    removeListener(A, R) {
      var L;
      (L = I[A]) == null || L.delete(R);
    },
    remove() {
      a.remove(), w = !0;
    }
  };
  return z(D, "keydown", (A) => {
    var R;
    (R = P[A.key]) != null && R.call(P, A, O(), f) && G(A);
  }), z(D, "beforeinput", (A) => {
    var R;
    (h || A.inputType == "insertText" && ((R = C[A.data]) != null && R.call(C, A, O(), f))) && G(A);
  }), z(D, "input", x), z(D, "blur", () => {
    xe = null, g = !1, k();
  }), z(D, "focus", () => {
    xe = B, g = !0, k();
  }), z(D, "selectionchange", (A) => {
    B(), G(A);
  }), (X = Ba(e)) == null || X.append(a), t && y(t), D;
}, En = /* @__PURE__ */ document.createElement("div"), tt = (e) => {
  En.innerHTML = e;
  const t = En.firstChild;
  return () => t.cloneNode(!0);
}, z = (e, t, n, r) => e.textarea.addEventListener(t, n, r), Ba = (e) => typeof e == "string" ? document.querySelector(e) : e, ea = navigator.userAgent, Ke = /Mac|iPhone|iPod|iPad/i.test(navigator.platform), je = /Chrome\//.test(ea), Ge = !je && /AppleWebKit\//.test(ea), ta = (e, t = 0, n = 1 / 0) => {
  let r = 1;
  for (; (t = e.indexOf(`
`, t) + 1) && t <= n; r++) ;
  return r;
}, ct = {}, Ga = /* @__PURE__ */ tt(
  "<div><div class=pce-wrapper><div class=pce-overlays><textarea spellcheck=false autocapitalize=off autocomplete=off>"
), G = (e) => {
  e.preventDefault(), e.stopImmediatePropagation();
};
let xe;
document.addEventListener("selectionchange", () => xe == null ? void 0 : xe());
const za = (e, t, n = 0) => {
  const r = e.scrollContainer.style, c = document.documentElement.style;
  r.scrollPaddingBlock = c.scrollPaddingBlock = `${n}px ${je && !t.textContent ? t.offsetHeight : 0}px`, t.scrollIntoView({ block: "nearest" }), r.scrollPaddingBlock = c.scrollPaddingBlock = "";
}, We = (e, t) => t ? e.lastIndexOf(`
`, t - 1) + 1 : 0, nt = (e, t) => (t = e.indexOf(`
`, t)) + 1 ? t : e.length, Ha = (e, t, n) => (e.addListener(t, n), () => e.removeListener(t, n)), Za = (e, t) => parseFloat(getComputedStyle(e)[t]);
let he;
const Ie = (e) => e.replace(/[$+?|.^*()[\]{}\\]/g, "\\$&"), It = (e, t) => e.slice(We(e, t), t), te = (e, t, n = t) => [
  e.slice(t = We(e, t), n = nt(e, n)).split(`
`),
  t,
  n
], Ye = (e, t, n = 0, r = n, c = e.getSelection()[0]) => {
  var g;
  const d = e.value, u = e.wrapper.children[ta(d, 0, c)], f = document.createTreeWalker(u, 5);
  let E = f.lastChild(), w = nt(d, c) + 1 - c - E.length;
  for (; -w <= r && (E = f.previousNode()); )
    if (!E.lastChild && (w -= E.length || 0, w <= n)) {
      for (; E != u; E = E.parentNode)
        if ((g = E.matches) != null && g.call(E, t)) return E;
    }
}, dt = (e, t) => {
  var n;
  return ((n = Ye(e, '[class*="language-"]', 0, 0, t)) == null ? void 0 : n.className.match(
    /language-(\S*)/
  )[1]) || e.options.language;
}, Z = (e, t, n, r, c, d) => {
  if (e.options.readOnly) return;
  he = e.getSelection(), r ?? (r = n);
  let u = e.textarea, f = e.value, E = je && !f[r ?? he[1]] && /\n$/.test(t) && /^$|\n$/.test(f), w;
  e.focused || u.focus(), n != null && u.setSelectionRange(n, r), c != null && (w = Ha(e, "update", () => {
    u.setSelectionRange(
      c,
      d ?? c,
      he[2]
    ), w();
  })), Ge || u.dispatchEvent(new InputEvent("beforeinput", { data: t })), je || Ge ? (E && (u.selectionEnd--, t = t.slice(0, -1)), Ge && (t += `
`), document.execCommand(
    t ? "insertHTML" : "delete",
    !1,
    t.replace(/&/g, "&amp;").replace(/</g, "&lt;")
  ), E && u.selectionStart++) : document.execCommand(t ? "insertText" : "delete", !1, t), he = 0;
}, Se = (e) => e.altKey + e.ctrlKey * 2 + e.metaKey * 4 + e.shiftKey * 8;
let Rt = !1;
const yn = navigator.clipboard, ce = Ke ? 4 : 2, Va = (e) => Rt = e, le = (e) => e.search(/\S|$/), qa = (e = ['""', "''", "``", "()", "[]", "{}"], t = /([^$\w'"`]["'`]|.[[({])[.,:;\])}>\s]|.[[({]`/s) => (n, r) => {
  let c;
  const { keyCommandMap: d, inputCommandMap: u, getSelection: f, scrollContainer: E } = n, w = ({ insertSpaces: a = !0, tabSize: i } = r) => [a ? " " : "	", a ? i || 2 : 1], g = () => {
    var a;
    return !r.readOnly && !((a = n.extensions.cursor) != null && a.scrollIntoView());
  }, p = ([a, i], [l, o], s, b) => (a < i || !b && t.test((s[i - 1] || " ") + l + (s[i] || " "))) && !Z(n, l + s.slice(a, i) + o, null, null, a + 1, i + 1), v = ([a, i], l, o) => a == i && o[i] == l && !n.setSelection(a + 1), h = (a, i, l, o, s, b) => {
    let S = i.join(`
`);
    if (S != a.join(`
`)) {
      const I = a.length - 1, y = i[I], x = a[I], T = x.length - y.length, k = i[0].length - a[0].length, O = l + le((k < 0 ? i : a)[0]), P = o - x.length + le(T > 0 ? y : x), C = l - o + S.length + T, V = O > s ? s : Math.max(O, s + k), H = b + l - o + S.length;
      Z(
        n,
        S,
        l,
        o,
        V,
        b < P ? H + T : Math.max(P + C, H)
      );
    }
  }, _ = (a, i, l, o, s, b, S, I) => {
    h(
      i,
      i.map(
        a ? (y) => y.slice(le(y) ? I - le(y) % I : 0) : (y) => y && S.repeat(I - le(y) % I) + y
      ),
      l,
      o,
      s,
      b
    );
  };
  u["<"] = (a, i, l) => p(i, "<>", l, !0), e.forEach(([a, i]) => {
    const l = a == i;
    u[a] = (o, s, b) => (l && v(s, i, b) || p(s, a + i, b)) && g(), l || (u[i] = (o, s, b) => v(s, i, b) && g());
  }), u[">"] = (a, i, l) => {
    var s, b;
    const o = (b = (s = ct[dt(n)]) == null ? void 0 : s.autoCloseTags) == null ? void 0 : b.call(s, i, l, n);
    o && (Z(n, ">" + o, null, null, i[0] + 1), G(a));
  }, d.Tab = (a, [i, l], o) => {
    if (Rt || r.readOnly || Se(a) & 6) return;
    const [s, b] = w(r), S = a.shiftKey, [I, y, x] = te(o, i, l);
    return i < l || S ? _(S, I, y, x, i, l, s, b) : Z(n, s.repeat(b - (i - y) % b)), g();
  }, d.Enter = (a, i, l) => {
    var s, b, S;
    const o = Se(a) & 7;
    if (!o || o == ce) {
      o && (i[0] = i[1] = te(l, i[1])[2]);
      const [I, y] = w(), [x, T] = i, k = (s = ct[dt(n)]) == null ? void 0 : s.autoIndent, O = Math.floor(le(It(l, x)) / y) * y, P = (b = k == null ? void 0 : k[0]) != null && b.call(k, i, l, n) ? y : 0, C = (S = k == null ? void 0 : k[1]) == null ? void 0 : S.call(k, i, l, n), V = `
` + I.repeat(O + P) + (C ? `
` + I.repeat(O) : "");
      if (V[1] || l[T])
        return Z(n, V, x, T, x + O + P + 1), g();
    }
  }, d.Backspace = (a, [i, l], o) => {
    if (i == l) {
      const s = It(o, i), b = r.tabSize || 2, S = e.includes(o.slice(i - 1, i + 1)), I = /[^ ]/.test(s) ? 0 : (s.length - 1) % b + 1;
      if (S || I > 1)
        return Z(n, "", i - (S ? 1 : I), i + S), g();
    }
  };
  for (let a = 0; a < 2; a++)
    d[a ? "ArrowDown" : "ArrowUp"] = (i, [l, o], s) => {
      const b = Se(i);
      if (b == 1) {
        const S = a ? l : We(s, l) - 1, I = a ? s.indexOf(`
`, o) + 1 : o;
        if (S > -1 && I > 0) {
          const [y, x, T] = te(s, S, I), k = y[a ? "pop" : "shift"](), O = (k.length + 1) * (a ? 1 : -1);
          y[a ? "unshift" : "push"](k), Z(n, y.join(`
`), x, T, l + O, o + O);
        }
        return g();
      } else if (b == 9) {
        const [S, I, y] = te(s, l, o), x = S.join(`
`), T = a ? x.length + 1 : 0;
        return Z(n, x + `
` + x, I, y, l + T, o + T), g();
      } else if (b == 2 && !Ke)
        return E.scrollBy(0, Za(E, "lineHeight") * (a ? 1 : -1)), !0;
    };
  z(n, "keydown", (a) => {
    var S;
    const i = Se(a), l = a.keyCode, [o, s, b] = f();
    if (i == ce && (l == 221 || l == 219))
      _(l == 219, ...te(n.value, o, s), o, s, ...w()), g(), G(a);
    else if (i == (Ke ? 10 : 2) && l == 77)
      Va(!Rt), G(a);
    else if (l == 191 && i == ce || l == 65 && i == 9) {
      const I = n.value, y = i == 9, x = y ? o : We(I, o), T = ct[dt(n, x)] || {}, { line: k, block: O } = ((S = T.getComments) == null ? void 0 : S.call(T, n, x, I)) || T.comments || {}, [P, C, V] = te(I, o, s), H = P.length - 1;
      if (y) {
        if (O) {
          const [B, D] = O, X = I.slice(o, s), A = I.slice(0, o).search(Ie(B) + " ?$"), R = RegExp("^ ?" + Ie(D)).test(I.slice(s));
          A + 1 && R ? Z(
            n,
            X,
            A,
            s + +(I[s] == " ") + D.length,
            A,
            A + s - o
          ) : Z(
            n,
            `${B} ${X} ${D}`,
            o,
            s,
            o + B.length + 1,
            s + B.length + 1
          ), g(), G(a);
        }
      } else if (k) {
        const B = Ie(k), D = RegExp(`^\\s*(${B} ?|$)`), X = RegExp(B + " ?"), A = !/\S/.test(I.slice(C, V)), R = P.map(
          P.every((L) => D.test(L)) && !A ? (L) => L.replace(X, "") : (L) => A || /\S/.test(L) ? L.replace(/^\s*/, `$&${k} `) : L
        );
        h(P, R, C, V, o, s), g(), G(a);
      } else if (O) {
        const [B, D] = O, X = le(P[0]), A = P[0].startsWith(B, X) && P[H].endsWith(D), R = P.slice();
        R[0] = P[0].replace(
          A ? RegExp(Ie(B) + " ?") : /(?=\S)|$/,
          A ? "" : B + " "
        );
        let L = R[0].length - P[0].length;
        R[H] = A ? R[H].replace(RegExp(`( ?${Ie(D)})?$`), "") : R[H] + " " + D;
        let q = R.join(`
`), Q = X + C, j = Q > o ? o : Math.max(o + L, Q), we = Q > s - (o != s) ? s : Math.min(Math.max(Q, s + L), C + q.length);
        Z(n, q, C, V, j, Math.max(j, we)), g(), G(a);
      }
    } else if (i == 8 + ce && l == 75) {
      const I = n.value, [y, x, T] = te(I, o, s), k = b > "f" ? s - T + y.pop().length : o - x, O = nt(I, T + 1) - T - 1;
      Z(
        n,
        "",
        x - !!x,
        T + !x,
        x + Math.min(k, O)
      ), g(), G(a);
    }
  }), ["copy", "cut", "paste"].forEach(
    (a) => z(n, a, (i) => {
      const [l, o] = f();
      if (l == o && yn) {
        const [[s], b, S] = te(n.value, l, o);
        a == "paste" ? i.clipboardData.getData("text/plain") == c && (Z(n, c + `
`, b, b, l + c.length + 1), g(), G(i)) : (yn.writeText(c = s), a == "cut" && (Z(n, "", b, S + 1), g()), G(i));
      }
    })
  );
}, Ka = (e = 999) => {
  let t = 0, n, r, c = !1, d, u, f, E, w, g;
  const p = [], v = (a) => {
    a >= e && (a--, p.shift()), p.splice(t = a, e, [n.value, g(), g()]);
  }, h = (a) => {
    var i;
    p[a] && (w.value = p[a][0], w.setSelectionRange(...p[a][a < t ? 2 : 1]), n.update(), (i = n.extensions.cursor) == null || i.scrollIntoView(), t = a, r = !1);
  }, _ = (a, i) => {
    a.extensions.history = _, n = a, g = a.getSelection, w || v(0), w = a.textarea, a.addListener("selectionChange", () => {
      r = c, c = !1;
    }), z(a, "beforeinput", (l) => {
      let o = l.data, s = l.inputType, b = l.timeStamp;
      /history/.test(s) ? (h(t + (s[7] == "U" ? -1 : 1)), G(l)) : (E = r && (d == s || b - f < 99 && s.slice(-4) == "Drop") && !he && (o != " " || u == o)) || (p[t][2] = he || g()), c = !0, u = o, f = b, d = s;
    }), z(a, "input", () => v(t + !E)), z(a, "keydown", (l) => {
      if (!i.readOnly) {
        const o = Se(l), s = l.keyCode, b = o == ce && s == 90, S = o == ce + 8 && s == 90 || !Ke && o == ce && s == 89;
        b ? (h(t - 1), G(l)) : S && (h(t + 1), G(l));
      }
    });
  };
  return _.clear = () => {
    v(0), r = !1;
  }, _.has = (a) => t + a in p, _.go = (a) => h(t + a), _;
}, ja = tt(
  "<div style=position:absolute;top:0;opacity:0;padding:inherit> <span><span></span> "
), Wa = () => {
  let e, t = " ", n = " ";
  const r = ja(), [c, d] = r.childNodes, [u, f] = d.childNodes, E = (p) => {
    let { value: v, activeLine: h } = e, _ = p[p[2] < "f" ? 0 : 1], a = It(v, _), i = v.slice(_, nt(v, _));
    !a && !i && (i = " "), t != a && (c.data = t = a), n != i && (f.data = n = i), r.parentNode != h && h.prepend(r);
  }, w = () => za(e, u), g = (p) => {
    p.addListener("selectionChange", E), e = p, p.extensions.cursor = g, z(p, "input", (v) => {
      /history/.test(v.inputType) && w();
    }), p.activeLine && E(p.getSelection());
  };
  return g.getPosition = () => {
    const p = u.getBoundingClientRect(), v = e.overlays.getBoundingClientRect();
    return {
      top: p.y - v.y,
      bottom: v.bottom - p.bottom,
      left: p.x - v.x,
      right: v.right - p.x,
      height: p.height
    };
  }, g.scrollIntoView = w, g.element = u, g;
}, Ya = tt(
  "<div class=guide-indents style=left:var(--padding-left);bottom:auto;right:auto> "
), Xa = tt(
  "<div style=width:1px;position:absolute;background:var(--bg-guide-indent)>"
), Qa = () => {
  let e, t = 0, n, r = -1, c;
  const d = [], u = [], f = Ya(), E = [], w = (h) => {
    n = [];
    const _ = p(h.split(`
`)), a = _.length;
    for (let i = 0, l = [], o = _[0]; o; i++) {
      const s = (d[i] || (d[i] = Xa())).style, [b, S, I] = o, y = u[i];
      o = _[i + 1], b != (y == null ? void 0 : y[0]) && (s.top = b + "00%"), S != (y == null ? void 0 : y[1]) && (s.height = S + "00%"), I != (y == null ? void 0 : y[2]) && (s.left = I * 100 + "%");
      const x = l[0] != b && (o == null ? void 0 : o[0]) != b, T = l[0] + l[1] != b + S && (o == null ? void 0 : o[0]) + (o == null ? void 0 : o[1]) != b + S;
      for (let k = -x, O = S + T; k < O; k++)
        n[k + b] = i;
      l = u[i] = _[i];
    }
    for (let i = t; i > a; ) d[--i].remove();
    f.append(...d.slice(t, t = a));
  }, g = () => {
    const h = n[c.activeLineNumber - 1] ?? -1;
    h != r && (r > -1 && (d[r].className = ""), h > -1 && (d[h].className = "active")), r = h;
  }, p = (h) => {
    const _ = h.length, a = [], i = [];
    for (let l = 0, o = -1, s = 0, b = 0; ; s++) {
      const S = s == _, I = S ? 0 : E[s] = v(h[s]);
      if (I < 0)
        o < 0 && (o = s);
      else {
        for (let y = I; y < l; y++)
          a[y][1] = (o < 0 || y == I && !S ? s : o) - a[y][0];
        for (let y = l; y < I; )
          i[b++] = a[y] = [
            o < 0 || y > l ? s : o,
            0,
            y++ * e
          ];
        o = -1, l = I;
      }
      if (S) break;
    }
    return E.length = _, i;
  }, v = (h) => {
    let _ = h.search(/\S/), a = 0;
    if (_ < 0) return _;
    for (let i = 0; i < _; )
      a += h[i++] == "	" ? e - a % e : 1;
    return Math.ceil(a / e);
  };
  return {
    lines: f.children,
    indentLevels: E,
    update(h, _) {
      c || (c = h, h.extensions.indentGuides = this, h.overlays.append(f), h.addListener("update", w), h.addListener("selectionChange", g)), f.style.display = _.wordWrap ? "none" : "", e != (e = _.tabSize || 2) && (w(h.value), g());
    }
  };
}, Ja = () => (e) => {
  let t, n, r, c = -1, d = [], u = () => {
    n || (n = e.extensions.matchBrackets);
    let [w, g] = e.getSelection(), p = w == g && e.focused && n && f(g) || -1;
    if (p != c) {
      if (E(), p + 1) {
        let v = t[r[p]], h = t[p];
        d = [v, h].map(
          (_) => Ye(e, ".punctuation", 0, -1, _[1])
        ), d[0] != d[1] && v[1] + v[3].length == h[1] && (d[0].textContent += d[1].textContent, d[1].textContent = "", d[1] = d[0]), E(!0);
      } else d = [];
      c = p;
    }
  }, f = (w) => {
    var g;
    ({ brackets: t, pairs: r } = n);
    for (let p = 0, v; v = t[++p]; )
      if (!v[4] && v[5] >= w && ((g = t[r[p]]) == null ? void 0 : g[1]) <= w)
        return p;
  }, E = (w) => d.forEach((g) => g.classList.toggle("active-bracket", !!w));
  z(e, "focus", u), z(e, "blur", u), e.addListener("selectionChange", u), e.addListener("update", () => {
    E(), c = -1;
  });
}, er = (e = !0, t = "([{", n = ")]}") => {
  let r, c;
  const d = [], u = (p) => {
    p.extensions.matchBrackets = u, p.addListener("tokenize", w), e && p.tokens[0] ? p.update() : w(p.tokens);
  }, f = u.brackets = [], E = u.pairs = [], w = (p) => {
    if (E.length = f.length = c = r = 0, g(p, 0), e)
      for (let v = 0, h; h = f[v]; ) {
        let _ = h[0].alias;
        h[0].alias = (_ ? _ + " " : "") + `bracket-${v++ in E ? "level-" + h[2] % 12 : "error"}`;
      }
  }, g = (p, v) => {
    let h, _ = 0;
    for (; h = p[_++]; ) {
      let a = h.length;
      if (typeof h != "string") {
        let i = h.content;
        if (Array.isArray(i))
          g(i, v);
        else if ((h.alias || h.type) == "punctuation") {
          let l = wn(i, t, a - 1), o = l || wn(i, n, a - 1);
          if (o) {
            if (f[r] = [h, v, 0, i, !!l, v + a], l) d[c++] = [r, l];
            else
              for (let s = c; s; ) {
                let [b, S] = d[--s];
                o == S && (E[E[r] = b] = r, f[r][2] = f[b][2] = c = s, s = 0);
              }
            r++;
          }
        }
      }
      v += a;
    }
  };
  return u;
}, wn = (e, t, n) => t.indexOf(e[0]) + 1 || n && t.indexOf(e[n]) + 1, tr = "xml,rss,atom,jsx,tsx,xquery,actionscript".split(","), nr = /^(?:area|base|w?br|col|embed|hr|img|input|link|meta|source|track)$/i, ar = (e) => {
  let t = [], n, r = [], c, d, u = [], f = (w, g, p) => {
    n = p, r.length = t.length = c = d = 0, E(w, g, 0);
  }, E = (w, g, p) => {
    let v = tr.includes(g), h = 0, _ = w.length;
    for (; h < _; ) {
      const a = w[h++], i = a.content, l = a.length;
      if (Array.isArray(i))
        if (a.type == "tag" && n[p] == "<") {
          const o = i[0].length, s = i[2] ? n.substr(p + o, i[1].length) : "", b = i[i.length - 1].length < 2 && (v || !nr.test(s));
          if (i[2] && v && E(i, g, p), b)
            if (o > 1)
              for (let S = d; S; )
                s == u[--S][1] && (t[t[c] = u[d = S][0]] = c, S = 0);
            else
              u[d++] = [c, s];
          r[c++] = [
            a,
            p,
            p + l,
            s,
            o > 1,
            b
          ];
        } else {
          let o = a.alias || a.type;
          E(
            i,
            o.slice(0, 9) == "language-" ? o.slice(9) : g,
            p
          );
        }
      p += l;
    }
  };
  return e.addListener("tokenize", f), f(e.tokens, e.options.language, e.value), {
    tags: r,
    pairs: t
  };
}, rr = (e, t) => {
  for (let n = 0, r = t.length; n < r; n++) if (t[n][1] <= e && t[n][2] >= e) return n;
}, ir = () => (e) => {
  var t;
  let n, r;
  const { tags: c, pairs: d } = (t = e.extensions).matchTags || (t.matchTags = ar(e)), u = (f) => [n, r].forEach((E) => {
    E && E.classList.toggle("active-tagname", !f);
  });
  e.addListener("selectionChange", ([f, E]) => {
    let w, g, p;
    f == E && e.focused && (p = rr(f, c), p + 1 && (p = d[p], p + 1 && (w = Ye(e, ".tag>.tag")) && (g = Ye(e, ".tag>.tag", 2, 0, c[p][1])))), n != w && (u(!0), n = w, r = g, u());
  });
}, sr = "_wrap_1kjur_1", or = "_blockInfoEditable_1kjur_34", vn = {
  wrap: sr,
  blockInfoEditable: or
}, $e = [
  { value: "plaintext", label: "plaintext" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "sql", label: "SQL" },
  { value: "json", label: "JSON" },
  { value: "yaml", label: "YAML" },
  { value: "markdown", label: "Markdown" },
  { value: "bash", label: "Bash" },
  { value: "php", label: "PHP" }
];
function lr(e) {
  const t = oa(), n = $t(null);
  ca(() => la(ur.name, e == null ? void 0 : e.editor), [e == null ? void 0 : e.editor]);
  const r = $t(null), c = e.node.attrs.code || e.node.textContent || "", d = (u) => {
    const f = { ...u };
    return f.language && !$e.some((E) => E.value === f.language) && (f.language = "plaintext", e.updateAttributes({
      language: "plaintext"
    })), f;
  };
  return Dt(() => {
    if (n.current) {
      const u = d(e.node.attrs);
      r.current = Ua(n.current, {
        readOnly: !e.editor.isEditable,
        language: u.language || "plaintext",
        tabSize: u.tabSize ?? 2,
        lineNumbers: u.lineNumbers ?? !0,
        wordWrap: u.wordWrap ?? !1,
        value: c,
        rtl: !1,
        onUpdate(f) {
          e.updateAttributes({ code: f });
        }
      }), r.current.addExtensions(
        er(),
        ir(),
        Qa(),
        Ja(),
        Wa(),
        qa(),
        Ka()
      ), e.node.attrs.shouldFocus && setTimeout(() => {
        var f;
        (f = r.current) == null || f.textarea.focus(), e.updateAttributes({
          shouldFocus: !1
        });
      }, 0);
    }
    return () => {
      var u, f;
      (u = r.current) != null && u.remove && ((f = r.current) == null || f.remove());
    };
  }, [n]), Dt(() => {
    var u, f;
    if ((u = r.current) != null && u.setOptions) {
      const E = d(e.node.attrs);
      (f = r.current) == null || f.setOptions(E);
    }
  }, [r, e.node.attrs]), /* @__PURE__ */ M(ra, { className: Pt(vn.wrap, "render-wrapper"), children: /* @__PURE__ */ M(
    "div",
    {
      ref: n,
      className: Pt(
        "richtext-node-container richtext-hover-shadow richtext-select-outline richtext-node-code-block",
        {
          [vn.blockInfoEditable]: !t
        }
      ),
      children: /* @__PURE__ */ M("div", { className: "richtext-code-block-toolbar", children: /* @__PURE__ */ M("div", { children: /* @__PURE__ */ Xe(
        pa,
        {
          defaultValue: e.node.attrs.language,
          disabled: !t,
          onValueChange: (u) => {
            e.updateAttributes({
              language: u
            });
          },
          children: [
            /* @__PURE__ */ M(In, { className: "richtext-h-7 richtext-w-[160px] richtext-border-none richtext-text-sm richtext-outline-none hover:richtext-bg-[#5a5d5e4f]", children: /* @__PURE__ */ M(fa, { placeholder: "Select language" }) }),
            /* @__PURE__ */ M(
              xn,
              {
                className: "richtext-border-[#3a3f4b] richtext-bg-[#21252b] richtext-text-[#ccc]",
                onCloseAutoFocus: (u) => u.preventDefault(),
                children: $e == null ? void 0 : $e.map((u) => /* @__PURE__ */ M(kn, { value: u.value, children: u.label }, u.value))
              }
            )
          ]
        }
      ) }) })
    }
  ) });
}
const cr = /^`{3}([a-z]+)?\s$/, dr = /^~{3}([a-z]+)?\s$/, ur = /* @__PURE__ */ na.create({
  name: "codeBlock",
  group: "block",
  atom: !0,
  content: "text*",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      languages: [],
      button: ({ editor: t, t: n }) => ({
        component: ma,
        componentProps: {
          action: () => t.commands.setCodeBlock({}),
          isActive: () => t.isActive("codeBlock") || !1,
          disabled: !1,
          icon: "Code2",
          tooltip: n("editor.codeblock.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      code: {
        default: "",
        parseHTML: (e) => e.textContent || ""
      },
      language: {
        default: "plaintext"
      },
      lineNumbers: {
        default: !0
      },
      wordWrap: {
        default: !0
      },
      tabSize: {
        default: 2
      },
      shouldFocus: {
        default: !0,
        parseHTML: () => !1,
        renderHTML: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full",
        getAttrs: (e) => ({
          code: e.textContent || ""
        })
      },
      {
        tag: "pre code",
        preserveWhitespace: "full",
        getAttrs: (e) => ({
          code: e.textContent || ""
        })
      }
    ];
  },
  renderHTML({ HTMLAttributes: e, node: t }) {
    var r;
    const n = t.attrs.code || ((r = t.content.firstChild) == null ? void 0 : r.text) || "";
    return ["pre", aa(this.options.HTMLAttributes, e), ["code", {}, n]];
  },
  addNodeView() {
    return ia(lr);
  },
  addCommands() {
    return {
      setCodeBlock: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: {
          ...e,
          shouldFocus: !0
        }
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.setCodeBlock({})
    };
  },
  addInputRules() {
    return [
      Mt({
        find: cr,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      }),
      Mt({
        find: dr,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      })
    ];
  }
});
export {
  ur as CodeBlock,
  cr as backtickInputRegex,
  dr as tildeInputRegex
};
