import emailFilter from "../cmps/email-filter.cmp.js";
import emailPreview from '../cmps/email-preview.cmp.js';
import { emailService } from "../services/email-service.js";

import { eventBus, EVENT_FOLDER_TYPE } from '../../../main-services/eventbus-service.js';

export default {
    template: `
        <div>
            <email-filter @filtered="setFilter"></email-filter>
            <section class="email-list">
                <email-preview v-for="email in emailsToShow" :email="email" :key="email.id"></email-preview>
            </section>
        </div>
    `,

    components: {
        emailFilter,
        emailPreview
    },

    data() {
        return {
            emails: null,
            filterBy: null,
            folder: null
        }
    },

    computed: {
        emailsToShow() {
            const filterBy = this.filterBy;

            if (!filterBy || (filterBy.bySubject === '' && filterBy.byStatus === '')) return this.emails;

            var filteredEmails = this.emails.filter(email => {
                if (filterBy.bySubject) {
                    return email.subject.toLowerCase().includes(filterBy.bySubject.toLowerCase());
                }

                if (filterBy.byStatus) {
                    if (filterBy.byStatus === 'read' && email.isRead) return email.subject;
                    else if (filterBy.byStatus === 'unread' && !email.isRead) return email.subject;
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
            emailService.getEmails(this.folder)
                .then(emails => {
                    this.emails = emails;
                })
    },

    mounted() {
        eventBus.$on(EVENT_FOLDER_TYPE, folder => {
            this.folder = folder;
            emailService.getEmails(this.folder)
                .then(emails => {
                    this.emails = emails;
                })
        })
    }
}