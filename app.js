import { createApp } from "vue";
var title = "Hello World";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const object = await response.json();
  title = object;
}
getData().then(() => {
  createApp({
    data() {
      return {
        message: "Hello AI!",
        weather: "sunny",
        age: 20,
        x: 0,
        y: 0,
        title: title,
        books: [
          {
            title: "name of the wind",
            author: "patrick rothfuss",
            isFav: true,
          },
          {
            title: "the way of kings",
            author: "brandon sanderson",
            isFav: false,
          },
          {
            title: "the final empire",
            author: "brandon sanderson",
            isFav: true,
          },
        ],
        url: "https://www.yuce.dev/",
      };
    },
    methods: {
      plusAge() {
        this.age++;
      },
      minusAge() {
        this.age--;
      },
      handleEvent(e) {
        console.log(e);
      },
      handleMousemove(e) {
        this.x = e.screenX;
        this.y = e.screenY;
      },
      isFavhandler(book) {
        book.isFav = !book.isFav;
      },
    },
    computed:{
      filteredBooks(){
        return this.books.filter((book)=>book.isFav)
      }
    }
  }).mount("#app");
});

createApp({
  template: `
    <div>
        <h1>Hi {{ message }}</h1>
        <h2>Today is {{ weather }}</h2>
    </div>
    `,
  data() {
    return {
      message: "Samuel!",
      weather: "Not so sunny but still good",
    };
  },
}).mount("#section");
