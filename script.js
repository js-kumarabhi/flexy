// Search bar toggle
var searchAbs = document.getElementById("searchAbs");
var searchClosebtn = document.getElementById("search-close-btn");

var isSearchVisible = false;

searchClosebtn.addEventListener("click", function () {
  if (isSearchVisible) {
    searchAbs.style.display = "none";
    searchClosebtn.className = "ri-search-line";
  } else {
    searchAbs.style.display = "flex";
    searchClosebtn.className = "ri-close-fill";
  }

  isSearchVisible = !isSearchVisible;
});

// Profile card
var profileBtn = document.getElementById('profile-btn');
var profileCard = document.getElementById('profile-card');
var cardVisible = false;

profileBtn.addEventListener("click", function () {
  if (cardVisible) {
    profileCard.style.display = "none";
    profileBtn.style.color = "#000";
  } else {
    profileCard.style.display = "block";
    profileBtn.style.color = "#14f38c";
  }
  cardVisible = !cardVisible;
});

// 2nd fun Hide the profile card when scrolling
document.addEventListener("scroll", function () {
  if (cardVisible) {
    profileCard.style.display = "none";
    profileBtn.style.color = "#000";
    cardVisible = false;
  }
});

// Mobile menu
var mobileBtn = document.getElementById('mobile-btn');
var mainMenu = document.getElementById('main-menu');
var menuVisible = false;

mobileBtn.addEventListener("click", function () {
  if (menuVisible) {
    mainMenu.style.display = "none";
    mobileBtn.className = "ri-menu-fill";
  } else {
    mainMenu.style.display = "flex";
    mobileBtn.className = "ri-close-fill";
  }
  menuVisible = !menuVisible;
});

// Display the main menu when the window is resized (for screens wider than 768px)
window.addEventListener("resize", function () {
  if (window.innerWidth >= 769) {
    mainMenu.style.display = "flex";
  } else {
    mainMenu.style.display = "none";
  }
});


//  Product Card animation "fading animation on card"
ScrollTrigger.batch("#product-card", {
  interval: 0.5, 
  batchMax: 5,
  onEnter: (batch) =>
  gsap.to(
  batch,
  {
  autoAlpha: 1,
  stagger: 0.15, 
  overwrite: true
  }),
  onLeave: (batch) =>
  gsap.set( 
      batch,
  { 
      autoAlpha: 0, overwrite: true }),
  onEnterBack: (batch) => 
  gsap.to(
  batch,
  {
  autoAlpha: 1,
  stagger: 0.15,
  overwrite: true
  }),
  onLeaveBack: (batch) =>
  gsap.set(batch, 
      {autoAlpha: 0, overwrite: true }),
  });