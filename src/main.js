import App from './App.vue'
import store from './store';
import {createApp} from 'vue'
import {registerPlugins} from '@/plugins'
import axios from 'axios'
import currency from "@/Fillters/currency";
import dayjs from 'dayjs'
import { configure } from 'vee-validate';
import {localize, setLocale} from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';


configure({
  generateMessage: localize({zh_TW: zhTW}),
  validateOnBlur: true,
});
setLocale('zh_TW');

const app = createApp(App);
axios.defaults.withCredentials = true;
app.config.globalProperties.$filter = {currency};
app.config.globalProperties.$dayjs = dayjs
registerPlugins(app)
app.use(store);
app.mount('#app')
