import { defineComponent } from 'vue'

export default defineComponent({

    render() {

        return (
            <a-layout-header>
                <div class="logo" />
                <a-menu theme="dark" mode="horizontal" style="line-height: 64px">
                    Header
                    </a-menu>
            </a-layout-header>
        )
    }
})