function enableDeleteListener() {
    let deleteButtonEl = document.querySelectorAll(".main__container-task--icons .fa-trash");

    [...deleteButtonEl].map(button => {
        button.addEventListener("click", (event) => {
            console.log(event.target.dataset.task);
        })
    })
}

setTimeout(enableDeleteListener, 500);

// Fijaos que tenemos que darle un tiempo de demora (de 500ms) a esta función
// Esto es porque no podemos asignar un listener a un elemento del DOM que no existe
// Tenemos que esperar a que las tareas hayan cargado en la página para
// asignar un listener al botón de eliminar (que está dentro de la tarea)

// Tenemos que aplicar un listener a más de un element. ¿Existe otra manera
// de hacer esto? ¿quizás más limpia, eficiente?







