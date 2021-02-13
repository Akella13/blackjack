<template>
  <div class="game">
    <h2 class="game__info">Round: {{ round }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      round: 1,
    };
  },
};
</script>

<style lang="scss">
  .game {
    width: 100%;
    height: 100%;
    background-color: green;
    color: #fff;

    &__info {
      text-align: right;
    }
  }
</style>
