import { TableCellOptions } from '@tiptap/extension-table-cell';
import { TableHeaderOptions } from '@tiptap/extension-table-header';
import { TableRowOptions } from '@tiptap/extension-table-row';
import { GeneralOptions } from '../../types';
import { TableCellBackgroundOptions } from './cell-background';
export interface TableOptions extends GeneralOptions<TableOptions> {
    HTMLAttributes: Record<string, any>;
    resizable: boolean;
    handleWidth: number;
    cellMinWidth: number;
    lastColumnResizable: boolean;
    allowTableNodeSelection: boolean;
    /** options for table rows */
    tableRow: Partial<TableRowOptions>;
    /** options for table headers */
    tableHeader: Partial<TableHeaderOptions>;
    /** options for table cells */
    tableCell: Partial<TableCellOptions>;
    /** options for table cell background */
    tableCellBackground: Partial<TableCellBackgroundOptions>;
}
export declare const Table: import('@tiptap/core').Node<TableOptions, any>;
export default Table;
