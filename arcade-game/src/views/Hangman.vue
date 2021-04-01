<template>
  <div>
    Hello this is hangman
  </div>
  <Header></Header>
  <Figure :numWrong="wrongLetters.length"></Figure>

  <WrongLetters @endGame="endGame" :wrongLetters="wrongLetters"></WrongLetters>
  <Word
    @guessLetter="guessLetter"
    :word="word"
    :correctLetters="correctLetters"
  />
  <Popup :status="status" @playAgain="playAgain" v-show="status" />
</template>

<script>
  import Header from "../components/hangman-components/Header";
  import Figure from "../components/hangman-components/Figure";
  import Word from "../components/hangman-components/Word";
  import WrongLetters from "../components/hangman-components/WrongLetters";
  import Popup from "../components/Popup";

  import "../assets/styles.css";
  import randomWord from "../assets/hangman/word.js";

  export default {
    name: "App",
    data() {
      return {
        guessedLetters: [],
        // wrongLetters: [],
        // correctLetters: ["s", "m"],
        word: "",
        status: "",
      };
    },
    created() {
      this.word = randomWord();
    },
    components: {
      Header,
      Figure,
      Word,
      WrongLetters,
      Popup,
    },
    computed: {
      correctLetters() {
        const cl = this.guessedLetters.filter((letter) =>
          this.word.includes(letter)
        );
        this.checkIfWin(cl);
        return cl;
      },
      wrongLetters() {
        return this.guessedLetters.filter(
          (letter) => !this.word.includes(letter)
        );
      },
    },
    methods: {
      guessLetter(letter) {
        if (this.guessedLetters.indexOf(letter) === -1)
          this.guessedLetters.push(letter);
      },
      checkIfWin(letters) {
        if (this.word.split("").every((letter) => letters.includes(letter)))
          this.status = "win";
      },
      endGame() {
        // might be better to just put this as a check inside of wrongLetters
        this.status = "lose";
      },
      playAgain() {
        this.guessedLetters = [];
        this.status = "";

        // generate a new word
        let newWord = randomWord();
        while (this.word === newWord) newWord = randomWord();
        this.word = newWord;
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
