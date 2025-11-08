import { Extension } from '@tiptap/core';
import { GeneralOptions } from '../../types';
export interface CodeViewOptions extends GeneralOptions<CodeViewOptions> {
    isCodeViewMode?: boolean;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        codeView: {
            /**
                   * Toggle code view mode
                   */
            toggleCodeView: () => ReturnType;
        };
    }
}
export declare const CodeView: Extension<CodeViewOptions, any>;
