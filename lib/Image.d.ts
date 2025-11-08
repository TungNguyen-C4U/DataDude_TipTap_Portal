import { Editor } from '@tiptap/react';
import { Extension } from '@tiptap/core';
import { Node as Node_2 } from '@tiptap/core';

/**
 * Represents the ButtonView function.
 */
declare type ButtonView<T = any> = (options: ButtonViewParams<T>) => ButtonViewReturn | ButtonViewReturn[];

/**
 * Represents the parameters for the ButtonView function.
 */
declare interface ButtonViewParams<T = any> {
    /** Editor object */
    editor: Editor;
    /** Extension object */
    extension: Extension<T>;
    /** Translation function */
    t: (path: string) => string;
}

/**
 * Represents the return value for the ButtonView component.
 */
declare interface ButtonViewReturn {
    /** Component */
    component: unknown;
    /** Component props */
    componentProps: ButtonViewReturnComponentProps;
    /** Component slots */
    componentSlots?: ButtonViewReturnComponentSlots;
}

/**
 * Represents the props for the ButtonView component.
 */
declare interface ButtonViewReturnComponentProps {
    /** Method triggered when action is performed */
    action?: (value?: any) => void;
    /** Whether it is in the active state */
    isActive?: () => boolean;
    /** Button icon */
    icon?: any;
    /** Text displayed on hover */
    tooltip?: string;
    [x: string]: any;
}

/**
 * Represents the slots for the ButtonView component.
 */
declare interface ButtonViewReturnComponentSlots {
    /** Dialog slot */
    dialog: () => any;
    [x: string]: () => any;
}

/**
 * Represents the general options for Tiptap extensions.
 */
declare interface GeneralOptions<T> {
    /** Enabled divider */
    divider: boolean;
    /** Enabled spacer */
    spacer: boolean;
    /** Button view function */
    button: ButtonView<T>;
    /** Show on Toolbar */
    toolbar?: boolean;
}

export declare interface IImageOptions extends GeneralOptions<IImageOptions> {
    /** Function for uploading files */
    upload?: (file: File) => Promise<string>;
    HTMLAttributes?: any;
    acceptMimes?: string[];
    maxSize?: number;
    /** The source URL of the image */
    resourceImage: 'upload' | 'link' | 'both';
    defaultInline?: boolean;
}

declare const Image_2: Node_2<IImageOptions, any>;
export { Image_2 as Image }
export default Image_2;

export declare interface SetImageAttrsOptions {
    src?: string;
    /** The alternative text for the image. */
    alt?: string;
    /** The caption of the image. */
    caption?: string;
    /** The width of the image. */
    width?: number | string | null;
    /** The alignment of the image. */
    align?: 'left' | 'center' | 'right';
    /** Whether the image is inline. */
    inline?: boolean;
    /** image FlipX */
    flipX?: boolean;
    /** image FlipY */
    flipY?: boolean;
}

export { }
