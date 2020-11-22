import req from "./storedreq.json";

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
      let myrecipes = [];
      req.items.forEach(r => {
        myrecipes.push({
          title: r.snippet.title,
          desc: r.snippet.description,
          image: r.snippet.thumbnails.medium.url,
          vidId: "/recipe/" + r.id.videoId
        });
      });

      commit("getRecipes", myrecipes);
    }
  },
  modules: {},
  getters: {
    getRecipes: state => state.recipes
  }
};
