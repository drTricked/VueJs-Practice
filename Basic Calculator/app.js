const app = Vue.createApp({
  data() {
    return {
      previous: "",
      current: "",
      operator: "",
      new: true,
    };
  },
  methods: {
    // so I do not know how to find the value of the calling element
    // this.($)ref(s) is not working I suspect I need the CLI
    // so we will just use this solution of manually passing the value for now
    number(val) {
      console.log(this.new);
      if (this.new) {
        this.current = "" + val;
        this.new = false;
      } else {
        this.current += val;
      }
    },
    decimal() {
      if (this.equation.indexOf(".") === -1) {
        this.number(".");
      }
    },
    reset() {
      this.previous = "";
      this.operator = "";
      this.current = "";
    },
    setOp(operator) {
      this.operator = operator;
      this.previous = this.current;
      this.current = "";
    },
    eval() {
      if (this.operator !== "") {
        console.log(this.operator);
        this.current = eval(this.previous + this.operator + this.current);
        this.operator = "";
        this.second = "";
        this.new = true;
      }
    },
  },
});

app.mount("#app");
