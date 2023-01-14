import { taskHandler } from "../handlers/taskHandler.js";
import { printTasks } from "../dom/printTasks.js";
import { domRequest } from "../dom/domRequest.js";

async function loadTasks() {
    let tasks = await taskHandler.loadTasks();
    let tasksHTML = printTasks(tasks);
    let tasksEl = domRequest.getTasksElements();
    tasksEl.innerHTML = tasksHTML;
}

let loadButtonEl = document.querySelector(".main__form-buttons--load");

window.addEventListener("load", () => {
    loadTasks();
});

loadButtonEl.addEventListener("click", () => {
   loadTasks();
})

// ¿Por qué este listener tiene que ser una función asíncrona?
// ¿Qué pasa si quitamos las keywords async y await?