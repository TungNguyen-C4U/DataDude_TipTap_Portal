import { ButtonViewReturnComponentProps } from '../../../types';
interface IPropsTableActionButton {
    editor: any;
    icon?: any;
    tooltip?: string;
    disabled?: boolean;
    color?: string;
    action?: ButtonViewReturnComponentProps['action'];
    isActive?: ButtonViewReturnComponentProps['isActive'];
}
declare function TableActionButton(props: IPropsTableActionButton): import("react/jsx-runtime").JSX.Element;
export default TableActionButton;
