import React from "react";
import {Task} from "./model";
import KanbanCard from "./KanbanCard";

interface KanbanColumnProps{
    status:string
    tasks:Array<Task>
    onTaskManipulation: () => void;

}


export default function KanbanColumn(props: KanbanColumnProps) {

   const taskComponents = props.tasks.map(task => (

       <div key={task.id}>
         <KanbanCard  task={task} onTaskManipulation={props.onTaskManipulation}/>
       </div>

   ))
    return (
        <div className={"kanbanColumn"}>
            <h2>{props.status}</h2>
            {taskComponents}

        </div>
    )
}