import { default as React } from 'react';
import { ButtonViewReturnComponentProps } from '../../../types';
export interface Item {
    title: string;
    icon?: any;
    isActive: NonNullable<ButtonViewReturnComponentProps['isActive']>;
    action?: ButtonViewReturnComponentProps['action'];
    style?: React.CSSProperties;
    shortcutKeys?: string[];
    disabled?: boolean;
    divider?: boolean;
    default?: boolean;
}
interface IPropsActionMoreButton {
    editor: any;
    disabled?: boolean;
    color?: string;
    maxHeight?: string | number;
    icon?: any;
    tooltip?: string;
    items?: Item[];
}
declare function ActionMoreButton(props: IPropsActionMoreButton): import("react/jsx-runtime").JSX.Element;
export default ActionMoreButton;
