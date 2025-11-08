import { TooltipContentProps } from '@radix-ui/react-tooltip';
import { ButtonViewReturnComponentProps } from '../../../types';
interface IPropsHighlightActionButton {
    editor: any;
    tooltip?: string;
    disabled?: boolean;
    action?: ButtonViewReturnComponentProps['action'];
    isActive?: ButtonViewReturnComponentProps['isActive'];
    tooltipOptions?: TooltipContentProps;
    shortcutKeys?: string[];
}
declare function HighlightActionButton(props: IPropsHighlightActionButton): import("react/jsx-runtime").JSX.Element;
export default HighlightActionButton;
