export default {
    template: `
        <section class="book-filter">
            <span>Search </span><input type="text" placeholder="Type Book Name..." v-model="filterBy.searchStr" @input="filter"/>
            <span>From Price </span><input type="number" placeholder="price" v-model.number="filterBy.fromPrice" @input="filter"/>
            <span> To Price </span> <input type="number" placeholder="price" v-model.number="filterBy.toPrice" @input="filter"/>
        </section>
    `,
    data() {
        return {
            filterBy: {
                searchStr: '',
                fromPrice: 0,
                toPrice: 0
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}