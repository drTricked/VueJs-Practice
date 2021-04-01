<template>
  <div>
    <Header />
  </div>
  <div>
    <div
      v-for="(row, rowIndex) in gameboard"
      :key="rowIndex"
      class="ttc-container"
    >
      <div
        @click="clicked([rowIndex, colIndex])"
        v-for="(val, colIndex) in row"
        :key="colIndex"
        class="ttc-row"
      >
        {{ val }}
      </div>
    </div>
    <Popup :status="status" @playAgain="playAgain" v-show="status" />
  </div>
</template>

<script>
  import Header from "../components/tic-tac-toe-components/Header";
  import Popup from "../components/Popup";

  export default {
    data() {
      return {
        gameboard: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        playerTurn: "X",
        status: "",
      };
    },
    components: {
      Header,
      Popup,
    },
    methods: {
      clicked(rowCol) {
        const row = rowCol[0];
        const col = rowCol[1];
        this.gameboard[row][col] = this.playerTurn;
        this.playerTurn = this.playerTurn === "X" ? "O" : "X";
      },
      checkWinnerVertical() {
        //check vertically
        for (let row = 0; row < 3; row++) {
          if (
            this.gameboard[row][0] != "" &&
            this.gameboard[row][0] === this.gameboard[row][1] &&
            this.gameboard[row][1] === this.gameboard[row][2]
          )
            return true;
        }
        return false;
      },
      checkWinnerHorizontal() {
        //check horizontally
        for (let col = 0; col < 3; col++) {
          if (
            this.gameboard[0][col] != "" &&
            this.gameboard[0][col] === this.gameboard[1][col] &&
            this.gameboard[1][col] === this.gameboard[2][col]
          ) {
            return true;
          }
        }
        return false;
      },
      checkWinnerDiagonal() {
        //check diagonal
        if (
          this.gameboard[0][0] != "" &&
          this.gameboard[0][0] === this.gameboard[1][1] &&
          this.gameboard[1][1] === this.gameboard[2][2]
        ) {
          return true;
        }
        if (
          this.gameboard[0][2] != "" &&
          this.gameboard[0][2] === this.gameboard[1][1] &&
          this.gameboard[1][1] === this.gameboard[2][0]
        ) {
          return true;
        }
        return false;
      },
      playAgain() {
        this.gameboard = [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ];
        this.playerTurn = "X";
        this.status = "";
      },
    },
    watch: {
      gameboard: {
        handler(val, oldVal) {
          if (
            this.checkWinnerVertical() ||
            this.checkWinnerHorizontal() ||
            this.checkWinnerDiagonal()
          ) {
            this.status = "win";
          }
        },
        deep: true,
      },
    },
  };
</script>

<style>
  .ttc-container {
    border: solid 1px black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 20vh;
  }

  .ttc-row {
    /* flex-direction: column; */
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px black;
    width: 100%;
    height: 100%;
  }
</style>
