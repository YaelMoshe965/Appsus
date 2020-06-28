import bookList from "../cmps/book-list.cmp.js";
import bookFilter from "../cmps/book-filter.cmp.js";
import bookAdd from "../cmps/book-add.cmp.js";

import { bookService } from "../services/book-service.js";

export default{
  template: `
        <main>
            <book-filter @filtered="setFilter"></book-filter>
            <book-list @selected="selectedBook" :books="booksToShow" ></book-list>
        </main>
    `,
  data() {
    return {
      books: [],
      currBook: null,
      filterBy: {
        searchStr: "",
        fromPrice: 0,
        toPrice: 0,
      },
    };
  },
  computed: {
    booksToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) return this.books;

      var filteredBooks = this.books.filter((book) => {
        return book.title
          .toLowerCase()
          .includes(filterBy.searchStr.toLowerCase());
      });
      filteredBooks = filteredBooks.filter((book) => {
        if (filterBy.fromPrice && filterBy.toPrice) {
          return (
            book.listPrice.amount >= filterBy.fromPrice &&
            book.listPrice.amount < filterBy.toPrice
          );
        } else if (filterBy.fromPrice) {
          return book.listPrice.amount >= filterBy.fromPrice;
        } else if (filterBy.toPrice) {
          return book.listPrice.amount >= filterBy.toPrice;
        } else {
          return true;
        }
      });
      return filteredBooks;
    },
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    selectedBook(book) {
      this.currBook = book;
      console.log(this.currBook);
    },
  },
  created() {
    bookService.getBooks().then((books) => {
      this.books = books;
    });
  },
  components: {
    bookList,
    bookFilter,
    bookAdd
  },
};
