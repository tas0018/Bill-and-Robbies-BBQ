const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-target]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      const truck = document.getElementById("food-truck-menu");
      const night = document.getElementById("late-night-menu");
      const full = document.getElementById("full-menu");
      truck.classList.remove("active");
      night.classList.remove("active");
      full.classList.remove("active");
    });

    target.classList.add("active");
  });
});

//Nav Code
window.addEventListener("scroll", function () {
  var header = document.querySelector("#desktop-nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Mobile Nav Code
