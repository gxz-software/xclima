import { defineComponent, Transition } from 'vue'
import { WEEKDATA } from './data'
import './index.less'

const Welcome = () => (

    // <a-row class="welcome-content">
    // <div class='welcome-content'>
    //     <h1>Bem vindo!</h1>
    //     <p>Esse app é apenas experimental, para mais informações visite o repositório no <a href="#" target="_blank">Github</a>.</p>
    // </div>
    <a-col {...{ sm: 24, md: 18, lg: 12, xl: 14 }} style='margin: 0 auto'>
        <a-card
            class='welcome-content'
            bordered='false'
        >
            <h1>Bem vindo!</h1>
            <p>Esse app é apenas experimental, para mais informações visite o repositório no <a href="#" target="_blank">Github</a>.</p>
        </a-card>
    </a-col>
    // </a-row>
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

                <Transition name="fade">

                    <div class='x-week-content' v-show={this.city}>

                        <a-col {...{ sm: 24, md: 24, lg: 24, xl: 24 }} style="padding: 1em">
                            <a-list
                                class="week-days"
                                //loading={this.loading}
                                dataSource={WEEKDATA}
                                grid={{ gutter: 16, column: 6 }}
                                renderItem={({ item }) => (

                                    <a-list-item>
                                        <a-card class="card-day" bordered={false}>
                                            <h2 class="day-week">{item.dayLabel}</h2>
                                            {/* <i class="icon sun" /> */}

                                            <a-space size="middle" direction="vertical">
                                                {/* <InlineSvg width="6.5em" height="6.5em" src={pathIcons(item.weather.icon)} /> */}
                                                <a-row justify="center" style="line-height: 1.5em">
                                                    <i class="icon min" />
                                                    <span class="span-temp">{item.temp.min.toFixed()}º</span>
                                                </a-row>
                                                <a-row justify="center" style="line-height: 1.5em">
                                                    <i class="icon max" />
                                                    <span class="span-temp">{item.temp.max.toFixed()}º</span>
                                                </a-row>
                                                <span style="text-transform: capitalize">{item.weather.description}</span>
                                            </a-space>
                                        </a-card>
                                    </a-list-item>
                                )}
                            />
                        </a-col>
                    </div>
                </Transition>
            </>
        )
    }
})