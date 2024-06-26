import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="/add" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
      </Routes>
    </Router>
  );
}

export default App;
