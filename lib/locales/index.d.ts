import { default as en } from './en';
type LanguageType = 'en' | 'hu_HU' | 'vi' | 'zh_CN' | 'pt_BR' | (string & {});
type MessageKeysType = keyof typeof en;
interface LocaleInterface {
    lang: LanguageType;
    message: Record<LanguageType, Record<MessageKeysType, string>>;
}
export declare const DEFAULT_LOCALE: LocaleInterface;
declare class Locale {
    private emitter;
    constructor();
    get lang(): LanguageType;
    set lang(lang: LanguageType);
    get message(): Record<LanguageType, Record<MessageKeysType, string>>;
    set message(message: Record<LanguageType, Record<MessageKeysType, string>>);
    loadLangMessage(lang: LanguageType): Record<MessageKeysType, string>;
    private isLangSupported;
    setLang(lang: LanguageType): void;
    registerWatchLang(hook: (lang: LanguageType) => void): {
        unsubscribe: () => void;
    };
    setMessage(lang: string, message: Record<MessageKeysType, string>): void;
    buildLocalesHandler(lang?: LanguageType): (path: MessageKeysType) => string;
}
declare const locale: Locale;
declare function useLocale(): {
    lang: LanguageType;
    t: (path: MessageKeysType) => string;
};
declare const localeActions: {
    t: (path: MessageKeysType) => string;
};
export default locale;
export { Locale, localeActions, useLocale };
export { default as en } from './en';
export { default as pt_BR } from './pt-br';
export { default as vi } from './vi';
export { default as zh_CN } from './zh-cn';
export { default as hu_HU } from './hu';
