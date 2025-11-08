import { Extension } from '@tiptap/core';
import { Mark } from '@tiptap/pm/model';
import { GeneralOptions } from '../../types';
/**
 * Represents the interface for font size options, extending GeneralOptions.
 */
export interface FormatPainterOptions extends GeneralOptions<FormatPainterOptions> {
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        painter: {
            setPainter: (marks: Mark[]) => ReturnType;
        };
    }
}
export interface PainterAction {
    type: 'start' | 'end';
    marks: Mark[];
}
/**
 * 格式刷
 */
export declare const FormatPainter: Extension<FormatPainterOptions, any>;
