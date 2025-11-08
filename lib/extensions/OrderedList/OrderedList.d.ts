import { OrderedListOptions as TiptapOrderedListOptions } from '@tiptap/extension-ordered-list';
import { GeneralOptions } from '../../types';
export interface OrderedListOptions extends TiptapOrderedListOptions, GeneralOptions<OrderedListOptions> {
}
export declare const OrderedList: import('@tiptap/core').Node<OrderedListOptions, any>;
