const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordAgain = document.getElementById('password-again');

let isStringValid = false;
let isEmailValid = false;
let isPasswordValid = false;

function isFormValid() {
  if (isStringValid && isEmailValid && isPasswordValid) {
    return true;
  }
  return false;
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(email) {
  if (email.value.length < 1) {
    isEmailValid = false;
    return showError(email, 'Email is required');
  }
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email.value).toLowerCase())) {
    showSuccess(email);
    isEmailValid = true;
  } else {
    showError(email, 'Email is not valid');
    isEmailValid = false;
  }
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (!input.value) {
      showError(input, `${getInputNameFirstUpper(input)} is required`);
      isStringValid = false;
      return;
    } else {
      showSuccess(input);
      isStringValid = true;
    }
  });
}

function getInputNameFirstUpper(input) {
  return `${input.id[0].toUpperCase()}${input.id.slice(1)}`;
}

function checkLength(input, min, max) {
  if (input.value.length < 1) {
    return showError(input, `${getInputNameFirstUpper(input)} is required`);
  }
  if (input.value.length < min || input.value.length > max) {
    showError(
      input,
      `${getInputNameFirstUpper(
        input
      )} should be between ${min} and ${max} chars.`
    );
  }
}

function checkPasswordsMatch(password, passwordAgain) {
  if (password.value !== passwordAgain.value) {
    isPasswordValid = false;
    showError(password, 'passwords do not macth');
    showError(passwordAgain, 'passwords do not macth');
    return;
  }
  isPasswordValid = true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkRequired([username, email, password, passwordAgain]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkLength(passwordAgain, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, passwordAgain);

  if (isFormValid()) {
    console.log('valid');
    form.submit();
  } else {
    console.log('not valid');
  }
});
