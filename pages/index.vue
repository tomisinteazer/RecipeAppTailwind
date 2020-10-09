<template>
  <div>
    <header class="mt-4">
      <h2
        class="text-gray-700 text-6xl font-semibold leading-none tracking-wider"
      >
        Recipes
      </h2>
      <h3 class="text-2xl font-semibold tracking-wider">
        The intercontinental array
      </h3>
    </header>

    <div>
      <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">
        Latest Recipes
      </h4>

      <div class="mt-8 grid lg:grid-cols-3 gap-10">
        <!-- cards go here -->
        <div v-for="(recipe, i) in recipes" :key="i">
          <div class="card hover:shadow-lg">
            <img
              src="/stew.jpg"
              alt="stew"
              class="h-32 sm:h-48 w-full object-cover"
            />
            <div class="m-4">
              <span class="font-bold">{{ recipe.title }}</span>
              <span class="block text-gray-500 text-sm"
                >Recipe by {{ recipe.owner }}
              </span>
            </div>
            <div class="badge">
              <svg
                class="inline-block w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>{{ recipe.timeTaken }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 flex justify-center">
      <div
        class="btn bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300"
      >
        Load more
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [
        {
          title: "5 Bean Chili Stew",
          owner: "mario",
          timeTaken: "25mins",
        },
        {
          title: "Veg Noodles",
          owner: "mario",
          timeTaken: "25mins",
        },
        {
          title: "Tofu Curry",
          owner: "mario",
          timeTaken: "25mins",
        },
        {
          title: "Tofu",
          owner: "luigi",
          timeTaken: "25mins",
        },
        {
          title: "okonomiyaki",
          owner: "connor",
          timeTaken: "30mins",
        },
        {
          title: "sukimen",
          owner: "joey",
          timeTaken: "30mins",
        },
      ],
    };
  },
  mounted() {
    this.$isdark();
  },
};
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
