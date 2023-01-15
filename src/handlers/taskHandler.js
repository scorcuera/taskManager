import { taskService } from "../services/taskService.js";

export const taskHandler = {
    addTask(newTask){
        if (!newTask) {
            return;
        }

        let task = {
            "name": newTask,
            "done": false,
            "id": "",
        }
        taskService.submitTask(task);
        return task;
    },
    loadTasks(){
        return taskService.getTasks();
    },
    loadTask(id) {
        return taskService.getTask(id);
    },
    deleteTask(id){
        return taskService.deleteTask(id);
    },
    updateTask(id, newTask){

    }
}