import { Editor } from '@tiptap/react';
import { Extension } from '@tiptap/core';

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

/** Default font size list */
export declare const DEFAULT_FONT_SIZE_LIST: readonly ["10px", "11px", "12px", "14px", "16px", "18px", "20px", "22px", "24px", "26px", "28px", "36px", "48px", "72px"];

export declare const FontSize: Extension<FontSizeOptions, any>;

/**
 * Represents the interface for font size options, extending GeneralOptions.
 */
export declare interface FontSizeOptions extends GeneralOptions<FontSizeOptions> {
    types: string[];
    /**
     * List of available font size values
     *
     * @default DEFAULT_FONT_SIZE_LIST
     */
    fontSizes: (string | NameValueOption)[];
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

declare interface NameValueOption<T = string> {
    name: string;
    value: T;
}

export { }
