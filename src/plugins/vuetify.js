import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

// Translation provided by Vuetify (javascript)
import zhHans from 'vuetify/es5/locale/zh-Hans'
import en from 'vuetify/es5/locale/en'

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { zhHans, en },
        current: 'zhHans',
    },
    theme: {
        themes: {
            light: {
                // primary: colors.red.darken1, // #E53935
                // secondary: colors.red.lighten4, // #FFCDD2
                // accent: colors.indigo.base, // #3F51B5
            },
        },
    },
});
