import { default as React } from 'react';
export default function createFastContext<Store>(initialState: Store): {
    Provider: ({ children }: {
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    useStore: <SelectorOutput>(selector: (store: Store) => SelectorOutput) => [SelectorOutput, (value: Partial<Store>) => void];
};
