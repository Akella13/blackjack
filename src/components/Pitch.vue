<template>
  <div>
    <button @click="Ask">
      Hit me
    </button>
  </div>
</template>

<script>
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
        console.log('You lose!');
        this.endRound = true;
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
  },
};
</script>
