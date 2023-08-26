import { models } from "../script/data.js";

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
    const selectedModel = models.find(model => model.Mark === clickedModel);

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
