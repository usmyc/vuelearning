import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "Hello AI!",
      weather: "sunny",
      age: 20,
      x: 0,
      y: 0,
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
    }
   
  },
}).mount("#app");

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
