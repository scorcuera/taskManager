import { domRequest } from "../dom/domRequest.js";
// import { taskHandler } from "../handlers/taskHandler.js";

let submitButtonEl = document.querySelector(".main__form-buttons--submit");

submitButtonEl.addEventListener("click", () => {
    let inputValue = domRequest.getInputValue();
    console.log(inputValue);
})
