export default {
    template: `
        <section class="email-filter flex">
            <div class="search-section p-relative">
                <i class="fas fa-search fa-sm p-absolute"></i>
                <input class="search" type="text" placeholder="Search..." v-model="filterBy.bySubject" @input="filter"/>
                </div>
                <div class="filters-section flex">
                <p>Filter:</p>
                <i title="read" @click="updateStatus('read')" class="filter-by-status far fa-envelope-open" :class="{selected: filterBy.byStatus === 'read'}"></i>
                <i title="unread" @click="updateStatus('unread')" class="filter-by-status far fa-envelope" :class="{selected: filterBy.byStatus === 'unread'}"></i>
            </div>
        </section>
    `,

    data() {
        return {
            filterBy: {
                bySubject: '',
                byStatus: ''
            }
        }
    },

    methods: {
        updateStatus(status) {
            this.filterBy.byStatus = status
            this.filter()
        },

        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}