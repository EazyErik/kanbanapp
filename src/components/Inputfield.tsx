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
        <div>
            <input type="text" placeholder={"enter task"} value={task} onChange={event => setTask(event.target.value)}/>
            <input type="text" placeholder={"enter description"}value={description} onChange={event => setDescription(event.target.value)}/>
            <button type={"button"} onClick={create}>save</button>
        </div>

    )

}