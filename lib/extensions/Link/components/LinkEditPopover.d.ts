import { ButtonViewReturnComponentProps } from '../../../types';
interface IPropsLinkEditPopover {
    editor: any;
    icon?: any;
    title?: string;
    tooltip?: string;
    disabled?: boolean;
    shortcutKeys?: string[];
    isActive?: ButtonViewReturnComponentProps['isActive'];
    action?: ButtonViewReturnComponentProps['action'];
}
declare function LinkEditPopover(props: IPropsLinkEditPopover): import("react/jsx-runtime").JSX.Element;
export default LinkEditPopover;
