import React, {useState,useEffect} from 'react';
import OutlinedCard from "./TaskItem";
import axios from "axios";

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const[taskUpdated,setTaskUpdated]=useState(false);

    useEffect(() => {
        return () => {
            const apiURL = 'https://task-list-5a410-default-rtdb.firebaseio.com/tasks.json';
            axios.get(apiURL).then((res) => {
                if (res.data) {
                   setTasks(Object.values(res.data))
                }
            })
        };
    }, [taskUpdated]);

    const handleComplete = (taskID) =>{
        console.log(taskID)
        const apiURL = `https://task-list-5a410-default-rtdb.firebaseio.com/tasks/${taskID}.json`;

        axios.patch(apiURL,{status:'Completed'}).then((res)=>{
            setTaskUpdated(!taskUpdated)
        })
    }

    const handleDelete = (taskID) =>{
        console.log(taskID)
        const apiURL = `https://task-list-5a410-default-rtdb.firebaseio.com/tasks/${taskID}.json`;

        axios.delete(apiURL).then((res)=>{
            setTaskUpdated(!taskUpdated)
        })
    }

    const displayTasks = () => {
        return tasks.map((task,index) => {
            return <OutlinedCard
                key={index}
                taskInfo={task}
                onComplete={handleComplete}
                onDelete={handleDelete}
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