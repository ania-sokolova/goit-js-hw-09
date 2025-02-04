
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const formData = { email: "", message: "" };

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";

  const emailInput = form.querySelector("input[name='email']");
  const messageTextarea = form.querySelector("textarea[name='message']");

  if (emailInput) emailInput.value = formData.email;
  if (messageTextarea) messageTextarea.value = formData.message;
  
//   form.elements.email.value = formData.email;
//   form.elements.message.value = formData.message;
}


form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });
  
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
  
    if (!formData.email || !formData.message) {
      alert("Fill please all fields");
      return;
    }
    console.log("Form submitted with data:", formData);

    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = "";
    formData.message = "";
  });

  

 