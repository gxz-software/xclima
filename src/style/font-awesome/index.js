import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {

    fasHome
} from './icons/fas'

import {

    falWind,
    falHumidity,
    falClouds

} from './icons/fal'


library.add(

    //FAS
    fasHome,

    //FAD
    falWind,
    falHumidity,
    falClouds,
)

export default function (app) {

    app.component('fa', FontAwesomeIcon);
}
