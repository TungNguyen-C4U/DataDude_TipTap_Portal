import { Extensions, Extension } from '@tiptap/core';
import { Group } from './types';
export interface SlashCommandOptions {
    renderGroupItem?: (extension: Extensions[number], groups: Group[]) => void;
}
export declare const SlashCommand: Extension<SlashCommandOptions, any>;
export default SlashCommand;
