import { bookService } from "../services/book-service.js";

export default {
    template: `
    <section v-if="{{serchStr}}" class="book-add">
    <input type="text" placeholder="add a book">
     <ul class="google-book-list clean-list ">
            <li v-for="book in googleBooks":key="book.id"><button>+</button>{{book.title}}</li>
        </ul>
    </section>
    `,
     data() {
        return {
          googleBooks: null,
          serchStr: 'dddd'
        };
},
created(){

    bookService.getGoogleBooks()
    .then((googleBooks) => {
        this.googleBooks = googleBooks;
        console.log(this.googleBooks);
    })
 }
}
   