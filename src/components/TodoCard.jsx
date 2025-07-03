const TodoCard = ({ task, onDelete, onEdit }) => {
  return (
    <div className="todo-card card">
      <div className="card-title title">{task.title}</div>
      <div className="card-status flex">
        <div className="badge">{task.status}</div>
      </div>
      <div className="card-btns">
        <button className="btn outline" onClick={() => onDelete(task.id)}>Delete</button>
        <button className="btn primary" onClick={onEdit}>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
