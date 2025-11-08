import { Extension } from '@tiptap/core';
import { DEFAULT_LINE_HEIGHT_LIST } from '../../constants';
import { GeneralOptions } from '../../types';
export { DEFAULT_LINE_HEIGHT_LIST };
export interface LineHeightOptions extends GeneralOptions<LineHeightOptions> {
    types: string[];
    lineHeights: string[];
    defaultHeight: string;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        lineHeight: {
            setLineHeight: (lineHeight: string) => ReturnType;
            unsetLineHeight: () => ReturnType;
        };
    }
}
export declare const LineHeight: Extension<LineHeightOptions, any>;
