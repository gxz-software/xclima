import { defineComponent } from 'vue'
import Header from './header'
import CardWeather from '../card-weather'

export default defineComponent({

    setup() {

    },
    render() {

        return (
            <a-layout id="main">

                <Header onThemeDark={(value) => console.log('dark theme', value)} />

                <a-layout-content id="container">
                    {/* <div style='background: #ffff; padding: 10px; min-height:500px '> */}


                    <a-row justify='center' style='margin-top: 2em  '>
                        <CardWeather />
                    </a-row>

                    {/* </div> */}
                </a-layout-content>
                {/* <a-layout-footer style='text-align: center'>
                        GXZ © 2016
                    </a-layout-footer> */}
            </a-layout>
        )
    }
})