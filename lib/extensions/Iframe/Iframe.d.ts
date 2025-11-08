import { Node } from '@tiptap/core';
export interface IIframeAttrs {
    width?: number | string;
    height?: number;
    src?: string;
    defaultShowPicker?: boolean;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        iframe: {
            /**
             * Add an iframe
             */
            setIframe: (options: {
                src: string;
                service: string;
            }) => ReturnType;
        };
    }
}
export declare const Iframe: Node<any, any>;
