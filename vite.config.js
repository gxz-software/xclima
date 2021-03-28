import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { getThemeVariables } from 'ant-design-vue/dist/theme'


export default {

    server: {

        port: 8080
    },
    css: {

        preprocessorOptions: {

            less: {

                // modifyVars: getThemeVariables({

                //     dark: false,
                // }),
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
