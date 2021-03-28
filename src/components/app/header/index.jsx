import { defineComponent, ref } from 'vue'
import './index.less'

export default defineComponent({

    setup(props, { emit }) {

        const dark = ref(false)

        function handleSwitch(is) {

            dark.value = is;

            emit('themeDark', is);
        }

        return {

            dark,
            handleSwitch
        }
    },
    render() {



        return (
            <a-layout-header>

                <div class="logo" />

                <a-menu
                    theme="dark"
                    mode="horizontal"
                    style="line-height: 64px"
                >

                    <a-row align='middle' justify='space-between'>
                        <span>Clima</span>

                        <span>HOJE</span>
                        <a-switch
                            v-model={[this.dark, 'checked']}
                            onChange={value => this.handleSwitch(value)}
                        />
                    </a-row>

                </a-menu>

            </a-layout-header>
        )
    }
})