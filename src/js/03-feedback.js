const formEl = document.querySelector("form");
console.log(formEl);


formEl.addEventListener('input',onFeedback)

function onFeedback(event) {
    event.preventDefault();
    // console.log(`${event.target.name}: ${event.target.value}`)
const name = event.target.name;
const value = event.target.value;
const elements = `${event.target.name}: ${event.target.value}`; 

console.log({elements});
localStorage.setItem("feedback-form-state",JSON.stringify({elements}
    ))

};

