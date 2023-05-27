window.addEventListener("scroll", function () {
      var header = document.querySelector(".header");
      var scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        header.classList.add("white-bg");
      } else {
        header.classList.remove("white-bg");
      }
    });
