import { createI18n } from 'vue-i18n'

import en from "@/lang/en";
import vn from "@/lang/vn";

const messages = {
    en : en,
    vn : vn
};

const i18n = createI18n({
    locale: "vn",
    fallbackLocale: "vn", // set fallback locale
    messages, // set locale messages
});
  

export default i18n;