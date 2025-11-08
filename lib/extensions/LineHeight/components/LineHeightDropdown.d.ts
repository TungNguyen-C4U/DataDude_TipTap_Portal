import { ButtonViewReturnComponentProps } from '../../../types';
interface IPropsLineHeightDropdown {
    editor: any;
    icon?: any;
    tooltip?: string;
    disabled?: boolean;
    action?: ButtonViewReturnComponentProps['action'];
    isActive?: ButtonViewReturnComponentProps['isActive'];
}
declare function LineHeightDropdown(props: IPropsLineHeightDropdown): import("react/jsx-runtime").JSX.Element;
export default LineHeightDropdown;
