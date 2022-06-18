import React, {FormEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getKanbanById, putUpdatedKanban,} from "../services/apiServices";
import {KanbanStatus, Task} from "./model";
import {AxiosResponse} from "axios";


export default function EditForm() {

    const [editTask,setEditTask] = useState("")
    const[editDescription,setEditDescription] = useState("")
    const[status,setStatus] = useState("OPEN")


    const {id} = useParams()
    const nav = useNavigate()

    useEffect(() => {

       getKanbanById(id!)
           .then((response:AxiosResponse<Task>) => {
               setEditTask(response.data.task)
               setEditDescription(response.data.description)
               setStatus(response.data.status)

           })


    },[id])

    const updateKanban = (ev:FormEvent) => {
        ev.preventDefault()

        putUpdatedKanban({
            task:editTask,
            description:editDescription,
            id:id,
            status:KanbanStatus.OPEN,
    })
            .then(() => nav("/"))



    }


    return (
        <form className={"editForm"} onSubmit={updateKanban}>

            <input className="form-control form-control-lg" type="text"placeholder={"Edit task"} value={editTask}
                   onChange={event => setEditTask(event.target.value)}
                   aria-label=".form-control-lg example"/>

            <input className="form-control form-control-lg" type="text"placeholder={"Edit description"} value={editDescription}
                   onChange={event => setEditDescription(event.target.value)}
                   aria-label=".form-control-lg example"/>

            <div className="d-grid gap-2">
            <button type={"submit"}  className="btn btn-dark" >Save</button>
             </div>
        </form>
    )
}