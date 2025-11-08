import { default as React } from 'react';
interface IProps {
    items: Array<{
        name: string;
        emoji: string;
        fallbackImage?: string;
    }>;
    command: any;
}
export declare const EmojiList: React.FC<IProps>;
export {};
