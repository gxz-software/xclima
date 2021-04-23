import { defineComponent, Transition } from 'vue'
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
            <p>xClima é um simples aplicativo de clima com base na sua localização(latitude, longitude).</p>
            <p>Clique no card da cidade para mostrar a previsão da semana.</p>
            <p>Esse app é apenas experimental, para mais informações visite o repositório no <a href='#' target='_blank'>Github</a>.</p>
        </a-card>
    </a-col>
)


export default defineComponent({

    props: {

        city: { type: String }
    },
    setup(props) {



        return {


        }

    },
    render() {

        return (
            <>
                <Welcome v-show={!this.city} />

                <Transition name='fade'>

                    <a-row class='x-week-row' justify='center' v-show={this.city}>

                        <a-col class='ant-card' {...{ sm: 24, md: 24, lg: 24, xl: 16 }} >
                            <a-list
                                class='week-days'
                                //loading={this.loading}
                                dataSource={WEEKDATA}
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