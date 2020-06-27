import { eventBus, EVENT_FOLDER_TYPE } from '../../../main-services/eventbus-service.js';

export default {
    template: `
        <section class="email-folders flex column">
            <button class="inbox" :class="{red: isRed}" @click="enterFolder('Inbox')">
                <i class="fas fa-inbox"></i>
                Inbox
            </button>
            <button @click="enterFolder('Starred')">
                <i class="fas fa-star"></i>
                Starred
            </button>
            <button @click="enterFolder('Sent')">
                <i class="fas fa-paper-plane"></i>
                Sent
            </button>
            <button @click="enterFolder('Trash')">
                <i class="fas fa-trash"></i>
                Trash
            </button>
        </section>
    `,

    data() {
        return {
            isRed: true
        }
    },

    methods: {
        enterFolder(folder) {
            if (folder === 'Inbox') {
                eventBus.$emit(EVENT_FOLDER_TYPE, 'Inbox');
            } else if (folder === 'Sent') {
                eventBus.$emit(EVENT_FOLDER_TYPE, 'Sent');
                this.isRed = false;
            } else if (folder === 'Trash') {
                eventBus.$emit(EVENT_FOLDER_TYPE, 'Trash');
                this.isRed = false;
            } else {
                eventBus.$emit(EVENT_FOLDER_TYPE, 'Starred');
                this.isRed = false;
            }
        }
    }
}