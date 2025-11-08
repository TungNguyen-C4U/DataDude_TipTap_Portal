import { Command } from '@tiptap/core';
import { EditorState, Transaction } from '@tiptap/pm/state';
export declare const ALLOWED_NODE_TYPES: string[];
export declare function isLineHeightActive(state: EditorState, lineHeight: string): boolean;
export declare function setTextLineHeight(tr: Transaction, lineHeight: string | null): Transaction;
export declare function createLineHeightCommand(lineHeight: string): Command;
