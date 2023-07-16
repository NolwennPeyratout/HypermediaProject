// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/general.css'
    ],

    modules: ['@nuxtjs/supabase'],
    ssr:true,
    serverHandlers: [
        {
            route: '/server',
            handler: '~/server/api/index.js',
            middleware: true
        }
    ],
})
