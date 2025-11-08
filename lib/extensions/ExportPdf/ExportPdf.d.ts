import { Extension } from '@tiptap/core';
import { GeneralOptions, PaperSize, PageMargin } from '../../types';
export interface ExportPdfOptions extends GeneralOptions<ExportPdfOptions> {
    paperSize: PaperSize;
    margins: {
        top?: PageMargin;
        right?: PageMargin;
        bottom?: PageMargin;
        left?: PageMargin;
    };
}
export declare const ExportPdf: Extension<ExportPdfOptions, any>;
