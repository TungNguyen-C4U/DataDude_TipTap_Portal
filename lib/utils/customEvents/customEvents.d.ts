import { EventValues } from './events.constant';
export declare function listenEvent(eventName: EventValues, callback: any): () => void;
export declare function dispatchEvent(eventName: EventValues, detail?: any): void;
