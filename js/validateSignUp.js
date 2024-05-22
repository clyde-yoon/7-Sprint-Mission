const emailInput = document.querySelector(".auth-input-field");
const emailErrorMessage = document.querySelector(".email-error-message");

const passwordInput = document.querySelector(".auth-password-field");
const passwordErrorMessage = document.querySelector(".password-error-message");

const verifyPasswordInput = document.querySelector(".verify-password-field");
const verifyPasswordErrorMessage = document.querySelector(
  ".verify-password-error-message"
);

const nicknameInput = document.querySelector(".nickname-input-field");
const nicknameErrorMessage = document.querySelector(".nickname-error-message");

const loginButton = document.querySelector(".auth-button");

const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const isEmail = emailPattern.test(email);
  return isEmail;
};

const isPasswordValid = (password) => {
  const isPassword = password.length >= 8;
  return isPassword;
};

const validateEmailInput = (email) => {
  if (email === "") {
    emailInput.classList.add("auth-input-error");
    emailErrorMessage.classList.add("error-message-on");
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
    return false;
  }

  if (!isEmailValid(email)) {
    emailInput.classList.toggle("auth-input-error", true);
    emailErrorMessage.classList.toggle("error-message-on", true);
    emailErrorMessage.textContent = "잘못된 이메일 형식입니다.";
    return false;
  }

  emailInput.classList.remove("auth-input-error");
  emailErrorMessage.classList.remove("error-message-on");
  emailErrorMessage.textContent = "";
  return true;
};

const validateNicknameInput = (nickname) => {
  if (nickname === "") {
    nicknameInput.classList.add("nickname-input-error");
    nicknameErrorMessage.classList.add("error-message-on");
    nicknameErrorMessage.textContent = "닉네임을 입력해주세요.";
    return false;
  }

  nicknameInput.classList.remove("nickname-input-error");
  nicknameErrorMessage.classList.remove("error-message-on");
  nicknameErrorMessage.textContent = "";
  return true;
};

const validatePasswordInput = (password) => {
  if (password === "") {
    passwordInput.classList.add("password-field-error");
    passwordErrorMessage.classList.add("error-message-on");
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    return false;
  }

  if (!isPasswordValid(password)) {
    passwordInput.classList.toggle("password-field-error", true);
    passwordErrorMessage.classList.toggle("error-message-on", true);
    passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
    return false;
  }

  passwordInput.classList.remove("password-field-error");
  passwordErrorMessage.classList.remove("error-message-on");
  passwordErrorMessage.textContent = "";
  return true;
};

const validateVerifyPasswordInput = (password, verifyPassword) => {
  if (verifyPassword === "") {
    verifyPasswordInput.classList.add("verify-password-field-error");
    verifyPasswordErrorMessage.classList.add("error-message-on");
    verifyPasswordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    return false;
  }

  if (password !== verifyPassword) {
    verifyPasswordInput.classList.toggle("verify-password-field-error", true);
    verifyPasswordErrorMessage.classList.toggle("error-message-on", true);
    verifyPasswordErrorMessage.textContent = "비밀번호가 일치하지 않습니다.";
    return false;
  }

  verifyPasswordInput.classList.remove("verify-password-field-error");
  verifyPasswordErrorMessage.classList.remove("error-message-on");
  verifyPasswordErrorMessage.textContent = "";
  return true;
};

emailInput.addEventListener("focusout", () => {
  validateEmailInput(emailInput.value);
});

nicknameInput.addEventListener("focusout", () => {
  validateNicknameInput(nicknameInput.value);
});

passwordInput.addEventListener("focusout", () => {
  validatePasswordInput(passwordInput.value);
});

verifyPasswordInput.addEventListener("focusout", () => {
  validateVerifyPasswordInput(passwordInput.value, verifyPasswordInput.value);
});

const handleInput = () => {
  const emailValidationResult = validateEmailInput(emailInput.value);
  const nicknameValidationResult = validateNicknameInput(nicknameInput.value);
  const passwordValidationResult = validatePasswordInput(passwordInput.value);
  const verifyPasswordValidationResult = validateVerifyPasswordInput(
    passwordInput.value ,verifyPasswordInput.value
  );

  const isEmailNotEmpty = emailInput.value !== "";
  const isNicknameNotEmpty = nicknameInput.value !== "";
  const isPasswordNotEmpty = passwordInput.value !== "";
  const isVerifyPasswordNotEmpty = verifyPasswordInput.value !== "";

  const isFormValid =
    isEmailNotEmpty &&
    isNicknameNotEmpty &&
    isPasswordNotEmpty &&
    isVerifyPasswordNotEmpty &&
    emailValidationResult &&
    nicknameValidationResult &&
    passwordValidationResult &&
    verifyPasswordValidationResult;

  loginButton.disabled = !isFormValid;
  loginButton.classList.toggle("button-disabled", !isFormValid);
};

emailInput.addEventListener("input", handleInput);
nicknameInput.addEventListener("input", handleInput);
passwordInput.addEventListener("input", handleInput);
verifyPasswordInput.addEventListener("input", handleInput);

loginButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    emailInput.value !== "" &&
    nicknameInput.value !== "" &&
    passwordInput.value !== "" &&
    verifyPasswordInput.value !== "" &&
    validateEmailInput(emailInput.value) === true &&
    validateNicknameInput(nicknameInput.value) === true &&
    validatePasswordInput(passwordInput.value) === true &&
    validateVerifyPasswordInput(
      passwordInput.value,
      verifyPasswordInput.value
    ) === true
  ) {
    window.location.href = "/signin.html";
  }
});
