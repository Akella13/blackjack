<template>
  <div class="game">
    <h2 class="game__info">Round: {{ round }}</h2>
    <deck />
    <pitch />
    <hand />
  </div>
</template>

<script>
import Deck from './Deck.vue';
import Hand from './Hand.vue';
import Pitch from './Pitch.vue';

export default {
  components: {
    Deck,
    Hand,
    Pitch,
  },
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
