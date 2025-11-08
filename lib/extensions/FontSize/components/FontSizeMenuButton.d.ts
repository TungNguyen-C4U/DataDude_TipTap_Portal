import { default as React } from 'react';
import { ButtonViewReturnComponentProps } from '../../../types';
export interface Item {
    title: string;
    isActive: NonNullable<ButtonViewReturnComponentProps['isActive']>;
    action?: ButtonViewReturnComponentProps['action'];
    style?: React.CSSProperties;
    disabled?: boolean;
    divider?: boolean;
    default?: boolean;
}
interface IPropsFontSizeMenuButton {
    editor: any;
    disabled?: boolean;
    color?: string;
    shortcutKeys?: string[];
    maxHeight?: string | number;
    tooltip?: string;
    items?: Item[];
}
declare function FontSizeMenuButton(props: IPropsFontSizeMenuButton): import("react/jsx-runtime").JSX.Element;
export default FontSizeMenuButton;
