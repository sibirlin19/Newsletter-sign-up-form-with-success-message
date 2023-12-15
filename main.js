const emailField = document.getElementById("email");
const form = document.getElementById("regForm");
const error = document.getElementById("error_message");
const condirmDescription = document.getElementById("email_spot");
let emailConfirm;

// Function to display confirmation text
function confirmDone() {
  let emailconfirm = localStorage.getItem("emailConfirm");
  condirmDescription.innerHTML = `A confirmation email has been sent to <br> <span class="email_in">${emailconfirm}</span>.Please open it and click the button inside to
  confirm your subscription.`;
}
// Function to check the entered email
function validateCheck() {
  const email = emailField.value;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let result = regex.test(email);
  emailConfirm = emailField.value;
  return result;
}
// Validate email and display error if needed
function validateEmail() {
  let result = validateCheck();
  if (!result) {
    emailField.classList.add("invalid_input");
    error.style.display = "block";
  } else {
    emailField.classList.remove("invalid_input");
    error.style.display = "none";
  }
}
// Form submit handler
function submitFunction(e) {
  e.preventDefault();
  let result = validateCheck();
  if (result) {
    emailField.removeEventListener("input", validateEmail, true);
    localStorage.setItem("emailConfirm", emailConfirm);
    location.replace("thank-you.html");
  } else {
    emailField.classList.add("invalid_input");
    error.style.display = "block";
  }
}
// Adding event listeners if elements are available
if (emailField && form) {
  emailField.addEventListener("input", validateEmail);
  form.addEventListener("submit", submitFunction);
}
document.addEventListener("DOMContentLoaded", confirmDone);
