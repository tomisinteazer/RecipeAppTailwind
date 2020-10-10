<template>
  <div>
    <header class="mt-4">
      <h2
        class="text-gray-700 text-6xl font-semibold leading-none tracking-wider text-center"
      >
        About us
      </h2>
      <h3 class="text-2xl font-semibold tracking-wider text-center">
        Know our story
      </h3>
    </header>
    <section class="text-gray-700 body-font">
      <div class="px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="https://tomisinteazer-io.web.app/newpin.jpg"
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div
                class="w-20 h-20 rounded-full inline-flex items-center justify-center"
              >
                <img
                  class="w-30 h-30 rounded-full"
                  src="https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/s150x150/106255528_639629886637863_5735241965114432966_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_ohc=pekbdlHvL-AAX_s9b9-&oh=fb1800f5c63ca2a8a1e279dfd7ec51b0&oe=5FACB82F"
                  alt="tomisinteazer"
                />
              </div>
              <div
                class="flex flex-col items-center text-center justify-center"
              >
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  Oluwatomisin Babatunde
                </h2>
                <div class="w-12 h-1 bg-teal-500 rounded mt-2 mb-4"></div>
                <p class="text-base text-gray-600">
                  A frontend developer, graphics designer, podcaster, and
                  programming enthusiast passionate about software development
                  and i love food and Joshua Wiessman recipes.
                </p>
              </div>
            </div>
            <div
              class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
            >
              <h1 class="leading-relaxed text-3xl mb-4">
                Joshua Weissman - The Chef
              </h1>
              <p class="leading-relaxed text-lg mb-4">
                Hi, I'm Josh and I make entertaining, exciting, and
                inspirational videos about food and cooking. I'm obsessive about
                bread, and I like to eat things that have a large quantity of
                butter in them. All I want is to entertain and excite YOU about
                food, and maybe inspire you to go cook something yourself. For
                any Business, brand or partnership enquiries Email:
                josh.cohen@authenticm.com
              </p>
              <p class="leading-relaxed text-lg mb-4 py-5 text-primary">
                His cooking was the inspriration for this app and i"m just a fan
                you but can talk to me.
              </p>
              <nuxt-link
                to="/contact"
                class="text-primary inline-flex items-center"
                >Send me a mesage through whatsapp
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$isdark();
  },
};
</script>