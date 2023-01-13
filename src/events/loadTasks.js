import { taskHandler } from "../handlers/taskHandler.js";
import { printTasks } from "../dom/printTasks.js";
import { domRequest } from "../dom/domRequest.js";

let loadButtonEl = document.querySelector(".main__form-buttons--load");

loadButtonEl.addEventListener("click", async() => {
    let tasks = await taskHandler.loadTasks();
    let tasksHTML = printTasks(tasks);
    let tasksEl = domRequest.getTasksEl();
    tasksEl.innerHTML = tasksHTML;
})

// ¿Por qué este listener tiene que ser una función asíncrona?
// ¿Qué pasa si quitamos las keywords async y await?