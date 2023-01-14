export function printTasks(arrayTasks) {
    let templateHTML = "";
    arrayTasks.map(task => {
        templateHTML+= `
        <div class="main__container-task">
            <div class="main__container-task--name">
                <h1>${task.name}</h1>
            </div>
            <div class="main__container-task--icons">
                <a><i class="fa-regular fa-pen-to-square fa-2x" data-task="${task.id}"></i></a>
                <a><i class="fa-solid fa-trash fa-2x" data-task="${task.id}"></i></a>
            </div>
        </div>
        `
    })
    return templateHTML;
}