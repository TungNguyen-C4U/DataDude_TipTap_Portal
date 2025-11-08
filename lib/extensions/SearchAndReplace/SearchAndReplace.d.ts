import { Extension } from '@tiptap/core';
import { GeneralOptions } from '../../types';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        search: {
            setSearchTerm: (searchTerm: string) => ReturnType;
            setReplaceTerm: (replaceTerm: string) => ReturnType;
            replace: () => ReturnType;
            replaceAll: () => ReturnType;
            goToPrevSearchResult: () => void;
            goToNextSearchResult: () => void;
            setCaseSensitive: (caseSensitive: boolean) => ReturnType;
        };
    }
}
interface Result {
    from: number;
    to: number;
}
interface SearchOptions extends GeneralOptions<SearchOptions> {
    searchTerm: string;
    replaceTerm: string;
    searchResultClass: string;
    searchResultCurrentClass: string;
    caseSensitive: boolean;
    disableRegex: boolean;
    onChange?: () => void;
}
interface SearchStorage {
    results: Result[];
    currentIndex: number;
}
export declare const SearchAndReplace: Extension<SearchOptions, SearchStorage>;
export {};
