import { E as A, a as O } from "./index-DI9T3iLd.js";
import { a as P } from "./dom-dataset-Di3tIRrR.js";
import { S as B } from "./index-CbQQFj2T.js";
import $ from "tippy.js";
import { jsx as g, jsxs as N } from "react/jsx-runtime";
import { forwardRef as z, useState as v, useRef as H, useImperativeHandle as D, useEffect as M, Fragment as T } from "react";
import { d as q, k as K, N as U, O as G } from "./RichTextEditor-D4neHvBX.js";
import { u as F, m as h } from "./index-p_4uATkU.js";
function j(i, d) {
  var k, L;
  const [t, n] = v(0), [e, a] = v(0), r = H(null), { t: s } = F(), u = H([]);
  D(d, () => ({
    onKeyDown: f
  })), M(() => {
    if (!r.current)
      return;
    const l = e * 1e3 + t, c = u.current[l];
    c && c.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [t, e]);
  function f({ event: l }) {
    return l.key === "ArrowUp" ? (w(), !0) : l.key === "ArrowDown" ? (b(), !0) : l.key === "Enter" ? (R(), !0) : !1;
  }
  function w() {
    var m;
    if (i.items.length === 0)
      return !1;
    let l = t - 1, c = e;
    l < 0 && (c = e - 1, l = ((m = i.items[c]) == null ? void 0 : m.commands.length) - 1 || 0), c < 0 && (c = i.items.length - 1, l = i.items[c].commands.length - 1), n(l), a(c);
  }
  function b() {
    if (i.items.length === 0)
      return !1;
    const l = i.items[e].commands;
    let c = t + 1, m = e;
    l.length - 1 < c && (c = 0, m = e + 1), i.items.length - 1 < m && (m = 0), n(c), a(m);
  }
  function R() {
    if (i.items.length === 0 || e === -1 || t === -1)
      return !1;
    C(e, t);
  }
  function C(l, c) {
    const m = i.items[l].commands[c];
    i.command(m);
  }
  function E(l, c) {
    C(l, c);
  }
  function I(l, c, m) {
    u.current[l * 1e3 + c] = m;
  }
  return /* @__PURE__ */ g(
    "div",
    {
      className: "richtext-mb-8 richtext-max-h-[min(80vh,24rem)] richtext-flex-wrap richtext-overflow-auto richtext-rounded-lg !richtext-border !richtext-border-neutral-200 !richtext-bg-white richtext-p-1 !richtext-text-black richtext-shadow-sm dark:!richtext-border-neutral-800 dark:!richtext-bg-black",
      ref: r,
      children: (k = i == null ? void 0 : i.items) != null && k.length ? /* @__PURE__ */ g("div", { className: "richtext-grid richtext-min-w-48 richtext-grid-cols-1 richtext-gap-0.5", children: (L = i == null ? void 0 : i.items) == null ? void 0 : L.map((l, c) => /* @__PURE__ */ N(T, { children: [
        /* @__PURE__ */ g("div", { className: "richtext-col-[1/-1] richtext-mx-2 richtext-mt-2 richtext-select-none richtext-text-[0.65rem] richtext-font-semibold richtext-uppercase richtext-tracking-wider !richtext-text-neutral-500 first:richtext-mt-0.5", children: l.title }),
        l.commands.map((m, y) => /* @__PURE__ */ N(
          "button",
          {
            onClick: () => E(c, y),
            ref: (S) => I(c, y, S),
            className: q("richtext-flex richtext-items-center richtext-gap-3 richtext-px-2 richtext-py-1.5 richtext-text-sm !richtext-text-neutral-800 dark:!richtext-text-neutral-200 richtext-text-left richtext-w-full richtext-rounded-sm richtext-outline-none richtext-transition-colors !richtext-bg-transparent hover:!richtext-bg-accent ", {
              "slash-command-active": e === c && t === y
            }),
            children: [
              m.iconUrl && /* @__PURE__ */ g(
                "img",
                {
                  alt: "",
                  className: "richtext-size-6",
                  src: m.iconUrl
                }
              ),
              m.iconName && /* @__PURE__ */ g(
                K,
                {
                  className: "!richtext-mr-1 !richtext-text-lg",
                  name: m.iconName
                }
              ),
              m.label
            ]
          },
          `command-${y}`
        ))
      ] }, `slash-${l.title}`)) }) : /* @__PURE__ */ g("div", { className: "richtext-p-3", children: /* @__PURE__ */ g("span", { className: "richtext-text-xs richtext-text-gray-800 dark:richtext-text-gray-100", children: s("editor.slash.empty") }) })
    }
  );
}
const V = z(j);
function W(i, d) {
  const t = [
    {
      name: "format",
      title: h.t("editor.slash.format"),
      commands: []
    },
    {
      name: "insert",
      title: h.t("editor.slash.insert"),
      commands: []
    }
  ];
  return i.forEach((n) => {
    n.name.toLowerCase() === "heading" && n.options.levels.forEach((e) => {
      t[0].commands.push({
        name: `heading${e}`,
        //@ts-expect-error
        label: h.t(`editor.heading.h${e}.tooltip`),
        aliases: [`h${e}`, "bt", `bt${e}`],
        iconName: `Heading${e}`,
        action: ({ editor: a, range: r }) => {
          a.chain().focus().deleteRange(r).setHeading({ level: e }).run();
        }
      });
    }), n.name.toLowerCase() === "bulletlist" && t[0].commands.push({
      name: "bulletList",
      label: h.t("editor.bulletlist.tooltip"),
      aliases: ["ul", "yxlb"],
      iconName: "List",
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).toggleBulletList().run();
      }
    }), n.name.toLowerCase() === "orderedlist" && t[0].commands.push({
      name: "numberedList",
      label: h.t("editor.orderedlist.tooltip"),
      aliases: ["ol", "yxlb"],
      iconName: "ListOrdered",
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).toggleOrderedList().run();
      }
    }), n.name.toLowerCase() === "tasklist" && t[0].commands.push({
      name: "taskList",
      label: h.t("editor.tasklist.tooltip"),
      iconName: "ListTodo",
      description: "Task list with todo items",
      aliases: ["todo"],
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).toggleTaskList().run();
      }
    }), n.name.toLowerCase() === "blockquote" && t[0].commands.push({
      name: "blockquote",
      label: h.t("editor.blockquote.tooltip"),
      description: "插入引入格式",
      aliases: ["yr"],
      iconName: "TextQuote",
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).setBlockquote().run();
      }
    }), n.name.toLowerCase() === "codeblock" && t[0].commands.push({
      name: "codeBlock",
      label: h.t("editor.codeblock.tooltip"),
      iconName: "Code2",
      description: "Code block with syntax highlighting",
      shouldBeHidden: (e) => e.isActive("columns"),
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).setCodeBlock().run();
      }
    }), n.name.toLowerCase() === U.name && t[1].commands.push({
      name: "image",
      label: h.t("editor.image.tooltip"),
      iconName: "ImageUp",
      description: "Insert a image",
      aliases: ["image", "tp", "tupian"],
      shouldBeHidden: (e) => e.isActive("columns"),
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).run(), G.setOpen(e.id, !0);
      }
    }), n.name.toLowerCase() === "table" && t[1].commands.push({
      name: "table",
      label: h.t("editor.table.tooltip"),
      iconName: "Table",
      description: "Insert a table",
      aliases: ["table", "bg", "biaoge", "biao"],
      shouldBeHidden: (e) => e.isActive("columns"),
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).insertTable({ rows: 3, cols: 3, withHeaderRow: !1 }).run();
      }
    }), n.name.toLowerCase() === "horizontalrule" && t[1].commands.push({
      name: "horizontalRule",
      label: h.t("editor.horizontalrule.tooltip"),
      iconName: "Minus",
      description: "Insert a horizontal divider",
      aliases: ["hr", "fgx", "fg"],
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).setHorizontalRule().run();
      }
    }), n.name.toLowerCase() === "columns" && t[1].commands.push({
      name: "columns",
      label: h.t("editor.columns.tooltip"),
      iconName: "Columns2",
      description: "Add two column content",
      action: ({ editor: e }) => {
        e.chain().focus().insertColumns({ cols: 2 }).run();
      }
    }), d == null || d(n, t);
  }), t;
}
const x = "slashCommand";
let o;
const te = /* @__PURE__ */ A.create({
  name: x,
  priority: 200,
  onCreate() {
    o = $("body", {
      interactive: !0,
      trigger: "manual",
      placement: "bottom-start",
      theme: "slash-command",
      maxWidth: "16rem",
      offset: [16, 8],
      popperOptions: {
        strategy: "fixed",
        modifiers: [
          {
            name: "flip",
            enabled: !1
          }
        ]
      }
    });
  },
  addProseMirrorPlugins() {
    return [
      B({
        editor: this.editor,
        char: "/",
        allowSpaces: !0,
        startOfLine: !0,
        pluginKey: new O(x),
        allow: ({ state: i, range: d }) => {
          var f, w, b;
          const t = i.doc.resolve(d.from), n = t.depth === 1, e = t.parent.type.name === "paragraph", a = ((f = t.parent.textContent) == null ? void 0 : f.charAt(0)) === "/", r = this.editor.isActive("column"), s = (b = t.parent.textContent) == null ? void 0 : b.slice(
            Math.max(0, (w = t.parent.textContent) == null ? void 0 : w.indexOf("/"))
          ), u = !(s != null && s.endsWith("  "));
          return (n && e && a || r && e && a) && u;
        },
        command: ({ editor: i, range: d, props: t }) => {
          const { view: n } = i;
          t.action({ editor: i, range: d }), n.focus();
        },
        items: ({ query: i, editor: d }) => W(d.extensionManager.extensions, this.options.renderGroupItem).map((r) => ({
          ...r,
          commands: r.commands.filter((s) => {
            const u = s.label.toLowerCase().trim(), f = i.toLowerCase().trim();
            if (s.aliases) {
              const w = s.aliases.map((C) => C.toLowerCase().trim()), b = u.match(f), R = w.some((C) => C.match(f));
              return b || R;
            }
            return u.match(f);
          }).filter(
            (s) => s.shouldBeHidden ? !s.shouldBeHidden(this.editor) : !0
          )
        })).filter((r) => r.commands.length > 0).map((r) => ({
          ...r,
          commands: r.commands.map((s) => ({
            ...s,
            isEnabled: !0
          }))
        })),
        render: () => {
          let i, d = null;
          return {
            onStart: (t) => {
              var a;
              i = new P(V, {
                props: t,
                editor: t.editor
              });
              const { view: n } = t.editor, e = () => {
                if (!t.clientRect)
                  return t.editor.storage[x].rect;
                const r = t.clientRect();
                if (!r)
                  return t.editor.storage[x].rect;
                let s = r.y;
                if (r.top + i.element.offsetHeight + 40 > window.innerHeight) {
                  const u = r.top + i.element.offsetHeight - window.innerHeight + 40;
                  s = r.y - u;
                }
                return new DOMRect(r.x, s, r.width, r.height);
              };
              d = () => {
                o == null || o[0].setProps({
                  getReferenceClientRect: e
                });
              }, (a = n.dom.parentElement) == null || a.addEventListener("scroll", d), o == null || o[0].setProps({
                getReferenceClientRect: e,
                appendTo: () => document.body,
                content: i.element
              }), o == null || o[0].show();
            },
            onUpdate(t) {
              var r;
              i.updateProps(t);
              const { view: n } = t.editor, e = () => {
                if (!t.clientRect)
                  return t.editor.storage[x].rect;
                const s = t.clientRect();
                return s ? new DOMRect(s.x, s.y, s.width, s.height) : t.editor.storage[x].rect;
              }, a = () => {
                o == null || o[0].setProps({
                  getReferenceClientRect: e
                });
              };
              (r = n.dom.parentElement) == null || r.addEventListener("scroll", a), t.editor.storage[x].rect = t.clientRect ? e() : {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              }, o == null || o[0].setProps({
                getReferenceClientRect: e
              });
            },
            onKeyDown(t) {
              var n;
              return t.event.key === "Escape" ? (o == null || o[0].hide(), !0) : (o != null && o[0].state.isShown || o == null || o[0].show(), (n = i.ref) == null ? void 0 : n.onKeyDown(t));
            },
            onExit(t) {
              var n;
              if (o == null || o[0].hide(), d) {
                const { view: e } = t.editor;
                (n = e.dom.parentElement) == null || n.removeEventListener("scroll", d);
              }
              i.destroy();
            }
          };
        }
      })
    ];
  },
  addStorage() {
    return {
      rect: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    };
  }
});
export {
  te as SlashCommand,
  te as default
};
