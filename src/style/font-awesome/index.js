import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {

    fasMoon,
    fasSun,
    fasSearch

} from './icons/fas'

import {

    falWind,
    falHumidity,
    falClouds

} from './icons/fal'

import { fadEclipseAlt, fadTemperatureHigh, fadTemperatureLow } from './icons/fad'


library.add(

    //FAS
    fasMoon,
    fasSun,
    fasSearch,

    //FAL
    falWind,
    falHumidity,
    falClouds,

    //FAD
    fadEclipseAlt,
    fadTemperatureHigh,
    fadTemperatureLow
)

export default function (app) {

    app.component('fa', FontAwesomeIcon);
}
