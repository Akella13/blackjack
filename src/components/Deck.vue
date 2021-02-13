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
  methods: {
    Deal() {
      const card = this.deck.pop();
      console.log('dealing new card;', card);
    },
    Reset() {
      this.deck = initialDeck;
    },
  },
};
</script>
