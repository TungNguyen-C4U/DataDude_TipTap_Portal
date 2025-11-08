interface ServiceType {
    label: string;
    value: string;
    icon: any;
}
export declare const VideoServices: ServiceType[];
export declare const MapServices: ServiceType[];
export declare const DesignServices: ServiceType[];
export declare const DevelopServices: ServiceType[];
export declare const DataServices: ServiceType[];
export declare const OtherServices: never[];
export declare const AllEmbedServices: ServiceType[];
export declare function getEmbedService(value: any): {};
/**
 * Embed service link
 * @id source id
 * @exmplae example link
 * @src source src, used in iframe
 */
export declare const EmbedServiceLink: any;
export declare function getExampleUrl(service: string): string;
export declare function getServiceSrc(originalLink: any): any;
export {};
