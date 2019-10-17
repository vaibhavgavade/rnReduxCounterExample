import ReactNative from 'react-native'
import en from '../locales/en.json';
import he from '../locales/he.json';
import I18n from 'react-native-i18n';
I18n.fallbacks=true;
I18n.translations={
    en,
    he
}
const currentlocale=I18n.currentLocale();
export const isRTL=currentlocale.indexOf('he')===0 || currentlocale.indexOf('ar')
ReactNative.I18nManager.allowRTL(isRTL)

export function strings(name,params={}){
    return I18n.t(name,params)
}

export default I18n