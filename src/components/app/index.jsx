import { defineComponent } from 'vue'
import './index.css'

export default defineComponent({

    render() {

        return (
            <a-layout class="layout">
                <a-layout-header>
                    <div class="logo" />
                    <a-menu theme="dark" mode="horizontal" style="line-height: 64px">
                        Header
                    </a-menu>
                </a-layout-header>

                <a-layout-content style='padding: 0 50px'>
                    <div style='background: #c3c3c3; padding: 10px; min-height:500px '></div>
                </a-layout-content>
                <a-layout-footer style='text-align: center'>
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        )
    }
})