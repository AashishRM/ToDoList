import { useState, useEffect } from 'react';

const TodoForm = ({ onSave, initialTask }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Todo');

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setStatus(initialTask.status);
    }
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, status });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <div className="form-btns flex">
        <button className="btn primary confirm-btn" type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
