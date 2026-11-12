
import TaskCard from "./TaskCard";

function TaskList(props) {
  return (
    <div className="task-list">
      <h2>Liste des tâches</h2>

      {props.tasks.length === 0 ? (
        <p>Aucune tâche disponible.</p>
      ) : (
        props.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      )}
    </div>
  );
}

export default TaskList;
