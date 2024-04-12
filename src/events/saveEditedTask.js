import { domRequest } from "../dom/domRequest.js";
import { taskHandler } from "../handlers/taskHandler.js"

async function saveTask(task, id) {
    let newTask = {
        name: task,
        id: id,
    }
    return taskHandler.updateTask(newTask);
}

function changePage(page) {
    window.location.href = page;
}

function enableSaveListener() {
    let saveButtonEl = document.querySelector(".main__container-task--form--buttons--save");
    let returnHomeButton = document.querySelector(".main__container-task--form--buttons--back");

    saveButtonEl.addEventListener("click", () => {
        let updatedTask = domRequest.getInputValue();
        let taskId = localStorage.getItem("taskId");
        saveTask(updatedTask, taskId);
        localStorage.clear();
        changePage("../../index.html");
    })

    returnHomeButton.addEventListener("click", () => {
        console.log("holi")
        changePage('../../index.html');
    })
}

setTimeout(enableSaveListener, 500);