import React, {useState} from 'react';
import OutlinedCard from "./TaskItem";
import moment from "moment";

function TaskList(props) {
    const [tasks, setTasks] = useState(
        [
            {
                id: "1",
                startDate: moment().add("days").format('DD-MM-yyyy'),
                title: 'Task 01',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, similique.',
                dueDate: moment().add(3, "days").format('DD-MM-yyyy'),
                status: 'New',
            },
            {
                id: "2",
                startDate: moment().add("days").format('DD-MM-yyyy'),
                title: 'Task 02',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, similique.',
                dueDate: moment().add(3, "days").format('DD-MM-yyyy'),
                status: 'New',
            },
            {
                id: "3",
                startDate: moment().add("days").format('DD-MM-yyyy'),
                title: 'Task 03',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, similique.',
                dueDate: moment().add(3, "days").format('DD-MM-yyyy'),
                status: 'New',
            },
            {
                id: "4",
                startDate: moment().add("days").format('DD-MM-yyyy'),
                title: 'Task 04',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, similique.',
                dueDate: moment().add(3, "days").format('DD-MM-yyyy'),
                status: 'New',
            },
                ]
    );

    const displayTasks = () => {
        return tasks.map((task) => {
            return <OutlinedCard
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