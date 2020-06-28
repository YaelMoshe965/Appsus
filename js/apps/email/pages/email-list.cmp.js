import emailFilter from "../cmps/email-filter.cmp.js";
import emailSort from '../cmps/email-sort.cmp.js';
import emailPreview from '../cmps/email-preview.cmp.js';
import { emailService } from "../services/email-service.js";

import { eventBus, EVENT_FOLDER_TYPE, EVENT_MSG_SENT, EVENT_EMAIL_STATUS } from '../../../main-services/eventbus-service.js';

export default {
    template: `
        <div>
            <email-filter @filtered="setFilter"></email-filter>
            <email-sort @sorted="setSort"></email-sort>
            <section class="email-list">
                <email-preview
                    v-for="email in emailsToShow"
                    :email="email"
                    :key="email.id"
                    @starred="retreiveEmails"
                >
                </email-preview>
            </section>
        </div>
    `,

    components: {
        emailFilter,
        emailSort,
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
                    if (filterBy.byStatus === 'Read' && email.isRead) return true;
                    else if (filterBy.byStatus === 'Unread' && !email.isRead) return true;
                    else if (filterBy.byStatus === 'All') return true;
                }
            })
            return filteredEmails;
        }
    },

    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },

        setSort(sortBy) {
            if (sortBy === 'title') {
                this.emails.sort((a, b) => { return a.subject.toLowerCase() > b.subject.toLowerCase() ? 1 : -1 });
            }
        },

        retreiveEmails() {
            emailService.getEmails(this.folder)
                .then(emails => {
                    this.emails = emails;
                })
        }
    },

    created() {
        this.retreiveEmails();
        eventBus.$on(EVENT_MSG_SENT, () => this.retreiveEmails());
        eventBus.$emit(EVENT_EMAIL_STATUS, {});
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