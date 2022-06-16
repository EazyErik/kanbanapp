import React, {useState} from "react";
import {Task} from "./model";
import KanbanColumn from "./KanbanColumn";

interface KanbanGalleryProps{
   tasks:Array<Task>
    updateTasks: () => void;

}

export default function KanbanGallery(props:KanbanGalleryProps) {

    const openTasks = props.tasks.filter(task => task.status === "OPEN");
    const tasksInProgress = props.tasks.filter(task => task.status === "IN_PROGRESS");
    const doneTasks = props.tasks.filter(task => task.status === "DONE");

    return (
        <div className={"kanbanGallery"}>
            <KanbanColumn status={"Open"} tasks={openTasks} onTaskManipulation={props.updateTasks}/>
            <KanbanColumn status={"In Progress"} tasks={tasksInProgress} onTaskManipulation={props.updateTasks}/>
            <KanbanColumn status={"Done"} tasks={doneTasks} onTaskManipulation={props.updateTasks}/>
        </div>
    )
}