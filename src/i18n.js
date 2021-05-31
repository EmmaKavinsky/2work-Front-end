import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)



function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}

  locales.keys().forEach(key => {
    let keyPath = key.split('/')
    keyPath.shift()
    let fileName = keyPath[keyPath.length - 1]
    let lang = fileName.split('.')[0]
    messages[lang] = locales(key)
  })

  return messages
}


// This function use to get lang or set lang when app start
function getLangSelected() {
    let defaultLanguage = 'fr';
    let language = localStorage.getItem("language");
    if(language) {
        return language;
    } else {
        localStorage.setItem("language", defaultLanguage);
        return defaultLanguage
    }
}



// Create VueI18n instance with options
export default new VueI18n({
  locale: getLangSelected(), // set locale
  messages: loadLocaleMessages() // set locale messages
})
