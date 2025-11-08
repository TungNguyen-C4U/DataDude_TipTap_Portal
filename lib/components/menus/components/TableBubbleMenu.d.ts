import { Editor } from '@tiptap/core';
import { ActionButtonProps } from '../..';
export interface TableBubbleMenuProps {
    editor: Editor;
    disabled?: boolean;
    actions?: ActionButtonProps[];
}
declare function TableBubbleMenu({ editor, disabled, actions }: TableBubbleMenuProps): import("react/jsx-runtime").JSX.Element;
export { TableBubbleMenu };
