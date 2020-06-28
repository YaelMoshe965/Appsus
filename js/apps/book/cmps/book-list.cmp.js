import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
            <section class="book-list">
        <ul class="flex wrap justify-center clean-list ">
            <book-preview v-for="book in books" @click.native="selectedBook(book)" :book="book" :key="book.id"/>
        </ul></section>
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