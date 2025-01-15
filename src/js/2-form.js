import storage from './storage';
import iziToast from 'izitoast';

const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  storage.save('feedback-form-state', JSON.stringify(formData));
});

const fillFormFields = () => {
  const savedData = storage.load('feedback-form-state');

  if (savedData) {
    const fields = Object.keys(savedData);
    fields.forEach(key => {
      formData[key] = savedData[key];
      feedbackForm.elements[key].value = savedData[key];
    });
  }
};

fillFormFields();

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const values = Object.values(formData);

  if (values.some(value => value === '')) {
    iziToast.error({
      message: 'Fill please all fields',
      position: 'topCenter',
    });

    return;
  }

  console.log(JSON.stringify(formData));
  storage.remove('feedback-form-state');
  formData.email = '';
  formData.message = '';
  feedbackForm.reset();
});
