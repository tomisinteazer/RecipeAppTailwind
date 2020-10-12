<template>
  <div class="grid md:grid-cols-6 w-full">
    <div class="md:col-span-1 md:flex md:justify-end bg-white">
      <nav class="text-right px-4 py-4">
        <div class="flex justify-between items-center">
          <h1 class="font-bold uppercase p-4 border-b border-gray-100">
            <nuxt-link
              to="/"
              class="hover:text-gray-700 tracking-widest text-grey-400"
              >The RECIPE Archives
            </nuxt-link>
          </h1>
          <div
            class="px-2 py-2 text-primary cursor-pointer border-b border-primary"
            @click="darkmode"
          >
            <svg
              class="w-5 ml-2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
          </div>
          <div class="px-4 cursor-pointer md:hidden" @click="burger">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
        </div>

        <ul class="text-sm mt-2 hidden md:block" id="menu">
          <li class="text-gray-700 font-bold py-1">
            <nuxt-link
              to="/"
              href="#"
              class="px-4 flex justify-end border-r-4 border-primary"
            >
              <span>Home</span>
              <svg
                class="w-5 ml-2"
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
            </nuxt-link>
          </li>
          <li class="py-1">
            <nuxt-link
              to="/about"
              href="#"
              class="block px-4 flex justify-end border-r-4 border-primary"
            >
              <span>About</span>
              <svg
                class="w-5 ml-2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </nuxt-link>
          </li>
          <li class="py-1">
            <nuxt-link
              to="/contact"
              href="#"
              class="block px-4 flex justify-end border-r-4 border-primary"
            >
              <span>Contact</span>
              <svg
                class="w-5 ml-2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>

    <main class="px-16 py-6 md:col-span-5 bg-gray-100">
      <Nuxt />
      <footer class="text-gray-700 body-font">
        <div
          class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
        >
          <a
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <svg
              class="w-5 ml-2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
            <span class="ml-3 text-xl">built by Tomisinteazer</span>
          </a>
          <p
            class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
          >
            © 2020 The Recipe Archives —
            <a
              href="https://twitter.com/knyttneve"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
              >@tomisinteazer</a
            >
          </p>
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
          >
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </main>
  </div>
</template>
<script>
export default {
  methods: {
    burger() {
      setTimeout(this.$burger(), 1000);
    },
    darkmode() {
      this.$darkmode();
    },
  },
  async created() {
    try {
      await this.$store.dispatch("fetchlist");
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap");

.dark-mode :not(img):not(.inverted) {
  filter: invert(100%);
}

html {
  font-family: "Quicksand", sans-serif;
}
.badge {
  @apply absolute top-0 ml-2 p-2 mt-2 bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full;
}

.btn {
  @apply rounded-full py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer;
}
</style>
