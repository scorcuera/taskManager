export const domRequest = {
    getInputValue(){
        let inputEl = document.querySelector(".main__form-input input").value;
        return inputEl;
    },
    getTasksEl(){
        let tasksEl = document.querySelector(".main__container");
        return tasksEl;
    }
}