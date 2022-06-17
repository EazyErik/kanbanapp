import axios, {AxiosResponse} from "axios";
import {Task} from "../components/model";

export function fetchAllTasks() {
    return axios.get("http://localhost:8080/api/kanban")
        .then(response => response.data);

}

export function createTask(task:Task) {
    return   axios.post("http://localhost:8080/api/kanban",task)
}

export function deleteTask(taskId:string) {
    return axios.delete(`http://localhost:8080/api/kanban/${taskId}`)
}

export function promoteTask(task:Task) {
    return axios.put(`http://localhost:8080/api/kanban/next`,task)
}
export function demoteTask(task:Task) {
    return axios.put(`http://localhost:8080/api/kanban/prev`,task)
}

export function getKanbanById(id:string) {
    return axios.get(`http://localhost:8080/api/kanban/${id}`)


}

export function putUpdatedKanban(task:Task) {
    return axios.put(`http://localhost:8080/api/kanban/`,task)
        .then(response => response.data)
}