import emailList from "../cmps/email-list.cmp.js";
import emailFilter from "../cmps/email-filter.cmp.js";

import { emailService } from "../services/email-service.js";

export default {
    template: `
        <main class="email-app" v-if="emails">
            <email-filter @filtered="setFilter"></email-filter>
            <email-list :emails="emailsToShow"></email-list>
        </main>
    `,

    components: {
        emailList,
        emailFilter
    },

    data() {
        return {
            emails: null,
            filterBy: null
        }
    },

    computed: {
        emailsToShow() {
            const filterBy = this.filterBy;

            if (!filterBy) return this.emails;

            var filteredEmails = this.emails.filter(email => {
                if (filterBy.bySubject) {
                    return email.subject.toLowerCase().includes(filterBy.bySubject.toLowerCase());
                }

                if (filterBy.read) {
                    if (filterBy.read === 'read' && email.isRead) return email.subject;
                    else if (filterBy.read === 'unread' && !email.isRead) return email.subject;
                }
            })
            return filteredEmails;
        }
    },

    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },

    created() {
        emailService.getEmails()
            .then(emails => {
                this.emails = emails;
            })
    }
}