import { createStore } from 'vuex';

export default createStore({
  state: {
    cardsDealed: 0,
    cardsInDeck: 0,
  },
  mutations: {
    dealCard(state) {
      state.cardsDealed += 1;
    },
  },
});
