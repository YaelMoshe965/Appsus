import { emailService } from '../services/email-service.js';

import { eventBus, EVENT_SHOW_MSG } from '../../../main-services/eventbus-service.js';

export default {
    template: `
        <section class="email-compose">
            <form>
                <div>
                    <label for="subject">Subject:</label>
                    <input id="subject" type="text" v-model="compose.subject">
                </div>
                <div>
                    <label for="body">Body:</label>
                    <textarea id="body" v-model="compose.body"></textarea>
                </div>
            </form>
            <button @click="sendEmail">Send</button>
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
            eventBus.$emit(EVENT_SHOW_MSG, {text: 'Message sent'});
            this.$emit('sent')
        }
    }
}