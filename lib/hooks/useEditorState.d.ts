import { Editor } from '@tiptap/core';
export interface UseEditorStateReturn {
    isReady: boolean;
    editor: Editor | null;
    editorRef: React.MutableRefObject<{
        editor: Editor | null;
    }>;
}
export declare function useEditorState(): UseEditorStateReturn;
