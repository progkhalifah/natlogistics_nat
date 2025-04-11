import {createI18n} from "vue-i18n";
import ar from './locales/ar.json';
import en from './locales/en.json';
import store from "@/store/store";


function loadLocaleMessages() {
    const locales = [{en: en}, {ar: ar}]
    const messages = {}
    locales.forEach(lang => {
        const key = Object.keys(lang)
        messages[key] = lang[key]
    })
    return messages
}

export default createI18n({
    locale: store.getters.currentLanguage, // change here the language
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
})