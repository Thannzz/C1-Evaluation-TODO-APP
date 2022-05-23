import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task.jsx";


const data = [
  {
    "id": 1,
    "text": "Push up",
    "done": true,
    "count": 2
  },
  {
    "id": 2,
    "text": "Pull Up",
    "done": true,
    "count": 3
  },
  {
    "id": 3,
    "text": "Squats",
    "done": false,
    "count": 1
  },
  {
    "id": 4,
    "text": "Sprint",
    "done": false,
    "count": 5
  },
  {
    "id": 5,
    "text": "Stairs",
    "done": false,
    "count": 200
  }
]


const Tasks = () => {
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map((item)=>{
        return <Task key={item.id} {...item} />
        })}
        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
