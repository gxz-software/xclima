import { defineComponent } from 'vue';
import icon from '@/assets/openweathermap/01d.svg'

export default defineComponent({

    setup() {

        return () => (

            <div class='h-80 w-72 border rounded border-black p-5 bg-white flex flex-col'>
                <div class='flex justify-between'>
                    <span class='px-2 border rounded border-gray-300'>Maringa</span>
                    <span class='text-lg font-semibold'>00:00</span>
                </div>
                <div class='p-1 flex items-center flex-col text-center'>
                    <img class='h-32 w-32' src={icon} />
                    <h2 class='font-semibold mt-2'>Sol</h2>
                </div>
                <div class='p-1 h-full w-full flex flex-row'>
                    <div class='flex flex-col flex-1'>
                        <span class='inline-flex '>
                            <fa icon={['fas', 'sun']} size='lg' />

                            <h3 class='ml-6'>4.12 m/s</h3>
                        </span>
                        <span class='inline-flex '>
                            <fa icon={['fas', 'sun']} size='lg' />

                            <h3 class='ml-6'>4.12 m/s</h3>
                        </span>
                        <span class='inline-flex '>
                            <fa icon={['fas', 'sun']} size='lg' />

                            <h3 class='ml-6'>4.12 m/s</h3>
                        </span>
                    </div>
                    <div class='h-full'>
                        <span class='font-semibold text-5xl block mt-4'>18º</span>
                    </div>
                </div>
            </div>
        )
    },

})