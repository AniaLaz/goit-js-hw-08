!function(){var e=document.querySelector("form");console.log(e),e.addEventListener("input",(function(e){e.preventDefault();e.target.name,e.target.value;var t="".concat(e.target.name,": ").concat(e.target.value);console.log({elements:t}),localStorage.setItem("feedback-form-state",JSON.stringify({elements:t}))}))}();
//# sourceMappingURL=03-feedback.8d77e672.js.map
