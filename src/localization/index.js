import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./locale/ru";
import en from "./locale/en";

const saveToLocaStorage = (lang) => {
  localStorage.setItem('lang', lang);
}

export const getLocale = () => {
  if (localStorage.getItem('lang')) {
    return localStorage.getItem('lang');
  }
	const navigatorObject = window.navigator;
	let language = navigatorObject ? navigatorObject.language : "ru";
	return language.substr(0, 2).toLowerCase();
};


  i18next.use(initReactI18next).init({
    resources: {
      en,
      ru,
    },
    lng: getLocale(),
    fallbackLng: getLocale(),
    // debug: process.env.NODE_ENV !== 'production',
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });


  i18next.on('languageChanged', saveToLocaStorage);

export default i18next;

