import { ButtonViewReturnComponentProps } from '../../../types';
interface IPropsTwitterActiveButton {
    editor: any;
    icon?: any;
    title?: string;
    tooltip?: string;
    disabled?: boolean;
    shortcutKeys?: string[];
    isActive?: ButtonViewReturnComponentProps['isActive'];
    action?: ButtonViewReturnComponentProps['action'];
}
declare function TwitterActiveButton(props: IPropsTwitterActiveButton): import("react/jsx-runtime").JSX.Element;
export default TwitterActiveButton;
