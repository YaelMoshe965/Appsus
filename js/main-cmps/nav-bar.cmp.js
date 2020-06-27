import userMsg from './user-msg.cmp.js' 

export default {
    template: `
    <nav class="nav-bar">
        <router-link class="nav-link" to="/">Home</router-link>
        |
        <router-link class="nav-link" to="/email">Email</router-link>
        |
        <router-link class="nav-link" to="/book">Books</router-link>

        <user-msg />
    </nav>
    `,

    components: {
        userMsg
    }
}