import { taskHandler } from "../handlers/taskHandler.js";
import { domRequest } from "../dom/domRequest.js";
import { enableTaskEditMode } from "../dom/editMode.js";

function enableEditListener() {
    let editButtonElements = document.querySelectorAll(".main__container-task--icons .fa-pen-to-square");

    [...editButtonElements].map(button => {
        button.addEventListener("click", (event) => {
            let taskId = event.target.dataset.task;
            let task = domRequest.getTask(taskId);
            enableTaskEditMode(task);       
        })
    })
}

setTimeout(enableEditListener, 500);

// Fijaos que tenemos que darle un tiempo de demora (de 500ms) a esta función
// Esto es porque no podemos asignar un listener a un elemento del DOM que no existe
// Tenemos que esperar a que las tareas hayan cargado en la página para
// asignar un listener al botón de editar (que está dentro de la tarea)

// Tenemos que aplicar un listener a más de un elemento. ¿Existe otra manera
// de hacer esto? ¿quizás más limpia, eficiente?