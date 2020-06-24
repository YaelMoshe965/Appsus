import { emailService } from '../services/email-service.js';

export default {
    template: `
        <main class="email-details" v-if="email">
            <router-link to="/email">Back</router-link>
            <p>{{email.subject}}</p>
            <p>{{email.body}}</p>
            <button @click="remove">Delete mail</button>
        </main>
    `,

    data() {
        return {
            email: null
        }
    },

    methods: {
        remove() {
            const { emailId } = this.$route.params;
            emailService.removeEmail(emailId);
        }
    },

    created() {
        const { emailId } = this.$route.params;
        emailService.getById(emailId)
            .then(email => {
                this.email = email;
            })
    }
}