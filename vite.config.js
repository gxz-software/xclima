import { resolve } from 'path'
// import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default {

    server: {

        port: 8080
    },
    css: {

        preprocessorOptions: {

            less: {

                javascriptEnabled: true
            }
        }
    },
    plugins: [

        vueJsx(),
    ],
    resolve: {

        alias: [

            { find: '@', replacement: resolve(__dirname, 'src') }
        ],
    },
}
