import React, {useState} from "react";
import {createTask} from "../services/apiServices";


interface InputfieldProps {
    onTaskCreation: () => void
}



export default function Inputfield(props:InputfieldProps) {

    const[task,setTask] = useState<string>("");
    const[description,setDescription] = useState<string>("")

    const create =() => {
            createTask({
                task:task,
                description:description,
                status: "OPEN",

            })
            .then(() => {
                setTask("");
                setDescription("");
                props.onTaskCreation();
            })


    }

    return (
        <div className={"inputField"}>




            <input className="form-control form-control-lg" type="text"placeholder={"enter task"} value={task} onChange={event => setTask(event.target.value)}
                   aria-label=".form-control-lg example"/>
            <input className="form-control form-control-lg" type="text" placeholder={"enter description"}value={description} onChange={event => setDescription(event.target.value)}
                   aria-label=".form-control-lg example"/>




            <div className="d-grid gap-2">

                <button onClick={create} className="btn btn-dark" type="button">Save</button>
            </div>
        </div>

    )

}