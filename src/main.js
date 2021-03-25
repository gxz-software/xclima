import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './components/app'
import './styles/index.less'
// import 'ant-design-vue/dist/antd.less'

const Vue = createApp(App)

Vue.use(Antd)

Vue.config.productionTip = false

Vue.mount('#app')