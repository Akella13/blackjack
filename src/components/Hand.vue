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
      return this.hand.reduce((acc, val) => (acc += val), 0);
    },
  },
};
</script>
