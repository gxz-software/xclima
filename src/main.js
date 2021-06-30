import { createApp } from 'vue'
import fontAwessome from './style/font-awesome'
import App from './components/app'
import './style/index.less'

const Vue = createApp(App)

Vue.config.productionTip = false

fontAwessome(Vue)

Vue.mount('#app')