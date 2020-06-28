export default {
    template: `
        <section class="email-filter flex">
            <div class="search-section p-relative">
                <i class="fas fa-search fa-sm p-absolute"></i>
                <input class="search" type="text" placeholder="Search..." v-model="filterBy.bySubject" @input="filter"/>
            </div>
            <div class="filters-section">
                <select @change="filter" v-model="filterBy.byStatus">
                    <option>All</option>
                    <option>Read</option>
                    <option>Unread</option>
                </select>
            </div>
        </section>
    `,

    data() {
        return {
            filterBy: {
                bySubject: '',
                byStatus: 'All'
            }
        }
    },

    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}