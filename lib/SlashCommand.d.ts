import { Editor } from '@tiptap/core';
import { Extension } from '@tiptap/core';
import { Extensions } from '@tiptap/core';
import { Range as Range_2 } from '@tiptap/core';

declare interface Command {
    name: string;
    label: string;
    description?: string;
    aliases?: string[];
    iconName?: any;
    iconUrl?: string;
    action: ({ editor, range }: {
        editor: Editor;
        range: Range_2;
    }) => void;
    shouldBeHidden?: (editor: Editor) => boolean;
}

declare interface Group {
    name: string;
    title: string;
    commands: Command[];
}

declare const SlashCommand: Extension<SlashCommandOptions, any>;
export { SlashCommand }
export default SlashCommand;

export declare interface SlashCommandOptions {
    renderGroupItem?: (extension: Extensions[number], groups: Group[]) => void;
}

export { }
