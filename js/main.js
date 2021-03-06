import { myRouter } from './routes.js';

import navBar from './main-cmps/nav-bar.cmp.js';

var myApp = new Vue({
    el: '#app',
    router: myRouter,
    template: `
        <div class="grid">
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
            <main class="main-area">
                <router-view />
            </main>
            <footer>All rights reserved</footer>
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