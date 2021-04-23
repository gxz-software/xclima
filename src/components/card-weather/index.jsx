import { defineComponent, reactive } from 'vue'
import icon from '@/assets/weather-animated/03d.svg'
import './index.less'

export default defineComponent({

    emits: ['click'],
    setup(props, { emit }) {

        const state = reactive({

            city: 'Maringa',
            hours: new Date().toString().substr(16, 5),
            humidity: 0,
            temp: 0,
            wind: 0,
            clouds: 0,
            weather: {},
        })

        const handleClick = () => emit('click', state.city);

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
                    <img src={icon} class='img-icon' />

                    <span class='weather-title'>Nublado</span>
                </div>
            )
        }

        return (

            <a-card
                class='card-weather'
                bordered
                hoverable
                v-slots={slots}
                onClick={this.handleClick}
            >
                <a-row>
                    <a-col class='col-data' span='12'>
                        <a-space size={5} direction='vertical'>
                            <a-space size={40}>

                                <fa icon={['fal', 'wind']} size='lg' />
                                <span>5.5 km/h</span>
                            </a-space>
                            <a-space size={45}>

                                <fa icon={['fal', 'humidity']} size='lg' />
                                <span>78 %</span>
                            </a-space>
                            <a-space size={35}>

                                <fa icon={['fal', 'clouds']} size='lg' />
                                <span>28 %</span>
                            </a-space>
                        </a-space>
                    </a-col>
                    <a-col span='12' style='text-align: end'>
                        <span style='font-size: 48px; display:block; margin-top: 10px'>27º</span>
                    </a-col>
                </a-row>
            </a-card>
        )
    }
})