const form = document.querySelector("form");
const numberInput = document.getElementById("card_number");
const nameInput = document.getElementById("card_name");
const monthInput = document.getElementById("card_month");
const yearInput = document.getElementById("card_year");
const cvcInput = document.getElementById("card_cvc");
const submitBtn = document.getElementById("submit_btn");
const completed = document.querySelector(".thank");

function handleSubmit(e) {
  e.preventDefault();
  const isValid = validateForm();
  if (isValid) {
    completed.classList.remove("hidden");
    form.classList.add("hidden");
  }
}

function validateForm() {
  let isValid = true;
  const inputs = [nameInput, numberInput, monthInput, yearInput, cvcInput];
  for (const input of inputs) {
    if (!input.value) {
      input.classList.add("error");
      input.parentElement.classList.add("error_message");
      isValid = false;
    } else {
      input.classList.remove("error");
      input.parentElement.classList.remove("error_message");
    }
  }
  if (numberInput.value.length < 16) {
    numberInput.classList.add("error");
    isValid = false;
  }
  return isValid;
}

submitBtn.addEventListener("click", handleSubmit);
