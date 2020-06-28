export default{
  props: ["book"],
  template: `
        <div class="book-preview">
            <router-link :to="'/book/' + book.id"><img class="book-img" :src=book.thumbnail> </router-link>
            <li class="text-center">
            {{book.title}}
            </li>
            <li class="text-center">
            {{bookCurrency}}
            </li>
        </div>
    `,
    data(){
    return{
        bookCurrCode: this.book.listPrice.currencyCode,
        price: this.book.listPrice.amount
    }
    },
     computed: {
        bookCurrency(){
            if (this.bookCurrCode === 'USD'){
                return '$' + this.price;
            }
            else if (this.bookCurrCode === 'EUR'){
                return this.price + '€';
            }
            else if (this.bookCurrCode === 'ILS'){
                return '₪' + this.price;
            }
        }
     }
}
