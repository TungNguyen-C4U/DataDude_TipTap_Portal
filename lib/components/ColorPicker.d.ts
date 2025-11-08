import { default as React } from 'react';
export interface ColorPickerProps {
    highlight?: boolean;
    disabled?: boolean;
    colors?: string[];
    defaultColor?: string;
    children: React.ReactNode;
    onChange?: (color: string | undefined) => void;
    setSelectedColor?: (color: string | undefined) => void;
    selectedColor?: string;
}
declare function ColorPicker(props: ColorPickerProps): import("react/jsx-runtime").JSX.Element;
export { ColorPicker };
