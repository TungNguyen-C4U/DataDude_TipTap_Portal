import { HighlightOptions as TiptapHighlightOptions } from '@tiptap/extension-highlight';
import { GeneralOptions } from '../../types';
export interface HighlightOptions extends TiptapHighlightOptions, GeneralOptions<HighlightOptions> {
}
export declare const Highlight: import('@tiptap/core').Mark<HighlightOptions, any>;
