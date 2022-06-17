import React, {useEffect, useState} from 'react';
import './App.css';
import Heading from "./components/Heading";
import Inputfield from "./components/Inputfield";
import KanbanGallery from "./components/KanbanGallery";

import {fetchAllTasks} from "./services/apiServices";
import {Task} from "./components/model";




export default function App() {

    const [tasks, setTasks] = useState<Array<Task>>([]);
    useEffect(() => {
        fetchAll()

    }, [])

    const fetchAll = () => {
        fetchAllTasks()
            .then(tasksFromDB => setTasks(tasksFromDB));
    }
    return (
        <div >



            <Inputfield  onTaskCreation={fetchAll}/>
            <KanbanGallery tasks={tasks} updateTasks={fetchAll}/>
        </div>

    );
}


