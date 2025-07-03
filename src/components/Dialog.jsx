import TodoForm from './TodoForm';

const Dialog = ({ onClose, onSave, initialTask }) => {
  return (
    <div className="add-dialog appear">
      <div className="backdrop" onClick={onClose}></div>
      <div className="card add-task-card">
        <div className="close-btn" onClick={onClose}>
          <div className="material-icons">close</div>
        </div>
        <h1 className="title form-title">
          {initialTask ? 'Edit Task' : 'Add Task'}
        </h1>
        <TodoForm onSave={onSave} initialTask={initialTask} />
      </div>
    </div>
  );
};

export default Dialog;
