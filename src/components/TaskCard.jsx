
function TaskCard(props) {
  return (
    <div className="task-card">
      <h3>{props.task.titre}</h3>

      <p>{props.task.description}</p>

      <p>Statut : {props.task.statut}</p>

      <p>Date limite : {props.task.dateLimite}</p>
    </div>
  );
}

export default TaskCard;
