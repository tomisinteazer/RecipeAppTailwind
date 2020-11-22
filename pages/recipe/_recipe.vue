<template>
  <section class="text-gray-700 body-font">
    <div
      class="container mx-auto flex px-5 py-10 items-center justify-center flex-col"
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" :src="img" />
      </div>
      <div class="text-center lg:w-2/3 w-full">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary"
        >
          {{ title }}
        </h1>
        <div v-for="(data, i) in recipeData" :key="i">
          <p class="leading-relaxed">{{ data }}</p>
        </div>
        <div class="flex justify-center mt-6">
          <a :href="videolink">
            <button
              :href="videolink"
              class="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              watch tutorial
            </button>
          </a>
          <nuxt-link to="/" href="#" class="block px-4 flex justify-end">
            <button
              class="ml-4 inline-flex text-primary border-r-4 border-primary bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              Home
              <svg
                class="w-5 ml-2 pt-1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      recipeData: ["ingredients and details"],
      img: "https://dummyimage.com/1200x500",
      title: "Recipe title",
      videolink: "#",
    };
  },
  methods: {
    async fetchSomething(id) {
      const data = await this.$axios
        .$get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id.recipe}&key=AIzaSyBhUrkcxR4QuWKFyWyI0Nlbj9SrMotVDxU`
        )
        .then((e) => {
          let formatted = e.items[0].snippet.description.split("\n");
          console.log(formatted);

          this.recipeData = formatted;
          this.img = e.items[0].snippet.thumbnails.standard.url;
          this.title = e.items[0].snippet.title;
          this.videolink = `https://www.youtube.com/watch?v=${e.items[0].id}`;
        });
      this.$isdark();
    },
  },
  mounted() {
    setTimeout(this.fetchSomething(this.$route.params), 500);
  },
};
</script>