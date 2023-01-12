import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const taskService = {
    getTasks() {
        return apiClient.get("/tasks")
    },
    submitTask(newTask){
        return apiClient.post("/tasks", newTask)
    },
    deleteTask(id){
        return apiClient.delete("/tasks/" + id)
    },
    updateTask(id, updatedTask){
        return apiClient.patch("/tasks/" + id, updatedTask)
    }
}