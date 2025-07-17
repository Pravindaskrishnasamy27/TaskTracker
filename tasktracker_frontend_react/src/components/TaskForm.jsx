import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/tasks`,
        { title },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle('');
      onTaskAdded();
    } catch (err) {
      console.error('Error adding task', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default TaskForm;