import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';  // Import the Vuetify plugin
import 'vuetify/styles';

createApp(App)
  .use(vuetify)  // Use Vuetify
  .mount('#app');