import { domRequest } from "../dom/domRequest.js";
import { taskHandler } from "../handlers/taskHandler.js";

let submitButtonEl = document.querySelector(".main__form-buttons--submit");

submitButtonEl.addEventListener("click", async () => {
    let inputValue = domRequest.getInputValue();
    console.log(inputValue);
    taskHandler.addTask(inputValue);
})
