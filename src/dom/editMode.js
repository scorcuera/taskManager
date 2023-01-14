let editMode = false;

export function enableTaskEditMode(taskEl) {
    editMode = !editMode;
    if (editMode) {
        taskEl.classList.add("main__container-task--edit-mode");
    } else {
        taskEl.classList.remove("main__container-task--edit-mode");
    }
}