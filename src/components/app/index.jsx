import { defineComponent, ref } from 'vue'
import Header from './Header'
import CardWeather from '../card-weather'
// import Content from './content'

export default defineComponent({

    setup() {

        const darkTheme = ref(false)

        const handleTheme = (is) => darkTheme.value = is

        return {

            darkTheme,
            handleTheme,
        }

    },
    render() {

        return (
            <a-layout id="main" class={{ 'dark-theme': this.darkTheme }}>

                <Header onChangeTheme={this.handleTheme} />

                <a-layout-content id="container">
                    <div style={{ padding: '100px' }}>
                        <CardWeather />
                    </div>
                </a-layout-content>
                {/* <a-layout-footer style='text-align: center'>
                        GXZ © 2016
                    </a-layout-footer> */}
            </a-layout>
        )
    }
})