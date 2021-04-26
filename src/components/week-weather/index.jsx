import { defineComponent, Transition, ref, watch } from 'vue'
import { WEEKDATA } from './data'
import icon from '@/assets/weather-animated/03d.svg'
import './index.less'

const Welcome = () => (

    <a-col {...{ sm: 20, md: 18, lg: 16, xl: 14 }} style='margin: auto'>
        <a-card
            class='card-welcome'
            bordered={false}
        >
            <h1>Bem vindo!</h1>
            <p>xClima é um simples aplicativo de clima com base na sua localização(latitude, longitude) desenvolvido com dados meteorológicos da
                <a href="https://openweathermap.org/" target='_blank'> OpenWeatherMap</a>.
                Certifique-se de conceder permissão á sua localização.
            </p>

            <p>Clique sobre o card principal para visualizar o clima dos próximos 6 dias. Esse app é apenas experimental, para mais informações visite o repositório no <a href='#' target='_blank'>Github</a>.</p>
        </a-card>
    </a-col>
)


export default defineComponent({

    props: {

        city: { type: String }
    },
    setup(props) {

        let loading = ref(true)

        watch(() => props.city, (value, oldV) => {

            if (value) {

                setTimeout(() => {

                    loading.value = false

                }, 3000)
            }
        })

        return {

            loading,
        }
    },
    render() {

        return (
            <>
                <Welcome v-show={!this.city} />

                <Transition name='fade'>

                    <a-row class='x-week-row' justify='center' v-show={this.city}>

                        <a-col class='ant-card' {...{ sm: 22, md: 22, lg: 22, xl: 22 }}>

                            <a-list
                                class='week-days'
                                dataSource={WEEKDATA}
                                loading={this.loading}
                                grid={{ gutter: 0, xs: 1, sm: 2, md: 3, lg: 3, xl: 6 }}
                                renderItem={({ item }) => (

                                    <a-list-item class='week-days-item'>

                                        <h2 class='week-days-item-title'>{item.dayLabel}</h2>

                                        <a-space direction='vertical'>
                                            <img src={icon} class='week-days-item-icon' />
                                            <span>
                                                <fa icon={['fal', 'temperature-frigid']} fixedWidth size='lg' />
                                                {item.temp.min.toFixed()}º
                                            </span>

                                            <span>
                                                <fa icon={['fal', 'temperature-hot']} fixedWidth size='lg' />
                                                {item.temp.max.toFixed()}º
                                            </span>

                                            <span class='week-days-item-description'>{item.weather.description}</span>
                                        </a-space>
                                    </a-list-item>
                                )}
                            />
                        </a-col>
                    </a-row>
                </Transition>
            </>
        )
    }
})