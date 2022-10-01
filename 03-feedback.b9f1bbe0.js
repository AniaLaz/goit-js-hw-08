const e=document.querySelector("form");console.log(e),e.addEventListener("input",(function(e){e.preventDefault();const{email:t,message:o}=e.currentTarget.elements,n={email:t.value,message:o.value};console.log(n),localStorage.setItem("feedback-form-state",JSON.stringify(n))}));
//# sourceMappingURL=03-feedback.b9f1bbe0.js.map
