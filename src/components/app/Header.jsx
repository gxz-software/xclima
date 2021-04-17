import { defineComponent } from 'vue'

export default defineComponent({

    emits: ['changeTheme'],
    setup(props, { emit }) {


        const handleSwitch = (value) => emit('changeTheme', value)

        return () => (

            <header class='header'>
                <div class='ant-menu'>

                    <div id='logo' />

                    <a-row align='middle' justify='space-between' style='width: 100%'>
                        <span class='name-app'>Clima</span>

                        <h3>HOJE</h3>

                        <div>
                            <fa icon={['fas', 'sun']} fixedWidth size='lg' />
                            <a-switch onChange={handleSwitch} />
                            <fa icon={['fas', 'moon']} size='lg' style={{ marginLeft: '4px' }} />

                        </div>
                    </a-row>
                </div>
            </header>
        )
    },
})