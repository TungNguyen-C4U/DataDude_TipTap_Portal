import { Extension } from '@tiptap/core';
import { CharacterCountOptions } from '@tiptap/extension-character-count';
import { DropcursorOptions } from '@tiptap/extension-dropcursor';
import { FocusOptions } from '@tiptap/extension-focus';
import { HardBreakOptions } from '@tiptap/extension-hard-break';
import { ListItemOptions } from '@tiptap/extension-list-item';
import { ParagraphOptions } from '@tiptap/extension-paragraph';
import { PlaceholderOptions } from '@tiptap/extension-placeholder';
import { TextStyleOptions } from '@tiptap/extension-text-style';
import { TextBubbleOptions } from './TextBubble';
import { TrailingNodeOptions } from './TrailingNode';
/**
 * Represents the interface for options in the base toolkit.
 */
export interface BaseKitOptions {
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
    focus: Partial<FocusOptions> | false;
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
export declare const BaseKit: Extension<BaseKitOptions, any>;
