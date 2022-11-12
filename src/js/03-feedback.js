import throttle from "lodash.throttle";

const refs = {
    feedbackForm: document.querySelector('form.feedback-form')
}
const feedbackFormDataObj = {};
const STORAGE_FORM_DATA = 'feedback-form-state';

if (localStorage.getItem(STORAGE_FORM_DATA) !== null) {
    const dataFromStorage = JSON.parse(localStorage.getItem(STORAGE_FORM_DATA));
    for (const key in dataFromStorage) {
        feedbackFormDataObj[key] = dataFromStorage[key];
        refs.feedbackForm[key].value = dataFromStorage[key];
    }
}

refs.feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormInput(e) {
    feedbackFormDataObj[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_FORM_DATA, JSON.stringify(feedbackFormDataObj));
}

function onFeedbackFormSubmit(e) {
    e.preventDefault();
    console.log(feedbackFormDataObj);
    e.target.reset();
    for (const key in feedbackFormDataObj) {
        feedbackFormDataObj[key] = '';
    }
    localStorage.removeItem(STORAGE_FORM_DATA);
}