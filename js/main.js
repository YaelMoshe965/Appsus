import { myRouter } from './routes.js';

var myApp = new Vue({
    el: '#app',
    router: myRouter,
    template: `
        <div>
            <header class="flex space-between align-center">
                <h1>Appsus</h1>
                <nav>
                    <router-link to="/">Home</router-link>
                    <router-link to="/email">Mister-Email</router-link>
                    <router-link to="/keep">Miss-Keep</router-link>
                    <router-link to="/book">Miss-Books</router-link>
                </nav>
            </header>
            <main>
                <router-view></router-view>
            </main>
        </div>  
    `
})