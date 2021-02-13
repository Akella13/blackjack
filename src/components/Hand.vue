<template>
  <div>
    <h3>Hand</h3>
    <div class="hand">
      {{ hand }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hand: [],
    };
  },
  computed: {
    score() {
      return this.hand.reduce((acc, val) => (acc += val), 0);
    },
  },
};
</script>
