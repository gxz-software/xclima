import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'

export default {

    server: {

        port: 8080
    },
    css: {

        preprocessorOptions: {

            less: {

                modifyVars: {

                    'primary-color': '#16d9ad',
                },
                javascriptEnabled: true
            }
        }
    },
    plugins: [

        vueJsx(),
        styleImport({

            libs: [

                {
                    libraryName: 'ant-design-vue',
                    esModule: true,
                    resolveStyle: (name) => {
                        return `ant-design-vue/es/${name}/style`;
                        // return `ant-design-vue/es/${name}/style/css`;
                    },
                }
            ]
        })

    ],
    resolve: {

        alias: [

            { find: '@', replacement: resolve(__dirname, 'src') }
        ],
    },
}
