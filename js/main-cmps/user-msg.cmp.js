import { eventBus, EVENT_SHOW_MSG } from '../main-services/eventbus-service.js';

export default {
    template: `
        <section class="user-msg" v-if="msg">
            <button @click="close">X</button>
            <p>{{msg.text}}</p>
        </section>
    `,

    data() {
        return {
            msg: null,
            timeout: null
        }
    },

    created() {
        eventBus.$on(EVENT_SHOW_MSG, msg => {
            clearTimeout(this.timeout);
            this.msg = msg;
            this.timeout = setTimeout(() => { this.msg = null }, 3000);
        })
    },

    methods: {
        close() {
            this.msg = null;
            clearTimeout(this.timeout);
        }
    }
}