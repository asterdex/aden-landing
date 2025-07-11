const config = {
  defaultLocale: "en",
  locales: ["en", "ko"],
  load: ["server", "client"],
  fallbackLng: "en",
  resourcesBasePath: "/aden-landing/locales",
  i18nextServer: {
    debug: true,
  },
  i18nextClient: {
    debug: true,
  },
  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },
};

export default config;
