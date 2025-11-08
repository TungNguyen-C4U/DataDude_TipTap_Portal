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

export declare const ExportPdf: Extension<ExportPdfOptions, any>;

export declare interface ExportPdfOptions extends GeneralOptions<ExportPdfOptions> {
    paperSize: PaperSize;
    margins: {
        top?: PageMargin;
        right?: PageMargin;
        bottom?: PageMargin;
        left?: PageMargin;
    };
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

declare type PageMargin = '0in' | '0.25in' | '0.4in' | '0.5in' | '0.75in' | '1in' | '1.25in' | '1.5in' | '1.75in' | '2in' | '0cm' | '0.5cm' | '1cm' | '1.5cm' | '2cm' | '2.5cm' | '3cm' | '4cm' | '5cm' | '0mm' | '5mm' | '10mm' | '15mm' | '20mm' | '25mm' | '30mm' | '40mm' | '50mm' | '0pt' | '18pt' | '36pt' | '54pt' | '72pt' | '90pt' | '108pt' | '144pt';

declare type PaperSize = 'Legal' | 'Letter' | 'Tabloid' | 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5';

export { }
