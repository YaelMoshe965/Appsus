import userMsg from './user-msg.cmp.js'

export default {
    template: `
    <nav class="desktop-navbar nav-bar flex" :class="{open: navbarMobile}">
        <div class="close-menu-button" @click="close"">
            <i class="fas fa-times fa-lg"></i>
        </div>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/email">Email</router-link>
        <router-link class="nav-link" to="/book">Books</router-link>

        <user-msg />
    </nav>
    `,

    components: {
        userMsg
    },

    props: ['navbarMobile'],

    data() {
        return {
            isActive: false
        }
    },

    methods: {
        close() {
            this.isActive = !this.isActive;
        }
    }
}