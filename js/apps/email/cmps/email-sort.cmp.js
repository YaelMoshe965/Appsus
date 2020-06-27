export default {
    template: `
        <section class="email-sort" v-if="false">
            <p>Sort:</p>
            <button @click="updateSort('date')">By Date</button>
            <button @click="updateSort('title')">By Title</button>
        </section>
    `,

    methods: {
        updateSort(sortBy) {
            this.$emit('sorted', sortBy);
        }
    }
}