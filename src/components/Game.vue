<template>
  <div class="game">
    <h2 class="game__info">Round: {{ round }}</h2>
    <deck :cards-requested="cardsRequested" @dealing="Dealing"/>
    <pitch :score="score" @request-card="RequestCard"/>
    <hand :cards="hand" @score-update="ScoreUpdate"/>
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
      hand: [],
      cardsRequested: 0,
      score: 0,
    };
  },
  methods: {
    Dealing(card) {
      this.hand.push(card);
    },
    RequestCard() {
      this.cardsRequested += 1;
    },
    ScoreUpdate(payload) {
      this.score = payload;
    },
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
