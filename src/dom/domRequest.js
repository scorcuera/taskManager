export const domRequest = {
    getInputValue(){
        let inputEl = document.querySelector(".main__form-input input, .main__container--editing-task--form--input").value;
        return inputEl;
    },
    getTasksElements(){
        let tasksEl = document.querySelector(".main__container");
        return tasksEl;
    },
    getTaskElement(id) {
        let tasksElements = document.querySelectorAll(".main__container-task");
        let task = [...tasksElements].filter(task => {
            return task.dataset.task == id;
        })
        return task[0];
    },
    getTaskNameEl(id) {
        let tasksElements = document.querySelectorAll(".main__container-task");
        let task = [...tasksElements].filter(task => {
            return task.dataset.task == id;
        })
        return task[0].querySelector(".main__container-task--name");
    },
    getTaskEditIconEl(id) {
        let tasksElements = document.querySelectorAll(".main__container-task");
        let task = [...tasksElements].filter(task => {
            return task.dataset.task == id;
        })
        return task[0].querySelector(".main__container-task--icons--edit");
    }
}