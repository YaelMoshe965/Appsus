import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
        <ul class="book-list flex wrap clean-list ">
            <book-preview v-for="book in books" @click.native="selectedBook(book)" :book="book" :key="book.id"/>
        </ul>
    `,
    methods: {
        selectedBook(book) {
            
            this.$emit('selected', book);
        }
    },
    components: {
        bookPreview
    }
}