import { Node } from '@tiptap/core';
export interface IKatexAttrs {
    text?: string;
    defaultShowPicker?: boolean;
}
interface IKatexOptions {
    HTMLAttributes: Record<string, any>;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        katex: {
            setKatex: (arg?: IKatexAttrs) => ReturnType;
        };
    }
}
export declare const Katex: Node<IKatexOptions, any>;
export {};
