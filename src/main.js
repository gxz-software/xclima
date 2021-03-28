import { createApp } from 'vue'
import './style/index.less'
import App from './components/app'
import Antd from 'ant-design-vue'

import fontAwessome from './style/font-awesome'

// import 'ant-design-vue/dist/antd.less'

const Vue = createApp(App)

Vue.use(Antd)

Vue.config.productionTip = false

fontAwessome(Vue)

Vue.mount('#app')