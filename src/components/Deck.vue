<template>
  <section>
    <h3>Deck</h3>
    <div class="deck">
      {{ deck }}
    </div>
  </section>
</template>

<script>
// BUG: cannot use destructured import
import helpers from '../helpers';

const initialDeck = [3, 4, 5, 6, 7, 8, 9, 10, 11];

export default {
  props: {
    cardsRequested: Number,
  },
  data() {
    return {
      deck: helpers.shuffle(initialDeck),
    };
  },
  computed: {
    cardsInDeck() {
      return this.deck.length;
    },
  },
  watch: {
    cardsRequested: 'Deal',
  },
  methods: {
    Deal() {
      if (this.cardsInDeck > 0) {
        const card = this.deck.pop();
        this.$emit('dealing', card);
      } else {
        console.error('No cards left');
      }
    },
    Reset() {
      this.deck = initialDeck;
    },
  },
};
</script>
