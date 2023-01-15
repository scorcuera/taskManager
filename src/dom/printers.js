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
    printEditingTask(task) {
        let templateHTML = `
        <div class="main__container--editing-task" data-task=${task.id}>
            <h1 class="main__container--editing-task--name">Editing ${task.name} </h1>
            <div class="main__container--editing-task--form">
                <label>Introduce a new name:</label>
                <input type="text" placeholder="${task.name}"></input>
                <div class="main__container--editing-task--form--buttons">
                    <a class="main__container-task--form--buttons--save" data-task="${task.id}">Save</a>
                    <a class="main__container-task--form--buttons--back">Back</a>
                </div>
            </div>
        </div>
        `;
        return templateHTML;
    }

}