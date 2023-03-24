const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error");

confirmPasswordInput.addEventListener("input", () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = "*Passwords don't match";
  } else {
    passwordError.textContent = "";
  }
});