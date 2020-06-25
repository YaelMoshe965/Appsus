// import {eventBus} from '../main-services/eventbus-service.js';

import userMsg from './user-msg.cmp.js' 

export default {
    template: `
    <nav class="nav-bar">
        <router-link to="/">Home</router-link>
        <router-link to="/email">Mister-Email</router-link>
        <router-link to="/keep">Miss-Keep</router-link>
        <router-link to="/book">Miss-Books</router-link>

        <user-msg />
    </nav>
    `,

    components: {
        userMsg
    }
}