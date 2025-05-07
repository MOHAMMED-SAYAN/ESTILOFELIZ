

tailwind.config = {
    theme: {
      extend: {
        colors: { primary: "#563C5C", secondary: "#013220" },
        borderRadius: {
          none: "0px",
          sm: "4px",
          DEFAULT: "8px",
          md: "12px",
          lg: "16px",
          xl: "20px",
          "2xl": "24px",
          "3xl": "32px",
          full: "9999px",
          button: "8px",
        },
      },
    },
  };



  document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenuButton.addEventListener("click", function () {
      if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        mobileMenuButton.innerHTML = '<i class="ri-close-line text-xl"></i>';
      } else {
        mobileMenu.classList.add("hidden");
        mobileMenuButton.innerHTML = '<i class="ri-menu-line text-xl"></i>';
      }
    });
    // Mobile collections dropdown
    const mobileCollectionsButton = document.getElementById(
      "mobile-collections-button",
    );
    const mobileCollectionsDropdown = document.getElementById(
      "mobile-collections-dropdown",
    );
    mobileCollectionsButton.addEventListener("click", function () {
      if (mobileCollectionsDropdown.classList.contains("hidden")) {
        mobileCollectionsDropdown.classList.remove("hidden");
        mobileCollectionsButton
          .querySelector("i")
          .classList.remove("ri-arrow-down-s-line");
        mobileCollectionsButton
          .querySelector("i")
          .classList.add("ri-arrow-up-s-line");
      } else {
        mobileCollectionsDropdown.classList.add("hidden");
        mobileCollectionsButton
          .querySelector("i")
          .classList.remove("ri-arrow-up-s-line");
        mobileCollectionsButton
          .querySelector("i")
          .classList.add("ri-arrow-down-s-line");
      }
    });
    // Header scroll effect
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("py-2");
        header.classList.add("shadow");
      } else {
        header.classList.remove("py-2");
        header.classList.remove("shadow");
      }
    });
    // Reviews carousel
    const reviewsContainer = document.getElementById("reviews-container");
    const prevReviewBtn = document.getElementById("prev-review");
    const nextReviewBtn = document.getElementById("next-review");
    const reviewDots = document.querySelectorAll(".review-dot");
    let currentReviewIndex = 0;
    function showReview(index) {
      const slideWidth = document.querySelector(".review-slide").offsetWidth;
      reviewsContainer.style.transition = "transform 0.5s ease-in-out";
      reviewsContainer.style.transform = `translateX(-${slideWidth * index}px)`;
      // Update dots
      reviewDots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.remove("bg-gray-300");
          dot.classList.add("bg-primary");
        } else {
          dot.classList.remove("bg-primary");
          dot.classList.add("bg-gray-300");
        }
      });
      currentReviewIndex = index;
    }
    prevReviewBtn.addEventListener("click", function () {
      if (currentReviewIndex > 0) {
        showReview(currentReviewIndex - 1);
      }
    });
    nextReviewBtn.addEventListener("click", function () {
      const maxIndex = document.querySelectorAll(".review-slide").length - 1;
      if (currentReviewIndex < maxIndex) {
        showReview(currentReviewIndex + 1);
      }
    });
    reviewDots.forEach((dot, index) => {
      dot.addEventListener("click", function () {
        showReview(index);
      });
    });
    // Auto rotate reviews
    let reviewInterval = setInterval(() => {
      const maxIndex = document.querySelectorAll(".review-slide").length - 1;
      if (currentReviewIndex < maxIndex) {
        showReview(currentReviewIndex + 1);
      } else {
        showReview(0);
      }
    }, 5000);
    reviewsContainer.addEventListener("mouseenter", () => {
      clearInterval(reviewInterval);
    });
    reviewsContainer.addEventListener("mouseleave", () => {
      reviewInterval = setInterval(() => {
        const maxIndex = document.querySelectorAll(".review-slide").length - 1;
        if (currentReviewIndex < maxIndex) {
          showReview(currentReviewIndex + 1);
        } else {
          showReview(0);
        }
      }, 5000);
    });
    // Chat widget
    const chatWidget = document.getElementById("chat-widget");
    const chatButton = document.getElementById("chat-button");
    const chatPopup = document.getElementById("chat-popup");
    const closeChat = document.getElementById("close-chat");
    // Show chat widget with animation after 2 seconds
    setTimeout(() => {
      chatWidget.style.opacity = "1";
      chatWidget.style.transform = "translateY(0)";
    }, 2000);
    chatButton.addEventListener("click", function () {
      if (chatPopup.classList.contains("hidden")) {
        chatPopup.classList.remove("hidden");
        chatButton.innerHTML = '<i class="ri-close-line text-xl"></i>';
      } else {
        chatPopup.classList.add("hidden");
        chatButton.innerHTML = '<i class="ri-chat-1-line text-xl"></i>';
      }
    });
    closeChat.addEventListener("click", function () {
      chatPopup.classList.add("hidden");
      chatButton.innerHTML = '<i class="ri-chat-1-line text-xl"></i>';
    });
    // Custom radio buttons
    const customRadios = document.querySelectorAll(".custom-radio");
    customRadios.forEach((radio) => {
      radio.addEventListener("change", function () {
        const name = this.getAttribute("name");
        const radios = document.querySelectorAll(`.custom-radio[name="${name}"]`);
        radios.forEach((r) => {
          const label = r.nextElementSibling;
          if (r.checked) {
            label.classList.add("border-primary");
            label.classList.add("text-primary");
          } else {
            label.classList.remove("border-primary");
            label.classList.remove("text-primary");
          }
        });
      });
    });
    // Fade in animations on scroll
    const fadeElements = document.querySelectorAll(".fade-in-up");
    function checkFade() {
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    }
    // Initial check
    checkFade();
    // Check on scroll
    window.addEventListener("scroll", checkFade);
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded, initializing mobile menu...");
  
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
  
    if (!mobileMenuButton || !mobileMenu) {
      console.error("Mobile menu elements not found!", { mobileMenuButton, mobileMenu });
      return;
    }
  
    mobileMenuButton.addEventListener("click", function () {
      console.log("Mobile menu button clicked");
      const isHidden = mobileMenu.classList.contains("hidden");
      console.log("Is menu hidden?", isHidden);
      mobileMenu.classList.toggle("hidden", !isHidden);
      mobileMenuButton.innerHTML = isHidden
        ? '<i class="ri-close-line text-xl"></i>'
        : '<i class="ri-menu-line text-xl"></i>';
    });
  
    const mobileCollectionsButton = document.getElementById("mobile-collections-button");
    const mobileCollectionsDropdown = document.getElementById("mobile-collections-dropdown");
  
    if (!mobileCollectionsButton || !mobileCollectionsDropdown) {
      console.error("Mobile collections elements not found!", { mobileCollectionsButton, mobileCollectionsDropdown });
      return;
    }
  
    mobileCollectionsButton.addEventListener("click", function () {
      console.log("Collections button clicked");
      const isHidden = mobileCollectionsDropdown.classList.contains("hidden");
      console.log("Is collections dropdown hidden?", isHidden);
      mobileCollectionsDropdown.classList.toggle("hidden", !isHidden);
      const icon = mobileCollectionsButton.querySelector("i");
      icon.classList.toggle("ri-arrow-down-s-line", !isHidden);
      icon.classList.toggle("ri-arrow-up-s-line", isHidden);
    });
  
    // ... (rest of the JavaScript code)
  });
