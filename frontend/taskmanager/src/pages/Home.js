import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks/')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className="home-container">
      <h1>Task Manager</h1>
      <Link to="/add" className="add-task-button">Add New Task</Link>
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
    </div>
  );
};

export default Home;
