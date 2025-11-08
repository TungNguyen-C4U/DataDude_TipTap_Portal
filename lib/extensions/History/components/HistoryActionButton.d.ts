import { default as React } from 'react';
import { TooltipContentProps } from '@radix-ui/react-tooltip';
import { ButtonViewReturnComponentProps } from '../../../types';
interface IPropsHistoryActionButton {
    icon?: string;
    title?: string;
    tooltip?: string;
    disabled?: boolean;
    shortcutKeys?: string[];
    customClass?: string;
    loading?: boolean;
    tooltipOptions?: TooltipContentProps;
    color?: string;
    action?: ButtonViewReturnComponentProps['action'];
    isActive?: ButtonViewReturnComponentProps['isActive'];
    children?: React.ReactNode;
}
declare function HistoryActionButton(props?: Partial<IPropsHistoryActionButton>): import("react/jsx-runtime").JSX.Element;
export default HistoryActionButton;
