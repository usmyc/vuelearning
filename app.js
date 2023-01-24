import { createApp } from "vue";
var title = "Hello World";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const object = await response.json();
  title = object.title;
}
getData().then(() => {
  createApp({
    data() {
      console.log(title);
      return {
        message: "Hello AI!",
        weather: "sunny",
        age: 20,
        x: 0,
        y: 0,
        title: title,
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
    },
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
