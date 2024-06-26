import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './TaskForm.css';

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`/api/tasks/${id}`)
        .then(response => {
          const task = response.data;
          setTitle(task.title);
          setDescription(task.description);
          setDueDate(task.dueDate);
        })
        .catch(error => console.error('Error fetching task:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, dueDate };

    const request = id 
      ? axios.put(`/api/tasks/${id}`, task)
      : axios.post('/api/tasks/', task);

    request
      .then(() => navigate('/'))
      .catch(error => console.error('Error saving task:', error));
  };

  return (
    <div className="task-form-container">
      <h1>{id ? 'Edit Task' : 'Add Task'}</h1>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
        </div>
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
