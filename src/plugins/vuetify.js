/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#E1593B",
          secondary: "#5CBBF6",
          surface: "#FFFFFF",
          background: "#ECEFF2",
          "on-surface": "#131314",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#E1593B",
          secondary: "#5CBBF6",
          surface: "#131314",
          background: "#4A525F",
          "on-surface": "#FFFFFF",
        },
      },
    },
  },
});
