import { defineComponent, Transition, ref, watch } from 'vue'
import pathIcon from '../card-weather/icons'
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
                Certifique-se de conceder permissão á sua localização, ou pesquise pela cidade desejada.
            </p>

            <p>Clique sobre o card principal para visualizar o clima dos próximos 6 dias. Esse app é apenas experimental, para mais informações visite o repositório no <a href='#' target='_blank'>Github</a>.</p>
        </a-card>
    </a-col>
)

const daysOfWeek = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']

export default defineComponent({

    props: {

        data: { type: Object, required: true },
        visible: { type: Boolean, required: true }
    },
    setup(props) {

        const loading = ref(true)

        const weatherWeek = ref([])

        async function getWeatherWeek(lat, lon) {

            if (!lat || !lon) throw new Error('Cannot find latitude or longitude.')

            const response = await fetch(`${import.meta.env.VITE_API_URL}onecall?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_ID}&units=metric&lang=pt_br&exclude=current,minutely,hourly,alerts`)

            return await response.json()
        }

        watch(() => props.visible, (isVisible) => {

            if (isVisible) {

                if (weatherWeek.value.length) weatherWeek.value = []

                getWeatherWeek(props.data.lat, props.data.lon).then(({ daily }) => {

                    for (let i = 1; i < 7; i++) {

                        let dateUTC = new Date(daily[i].dt * 1000)
                        let numDay = dateUTC.getDay()

                        weatherWeek.value.push({

                            data: dateUTC.toLocaleDateString('pt-BR'),
                            dayNumber: numDay,
                            dayLabel: daysOfWeek[numDay],
                            temp: {

                                max: Math.round(daily[i].temp.max),
                                min: Math.round(daily[i].temp.min)
                            },
                            weather: daily[i].weather[0]
                        })
                    }
                }).catch(err => {

                    console.log('err api', err)

                }).finally(() => loading.value = false)
            }
        })

        return {

            loading,
            weatherWeek
        }
    },
    render() {

        return (
            <>
                <Welcome v-show={!this.visible} />

                <Transition name='fade'>

                    <a-row class='x-week-row' justify='center' v-show={this.visible}>

                        <a-col class='ant-card' {...{ sm: 22, md: 22, lg: 22, xl: 22 }}>

                            <a-list
                                class='week-days'
                                dataSource={this.weatherWeek}
                                loading={this.loading}
                                grid={{ gutter: 0, xs: 1, sm: 2, md: 3, lg: 3, xl: 6 }}
                                renderItem={({ item }) => (

                                    <a-list-item class='week-days-item'>

                                        <h2 class='week-days-item-title'>{item.dayLabel}</h2>

                                        <a-space direction='vertical'>
                                            <img src={pathIcon(item.weather.icon)} class='week-days-item-icon' />

                                            <span>
                                                <fa icon={['fal', 'temperature-hot']} fixedWidth size='lg' />
                                                {item.temp.max}º
                                            </span>
                                            <span>
                                                <fa icon={['fal', 'temperature-frigid']} fixedWidth size='lg' />
                                                {item.temp.min}º
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