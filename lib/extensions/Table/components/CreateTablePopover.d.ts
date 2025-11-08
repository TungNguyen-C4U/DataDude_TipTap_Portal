interface IPropsCreateTablePopover {
    createTable: any;
    children: any;
}
export interface GridSize {
    rows: number;
    cols: number;
}
export interface CreateTablePayload extends GridSize {
    withHeaderRow: boolean;
}
declare function CreateTablePopover(props: IPropsCreateTablePopover): import("react/jsx-runtime").JSX.Element;
export default CreateTablePopover;
