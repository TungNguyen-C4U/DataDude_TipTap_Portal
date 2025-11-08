import { ColorOptions as TiptapColorOptions } from '@tiptap/extension-color';
import { GeneralOptions } from '../../types';
export interface ColorOptions extends TiptapColorOptions, GeneralOptions<ColorOptions> {
    /**
     * An array of color options to display in the color picker
     */
    colors?: string[];
    /**
     * The default color to use when no color is selected
     */
    defaultColor?: string;
}
export declare const Color: import('@tiptap/core').Extension<ColorOptions, any>;
