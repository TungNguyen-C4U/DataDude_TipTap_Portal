declare const ProviderUploadImage: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useStoreUploadImage: <SelectorOutput>(selector: (store: {
    value: boolean;
}) => SelectorOutput) => [SelectorOutput, (value: Partial<{
    value: boolean;
}>) => void];
declare const ProviderUploadVideo: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useStoreUploadVideo: <SelectorOutput>(selector: (store: {
    value: boolean;
}) => SelectorOutput) => [SelectorOutput, (value: Partial<{
    value: boolean;
}>) => void];
declare const ProviderEditableEditor: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useStoreEditableEditor: <SelectorOutput>(selector: (store: {
    value: boolean;
}) => SelectorOutput) => [SelectorOutput, (value: Partial<{
    value: boolean;
}>) => void];
declare const ProviderTheme: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useStoreTheme: <SelectorOutput>(selector: (store: {
    value: string;
}) => SelectorOutput) => [SelectorOutput, (value: Partial<{
    value: string;
}>) => void];
export declare const atomID: import('reactjs-signal').TWritableSignal<string>;
export { ProviderUploadImage, useStoreUploadImage, ProviderUploadVideo, useStoreUploadVideo, ProviderEditableEditor, useStoreEditableEditor, ProviderTheme, useStoreTheme, };
