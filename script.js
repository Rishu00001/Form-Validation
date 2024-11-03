const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateName() && validateEmail()&&validatePassword()) {
    document.getElementById("name").value = ''
    document.getElementById("email").value = ''
    document.getElementById("password").value = ''
    setTimeout(() => {
      alert("Form submitted successfully!");
    }, 0);
  }
});

let validateName = () => {
  let name = document.getElementById("name").value.trim();
  if (name.length === 0) {
    nameError.innerHTML = "*Name is requeired";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "*Please enter your full name";
    return false;
  }
  nameError.innerHTML = "";
  return true;
};

let validateEmail = () => {
  let email = document.getElementById("email").value.trim();
  if (email.length === 0) {
    emailError.innerHTML = "*mandatory";
    return false;
  }
  if (!email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "*Please enter a valid email";
    return false;
  }
  emailError.innerHTML = "";
  return true;
};

let validatePassword = () => {
  let password = document.getElementById("password").value.trim();
  if (password.length === 0) {
    passwordError.innerHTML = "*mandatory";
    return false;
  }
  if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
    passwordError.innerHTML =
      "*Password should contain at least 1 uppercase, 1 lowercase, 1 numeric value and a special character";
    return false;
  }
  passwordError.innerHTML = "";
  return true;
};
