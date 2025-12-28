const {getDefaultConfig} = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname , {
    // [Web-only] Enables CSS support in the Metro
    isCSSEnabled: true,
})

// Add any customizations to the Metro config here
const {withTamagui} = require('@tamagui/metro-plugin');


module.exports = withTamagui(config, {
    components: ['tamagui'],
    config: './tamagui.config.ts',
    outputCSS: "./tamagui-web.css",
})