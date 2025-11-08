import { default as React } from 'react';
import { Editor } from '@tiptap/core';
import { ToolbarProps } from '../types';
export interface ToolbarComponentProps {
    editor: Editor;
    disabled?: boolean;
    toolbar?: ToolbarProps;
}
declare function Toolbar({ editor, disabled, toolbar }: ToolbarComponentProps): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
export { Toolbar };
