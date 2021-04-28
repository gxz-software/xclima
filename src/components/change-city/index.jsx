import { defineComponent, ref } from 'vue'
import citySvg from '@/assets/city.svg'
import './index.less'

export default defineComponent({

    emits: ['changeCity'],
    setup(props, { emit }) {

        const city = ref('')


        const handleSearch = () => {

            if (!city.value) return

            emit('changeCity', city.value)

            city.value = ''
        }

        return {

            city,
            handleSearch
        }
    },
    render() {

        const slots = {

            title: () => <span>Alterar cidade</span>,
            cover: () => <img src={citySvg} class='city-icon' />,
            default: () => <div class='content-input'>

                <a-input v-model={[this.city, 'value']} placeholder='Informe o nome da cidade' />

                <a-button
                    type='primary'
                    onClick={this.handleSearch}
                    v-slots={{

                        icon: () => <fa icon={['fas', 'search']} size='lg' fixedWidth />
                    }}>
                    Buscar
                </a-button>
            </div>
        }

        return (

            <a-card
                class='city-change'
                hoverable={false}
            >
                {slots}
            </a-card>
        )
    }
})