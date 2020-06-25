import { emailService } from '../services/email-service.js';

import { eventBus, EVENT_SHOW_MSG } from '../../../main-services/eventbus-service.js';

export default {
    template: `
        <section class="email-details" v-if="email">
            <router-link to="/email">Back</router-link>
            <a href="#" @click.prevent="markAsUnread">Mark as unread</a>
            <p>{{email.subject}}</p>
            <p>{{email.body}}</p>
            <button @click="remove">Delete mail</button>
        </section>
    `,

    data() {
        return {
            emailId: null,
            email: null
        }
    },

    methods: {
        remove() {
            emailService.removeEmail(this.emailId);
            this.$router.push('/email');
            eventBus.$emit(EVENT_SHOW_MSG, { text: 'Message moved to Trash' });
        },

        markAsUnread() {
            emailService.setReadStatus(this.email.id, false);
            this.$router.push('/email');
        }
    },

    created() {
        this.emailId = this.$route.params.emailId;

        emailService.getById(this.emailId)
            .then(email => {
                this.email = email;
                if (!email.isRead) emailService.setReadStatus(this.emailId);
            })
    }
}