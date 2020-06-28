import { bookService } from "../services/book-service.js";
import reviewAdd from '../cmps/review-add.cmp.js';

export default {
  template: `
        <section class="book-details"  v-if="book">
        <router-link class="close-btn" to="/book"></router-link>
            
            <div class="datails flex">
            <img class="datails-img" :src=book.thumbnail> 
            <ul class="clean-list">
                 <li> <h3>{{book.title}}</h3></li>
                 <li>  <span >Authors:</span> {{bookAuthors}}</li>
                 <li>  <span>Categories:</span> {{bookCategories}}</li>
                  <li>  <span>Language:</span> {{book.language}}</li>
                <li> <span>Price:</span> {{book.listPrice.amount}}</li>
                 <li>  <span>Pages</span>  {{book.pageCount}}</li>
                 <li>  <span>Published Date:</span>  {{book.publishedDate}}</li>
                <li>  <span>Subtitle:</span>  {{book.subtitle}}</li>
                <li> <span>Description:</span> {{book.description}}</li>
        </ul>
            </div>
            <review-add :book="book"/>
            
        </section>
    `,
  data() {
    return {
      book: null
    };
  },
  methods: {
    close() {
      this.$emit("close", null);
    },
  },
  computed: {
    bookAuthors() {
      return this.book.authors.join(", ");
    },
    bookCategories() {
      return this.book.categories.join(", ");
    },
  },
  created(){
    const {bookId} = this.$route.params;
    bookService.getById(bookId)
        .then(book => {
            this.book = book;
        })
  },
  components: {
    reviewAdd
}
};

