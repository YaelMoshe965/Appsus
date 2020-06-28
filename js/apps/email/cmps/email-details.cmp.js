import { emailService } from '../services/email-service.js';

import { eventBus, EVENT_SHOW_MSG } from '../../../main-services/eventbus-service.js';

export default {
    template: `
        <section class="email-details" v-if="email">
            <router-link to="/email">
                <div class="back flex align-center">
                <i class="fas fa-chevron-left fa-2x"></i>
                </div>
            </router-link>
            <div class="content">
                <h3>{{email.subject}}</h3>
                <p class="email-body" v-if="!editedEmailBody">{{email.body}}</p>
                <div v-else>
                    <textarea class="width-all" v-model="editedEmailBody" autofocus></textarea>
                </div>
            </div>
            <div class="content-btns">
                <div v-if="!editedEmailBody">
                    <button @click="markAsUnread">Unread</button>
                    <button @click="remove">Delete</button>
                    <button @click="startReply">Reply</button>
                </div>
                <div v-else>
                    <button @click="cancelReply">Cancel</button>
                    <button @click="submitReply">Send</button>
                </div>
            </div>
        </section>
    `,

    data() {
        return {
            emailId: null,
            email: null,
            editedEmailBody: null
        }
    },

    methods: {
        remove() {
            emailService.removeEmail(this.emailId);
            this.$router.push('/email');
            eventBus.$emit(EVENT_SHOW_MSG, { text: 'Message moved to Trash' });
        },

        startReply() {
            this.editedEmailBody = this.email.body;
        },

        cancelReply() {
            this.editedEmailBody = null;
        },

        submitReply() {
            emailService.replyEmail(this.emailId, this.editedEmailBody);
            eventBus.$emit(EVENT_SHOW_MSG, { text: 'Reply submitted successfully' });
            this.editedEmailBody = null;
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