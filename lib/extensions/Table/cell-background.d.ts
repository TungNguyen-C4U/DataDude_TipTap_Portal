import { Command, Extension } from '@tiptap/core';
import { Transaction } from '@tiptap/pm/state';
export interface TableCellBackgroundOptions {
    HTMLAttributes: Record<string, any>;
    types?: any;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        tableCellBackground: {
            setTableCellBackground: (color: string) => ReturnType;
            unsetTableCellBackground: () => ReturnType;
        };
    }
}
export declare function setCellBackgroundMarkup(tr: Transaction, pos: number, backgroundColor: string): Transaction;
export declare function updateCellBackground(tr: Transaction, options: TableCellBackgroundOptions, backgroundColor: string): Transaction;
export declare function createCellBackgroundCommand(backgroundColor: string, options: TableCellBackgroundOptions): Command;
export declare const TableCellBackground: Extension<TableCellBackgroundOptions, any>;
