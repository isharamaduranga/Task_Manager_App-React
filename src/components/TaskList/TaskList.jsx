import React, {useState,useEffect} from 'react';
import OutlinedCard from "./TaskItem";
import axios from "axios";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        return () => {
            const apiURL = 'https://task-list-5a410-default-rtdb.firebaseio.com/tasks.json';
            axios.get(apiURL).then((res) => {
                if (res.data) {
                   setTasks(Object.values(res.data))
                }
            })
        };
    }, [tasks]);

    const displayTasks = () => {
        return tasks.map((task,index) => {
            return <OutlinedCard
                key={index}
                startDate={task.startDate}
                title={task.title}
                description={task.description}
                dueDate={task.dueDate}
                status={task.status}
            > </OutlinedCard>

        })
    }
    return (
        <div className="container-fluid d-flex flex-wrap gap-5 mt-4 ms-5">
            {displayTasks()}
        </div>
    );
}
export default TaskList;