export default {
    template: `
        <section class="email-sort">
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