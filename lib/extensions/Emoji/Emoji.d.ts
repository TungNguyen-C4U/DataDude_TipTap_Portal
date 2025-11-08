import { Node } from '@tiptap/core';
import { PluginKey } from '@tiptap/pm/state';
import { emojisToName } from './components/EmojiList/emojis';
export declare const EXTENSION_PRIORITY_HIGHEST = 200;
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emoji: {
            setEmoji: (emoji: {
                name: string;
                emoji: string;
            }) => ReturnType;
        };
    }
}
export declare const EmojiPluginKey: PluginKey<any>;
export { emojisToName };
export declare const Emoji: Node<any, any>;
