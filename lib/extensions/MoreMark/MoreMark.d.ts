import { Extension } from '@tiptap/core';
import { SubscriptExtensionOptions as TiptapSubscriptOptions } from '@tiptap/extension-subscript';
import { SuperscriptExtensionOptions as TiptapSuperscriptOptions } from '@tiptap/extension-superscript';
import { GeneralOptions } from '../../types';
export interface MoreMarkOptions extends GeneralOptions<MoreMarkOptions> {
    /**
     * // 下标
     *
     * @default true
     */
    subscript: Partial<TiptapSubscriptOptions> | false;
    /**
     * // 上标
     *
     * @default true
     */
    superscript: Partial<TiptapSuperscriptOptions> | false;
}
export declare const MoreMark: Extension<MoreMarkOptions, any>;
