const form = document.querySelector('.js-feedback-form');
let formData = { email: '', message: '' };

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      form.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormFields();

const onFormFieldInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormSubmit = event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem('feedback-form-state');
  event.target.reset();
};

form.addEventListener('input', onFormFieldInput);
form.addEventListener('submit', onFormSubmit);
