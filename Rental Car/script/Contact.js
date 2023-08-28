const emailInput = document.querySelector('.email');
const questionInput = document.querySelector('.text');
const submitButton = document.getElementById('submitButton');

const validEmailDomains = ['gmail.com', 'yahoo.com'];

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

emailInput.addEventListener('input', function() {
  const email = emailInput.value;
  const isEmailValid = isValidEmail(email);
  const domain = email.split('@')[1];

  submitButton.disabled = !(isEmailValid && validEmailDomains.includes(domain));
});

submitButton.addEventListener('click', function() {
  const email = emailInput.value;
  const question = questionInput.value;
  const domain = email.split('@')[1];

  if (isValidEmail(email) && validEmailDomains.includes(domain)) {
    const questionData = { email, question };
    console.log(questionData);
    emailInput.value = '';
    questionInput.value = '';

  } else {
    console.log('not valid')
  }
});