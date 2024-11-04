// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: {enabled: true},
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    plugins: [
        "~/plugins/bootstrap.client.js", // Url to file plugin Bootstrap,
    ],
    app: {
        head: {
            title: "BETTYCHOICE VIỆT NAM",
            meta: [{name: "description", content: "Beetychoice Việt Nam"}],
            link: [
                {rel: "stylesheet", href: ""},
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
                    integrity: "sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==",
                    crossorigin: "anonymous",
                    referrerpolicy: "no-referrer",
                },
            ],
        },
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY,
        public: {
            apiBaseUrl: "https://api.bettychoice.com.vn",
            x_api_key: process.env.X_API_KEY,
        },
    },
});
