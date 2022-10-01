const e=document.querySelector("form");console.log(e),e.addEventListener("input",(function(e){e.preventDefault();e.target.name,e.target.value;const t=`${e.target.name}: ${e.target.value}`;console.log({elements:t}),localStorage.setItem("feedback-form-state",JSON.stringify({elements:t}))}));
//# sourceMappingURL=03-feedback.7ad81c62.js.map
