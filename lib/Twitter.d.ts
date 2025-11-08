import { Node as Node_2 } from '@tiptap/core';

/**
 * This extension adds support for tweets.
 */
export declare const Twitter: Node_2<TwitterOptions, any>;

declare interface TwitterOptions {
    /**
     * Controls if the paste handler for tweets should be added.
     * @default true
     * @example false
     */
    addPasteHandler: boolean;
    HTMLAttributes: Record<string, any>;
    /**
     * Controls if the twitter node should be inline or not.
     * @default false
     * @example true
     */
    inline: boolean;
    /**
     * The origin of the tweet.
     * @default ''
     * @example 'https://tiptap.dev'
     */
    origin: string;
}

export { }
