

let formData = {
    email: "",
    message: ""
};

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

populateForm();

form.addEventListener("input", handlerInput);
form.addEventListener("submit", handlerSubmit);


function handlerInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        form.elements.email.value = formData.email || "";
        form.elements.message.value = formData.message || "";
    }
}

function handlerSubmit(event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
}

 