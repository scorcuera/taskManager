import { taskHandler } from "../handlers/taskHandler.js";
import { printers } from "../dom/printers.js";

let editingTaskId = localStorage.getItem("taskId");
let taskContainer = document.querySelector("main");

async function loadTask(taskId) {
    let task = await taskHandler.loadTask(taskId);
    let taskHTML = printers.printEditingTask(task);
    taskContainer.innerHTML = taskHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    loadTask(editingTaskId);
})
