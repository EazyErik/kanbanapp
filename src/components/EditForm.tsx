import {FormEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getKanbanById, putUpdatedKanban,} from "../services/apiServices";
import {Task} from "./model";
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
            status:status
    })
            .then(() => nav("/"))



    }


    return (
        <form className={"editForm"} onSubmit={updateKanban}>

            <input type="text" placeholder={"Edit task"} value={editTask}
                   onChange={event => setEditTask(event.target.value)}/>

            <br/>
            <br/>
            <input type="text" placeholder={"Edit description"} value={editDescription}
                   onChange={event => setEditDescription(event.target.value)}/>
             <br/>
            <button type={"submit"}>save</button>

        </form>
    )
}