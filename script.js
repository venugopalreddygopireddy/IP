function validateRegister() {
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  if (fullname === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
    alert("All fields are required.");
    return false;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("Invalid email format.");
    return false;
  }

  const regexPhone = /^\d{10}$/;
  if (!regexPhone.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  return true;
}

function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Both fields are required.");
    return false;
  }

  return true;
}
