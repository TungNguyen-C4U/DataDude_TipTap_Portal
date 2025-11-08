import { default as React } from 'react';
import { ButtonViewReturnComponentProps } from '../../../types';
export interface Item {
    title: string;
    icon?: any;
    level?: number;
    isActive: NonNullable<ButtonViewReturnComponentProps['isActive']>;
    action?: ButtonViewReturnComponentProps['action'];
    style?: React.CSSProperties;
    shortcutKeys?: string[];
    disabled?: boolean;
    divider?: boolean;
    default?: boolean;
}
interface Props {
    editor: any;
    disabled?: boolean;
    color?: string;
    shortcutKeys?: string[];
    maxHeight?: string | number;
    tooltip?: string;
    items?: Item[];
}
declare function HeadingButton(props: Props): import("react/jsx-runtime").JSX.Element;
export default HeadingButton;
