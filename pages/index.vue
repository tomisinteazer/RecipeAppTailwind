<template>
  <div>
    <section class="text-gray-800 body-font">
      <div
        class="container mx-auto flex px-5 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <header class="mt-4">
            <h2 class="text-6xl font-semibold leading-none tracking-wider">
              Recipes
            </h2>
            <h3 class="text-2xl font-semibold tracking-wider">
              A collection of fine dining 2021
            </h3>
          </header>
          <h4 class="font-bold pb-2 mt-12 border-b">
            Latest Recipes by Joshua Wiessman
          </h4>
          <p class="mb-8 leading-relaxed">
            Click on a recipe and get the tutorial you are
            sure to love it.
          </p>
          <div class="flex justify-center">
            <nuxt-link
              to="/about"
              href="#"
              class="flex bg-primary text-white py-2 px-4 rounded-sm"
            >
              <svg
                class="w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="px-1">About</span>
            </nuxt-link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded lg:w-3/4"
            alt="hero"
            src="/hero.svg"
          />
        </div>
      </div>
    </section>
    <div class="mt-8 grid lg:grid-cols-3 gap-10">
      <!-- cards go here -->
      <div v-for="(recipe, i) in recipes" :key="i">
        <nuxt-link :to="recipe.vidId">
          <div class="card hover:shadow-lg">
            <img
              :src="recipe.image"
              alt="stew"
              class="h-32 sm:h-48 w-full object-cover"
            />
            <div class="m-4">
              <span class="font-bold">{{ recipe.title }}</span>
              <span class="block text-gray-700 text-sm">
                {{ recipe.desc }}
              </span>
            </div>
            <div class="badge">
              <svg
                class="inline-block w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>view</span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "The Recipe Archives",
    };
  },

  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    fulfill() {
      this.recipes = this.$store.getters.getRecipes;
      setTimeout(() => {
        this.$isdark();
      }, 0);
    },
  },
  mounted() {
    this.fulfill();
    setTimeout(() => {
      this.fulfill();
    }, 5000);
  },
};
//query api per videos https://www.googleapis.com/youtube/v3/videos?part=snippet&id=seQblg9JoIU&key=AIzaSyBhUrkcxR4QuWKFyWyI0Nlbj9SrMotVDxU
</script>
<style lang="postcss">
.card {
  @apply rounded bg-white border-gray-200 shadow-md overflow-hidden relative;
}

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
