const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const taskService = {
    async getTasks() {
        let response = await apiClient.get("/tasks");
        let allTasks = response.data;
        return allTasks;
    },
    async getTask(id) {
        let response = await apiClient.get("/tasks/" + id);
        let task = response.data;
        return task;
    },
    async submitTask(newTask){
        await apiClient.post("/tasks", newTask)
    },
    async deleteTask(id){
        await apiClient.delete("/tasks/" + id)
    },
    async updateTask(id, updatedTask){
        await apiClient.patch("/tasks/" + id, updatedTask)
    }
}