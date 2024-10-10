document
  .getElementById("form__main")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const consent = document.getElementById("consent");
    const alert = document.getElementById("alert");
    const nameError = name.nextElementSibling;
    const emailError = email.nextElementSibling;

    nameError.textContent = "";
    emailError.textContent = "";
    name.parentElement.classList.remove("error");
    email.parentElement.classList.remove("error");
    consent.parentElement.classList.remove("error");

    if (name.value.length < 2 || name.value.length > 100) {
      name.parentElement.classList.add("error");
      nameError.textContent = "Invalid Name";
      valid = false;
    }

    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailPattern.test(email.value)) {
      email.parentElement.classList.add("error");
      emailError.textContent = "Invalid email address.";
      valid = false;
    }

    if (!consent.checked) {
      consent.parentElement.classList.add("error");
      consent.parentElement.nextElementSibling.textContent =
        "You must agree to the consent.";
      valid = false;
    }

    if (valid) {
      const formData = {
        name: name.value,
        email: email.value,
        consent: consent.checked,
      };

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert.style.display = "block";
          setTimeout(() => {
            alert.style.display = "none";
          }, 2000);
        })
        .catch((error) => console.error("Error:", error));
    }
  });
