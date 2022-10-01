const formEl = document.querySelector("form");
console.log(formEl);


formEl.addEventListener('input',onFeedback)

function onFeedback(event) {
    event.preventDefault();
    // console.log(`${event.target.name}: ${event.target.value}`)
// const name = event.target.name;
// const value = event.target.value;
// const elements = `${event.target.name}: ${event.target.value}`; 
const {email,message} = event.currentTarget.elements;
const feedback = {
    email : email.value,
    message : message.value
}
console.log(feedback);
localStorage.setItem("feedback-form-state",JSON.stringify(feedback))
};

