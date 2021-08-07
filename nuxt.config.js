export default {
  target: "static",
  components: true,
  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://content.nuxtjs.org
    "@nuxt/content"
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    "@nuxtjs/tailwindcss"
  ],
  content: {
    // Disable for security reason on CodeSandBox
    liveEdit: false
  }
};
