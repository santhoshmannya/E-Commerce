/* ==========================
   CHRONOVA MAIN.JS
   ========================== */

// Cart Count
let cartCount = localStorage.getItem("cartCount")
  ? parseInt(localStorage.getItem("cartCount"))
  : 0;

const cartDisplay = document.getElementById("cart-count");

if (cartDisplay) {
  cartDisplay.textContent = cartCount;
}

/* ==========================
   ADD TO CART
   ========================== */

function addToCart() {
  cartCount++;

  localStorage.setItem("cartCount", cartCount);

  if (cartDisplay) {
    cartDisplay.textContent = cartCount;
  }

  showNotification("Watch added to cart!");
}

/* ==========================
   NOTIFICATION
   ========================== */

function showNotification(message) {
  const notification = document.createElement("div");

  notification.classList.add("notification");

  notification.innerText = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");

    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 2500);
}

/* ==========================
   SMOOTH SCROLL
   ========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* ==========================
   NAVBAR SHADOW
   ========================== */

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow =
      "0 5px 25px rgba(0,0,0,0.4)";
  } else {
    header.style.boxShadow = "none";
  }

});

/* ==========================
   HERO BUTTON
   ========================== */

const heroBtn = document.querySelector(".hero-btn");

if (heroBtn) {

  heroBtn.addEventListener("click", () => {

    document
      .getElementById("featured")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

}

/* ==========================
   NEWSLETTER
   ========================== */

const subscribeBtn =
  document.querySelector(".newsletter-box button");

if (subscribeBtn) {

  subscribeBtn.addEventListener("click", () => {

    const email =
      document.querySelector(".newsletter-box input").value;

    if (email === "") {

      showNotification("Please enter your email");

      return;
    }

    if (!email.includes("@")) {

      showNotification("Enter a valid email");

      return;
    }

    localStorage.setItem(
      "subscriberEmail",
      email
    );

    showNotification(
      "Thank you for subscribing!"
    );

    document.querySelector(
      ".newsletter-box input"
    ).value = "";

  });

}

/* ==========================
   SEARCH ICON
   ========================== */

const searchIcon =
  document.querySelector(".fa-magnifying-glass");

if (searchIcon) {

  searchIcon.addEventListener("click", () => {

    let searchTerm = prompt(
      "Search for a watch:"
    );

    if (searchTerm) {

      showNotification(
        `Searching for "${searchTerm}"...`
      );

    }

  });

}

/* ==========================
   FADE-IN ANIMATION
   ========================== */

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },

  {
    threshold: 0.2
  }

);

document
  .querySelectorAll(
    ".product-card, .collection-left, .collection-right, .stat-box"
  )
  .forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

  });

/* ==========================
   SCROLL TO TOP BUTTON
   ========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

/* ==========================
   PAGE LOADER
   ========================== */

window.addEventListener("load", () => {

  const loader =
    document.querySelector(".loader");

  if (loader) {

    loader.style.display = "none";

  }

});

/* ==========================
   CONSOLE MESSAGE
   ========================== */

console.log(
  "%cChronova Luxury Watches",
  "color:#d8a07c; font-size:22px; font-weight:bold;"
);

console.log(
  "Crafting Time. Defining Luxury."
);