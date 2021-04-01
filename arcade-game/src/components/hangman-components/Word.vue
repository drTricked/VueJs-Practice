<template>
  <div class="word">
    <span v-for="(letter, index) in word" :key="index" class="letter">
      {{ correctLetters.includes(letter) === true ? letter : " " }}
    </span>
  </div>
  <form @submit.prevent="resetInput" class="letter-input-form">
    <input
      v-model="letterGuess"
      type="text"
      maxlength="1"
      name="letter-input"
      id="letter-input"
    />
    <button>Guess</button>
  </form>
</template>

<script>
  export default {
    props: {
      word: { type: String, default: [] },
      correctLetters: { type: Array, default: [] },
    },
    data() {
      return {
        letterGuess: "",
      };
    },
    methods: {
      resetInput() {
        this.$emit("guessLetter", this.letterGuess);
        this.letterGuess = "";
      },
    },
    emits: ["guessLetter"],
  };
</script>

<style>
  .letter-input-form {
    /* display: block; */
    margin: 10%;
  }
  #letter-input {
    width: 10%;
    /* margin-left: 10%; */
  }
</style>
