import { Editor } from '@tiptap/react';
import { JSX } from 'react/jsx-runtime';

export declare function BubbleMenuDrawer(props: IPropsBubbleMenu_2): JSX.Element;

export declare function BubbleMenuExcalidraw({ editor }: any): JSX.Element;

export declare function BubbleMenuKatex({ editor, ...props }: any): JSX.Element;

export declare function BubbleMenuMermaid(props: IPropsBubbleMenu): JSX.Element;

export declare function BubbleMenuTwitter({ editor, disabled }: BubbleMenuTwitterProps): JSX.Element;

export declare interface BubbleMenuTwitterProps {
    editor: Editor;
    disabled?: boolean;
}

declare interface IPropsBubbleMenu {
    editor: Editor;
    disabled?: boolean;
}

declare interface IPropsBubbleMenu_2 {
    editor: Editor;
    disabled?: boolean;
}

export { }
