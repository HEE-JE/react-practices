import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import styles from "./assets/scss/TaskList.scss";

export default function TaskList({ tasks }) {
  return (
    <div className="TaskList">
      <ul>
        {tasks.map((task) => (
          <Task key={task.no} no={task.no} name={task.name} done={task.done} />
        ))}
      </ul>
      <input
        type="text"
        className={styles.TaskList__add_task}
        placeholder="태스크 추가"
      />
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes)),
};
