import { default as React } from 'react';
import { ButtonViewReturnComponentProps } from '../types';
export interface ActionMenuButtonProps {
    /** Icon name to display */
    icon?: any;
    /** Button title text */
    title?: string;
    /** Tooltip text */
    tooltip?: string;
    /** Whether the button is disabled */
    disabled?: boolean;
    /** Keyboard shortcut keys */
    shortcutKeys?: string[];
    /** Button color */
    color?: string;
    /** Click action handler */
    action?: ButtonViewReturnComponentProps['action'];
    /** Active state checker */
    isActive?: ButtonViewReturnComponentProps['isActive'];
    /** Whether to render as child */
    asChild?: boolean;
}
declare const ActionMenuButton: React.ForwardRefExoticComponent<ActionMenuButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { ActionMenuButton };
