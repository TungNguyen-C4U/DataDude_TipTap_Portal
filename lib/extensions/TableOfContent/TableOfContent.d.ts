import { Node } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        tableOfContents: {
            setTableOfContents: () => ReturnType;
            removeTableOfContents: () => ReturnType;
        };
    }
}
interface Options {
    onHasOneBeforeInsert?: () => void;
}
export declare const TableOfContents: Node<Options, any>;
export {};
