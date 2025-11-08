import { Editor } from '@tiptap/react';
import { ButtonViewReturnComponentProps } from '../../../types';
interface ColorActionButtonProps {
    editor: Editor;
    colors?: string[];
    defaultColor?: string;
    icon?: React.ReactNode;
    tooltip?: string;
    disabled?: boolean;
    action?: ButtonViewReturnComponentProps['action'];
    isActive?: ButtonViewReturnComponentProps['isActive'];
    initialDisplayedColor?: string;
}
declare function ColorActionButton(props: ColorActionButtonProps): import("react/jsx-runtime").JSX.Element;
export default ColorActionButton;
