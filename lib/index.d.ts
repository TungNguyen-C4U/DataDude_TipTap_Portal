import { AnyExtension } from '@tiptap/core';
import { BubbleMenu } from '@tiptap/react';
import { CharacterCountOptions } from '@tiptap/extension-character-count';
import { default as default_2 } from 'react';
import { DropcursorOptions } from '@tiptap/extension-dropcursor';
import { Editor } from '@tiptap/react';
import { Editor as Editor_2 } from '@tiptap/core';
import { Extension } from '@tiptap/core';
import { FocusOptions as FocusOptions_2 } from '@tiptap/extension-focus';
import { ForwardRefExoticComponent } from 'react';
import { HardBreakOptions } from '@tiptap/extension-hard-break';
import { ListItemOptions } from '@tiptap/extension-list-item';
import { ParagraphOptions } from '@tiptap/extension-paragraph';
import { PlaceholderOptions } from '@tiptap/extension-placeholder';
import { RefAttributes } from 'react';
import { TextStyleOptions } from '@tiptap/extension-text-style';
import { TooltipContentProps } from '@radix-ui/react-tooltip';
import { UseEditorOptions } from '@tiptap/react';

declare interface ActionButtonProps {
    icon?: string;
    title?: string;
    tooltip?: string;
    disabled?: boolean;
    shortcutKeys?: string[];
    customClass?: string;
    loading?: boolean;
    tooltipOptions?: TooltipContentProps;
    color?: string;
    action?: ButtonViewReturnComponentProps['action'];
    isActive?: ButtonViewReturnComponentProps['isActive'];
    children?: default_2.ReactNode;
    asChild?: boolean;
    upload?: boolean;
    initialDisplayedColor?: string;
}

export declare const BaseKit: Extension<BaseKitOptions, any>;

/**
 * Represents the interface for options in the base toolkit.
 */
export declare interface BaseKitOptions {
    /**
     * Whether to enable the document option
     *
     * @default true
     */
    document: false;
    /**
     * Whether to enable the document option
     *
     * @default false
     */
    multiColumn?: boolean;
    /**
     * Whether to enable the text option
     *
     * @default true
     */
    text: false;
    /**
     * Whether to enable the Gapcursor
     *
     * @default true
     */
    gapcursor: false;
    /**
     * Dropcursor options or false, indicating whether to enable the drop cursor
     *
     * @default true
     */
    dropcursor: Partial<DropcursorOptions> | false;
    /**
     * character count options or false, indicating whether to enable character count
     *
     * @default true
     */
    characterCount: Partial<CharacterCountOptions> | false;
    /**
     * HardBreak options or false, indicating whether to enable hard breaks
     *
     * @default true
     */
    hardBreak: Partial<HardBreakOptions> | false;
    /**
     * Placeholder options or false, indicating whether to enable placeholders
     *
     * @default true
     */
    placeholder: Partial<PlaceholderOptions> | false;
    /**
     * Paragraph options or false, indicating whether to enable paragraph functionality
     *
     * @default true
     */
    paragraph: Partial<ParagraphOptions> | false;
    /**
     * Focus options or false, indicating whether to enable focus functionality
     *
     * @default true
     */
    focus: Partial<FocusOptions_2> | false;
    /**
     * ListItem options or false, indicating whether to enable list item functionality
     *
     * @default true
     */
    listItem: Partial<ListItemOptions> | false;
    /**
     * Text Style options or false, indicating whether to enable text style functionality
     *
     * @default true
     */
    textStyle: Partial<TextStyleOptions> | false;
    /**
     * Bubble options, taking `BubbleOptions<BaseKitOptions>` as parameters, indicating whether to enable the bubble functionality
     */
    bubble: any;
    /**
     * Iframe options or false, indicating whether to enable the iframe
     *
     * @default true
     */
    /**
     * Trailing node options or false, indicating whether to enable the trailing node
     *
     * @default true
     */
    trailingNode: Partial<TrailingNodeOptions> | false;
    /**
     * textBubble options or false, indicating whether to enable the textBubble
     *
     * @default true
     */
    textBubble: Partial<TextBubbleOptions> | false;
    /**
     * selection options or false, indicating whether to enable the selection
     *
     * @default true
     */
    selection: any | false;
}

export { BubbleMenu }

declare interface BubbleMenuConfig {
    /**
     * @description Column menu hidden
     * @default false
     */
    hidden?: boolean;
    /**
     * custom menu actions
     */
    actions?: ActionButtonProps[];
}

/**
 * Represents the BubbleMenuProps.
 */
declare interface BubbleMenuProps {
    columnConfig?: {
        /**
         * @description Column menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    tableConfig?: BubbleMenuConfig;
    floatingMenuConfig?: {
        /**
         * @description Floating menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    linkConfig?: {
        /**
         * @description Link menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    textConfig?: {
        /**
         * @description Text menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    imageConfig?: {
        /**
         * @description Image menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    imageGifConfig?: {
        /**
         * @description Image menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    videoConfig?: {
        /**
         * @description Video menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    katexConfig?: {
        /**
         * @description katex menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    excalidrawConfig?: {
        /**
         * @description excalidraw menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    iframeConfig?: {
        /**
         * @description iframe menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    mermaidConfig?: {
        /**
         * @description mermaid menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    twitterConfig?: {
        /**
         * @description twitter menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    drawerConfig?: {
        /**
         * @description twitter menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    render?: (props: BubbleMenuRenderProps, dom: React.ReactNode) => React.ReactNode;
}

/**
 * Represents the BubbleMenuRenderProps.
 */
declare interface BubbleMenuRenderProps {
    editor: Editor;
    disabled: boolean;
    bubbleMenu: BubbleMenuProps;
    extensionsNames: string[];
}

/**
 * Represents the ButtonView function.
 */
declare type ButtonView<T = any> = (options: ButtonViewParams<T>) => ButtonViewReturn | ButtonViewReturn[];

/**
 * Represents the parameters for the ButtonView function.
 */
declare interface ButtonViewParams<T = any> {
    /** Editor object */
    editor: Editor;
    /** Extension object */
    extension: Extension<T>;
    /** Translation function */
    t: (path: string) => string;
}

/**
 * Represents the return value for the ButtonView component.
 */
declare interface ButtonViewReturn {
    /** Component */
    component: unknown;
    /** Component props */
    componentProps: ButtonViewReturnComponentProps;
    /** Component slots */
    componentSlots?: ButtonViewReturnComponentSlots;
}

/**
 * Represents the props for the ButtonView component.
 */
declare interface ButtonViewReturnComponentProps {
    /** Method triggered when action is performed */
    action?: (value?: any) => void;
    /** Whether it is in the active state */
    isActive?: () => boolean;
    /** Button icon */
    icon?: any;
    /** Text displayed on hover */
    tooltip?: string;
    [x: string]: any;
}

/**
 * Represents the slots for the ButtonView component.
 */
declare interface ButtonViewReturnComponentSlots {
    /** Dialog slot */
    dialog: () => any;
    [x: string]: () => any;
}

declare const _default: ForwardRefExoticComponent<RichTextEditorProps & RefAttributes<    {
editor: Editor_2 | null;
}>>;
export default _default;

export { Editor }

/**
 * Represents the general options for Tiptap extensions.
 */
declare interface GeneralOptions<T> {
    /** Enabled divider */
    divider: boolean;
    /** Enabled spacer */
    spacer: boolean;
    /** Button view function */
    button: ButtonView<T>;
    /** Show on Toolbar */
    toolbar?: boolean;
}

/**
 * Interface for RichTextEditor component props
 */
declare interface RichTextEditorProps {
    /** Content of the editor */
    content: string;
    /** Extensions for the editor */
    extensions: AnyExtension[];
    /** Output format */
    output: 'html' | 'json' | 'text';
    /** Model value */
    modelValue?: string | object;
    /** Dark mode flag */
    dark?: boolean;
    /** Dense mode flag */
    dense?: boolean;
    /** Disabled flag */
    disabled?: boolean;
    /** Label for the editor */
    label?: string;
    /** Hide toolbar flag */
    hideToolbar?: boolean;
    /** Disable bubble menu flag */
    disableBubble?: boolean;
    /** Hide bubble menu flag */
    hideBubble?: boolean;
    /** Remove default wrapper flag */
    removeDefaultWrapper?: boolean;
    /** Maximum width */
    maxWidth?: string | number;
    /** Minimum height */
    minHeight?: string | number;
    /** Maximum height */
    maxHeight?: string | number;
    /** Content class */
    contentClass?: string | string[] | Record<string, any>;
    /** Content change callback */
    onChangeContent?: (val: any) => void;
    /** Bubble menu props */
    bubbleMenu?: BubbleMenuProps;
    /** Toolbar props */
    toolbar?: ToolbarProps;
    /** Use editor options */
    useEditorOptions?: UseEditorOptions;
    /** Use editor options */
    resetCSS?: boolean;
    /** This option gives us the control to enable the default behavior of rendering the editor immediately.*/
    immediatelyRender?: boolean;
}

declare interface TextBubbleOptions extends GeneralOptions<TextBubbleOptions> {
}

/**
 * Represents the ToolbarItemProps.
 */
declare interface ToolbarItemProps {
    button: {
        component: React.ComponentType<any>;
        componentProps: Record<string, any>;
    };
    divider: boolean;
    spacer: boolean;
    type: string;
    name: string;
}

declare interface ToolbarProps {
    render?: (props: ToolbarRenderProps, toolbarItems: ToolbarItemProps[], dom: any[], containerDom: (innerContent: React.ReactNode) => React.ReactNode) => React.ReactNode;
}

declare interface ToolbarRenderProps {
    editor: Editor;
    disabled: boolean;
}

/**
 * Extension based on:
 * - https://github.com/ueberdosis/tiptap/blob/v1/packages/tiptap-extensions/src/extensions/TrailingNode.js
 * - https://github.com/remirror/remirror/blob/e0f1bec4a1e8073ce8f5500d62193e52321155b9/packages/prosemirror-trailing-node/src/trailing-node-plugin.ts
 */
declare interface TrailingNodeOptions {
    node: string;
    notAfter: string[];
}

export { UseEditorOptions }

export declare function useEditorState(): UseEditorStateReturn;

export declare interface UseEditorStateReturn {
    isReady: boolean;
    editor: Editor_2 | null;
    editorRef: React.MutableRefObject<{
        editor: Editor_2 | null;
    }>;
}

export { }
