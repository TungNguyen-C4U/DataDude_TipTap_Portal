import { Selection, SelectionRange } from '@tiptap/pm/state';
import { ResolvedPos, Node as ProseMirrorNode } from '@tiptap/pm/model';
import { Mapping, Mappable } from '@tiptap/pm/transform';
export declare function getSelectionRanges(state: ResolvedPos, range: ResolvedPos, depth?: number): SelectionRange[];
declare class NodeRangeBookmark {
    anchor: number;
    head: number;
    constructor(anchor: number, head: number);
    map(mapping: Mappable): NodeRangeBookmark;
    resolve(doc: ProseMirrorNode): NodeRangeSelection;
}
export declare class NodeRangeSelection extends Selection {
    depth: number | undefined;
    constructor(from: ResolvedPos, to: ResolvedPos, depth?: number, bias?: number);
    get $to(): ResolvedPos;
    eq(other: Selection): boolean;
    map(doc: ProseMirrorNode, mapping: Mapping): NodeRangeSelection;
    toJSON(): {
        type: string;
        anchor: number;
        head: number;
    };
    get isForwards(): boolean;
    get isBackwards(): boolean;
    extendBackwards(): NodeRangeSelection;
    extendForwards(): NodeRangeSelection;
    static fromJSON(doc: ProseMirrorNode, json: any): NodeRangeSelection;
    static create(doc: ProseMirrorNode, anchor: number, head: number, depth?: number, bias?: number): NodeRangeSelection;
    getBookmark(): NodeRangeBookmark;
}
export {};
