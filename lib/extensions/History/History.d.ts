import { HistoryOptions as TiptapHistoryOptions } from '@tiptap/extension-history';
import { GeneralOptions } from '../../types';
export interface HistoryOptions extends TiptapHistoryOptions, GeneralOptions<HistoryOptions> {
}
export declare const History: import('@tiptap/core').Extension<HistoryOptions, any>;
