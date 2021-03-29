<template>
  <div class="wrong-letters-container">
    <div class="wrong-letters">
      <p>Wrong Letters</p>
      <span v-for="(letter, index) in wrongLetters" :key="index">
        {{ letter }}
        <!-- if the current letter is not the last letter then add a comma after it -->
        {{ index === wrongLetters.length - 1 ? "" : ", " }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      wrongLetters: { type: Array, default: () => [] },
    },
    watch: {
      wrongLetters() {
        if (this.wrongLetters.length === 6) {
          this.$emit("endGame");
        }
      },
    },
    emits: ["endGame"],
  };
</script>

<style></style>
