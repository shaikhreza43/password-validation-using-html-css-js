let psswd = document.getElementById("psswd");
let toggleBtn = document.getElementById("toggleBtn");
let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let numberCase = document.getElementById("number");
let specialChar = document.getElementById("special");
let minLength = document.getElementById("length");

function checkPassword(data) {
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const digit = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");

  //lower case validation
  if (lower.test(data)) {
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
  }
  //upper case validation
  if (upper.test(data)) {
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
  }
  //digit validation
  if (digit.test(data)) {
    numberCase.classList.add("valid");
  } else {
    numberCase.classList.remove("valid");
  }
  //special character validation
  if (special.test(data)) {
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
  }
  //Length validation
  if (length.test(data)) {
    minLength.classList.add("valid");
  } else {
    minLength.classList.remove("valid");
  }
}

toggleBtn.onclick = function () {
  if (psswd.type === "password") {
    psswd.setAttribute("type", "text");
    toggleBtn.classList.add("hide");
  } else {
    psswd.setAttribute("type", "password");
    toggleBtn.classList.remove("hide");
  }
};
