const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  .matches;

localStorage.setItem("mode", darkMediaQuery);
export default (context, inject) => {
  const burger = () => {
    const menu = document.querySelector("#menu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };
  // Inject $hello(msg) in Vue, context and store.
  inject("burger", burger);

  // For Nuxt <= 2.12, also add 👇
  context.$burger = burger;
  const darkmode = () => {
    const dark = localStorage.getItem("mode") === "true";

    var imgs = document.getElementsByTagName("img");
    if (!dark) {
      for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.setProperty("filter", "invert(100%) ");
      }
      document.documentElement.style.setProperty("filter", "invert(100%)");
      localStorage.setItem("mode", !dark);
    } else {
      document.documentElement.style.setProperty("filter", "invert(0%)");
      for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.setProperty("filter", "invert(0%) ");
      }
      localStorage.setItem("mode", !dark);
    }
  };
  inject("darkmode", darkmode);
  context.$darkmode = darkmode;
  const isdark = () => {
    const dark = localStorage.getItem("mode") === "true";

    var imgs = document.getElementsByTagName("img");
    if (dark) {
      for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.setProperty("filter", "invert(100%) ");
      }
      document.documentElement.style.setProperty("filter", "invert(100%)");
    } else {
      document.documentElement.style.setProperty("filter", "invert(0%)");
      for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.setProperty("filter", "invert(0%) ");
      }
    }
  };
  inject("isdark", isdark);
  context.$isdark = isdark;
};
