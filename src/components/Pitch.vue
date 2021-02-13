<template>
  <div>
    <button @click="Ask">
      Hit me
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
    };
  },
  watch: {
    score() {
      // loss of a round
      if (this.score > 21) {
        console.log('loss of a round');
        this.score = 0;
      }
    },
  },
  methods: {
    Ask() {
      this.$store.commit('dealCard');
    },
  },
};
</script>
