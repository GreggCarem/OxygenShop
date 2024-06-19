document.addEventListener("DOMContentLoaded", function () {
  const modalContainer = document.getElementById("modal--container");
  const closeButton = document.querySelector(".close");
  const popupForm = document.querySelector(".popup");

  const isModalClosed = () => localStorage.getItem("modalClosed") === "true";

  //  open the modal
  const openModal = () => {
    modalContainer.style.display = "flex";
  };

  //close the modal
  const closeModal = () => {
    modalContainer.style.display = "none";
    localStorage.setItem("modalClosed", "true");
  };

  // close button
  closeButton.addEventListener("click", function (event) {
    event.preventDefault();
    closeModal();
  });

  // clicking page
  window.addEventListener("click", function (event) {
    if (event.target === modalContainer) {
      closeModal();
    }
  });

  // ESC key
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  //5 seconds
  setTimeout(function () {
    if (!isModalClosed()) {
      openModal();
    }
  }, 5000);

  //  25%
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + window.innerHeight;
    const scrollThreshold = document.documentElement.scrollHeight * 0.25;
    if (scrollPosition >= scrollThreshold && !isModalClosed()) {
      openModal();
    }
  });

  // Form
  popupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("email__modal");
    const email = emailInput.value;

    // Validate email // send to serer
    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailPattern.test(email)) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Thank you for subscribing!");
          closeModal();
        });
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
