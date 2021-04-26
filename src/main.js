import {

    Button,
    Card, Col,
    Input, Layout, List,
    Menu,
    PageHeader,
    Radio, Row,
    Space, Switch, Spin,
    Tag,

} from 'ant-design-vue'

import { createApp } from 'vue'
import App from './components/app'
import fontAwessome from './style/font-awesome'
import './style/index.less'

const Vue = createApp(App)

const uses = [

    Layout,
    Menu,
    Switch,
    Col,
    Row,
    Button,
    PageHeader,
    Input,
    Radio,
    Card,
    Tag,
    Space,
    List,
    Spin,
]

uses.map(component => Vue.use(component))


Vue.config.productionTip = false

fontAwessome(Vue)

Vue.mount('#app')