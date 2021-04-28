import { defineComponent, reactive, ref, onBeforeMount } from 'vue'
import { notification } from 'ant-design-vue'
import Header from './Header'
import CardWeather from '../card-weather'
import WeekWeather from '../week-weather'
import ChangeCity from '../change-city'

export default defineComponent({

    setup() {

        const darkTheme = ref(false)

        const location = reactive({

            city: '',
            coords: {

                lat: 0,
                lon: 0,
            },
            week: {

                visible: false,
                coords: {},
            }
        })

        const handleTheme = (is) => darkTheme.value = is

        const getCoords = () => {

            return new Promise((resolve, reject) => {

                if (!('geolocation' in navigator)) {

                    reject(new Error('O serviço de geolocation não é suportado pelo seu navegador.'))
                }

                navigator.geolocation.getCurrentPosition(({ coords }) => {

                    resolve(coords)

                }, error => reject(error))
            })
        }

        const handleClick = (value) => {

            Object.assign(location.week, {

                visible: true,
                coords: value
            })
        }

        const handleChangeCity = (city) => {

            if (location.week.visible) {

                Object.assign(location.week, {

                    visible: false,
                    coords: {}
                })
            }

            location.city = city
        }

        onBeforeMount(() => {

            getCoords().then(({ latitude, longitude }) => {

                location.coords.lat = latitude
                location.coords.lon = longitude

                // notification.success({ message: 'Geolocation OK!!' })

            }).catch(err => {

                let description = ''

                if (err.code && err.code === 1) description = 'Não foi possível obter a informação sobre geolocalização por que a página não possui permissão para fazê-lo.'

                else description = err

                notification.error({

                    message: 'Erro de localização',
                    description,
                })
            })
        })

        return {

            darkTheme,
            location,
            handleTheme,
            handleClick,
            handleChangeCity,
        }

    },
    render() {

        return (
            <a-layout id="main" class={{ 'dark-theme': this.darkTheme }}>

                <Header onChangeTheme={this.handleTheme} />

                <a-layout-content id="container">
                    <a-row class='x-weather' justify='center'>

                        <CardWeather
                            city={this.location.city}
                            data={this.location}
                            onClick={this.handleClick}
                        />

                        <ChangeCity style='margin-left: 35px;' onChangeCity={this.handleChangeCity} />
                    </a-row>

                    <div class='x-week'>

                        <WeekWeather visible={this.location.week.visible} data={this.location.week.coords} />
                    </div>
                </a-layout-content>
            </a-layout>
        )
    }
})