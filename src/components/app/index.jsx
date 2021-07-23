import { defineComponent } from 'vue'
import Weather from '../card-weather/index2'

export default defineComponent({

    setup() {

        return () => (

            <div id="app">
                <nav id="top-bar">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex items-center justify-between h-16">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img
                                        class="h-8 w-8"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                        alt="Workflow"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 class="text-3xl font-bold text-gray-900">
                            Dashboard
                        </h1>
                    </div>
                </header> */}
                <main id="main">
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 border">
                        <div class="px-4 py-6 sm:px-0 flex flex-row justify-between">
                            {/* <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 mb-2">
                            </div> */}

                            <Weather />
                            <Weather />
                            <Weather />

                        </div>
                    </div>

                </main>
            </div>
        )
    }
})