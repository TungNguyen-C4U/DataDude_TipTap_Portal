import { UnderlineOptions as TiptapUnderlineOptions } from '@tiptap/extension-underline';
import { GeneralOptions } from '../../types';
export interface UnderlineOptions extends TiptapUnderlineOptions, GeneralOptions<UnderlineOptions> {
}
export declare const TextUnderline: import('@tiptap/core').Mark<UnderlineOptions, any>;
