import throttle from "lodash.throttle"
console.log(throttle);

const formEl = document.querySelector("form");
const emailEl = document.querySelector("input");
const textareaEl = document.querySelector("textarea");


formEl.addEventListener('input', onFeedback)
formEl.addEventListener('submit', onSubmit)


function onFeedback(event) {
    event.preventDefault();
       
    const {email,message} = event.currentTarget.elements;
    const feedback = 
    {
    email : email.value,
    message : message.value
    }
    setLocalStorage(feedback);
// localStorage.setItem("feedback-form-state",JSON.stringify(feedback))
}

function setLocalStorage(feedback) {
    localStorage.setItem("feedback-form-state",JSON.stringify(feedback))
  }

const result =  JSON.parse(localStorage.getItem("feedback-form-state"))

if (localStorage.getItem("feedback-form-state") !== null)
{
textareaEl.value = result.message;
emailEl.value = result.email;
}

function onSubmit(e){
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    textareaEl.value = " ";
    emailEl.value = " ";
    localStorage.removeItem("feedback-form-state");   
};





