export const domRequest = {
    getInputValue(){
        let inputEl = document.querySelector(".main__form-input input").value;
        return inputEl;
    },
    getTasksElements(){
        let tasksEl = document.querySelector(".main__container");
        return tasksEl;
    },
    getTask(id) {
        let tasksElements = document.querySelectorAll(".main__container-task");
        let task = [...tasksElements].filter(task => {
            return task.dataset.task == id;
        })
        return task[0];
    },
}