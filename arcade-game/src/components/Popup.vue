<template>
  <div class="popup-container">
    <div class="popup">
      <h3 v-if="status === 'lose'">You lose!</h3>

      <!-- <h3 v-else-if="status === 'win'">You win!</h3> -->
      <!-- have to fix this after -->
      <h3 v-else-if="status === 'win'">Winner!</h3>

      <button @click="$emit('playAgain')">Play Again</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      status: { type: String, default: "" },
    },
  };
</script>

<style></style>
