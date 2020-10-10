<template>
  <div>
    <header class="mt-4">
      <h2
        class="text-gray-700 text-6xl font-semibold leading-none tracking-wider text-center"
      >
        Contact me
      </h2>
      <h3 class="text-2xl font-semibold tracking-wider text-center">
        I'd love to hear from you
      </h3>
    </header>
    <section class="text-gray-700 body-font relative">
      <div class="container px-5 py-10 mx-auto">
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <input
                class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2"
                placeholder="Name"
                type="text"
                v-model="name"
              />
            </div>
            <div class="p-2 w-1/2">
              <input
                class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2"
                placeholder="Email"
                type="email"
                v-model="email"
              />
            </div>
            <div class="p-2 w-full">
              <input
                class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2"
                placeholder="Subject"
                v-model="subject"
                type="text"
              />
            </div>
            <div class="p-2 w-full">
              <textarea
                class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-teal-500 text-base px-4 py-2 resize-none block"
                placeholder="Message"
                v-model="message"
              ></textarea>
            </div>
            <div class="p-2 w-full">
              <button
                class="flex mx-auto text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg"
                @click="whatsappMessage"
              >
                Send
              </button>
            </div>
            <div
              class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
            >
              <a class="text-teal-500">tomisinteazer@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "contact me",
    };
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      subject: "",
    };
  },
  methods: {
    whatsappMessage() {
      if (
        (this.name && this.email && this.message && this.subject != "") ||
        null
      ) {
        let fullMessage = `Hello+my+name+is+${this.name}%0Ai+wanna+talk+about+${this.subject}%0A${this.message}%0Aand+my+email+is:${this.email}`;
        let contacturl = `https://api.whatsapp.com/send?phone=2348130617579&text=${fullMessage}`;

        window.location.replace(contacturl);
      } else {
        alert(
          "please ensure all fields are filled correctly with valid details"
        );
      }
    },
  },
};
</script>