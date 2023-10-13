import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      landingPage: {
        header: "Unlimited movies, TV shows, and more",
        content: "Watch anywhere. Cancel anytime.",
      },
      signup: {
        header:
          "Ready to watch? Enter your email to create or restart your membership.",
        input: "Email address",
        button: "Get Started",
      },
    },
  },
  id: {
    translation: {
      landingPage: {
        header: "Film, acara TV tak terbatas, dan banyak lagi",
        content: "Tonton di mana pun. Batalkan kapan pun.",
      },
      signup: {
        header:
          "Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.",
        input: "Alamat email",
        button: "Mulai",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    resources,
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
