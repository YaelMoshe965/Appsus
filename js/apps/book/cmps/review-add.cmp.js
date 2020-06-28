import { bookService } from "../services/book-service.js";

export default {
  props: ["book"],
  template: `
          <section v-if="book">
              <form  @submit.prevent ="addReview" class="review-add">
                  <h3>Add a Review</h3>
              <span>Full Name </span><input type="text" placeholder="Enter full name" v-model="reviewToEdit.fullName">
              <label for="stars">Rate:</label>

            <select name="stars" id="stars" v-model="reviewToEdit.stars">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <label for="date-read">Read at</label>
            <input type="date" id="date-read" name="date-read" v-model="reviewToEdit.readAt">

            <div>
            <textarea v-model="reviewToEdit.freeText" id="txt-review" name="txt-review" rows="4" cols="72">
             Write your review...
            </textarea>
            </div>
            <button>Save</button>
            </form>

           <div v-if="hasReviews">
            <h3> Reviews </h3>
            <ul class="clean-list">
                <li v-for="(review,idx) in book.reviews">
                    <button @click="deleteReview(idx)" title="Delete review">X</button>
                    <p>Review by {{review.fullName}}, {{review.stars}} Stars</p> 
                    <p>Posted at: {{review.readAt}}</p> 
                    <p>Added Text: {{review.freeText}} </p> 
                </li>
            </ul>
            </div>
        </section>

           
    
      `,
  data() {
    return {
      reviewToEdit: {
        fullName: "Books Reader",
        stars: 1,
        readAt: this.formattedDate,
        freeText: "",
      },
    };
  },
  methods: {
    addReview() {
      bookService.addReview(this.bookId, this.reviewToEdit);
      //   eventBus.$emit("user-msg", `review was added successfully`);
    },
    deleteReview(reviewIdx) {
      bookService.removeReview(this.bookId, reviewIdx);
    },
  },

  computed: {
    formattedDate() {
      new Date().toISOString().substring(0, 10);
    },
    bookId() {
      return this.$route.params.bookId;
    },
    hasReviews() {
      return this.book.reviews && this.book.reviews.length > 0;
    },
  },
};
