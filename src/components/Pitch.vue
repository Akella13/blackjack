<template>
  <div>
    <button :disabled="endRound" @click="Ask">
      Hit me
    </button>
    <button :disabled="endRound" @click="Done">
      Done
    </button>
    <button :disabled="!endRound" @click="NewRound">
      New Round
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
        this.CompareScores(this.score, dealerScore);
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
    CompareScores(user, opp) {
      if (user === opp) {
        console.log('Draw');
      } else if (user > 21) {
        console.log('Overkill');
        if (opp > 21) {
          // compare overkills
          if (user > opp) {
            console.log('You lose');
          } else {
            console.log('You win');
          }
        } else {
          console.log('You lose');
        }
      } else if (user < 21) {
        console.log('Shortfall');
        if (opp <= 21) {
          // compare scores
          if (user < opp) {
            console.log('You lose');
          } else {
            console.log('You win');
          }
        } else {
          console.log('You win');
        }
      } else {
        console.log('Blackjack! You win');
      }
    },
    NewRound() {
      this.endRound = false;
      this.$emit('new-round');
    },
  },
};
</script>
