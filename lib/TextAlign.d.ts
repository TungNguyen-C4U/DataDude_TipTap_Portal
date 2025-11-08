import { Editor } from '@tiptap/react';
import { Extension } from '@tiptap/core';
import { TextAlignOptions as TextAlignOptions_2 } from '@tiptap/extension-text-align';

declare type Alignments = 'left' | 'center' | 'right' | 'justify';

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

export declare const TextAlign: Extension<TextAlignOptions, any>;

/**
 * Represents the interface for text align options, extending TiptapTextAlignOptions and GeneralOptions.
 */
export declare interface TextAlignOptions extends TextAlignOptions_2, GeneralOptions<TextAlignOptions> {
    /**
     * List of available alignment options
     *
     * @default ['left', 'center', 'right', 'justify']
     */
    alignments: Alignments[];
}

export { }
