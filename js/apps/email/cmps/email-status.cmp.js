import { emailService } from "../services/email-service.js";

import { eventBus, EVENT_EMAIL_STATUS } from '../../../main-services/eventbus-service.js';

export default {
    template: `
        <section class="email-status" v-if="allEmailsInbox">
            <progress :value="readEmailStatus" max="100"></progress>
            <div>{{readEmailStatus}}%</div>
        </section>
    `,

    data() {
        return {
            allEmailsInbox: null,
            readEmails: null
        }
    },

    computed: {
        readEmailStatus() {
            return (this.readEmails.length / this.allEmailsInbox.length) * 100;
        }
    },

    methods: {
        getEmails() {
            emailService.getEmails()
                .then(emails => {
                    this.allEmailsInbox = emails;
                    this.readEmails = emails.filter(email => email.isRead)
                })
        }
    },

    created() {
        eventBus.$on(EVENT_EMAIL_STATUS, () => this.getEmails());
    }
}
