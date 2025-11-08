import { AnyExtension, Editor as CoreEditor } from '@tiptap/core';
import { UseEditorOptions } from '@tiptap/react';
import { BubbleMenuProps, ToolbarProps } from '../types';
/**
 * Interface for RichTextEditor component props
 */
export interface RichTextEditorProps {
    /** Content of the editor */
    content: string;
    /** Extensions for the editor */
    extensions: AnyExtension[];
    /** Output format */
    output: 'html' | 'json' | 'text';
    /** Model value */
    modelValue?: string | object;
    /** Dark mode flag */
    dark?: boolean;
    /** Dense mode flag */
    dense?: boolean;
    /** Disabled flag */
    disabled?: boolean;
    /** Label for the editor */
    label?: string;
    /** Hide toolbar flag */
    hideToolbar?: boolean;
    /** Disable bubble menu flag */
    disableBubble?: boolean;
    /** Hide bubble menu flag */
    hideBubble?: boolean;
    /** Remove default wrapper flag */
    removeDefaultWrapper?: boolean;
    /** Maximum width */
    maxWidth?: string | number;
    /** Minimum height */
    minHeight?: string | number;
    /** Maximum height */
    maxHeight?: string | number;
    /** Content class */
    contentClass?: string | string[] | Record<string, any>;
    /** Content change callback */
    onChangeContent?: (val: any) => void;
    /** Bubble menu props */
    bubbleMenu?: BubbleMenuProps;
    /** Toolbar props */
    toolbar?: ToolbarProps;
    /** Use editor options */
    useEditorOptions?: UseEditorOptions;
    /** Use editor options */
    resetCSS?: boolean;
    /** This option gives us the control to enable the default behavior of rendering the editor immediately.*/
    immediatelyRender?: boolean;
}
declare const _default: import('react').ForwardRefExoticComponent<RichTextEditorProps & import('react').RefAttributes<{
    editor: CoreEditor | null;
}>>;
export default _default;
