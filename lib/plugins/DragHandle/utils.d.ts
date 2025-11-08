import { Editor } from '@tiptap/core';
export declare function cloneElement(node: HTMLElement): any;
export declare function getComputedStyles(element: Element, styleProperty: any): string;
export declare function minMax(value?: number, minimum?: number, maximum?: number): number;
export declare function removeNode(node: HTMLElement): void;
export type FindElementNextToCoords = {
    x: number;
    y: number;
    direction?: 'left' | 'right';
    editor: Editor;
};
export declare function findElementNextToCoords(options: FindElementNextToCoords): {
    resultElement: any;
    resultNode: any;
    pos: any;
};
