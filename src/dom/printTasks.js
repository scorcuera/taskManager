export function printTasks(arrayTasks) {
    let templateHTML = "";
    arrayTasks.map(task => {
        templateHTML+= `
        <div>
            <h1>${task.name}</h1>
        </div>
        `
    })
    return templateHTML;
}