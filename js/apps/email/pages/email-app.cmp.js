import emailCompose from "../cmps/email-compose.cmp.js";
import emailFolders from '../cmps/email-folders.cmp.js'


export default {
    template: `
        <main class="email-app grid">
            <div class="col-1 flex column">
                <button class="btn-compose" @click="openCompose">Compose</button>
                <email-folders></email-folders>
            </div>
            <div class="col-2 flex column">
                <router-view></router-view>
            </div>
            <email-compose @sent="closeComposeModal" v-if="isModal"></email-compose>
        </main>
    `,

    components: {
        emailCompose,
        emailFolders
    },

    data() {
        return {
            isModal: false
        }
    },

    methods: {
        openCompose() {
            this.isModal = true;
        },
        closeComposeModal() {
            this.isModal = false;
        }
    }
}