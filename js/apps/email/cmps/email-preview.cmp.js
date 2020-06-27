import emailStarred from './email-starred.cmp.js';

import { emailService } from '../services/email-service.js';

export default {
    template: `
        <section class="email-preview flex" :class="{unread: !email.isRead}">
            <email-starred :isStarred="isStarred" @starred="toggleStar"></email-starred>
            <router-link class="email-title" :to="'/email/' + email.id">
                {{ email.subject.length > 30 ? email.subject.substr(0, 30) : email.subject }}
            </router-link>

            <span class="email-body">
                {{ email.body.length > 90 ? email.body.substr(0, 90) + '...' : email.body }}
            </span>
            
            <span class="email-sent-at">
                {{email.sentAt}}
            </span>
        </section>
    `,

    components: {
        emailStarred
    },

    props: ['email'],

    computed: {
        isStarred() {
            return this.email.folderType.isStarred;
        }
    },

    methods: {
        toggleStar() {
            emailService.toggleStar(this.email.id);
            this.$emit('starred');
        }
    }
}