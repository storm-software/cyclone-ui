import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";
import i18n from "i18next";
import translationEn from "../../website/public/locales/en/common.json";
import translationDe from "../../website/public/locales/de/common.json";

const ns = ["translation"];
const supportedLngs = ["en", "de"];
// const resources = ns.reduce((acc, n) => {
//   supportedLngs.forEach((lng) => {
//     if (!acc[lng]) acc[lng] = {}
//     acc[lng] = {
//       ...acc[lng],
//       [n]: require(`../../next/public/locales/${lng}/${n}.json`)
//     }
//   })
//   return acc
// }, {})

i18n
  .use(initReactI18next)
  .use(backend)
  .init({
    //debug: true,
    lng: "en",
    fallbackLng: "en",
    defaultNS: "translation",
    ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
    resources: {
      en: {
        translation: translationEn
      },
      de: {
        translation: translationDe
      }
    }
  });

export default i18n;
