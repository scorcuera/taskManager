import { taskHandler } from "../handlers/taskHandler.js"

let loadButtonEl = document.querySelector(".main__form-buttons--load");

loadButtonEl.addEventListener("click", () => {
    let tasks = taskHandler.loadTasks();
    return tasks;
})