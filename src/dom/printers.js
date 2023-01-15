export const printers = {
    printTasks(arrayTasks) {
        let templateHTML = "";
        arrayTasks.map(task => {
            templateHTML+= `
            <div class="main__container-task" data-task="${task.id}">
                <div class="main__container-task--name">
                    <h1>${task.name}</h1>
                </div>
                <div class="main__container-task--icons">
                    <a class="main__container-task--icons--edit"><i class="fa-regular fa-pen-to-square fa-2x" data-task="${task.id}"></i></a>
                    <a class="main__container-task--icons--delete"><i class="fa-solid fa-trash fa-2x" data-task="${task.id}"></i></a>
                </div>
            </div>
            `
        })
        return templateHTML;
    },
    printEditingTask() {
        
    }

}