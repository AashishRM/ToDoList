import { useState } from 'react';
import TodoCard from './components/TodoCard';
import Dialog from './components/Dialog';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'task 1', status: 'Todo' },
    { id: 2, title: 'task 2', status: 'Todo' },
    { id: 3, title: 'task 3', status: 'In Progress' },
  ]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const openDialog = (task = null) => {
    setSelectedTask(task);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedTask(null);
    setDialogOpen(false);
  };

  const handleSave = (task) => {
    if (selectedTask) {
      setTasks((prev) =>
        prev.map((t) => (t.id === selectedTask.id ? { ...t, ...task } : t))
      );
    } else {
      const newTask = {
        id: Date.now(),
        ...task,
      };
      setTasks((prev) => [...prev, newTask]);
    }
    closeDialog();
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <section>
      <div className="title-area flex justify-between">
        <h1>Todo List</h1>
        <button className="add-task-btn btn aspect-square primary" onClick={() => openDialog()}>
          <b className="material-icons">Add</b>
        </button>
      </div>

      <div className="todo-area flex wrap">
        {tasks.map((task) => (
          <TodoCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={() => openDialog(task)}
          />
        ))}
      </div>

      {dialogOpen && (
        <Dialog
          onClose={closeDialog}
          onSave={handleSave}
          initialTask={selectedTask}
        />
      )}
    </section>
  );
};

export default App;
