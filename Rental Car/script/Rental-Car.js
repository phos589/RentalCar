import { models } from "../script/data.js";

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
  question.addEventListener("click", function() {
    const answer = this.nextElementSibling;
    if (answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});

let rentalModel = document.querySelector('.rentalModel-js');
const carImage = rentalModel.querySelector('.ModelCar');
const modelModel = rentalModel.querySelector('#modelModel');
const modelNameElement = rentalModel.querySelector('#modelName');
const modelYearElement = rentalModel.querySelector('#modelYear');
const modelACElement = rentalModel.querySelector('#modelAC');
const modelTransmissionElement = rentalModel.querySelector('#modelTransmission');
const modelFuelElement = rentalModel.querySelector('#modelFuel');

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const clickedModel = button.textContent;

    // Find the matching model object from the models array
    const selectedModel = models.find(model => model.model === clickedModel);

    if (selectedModel) {
      carImage.src = selectedModel.img;
      modelModel.textContent = `Model: ${selectedModel.model}`;
      modelNameElement.textContent = `Mark: ${selectedModel.Mark}`;
      modelYearElement.textContent = `Year: ${selectedModel.Year}`;
      modelACElement.textContent = `AC: ${selectedModel.AC}`;
      modelTransmissionElement.textContent = `Transmission: ${selectedModel.Trabsmission}`;
      modelFuelElement.textContent = `Fuel: ${selectedModel.fule}`;
    }
  });
});

let booking = [];

document.querySelector('.searchButton').addEventListener('click', function() {
  // Get user inputs
  const carModel = document.getElementById('carModel').value;
  const pickUpDate = document.getElementById('pickUpDate').value;
  const dropOffDate = document.getElementById('dropOffDate').value;
  const phoneNumber = document.getElementById('Number').value;
  const pickUpLocation = document.getElementById('piceUpLocation').value;
  const dropOffLocation = document.getElementById('dropOffLocation').value;
  
  // Check if any required input is empty
  if (
    !carModel || carModel === 'Select a car model' ||
    !pickUpDate || !dropOffDate || 
    !phoneNumber || phoneNumber === 'Phone Number' || 
    !pickUpLocation || pickUpLocation === 'Select a pick-up location' || 
    !dropOffLocation || dropOffLocation === 'Select a drop-off location'
) {
    console.log('Please fill in all required fields.');
    return; 
}
if (!phoneNumber || phoneNumber === 'Phone Number') {
  console.log('Please fill in the phone number.');
  return;
}

function isValidPhoneNumber(phoneNumber) {
  // A basic example of phone number validation
  // This assumes the phone number is valid if it contains only digits and has a length between 7 and 15 characters.
  const phonePattern = /^\d{7,15}$/;
  return phonePattern.test(phoneNumber);
}
const cleanedPhoneNumber = phoneNumber.replace(/[-\s]/g, '').replace(/\D/g, '');

const formattedPhoneNumber = formatPhoneNumber(cleanedPhoneNumber);

function formatPhoneNumber(phoneNumber) {
  if (!phoneNumber.startsWith('0')) {
    phoneNumber = '0' + phoneNumber;
  }
  const firstPart = phoneNumber.substr(0, 3);
  const secondPart = phoneNumber.substr(3, 3);
  const thirdPart = phoneNumber.substr(6);

  return `${firstPart}-${secondPart} ${thirdPart}`;
}


  
  // Create an object to store the booking details
  const bookingDetails = {
      carModel: carModel,
      pickUpDate: pickUpDate,
      dropOffDate: dropOffDate,
      phoneNumber: formattedPhoneNumber,
      pickUpLocation: pickUpLocation,
      dropOffLocation: dropOffLocation
  };
  
  // Add the booking details to the array
  booking.push(bookingDetails);

document.getElementById('carModel').value = 'Select a car model';
document.getElementById('pickUpDate').value = '';
document.getElementById('dropOffDate').value = '';
document.getElementById('Number').value = '';
document.getElementById('piceUpLocation').value = 'Select a pick-up location';
document.getElementById('dropOffLocation').value = 'Select a drop-off location';

  console.log('Booking details added:', bookingDetails);
});

let emailArray = [];
const emailInput = document.getElementById('emailInput');

function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isAllowedDomain(email) {
  const allowedDomains = ['gmail.com', 'yahoo.com'];
  const domain = email.split('@')[1];
  return allowedDomains.includes(domain);
}

function collectEmail() {
  const email = emailInput.value.trim();

  if (email !== '' && isValidEmail(email) && isAllowedDomain(email)) {
    emailArray.push(email);
    emailInput.value = ''; // Clear the input field
    console.log('Emails collected:', emailArray);
  } else {
    console.log('Invalid or unsupported email entered');
  }
}

document.querySelector('.searchButton1').addEventListener('click', function() {
  collectEmail();
});
