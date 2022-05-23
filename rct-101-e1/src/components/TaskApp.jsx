import React from "react";
import TaskHeader from '../components/TaskHeader/TaskHeader.jsx'
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask.jsx";
import Tasks from "./Tasks/Tasks.jsx";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      {/* Add Task */}
      <AddTask />
      {/* Tasks */}
      <Tasks />
    </div>
  );
};

export default TaskApp;
