import { Editor } from '@tiptap/core';
export interface ContentMenuProps {
    editor: Editor;
    disabled?: boolean;
    className?: string;
    pluginKey?: string;
}
declare function ContentMenu(props: ContentMenuProps): import("react/jsx-runtime").JSX.Element;
export { ContentMenu };
