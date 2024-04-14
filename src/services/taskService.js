const baseUrl = "http://localhost:3000";

const fetchApi = async (endpoint, options) => {
  const response = await fetch(baseUrl + endpoint, {
    ...options,
    credentials: "omit",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  const data = await response.json();
  return data;
};

export const taskService = {
  async getTasks() {
    return fetchApi("/tasks", { method: "GET"});
  },
  async getTask(id) {
    return fetchApi("/tasks/" + id, { method: "GET"});
  },
  async submitTask(newTask) {
    return fetchApi("/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
    });
  },
  async deleteTask(id) {
    return fetchApi("/tasks/" + id, { method: "DELETE" });
  },
  async updateTask(id, updatedTask) {
    return fetchApi("/tasks/" + id, {
      method: "PATCH",
      body: JSON.stringify(updatedTask),
    });
  },
};
