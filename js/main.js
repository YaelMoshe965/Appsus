import { myRouter } from './routes.js';

// import {eventBus} from './main-services/eventbus-service.js'

import navBar from './main-cmps/nav-bar.cmp.js';

var myApp = new Vue({
    el: '#app',
    router: myRouter,
    template: `
        <div>
            <header class="flex space-between align-center">
                <h1>Appsus</h1>
                <nav-bar />
            </header>
            <main>
                <router-view />
            </main>
        </div>  
    `,

    components: {
        navBar
    }
})