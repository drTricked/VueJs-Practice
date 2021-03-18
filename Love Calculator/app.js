const app = Vue.createApp({
  data() {
    return {
      first: "",
      second: "",
      compatibility: "",
      compMessage: "",
    };
  },
  methods: {
    findComp() {
      fetch(
        `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.first}&sname=${this.second}`,
        {
          method: "GET",
          headers: {
            //update : for future references and practice just put this in a config or env file
            "x-rapidapi-key":
              "52404fdeaamsh75354a96366b9cap17150cjsn13b2fa4f53df",
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.compatibility = data.percentage;
          this.compMessage = data.result;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});

app.mount("#app");
