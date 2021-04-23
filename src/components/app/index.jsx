import { defineComponent, reactive, ref } from 'vue'
import Header from './Header'
import CardWeather from '../card-weather'
import WeekWeather from '../week-weather'

export default defineComponent({

    setup() {

        const darkTheme = ref(false)

        const handleTheme = (is) => darkTheme.value = is

        const currentCity = reactive({

            name: '',
        })

        const handleClick = (value) => currentCity.name = value

        return {

            darkTheme,
            handleTheme,
            currentCity,
            handleClick,
        }

    },
    render() {

        return (
            <a-layout id="main" class={{ 'dark-theme': this.darkTheme }}>

                <Header onChangeTheme={this.handleTheme} />

                <a-layout-content id="container">
                    <a-row class='x-weather' justify='center'>

                        <CardWeather onClick={this.handleClick} />

                    </a-row>

                    <a-row class='x-week'>

                        <WeekWeather city={this.currentCity.name} />

                    </a-row>

                </a-layout-content>
                {/* <a-layout-footer style='text-align: center'>
                    GXZ © 2016
                </a-layout-footer> */}
            </a-layout>
        )
    }
})