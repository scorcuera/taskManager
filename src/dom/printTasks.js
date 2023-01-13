export function printTasks(arrayTasks) {
    let templateHTML = "";
    arrayTasks.map(task => {
        templateHTML+= `
        <div class="main__container-task">
            <div class="main__container-task--name">
                <h1>${task.name}</h1>
            </div>
            <div class="main__container-task--icons">
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        `
    })
    return templateHTML;
}