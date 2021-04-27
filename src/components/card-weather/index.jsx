import { defineComponent, reactive, watchEffect } from 'vue'
import { Spin } from 'ant-design-vue'
import { notification } from 'ant-design-vue'
import pathIcon from './icons'
import './index.less'

Spin.setDefaultIndicator({

    indicator: () => <fa class='x-spinner' icon={['fad', 'eclipse-alt']} spin />
})

export default defineComponent({

    props: {

        data: { type: Object, required: true },
        city: { type: String, required: false }
    },
    emits: ['click'],
    setup(props, { emit }) {

        const state = reactive({

            city: '',
            coords: {

                lat: 0,
                lon: 0
            },
            hours: new Date().toString().substr(16, 5),
            clouds: 0,
            humidity: 0,
            temp: 0,
            wind: 0,
            weather: {},
            loading: true,
        })

        const handleClick = () => {

            if (state.coords.lat === 0 || state.coords.lon === 0) return

            emit('click', state.coords)
        }

        async function getWeather(lat, lon) {

            if (!lat || !lon) throw new Error('Cannot find latitude or longitude.')

            const response = await fetch(`${import.meta.env.VITE_API_URL}weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_ID}&units=metric&lang=pt_br`)

            return await response.json()
        }

        async function getWeatherByCityName(name) {

            if (!name) throw new Error('Cannot read property name')

            const response = await fetch(`${import.meta.env.VITE_API_URL}weather?q=${name}&appid=${import.meta.env.VITE_API_ID}&units=metric&lang=pt_br`)

            if (response.status !== 200) throw 'Cidade não encontrada.'

            return await response.json()
        }

        watchEffect(() => {

            const { lat, lon } = props.data.coords

            if ((lat && lon) && (lat !== 0 && lon !== 0)) {

                getWeather(lat, lon).then(data => {

                    const { main, name, wind, clouds, weather, coord } = data

                    Object.assign(state, {

                        city: name,
                        coords: coord,
                        clouds: clouds.all,
                        humidity: main.humidity,
                        temp: Math.round(main.temp),
                        wind: wind.speed,
                        weather: weather[0]
                    })

                }).catch(err => {

                    console.log('ERRO API', err)
                }).finally(() => state.loading = false)
            }
        })

        watchEffect(() => {

            if (props.city) {

                state.loading = true

                getWeatherByCityName(props.city).then(data => {

                    const { main, name, wind, clouds, weather, coord } = data

                    Object.assign(state, {

                        city: name,
                        coords: coord,
                        clouds: clouds.all,
                        humidity: main.humidity,
                        temp: Math.round(main.temp),
                        wind: wind.speed,
                        weather: weather[0]
                    })

                }).catch(err => {

                    notification.error({

                        message: 'Ops, houve um erro.',
                        description: `${err}`
                    })

                }).finally(() => state.loading = false)
            }
        })

        return {

            state,
            handleClick,
        }
    },
    render() {

        const slots = {

            title: () => <a-tag>{this.state.city}</a-tag>,
            extra: () => this.state.hours,
            cover: () => (
                <div>
                    <img src={this.state.weather.icon ? pathIcon(this.state.weather.icon) : null} class='img-icon' />

                    <span class='weather-title'>{this.state.weather.description || '...'}</span>
                </div>
            )
        }

        const loading = {

            default: () => (
                <div class='content-spinner'>
                    <a-spin spinning={true} size='large' tip='Carregando...' />
                </div>
            )
        }

        return (

            <a-card
                class='card-weather'
                bordered
                hoverable
                v-slots={this.state.loading ? loading : slots}
                onClick={this.handleClick}
            >
                <a-row>
                    <a-col class='col-data' span='12'>
                        <a-space size={5} direction='vertical'>
                            <a-space size={40}>

                                <fa icon={['fal', 'wind']} size='lg' />
                                <span>{this.state.wind} m/s</span>
                            </a-space>
                            <a-space size={45}>

                                <fa icon={['fal', 'humidity']} size='lg' />
                                <span>{this.state.humidity} %</span>
                            </a-space>
                            <a-space size={35}>

                                <fa icon={['fal', 'clouds']} size='lg' />
                                <span>{this.state.clouds} %</span>
                            </a-space>
                        </a-space>
                    </a-col>
                    <a-col class='col-degress' span='12'>
                        <span class='degress-current'>{this.state.temp}º</span>
                    </a-col>
                </a-row>
            </a-card>
        )
    }
})