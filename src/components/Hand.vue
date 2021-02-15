<template>
  <div>
    <h3>Hand</h3>
    <div class="hand">
      {{ cards }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: Array,
  },
  computed: {
    score() {
      return this.cards.reduce((acc, val) => (acc + val), 0);
    },
  },
  watch: {
    score(score) {
      this.$emit('score-update', score);
    },
  },
};
</script>
