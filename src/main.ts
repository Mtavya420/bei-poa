import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBasket, faSearch, faShoppingCart, faHeart, faUserCircle ,faBars, faShare, faEye } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App)


library.add(faShoppingBasket, faSearch, faShoppingCart, faHeart, faShare, faEye ,faUserCircle,faBars, faFacebookF, faTwitter, faInstagram, faLinkedin)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
