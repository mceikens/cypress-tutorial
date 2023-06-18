import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            config.defaultCommandTimeout = 10000;
            config.viewportWidth = 1920;
            config.viewportHeight = 1080;
            config.env.URL = "http://localhost:8080";
            config.experimentalModifyObstructiveThirdPartyCode = true;
            return config;
        },
        chromeWebSecurity: false,
		experimentalSourceRewriting: false,
		experimentalOriginDependencies: true,
		experimentalModifyObstructiveThirdPartyCode: true,
        scrollBehavior: "center",
    },
    reporter: 'mochawesome'
});
