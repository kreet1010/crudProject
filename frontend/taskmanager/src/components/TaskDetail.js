import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './TaskDetail.css';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`/api/tasks/${id}`)
      .then(response => setTask(response.data))
      .catch(error => console.error('Error fetching task:', error));
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div className="task-detail-container">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <div className="task-detail-actions">
        <Link to={`/edit/${task._id}`} className="edit-button">Edit</Link>
        <Link to="/" className="back-button">Back</Link>
      </div>
    </div>
  );
};

export default TaskDetail;
