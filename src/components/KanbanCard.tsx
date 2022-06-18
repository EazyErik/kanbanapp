import React from "react";
import {Task} from "./model";
import {deleteTask, demoteTask, promoteTask} from "../services/apiServices";
import {useNavigate} from "react-router-dom";


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

   const nav =useNavigate()



    return (


    <div className="card">

            <div className="card-body">
                <h5 className="card-title"><p>{props.task.task}</p>
                         <p>{props.task.description}</p></h5>

                {props.task.status === "OPEN" ? <button onClick={deleteCard} type="button" className="btn btn-dark" data-bs-toggle="button">Delete</button> :
                    <button onClick={prev} type="button" className="btn btn-dark" data-bs-toggle="button">Back</button>
                }

                {props.task.status === "DONE" ? <button onClick={deleteCard} type="button" className="btn btn-dark" data-bs-toggle="button">Delete</button> :
                    <button onClick={next} type="button" className="btn btn-dark" data-bs-toggle="button" >Forward</button>}



                <button onClick={() => nav(`edit/${props.task.id}`)} type="button" className="btn btn-dark" data-bs-toggle="button">Edit</button>


            </div>
    </div>

    )

}