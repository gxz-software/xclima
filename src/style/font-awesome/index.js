import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {

    fasMoon,
    fasSun

} from './icons/fas'

import {

    falWind,
    falHumidity,
    falClouds,
    falTemperatureHot,
    falTemperatureFrigid

} from './icons/fal'


library.add(

    //FAS
    fasMoon,
    fasSun,

    //FAD
    falWind,
    falHumidity,
    falClouds,
    falTemperatureHot,
    falTemperatureFrigid,
)

export default function (app) {

    app.component('fa', FontAwesomeIcon);
}
