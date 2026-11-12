
import { useState } from "react";

function TaskForm(props) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [dateLimite, setDateLimite] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nouvelleTache = {
      id: Date.now(),
      titre: titre,
      description: description,
      statut: "En attente",
      dateLimite: dateLimite
    };

    props.onAddTask(nouvelleTache);

    setTitre("");
    setDescription("");
    setDateLimite("");
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Ajouter une tâche</h2>

      <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="date"
        value={dateLimite}
        onChange={(e) => setDateLimite(e.target.value)}
        required
      />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskForm;
