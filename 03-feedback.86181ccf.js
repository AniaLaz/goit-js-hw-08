!function(){var e=document.querySelector("form");console.log(e),e.addEventListener("input",(function(e){e.preventDefault();var t=e.currentTarget.elements,a=t.email,n=t.message,o={email:a.value,message:n.value};console.log(o),localStorage.setItem("feedback-form-state",JSON.stringify(o))}))}();
//# sourceMappingURL=03-feedback.86181ccf.js.map
