import { default as React } from 'react';
import { Editor } from '@tiptap/core';
import { BubbleMenuProps as BubbleMenuPropsType } from '../types';
export interface BubbleMenuComponentProps {
    editor: Editor;
    disabled?: boolean;
    bubbleMenu?: BubbleMenuPropsType;
}
/**
 * Bubble Menu Component
 *
 * @param editor Editor instance
 * @param disabled Whether the menu is disabled
 * @param bubbleMenu Bubble menu configuration
 * @returns Bubble menu component
 */
export declare function BubbleMenu({ editor, disabled, bubbleMenu }: BubbleMenuComponentProps): string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | (import("react/jsx-runtime").JSX.Element | null)[] | null | undefined;
