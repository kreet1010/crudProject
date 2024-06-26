import React from 'react';
import { Link } from 'react-router-dom';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task._id} className="task-card">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
          <div className="task-actions">
            <Link to={`/task/${task._id}`} className="view-button">View</Link>
            <Link to={`/edit/${task._id}`} className="edit-button">Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
