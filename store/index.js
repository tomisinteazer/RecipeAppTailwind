export default {
  state: () => ({
    recipes: []
  }),
  mutations: {
    getRecipes(state, payload) {
      state.recipes = payload;
    }
  },
  actions: {
    async fetchlist({ commit }) {
      await this.$axios
        .$get(
          "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBrHREfUwmNSO1liUHsv4YvR4_Z-ajGFW0&channelId=UChBEbMKI1eCcejTtmI32UEw&part=snippet,id&order=date&maxResults=70"
        )
        .then(e => {
          let myrecipes = [];
          e.items.forEach(r => {
            myrecipes.push({
              title: r.snippet.title,
              desc: r.snippet.description,
              image: r.snippet.thumbnails.medium.url,
              vidId: "/recipe/" + r.id.videoId
            });
          });

          commit("getRecipes", myrecipes);
        });
    }
  },
  modules: {},
  getters: {
    getRecipes: state => state.recipes
  }
};
