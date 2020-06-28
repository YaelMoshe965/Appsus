import { emailService } from '../services/email-service.js';

import { eventBus, EVENT_SHOW_MSG, EVENT_MSG_SENT } from '../../../main-services/eventbus-service.js';

export default {
    template: `
        <section class="email-compose flex column">
            <header class="flex space-between align-center">
                <h6>New Message</h6>
                <button class="close" @click="close">x</button>
            </header>
            <form>
                <div>
                    <input id="subject" type="text" placeholder="Subject" v-model="compose.subject">
                </div>
                <div>
                    <textarea id="body" v-model="compose.body"></textarea>
                </div>
            </form>
            <button class="send" @click="sendEmail">Send</button>
        </section>
    `,

    data() {
        return {
            compose: {
                subject: '',
                body: '',
            }
        }
    },

    methods: {
        sendEmail() {
            emailService.addEmail(this.compose.subject, this.compose.body);
            eventBus.$emit(EVENT_SHOW_MSG, { text: 'Message sent' });
            eventBus.$emit(EVENT_MSG_SENT, {});
            this.$emit('close')
        },

        close() {
            this.$emit('close')
        }
    }
}