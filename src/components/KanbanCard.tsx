import React from "react";
import {Task} from "./model";
import {deleteTask, demoteTask, promoteTask} from "../services/apiServices";

interface KanbanCardProps{
    task:Task;
    onTaskManipulation: () => void

}



export default function KanbanCard(props:KanbanCardProps) {
    const deleteCard = () => {
        deleteTask(props.task.id!)
            .then(() => props.onTaskManipulation())
    }

    const next = () => {
            promoteTask(props.task)
                .then(() => props.onTaskManipulation())

    }
    const prev = () => {
        demoteTask(props.task)
            .then(() => props.onTaskManipulation())
    }

    const edit = () => {
        //TODO
    }



    return (

        <div>
            <p>{props.task.task}</p>
            <p>{props.task.description}</p>

            {props.task.status === "OPEN" ? <button onClick={deleteCard}>Delete</button> :
                <button onClick={prev}>Back</button>
            }

            {props.task.status === "DONE" ? <button onClick={deleteCard}>Delete</button> :
                <button onClick={next}>Forward</button>}

            <button onClick={edit}>Edit</button>
        </div>

    )

}