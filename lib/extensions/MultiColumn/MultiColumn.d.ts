import { Node } from '@tiptap/core';
export declare const EXTENSION_PRIORITY_HIGHEST = 200;
export * from './Column';
export * from './components/ColumnActionButton';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        columns: {
            insertColumns: (attrs?: {
                cols: number;
            }) => ReturnType;
            addColBefore: () => ReturnType;
            addColAfter: () => ReturnType;
            deleteCol: () => ReturnType;
        };
    }
}
export declare const MultiColumn: Node<any, any>;
