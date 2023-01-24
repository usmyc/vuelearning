import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "Hello AI!",
      weather: "sunny",
      age: 20,
    };
  },
  methods: {
    plusAge() {
      this.age++;
    },
    minusAge() {
        this.age--;
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
