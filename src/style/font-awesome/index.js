import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {

    fasMoon,
    fasSun,

} from './icons/fas'

import {

    falWind,
    falHumidity,
    falClouds,
    falTemperatureHot,
    falTemperatureFrigid,

} from './icons/fal'

import { fadEclipseAlt } from './icons/fad'


library.add(

    //FAS
    fasMoon,
    fasSun,

    //FAL
    falWind,
    falHumidity,
    falClouds,
    falTemperatureHot,
    falTemperatureFrigid,

    //FAD
    fadEclipseAlt,
)

export default function (app) {

    app.component('fa', FontAwesomeIcon);
}
