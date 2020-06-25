import { eventBus, EVENT_FOLDER_TYPE } from '../../../main-services/eventbus-service.js';

export default {
    template: `
        <section class="email-folders flex column">
            <button @click="enterFolder('Inbox')">Inbox</button>
            <button @click="enterFolder('Sent')">Sent</button>
            <button @click="enterFolder('Trash')">Trash</button>
        </section>
    `,

    methods: {
        enterFolder(folder) {
            if (folder === 'Inbox')  eventBus.$emit(EVENT_FOLDER_TYPE, 'Inbox');
            else if (folder === 'Sent') eventBus.$emit(EVENT_FOLDER_TYPE, 'Sent');
            else eventBus.$emit(EVENT_FOLDER_TYPE, 'Trash');
        }
    }
}