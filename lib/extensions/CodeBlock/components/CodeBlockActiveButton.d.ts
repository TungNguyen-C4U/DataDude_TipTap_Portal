interface Props {
    editor: any;
    disabled?: boolean;
    color?: string;
    shortcutKeys?: string[];
    maxHeight?: string | number;
    tooltip?: string;
    action: (language: string) => void;
    icon?: any;
}
declare function CodeBlockActiveButton({ action, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default CodeBlockActiveButton;
