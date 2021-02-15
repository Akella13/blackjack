<template>
  <section>
    <h3>Deck</h3>
    <div class="deck">
      {{ deck }}
    </div>
  </section>
</template>

<script>
const initialDeck = [3, 4, 5, 6, 7, 8, 9, 10, 11];

export default {
  data() {
    return {
      deck: initialDeck,
    };
  },
  computed: {
    cardsDealed() {
      return this.$store.state.cardsDealed;
    },
    cardsInDeck() {
      return this.deck.length;
    },
  },
  watch: {
    cardsDealed: 'Deal',
    cardsInDeck: 'CardsInDeckToStore',
  },
  mounted() {
    this.CardsInDeckToStore();
  },
  methods: {
    Deal() {
      if (this.cardsInDeck > 0) {
        const card = this.deck.pop();
        console.log('dealing new card;', card);
      } else {
        console.error('No cards left');
      }
    },
    Reset() {
      this.deck = initialDeck;
    },
    CardsInDeckToStore() {
      this.$store.state.cardsInDeck = this.cardsInDeck;
    },
  },
};
</script>
