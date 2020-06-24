export default {
    template: `
        <section class="email-filter">
            <input type="text" placeholder="Search by subject" v-model="filterBy.bySubject" @input="filter"/>
            <label for="emails">Select:</label>
            <select id="emails" v-model="filterBy.read" @input="filter">
              <option value="read">Read</option>
              <option value="unread">Unread</option>
            </select>
        </section>
    `,

    data() {
        return {
            filterBy: {
                bySubject: '',
                read: ''
            }
        }
    },

    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}