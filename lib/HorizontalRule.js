import { N as m, n as f, f as x, i as y, T as a, g, m as p } from "./index-BWx1Mchx.js";
import { A } from "./RichTextEditor-Dg5WlAX5.js";
const b = m.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: o }) {
    return ["hr", p(this.options.HTMLAttributes, o)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: o, state: n }) => {
        if (!x(n, n.schema.nodes[this.name]))
          return !1;
        const { selection: r } = n, { $from: c, $to: l } = r, s = o();
        return c.parentOffset === 0 ? s.insertContentAt({
          from: Math.max(c.pos - 1, 0),
          to: l.pos
        }, {
          type: this.name
        }) : y(r) ? s.insertContentAt(l.pos, {
          type: this.name
        }) : s.insertContent({ type: this.name }), s.command(({ tr: t, dispatch: h }) => {
          var i;
          if (h) {
            const { $to: e } = t.selection, d = e.end();
            if (e.nodeAfter)
              e.nodeAfter.isTextblock ? t.setSelection(a.create(t.doc, e.pos + 1)) : e.nodeAfter.isBlock ? t.setSelection(g.create(t.doc, e.pos)) : t.setSelection(a.create(t.doc, e.pos));
            else {
              const u = (i = e.parent.type.contentMatch.defaultType) === null || i === void 0 ? void 0 : i.create();
              u && (t.insert(d, u), t.setSelection(a.create(t.doc, d + 1)));
            }
            t.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      f({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), M = /* @__PURE__ */ b.extend({
  renderHTML() {
    return [
      "div",
      p(this.options.HTMLAttributes, {
        "data-type": this.name
      }),
      [
        "div",
        {
          class: "richtext-flex richtext-justify-center richtext-items-center",
          style: "gap: 10px;"
        },
        ["span", { class: "richtext-w-2 richtext-h-2 richtext-bg-gray-300 richtext-rounded-full" }],
        ["span", { class: "richtext-w-2 richtext-h-2 richtext-bg-gray-300 richtext-rounded-full" }],
        ["span", { class: "richtext-w-2 richtext-h-2 richtext-bg-gray-300 richtext-rounded-full" }]
      ]
    ];
  },
  addOptions() {
    var o;
    return {
      ...(o = this.parent) == null ? void 0 : o.call(this),
      button: ({ editor: n, t: r }) => ({
        component: A,
        componentProps: {
          action: () => n.commands.setHorizontalRule(),
          disabled: !n.can().setHorizontalRule(),
          icon: "Minus",
          shortcutKeys: ["mod", "alt", "S"],
          tooltip: r("editor.horizontalrule.tooltip")
        }
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-s": () => this.editor.commands.setHorizontalRule()
    };
  }
});
export {
  M as HorizontalRule
};
