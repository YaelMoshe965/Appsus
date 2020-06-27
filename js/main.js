import { myRouter } from './routes.js';

import navBar from './main-cmps/nav-bar.cmp.js';

var myApp = new Vue({
    el: '#app',
    router: myRouter,
    template: `
        <div>
            <header class="flex space-between align-center">
                <router-link to="/" class="logo">
                    <h1><span>App</span>sus</h1>
                </router-link>
                <div @click="toggleNavbarMobile" class="mobile-navbar menu-button">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <nav-bar :navbarMobile="navbarMobile" />
            </header>
            <main>
                <router-view />
            </main>
        </div>  
    `,

    components: {
        navBar
    },

    data() {
        return {
            navbarMobile: false
        }
    },

    methods: {
        toggleNavbarMobile() {
            this.navbarMobile = !this.navbarMobile
        }
    }
})