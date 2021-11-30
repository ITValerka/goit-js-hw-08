import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};
textReturn();
form.addEventListener('submit', btnFormSubmit);
form.addEventListener('input', throttle(makeDataArray, 500));
textReturn(evt);
function makeDataArray(evt) {
  formData[evt.target.name] = evt.target.value;
  allInputData(evt);
  console.log(formData);
}
function allInputData(evt) {
  const inputData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, inputData);
}
function textReturn() {
  let savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    savedData = JSON.parse(savedData);
    Object.entries(savedData).forEach(([name, value]) => {
      formData[name] = value;
      form.elements[name].value = value;
    });
  }
}
function btnFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
