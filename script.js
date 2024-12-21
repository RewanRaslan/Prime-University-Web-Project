
// ------------------------ NavBar ---------------------------------

document.addEventListener("DOMContentLoaded", () => {
    // Navbar Toggle
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    //----------------------------- Courses--------------------------------- 

    // Slider Functionality
    const items = document.querySelectorAll(".slider .list .item");
    const thumbnails = document.querySelectorAll(".thumbnail .item");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    let currentIndex = 0;

    const showSlider = () => {
        // Reset active classes
        document.querySelector(".slider .list .item.active")?.classList.remove("active");
        document.querySelector(".thumbnail .item.active")?.classList.remove("active");

        // Set new active item
        items[currentIndex].classList.add("active");
        thumbnails[currentIndex].classList.add("active");
    };

    const setNext = () => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlider();
    };

    const setPrev = () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlider();
    };

    next.addEventListener("click", setNext);
    prev.addEventListener("click", setPrev);

    // Auto-scroll every 7 seconds
    setInterval(setNext, 7000);

    // Thumbnail Click Event
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            currentIndex = index;
            showSlider();
        });
    });

    // -----------------------------    Contact --------------------------------
    
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Clear any previous error messages
  document.querySelectorAll(".error-message").forEach((msg) => {
    msg.textContent = "";
    msg.style.display = "none";
  });

  let isValid = true;

  // Validate Full Name
  const fullName = document.getElementById("fullName");
  if (fullName.value.trim() === "") {
    showError(fullName, "Full Name is required.");
    isValid = false;
  } else if (fullName.value.length < 3) {
    showError(fullName, "Full Name must be at least 3 characters long.");
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    showError(email, "Email is required.");
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    showError(email, "Please enter a valid email address.");
    isValid = false;
  }

  // Validate Message
  const message = document.getElementById("message");
  if (message.value.trim() === "") {
    showError(message, "Message is required.");
    isValid = false;
  } else if (message.value.length < 10) {
    showError(message, "Message must be at least 10 characters long.");
    isValid = false;
  }

  // If the form is valid, show success or proceed with submission logic
  if (isValid) {
    alert("Form submitted successfully!");
    this.reset(); // Reset the form fields
  }
});

// Helper function to show error messages
function showError(inputElement, message) {
  let errorMessage = inputElement.nextElementSibling;
  
  // Check if an error message exists
  if (!errorMessage || !errorMessage.classList.contains("error-message")) {
    errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    inputElement.parentNode.appendChild(errorMessage);
  }
  
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}



//--------------- ------------Log In --------------------------------------------------

    // Login/Signup Toggle
const loginForm = document.querySelector(".form-inner");
const signupRadio = document.querySelector("#signup");
const loginRadio = document.querySelector("#login");
const titleText = document.querySelector(".title-text");
const signupBtn = document.querySelector("label.signup");
const loginBtn = document.querySelector("label.login");

    signupBtn.addEventListener("click", () => {
        signupRadio.checked = true;
        loginForm.style.marginLeft = "-100%";
        titleText.style.marginLeft = "-100%"; // Slide the title
    });

    loginBtn.addEventListener("click", () => {
         loginRadio.checked = true;
        loginForm.style.marginLeft = "0";
        titleText.style.marginLeft = "0"; // Slide the title back
    });
});


