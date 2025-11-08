import { Editor } from '@tiptap/react';
import { Extension } from '@tiptap/core';
import { Node as Node_2 } from '@tiptap/core';

/**
 * Matches a code block with backticks.
 */
export declare const backtickInputRegex: RegExp;

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

export declare const CodeBlock: Node_2<any, any>;

export declare interface CodeBlockOptions extends GeneralOptions<CodeBlockOptions> {
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

/**
 * Matches a code block with tildes.
 */
export declare const tildeInputRegex: RegExp;

export { }
