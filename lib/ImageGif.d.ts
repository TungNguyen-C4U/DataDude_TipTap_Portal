import { ImageOptions } from '@tiptap/extension-image';
import { Node as Node_2 } from '@tiptap/core';

declare const ImageGif: Node_2<ImageGifOptions, any>;
export { ImageGif }
export default ImageGif;

declare interface ImageGifOptions extends ImageOptions {
    /**
     * The key for the gif https://giphy.com/
     */
    GIPHY_API_KEY: string;
}

export declare interface SetImageAttrsOptions {
    src?: string;
    /** The alternative text for the image. */
    alt?: string;
    /** The title of the image. */
    title?: string;
    /** The width of the image. */
    width?: number | string | null;
    /** The alignment of the image. */
    align?: 'left' | 'center' | 'right';
}

export { }
