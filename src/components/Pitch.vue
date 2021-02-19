<template>
  <div>
    <button @click="Ask">
      Hit me
    </button>
    <button @click="Done">
      Done
    </button>
  </div>
</template>

<script>
// TODO: difficulty should be configured by oppScores
// compare player & dealer score
const oppScores = [17, 18, 19, 20, 21, 22, 23, 24];

export default {
  props: {
    score: Number,
  },
  data() {
    return {
      endRound: false,
    };
  },
  watch: {
    score() {
      // loss of a round
      if (this.score > 21) {
        this.endRound = true;
      }
    },
    endRound(val) {
      if (val) {
        // pick a random value from oppScores
        const dealerScore = oppScores[Math.floor(Math.random() * oppScores.length)];
        console.log('Your score: ', this.score);
        console.log('Dealer score: ', dealerScore);
        if (this.score === dealerScore) {
          console.log('Draw');
        } else if (this.score > 21) {
          console.log('Overkill');
          if (dealerScore > 21) {
            // compare overkills
            if (this.score > dealerScore) {
              console.log('You lose');
            } else {
              console.log('You win');
            }
          } else {
            console.log('You lose');
          }
        } else if (this.score < 21) {
          console.log('Shortfall');
          if (dealerScore <= 21) {
            // compare scores
            if (this.score < dealerScore) {
              console.log('You lose');
            } else {
              console.log('You win');
            }
          }
        } else {
          console.log('Blackjack! You win');
        }
      }
    },
  },
  methods: {
    Ask() {
      if (!this.endRound) {
        this.$emit('request-card');
      } else {
        console.log('Bets are off');
      }
    },
    Done() {
      this.endRound = true;
    },
  },
};
</script>
