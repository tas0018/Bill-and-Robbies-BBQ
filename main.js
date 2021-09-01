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
const navClick = () => {
  const hamburger = document.querySelector(".hamburger");
  const navSideBar = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle nav
  hamburger.addEventListener("click", () => {
    navSideBar.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.7s ease forwards 
      ${index / 5 + 0.6}s`;
      }
    });
  });
};

navClick();
